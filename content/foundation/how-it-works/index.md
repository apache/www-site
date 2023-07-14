Atom: http://mail-archives.apache.org/mod_mbox/www-community/?format=atom
Title: How the ASF works
Notice: http://www.apache.org/licenses/LICENSE-2.0

# {{title}}

<div class=".pull-right" style="float:right; border-style:dotted; width:200px; padding:5px; margin:5px">

If you're curious about more governance details, we have a description of [Apache style governance][1].  
The [Apache Community Development project](http://community.apache.org/) is also 
here to help newcomers find their way around.

</div>

This page provides an overview of everything you always wanted to know about the
Apache Software Foundation but were afraid to ask: the difference between membership and
committership, who decides what, how elections take place, how our
infrastructure is set up, what the board is and does, what a PMC is, what's the
philosophy behind the incubator, and how the ASF deals with 
the incredible growth in new projects and contributors over the years. Come and see behind the scenes of the ASF.



-  [What is the Apache Software Foundation?](#what) 

-  [Meritocracy](#meritocracy) 

-  [The Foundation structure](#structure) 

-  [Roles](#roles) 

-  [Project management and collaboration](#management) 

-  [The Foundation Infrastructure](#infrastructure) 

-  [The Foundation Incubator](#incubator) 

-  [Other Foundation entities](#other) 

-  [Conclusions](#conclusions) 

## What is the Apache Software Foundation?  {#what}

The [Apache Software Foundation](/foundation/) (ASF) is a 501(c)3 non-profit public charity organization
incorporated in the United States of America. It was formed in 1999 primarily to:

- provide a foundation for open, collaborative software development
projects by supplying hardware, communication, and business infrastructure

- create an independent legal entity to which companies and individuals can
donate resources and be assured that those resources will be used for the
public benefit

- provide a means for individual volunteers to be sheltered from legal
suits directed at the Foundation's projects

- protect the 'Apache' brand, as applied to its software products, from
being abused by other organizations

That's the dry facts, but how did all this come to be and what does it
really mean? We need to step back a little in history.

## Meritocracy  {#meritocracy}

Unlike other software development efforts under an open source
license, like the Linux Kernel or the Perl/Python languages, no single developer initiated the Apache Web Server. A diverse group of people who shared common interests developed the project as they exchanged information, software fixes and suggestions.

As the group started to develop their own version of the software, moving
away from the NCSA version, more people were attracted and started to help
out, first by sending little patches, or suggestions, or replying to email
on the mail list, later with more important contributions.

When the group felt that a person had "earned" the merit to be part of
the development community, they granted direct access to the code
repository, thus growing the group and increasing its ability to develop the program, and to maintain and develop the software more
effectively.

We call this basic principle "meritocracy": government by merit.

The process scaled very well without
creating friction because, unlike in other situations where power is a
scarce and conservative resource, in the Apache group newcomers were seen
as volunteers who wanted to help rather than people who wanted to steal
a position.

With no limited and therefore valuable resource (money, energy, time) at stake, the group
was happy to have new people come in and help. They only filtered those who expressed interest to find and include those whom they believed were committed enough for the task and matched the
human attitudes required to work well with others, especially when there were
disagreements.

After explaining the structure of the ASF, we will see how the meritocracy
relates to the various roles.

## The Foundation structure  {#structure}

As the Apache Web Server started to grow in market share and popularity,
due to synergy of its technical merit and to the openness of the community
behind the project, people started to create satellite projects. Influenced
by the spirit of the community they were used to, they adopted the same
traditions of community management.

By the time the ASF came into existence, there were several separate
communities, each focused on a different side of the "web serving" problem,
but all united by a common set of goals and a respected set of cultural
traditions of both etiquette and process.

These separate communities were referred to as "projects" and, while
similar, each of them exhibited little differences that made them special.

To reduce friction and allow diversity to emerge, rather than
forcing a monoculture from the top, the ASF designates the projects as the central
decision-making organizations of the Apache world. Each project has authority over development of its software, and has a great
deal of latitude in designing its own technical charter and its own
governing rules.

At the same time, the cultural influence of the original Apache group is
strong and the similarities between the various communities are evident, as
we'll see later.

The following entities govern the foundation:

- Board of Directors (board) governs the foundation and is composed of
members.

- Project Management Committees (PMCs) govern the projects, and they are
composed of committers. (Note that every PMC member is, by definition, also a
committer.)

- Various Officers of the corporation, appointed by the board, who set 
Foundation-wide policies in specific areas (legal, brand, fundraising, etc.)

For all the details, read our [Governance overview][2].

### Board of Directors (board)  {#board}

The board is responsible for management and oversight of the business and
affairs of the corporation in accordance with the foundation
[Bylaws](bylaws.html). This includes management of the corporate assets
(funds, intellectual property, trademarks, and support equipment) and
allocation of corporate resources to projects.

However, each Apache project's PMC has technical decision-making authority regarding the content and
direction of the project.

The board is currently composed of nine individuals, elected by and from the
members of the foundation. The bylaws don't specify the number of board members
that the foundation should have, but this was the number of the
first board and it has never changed. The board is elected every year.

The [board website](board/) has more information, the list of the current
directors, a schedule of meetings, and minutes of past meetings.

### Project Management Committees (PMC)  {#pmc}

The Board establishes Project Management Committees (PMCs) to be responsible for the active management of one or more specific
communities.

Each PMC includes least one officer of the ASF, who shall be
designated its chair, and may include one or more other members of the
ASF.

The Board appoints the chair of the PMC, who also becomes an officer (Vice President) of the ASF. The chair has primary responsibility to the Board, and
has the power to establish rules and procedures for the day to day
management of the communities for which the PMC is responsible, including
the composition of the PMC itself. See further discussion about the role of the
PMC [chair](../dev/pmc.html#chair) and [why chairs are
officers](faq.html#why-are-PMC-chairs-officers).

The [ASF Bylaws](bylaws.html) (section 6.3) define a PMC and the position
of chair. Some emails help to clarify:
[here](http://www.mail-archive.com/community@apache.org/msg03961.html) and
[here](http://www.mail-archive.com/community@apache.org/msg04005.html).

The role of the PMC from a Foundation perspective is oversight. The main
role of the PMC is not code and not coding, but to ensure that its community addresses all legal
issues and follows stated procedures, and that each and every
release is the product of the community as a whole. That is key to our
litigation-protection mechanisms.

The second role of the PMC is to further the long-term development and
health of the community as a whole, and to ensure that balanced and wide
scale peer review and collaboration takes place. Within the ASF we worry
about any community which centers around a few individuals who are working
virtually without review. We believe that this is detrimental to quality,
stability, and robustness of both code and long-term social structures.

We firmly believe in [hats](#hats). Your role at the ASF is one assigned to
you personally, and is bestowed on you by your peers. It is not tied to
your job or current employer or company.

However those on the PMC are held to a higher standard. The PMC, and the
chair in particular, are eyes and ears of the ASF Board, so we rely on and need to trust you to provide legal oversight.

The board can to terminate a PMC at any time by resolution.

The [Apache Developer Information][3] pages have more details of how PMCs work.
A complete [list of all Apache projects](http://projects.apache.org/) is also available.

### Officers  {#officers}

The [Officers of the Apache Software Foundation](./) oversee the day-to-day
affairs of the Foundation. The [Board of
Directors](#board) elects these officers.

## Roles  {#roles}

The meritocracy typically has various roles within each individual Apache project community:

<code>[user](#users) | [developer](#developers) | [committer](#committers)
| [PMC member](#pmc-members) | [PMC chair](#pmc-chair) | [ASF member](#asf-members)</code>

### User  {#users}

A **user** is someone who uses our software. They contribute to
Apache projects by providing feedback to developers in the form of bug
reports and feature suggestions. Users participate in the Apache community
by helping other users on mailing lists and user support forums.

### Developer  {#developers}

A **developer** is a user who contributes to a project in the form of
code or documentation. They take extra steps to participate in a project,
are active on the developer mailing list, participate in discussions, and
provide patches, documentation, suggestions, and criticism. Developers are
also known as **contributors**.

### Committer  {#committers}

A **committer** is a developer who has write access to the code
repository and has a signed [Contributor License Agreement
(CLA)](/licenses/#clas) on file. They have an
apache.org mail address. Not needing to depend on other people to make patches to the code or documentation, they are actually making short-term decisions for the project. The
PMC can (even tacitly) agree and approve the changes into permanency, or they can
reject them. Remember that the PMC makes the decisions, not the individual
committers.

### PMC Member  {#pmc-members}

A **PMC member** is a committer who was elected due to
merit for the evolution of the project.
They have write access to the code repository, an apache.org mail address,
the right to vote on community-related decisions and the right to
propose other active contributors for committership. The PMC as a whole is the entity
that controls the project, nobody else.  In particular, the PMC must vote to approve any formal release of their project's software products.

### PMC Chair  {#pmc-chair}

The Board appoints the **Chair** of a PMC from the [PMC members](#pmc-members). The PMC as a whole is the
entity that controls and leads the project. The Chair is the interface
between the Board and the Project.  [PMC Chairs have specific duties](/dev/pmc.html#chair).

### ASF Member  {#asf-members}

An **ASF member** is a person who was nominated by current members and
elected due to merit for the evolution and progress of the foundation.
Members care for the ASF itself, usually through project-related and cross-project activities. Legally, a member is
a "shareholder" of the foundation, one of the owners. They have the right
to elect the board, to stand as a candidate for board election and to
propose a committer for membership. They also have the right to propose a
new project for incubation (we'll see later what this means). The members
coordinate their activities through their mailing list and through their
annual meeting. We have a [full listing of Apache Members](/foundation/members.html).

## Project Management and collaboration  {#management}

Apache projects are managed using a collaborative, consensus-based
process. We do not have a hierarchical structure; rather, different groups
of contributors have different rights and responsibilities in the
organization.

Since the appointed PMCs have the power to create
their own self-governing rules, there is no single vision on how PMCs
should run their projects and nurture the communities they lead.

At the same time, while there are some differences, there are a number of
similarities all ASF projects share:

### Communication  {#communication}

Communication is via mailing lists. These are "virtual meeting
rooms" where conversations happen asynchronously, which is a general
requirement for groups that are distributed across many
time zones (as is normally the case for Apache
communities).

Some projects additionally use more synchronous messaging (for example, IRC
or instant messaging). Voice communication is extremely rare, normally
because of costs and the language barrier (speech is harder to understand
than written text).

In general, asynchronous communication is important because it
allows archives to be created and it's more tolerant on the volunteer
nature of the various communities.

### Documentation

Each project is responsible for its own [project website](projects.html).
Further information to assist committers, developers, and PMCs is available
at [ASF Infrastructure](../dev/).

### Decision Making  {#decision-making}

Projects are normally auto governing and driven by the people who volunteer
for the job. This is sometimes referred to as "do-ocracy" -- power of those
who do. This functions well in most cases.

When coordination is required, projects make decisions with a lazy consensus
approach: a few positive votes with no negative vote is enough to get
going.

Voting is by numbers:

- +1 -- a positive vote

- 0 -- abstain, have no opinion

- -1 -- a negative vote

The rules require that a PMC member registering a negative vote must include an alternative proposal or
a detailed explanation of the reasons for the negative vote.

The community then tries to gather consensus on an alternative proposal
that can resolve the issue. In the great majority of cases, the concerns
leading to the negative vote can be addressed.

This process is called "consensus gathering" and we consider it a very
important indication of a healthy community.

Specific cases have some more [detailed voting rules](/foundation/voting.html).

## Philosophy

While there is not an official list, people often cite these six principles, often referred to as "The Apache Way",
as the core beliefs behind the foundation:

- collaborative software development

- commercial-friendly standard license

- consistently high-quality software

- respectful, honest, technical-based interaction

- faithful implementation of standards

- security as a mandatory feature

All ASF projects share these principles.  Similarly, Apache projects 
must [govern themselves independently](http://community.apache.org/projectIndependence.html) of undue commercial influence.

## Operation

All participants in ASF projects are volunteers and nobody (not even members or
officers) is paid directly by the foundation to do their job. There are many
examples of committers who are paid to work on projects, but never by
the foundation itself. Rather, companies or institutions that use
the software and want to enhance it or maintain it provide the salary.

The ASF does contract out various services, including accounting, 
Press and Media relations, and infrastructure system administration.

### Individuals compose the ASF  {#hats}

All of the ASF including the board, the officers, the committers, and
the members, are participating as individuals. That is one strength of the
ASF: personal affiliations do not cloud the person's contributions.

Unless they specifically state otherwise, whatever an ASF participant posts on any mailing
list is done *as themselves*. It is the individual point-of-view, wearing
their personal hat and not as a mouthpiece for whatever company happens to
be signing their paychecks right now, and not even as a director of the
ASF.

All ASF participants implicitly have multiple hats, especially the
Board, the officers, and the PMC chairs. They sometimes need to talk
about a matter of policy, so to avoid appearing to be expressing a personal
opinion, they will state that they are talking in their special capacity.
However, most of the time this is not necessary: personal opinions work
well.

Some people declare their hats by using a special footer to their email,
others enclose their statements in special quotation marks, others use
their apache.org email address when otherwise they would use their personal
one. This last method is not reliable, as many people use their
apache.org address all of the time.

### Balancing confidentiality and public discussion  {#confidential}

We endeavour to conduct as much discussion in public as possible. This
encourages openness, provides a public record, and stimulates the broader
community.

However sometimes internal private mail lists are necessary. You must never
divulge information from such a list in public without the express permission of the
list. Also never copy an email between private and public lists (no Cc).
Such an event would go beyond the normal need for email etiquette and would be a
serious breach of confidence. It could have serious ramifications, causing
unnecessary confusion and ill-informed discussion.

Private lists are typically only used for matters pertaining to people as 
individuals (like voting in new committers), and legal matters that require 
confidentiality.

## The Foundation Infrastructure (#infrastructure)

The ASF does not have offices or buildings. Its only physical existence is the technical infrastructure that enables it to operate, and the staff.

The ASF Infrastructure team, known as "Infra", supports services that help the ASF and its projects function and flourish. <a href="https://apache.org/dev/infrastructure.html" target="_blank">Learn more</a>.

## The Foundation Incubator  {#incubator}

To support and encourage new projects, the ASF created the
[Incubator](http://incubator.apache.org/) to help new
efforts join the foundation.

Since the meritocratic rules operate across the ASF from bottom to top, it
is vital for the long-term stability of this form of government that a project's
initial set of committers has to understand very well the dynamics of such a
system, and to share the same philosophical attitude toward
collaboration and openness that the ASF expects from its projects.

The incubator is responsible for:

- filtering proposals about the creation of a new project or
sub-project

- helping create the new project and the infrastructure that it needs to
operate

- supervising and mentoring the incubated community to help it create
an open, meritocratic environment

- evaluating the maturity of the incubated project, and deciding whether to promote it to
official project / sub-project status or, in case of failure, to retire it.

The incubator (like the board) does not perform
filtering on the basis of technical issues. The foundation
respects and supports a variety of technical approaches. It doesn't fear
innovation or even internal confrontation between projects which overlap in
functionality.

The incubator filters projects on the basis of the likelihood of projects
becoming successful meritocratic communities. The basic requirements for
incubation are:

- a working codebase -- over the years and after several failures, the
foundation came to understand that without an initial working codebase, it
is generally hard to bootstrap a community. This is because merit is not
well-recognized by developers without a working codebase. Also, the
friction that can develop during the initial design stage is likely to
fragment the community.

- the intention to assign sufficient intellectual
property rights to the software to the ASF -- this allows the
foundation to obtain an irrevocable and permanent right to redistribute and
work on the code, without fearing lock-in for itself or for its users, while 
still allowing the original author to maintain their copyright.

- a sponsoring ASF member or officer -- this person acts as the main
mentor, giving directions to the project, helping out in the day-to-day
details and keeping contact with the incubator PMC.

The incubation period normally serves to estimate whether the project is able to increase the diversity of its committer base and
play within the meritocratic rules of the foundation.

It might seem rather easy to achieve, but, in a
volunteer and highly selective environment, attracting new committers is
not automatic.

Diversity of committership is important for two main reasons:

- it gives long term stability to the project's development. In fact, with
all the developers affiliated to the same entity, the chance of seeing all
of them moving away from the project at the same time is much greater than
with a community of individuals affiliated to unrelated entities.

- it gives a greater variety of technical visions, This guarantees a better adherence to the environment and users' needs, thus a
higher chance of finding real-life use of the software.

## Other Foundation Entities  {#other}

Along with the Incubator, the foundation has several other
cross-foundation projects. For example, the ASF does not have offices or
buildings. It's a virtual entity that exists only on the internet, and the [Infrastructure team](../dev/infrastructure.html) manages the
technical infrastructure that enables it to operate.

Read more about these and other cross-foundation projects on the [Foundation
Projects](foundation-projects.html) page.

The ASF also hosts some foundation-wide mailing lists, which you can learn about
on the [Mailing Lists](mailinglists.html) page.

## In review...  {#conclusions}

The ASF represents one of the best
examples of an open organization that has found balance between structure
and flexibility. We have grown from 200 committers to around 3000, and that
number continues to grow on a daily basis. We have been able to create
software products that are leaders in their markets. We have also
been able to find balance between openness and economical feasibility. This
has earned us respect from individual users of Apache software and
multinational corporations. We hope to continue to provide inspiration for
businesses, governments, education programs, and other software foundations.


  [1]: /foundation/governance/
  [2]: /foundation/governance/
  [3]: /dev/
