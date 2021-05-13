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
import random
import json
import traceback
import operator

import requests
import yaml
import ezt

import pelican.plugins.signals
import pelican.utils


ASF_DATA = {
    'metadata': { },
    'debug': False,
}

def read_config(config_yaml):
    with pelican.utils.pelican_open(config_yaml) as text:
        config_data = yaml.safe_load(text)
        print(config_data)
    return config_data


def load_data(path, content):
    parts = path.split('/')
    extension = os.path.splitext(parts[-1])[1]  # split off ext, keep ext
    print(f"Loading {extension} from {path}")
    if extension == ".json":
        load = json.loads(content)
    elif extension == ".yaml":
        load = yaml.safe_load(content)
    else:
        load = { }
    return load


def url_data(url):
    return load_data( url, requests.get(url).text )


def file_data(rel_path):
    return load_data( rel_path, open(rel_path,'r').read() )


def remove_part(reference, part):
    for refs in reference:
        if refs == part:
            del reference[part]
            return
        elif isinstance(reference[refs], dict):
            remove_part(reference[refs], part)


def where_parts(reference, part):
    # currently only works on True parts
    filtered = [ ]
    for refs in reference:
        if not reference[refs][part]:
            filtered.append(refs)
    for refs in filtered:
        del reference[refs]


def alpha_part(reference, part):
    for refs in reference:
        name = reference[refs][part]
        if name == 'HTTP Server':
            # when sorting by letter HTTPD Server is wanted first
            letter = ' '
        else:
            letter = name[0].upper()
        reference[refs]['letter'] = letter


def asfid_part(reference, part):
    for refs in reference:
        fix = reference[refs][part]
        for k in fix:
            availid = k
            name = fix[k]['name']
        reference[refs][part] = name
        reference[refs]['availid'] = availid


def sequence_dict(seq, reference):
    sequence = [ ]
    for refs in reference:
        if isinstance(reference[refs], dict):
            reference[refs]['key_id'] = refs
            for item in reference[refs]:
                if isinstance(reference[refs][item], bool):
                    reference[refs][item] = ezt.boolean(reference[refs][item])
            sequence.append(type(seq, (), reference[refs]))
    return sequence


def sequence_list(seq, reference):
    sequence = [ ]
    for refs in reference:
        if isinstance(refs, dict):
            for item in refs:
                if isinstance(refs[item], bool):
                    refs[item] = ezt.boolean(refs[item])
                elif isinstance(refs[item], list):
                    refs[item] = sequence_list(item, refs[item])
            sequence.append(type(f"{seq}", (), refs))
    print(f"{seq} {sequence}")
    for item in sequence:
        print(vars(item));
    return sequence


def split_list(metadata, seq, reference, split):
    # copy sequence
    sequence = list(reference)
    # sort the copy
    sequence.sort(key=lambda x: (x.letter, x.display_name))
    # size of list
    size = len(sequence)
    # size of columns
    percol = int((size+26+split-1)/split)
    # positions
    start = nseq = nrow = 0
    letter = ' '
    for column in range(split):
        subsequence = [ ]
        end = min(size+26, start+percol)
        while nrow < end:
            if letter < sequence[nseq].letter:
                # new letter
                letter = sequence[nseq].letter
                subsequence.append(type(seq, (), { 'letter': letter, 'display_name': letter }))
            else:
                subsequence.append(sequence[nseq])
                nseq = nseq+1
            nrow = nrow+1
        # save the column sequence in the metadata
        metadata[f"{seq}_{column}"] = subsequence
        start = end
    if nseq < size:
        print(f"WARNING: {seq} not all of sequence consumed: short {size-nseq} projects")


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
        print(f"{seq}: {sequence['description']}")

    # select sub dictionary
    if 'path' in sequence:
        if debug:
            print(f"path: {sequence['path']}")
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]

    # filter dictionary by attribute value. if filter is false discard
    if 'where' in sequence:
        if debug:
            print(f"where: {sequence['where']}")
        where_parts(reference, sequence['where'])

    # remove irrelevant keys
    if 'trim' in sequence:
        if debug:
            print(f"trim: {sequence['trim']}")
        parts = sequence['trim'].split(',')
        for part in parts:
            remove_part(reference, part)

    # transform roster and chair patterns
    if 'asfid' in sequence:
        if debug:
            print(f"asfid: {sequence['asfid']}")
        asfid_part(reference, sequence['asfid'])

    # add first letter ofr alphabetic categories
    if 'alpha' in sequence:
        if debug:
            print(f"alpha: {sequence['alpha']}")
        alpha_part(reference, sequence['alpha'])

    # this dictionary is derived from sequences
    if 'dictionary' in sequence:
        if debug:
            print(f"dictionary: {sequence['dictionary']}")
        reference = { }
        paths = sequence['dictionary'].split(',')
        for path in paths:
            for key in load[path]:
                reference[key] = load[path][key]
        is_dictionary = True

    # this sequence is derived from another sequence
    if 'sequence' in sequence:
        if debug:
            print(f"sequence: {sequence['sequence']}")
        reference = metadata[sequence['sequence']]
        is_sequence = True

    # this sequence is a random sample of another sequence
    if 'random' in sequence:
        if debug:
            print(f"random: {sequence['random']}")
        if is_sequence:
            reference = random.sample(reference, sequence['random'])
        else:
            print(f"{seq} - random requires an existing sequence to sample")

    # this sequence is a sorted list divided into multiple columns
    if 'split' in sequence:
        if debug:
            print(f"split: {sequence['split']}")
        if is_sequence:
            split_list(metadata, seq, reference, sequence['split'])
            save_metadata = False
        else:
            print(f"{seq} - split requires an existing sequence to split")

    # convert the dictionary/list to a sequence of objects
    if not is_sequence and not is_dictionary:
        if debug:
            print(f"{seq}: create sequence")
        if isinstance(reference, dict):
            reference = sequence_dict(seq, reference)
        elif isinstance(reference, list):
            reference = sequence_list(seq, reference)
        else:
            print(f"{seq}: cannot proceed invalid type, must be dict or list")

    # save sequence in metadata
    if save_metadata:
        metadata[seq] = reference


def process_load(metadata, value, key, load, debug):
    for seq in value:
        if seq != 'url' and seq != 'file':
            # sequence
            sequence = value[seq]
            process_sequence(metadata, seq, sequence, load, debug)


def process_eccn(fname):
    print('ECCN:', fname)
    j = json.load(open(fname))

    def make_sources(sources):
        return [ Source(href=s['href'],
                        manufacturer=s['manufacturer'],
                        why=s['why'])
                 for s in sources ]

    def make_versions(vsns):
        return [ Version(version=v['version'],
                         eccn=v['eccn'],
                         source=make_sources(v.get('source', [ ])),
                         )
                 for v in sorted(vsns,
                                 key=operator.itemgetter('version')) ]

    def make_products(prods):
        return [ Product(name=p['name'],
                         versions=make_versions(p['versions']),
                         )
                 for p in sorted(prods,
                                 key=operator.itemgetter('name')) ]

    #print('PROJs:', [p['name'] for p in j['eccnmatrix']])
    return [ Project(name=proj['name'],
                     href=proj['href'],
                     contact=proj['contact'],
                     product=make_products(proj['product']))
             for proj in sorted(j['eccnmatrix'],
                                key=operator.itemgetter('name')) ]


class wrapper:
    def __init__(self, **kw):
        vars(self).update(kw)

# Improve the names when failures occur.
class Source(wrapper): pass
class Version(wrapper): pass
class Product(wrapper): pass
class Project(wrapper): pass


def config_read_data(pel_ob):
    #print('PEL_OB:', pel_ob)
    print("-----\nasfdata")

    asf_data = pel_ob.settings.get('ASF_DATA')
    print('ASFDATA:', asf_data)

    if not asf_data:
        # This Pelican installation is not using ASF_DATA
        return

    for key in asf_data:
        print(f"config: [{key}] = {asf_data[key]}")

    # This must be present in ASF_DATA. It contains data for use
    # by our plugins, and possibly where we load/inject data from
    # other sources.
    metadata = asf_data['metadata']

    # Lift data from ASF_DATA['data'] into METADATA
    if 'data' in asf_data:
        print(f"Processing {asf_data['data']}")
        config_data = read_config(asf_data['data'])
        for key in config_data:
            if key == 'eccn':
                fname = config_data[key]['file']
                v = process_eccn(fname)
                print('ECCN V:', v)
                metadata['eccn'] = v
                continue

            value = config_data[key]
            if isinstance(value, dict):
                print(f"{key} is a dict")
                print(value)
                if 'url' in value:
                    load = url_data(value['url'])
                    process_load(metadata, value, key, load, asf_data['debug'])
                elif 'file' in value:
                    load = file_data(value['file'])
                    process_load(metadata, value, key, load, asf_data['debug'])
                else:
                    metadata[key] = value
            else:
                print(f"{key} = {value}")
                metadata[key] = value

    print("-----")
    for key in metadata:
        print(f"metadata[{key}] =")
        print(metadata[key])
        print("-----")


def tb_initialized(pel_ob):
    "Print any exception, before Pelican chews it into nothingness."
    try:
        config_read_data(pel_ob)
    except:
        traceback.print_exc()
        raise


def register():
    # Hook the "initialized" signal, to load our custom data.
    pelican.plugins.signals.initialized.connect(tb_initialized)
