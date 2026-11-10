const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function extractPdfMetadataAndText(filePath) {
  const buf = fs.readFileSync(filePath);
  const size = buf.length;
  
  // Extract info dictionary if present
  let info = {};
  const infoMatch = buf.toString('latin1').match(/\/Title\s*\(([^\)]+)\)/i);
  if (infoMatch) info.title = infoMatch[1];
  
  // Search text streams
  const textSnippets = [];
  let pos = 0;
  while (pos < buf.length && textSnippets.length < 15) {
    const streamStart = buf.indexOf('stream', pos);
    if (streamStart === -1) break;
    let dataStart = streamStart + 6;
    if (buf[dataStart] === 0x0d && buf[dataStart + 1] === 0x0a) dataStart += 2;
    else if (buf[dataStart] === 0x0a || buf[dataStart] === 0x0d) dataStart += 1;
    
    const streamEnd = buf.indexOf('endstream', dataStart);
    if (streamEnd === -1) break;
    
    const streamBuf = buf.slice(dataStart, streamEnd);
    let decompressed;
    try {
      decompressed = zlib.inflateSync(streamBuf);
      const str = decompressed.toString('latin1');
      const matches = str.match(/\(([^\)]{4,})\)\s*T[jJ]/g);
      if (matches) {
        matches.forEach(m => {
          const t = m.replace(/^\(/, '').replace(/\)\s*T[jJ]$/, '').trim();
          if (t.length > 3 && !t.includes('Font') && !t.includes('ProcSet')) {
            textSnippets.push(t);
          }
        });
      }
    } catch (e) {}
    pos = streamEnd + 9;
  }
  
  return {
    size,
    title: info.title,
    snippet: textSnippets.slice(0, 8).join(' | ').replace(/\s+/g, ' ')
  };
}

const docs05Dir = path.resolve(__dirname, '../../05_Documents');

function walk(dir, list = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, list);
    else list.push(full);
  }
  return list;
}

const allFiles = walk(docs05Dir);
console.log('Inspecting 05_Documents (' + allFiles.length + ' files):');
allFiles.forEach(full => {
  const rel = path.relative(docs05Dir, full).replace(/\\/g, '/');
  const meta = extractPdfMetadataAndText(full);
  console.log(`\n--- ${rel} (${meta.size} bytes) ---`);
  if (meta.title) console.log(`  PDF Title: ${meta.title}`);
  console.log(`  Snippet: ${meta.snippet.slice(0, 200)}`);
});
