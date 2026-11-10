const fs = require('fs');
const path = require('path');

const pubDocsDir = path.resolve(__dirname, '../public/documents');
const pagesJsonPath = path.resolve(__dirname, '../src/content/pages.json');

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
        size: stat.size
      });
    }
  }
  return fileList;
}

const pubDocs = walk(pubDocsDir, pubDocsDir);
const pages = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf8'));

const linkedPublicDocs = new Set();
for (const [url, page] of Object.entries(pages)) {
  if (page.sections) {
    page.sections.forEach(sec => {
      sec.body.forEach(b => {
        const text = (b.p || '') + ' ' + (b.li || '');
        const matches = text.match(/\/documents\/[^\s\)\"\'\<\>]+/g);
        if (matches) {
          matches.forEach(m => {
            const clean = m.replace(/[\.\,\;]+$/, '');
            linkedPublicDocs.add(clean);
          });
        }
      });
    });
  }
}

console.log('--- UNLINKED FILES IN public/documents ---');
const unlinked = pubDocs.filter(p => !linkedPublicDocs.has('/documents/' + p.relPath));
console.log('Total unlinked:', unlinked.length);
unlinked.forEach(u => console.log(`  ${u.relPath} (${u.size} B)`));

console.log('\n--- LINKED FILES IN public/documents BY CATEGORY ---');
const linked = pubDocs.filter(p => linkedPublicDocs.has('/documents/' + p.relPath));
console.log('Total linked:', linked.length);
const catCount = {};
linked.forEach(l => {
  const parts = l.relPath.split('/');
  const cat = parts[0];
  catCount[cat] = (catCount[cat] || 0) + 1;
});
console.log('Linked categories:', catCount);
