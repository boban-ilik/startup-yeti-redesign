#!/usr/bin/env node
// link-churn.mjs — incoming links for /startup/saas-churn-rate (published 2026-11-23, post 2137)
// from four sibling pages that discuss churn without a dedicated page to point to. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = `/startup/saas-churn-rate`;
// [host slug, current fragment (must occur once), replacement]
const plan = [
  ["ltv-to-cac-ratio",
    `5% monthly compounds to 46.0%, not 60%.`,
    `5% monthly compounds to 46.0%, not 60%. The full conversion table is in our <a href="${L}">SaaS churn rate guide</a>.`],
  ["cac-payback-period",
    `Read payback next to churn and net revenue retention.`,
    `Read payback next to <a href="${L}">churn</a> and net revenue retention.`],
  ["product-market-fit",
    `shows what your churn rate means for LTV, LTV:CAC, and CAC payback.`,
    `shows what your <a href="${L}">churn rate</a> means for LTV, LTV:CAC, and CAC payback.`],
  ["net-revenue-retention",
    `Say so, and lean on GRR and logo retention.`,
    `Say so, and lean on GRR and logo retention (see our <a href="${L}">SaaS churn rate</a> guide for both).`],
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
