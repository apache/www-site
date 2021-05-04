# Plugin Architecture

The plugins used operate at various points in a pelican build.
Pelican uses signals at various points. These are documented [here](https://docs.getpelican.com/en/latest/plugins.html#list-of-signals).
At a high level consider the following sequence of events:

1. Pelican Settings. Settings for a Pelican Build are in your [Pelican Configuration](../../pelicanconf.py)

```python
PLUGIN_PATHS = ['./theme/plugins']
PLUGINS = ['asfgenid', 'asfdata', 'pelican-gfm', 'asfreader', 'sitemap']
```

2. Init (initialized). At this point any ASF_DATA is read into a metadata dictionary made available in every page.

- The [asfdata plugin](./asfdata.py) reads an .asfdata.yaml file and creates the metadata dictionary.

```python
ASF_DATA_YAML = ".asfdata.yaml"
ASF_DATA = {
    'data': ASF_DATA_YAML,
    'metadata': { },
    'debug': True
}
```

- The [asfgenid plugin](./asfgenid.py) configures its features.

```python
ASF_GENID = {
    'metadata': True,
    'elements': True,
    'headings': True,
    'permalinks': True,
    'toc': True,
    'toc_headers': r"h[1-6]",
    'debug': False
}
```

3. Readers (readers_init). Two important readers are set at this point. Readers are responsible for transforming page files to html and
    providing a metadata dictionary
    - GFMReader by the pelican-gfm plugin. This code is in a private repository - ask Infra. Transforms GitHub Flavored Markdown(GFM) to HTML.
        * .md
        * .markdown
        * .mkd
        * .mdown
    - ASFReader by the [asfreader plugin](./asfreader.py). Transforms an [ezt template](https://github.com/gstein/ezt) into GFM and then to HTML.
        * .ezmd
4. Content Init (content_object_init). This is signaled after a Reader has processed content.
    At this point plugins can review, record, and transform the html content.
    - The [asfgenid plugin](./asfgenid.py) performs a number of steps. Some of the steps are optional.
        * Metadata transformation by looking up {{ key_expression }} in the page metadata.
        * Inventory of existing id attributes.
        * Set id and class attributes specified by {#id} and {.class} syntax.
        * Assign id to all headings without ids.
        * Insert a Table of Contents if a [TOC] tag is present.
