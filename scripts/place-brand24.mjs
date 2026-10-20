#!/usr/bin/env node
// place-brand24.mjs — link placement on /marketing/social-listening (WP id 1286):
// anchor "listening tools" → https://brand24.com/blog/social-listening-tools/ inside the existing sentence
// "Bloggers make use of social listening tools to gather and assess data…". --dry shows the plan.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };

const TARGET = "https://brand24.com/blog/social-listening-tools/";
const HOST = "Bloggers make use of social listening tools to gather and assess data from different sources";
const FROM = "make use of social listening tools to gather";
const TO = `make use of social <a href="${TARGET}" target="_blank" rel="noopener">listening tools</a> to gather`;

const post = (await api(`/posts?slug=social-listening&context=edit&_fields=id,slug,content,modified`, { headers: { Authorization: auth } }))[0];
let raw = post.content.raw.replace(/ /g, " ");
if (raw.includes("brand24.com")) { console.log("already contains brand24.com — nothing to do"); process.exit(0); }
const n = raw.split(HOST).length - 1;
if (n !== 1) throw new Error(`host sentence found ${n} times (expected 1)`);
const i = raw.indexOf(FROM);
if (i < 0 || raw.indexOf(FROM, i + 1) >= 0) throw new Error("replacement target not unique");
const insideLink = /<a\b[^>]*>[^<]*$/.test(raw.slice(Math.max(0, i - 400), i));
if (insideLink) throw new Error("target sits inside an existing <a>");
console.log(`post ${post.id} (${post.slug}), modified ${post.modified}`);
console.log("context:", JSON.stringify(raw.slice(i - 120, i + FROM.length + 120)));
console.log("replace:", JSON.stringify(FROM), "→", JSON.stringify(TO));
if (DRY) { console.log("DRY RUN"); process.exit(0); }
raw = raw.slice(0, i) + TO + raw.slice(i + FROM.length);
await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
const chk = await api(`/posts/${post.id}?context=edit&_fields=content,modified`, { headers: { Authorization: auth } });
const ok = chk.content.raw.includes(TO);
console.log("✓ written", chk.modified, "| brand24 link persisted:", ok, "| occurrences:", chk.content.raw.split("brand24.com").length - 1);
if (!ok) process.exit(1);
