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

Markdown (.md) files appear in the preview pane of the editor approximately as they will appear in the generated website.
This is convenient for reviewing changes, but means that linking to the source requires a bit more work compared with other files.
If you want to create a permalink or raise an issue that relates to a particular Markdown source line, proceed as follows:
- link to the rendered file as normal, for example: [https://github.com/apache/www-site/blob/main/README.md](https://github.com/apache/www-site/blob/main/README.md)
- append ?plain=1 to the URL, for example: [https://github.com/apache/www-site/blob/main/README.md?plain=1](https://github.com/apache/www-site/blob/main/README.md?plain=1)
- the file displays with line numbers, as for other types of files. Click a line number to generate a permalink or create an issue with a link to the line

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

The [svn history](https://svn.apache.org/viewvc/infrastructure/site/trunk/) was not migrated and remains available.

Foundation records, including minutes of Board meetings, remain in [svn](https://svn.apache.org/viewvc/infrastructure/site/trunk/content/foundation/records/),
except for the [index page](content/foundation/records/index.md).

Also the [board calendar - calendar.md](https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/calendar.md)
is maintained in SVN by Whimsy. It is copied into content/foundation/board at the start of each build by the [get_calendar.sh](get_calendar.sh) script
which is initiated by a setup entry in [pelicanconf.yaml](pelicanconf.yaml)
Changes to the file do not automatically trigger a build, but the file changes rarely (about once a month)
and there are regular builds which will pick up changes within an hour or so.

## Local development and testing

If you wish to update and test the site locally, there is a Docker build script you can use.
You will also need Git, and familiarity with working in a command-line shell.
[The following instructions should work for Unix and macOS, but will need adjustment for Windows.]

- install [Docker](https://www.docker.com/get-started)
- change to a suitable directory
- get the Infra Pelican setup: `git clone https://github.com/apache/infrastructure-pelican`
- change to the checkout: `cd infrastructure-pelican`
- build the container: `docker build -t pelican-asf`. This will take a while the first time.
- change to a suitable directory
- get the ASF website source: `git clone https://github.com/apache/www-site`
- change to the website checkout: `cd www-site`
- Create a dummy authorisation file: `touch .authtokens`
- Start the continuous builder: `docker run -it -p8000:8000 -v $PWD:/site pelican-asf`
- this will generate a lot of output, but will eventually stop.
- browse to https://localhost:8000/

If you make changes to the local copy of www-site, these will be automatically built, and should
appear in the browser when the page is refreshed.

