Title: Process Overview For Policing Apache Brands
license: https://www.apache.org/licenses/LICENSE-2.0

This Process Overview For Policing Apache Brands is a simple turnkey 
way that Apache&reg; project PMCs can police use of their
own trademarks and respond to questions about use of their brand. 
This document is focused on Apache committers 
and PMC members; outside parties should start with our 
[Apache Trademark Policy](//www.apache.org/foundation/marks/).

To ensure that the ASF is able to continue to use our existing trademarks 
to refer to our own software projects and communities, we need a process
that allows us to address infringements of our trademarks by others.

**DRAFT DRAFT DRAFT** This is a proposed draft - very useful to start from, but not complete yet. Comments needed; hope to have some tooling to assist PMCs as well.  

# Contents  {#links}

<div class=".pull-right" style="float:right; border-style:dotted; width:200px; padding:5px; margin:5px">

PMCs need to [take responsibility][responsibility] and can use the [Guide for Evaluating infringements][reporting].

</div>

[TOC]
 
# Process Overview  {#introduction}

Once we are made aware of potential infringements or misuses of an Apache project's 
trademark, that PMC needs to take action.  

**Process design goals** are to:

  - Be as simple for PMCs/committers to use as practical
  - Separate different steps (i.e. reporting; evaluating; taking preliminary action; following up on responses from a third party)
  - Build up actual examples of misuse (or not) over time with resolution descriptions of which are trademark problems or not
  - Provide very basic statistics showing evidence of projects policing mark(s)

**DRAFT Process Overview**

1. A trademark misuse is reported to us (via trademarks@ or PMC or other method).  We should capture:
  * **Who reported**  the issue? If a committer, we can more easily communicate with them (and perhaps have them login to an issue tracker to post information themselves), if non-committer this will be via email.
  * What is the **specific URL** (or picture of an brochure or physical goods) where the issue occurs?
  * What is the **actual reported misuse**?  I.e. we should store a copy of the phrase, paragraph, or description of the graphical misuse of the Apache trademark itself for later reference.
  * **Who is misusing** the trademark? I.e. what company or individual produces that website or physical goods?
  * Does the reporter have any **other comments** or insights?
1. PMC will **evaluate** the report.
  * Follow the [Checklist of issues to consider][evaluate].
  * Consider who owns the website (company, individual, etc.); what the specific use is; if related to product, service, other; etc.
     - In particular, the PMC will need to determine a contact email for who owns the website.
  * If the use is clearly nominative use, then there is no action to take; we don't necessarily need to *track it*.
     - Inform the reporter it's nominative use, and thank them.
  * If the use is a clearly an infringement by a software company where end users could be confused about our software product brand, track the issue.
     - Follow the [contact procedure templates][templates]. If you don't get a positive response, you will need to follow up again and/or escalate with trademarks@.
  * If the use may not be legally infringing, but is clearly violating our trademark policy, *track it*.
     - Follow the [contact procedure templates][templates]. We can always **ask** someone to follow our policy and make changes, even if we couldn't legally force them to change.  Best bet is to ask politely and firmly.
   * If the PMC isn't sure if the use is a problem that we need to address, *track it*.
     - Forward the issue to trademarks@ for an answer if we should address it.
     - If this is a problem, then the PMC should follow the [contact procedure templates][templates].

 ##Trademark Issue Tracking Tool Ideas##

Inputs will come from a variety of sources; we will always get some reports from non-committers 
who are sending emails, possibly to the wrong places.  So ensuring PMCs know where to bubble up
trademark complaints will be important.  Data tracked in any tool should be committer-private.  
Anyone may submit issues to the tool (need to prevent mass spam), but non-committer submitters
should not be able to see issue progress once submitted.

For any project, any committer on that project could have access to the tracking tool and making comments, but usually 
only PMC members should be actually sending contact emails and updating the status of issues.
Docs should be clear that committers should not discuss issues in public unless the PMC makes 
a specific request to do so - policing trademark misuse is best done privately and directly with the other party.
In particular, we do not discuss details of the policing process with the original reporter unless we have a specific reason to do so.

Many requests will probably come in via email, so if preliminary evaluation clearly points 
to nominative use / not an issue, then we don't need to formally track it in a tool.  But if there is any question
within the PMC about if it's a problem, then we should track it, so that we can better capture 
the decision and reasons why it is/isn't a problem for future reference.  Note that many 
requests will continue to come in via trademarks@, so having a tool that we can cleanly handoff 
evaluation and action from brand to the PMC is also valuable.

**Data Security**

  - Anyone should be able to create a submission (until we need captcha to reduce spam)
  - Submitter should see a clear ACK that it was received
  - Only brand committee and relevant PMC (plus possibly committers on that PMC) should be able to see those issues
  - Option to echo changes to relevant private@ and/or trademarks@ lists for awareness 

##Trademark Issue Tracking Tool Data Fields##

**Newly Reported Issue **

Field Name | Description (bold = required)
----------|-----------
ID | Like JIRA - project name/trademark and sequential number
Submitter | Email to contact submitter; if is a committer just use their ID
Submission | URL to original email if submitted via a mailing list
**Trademark** | Specific Apache trademark being reported (dropdown of project names)
**URL** | Specific URL where the trademark misuse is found
**Context** | Copy/paste of paragraph or similar content that the misuse is found in (in case the URL later changes)
IsLogo | Checkmark if this involves a graphical logo (defaults to no; project name)
ContentOwner | Name of website owner (company, individual, if known at time, otherwise PMC should fill in for issues being addressed)
OtherNotes | Text field for submitter to provide explanation of why they feel this is an issue; also if they see a pattern of misuses by the same organization elsewhere.

**Fields Added During Tracking**

Field Name | Description (bold = required)
----------|-----------
**Status** | As in JIRA - overall status in workflow
**Type** | Type of issue - software product, services related to software, anything else (swag, etc.)
Comments | List of comments added by any committer ID
URLOther | List of URLs added by any committer ID (for showing other similar URLs)
Waiting | Flag denoting we are *waiting* for a response from an outside party
Responses | List of copy/paste responses from outside party, in case we want to keep record
Explanation | Text field for Brand Management committee to fill in explaining why resolution was made (i.e. why this is/is not an issue)
FAQURL | If this issue has been turned into a general .../marks/faq, URL to the answer for future reference


**Potential Request Workflow**

- (Might be in email) - not tracked if the PMC determines it doesn't needs addressing.
- Newly reported issue - presumably should email relevant private@ list for awareness (unless perhaps the PMC is self-reporting)
- Evaluated: not an issue (with explanation). - *Closed*
- Evaluated: obvious infringement (waiting for PMC to make first contact)
- Evaluated: policy violation not likely an infringement (waiting for PMC to make first contact)

- Outside party has been contacted (*waiting* for their reply)
- Outside party has been contacted a second time without a reply (*waiting* for their reply)
- Outside party has responded positively
- PMC has reviewed outside party has positively fixed the issue - *Resolved*

- Outside party has responded negatively - Escalate to trademarks@
- Outside party has made apparent legal threats - Escalate to vp-brand@ and seek legal counsel - *Closed*
- Outside party has responded positively after escalation (PMC & trademarks@ review positive fix) - *Resolved*
   
# Other Trademark Guidelines  {#other}

For more information about Apache marks, please see our [formal Trademark
Policy][policy] or the site map of [Apache Trademark Resources][resources].  
PMC members should also read the [PMC Branding Responsibilities][responsibility] guide.

# Important Note  {#notes}

**Nothing in this ASF policy statement shall be interpreted to allow any
third party to claim any association with the Apache Software Foundation or
any of its projects or to imply any approval or support by ASF for any
third party products, services, or events.** 

[policy]: //www.apache.org/foundation/marks/
[contact]: //www.apache.org/foundation/marks/contact
[contactother]: //www.apache.org/foundation/marks/contact#other
[responsibility]: //www.apache.org/foundation/marks/responsibility
[resources]: //www.apache.org/foundation/marks/resources
[reporting]: //www.apache.org/foundation/marks/reporting
[templates]: //www.apache.org/foundation/marks/templates/
[evaluate]: //www.apache.org/foundation/marks/reporting.html#issues
