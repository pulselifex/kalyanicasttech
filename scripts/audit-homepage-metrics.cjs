const fs = require('fs');

function countWords(str) {
  if (!str) return 0;
  return str.trim().replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

// BEFORE (WP-5B.14/WP-5B.15 Baseline)
const beforeMetrics = {
  s1: { words: 71, cards: 1, ctas: 2, tables: 0 },
  s2: { words: 180, cards: 3, ctas: 0, tables: 0 },
  s3: { words: 116, cards: 4, ctas: 2, tables: 0 },
  s4: { words: 152, cards: 4, ctas: 5, tables: 0 },
  s5: { words: 189, cards: 1, ctas: 3, tables: 1 }, // 5-row table
  s6: { words: 199, cards: 4, ctas: 5, tables: 0 },
  s7: { words: 160, cards: 5, ctas: 2, tables: 0 },
  s8: { words: 38, cards: 0, ctas: 2, tables: 0 },
};

const totalBeforeWords = Object.values(beforeMetrics).reduce((a, b) => a + b.words, 0);
const totalBeforeCards = Object.values(beforeMetrics).reduce((a, b) => a + b.cards, 0);
const totalBeforeCtas = Object.values(beforeMetrics).reduce((a, b) => a + b.ctas, 0);
const totalBeforeTables = Object.values(beforeMetrics).reduce((a, b) => a + b.tables, 0);

// AFTER (WP-5B.16 Redesign)
const s1_after_text = `
Built for what India moves.
Engineering India's Industrial Freight: From Foundry Heritage to Integrated Multimodal Logistics
Kalyani Cast Tech Limited designs and manufactures specialised freight containers and railway castings at Rewari Works (Haryana), expanding into rail-linked multimodal terminal infrastructure at the Integrated Shivlakha Project (Kachchh, Gujarat).
Explore Manufacturing
Discover Shivlakha
20' High Cube Dry Cargo Container High Cube ISO Series-1 Heavy-density freight container engineered for multimodal rail transit. View Specifications
`;

const s2_after_text = `
Corporate Architecture BSE SME: 544023
Two Synergistic Business Divisions: Manufacturing & Terminal Operations
Kalyani Cast Tech Limited integrates heavy industrial equipment manufacturing at Rewari Works with strategic rail-linked multimodal terminal operations at Shivlakha under one listed corporate umbrella.
Manufacturing Division Heavy Industrial Engineering & Casting Craftsmanship Rewari Manufacturing Works Haryana Established production infrastructure combining certified container fabrication, railway rolling-stock development, and an accredited ferrous foundry under one roof.
Freight Container Manufacturing 16+ certified designs including ISO standard, high-cube, open-top coiltainer, and bespoke industrial boxes.
Railway Wagon Manufacturing RDSO Stage-I concept validated freight wagons, car carriers, and container flatcars.
Foundry Unit & Precision Castings IS 12117:1996 Class A ferrous foundry producing Lloyd's Register approved ISO 1161 corner castings.
Explore Manufacturing Capabilities
Terminal Division Strategic Rail-Linked Multimodal Infrastructure Shivlakha Integrated Platform Kachchh, Gujarat 150-acre multimodal logistics platform strategically located near NH-41, providing direct broad-gauge rail connectivity to Western Railway and major maritime ports.
Gati Shakti Terminal (30 Acres) Dedicated broad-gauge railway siding connecting directly to Western Railway mainline. Rail infrastructure ready.
Inland Container Terminal (30 Acres) Customs-bonded container handling yard and CFS backed by CBIC approval dated 10 September 2026. Under development.
Port & Industrial Corridor Connectivity Direct arterial rail links to Deendayal (Kandla) Port (~68 km) and Mundra Port (~132 km).
Explore Terminal Infrastructure
`;

const s3_after_text = `
16+ Certified Container Models ISO standard, dwarf, coiltainer & custom designs
Class A Ferrous Foundry IS 12117:1996 accredited heavy casting facility
80T Rig Physical Proof Load Testing Full-scale ISO 1496 Series-1 structural test rig
150 Acres Shivlakha Multimodal Hub Rail-linked platform in Kachchh, Gujarat
`;

const s4_after_text = `
Capabilities & Products
Engineered for Physical Freight Demands
From standard ISO dry freight containers to low-profile double-stack rail boxes, heavy coiltainers, and precision corner castings.
Explore Full 16+ Model Catalogue
Standard ISO Containers
Specialised Industrial Freight
Electrified Rail Logistics
Precision Castings & Foundry
ISO 1496 Series-1 Certified
20' & 40' High Cube Dry Cargo Freight Containers
Heavy-duty intermodal freight containers engineered for domestic and international multimodal rail, road, and maritime logistics.
Heavy Corten steel weather-resistant body
Robotic GMAW / FCAW continuous seam welding
86,400 kg per post 9-high stacking load verified
Payload capacity up to 28,280 kg with verified tare weight
View Specifications in Catalogue
* Note: Certain specialized container designs and rail wagon concepts represent custom engineering solutions developed to client operational specifications.
`;

const s5_after_text = `
Infrastructure & Plant Locations
The Integrated Shivlakha Project & Rewari Works
Operating an established heavy manufacturing plant in Haryana, complemented by the 150-acre rail-linked multimodal terminal platform at Village Shivlakha, Kachchh, Gujarat.
Haryana Heavy Casting & Container Fabrication Plant Rewari Manufacturing Works Established production plant housing an IS 12117:1996 Class A ferrous foundry, CNC plate preparation, automated boxing jigs, and full-scale ISO 1496 load rig.
Class A Ferrous Foundry pouring up to 2,000 kg
Full-scale ISO 1496 Series-1 structural load testing rig
CNC hydraulic press brake & automated submerged arc welding
In-house optical spectrometer & ultrasonic flaw detection
View Rewari Works Details
Kachchh, Gujarat 150-Acre Rail-Linked Multimodal Terminal Shivlakha Integrated Platform Contiguous 150-acre multimodal terminal and manufacturing platform located near NH-41, providing direct broad-gauge siding connectivity to Western Railway.
30 Acres: Gati Shakti Terminal (Rail Infrastructure Ready)
30 Acres: Inland Container Terminal (CBIC LoI · Under Development)
5 Acres: Container and wagon manufacturing shed
85 Acres: Future expansion reserve (150 Acres Master Plan)
Explore Shivlakha Platform
* Commercial freight movement at the Gati Shakti Terminal is subject to railway operating arrangements and scheduling. Inland Container Terminal is under active planning and construction backed by CBIC approval dated 10 September 2026.
`;

const s6_after_text = `
Physical Proof Load Rigor Full-Scale ISO 1496 Series-1 Testing Rig 86,400 kg Corner Post Stacking Proof Load Validated In-House.
Industrial Discipline & Compliance
Engineering Discipline, Certifications & Corporate Governance
Every container design, precision casting, and terminal operation adheres to rigorous quality control frameworks, documented testing regimes, and the governance expectations of a publicly listed enterprise.
Lloyd's Register EMEA Approved Foundry Certificate No: LR2489004WA for container corner castings (Valid to June 2027).
Triple ISO Management Accreditations ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Safety).
In-House Metallurgical & NDT Labs 40T UTM tensile test, -45°C sub-zero Charpy impact, spectrometer chemical analysis.
Listed Corporate Governance & Transparency BSE SME Scrip: 544023 SEBI LODR Regulation 46 disclosures and audited statutory filings.
Review Quality Rig & Testing
Investor Portal
`;

const s7_after_text = `
Investor Relations BSE SME: 544023
Public Governance, Audited Disclosures & Shareholder Resources
Complying with SEBI LODR Regulation 46 disclosures, audited financial accounts, and timely stock exchange intimations.
Access Investor Relations Portal
13th Annual Report (FY 2024-25) Annual Statements September 2025 Access
Financial Results (Half-Year ended 30.09.2025) Financial Results November 2025 Access
Shareholding Pattern (Quarter ended 31.03.2025) Shareholder Information April 2025 Access
Code of Conduct & Corporate Governance Policies Governance Policies Statutory Disclosures Access
`;

const s8_after_text = `
Commercial & Technical Consultation
Discuss Your Cargo Movement & Container Requirements
Submit technical container specifications, request custom casting details, or evaluate rail transshipment access at our Shivlakha terminal.
Container Fleet Procurement Standard ISO & Specialised Freight Submit technical specifications for standard ISO dry cargo boxes, high-cube units, dwarf containers, or custom industrial bulk containers. Inquire Container Fleet
Precision Castings & Foundry ISO 1161 Corner Castings & Rolling Stock Request certified ISO 1161 container corner castings, locomotive brake blocks, or heavy carbon-manganese industrial castings from our Class A foundry. Inquire Castings Supply
Terminal Siding & Logistics Shivlakha Gati Shakti Terminal Access Evaluate broad-gauge rail siding connectivity, rake handling capabilities, and cargo transshipment opportunities at our Shivlakha platform. Inquire Rail Siding Access
Direct factory consultations available for bespoke engineering designs and fleet acquisitions. Corporate Directory & Offices
`;

const afterMetrics = {
  s1: { words: countWords(s1_after_text), cards: 1, ctas: 2, tables: 0 },
  s2: { words: countWords(s2_after_text), cards: 2, ctas: 2, tables: 0 },
  s3: { words: countWords(s3_after_text), cards: 0, ctas: 0, tables: 0 }, // Borderless metric strip
  s4: { words: countWords(s4_after_text), cards: 1, ctas: 2, tables: 0 }, // 1 large media showcase
  s5: { words: countWords(s5_after_text), cards: 2, ctas: 2, tables: 0 }, // 2 photographic cards
  s6: { words: countWords(s6_after_text), cards: 1, ctas: 2, tables: 0 }, // 1 visual split panel
  s7: { words: countWords(s7_after_text), cards: 4, ctas: 1, tables: 0 }, // 4 disclosure cards
  s8: { words: countWords(s8_after_text), cards: 3, ctas: 4, tables: 0 }  // 3 persona cards + directory
};

const totalAfterWords = Object.values(afterMetrics).reduce((a, b) => a + b.words, 0);
const totalAfterCards = Object.values(afterMetrics).reduce((a, b) => a + b.cards, 0);
const totalAfterCtas = Object.values(afterMetrics).reduce((a, b) => a + b.ctas, 0);
const totalAfterTables = Object.values(afterMetrics).reduce((a, b) => a + b.tables, 0);

console.log('=== KALYANI HOMEPAGE EMPIRICAL BEFORE VS AFTER COMPARISON ===');
console.log(`Word Count:  Before = ${totalBeforeWords} words | After = ${totalAfterWords} words (${((totalAfterWords - totalBeforeWords)/totalBeforeWords * 100).toFixed(1)}%)`);
console.log(`Card Boxes:  Before = ${totalBeforeCards} cards | After = ${totalAfterCards} cards (${((totalAfterCards - totalBeforeCards)/totalBeforeCards * 100).toFixed(1)}%)`);
console.log(`Action CTAs: Before = ${totalBeforeCtas} CTAs  | After = ${totalAfterCtas} CTAs  (${((totalAfterCtas - totalBeforeCtas)/totalBeforeCtas * 100).toFixed(1)}%)`);
console.log(`Data Tables: Before = ${totalBeforeTables} table (5 rows) | After = ${totalAfterTables} tables (-100.0%)`);
console.log('-------------------------------------------------------------');
