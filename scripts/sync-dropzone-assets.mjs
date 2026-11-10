import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const WORKING_DIR = 'D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Kalyani Website\\Website Content n Working';

console.log('=== KALYANI CAST TECH — ASSET SYNC & OPTIMIZATION PIPELINE ===');
console.log('Source Master:', WORKING_DIR);
console.log('Target Public:', PUBLIC_DIR);

if (!fs.existsSync(WORKING_DIR)) {
  console.error('ERROR: Master working directory does not exist:', WORKING_DIR);
  process.exit(1);
}

// Ensure target directories exist
const targetDirs = [
  path.join(PUBLIC_DIR, 'assets', 'manufacturing'),
  path.join(PUBLIC_DIR, 'assets', 'containers'),
  path.join(PUBLIC_DIR, 'assets', 'shivlakha'),
  path.join(PUBLIC_DIR, 'assets', 'company'),
  path.join(PUBLIC_DIR, 'assets', 'leadership'),
  path.join(PUBLIC_DIR, 'assets', 'rail'),
  path.join(PUBLIC_DIR, 'assets', 'castings'),
  path.join(PUBLIC_DIR, 'images', 'leadership'),
  path.join(PUBLIC_DIR, 'documents', 'approvals'),
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function optimizeAndSave(srcPath, destPath, options = {}) {
  const { maxEdge = 2560, targetMaxKB = 450, isHero = false } = options;
  const ext = path.extname(srcPath).toLowerCase();
  const stat = fs.statSync(srcPath);

  // If already under 300KB and reasonable size, we can copy directly if requested
  // but if it's camera raw (>1MB), we resize & compress
  if (stat.size <= targetMaxKB * 1024 && !options.forceResize) {
    fs.copyFileSync(srcPath, destPath);
    const destStat = fs.statSync(destPath);
    return {
      status: 'copied',
      origKB: Math.round(stat.size / 1024),
      newKB: Math.round(destStat.size / 1024),
    };
  }

  const image = sharp(srcPath);
  const metadata = await image.metadata();

  let resizeWidth = null;
  let resizeHeight = null;

  if (metadata.width > maxEdge || metadata.height > maxEdge) {
    if (metadata.width >= metadata.height) {
      resizeWidth = maxEdge;
    } else {
      resizeHeight = maxEdge;
    }
  }

  let pipeline = image;
  if (resizeWidth || resizeHeight) {
    pipeline = pipeline.resize(resizeWidth, resizeHeight, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  // Compress according to extension
  let quality = isHero ? 84 : 80;

  if (ext === '.png') {
    // For PNGs that are photos, if oversized, png compression or web-friendly
    await pipeline.png({ quality: 85, compressionLevel: 8 }).toFile(destPath);
    let destStat = fs.statSync(destPath);
    // If still over targetMaxKB, convert to sharp JPEG if it's a photograph
    if (destStat.size > targetMaxKB * 1024 && !srcPath.includes('drawing')) {
      await sharp(srcPath)
        .resize(resizeWidth || maxEdge, resizeHeight, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(destPath.replace(/\.png$/i, '.jpeg'));
    }
  } else {
    // JPEG
    await pipeline.jpeg({ quality, mozjpeg: true }).toFile(destPath);
    let destStat = fs.statSync(destPath);
    // If still slightly over 450KB, reduce quality progressively to ensure < 450KB
    while (destStat.size > targetMaxKB * 1024 && quality > 65) {
      quality -= 5;
      await sharp(srcPath)
        .resize(resizeWidth || Math.min(maxEdge, 1920), resizeHeight, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
        .toFile(destPath);
      destStat = fs.statSync(destPath);
    }
  }

  const destStat = fs.statSync(destPath);
  return {
    status: 'optimized',
    origKB: Math.round(stat.size / 1024),
    newKB: Math.round(destStat.size / 1024),
  };
}

async function runSync() {
  const syncPlan = [
    // 01_Rewari
    {
      src: '01_Rewari/Rewari Kalyani Casttech.png',
      dests: [
        'public/assets/manufacturing/Rewari Kalyani Casttech.png',
        'public/assets/manufacturing/hero_facade_kct.png',
        'public/assets/manufacturing/Rewari Factory.jpg',
      ],
      options: { maxEdge: 2560, targetMaxKB: 440, isHero: true },
    },

    // 02_Products_Containers
    {
      src: '02_Products_Containers/Spl Cont Salt n Steel cargoHD.jpeg',
      dests: ['public/assets/containers/Spl Cont Salt n Steel cargoHD.jpeg'],
      options: { maxEdge: 1920, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/SS Steel  Container.png',
      dests: [
        'public/assets/containers/SS Steel  Container.png',
        'public/assets/containers/SS Dwarf Container.jpeg',
        'public/assets/containers/Dwarf Container.png',
        'public/assets/containers/Dwarf Container.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Salt  n multipurpose Containers.png',
      dests: [
        'public/assets/containers/Salt  n multipurpose Containers.png',
        'public/assets/containers/Domestic Salt Containers.jpeg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Relink Logistics Cotton Loading Showcase.png',
      dests: [
        'public/assets/containers/Relink Logistics Cotton Loading Showcase.png',
        'public/assets/containers/Spl 40\'HC Cont for Cotton bale with 84Cu.m capacity.jpeg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Three-Tier Motorcycle Transport Container.png',
      dests: [
        'public/assets/containers/Three-Tier Motorcycle Transport Container.png',
        'public/assets/containers/40HC Bike Carrying Container.jpeg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Yellow Timber Logistics Yard Montage.png',
      dests: [
        'public/assets/containers/Yellow Timber Logistics Yard Montage.png',
        'public/assets/containers/40\' Dwarf Container Wooden log.png',
      ],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/CJ DARCL42 feet contr.png',
      dests: ['public/assets/containers/CJ DARCL42 feet contr.png'],
      options: { maxEdge: 1920, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Pristine Double-Decker Green Freight Train.png',
      dests: ['public/assets/rail/Pristine Double-Decker Green Freight Train.png'],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Pristine Double-Decker Rail Logistics Montage.png',
      dests: ['public/assets/rail/Pristine Double-Decker Rail Logistics Montage.png'],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Double-Stacked Eco Freight at Sunset.png',
      dests: [
        'public/assets/rail/Double-Stacked Eco Freight at Sunset.png',
        'public/assets/rail/Double-Stacked Freight at Sunset.png',
      ],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Efficient Double-Decker Container Loading.png',
      dests: ['public/assets/rail/Efficient Double-Decker Container Loading.png'],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/Efficient Double-Decker Container Loading (1).png',
      dests: ['public/assets/rail/Efficient Double-Decker Container Loading (1).png'],
      options: { maxEdge: 1920, targetMaxKB: 400 },
    },
    {
      src: '02_Products_Containers/RORO Wagon Container.png',
      dests: [
        'public/assets/containers/RORO Wagon Container.png',
        'public/assets/shivlakha/RORO Wagon Container.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/RoRo Wagon 1.png',
      dests: [
        'public/assets/containers/RoRo Wagon 1.png',
        'public/assets/shivlakha/RoRo Wagon 1.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Wagon/Car Carrier 9 Car.png',
      dests: [
        'public/assets/containers/Car Carrier 9 Car.png',
        'public/assets/containers/Car Carrier 2.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Wagon/Efficient Car Carrier Wagon Infographic.png',
      dests: [
        'public/assets/containers/Efficient Car Carrier Wagon Infographic.png',
        'public/assets/containers/Car Carrier1.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Wagon/New Container Wagon.png',
      dests: [
        'public/assets/containers/New Container Wagon.png',
        'public/assets/containers/Special Wagon Design3.png',
        'public/assets/shivlakha/Special Wagon Design3.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '02_Products_Containers/Wagon/Next-Generation Container Wagon Design.png',
      dests: [
        'public/assets/containers/Next-Generation Container Wagon Design.png',
        'public/assets/containers/Car Container1.png',
      ],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },

    // 03_Shivlakha_Logistics
    {
      src: '03_Shivlakha_Logistics/Shivlakha GCT Rail Terminal.png',
      dests: [
        'public/assets/shivlakha/Shivlakha GCT Rail Terminal.png',
        'public/assets/shivlakha/Ktech Shivlakha GCT.jpeg',
        'public/assets/shivlakha/Ktech Rail Siding Siding n Plant access via rail.jpg',
      ],
      options: { maxEdge: 2560, targetMaxKB: 440, isHero: true },
    },
    {
      src: '03_Shivlakha_Logistics/Shivlakha GCT Rail Terminal1.png',
      dests: [
        'public/assets/shivlakha/Shivlakha GCT Rail Terminal1.png',
        'public/assets/shivlakha/Ktech GCT2.jpg',
        'public/assets/shivlakha/Ktech Rail Siding2.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Shivlakha GCT Rail Terminal2.png',
      dests: [
        'public/assets/shivlakha/Shivlakha GCT Rail Terminal2.png',
        'public/assets/shivlakha/Ktech GCT4.jpg',
        'public/assets/shivlakha/Ktech Rail Siding3.jpg',
        'public/assets/shivlakha/Ktech Rail Siding4.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Admin Shivlakha.png',
      dests: [
        'public/assets/shivlakha/Admin Shivlakha.png',
        'public/assets/shivlakha/admin.jpeg',
      ],
      options: { maxEdge: 1600, targetMaxKB: 250 },
    },
    {
      src: '03_Shivlakha_Logistics/Detailed Diagram of KTech Shivlakha Project.jpeg',
      dests: ['public/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg'],
      options: { maxEdge: 1600, targetMaxKB: 350 },
    },
    {
      src: '03_Shivlakha_Logistics/Industrial Container Fabrication Workshop.png',
      dests: [
        'public/assets/manufacturing/Industrial Container Fabrication Workshop.png',
        'public/assets/shivlakha/Industrial Container Fabrication Workshop.png',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Steel Fabrication Hall in Action.png',
      dests: [
        'public/assets/manufacturing/Steel Fabrication Hall in Action.png',
        'public/assets/manufacturing/Container Welding Process after Boxing.jpg',
        'public/assets/shivlakha/Steel Fabrication Hall in Action.png',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Industrial Container Boxing Process.png',
      dests: [
        'public/assets/manufacturing/Industrial Container Boxing Process.png',
        'public/assets/manufacturing/Container Boxing Process.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Precision Metal Fabrication Machines.png',
      dests: [
        'public/assets/manufacturing/Precision Metal Fabrication Machines.png',
        'public/assets/manufacturing/Container Final After Logo Designing.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },
    {
      src: '03_Shivlakha_Logistics/Container Painting Process Infographic.png',
      dests: [
        'public/assets/manufacturing/Container Painting Process Infographic.png',
        'public/assets/manufacturing/Contrs Coming Out from Paint Booth.jpg',
      ],
      options: { maxEdge: 1920, targetMaxKB: 380 },
    },

    // 04_Company_Team
    {
      src: '04_Company_Team/Kalyani Team.JPG',
      dests: ['public/assets/company/Kalyani Team.JPG'],
      options: { maxEdge: 2560, targetMaxKB: 440, isHero: true },
    },
    {
      src: '04_Company_Team/Naresh Sir.jpeg',
      dests: [
        'public/images/leadership/Naresh-Kumar.jpg',
        'public/assets/company/Naresh Sir.jpeg',
      ],
      options: { maxEdge: 1600, targetMaxKB: 250 },
    },
    {
      src: '04_Company_Team/NK & Rly Minister.jpg',
      dests: [
        'public/assets/leadership/NK & Rly Minister.jpg',
        'public/assets/leadership/naresh-kumar-railway-minister.jpg',
        'public/assets/company/NK & Rly Minister.jpg',
      ],
      options: { maxEdge: 2560, targetMaxKB: 440, isHero: true },
    },
    {
      src: '04_Company_Team/Devender-Kumar.jpg',
      dests: ['public/images/leadership/Devender-Kumar.jpg'],
      options: { maxEdge: 800, targetMaxKB: 150 },
    },
    {
      src: '04_Company_Team/Javed Aslam.jpg',
      dests: ['public/images/leadership/Javed-Aslam.jpg'],
      options: { maxEdge: 1200, targetMaxKB: 200 },
    },

    // 07_Certificates
    {
      src: '07_Certificates/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg',
      dests: [
        'public/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg',
      ],
      options: { maxEdge: 1200, targetMaxKB: 200 },
    },
    {
      src: '07_Certificates/Certificate-of-Capacity-1.jpg',
      dests: ['public/documents/approvals/Certificate-of-Capacity-1.jpg'],
      options: { maxEdge: 1920, targetMaxKB: 300 },
    },
    {
      src: '07_Certificates/Competent-Manufacturer-1.jpg',
      dests: ['public/documents/approvals/Competent-Manufacturer-1.jpg'],
      options: { maxEdge: 1920, targetMaxKB: 300 },
    },
    {
      src: '07_Certificates/Foundry-Approval-from-LR-1.jpg',
      dests: [
        'public/documents/approvals/Foundry-Approval-from-LR-1.jpg',
        'public/documents/approvals/LR-Foundry-Approval-2024-Page-1.png',
      ],
      options: { maxEdge: 1920, targetMaxKB: 300 },
    },
    {
      src: '07_Certificates/Kalyani Cast Tech Logo.jpeg',
      dests: ['public/assets/company/Kalyani Cast Tech Logo.jpeg'],
      options: { maxEdge: 600, targetMaxKB: 100 },
    },
    {
      src: '07_Certificates/7.1.jpg',
      dests: ['public/documents/approvals/7.1.jpg'],
      options: { maxEdge: 1200, targetMaxKB: 200 },
    },
    {
      src: '07_Certificates/Picture1.jpg',
      dests: ['public/documents/approvals/Picture1.jpg'],
      options: { maxEdge: 1200, targetMaxKB: 200 },
    },
  ];

  console.log(`\nProcessing ${syncPlan.length} synchronization mappings...`);
  let totalProcessed = 0;
  let totalSavedKB = 0;

  for (const item of syncPlan) {
    const fullSrcPath = path.join(WORKING_DIR, item.src);
    if (!fs.existsSync(fullSrcPath)) {
      console.warn(`[WARN] Source file missing: ${item.src}`);
      continue;
    }

    for (const destRel of item.dests) {
      const fullDestPath = path.join(PROJECT_ROOT, destRel);
      const destDir = path.dirname(fullDestPath);
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

      try {
        const res = await optimizeAndSave(fullSrcPath, fullDestPath, item.options);
        const saved = res.origKB - res.newKB;
        totalSavedKB += Math.max(0, saved);
        totalProcessed++;
        console.log(`  -> Synced: ${destRel} [${res.origKB} KB -> ${res.newKB} KB] (${res.status})`);
      } catch (err) {
        console.error(`  [ERROR] Failed to optimize ${destRel}:`, err.message);
      }
    }
  }

  // Also check 06_Approved_Visual_Assets_Dropzone for any files
  const dropzoneDir = path.join(WORKING_DIR, '06_Approved_Visual_Assets_Dropzone');
  if (fs.existsSync(dropzoneDir)) {
    const dropzoneFiles = fs.readdirSync(dropzoneDir);
    if (dropzoneFiles.length > 0) {
      console.log(`\nFound ${dropzoneFiles.length} files in Approved_Visual_Assets_Dropzone:`);
      for (const file of dropzoneFiles) {
        const sPath = path.join(dropzoneDir, file);
        const dPath = path.join(PUBLIC_DIR, 'assets', 'dropzone', file);
        if (!fs.existsSync(path.dirname(dPath))) fs.mkdirSync(path.dirname(dPath), { recursive: true });
        await optimizeAndSave(sPath, dPath, { maxEdge: 1920, targetMaxKB: 400 });
        console.log(`  -> Synced Dropzone file: ${file}`);
      }
    }
  }

  console.log(`\nAsset synchronization complete!`);
  console.log(`Processed: ${totalProcessed} files`);
  console.log(`Bandwidth savings achieved: ${(totalSavedKB / 1024).toFixed(2)} MB`);
}

runSync().catch(err => {
  console.error('Fatal sync error:', err);
  process.exit(1);
});
