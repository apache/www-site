'''
asfgenid
===================================
Generates HeadingIDs, ElementID, and PermaLinks
First find all specified IDs and classes. Assure unique ID and permalink
Next find all headings missing IDs. Assure unique ID and permalink
Generates a Table of Content
'''

# from __future__ import unicode_literals

import sys
import traceback
import re
import unicodedata

from bs4 import BeautifulSoup, Comment

import pelican.contents
import pelican.plugins.signals

'''
Based on
https://github.com/waylan/Python-Markdown/blob/master/markdown/extensions/headerid.py
Which is BSD licensed, but is very much rewritten.
'''

ASF_GENID = {
    'unsafe_tags': True,        # fix script, style, and iframe html that gfm filters as unsafe
    'metadata': True,           # {{ metadata }} inclusion of data in the html.
    'elements': True,	        # {#id} and {.class} annotations.
    'headings': True,	        # add slugified id to headings missing id. Can be overridden by page metadata.
    'headings_re': r'^h[1-6]',  # regex for which headings to check.
    'permalinks': True,	        # add permalinks to elements and headings when id is added.
    'toc': True,  	        # check for [TOC] and add Table of Content if present.
    'toc_headers': r'h[1-6]',   # regex for which headings to include in the [TOC]
    'tables': True,	        # add class="table" for tables missing class.
    'debug': False
}

# Fixup tuples for HTML that GFM makes into text.
FIXUP_UNSAFE = [
    (re.compile(r'&lt;script'), '<script'),
    (re.compile(r'&lt;/script'), '</script'),
    (re.compile(r'&lt;style'), '<style'),
    (re.compile(r'&lt;/style'), '</style'),
    (re.compile(r'&lt;iframe'), '<iframe'),
    (re.compile(r'&lt;/iframe'), '</iframe')
]

# Find {{ metadata }} inclusions
METADATA_RE = re.compile(r'{{\s*(?P<meta>[-_:a-zA-Z0-9]+)\s*}}')

# Find {#id} or {.class} elementid annotations
ELEMENTID_RE = re.compile(r'(?:[ \t]*[{\[][ \t]*(?P<type>[#.])(?P<id>[-._:a-zA-Z0-9 ]+)[}\]])(\n|$)')

# ID duplicates match
IDCOUNT_RE = re.compile(r'^(.*)_([0-9]+)$')

# For permalinks
LINK_CHAR = '¶'

# strip permalink chars from headings for ToC
PARA_MAP = {
    ord(LINK_CHAR): None
}

# Find table tags - to check for ones without class attribute.
TABLE_RE = re.compile(r'^table')


# An item in a Table of Contents - from toc.py
class HtmlTreeNode(object):
    def __init__(self, parent, header, level, id):
        self.children = []
        self.parent = parent
        self.header = header
        self.level = level
        self.id = id

    def add(self, new_header):
        new_level = new_header.name
        new_string = new_header.string
        new_id = new_header.attrs.get('id')

        if not new_string:
            new_string = new_header.find_all(
                text=lambda t: not isinstance(t, Comment),
                recursive=True)
            new_string = ''.join(new_string)
        new_string = new_string.translate(PARA_MAP)

        if self.level < new_level:
            new_node = HtmlTreeNode(self, new_string, new_level, new_id)
            self.children += [new_node]
            return new_node, new_header
        elif self.level == new_level:
            new_node = HtmlTreeNode(self.parent, new_string, new_level, new_id)
            self.parent.children += [new_node]
            return new_node, new_header
        elif self.level > new_level:
            return self.parent.add(new_header)

    def __str__(self):
        ret = ''
        if self.parent:
            ret = "<a class='toc-href' href='#{0}' title='{1}'>{1}</a>".format(
                self.id, self.header)

        if self.children:
            ret += "<ul>{}</ul>".format('{}' * len(self.children)).format(
                *self.children)

        if self.parent:
            ret = "<li>{}</li>".format(ret)

        if not self.parent:
            ret = "<div id='toc'>{}</div>".format(ret)

        return ret


# assure configuration
def init_default_config(pelican):
    from pelican.settings import DEFAULT_CONFIG

    DEFAULT_CONFIG.setdefault('ASF_GENID', ASF_GENID)
    if(pelican):
        pelican.settings.setdefault('ASF_GENID', ASF_GENID)


# from Apache CMS markdown/extensions/headerid.py - slugify in the same way as the Apache CMS
def slugify(value, separator):
    """ Slugify a string, to make it URL friendly. """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = re.sub('[^\\w\\s-]', '', value.decode('ascii')).strip().lower()
    return re.sub('[%s\\s]+' % separator, separator, value)


# Ensure an id is unique in a set of ids. Append '_1', '_2'... if not
def unique(id, ids):
    while id in ids or not id:
        m = IDCOUNT_RE.match(id)
        print(f'id="{id}" is a duplicate')
        if m:
            id = '%s_%d' % (m.group(1), int(m.group(2)) + 1)
        else:
            id = '%s_%d' % (id, 1)
    ids.add(id)
    return id


# append a permalink
def permalink(soup, mod_element):
    new_tag = soup.new_tag('a', href='#' + mod_element['id'])
    new_tag['class'] = 'headerlink'
    new_tag['title'] = 'Permalink'
    new_tag.string = LINK_CHAR
    mod_element.append(new_tag)


# fixup cmark content - note that this may be too hungry. It may need to occur later and skipped in codeblock and pre tags.
def fixup_content(content):
    text = content._content
    modified = False
    # Find messed up html
    for regex, replace in FIXUP_UNSAFE:
        m = regex.search(text)
        if m:
            modified = True
            text = re.sub(regex, replace, text)
    if modified:
        content._content = text


# expand metadata found in {{ key }}
def expand_metadata(tag, metadata):
    this_string = str(tag.string)
    m = 1
    modified = False
    while m:
        m = METADATA_RE.search(this_string)
        if m:
            this_data = m.group(1).strip()
            format_string = '{{{0}}}'.format(this_data)
            try:
                new_string = format_string.format(**metadata)
                print(f'{{{{{m.group(1)}}}}} -> {new_string}')
            except Exception:
                # the data expression was not found
                print(f'{{{{{m.group(1)}}}}} is not found')
                new_string = format_string
            # replace the first pattern with the new_string
            this_string = re.sub(METADATA_RE, new_string, this_string, count=1)
            modified = True
    if modified:
        tag.string.replace_with(this_string)


# do elementid transformation for {#id} and {.class} attribute annotations.
def elementid_transform(ids, soup, tag, permalinks, perma_set, debug):
    tagnav = tag.parent
    this_string = str(tag.string)
    if debug:
        print(f'name = {tagnav.name}, string = {this_string}')
    if tagnav.name not in ['[document]', 'code', 'pre']:
        m = ELEMENTID_RE.search(tag.string)
        if m:
            # this replacement could be better it truncates and likely drops additional annotations
            tag.string.replace_with(this_string[:m.start()])
            if m.group('type') == '#':
                # id attribute annotation
                tagnav['id'] = unique(m.group('id'), ids)
                if permalinks:
                    permalink(soup, tagnav)
                    unique(tagnav['id'], perma_set)
                if debug:
                    print(f'# insertion {tagnav}')
            else:
                # class attribute annotation (regex only recognizes the two types)
                tagnav['class'] = m.group('id')
                if debug:
                    print(f'Class {tag.name} : {tagnav["class"]}')


# generate id for a heading
def headingid_transform(ids, soup, tag, permalinks, perma_set):
    new_string = tag.string
    if not new_string:
        # roll up strings if no immediate string
        new_string = tag.find_all(
            text=lambda t: not isinstance(t, Comment),
            recursive=True)
        new_string = ''.join(new_string)

    # don't have an id create it from text
    new_id = slugify(new_string, '-')
    tag['id'] = unique(new_id, ids)
    if permalinks:
        permalink(soup, tag)
        # inform if there is a duplicate permalink
        unique(tag['id'], perma_set)


# generate table of contents from headings after [TOC] content
def generate_toc(content, tags, title, toc_headers):
    settoc = False
    tree = node = HtmlTreeNode(None, title, 'h0', '')
    # find the last [TOC]
    taglast = tags[0]
    for tag in tags:
        taglast = tag
    # find all headings after the final [TOC]
    heading_re = re.compile(toc_headers)
    for header in taglast.findAllNext(heading_re):
        # we have heading content for the ToC
        settoc = True
        # add the heading.
        node, _new_header = node.add(header)
    # convert the ToC to Beautiful Soup
    tree_soup = ''
    if settoc:
        print('  ToC')
        # convert the HtmlTreeNode into Beautiful Soup
        tree_string = '{}'.format(tree)
        tree_soup = BeautifulSoup(tree_string, 'html.parser')
        # Make the ToC available to the theme's template
        content.toc = tree_soup.decode(formatter='html')
    # replace the first [TOC] with the generated table of contents
    for tag in tags:
        tag.replaceWith(tree_soup)
        # replace additional [TOC] with nothing
        tree_soup = ''


# add the asfdata metadata into GFM content.
def add_data(content):
    """ Mix in ASF data as metadata """

    # if the reader is 'asf' then the asf metadata is already in place during asfreader plugin.
    if content.metadata.get('reader') != 'asf':
        asf_metadata = content.settings.get('ASF_DATA', { }).get('metadata')
        if asf_metadata:
            content.metadata.update(asf_metadata)


# main worker transforming the html
def generate_id(content):
    if isinstance(content, pelican.contents.Static):
        return

    # get plugin settings
    asf_genid = content.settings['ASF_GENID']
    # asf_headings setting may be overridden
    asf_headings = content.metadata.get('asf_headings', str(asf_genid['headings']))

    # show active plugins
    if asf_genid['debug']:
        print('asfgenid:\nshow plugins in case one is processing before this one')
        for name in content.settings['PLUGINS']:
            print(f'plugin: {name}')

    # track the id tags
    ids = set()
    # track permalinks
    permalinks = set()

    # step 1 - fixup html that cmark marks unsafe - move to later?
    if asf_genid['unsafe_tags']:
        fixup_content(content)

    # step 2 - prepare for genid processes
    # parse html content into BeautifulSoup4
    soup = BeautifulSoup(content._content, 'html.parser')
    # page title
    title = content.metadata.get('title', 'Title')
    # assure relative source path is in the metadata
    content.metadata['relative_source_path'] = content.relative_source_path
    # display output path and title
    print(f'{content.relative_source_path} - {title}')
    # enhance metadata if done by asfreader
    add_data(content)

    # step 3 - metadata expansion
    if asf_genid['metadata']:
        if asf_genid['debug']:
            print(f'metadata expansion: {content.relative_source_path}')
        for tag in soup.findAll(string=METADATA_RE):
            expand_metadata(tag, content.metadata)

    # step 4 - find all id attributes already present
    for tag in soup.findAll(id=True):
        unique(tag['id'], ids)
        # don't change existing ids

    # step 5 - find all {#id} and {.class} text and assign attributes
    if asf_genid['elements']:
        if asf_genid['debug']:
            print(f'elementid: {content.relative_source_path}')
        for tag in soup.findAll(string=ELEMENTID_RE):
            elementid_transform(ids, soup, tag, asf_genid['permalinks'], permalinks, asf_genid['debug'])

    # step 6 - find all headings w/o ids already present or assigned with {#id} text
    if asf_headings == 'True':
        if asf_genid['debug']:
            print(f'headings: {content.relative_source_path}')
        # Find heading tags
        HEADING_RE = re.compile(asf_genid['headings_re'])
        for tag in soup.findAll(HEADING_RE, id=False):
            headingid_transform(ids, soup, tag, asf_genid['permalinks'], permalinks)

    # step 7 - find all tables without class
    if asf_genid['tables']:
        if asf_genid['debug']:
            print(f'tables: {content.relative_source_path}')
        for tag in soup.findAll(TABLE_RE, _class=False):
            tag['class'] = 'table'

    # step 8 - find TOC tag and generate Table of Contents
    if asf_genid['toc']:
        tags = soup('p', text='[TOC]')
        if tags:
            generate_toc(content, tags, title, asf_genid['toc_headers'])

    # step 9 - reset the html content
    content._content = soup.decode(formatter='html')

    # step 10 - output all of the permalinks created
    for tag in permalinks:
        print(f'    #{tag}')


def tb_connect(pel_ob):
    """Print any exception, before Pelican chews it into nothingness."""
    try:
        generate_id(pel_ob)
    except Exception:
        print('-----', file=sys.stderr)
        print('FATAL: %s' % (pel_ob.relative_source_path), file=sys.stderr)
        traceback.print_exc()
        # if we have errors in this module then we want to quit to avoid erasing the site
        sys.exit(4)


def register():
    pelican.plugins.signals.initialized.connect(init_default_config)


pelican.plugins.signals.content_object_init.connect(tb_connect)
