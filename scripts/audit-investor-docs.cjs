const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 1. Audit InvestorDocumentLibrary.tsx
const libContent = fs.readFileSync('src/components/site/InvestorDocumentLibrary.tsx', 'utf8');
const libUrls = [];
const libRegex = /url:\s*["']([^"']+)["']/g;
let m;
while ((m = libRegex.exec(libContent)) !== null) {
  libUrls.push(m[1]);
}
console.log('InvestorDocumentLibrary doc count:', libUrls.length);
console.log('InvestorDocumentLibrary unique URLs:', new Set(libUrls).size);

// Check if each lib URL exists on disk
let missingLib = 0;
libUrls.forEach(u => {
  const diskPath = path.join('public', u);
  if (!fs.existsSync(diskPath)) {
    console.log('  MISSING lib file on disk:', u);
    missingLib++;
  }
});
console.log('Missing lib files on disk:', missingLib);

// 2. Audit pages.json
const pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'));
const pagesDocs = [];
pages.forEach(p => {
  if (p.url.includes('investor') || p.url.includes('resources')) {
    const pStr = JSON.stringify(p);
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lm;
    while ((lm = linkRegex.exec(pStr)) !== null) {
      if (lm[2].includes('/documents/')) {
        pagesDocs.push({ page: p.url, label: lm[1], url: lm[2] });
      }
    }
  }
});

console.log('\nPages.json document links count:', pagesDocs.length);
const pagesUrls = pagesDocs.map(d => d.url);
console.log('Pages.json unique document URLs:', new Set(pagesUrls).size);

let missingPages = 0;
pagesDocs.forEach(d => {
  const diskPath = path.join('public', d.url);
  if (!fs.existsSync(diskPath)) {
    console.log('  MISSING pages file on disk:', d.page, d.url);
    missingPages++;
  }
});
console.log('Missing pages files on disk:', missingPages);

// 3. Print details of all pages docs grouped by page
const grouped = {};
pagesDocs.forEach(d => {
  if (!grouped[d.page]) grouped[d.page] = [];
  grouped[d.page].push(d);
});

for (const [pg, items] of Object.entries(grouped)) {
  console.log(`\n=== Page: ${pg} (${items.length} items) ===`);
  items.forEach((it, i) => {
    console.log(`  ${i + 1}. [${it.label}] -> ${it.url}`);
  });
}

