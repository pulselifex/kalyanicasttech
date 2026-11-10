const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../..');
const docs05Dir = path.join(rootDir, '05_Documents');
const certs07Dir = path.join(rootDir, '07_Certificates');
const pubDocsDir = path.join(__dirname, '../public/documents');
const pagesJsonPath = path.join(__dirname, '../src/content/pages.json');

function walk(dir, baseDir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, baseDir, fileList);
    } else {
      fileList.push({
        fullPath: full,
        relPath: path.relative(baseDir, full).replace(/\\/g, '/'),
        name: f,
        size: stat.size,
        ext: path.extname(f).toLowerCase()
      });
    }
  }
  return fileList;
}

const docs05 = walk(docs05Dir, docs05Dir);
const certs07 = walk(certs07Dir, certs07Dir);
const pubDocs = walk(pubDocsDir, pubDocsDir);

console.log('=== SUMMARY OF COUNTS ===');
console.log('05_Documents:', docs05.length);
console.log('07_Certificates:', certs07.length);
console.log('public/documents:', pubDocs.length);

// Read pages.json and find all links
const pages = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf8'));
const linkedPublicDocs = new Set();
const linkOccurrences = [];

for (const [url, page] of Object.entries(pages)) {
  if (page.sections) {
    page.sections.forEach(sec => {
      sec.body.forEach(b => {
        const text = (b.p || '') + ' ' + (b.li || '');
        const matches = text.match(/\/documents\/[^\s\)\"\'\<\>]+/g);
        if (matches) {
          matches.forEach(m => {
            linkedPublicDocs.add(m);
            linkOccurrences.push({ pageUrl: url, heading: sec.heading, link: m });
          });
        }
      });
    });
  }
}

console.log('\nUnique /documents/ links in pages.json:', linkedPublicDocs.size);

const pageCounts = {};
linkOccurrences.forEach(o => {
  pageCounts[o.pageUrl] = (pageCounts[o.pageUrl] || 0) + 1;
});
console.log('Document links by page in pages.json:');
console.log(pageCounts);

// Check which public docs on disk are actually linked vs unlinked
const pubDocRelPaths = new Set(pubDocs.map(p => '/documents/' + p.relPath));
let linkedFoundOnDisk = 0;
let linkedMissingOnDisk = 0;
const missingLinks = [];

linkedPublicDocs.forEach(l => {
  // Clean potential trailing punctuation
  const cleanLink = l.replace(/[\.\,\;]+$/, '');
  if (pubDocRelPaths.has(cleanLink)) {
    linkedFoundOnDisk++;
  } else {
    linkedMissingOnDisk++;
    missingLinks.push(cleanLink);
  }
});

console.log(`Linked on website and present on disk: ${linkedFoundOnDisk}`);
console.log(`Linked on website but MISSING on disk: ${linkedMissingOnDisk}`);
if (missingLinks.length > 0) {
  console.log('Missing links sample:', missingLinks.slice(0, 10));
}

// Check unlinked files in public/documents
const unlinkedPubDocs = pubDocs.filter(p => !linkedPublicDocs.has('/documents/' + p.relPath));
console.log(`Unlinked files in public/documents: ${unlinkedPubDocs.length}`);

// Compare 05_Documents files with public/documents
console.log('\n=== COMPARING 05_Documents WITH public/documents ===');
docs05.forEach(d => {
  const matchingPub = pubDocs.filter(p => p.name.toLowerCase() === d.name.toLowerCase() || p.size === d.size);
  if (matchingPub.length > 0) {
    console.log(`MATCH: ${d.name} -> found in public as ${matchingPub.map(m => m.relPath).join(', ')}`);
  } else {
    console.log(`NEW / UNMATCHED: ${d.relPath} (${d.size} B)`);
  }
});
