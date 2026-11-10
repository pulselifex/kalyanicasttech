const fs = require('fs');
const path = require('path');

const certDir = path.resolve(__dirname, '../../07_Certificates');

function extractPdfStrings(filename) {
  const full = path.join(certDir, filename);
  if (!fs.existsSync(full)) {
    console.log(`[NOT FOUND] ${filename}`);
    return;
  }
  const buf = fs.readFileSync(full);
  const str = buf.toString('latin1');
  console.log(`=== ${filename} (${(buf.length/1024).toFixed(1)} KB) ===`);
  
  // Search for certificate numbers, dates, holder names, validity
  const terms = ['certificate', 'valid', 'expiry', 'lr', 'qacs', 'irs', 'iso', 'kalyani', 'rewari', 'mamaria', 'date', 'scope', 'steel'];
  const lines = str.split('\n');
  const matched = [];
  for (const l of lines) {
    const clean = l.replace(/[^\x20-\x7E]/g, ' ').trim();
    if (clean.length > 5 && clean.length < 200) {
      const lower = clean.toLowerCase();
      if (terms.some(t => lower.includes(t))) {
        matched.push(clean);
      }
    }
  }
  console.log(`Matched ${matched.length} lines:`);
  matched.slice(0, 20).forEach(m => console.log('  ', m));
}

extractPdfStrings('LRS Cert 24-27.pdf');
extractPdfStrings('LR-1 Foundary approval 21-24.pdf');
extractPdfStrings('QACS CERTIFICATE.pdf');
extractPdfStrings('KALYANI CAST 14001.pdf');
extractPdfStrings('IRS Certificate of Capacity.pdf');

