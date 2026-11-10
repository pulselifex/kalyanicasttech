const fs = require('fs');
const path = require('path');

const candidates = [
  'Statment-of-Deviation_31.09.2024.pdf',
  'Statment-of-Deviation_31.03.2025.pdf',
  'C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI-1.pdf',
  'FAMILIARISATION_PROGRAMME_FOR_INDEPENDENT_DIRECTORS-1.pdf',
  'RELATED-PARTY-TRANSACTION-1.pdf',
  'Latest-Brochure-1.pdf',
  'posts-report-2026-09-16T083806.476.pdf',
  'Kalyani_Cast_Tech_Institutional_Investor_Presentation_September_2026_MASTER_FINAL_TEXT_LOCKED.pptx',
  'Foundry-Approval-from-LR.pdf',
  'Foundry-Approval-from-LR-1.jpg',
  '7.1.jpg',
  'Picture1.jpg',
  'Master Content Document'
];

function searchSrc(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) searchSrc(full);
    else if (/\.(ts|tsx|json|html|cjs|mjs)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      candidates.forEach(c => {
        if (content.includes(c)) {
          console.log(`Found candidate '${c}' in ${path.relative('src', full)}`);
        }
      });
    }
  }
}

searchSrc('src');
console.log('Search complete.');

