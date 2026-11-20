Title: AI Agents and AGENTS.md Files (Draft)
license: https://www.apache.org/licenses/LICENSE-2.0


Version: 1.0 DRAFT

**This page is a draft under review on legal-discuss. It is not yet ASF guidance.**

[TOC]

An AGENTS.md file sits in a repository and tells AI coding agents how to work in it. Most projects use them for build commands and code style. They also do legal work, because an AGENTS.md is the only place an agent is reliably told what it must not do.

This page covers what to put in one so that agents working in your project stay within the [Generative Tooling Guidance](/legal/generative-tooling.html) and within the transparency rules that now apply to AI generated text published to the public. The wording below is a starting point; projects should adapt it.

## What an AGENTS.md can and cannot do {#what-it-can-do}

Two different sets of rules reach AI use in a project, and an AGENTS.md serves them differently.

The generative tooling guidance governs contributions. Its conditions are decisions a person makes: whether the tool's terms grant rights in the output, whether the output is copyrightable subject matter, whether third party material is present and properly licensed. An agent cannot make those decisions and should not be instructed as though it could. An agent that writes "no third party material" into a commit message has not checked anything; it has produced a record that looks considered and is not. What an agent can usefully do is record what it used, report what it found, and avoid destroying the information the contributor needs in order to answer honestly.

The transparency rules govern publication. Since 2 August 2026 the EU AI Act has required whoever publishes AI generated text intended to inform the public to say that the text was AI generated, unless the text has been through human review and a named person holds editorial responsibility for publishing it. Releasing under an open source license does not exempt this. Here an AGENTS.md does more than record. An instruction telling the agent it may not publish, and that a named person approves before anything goes out, is the review and the responsibility the exemption asks for. Telling the human to review does not stop the agent posting. Telling the agent not to post does.

So the rules below fall into two groups: rules that keep the agent out of the publishing step, and rules that keep the contribution record honest.

## What to put in your AGENTS.md {#what-to-put-in}

Copy the following into your project's AGENTS.md and edit it to fit. Delete anything your project will not actually enforce, because a rule nobody follows is worse than no rule at all.

    ## AI agents

    These rules bind you. They cover anything you produce that may reach a public channel: code, release notes, security advisories, documentation, website content, and issue or mailing list replies.

    **Do not publish.** Write to a branch or a drafts directory. Do not post, merge, or push to a release channel. If a task needs something sent, write the text and say that a person must send it. Setting a triage label or status tag is not publishing.

    **Do not approve your own work.** A named person merges or posts it. Do not self-merge even where you have permission to.

    **You are not the contributor.** The person who submits the work makes the ICLA representations about it. Do not sign off as yourself, do not take the author line, and do not state that output is original, free of third party material, or not copyrightable.

    **Attribute your commits.** Use `Assisted-by: <agent> (<model-id>)` if a person decided the substance, or `Generated-by: <agent> (<model-id>)` if you originated it. Give the exact model identifier if you know it.

    **Never detach a notice.** Keep copyright notices, license headers, and attribution with the material they cover. If you reproduce something you can identify as coming from elsewhere, say so and name the source and license. If you cannot include it without stripping its notice, leave it out.

    **If you cannot follow a rule, stop and say which one.** Do not work around it.

## Notes on the rules {#notes}

**The first two rules are the ones that carry legal weight.** Not publishing, and requiring a named person to approve, are what satisfy the human review and editorial responsibility conditions in the EU transparency rules. They only work if the review is real. A project that merges agent output unread has the wording but not the substance.

**The attribution lines follow the [existing recommendation](/legal/generative-tooling.html#include-in-contributions)** to identify the tooling in the commit message. Splitting `Assisted-by` from `Generated-by` tells a later reviewer which contributions were AI led, which is the harder question to reconstruct afterwards.

**The rule against detaching notices addresses the one failure mode agents cause routinely.** Reformatting a file, tidying a header, or lifting a function into a new module can quietly separate a license notice from the code it covers. Once that has happened, nobody downstream can tell there was ever anything to check.

## What to leave out {#what-to-leave-out}

Some things do not belong in an AGENTS.md, either because the agent cannot do them or because putting them there implies a check that is not happening.

- **Whether a tool's terms are acceptable.** That question is settled before the agent is configured, and it depends on the exact tool, tier, access path, and feature. See [Steps for Contributors and PMCs](/legal/generative-tooling-terms-contributors.html).
- **Whether output is copyrightable.** Unsettled, jurisdiction dependent, and not something a scan can answer.
- **Which of the guidance's three conditions a contribution relies on.** That is a judgement for the contributor. An agent asked to name the condition will name one, and the answer will look considered without being so.
- **The ICLA representations.** The contributor makes them. An agent is not a party to the ICLA.
- **The ongoing duty under ICLA section 8** to notify the Foundation if the representations later turn out to be inaccurate. That runs after the contribution and rests with the contributor.
- **A visible "AI generated" label on published pages.** If your project ever needs one, it belongs in the publishing pipeline. An agent usually has no control over how a page renders.

## For PMCs {#for-pmcs}

Adopting the rules is the easy part. Three things need attention afterwards.

The review has to be genuine. The rules make a named person's approval the record of editorial responsibility; they cannot make that approval considered. If agent contributions are merged on sight, the project has the paperwork and not the protection.

Decide how far the publishing restriction reaches. The wording above applies it to every public channel, which is wider than the law strictly requires. That is the simpler line to hold, and it avoids arguing case by case about which outputs inform the public. Narrow it if you have a reason to.

Only keep rules you follow. The publishing and approval rules do their legal work only where the practice matches them. A file stating that a named person approves every publication, in a project whose bot merges its own patches unattended, records the gap rather than closing it. If that is your project, either change the practice or drop the rule, and re-read the file whenever you change your automation.

## Questions {#questions}

If you are unsure whether a rule fits your project, or you think one of them conflicts with how your tooling works, raise it on the [legal-discuss@](/foundation/mailinglists.html#foundation-legal) mailing list.
