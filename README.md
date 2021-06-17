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

- [Documentation](docs/)
  - Web Site Committers
    - [Markdown](docs/markdown.md) focuses on what users need to know about GitHub Flavored Markdown (GFM) in order to maintain content.
    - [Feature branches](docs/branches.md) focuses on handling major changes.
    - [Local builds](docs/builds.md) focuses on how to develop on a local linux or macOS system.
  - Web Site Designers
    - [Theme](theme/apache/templates/.) focuses on what designers need to know about the website theme.
  - Web Site Developers
    - [Data modeling](docs/data.md) focuses on what developers need to know in order to maintain and expand on the metadata made available to the site.
    - [Process](docs/process.md) describes the full end to end build from the developers perspecitve.
    - [Plugins](theme/plugins/.) describes the plugins that are included in the repository.

The website is built with [Pelican](https://blog.getpelican.com).
Continuous Integration / Continuous Deployment (CI/CD) is via the [.asf.yaml file](https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features)
mechanism which runs [Buildbot](https://ci2.apache.org/#/builders/3/).

- [Pelican Configuration](pelicanconf.py) -- pelican configuration
- [ASF Data Load](asfdata.yaml) -- ASF metadata to be used by ezt and pelican. See [asfdata.py](theme/plugins/asfdata.py).
- [ASF YAML Pelican Build](.asf.yaml) -- ASF infrastructure instructions

The [svn history](http://svn.apache.org/viewvc/infrastructure/site/trunk/) was not migrated and remains available.

Foundation Records including Board Minutes remain in [svn](http://svn.apache.org/viewvc/infrastructure/site/trunk/content/foundation/records/)
except for the [index page](content/foundation/records/index.md).
