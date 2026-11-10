const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (/\.(tsx?|json)$/.test(f)) files.push(full);
  });
  return files;
}

const srcFiles = walk('src');
const imgRegex = /["'](\/(?:assets|images|documents)\/[^"']+\.(?:png|jpe?g|webp|svg|gif|pdf|pptx))["']/gi;

const missing = [];
const found = new Set();
const checked = [];

srcFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    const url = m[1];
    const relative = url.startsWith('/') ? url.slice(1) : url;
    const diskPath = path.resolve('public', relative);
    checked.push({ file: f.replace(/\\/g, '/'), url });
    if (!fs.existsSync(diskPath)) {
      missing.push({ file: f.replace(/\\/g, '/'), url, diskPath });
    } else {
      found.add(url);
    }
  }
});

console.log(`Total image/doc references scanned in src: ${checked.length}`);
console.log(`Unique existing assets referenced: ${found.size}`);
console.log(`Missing asset references: ${missing.length}`);

if (missing.length > 0) {
  console.log('\n=== LIST OF MISSING ASSETS IN SRC ===');
  missing.forEach(m => console.log(`  ${m.file}: ${m.url}`));
} else {
  console.log('\nAll asset references in src resolve 100% on disk!');
}

