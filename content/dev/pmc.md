Title: Project Management Committee Guide
license: https://www.apache.org/licenses/LICENSE-2.0

# Project Management Committee Guide

This guide outlines the general responsibilities 
of [Project Management Committee](/foundation/how-it-works.html#pmc) (PMC) members in managing their projects and common how-to procedures for 
day to day maintenance. For a high-level overview of the what and why of PMCs,
read the <a href="/foundation/governance/pmcs" target="_blank">PMC Governance overview</a>. 

## Contents

  - [Intended audience](pmc.html#audience)
  - [What is a PMC?](pmc.html#what-is-a-pmc)
  - [PMC required policies](pmc.html#policy)
  - [How to perform the duties of the PMC chair](pmc.html#chair)
  - [PMC membership management](pmc.html#pmcmembers)
  - [Project committer management](pmc.html#committer-management)
  - [PMC FAQs and how-tos](pmc.html#faq)
 

## Intended audience  {#audience}

This document is for *PMC members* of ASF projects. A PMC is responsible for the proper 
[management and oversight of an Apache project][1], and reports directly to the board four times a year.
Every PMC has a Chairperson, who is also an [officer of the ASF][6] with the title "Vice President, Apache *Projectname*".

  - If you are a committer who is not yet a PMC member, you probably want to [read the committers guide](committers.html) instead.
  - If you are not yet a committer but are interested in joining an Apache project, please start at the [Contributors Tech Guide](contributors.html).
  - For more information on how Apache projects operate, see
    -   [What makes Apache projects different?](https://blogs.apache.org/comdev/entry/what_makes_apache_projects_different)
    -   the [Apache PMC governance overview](/foundation/governance/pmcs.html)
    -   [Project independence](https://community.apache.org/projectIndependence.html)

## What is a PMC?  {#what-is-a-pmc}

A project management committee (PMC) is a committee of the Apache Software
Foundation charged with [responsibility and governance][4] for their top level project. The PMC is
the vehicle through which decision-making power and responsibility for
oversight devolves to developers.  

While committers on a project have the ability to update the code, only 
the PMC as a body has the authority to vote on formal releases of the 
project's software. The PMC is also responsible for voting in new 
committers and PMC members to the project, and following other 
policies as outlined in this document.

## PMC required policies  {#policy}

Terms in this section are used as per [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
The Board expects all PMCs to understand and comply with these policies.  

#### Report project status quarterly or when requested  {#reporting}

PMC Chairs / Vice Presidents **SHALL** submit a 
[report on their project health](/foundation/board/reporting)
on a quarterly basis to the Board, or when requested by a director. In the 
absence of the PMC Chair, or at their direction, any other PMC members may write and submit the report.

Similarly, PMC Chairs **SHALL** provide replies to board questions about the PMC report or other project operations **to the board@ mailing list** and **SHALL** ensure the PMC 
takes any actions required by the board.

PMC Chairs/Vice Presidents have [specific additional duties][2] listed below.

#### Comply with Legal Affairs policies  {#legal-policy}

PMCs **SHALL** ensure that the work on their project and the code that 
they produce complies with relevant [Legal Affairs Committee](/legal/) 
policies, including using the Apache License appropriately, handling IP and 
copyrights correctly, handling cryptography, and 
[producing official software releases][3] of their products.

#### Comply with Brand Management policies {#brand-policy}

PMCs **SHALL** ensure that they manage their projects' brand and treat 
all Apache&reg; marks properly as defined in the overview of  
[PMC Branding Responsibilities](/foundation/marks/responsibility) and the [Apache Project Branding Requirements](/foundation/marks/pmcs) 
for project websites.

#### Responsibly report misuses of Apache brands {#brand-report}

PMCs **SHALL** review use of their Apache project brand by third parties 
and follow the [Apache trademark use reporting guidelines](../foundation/marks/reporting.html) when appropriate.

#### Conduct project business on public mailing lists  {#mailing-list-naming-policy}

All technical decisions and the great majority of the work of any PMC should 
take place on their normal public mailing lists, such as dev@ or user@. Decisions 
**SHALL NOT** be made in other media, like IRC, Slack channels, or face to face at conferences; project members should bring proposals arising from such settings back to the appropriate mailing 
list for all participants to discuss and decide upon.

PMCs **SHOULD** ensure that decision-making processes allow input over a sufficient 
amount of time - typically at least 72 hours - so that project participants in various time 
zones have a chance to participate in the decision.

#### Limit project business on private mailing lists  {#mailing-list-private}

All PMCs **SHALL** restrict their communication on
private mailing lists **only** to issues that [cannot be discussed in public](#private-or-public), such as discussion of:

  - pre-disclosure security problems
  - pre-agreement discussions with third parties that require
    confidentiality
  - nominees for project committer, PMC or Foundation membership
  - personal conflicts among project personnel

All projects **SHALL** use the name `private@*project*.apache.org` for this
private list (where *project* is the name of the project). PMC members must 
maintain the confidentiality of messages on privately-archived mailing lists. 

## How to perform the duties of the PMC chair  {#chair}

See the [definition of PMC and chair](../foundation/how-it-works.html#pmc)
, and be familiar with the [ASF Bylaws](../foundation/bylaws.html). The  [advice for new PMC chairs]( https://svn.apache.org/repos/private/foundation/officers/advice-for-new-pmc-chairs.txt) has additional useful information.

### Review board meeting minutes about their project
PMC chairs should monitor the minutes of board meetings for entries that are relevant to their 
project, especially any comments directors make on their project's reports, 
pass relevant information back to the project PMC, and otherwise 
serve as a conduit for any questions between the board and the PMC.

**Note:** Feedback from the board and the unedited minutes of board meetings are
**not** normally public information, and should be treated confidentially.  Only after 
the board has formally approved the minutes of a meeting (normally the following month) are they published publicly.
Feedback on meeting minutes is usually sent to the private@ list.

### Ensure the project's quarterly board report is submitted

While the PMC chair is not required to write the quarterly board report personally, they are 
responsible for ensuring the report is complete and submitted on time.  

  - The reporting schedule is listed in [committee-info.txt](https://svn.apache.org/repos/private/committers/board/committee-info.txt), along with the procedure.
  - See the [Board reporting guidelines and how-to](../foundation/board/reporting) for what the reports should contain. (Note that new PMCs are required to report monthly for the first quarter.)
  - Project reports are about the status of the project, together with any community and
legal issues or other general impediments. If there are issues requiring board assistance, make 
that apparent, separate from any general project news. 
  - You should seek input from your PMC, but it is mainly your report to the board on behalf of your project. The chair does not report
to the PMC - the chair reports to the board (and ultimately to the ASF membership).
  - You can use the [**Apache Committee Reporter** tool](https://reporter.apache.org/) to simplify some data collection for your report.
  - Examples of past project reports are in the [Board Meetings and Calendar](../foundation/board/calendar.html).

Remember that, as in any committee, the chair is a **facilitator** and their role within the PMC
is to ensure that everyone has a chance to be heard and to enable meetings and mailing lists 
to flow smoothly. A well-run PMC works together to draw up the information for 
their board report, but the chair is specifically responsible for getting it to the board. There is no concept of "leader" in the Apache way.

### Ensure new committer requests are made
After the project has elected new committers and followed the process to
get their account created, the PMC chair ensures 
the new committer has [karma](#newcommitter) (access) to the project repositories.

### Send NOTICEs and followup when adding PMC members
The chair is responsible for sending the NOTICE email to the board, then
updating [committee-info.txt](https://svn.apache.org/repos/private/committers/board/committee-info.txt)
and the LDAP committee group after the candidate accepts -- see the [detailed procedure](#newpmc).

### Maintain ASF records on the PMC roster
Maintain information about your PMC's composition in the SVN "committers" repository
at [committee-info.txt](https://svn.apache.org/repos/private/committers/board/committee-info.txt) and keep it up-to-date. 
Remember to update the LDAP committee  group as well.

Be aware of anything currently in incubation at
[incubator.apache.org](https://incubator.apache.org).

### Subscribe to the `board@` mailing list if desired
PMC Chairs are welcome to subscribe to the `board@` mailing list to stay aware of Foundation level issues that may affect 
their project. This used to be a requirement, but the Board made it optional in June 2020. Note that `board@` is a privately-
archived mailing list, so **information from board@ must NOT be forwarded elsewhere**. 

### How to change your PMC's chair  {#newchair}

If your PMC wishes to change their VP / Chair, typically you hold 
a vote or otherwise reach a consensus in the PMC about who the 
new Chair should be.  Then anyone on the PMC can
send `board@` an official resolution for the board to approve (or reject) at the next monthly board meeting 
before this change officially takes place. 

Use the [Whimsy Board Agenda](https://whimsy.apache.org/board/agenda)
(requires Apache login) to submit the formal chair change resolution to 
the next month's board meeting. Log in to the Board Agenda and click the 
_add item_ button at the bottom to add the appropriate resolution. If your PMC 
members have difficulty logging into Whimsy, contact the `board@` mailing list for help.

Once the board approves the resolution (typically at the next monthly meeting), the newly appointed project VP and Chair will get instructions for how to accept the new role.

### Is a PMC Chair an officer or Member of the ASF?

Yes, they are officers of the corporation, and no, they are not necessarily "Members". PMC Chairs are appointed by the board to be the 
Vice President of their top level project and to serve as the Chair of their 
Project Management Committee. [Read an explanation why PMC Chairs are legal officers of the
corporation](../foundation/faq.html#why-are-PMC-chairs-officers). 

PMC Chairs/VPs are not necessarily Members of the ASF. Members of 
a PMC and the Chair/VP have merit within their project, which is different from 
the governance of the ASF as a whole Foundation. Members of the Foundation 
are essentially [shareholders in the legal corporation][5] that hosts our hundreds of 
software projects.

### How to reply to board feedback on a project's report  {#board-feedback}

The board reads each submitted project report at its monthly meetings, and sometimes 
individual directors make comments or ask questions, using the Whimsy tool, in 
the meeting agenda. Shortly after each month's meeting, the Secretary uses 
Whimsy to automatically send all comments out to each project's `private@` 
mailing list and to the PMC chair directly.

Some comments are simple feedback or notes on the report; some comments are 
specific questions from directors. If there is any question 
or unusual feedback in this email, the board expects that a PMC member 
will send a reply-all response to `board@`.

### Why would a project move to the Attic?  {#move-to-attic}

As described on [its homepage](http://attic.apache.org), the Attic is meant
to _provide oversight for projects which otherwise would not have oversight_.

It's fine for ASF projects to be mature and quiet, with little development
activity happening, and that in itself is not a reason to move to the Attic.

However, to be viable, an ASF project must have enough active PMC Members
who provide oversight for the project. They fix and release code and handle
security vulnerabilities or other serious bugs, for example.

While the PMC doesn't have to fix all the bugs or requests that come
in, the Board must be able to verify that there are at least three PMC
members monitoring the project's mailing lists who **could** reply and act
in such cases.

To this end, the Board will sometimes perform a [PMC roll call](#roll-call).

Sometimes, members leaving a project would result in fewer than three PMC
members remaining, while other community members are willing to continue
maintaining the project. In such a case, the best way forward, if possible,
is to elect a few of those community members to the PMC to keep it viable.

If that does not happen, the Board can "reboot" a PMC by re-establishing
it with a new or modified PMC. As an example, see the
[Board resolution to reboot the Apache Xalan PMC](/foundation/records/minutes/2019/board_minutes_2019_02_20.txt)
from the February 2019 Board minutes.

Mature or very slow-running projects should periodically (we recommend
once a year) do a PMC roll call to confirm their viability.

In summary, the only reason for a project to move to the Attic is lack
of oversight due to an insufficient number of active PMC members.

Note that going to the Attic is not necessarily a bad thing: it's
merely a reflection that there isn't currently an **active** community
to manage the project. It's also a clear way to set the right expectations
for users of the project's code.

### How to perform a PMC roll call  {#roll-call}

The Board sometimes asks for a roll call for projects that fail to
report regularly, have very little visible activity on their mailing lists
or releases, or do not seem to be responsive to security issues.

If a Director (on behalf of the Board) asks a PMC to perform a roll
call, the PMC **must** respond by showing via an email thread that
[at least three PMC members](/legal/release-policy.html#release-approval)
are active.

A PMC can do this by each of its active members replying to a thread
to `board@`, or by having one PMC member send a link to a thread on the PMC's
lists where at least three PMC members reply that they are still monitoring
the project and could assist with creating new releases if needed. **Be sure**
to let the `board@` mailing list know when at least three PMC members have
responded (or always cc: `board@`).

Projects **must** reply to the Board's request for a roll call. Failure
to show that at least three PMC members are present before the next monthly
Board meeting can lead to the Board concluding the project is due to
shut down and move to the [Apache Attic](https://attic.apache.org/)
for lack of oversight.

See also [why would a project move to the Attic?](pmc.html#move-to-attic), above.

## PMC membership management  {#pmcmembers}

### How to add a PMC member  {#newpmc}

The usual process for adding a member to a PMC is to:

  * Elect the new member by having the PMC vote on the project's private list, according to the [ASF voting rules](/foundation/voting)
  * Follow the below process to finalize the nomination.

In specific cases, however, such as low PMC participation preventing the number
of required votes from being reached, or the PMC chair being unavailable for an
extended period of time, PMC members can ask the Board to make the necessary
changes to the PMC without a successful vote. In such a case, the Board would only
be concerned if there is opposition within the PMC.

#### Send the board a NOTICE of the vote to add someone

Adding a PMC member requires sending an email notification
to the Board's mailing list and the PMC's private mailing list.
Be sure to send a *separate* [NOTICE] email for *each* individual you are nominating.

Once the notification appears in the [**archives**](#board_archive), an invitation
may be sent out.

The PMC Chair or any other PMC member can send this notification if they include
a link to the formal PMC decision or a vote thread on their private@ list.

**Ensure the PMC private list is copied - but do not CC the potential member**. For example:

```

    To: board@apache.org
    Cc: private@<project>.apache.org
    Subject: [NOTICE] Jane Doe for <project> PMC

    <project> proposes to invite Jane Doe (janedoe) to join the PMC.
```

If a vote was held, include

```
The vote result is available here: https://lists.apache.org/...
```

The link should be a permalink from the `https://lists.apache.org/` mail archive.
This allows any member to review the mail vote.

If the candidate does not (yet) have an Apache account, include
that fact in the notification email. 

#### Check the board archive for mail delivery  {#board_archive}
Also the list is moderated, so it may take a day or two before the email appears on the list and is seen by the board members.
If the email is not moderated in time, it will never reach the list.
The invite can only be sent out once the notice email has been posted to the list.

**The PMC Chair MUST check the board archives to ensure that the NOTICE has actually been delivered to the board mailing list.**

You can do this by sending a mail to the EZMLM server at `board-index@apache.org` followed by a `board-get.XXX@apache.org` (`XXX` = message number).
If the EZMLM server refuses the request, check that you are [subscribed to the board@ list](#subscribe-to-the-board-mailing-list)
ASF Members can also access the <a href="https://mail-search.apache.org/members/private-arch/board" target="_blank">board archive</a>.

It is not sufficient to check that you have seen the email; the email must appear in the board archives.

#### Invite the person

To formally add the candidate to your PMC -  the PMC Chair needs to:

  - Formally invite the new PMC member (with copy to the private@ list). If they accept, then:
  - Update the **[roster](https://whimsy.apache.org/roster/committee/)**
with the new PMC member.
  - This gives the new PMC member access to the PMC-only parts of SVN for the project.

The new PMC member should now subscribe to your PMC's private@ mailing list in the normal way. 

**Note** that the appointment to the PMC does not become official until the Foundation's records (i.e. committee-info.txt) have been updated
(see 7C of the September 2022 board minutes).

If the candidate declines PMC membership or doesn't respond to the invitation, please follow up the original notice to the board to say that
the change did not happen, and do not update the records.

New PMC members are required to read the [PMC Branding Responsibilities](/foundation/marks/responsibility).

### When members leave the PMC  {#membersleave}

#### How to resign from a PMC  {#resign}

"Resignation of a member of a PMC shall take effect
immediately upon receipt of their resignation, as recorded on any of
the Foundation's mailing list archives, but can be revoked by that
member within 72 hours of receipt."

The detailed process can be found
in the [September 2022 board minutes](/foundation/records/minutes/2022/board_minutes_2022_09_21.txt)
under section [7 C. PMC Membership Change Process](https://whimsy.apache.org/board/minutes/PMC_Membership_Change_Process.html).

#### How to mark a PMC member as resigned or emeritus  {#emeritus}

The ASF does not have any formal concept for an "emeritus PMC member" - an individual is either a member
of the PMC or not. Projects are free to establish their own policies for designating members of the PMC 
who are inactive but remain on the PMC, or those who were formerly on the PMC and have resigned. Some 
projects have also established guidelines to allow former PMC members to remain on the private PMC list, 
and to allow a PMC member to request reinstatement simply by asking (note that
the standard Board notification procedures must still be followed for reinstatement).

Once the PMC member's resignation is received on a mailing list of
the Foundation, the resignation is considered effective. However, the
PMC member has 72 hours to withdraw their resignation. Notifying the board is not required, but
encouraged to ease tracking.


Once the resignation has taken effect, the PMC Chair should:

  - Update **[committee-info.txt](https://svn.apache.org/repos/private/committers/board/committee-info.txt)**
to remove the former member's entry.
  - Update the appropriate LDAP committee group - See the [SVN access](#SVNaccess) section above.

You can do these updates using the [Whimsy roster](https://whimsy.apache.org/roster/committee/).

#### Should a PMC remove inactive members?  {#pmc-removal}

Projects can establish their own policy on handling inactive members,
as long as they apply it consistently. It is not a problem to retain members of the PMC who have become inactive,
and it can make it 
easier for them to stay in touch with the project if they choose to become active again.

Typically, PMC members who are no longer able to participate will resign from the PMC.
However, if a PMC chooses to remove one of its members (without that member's request or consent), it must request the
Board to make that decision (which is typically done with a resolution at the Board's
next meeting). The PMC chair should send an email to the board@ mailing list 
detailing the request for removal and the justification the PMC has for that removal, and
copy the project's private@ list.

#### What to do if a committer or PMC member has died  {#deceased}

This is a tragic occurrence, but with so many communities here at
the Foundation, it is bound to happen occasionally. Each community can
decide how they want to handle this issue:

 - You **must** notify root@apache.org and secretary@apache.org. This will allow the person's account to be disabled,
   and any necessary Foundation records to be updated, for example removal from PMC/podling membership rosters
   and cancellation of email subscriptions.
 - Feel free to add a page to our [memorial site](/memorials/). Many communities have
   gathered eulogies and remembrances.



## Project committer management  {#committer-management}

### How to invite new project committers  {#newcommitter}

It is the responsibility of each project PMC to review productive contributors 
to their project and consider nominating those contributors as committers, and then 
voting them in as committers (and possibly PMC members as well). PMCs 
should be guiding their new committers, to make sure that they have access to the proper resources and ASF documentation (e.g. the [Guide for new
committers](new-committers-guide.html) and the [Committers'
FAQ](committers.html) ). If a productive individual is 
*already* an Apache committer on another project, you can just 
[grant them karma to your project](#karma).

### How to submit new committer account requests  {#noncommitter}

Most PMCs hold formal votes on committer nominees to decide whether to invite them,
although PMCs are free to follow their own documented process for finding 
consensus on adding new committers.

Once the PMC formally wants to invite an individual to be a committer, 
it should invite the person, and require the new committer to 
[submit an Individual Contributor License Agreement (ICLA) to the secretary](/licenses/#clas). 
The secretary **cannot process new committer accounts** without receiving the CLA acknowledged by the ASF secretary or
a board member. Your PMC needs to work with the new committer to ensure
that their CLA is received and recorded properly, so you need to monitor
the file `iclas.txt` in the `foundation/officers` repository. Only ASF
members and officers (PMC chairs) have access. The Apache Phone Book
has an [Unlisted CLAs](https://home.apache.org/unlistedclas.html) page
which is generated daily from the `iclas.txt` file, and recently received CLAs
appear there.

Encourage your new committer to include both the PMC name and their desired account ID
on the submitted ICLA. If both of these pieces of information are provided on the ICLA
form, the ICLA is sent to the correct address (`secretary@apache.org`), and the secretary
or assistant can verify a [VOTE][RESULT] for the new committer, the account will be requested
by the person (secretary or assistant) filing the ICLA.

If the new account information is not provided on the ICLA, the PMC chair is responsible to
get the new committer's desired account ID and request the new account.

Once the ICLA has been filed, use the [ASF New Account Request form](https://whimsy.apache.org/officers/acreq)
to generate the request.  Should the PMC chair be unavailable for any
reason, any ASF member can act on their behalf.

**For incubating projects**: If 

  - the podling has its status page set up
  - the podling is identified on the ICLA
  - a valid account id is provided on the ICLA
  - the podling is listed on the incubator's ProjectProposals page
  - the submitter is named on the project proposal

the secretary or assistant will request the account. In other cases, the Mentors will request
the account. If the podling you're requesting accounts for
doesn't appear in the drop-down list of podlings,
provide the podling name in the free text input box.

Most PMCs decide on new committers through an election process on
their private mailing list. Please include a URL or message-id
reference to the final vote tally using the [Apache Mail Archives](https://lists.apache.org).

New account requests will only be accepted from PMC chairs and ASF members.
If you are acting on behalf of a project which was accepted for incubation,
please get in touch with the sponsoring PMC and let them take care of
requesting any new accounts.

The request will be CC'd to the PMC mailing list. Barring objections from the
PMC, the infrastructure team will create the account and assign the
appropriate group permissions. This may take a few days. A message
confirming the new account will be sent to the PMC mailing list and to the new
committer.

If the ICLA included the PMC name, normally the account will already have been set up
in the correct LDAP group that will grant access to the project source repository.

If not, the PMC takes over and provides the rest of the infrastructure
needs. In particular, the PMC chair has the ability **and the
responsibility** to provide write access to the project's source
repository.

#### How to grant SVN access (karma) to a project source repository  {#SVNaccess}

For most operations, PMCs do not need to do anything to grant new committers SVN access to their areas. However, if the automatic LDAP process does not work for some reason, the PMC can use  the <a href="https://github.com/apache/infrastructure-p6/blob/production/modules/subversion_server/files/authorization/asf-authorization-template" target="_blank">ASF authorization template</a>. 

The **[groups]** section of the file defines SVN group names and
their members. The groups are defined as LDAP references; see below
for how to update them.

To grant or deny access to directories in SVN, the PMC chair needs to
update the appropriate **[group]** entry. The PMC chair has access to make
changes to the project groups held in LDAP. 

#### Updating LDAP group membership using Whimsy Roster  {#SVNWhimsy}

PMC Chairs may use the [Whimsy roster](https://whimsy.apache.org/roster/committee/) tool,
navigate to the committee, and either double click on the person or the plus
sign to modify or add a person.

#### How to grant karma to incubator podling committers  {#karma-podling}

Podling authorization is managed using LDAP groups, just like PMCs - use the [Whimsy Roster tool](#SVNWhimsy).

#### How To grant karma to someone who already has an Apache account  {#karma}

In this case, **contact your PMC first**. All PMC chairs can give an existing
Apache ID access to their project's repositories. See [how-to](#SVNaccess) above.
For podlings, the PMC is the Incubator.

Chairs may use [Whimsy's roster tool](#SVNWhimsy) to modify their project membership lists.

*ONLY* if a PMC chair is not responsive or unavailable, then <a href="https://infra.apache.org/contact.html" target="_blank">contact 
the Apache Infra team</a> for assistance. This should only be for people who already
have an Apache account and need extended commit access.


```
    
Karma request form:

    To: infrastructure
    Cc: private@<project>.apache.org, committers@email.address
    Subject: Karma request

    Userid:       ...

    Requested karma:  <project>[/<subproject>]...
    Reason:       [a few lines explaining why someone needs karma]

    [Vote:        reference to mail archive for PMC bookkeeping]
```
 
Once the request has been received, a person with appropriate access will
extend the karma and reply accordingly.

#### How to access other Apache infrastructure servers  {#machine}

Most committers can access all needed resources with just their 
Apache ID and their project's repositories and mailing lists.  But if 
you do need access to
[other official ASF servers](machines.html), request an
account by <a href="https://infra.apache.org/contact.html" target="_blank">contacting 
the Apache Infra team</a>.


```

    Account request form:

    To: infrastructure
    Cc: private@<project>.apache.org, committers@email.address
    Subject: Machine account request - <machine>

    Userid:     ...
    Machine:    ...
    Groups required:...
    Reason:      [a few lines explaining why an account is required]

    [Vote:       reference to mail archive for PMC bookkeeping]
```

The administrator of the machine will then reply accordingly.


## PMC FAQs and how-tos  {#faq}

#### How to import code from an external source  {#import}

If the code to be imported is licensed under a Category A license and the intent is to
distribute the code under its original license, copy the code into
the Apache source repository, preserving its original header. Add the license for the code
to the top level LICENSE file. If the team makes changes to the code, add an
Apache header to the file(s) that notes the changes.

If the code to be imported is intended to have continued development in Apache, 
and the owners of the code are willing to contribute their Intellectual Property 
to Apache under an 
[Individual Contributor License Agreement](/licenses/#clas), 
[Corporate Contributor License Agreement](/licenses/#clas), or
[Software Grant Agreement](/licenses/#grants), 
you can copy the code to the Apache repository, changing the license header 
to the standard Apache header. In this case, the code needs to be
reviewed by the 
[Incubator](https://incubator.apache.org) via the 
[Intellectual Property Clearance process](https://incubator.apache.org/ip-clearance/index.html).

#### How to search the archives for private lists  {#mail-archives}

There are a number of Apache lists whose archives are not available to the
public. Posts to these lists are considered
[confidential](../foundation/how-it-works.html#confidential). Do not quote them on public lists our outside the ASF without the permission of the author.

PMC members may search archives of their project's `private@` list. ASF members
and officers may also read PMC mailing list archives. There
are several ways to access our private archives:

*   [lists.apache.org](https://lists.apache.org/), also called PonyMail, is the preferred archive system.
*   [mail-search.apache.org](https://mail-search.apache.org/) is the older mod_mbox system.
*   PMC members who are not also ASF Members can
    [fetch](/foundation/mailinglists.html) archives in the normal way: via the
    `-get` administrative command to ezmlm to download groups of mails.

#### Who can subscribe to a project's private list?  {#who-can-be-on-private}

All PMC members of a project should be subscribed to their project's `private@`
list. In addition, ASF Members may read any project's private list. In general,
people not on a PMC should not be allowed to subscribe to `private@` lists unless they are ASF Members.

You can [self-subscribe to mailing lists](https://whimsy.apache.org/committers/subscribe).

#### How to check PMC and LDAP memberships  {#data-checks}

There are two main ways to check the membership of PMCs and LDAP groups:

  - Committers can view, and PMC chairs can update, PMC rosters using 
[Whimsy](https://whimsy.apache.org/roster/committee/).
  - Anyone may view Apache Phonebook pages at [https://home.apache.org/phonebook.html](https://home.apache.org/phonebook.html).
From there you can link to a specific PMC like this: [home.apache.org/phonebook.html?pmc=gump](http://home.apache.org/phonebook.html?pmc=gump)

Please allow time for any changes to LDAP and committee-info.txt to propagate to the Phonebook app.

**Note:** The official record for PMC membership is the committee-info.txt file, and not the LDAP committee group.

#### How to request a wiki, a blog, or a new mailing list  {#new-wiki}

<!--{#new-blog} {#new-mail-list}-->

See [the Contact Infra roadmap](infra-contact#requesting-action) to request these and other resources for your project.

#### Where should we discuss project business?  {#private-or-public}

In almost all cases, discussion of project business should happen on that project's publicly archived
mailing lists - the [detailed policy](#mailing-list-naming-policy) explains the few exceptions.

Discuss any topic which does not specifically need to be private on an appropriate public mailing list. This
allows the public to read about the direction of the project and to offer early feedback.

Most projects do their work on their **dev@**_project_.apache.org mailing list. 
Some projects also have a **user@** mailing lists for more general or non-technical 
questions, and may have a **general@** mailing list. Every project should have 
a clear [mailing lists page](/foundation/mailinglists.html) that has instructions for subscribing to their lists and 
for reading the archives.  

#### How to get help or escalate issues  {#escalation}

Normally, Apache projects are expected to manage their own affairs; the 
people on a PMC and regular committers typically know the best way to 
work within their project communities.  However, if things don't work 
well, or the project community has serious policy questions or disagreements 
about how to work together, you can ask for help elsewhere around the ASF.

The [detailed Escalation Guide](/board/escalation) 
helps communities figure out where to get help from other groups at Apache, 
or, if all else fails, to ask for help or appeal issues to the Board.  
The [Apache Organizational Chart](/foundation/governance/orgchart) 
can help you find the right officer or group to ask for help on most issues, 
like legal, branding, press, or the many [other services the ASF offers projects](/board/services).


  [1]: /foundation/governance/pmcs
  [2]: #chair
  [3]: /dev/release
  [4]: /foundation/governance/pmcs.html
  [5]: /foundation/governance/members
  [6]: /foundation/#who-runs-the-asf
