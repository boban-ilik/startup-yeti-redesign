#!/usr/bin/env node
// link-nov10-trio.mjs — incoming internal links for the 2026-11-10 articles
// (/marketing/usage-based-pricing, /startup/saas-magic-number, /startup/venture-debt).
// Appends one sentence at the end of the paragraph containing `frag`. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = (href, txt) => `<a href="${href}">${txt}</a>`;
const UBP = "/marketing/usage-based-pricing", MN = "/startup/saas-magic-number", VD = "/startup/venture-debt";
const plan = [
  ["saas-pricing-models", "Usage-based, with unpredictable bills, almost always needs a customer success motion", UBP, ` Our deep dive on ${L(UBP, "usage-based pricing")} covers when a meter is worth that cost and how to design one.`],
  ["choosing-the-right-pricing-model-for-saas-startups", "Customers pay for what they consume.", UBP, ` For when that model fits and how to pick the unit you charge for, see our guide to ${L(UBP, "designing usage-based pricing")}.`],
  ["burn-multiple", "primary sales and marketing efficiency metric", MN, ` The ${L(MN, "SaaS magic number")} is the other common sales and marketing efficiency ratio: annualized new revenue per dollar of last quarter's sales and marketing spend.`],
  ["plg-saas", "Three numbers apply to every motion", MN, ` Sales-led teams usually add a fourth, the ${L(MN, "SaaS magic number")}, which divides annualized new revenue by last quarter's sales and marketing spend.`],
  ["burn-multiple", "Lighter Capital, a lender, says investors", VD, ` Lenders read the same number before they write a loan; our guide to ${L(VD, "venture debt")} covers what they look for and what it really costs.`],
  ["startup-financing", "Take on a loan and commit to repayments before revenue is steady?", VD, ` If you have already raised a venture round, there is also ${L(VD, "venture debt")}, a loan sized against that round with its own costs and traps.`],
];
const bySlug = {};
for (const [slug, frag, target, ins] of plan) (bySlug[slug] ||= []).push({ frag, target, ins });
for (const [slug, items] of Object.entries(bySlug)) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  let raw = post.content.raw.replace(/ /g, " ");
  let changed = 0;
  for (const { frag, target, ins } of items) {
    if (raw.includes(`href="${target}"`)) { console.log(`  = ${slug}: already links ${target}`); continue; }
    const i = raw.indexOf(frag); if (i < 0 || raw.indexOf(frag, i + 1) >= 0) throw new Error(`${slug}: fragment not unique/found: ${frag}`);
    const end = raw.indexOf("</p>", i); if (end < 0) throw new Error(`${slug}: no </p> after fragment`);
    const pre = raw.slice(0, end); const tail = pre.match(/(<br\s*\/?>|&nbsp;|\s)+$/)?.[0] || ""; const before = pre.slice(0, pre.length - tail.length);
    raw = before + ins + tail + raw.slice(end); changed++;
    console.log(`  + ${slug} → ${target}: …${JSON.stringify(before.slice(-70))}`);
  }
  if (!DRY && changed) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`  ✓ ${slug} saved (${changed})`); }
}
if (DRY) console.log("DRY RUN");
