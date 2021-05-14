## Build Process

1. Load the ASF data.

2. Each **md** and **ezmd** file is processed. For **ezt** [asfreader.py](theme/plugins/asfreader.py).

  - Read file metadata.
  - Read page contents.
  - For **ezt** process as a template. [EZT Syntax](https://github.com/gstein/ezt/blob/wiki/Syntax.md)
  - Generate HTML.

3. Apply HTML transformations using [asfgenid.py](theme/plugins/asfgenid.py).

  - Expand metadata in {{ data.x.y }} format.
  - Inventory id attributes.
  - Process id and class attribute annotations -- {#id} and {.class}. Add permalinks for id attributes.
  - For all headings w/o an id create one by slugifying heading text. Add permalink.
  - For all tables w/o a class add class="table".
  - If there are one or more [TOC] tags in the content build a Table of Contents using Headings after the last [TOC] and place at the first.

4. The generated HTML is then inserted into the template and then template processed with Pelican's JINJA.
