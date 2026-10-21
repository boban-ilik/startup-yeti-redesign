---
title: "Agentic AI Examples: 11 Real Deployments Founders Can Copy"
slug: agentic-ai-examples
category: Innovation
meta_description: "Eleven real agentic AI examples from Klarna, Fin, Shopify, GitHub, Ramp and more, with dated sources, how each agent works and where founders should start."
primary_keyword: agentic ai examples
word_count: 2176
---

# Agentic AI Examples: 11 Real Deployments Founders Can Copy

So many vendor pitches now say "agentic" that the word is close to useless when you are deciding whether to build or buy one. This list uses one filter: a deployment counts only if the company has named it, dated it and described in public what it does. Eleven passed, grouped by job. Each entry covers what the agent does, why it counts as agentic, the published result if one exists (labeled when the vendor reported it) and what a startup can copy. The companies double as a working list of agentic AI companies. For the wider picture, see our guide to [how AI is changing startups](/innovation/ai-for-startups).

## What makes AI "agentic" (and how it differs from an AI agent)

A system is agentic when it plans its own steps toward a goal, uses tools to read from and write to other systems, carries out several actions in a row, and works under limited supervision that someone defined in advance. Google Cloud puts it this way: agentic AI "can set goals, plan, and execute tasks with minimal human intervention."

Anthropic draws the most useful line for builders. [Its December 2024 guide to building agents](https://www.anthropic.com/research/building-effective-agents) separates workflows, where a model and tools follow "predefined code paths," from agents, where the model directs its own process and tool use. A plain chatbot sits below both; IBM defines nonagentic chatbots as ones without tools, memory or reasoning. If you are trying to tell a real agent from a thin layer over someone else's model, our piece on [whether AI wrappers are a real business](/startup/ai-wrapper) covers that question.

**AI agents vs agentic AI.** Vendors use the terms loosely. The cleanest split treats an AI agent as one unit doing one task and agentic AI as the coordinated system. Google Cloud calls agents "the building blocks of agentic AI." A 2025 academic taxonomy by Sapkota and colleagues describes agentic AI as marked by multi-agent collaboration, dynamic task decomposition and persistent memory. Since both labels land on the same products, judge by behavior: does it plan, act in your systems and stop where you tell it to?

## Customer support agents

Support takes four of the eleven slots. Tickets have a clear finish line and usually a written policy, which is what an agent needs. Our overview of [trends shaping customer service](/innovation/future-of-customer-service) covers the broader backdrop.

### Klarna's AI assistant

Klarna's OpenAI-based assistant took on refunds, returns, payment issues, cancellations and disputes, so it acted on accounts rather than just explaining policy. In [its February 27, 2024 announcement](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/), Klarna said the assistant had 2.3 million conversations in its first month, two-thirds of its service chats, in 23 markets. By Klarna's count, resolution time fell from 11 minutes to under 2, repeat inquiries dropped 25%, and the assistant did the equivalent work of 700 full-time agents. Customers could still choose a live agent.

In May 2025, Klarna's CEO told Bloomberg that AI customer service had produced "lower quality" output and that Klarna was hiring humans again so customers could always reach a person. An agent can absorb volume while quality slips, so the [math of AI as headcount](/startup/ai-employees) needs a quality measure beside the cost one.

### Fin (formerly Intercom)

Fin is a support agent you configure rather than build. Teams add Procedures and integrations that let it "read and write to your systems," and it uses memory and reasoning to pick the next step across chat, email, voice and Slack. Fin says its customers average a 76% resolution rate, with no stated period. The pricing is the part to study. As of October 2026, [Fin charges $0.99 per outcome](https://www.intercom.com/pricing), counted when a customer confirms resolution or Fin completes a Procedure, handoffs included. On June 15, 2026, [Salesforce agreed to acquire Fin](https://www.salesforce.com/news/press-releases/2026/06/15/salesforce-signs-definitive-agreement-to-acquire-fin/) for about $3.6 billion. Whatever you buy, get the vendor's outcome definition in writing, because it decides what you pay for.

### Decagon

Decagon's mechanism is a plain-language rulebook. Its Agent Operating Procedures let a team "define agent workflows in natural language," then test and observe the agent as it changes. The procedure sets the goal and guardrails; the agent works each conversation inside them. On January 27, 2026, [Decagon announced a $250 million Series D](https://decagon.ai/blog/series-d-announcement) at a $4.5 billion valuation, naming customers such as Avis Budget Group, Block, Deutsche Telekom and Chime. Its home page shows "70% chat and voice resolution" beside a quote from Chime's chief operating officer, a figure Decagon shows without a method. Write your support playbook as if an agent will read it; that habit costs nothing.

### Salesforce Agentforce

Salesforce unveiled Agentforce on September 12, 2024. Its Atlas Reasoning Engine retrieves data and "builds a plan for execution," and the agent can hand off to a human with a summary. Pricing started at $2 per conversation; in May 2025 Salesforce added Flex Credits at $0.10 per action. The telling number comes from Salesforce's own help site. As of June 25, 2026, [Salesforce says Agentforce has handled 4.3 million inquiries on help.salesforce.com](https://www.salesforce.com/news/stories/agentforce-help-agent-announcement/) and resolved 70% of them. That is one vendor-run site, and our research found no independent check. A Help Agent with pay-per-resolution pricing was slated for July 2026. Before you trust any vendor's headline rate, ask what it covers.

## Commerce agents

### Shopify Sidekick

Sidekick lives inside the Shopify admin. In its [Winter '26 Edition](https://www.shopify.com/editions/winter2026), Shopify said Sidekick can "plan, write to-do lists, and take on multiple actions." It can build a Shopify Flow automation from a plain description, install apps, adjust a theme, and check Shopify Balance and make transfers with the merchant's approval. The Editions page publishes no result metric for Sidekick. The approval step is the pattern to copy: the agent can move money, but only after a person says yes.

### Stripe's Agentic Commerce Protocol

On September 29, 2025, [Stripe announced it powers Instant Checkout in ChatGPT](https://stripe.com/newsroom/news/stripe-openai-instant-checkout) and released the Agentic Commerce Protocol, an open standard codeveloped with OpenAI. At launch, US ChatGPT users could buy from US Etsy sellers in the chat, with Shopify merchants "coming soon." ChatGPT acts as the buyer's agent. The safeguard is a Shared Payment Token scoped to one merchant and one cart total, so the agent never sees card details. The merchant still accepts or declines the order and handles fulfillment and returns. We found no published result for the protocol and could not confirm its reach as of October 2026. If your agent will spend money, scope its permission to one transaction.

## Coding agents

### GitHub Copilot coding agent

GitHub made its Copilot coding agent [generally available on September 25, 2025](https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/) for paid Copilot subscribers. You assign it an issue; it opens a draft pull request, works in its own GitHub Actions environment, then requests your review, and you steer it through comments. Business and Enterprise admins must switch it on first. The changelog gives no outcome metric. The boundary makes it a clean example: the agent works alone, but a person reviews its draft. For price context, Cognition's cloud coding agent Devin listed Pro at $20 a month and Max at $200 as of October 20, 2026. Start your own agents on work that already ends in review.

## Finance and legal operations

### Ramp agents

On July 9, 2025, [Ramp announced its first agents](https://ramp.com/blog/ramp-agents-announcement), built for controllers. Give the agent your expense policy as a PDF and it approves low-risk expenses, flags outliers, answers employee questions over SMS, and suggests policy changes. Every action carries a traceable rationale, and autonomy is adjustable. Ramp's own early figures: 15 times more out-of-policy spend caught than non-AI alternatives, 99% accuracy, and only 10 to 15% of expenses escalated to a human. The announcement gives no method behind them. At launch the agents went to Ramp Plus customers. A written policy plus a logged reason for every decision makes a strong first agent job.

### Harvey

Harvey calls itself legal infrastructure for law firms and in-house teams. On March 25, 2026, [Harvey announced $200 million in funding](https://www.harvey.ai/blog/harvey-raises-at-dollar11-billion-valuation-to-scale-agents-across-law-firms-and-enterprises) at an $11 billion valuation. It said more than 25,000 custom agents run on its platform across M&A, due diligence, contract drafting and document review, and that customers are deploying long-horizon agents for multi-step work like fund formation. Its site describes tasks "automatically routed to the right agent," with lawyers and agents working from the same context. These are Harvey's own figures, and the announcement gives no accuracy or time-saved metric. In high-stakes work, keep the expert and the agent on the same file.

## General-purpose agents

The broadest agents come from the model labs, and they publish the least about results. OpenAI launched [ChatGPT agent](https://techcrunch.com/2025/07/17/openai-launches-a-general-purpose-agent-in-chatgpt/) on July 17, 2025, an agent mode that clicks through websites, runs a terminal and works through connectors such as Gmail, and on September 29, 2026 it announced always-on agents called Dots. Google introduced [Gemini Spark](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) on May 19, 2026, a 24/7 cloud agent that connects to Gmail, Docs and partner apps through [MCP](/innovation/model-context-protocol) and, Google says, asks first before high-stakes actions like spending money or sending email. None of these announcements included a result metric, and we could not confirm current availability or pricing. At launch, TechCrunch wrote that early agents like these "have proven to struggle with complex tasks." Keep general agents on bounded errands, and list your high-stakes actions before you connect one to anything; that list is your approval policy.

## A founder's checklist: where agents pay off first, where they fail

- **Start with a workflow, not an agent.** Anthropic recommends "the simplest solution possible" and says agents suit open-ended problems where the number of steps is hard to predict. If your steps are fixed, ordinary [automation tools for startup teams](/startup/automation-tools) may be all you need.
- **Pick a job with a rulebook and a finish line.** Ramp starts from a PDF policy, Decagon and Fin from written procedures. Every example above with a published result works on a job where "done" is easy to define.
- **Write the approval threshold before launch.** Sidekick moves money only with approval, Spark asks before spending, and GitHub's agent ends in a draft.
- **Keep a human exit.** [Klarna's CEO said in May 2025](https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396) that the AI push had lowered quality, and Klarna began hiring humans again. Salesforce says its Help Agent's per-resolution pricing charges nothing when a customer asks for a human.
- **Read the pricing unit.** Fin bills per outcome; Salesforce has priced Agentforce per conversation and per action, and announced per-resolution pricing for July 2026; Sierra says it bills on outcomes and usually not for escalations. Outcome pricing ties cost to results, but the vendor defines a result.
- **Set stopping conditions.** Anthropic suggests limits such as a maximum number of iterations, and IBM advises against letting agents run for overly long periods.
- **Discount the hype.** In June 2025, Gartner forecast that more than 40% of agentic AI projects will be canceled by 2027 over rising costs, unclear value or poor risk controls, and said only about 130 of thousands of agentic AI vendors are genuine, [as Computerworld reported](https://www.computerworld.com/article/4016206/nearly-half-of-agentic-ai-projects-will-be-killed-by-27-due-to-hype-costs-and-risks.html). Treat every vendor number above as a hypothesis to test on your own data.

Before you talk to a vendor, write three lines: the job to automate, the actions the agent would take in your systems, and the point where a human must approve. If you cannot fill in the third line, you are not ready for an agent.

## Agentic AI FAQ

### Is ChatGPT agentic?

Not by default; standard ChatGPT answers questions. It gained an agent mode for Pro, Plus and Team subscribers in July 2025 that can click through websites, use a terminal and work through connectors. On September 29, 2026, [OpenAI announced always-on agents called Dots](https://www.1news.co.nz/2026/09/30/openai-unveils-always-on-ai-agent-after-model-shelved-over-safety-risk/). We could not confirm current availability or price for either as of October 2026.

### What is the most popular agentic AI?

We found no reliable, vendor-neutral ranking of agent products. The closest proxy is chatbot use. In a [Pew Research Center survey](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/) of 5,119 US adults in February 2026, 44% said they ever use ChatGPT. That measures chatbot use, not agent use, so treat any "most popular agent" claim with suspicion.

### What are the 5 types of agent in AI?

The usual list comes from Russell and Norvig's [chapter on intelligent agents](http://aima.cs.berkeley.edu/4th-ed/pdfs/newchap02.pdf): simple reflex, model-based reflex, goal-based and utility-based agents, plus learning agents, which can be built from any of the four. The taxonomy predates today's LLM agents, so it describes how an agent decides, not which product to buy.

### Is Siri an example of agentic AI?

Partly. On September 14, 2026, [Apple released Siri AI in beta](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/) in English, with personal context, onscreen awareness and more in-app actions. It can add a team's home games from a website to your calendar or text a friend in WhatsApp, and Apple says Outlook and Tripsy actions are coming soon. That is tool use, but the announcement does not describe Siri planning multi-step work toward a goal, so it sits between assistant and agent.
