const fs = require("fs");
const path = require("path");

function getDimensions(buf) {
  // Simple JPEG / PNG dimension reader
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    // PNG: width at 16..19, height at 20..23
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { width, height, format: "PNG" };
  } else if (buf[0] === 0xff && buf[1] === 0xd8) {
    // JPEG: search for SOF0/SOF2 marker (0xFF, 0xC0..0xC3)
    let offset = 2;
    while (offset < buf.length) {
      if (buf[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buf[offset + 1];
      if (
        (marker >= 0xc0 && marker <= 0xc3) ||
        (marker >= 0xc5 && marker <= 0xc7) ||
        (marker >= 0xc9 && marker <= 0xcb) ||
        (marker >= 0xcd && marker <= 0xcf)
      ) {
        const height = buf.readUInt16BE(offset + 5);
        const width = buf.readUInt16BE(offset + 7);
        return { width, height, format: "JPEG" };
      }
      const len = buf.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  }
  return { width: 0, height: 0, format: "UNKNOWN" };
}

const outDir = path.join("public", "images", "legacy-site");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const uploadsBase =
  "D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Website Backup\\kalyanicasttech.com\\kalyanicasttech.com\\wp-content\\uploads";

const targetImages = [
  {
    fn: "Main-slider-1920x1100-1.jpg",
    sub: "2020/05",
    existingPage: "Homepage",
    intendedPage: "/",
    intendedUse: "Homepage Hero Banner",
    crop: "16:9 or 21:9",
    quality:
      "High Resolution (1920x1100), sharp authentic double stack dwarf container rake on electrified track",
    notes: "Primary hero image demonstrating core positioning",
  },
  {
    fn: "our-manufacturing-facilities.jpg",
    sub: "2020/04",
    altSub: "2020/05",
    existingPage: "/manufacturing-facilities/",
    intendedPage: "/manufacturing",
    intendedUse: "Manufacturing Section Banner",
    crop: "16:9",
    quality: "High Resolution, authentic factory heavy fabrication bay",
    notes: "Direct evidence of in-house manufacturing infrastructure",
  },
  {
    fn: "kalyan-cast-tech-building.jpg",
    sub: "2020/05",
    existingPage: "/about/",
    intendedPage: "/company",
    intendedUse: "Company Overview Corporate Facade",
    crop: "4:3",
    quality: "Authentic exterior corporate building photograph",
    notes: "Rewari administrative and manufacturing complex",
  },
  {
    fn: "about-r.jpg",
    sub: "2020/04",
    existingPage: "/about/",
    intendedPage: "/company/our-journey",
    intendedUse: "Our Journey Timeline Banner",
    crop: "16:9",
    quality: "High Resolution (1024x587), historical engineering review",
    notes: "Used across legacy corporate pages",
  },
  {
    fn: "Containers-dwarf.jpg",
    sub: "2020/05",
    existingPage: "/products/",
    intendedPage: "/containers-solutions/specialised-containers",
    intendedUse: "Specialised Containers Showcase Banner",
    crop: "16:9",
    quality: "Original yard photograph of manufactured Dwarf Containers",
    notes: "Authentic product demonstration",
  },
  {
    fn: "corner-castings-for-containers.png",
    sub: "2020/04",
    existingPage: "/products/",
    intendedPage: "/manufacturing/container-manufacturing",
    intendedUse: "Foundry Component Visual",
    crop: "1:1",
    quality: "Clean isolated product photography of ISO corner castings",
    notes: "Matches Lloyd's Register approval scope",
  },
  {
    fn: "CI-brake-blocks.png",
    sub: "2020/04",
    existingPage: "/products/",
    intendedPage: "/containers-solutions/rail-parcel-vehicle-cargo",
    intendedUse: "Railway Castings Showcase",
    crop: "1:1",
    quality: "Clean isolated railway brake block casting",
    notes: "High quality authentic foundry casting",
  },
  {
    fn: "bearing-housing-for-electrical-loco-DIN17182-material-1.png",
    sub: "2020/04",
    existingPage: "/products/",
    intendedPage: "/manufacturing/testing-quality",
    intendedUse: "Heavy Locomotive Casting Showcase",
    crop: "1:1",
    quality: "Precision machined loco bearing housing (DIN17182)",
    notes: "Heavy engineering credential",
  },
  {
    fn: "motor-hub-traction-motors.png",
    sub: "2020/04",
    existingPage: "/products/",
    intendedPage: "/manufacturing/design-engineering",
    intendedUse: "Traction Motor Hub Engineering Visual",
    crop: "1:1",
    quality: "Complex machined casting for traction motors",
    notes: "Authentic foundry product",
  },
  {
    fn: "adapter-for-WDG4-loco.png",
    sub: "2020/04",
    existingPage: "/products/",
    intendedPage: "/manufacturing",
    intendedUse: "Loco Adapter Component Card",
    crop: "1:1",
    quality: "Indian Railways WDG4 loco adapter",
    notes: "Railway mechanical supply proof",
  },
  {
    fn: "IMG_3574.jpg",
    sub: "2020/05",
    existingPage: "/gallery/",
    intendedPage: "/manufacturing/facilities-locations",
    intendedUse: "Factory Assembly Line Visual",
    crop: "4:3",
    quality: "Authentic high-res factory photo of container jigs and welding stations",
    notes: "Rewari works assembly bay",
  },
  {
    fn: "IMG_4707.jpg",
    sub: "2020/05",
    existingPage: "/gallery/",
    intendedPage: "/manufacturing/facilities-locations",
    intendedUse: "Factory Overhead Crane & Heavy Bays",
    crop: "4:3",
    quality: "Authentic heavy overhead gantry crane and fabrication bays",
    notes: "Rewari plant infrastructure",
  },
];

const csvRows = [
  "Asset ID,Existing Page,Existing Image URL,Original Filename,Local Filename,Dimensions,File Size (Bytes),Format,Source Resolution,Intended New Page,Intended Use,Crop/Aspect Ratio,Quality Assessment,Download Status,Notes",
];

let assetCounter = 1;

targetImages.forEach((item) => {
  let srcPath = path.join(uploadsBase, item.sub.replace(/\//g, "\\"), item.fn);
  if (!fs.existsSync(srcPath) && item.altSub) {
    srcPath = path.join(uploadsBase, item.altSub.replace(/\//g, "\\"), item.fn);
  }
  // Try searching for file if not found at specific sub
  if (!fs.existsSync(srcPath)) {
    // Search recursively
    const searchDirs = ["2020\\04", "2020\\05", "2021\\07", "2023\\11", "2024\\05"];
    for (const s of searchDirs) {
      const candidate = path.join(uploadsBase, s, item.fn);
      if (fs.existsSync(candidate)) {
        srcPath = candidate;
        break;
      }
    }
  }

  const assetId = `IMG-REC-${String(assetCounter++).padStart(3, "0")}`;
  const destPath = path.join(outDir, item.fn);

  if (fs.existsSync(destPath) || fs.existsSync(srcPath)) {
    if (!fs.existsSync(destPath) && fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
    const buf = fs.readFileSync(destPath);
    const stat = fs.statSync(destPath);
    const dim = getDimensions(buf);
    const dimStr = `${dim.width}x${dim.height}`;
    const origUrl = `https://kalyanicasttech.com/wp-content/uploads/${item.sub}/${item.fn}`;

    csvRows.push(
      `"${assetId}","${item.existingPage}","${origUrl}","${item.fn}","/images/legacy-site/${item.fn}","${dimStr}",${stat.size},"${dim.format}","${dimStr}","${item.intendedPage}","${item.intendedUse}","${item.crop}","${item.quality}","RECOVERED & COPIED","${item.notes}"`,
    );
    console.log(
      `Recovered ${item.fn} (${dimStr}, ${(stat.size / 1024).toFixed(1)} KB) -> ${item.intendedPage}`,
    );
  } else {
    csvRows.push(
      `"${assetId}","${item.existingPage}","${item.fn}","${item.fn}","NOT_FOUND","0x0",0,"UNKNOWN","N/A","${item.intendedPage}","${item.intendedUse}","${item.crop}","Source not found in backup","NOT_FOUND","Pending live crawl recovery"`,
    );
    console.warn(`File not found: ${item.fn}`);
  }
});

fs.writeFileSync(
  path.join("website_migration_audit", "recovered_image_inventory.csv"),
  csvRows.join("\n"),
  "utf8",
);
console.log("Successfully generated website_migration_audit/recovered_image_inventory.csv");
