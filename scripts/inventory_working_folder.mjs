import fs from 'node:fs';
import path from 'node:path';

function getImageDimensions(buffer) {
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buffer.length > 24 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height, type: 'PNG' };
  }

  // GIF: GIF87a or GIF89a
  if (buffer.length > 10 && buffer.toString('ascii', 0, 3) === 'GIF') {
    const width = buffer.readUInt16LE(6);
    const height = buffer.readUInt16LE(8);
    return { width, height, type: 'GIF' };
  }

  // WebP
  if (buffer.length > 30 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    const type = buffer.toString('ascii', 12, 16);
    if (type === 'VP8 ') {
      const width = buffer.readUInt16LE(26) & 0x3fff;
      const height = buffer.readUInt16LE(28) & 0x3fff;
      return { width, height, type: 'WebP (VP8)' };
    } else if (type === 'VP8L') {
      const b0 = buffer[21];
      const b1 = buffer[22];
      const b2 = buffer[23];
      const b3 = buffer[24];
      const width = 1 + (((b1 & 0x3f) << 8) | b0);
      const height = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return { width, height, type: 'WebP (VP8L)' };
    } else if (type === 'VP8X') {
      const width = 1 + buffer.readUIntLE(24, 3);
      const height = 1 + buffer.readUIntLE(27, 3);
      return { width, height, type: 'WebP (VP8X)' };
    }
  }

  // JPEG
  if (buffer.length > 4 && buffer[0] === 0xFF && buffer[1] === 0xD8) {
    let offset = 2;
    while (offset < buffer.length - 8) {
      if (buffer[offset] !== 0xFF) {
        offset++;
        continue;
      }
      while (offset < buffer.length && buffer[offset] === 0xFF) {
        offset++;
      }
      if (offset >= buffer.length) break;
      const marker = buffer[offset];
      offset++;

      // Standalone markers
      if (marker === 0xD9 || marker === 0xDA) break; // EOI or SOS
      if (marker >= 0xD0 && marker <= 0xD7) continue; // RST
      if (marker === 0x01) continue; // TEM

      if (offset + 2 > buffer.length) break;
      const length = buffer.readUInt16BE(offset);

      // SOF markers
      if (
        (marker >= 0xC0 && marker <= 0xC3) ||
        (marker >= 0xC5 && marker <= 0xC7) ||
        (marker >= 0xC9 && marker <= 0xCB) ||
        (marker >= 0xCD && marker <= 0xCF)
      ) {
        if (offset + 7 <= buffer.length) {
          const height = buffer.readUInt16BE(offset + 3);
          const width = buffer.readUInt16BE(offset + 5);
          return { width, height, type: `JPEG (0x${marker.toString(16)})` };
        }
      }

      offset += length;
    }
  }

  return { width: null, height: null, type: 'Unknown' };
}

function scanDir(dir, baseDir = dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath, baseDir, results);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      const stats = fs.statSync(fullPath);
      let dims = { width: null, height: null, type: 'non-image' };
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.jfif', '.bmp'].includes(ext)) {
        try {
          const readSize = Math.min(stats.size, 512 * 1024); // read up to 512KB for headers
          const fd = fs.openSync(fullPath, 'r');
          const buf = Buffer.alloc(readSize);
          fs.readSync(fd, buf, 0, buf.length, 0);
          fs.closeSync(fd);
          dims = getImageDimensions(buf);
          if (!dims.width && stats.size > readSize) {
            // try reading full buffer if still null
            const fullBuf = fs.readFileSync(fullPath);
            dims = getImageDimensions(fullBuf);
          }
        } catch (e) {
          dims = { width: null, height: null, type: 'err: ' + e.message };
        }
      }
      results.push({
        name: entry.name,
        fullPath,
        relPath: path.relative(baseDir, fullPath),
        folder: path.basename(path.dirname(fullPath)),
        ext,
        sizeBytes: stats.size,
        sizeKB: (stats.size / 1024).toFixed(1),
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
        width: dims.width,
        height: dims.height,
        imgType: dims.type,
      });
    }
  }
  return results;
}

const targetDir = 'D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Kalyani Website\\Website Content n Working';
const files = scanDir(targetDir);

fs.writeFileSync('working_folder_inventory.json', JSON.stringify(files, null, 2));

console.log('\n--- COMPLETE INVENTORY OF ALL IMAGES IN WEBSITE CONTENT N WORKING ---');
const images = files.filter(f => ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.jfif', '.bmp'].includes(f.ext));
console.log(`Total images: ${images.length}\n`);

const table = images.map((img, i) => ({
  '#': i + 1,
  Folder: img.folder,
  Filename: img.name,
  'Dimensions (WxH)': `${img.width}x${img.height}`,
  Size: `${img.sizeKB} KB (${img.sizeMB} MB)`,
}));

console.table(table);
