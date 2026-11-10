import fs from "fs";
import path from "path";
import pages from "../src/content/pages.json" with { type: "json" };

const baseUrl = process.env.VITE_SITE_URL || "https://kalyanicasttech.com";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => {
    const loc = `${baseUrl}${p.url === "/" ? "/" : p.url}`;
    const priority = p.url === "/" ? "1.0" : p.url.split("/").length === 2 ? "0.8" : "0.6";
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemap.trim() + "\n", "utf8");
console.log(`Generated public/sitemap.xml successfully with ${pages.length} URLs.`);
