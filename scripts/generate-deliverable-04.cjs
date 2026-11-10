const fs = require('fs');
const path = require('path');

const rows = [
  [
    'Route URL',
    'Page Name',
    'Target Keyword',
    'SEO Title',
    'SEO Title Length',
    'Meta Description',
    'Meta Description Length',
    'H1 Heading',
    'H2 Headings List',
    'H3 Headings Sample',
    'Word Count Estimate',
    'Primary CTA Label & Destination'
  ],
  [
    '/',
    'Home',
    'Kalyani Cast Tech Limited',
    'Kalyani Cast Tech Limited | Built for what India moves.',
    '55',
    'Manufacturer of ISO and special-application freight containers, precision castings at Rewari Works, Haryana, and multimodal logistics at Shivlakha, Gujarat.',
    '156',
    'Built for what India moves.',
    'Two Business Divisions; Scale & Quality Highlights; Selected Flagship Product Families; Dual Operating Locations; Engineering Rigor & Testing; Corporate Governance & Investor Gateway; Commercial Enquiry Desk',
    'Manufacturing Division; Terminal Division; Rewari Works; Shivlakha Platform',
    '1450',
    'Explore Containers -> /products-applications'
  ],
  [
    '/about-us',
    'About Kalyani',
    'About Kalyani Cast Tech',
    'About Kalyani Cast Tech Limited | Corporate Profile',
    '51',
    'Corporate profile of Kalyani Cast Tech Limited (BSE SME: 544023). Engineering freight containers, precision foundry castings, and multimodal terminal logistics.',
    '160',
    'Kalyani Cast Tech Limited',
    'Dual-Facility Footprint; Two Business Divisions; Disciplined Engineering Principles; Corporate Governance & Statutory Parameters; Action Pathways',
    'Rewari Works; Shivlakha Platform; Container Manufacturing; Wagon Manufacturing; Foundry Unit; Gati Shakti Terminal; Inland Container Terminal',
    '1620',
    'Explore Divisions -> /manufacturing'
  ],
  [
    '/our-journey',
    'Our Journey',
    'Kalyani Cast Tech company history',
    'Our Journey | Kalyani Cast Tech Limited',
    '39',
    'Verified corporate evolution of Kalyani Cast Tech Limited from precision container manufacturing at Rewari to multimodal terminal infrastructure at Shivlakha.',
    '158',
    'Our Journey',
    'Corporate Origins; 7 Chronological Milestones (2012-2026); Division Architecture; Strategic Destination Links; Commercial Consultations',
    '2012 Incorporation; 2014 Rewari Works; 2016 Dwarf Containers; 2021 GCT Land Allocation; 2023 BSE SME Listing; 2026 GCT Operational; 2026 CBIC ICT Approval',
    '1380',
    'Explore Rewari Works -> /facilities'
  ],
  [
    '/leadership',
    'Board & Management',
    'Kalyani Cast Tech board of directors',
    'Board & Management | Kalyani Cast Tech Limited',
    '46',
    'Board of Directors, key managerial personnel and advisors of Kalyani Cast Tech Limited, with committee roles and operational backgrounds.',
    '137',
    'Engineering experience. Industrial leadership. Responsible governance.',
    'Executive Leadership; Independent & Non-Executive Directors; Corporate Advisory; Governance Committees & Oversight',
    'Audit Committee; Stakeholders Relationship Committee; Nomination & Remuneration Committee',
    '1120',
    'Investor Disclosures -> /investor-relations'
  ],
  [
    '/manufacturing',
    'Manufacturing Division Overview',
    'container manufacturing company in India',
    'Manufacturing Division | Kalyani Cast Tech Limited',
    '50',
    'Explore Kalyani Cast Tech Limited\'s Manufacturing Division: ISO freight containers, precision foundry castings, and rolling stock engineering at Rewari Works.',
    '158',
    'Container & Foundry Manufacturing',
    'Integrated Manufacturing Operations; Freight Container Fabrication; Induction Foundry Unit; Rolling Stock Engineering; Quality Systems',
    'MIG Automated Welding; Induction Furnaces; Corner Castings; Structural Testing Rig',
    '1250',
    'View Facilities -> /facilities'
  ],
  [
    '/facilities',
    'Manufacturing Facilities',
    'Rewari manufacturing plant Kalyani Cast Tech',
    'Manufacturing Facilities | Kalyani Cast Tech Limited',
    '52',
    'Inspect Kalyani Cast Tech\'s principal manufacturing plant at Rewari Works, Haryana: fabrication sheds, induction foundry, and structural testing rigs.',
    '150',
    'Two plants. One engineering standard.',
    'Rewari Works Profile; Heavy Fabrication Sheds; Precision Induction Foundry; Structural Load Testing Rigs; Environmental & Quality Compliance',
    'Plate Preparation; Boxing Jigs; Shot Blasting & Paint Booth; Spectrometric Analysis',
    '1540',
    'Explore Products -> /products-applications'
  ],
  [
    '/products-applications',
    'Capabilities & Products',
    'freight container manufacturers India',
    'Products & Applications | Kalyani Cast Tech Limited',
    '51',
    'Standard ISO containers, specialised open-top coiltainers, dwarf containers, tank containers, and ISO 1161 specification corner castings engineered in India.',
    '157',
    'The cargo picks the container. We engineer it.',
    'Interactive Category Filter; Standard Freight Containers; Specialised Open-Top & Coiltainers; Dwarf Containers; Tank & Bulk Hoppers; Precision Corner Castings & Foundry',
    '20ft GP Container; 40ft HC Container; 40ft Open-Top Coiltainer; 40ft Dwarf Container; ISO 1161 Corner Castings',
    '1820',
    'Request Quotation -> /contact#enquiry-form'
  ],
  [
    '/innovation',
    'Innovation & Specialised Concepts',
    'New Wagon Design RDSO Stage-I',
    'Innovation & Specialised Concepts | Kalyani Cast Tech Limited',
    '61',
    'Specialised cargo concepts, dwarf container innovation, and New Wagon Design under RDSO Stage-I approval by Kalyani Cast Tech Limited.',
    '134',
    'Engineering ideas for specialised cargo and rail applications.',
    'Core Methodology Pillars; Double-Stack Dwarf Container; Heavy-Duty Coiltainers; Rolling-Stock Concepts & Development Status; Technical Consultation Desk',
    'Double-Stack Clearance Envelope; FEA Structural Analysis; RDSO Stage-I Status; CUBOID 12.5 m³ Modular Box',
    '1310',
    'Discuss Custom Engineering -> /contact#enquiry-form'
  ],
  [
    '/engineering-quality',
    'Engineering & Quality',
    'ISO 1496 container testing rig Rewari',
    'Engineering & Quality | Kalyani Cast Tech Limited',
    '49',
    'In-house container structural testing, optical emission spectrometry, certified NDT inspection, and quality assurance systems at Rewari Works, Haryana.',
    '151',
    'Engineering Precision. Manufacturing Confidence.',
    'Engineering Capability Areas; Staged Quality Assurance Pillars; Rewari Testing Infrastructure; Type Approvals vs Management Systems Distinction; Certificates Gallery',
    'Optical Emission Spectrometry; Hydraulic Stacking Test; Racking & Floor Strength; Marine Epoxy Inspection',
    '1680',
    'View Certificates -> /resources'
  ],
  [
    '/investor-relations',
    'Investor Relations',
    'Kalyani Cast Tech investor relations BSE 544023',
    'Investor Relations | Kalyani Cast Tech Limited (BSE SME: 544023)',
    '64',
    'Official statutory disclosures of Kalyani Cast Tech Limited (BSE SME: 544023, CIN: L26990DL2012PLC242760): audited financials, annual reports, and LODR filings.',
    '160',
    'Listed. Disclosed. Audited.',
    'Statutory Overview; Audited Financial Results; Annual Reports; Stock Exchange Disclosures; Shareholding Information; Corporate Governance Policies; Investor Grievance Desk',
    'Financial FY 2024-25; Annual Report 2024; Shareholding Patterns; Compliance Officer Contact',
    '1490',
    'Download Annual Reports -> /resources'
  ],
  [
    '/gallery',
    'Visual Gallery',
    'Kalyani Cast Tech factory photos',
    'Visual Gallery: Plants & Operations | Kalyani Cast Tech Limited',
    '63',
    'Authentic photographic archive of Kalyani Cast Tech Limited: Rewari manufacturing works, container fabrication, foundry castings, and GCT Shivlakha operations.',
    '159',
    'Visual Gallery: Plants, Products & Operations',
    'Interactive Category Filter; Chronological Archive; Rewari Works Facilities; Production Lines; Specialized Products; Terminal Operations at Shivlakha',
    'Rewari Works Shed; Induction Melt; Container Rig Testing; GCT Siding Inauguration',
    '950',
    'Explore Manufacturing -> /manufacturing'
  ],
  [
    '/shivlakha-rail-logistics',
    'Shivlakha Platform',
    'Shivlakha rail logistics platform',
    'Shivlakha Multimodal Platform | Kalyani Cast Tech Limited',
    '57',
    'Integrated multimodal hub at Shivlakha, Kachchh: operational Gati Shakti Cargo Terminal, under-development ICT, and planned rolling stock integration.',
    '150',
    'Shivlakha Rail & Logistics Platform',
    'Strategic Multimodal Node; Operating Terminal Division; Operational GCT Terminal; Inland Container Terminal Development; Multimodal Integration Pillars',
    'GCT Rail Siding; Gandhidham-Samakhiali Line Connection; 30-Acre GCT Yard; 30-Acre Future ICT',
    '1350',
    'Evaluate Rail Cargo -> /contact#enquiry-form'
  ],
  [
    '/shivlakha-rail-logistics/gati-shakti-terminal',
    'Gati Shakti Terminal',
    'Gati Shakti Terminal Shivlakha operational',
    'Gati Shakti Cargo Terminal | Kalyani Cast Tech Limited',
    '54',
    'Operational 30-acre Gati Shakti Terminal at Shivlakha, Kachchh, Gujarat. Dedicated rail siding connected to the Indian Railways network via Gandhidham-Samakhiali.',
    '162',
    'Gati Shakti Cargo Terminal (GCT)',
    'Operational Terminal Overview; Rail Siding Infrastructure; Commodity Handling Capabilities; Commercial Access & Enquiries',
    'Full-Length Rake Handling; Direct IR Rail Access; Bulk & Container Logistics; Terminal Operations Desk',
    '1180',
    'Terminal Enquiry -> /contact#enquiry-form'
  ],
  [
    '/shivlakha-rail-logistics/inland-container-terminal',
    'Inland Container Terminal',
    'Inland Container Terminal Shivlakha CBIC approval',
    'Inland Container Terminal | Kalyani Cast Tech Limited',
    '53',
    'Under-development Inland Container Terminal at Shivlakha, Kachchh, Gujarat with CBIC approval received 10 September 2026. Future customs-bonded facility.',
    '153',
    'Inland Container Terminal (ICT)',
    'Development Status & Statutory Approvals; CBIC Section 7 Approval Milestone; Future Customs-Bonded Facilities; Development Roadmap',
    'CBIC Section 7 Milestone 10 Sept 2026; Future Customs Bonded Enclosure; EXIM Handling Infrastructure',
    '1120',
    'Register Project Interest -> /contact#enquiry-form'
  ],
  [
    '/contact',
    'Contact & Commercial Enquiry',
    'Contact Kalyani Cast Tech',
    'Contact & Commercial Enquiry | Kalyani Cast Tech Limited',
    '56',
    'Commercial enquiries, container specifications, registered office in New Delhi, Rewari Works manufacturing plant, and Shivlakha Platform in Gujarat.',
    '148',
    'Tell us what you are moving. We\'ll route it to the right desk.',
    'Unified Commercial Enquiry Desk; Registered Office (New Delhi); Rewari Works (Haryana); Shivlakha Platform (Gujarat); Investor Grievance Contact',
    '10-Field Form; Registered Office Address; Rewari Works Address (PIN 123101); Compliance Officer Desk',
    '1240',
    'Submit Enquiry -> /contact#enquiry-form'
  ],
  [
    '/resources',
    'Resources & Technical Library',
    'Kalyani Cast Tech brochures data sheets',
    'Resources & Technical Library | Kalyani Cast Tech Limited',
    '57',
    'Approved corporate brochures, container technical specifications, ISO quality management certificates, and regulatory disclosures from Kalyani Cast Tech.',
    '153',
    'Data Sheets, Brochures & Certificates',
    'Document Library Overview; Container Technical Data Sheets; Corporate Brochures; Quality & Regulatory Certificates; Statutory Disclosures',
    'Container Technical Sheets; Corporate Profile PDF; ISO 9001 Certificate; LODR Disclosures',
    '1080',
    'Request Technical Sheet -> /contact#enquiry-form'
  ]
];

function escapeCsvField(val) {
  if (typeof val !== 'string') val = String(val || '');
  if (val.includes(',') || val.includes('"') || val.includes('\n')) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

const csvContent = rows.map(r => r.map(escapeCsvField).join(',')).join('\n') + '\n';

const p1 = path.resolve(__dirname, '../../04_WEBSITE_DOCUMENTATION/step5b25_seo_smo_aieo/04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv');
const p2 = path.resolve(__dirname, '../docs/step5b25_seo_smo_aieo/04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv');

fs.writeFileSync(p1, csvContent, 'utf8');
fs.writeFileSync(p2, csvContent, 'utf8');
console.log('Generated 04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv successfully.');
