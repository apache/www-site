# Apache Software Foundation Website (www.apache.org)

This repository provides the source for the main website of The Apache Software Foundation. The content and design of the site is the responsibility of VP, Marketing and Publicity. Any proposed improvements or fixes should have issues created first, to be approved by VP, M&P.

- [Production website](https://www.apache.org/)

- [Content](content)
  - **md** pages in GitHub Flavored Markdown (GFM), which can include HTML.
  - **ezmd** pages in a combination of [ezt](https://github.com/gstein/ezt/blob/wiki/Syntax.md) and GFM.
  - **html** files are treated as static files.
  - Static assets of all types.
  - .htaccess files for redirection and rewrite rules.

- [Issues](https://github.com/apache/www-site/issues)

- [Branches](https://github.com/apache/www-site/branches). Note that [.asf.yaml](./.asf.yaml) is set up for autopreview. A branch named `preview/mytest` for example is automatically staged at https://www-mytest.staged.apache.org/

- [Pull requests](https://github.com/apache/www-site/pulls)
  - [Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request)

## Linking to Markdown (.md) sources

Markdown (.md) files appear in the preview pane of the GitHub editor approximately as they will appear in the generated website.
This is convenient for reviewing changes, but means that linking to the source requires a bit more work compared with other files.
If you want to create a permalink or raise an issue that relates to a particular Markdown source line, proceed as follows:
- link to the rendered file as normal, for example: [https://github.com/apache/www-site/blob/main/README.md](https://github.com/apache/www-site/blob/main/README.md)
- append ?plain=1 to the URL, for example: [https://github.com/apache/www-site/blob/main/README.md?plain=1](https://github.com/apache/www-site/blob/main/README.md?plain=1)
- the file displays with line numbers, as for other types of files. Click a line number to generate a permalink or create an issue with a link to the line.

## Documentation

Read the [ASF-Pelican Getting started guide](https://infra.apache.org/asf-pelican-gettingstarted.html) and the pages it links to.

## Notes

The website is built with [Pelican](https://blog.getpelican.com).

Continuous Integration / Continuous Deployment (CI/CD) is via the [.asf.yaml file](https://github.com/apache/infrastructure-asfyaml/blob/main/README.md)
mechanism, which runs [Buildbot](https://ci2.apache.org/#/builders/3).
The build is triggered by changes to the source, and also every 8 hours (currently 1:22, 9:22, 17:22) to pick up changes to external data. It also rotates the featured projects on the main page.

- [Pelican Configuration](pelicanconf.yaml) -- Pelican configuration.
- [ASF Data Load](asfdata.yaml) -- ASF metadata to be used by ezt and Pelican. See [asfdata.py](https://github.com/apache/infrastructure-pelican/blob/master/plugins/asfdata.py).
- [ASF YAML Pelican Build](.asf.yaml) -- ASF infrastructure instructions.

The [svn history](https://svn.apache.org/viewvc/infrastructure/site/trunk/) was not migrated and remains available.

Foundation records, including minutes of Board meetings, remain in [svn](https://svn.apache.org/viewvc/infrastructure/site/trunk/content/foundation/records/),
except for the [index page](content/foundation/records/index.md).

The Secretary maintains the [board calendar - calendar.md](https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/calendar.md)
in SVN. At the start of each build, a setup entry in [pelicanconf.yaml](pelicanconf.yaml) calls the [get_calendar.sh](get_calendar.sh) script, which copies the calendar into `content/foundation/board`.
Changes to the calendar file do not automatically trigger a build, but the file changes rarely
(about once a month, when the minutes are published)
and there are regular builds which pick up any changes.

During Pelican builds a special index page – https://apache.org/website/index.html – is updated which lists all of the generated pages.

## Local development and testing

If you wish to update and test the site locally, there is a Docker build script you can use.
You will also need Git, and familiarity with working in a command-line shell.

**The following instructions should work for Unix, Linux, and macOS, but will need adjustment for Windows.**

- Install [Docker](https://www.docker.com/get-started).
- Change to a suitable directory.
- Get the Infra Pelican setup: `git clone https://github.com/apache/infrastructure-pelican`.
- Change to the checkout: `cd infrastructure-pelican`.
- Build the container: `docker build -t pelican-asf .`. This will take a while the first time.
- Change to a suitable directory.
- Get the ASF website source: `git clone https://github.com/apache/www-site`.
- Change to the website checkout: `cd www-site`.
- Create a dummy authorisation file: `touch .authtokens`.
- Start the continuous builder: `docker run -it -p8000:8000 -v $PWD:/site pelican-asf`. This will generate a lot of output, but will eventually stop. [N.B. Pelican calls the data generation plugins 3 times before generating the pages.]
- If you want to add some additional debug output, add the following line to `pelicanconf.yaml`: `debug: true`
- Browse to http://localhost:8000/ .
- If the builder reports a failure trying to find content/theme/apache, try changing
  the `theme` entry in `pelicanconf.yaml` to `theme: ../theme/apache` and re-run

If you make changes to the local copy of www-site, these will be automatically built, and should
appear in the browser when you refresh the page.

## Previewing proposed changes

Any branch in the www-site repository that is named preview/* will 
auto-build and stage to www-*.staged.apache.org.

If you need to test your changes, create a branch such as preview/_your-asf-id_

Commits to it will be staged at www-_your-asf-id_.staged.apache.org

**Note:** the branch name must not include any "." characters,
or browsers will refuse to display the site due to an invalid SSL certificate.
The underscore character should not be used either, as it is disallowed in host names.

## Contact Us
For any questions or support, please reach out to us by visiting our contact page at [Apache Contact Us](https://www.apache.org/foundation/contact) page.

