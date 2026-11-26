#!/usr/bin/env node
// update-post.mjs — replace a live post's content (and excerpt) in place with an article JSON from md-to-article.mjs.
// Guards: slug must resolve to the expected post id; no em/en dashes; must-contain strings; backup of the old post first.
// Usage: node scripts/update-post.mjs <slug> <expected post id> <article.json> [--must "text" ...] [--dry]   (BACKUP_DIR for backups)
import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const [slug, idArg, file] = args.filter((a) => a !== "--dry");
const must = []; for (let i = 0; i < args.length; i++) if (args[i] === "--must") must.push(args[i + 1]);
if (!slug || !idArg || !file) throw new Error("usage: update-post.mjs <slug> <id> <article.json> [--must text] [--dry]");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };

const art = JSON.parse(readFileSync(file, "utf8"));
if (art.slug !== slug) throw new Error(`article slug ${art.slug} ≠ ${slug}`);
if (/[—–]/.test(art.content) || /[—–]/.test(art.excerpt)) throw new Error("dash in new copy");
for (const m of must.filter((x) => !x.startsWith("--"))) if (!art.content.includes(m)) throw new Error(`missing: ${m}`);
const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content,excerpt,modified`, { headers: { Authorization: auth } }))[0];
if (!post || post.id !== Number(idArg)) throw new Error(`unexpected post id ${post?.id}`);
console.log(`  ~ ${slug} (${post.id}): content ${post.content.raw.length} → ${art.content.length} chars; excerpt ${post.excerpt.raw.trim() === art.excerpt ? "unchanged" : "→ " + art.excerpt}`);
if (DRY) { console.log("DRY RUN"); process.exit(0); }
writeFileSync(`${process.env.BACKUP_DIR || "."}/${slug}-backup-${Date.now()}.json`, JSON.stringify(post));
await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: art.content, excerpt: art.excerpt }) });
console.log("    ✓ saved");
