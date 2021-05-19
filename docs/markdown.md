# Gihub Flavored Markdown (GFM)

File extensions are **md**, **markdown**, **mkd**, and **mdown**. If you have an **mdtext** file it is from the Apache CMS.

This site uses a version of [cmark-gfm][1] by [GitHub][2] through a Pelican Plugin *gfm.py* created by Apache Infra.

- [Mastering Markdown][3]

- [Detailed Specification][4]

- Differences from markdown.pl

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

- Apache CMS Migration

  - Change extension from **mdtext** to **md**
  - Replace the multiple line `notice:` with a one line reference to the Apache License.
  - Any {#id} and {.class} annotations must have any # tags between the annotation and the heading text removed.
  - Only one {#id} or {.class} annotation is allowed on a tag.


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
[13]: https://sindresorhus.com/github-markdown-css/
