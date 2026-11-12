#!/usr/bin/env node
// apply-optimizer-proposal.mjs — apply an approved on-page-optimizer proposal (seo-notes/proposals/*.md) to a WP post.
// Reads every "### Edit N" block: "Current HTML" / "Replacement HTML" fenced pairs are applied in order (each must
// match exactly once at the time it is applied); a "New excerpt (...): `...`" line updates the excerpt.
// Usage: node scripts/apply-optimizer-proposal.mjs <proposal.md> <wp-slug> [--dry]
import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
const [file, slug] = process.argv.slice(2);
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };

const md = readFileSync(file, "utf8");
const section = md.split(/^## 3\./m)[1].split(/^## 4\./m)[0];
const edits = section.split(/^### Edit /m).slice(1).map((blk) => {
  const n = blk.match(/^(\d+)/)[1];
  const fence = (label) => { const m = blk.match(new RegExp(`${label}:\\s*\\n\`\`\`html\\n([\\s\\S]*?)\\n\`\`\``)); return m ? m[1] : null; };
  const excerpt = blk.match(/New excerpt[^:]*:\s*`([^`]+)`/);
  return { n, cur: fence("Current HTML"), rep: fence("Replacement HTML"), excerpt: excerpt ? excerpt[1] : null };
});

const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content,excerpt,modified`, { headers: { Authorization: auth } }))[0];
if (!DRY) writeFileSync(`${process.env.BACKUP_DIR || "."}/${slug}-backup-${Date.now()}.json`, JSON.stringify(post));
let raw = post.content.raw, excerpt = null;
for (const e of edits) {
  if (e.excerpt) { excerpt = e.excerpt; console.log(`  Edit ${e.n}: excerpt (${excerpt.length} chars)`); }
  if (e.cur === null && e.rep === null) continue;
  if (e.cur === null || e.rep === null) throw new Error(`Edit ${e.n}: unpaired HTML blocks`);
  const i = raw.indexOf(e.cur);
  if (i < 0 || raw.indexOf(e.cur, i + 1) >= 0) throw new Error(`Edit ${e.n}: current HTML not found exactly once`);
  raw = raw.slice(0, i) + e.rep + raw.slice(i + e.cur.length);
  console.log(`  Edit ${e.n}: replaced ${e.cur.length} → ${e.rep.length} chars`);
}
const dashes = (raw.replace(/<!--[\s\S]*?-->/g, "").match(/[—–]/g) || []).length;
const words = raw.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
console.log(`  result: ${words} words, ${dashes} em/en dashes, modified-at-read ${post.modified}`);
if (DRY) { console.log("DRY RUN"); process.exit(0); }
const body = { content: raw }; if (excerpt) body.excerpt = excerpt;
await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify(body) });
console.log(`✓ saved post ${post.id}`);
