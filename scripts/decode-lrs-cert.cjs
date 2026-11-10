const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const buf = fs.readFileSync(path.resolve(__dirname, '../../07_Certificates/LRS Cert 24-27.pdf'));

// 1. Collect all ToUnicode maps
const cmaps = [];
let pos = 0;
const streams = [];

while (pos < buf.length) {
  const start = buf.indexOf('stream', pos);
  if (start === -1) break;
  let dStart = start + 6;
  if (buf[dStart] === 0x0d && buf[dStart+1] === 0x0a) dStart += 2;
  else if (buf[dStart] === 0x0a || buf[dStart] === 0x0d) dStart += 1;
  const end = buf.indexOf('endstream', dStart);
  if (end === -1) break;
  try {
    const unz = zlib.inflateSync(buf.slice(dStart, end));
    streams.push(unz);
    const str = unz.toString('latin1');
    if (str.includes('/CIDInit') || str.includes('beginbfchar')) {
      const map = {};
      const lines = str.split('\n');
      for (const l of lines) {
        const m = l.match(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/);
        if (m) {
          const src = parseInt(m[1], 16);
          const dst = String.fromCharCode(parseInt(m[2], 16));
          map[src] = dst;
        }
      }
      cmaps.push(map);
    }
  } catch(e) {}
  pos = end + 9;
}

console.log('Collected ' + cmaps.length + ' CMaps and ' + streams.length + ' streams.');

// Combine CMaps into one lookup
const unifiedCMap = Object.assign({}, ...cmaps);

// Now decode hex text in content streams
for (const s of streams) {
  const str = s.toString('latin1');
  if (str.includes('BT') && str.includes('ET')) {
    let decoded = '';
    const hexMatches = str.match(/<([0-9a-fA-F]+)>\s*T[jJ]|\[([^\]]+)\]\s*TJ/g);
    if (hexMatches) {
      for (const hm of hexMatches) {
        const innerHexes = hm.match(/<([0-9a-fA-F]+)>/g) || [];
        for (const ih of innerHexes) {
          const hex = ih.replace(/[<>]/g, '');
          for (let i = 0; i < hex.length; i += 4) {
            const code = parseInt(hex.slice(i, i + 4), 16);
            decoded += unifiedCMap[code] || ' ';
          }
        }
        decoded += ' ';
      }
      console.log('Decoded content:');
      console.log(decoded.replace(/\s+/g, ' ').trim());
    }
  }
}

