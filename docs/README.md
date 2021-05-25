# Pelican Builds

This website is built using [Pelican][pelican].

## Content

Content is [GitHub Flavored Markdown][mastering] (GFM) with [ASF specific enhancements][asfgenid] for Apache CMS style annotations.

These file extensions **.md**, **.markdown**, **.mkd**, and **.mdown** are processed as GFM. **.md** is preferred.

The ASF specific enhancements are controlled in [pelican settings][configure]

```python
# Configure the asfgenid plugin
ASF_GENID = {
    'metadata': True,          # {{ metadata }} inclusion of data in the html.
    'elements': True,	       # {#id} and {.class} annotations.
    'headings': True,	       # add slugified id to headings missing id.
    'headings_re': r'^h[1-4]', # regex for which headings to check.
    'permalinks': True,	       # add permalinks to elements and headings when id is added.
    'toc': True,  	       # check for [TOC] and add Table of Content if present.
    'toc_headers': r"h[1-4]",  # regex for which headings to include in the [TOC]
    'tables': True,	       # add class="table" for tables missing class.
    'debug': False
}
```

## Data

[Data][asfdata] is [placed into GFM content][asfreader] with a combination of [EZT][eztsyntax] and ASF python style directives.

The file extension **.ezmd** is processed with ASF python style directives and as an EZT template. Once that is done then the result is processed as GFM.

### Data Model

The [data model[[datamodel] file specifies three types of data:

1. Constants. These metadata are made available to ezmd, asfgenid, and pelican templates.

```md
- [{ code_lines }]+ lines of code in&nbsp;stewardship
```

2. Sequences. These metadata are used by EZT directives and also the ASF python style directives.

   EZT
```md
| Office    | Individual  |
|-----------|-------------|[for projects]
| V.P., [if-any projects.site][[][end]Apache [projects.display_name][if-any projects.site]]([projects.site])[end] | [projects.chair] |[end]
```
```html
[for featured_projs]<li [if-index featured_projs first]class="active"[end]>
     <a href="#[featured_projs.key_id]" data-toggle="tab">[featured_projs.display_name]</a>
</li>[end]
```
   ASF python style directive
```md
|  |  |  |
|-----------|-----------|-------------|
| [{ board[0].name }] | [{ board[1].name }] | [{ board[2].name }] |
| [{ board[3].name }] | [{ board[4].name }] | [{ board[5].name }] |
| [{ board[6].name }] | [{ board[7].name }] | [{ board[8].name }] |
```

3. Dictionaries. These metadata are used by ASF python style directives.

   ASF python style directive - we know the names and forcing a sequence is indirect.
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

### Include and Insert

## Templates

Pelican uses [HTML templates][templates]. Templates have [pelican metadata][variables] and [pelican settings][settings].

### Theme

See your [pelicanconf.py][configure] and [templates][theme] for details.

```python
# Theme
THEME = './theme/apache'
```

### Plugins

```python
# Pelican Plugins
# pelican-gfm is installed in the buildbot as part of build_pelican.py. It is an ASF Infra custom plugin.
# other plugins are discoverable and can be installed via pip by mentioning them in requirements.txt
# You can find plugins here: https://github.com/pelican-plugins
# Plugins that are custom for this site are found in PLUGIN_PATHS.
PLUGIN_PATHS = ['./theme/plugins']
PLUGINS = ['asfgenid', 'asfdata', 'pelican-gfm', 'asfreader']
```

## Content Configuration

Static content is copied and these assets are mixed in with the rest of the content.

```python
PATH = 'content'
# Save pages using full directory preservation
PAGE_PATHS = ['.']
# Path with no extension
PATH_METADATA = '(?P<path_no_ext>.*)\..*'
# We are not slugifying any pages
ARTICLE_URL = ARTICLE_SAVE_AS = PAGE_URL = PAGE_SAVE_AS = '{path_no_ext}.html'
# We want to serve our static files mixed with content.
STATIC_PATHS = ['.']
# we want any html to be served as is
READERS = {'html': None}
# ignore README.md files in the content tree and the interviews and include folders.
IGNORE_FILES = ['README.md','interviews','include']
```


1. [Data Model](data.md)
   How the global data model works and how to enhance the data availble for your content.

2. [EZT](ezt.md)
   How EZ Templates are used convert global data into content.

3. [Markdown](markdown.md)
   How your content is converted to HTML.

4. [Processing](process.md)
   How the process works to create the HTML.

5. [Preview Branching](branches.md)
   How to work on complex changes like updated templates, new data sources, and alternative content.

6. Local Builds
   How to setup your local environment to work on a branch.

7. Error Analysis
   How to track down errors in your build.


[pelican]:   	https://blog.getpelican.com
[mastering]:	https://guides.github.com/features/mastering-markdown/
[gfm]:		https://github.com/github/cmark-gfm
[gfmspec]:	https://github.blog/2017-03-14-a-formal-spec-for-github-markdown/
[ezt]:		https://github.com/gstein/ezt
[eztsyntax]:	https://github.com/gstein/ezt/blob/wiki/Syntax.md
[templates]:	https://docs.getpelican.com/en/latest/themes.html#structure
[variables]:	https://docs.getpelican.com/en/latest/themes.html#templates-and-variables
[pagemodel]:	https://docs.getpelican.com/en/latest/themes.html#page
[settings]:	https://docs.getpelican.com/en/latest/settings.html#
[pelicanasf]:	https://github.com/apache/infrastructure-p6/tree/production/modules/pelican_asf/files
[asfdata]:	../theme/plugins/asfdata.py
[asfreader]:	../theme/plugins/asfreader.py
[asfgenid]:	../theme/plugins/asfgenid.py
[theme]:     	../theme/apache/templates/.
[configure]: 	../pelicanconf.py
[datamodel]:	../asfdata.yaml
[markdown]:  	./markdown.md
[data_ezt]:  	./data_ezt.md
[process]:   	./process.md
[branches]:  	./branches.md
[local]:     	./local.md
