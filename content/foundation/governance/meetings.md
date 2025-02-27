Title:     Apache Corporate Governance - New Member Voting
license: https://www.apache.org/licenses/LICENSE-2.0

# New Member Voting

The ASF holds an Annual Members Meeting at least every 13 months, at which members elect a new board of directors and may vote on new member candidates.  
Our Member volunteers run our corporate meetings following these basic procedures.

[TOC]

## Audience  {#audience}

This document is a general overview of how the ASF holds its formal Members' Meetings.  If you are a Member of the ASF, see the private README.txt of the current year's meeting, in the Subversion directory, for the latest details:
    `/repos/private/foundation/Meetings/20200331/README.txt`

## Meeting Mechanics - on IRC Chat  {#meetinghow}

Since our Membership is from around the globe, Member Meetings take place online, using chat tools, during a period of three days.  The first half of the meeting (typically on a Tuesday) takes place in a live in-realtime chat (IRC), and all Members are invited to attend.  Much like any large meeting, we hold a roll call, and the Chair of the Board runs us through the posted agenda interactively in the live chat window. We review high-level reports from various executive officers on the state of the Foundation in the past year.  Members who aren't able to attend during this first half may submit a proxy (direction to let another Member or an officer vote on their behalf), so that their attendance can still count toward establishing a quorum for the meeting.

At the end of the first half of the meeting, the agenda lists the candidates for the next year's board, as well as any new candidates for membership in the Foundation.  Once the candidates are announced, the meeting is moved into a ~46 hour recess.

During the recess, our [Apache STeVe voting software](https://steve.apache.org/) sends out secure and private email ballots to all eligible members. Voting is open for over 40 hours via email, allowing Members anywhere in the world a convenient time to cast their ballots. Apache STeVe handles all vote counting and tracking, withseveral Member volunteer election monitors supervising the process.  Members log into STeVe with their Apache ID and vote using a simple web interface.

Voting closes a couple of hours before the meeting resumes (typically on a Thursday) to give election monitors a chance to cross-check that their tallies agree.  When the meeting resumes on IRC, the Chair announces the results of member candidate votes and board elections. The second half of the meeting is typically much shorter, and Members do not need to attend the second half if they have already attended the first half.

- **PLEASE** don't wait until the last minute to cast your vote: our vote monitors are all volunteers.  Since the lists of the candidates for board and proposed new members are available 10 days before the meeting, you have plenty of time beforehand to research your choices.


Immediately after the meeting, the new board takes office for their one-year term, and Apache sends out press releases announcing the election. Newly-elected Members receive private invitations from the Members who nominated them.  Note that we do **not** publicize the names of newly elected members, because (rarely) some do not complete the new-member application.

## Member Candidate Voting  {#membervoting}

### How we tally member votes

For a new member to be elected, they must receive at least three votes, and more Yes votes than No votes from the Members who vote on their nomination, per our [bylaws 4.1][1].  Apache STeVe handles all vote tracking and tallies, with volunteer Members monitoring the process.  ASF Members handle the process of running and auditing votes privately.

Votes for new member candidates are secret; since the votes are about individual people, once the vote monitors have confirmed the result of the tallies, we do not share the results publicly.

### How to decide how to vote on Member candidates

Voting whether to approve the nomination of a new Apache Member is up to every ASF Member to decide.  Existing Members nominate member candidates, and state why they believe the candidate would make a good member.  There are very often seconds of the nomination, many of which also include personal stories of why the candidate should be elected.

Since candidates are people who are involved in Apache projects, you can search the many mailing lists to see how the candidate has participated in our communities in the past.  [PonyMail's archives](https://lists.apache.org/) lets ASF Members review all mailing lists, even private ones.

Many members have commented that they look for both a strong nomination statement from an existing member, describing why the nominee would make a good member. Having a number of seconds in the nomination file from other members is also often valuable.

## Boad of Directors voting  {#boardvoting}

### How we tally votes for Board members

The ASF uses Single Transferable Votes (STV) to elect candidates to all nine seats on the board annually.  Every candidate runs individually; there is no slate or block of candidates.  Only ASF Members can nominate people for the board election; and to date all candidates have already been ASF Members.

STV helps small, coherent constituencies elect directors to a board. This vote-counting design helps voters express actual desires and reduces "strategic voting". 

The most important thing to remember is: Vote the actual order of your preferences! Every effort is made to get your #1 preference onto the board; #1 votes are notably more important than the rest of your votes. If you vote in alphabetical order (as some seem to have done with past ballots) you're sending a strong signal that you'd prefer a board with names like Mr. Awful and Ms. Beastly - probably not what you intended. Our Apache STeVe tool randomizes the letters assigned to candidates to attempt to help with this.

We calculate election results using Meek's Method for STV.  Technical details are in the [Apache STeVe project code](https://github.com/apache/steve), which is, of course, its own Apache project.

The STV vote counting proceeds in a loop. The loop returns a name whenever a board candidate captures enough ballots to get elected. The process starts by assigning ballots to the #1 candidate indicated on each ballot. As the counting proceeds, ballots are reallocated. Sometimes it becomes necessary to admit somebody is not going to get elected; at that point, STeVe reallocates their ballots. When a candidate is elected, they takes with them only enough ballots to have gotten them elected; STeVe redistributes their other ballots to the lower-ranked preferences shown on that ballot.

This YouTube video provides a delightful introduction: <a href="https://www.youtube.com/watch?v=l8XOZJkozfI" target="_blank">Politics in the Animal Kingdom: Single Transferable Vote</a>; Here is a shorter <a href="https://youtu.be/Ac9070OIMUg" target="_blank">description of how second, third, etc. place votes are allocated</a>.  Wikipedia has a general overview of <a href="http://en.wikipedia.org/wiki/Single_Transferable_Vote" target="_blank">Single Transferable Voting</a>.

### How to decide how to vote on Board candidates

Obviously, deciding for whom to vote is up to each ASF Member to decide.  The fact that all Members - and all candidates for the board - are expected to act as individuals means that our corporate governance never depends on other corporations agendas or people's employers.  Independence of the board is a key factor in the ASF's success over the years.

- STV votes are ranked; the first person you vote for is far more likely to get your vote than the second and following people.
- If you really don't want somebody on the Board, then omit them entirely rather than putting them at the end of your ranking list.
- Although there are nine slots available, you can vote for as many people as you want - even votes after the ninth might end up being significant.
- For example, if 89 members vote in the election, a candidate can win one of the nine seats on the board with just 10 #1 votes. This helps to assure small constituencies with first-place preferences can get a board seat.
- Remember: **the ORDER of your votes is CRUCIAL**.  Double-check your ballot before submitting it.
- You can cast your vote for the board election as many times as you like; STeVe only uses the **last ballot you cast**.  So if you make a mistake, or change your mind, just cast that vote again.


  [1]: https://www.apache.org/foundation/bylaws.html#4.1
