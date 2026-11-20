Title: Checking a Generative AI Tool's Terms of Use (Draft)
license: https://www.apache.org/licenses/LICENSE-2.0


Version: 1.0 DRAFT

**This page is a draft under review on legal-discuss. It is not yet ASF guidance.**

[TOC]

The [Generative Tooling Guidance](/legal/generative-tooling.html) says that a contributor may include AI generated content in a contribution if, among other things, the tool's terms of use do not place restrictions on the generated output that would be inconsistent with the [Open Source Definition](https://opensource.org/osd/). You may use whatever tools you wish provided you follow that guidance, which makes it the contributor's job to check the terms of the tool they actually use. These pages explain how to do that.

The pages in this set:

| Page | Description |
| ---- | ----------- |
| [What to look for in the terms](/legal/generative-tooling-terms-categories.html) | The kinds of clauses that matter, and the possible outcomes sorted into categories |
| [Steps for contributors and PMCs](/legal/generative-tooling-terms-contributors.html) | What to check, what to record, and what to do when the terms are unclear or unavailable |
| [Other things the terms affect](/legal/generative-tooling-terms-other-risks.html) | Issues the terms raise that are separate from the licensing question, such as confidentiality of prompts and training on your inputs |
| [Review results](/legal/generative-tooling-terms-reviewed.html) | Results of reviewing specific tools' terms against this question, as of the review date shown there |

## Check the terms for what you actually used {#exact-use}

The most important rule is that there is no single answer for a product name. The same product commonly has different terms for the free tier, a consumer subscription, a business or enterprise plan, and API access, and the rights in generated output can differ between them. What you need to check is the exact combination you used: the tool, the tier or plan, the way you accessed it (web app, IDE plugin, CLI, API, cloud platform), and any special feature involved.

Three situations deserve particular care:

A different tier is a different answer. Terms that are fine on a paid or enterprise plan tell you nothing about the free tier of the same product, and the reverse is also true. Free tiers sometimes carry restrictions, such as personal or non-commercial use limits, that the paid tiers do not.

A client is not the model. Many coding tools are open-source clients or local runtimes that connect to a model or API you choose. The client's own license says nothing about the generated output. The output terms come from the model provider or the model's license, so check those.

A feature can have its own terms. Ordinary code generation may be fine while a specific feature of the same tool is not. Features that ground answers in web search results, attach provenance data or watermarks, or are offered as beta or preview services often have their own restrictions. If you used such a feature, check its terms as well.

## What the terms need to allow {#what-terms-need-to-allow}

For a contribution to work under the Apache License, everyone who later receives the code must be free to use it for any purpose, modify it, and redistribute it, without signing up to anything with the tool vendor. So when you read the terms, the question is whether anything in them follows the generated output into the contributed code and limits what downstream recipients can do with it.

Restrictions on how you use the service itself are normal and are not the problem. Acceptable-use rules, rate limits, and payment terms bind you as the tool's user; they do not usually attach to the output. The clauses that matter are the ones about the output: who owns it, whether it can be used commercially, whether software containing it can be redistributed and modified, and whether recipients of that software take on any obligation to the vendor.

If you have read the actual terms that govern your account and they say nothing that restricts the generated output in these ways, the terms condition of the generative tooling guidance is met for that use. Follow the terms as written; you do not need to seek clarification from the vendor. If the terms do restrict the output, or you cannot obtain the terms that apply to your account, see [What to look for in the terms](/legal/generative-tooling-terms-categories.html) and [Steps for contributors and PMCs](/legal/generative-tooling-terms-contributors.html) for what to do.

## Terms change {#terms-change}

Vendors change their terms, tiers, and product names frequently. A check is good for the terms in effect when you made the contribution. If you rely on a tool regularly, re-read its terms from time to time, and re-check whenever you change tier, provider, model, or feature.

Questions about a specific tool's terms can be raised on the [legal-discuss@](/foundation/mailinglists.html#foundation-legal) mailing list.
