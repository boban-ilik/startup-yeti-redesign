---
title: "Model Context Protocol for SaaS Founders: Ship It or Not?"
slug: model-context-protocol
category: innovation
meta_description: "What the Model Context Protocol is in 2026, who governs it, what it does to SaaS distribution and pricing, and a rule for whether to ship an MCP server."
primary_keyword: model context protocol
word_count: 1860
---

# Model Context Protocol for SaaS Founders: Ship It or Not?


At Config India, where Figma announced 20 new MCP partners, co-founder Dylan Field told TechCrunch at a media briefing that "MCP is not a perfect protocol" (reported October 20, 2026). That sums up the founder's position. The standard has flaws its biggest adopters admit out loud, and you still have to decide whether your product should speak it. Our answer, argued below: ship a server when your data or write actions are something an assistant cannot get elsewhere, and treat it as a channel you price and secure.

## What the Model Context Protocol is, in plain English

Anthropic [open-sourced MCP on November 25, 2024](https://www.anthropic.com/news/model-context-protocol) as a standard for connecting AI assistants to the systems where data lives. On December 9, 2025 it donated the protocol to the [Agentic AI Foundation (AAIF)](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), a directed fund under the Linux Foundation co-founded by Anthropic, Block and OpenAI. The license is moving from MIT to Apache-2.0, and technical governance seats go to individuals, not companies. So no single vendor owns the spec, though the foundation is backed by the same companies that compete on top of it.

A protocol is a shared set of rules for talking; an API is one company's own menu of requests. Without a shared protocol, every assistant needs its own integration with every product. With MCP, you build one server and any assistant that speaks MCP can use it, which is why the docs compare it to a USB-C port for AI applications. The [architecture overview](https://modelcontextprotocol.io/docs/learn/architecture) defines three roles. The host is the AI application (Claude, ChatGPT, VS Code). The client is the connector inside it. The server is the program your company runs. It offers tools (actions, like "create invoice"), resources (data the assistant can read) and prompts (reusable templates). Messages are JSON-RPC, a plain way to send named requests as JSON, carried over stdio for a local process or Streamable HTTP for a remote server. Protected remote servers use OAuth 2.1, the consent flow that lets a customer grant access without pasting an API key into the assistant.

One date separates current explainers from stale ones. The [2026-07-28 revision](https://modelcontextprotocol.io/specification/2026-07-28/changelog) made MCP stateless: each request stands on its own, the session handshake is gone, and the old HTTP+SSE transport is formally deprecated in favor of Streamable HTTP. An explainer that describes persistent sessions or SSE as the remote transport is describing the old protocol.

## Who already supports MCP (as of October 2026)

The platforms committed in 2025. OpenAI added MCP to its Agents SDK on [March 26, 2025](https://github.com/openai/openai-agents-python/releases?page=12), and its developer docs now expose remote MCP servers to ChatGPT, Codex and the API. Google announced native MCP support in the Gemini API on [May 20, 2025](https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025/) and launched managed remote MCP servers for Google services on December 11, 2025. Microsoft announced first-party support across GitHub, Copilot Studio and Windows 11 at [Build on May 19, 2025](https://blogs.microsoft.com/blog/2025/05/19/microsoft-build-2025-the-age-of-ai-agents-and-building-the-open-agentic-web/).

SaaS vendors with official remote servers include Stripe, Atlassian (beta launch May 1, 2025), Notion, Linear and Figma, and the official MCP Registry opened in preview on September 8, 2025. Scale figures are self-reported: Anthropic and the Linux Foundation each cited more than 10,000 MCP servers in December 2025, and the project's July 2026 release post claimed "close to half-a-billion downloads a month" across its main SDKs.

## What MCP changes for a SaaS product

### Distribution: directories and plugin stores

The likely storefront for an MCP server is an assistant's directory. Anthropic's Connectors Directory [accepts submissions](https://claude.com/docs/connectors/building/submission) from anyone on a paid Claude plan, ranks listings "usage-based, similar to other app stores," and says plainly that its verification "isn't a security audit." OpenAI offers MCP servers as plugins in ChatGPT and Codex. That makes MCP a product-led channel; if you sell sales-led, read our guide to [choosing between product-led and sales-led growth](/startup/plg-saas) first. And the caller on the other end may be one of the [AI employees](/startup/ai-employees) founders are evaluating.

### Commoditization and moat

Maharshi Patel, whose essay argues MCP was always a bad idea (more on that debate below), puts it bluntly: "Most remote-service MCP servers ultimately wrap APIs that already exist." That is his assertion, not a count. [Cloudflare's guidance](https://developers.cloudflare.com/agents/model-context-protocol/) warns against exactly that: do not treat your server "as a wrapper around your full API schema," build fewer tools shaped around user goals. Our piece on [AI wrappers](/startup/ai-wrapper) asks whether that kind of reach is a feature or a business. Our rule for an early-stage SaaS: an MCP server is a channel, not a product. It earns its keep when your data or your write actions are something the agent cannot get anywhere else.

## Pricing: seats, usage, and what to meter

As of October 2026, no vendor in our sources sells MCP access as its own SKU. They package it instead. [Figma's help docs](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) require the remote server and a Full seat to write outside your drafts, a feature that is "free during the beta period and will eventually become a usage-based paid feature." Its FAQ rate-limits calls by plan: 20 per month on Starter, 200 per day for Full or Dev seats on Professional, Education or Organization plans, and up to 600 per day on Enterprise, adding that "Figma may change rate limits at any time." Notion reserves control over which MCP clients members can connect for its Enterprise plan. Linear offers a separate read-only endpoint. Anthropic offers remote connectors only on paid Claude plans.

Decide which plan gets agent access, meter tool calls on top of whatever seat gates entry, separate read from write, and publish your limits. That is a packaging decision, the same trade-off covered in our breakdown of [SaaS pricing models](/marketing/saas-pricing-models). The only new input is that the "user" may be an agent firing requests all night.

## Security you own the moment you ship

The spec says tools "represent arbitrary code execution and must be treated with appropriate caution," and concedes that MCP cannot enforce its security principles at the protocol level. Three failure modes are on the record:

1. **Poisoned tool descriptions.** Invariant Labs [showed on April 1, 2025](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks) that instructions hidden in a tool description, invisible to users but read by the model, can exfiltrate files, and that a server can change a description after approval.
2. **Prompt injection through content the agent reads.** On May 26, 2025 Invariant [demonstrated](https://invariantlabs.ai/blog/mcp-github-vulnerability) that a malicious public GitHub issue could steer an agent using the official GitHub MCP server into leaking private-repo data, which they called an agent-architecture issue rather than a bug in the server code. Microsoft warned in May 2025 that with MCP, prompt injection "could be full remote code execution."
3. **Over-scoped credentials.** The spec's security guidance covers "confused deputy" attacks on servers that proxy third-party APIs. The direction of travel is narrower keys: [Stripe's MCP server](https://docs.stripe.com/mcp) stops accepting full-access secret keys from December 2026.

## Should you ship an MCP server?

Ship now if two things are true: your product holds data or performs actions a customer would want an assistant to use on their behalf, and you can scope, meter and log that access with someone who owns the three risks above. Wait if your server would only mirror a public API with no context the agent cannot already reach, or if nobody can own the security review.

The minimum version is five steps, each one a sentence to your engineer:

1. Build three to five tools shaped around customer goals ("find overdue invoices"), not a copy of your API.
2. Host it as a remote server over Streamable HTTP with OAuth, so no customer pastes an API key into an assistant.
3. Give every tool a title and a readOnlyHint or destructiveHint annotation, publish a privacy policy, and set up a reviewer test account, all of which Anthropic's directory requires.
4. Gate it by plan, split read from write, and publish rate limits.
5. Publish to the official MCP Registry, which requires proving you own your namespace, then submit to Anthropic's directory.

## The October 2026 argument: is MCP still a good idea?

Three episodes in five weeks turned plumbing into a public fight. On September 14, 2026, Maharshi Patel's essay [Why MCP Was Always a Bad Idea](https://maharship.com/blog/why-mcp-was-always-a-bad-idea/) argued that an agent with terminal access can simply call APIs directly. The strongest rebuttal in the [Hacker News discussion](https://news.ycombinator.com/item?id=49779329), from Simon Willison, listed what that route lacks: control over which services the agent can reach, keys kept out of the agent's hands, a UI for connecting services, and audit logs.

On September 29, Earendil, maker of the Pi coding agent, [shipped MCP support](https://earendil.com/posts/you-said-no-mcp/) after advertising that Pi would not, writing that "the MCP of today is not the MCP of yesteryear."

Then Figma. Its remote server admits only allowlisted clients, which a Figma staff member described on [its forum](https://forum.figma.com/report-a-problem-6/figma-s-approach-breaks-the-core-promise-of-mcp-52507) as "intentionally gated to supported clients while we're in beta." [WorkOS](https://workos.com/blog/figma-mcp-403-forbidden-client-name) summed up the objection: "A server that admits clients by name is trusting a label anyone can type." In the [same TechCrunch report](https://techcrunch.com/2026/10/20/figma-co-founder-dylan-field-thinks-mcp-is-not-a-perfect-protocol/), Field said MCP "is advantaged more to frontier labs," and TechCrunch reported his reason for not opening fully: the more data Figma exposes, the higher the chance of abuse.

One headline from the same week does not belong in this debate. The [October 19 breach of OpenCode's console](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/) exposed stored API keys, and TechCrunch's report does not mention MCP.

Our read: the fight was never about JSON. It is about who holds the context and who holds the keys. Ship a server and you take a position in it, whether you mean to or not.

## Frequently asked questions

### How is MCP different from an API?

An API is one product's own set of requests, written for developers who build a separate integration for each app. MCP is a shared protocol every supporting assistant already speaks: the assistant discovers your tools at runtime, and the customer signs in through OAuth instead of handing over an API key. It does not replace your API; it replaces building one integration per assistant.

### What is MCP vs RAG?

RAG (retrieval-augmented generation) pulls documents from an index and feeds them to the model before it answers. It is read-only. MCP is a live connection that can read current data and take actions. Databricks describes the two as complementary. A support agent might use RAG to read your help center and MCP to issue the refund.

### Is MCP the same as HTTP?

No. HTTP is one of two standard ways to carry MCP messages; the protocol itself is the JSON-RPC layer on top, and the spec calls it transport-agnostic. Remote servers use Streamable HTTP, local ones stdio. Microsoft's shorthand, "essentially JSON-RPC over HTTP," fits the remote case only.

### Is the Model Context Protocol still relevant?

As of October 2026, yes, with criticism attached. The July 28, 2026 revision was the largest since launch, according to the project, and OpenAI, Google, Microsoft, Stripe and Figma all support MCP. In the same weeks, an essay called it obsolete, Pi dropped its no-MCP stance, and Figma's co-founder called it imperfect. Relevant and contested are not opposites.
