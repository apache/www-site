Title: ASF Glossary | Apache Software Foundation

license: https://www.apache.org/licenses/LICENSE-2.0

# ASF Glossary

This glossary provides a brief description of some of the organizational 
terms used at the ASF and in Apache projects.  For more information 
about anything Apache, see the [/dev documentation](/dev/) or the 
[Community Development project](http://community.apache.org/).   

----

<dl>
<dt>Artifact  {#Artifact}</dt>

<dd>

A file which is created as the outcome of a process, typically the
release preparation process.

</dd>

<dt>ASF  {#ASF}</dt>

<dd>

The Apache Software Foundation, a non-profit organization.

</dd>

<dt>Attic  {#Attic}</dt>

<dd>

A location for discontinued, abandoned, and retired
[codebases](#Codebase) and [projects](#Project). The 
[Apache Attic project](http://attic.apache.org)
preserves the information for posterity, reference, and potential
future re-activation, while keeping it clearly distinct from active
work.

</dd>

<dt>Board  {#Board}</dt>

<dd>

The nine-person legal governing body of the ASF, elected by the
[members](#Member). The board provides the oversight of the
Foundation's activities and operation, and applies and enforces the ASF's [bylaws](#Bylaws). Among other
things, the board approves or rejects resolutions brought before it,
such as for the creation or dissolution of ASF [projects](#Project) ,
funding requests, legal concerns, and disciplinary actions. As an open
and non-profit corporation, the ASF makes the minutes of board meetings publicly available at
[http://www.apache.org/foundation/records/minutes/](/foundation/records/minutes/).
These minutes include all decisions not made in [executive
sessions](#ExecutiveSession). Also see [Director](#Director).

</dd>

<dt>Bikeshed Argument  {#Bikeshed}</dt>

<dd>

Arguing (pointlessly) about which color to paint the bikeshed. As
explained [here](http://www.unixguide.net/freebsd/faq/16.19.shtml) it
may happen when the argument is so trivial that it's easy for anyone
to have an opinion, and want to see theirs prevail.

</dd>

<dt>Build  {#Build}</dt>

<dd>

A **Build** is a package which is not suitable for distribution to the
general public. Builds are works-in-progress, and should only be available to people working on product
development at the Foundation.

</dd>

<dt>Bylaws  {#Bylaws}</dt>

<dd>

Bylaws are a codification of the rules that an organisation follows.
Some, such as the [ASF bylaws](/foundation/bylaws.html), are legally
binding and have significance outside the organisation. Others, such
as the [Jakarta bylaws](http://jakarta.apache.org/site/management.html), are only
meaningful within the [community](#Community) and are only as binding
as the community itself makes them. The bylaws of an organisation 
within the ASF may not contradict those of the ASF proper; any such
conflicting parts in the organisation bylaws are necessarily null and
void.

</dd>

<dt>Chair  {#Chair}</dt>

<dd>

**1.** The Chair of the [Board](#Board) of [Directors](#Director) of
the [ASF](#ASF), responsible for the orderly meeting and functioning
of the Board.
**2.** The official head of a committee, such as a
Project Management Committee [PMC](#PMC). PMC Chairs are ASF
[Vice Presidents](#Vice-President) given charge of the proper operation of their
[projects](#Project).

</dd>

<dt>Codebase  {#Codebase}</dt>

<dd>

A meaningful group of source. Some [projects](#Project) use only a
single codebase, while others have several.

</dd>

<dt>Commit access  {#CommitAccess}</dt>

<dd>

ASF [projects](#Project) collaborate on code using [version
control](#version-control) software to coordinate changes.
The ability to make direct changes to that code is known as *commit
access* (from the `[VCS] commit` subcommand). This process patches the
actual official code. Also see [Karma](#Karma) .

</dd>

<dt>Committer  {#Committer}</dt>

<dd>

An individual who has the privilege to directly commit changes to an Apache [codebase](#Codebase) ( [commit
access](#CommitAccess) ).

</dd>

<dt>Commit-Then-Review  {#CommitThenReview}</dt>

<dd>

(Often abbreviated 'CTR' or 'C-T-R'.) A policy governing code changes
which permits developers to make changes at will, with the possibility
of a change being retroactively [vetoed](#Veto). C-T-R is an application of
decision-making through [lazy consensus](#LazyConsensus). The C-T-R
model is useful in rapid-prototyping environments, but because of the
lack of mandatory review it may let more bugs through in daily practice than the
[R-T-C](#ReviewThenCommit) alternative. Compare [R-T-C](#ReviewThenCommit), and see the description of the [voting process](voting.html).

</dd>

<dt>Community  {#Community}</dt>

<dd>

Group of individuals with a common cause. The community of a
[project](#Project) consists of all those with an interest in that project.

</dd>

  <dt>Community Over Code (formerly called ApacheCon)  {#ApacheCon}</dt>

<dd>

The official developer and user conference of the ASF (see the
[Community Over Code Web site](https://communityovercode.org/) ).

</dd>
  
<dt>Consensus Approval  {#ConsensusApproval}</dt>

<dd>

'Consensus approval' refers to a [vote](#Vote) (sense 1) which has
completed with **at least three binding +1 votes** and **no** 
[vetos](#Veto). Compare [Majority Approval](#MajorityApproval).

</dd>

<dt>Contributor  {#Contributor}</dt>

<dd>

Someone who makes consistent improvements to the entities under an
[ASF](#ASF)  [PMC](#PMC), code or documentation or otherwise.
This does not, in and of itself, imply [commit access](#CommitAccess), though frequent and valued contributors are readily [voted](#Vote)
on for such access.

</dd>

<dt>Contributor License Agreement  {#CLA}</dt>

<dd>

Contributor License Agreement (CLA) is sometimes referred to as
Individual Contributor License Agreement (ICLA). There is also a
Corporate Contributor License Agreement (CCLA). All are explained on
the [Licenses](/licenses/#clas) page.

</dd>

<dt>CTR , C-T-R  {#CTR}</dt>

<dd>

See [CommitThenReview](#CommitThenReview)

</dd>

<dt>CVS  {#CVS}</dt>

<dd>

The Concurrent Versioning System, an older [version control
system](#version-control).

</dd>

<dt>Darwinism  {#Darwinism}</dt>

<dd>

See [Software Darwinism](#SoftwareDarwinism).

</dd>

<dt>Developer  {#Developer}</dt>

<dd>

A user who contributes to a project in the form of code or
documentation becomes a developer. They take extra steps to
participate in a project, are active on the developer mailing list,
participate in discussions, provide patches, documentation,
suggestions, and criticism. Developers are also known as
"contributors".

</dd>

<dt>Director  {#Director}</dt>

<dd>

One of nine individuals elected annually by the [members](#Member) to the
Foundation's [board of directors](#Board). Directors may or may not
have individual responsibilities, but all are generally expected to
stay informed about as much of the Foundation's operations and
activity as possible, since the Board provides oversight for the
Foundation as a whole.

</dd>

<dt>Emeritus  {#Emeritus}</dt>

<dd>

A term used to formally designate someone as no longer active, but
still entitled to many of the rights and privileges of the position.
For example, an ASF member who hasn't attended any membership meetings
for a long time is declared emeritus; someone who no longer has time
to work on a particular [project](#Project) may declare themself
emeritus. Emeritus status indicates interest but not activity, as
opposed to having resigned.

</dd>

<dt>Evolution  {#Evolution}</dt>

<dd>

Progress by gradual accumulation of small changes. Typical mode for
Apache projects. Compare [Revolution](#Revolution).

</dd>

<dt>Executive Session  {#ExecutiveSession}</dt>

<dd>

A portion of a [board](#Board) meeting which concerns confidential
matters and which therefore cannot be publicly minuted. Examples
include salary discussions, areas covered by non-disclosure
agreements, disciplinary actions, and some types of funding decisions.

</dd>

<dt>Git  {#git}</dt>

<dd>

A [version control system](#version-control) used by the majority of ASF projects.

</dd>

<dt>Hackathon  {#Hackathon}</dt>

<dd>

Informal event at which ASF participants can get together, network,
and discuss/argue/hack/prototype according to their interests.
Hackathons are open to all [committers](#Committer) and invited
contributors, and typically take place immediately preceding or
following the [ApacheCon](#ApacheCon) events.

</dd>

<dt>Hibernation  {#Hibernation}</dt>

<dd>

Sleeplike state with a depressed metabolic rate. Sometimes used to
describe a [project](#Project) with low levels of activity.

</dd>

<dt>Karma  {#Karma}</dt>

<dd>

**1.** Sufficient access to perform an operation, such as committing
changes to a [version control](#version-control). ("Please grant Yo
Mega karma to the foo-bar.")
**2.** Respect and [merit](#Merit) in
the [community](#Community). ("Al Faa and Ro Main have good karma because of the
careful and tactful way they make their points and the quality of their
technical contributions.") 
**3.** Any combination of senses 1 and two; they are indirectly related.

</dd>

<dt>Lazy consensus  {#LazyConsensus}</dt>

<dd>

(Also called 'lazy approval'.) A decision-making policy which assumes
general consent if no responses are posted within a defined period.
For example, "I'm going to commit this by lazy consensus if no-one
objects within the next three days." Also see [Consensus Approval](#ConsensusApproval) ,
[Majority Approval](#MajorityApproval) , and the description of the [voting
process](voting.html).

</dd>

<dt>License Header  {#LicenseHeader}</dt>

<dd>

Text, at the top of a code file, referring to the license for the file (as opposed to including the complete
license text). 

</dd>

<dt>Majority Approval  {#MajorityApproval}</dt>

<dd>

Refers to a [vote](#Vote) (sense 1) which has completed with **at
least three binding +1 votes** and more +1 votes than -1 votes. (
*I.e.* , a simple majority with a minimum quorum of three positive
votes.) Note that in votes requiring majority approval a -1 vote is
simply a vote against, **not** a [veto](#Veto). Compare
[Consensus Approval](#ConsensusApproval). See also the description of the [voting
process](voting.html).

</dd>

<dt>Member  {#Member}</dt>

<dd>

An individual who has been elected to membership in the ASF by the
existing members. Membership benefits include having a voice in
the functioning of the Foundation, and the ability to nominate and vote 
on new Member candidates and on directors.

</dd>

<dt>Merit  {#Merit}</dt>

<dd>

The concept of 'merit' is central to the Apache philosophy and
[community](#Community) methodology. Merit is a qualitative and
subjective term, referring to a combination of the
worth of one's accomplishments and the respect of one's
peers.

- technical competence
- ability to get along with others
- positive contributions to discussions and code

The acquisition of merit is a cumulative process;
once acquired, it doesn't decay. It is possible to lose merit, though,
by violating community ethics, guidelines, or sensibilities.

</dd>

<dt>Meritocracy  {#Meritocracy}</dt>

<dd>

Meritocracy is one of the principles underlying the ASF and its
philosophy. As it has been put, 'the more you do the more you are
allowed to do.' As a person acquires merit, their stature in the
[community](#Community) and (to a certain extent) the weight
given to their opinions grow.

</dd>

<dt>Netiquette  {#Netiquette}</dt>

<dd>

Netiquette is the common rules of good online
behaviour. For the general case, it is defined in [IETF RFC
1855](http://www.faqs.org/rfcs/rfc1855.html) ; for the more specific
Apache environment, it boils down to things like:

- don't flame
- lurk for a while after joining a list before posting; this allows you to get a feel for the personalities,
  attitudes, and issues, as well as existing rules for acceptable behaviour
- be aware of the [project](#Project) 's/list's guidelines (such as on voting), and don't violate them
- if you have a question, search the list archives and the bug database before asking what may have already been answered&gt;
     
These are just the rough outline of things that may be more (or less) the
rule on a per-list basis. They boil down to 'be polite' and 'don't
make unnecessary work for others'.

</dd>

<dt>NOTICE file  {#NOTICE}</dt>

<dd>

The NOTICE file in a software release package is reserved for a certain subset of legally-required notifications
which are not satisfied by either the text of LICENSE
or the presence of licensing information embedded within the bundled dependency.
See [NOTICE modifications](/dev/licensing-howto.html#mod-notice)
Also section 4d of the [Apache License](/licenses/LICENSE-2.0)

</dd>

<dt>Officer  {#Officer}</dt>

<dd>

An individual appointed by the ASF Board of Directors and given
specific authority over and responsibility for some portion of the
Foundation's activities. An officer may or may not be a
[director](#Board) of the Foundation.

</dd>

<dt>Package (sometimes referred to informally as Tarball or Distribution)  {#Package}</dt>

<dd>

A **Package** is a compressed archive file created from a project's
source code with the intent to distribute.  Packages are typically either
source packages or binary packages built from source; sometimes separate
documentation packages are released alongside the source package.  Often
packages have external dependencies which may require additional
software be installed as a prerequisite.

</dd>

<dt>PEO  {#PEO}</dt>

<dd>

[Professional_employer_organization](https://en.wikipedia.org/wiki/Professional_employer_organization)

</dd>

<dt>PMC  {#PMC}</dt>

<dd>

Project Management Committee, the group of people with formal
oversight of a [project](#Project). The chair of a PMC is always an
[officer](#Officer) of the Foundation. As the PMC has official
oversight responsibilities assigned by the [Board](#Board) , its
actions are considered to be on behalf of the Foundation, with all the
legal protections and responsibilities implied. See the
[Bylaws](bylaws.html#6.3).

</dd>

<dt>Podling  {#Podling}</dt>

<dd>

A [codebase](#Codebase) and its [community](#Community) while in the
process of being incubated. See the description of the [Incubation
process](http://incubator.apache.org/incubation/Process_Description.html).

</dd>

<dt>President  {#President}</dt>

<dd>

Primary executive officer of the [ASF](#ASF) , serving at the
direction of the [Board](#Board).

</dd>

<dt>Project  {#Project}</dt>

<dd>

In the Apache Software Foundation, the term ' *project* ' typically
refers to a [community](#Community) focussed on one or more
[codebases](#Codebase) , overseen by a [PMC](#PMC).

</dd>

<dt>Release Candidate  {#ReleaseCandidate}</dt>

<dd>

A source [package](#Package) and other accompanying
[artifacts](#Artifacts) to be inspected to see whether they are ready for release. The PMC then votes whether to release the candidate.

</dd>

<dt>Release Manager  {#ReleaseManager}</dt>

<dd>

The individual who takes responsibility for shepherding a release through
the release process to final distribution.  Any project
[committer](#Committer) can serve as Release Manager.  Often abbreviated
as "RM". 

</dd>

<dt>Review-Then-Commit  {#ReviewThenCommit}</dt>

<dd>

(Often referenced as 'RTC' or 'R-T-C'.) Commit policy which requires
that all changes receive [consensus approval](#ConsensusApproval) before being
committed to the code base. Compare [C-T-R](#CommitThenReview) , and see the
description of the [voting process](voting.html).

</dd>

<dt>Revolution  {#Revolution}</dt>

<dd>

In the Apache environment, some communities may decide to permit (or
encourage) *revolutions* as ways of reconciling differences,
particularly code changes which have been blocked on a particular
branch by a veto. Originally described by James Duncan Davison in his
'Rules for Revolutionaries,' the concept has been adopted, formally or
informally, by at least one Apache [project](#Project). Essentially, a
revolution occurs when a group of committers decides to fork the
current main branch in order to work on problematic code or concepts.
This permits them to pursue it without disturbing the evolutionary
work on the main branch. A revolutionary branch may eventually be
merged back into the main branch, die out, split completely and become
a new main branch, or may absorb the current main branch into itself
(essentially no different than the first option). See the ' [Rules for
Revolutionaries](http://incubator.apache.org/learn/rules-for-revolutionaries.html)
' and compare [Evolution](#Evolution).

</dd>

<dt>Release  {#Release}</dt>

<dd>

A **Release** is a package offered to the general public by The Apache
Software Foundation.

</dd>

<dt>RTC , R-T-C  {#RTC}</dt>

<dd>

See [ReviewThenCommit](#ReviewThenCommit)

</dd>

<dt>Software Darwinism  {#SoftwareDarwinism}</dt>

<dd>

A deceptively simple concept, often expressed as 'the best code
survives'. The [evolutionary](#Evolution) processes inherent in the
Apache peer-review environment support this idea.

</dd>

<dt>Software Grant Agreement  {#SGA}</dt>

<dd>

See [details of SGAs](/licenses/#grants).

</dd>

<dt>STATUS files  {#STATUSfiles}</dt>

<dd>

Due to the noninteractive style of communication practised by most of
the Apache development projects, maintaining a record of decisions
made -- and in progress -- can be a useful thing. A number of the
Apache projects accomplish this through the use of a file, typically
named `STATUS` , stored in the project's own code repository. In
addition to keeping existing developers informed of current issues,
such files also provide useful information to new would-be developers
investigating the project.

</dd>

<dt>STV  {#STV}</dt>

<dd>

Single Transferable Vote, used in Apache board elections for example.
See [http://en.wikipedia.org/wiki/Single_Transferable_Vote][1]

</dd>

<dt>Subversion  {#Subversion}</dt>

<dd>

A [version control system](#version-control) that is "a compelling
replacement for [CVS](#CVS) ". A minority of projects use Subversion (SVN).

</dd>

<dt>SVN  {#SVN}</dt>

<dd>

See [Subversion](#Subversion).

</dd>

<dt>tabled  {#tabled}</dt>

<dd>

The term 'tabled' may be seen in minutes of Board meetings.
For example, "Special Order 7H, ... , was tabled."
In that context it means 'postponed' or 'deferred'.

</dd>

<dt>TLP  {#TLP}</dt>

<dd>

Top Level Project, see also [PMC](#PMC)

</dd>

<dt>Treasurer  {#Treasurer}</dt>

<dd>

The treasurer of the [ASF](#ASF) is an [officer](#Officer) of the
corporation, and is responsible for managing the funds and assets of
the Foundation, reporting tax information, and so on. The treasurer
need not be a [member](#Member) of the Foundation, nor a
[director](#Director), though the role is often filled by someone who
is.

</dd>

<dt>Troll  {#Troll}</dt>

<dd>

Some definitions:

-  [Gentle](http://www.askdavetaylor.com/whats_a_troll_and_a_zombie.html) 
-  [Naughty](http://www.urban75.com/Mag/troll.html) 
-  [Definitive](http://en.wikipedia.org/wiki/Internet_trolls) 
     
For how to deal with trolls, see [this thread](http://markmail.org/message/3wlpx2hafyeqdt4t) but (for those who
are impatient) here's [Ted's opinion](http://markmail.org/message/sppexq2vcfewcm5a) 
(which acts as a good summary).

</dd>

<dt>User  {#User}</dt>

<dd>

Someone who uses our software. Users contribute to Apache
projects by providing feedback to developers in the form of bug
reports and feature suggestions. Users participate in the Apache
community by helping other users on mailing lists and user support
forums.

</dd>

<dt>Version Control System  {#version-control}</dt>

<dd>

Version control systems provide the ability to track (and potentially
revert) incremental changes to files, reporting them to a mailing list
as they are made, and can be used concurrently by many developers. All
of the Foundation's code and documentation are managed in such systems
thus providing a complete history for each codebase. See [Git](#git),
[Subversion](#Subversion) and [CVS](#CVS). 

</dd>

<dt>Veto  {#Veto}</dt>

<dd>

According to the Apache methodology, a change which has been made or
proposed may be blocked through the exercise of a veto by a
committer to the [codebase](#Codebase) in question. If the
[R-T-C](#ReviewThenCommit) commit policy is in effect, a veto prevents
the change from being made. In either the R-T-C or
[C-T-R](#CommitThenReview) environments, a veto applied to a change
that has already been made forces it to be reverted. Vetoes may not be
overridden nor voted down, and only cease to apply when the committer
who issued the veto withdraws it. All vetoes *must* be accompanied by a
valid technical justification; a veto without such a justification is
invalid. In case of doubt, deciding whether a technical
justification is valid is up to the PMC. Vetoes force discussion
and, if supported, version control rollback or appropriate code changes. Vetoed code commits
are best reverted by the original committer, unless an urgent
solution is needed (e.g., build breakers). Vetoes only apply to
code or documentation changes; they do not apply to
procedural issues such as software releases.

</dd>

<dt>Vice-President  {#Vice-President}</dt>

<dd>

[ASF](#ASF) vice-presidents are [officers](#Officer) of the
corporation, with authority over and responsibility for specific
areas of the Foundation's work. [PMC](#PMC)  [chairs](#Chair) are
vice-presidents given charge of the proper operation of their
[projects](#Project).

</dd>

<dt>Vote  {#Vote}</dt>

<dd>

**1.** The process of making a formal decision. ('The vote for foo
will close in three days.')

**2.** The expression of a positive or
negative opinion, or a veto, as part of a formal decision. ('My vote
is -1 because foo smells bad.')

**Binding votes** are those
cast by the PMC committers for the [project](#Project) to which the
decision applies. Votes cast by others are advisory or indicative
only.<br></br>See also [ConsensusApproval](#ConsensusApproval) , [MajorityApproval](#MajorityApproval)
, [LazyConsensus](#LazyConsensus) , and the description of the [voting
process](voting.html).

</dd>
</dl>

  [1]: http://en.wikipedia.org/wiki/Single_Transferable_Vote


