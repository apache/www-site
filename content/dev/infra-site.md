Title: About the Infrastructure web site
license: https://www.apache.org/licenses/LICENSE-2.0

# Updating the Infrastructure area of this website

You can help improve the`apache.org` website.

If you have changes to propose to this top-level ASF
documentation (/foundation/ and /dev/), please send patches using the [Infra issues
tracker](http://issues.apache.org/jira/browse/INFRA). (Do not reveal
obviously sensitive information, such as the name of any private mailing
lists.) 

**Note:** PMC chairs have write access to SVN and are responsible
for ensuring that the portions of the website which relate to their PMC are
up to date.


## Introduction  {#introduction}

The source code for this website is in the SVN repository
`https://svn.apache.org/repos/asf/infrastructure/site/trunk`.  
Everyone has read access. All ASF committers have write access, although 
you should only commit changes to areas you are responsible for. 
Only ASF members and the Infrastructure team can actually publish 
to the live website.

This website uses Markdown files managed by the [Apache CMS tool](cmsref.html).

## To update the documentation using the CMS system  {#CMS_single_page}

1. Install the bookmarklet from the [cms](https://cms.apache.org/) page.
  You only have to do this once.
1. On the live site, not in the cms, navigate to the page you wish to edit.
1. Click the bookmarklet. The CMS system prepares an editable version of the website.
1. When the page with **Edit file** at the top appears, click `Edit`.
1. The page editor appears. Almost all files in the CMS are in <a href="https://www.markdownguide.org/basic-syntax" target="_blank">Markdown format</a>. The left pane is where you edit the page. The right pane shows you what the page looks like with your edits included. Below the left pane is a section where you can edit the page header, including the page title and the license notice.
1. Make your edits.
1. Add a brief log message about your edits. If you want to skip the 'commit' in step 9, check the 'Quick Commit' checkbox.
1. Click `Submit` to save your edits to your local work area.
1. If you did not check the checkbox in step 7, click `Commit` to save the updated file to SVN and trigger a staged build. 
1. The results should appear shortly on the `http://www.staging.apache.org/dev/cms.html` site.
  (You may have to refresh your browser window to see the updated content.)
1. When you are happy with the updated page **and** you are an ASF Member, click `Publish Site` to deploy your edits. Provide a brief checkin comment and click `commit` to push to the production server.

## To update the documentation using only command-line tools  {#command_line}

This option is only available to ASF Members.

```
    $ cd infrastructure/content/dev/
    $ $EDITOR infra-site.mdtext
    $ svn commit
    ... wait a short while for the page to be rebuilt ...
    ... **ONLY IF** you are an ASF Member, then publish: ...
    $ curl -sL http://s.apache.org/cms-cli | perl
```

**Note**: the project name for the ASF website (`www.apache.org`) is `www`.

These changes will be mirrored worldwide within a few seconds.


## How The Homepage Works  {#homepage}

The `apache.org` homepage is built from a number of different 
information sources and tools. `index.html` combines static content and a shell that pulls in content 
from `/index_page/`.

The **Featured Projects** section is built dynamically, and rotates 
to show a different set of three Apache projects each time the file 
is checked in (it is not currently rotating live). To correct data 
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
- /foundation/ give top level information about the ASF as a corporation.
- /foundation/governance/ explains how the corporation is governed, which is separate from how Apache projects work.
- /legal/ includes information about ASF legal policies.
- /licenses/ includes copies of the Apache license and answers to FAQs.
- /press/ is for press or analyst information.
- /security/ is the home of the Security Team that coordinates response to common vulnerabilities and exposures (CVEs) with projects.


## Improvements to /dev documentation  {#review}

The documentation at `/dev/` is the top layer of overall Infrastructure documentation. It is undergoing review and consolidation. Some material is migrating to the next layer, [infra.apache.org][1]. The third layer, the [infrastructure wiki][2], holds lists, detailed scripts, and instructions mainly of use to the Infra team..


There are three main purposes for this documentation:

1. A general introduction to Infra, quick-reference information such as which channel to use to ask a particular question, and explanations for committers and contributors, so they can get the information they need to carry out standard tasks related to Apache projects without calling on Infra assistance.
2. Resources for PMCs. We encourage PMCs to do as much as possible to help themselves without invoking Infra.
3. Resources for Infra staff and volunteers.


  [1]: https://infra.apache.org
  [2]: https://cwiki.apache.org/confluence/display/INFRA/Index
