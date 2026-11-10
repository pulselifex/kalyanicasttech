const fs = require('fs');
const path = require('path');
const pages = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/content/pages.json'), 'utf8'));

const keys = ['25', '28', '29', '30', '31', '32', '34'];
keys.forEach(k => {
  const p = pages[k];
  console.log(`Page key: ${k} | name: ${p.name} | url: ${p.url} | title: ${p.title || p.h1}`);
});
