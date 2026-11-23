#!/usr/bin/env node
// render-featured.mjs — render a code-designed featured image (seo-notes/featured/<slug>.html) with headless Chrome.
// The page links ./_brand.css; a <!--DECO--> marker is replaced by the shared decorations in _deco.html.
// Output: content-drafts/images/<slug>-featured.png (2400x1600) and <slug>-featured.webp (1200x800, for WordPress).
// Usage: node scripts/render-featured.mjs <slug> [<slug> ...]
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import sharp from "sharp";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SRC = resolve("seo-notes/featured");
const OUT = "/Users/bobanilikj/startup-yeti-redesign/content-drafts/images";
const deco = readFileSync(join(SRC, "_deco.html"), "utf8");
const css = readFileSync(join(SRC, "_brand.css"), "utf8");

for (const slug of process.argv.slice(2)) {
  let html = readFileSync(join(SRC, `${slug}.html`), "utf8");
  if (/[—–]/.test(html.replace(/<!--[\s\S]*?-->/g, ""))) throw new Error(`${slug}: em/en dash in image text`);
  html = html.replace("<!--DECO-->", deco).replace('<link rel="stylesheet" href="_brand.css">', `<style>${css}</style>`);
  const dir = mkdtempSync(join(tmpdir(), "featured-"));
  const page = join(dir, "page.html"), png = join(OUT, `${slug}-featured.png`);
  writeFileSync(page, html);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=2",
    "--window-size=1200,800", "--virtual-time-budget=5000", `--screenshot=${png}`, `file://${page}`], { stdio: "ignore" });
  const meta = await sharp(png).metadata();
  if (meta.width !== 2400 || meta.height !== 1600) throw new Error(`${slug}: unexpected size ${meta.width}x${meta.height}`);
  await sharp(png).resize(1200, 800).webp({ quality: 86 }).toFile(join(OUT, `${slug}-featured.webp`));
  console.log(`✓ ${slug}: ${png} (+ .webp 1200x800)`);
}
