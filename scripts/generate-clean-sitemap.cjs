const fs = require('fs');
const path = require('path');

const { PRIMARY_CANONICAL_ROUTES, CANONICAL_DOMAIN } = require('../src/content/seo-metadata.ts');

// We can extract PRIMARY_CANONICAL_ROUTES directly using regex to avoid ts transpilation
const seoFile = fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'seo-metadata.ts'), 'utf8');
const routesMatch = seoFile.match(/export const PRIMARY_CANONICAL_ROUTES = \[([\s\S]*?)\] as const;/);
if (!routesMatch) {
  throw new Error('Could not find PRIMARY_CANONICAL_ROUTES in seo-metadata.ts');
}

const routes = [...routesMatch[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);

console.log(`Generating sitemap for ${routes.length} canonical routes:`);

const priorities = {
  "/": { priority: "1.0", changefreq: "weekly" },
  "/manufacturing": { priority: "0.9", changefreq: "weekly" },
  "/products-applications": { priority: "0.9", changefreq: "weekly" },
  "/shivlakha-rail-logistics": { priority: "0.9", changefreq: "weekly" },
  "/shivlakha-rail-logistics/gati-shakti-terminal": { priority: "0.9", changefreq: "weekly" },
  "/facilities": { priority: "0.8", changefreq: "monthly" },
  "/engineering-quality": { priority: "0.8", changefreq: "monthly" },
  "/innovation": { priority: "0.8", changefreq: "monthly" },
  "/investor-relations": { priority: "0.9", changefreq: "weekly" },
  "/contact": { priority: "0.8", changefreq: "monthly" },
  "/about-us": { priority: "0.8", changefreq: "monthly" },
  "/our-journey": { priority: "0.7", changefreq: "monthly" },
  "/leadership": { priority: "0.7", changefreq: "monthly" },
  "/gallery": { priority: "0.7", changefreq: "monthly" },
  "/resources": { priority: "0.8", changefreq: "monthly" },
  "/shivlakha-rail-logistics/inland-container-terminal": { priority: "0.8", changefreq: "monthly" },
  "/shivlakha-rail-logistics/cargo-opportunities": { priority: "0.8", changefreq: "monthly" },
  "/resources/quality-certifications": { priority: "0.8", changefreq: "monthly" },
  "/resources/corporate-profile-brochures": { priority: "0.7", changefreq: "monthly" },
  "/resources/news-media": { priority: "0.7", changefreq: "monthly" },
  "/investors/financial-information": { priority: "0.8", changefreq: "monthly" },
  "/investors/stock-exchange-disclosures": { priority: "0.8", changefreq: "weekly" },
  "/investors/corporate-governance": { priority: "0.7", changefreq: "monthly" },
  "/investors/shareholder-information": { priority: "0.7", changefreq: "monthly" },
  "/investors/ipo-corporate-actions": { priority: "0.7", changefreq: "monthly" },
  "/investors/investor-grievance-contact": { priority: "0.8", changefreq: "monthly" },
  "/investors/meetings-presentations": { priority: "0.7", changefreq: "monthly" }
};

const xmlEntries = routes.map(route => {
  const meta = priorities[route] || { priority: "0.6", changefreq: "monthly" };
  const loc = route === "/" ? "https://kalyanicasttech.com/" : `https://kalyanicasttech.com${route}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-11-06</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
}).join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log(`Generated clean sitemap at ${sitemapPath} with ${routes.length} entries.`);
