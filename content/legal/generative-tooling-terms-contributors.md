Title: Generative AI Tool Terms: Steps for Contributors and PMCs (Draft)
license: https://www.apache.org/licenses/LICENSE-2.0


Version: 1.0 DRAFT

**This page is a draft under review on legal-discuss. It is not yet ASF guidance.**

[TOC]

This page gives the practical steps for applying [What to Look For](/legal/generative-tooling-terms-categories.html) before contributing AI generated content. It covers the terms-of-use condition of the [Generative Tooling Guidance](/legal/generative-tooling.html); the guidance's other conditions, such as checking for copied third party material, still apply.

## Before you contribute {#before-you-contribute}

1. Identify exactly what you used: the tool, the tier or plan, the access path (web app, IDE plugin, CLI, API, cloud platform), the model or provider if the tool connects to one you chose, and any special feature such as search grounding or a beta service.
2. Find the terms that govern that exact use. This is usually the terms of service or product-specific terms you accepted for your account, plus any feature-specific terms. For a self-hosted model it is the model's license. For a client connected to an API it includes the provider's API terms.
3. Read them for the four things described on the [What to Look For](/legal/generative-tooling-terms-categories.html) page: output ownership, restrictions that follow the output, obligations on downstream recipients, and tier or feature dependencies.
4. Act on what you find. If nothing restricts the output, the terms condition is met. If something needs handling, do the handling: stay on the covered tier, avoid the restricted feature, check the connected provider's terms. If the terms restrict the output, or you cannot obtain them, do not contribute that output.

## What to keep a note of {#what-to-record}

You do not need to file anything, but you should be able to answer questions from your project about what you used. It is enough to note the tool, tier, and access path, the model or provider where you chose one, any special feature involved, and which terms document you read and when.

The generative tooling guidance already suggests identifying the tool in the commit message, for example with a Generated-by line. That, plus knowing which terms governed your account at the time, covers what a reviewer is likely to ask.

## If you cannot get the terms {#terms-unavailable}

Sometimes the governing terms are not available: the agreement is negotiated or confidential, the terms were only shown once at sign-up, or you cannot tell which document applies to your account. In that case:

1. Hold the generated material out of the contribution for the moment.
2. Try to obtain the actual governing document. If it is confidential, it can be discussed with legal-discuss privately rather than posted publicly.
3. If you cannot obtain it, rewrite the material yourself or regenerate it with a tool and tier whose terms you have read.

If the output is already mixed into a patch, the safe course is to remove or rewrite the AI generated portions before submitting.

## For PMCs {#for-pmcs}

Treat a contributor's terms check as a review aid, not as a merge decision. For a contribution that includes AI generated content, it is reasonable to ask what tool and tier were used and whether the contributor checked the terms. If the answer depends on a handling condition, check that the condition was actually met.

The terms check answers only one question. Normal review still applies: whether the contribution includes copied third party material, whether it is correct and maintainable, and whether it meets the project's own policies. A clean terms check does not shortcut any of that, and the ICLA representations still rest with the human contributor.

Avoid recording conclusions wider than what was checked. "Tool X is fine" is almost never the finding; "tool X on the paid API tier, for ordinary code generation, under the terms current at the time" is. Keeping the narrow form avoids the most common mistake, which is reusing a clearance for a different tier of the same product.

## Questions {#questions}

Before you start, check whether your tool and tier already appear on the [Review results](/legal/generative-tooling-terms-reviewed.html) page; if so, the reading has been done for you, subject to the date shown there.

If the terms are unclear, or you think a restriction may not mean what it appears to mean, ask on the [legal-discuss@](/foundation/mailinglists.html#foundation-legal) mailing list before contributing.
