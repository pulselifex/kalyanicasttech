const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/components/site/HomeHeroCarousel.tsx', 'utf8');
const regex = /src:\s*"([^"]+)"/g;
let m;
let missing = 0;
let total = 0;
while ((m = regex.exec(content)) !== null) {
  total++;
  const relativePath = m[1].startsWith('/') ? m[1].slice(1) : m[1];
  const diskPath = path.resolve('public', relativePath);
  if (!fs.existsSync(diskPath)) {
    console.log(`[${total}] MISSING: ${m[1]} -> ${diskPath}`);
    missing++;
  } else {
    const stat = fs.statSync(diskPath);
    console.log(`[${total}] Exists: ${m[1]} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}
console.log(`\nTotal slides checked: ${total}, Missing: ${missing}`);
