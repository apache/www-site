# Gihub Flavored Markdown (GFM)

## Markdown

File extensions are **md**, **markdown**, **mkd**, and **mdown**.

This site uses a version of [cmark-gfm][1] by [GitHub][2] through a Pelican Plugin *gfm.py* created by Apache Infra.

- [Mastering Markdown][3]

- [Detailed Specification][4]

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
    
- [Examples](https://sindresorhus.com/github-markdown-css/).

## EZT

File extension for processing ezt template results as Markdown is **ezmd**.

Pages may be [ezt][13] templates that create Markdown output

- [ezt Syntax][14]

- www-site examples

  - [export notifications][15] shows creating markdown.
  - [main page][16] has several html examples. The location may change, look for `pl_`.
  - [foundation page's pmc chair list][17]. The location may change, look for `projects.site`.
  - [simple board list][18].


[1]: https://github.com/github/cmark-gfm
[2]: https://github.blog/2017-03-14-a-formal-spec-for-github-markdown/
[3]: https://guides.github.com/features/mastering-markdown/
[4]: https://github.github.com/gfm/
[5]: https://github.github.com/gfm/#html-block
[6]: https://github.github.com/gfm/#example-139
[7]: https://github.github.com/gfm/#example-122
[8]: https://github.github.com/gfm/#autolink
[9]: https://github.github.com/gfm/#extended-www-autolink
[10]: https://github.github.com/gfm/#extended-url-autolink
[11]: https://github.github.com/gfm/#extended-email-autolink
[12]: https://github.github.com/gfm/#disallowed-raw-html-extension-
[13]: https://github.com/gstein/ezt
[14]: https://github.com/gstein/ezt/blob/wiki/Syntax.md
[15]: https://github.com/apache/www-site/blob/main/content/licenses/exports/index.ezmd
[16]: https://github.com/apache/www-site/blob/main/content/index.ezmd#L382
[17]: https://github.com/apache/www-site/blob/main/content/foundation/index.ezmd#L140
[18]: https://github.com/apache/www-site/blob/main/content/foundation/board/index.ezmd
