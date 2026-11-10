const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

// 1. Check all files in public/documents/investors
const invDir = path.join('public', 'documents', 'investors');
function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  });
  return files;
}

const allInvFiles = walk(invDir);
const hashMap = {};
allInvFiles.forEach(f => {
  const h = sha256(f);
  if (!hashMap[h]) hashMap[h] = [];
  hashMap[h].push(f.replace(/\\/g, '/'));
});

console.log('=== DUPLICATE SHA-256 HASHES IN public/documents/investors ===');
for (const [h, fileList] of Object.entries(hashMap)) {
  if (fileList.length > 1) {
    console.log(`\nHash ${h.slice(0, 10)} (${fileList.length} files, size ${fs.statSync(fileList[0]).size} bytes):`);
    fileList.forEach(f => console.log('  ' + f));
  }
}

