Title: About the Infrastructure web site
license: https://www.apache.org/licenses/LICENSE-2.0

## Updating the Apache website

You can help improve the`apache.org` website.

If you have changes to propose to the top-level ASF
documentation (/foundation/ and most /dev pages), open a GitHub Issue.

For changes to pages in /dev that relate to Infrastructure, send patches using the [Infra issues
tracker](http://issues.apache.org/jira/browse/INFRA). Do not reveal
obviously sensitive information, such as the name of any private mailing
lists.

**Note:** PMC chairs are responsible
for ensuring that the portions of the website which relate to their PMC are
up to date.


## Introduction  {#introduction}

The source code for this website is in the GitHub repository `https://github.com/apache/www-site`. Everyone has read access. All ASF committers have write access, although 
you should only commit changes to areas you are responsible for. 

This website uses Markdown files and supports <a href="https://guides.github.com/features/mastering-markdown/" target="_blank">Github Flavored Markdown (GFM)</a>.

## Updating the documentation

The project name for the ASF website (`www.apache.org`) on GitHub is `www-site`.

1. Navigate to the repository and, within the "content" folder, locate the page you want to edit.
2. Open the page in edit mode and make your edits. Add a note describing your changes and, if relevant, identifying the Git issue or Jira ticket the changes relate to.
3. Save the page.

If you have commit permissions, the page updates automatically. Otherwise, the system opens a pull request which someone with commit permissions will review.

These changes will be mirrored worldwide within a few seconds.


## How The Homepage Works  {#homepage}

The `apache.org` homepage is built from a number of different 
information sources and tools. `index.html` combines static content and a shell that pulls in content 
from `/index_page/`.

The **Featured Projects** section is built dynamically, and rotates 
to show a different set of three Apache projects each time the file 
is checked in. To correct data 
in this section, ensure that every Apache project has:

- A logo in apache.org/img/_projectname_.jpg that is 212 pixels wide
- A proper description in the project's [DOAP file from projects.a.o](https://svn.apache.org/repos/asf/comdev/projects.apache.org/data/projects.xml)

VP, Marketing and Publicity is the formal owner of the homepage, and 
can be reached at `press@`.


## What information is where  {#whereinfo}

The main `apache.org` website provides overall information about the ASF 
and some technical information about the systems and 
tools that Apache projects use to build their independent software products.

Some useful starting points are:

- /dev/ is a top level site map of infrastructure and tooling documentation.
- /foundation/ gives top level information about the ASF as a corporation.
- /foundation/governance/ explains how the corporation is governed, which is separate from how Apache projects work.
- /legal/ includes information about ASF legal policies.
- /licenses/ includes copies of the Apache license and answers to FAQs about it.
- /press/ is for press or analyst information.
- /security/ is the home of the Security Team that coordinates responses to common vulnerabilities and exposures (CVEs) with projects.


## Improvements to /dev documentation  {#review}

The documentation at `/dev/` is the top layer of overall Infrastructure documentation. The next layer, [infra.apache.org][1], has information committers and PMCs may need to get the best use out of Apache's infrastructure. The third layer, the [infrastructure wiki][2], holds lists, detailed scripts, and instructions mainly of use to the Infra team.

There are three main purposes for this documentation:

1. A general introduction to Infra, quick-reference information such as which channel to use to ask a particular question, and explanations for committers and contributors, so they can get the information they need to carry out standard tasks related to Apache projects without calling on Infra assistance.
2. Resources for PMCs. We encourage PMCs to do as much as possible to help themselves without invoking Infra.
3. Resources for Infra staff and volunteers.


  [1]: https://infra.apache.org
  [2]: https://cwiki.apache.org/confluence/display/INFRA/Index
