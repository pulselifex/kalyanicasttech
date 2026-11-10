const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(BASE_DIR, 'src');
const PUBLIC_DIR = path.join(BASE_DIR, 'public');

console.log('=== DOCUMENT & INVESTOR PDF SCANNER ===');

// 1. Extract from route-assets.ts
const routeAssetsContent = fs.readFileSync(path.join(SRC_DIR, 'content', 'route-assets.ts'), 'utf-8');
const docUrlRegex = /url:\s*["']([^"']+)["']/g;
let m;
const allDocEntries = [];

// Parse objects in ROUTE_DOCUMENTS
const routeDocsSection = routeAssetsContent.substring(routeAssetsContent.indexOf('ROUTE_DOCUMENTS'));
while ((m = docUrlRegex.exec(routeDocsSection)) !== null) {
  const url = m[1];
  if (url.startsWith('/documents/')) {
    allDocEntries.push({ source: 'route-assets.ts', url });
  }
}

// 2. Extract from InvestorDocumentLibrary.tsx
const invLibPath = path.join(SRC_DIR, 'components', 'site', 'InvestorDocumentLibrary.tsx');
if (fs.existsSync(invLibPath)) {
  const invLibContent = fs.readFileSync(invLibPath, 'utf-8');
  const fileUrlRegex = /fileUrl:\s*["']([^"']+)["']/g;
  while ((m = fileUrlRegex.exec(invLibContent)) !== null) {
    allDocEntries.push({ source: 'InvestorDocumentLibrary.tsx', url: m[1] });
  }
}

// 3. Extract from investor-relations.tsx
const invRelPath = path.join(SRC_DIR, 'routes', 'investor-relations.tsx');
if (fs.existsSync(invRelPath)) {
  const invRelContent = fs.readFileSync(invRelPath, 'utf-8');
  const hrefDocRegex = /href=["'](\/documents\/[^"']+)["']/g;
  while ((m = hrefDocRegex.exec(invRelContent)) !== null) {
    allDocEntries.push({ source: 'investor-relations.tsx', url: m[1] });
  }
}

// 4. Extract from pages.json
const pagesPath = path.join(SRC_DIR, 'content', 'pages.json');
const pagesContent = fs.readFileSync(pagesPath, 'utf-8');
const pagesDocRegex = /["'](\/documents\/[^"']+)["']/g;
while ((m = pagesDocRegex.exec(pagesContent)) !== null) {
  allDocEntries.push({ source: 'pages.json', url: m[1] });
}

console.log(`Found ${allDocEntries.length} total document references.`);

// Deduplicate
const uniqueMap = new Map();
allDocEntries.forEach(entry => {
  if (!uniqueMap.has(entry.url)) {
    uniqueMap.set(entry.url, {
      url: entry.url,
      sources: [entry.source]
    });
  } else {
    const existing = uniqueMap.get(entry.url);
    if (!existing.sources.includes(entry.source)) {
      existing.sources.push(entry.source);
    }
  }
});

console.log(`Unique document URLs: ${uniqueMap.size}`);

// Verify existence on disk
let missingCount = 0;
const results = [];
for (const [url, item] of uniqueMap.entries()) {
  const cleanUrl = url.split('?')[0].split('#')[0];
  const relativePublicPath = cleanUrl.startsWith('/') ? cleanUrl.slice(1) : cleanUrl;
  const diskPath = path.join(PUBLIC_DIR, relativePublicPath);
  const exists = fs.existsSync(diskPath);
  let sizeBytes = 0;
  let ext = path.extname(cleanUrl);
  if (exists) {
    const stat = fs.statSync(diskPath);
    sizeBytes = stat.size;
  } else {
    missingCount++;
  }
  
  results.push({
    url: cleanUrl,
    sources: item.sources.join(', '),
    diskPath: path.relative(BASE_DIR, diskPath).replace(/\\/g, '/'),
    exists,
    sizeBytes,
    sizeKb: (sizeBytes / 1024).toFixed(1),
    ext
  });
}

console.log(`\nVerification results:`);
console.log(`  Existing: ${results.filter(r => r.exists).length}`);
console.log(`  Missing:  ${missingCount}`);

if (missingCount > 0) {
  console.log('\n❌ MISSING FILES:');
  results.filter(r => !r.exists).forEach(r => {
    console.log(`  - URL: ${r.url}`);
    console.log(`    Expected on disk: ${r.diskPath}`);
    console.log(`    Referenced in: ${r.sources}`);
  });
} else {
  console.log('\n✅ ALL ${results.length} REFERENCED DOCUMENTS EXIST ON DISK!');
}

console.log('\nDocument details:');
results.forEach(r => {
  console.log(`  [${r.exists ? 'OK' : 'MISSING'}] ${r.sizeKb.padStart(7)} KB | ${r.url} (${r.sources})`);
});

fs.writeFileSync(path.join(BASE_DIR, 'scripts', 'document-scan-results.json'), JSON.stringify(results, null, 2));
