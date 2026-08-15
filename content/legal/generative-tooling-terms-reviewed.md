Title: Generative AI Tool Terms: Review Results (Draft)
license: https://www.apache.org/licenses/LICENSE-2.0


Version: 1.0 DRAFT

**This page is a draft under review on legal-discuss. It is not yet ASF guidance.**

[TOC]

This page records the results of a review of generative AI tool terms of use against the question described in [Checking a Generative AI Tool's Terms of Use](/legal/generative-tooling-terms.html): whether the terms place restrictions on generated output that would be inconsistent with the [Open Source Definition](https://opensource.org/osd/). The categories are explained on the [What to Look For](/legal/generative-tooling-terms-categories.html) page.

Read the following before using the tables, because they limit what a row means:

- **Follow the row that matches your exact use.** Each row records what the named terms said when they were reviewed; if you think a row should not apply to your situation, raise it on legal-discuss. A row is limited to the exact tool, tier, and access path named in it; a different tier of the same product is a different row, and often a different answer.
- **The review date matters.** Each row shows the date its terms were reviewed, and rows are re-checked and updated individually, so dates differ across the page. Vendors change terms frequently; if the terms have changed since the row's date, the row no longer applies. Corrections and updates are welcome on [legal-discuss@](/foundation/mailinglists.html#foundation-legal).
- **Where obtained public terms are silent** on output ownership or redistribution, this review treats that silence as leaving the output unrestricted, consistent with the guidance's condition that the terms not *place* restrictions. Silence is different from not having the terms: rows whose governing terms could not be obtained are listed as not classified, and that is not a clearance.
- **Category A here answers one question only.** It does not address the guidance's other conditions (such as copied third-party material in the output), copyright provenance, confidentiality of what you put into the tool, or code quality. Normal contribution review always still applies.

## Category A {#category-a}

For these rows the full public terms governing the exact tier were obtained and contained no restriction following the generated output. Ordinary generated output from the exact tier listed may be treated as meeting the terms condition of the guidance, as of the review date.

| Vendor / tool | Tier or access path | Notes | Reviewed |
| --- | --- | --- | --- |
| GitHub Copilot | Business (public terms) | Custom order forms are separate. | 2026-08-11 |
| GitHub Copilot | Individual Free, Pro, Pro+ | GitHub trains on individual Inputs and Outputs by default unless you opt out in account settings (a data-use issue, not an output-rights one). | 2026-08-11 |
| OpenAI ChatGPT | Free, Plus, Pro | You own the output. | 2026-08-11 |
| OpenAI ChatGPT Team / Business, OpenAI API, Codex CLI | Public terms | You own the output. Note that ChatGPT Voice Output is for non-commercial use only; this does not affect code. | 2026-08-11 |
| Anthropic Claude (claude.ai) | Free, Pro, Max | Consumer terms. | 2026-08-11 |
| Anthropic Claude | Team, API (public commercial terms) | | 2026-08-11 |
| Anthropic Claude Code | Backed by Pro/Max subscription or API | Governed by the consumer or commercial terms above. | 2026-08-11 |
| Cursor | Hobby, Pro, Ultra | Teams (if under MSA) are not covered. | 2026-08-11 |
| Google Gemini Business | Business | | 2026-08-11 |
| Google Gemini API / AI Studio | Free and Paid, ordinary generated output | Google claims no ownership of generated content. Grounding and Robotics features are Category X, see below. The unpaid tier may use your prompts and responses for product and ML improvement (a data-use issue); API clients in the EEA, Switzerland, and UK must use the paid service. | 2026-08-11 |
| Google Gemini web/app | Consumer free | Outputs are yours; Google claims no ownership. Note that the terms bar misrepresenting generated content as created solely by a human in order to deceive. Signed-in chats and generated content may be used, including via human review, to improve services and train models unless you turn off Gemini Apps Activity (a data-use issue, not an output-rights one). | 2026-08-14 |
| Google Gemini web/app | Advanced (Google One / AI Pro / AI Ultra) | Same terms as the free tier; the paid addendum covers AI-credit payment mechanics only and changes no output rights. | 2026-08-14 |
| Claude via AWS Bedrock | Pay-per-use | Output is Your Content, and Anthropic claims no ownership of prompts or outputs. Bedrock models that attach Provenance Data are Category X, see below; nothing indicates Claude's text or code output carries any. | 2026-08-14 |
| Amazon Q Developer | Free | Output is Your Content. AWS may use Free-tier content, including generated code, to improve its services and train models unless you opt out (a data-use issue, not an output-rights one). | 2026-08-14 |
| Amazon Q Developer | Pro | Output is Your Content. Unlike the Free tier, Pro content is not used for service improvement or model training, and Pro is covered by AWS's generative AI indemnity. | 2026-08-14 |
| Claude via Vertex AI | Pay-per-use | Customer owns all Outputs; Anthropic assigns any right it has in them and may not train on Customer Content. The governing terms are dated March 2024, and the acceptance point is a click-through in the Vertex AI Model Garden console, so check the version shown to you at model-grant time. | 2026-08-14 |
| Google Gemini via Vertex AI | Pay-per-use, ordinary generated output | Generated Output is Customer Data; Google asserts no ownership in it. Grounding features are Category X, see below. | 2026-08-14 |
| xAI Grok | Free, SuperGrok | Input and Output are both "User Content" and you retain ownership. The terms are the same for both tiers; only billing differs. Logged-out use grants xAI the right to use your content for product improvement and model training with no opt-out; logged in you can opt out (a data-use issue, not an output-rights one). | 2026-08-14 |
| Replit AI / Agent | Starter/Free, Core, Pro | Teams not covered if separate terms apply. | 2026-08-11 |
| Vercel v0 | Paid Pro / Premium | The Free/Hobby tier is Category X (non-commercial limit). | 2026-08-11 |
| Tabnine | Developer / Pro (paid) | Accepted suggestions are deemed part of your code. If you use the model-switching feature, the selected third-party model's terms also apply. The Free tier is Category X. | 2026-08-11 |
| DeepSeek model weights, self-hosted | V3-0324, V3.2, V3.2-Exp, V3.2-Speciale, R1, R1-0528, V4-Pro, V4-Flash-0731 (MIT-licensed versions, exact version only) | DeepSeek-Coder and original V3 are Category X; DeepSeek hosted chat and API are Category B rows. | 2026-08-11 |
| OpenAI GPT-OSS 20B, self-hosted | Model weights (Apache-2.0) | Exact version only. | 2026-08-11 |
| Qwen3-Coder, self-hosted | Qwen3-Coder-480B-A35B-Instruct, Qwen3-Coder-30B-A3B-Instruct (exact versions only) | Apache-2.0 weights, with nothing addressing ownership of or restrictions on generated output. Qwen3-Coder-Next carries the same licence tag but its licence file could not be obtained, and some Qwen2.5-Coder sizes are Category X; check the exact version. | 2026-08-14 |
| Qwen2.5-Coder, self-hosted | 0.5B, 1.5B, 7B, 14B, 32B Instruct (exact versions only) | Apache-2.0 weights, identical licence text across these five sizes, with nothing addressing generated output. The 3B and 3B-Instruct sizes in the same family are Category X, see below. | 2026-08-14 |
| Lovable | Free, paid | The terms say you own any AI output generated for you. Don't use the output to train a competing model, review it before relying on it in high-risk contexts, and don't pass it off as human-written where that would mislead; those are obligations on you, not on your code's recipients. | 2026-08-14 |
| Microsoft Phi-4, Phi-4 Mini, self-hosted | Model weights, microsoft/phi-4 and microsoft/Phi-4-mini-instruct (exact versions only) | Plain MIT, with nothing addressing generated output. The reasoning, flash-reasoning, and multimodal siblings each have their own licence file and are not covered. | 2026-08-14 |
| Google Gemma 4, self-hosted | Model weights, Gemma 4 family (exact versions only) | Unmodified Apache-2.0, a change of licence track from Gemma 1 to 3n and from the specialised variants, which stay under the custom Gemma Terms of Use and are not covered here. The model card links a prohibited use policy governing what you may generate; it is not incorporated into the Apache-2.0 grant, and either way it binds whoever runs the model rather than following the output to people who receive your code. | 2026-08-14 |
| Mistral Codestral Mamba, self-hosted | Model weights, Mamba-Codestral-7B-v0.1 (exact version only) | Plain Apache-2.0, with nothing addressing generated output. Despite the shared Codestral name, Codestral 22B is licensed differently and is Category X, see below. | 2026-08-14 |
| Mistral Devstral Small, self-hosted | Model weights, Devstral-Small-2-24B-Instruct-2512, Devstral-Small-2507, Devstral-Small-2505 (exact versions only) | Plain Apache-2.0, with nothing addressing generated output. Devstral Small does not carry the revenue gate that puts Devstral 2 in Category X, despite the shared name. | 2026-08-14 |
| StackBlitz Bolt.new | Teams, Enterprise | StackBlitz claims no ownership in content you submit or create, and these plans carry a commercial-use grant. The terms say nothing about AI output at all, so this rests on the general content clause. Other tiers are Category X, see below. | 2026-08-14 |
| JetBrains AI Assistant, Junie | Commercial Free / Paid tiers, including All Products Pack bundled | Outputs are yours. JetBrains will not train on your inputs or outputs unless you expressly agree. The purchase terms behind a bundled subscription cover the transaction only and change no output rights. EAP is a separate row. | 2026-08-14 |
| JetBrains AI | EAP / Early Access | Covers the EAP program only, not the commercial tiers. | 2026-08-11 |
| Zhipu GLM-5.2, self-hosted | Model weights (MIT) | Exact version only; other GLM versions not covered. | 2026-08-11 |

## Category B {#category-b}

For these rows nothing clearly blocks the output, but the listed handling condition is part of the answer. Meet the condition before relying on the output.

| Vendor / tool | Tier or access path | Handling condition | Reviewed |
| --- | --- | --- | --- |
| Hugging Face hosted inference | Free, Pro | The platform terms do not resolve model-specific output terms; check the licence of the actual model used. Note that some model licences would be Category X (for example OpenRAIL-M, see below). | 2026-08-11 |
| OpenCode | Zen / Pro managed tiers | Output is assigned to you at the OpenCode layer; the connected model provider's terms still apply. | 2026-08-11 |
| Kilo Code | Kilo Pass, Teams | Suggestions are assigned to you; the connected AI model's terms still apply, and some model licences would be Category X. Kilo takes a broad licence to uploaded customer data to improve its services (a data-use issue, not an output-rights one). | 2026-08-11 |
| OpenClaw | Self-hosted (MIT) | The client licence says nothing about output; classify the connected model or provider. | 2026-08-11 |
| GetOpenClaw hosted service | Hosted | Hosted terms are incomplete for output rights and provider-dependent; do not infer rights from the self-hosted MIT licence. | 2026-08-11 |
| Microsoft Azure OpenAI Service | Azure Customer Agreement / MCA | Comply with the Enterprise AI Code of Conduct when generating: you must have rights to content you release and disclose that output is AI-generated. These obligations bind you as the customer, not downstream recipients of your code. | 2026-08-11 |
| Microsoft 365 Copilot, Copilot Chat | Business plans | Same Code of Conduct handling as Azure OpenAI above. | 2026-08-11 |
| DeepSeek hosted chat/app, Open Platform API | Hosted service, API | Outputs are yours. If you publish DeepSeek output, verify it and mark it as AI-generated (a Generated-by line does this), and stay within the usage policy; these obligations are yours, not your code's recipients'. API operators exposing the service have separate end-user obligations. | 2026-08-11 |
| Moonshot Kimi K2.x, self-hosted | Kimi-K2-Base, K2-Instruct, K2-Instruct-0905, K2-Thinking, K2.5, K2.6, K2.7-Code (exact versions only) | A modified MIT grant. Its one added condition is that a commercial product built on the model with more than 100 million monthly active users or US$20 million monthly revenue must show the version name in its user interface. That attaches to deploying the model, not to code it generated, so it does not reach people who receive your contribution. Kimi K3 carries a further restriction and is Category X; this row does not cover it. | 2026-08-14 |

## Category X {#category-x}

For these rows the reviewed terms impose, or appear to impose, a condition inconsistent with contribution use. Do not contribute output generated under the listed conditions without asking on legal-discuss first. Where a row says the issue is feature-specific, it does not extend to other features or tiers.

| Vendor / tool | Tier or access path | Reviewed issue | Reviewed |
| --- | --- | --- | --- |
| Google Gemini API / AI Studio | Free and paid, feature-specific only | Grounding with Search and Grounding with Maps output carries display, caching, modification, and no-training restrictions, and Google retains rights in Maps data. Robotics Models carry a field-of-use restriction (no safety-critical use) that does not attach to output and is unlikely to arise for ASF work. Ordinary code generation is not covered by this finding. | 2026-08-11 |
| AWS Bedrock | Models that attach Provenance Data, feature-specific only | Where AWS documentation says a model marks its output with metadata, digital signatures, or watermarks (for example Amazon Titan Image Generator), neither you nor any end user may alter or remove that Provenance Data. That obligation reaches downstream recipients. Ordinary text and code output is not covered by this finding. | 2026-08-14 |
| Google Gemini via Vertex AI | Grounding with Google Search, Web Grounding for Enterprise, Grounding with Google Maps, feature-specific only | Customer, end users, and third parties may not cache, syndicate, resell, analyse, or train on grounded results and search suggestions, and Google retains all rights in Maps data. The restriction is stated to bind end users and third parties, not only the customer. Ordinary text and code generation is not covered by this finding. | 2026-08-14 |
| Windsurf (Cognition) | Free, Pro, Teams | Internal-business-purpose grant, competing-products restriction, and export/sanctions conditions stated to apply to output. | 2026-08-11 |
| Tabnine | Free | The free plan is not intended for commercial or business use. | 2026-08-11 |
| Vercel v0 | Free / Hobby | Hobby plan services are for personal or non-commercial use only. | 2026-08-11 |
| StackBlitz Bolt.new | Free beta and individual paid tiers | The licence to use the service is limited to personal use and not for resale or further distribution; only the Teams and Enterprise plans carry a commercial-use grant. | 2026-08-14 |
| DeepSeek-Coder, DeepSeek-V3 (original) | Self-hosted model weights | The DeepSeek License Agreement contains field-of-use restrictions that expressly extend to any use of the output, and requires the same restrictions to be passed to downstream recipients of the model. | 2026-08-11 |
| Meta Llama 4, Code Llama, Llama 2 | Self-hosted model weights | Acceptable-use policy and notice requirements follow redistribution; restrictions on using outputs to improve other models; large-scale commercial licence gate. | 2026-08-11 |
| BigCode StarCoder, StarCoder2 | Self-hosted model weights (OpenRAIL-M) | The licence states it is not open source; use restrictions must be passed downstream and generated-code disclaimers are required. | 2026-08-11 |
| Mistral Devstral 2 | Self-hosted model weights | No licence rights at all if your company or employer's global monthly revenue exceeds US$20 million; extends to derivatives and combined works. | 2026-08-11 |
| Mistral Codestral 22B, self-hosted | Model weights, Codestral-22B-v0.1 (exact version only) | The Mistral AI Non-Production License restricts use of the model to testing, research, personal or evaluation purposes in non-production environments, and bars supplying it commercially even free of charge. Mistral claims no ownership of output, but the restriction binds the act of generating, so running it to produce code for ASF work would itself breach the licence. It is written to flow down through derivatives. | 2026-08-14 |
| Moonshot Kimi K3 | Self-hosted model weights | Model-as-a-Service businesses above a revenue threshold need a separate agreement before any commercial use, and large commercial products must display "Kimi K3" in their UI; the internal-use exemption excludes making outputs available to third parties. | 2026-08-11 |
| Qwen2.5-Coder-3B, Qwen2.5-Coder-3B-Instruct, self-hosted | Model weights (Qwen Research License Agreement) | Licensed for non-commercial research or evaluation purposes only; commercial use needs a separate licence from Alibaba Cloud. Using the materials or their outputs to train or improve a model that is then distributed also requires displaying "Built with Qwen" or "Improved using Qwen" in the product documentation. Other Qwen2.5-Coder sizes are Apache-2.0, see above. | 2026-08-14 |

## Not classified {#not-classified}

Not classified means there wasn't enough primary-source evidence to reach a category. It is an evidence gap, not a clearance and not a finding against the tool: treat the output as not cleared until the governing terms are obtained and reviewed.

If a tool, tier, or model is not on this page at all, that is not a finding about it either way. It means nobody has reviewed its terms yet, and there are far more tools out there than we have reviewed. The same goes for versions: a model family may appear here with one licence while another release or size of it carries a different one.

Some rows can't be classified because the answer isn't in the tool's own terms. Clients and runtimes where it depends on the model or provider you connect include Aider, Cline, Continue, Roo Code, OpenHands self-hosted, Goose, bolt.diy, Void, Kilo Code and OpenCode on BYOK, Tabby self-hosted, Ollama, and vLLM: check the terms of whatever you pointed them at. Only Anthropic's model layer has been reviewed for AWS Bedrock, so the other models offered through it, including Amazon's own and third-party ones, each need their own check.

Others have public terms that are simply silent or incomplete on output rights, which is different from having no terms at all.

Every row on this page reads a public document. Enterprise and other negotiated arrangements are not public, so no row covers them: if your organisation signed an agreement, order form, or MSA with the vendor, or accepted terms shown only inside a console when the service was set up, that is what governs your use, and it may say something different from the public tier. Ask whoever holds the agreement rather than relying on a row here.

## Updating this page {#updates}

If a vendor's terms change, a row is wrong, or a tool you use is missing, raise it on [legal-discuss@](/foundation/mailinglists.html#foundation-legal) or open an issue in the [LEGAL JIRA space](https://issues.apache.org/jira/browse/LEGAL), quoting the primary terms document. Rows are only ever updated from primary sources: the terms themselves, not vendor marketing pages or press coverage.
