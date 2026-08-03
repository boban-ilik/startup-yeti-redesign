#!/usr/bin/env node
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const SRC = "/Users/bobanilikj/startup-yeti-redesign/content-drafts/images";
const HTML = "seo-notes/drafts/hubspot-alternatives.html";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}
const src = `${SRC}/Hubspot alternatives - Featured image.png`;
const alt = "A balance scale weighing a tall stack of coins against several lighter alternative software option cards";
const buf = await sharp(readFileSync(src)).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 88 }).toBuffer();
const meta = await sharp(buf).metadata();
const m = await api(`/media`, { method: "POST", headers: { Authorization: auth, "Content-Disposition": `attachment; filename="hubspot-alternatives-featured.webp"`, "Content-Type": "image/webp" }, body: buf });
await api(`/media/${m.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ alt_text: alt }) });
console.log(`✓ featured: ${(buf.length / 1024 | 0)}KB ${meta.width}x${meta.height}, media id ${m.id}`);

const content = readFileSync(HTML, "utf8");
if (content.includes("IN-ARTICLE IMAGE")) throw new Error("Unexpected image placeholder in HTML");
const post = await api(`/posts`, {
  method: "POST",
  headers: { Authorization: auth, "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "HubSpot Alternatives: What It Costs to Leave",
    slug: "hubspot-alternatives",
    excerpt: "HubSpot Professional is $800/mo plus a required $3,000 onboarding fee. Here's what that really costs, when leaving makes sense, and the alternatives worth it.",
    content, status: "publish", categories: [27], featured_media: m.id,
  }),
});
console.log(`\n✓ PUBLISHED — id ${post.id}, slug "${post.slug}", status ${post.status}`);
