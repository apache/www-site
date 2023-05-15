Title: Board Reporting Guidelines for Project Chairs

license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

Apache Project Management Committees (PMC)  **must** report on their 
project's health and status quarterly to the Board of Directors.  While PMCs manage 
their own technical affairs independently, the Board provides the oversight to 
ensure that projects continue to operate as 
healthy, community- and consensus-driven projects that support our mission.
See also the [PMC duties FAQ](../../dev/pmc).  PMC Chairs and Apache Members 
are always welcome to [attend monthly board meetings][9].

**Contents**

[TOC]

## When to submit project board reports  {#when}

The **chair of each PMC** is responsible for submitting the report for their 
project on a quarterly basis, at least **one week before** each board meeting, 
according to the reporting schedule at 

    https://svn.apache.org/repos/private/committers/board/committee-info.txt

Reporting late, or outside of that schedule as mentioned below, does not shift this
schedule: if you were supposed to report in January, for example, but missed that and 
reported in February, your next report is still due in April. If you do not submit your report in sufficient time for the board to review it properly, you will 
be asked to re-submit a report the following month. 

While in most cases the chair works with other PMC members to write the
report, the report is ultimately the chair's responsibility to complete and submit.
The board sends several automated reminders to both chairs and PMC 
private@ mailing lists to help you remember this task.

*Exception:* newly-graduated PMCs must submit *monthly* reports for the first 
three months after leaving the Apache Incubator.  All podlings still in the 
Apache Incubator fill out similar reports using the [Incubator Podling Status][7] process.

## How to submit project board reports  {#how}

You must commit report content to the board's monthly meeting agenda.  
Use either the Whimsy Agenda tool or the ComDev Project Reporter tool, which generates a handy framework for you:

    https://whimsy.apache.org/board/agenda/
    https://reporter.apache.org/

 1. Log in using your Apache ID
 1. Find your project's entry and click the blue `Post Report` button at the bottom
 1. Be sure to Reflow the report before clicking Submit
 1. You can edit the report after submitting it, if you need to make changes

Command line users are free to check their reports in, following the 
existing format, so that automated tools can parse them, here:

      https://svn.apache.org/repos/private/foundation/board/

The board welcomes reports that any PMC submits apart from their scheduled reports, 
should they have something notable to report or to request feedback on. In this case, the chair 
may add the report as an attachment to the end of the agenda and create a corresponding 
comments section for it.

While the primary audience for the report is the Board of Directors, remember that
reports become public after the meeting, and provide a chronological history of your project. It is
beneficial to write the report with information that you want your community to know now,
and in a way that will provide a helpful history for someone looking over the reports in
the future.

You may wish to share the public portions of the report with your project community
through the users list or project website as well.

The [**Apache Committee Reporter** tool](https://reporter.apache.org/) can simplify 
gathering data for your report, but you ***must*** edit and add information from the 
generated template to cover the below points.  
Do not leave any of the **TODO markers** in your report when you submit it.

## Points to cover in board reports  {#guidelines}

These points are **not** a template; projects should not simply copy and 
paste these bullets into their reports.  Rather, these are the topics that the 
Board wants to hear about to be able to evaluate your project's health and status. 
Not all topics will be pertinent to every report; however the 
chair should consider each of these questions when writing a report.

 - Briefly describe what your primary software product actually does. **[REQUIRED]**

    For example:

        The Apache Xerces XML parsing library is easily configurable 
        and compliant with current standards.

    Note that this description should be similar to the basic 
    trademark description of your software product that your main website uses.

    See [Brand Naming and Description][1].

- Indicate your **project state** using one of the following keywords **[REQUIRED]**

   This is subjective of course, but helps adjust the Board's expectations
   based on where your project stands in its lifecycle. Additional comments
   are welcome, as needed.

   - **New**: a top-level project that's just getting started
   - **Ongoing**, with **high**, **moderate** or **low** activity, which you might quantify if appropriate
   - **Dormant**: not much happening on the code, but at least 3 PMC members ready to engage if needed
   - **At risk**: not enough active PMC members, or a significant number of contributors left the project, etc.
   - **Contemplating the Attic**: a project that's discussing going to the Attic or working on it already

 - Sum up the status and health of your project and the community in a few sentences
 
    Starting the report with a paragraph that describes the main things that your project has worked on
    over the last quarter will help readers understand the key points you want to convey,
    and will be helpful to those that want to summarize the reports or gather information on
    what is happening across the foundation quickly. You can then expand on these points in
    the rest of the report, using the below for guidance.

    The board is looking both for what technical changes the project is working on, as 
    well your community's health: are user questions answered, are 
    contributors acting appropriately, are there new contributors showing up?

 - Are there any issues for the Board to act on?

    If there are specific issues that the Board should be aware of,
    or should specifically address, then please call them out.  If not, then 
    it is helpful to state something like: "There are no Board-level issues at this time."

    When in doubt, it's better to include information or questions the PMC has 
    in a report, rather than waiting.  Remember also that you can always ask 
    the board questions via email, at the privately-archived board@apache.org list, at any time.

 - When did the project last make any releases? **[REQUIRED]**

    Regular software product releases are a sign of a healthy project.  Reports should list 
        the releases made in the past quarter, **with their release dates**.
        
    **NOTE**: If no releases were made, list the date of the most recent prior release,
        so that the board can determine how long it has been since the project
        has made a release.

 - Describe the overall activity in the project over the past quarter.
 
    Help the board evaluate the activity and health of the project by 
        discussing briefly how active the user and developer lists are.  Are user 
        questions being answered?  Is there new development happening, or just 
        bug fixes?  Does the development community regularly read and respond user emails and questions?

    **NOTE**: If activity is minimal, verify whether or not there are at least
        three active PMC members who can step in when needed, and include this
        information in the report.
        
 - Describe the current plans of the project
 
     A healthy project will often be working towards a common goal, or have a shared
     understanding of what is being done next - even if individual contributors have their
     own "itches". What are the main features being worked on? What releases are planned?
     Are there any specific efforts or branches of development under way? Provide a summary, without going depply into the technical details.
     
     Aside from the report, if the project is planning major announcements, get in touch with the Marketing and Publicity Committee at `press@apache.org` to coordinate announcements and press releases.
     
     Conversely, if activity is minimal, discuss how the project plans to address that -
     whether through seeking out new contributors, maintaining a dormant but available state, or preparing to move to the [Apache Attic](http://attic.apache.org/).  If you need help with attracting new contributors, you can ask [Apache Community Development][2] for tips.

 - When were the newest committers or PMC members elected? **[REQUIRED]**

     A healthy project tends to add new committers and PMC members regularly.  

     The report should indicate the **most recent date on which a committer was
     added** and **the most recent date on which PMC member was added** to your
     project, whether or not these date(s) were within the current reporting
     period.

 - PMC and committer diversity

    A healthy project should survive the departure of any single contributor 
        or employer of contributors.  Healthy projects also serve needs of many 
        parties.  Thus, the ASF prefers that projects have diverse PMCs and 
        committerships.  **IF** the PMC has any concerns or perceives a problem
  with its diversity, the report should include information on 
        the number of unique organizations currently represented in its PMC 
        and committership.

 - Project branding or naming issues, either in the project or externally.
 
    A project's brand &mdash; or name and logo &mdash; are important ways to identify 
         Apache projects, and a key way that new users become contributors.  Is 
         the project using its brand consistently?  Are there [third parties that 
         are using your project's name][3], logo, or good reputation improperly or 
         in a way that harms your project?

    If your project's website branding is not complete (see the [checklist][4]), include specific plans on
    how you'll work with the Brand Committee to finalize any remaining items.

    NOTE: bring all other branding issues to the [Branding Committee](/foundation/marks/resources) rather
    than including them in the Board report.
 
 - Legal issues or questions
 
    While the [Legal Affairs Committee](/legal/) handles any 
         legal issues, be sure to mention any that occur in your board report.
 
 - Infrastructure issues or strategic needs
 
     While the [Infrastructure team](/dev/#infrastructure) handles the details of providing 
         needed services to our projects, feel free to include any concerns, 
         strategic suggestions, or requests in your board reports. 


## Things _not_ to put in reports  {#donot}

 - Do not let commercial activity related to a project dominate a report.

      Each Apache project's [PMC manages the project](community.apache.org/projectIndependence) &mdash; not any third 
        party or outside organization.  Project reports should be about the project, 
        and should not discuss outside organizationss activities unless they directly relate to the health of the project.

 - Do not include private matters in a report without clearly marking them (see below)
 
 - Do not use non-Apache URL shorteners.
 
      If you have a long URL you wish to include in your report, **only** use the `https://s.apache.org/` URL shortener (Apache login required) to provide a shorter link. Apache cannot control how long an external URL shorterner will exist, or will maintain a given shortened URL.   

- There's no need to include details about committer affiliations in a report, unless the information points to an issue around diversity which may be included privately.

## Private information  {#private}
 
Occasionally a project may need to report something **privately** to the board,
but will not want the information to be published in public minutes.  Remember, 
all Apache Board reports become public, usually a month or two after the board meeting.

Such information is welcome in your report, but please include it within

``` 
<private>
```
 and
 
```
</private>
```
markers, **each on a separate line**, so we know what to omit from the public minutes.  To verify that the private 
markers are working, post your report in Whimsy, then refresh the page.  
Private sections properly marked appear with a grey background.

If the issue is *exceptionally* sensitive and you are very concerned about privacy, 
you may instead email directly to board-private@ or an individual board member, who will relay the information to the board.

## Other considerations for reports  {#other}

Project reports are the key way to let the board know about the status and 
health of your project.  With the diversity of projects at Apache, these 
guidelines can't cover all situations.  Feel free to include any additional 
information in your reports that you think is important about your project.

In particular, if there are any "trouble spots" - even potential ones - that 
the chair or other members of the PMC see in the project, be sure to include a 
note about them in your board reports.  It's better to include your concerns - or 
the concerns of part of your PMC - in reports, rather than letting the board 
potentially discover them later.

Finally, if you find yourself with a project that doesn't seem like it has 
enough activity to create much of a report, then be sure to report that fact. 
A healthy project should be aware if it is headed for the Apache Attic. 
Moving to the Attic isn't failure; it's simply recognizing that the project 
may have matured, drifted off, or been superceded by other
technologies, and we should recognize that fact.

The Board relies on reports from project chairs to be able to understand the 
status and health of projects.  If the Board cannot get a strong feeling 
about how your project is doing, then we will be contacting you for a 
follow-up report in the near future.

## Engaging with the Board about the report

Project reports are not a one-directional form of communication. They are
also an opportunity to engage with the Board. Project chairs are welcome to 
[attend the Board meeting as a guest][9] and discuss their report. They may also highlight specific
issues that they want the Board to consider (either in the report, or by requesting a
broader discussion item for the agenda).

Of course, chairs may also take the opportunity to raise any of these discussions on the
Board@ mailing list at any time, inside or outside of their reporting period.

Each time you need to submit a report, a Director will be assigned at random as the "Shepherd" for your project report.
They will be responsible for following up your report if it is late, describing the report
during the meeting if there are significant comments or a lack of approval, and conveying
any followup messages or actions to your PMC after the meeting.

As Directors review the report in the lead-up to the meeting, they may add comments into
the agenda alongside your report. We encourage project chairs to follow this [board feedback][8]
(currently by watching for SVN commits or using the [Whimsy Agenda tool][5]), and to respond in advance of the meeting when
practical.

The [board meeting][6] typically follows this pattern:

  1. Near the beginning of the month, the agenda is created and reminders are sent to projects
     due to report in the current cycle.
  2. Those responsible add reports to the agenda over the following weeks, up until the due date for the
     meeting.
  3. Directors review submitted reports at their convenience, and mark them as
     "pre-approved" if there are no concerns. They sometimes add comments or requests for more
     information, or edit the content for obvious corrections.
  4. Shepherds are assigned close to the meeting, and become more familiar with those
     project reports.
  5. A summary of the reports and any comments is sent to the Board mailing list in the 24
     hours prior to the meeting.
  6. During the meeting, the Board Chair moves quickly through reports that have received 5 or more
     "pre-approvals" and have no significant comments.
  7. Reports with significant comments, items for discussion, or a lack of pre-approval will
     be handed over to the shepherd, who will facilitate discussion and recommend any
     further action during the meeting.
  8. A summary is sent to all committers after the Board meeting, letting them know of the main
     outcomes.
  9. Any project reports that were not approved or were missing are added to the reminder list for the
     subsequent month.
 10. Shepherds reach out to project chairs with specific action items arising in the meeting in reponse to their
     reports.
 11. The Secretary sends any comments on your report by directors to your project's private@ list 
     shortly after the meeting concludes.  This gives you brief feedback 
     from the meeting, and a chance to enage with the board either to answer questions 
     or to ask for advice.  If the board has questions for your project, [reply-all and answer them][8].
 12. Reports are published as part of the minutes, when approved in the subsequent monthly meeting of the
     Board of Directors.
  
As you can see, ensuring we receive your report on time, that it includes all necessary details, and that you address any comments greatly enhances the flow of the Board meeting, which needs to cover more than
80 project and podling reports each month, in addition to other business.


  [1]: /foundation/marks/pmcs#naming
  [2]: http://community.apache.org/
  [3]: /foundation/marks/reporting
  [4]: /foundation/marks/pmcs#checklist
  [5]: https://whimsy.apache.org/board/agenda/
  [6]: /foundation/board/meeting
  [7]: https://incubator.apache.org/guides/ppmc.html#podling_status_reports
  [8]: /dev/pmc.html#board-feedback
  [9]: /foundation/board/meeting#attend
