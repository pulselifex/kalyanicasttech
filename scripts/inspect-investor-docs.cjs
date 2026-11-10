const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/site/InvestorDocumentLibrary.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Extract APPROVED_INVESTOR_DOCS array
const startIdx = content.indexOf('export const APPROVED_INVESTOR_DOCS: InvestorDoc[] = [');
const endIdx = content.indexOf('];', startIdx);
const arrayContent = content.substring(startIdx, endIdx + 2);

// Evaluate or parse items
const docRegex = /{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*period:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*fy:\s*"([^"]+)",\s*format:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*officialDoc:\s*(true|false),?\s*}/g;

let match;
const docs = [];
while ((match = docRegex.exec(content)) !== null) {
  docs.push({
    id: match[1],
    title: match[2],
    category: match[3],
    period: match[4],
    date: match[5],
    fy: match[6],
    format: match[7],
    size: match[8],
    url: match[9],
    desc: match[10],
    officialDoc: match[11] === 'true'
  });
}

console.log(`Found ${docs.length} investor documents in InvestorDocumentLibrary.tsx:`);
docs.forEach((d, i) => {
  const disk = path.join(__dirname, '../public', d.url.replace(/^\//, ''));
  const exists = fs.existsSync(disk);
  console.log(`${i+1}. [${d.category}] ${d.title}`);
  console.log(`   Period: ${d.period} | Date: ${d.date} | FY: ${d.fy}`);
  console.log(`   URL: ${d.url} (Exists: ${exists ? 'YES' : 'NO'})`);
});
