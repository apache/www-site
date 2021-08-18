# Apache Foundation Website (www.apache.org)

We are now in production

- [Production Website](https://www.apache.org/)

This repository provides the source for the main website of The Apache Software Foundation.

- [Content](content)
  - **md** pages in GitHub Flavored Markdown which can include HTML.
  - **ezmd** pages in a combination of [ezt](https://github.com/gstein/ezt/blob/wiki/Syntax.md) and GitHub Flavored Markdown.
  - **html** files are treated as static files.
  - static assets of all types.
  - .htaccess files for redirection and rewrite rules.

- [Issues](https://github.com/apache/www-site/issues)

- [Branches](https://github.com/apache/www-site/branches). Note that [.asf.yaml](./.asf.yaml) is setup for autopreview, so that a branch named `preview/mytest` for example is automatically staged at https://www-mytest.staged.apache.org/

- [Pull Requests](https://github.com/apache/www-site/pulls)
  - [Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request)

## Linking to Markdown (.md) sources

Markdown (.md) files are shown approximately as they will appear on the generated website.
This is convenient for reviewing changes, but means that linking to the original source requires a bit more work compared with other files.
If you want to create a Permalink or raise an issue that relates to a particular Markdown source line, proceed as follows:
- link to the rendered file as normal, for example: [https://github.com/apache/www-site/blob/main/README.md](https://github.com/apache/www-site/blob/main/README.md)
- append ?plain=1 to the URL, for example: [https://github.com/apache/www-site/blob/main/README.md?plain=1](https://github.com/apache/www-site/blob/main/README.md?plain=1)
- the file will then be displayed with line numbers, as for other types of files. Click on a line number to generate a Permalink or create an issue with a link to the line

## Documentation

Read the [Getting started guide](https://infra.apache.org/asf-pelican-gettingstarted.html) and the pages it links to.

## Notes

The website is built with [Pelican](https://blog.getpelican.com).

The [infrastructure-pelican Dockerfile](https://github.com/apache/infrastructure-pelican/blob/master/Dockerfile) can be used to build the website locally, for testing.

Continuous Integration / Continuous Deployment (CI/CD) is via the [.asf.yaml file](https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features)
mechanism which runs [Buildbot](https://ci2.apache.org/#/builders/3/).

- [Pelican Configuration](pelicanconf.yaml) -- pelican configuration
- [ASF Data Load](asfdata.yaml) -- ASF metadata to be used by ezt and pelican. See [asfdata.py](https://github.com/apache/infrastructure-pelican/blob/master/plugins/asfdata.py).
- [ASF YAML Pelican Build](.asf.yaml) -- ASF infrastructure instructions

The [svn history](http://svn.apache.org/viewvc/infrastructure/site/trunk/) was not migrated and remains available.

Foundation records, including minutes of Board meetings, remain in [svn](http://svn.apache.org/viewvc/infrastructure/site/trunk/content/foundation/records/),
except for the [index page](content/foundation/records/index.md).
