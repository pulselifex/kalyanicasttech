const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../..');
const docs05Dir = path.join(rootDir, '05_Documents');
const certs07Dir = path.join(rootDir, '07_Certificates');
const pubDocsDir = path.join(__dirname, '../public/documents');
const pagesJsonPath = path.join(__dirname, '../src/content/pages.json');

function walk(currentDir, baseDir, fileList = []) {
  if (!fs.existsSync(currentDir)) return fileList;
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, baseDir, fileList);
      } else {
        fileList.push({
          fullPath,
          relPath: path.relative(baseDir, fullPath).replace(/\\/g, '/'),
          name: file,
          size: stat.size,
          mtime: stat.mtime
        });
      }
    } catch (e) {
      console.error(e.message);
    }
  }
  return fileList;
}

console.log('--- 05_Documents ---');
const files05 = walk(docs05Dir, docs05Dir);
console.log('Count:', files05.length);
files05.forEach(f => console.log(`  ${f.relPath} (${f.size} B)`));

console.log('\n--- 07_Certificates ---');
const files07 = walk(certs07Dir, certs07Dir);
console.log('Count:', files07.length);
files07.forEach(f => console.log(`  ${f.relPath} (${f.size} B)`));

console.log('\n--- Existing public/documents ---');
const existingPubDocs = walk(pubDocsDir, pubDocsDir);
console.log('Count:', existingPubDocs.length);
const pubCategories = {};
existingPubDocs.forEach(f => {
  const parts = f.relPath.split('/');
  const cat = parts.length > 1 ? parts[0] : '(root)';
  pubCategories[cat] = (pubCategories[cat] || 0) + 1;
});
console.log('Categories:', pubCategories);

console.log('\n--- Checking pages.json for document references ---');
const pages = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf8'));
const docRefs = [];
for (const [url, page] of Object.entries(pages)) {
  if (page.sections) {
    page.sections.forEach((sec) => {
      sec.body.forEach((b) => {
        const text = (b.p || '') + ' ' + (b.li || '');
        const matches = text.match(/\/documents\/[^\s\)\"\'\<\>]+/g);
        if (matches) {
          matches.forEach(m => docRefs.push({ url, heading: sec.heading, link: m }));
        }
      });
    });
  }
}
console.log('Total document links found in pages.json:', docRefs.length);
const uniqueLinks = [...new Set(docRefs.map(d => d.link))];
console.log('Unique document links in pages.json:', uniqueLinks.length);
