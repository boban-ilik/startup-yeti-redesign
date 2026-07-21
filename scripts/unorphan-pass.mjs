#!/usr/bin/env node
// unorphan-pass.mjs — give incoming internal links to orphaned legacy posts
// flagged "Crawled - currently not indexed" in GSC (0 incoming links before this).
// Same proven method as cluster-backlinks.mjs: match a distinctive fragment,
// scan to that sentence's end punctuation, insert after. Never guess.
// Run with --dry to verify fragments without writing.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";

const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(
  readFileSync(homedir() + "/.startupyeti-publish.env", "utf8")
    .split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");

async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}

const A = (href, txt) => `<a href="${href}">${txt}</a>`;

// donor slug -> insertions (each targets one orphaned post)
const plan = {
  "pre-seed-valuation-a-startups-guide": [
    { n: 1, target: "/business/mastering-the-pitch-deck", frag: "key in attracting potential investors and securing early-stage funding",
      insert: ` Once you have their attention, ${A("/business/mastering-the-pitch-deck", "mastering the pitch deck")} is what turns a first meeting into a term sheet.` },
  ],
  "best-payroll-software-for-startups": [
    { n: 2, target: "/startup/startup-accounting", frag: "require an accounting degree to navigate",
      insert: ` Payroll is only one piece of the picture; your broader ${A("/startup/startup-accounting", "startup accounting setup")} decides how cleanly those numbers land in the books.` },
  ],
  "startup-financing": [
    { n: 3, target: "/startup/how-can-startups-maintain-their-financial-health", frag: "how many months you can keep operating before the bank balance hits zero",
      insert: ` Runway is the headline number, but ${A("/startup/how-can-startups-maintain-their-financial-health", "maintaining startup financial health")} takes a wider set of habits than any single metric.` },
  ],
  "positioning-statement": [
    { n: 4, target: "/marketing/brand-recognition", frag: "a brand that says something different on every channel",
      insert: ` Consistency is what compounds into ${A("/marketing/brand-recognition", "brand recognition")} over time.` },
  ],
  "win-loss-analysis": [
    { n: 5, target: "/business/hyper-personalized-surveys", frag: "fifteen minutes of truth in exchange for weeks of pipeline you already spent",
      insert: ` When you need signal from more buyers than interviews can reach, ${A("/business/hyper-personalized-surveys", "hyper-personalized surveys")} scale the same questions.` },
  ],
  "competitive-positioning": [
    { n: 6, target: "/business/building-a-brand-that-puts-customers-first", frag: "they default to the safest choice, which is usually the incumbent or nothing",
      insert: ` The durable fix is building a brand that ${A("/business/building-a-brand-that-puts-customers-first", "puts customers first")}, so the difference is felt rather than claimed.` },
  ],
  "essential-tools-for-startup-success": [
    { n: 7, target: "/innovation/ai-for-startups", frag: "need the appropriate tools to handle difficulties and propel success",
      insert: ` Increasingly that toolkit includes ${A("/innovation/ai-for-startups", "AI for startups")}, which now touches research, support, and everyday operations.` },
    { n: 8, target: "/business/cybersecurity-in-the-modern-business-landscape", frag: "strategically situates them for long-term growth",
      insert: ` One category founders defer too long is ${A("/business/cybersecurity-in-the-modern-business-landscape", "cybersecurity for a growing business")}, which gets harder to retrofit as the stack expands.` },
  ],
  "hiring-for-startups": [
    { n: 9, target: "/startup/consulting-for-startups", frag: "the resources available for each role",
      insert: ` When a role does not justify a full-time hire yet, ${A("/startup/consulting-for-startups", "consulting support for startups")} can bridge the gap.` },
    { n: 10, target: "/team-management/what-to-look-for-when-hiring-your-2", frag: "attract the right candidates and ensure a smoother hiring process",
      insert: ` The stakes are highest at the start, which is why ${A("/team-management/what-to-look-for-when-hiring-your-2", "choosing your second hire")} deserves its own checklist.` },
  ],
  "social-media-expert": [
    { n: 11, target: "/marketing/social-media-metrics", frag: "can help your posts make use of this engagement",
      insert: ` Tracking the right ${A("/marketing/social-media-metrics", "social media metrics")} tells you which of those moments actually worked.` },
  ],
  "saas-marketing-strategies": [
    { n: 12, target: "/marketing/video-shorts", frag: "won on a single channel taken seriously",
      insert: ` For many early teams that first channel is ${A("/marketing/video-shorts", "short-form video")}, which compounds faster than long-form content.` },
  ],
  "the-role-of-crm-in-startup-operations": [
    { n: 13, target: "/business/outsourcing", frag: "streamlined sales processes, and optimized resource utilization",
      insert: ` For functions that sit outside the core team, ${A("/business/outsourcing", "outsourcing key business functions")} is often the cheaper path to the same result.` },
  ],
  "ecommerce-sales-strategies": [
    { n: 14, target: "/business/ecommerce-strategies", frag: "understand consumer behavior and adjust their sales strategies to reflect it",
      insert: ` That behavior also shapes the broader ${A("/business/ecommerce-strategies", "ecommerce strategies")} you build around the store.` },
  ],
};

// resolve slugs -> ids
const all = await api(`/posts?per_page=100&_fields=id,slug`, { headers: { Authorization: auth } });
const idOf = Object.fromEntries(all.map((p) => [p.slug, p.id]));

let applied = 0, skipped = 0;
for (const [slug, inserts] of Object.entries(plan)) {
  const id = idOf[slug];
  if (!id) { console.log(`✗ donor not found: ${slug}`); skipped += inserts.length; continue; }
  const post = await api(`/posts/${id}?context=edit&_fields=id,slug,content`, { headers: { Authorization: auth } });
  let raw = post.content.raw ?? post.content.rendered;
  const before = raw;
  for (const ins of inserts) {
    const count = raw.split(ins.frag).length - 1;
    if (count === 0) { console.log(`  ✗ #${ins.n} SKIP (${slug}): fragment not found`); skipped++; continue; }
    if (count > 1) console.log(`  ⚠ #${ins.n} (${slug}): fragment appears ${count}×, using first`);
    if (raw.includes(ins.target + '"')) { console.log(`  ⚠ #${ins.n} (${slug}): already links to ${ins.target}, skipping`); skipped++; continue; }
    const from = raw.indexOf(ins.frag) + ins.frag.length;
    const m = raw.slice(from).match(/[.!?]/);
    if (!m) { console.log(`  ✗ #${ins.n} SKIP (${slug}): no sentence end`); skipped++; continue; }
    const pos = from + m.index + 1;
    raw = raw.slice(0, pos) + ins.insert + raw.slice(pos);
    console.log(`  ✓ #${ins.n} ${slug} → ${ins.target}`);
    applied++;
  }
  if (raw !== before && !DRY) {
    await api(`/posts/${id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
    console.log(`  → ${slug} updated\n`);
  } else {
    console.log(`  → ${slug} ${DRY ? "(dry run, not written)" : "unchanged"}\n`);
  }
}
console.log(`${DRY ? "DRY RUN" : "Done"}: ${applied} insertable, ${skipped} skipped.`);
