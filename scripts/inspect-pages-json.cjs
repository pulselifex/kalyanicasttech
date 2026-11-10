const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '..', 'src', 'content', 'pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

console.log(`Total pages in pages.json: ${pages.length}`);

pages.forEach((p, idx) => {
  const sectionsCount = p.sections ? p.sections.length : 0;
  const bodyItemsCount = p.sections ? p.sections.reduce((acc, s) => acc + (s.body ? s.body.length : 0), 0) : 0;
  const hasMeta = !!p.meta;
  const hasSeoTitle = !!p.seoTitle;
  console.log(
    `${idx + 1}`.padStart(3),
    p.url.padEnd(55),
    `sections: ${sectionsCount}`,
    `bodyItems: ${bodyItemsCount}`,
    `title: "${(p.seoTitle || p.title || '').slice(0, 30)}..."`,
    hasMeta ? '[META]' : '[NO_META]'
  );
});
