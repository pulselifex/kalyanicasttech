import fs from 'node:fs';
import path from 'node:path';

const content = fs.readFileSync('src/content/route-assets.ts', 'utf8');

// Match src: "..." or src: '...' properly
const regex = /src:\s*("([^"]+)"|'([^']+)')/g;
let match;
const missing = [];
const found = [];

while ((match = regex.exec(content)) !== null) {
  const rel = match[2] || match[3];
  const full = path.join(process.cwd(), 'public', rel);
  if (!fs.existsSync(full)) {
    missing.push(rel);
  } else {
    found.push({ rel, size: (fs.statSync(full).size / 1024).toFixed(1) + ' KB' });
  }
}

console.log('=== ROUTE ASSETS VERIFICATION ===');
console.log(`Found: ${found.length} valid assets`);
console.log(`Missing: ${missing.length}`);
if (missing.length > 0) {
  console.log('MISSING ASSETS:');
  console.log(missing);
} else {
  console.log('ALL image paths in route-assets.ts resolve to valid existing files on disk!');
}
