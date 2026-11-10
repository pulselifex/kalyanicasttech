const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (/\.(tsx?|json|html)$/.test(f)) files.push(full);
  });
  return files;
}

const srcFiles = walk('src');

function searchPatterns(patterns) {
  const matches = {};
  patterns.forEach(p => matches[p] = []);
  
  srcFiles.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      patterns.forEach(p => {
        if (typeof p === 'string' ? line.includes(p) : p.test(line)) {
          matches[p].push({ file: f.replace(/\\/g, '/'), line: i + 1, text: line.trim() });
        }
      });
    });
  });
  return matches;
}

const patterns = [
  'Gati Shakti Cargo Terminal',
  'Inland Container Depot',
  'admin/utilities',
  'Admin, utilities',
  'admin and utilities',
  'administration and utilities',
  'Administration & Utilities',
  'Administration, utilities',
  'Administration, Utilities',
  'CBIC Approval Received',
  'CBIC',
  'RDSO Stage-I Approval for New Wagon Design',
  'RDSO Stage-I',
  'KMT Engineering'
];

const res = searchPatterns(patterns);
for (const [p, list] of Object.entries(res)) {
  console.log(`\n=== Pattern: "${p}" (${list.length} matches) ===`);
  list.slice(0, 10).forEach(m => console.log(`  ${m.file}:${m.line} - ${m.text.slice(0, 120)}`));
}

