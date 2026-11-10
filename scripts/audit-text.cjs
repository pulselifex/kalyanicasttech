const fs = require('fs');
const path = require('path');

const phrases = [
  'Development Stage',
  'Internal Review',
  'Verification Tag',
  'Visual Trust',
  'Proof of Work',
  'Sensor Check',
  'Performance Sensor',
  'Simulated Metrics',
  'Technical Qualification Desk',
  'Quick Commercial Qualification Desk',
  'Master Content Document',
  'Working Version',
  'Draft Content',
  'Temporary Section',
  'Placeholder Content',
  'Sample Data',
  'Test Data',
  'Grade A+',
  'Implementation Status',
  'Under Review',
  'Documentation Update',
  'Verified Metadata',
  'Verification Doc',
  'Commercial Request Transmit',
  'Prototype Dashboard',
  'Interactive Engineering Selector',
  'Guaranteed same-business-day',
  'Statutory Approvals',
  'Visual Trust & Approvals Gallery',
  'Zero Empty-Container Repositioning',
  'Zero Empty Runs',
  'Guaranteed railway savings',
  'Universal rail haulage savings',
  'Guaranteed full-rake efficiency',
  '0 km Haul',
  'without splitting rakes',
  '45 wagons single placement capacity',
  'IRS · Lloyd',
  'Documentation is being updated'
];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '..', 'src'));
const found = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  phrases.forEach(p => {
    const regex = new RegExp(p, 'gi');
    let m;
    while ((m = regex.exec(c)) !== null) {
      const idx = m.index;
      const snippet = c.substring(Math.max(0, idx - 40), Math.min(c.length, idx + p.length + 40)).replace(/\r?\n/g, ' ');
      found.push({ file: path.relative(path.join(__dirname, '..'), f), phrase: p, snippet });
    }
  });
});

console.log(`Found ${found.length} matches:`);
found.forEach(item => {
  console.log(`- [${item.file}] "${item.phrase}": ${item.snippet}`);
});

