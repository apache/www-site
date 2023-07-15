Title: Board Meeting Process
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

The Board of Directors uses a variety of tools and relies on volunteers across Apache 
projects to ensure our monthly meetings run smoothly.  This is a guide 
to the typical timeline and process that goes into every monthly board meeting.

Our [PMC Reporting Guide][1] lays out what should be in a project's quarterly board report 
and how to submit the report.  Note that executive officers and non-project corporate officers
(Like VP-Infra and VP-Legal) provide their own reports either to the President or to 
the board on a monthly basis.

<div class=".pull-right" style="float:right; border-style:dotted; width:200px; padding:5px; margin:5px">

See also Board Meeting Minutes: [Calendar View](/foundation/board/calendar.html) / [Categorized view](https://whimsy.apache.org/board/minutes/).

</div>

The Board holds its meetings by teleconference (and IRC for backchannel), and they typically last about 
one and a half hours.  Meetings follow the posted agenda, with the chair or 
relevant officers leading discussion.  Apache Members and PMC Chairs are 
always welcome to [attend monthly board meetings](#attend).

**Contents**

[TOC]

## Who does what  {#who}

The board is responsible for [overseeing the operations of the ASF](/foundation/governance/) as a whole, including 
all Apache projects.  We provide this oversight by having the officers responsible for corporate operations submit monthly reports, and each Apache project submit a quarterly report about their project's community and technical status.

- Operational officers provide a monthly report on their area of operations 
(like brand, press, legal, infrastructure, etc.) to the President, who then provides a 
rollup report to the board on the day-to-day operations of the ASF.

- A few board committees and other corporate VPs provide monthly reports directly to the board.

- PMC members in every Apache project collaborate to provide their 
[quarterly project report](/foundation/board/reporting).  The PMC Chair, who is also a Vice President of 
the ASF, is responsible for ensuring the report is actually submitted 
to the board agenda. 

- During board meetings, the Board Chair leads the meeting while the 
Secretary takes notes and calls the roll for attendance or votes.  Directors may comment on or have
questions for various reports; the Secretary directs formal questions to 
the relevant officer or PMC after the meeting via private@ email.

- The Secretary also manages the process of publishing approved board 
meeting minutes (typically the following month).

## Normal Board Meeting Timeline  {#timeline}

### At the *previous* month's meeting

Shortly after a monthly meeting, the Secretary checks in draft meeting minutes for 
later review and approval by the board.  The Board Chair then sends a "ASF Board Meeting Summary" overview 
of formal actions taken during the meeting to all our committers.  The Secretary 
sends out comments on reports and welcomes new officers - for details, see "Adjourning" below.

### After the *previous* month's meeting
 
A few days after the *previous* month's meeting, the agenda for the next (current) month's 
meeting is assembled and checked into our code repository.  Board agendas 
and meeting minutes are all kept in formatted text files.  This allows power users 
to edit via the command line, but also allows for more user-friendly views of the 
agenda with the [Whimsy Agenda Tool][2] (requires Apache login).

Reminders are then sent out to all PMCs about the due dates for reports for 
the next meeting.  An early reminder (and a followup) is helpful given the distributed and all 
volunteer nature of Apache PMCs.  Projects typically submit their reports to 
the board (via the mailing list and by checking into Whimsy) anywhere from
three weeks to a few hours beforehand (which may not be accepted
if the directors don't have sufficient time to review them).

The Apache Incubator has a special reminder process.  Since every Podling 
within the Incubator is expected to provide it's own quarterly report, they 
get their own reminders.  The Incubator PMC then reviews and rolls up the relevant 
Podling quarterly reports, allows podling mentors to sign off on or add additional 
comments to them, and then submits an overall report to the board every month.

### The week before the meeting

Each month, directors are randomly assigned to be 
"Shepherds" of a set of PMC reports for that month's meeting.  The Shepherd pays
extra attention to their assigned PMCs' reports, checking to be sure they are in the agenda on time, 
and helping to take any feedback from the board to that PMC.  This helps to have a 
distributed check-and-balance to ensure all 70+ project reports get submitted, 
and to have a single Director ensuring that feedback is addressed afterwards.

Many PMC reports are in the agenda about a week before the meeting, so some directors 
will start reviewing the agenda and pre-approving reports, or providing comments/questions
 on them.  If a director has a concern about a specific report, they 'flag' it in the 
agenda for discussion during the meeting. This is often the time when Shepherds double-check that 
PMCs have actually submitted a full report, and directly email any PMCs that are late.

No later than 48 hours before the meeting the board expects the agenda to be finalized, 
although we do sometimes have late submissions of reports.  In the 2-3 days before the 
meeting, most directors then review the entire agenda, pre-approving or 
commenting in the agenda on all the submitted reports.  Astute PMC Chairs, who have 
visibility into the Agenda tool, can speed the process further if they can provide 
brief answers or additional information to any director questions.

Since all activity - report submissions, approvals, comments - involves checking updated files into the SVN repository, Apache Members and PMC chairs 
can watch the progress in the commit messages.

### Day of the Board Meeting

On the day of the meeting, the Chair runs through the agenda in order.  After a roll call, Executive 
officers typically verbally provide the highlights of their reports.  

We then use the preapproval system to speed the process of reviewing the 70+ PMC reports 
each month.  Any PMC report that has a majority of directors preapproving, and no 
directors have flagged the report, is approved by general consent.  This allows 
the meeting to focus discussion on any PMC reports that either were 
not thoroughly reviewed by directors before the meeting, that have important 
questions, or that a director has flagged.  Shepherds lead 
the discussion about their particular flagged reports, helping the Chair to focus 
on the overall meeting.

We then step through the rest of the agenda, voting on Special Orders and resolutions, 
and then sometimes hold a discussion period on new matters, or to review deeper 
questions raised by the submitted officer reports.

### Adjourning / After The Board Meeting

Soon after the meeting adjourns, we inform our communities:

- The Chair sends a brief overview of the meeting points to our committer base.  
This notes any PMC reports where the report was not accepted, as well as the status of any 
Special Orders that have been approved (typically officer appointments or new projects), since they take effect immediately.

- The Secretary sends any director comments or questions about 
each individual PMC report directly to that PMC on its private@ list, cc'ing the board@ list.  This ensures that PMCs get direct 
and immediate feedback if the board has any issues.  In most cases, these 
are simple questions about the project, so the board appreciates an ACK 
or response email from the PMC back to the board@ list.

- If there is a serious issue that requires followup, the board assigns a director (either the Shepherd or another director 
who volunteers) to work directly with the PMC to ensure the issue is understood, and that the PMC 
begins taking action to address it. The board expects to hear the results of these 
actions either at the next month's meeting, or in the PMC's next normal quarterly report.


## Board meeting tools  {#tools}

With the creation of the [Apache Whimsy project](https://whimsy.apache.org/), we now have a number of 
tools that aid in creation and management of the agenda; workflow 
functions for submitting, commenting, and approving reports; and a handy, 
categorized view of the current agenda and the minutes of past meetings.

While most Whimsy features are restricted to Apache Committers (and much of
that is further restricted to Members, Officers, or even a specific officer),
the [categorized listing of past board minutes](https://whimsy.apache.org/board/minutes/)
is public.  This allows anyone to easily review all past board meetings by
date, by PMC, or by major special resolutions.  We provide this access as a convenience. The official/canonical version of this data is
in our [formal publication of all past board meeting minutes](/foundation/board/calendar.html)


## How To Post A Project or Officer Report  {#postreport}

See the PMC Chair's detailed [Board Reporting Guidelines](/foundation/board/reporting#how).

## How To Attend The Meeting  {#attend}

Apache Members and PMC Chairs are welcome to attend.  Please let the board 
know you will attend by adding yourself in the agenda:

- Navigate to whimsy.apache.org/board/agenda/ (Apache login required)
- Click Roll Call
- Click the blue Attend button at the bottom

Marking your attendance ahead of time helps the Secretary run through the 
roll call more quickly.  If you find you can't attend the meeting, use the Regrets button to update your status.

The Call To Order section has teleconference dial-in and timezone information, 
as well as the chat channel information that we use for informal discussions (not 
strictly part of the meeting, but useful for questions).


## Help and Tips About The Board Agenda Website  {#whimsy}

The Whimsy Board Agenda tool at whimsy.apache.org/board/agenda (login required)
provides many ways to visualize and comment on the board report, and greatly 
simplifies the process of collating and reviewing the agenda.

Select Navigation - Help, or press ? to get help about the tool.  Submit 
any [bugs or make enhancement requests to the Whimsy JIRA](https://issues.apache.org/jira/projects/WHIMSY).

You can also run the Board Agenda tool locally. Its architecture 
overview and code walkthrough are in [www/board/agenda/README.md](https://github.com/apache/whimsy/blob/master/www/board/agenda/README.md)

  [1]: /foundation/board/reporting
  [2]: https://whimsy.apache.org/board/agenda/
