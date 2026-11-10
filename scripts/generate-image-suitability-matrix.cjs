const fs = require('fs');
const path = require('path');

const matrix = [
  {
    section: "Section 1: Hero & Positioning Gateway",
    filename: "Double-Stacked Eco Freight at Sunset.png",
    subject: "Commercial double-stack dwarf container train running under 25 kV AC electrification",
    authenticity: "100% Authentic Indian Railways Commercial Run",
    quality: "High-Resolution Photographic (913 KB)",
    resolution: "1920x1080",
    currentUse: "Our Journey Hero & Slide 21",
    proposedUse: "Hero Background / Split Visual Anchor",
    crop: "Wide landscape (16:9), preserve pantograph and overhead contact wire",
    status: "Verified (July 2018 Western Railway)",
    gap: "None"
  },
  {
    section: "Section 1: Hero Product Preview",
    filename: "20' High Cube Dry Cargo Container.png",
    subject: "Manufactured 20' High Cube ISO freight container",
    authenticity: "100% Authentic Manufactured Product",
    quality: "Crisp Studio Lighting (648 KB)",
    resolution: "1600x1000",
    currentUse: "Hero Carousel Slide 01",
    proposedUse: "Hero Interactive Product Feature Preview",
    crop: "Clean side-three-quarters profile, preserve corner castings",
    status: "Verified",
    gap: "None"
  },
  {
    section: "Section 2: Two Divisions - Manufacturing",
    filename: "Rewari Kalyani Casttech.png",
    subject: "Rewari Works exterior plant facade and fabrication bay entrance",
    authenticity: "100% Authentic Facility Exterior",
    quality: "High-Resolution Exterior Architectural (682 KB)",
    resolution: "1920x1080",
    currentUse: "Facilities Hero & Section 4 Card 1",
    proposedUse: "Manufacturing Division Visual Anchor Card",
    crop: "Landscape 16:10, preserve company signage and workshop portal",
    status: "Verified Rewari Works, Haryana",
    gap: "None"
  },
  {
    section: "Section 2: Two Divisions - Terminal",
    filename: "Shivlakha GCT Rail Terminal.png",
    subject: "Gati Shakti Terminal dedicated broad-gauge railway siding and track",
    authenticity: "100% Authentic Infrastructure",
    quality: "High-Resolution Ground Perspective (874 KB)",
    resolution: "1920x1080",
    currentUse: "Shivlakha Hero & Gallery gst-1",
    proposedUse: "Terminal Division Visual Anchor Card",
    crop: "Landscape 16:10, preserve track ballast and broad-gauge siding alignment",
    status: "Verified Shivlakha Project, Gujarat",
    gap: "None"
  },
  {
    section: "Section 4: Product Families - Standard ISO",
    filename: "20' Standard ISO Dry Freight Container.png",
    subject: "Standard ISO Series-1 intermodal dry freight container",
    authenticity: "100% Authentic Manufactured Unit",
    quality: "Clean Industrial Product Photography (615 KB)",
    resolution: "1600x1000",
    currentUse: "Hero Carousel Slide 03 & Products Page",
    proposedUse: "Product Family Tab 1 Feature Image",
    crop: "Centered container body, highlight corner castings and locking gear",
    status: "Verified",
    gap: "None"
  },
  {
    section: "Section 4: Product Families - Specialised Bulk",
    filename: "Spl Cont Salt n Steel cargoHD.jpeg",
    subject: "Heavy open-top coiltainer with internal cradle well saddles",
    authenticity: "100% Authentic Industrial Container",
    quality: "Sharp Detail Photographic (91 KB)",
    resolution: "1280x853",
    currentUse: "Section 6 Card 3 & Products Drawer",
    proposedUse: "Product Family Tab 2 Feature Image",
    crop: "Side isometric showing reinforced cradle saddles",
    status: "Verified",
    gap: "None"
  },
  {
    section: "Section 4: Product Families - Electrified Rail",
    filename: "Dwarf Container.jpeg",
    subject: "Patented 1,930 mm low-profile double-stack dwarf container",
    authenticity: "100% Authentic Patented Design",
    quality: "Clear Production Photography (150 KB)",
    resolution: "1200x800",
    currentUse: "Innovation Hero & Slide 11",
    proposedUse: "Product Family Tab 3 Feature Image",
    crop: "Perspective highlighting low profile height vs standard ISO",
    status: "Verified (Patent: Shri Naresh Kumar)",
    gap: "None"
  },
  {
    section: "Section 4: Product Families - Precision Castings",
    filename: "corner-castings-for-containers.png",
    subject: "Certified ISO 1161 container corner castings (TL, TR, BL, BR)",
    authenticity: "100% Authentic Rewari Foundry Castings",
    quality: "Detailed Macro Photography (412 KB)",
    resolution: "1600x1000",
    currentUse: "Engineering & Quality Hero",
    proposedUse: "Product Family Tab 4 Feature Image",
    crop: "Clean foreground focus showing metallurgical finish and markings",
    status: "Verified Lloyd's Register EMEA Approval",
    gap: "None"
  },
  {
    section: "Section 5: Operating Locations - Rewari Works",
    filename: "Steel Fabrication Hall in Action.png",
    subject: "Heavy steel fabrication bay with automated welding and jigs",
    authenticity: "100% Authentic Workshop Floor",
    quality: "High-Resolution Industrial (889 KB)",
    resolution: "1920x1080",
    currentUse: "Gallery Photo hist-5 & rew-4",
    proposedUse: "Location Card: Rewari Manufacturing Works",
    crop: "Landscape 16:9, showing full span of fabrication bay overhead crane",
    status: "Verified Rewari Works, Haryana",
    gap: "None"
  },
  {
    section: "Section 5: Operating Locations - Shivlakha Hub",
    filename: "Shivlakha GCT Rail Terminal2.png",
    subject: "Gati Shakti Terminal container handling area and track infrastructure",
    authenticity: "100% Authentic Terminal Yard",
    quality: "High-Resolution Wide-Angle (729 KB)",
    resolution: "1920x1080",
    currentUse: "Gallery Photo gst-3 & ict-1",
    proposedUse: "Location Card: Shivlakha Multimodal Platform",
    crop: "Wide landscape, showing open yard and broad-gauge siding connection",
    status: "Verified Shivlakha Hub, Gujarat",
    gap: "None"
  },
  {
    section: "Section 6: Testing Rig & QA Proof",
    filename: "Container Welding Process after Boxing.jpg",
    subject: "Structural container assembly in boxing fixture with full weld inspection",
    authenticity: "100% Authentic In-House Fabrication QA",
    quality: "Sharp Close-up Workshop Photography (143 KB)",
    resolution: "1280x853",
    currentUse: "Gallery Photo eng-1",
    proposedUse: "Engineering Rigor & Quality Split Visual",
    crop: "Highlight precision structural boxing fixture and corner post welding",
    status: "Verified Rewari Works Rig Protocol",
    gap: "Gap identified: Dedicated ultra-high-res photograph of the complete 80T load rig in action requested from plant team for future asset refresh."
  },
  {
    section: "Section 8: B2B Commercial Enquiry Desk",
    filename: "Industrial Container Fabrication Workshop.png",
    subject: "Heavy industrial container fabrication workshop bay at Rewari",
    authenticity: "100% Authentic Plant Interior",
    quality: "High-Resolution Wide Angle (878 KB)",
    resolution: "1920x1080",
    currentUse: "Investor Relations Hero",
    proposedUse: "Subtle Dark Backdrop for Contact Section",
    crop: "Darkened background texture overlay (10% opacity) behind action cards",
    status: "Verified",
    gap: "None"
  }
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  return `"${String(val).replace(/"/g, '""')}"`;
}

const headers = [
  "Proposed Section",
  "Existing Asset Filename",
  "Actual Subject",
  "Authenticity",
  "Image Quality",
  "Resolution",
  "Current Use",
  "Proposed Use",
  "Crop Requirements",
  "Permission / Verification Status",
  "Asset Gap"
];

const rows = [headers.map(escapeCsv).join(',')];
matrix.forEach(m => {
  rows.push([
    m.section,
    m.filename,
    m.subject,
    m.authenticity,
    m.quality,
    m.resolution,
    m.currentUse,
    m.proposedUse,
    m.crop,
    m.status,
    m.gap
  ].map(escapeCsv).join(','));
});

const outPath = path.join('..', '04_WEBSITE_DOCUMENTATION', 'step5b15_visual_experience_audit', '07_IMAGE_ASSET_SUITABILITY_AND_GAPS.csv');
fs.writeFileSync(outPath, rows.join('\n'), 'utf8');
console.log('Successfully generated:', outPath, 'with', matrix.length, 'records.');

