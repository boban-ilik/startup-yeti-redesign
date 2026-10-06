#!/usr/bin/env node
// place-pabau.mjs — insert section "6. Practice management and healthcare operations" (Pabau placement)
// into /innovation/the-rise-of-health-tech after section 5. --dry shows the plan.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const post = (await api(`/posts?slug=the-rise-of-health-tech&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
let raw = post.content.raw;
if (raw.includes("pabau.com")) { console.log("already contains pabau.com — nothing to do"); process.exit(0); }
const heads = [...raw.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ lvl: m[1], text: m[2].replace(/<[^>]+>/g, "").trim(), idx: m.index }));
console.log("headings:"); heads.forEach((h) => console.log(`  H${h.lvl} ${h.text}`));
const h5 = heads.find((h) => /^Precision Medicine/.test(h.text));
if (!h5) throw new Error("Precision Medicine heading not found");
const next = heads.find((h) => h.idx > h5.idx && /Frequently Asked Questions/.test(h.text));
// insert before the block comment that opens the next heading (or before the closing of content if none)
let insertAt;
if (next) { insertAt = raw.lastIndexOf("<!-- wp:heading", next.idx); } else { insertAt = raw.length; }
const lvl = h5.lvl;
const block = `<!-- wp:heading${lvl === "3" ? ' {"level":3}' : ""} -->\n<h${lvl} class="wp-block-heading">Practice Management and Healthcare Operations</h${lvl}>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Healthcare innovation isn’t limited to diagnosis and treatment. A growing category of health tech is focused on the operational infrastructure behind care, helping practices manage patients, clinical workflows, communication, payments, and growth from fewer systems.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href="https://pabau.com/">Pabau</a> is an all-in-one practice management platform for growing clinics, from multi-practitioner practices to multi-location operators. It brings booking, patient records, charting, prescribing, payments, marketing, inventory, and reporting into one system across every location. Its clinical workflows are built for medical practices rather than adapted from salon software, while one patient record follows the patient across services and sites.</p>\n<!-- /wp:paragraph -->\n\n`;
console.log(`\ninsert as H${lvl} before: ${next ? `H${next.lvl} "${next.text}"` : "end of content"}`);
console.log("context before insertion point:", JSON.stringify(raw.slice(insertAt - 160, insertAt)));
if (DRY) { console.log("DRY RUN"); process.exit(0); }
raw = raw.slice(0, insertAt) + block + raw.slice(insertAt);
await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
const chk = await api(`/posts/${post.id}?context=edit&_fields=content,modified`, { headers: { Authorization: auth } });
console.log("✓ written", chk.modified, "| pabau link persisted:", chk.content.raw.includes('href="https://pabau.com/"'), "| section 6 heading:", chk.content.raw.includes("Practice Management and Healthcare Operations"));
