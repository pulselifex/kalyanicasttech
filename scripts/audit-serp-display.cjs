const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '..');
const pages = JSON.parse(fs.readFileSync(path.join(BASE_DIR, 'src', 'content', 'pages.json'), 'utf-8'));
const seoMetaContent = fs.readFileSync(path.join(BASE_DIR, 'src', 'content', 'seo-metadata.ts'), 'utf-8');

// Parse 27 canonical routes
const primaryMatch = seoMetaContent.match(/PRIMARY_CANONICAL_ROUTES\s*=\s*\[([\s\S]*?)\];/);
const rawLines = primaryMatch[1].split('\n');
const primaryRoutes = [];
for (const line of rawLines) {
  const trimmed = line.trim();
  if (trimmed.startsWith('/') || trimmed.startsWith('"/') || trimmed.startsWith("'/")) {
    const route = trimmed.replace(/['",]/g, '').trim();
    if (route) primaryRoutes.push(route);
  }
}

console.log(`Analyzing ${primaryRoutes.length} primary canonical routes...`);

const report = [];
const seenDescs = new Map();

for (const route of primaryRoutes) {
  const p = pages.find(pg => pg.url === route);
  if (!p) {
    report.push({
      route,
      error: 'PAGE NOT FOUND IN pages.json'
    });
    continue;
  }

  const title = p.seoTitle || '';
  const desc = p.meta || (p.metaDescription) || '';
  const titleLen = title.length;
  const descLen = desc.length;

  // Approximate pixel width (average character ~9.2px in Arial 18px / Google SERP title font)
  // Capital letters / W / M wider, l / i / space narrower
  let titlePx = 0;
  for (const ch of title) {
    if (/[A-Z]/.test(ch)) titlePx += 11;
    else if (/[wmWM]/.test(ch)) titlePx += 13;
    else if (/[ijlI1\s\|\-\.]/.test(ch)) titlePx += 5;
    else titlePx += 8.5;
  }

  const titleStatus = titlePx > 600 ? 'TRUNCATES_DESKTOP' : 'FITS_DESKTOP';
  const descStatus = descLen > 160 ? 'LONG_MOBILE' : (descLen < 100 ? 'SHORT' : 'OPTIMAL');

  // Check duplicate descriptions
  const dup = seenDescs.has(desc);
  if (!dup) seenDescs.set(desc, route);

  report.push({
    route,
    h1: p.h1 || p.name,
    title,
    titleLen,
    titlePx: Math.round(titlePx),
    titleStatus,
    desc,
    descLen,
    descStatus,
    isDuplicateDesc: dup,
    dupWith: dup ? seenDescs.get(desc) : null
  });
}

console.log('\n--- 27 PRIMARY CANONICAL ROUTES SERP DISPLAY AUDIT ---');
console.table(report.map(r => ({
  route: r.route,
  titleLen: r.titleLen,
  titlePx: r.titlePx + 'px',
  titleStatus: r.titleStatus,
  descLen: r.descLen,
  descStatus: r.descStatus,
  duplicate: r.isDuplicateDesc ? 'YES (' + r.dupWith + ')' : 'NO'
})));

fs.writeFileSync(path.join(BASE_DIR, 'scripts', 'title-meta-serp-audit.json'), JSON.stringify(report, null, 2));
