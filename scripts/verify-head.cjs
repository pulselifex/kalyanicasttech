const { pages, pageHead } = require('../src/content/site');
const { PRIMARY_CANONICAL_ROUTES } = require('../src/content/seo-metadata');

console.log('Testing pageHead for all 16 canonical routes...');
let errors = 0;

for (const route of PRIMARY_CANONICAL_ROUTES) {
  try {
    const head = pageHead(route);
    const canonical = head.links.find(l => l.rel === 'canonical')?.href;
    const title = head.meta.find(m => m.title)?.title;
    const desc = head.meta.find(m => m.name === 'description')?.content;
    const robots = head.meta.find(m => m.name === 'robots')?.content;
    const ogTitle = head.meta.find(m => m.property === 'og:title')?.content;
    const ogImage = head.meta.find(m => m.property === 'og:image')?.content;
    const twCard = head.meta.find(m => m.name === 'twitter:card')?.content;
    const scriptCount = head.scripts?.length || 0;

    if (!canonical || !title || !desc || !ogTitle || !ogImage || !twCard || scriptCount === 0) {
      console.error(`FAIL: Missing head items for ${route}`);
      errors++;
    } else {
      console.log(`OK: ${route.padEnd(52)} | Canonical: ${canonical} | Schemas: ${scriptCount}`);
    }
  } catch (err) {
    console.error(`ERROR for ${route}:`, err.message);
    errors++;
  }
}

if (errors > 0) {
  console.error(`Verification FAILED with ${errors} errors.`);
  process.exit(1);
} else {
  console.log(`All 16 canonical routes verified successfully with 100% complete SEO/SMO/AIEO metadata!`);
}
