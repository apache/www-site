Title: Generative AI Tool Terms: What to Look For (Draft)
license: https://www.apache.org/licenses/LICENSE-2.0


Version: 1.0 DRAFT

**This page is a draft under review on legal-discuss. It is not yet ASF guidance.**

[TOC]

This page describes the clauses to look for when reading a generative AI tool's terms of use, and sorts the possible outcomes into categories named by analogy with the [3rd Party License Policy](/legal/resolved.html): A-like, B-like, and X-like. The names are borrowed because the three-way split is familiar, but terms of use are not software licenses, and these are separate from the license policy's categories. A category describes what the terms you read mean for your contribution, and contributors are expected to follow the handling it calls for; if you believe it should not apply to your situation, raise that on legal-discuss.

Remember that the unit being categorized is the exact combination of tool, tier, access path, and feature you used, not the product as a whole. See [Checking a Generative AI Tool's Terms of Use](/legal/generative-tooling-terms.html), and [Review results](/legal/generative-tooling-terms-reviewed.html) for what these categories came out as for specific tools.

## The clauses that matter {#clauses}

Read the terms that actually govern your account and look for four things:

Who owns the output. Terms commonly assign the output to you, or state that the vendor claims no rights in it. Either is fine. A clause under which the vendor owns or co-owns the output is a problem, because you cannot contribute what you cannot license.

Restrictions that follow the output. Look for anything that limits how the generated content itself may be used: non-commercial or personal-use limits, bans on particular industries or purposes that apply to software containing the output, or restrictions on redistributing, modifying, or selling it. Rules about your use of the service are not the issue; rules that travel with the output are.

Obligations on downstream recipients. Apache releases cannot carry obligations owed to a tool vendor, so look for anything the terms require of people who later receive the code: accepting the vendor's terms, holding an account with them, or being barred from altering watermarks or provenance data embedded in the output. Retaining a notice is not the problem in itself, since the Apache License asks the same; the problem is a duty owed to someone who is not party to it, and a bar on modifying the material rather than a requirement to carry a notice alongside it.

Tier and feature dependencies. Check whether the terms say that rights differ by plan, or that particular features (search grounding, provenance data, beta services, third-party content) have their own terms. If so, the answer you reach is only good for the tier and features it covers.

## A-like: nothing in the terms restricts the output {#a-like}

You obtained the actual terms for the exact tool, tier, and access path you used. They either give you the output or claim no rights in it, and they contain none of the restrictions or downstream obligations described above.

In this case the terms condition of the [Generative Tooling Guidance](/legal/generative-tooling.html) is met for that exact use. It answers only the terms question, and only for the tier and features you checked; the guidance's other conditions, such as whether the output includes copied third party material, still apply.

## B-like: usable with specific handling {#b-like}

Nothing in the terms clearly blocks the output, but something needs to be handled before you rely on them. Common examples: the rights you checked apply to a paid or API tier, so you must actually be on that tier; a particular feature carries restrictions, so you must avoid that feature; the tool is a client or local runtime, so you must also check the terms of the model or provider it connects to; or the terms are unclear on one point that needs a question to legal-discuss.

A B-like answer only holds when its condition is met. If the terms are acceptable on the API tier, that says nothing about the free tier; if they are acceptable with a particular feature avoided, they apply only when you avoided that feature.

## X-like: the terms restrict the output {#x-like}

The terms claim vendor ownership of the output, limit commercial use or fields of use of software containing it, restrict redistribution or modification, or oblige whoever receives your code to do something for the vendor, such as accepting their terms or leaving embedded provenance data untouched.

Do not contribute output generated under those terms. If the restriction is tied to a specific feature or tier, the problem may be limited to that feature or tier; check whether an unrestricted path exists. If you believe the terms are being read too broadly, ask on [legal-discuss@](/foundation/mailinglists.html#foundation-legal) before contributing.

## Terms not obtained {#terms-not-obtained}

You could not get the terms that actually govern your use. This is common with enterprise and negotiated agreements, terms only shown at sign-up, and tools where you are not sure which document applies.

Not having the terms is not the same as the terms being silent. Do not fill the gap with a vendor FAQ, a pricing page, a blog post, or the public terms of a different tier. Until you can read the governing terms, treat the output as not cleared: hold it back, rewrite it, or regenerate it with a tool and tier whose terms you have checked.
