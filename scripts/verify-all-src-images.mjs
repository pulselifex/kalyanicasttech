import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.join(process.cwd(), 'src');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function scanFiles(dir, exts = ['.ts', '.tsx'], fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanFiles(full, exts, fileList);
    } else if (exts.includes(path.extname(entry.name))) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = scanFiles(SRC_DIR);
// Match strings starting with /(assets|images|documents)/ until closing quote matching opening quote
const missing = [];
const verified = new Set();

for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  // Match either double quote or single quote or backtick
  const regex = /(["'`])(\/(assets|images|documents)\/[^"'`\n\r]+?)\1/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    const rel = match[2];
    const full = path.join(PUBLIC_DIR, rel);
    if (!fs.existsSync(full)) {
      missing.push({ file: path.relative(process.cwd(), file), rel });
    } else {
      verified.add(rel);
    }
  }
}

console.log('=== FULL SRC/ IMAGE & DOCUMENT LINK AUDIT ===');
console.log(`Audited ${files.length} source files.`);
console.log(`Verified unique public assets: ${verified.size}`);
console.log(`Broken links: ${missing.length}`);

if (missing.length > 0) {
  console.log('BROKEN LINKS FOUND:');
  console.table(missing);
  process.exit(1);
} else {
  console.log('SUCCESS: ZERO broken image/document links found across src/!');
}
