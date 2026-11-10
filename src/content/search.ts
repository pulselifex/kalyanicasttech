import { pages } from "./site";

/** Searches approved page text only; unpublished assets are never indexed. */
export function searchPages(query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return pages
    .map((page) => {
      const title = `${page.name} ${page.h1}`.toLowerCase();
      const body =
        `${page.hero ?? ""} ${page.sections.flatMap((s) => [s.heading, ...s.body.map((b) => b.p ?? b.li ?? "")]).join(" ")}`.toLowerCase();
      const score = terms.every((term) => `${title} ${body}`.includes(term))
        ? terms.reduce((sum, term) => sum + (title.includes(term) ? 3 : 1), 0)
        : 0;
      return { page, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ page }) => page);
}
