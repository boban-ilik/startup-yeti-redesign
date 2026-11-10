#!/usr/bin/env node
// refresh-payroll-prices.mjs — update stale vendor prices on /startup/best-payroll-software-for-startups
// to the figures verified on each vendor's pricing page on 2026-11-10. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const li = (s) => `<!-- wp:list-item -->\n<li>${s}</li>\n<!-- /wp:list-item -->`;
const swaps = [
  // Gusto (gusto.com/product/pricing)
  ["<strong>Plus Plan:</strong> $60/month + $9/employee", "<strong>Plus Plan:</strong> $80/month + $12/employee"],
  ["<strong>Premium Plan:</strong> $135/month + $16.50/employee", "<strong>Premium Plan:</strong> $180/month + $22/employee"],
  // Rippling (rippling.com/solutions/small-businesses; blog/best-employer-of-record)
  ["Base HRIS module starts at $8/employee/month + $35/month base fee", "Base HRIS module starts at $8/employee/month + $40/month base fee"],
  ["EOR services: $499-599/employee/month", "EOR services: from $499/employee/month"],
  // Deel (deel.com/pricing)
  ["<strong>PEO:</strong> $95/employee/month", "<strong>PEO:</strong> from $125/employee/month"],
  // Justworks (justworks.com/pricing)
  ["<strong>PEO Basic:</strong> $59/employee/month", "<strong>PEO Basic:</strong> $79/employee/month"],
  ["<strong>PEO Plus:</strong> $109/employee/month", "<strong>PEO Plus:</strong> $124/employee/month"],
  ["Justworks PEO Plus ($109/employee)", "Justworks PEO Plus ($124/employee)"],
  // OnPay (onpay.com pricing page, archived 2026-10-30)
  ["<strong>Single Plan:</strong> $49/month + $6/employee — includes everything (no tiers to navigate)", "<strong>Payroll Essentials:</strong> $49/month + $6/worker for full-service payroll. HR tools and time tracking are add-ons, each from $15/month base"],
  // QuickBooks (quickbooks.intuit.com/payroll/pricing/bundle, payroll-only plans)
  ["<strong>Core:</strong> $50/month + $6.50/employee — basic payroll, federal and state taxes", "<strong>Workforce Payroll:</strong> $50/month + $7/employee. Payroll with taxes done for you"],
  ["<strong>Premium:</strong> $85/month + $9/employee — same-day deposit, HR support, time tracking", "<strong>Workforce Premium:</strong> $88/month + $13/employee. Adds time tracking and HR tools"],
  ["<strong>Elite:</strong> $130/month + $11/employee — tax penalty protection, personal HR advisor", "<strong>Workforce Elite:</strong> $134/month + $17/employee. The full workforce platform with expert support"],
];
// Paychex: the four priced bullets become one bullet (paychex.com compare page, archived 2026-10-26: all plans "Request Pricing")
const PAYCHEX_START = "<li><strong>Essentials:</strong> $39/month + $5/employee";
const PAYCHEX_END_MARK = "performance management, document management, advanced analytics</li>\n<!-- /wp:list-item -->";
const PAYCHEX_NEW = li("Paychex now sells four plans (Basic, Foundations, Advanced and Complete) and lists every one as \"Request Pricing\" on its plan comparison page, so expect a sales call for a number");
const NOTE_AFTER = "7 Best Payroll Software Options for Startups in 2026</h2>\n<!-- /wp:heading -->";
const NOTE = "\n\n<!-- wp:paragraph -->\n<p><em>Prices checked against each vendor's own pricing page in November 2026.</em></p>\n<!-- /wp:paragraph -->";

const post = (await api(`/posts?slug=best-payroll-software-for-startups&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
let raw = post.content.raw;
const once = (s) => { const i = raw.indexOf(s); if (i < 0 || raw.indexOf(s, i + 1) >= 0) throw new Error(`not unique/found: ${s.slice(0, 80)}`); return i; };
for (const [a, b] of swaps) { once(a); raw = raw.replace(a, b); console.log(`  ~ ${a.slice(0, 60)} → ${b.slice(0, 60)}`); }
const ps = once(PAYCHEX_START), pe = once(PAYCHEX_END_MARK);
const blockStart = raw.lastIndexOf("<!-- wp:list-item -->", ps);
raw = raw.slice(0, blockStart) + PAYCHEX_NEW + raw.slice(pe + PAYCHEX_END_MARK.length);
console.log("  ~ Paychex four priced tiers → one 'Request Pricing' bullet");
if (!raw.includes("Prices checked against each vendor")) { const n = once(NOTE_AFTER) + NOTE_AFTER.length; raw = raw.slice(0, n) + NOTE + raw.slice(n); console.log("  + dated prices-checked note"); }
for (const stale of ["$60/month", "$135/month", "$35/month base", "$59/employee", "$109/employee", "$95/employee", "~$47", "$6.50/employee", "Single Plan"]) if (raw.includes(stale)) throw new Error("stale left: " + stale);
if (/[—–]/.test(PAYCHEX_NEW + NOTE + swaps.map((s) => s[1]).join(""))) throw new Error("dash in new copy");
if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`  ✓ saved post ${post.id}`); }
else console.log("DRY RUN");
