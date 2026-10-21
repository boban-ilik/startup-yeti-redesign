---
title: "What Is a Forward Deployed Engineer? A Founder's Guide"
slug: forward-deployed-engineer
category: Team Management
meta_description: "What a forward deployed engineer does, what FDEs cost as of October 2026, and how founders choose between hiring an FDE, a solutions engineer or a partner."
primary_keyword: forward deployed engineer
word_count: 2161
---

# What Is a Forward Deployed Engineer? A Founder's Guide

Candidates put "FDE" on their profiles, investors ask whether you have forward deployed engineers, and as of October 2026 the top organic Google result for the term in the US is a Reddit thread titled "Forward Deployed Engineer roles seem like a scam?" If you run a 10 to 50 person AI or SaaS startup, the role is real and the economics can work, but the title covers three different jobs, and only one of them deserves a scarce early headcount. This guide is for the founder doing the hiring: what the job is, what it costs, when it pays back, and what to do instead.

## What a forward deployed engineer actually does

A forward deployed engineer (FDE) is a software engineer who works inside a customer's environment, writing production code against that customer's data, systems and tools until your product does a real job there. Palantir, which created the role, draws the line this way: a regular developer's focus is "one capability, many customers," while a forward deployed engineer's is "one customer, many capabilities."

At Palantir in the early 2010s these engineers were called "Deltas" and sat in business development. According to [The Pragmatic Engineer's history of the role](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers), Palantir employed more FDEs than conventional software engineers until about 2016. An FDE is also not a consultant: consultants deliver one-off recommendations, while an FDE stays with the customer long term and feeds what they build back into the core product.

At OpenAI, an engagement opens with a two-day onsite visit. In scoping, the FDE maps the customer's processes and prototypes with synthetic data. In validation, both sides agree success criteria and the FDE builds evals (automated tests of whether the AI output is good enough) before delivery starts. Colin Jarvis, OpenAI's head of forward deployed engineering, explained the order: "often what the customer describes in scoping doesn't match the data/system reality on the ground." Delivery means working onsite a few days a week, building and demoing.

OpenAI's FDE posting, published September 11, 2026, measures success by "production adoption, measurable workflow impact, and eval-driven feedback that changes product and model roadmaps." Demos and billed hours are not on that list.

## Why AI startups are hiring FDEs now

OpenAI's own FDE chief says the model is not the hard part. At HumanX Amsterdam on September 23, 2026, Jarvis estimated that about 80% of enterprise AI struggles are deployment problems (rollout, governance, trust) and about 20% are model gaps, as [reported by The Next Web](https://thenextweb.com/news/openai-colin-jarvis-enterprise-ai-deployment-fde-humanx). a16z put the buyer's side more bluntly: "Enterprises buying AI are like your grandma getting an iPhone."

Agent products feel this most, because an agent does nothing useful until it is connected to the customer's systems, permissions and approval steps. That is the flip side of the pitch for [buying AI employees](/startup/ai-employees): the product can be ready long before the customer's environment is.

AWS has committed [$1 billion to a forward deployed engineering organization](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers) that "will embed thousands of experts with customers," with engagements built around business results rather than billable hours. On July 2, 2026, Microsoft launched [Microsoft Frontier Company](https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/), a $2.5 billion business with 6,000 industry and engineering experts embedded at customers.

Hiring followed. Bloomberry's analysis of 1,000 FDE postings found them up 1,165% from January to October 2025 versus the same period of 2024. On October 20, 2026, OpenAI's job board listed 27 open roles with "Forward Deployed" in the title out of 806, and Anthropic's listed seven out of 670.

## What an FDE costs as of October 2026

| Source | Role and location | Range or median | Date |
|---|---|---|---|
| [OpenAI](https://jobs.ashbyhq.com/openai/967f94aa-1706-4dba-ac89-bfbc2c38b688) | Forward Deployed Engineer (individual contributor), SF, NYC, Seattle | $185,000 to $300,000 plus equity | Posted Aug. to Sept. 2026 |
| OpenAI | Manager, Forward Deployed Engineering, NYC | $302,000 to $385,000 plus equity | Posted Sept. 23, 2026 |
| [Anthropic](https://job-boards.greenhouse.io/anthropic/jobs/5449229008) | Staff Forward Deployed Engineer, NYC, SF, Seattle | $280,000 to $320,000 annual salary | Posted Oct. 14, 2026 |
| Palantir | Forward Deployed Software Engineer, US Government, Honolulu (Top Secret clearance) | $125,000 to $200,000 | Undated, seen Oct. 2026 |
| [Levels.fyi](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer) | US, self-reported total compensation, sample size not shown | Median $220,000 (25th percentile $172,000, 75th $300,000, 90th $362,000) | Oct. 20, 2026 |
| Bloomberry | 1,000 FDE postings, those disclosing a range, geography not stated | Median posted salary $173,816 | 2025 sample |

Three limits apply. Posted ranges are not realized pay, and none of the postings puts a number on equity: OpenAI lists it separately, and Palantir's range excludes sign-on bonus, benefits and long-term incentives. Anthropic's posting does not say whether its range is base salary or on-target earnings. And the Palantir row is a clearance-gated government role, not a commercial benchmark.

Travel adds real cost. OpenAI's posting says up to 50%, Anthropic's says 25%, and 68% of the postings in Bloomberry's sample require it. A growing team also needs a manager, and OpenAI's manager row shows that layer's price at a top lab. Fully loaded cost is your own math: salary, equity, benefits, travel, and the senior time spent managing the first hire.

## The economics: margin for moat or consulting in disguise?

The case for comes from [a16z's margin-for-moat essay](https://a16z.com/services-led-growth/) by Joe Schmidt (June 2025): AI startups selling complex enterprise workflows should accept lower gross margins early to become the customer's system of work, because "it's shortsighted to be optimizing for 80% gross margin." His precedents are ServiceNow, whose gross margin was 63.2% at IPO, and Workday at 54.1%, against 79% and 75% in 2024. TSIA, a services industry association, suggests treating FDE spend as customer acquisition cost rather than cost of goods sold, with a visible customer win within 30 to 60 days. PostHog notes the strategy "has huge initial costs," which AI companies absorb because contracts run "six to eight figures."

Heavy deployment spend is not new to software. Startup Yeti's [breakdown of Salesforce implementation costs](/startup/salesforce-cost) puts Salesforce implementation at 50 to 150 percent of the first-year subscription.

OpenAI's own rule supplies the discipline. "From OpenAI's side, we should always be temporary," Jarvis said in September 2026. With tools like Codex, he said, custom work fell from about 90% to about 50% of each project; FDEs have no financial incentive tied to usage and are measured on whether projects reach production and move a real metric.

The critics have evidence too, much of it from the role's supporters. a16z's [history of the job title](https://a16z.com/forward-deployed-job-titles/) says that in 2011 Palantir retitled its solutions and integration engineers as forward deployed engineers. [Bloomberry's analysis](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/) found the title covering three jobs: about 60% builders who code 70 to 90% of the time, 30% "Sales Engineer+" roles that code 30 to 40% of the time, and 10% internal tools builders. Lindy's 2025 job ad asked its FDEs to serve as customers' "technical consultant," and PostHog notes that some FDE roles look like consulting or sales engineering.

Founders can use one test, offered as editorial judgment: FDE work is consulting in disguise when the custom share of each deployment does not fall from one customer to the next, and nothing the FDE builds ships to a second customer.

Suppose, hypothetically, a 30-person startup's first FDE spends a deployment writing custom connectors. If they ship as product features before customer two, the spend behaves like acquisition cost. If customer two needs new connectors from scratch, it is cost of goods sold, whatever the spreadsheet calls it.

## When an FDE is worth it, and when it is not

The conditions below are editorial rules drawn from the evidence above. Hire an FDE when:

- Contract size can carry a senior engineer for months.
- You sell one repeatable workflow to a narrow customer profile. Narrow is what lets deployment two reuse deployment one, and a16z recommends it.
- Your product only works once it is wired into customer systems and data. That is the deployment problem behind Jarvis's 80% estimate.
- You want the deployment learning in-house before any partner gets it.

Skip it when the product is self-serve or contract values are low; when what you lack is demos, technical answers and pilots (that is a solutions engineer); or when nobody senior has time to manage the first FDE and turn field findings into roadmap decisions.

## FDE vs solutions engineer vs implementation partner

| Route | What they do | Choose it when | Main risk |
|---|---|---|---|
| Hire an FDE | Writes production code on customer infrastructure; turns what works into product | Large contracts, a narrow repeatable workflow, a product that only works once integrated | Custom work never becomes product, so services margins become permanent |
| Hire a solutions engineer | Pre-sales demos and proofs of concept; at OpenAI, the comparable Solutions Architect works on offline or anonymized data and rarely codes on customer infrastructure | Deals stall on technical questions and pilots, not on deployment | Pilots win the deal but never reach production |
| Use an implementation partner | Runs deployments for you from a documented method | You already have a playbook, APIs and documentation a third party can follow | Partners, not your team, learn your customers' problems |

For what an FDE costs, see the pay table above. The routes are not exclusive. a16z recommends doing services yourself first, then building the tooling and documentation so ecosystem partners can take over delivery. Microsoft's Frontier Company works with Accenture, Capgemini, EY, KPMG and PwC, and Anthropic's Staff FDE posting includes leading "engagements delivered with partners." The practical hybrid is a first FDE who writes the playbook a partner runs later.

## How to hire your first FDE

Start from the postings. OpenAI wants 5+ years of engineering or technical deployment experience, including customer-facing work. Anthropic wants "deep experience building and operating production systems, hands-on time with agents," and encourages former technical founders to apply. Palantir says FDE responsibilities "look similar to those of a startup CTO." PostHog adds customer empathy, executive communication and product sense.

That describes a senior, founder-like hire more than an engineering seat, so the judgment in [what to look for when hiring your #2](/team-management/what-to-look-for-when-hiring-your-2) matters more than a standard coding loop. Run it through your usual [startup hiring process](/startup/hiring-for-startups), with the founder or most senior engineer owning the final call. Expect competition from both ends: OpenAI and Anthropic are hiring, and 58% of the 2025 postings Bloomberry analyzed came from companies with 11 to 200 employees, so [attracting top talent](/startup/how-can-your-company-attract-top-talents) on more than cash becomes part of the job.

On placement, Bloomberry found 45% of postings on a dedicated FDE team, 38% in engineering and 14% in go-to-market or sales, and a16z recommends aligning FDE work with account executives. An editorial rule for a first hire: report into product or engineering and share a goal with sales. That keeps field findings reaching the roadmap instead of sliding into deal support.

Four interview signals worth testing, offered as editorial suggestions:

1. **Scoping a messy real workflow.** Watch what they ask before proposing a build.
2. **A deployment that failed.** Ask what they changed afterward.
3. **A time they refused custom work.** Ask what they offered instead.
4. **Writing the eval before the feature.** OpenAI puts validation before delivery for a reason.

## FAQ

### What is a forward deployed engineer?

A software engineer who works inside a customer's environment to get a product into production, then feeds the lessons back into the core product. The role started at Palantir in the early 2010s.

### How much do forward deployed engineers get paid?

As of October 2026, OpenAI posts $185,000 to $300,000 plus equity for its Forward Deployed Engineer roles in US cities, and Anthropic posts an annual salary of $280,000 to $320,000 for a Staff-level role. Levels.fyi shows a self-reported US median of $220,000 in total compensation. The employer figures are posting ranges, not realized pay.

### Is forward deployed engineer a good job?

It suits engineers who enjoy customer work, ambiguity and travel (25% in Anthropic's posting, up to 50% in OpenAI's). The title covers several different jobs, so check how much of a given role is actually coding.

### Is a forward deployed engineer a high paying job?

At OpenAI and Anthropic, yes: posted ranges top out at $300,000 and $320,000 (Staff) respectively. Elsewhere it varies: Bloomberry's 2025 median posted salary was $173,816, and Palantir's government posting in Honolulu tops out at $200,000.

### What is the difference between a forward deployed engineer and a solutions engineer?

Titles vary by company, but a solutions engineer mostly works before the sale on demos, technical questions and proofs of concept. A forward deployed engineer works after it, writing production code on the customer's infrastructure. If your deals stall before signature, hire the solutions engineer; if they stall after it, hire the FDE.
