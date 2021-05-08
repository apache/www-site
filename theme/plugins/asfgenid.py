'''
asfgenid
===================================
Generates HeadingIDs, ElementID, and PermaLinks
First find all specified IDs and classes. Assure unique ID and permalonk
Next find all headings missing IDs. Assure unique ID and permalink
Generates a Table of Content
'''

from __future__ import unicode_literals

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
    'metadata': True,
    'elements': True,
    'headings': True,
    'toc': True,
    'toc_headers': r"h[1-6]",
    'permalinks': True,
    'tables': True,
    'debug': False
}

# Find {#id} or {.class} trailing text
ELEMENTID_RE = re.compile(r'(?:[ \t]*[{\[][ \t]*(?P<type>[#.])(?P<id>[-._:a-zA-Z0-9 ]+)[}\]])(\n|$)')

# Find {{ metadata }}
METADATA_RE = re.compile(r'{{\s*(?P<meta>[-._:a-zA-Z0-9]+)\s*}}')

# Find heading tags
HEADING_RE = re.compile(r'^h[1-6]')

# Find table tags
TABLE_RE = re.compile(r'^table')

# ID duplicate counts
IDCOUNT_RE = re.compile(r'^(.*)_([0-9]+)$')

# For permalinks
LINK_CHAR = u'¶'

# strips permalink chars from headings for ToC
PARA_MAP = {
    ord('¶'): None
}


# An item in a Table of Contents
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
            new_string = "".join(new_string)
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
        ret = ""
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


# from Apache CMS markdown/extensions/headerid.py
def slugify(value, separator):
    """ Slugify a string, to make it URL friendly. """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = re.sub('[^\w\s-]', '', value.decode('ascii')).strip().lower()
    return re.sub('[%s\s]+' % separator, separator, value)


# Ensure id is unique in set of ids. Append '_1', '_2'... if not
def unique(id, ids):
    while id in ids or not id:
        m = IDCOUNT_RE.match(id)
        print(f"id=\"{id}\" is a duplicate")
        if m:
            id = '%s_%d' % (m.group(1), int(m.group(2)) + 1)
        else:
            id = '%s_%d' % (id, 1)
    ids.add(id)
    return id


# append a permalink
def permalink(soup, mod_element):
    new_tag = soup.new_tag('a', href="#" + mod_element['id'])
    new_tag['class'] = "headerlink"
    new_tag['title'] = "Permalink"
    new_tag.string = LINK_CHAR
    mod_element.append(new_tag)


# fixup cmark content
def fixup_content(content):
    text = content._content
    modified = False
    # Find messed up html
    SCRIPTS_RE = re.compile(r'&lt;script')
    m = SCRIPTS_RE.search(text)
    if m:
        modified = True
        text = re.sub(SCRIPTS_RE, '<script', text)
    SCRIPTS_RE = re.compile(r'&lt;/script')
    m = SCRIPTS_RE.search(text)
    if m:
        modified = True
        text = re.sub(SCRIPTS_RE, '</script', text)
    STYLE_RE = re.compile(r'&lt;style')
    m = STYLE_RE.search(text)
    if m:
        modified = True
        text = re.sub(STYLE_RE, '<style', text)
    STYLE_RE = re.compile(r'&lt;/style')
    m = STYLE_RE.search(text)
    if m:
        modified = True
        text = re.sub(STYLE_RE, '</style', text)
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
            parts = this_data.split('.')
            try:
                if isinstance(metadata[parts[0]], dict):
                    ref = metadata
                    for part in parts:
                        ref = ref[part]
                    new_string = ref
                else:
                    if len(parts) == 3:
                        this_data = f"{parts[0]}[{parts[1]}].{parts[2]}"
                    format_string = '{{{0}}}'.format(this_data)
                    new_string = format_string.format(**metadata)
                print(f"{{{{{m.group(1)}}}}} -> {new_string}")
            except Exception:
                # the data expression was not found
                print(f'{{{{{m.group(1)}}}}} is not found')
                new_string = format_string
            # replace the first pattern with the new_string
            this_string = re.sub(METADATA_RE, new_string, this_string, count=1)
            modified = True
    if modified:
        tag.string.replace_with(this_string)


# do elementid transformation for {#id} and {.class}
def elementid_transform(ids, soup, tag, permalinks, debug):
    tagnav = tag.parent
    this_string = str(tag.string)
    if debug:
        print(f"name = {tagnav.name}, string = {this_string}")
    if tagnav.name not in ['[document]', 'code', 'pre']:
        m = ELEMENTID_RE.search(tag.string)
        if m:
            tag.string.replace_with(this_string[:m.start()])
            if m.group('type') == '#':
                tagnav['id'] = unique(m.group('id'), ids)
                if permalinks:
                    permalink(soup, tagnav)
                if debug:
                    print(f"# insertion {tagnav}")
            else:
                tagnav['class'] = m.group('id')
                if debug:
                    print(f"Class {tag.name} : {tagnav['class']}")


# generate id for a heading
def headingid_transform(ids, soup, tag, permalinks):
    new_string = tag.string
    if not new_string:
        # roll up strings if no immediate string
        new_string = tag.find_all(
            text=lambda t: not isinstance(t, Comment),
            recursive=True)
        new_string = "".join(new_string)

    # don't have an id create it from text
    new_id = slugify(new_string, '-')
    tag['id'] = unique(new_id, ids)
    if permalinks:
        permalink(soup, tag)


# generate table of contents from headings after [TOC] content
def generate_toc(content, tags, title, toc_headers):
    settoc = False
    tree = node = HtmlTreeNode(None, title, 'h0', '')
    taglast = tags[0]
    for tag in tags:
        taglast = tag
    heading_re = re.compile(toc_headers)
    for header in taglast.findAllNext(heading_re):
        settoc = True
        node, new_header = node.add(header)
    tree_soup = ""
    if settoc:
        print("  ToC")
        # convert the HtmlTreeNode into Beautiful soup
        tree_string = '{}'.format(tree)
        tree_soup = BeautifulSoup(tree_string, 'html.parser')
        # not sure if we need to put the ToC here.
        content.toc = tree_soup.decode(formatter='html')
    for tag in tags:
        tag.replaceWith(tree_soup)
        tree_soup = ""


def add_data(content):
    "Mix in ASF data as metadata"

    # if the reader is 'asf' then the asf metadata is already in place
    if content.metadata.get('reader') != 'asf':
        asf_metadata = content.settings.get('ASF_DATA', { }).get('metadata')
        if asf_metadata:
            content.metadata.update(asf_metadata)

    # if content.settings.get('ASF_DATA', { }).get('debug'):
    #    print("metadata: %s" % content.metadata)


# main worker transforming the html
def generate_id(content):
    if isinstance(content, pelican.contents.Static):
        return

    # track the id tags
    ids = set()
    # fix cmark mistakes
    fixup_content(content)
    # parse html content into BeautifulSoup4
    soup = BeautifulSoup(content._content, 'html.parser')
    # page title
    title = content.metadata.get('title', 'Title')
    # assure relative source path is in the metadata
    content.metadata['relative_source_path'] = content.relative_source_path
    # enhance metadata if done by asfreader
    add_data(content)
    # get plugin settings
    asf_genid = content.settings['ASF_GENID']

    # step 1 - display output path and title
    print(f"{content.path_no_ext}.html - {title}")

    if asf_genid['debug']:
        print("asfgenid:\nshow plugins in case one is processing before this one")
        for name in content.settings['PLUGINS']:
            print(f"plugin: {name}")

    # step 2 - metadata expansion
    if asf_genid['metadata']:
        if asf_genid['debug']:
            print(f"metadata expansion: {content.relative_source_path}")

        for tag in soup.findAll(string=METADATA_RE):
            expand_metadata(tag, content.metadata)

    # step 3 - find all id attributes already present
    for tag in soup.findAll(id=True):
        unique(tag["id"], ids)
        # don't change existing ids

    # step 4 - find all {#id} and {.class} text and assign attributes
    if asf_genid['elements']:
        if asf_genid['debug']:
            print(f"elementid: {content.relative_source_path}")

        for tag in soup.findAll(string=ELEMENTID_RE):
            elementid_transform(ids, soup, tag, asf_genid['permalinks'], asf_genid['debug'])

    # step 5 - find all headings w/o ids already present or assigned with {#id} text
    if asf_genid['headings']:
        if asf_genid['debug']:
            print(f"headings: {content.relative_source_path}")

        for tag in soup.findAll(HEADING_RE, id=False):
            headingid_transform(ids, soup, tag, asf_genid['permalinks'])

    # step 6 - find all tables without class
    if asf_genid['tables']:
        if asf_genid['debug']:
            print(f"tables: {content.relative_source_path}")

        for tag in soup.findAll(TABLE_RE, _class=False):
            tag['class'] = 'table'

    # step 7 - find TOC tag and generate Table of Contents
    if asf_genid['toc']:
        tags = soup('p', text='[TOC]')
        if tags:
            generate_toc(content, tags, title, asf_genid['toc_headers'])

    # step 8 - reset the html content
    content._content = soup.decode(formatter='html')

    # step 9 - output all of the ids now in the soup.
    for tag in soup.findAll(id=True):
        print(f"    #{tag['id']}")


def register():
    pelican.plugins.signals.initialized.connect(init_default_config)


pelican.plugins.signals.content_object_init.connect(generate_id)
