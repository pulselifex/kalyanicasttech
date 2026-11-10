const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function extractTextFromPdf(pdfPath) {
  const buffer = fs.readFileSync(pdfPath);
  const textChunks = [];
  
  // Search for stream ... endstream
  let pos = 0;
  while (pos < buffer.length) {
    const streamStart = buffer.indexOf('stream', pos);
    if (streamStart === -1) break;
    
    // Check newline after stream
    let dataStart = streamStart + 6;
    if (buffer[dataStart] === 0x0d && buffer[dataStart + 1] === 0x0a) {
      dataStart += 2;
    } else if (buffer[dataStart] === 0x0a || buffer[dataStart] === 0x0d) {
      dataStart += 1;
    }
    
    const streamEnd = buffer.indexOf('endstream', dataStart);
    if (streamEnd === -1) break;
    
    const streamBuf = buffer.slice(dataStart, streamEnd);
    let decompressed;
    try {
      decompressed = zlib.inflateSync(streamBuf);
    } catch (e) {
      // not compressed or not raw zlib
      decompressed = streamBuf;
    }
    
    // Look for text in decompressed buffer: (text) Tj or [(text)] TJ
    const str = decompressed.toString('latin1');
    const matches = str.match(/\(([^\)]+)\)\s*T[jJ]/g);
    if (matches) {
      matches.forEach(m => {
        const t = m.replace(/^\(/, '').replace(/\)\s*T[jJ]$/, '');
        textChunks.push(t);
      });
    } else {
      // Look for plain strings
      const plainMatches = str.match(/[A-Z0-9\s\,\.\-\:\/]{5,}/gi);
      if (plainMatches) {
        // filter out PS keywords
        const good = plainMatches.filter(p => !p.includes('obj') && !p.includes('endobj') && p.trim().length > 10);
        if (good.length > 0) {
          textChunks.push(...good.slice(0, 5));
        }
      }
    }
    
    pos = streamEnd + 9;
  }
  
  return textChunks.join(' ').replace(/\s+/g, ' ').trim().slice(0, 500);
}

const certsDir = path.resolve(__dirname, '../../07_Certificates');
const files = fs.readdirSync(certsDir);
console.log('=== 07_Certificates Inspection ===');
for (const file of files) {
  const full = path.join(certsDir, file);
  const stat = fs.statSync(full);
  if (file.endsWith('.pdf')) {
    const preview = extractTextFromPdf(full);
    console.log(`\nFile: ${file} (${stat.size} bytes)`);
    console.log(`Text snippet: ${preview.slice(0, 300)}`);
  } else {
    console.log(`\nImage File: ${file} (${stat.size} bytes)`);
  }
}
