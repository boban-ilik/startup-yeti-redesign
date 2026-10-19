// Responsive-image helper for WordPress featured images.
//
// WordPress generates ~30 renditions per upload (core sizes plus theme crops).
// Only the uncropped ones are safe in a srcset: a cropped theme size such as
// 470x560 would be picked by the browser purely on width and change the image's
// framing. We keep renditions whose aspect ratio is within 3% of the original.

export type WpSize = { width: number; height: number; source_url: string };

export function buildSrcset(
  sizes: Record<string, WpSize> | undefined,
  full: { url: string; width?: number; height?: number }
): string | undefined {
  if (!sizes || !full.width || !full.height) return undefined;
  const ratio = full.width / full.height;
  const byWidth = new Map<number, string>();
  for (const s of Object.values(sizes)) {
    if (!s?.source_url || !s.width || !s.height) continue;
    if (Math.abs(s.width / s.height - ratio) / ratio > 0.03) continue;
    if (s.width >= full.width) continue;
    byWidth.set(s.width, s.source_url);
  }
  byWidth.set(full.width, full.url);
  if (byWidth.size < 2) return undefined;
  return [...byWidth.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([w, url]) => `${url} ${w}w`)
    .join(", ");
}

// `sizes` attributes per placement, matched to the layout's real column widths.
export const SIZES = {
  // 3-up grid inside a 72rem container; 2-up at sm; full width on phones.
  card: "(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw",
  // 4-up compact grid.
  cardCompact: "(min-width: 1024px) 256px, (min-width: 640px) 50vw, 100vw",
  // Article hero inside the reading column.
  hero: "(min-width: 768px) 44rem, 100vw",
} as const;
