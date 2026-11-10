const fs = require('fs');
const path = require('path');

function extractJpegs(pdfPath, outPrefix) {
  const buf = fs.readFileSync(pdfPath);
  let pos = 0;
  let imgIdx = 0;
  const extracted = [];
  
  while (pos < buf.length) {
    // Look for JPEG start of image marker 0xFF 0xD8 0xFF
    const soi = buf.indexOf(Buffer.from([0xff, 0xd8, 0xff]), pos);
    if (soi === -1) break;
    
    // Look for JPEG end of image marker 0xFF 0xD9
    const eoi = buf.indexOf(Buffer.from([0xff, 0xd9]), soi + 2);
    if (eoi === -1) break;
    
    const jpegBuf = buf.slice(soi, eoi + 2);
    // Filter out tiny thumbnails (< 10 KB)
    if (jpegBuf.length > 20000) {
      imgIdx++;
      const outPath = `${outPrefix}_img_${imgIdx}.jpg`;
      fs.writeFileSync(outPath, jpegBuf);
      extracted.push({ outPath, size: jpegBuf.length });
    }
    pos = eoi + 2;
  }
  return extracted;
}

const certsDir = path.resolve(__dirname, '../../07_Certificates');
const qacsPdf = path.join(certsDir, 'QACS CERTIFICATE.pdf');
const iso14001Pdf = path.join(certsDir, 'KALYANI CAST 14001.pdf');
const targetDir = path.resolve(__dirname, '../public/documents/approvals');

console.log('Extracting from QACS CERTIFICATE.pdf...');
const qacsImgs = extractJpegs(qacsPdf, path.join(targetDir, 'qacs_extracted'));
console.log('QACS extracted:', qacsImgs);

console.log('Extracting from KALYANI CAST 14001.pdf...');
const iso14001Imgs = extractJpegs(iso14001Pdf, path.join(targetDir, 'iso14001_extracted'));
console.log('ISO 14001 extracted:', iso14001Imgs);
