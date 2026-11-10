#!/usr/bin/env node
// fix-fin-pricing.mjs — update the Intercom + Fin example on /marketing/saas-pricing-models to Intercom's
// live pricing (intercom.com/pricing) and outcome definitions (help article 8205718, Sep 23 2026), checked 2026-11-10. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const START = "<p><strong>Real example: Intercom + Fin.</strong>";
const NEW = `<p><strong>Real example: Intercom + Fin.</strong> As of November 2026, seats cost $29/month on Essential ($19 for new customers), $85/month on Advanced and $132/month on Expert. On top of that, Intercom's AI agent <strong>Fin charges $0.99 per outcome</strong>. An outcome is a resolution (the customer confirms the answer worked, or leaves without asking for more help), a procedure that ends in a handoff, or a disqualified lead; qualifying a sales prospect costs $9.99. You pay for one outcome per conversation, however many actions Fin takes.</p>`;
const post = (await api(`/posts?slug=saas-pricing-models&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
let raw = post.content.raw;
const i = raw.indexOf(START); if (i < 0 || raw.indexOf(START, i + 1) >= 0) throw new Error("Fin paragraph not unique/found");
const j = raw.indexOf("</p>", i) + 4;
const old = raw.slice(i, j);
if (!old.includes("$0.99 per resolution")) throw new Error("unexpected paragraph: " + old.slice(0, 120));
raw = raw.slice(0, i) + NEW + raw.slice(j);
console.log("OLD:", old, "\nNEW:", NEW);
if (/[—–]/.test(NEW)) throw new Error("dash in new copy");
if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`✓ saved post ${post.id}`); }
else console.log("DRY RUN");
