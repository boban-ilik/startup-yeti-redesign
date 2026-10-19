import { fetchPosts } from "../lib/wordpress";

// Static search index for the nav search: slug, title, plain excerpt, category.
// ~180 posts ≈ 40 KB; fetched once on first search open.
export async function GET() {
  const posts = await fetchPosts(undefined, 500);
  const strip = (s: string) => s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const index = posts.map((p) => {
    const cat = p.categories.nodes[0] || { slug: "blog", name: "Article" };
    return { s: p.slug, t: strip(p.title), e: strip(p.excerpt).slice(0, 140), c: cat.slug, n: cat.name };
  });
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
