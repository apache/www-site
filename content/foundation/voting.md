Title: Apache Voting Process
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

Because one of the fundamental aspects of accomplishing things within the
Apache framework is doing so by consensus, we need a
way to tell whether we have reached consensus. We do this by voting.

There are essentially three types of vote:

1. Procedural

1. Code modifications

1. Package releases

Votes on **procedural issues** follow the common format of majority rule unless
otherwise stated. That is, if there are more favourable votes than
unfavourable ones, the issue is considered to have passed -- regardless of
the number of votes in each category. (If the number of votes seems too
small to be representative of a community consensus, the issue is typically
not pursued. However, see the description of [lazy
consensus](#LazyConsensus) for a modifying factor.)

Votes on **code modifications** follow a different model. In this scenario, a
negative vote constitutes a [veto](#Veto) , which the voting group (generally the PMC of a project) cannot override.
Again, this model may be modified by a [lazy consensus](#LazyConsensus)
declaration when the request for a vote is raised, but the full-stop nature
of a negative vote does not change. Under normal (non-lazy consensus)
conditions, the proposal requires three positive votes and no negative votes
in order to pass; if it fails to garner the requisite amount of support, it
doesn't. Then the proposer either withdraws the proposal or modifies the code and resubmits it,
or the proposal simply languishes as an open issue until someone gets around to removing it.

Votes on whether a **package** is ready to release use yet a
different mechanism: are there are least three binding votes in favour of
the release? See the [release policy](../legal/release-policy.html#release-approval) 
for more information on voting and requirements for binding votes.

## Binding votes

Who can vote is, to some extent, a community-specific thing.

PMC members have formally binding votes, but in general communities encourage all their members to vote,
even if their votes are only advisory.


## Implications of voting

In some cases and communities, the exercise of a vote carries some
responsibilities that may not be immediately obvious. For example, in some
cases a favourable vote carries the implied message 'I approve **and** I'm
willing to help.' Also, an unfavourable vote may imply that 'I disapprove,
but I have an alternative and will help with that alternative.'

The community should spell out in its guidelines the tacit implications of voting.
However, **in no case** may someone's vote be considered
invalid if it does not appear to meet the implied commitment: a vote is a
formal expression of opinion, *not* of commitment.

If the [R-T-C](#ReviewThenCommit) policy is in effect, a positive vote
carries the very strong implied message, 'I have tested this patch myself,
and found it good.' Similarly, a negative vote usually means that that the voter tested
the patch and found it to be *not* good, although the veto (for such it is
in this case) may be based on other technical grounds.

## Expressing votes: +1, 0, -1, and fractions

The voting process in Apache may seem more than a little weird if you've
never encountered it before. Votes are represented as numbers between -1
and +1, with '-1' meaning 'no' and '+1' meaning 'yes.'

The in-between values indicate how strongly the voting individual
feels. Here are some examples of fractional votes and what the voter *might* be communicating with them:

- +0: 'I don't feel strongly about it, but I'm okay with this.'

- -0: 'I won't get in the way, but I'd rather we didn't do this.'

- -0.5: 'I don't like this idea, but I can't find any rational
justification for my feelings.'

- ++1: 'Wow! I like this! Let's *do* it!'

- -0.9: 'I *really* don't like this, but I'm not going to stand in the way
if everyone else wants to go ahead with it.'

- +0.9: 'This is a cool idea and i like it, but I don't have time/the
skills necessary to help out.'
  
Votes from PMC Members on releases must use +1, 0, -1 to be considered binding.

Voting periods should generally run for at least 72 hours to provide
an opportunity for all concerned persons to participate, regardless of their
geographic location.

### Votes on code modification

For code-modification votes, +1 votes are in favour of the proposal, but -1
votes are [vetos](#Veto) and kill the proposal dead until all vetoers
withdraw their -1 votes.

Unless the proposer declares that the vote is using [lazy consensus](#LazyConsensus),
three +1 votes are required for a code-modification proposal to pass.

We recommend whole numbers for this type of vote, as the opinion the voter is
expressing is Boolean: 'I approve/do not approve of this change.'

### Votes on package releases  {#ReleaseVotes}

Votes on whether a package is ready to release use 
[majority approval](glossary.html#MajorityApproval) -- 
i.e. at least three PMC members must vote affirmatively
for release, and there must be more positive than negative votes.
**Releases may not be vetoed.** 
Generally the community
will cancel the release vote if anyone identifies serious problems, but
in most cases the ultimate decision
lies with the individual serving as release manager. The
specifics of the process may vary from project to project, but the 'minimum
quorum of three +1 votes' rule is universal.

## Vetoes  {#Veto}

A -1 vote by a qualified voter stops a code-modification proposal in its tracks. This constitutes a veto, and it cannot be overruled
nor overridden by anyone. Vetoes stand until and unless the individual withdraws their veto.

To prevent vetoes from being used capriciously, the voter must provide with the veto
a technical justification showing why the change is bad (opens a security
exposure, negatively affects performance, *etc.* ). A veto without a
justification is invalid and has no weight.

## Gauging consensus through silence  {#LazyConsensus}

An alternative to voting is to measure the
acceptability of something using the concept of
[lazy consensus](glossary.html#LazyConsensus).

Lazy consensus is simply an announcement of 'silence gives assent.' When
someone wants to determine the sense of the community this way, they might do
so with a mail message such as:

    "The patch below fixes bug #8271847; if no-one objects within three
    days, I'll assume lazy consensus and commit it."

You cannot apply lazy consensus to code changes when the
[review-then-commit](glossary.html#ReviewThenCommit) policy is in effect.

## Reasons for votes

People tend to avoid conflict and thrash around looking for something to
substitute - somebody in charge, a rule, a process, stagnation. None of
these tend to be very good substitutes for doing the hard work of resolving
the conflict.

