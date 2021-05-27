# Pelican Build Process

This website is built using [Pelican][pelican]. Configure the build using the [pelicanconf.py][configure] settings.

## Pelican Theme

```python
# Theme
THEME = './theme/apache'
```

See [theme template][theme] for details about this site's theme.

## Plugins

The Pelican environment is enhanced with plugins. Our environment has its own copy of the `asf` plugins, while the `pelican-build.py` script provides `pelican-gfm`.

```python
# Pelican Plugins
# pelican-gfm is installed in the buildbot as part of build_pelican.py. It is an ASF Infra custom plugin.
# other plugins are discoverable and can be installed via pip by mentioning them in requirements.txt
# You can find plugins here: https://github.com/pelican-plugins
# Plugins that are custom for this site are found in PLUGIN_PATHS.
PLUGIN_PATHS = ['./theme/plugins']
PLUGINS = ['asfgenid', 'asfdata', 'pelican-gfm', 'asfreader']
```

1. [Data Model][asfdata]. The `asfdata.py` plugin builds a metadata model that is shared with every page.
2. [GFM Content][pelican-gfm]. The `pelican-gfm` plugin reads **.md**, **.markdown**, **.mkd**, and **.mdown** files and converts the GFM Markdown into HTML.
3. [EZMD Content][asfreader]. The `asfreader.py` plugin reads **.ezmd** files, injects data, translates ezt, and converts the GFM Markdown into HTML.
4. [Generate ID][asfgenid]. The `asfgenid.py` plugin performs a number of enhancements to the HTML.

See [process][process] for the steps signaled. See [plugins][plugins] for the Python code.

## Tree Structure

Pages and static content are stored in the same tree. Generated content is output with the same relative path, except with an html extension.
These are the necessary settings.

```python
PATH = 'content'
# Save pages using full directory preservation
PAGE_PATHS = ['.']
# Path with no extension
PATH_METADATA = '(?P<path_no_ext>.*)\..*'
# We are not slugifying any pages
ARTICLE_URL = ARTICLE_SAVE_AS = PAGE_URL = PAGE_SAVE_AS = '{path_no_ext}.html'
# We want to serve our static files mixed with content
STATIC_PATHS = ['.']
# we want any html to be served as-is
READERS = {'html': None}
# ignore README.md files in the content tree and the interviews and include folders
IGNORE_FILES = ['README.md','interviews','include']
```

# Process

Pelican uses [signals][signals] as it goes through the process of reading and generating content.
Pages are processed in no particular order. Our plugins provide the following activity:

| Pelican Signal | Step | [GFM Content][pelican-gfm] | [EZMD Content][asfreader] | Description |
|----------------|---------|:-----:|:--:|------|
| Initialization | [Data Model][asfdata]      |             |              | Read data sources |
| Reader         | Class     |   [GFMReader][pelican-gfm]   | [ASFReader(GFMReader)][asfreader] | Pelican Reader class  |
|                | [Read][read]               | read_source | super.read_source | read page source and metadata |
|                | [Model Metadata][metadata] |             | add_data     | add asf data to the model and expand any `[{ reference }]` |
|                | [Translate][ezttranslate]  |             | ezt          | ezt template translation |
|                | [Render GFM][markdown]     | render      | super.render | render GFM/HTML into HTML  |
| Content        | [Generate ID][asfgenid]    | generate_id | generate_id  | Perform ASF specific HTML enhancements |
| Generator      | [Template][theme]          | translate   | translate    | Create output HTML by pushing the generated content and metadata through the theme's templates |

See [local builds][local] for how to install [Pelican ASF][pelicanasf] on your system.

## Data Model

A shared metadata model is used by **ezmd** templates to generate content. There are three types of data:

| When refereced  | Data Type                        |
|-----------------|----------------------------------|
| EZMD Reader, Content, Generator | Constants - either integer or string values |
| EZMD Reader                     | Sequences - arrays of objects with attributes where an attribute may be another sequence |
| EZMD Reader                     | Dictionaries - key-value maps where the value may be another dictionary |

The constants are also available to the [`asfgenid.py`][asfgenid] plugin and the [theme's templates][theme].

There are examples of how to [inject shared metadata below][metadata]. See [metadata model][data] for how `asfdata.py` works to populate the shared metadata.

## Read Source

The `read_source` method is used to open a file and convert it into a metadata dictionary and text.

Example:

```md
Title: ASF Export Classifications and Source Links
license: https://www.apache.org/licenses/LICENSE-2.0
asf_headings: False

#### ASF Project
...
```

The first three lines specify three `metadata` key-value pairs.
There is a blank line and the rest is the `text`.

Code from `pelican-gfm` with some parts elided.

```python
    def read_source(self, source_path):
        "Read metadata and content from the source."
	...
	# Fetch the source content, with a few appropriate tweaks
        with pelican.utils.pelican_open(source_path) as text:

            # Extract the metadata from the header of the text
            lines = text.splitlines()
            for i in range(len(lines)):
                line = lines[i]
                match = GFMReader.RE_METADATA.match(line)
                if match:
                    name = match.group(1).strip().lower()
		    ...
                    metadata[name] = value
                elif not line.strip():
                    # blank line
                    continue
                else:
                    # reached actual content
                    break
	    ...
            # Reassemble content, minus the metadata
            text = '\n'.join(lines[i:])

            return text, metadata
```

## Model Metadata

In `asfreader.py` we extend EZT syntax to do metadata substitution prior to EZT translation. This allows for a more natural and direct representation than with EZT sequences.

### Examples

```md
|  |  |  |
|-----------|-----------|-------------|
| [{ board[0].name }] | [{ board[1].name }] | [{ board[2].name }] |
| [{ board[3].name }] | [{ board[4].name }] | [{ board[5].name }] |
| [{ board[6].name }] | [{ board[7].name }] | [{ board[8].name }] |
```

```md
| Office    | Individual  |
|-----------|-------------|
| Board Chair |  [{ ci[boardchair][roster] }] |
| Vice Chair |  [{ ci[vicechair][roster] }] |
| President |  [{ ci[president][roster] }] |
| Exec. V.P |  [{ ci[execvp][roster] }] |
| [[]Treasurer](https://treasurer.apache.org/) |  [{ ci[treasurer][roster] }] |
| Assistant Treasurer |  [{ ci[assistanttreasurer][roster] }] |
| Secretary |  [{ ci[secretary][roster] }] |
| Assistant Secretary |  [{ ci[assistantsecretary][roster] }] |
| V.P., [[]Legal Affairs](/legal/) |  [{ ci[legal][chair] }] |
| Assistant V.P., [[]Legal Affairs](/legal/) |  [{ ci[assistantvplegalaffairs][roster] }] |
```

```md
- All volunteer community
- [{ code_lines }]+ lines of code in&nbsp;stewardship
- [{ code_changed }]+ lines of code&nbsp;changed
- [{ code_commits }]+ code commits
- [{ asf_members }] individual ASF&nbsp;Members
- [{ asf_committers }]+ Apache Committers
- [{ asf_contributors }]+ code contributors
- [{ asf_people }]+ people involved in our&nbsp;communities
```

### EZMD Reader

The `asfreader.py` plugin is responsible for [reading the source][read], adding metadata, [ezt translation][ezttranslate], and [rendering GFM][markdown]

```python
    def add_data(self, text, metadata):
        "Mix in ASF data as metadata"

        asf_metadata = self.settings.get('ASF_DATA', { }).get('metadata')
        if asf_metadata:
            metadata.update(asf_metadata)
            # insert any direct references
            m = 1
            while m:
                m = METADATA_RE.search(text)
                if m:
                    this_data = m.group(1).strip()
                    format_string = '{{{0}}}'.format(this_data)
                    try:
                        new_string = format_string.format(**metadata)
                        print(f'{{{{{m.group(1)}}}}} -> {new_string}')
                    except Exception:
                        # the data expression was not found
                        new_string = format_string
                        print(f'{{{{{m.group(1)}}}}} is not found')
                    text = re.sub(METADATA_RE, new_string, text, count=1)
        return text, metadata
```

## EZT Translation

**ezmd** Pages files are [ezt][ezt] templates that create Markdown and HTML output. See [EZT Syntax][eztsyntax] for the directives.

### EZT Examples

Project list:

```md
| Office    | Individual  |
|-----------|-------------|[for projects]
| V.P., [if-any projects.site][[][end]Apache [projects.display_name][if-any projects.site]]([projects.site])[end] | [projects.chair] |[end]
```

Featured projects:

```html
[for featured_projs]<li [if-index featured_projs first]class="active"[end]>
     <a href="#[featured_projs.key_id]" data-toggle="tab">[featured_projs.display_name]</a>
</li>[end]
```

Insert a file as is into the output:

```md
Title: Apache Download Mirrors

[insertfile "include/closer.ezt"]
```

### EZT Code

Code from `asfreader.py`

```python
            # prepare text as an ezt template
            # compress_whitespace=0 is required as blank lines and indentation have meaning in markdown
            template = ezt.Template(compress_whitespace=0)
            reader = ASFTemplateReader(source_path, text)
            template.parse(reader, base_format=ezt.FORMAT_HTML)
            assert template
            # generate content from ezt template with metadata
            fp = io.StringIO()
            template.generate(fp, metadata)
```

## Render GFM

Content is in [GitHub Flavored Markdown][mastering] (GFM).

The site uses a version of [cmark-gfm][gfm] by [GitHub][gfmspec] through a Pelican Plugin *gfm.py* created by Apache Infra.

- [Mastering Markdown][mastering]

- [Detailed Specification][4]

- Some differences from `markdown.pl` used in the Apache CMS.

  - [HTML Blocks][5]
    - Make sure the first line of your html block starts in column one.
    - A blank line terminates an html block
      - [Exception][6] to this rule for `style`, `pre`, and `script`.
    - [Markdown content within an HTML block][7]

  - [Autolinks][8]
    - [www][9]
    - [url][10]
    - [email][11]

  - [Disallowed html][12] the tagfilter extension disables certain html. The asfgenid plugin reenables `script`, `style`, and `iframe` html.
    
- [Examples][13]

### Pelican GFM

The main purpose for the `pelican-gfm` is to [read][read] the content file and render to HTML.

From `asfreader.py`:

```python
            # Render the markdown into HTML
            content = super().render(fp.getvalue().encode('utf-8')).decode('utf-8')
            assert content
```

From `pelican-gfm`:

```python
    def render(self, text):
      "Use cmark-gfm to render the Markdown into an HTML fragment."

      parser = F_cmark_parser_new(OPTS)
      assert parser
      for name in EXTENSIONS:
        ext = F_cmark_find_syntax_extension(name.encode('utf-8'))
        assert ext
        rv = F_cmark_parser_attach_syntax_extension(parser, ext)
        assert rv
      exts = F_cmark_parser_get_syntax_extensions(parser)
      F_cmark_parser_feed(parser, text, len(text))
      doc = F_cmark_parser_finish(parser)
      assert doc

      output = F_cmark_render_html(doc, OPTS, exts)

      F_cmark_parser_free(parser)
      F_cmark_node_free(doc)

      return output
```

## Generate ID

We use the `asfgenid` plugin to perform modifications on the generated content that mimics the markdown extensions in the Apache CMS.
Many of these ASF-specific enhancements are controlled in [pelican settings][configure] in the `ASF_GENID` dictionary.

| step | ASF_GENID key | default | process | page override |
|-----:|-----|:--------:|---------|----------|
| 1    |  -          | -           | fix up some HTML tags that the GFM autofilter extension marks as unsafe | |
| 2    |  -          | -           | convert HTML into beautiful soup    | |
| 3    | metadata    | True        | `{{ metadata }}` include data in the HTML | |
| 4    |  -          | True        | inventory of all ID attributes; duplicates are invalid | |
| 5    | elements    | True        | find all `{#id}` and `{.class}` texts and assign attributes | |
| 6    | headings    | True        | assign IDs to all headings w/o IDs already present or assigned with `{#id}` text | asf_headings |
|      | headings_re | `r'^h[1-6]'` | regex for finding headings that require IDs | |
| 7    | tables      | True        | tables with a class attribute are assgned `class=table` | |
| 8    | toc         | True        | generate a table of contents if [TOC] is found. If this is set to False then the `toc.py` plugin may used. | |
|      | toc_headers | `r'h[1-6]'` | headings to include in the [TOC] | |
| 9    |  -          | -           | convert beautiful soup back into HTML | |

### Element examples

Set the heading id and permalink to `#what`

```md
## What is the Apache Software Foundation?  {#what}

The Apache Software Foundation (ASF) is a non-profit 501(c)(3) corporation,
incorporated in Delaware, USA, in June of 1999. The ASF is a natural
outgrowth of The Apache Group, which
formed in 1995 to develop the Apache HTTP Server.
```

Set the class to display an image to `float-right`

```md
![Logo](images/logo.svg) {.float-right}
```

An HTML fragment is also feasible for a similar purpose

```html
<div class=".pull-right" style="float:right; border-style:dotted; width:200px; padding:5px; margin:5px">

SEE INSTEAD: [Trademark Resources Site Map][resources].

</div>
```

### Heading code

Code from `asfgenid.py` uses [BeautifulSoup 4][bs4] to manipulate the rendered HTML. Here is an example

```python
# from Apache CMS markdown/extensions/headerid.py - slugify in the same way as the Apache CMS
def slugify(value, separator):
    """ Slugify a string, to make it URL friendly. """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = re.sub('[^\\w\\s-]', '', value.decode('ascii')).strip().lower()
    return re.sub('[%s\\s]+' % separator, separator, value)

...

# append a permalink
def permalink(soup, mod_element):
    new_tag = soup.new_tag('a', href='#' + mod_element['id'])
    new_tag['class'] = 'headerlink'
    new_tag['title'] = 'Permalink'
    new_tag.string = LINK_CHAR
    mod_element.append(new_tag)

...

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

...

    # step 6 - find all headings w/o ids already present or assigned with {#id} text
    if asf_headings == 'True':
        if asf_genid['debug']:
            print(f'headings: {content.relative_source_path}')
        # Find heading tags
        HEADING_RE = re.compile(asf_genid['headings_re'])
        for tag in soup.findAll(HEADING_RE, id=False):
            headingid_transform(ids, soup, tag, asf_genid['permalinks'], permalinks)
```


[pelican]:   	https://blog.getpelican.com
[mastering]:	https://guides.github.com/features/mastering-markdown/
[gfm]:		https://github.com/github/cmark-gfm
[gfmspec]:	https://github.blog/2017-03-14-a-formal-spec-for-github-markdown/
[4]: 		https://github.github.com/gfm/
[5]: 		https://github.github.com/gfm/#html-block
[6]: 		https://github.github.com/gfm/#example-139
[7]: 		https://github.github.com/gfm/#example-122
[8]: 		https://github.github.com/gfm/#autolink
[9]: 		https://github.github.com/gfm/#extended-www-autolink
[10]: 		https://github.github.com/gfm/#extended-url-autolink
[11]: 		https://github.github.com/gfm/#extended-email-autolink
[12]: 		https://github.github.com/gfm/#disallowed-raw-html-extension-
[13]: 		https://sindresorhus.com/github-markdown-css/
[ezt]:		https://github.com/gstein/ezt
[eztsyntax]:	https://github.com/gstein/ezt/blob/wiki/Syntax.md
[structure]:	https://docs.getpelican.com/en/latest/themes.html#structure
[variables]:	https://docs.getpelican.com/en/latest/themes.html#templates-and-variables
[pagemodel]:	https://docs.getpelican.com/en/latest/themes.html#page
[settings]:	https://docs.getpelican.com/en/latest/settings.html#
[signals]:	https://docs.getpelican.com/en/latest/plugins.html#list-of-signals
[bs4]:		https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.html?highlight=javascript#
[pelicanasf]:	https://github.com/apache/infrastructure-p6/tree/production/modules/pelican_asf/files
[asfdata]:	#data-model
[asfreader]:	#ezmd-reader
[asfgenid]:	#generate-id
[theme]:     	../theme/apache/templates/.
[plugins]:     	../theme/plugins/.
[configure]: 	../pelicanconf.py
[datamodel]:	../asfdata.yaml
[read]:         #read-source
[metadata]:	#model-metadata
[markdown]:  	#render-gfm
[data]:		data.md
[ezttranslate]: #ezt-translation
[process]:   	#process
[branches]:  	#branches
[local]:     	builds.md
[asfref]:	#reference
[pelican-gfm]:	#pelican-gfm
