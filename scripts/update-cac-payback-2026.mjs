#!/usr/bin/env node
// update-cac-payback-2026.mjs — apply the 2026-11-19 refresh (Benchmarkit 2026 data) to the live post 2116 in place,
// and fix the magic-number sentence that links to it ("2025 benchmarks" → "2026 benchmarks").
// Usage: node scripts/update-cac-payback-2026.mjs <article.json from md-to-article> [--dry]   (BACKUP_DIR for backups)
import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
const [file] = process.argv.slice(2);
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const get = async (slug) => (await api(`/posts?slug=${slug}&context=edit&_fields=id,content,excerpt,modified`, { headers: { Authorization: auth } }))[0];
const save = async (id, body) => { if (!DRY) { await api(`/posts/${id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify(body) }); console.log("    ✓ saved"); } };
const backup = (slug, post) => { if (!DRY) writeFileSync(`${process.env.BACKUP_DIR || "."}/${slug}-backup-${Date.now()}.json`, JSON.stringify(post)); };

// 1. The article itself
const art = JSON.parse(readFileSync(file, "utf8"));
const post = await get("cac-payback-period");
if (post.id !== 2116) throw new Error(`unexpected post id ${post.id}`);
if (/[—–]/.test(art.content) || /[—–]/.test(art.excerpt)) throw new Error("dash in new copy");
for (const must of ["16 months for calendar 2025", "2026-saas-ai-native-metrics", "Nor could we find a payback formula"]) if (!art.content.includes(must)) throw new Error(`missing: ${must}`);
console.log(`  ~ cac-payback-period (2116): content ${post.content.raw.length} → ${art.content.length} chars; excerpt → "${art.excerpt}"`);
backup("cac-payback-period", post);
await save(post.id, { content: art.content, excerpt: art.excerpt });

// 2. The magic-number sentence that points here
const mn = await get("saas-magic-number");
const cur = `compares that against 2025 benchmarks by contract size.`, rep = `compares that against 2026 benchmarks by contract size.`;
const i = mn.content.raw.indexOf(cur); if (i < 0 || mn.content.raw.indexOf(cur, i + 1) >= 0) throw new Error("magic-number fragment not found exactly once");
console.log(`  ~ saas-magic-number (${mn.id}): "…${rep}"`);
backup("saas-magic-number", mn);
await save(mn.id, { content: mn.content.raw.slice(0, i) + rep + mn.content.raw.slice(i + cur.length) });
if (DRY) console.log("DRY RUN");
