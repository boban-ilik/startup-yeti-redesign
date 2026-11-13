#!/usr/bin/env node
// link-founder-books.mjs — first two in-body incoming links to /startup/the-books-every-founder-should-read
// (optimizer cycle 1, 2026-11-13), from positioning-statement (Crossing the Chasm) and win-loss-analysis (The Mom Test). --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const T = "/startup/the-books-every-founder-should-read";
const plan = [
  ["positioning-statement",
    `Crossing the Chasm</a>, and nearly every version you'll find online is a light rewording of it:`,
    `Crossing the Chasm</a> (one of the <a href="${T}">startup books worth reading</a> once you have a product to sell), and nearly every version you'll find online is a light rewording of it:`],
  ["win-loss-analysis",
    `switch interviews. Seven questions carry the whole conversation:`,
    `switch interviews. It's the same rule Rob Fitzpatrick's <em>The Mom Test</em>, one of the <a href="${T}">startup books</a> we recommend, builds on: ask about what people did, not what they think they would do. Seven questions carry the whole conversation:`],
];
for (const [slug, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  if (raw.includes(`href="${T}"`)) { console.log(`  = ${slug}: already links`); continue; }
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  const out = raw.slice(0, i) + rep + raw.slice(i + cur.length);
  if (/[—–]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  + ${slug} (post ${post.id}): …${rep.slice(0, 150)}…`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: out }) }); console.log(`  ✓ ${slug} saved`); }
}
if (DRY) console.log("DRY RUN");
