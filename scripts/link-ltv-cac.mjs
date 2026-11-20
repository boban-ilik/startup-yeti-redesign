#!/usr/bin/env node
// link-ltv-cac.mjs — incoming links for /startup/ltv-to-cac-ratio (published 2026-11-20, post 2124)
// from four sibling pages that mention LTV:CAC without a dedicated page to point to. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = `/startup/ltv-to-cac-ratio`;
// [host slug, current fragment (must occur once), replacement]
const plan = [
  ["cac-payback-period",
    `For an early-stage founder, we would plan cash on payback and use LTV:CAC as a check.</p>`,
    `For an early-stage founder, we would plan cash on payback and use LTV:CAC as a check. Our <a href="${L}">LTV to CAC ratio guide</a> covers the ratio, its 3:1 origin and 2026 benchmarks.</p>`],
  ["plg-saas",
    `net revenue retention (NRR), LTV:CAC, and <a href="/startup/cac-payback-period">`,
    `net revenue retention (NRR), <a href="${L}">LTV:CAC</a>, and <a href="/startup/cac-payback-period">`],
  ["saas-marketing-strategies",
    `judge it on three numbers: <strong>LTV:CAC</strong> (aim for 3:1 or better)`,
    `judge it on three numbers: <strong><a href="${L}">LTV:CAC</a></strong> (aim for 3:1 or better)`],
  ["net-revenue-retention",
    `beside it: LTV, the LTV:CAC ratio, net MRR growth and CAC payback period.`,
    `beside it: LTV, the <a href="${L}">LTV:CAC ratio</a>, net MRR growth and CAC payback period.`],
];
for (const [slug, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  if (raw.includes(`href="${L}"`)) throw new Error(`${slug}: already links to ${L}`);
  if (/[—–]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  ~ ${slug}: …${rep.replace(/<[^>]+>/g, "").slice(-120)}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw.slice(0, i) + rep + raw.slice(i + cur.length) }) }); console.log(`    ✓ saved`); }
}
if (DRY) console.log("DRY RUN");
