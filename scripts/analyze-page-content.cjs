const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'pages.json'), 'utf8'));

// Check what each route has in pages.json
const report = pages.map(p => {
  const sections = p.sections || [];
  let text = (p.title || '') + ' ' + (p.h1 || '') + ' ' + (p.hero || '') + ' ';
  sections.forEach(s => {
    text += (s.heading || '') + ' ';
    (s.body || []).forEach(b => {
      text += (b.p || '') + ' ' + (b.li || '') + ' ';
    });
  });
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return {
    url: p.url,
    title: p.title || p.seoTitle,
    h1: p.h1,
    sections: sections.length,
    wordCount,
    links: (p.links || []).length
  };
});

report.sort((a, b) => a.url.localeCompare(b.url));
console.table(report);
