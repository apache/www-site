Title: New Project and Software Product Naming Process
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

All Apache Podlings, and any Apache&reg; top level project (TLP) must use this process when coming up with a new project name,
when coming up with a name for a new subproject or downloadable software product, or establishing a new TLP.

**Contents**

<div class=".pull-right" style="float:right; border-style:dotted; width:200px; padding:5px; margin:5px">

See Also: [Trademark Resources Site Map][resources] and [Podling Name Search Guide](https://incubator.apache.org/guides/names.html).

</div>

[TOC]

## Why do we need a project/product naming process?  {#rationale}

When it comes to trademarks conflicts it might be necessary to show other parties that ASF trademarks
were chosen in good faith and with appropriate research. As a non-profit, we have no
business infringing on pre-existing trademarks for the software products or services
from other organizations.  Nor would you want to start with a new software name
that's likely to be confused with some other organization's software products.

For pre-existing projects being submitted to Apache, we still need to follow
this process.  This ensures both that we fully understand any past or potential
name conflicts around your project name, as well as to ensure that all
trademark rights are properly transferred to the ASF in
a timely manner during incubation. The ASF must own all trademark 
rights in a podling's branding before they may graduate.

## Who needs this process?

 - Every project which wants to name or rename a new product
 - Every project which wants to rename the project itself
 - Every Incubator Podling which wants to graduate from the Incubator and become either a top level project or a sub project
 - Every project which is created without going through the Incubator (including projects returning from the Attic)

## When do I need to start this process?  {#startsearch}

You need to start this process early enough to complete your search and to give
 the trademarks committee time to review.  Preferably start this process well before:

 - your project graduates from the Apache Incubator
 - you release any software products with the name
 - you publish any product / project websites (exception: Incubator pages)

Please note: renaming projects (later, if a change is required) requires a lot of resources from our Infrastructure team. It is recommended to
run the process as early as possible. Incubator podlings could run it after they have been accepted, but before
they start to request resources. This will cause a few days delay, but might save a lot of trouble later.

## How To: Perform a Suitable Name Search  {#namesearch}

After you have carefully read [Project Naming And Descriptions][1] and [the trademarks main page][2] and some [common-sense hints for choosing names][3],
make sure your PMC (Podlings: PPMC) has decided on a name. Usually this is done by a public vote.

When your PMC has decided on a name, a "suitable name search" must be done.

### Create an Name Search issue

First, create a an issue in [Suitable Names Search JIRA space][4]. Good examples are:

 - [Apache Open Climate Workbench][5]
 - [Apache Onami][6]

Describe the origin of your name and please include a description of the product's functionality in the
issue. It's important to understand what kind of functionality the product offers if there is a question with
another company's similarly named software product.  In particular, do not use fluff or marketing-speak here:
this should be a factual description of the functionality your software provides to users.

If you are a podling where the existing name is coming along, please note if there 
are any registered trademark(s) for the podling.  Including a list from the donor of 
the marks, along with a clear statement of intent to donate, is very helpful in evaluating the results.

### Research common software sources  {#sourcesearch}

Please consider to research at least the following sources:

 - GitHub
 - SourceForge.net
 - Google Code
 - Ohloh.net
 - Google, Bing, Yahoo search engines

Start by searching for just your chosen name, for example "Foo".  If that finds a lot of hits
that are clearly unrelated, try searching for "Foo software".  This is the first
step to narrowing to relevant results, since trademarks generally only apply
within a specific class of goods - in our case, the software products we
offer for download.

Note all results in the according JIRA issues. When done, inform trademarks @ apache.org that you have
finished your research. Please wait until the trademarks team has responded, as we
rely on Apache volunteers to organize this work.

Please **don't include any interpretation** in the JIRA issue, just try to note all facts you can find.
If you have specific questions on what the results mean, please ask trademarks@ and
include your project/podling's private mailing list (i.e. not your public dev@ list).

### Research Registered Trademarks  {#regsearch}

Perform the same search as above, but for registered trademarks.
A thorough review of registered trademarks in countries your project
is active in is important, because if a third party has already
registered a similar name for a similar kind of software project,
it is unlikely we'll be able to use the name.

- [USPTO][uspto] - required
- [EU Organization for Harmonization][euorg] - recommended
- [Canada Trademark Search][canada] - optional
- [China Trademark Search][china] - optional
- [India Trademark Search][india] - optional
- [WIPO Global Brand Search][world] - optional

Again, it is important to store the factual results of your name
search, but do **not** offer comments or interpret the results
of the search.  Review of the results happens afterwards with
trademarks@.

**USPTO Search Tips**

For common words, you will end up with a long list of mostly irrelevant
registered marks, so you will want to narrow your search to only relevant
kinds of marks.  Try this search criteria to narrow the results:

1. Open the [**USPTO** website][uspto]
1. Click to go to directly to the **Trademark Electronic Search System (TESS)** search system
1. Click to do the **Word and/or Design Mark Search (Free Form)**
1. Enter your product name with the following search string and submit:

`(ProductName)[BI,TI]  and  (software or computer)[GS]  and  (live)[LD]`

If this produces zero results, that's a good start: mark that in the Name
Search issue!  If this produces a handful of results, you will want to
click through to review the Goods & Services description of each one
to see if they offer similar functionality to your product.
Copy the blue TDSR link (*not* the URL from the search, but the TDSR
link within each page result) into your Name Search issue.

If the above search produces a lot of results, you may want to experiment
with the USPTO's search query criteria, or review only results where the
marks are directly related to your name.

**USPTO Search Criteria**

The above search string is a good starting search query for most software products:

- **BI**: searches the Basic Index, which includes some obvious variants of a name
- **TI**: searches the Translation Index, which may include other language or wording translations of names
- **GS**: for the Goods & Services description, we typically are only concerned with software products (sometimes for computers)
- **LD**: means Live trademarks only; either applications in process or currently registered marks (not including Dead marks, ones that were never granted or have expired)

Note that there is a reasonable [query syntax for the USPTO freeform search](http://tmsearch.uspto.gov/webaka/html/help.htm),
in particular if you need to search variants or phonetic versions of your name.

**Important: USPTO URLs**

Note that many of the URLs in the USPTO's "TESS" Search System are session-specific, 
and will **not** work if you copy the URL.  The only reliable way to send or save a link to 
a specific page is:

- Perform your search as above
- Click on one of the specific serial number lines to see a single trademark
- Click on the blue "TSDR" button near the top of the trademark listing
- Copy the **entire** URL from that page, which will be something like:

`https://tsdr.uspto.gov/#caseNumber=87925939&caseType=SERIAL_NO&searchType=statusSearch`

The whole URL there will work if you send it to someone else (or put it in a PODLINGNAMESEARCH).  

### Result interpretation & Approval  {#searchresults}

The trademarks team will interpret your findings and probably discuss it on trademarks@apache.org (please note:
this is a private list, all messages from there should be treated as such).

**The VP, Apache Brand Management will approve the PODLINGNAMESEARCH issue.**
Note that project members are not authorized to approve name search issues.

Important: you must wait until your trademark has been approved. There is no lazy consensus.
In particular, approvals will typically not be issued until the podling is nearing graduation.

Once the name is approved, you can work with your new trademark - and be sure to
update your website with the appropriate &trade; or &reg; symbols.
Incubator Podlings: please don't forget to update your Incubator status page.

### Transferring Podling Trademarks To The ASF  {#podlings}

[Incubation][incubator] is the process by which an existing community formally works towards becoming an Apache top level project.  This includes the donation of various IP associated with the podling, like code and documentation, and includes the trademark rights to any branding the podling uses.

When a company donates a pre-existing project as a podling, one of the decisions to make is: are they donating the trademarks of the project as well or not?  Either way is fine; however this decision should be made before the website and resources for the podling are created to avoid rework later.  

If the company chooses not to donate the trademarks, then the podling should be submitted with a new name and/or logo during the acceptance process.  If the trademarks are to be donated, then please read on!

The **ASF must own all trademark rights and goodwill to the branding used in podlings before graduation** to top level project will be approved. This is to ensure that the ASF can defend the project's brand, and that we can maintain independent governance for our projects.  However the  process can take some time, and we are flexible with the legal details of the transfer during incubation.

### Legal Trademark Work During Incubation  {#incubation}

During acceptance of a podling, we require a clear statement of intent from the current trademark owner that they will donate the trademarks to the ASF before graduation.  This can be via email from some officer of the existing trademark holder; it does not need to be legally binding, just socially binding, since if the trademarks are not transferred the podling won't graduate.

During incubation, the donor and the podling itself should both work to ensure the [actual podling branding][incubatorsite] displayed on each website is updated to reflect the proper Apache *Projectname* branding everywhere.  We understand this can take time; however showing progress here is an important way to help a diverse community to grow in the podling; another graduation requirement.  Immaterial of the legal details, any practical work done with the trademark(s) should be by Apache policies where possible, and focusing on transitioning to "Apache *Projectname*" and the like.

Once a podling is well-established and before it begins any vote to graduate, the existing trademark holder needs to sign a standard trademark transfer agreement to the ASF.  We appreciate it if the current owner can propose a standard agreement for our counsel's review.  The podling PPMC needs to get counsel for the donor to [work with trademarks@apache.org][contactus] to agree and sign the transfer.

### When A Podling Doesn't Graduate  {#failed}

If a podling honestly fails incubation (i.e. they honestly try but don't
make it), and we have not executed specific legal agreements to transfer
any *registered* trademarks, then they will stay with the original
donor without any problem.  Unregistered trademarks aren't likely to be
an issue either way.

If the trademarks have been legally transferred to the ASF, the donating organization should work with VP Brand to equitably handle the matter.  The ASF's need is to protect the trademarks of all of our active project communities.  Podlings that have exited incubation without graduating are not something we have a continued interest in maintaining.


[1]: http://apache.org/foundation/marks/pmcs.html#naming
[2]: http://apache.org/foundation/marks/
[3]: http://apache.org/dev/project-names.html
[4]: https://issues.apache.org/jira/browse/PODLINGNAMESEARCH
[5]: https://issues.apache.org/jira/browse/PODLINGNAMESEARCH-26
[6]: https://issues.apache.org/jira/browse/PODLINGNAMESEARCH-27
[uspto]: http://www.uspto.gov/trademarks-application-process/search-trademark-database
[euorg]: http://oami.europa.eu
[canada]: http://www.ic.gc.ca/app/opic-cipo/trdmrks/srch/tmSrch.do?lang=eng
[china]: http://www.chinatrademarkoffice.com/
[india]: http://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx
[world]: http://www.wipo.int/branddb/en/
[resources]: https://www.apache.org/foundation/marks/resources
[incubator]: https://incubator.apache.org/
[incubatorsite]: https://incubator.apache.org/guides/sites.html
[contactus]: https://www.apache.org/foundation/marks/contact
