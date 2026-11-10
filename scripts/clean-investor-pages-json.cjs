const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '..', 'src', 'content', 'pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

// 1. Clean /investors/stock-exchange-disclosures
const sedPage = pages.find(p => p.url === '/investors/stock-exchange-disclosures');
if (sedPage && sedPage.sections && sedPage.sections[0] && sedPage.sections[0].body) {
  const originalBody = sedPage.sections[0].body;
  console.log('Original stock-exchange-disclosures body items count:', originalBody.length);
  
  // Filter out the 13 duplicate KCT_Intimation-of-BM_Kalyani_-*.pdf entries, keeping 1 canonical entry
  const newBody = [];
  let canonicalAdded = false;
  
  for (const item of originalBody) {
    if (item.p && item.p.includes('KCT_Intimation-of-BM_Kalyani_')) {
      if (!canonicalAdded) {
        newBody.push({
          p: "📢 Stock Exchange Disclosure — Prior Intimation of Board Meeting under Regulation 29 (BSE SME Scrip Code: 544023): [Download PDF](/documents/investors/KCT_Intimation-of-BM_Kalyani_.pdf) (444.9 KB)"
        });
        canonicalAdded = true;
      }
      // Skip the rest of the 13 duplicates
    } else {
      newBody.push(item);
    }
  }
  
  console.log('Cleaned stock-exchange-disclosures body items count:', newBody.length);
  sedPage.sections[0].body = newBody;
}

// Write back formatted JSON
fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log('Successfully updated pages.json');

