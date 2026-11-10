const fs = require("fs");
const path = require("path");
const http = require("http");
const crypto = require("crypto");

const pages = JSON.parse(fs.readFileSync("src/content/pages.json", "utf8"));

// Extract all PDF links with context
const pdfRecords = [];

pages.forEach((page) => {
  const jsonStr = JSON.stringify(page);
  // Match links or tables or body items referencing .pdf
  if (page.sections) {
    page.sections.forEach((sec) => {
      // Check tables
      if (sec.table && sec.table.rows) {
        sec.table.rows.forEach((row) => {
          const rowStr = JSON.stringify(row);
          const pdfMatch = rowStr.match(/\/documents\/[^"]+\.pdf/i);
          if (pdfMatch) {
            pdfRecords.push({
              pageName: page.name,
              pageUrl: page.url,
              sectionHeading: sec.heading,
              title: row[0] || row[1] || "Document",
              datePeriod: row[1] || row[2] || "",
              pdfPath: pdfMatch[0],
            });
          }
        });
      }
      // Check body paragraphs
      if (sec.body) {
        sec.body.forEach((b) => {
          const bStr = JSON.stringify(b);
          const pdfMatch = bStr.match(/\/documents\/[^"]+\.pdf/i);
          if (pdfMatch) {
            pdfRecords.push({
              pageName: page.name,
              pageUrl: page.url,
              sectionHeading: sec.heading,
              title: b.label || sec.heading || "Document",
              datePeriod: "",
              pdfPath: pdfMatch[0],
            });
          }
        });
      }
    });
  }
  if (page.links) {
    page.links.forEach((l) => {
      if (l.to && l.to.toLowerCase().endsWith(".pdf")) {
        pdfRecords.push({
          pageName: page.name,
          pageUrl: page.url,
          sectionHeading: "Page Quick Links",
          title: l.label,
          datePeriod: "",
          pdfPath: l.to,
        });
      }
    });
  }
});

console.log("Total PDF links found in pages.json:", pdfRecords.length);

// Also scan physical files in public/documents
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getFiles(fullPath, files);
    } else if (entry.name.toLowerCase().endsWith(".pdf")) {
      files.push(fullPath);
    }
  }
  return files;
}

const physicalPdfs = getFiles(path.join(process.cwd(), "public", "documents"));
console.log("Total physical PDF files in public/documents/:", physicalPdfs.length);

const hashes = {};
physicalPdfs.forEach((p) => {
  const buf = fs.readFileSync(p);
  const hash = crypto.createHash("sha256").update(buf).digest("hex");
  const rel = "/" + path.relative(path.join(process.cwd(), "public"), p).replace(/\\/g, "/");
  hashes[rel] = { size: buf.length, hash, isPdfHeader: buf.slice(0, 4).toString() === "%PDF" };
});

console.log("Unique physical PDFs indexed with SHA-256:", Object.keys(hashes).length);

// Output sample
if (pdfRecords.length > 0) {
  console.log("First record sample:", pdfRecords[0]);
}
