# Apache Foundation Website (www.apache.org)

- [Production Website](https://www.apache.org/)
- [Staged Website](https://www.staged.apache.org/)

This repository provides the website for the main website of The Apache Software Foundation.

- [Content](content) -- See [creator notes](markdown.md).
  - **.md** pages in GitHub Flavored Markdown which can include HTML. See [asfgenid.py](theme/plugins/asfgenid.py).
  - **.ezmd** pages in a combination of [ezt](https://github.com/gstein/ezt/blob/wiki/Syntax.md) and GitHub Flavored Markdown. See [asfreader.py](theme/plugins/asfreader.py).
  - **.html** files are treated as static files.
  - static assets of all types.
  - .htaccess files for redirection and rewrite rules.

- [Issues](https://github.com/apache/www-site/issues)
- [Branches](https://github.com/apache/www-site/branches)
- [Pull Requests](https://github.com/apache/www-site/pulls)

The website is built with [Pelican](https://blog.getpelican.com).
CI/CD is via a [.asf.yaml file](https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features).

- [Base Template](theme/apache/templates/base.html) -- single html skeleton
- [Templates](theme/apache/templates) -- see the full template folder
- [Custom Plugins](theme/plugins) -- site data and page processing
- [Pelican Configuration](pelicanconf.py) -- pelican configuration
- [ASF data load](asfdata.yaml) -- ASF metadata to be used by ezt and pelican. See [asfdata.py](theme/plugins/asfdata.py).
- [ASF YAML build](.asf.yaml) -- ASF infrastructure instructions
