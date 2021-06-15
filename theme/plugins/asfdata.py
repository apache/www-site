#!/usr/bin/python -B
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
#
# asfdata.py -- Pelican plugin that processes a yaml specification of data into a setting directory
#

import os.path
import sys
import subprocess
import datetime
import random
import json
import re
import traceback
import operator
import pprint

import requests
import yaml
import ezt

import xml.dom.minidom

import pelican.plugins.signals
import pelican.utils

from bs4 import BeautifulSoup

ASF_DATA = {
    'metadata': { },
    'debug': False,
}

FIXUP_HTML = [
    (re.compile(r'&lt;'), '<'),
    (re.compile(r'&gt;'), '>'),
]


# read the asfdata configuration in order to get data load and transformation instructions.
def read_config(config_yaml):
    with pelican.utils.pelican_open(config_yaml) as text:
        config_data = yaml.safe_load(text)
        pp = pprint.PrettyPrinter(indent=2)
        pp.pprint(config_data)
    return config_data


# load yaml and json data sources.
def load_data(path, content):
    parts = path.split('/')
    extension = os.path.splitext(parts[-1])[1]  # split off ext, keep ext
    print(f'Loading {extension} from {path}')
    if extension == '.json':
        load = json.loads(content)
    elif extension == '.yaml':
        load = yaml.safe_load(content)
    else:
        load = { }
    return load


# load data source from a url.
def url_data(url):
    return load_data( url, requests.get(url).text)


# load data source from a file.
def file_data(rel_path):
    return load_data( rel_path, open(rel_path, 'r').read())


# remove parts of a data source we don't want ro access
def remove_part(reference, part):
    for refs in reference:
        if refs == part:
            del reference[part]
            return
        elif isinstance(reference[refs], dict):
            remove_part(reference[refs], part)


# trim out parts of a data source that don't match part = True
def where_parts(reference, part):
    # currently only works on True parts
    # if we trim as we go we invalidate the iterator. Instead create a deletion list.
    filtered = [ ]
    # first find the list that needs to be trimmed.
    for refs in reference:
        if not reference[refs][part]:
            filtered.append(refs)
    # remove the parts to be trimmed.
    for refs in filtered:
        del reference[refs]


# perform alphabetation. HTTP Server is special and is put before 'A'
def alpha_part(reference, part):
    for refs in reference:
        name = reference[refs][part]
        if name == 'HTTP Server':
            # when sorting by letter HTTPD Server is wanted first
            letter = ' '
        else:
            letter = name[0].upper()
        reference[refs]['letter'] = letter


# rotate a roster list singleton into an name and availid
def asfid_part(reference, part):
    for refs in reference:
        fix = reference[refs][part]
        for k in fix:
            availid = k
            name = fix[k]['name']
        reference[refs][part] = name
        reference[refs]['availid'] = availid


# add logo attribute with HEAD check for existence. If nonexistent use default.
def add_logo(reference, part):
    # split between logo pattern and default.
    parts = part.split(',')
    for item in reference:
        # the logo pattern includes a place to insert the project/podling key
        logo = (parts[0].format(item.key_id))
        # HEAD request
        response = requests.head('https://www.apache.org/' + logo)
        if response.status_code != 200:
            # logo not found - use the default logo
            logo = parts[1]
        # save the logo path as an attribute
        setattr(item, 'logo', logo)
    return reference


# convert a dictionary into a sequence (list)
def sequence_dict(seq, reference):
    sequence = [ ]
    for refs in reference:
        # converting dicts into objects with attrributes. Ignore non-dict content.
        if isinstance(reference[refs], dict):
            # put the key of the dict  into the dictionary
            reference[refs]['key_id'] = refs
            for item in reference[refs]:
                if isinstance(reference[refs][item], bool):
                    # fixup any boolean values to be ezt.boolean - essentially True -> "yes"
                    reference[refs][item] = ezt.boolean(reference[refs][item])
            # convert the dict into an object with attributes and append to the sequence
            sequence.append(type(seq, (), reference[refs]))
    return sequence


# convert a list into a sequence. convert dictionaries items into objects.
def sequence_list(seq, reference):
    sequence = [ ]
    for refs in reference:
        # only convert dicts into objects
        if isinstance(refs, dict):
            for item in refs:
                if isinstance(refs[item], bool):
                    # fixup any boolean values to be ezt.boolean - essentially True -> "yes"
                    refs[item] = ezt.boolean(refs[item])
                elif isinstance(refs[item], list):
                    # recursively convert sub-lists
                    refs[item] = sequence_list(item, refs[item])
            # convert the dict into an object with attributes and append to the sequence
            sequence.append(type(f'{seq}', (), refs))
    return sequence


# split a list into equal sized columns. Adds letter breaks in the alphabetical sequence.
def split_list(metadata, seq, reference, split):
    # copy sequence
    sequence = list(reference)
    # sort the copy
    sequence.sort(key=lambda x: (x.letter, x.display_name))
    # size of list
    size = len(sequence)
    # size of columns
    percol = int((size + 26 + split - 1) / split)
    # positions
    start = nseq = nrow = 0
    letter = ' '
    # create each column
    for column in range(split):
        subsequence = [ ]
        end = min(size + 26, start + percol)
        while nrow < end:
            if letter < sequence[nseq].letter:
                # new letter - add a letter break into the column. If a letter has no content it is skipped
                letter = sequence[nseq].letter
                subsequence.append(type(seq, (), { 'letter': letter, 'display_name': letter}))
            else:
                # add the project into the sequence
                subsequence.append(sequence[nseq])
                nseq = nseq + 1
            nrow = nrow + 1
        # save the column sequence in the metadata
        metadata[f'{seq}_{column}'] = subsequence
        start = end
    if nseq < size:
        print(f'WARNING: {seq} not all of sequence consumed: short {size-nseq} projects')


# process sequencing transformations to the data source
def process_sequence(metadata, seq, sequence, load, debug):
    reference = load
    # has been converted to a sequence
    is_sequence = False
    # has been converted to a dictionary - won't be made into a sequence
    is_dictionary = False
    # save metadata at the end
    save_metadata = True

    # description
    if 'description' in sequence:
        print(f'{seq}: {sequence["description"]}')

    # select sub dictionary
    if 'path' in sequence:
        print(f'path: {sequence["path"]}')
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]

    # filter dictionary by attribute value. if filter is false discard
    if 'where' in sequence:
        print(f'where: {sequence["where"]}')
        where_parts(reference, sequence['where'])

    # remove irrelevant keys
    if 'trim' in sequence:
        print(f'trim: {sequence["trim"]}')
        parts = sequence['trim'].split(',')
        for part in parts:
            remove_part(reference, part)

    # transform roster and chair patterns
    if 'asfid' in sequence:
        print(f'asfid: {sequence["asfid"]}')
        asfid_part(reference, sequence['asfid'])

    # add first letter ofr alphabetic categories
    if 'alpha' in sequence:
        print(f'alpha: {sequence["alpha"]}')
        alpha_part(reference, sequence['alpha'])

    # this dictionary is derived from sub-dictionaries
    if 'dictionary' in sequence:
        print(f'dictionary: {sequence["dictionary"]}')
        reference = { }
        paths = sequence['dictionary'].split(',')
        # create a dictionary from the keys in one or more sub-dictionaries
        for path in paths:
            for key in load[path]:
                reference[key] = load[path][key]
        # dictionary result, do not sequence
        is_dictionary = True

    # this sequence is derived from another sequence
    if 'sequence' in sequence:
        print(f'sequence: {sequence["sequence"]}')
        reference = metadata[sequence['sequence']]
        # sequences derived from prior sequences do not need to be converted to a sequence
        is_sequence = True

    # this sequence is a random sample of another sequence
    if 'random' in sequence:
        print(f'random: {sequence["random"]}')
        if is_sequence:
            reference = random.sample(reference, sequence['random'])
        else:
            print(f'{seq} - random requires an existing sequence to sample')

    # for a project or podling see if the logo exists w/HEAD and set the relative path.
    if 'logo' in sequence:
        print(f'logo: {sequence["logo"]}')
        if is_sequence:
            # determine the project or podling logo
            reference = add_logo(reference, sequence['logo'])
            if seq == 'featured_pods':
                # for podlings strip "Apache" from the beginning and "(incubating)" from the end.
                # this is Sally's request
                for item in reference:
                    setattr(item, 'name', ' '.join(item.name.split(' ')[1:-1]))
        else:
            print(f'{seq} - logo requires an existing sequence')

    # this sequence is a sorted list divided into multiple columns
    if 'split' in sequence:
        print(f'split: {sequence["split"]}')
        if is_sequence:
            # create a sequence for each column
            split_list(metadata, seq, reference, sequence['split'])
            # created column sequences are already saved to metadata so do not do so later
            save_metadata = False
        else:
            print(f'{seq} - split requires an existing sequence to split')

    # if this not already a sequence or dictionary then convert to a sequence
    if not is_sequence and not is_dictionary:
        # convert the dictionary/list to a sequence of objects
        print(f'{seq}: create sequence')
        if isinstance(reference, dict):
            reference = sequence_dict(seq, reference)
        elif isinstance(reference, list):
            reference = sequence_list(seq, reference)
        else:
            print(f'{seq}: cannot proceed invalid type, must be dict or list')

    # save sequence in metadata
    if save_metadata:
        metadata[seq] = reference


# create metadata sequences and dictionaries from a data load
def process_load(metadata, value, load, debug):
    for seq in value:
        if seq not in ('url', 'file'):
            # one or more sequences
            sequence = value[seq]
            process_sequence(metadata, seq, sequence, load, debug)


# convert bytes
def bytesto(bytes, to, bsize=1024):
    a = {'k': 1, 'm': 2, 'g': 3, 't': 4, 'p': 5, 'e': 6}
    r = float(bytes)
    return r / (bsize ** a[to])


# open a subprocess
def os_popen(list):
    return subprocess.Popen(list, stdout=subprocess.PIPE, universal_newlines=True)


# retrieve the release distributions for a project from svn
def process_distributions(project, src, sort_revision):
    print(f'releases: {project}')

    # current date information will help process svn ls results
    gatherDate = datetime.datetime.utcnow()
    gatherYear = gatherDate.year

    # information to accumulate
    signatures = {}
    checksums = {}
    fsizes = {}
    dtms = {}
    versions = {}
    revisions = {}

    # read the output from svn ls -Rv
    url = f'https://dist.apache.org/repos/dist/release/{project}'
    print(f'releases: {url}')
    with os_popen(['svn', 'ls', '-Rv', url]) as s:
        for line in s.stdout:
            line = line.strip()
            listing = line.split(' ')
            if line[-1:] == '/':
                # skip directories
                continue
            if sort_revision:
                revision = int(listing[0])
            else:
                revision = 0
            # user = listing[1]
            if listing[-6] == '':
                # dtm in the past year
                dtm1 = datetime.datetime.strptime(" ".join(listing[-4:-2]) + " " + str(gatherYear), "%b %d %Y")
                if dtm1 > gatherDate:
                    dtm1 = datetime.datetime.strptime(" ".join(listing[-4:-2]) + " " + str(gatherYear - 1), "%b %d %Y")
                fsize = listing[-5]
            else:
                # dtm older than one year
                dtm1 = datetime.datetime.strptime(" ".join(listing[-5:-1]), "%b %d %Y")
                fsize = listing[-6]
            # date is close enough
            dtm = dtm1.strftime("%m/%d/%Y")
            # covert to number of MB
            if float(fsize) > 524288:
                fsize = ('%.2f' % bytesto(fsize, 'm')) + ' MB'
            else:
                fsize = ('%.2f' % bytesto(fsize, 'k')) + ' KB'
            # line is path
            line = listing[-1]
            # fields are parts of the path
            fields = line.split('/')
            # filename os the final part
            filename = fields[-1]
            # parts includes the whole path
            parts = line.split('.')
            # use the path as a key for each release
            release = line
            if filename:
                if re.search('KEYS(\.txt)?$', filename):
                    # save the KEYS file url
                    keys = f'https://downloads.apache.org/{project}/{line}'
                elif re.search('\.(asc|sig)$', filename, flags=re.IGNORECASE):
                    # we key a release off of a signature. remove the extension
                    release = '.'.join(parts[:-1])
                    signatures[release] = filename
                    # the path to the signature is used as the version
                    versions[release] = '/'.join(fields[:-1])
                    # we use the revision for sorting
                    revisions[release] = revision
                    if re.search(src, filename):
                        # put source distributions in the front (it is a reverse sort)
                        revisions[release] = revision + 100000
                elif re.search('\.(sha512|sha1|sha256|sha|md5|mds)$', filename, flags=re.IGNORECASE):
                    # some projects checksum their signatures
                    part0 = ".".join(line.split('.')[-2:-1])
                    if part0 == "asc":
                        # skip files that are hashes of signatures
                        continue
                    # strip the extension to get the release name
                    release = '.'.join(parts[:-1])
                    checksums[release] = filename
                else:
                    # for the released file save the size and dtm
                    fsizes[release] = fsize
                    dtms[release] = dtm

    # separate versions.
    each_version = {}
    for rel in signatures:
        version = versions[rel]
        if version not in each_version:
            each_version[version] = []
        release = rel[len(version) + 1:]
        try:
            each_version[version].append( Distribution(release=release,
                                                       revision=revisions[rel],
                                                       signature=signatures[rel],
                                                       checksum=checksums[rel],
                                                       dtm=dtms[rel],
                                                       fsize=fsizes[rel]))
        except Exception:
            traceback.print_exc()

    distributions = []
    for version in each_version:
        each_version[version].sort(key=lambda x: (-x.revision, x.release))
        distributions.append( Version(version=version,
                                      name=' '.join(version.split('/')),
                                      revision=each_version[version][0].revision,
                                      release=each_version[version]))
    distributions.sort(key=lambda x: (-x.revision, x.version))
    return keys, distributions


# get xml text node
def get_node_text(nodelist):
    """http://www.python.org/doc/2.5.2/lib/minidom-example.txt"""
    rc = ''
    for node in nodelist:
        if node.nodeType == node.TEXT_NODE:
            rc = rc + node.data
    return rc


# get xml element's text nodes.
def get_element_text(entry, child):
    elements = entry.getElementsByTagName(child)
    return get_node_text(elements[0].childNodes)


# retrieve truncate words in html.
def truncate_words(text, words):
    content_text = ' '.join(text.split(' ')[:words]) + "..."
    for regex, replace in FIXUP_HTML:
        m = regex.search(content_text)
        if m:
            content_text = re.sub(regex, replace, content_text)
    tree_soup = BeautifulSoup(content_text, 'html.parser')
    content_text = tree_soup.prettify()
    return content_text


# retrieve blog posts from an Atom feed.
def process_blog(feed, count, words, debug):
    print(f'blog feed: {feed}')
    content = requests.get(feed).text
    dom = xml.dom.minidom.parseString(content)
    # dive into the dom to get 'entry' elements
    entries = dom.getElementsByTagName('entry')
    # we only want count many from the beginning
    entries = entries[:count]
    v = [ ]
    for entry in entries:
        if debug:
            print(entry.tagName)
        # we may want content
        content_text = ''
        if words:
            content_text = truncate_words(get_element_text(entry, 'content'), words)
        # we want the title and href
        v.append(
            {
                'id': get_element_text(entry, 'id'),
                'title': get_element_text(entry, 'title'),
                'content': content_text
            }
        )
    if debug:
        for s in v:
            print(s)

    return [ Blog(href=s['id'],
                  title=s['title'],
                  content=s['content'])
             for s in v]


# to be updated from hidden location. (Need to discuss local.)
def twitter_auth():
    authtokens = os.path.join(os.path.expanduser('~'), '.authtokens')
    try:
        for line in open(authtokens).readlines():
            if line.startswith('twitter:'):
                token = line.strip().split(':')[1]
                # do not print or display token as it is a secret
                return token
    except Exception:
        traceback.print_exc()
    return None


# retrieve from twitter
def connect_to_endpoint(url, headers):
    response = requests.request('GET', url, headers=headers)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()


# retrieve the last count recent tweets from the handle.
def process_twitter(handle, count):
    print(f'-----\ntwitter feed: {handle}')
    bearer_token = twitter_auth()
    if not bearer_token:
        return sequence_list('twitter',{
            'text': 'To retrieve tweets supply a valid twitter bearer token in ~/.authtokens'
        })
    # do not print or display bearer_token as it is a secret
    query = f'from:{handle}'
    tweet_fields = 'tweet.fields=author_id'
    url = f'https://api.twitter.com/2/tweets/search/recent?query={query}&{tweet_fields}'
    headers = {'Authorization': f'Bearer {bearer_token}'}
    load = connect_to_endpoint(url, headers)
    reference = sequence_list('twitter', load['data'])
    if load['meta']['result_count'] < count:
        v = reference
    else:
        v = reference[:count]
    return v


# create sequence of sequences of ASF ECCN data.
def process_eccn(fname):
    print('-----\nECCN:', fname)
    j = yaml.safe_load(open(fname))

    # versions have zero or more controlled sources
    def make_sources(sources):
        return [ Source(href=s['href'],
                        manufacturer=s['manufacturer'],
                        why=s['why'])
                 for s in sources]

    # products have one or more versions
    def make_versions(vsns):
        return [ Version(version=v['version'],
                         eccn=v['eccn'],
                         source=make_sources(v.get('source', [ ])),
                         )
                 for v in sorted(vsns,
                                 key=operator.itemgetter('version'))]

    # projects have one or more products
    def make_products(prods):
        return [ Product(name=p['name'],
                         versions=make_versions(p['versions']),
                         )
                 for p in sorted(prods,
                                 key=operator.itemgetter('name'))]

    # eccn matrix has one or more projects
    return [ Project(name=proj['name'],
                     href=proj['href'],
                     contact=proj['contact'],
                     product=make_products(proj['product']))
             for proj in sorted(j['eccnmatrix'],
                                key=operator.itemgetter('name'))]


# object wrappers
class wrapper:
    def __init__(self, **kw):
        vars(self).update(kw)


# Improve the names when failures occur.
class Source(wrapper):
    pass


class Version(wrapper):
    pass


class Product(wrapper):
    pass


class Project(wrapper):
    pass


class Blog(wrapper):
    pass


class Distribution(wrapper):
    pass


# create metadata according to instructions.
def config_read_data(pel_ob):
    print('-----\nasfdata')

    asf_data = pel_ob.settings.get('ASF_DATA')

    if not asf_data:
        print('This Pelican installation is not using ASF_DATA')
        return

    for key in asf_data:
        print(f'config: [{key}] = {asf_data[key]}')

    debug = asf_data['debug']

    # This must be present in ASF_DATA. It contains data for use
    # by our plugins, and possibly where we load/inject data from
    # other sources.
    metadata = asf_data['metadata']

    # Lift data from ASF_DATA['data'] into METADATA
    if 'data' in asf_data:
        print(f'Processing {asf_data["data"]}')
        config_data = read_config(asf_data['data'])
        for key in config_data:
            # first check for data that is a singleton with special handling
            if key == 'eccn':
                # process eccn data
                fname = config_data[key]['file']
                metadata[key] = v = process_eccn(fname)
                if debug:
                    print('ECCN V:', v)
                continue

            if key == 'twitter':
                # process twitter data
                # if we decide to have multiple twitter feeds available then move next to blog below
                handle = config_data[key]['handle']
                count = config_data[key]['count']
                metadata[key] = v = process_twitter(handle, count)
                if debug:
                    print('TWITTER V:', v)
                continue

            value = config_data[key]
            if isinstance(value, dict):
                # dictionaries may have multiple data structures that are processed with a sequence of actions
                # into multiple sequences and dictionaries.
                print(f'-----\n{key} creates one or more sequences')
                if debug:
                    print(value)
                # special cases that are multiple are processed first
                if 'blog' in value:
                    # process blog feed
                    feed = config_data[key]['blog']
                    count = config_data[key]['count']
                    if 'content' in config_data[key].keys():
                        words = config_data[key]['content']
                    else:
                        words = None
                    metadata[key] = v = process_blog(feed, count, words, debug)
                    if debug:
                        print('BLOG V:', v)
                    continue

                elif 'release' in value:
                    # retrieve active release distributions
                    src = config_data[key]['src']
                    revision = config_data[key]['revision']
                    project = config_data[key]['release']
                    keys, distributions = process_distributions(project, src, revision)
                    metadata[key] = v = distributions
                    metadata[f"{key}-keys"] = keys
                    metadata[f"{key}-project"] = project
                    if debug:
                        print('RELEASE V:', v)

                elif 'url' in value:
                    # process a url based data source
                    load = url_data(value['url'])
                    process_load(metadata, value, load, debug)

                elif 'file' in value:
                    # process a file from within the site tree
                    load = file_data(value['file'])
                    process_load(metadata, value, load, debug)

                else:
                    # should probably be an error but doesn't matter
                    metadata[key] = value
            else:
                # simple metadata values - either an int or str
                print(f'{key} = {value}')
                metadata[key] = value

    # display asfdata metadata or metadata type
    print('-----')
    for key in metadata:
        if debug:
            print(f'metadata[{key}] =')
            print(metadata[key])
            print('-----')
        elif isinstance(metadata[key], str):
            print(f'metadata[{key}] = "{metadata[key]}"')
        elif isinstance(metadata[key], int):
            print(f'metadata[{key}] = {metadata[key]}')
        elif isinstance(metadata[key], list):
            print(f'metadata[{key}] is a sequence.')
        elif isinstance(metadata[key], dict):
            print(f'metadata[{key}] is a dictionary.')
        else:
            keytype = type(metadata[key])
            print(f'metadata[{key}] is a {keytype}')


def tb_initialized(pel_ob):
    """ Print any exception, before Pelican chews it into nothingness."""
    try:
        config_read_data(pel_ob)
    except Exception:
        print('-----', file=sys.stderr)
        traceback.print_exc()
        # exceptions here stop the build
        raise


def register():
    # Hook the "initialized" signal, to load our custom data.
    pelican.plugins.signals.initialized.connect(tb_initialized)
