#!/usr/bin/env node
// link-orphans-nov13.mjs — incoming internal links for six orphaned / single-link pages found by the
// 2026-11-13 orphan check. Each host paragraph gets one sentence appended before its </p>. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = (href, txt) => `<a href="${href}">${txt}</a>`;
const PAY = "/startup/best-payroll-software-for-startups", PLAN = "/marketing/saas-marketing-plan", CP = "/marketing/competitive-positioning",
  REM = "/remote-work/best-places-to-work-remotely-near-you", HC = "/startup/hottest-healthcare-startups", CF = "/startup/crowdfunding-for-startups";
// [host slug, unique fragment inside the host paragraph, target, sentence appended at the end of that paragraph]
const plan = [
  ["rippling-pricing", "ADP RUN and TriNet are left out", PAY, ` For a broader comparison by team size, see our guide to the ${L(PAY, "best payroll software for startups")}.`],
  ["startup-accounting", "withhold and pay payroll taxes", PAY, ` Payroll software handles the withholding and filings for you; our comparison of the ${L(PAY, "best payroll software for startups")} covers the options for teams under 50.`],
  ["saas-marketing-strategies", "growth stories almost always won on a single channel", PLAN, ` Once you've picked that channel, our ${L(PLAN, "SaaS marketing plan")} turns it into a quarter of work a one-person team can actually run.`],
  ["saas-content-marketing-strategy", "is the plan for which content assets your company builds", PLAN, ` It sits inside your wider ${L(PLAN, "SaaS marketing plan")}, which decides how much of a lean team's time content gets in the first place.`],
  ["positioning-statement", "why a customer should pick it over the alternative", CP, ` Choosing which alternative to position against is its own exercise, covered in our guide to ${L(CP, "competitive positioning")}.`],
  ["b2b-thought-leadership", "worn in public", CP, ` If you haven't settled the alternative you're against yet, start with ${L(CP, "competitive positioning")}.`],
  ["tips-for-remote-work", "find a coworking space for one or two days per week", REM, ` If you're weighing where to work beyond home, see our guide to the ${L(REM, "best places to work remotely")}.`],
  ["office-models", "remote work portends different things to different people", REM, ` For the practical side, our guide to the ${L(REM, "best places to work remotely")} compares the options outside the home office.`],
  ["the-rise-of-health-tech", "Healthcare technology is rapidly transforming medicine", HC, ` For where startups are building in this space, see our look at the ${L(HC, "hottest healthcare startups")}.`],
  ["biotech-startups", "Biotech startups are revolutionizing healthcare", HC, ` For the other startup sectors reshaping care, see our look at the ${L(HC, "hottest healthcare startups")}.`],
  ["the-path-to-seed-funding", "which offers upfront capital in return for recurring revenue", CF, ` If you'd rather raise from a crowd than from a handful of backers, see our guide to ${L(CF, "crowdfunding for startups")}.`],
  ["essential-tools-for-startup-success", "Tools like QuickBooks, Kickstarter, AngelList, and Stripe", CF, ` If Kickstarter-style fundraising appeals, our guide to ${L(CF, "crowdfunding for startups")} covers how campaigns work.`],
];
const live = new Set((await (await fetch("https://www.startupyeti.com/sitemap-0.xml")).text()).match(/<loc>[^<]+/g).map((l) => new URL(l.slice(5)).pathname.replace(/\/$/, "")));
const bySlug = {};
for (const [slug, frag, target, ins] of plan) (bySlug[slug] ||= []).push({ frag, target, ins });
for (const [slug, items] of Object.entries(bySlug)) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,link,content`, { headers: { Authorization: auth } }))[0];
  if (!live.has(new URL(post.link).pathname.replace(/\/$/, ""))) throw new Error(`${slug}: host is not an indexable live page`);
  let raw = post.content.raw, changed = 0;
  for (const { frag, target, ins } of items) {
    if (/[—–]/.test(ins)) throw new Error("dash in new copy");
    if (raw.includes(`href="${target}"`)) { console.log(`  = ${slug}: already links ${target}`); continue; }
    const i = raw.indexOf(frag); if (i < 0 || raw.indexOf(frag, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once: ${frag}`);
    const end = raw.indexOf("</p>", i); if (end < 0) throw new Error(`${slug}: no </p> after fragment`);
    const pre = raw.slice(0, end); const tail = pre.match(/(<br\s*\/?>|&nbsp;|\s)+$/)?.[0] || ""; const before = pre.slice(0, pre.length - tail.length);
    raw = before + ins + tail + raw.slice(end); changed++;
    console.log(`\n  + ${slug} → ${target}\n    …${before.replace(/<[^>]+>/g, "").slice(-110)}${ins.replace(/<[^>]+>/g, "")}`);
  }
  if (!DRY && changed) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`  ✓ ${slug} saved (${changed})`); }
}
if (DRY) console.log("\nDRY RUN");
