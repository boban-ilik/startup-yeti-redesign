#!/usr/bin/env node
// set-featured-image.mjs — upload a rendered featured image (content-drafts/images/<slug>-featured.webp, from
// scripts/render-featured.mjs) and set it as the post's featured image. Prints the previous media id so the change
// can be reverted (POST featured_media=<old id>). Old media is left in the library.
// Usage: node scripts/set-featured-image.mjs <slug> "<alt text>" [--dry]
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const [slug, alt] = process.argv.slice(2);
const DRY = process.argv.includes("--dry");
if (!slug || !alt) throw new Error('usage: set-featured-image.mjs <slug> "<alt text>" [--dry]');
if (/[—–]/.test(alt)) throw new Error("dash in alt text");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };

const post = (await api(`/posts?slug=${slug}&_fields=id,featured_media`, { headers: { Authorization: auth } }))[0];
if (!post) throw new Error(`no post ${slug}`);
const file = `/Users/bobanilikj/startup-yeti-redesign/content-drafts/images/${slug}-featured.webp`;
const bytes = readFileSync(file);
console.log(`  ~ ${slug} (post ${post.id}): featured ${post.featured_media} → new upload ${slug}-featured-${process.env.VER || "v2"}.webp (${bytes.length} bytes)`);
if (DRY) { console.log("DRY RUN"); process.exit(0); }
const media = await api("/media", { method: "POST", headers: { Authorization: auth, "Content-Type": "image/webp", "Content-Disposition": `attachment; filename="${slug}-featured-${process.env.VER || "v2"}.webp"` }, body: bytes });
await api(`/media/${media.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ alt_text: alt }) });
await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ featured_media: media.id }) });
console.log(`    ✓ media ${media.id} set as featured (previous: ${post.featured_media})`);
