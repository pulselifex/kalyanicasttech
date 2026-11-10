const fs = require('fs');
const path = require('path');

function checkFile(relPath) {
  const content = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8');
  const links = [...content.matchAll(/to=(['"])(.*?)\1/g)].map(m => m[2]);
  const hrefs = [...content.matchAll(/href=(['"])(.*?)\1/g)].map(m => m[2]).filter(h => h.startsWith('/'));
  return [...new Set([...links, ...hrefs])];
}

console.log('investor-relations.tsx links:', checkFile('src/routes/investor-relations.tsx'));
console.log('resources.index.tsx links:', checkFile('src/routes/resources.index.tsx'));
console.log('shivlakha-rail-logistics.index.tsx links:', checkFile('src/routes/shivlakha-rail-logistics.index.tsx'));
