#!/usr/bin/env node
// link-metrics-r40.mjs — incoming links for /startup/saas-metrics (post 2143) and /startup/rule-of-40 (post 2145), published 2026-11-26
// from sibling metric pages. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const H = `/startup/saas-metrics`, R = `/startup/rule-of-40`;
// [host slug, link target, current fragment (must occur once), replacement]
const plan = [
  ["burn-multiple", R,
    `The Rule of 40 appeared in a `,
    `The <a href="${R}">Rule of 40</a> appeared in a `],
  ["burn-multiple", H,
    `This week, compute last quarter's multiple and your trailing-12, write the footnote, and find the benchmark row for your ARR.`,
    `This week, compute last quarter's multiple and your trailing-12, write the footnote, and find the benchmark row for your ARR. Our <a href="${H}">SaaS metrics guide</a> maps the other metrics to ARR bands.`],
  ["ltv-to-cac-ratio", H,
    `Then find your row in the benchmark tables above, and put the basis, the churn type and the row beside your number.`,
    `Then find your row in the benchmark tables above, and put the basis, the churn type and the row beside your number. For the other metrics to track at your stage, see our <a href="${H}">SaaS metrics guide</a>.`],
  ["net-revenue-retention", H,
    `Your next step: pull last year's cohort this week, compute NRR, GRR and logo retention, and write the footnote before anyone asks.`,
    `Your next step: pull last year's cohort this week, compute NRR, GRR and logo retention, and write the footnote before anyone asks. Our <a href="${H}">SaaS metrics guide</a> shows which other metrics matter at your ARR.`],
  ["cac-payback-period", H,
    `Benchmarkit and ICONIQ publish yearly, so check for a newer edition before putting a figure in a board deck.`,
    `Benchmarkit and ICONIQ publish yearly, so check for a newer edition before putting a figure in a board deck. Our <a href="${H}">SaaS metrics guide</a> sets the 2026 surveys side by side by ARR band.`],
];
for (const [slug, L, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  if (raw.includes(`href="${L}"`)) throw new Error(`${slug}: already links to ${L}`);
  if (/[\u2014\u2013]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  ~ ${slug} -> ${L}: ...${rep.replace(/<[^>]+>/g, "").slice(-110)}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw.slice(0, i) + rep + raw.slice(i + cur.length) }) }); console.log(`    ✓ saved`); }
}
if (DRY) console.log("DRY RUN");
