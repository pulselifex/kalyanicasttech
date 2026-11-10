const fs = require('fs');
const path = require('path');

const PUBLIC_DOCS = path.resolve(__dirname, '../public/documents');

function scanDir(dir, list = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full, list);
    } else {
      list.push({
        path: path.relative(PUBLIC_DOCS, full).replace(/\\/g, '/'),
        size: stat.size,
        sizeKb: (stat.size / 1024).toFixed(1)
      });
    }
  }
  return list;
}

const allFiles = scanDir(PUBLIC_DOCS);
console.log(`Total files in public/documents/: ${allFiles.length}`);

// Group by top folder
const byFolder = {};
allFiles.forEach(f => {
  const folder = f.path.split('/')[0];
  byFolder[folder] = (byFolder[folder] || 0) + 1;
});
console.log('\nDistribution by folder:', byFolder);

// Check for any drafts or confidential files
const suspicious = allFiles.filter(f => /draft|confidential|internal|test|temp/i.test(f.path));
console.log(`\nFiles with draft/confidential/temp in name: ${suspicious.length}`);
suspicious.forEach(f => console.log(`  - ${f.path} (${f.sizeKb} KB)`));
