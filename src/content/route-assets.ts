export interface PageAssetConfig {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
  tag?: string;
}

export interface PageDocumentConfig {
  title: string;
  filename: string;
  url: string;
  fileSize: string;
  type: string;
  scope: string;
}

/**
 * Chapter 1 — Scale & Engineering Identity
 */
export const HERO_ASSETS = {
  rewariFabricationShed: {
    src: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    alt: "Wide-angle container assembly and welding inside the Rewari fabrication shed",
    caption: "Rewari Works — Container fabrication shed with certified MIG seam welding lines.",
    aspect: "21/9",
  },
  dwarfDoubleStackTrial: {
    src: "/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg",
    alt: "2016 Indian Railways initiative on dwarf containers designed by Shri Naresh Kumar",
    caption: "Double-Stack Dwarf Container train running beneath 25kV electrified overhead wires.",
    aspect: "16/9",
  },
};

/**
 * Chapter 2 — Chronological 6-Stage Manufacturing Story Arc
 */
export const PROCESS_STAGES_ASSETS = [
  {
    num: 1,
    id: "stage1Cad",
    title: "CAD & Drawing Review",
    tag: "Design & FEA",
    caption:
      "3D structural modeling in AutoCAD & SolidWorks against cargo weight, load distribution, and rail clearances.",
    src: "/assets/containers/40_spl_steel_drawing_elevation.png",
    aspect: "16/9",
  },
  {
    num: 2,
    id: "stage2Foundry",
    title: "Foundry & Corner Castings",
    tag: "IS 12117 Class A",
    caption:
      "Induction melting at 2,000 kg and 1,000 kg, 10 TPH no-bake sand moulding, and Lloyd's Register approved corner castings.",
    src: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    aspect: "16/9",
  },
  {
    num: 3,
    id: "stage3Jigs",
    title: "Sub-Assembly Jigs",
    tag: "Precision Fit-Up",
    caption:
      "Dedicated alignment fixtures for base underframes, corrugated side walls, end frames, and door assemblies.",
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    aspect: "16/9",
  },
  {
    num: 4,
    id: "stage4Welding",
    title: "Automated & MIG Welding",
    tag: "Certified MIG",
    caption:
      "Automatic panel seam welding and certified MIG welding across structural corten steel container shells.",
    src: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    aspect: "16/9",
  },
  {
    num: 5,
    id: "stage5PaintBooth",
    title: "Shot Blasting & Painting",
    tag: "Surface Protection",
    caption:
      "1,000 kg blasting facility and covered paint booth for high-build marine epoxy coatings and oven curing.",
    src: "/assets/manufacturing/manufacturing-container-paint-booth-01.jpg",
    aspect: "16/9",
  },
  {
    num: 6,
    id: "stage6TestingRig",
    title: "Load, Floor & Water Testing",
    tag: "Structural Load Testing",
    caption:
      "Shopfloor structural assembly, dimensional quality inspection, and in-house ISO 1496 testing verification.",
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    aspect: "16/9",
  },
];

/**
 * Chapter 3 — Technical Container Catalogue Image Bindings
 */
export const CONTAINER_MODEL_ASSETS: Record<number, PageAssetConfig> = {
  1: {
    src: "/assets/containers/product-20ft-gp-container-01.png",
    alt: "20 Feet GP Standard ISO Container on Rail Rake",
    caption: "20ft General Purpose Dry Freight Container (ISO 1496 Series-1 compliant)",
    aspect: "3/2",
  },
  2: {
    src: "/assets/containers/product-20ft-hc-end-open-01.jpg",
    alt: "20 Feet HC End Open Container",
    caption: "20ft High Cube Container · IRS Certificate Report No. DLH21X014 (36.5T Gross)",
    aspect: "3/2",
  },
  3: {
    src: "/assets/containers/product-20ft-hc-side-access-01.jpg",
    alt: "20 Feet HC Side Access Container",
    caption: "20ft High Cube Container with 1,510 mm Longitudinal Side Access Doors",
    aspect: "3/2",
  },
  4: {
    src: "/assets/containers/product-40ft-hc-high-volume-01.png",
    alt: "40 Feet High Cube High-Volume Cargo Container (84 Cu.m)",
    caption: "40ft High Cube Container engineered for high-volume cargo (84 m³ / 84 Cu.m capacity)",
    aspect: "3/2",
  },
  5: {
    src: "/assets/containers/product-40ft-dwarf-side-access-01.png",
    alt: "40 Feet Side Access Dwarf Container",
    caption: "40′ × 8′6″ × 6′3″ Double-Stack Dwarf Container for Electrified Corridors",
    aspect: "3/2",
  },
  6: {
    src: "/assets/containers/product-40ft-open-top-coiltainer-01.jpeg",
    alt: "40 Feet Open Top Coiltainer",
    caption: "40ft Heavy Coiltainer (75T Payload, 88,888 kg Stacking Load per post)",
    aspect: "3/2",
  },
  7: {
    src: "/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg",
    alt: "40 Feet HC Open Top Coiltainer",
    caption: "40ft High Cube Open Top Coiltainer in Industrial Service",
    aspect: "3/2",
  },
  8: {
    src: "/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png",
    alt: "40 Feet Dwarf Open Top Coiltainer",
    caption: "40ft Dwarf Open Top Coiltainer with Roof Bow & Tarpaulin (73T Gross)",
    aspect: "3/2",
  },
  9: {
    src: "/assets/containers/product-40ft-universal-openable-top-01.png",
    alt: "40 Feet Universal Container, Openable Top",
    caption: "40ft Universal Container, Openable Top with Removable Roof Bows (72T Gross)",
    aspect: "3/2",
  },
  10: {
    src: "/assets/containers/product-42ft-hc-open-coiltainer-8-5w-01.jpg",
    alt: "42 Feet HC Open Coiltainer (8′6″ Wide)",
    caption: "42ft HC Open Coiltainer (8′6″ Wide) (70T Gross, 62,100 kg Payload)",
    aspect: "3/2",
  },
  11: {
    src: "/assets/containers/product-42ft-dwarf-open-top-timber-01.png",
    alt: "42 Feet Dwarf Open Top Container for Timber Logistics",
    caption: "42ft Low-Height Dwarf Open Top for Heavy Timber & Coil Logistics",
    aspect: "3/2",
  },
  12: {
    src: "/assets/containers/product-42ft-hc-cj-darcl-01.png",
    alt: "42 Feet HC Open Top Coiltainer (8' Wide)",
    caption: "42ft HC Open Top Coiltainer (8' Wide) with 1,510 mm Longitudinal Side Access",
    aspect: "3/2",
  },
  13: {
    src: "/assets/containers/product-42ft-hc-coil-tmt-01.jpg",
    alt: "42 Feet HC for Coil and TMT Bars",
    caption: "42ft HC Heavy Coiltainer for Hot-Rolled Coils & TMT Bars",
    aspect: "3/2",
  },
  14: {
    src: "/assets/containers/product-20ft-tank-container-01.jpg",
    alt: "20 Feet Tank Container",
    caption: "20ft ISO Cylindrical Tank Container (31.00 m³ liquid cargo vessel, 36.6T Gross)",
    aspect: "3/2",
  },
  15: {
    src: "/assets/containers/product-20ft-hopper-container-01.jpg",
    alt: "20 Feet Hopper Container",
    caption: "20ft Bulk Hopper Container with Discharge Hatch (37.00 m³, 36.5T Gross)",
    aspect: "3/2",
  },
  16: {
    src: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
    alt: "CUBOID Container (Parcel, Two-Wheeler & Three-Wheeler Box)",
    caption: "CUBOID 12.5 m³ Modular Parcel Box for BLC Rail Wagons (10 motorbikes / 4 three-wheelers)",
    aspect: "3/2",
  },
  17: {
    src: "",
    alt: "20 Feet 304-Grade Stainless Steel Salt Container (Specifications Available · Image Pending)",
    caption: "20ft 304-Grade Stainless Steel Salt Container (Specifications Available · Production Image Pending Engineering Release)",
    aspect: "3/2",
  },
};

/**
 * Chapter 4 — Leadership & Governance
 */
export const LEADERSHIP_ASSETS = {
  nareshKumar: {
    src: "/images/leadership/Naresh-Kumar.jpg",
    alt: "Mr. Naresh Kumar, Chairman & Managing Director",
    caption:
      "Mr. Naresh Kumar, B.E. Mech, M.Tech (IIT Madras) — Pioneer of Double-Stack Dwarf Containers.",
    aspect: "4/5",
  },
  nareshKumarMinister: {
    src: "/assets/company/leadership-naresh-kumar-minister-01.jpg",
    alt: "Mr. Naresh Kumar with Hon. Minister for Railways",
    caption: "National double-stack dwarf container launch with Ministry of Railways.",
    aspect: "16/10",
  },
  devenderKumar: {
    src: "/images/leadership/Devender-Kumar.jpg",
    alt: "Mr. Devender Kumar Yadav, Director & Legal Advisor",
    caption: "Mr. Devender Kumar Yadav, Non-Executive Director & Legal Advisor.",
    aspect: "4/5",
  },
  javedAslam: {
    src: "/images/leadership/Javed-Aslam.jpg",
    alt: "Mr. Javed Aslam, Promoter & Advisor",
    caption: "Mr. Javed Aslam, Promoter & Infrastructure Advisory.",
    aspect: "4/5",
  },
  team: {
    src: "/assets/company/team-workforce-workforce-01.jpg",
    alt: "Kalyani Cast Tech Engineering and Manufacturing Workforce",
    caption: "Kalyani Cast Tech manufacturing engineering, fabrication and operations workforce.",
    aspect: "16/9",
  },
};

/**
 * Chapter 5 — Facilities & Footprint
 */
export const FACILITY_ASSETS = {
  rewariWorks: {
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    alt: "Rewari Manufacturing Plant Facade, Haryana",
    caption: "Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, IRS baseline ≥1,000 containers/year.",
    aspect: "2/1",
  },
  rewariInterior: {
    src: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    alt: "Rewari Container Fabrication Workshop Shed",
    caption: "Rewari Works: Heavy container assembly, precision jigs and seam welding.",
    aspect: "2/1",
  },
  shivlakhaGct: {
    src: "/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg",
    alt: "Operational rail rake handling at Gati Shakti Terminal Shivlakha private rail siding",
    caption: "Shivlakha Hub: Gati Shakti Terminal operational rail siding connected to Indian Railways.",
    aspect: "2/1",
  },
  shivlakhaAdmin: {
    src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
    alt: "Shivlakha Operations Administration Building",
    caption: "Shivlakha Site: Operational administration and terminal dispatch office.",
    aspect: "2/1",
  },
  shivlakhaMasterplan: {
    src: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    alt: "Detailed Layout Diagram of KTech Shivlakha Project",
    caption: "Detailed architectural master plan of Shivlakha logistics and manufacturing complex.",
    aspect: "16/10",
  },
};

/**
 * Page-Level Canonical Route Bindings
 */
export const ROUTE_ASSETS: Record<string, PageAssetConfig> = {
  "/about-us": {
    src: "/assets/company/team-workforce-workforce-01.jpg",
    alt: "Kalyani Cast Tech manufacturing engineering and operations workforce",
    caption: "Kalyani Cast Tech engineering, fabrication and operations team.",
    aspect: "16/9",
  },
  "/leadership": {
    src: "/assets/company/team-workforce-workforce-01.jpg",
    alt: "Kalyani Cast Tech executive leadership and engineering workforce",
    caption: "Executive directors and engineering leadership at Kalyani Cast Tech Limited.",
    aspect: "16/9",
  },
  "/facilities": {
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    alt: "Rewari Manufacturing Plant Facade, Haryana",
    caption: "Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, IRS baseline ≥1,000 containers/year.",
    aspect: "16/10",
  },
  "/products-applications": {
    src: "/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg",
    alt: "Specialised Freight Container fleet for bulk salt, minerals and steel cargo",
    caption: "Specialised container designs engineered for bulk salt, steel and multimodal cargo.",
    aspect: "16/10",
  },
  "/engineering-quality": {
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    alt: "Container structural welding inspection and ISO 1496 verification protocol at Rewari Works",
    caption: "CONTAINER WELDING & STRUCTURAL INSPECTION: Certified MIG welding, seam inspection & ISO 1496 verification protocol · Rewari Works.",
    aspect: "16/10",
  },
  "/investor-relations": {
    src: "/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg",
    alt: "Kalyani Cast Tech Limited BSE SME Listed Company",
    caption: "BSE SME: 544023 · Statutory filings, financial results and corporate governance.",
    aspect: "16/9",
  },
  "/company": {
    src: "/assets/company/team-workforce-workforce-01.jpg",
    alt: "Kalyani Cast Tech manufacturing engineering and operations workforce",
    caption: "Kalyani Cast Tech engineering, fabrication and operations team.",
    aspect: "16/9",
  },
  "/company/our-journey": {
    src: "/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg",
    alt: "2016 Indian Railways initiative on dwarf containers designed by Shri Naresh Kumar",
    caption:
      "2016 national media record of dwarf containers developed for Indian Railways by Shri Naresh Kumar, Director.",
    aspect: "16/9",
  },
  "/containers-solutions": {
    src: "/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg",
    alt: "Specialised Container engineered for bulk salt and steel cargo",
    caption: "Specialised container design engineered for bulk salt and steel transportation.",
    aspect: "16/10",
  },
  "/containers-solutions/standard-containers": {
    src: "/assets/containers/product-20ft-gp-container-01.png",
    alt: "Standard ISO freight container production stack at Rewari Works",
    caption: "Standard ISO freight container fabrication and yard staging.",
    aspect: "16/10",
  },
  "/containers-solutions/specialised-containers": {
    src: "/assets/containers/product-42ft-hc-open-coiltainer-8-5w-01.jpg",
    alt: "42 Feet HC Open Coiltainer (8′6″ Wide)",
    caption:
      "42 Feet HC Open Coiltainer (8′6″ Wide) engineered for heavy industrial cargo and steel coils.",
    aspect: "16/10",
  },
  "/containers-solutions/rail-parcel-vehicle-cargo": {
    src: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
    alt: "CUBOID Modular Parcel and Automotive Transport Container Box",
    caption:
      "CUBOID 12.5 m³ modular container box configured for parcel logistics and multi-tier motorcycle transport on BLC flat wagons.",
    aspect: "16/10",
  },
  "/containers-solutions/application-specific-designs": {
    src: "/assets/containers/product-40ft-universal-openable-top-01.png",
    alt: "40ft Universal Openable Top Container built for high-density and top-loaded cargo",
    caption: "Bespoke container engineering configured for specialized industrial cargo.",
    aspect: "16/10",
  },
  "/manufacturing": {
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    alt: "Kalyani Cast Tech Container Manufacturing Plant at Rewari, Haryana",
    caption:
      "Rewari manufacturing facility: container shell fabrication, structural welding, painting and assembly.",
    aspect: "16/10",
  },
  "/manufacturing/container-manufacturing": {
    src: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    alt: "Shopfloor container panel boxing and structural fit-up process",
    caption: "Stage 3: Container boxing and precision fit-up at Rewari works.",
    aspect: "16/10",
  },
  "/manufacturing/design-engineering": {
    src: "/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg",
    alt: "Shopfloor machining and fabrication engineering at Rewari Works",
    caption: "In-house design engineering, CNC tooling, and structural validation.",
    aspect: "16/10",
  },
  "/manufacturing/testing-quality": {
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    alt: "Container structural welding inspection and quality assurance",
    caption: "Precision welding and structural integrity testing prior to surface treatment.",
    aspect: "16/10",
  },
  "/manufacturing/facilities-locations": {
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    alt: "Rewari manufacturing plant overview",
    caption:
      "Rewari Works (5 acres, IRS baseline ≥1,000 containers/year) & Shivlakha Hub (Gati Shakti Terminal).",
    aspect: "16/10",
  },
  "/shivlakha-rail-logistics": {
    src: "/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg",
    alt: "Private rail siding track connecting to Indian Railways broad-gauge network at Shivlakha",
    caption:
      "Shivlakha private rail siding track connecting directly to the broad-gauge rail corridor in Kachchh, Gujarat.",
    aspect: "16/10",
  },
  "/shivlakha-rail-logistics/gati-shakti-terminal": {
    src: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    alt: "Operational rail rake handling at Gati Shakti Terminal Shivlakha private rail siding",
    caption: "OPERATIONAL RAIL SIDING: Rake handling operations at Gati Shakti Terminal, Shivlakha, connected to Indian Railways network.",
    aspect: "16/10",
  },
  "/shivlakha-rail-logistics/gati-shakti-cargo-terminal": {
    src: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    alt: "Operational rail rake handling at Gati Shakti Terminal Shivlakha private rail siding",
    caption: "OPERATIONAL RAIL SIDING: Rake handling operations at Gati Shakti Terminal, Shivlakha, connected to Indian Railways network.",
    aspect: "16/10",
  },
  "/shivlakha-rail-logistics/inland-container-terminal": {
    src: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    alt: "Shivlakha Inland Container Terminal multimodal layout diagram",
    caption:
      "Multimodal container staging and Inland Container Terminal handling infrastructure under development at Shivlakha.",
    aspect: "16/10",
  },
  "/shivlakha-rail-logistics/inland-container-depot": {
    src: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    alt: "Shivlakha Inland Container Terminal multimodal layout diagram",
    caption:
      "Multimodal container staging and Inland Container Terminal handling infrastructure under development at Shivlakha.",
    aspect: "16/10",
  },
  "/company/leadership": {
    src: "/assets/company/team-workforce-workforce-01.jpg",
    alt: "Kalyani Cast Tech executive leadership and engineering workforce",
    caption: "Executive directors and engineering leadership at Kalyani Cast Tech Limited.",
    aspect: "16/9",
  },
  "/resources/news-media": {
    src: "/images/media/2nd-March-2017-First-Trial-Run-for-Double-Stack-Dwarf-Container-Trains-Inaugurated-by-Hon-MR-Through-Video-Link.jpg",
    alt: "Double Stack Dwarf Container train inaugural trial run",
    caption:
      "2017 inaugural trial run for Double Stack Dwarf Container trains inaugurated by Hon. Minister for Railways.",
    aspect: "16/10",
  },
  "/resources/quality-certifications": {
    src: "/documents/approvals/LR-Foundry-Approval-2024-Page-1.png",
    alt: "Lloyd's Register Approved Manufacturer of Steel Castings Certificate",
    caption:
      "Lloyd's Register EMEA Approval LR2489004WA (Valid 2024-2027) for container corner castings.",
    aspect: "16/10",
  },
};

export const ROUTE_DOCUMENTS: Record<string, PageDocumentConfig[]> = {
  "/resources/corporate-profile-brochures": [
    {
      title: "Kalyani Cast Tech Corporate Brochure (Volume 1)",
      filename: "Kalyani cast Brochure1.pdf",
      url: "/documents/corporate/Kalyani cast Brochure1.pdf",
      fileSize: "1.43 MB",
      type: "PDF Document",
      scope: "Company capabilities, engineering background, and container manufacturing scope.",
    },
    {
      title: "Kalyani Cast Tech Corporate & Product Brochure (Volume 2)",
      filename: "Kalyani cast Brochure2.pdf",
      url: "/documents/corporate/Kalyani cast Brochure2.pdf",
      fileSize: "3.23 MB",
      type: "PDF Document",
      scope:
        "Specialised container designs, volumetric specifications, and multimodal cargo applications.",
    },
  ],
  "/resources/quality-certifications": [
    {
      title: "Lloyd's Register EMEA — Foundry Approval (LR2489004WA)",
      filename: "LRS-Foundry-Approval-2024-2027.pdf",
      url: "/documents/approvals/LRS-Foundry-Approval-2024-2027.pdf",
      fileSize: "795 KB",
      type: "Official LR Approval Certificate",
      scope:
        "Manufacture of container corner castings in accordance with LR Rules for Materials (Valid 01/07/2024 to 30/06/2027).",
    },
    {
      title: "ISO 9001:2015 & ISO 45001:2018 Management System Certificates",
      filename: "ISO-9001-and-45001-Certificates.pdf",
      url: "/documents/approvals/ISO-9001-and-45001-Certificates.pdf",
      fileSize: "641 KB",
      type: "QACS / UAF Quality & Safety Certificates",
      scope: "Quality and OHS management compliance across casting, machining, ISO containers, and FRP components (Valid to 10/10/2027).",
    },
    {
      title: "ISO 14001:2015 Environmental Management System Certificate",
      filename: "ISO-14001-Certificate.pdf",
      url: "/documents/approvals/ISO-14001-Certificate.pdf",
      fileSize: "1.31 MB",
      type: "PCPL / QASL Environmental Certificate",
      scope: "Environmental management compliance across container manufacturing works (Valid to 22/08/2028).",
    },
    {
      title: "Indian Register of Shipping — Certificate of Capacity (Report DLH21X014)",
      filename: "IRS-Certificate-of-Capacity-DLH21X014.pdf",
      url: "/documents/approvals/IRS-Certificate-of-Capacity-DLH21X014.pdf",
      fileSize: "277 KB",
      type: "IRS Capacity Verification Report",
      scope:
        "Capacity to manufacture at least 1,000 containers annually (20ft ISO Containers 34T as per ISO 1496:2013 and CSC 1972).",
    },
    {
      title: "Indian Register of Shipping — Competent Manufacturer Certificate",
      filename: "Competent-Manufacturer.pdf",
      url: "/documents/approvals/Competent-Manufacturer.pdf",
      fileSize: "267 KB",
      type: "IRS Competency Certificate",
      scope:
        "Competency assessment for freight container manufacturing under International Convention for Safe Containers (CSC 1972).",
    },
    {
      title: "RDSO Quality Assurance Directorate — Class 'A' Foundry Approval",
      filename: "RDSO-Class-A-Foundry-Approval-IS-12117.jpg",
      url: "/documents/approvals/RDSO-Class-A-Foundry-Approval-IS-12117.jpg",
      fileSize: "120 KB",
      type: "RDSO Certificate of Approval",
      scope: "Status of Class 'A' foundry specific to railway needs under IS 12117:1996 for railway steel castings.",
    },
  ],
  "/investors/financial-information": [
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2025)",
      filename: "Financial-Results_30.09.2025.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf",
      fileSize: "18.03 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone & Consolidated results with Limited Review Report by M/s Goel Mintri & Associates.",
    },
    {
      title: "Audited Financial Results & MD Expansion Overview (Year ended 31.03.2025)",
      filename: "Financial-Results_31.03.2025.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_31.03.2025.pdf",
      fileSize: "2.00 MB",
      type: "Audited Financial Statements",
      scope: "Full-year audited results, Managing Director expansion statement, and Independent Auditor's Report.",
    },
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2024)",
      filename: "Financial-Results_30.09.2024.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2024.pdf",
      fileSize: "8.66 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone & Consolidated results with Limited Review Report.",
    },
    {
      title: "Audited Financial Results & Balance Sheet (Year ended 31.03.2024)",
      filename: "Financial-Results_31.03.2024.pdf",
      url: "/documents/investors/Financial-Results_31.03.2024.pdf",
      fileSize: "6.08 MB",
      type: "Audited Financial Statements",
      scope: "Full-year audited results, balance sheet, and Independent Auditor's Report.",
    },
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
      filename: "Financial-Results_30.09.2023.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2023.pdf",
      fileSize: "1.34 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone financial results submitted to BSE SME platform.",
    },
    {
      title: "14th AGM Annual Report & Audited Balance Sheet (FY 2025-26)",
      filename: "Annual-Report_FY_2025-26.pdf",
      url: "/documents/investors/Annual-Report_FY_2025-26.pdf",
      fileSize: "3.77 MB",
      type: "Annual General Meeting Report",
      scope: "14th AGM statutory report, Directors' report, and audited financial statements.",
    },
    {
      title: "13th AGM Annual General Meeting Annual Report (FY 2024-25)",
      filename: "13th-Annual-Report_FY-2024-2025.pdf",
      url: "/documents/investors/13th-Annual-Report_FY-2024-2025.pdf",
      fileSize: "2.92 MB",
      type: "Annual General Meeting Report",
      scope: "13th AGM notice, Directors' report, and audited accounts.",
    },
    {
      title: "12th AGM Annual General Meeting Annual Report (FY 2023-24)",
      filename: "12th-Annual-Report_FY-2023-2024.pdf",
      url: "/documents/investors/12th-Annual-Report_FY-2023-2024.pdf",
      fileSize: "18.36 MB",
      type: "Annual General Meeting Report",
      scope: "12th AGM annual report and audited balance sheet for FY 2023-24.",
    },
    {
      title: "Statement of Deviation / Variation in Public Issue Proceeds (30.09.2024)",
      filename: "Statement-of-Deviation_30.09.2024.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_30.09.2024.pdf",
      fileSize: "17.20 MB",
      type: "SEBI LODR Reg 32 Filing",
      scope: "Monitoring agency and audit committee statement on utilization of IPO proceeds.",
    },
    {
      title: "Statement of Deviation / Variation in Public Issue Proceeds (31.03.2025)",
      filename: "Statement-of-Deviation_31.03.2025.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_31.03.2025.pdf",
      fileSize: "3.63 MB",
      type: "SEBI LODR Reg 32 Filing",
      scope: "Annual statement of deviation/variation submitted to BSE SME platform.",
    },
  ],
  "/investors/corporate-governance": [
    {
      title: "Code of Conduct for Directors and Senior Officials",
      filename: "A.-Code-of-Conduct-for-Directors-and-Senior-Officials.pdf",
      url: "/documents/investors/code-of-conduct/A.-Code-of-Conduct-for-Directors-and-Senior-Officials.pdf",
      fileSize: "1.05 MB",
      type: "Governance Policy",
      scope: "Ethical standards, compliance obligations, and fiduciary duties for Board members and Senior Officials.",
    },
    {
      title: "Board of Directors Policies & Governance Guidelines",
      filename: "B.-Board-of-Directors-Policies.pdf",
      url: "/documents/investors/code-of-conduct/B.-Board-of-Directors-Policies.pdf",
      fileSize: "996 KB",
      type: "Governance Policy",
      scope: "Governance criteria, meeting protocols, and board oversight regulations.",
    },
    {
      title: "Code of Practices & Procedures for Fair Disclosure of UPSI",
      filename: "C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI.pdf",
      url: "/documents/investors/code-of-conduct/C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI.pdf",
      fileSize: "912 KB",
      type: "Statutory Code",
      scope: "Formulated under Regulation 8(1) of SEBI (Prohibition of Insider Trading) Regulations, 2015.",
    },
    {
      title: "Policy on Whistle Blower and Vigil Mechanism",
      filename: "D.-Policy-on-Whistle-Blower-and-Vigil-Mechanism.pdf",
      url: "/documents/investors/code-of-conduct/D.-Policy-on-Whistle-Blower-and-Vigil-Mechanism.pdf",
      fileSize: "1.02 MB",
      type: "Statutory Policy",
      scope: "Statutory vigil mechanism under Section 177(9) of Companies Act, 2013 and SEBI LODR Regulation 22.",
    },
    {
      title: "Policy on Materiality of Related Party Transactions & Dealing with RPTs",
      filename: "E.-Policy-on-RPTrelated-party-transaction.pdf",
      url: "/documents/investors/code-of-conduct/E.-Policy-on-RPTrelated-party-transaction.pdf",
      fileSize: "1.13 MB",
      type: "Statutory Policy",
      scope: "Regulation 23 of SEBI LODR Regulations and Section 188 of Companies Act, 2013.",
    },
    {
      title: "Policy on Preservation of Documents and Archival Policy",
      filename: "F.-Policy-On-Preservation-of-Documents.pdf",
      url: "/documents/investors/code-of-conduct/F.-Policy-On-Preservation-of-Documents.pdf",
      fileSize: "1.06 MB",
      type: "Statutory Policy",
      scope: "Regulation 9 and Regulation 30(8) of SEBI LODR Regulations.",
    },
    {
      title: "Anti-Sexual Harassment Policy (POSH Workplace Guidelines)",
      filename: "G.-Anti-Sexual-Harassment-Policy.pdf",
      url: "/documents/investors/code-of-conduct/G.-Anti-Sexual-Harassment-Policy.pdf",
      fileSize: "1.27 MB",
      type: "Statutory Policy",
      scope: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
    },
    {
      title: "Policy on Determination of Materiality for Disclosure of Events",
      filename: "H.-Policy-On-Determining-Materiality.pdf",
      url: "/documents/investors/code-of-conduct/H.-Policy-On-Determining-Materiality.pdf",
      fileSize: "1.13 MB",
      type: "Statutory Policy",
      scope: "Criteria for determining materiality of events under Regulation 30 of SEBI LODR Regulations.",
    },
    {
      title: "Code for Independent Directors",
      filename: "I.-Code-For-Independent-Directors.pdf",
      url: "/documents/investors/code-of-conduct/I.-Code-For-Independent-Directors.pdf",
      fileSize: "952 KB",
      type: "Statutory Code",
      scope: "Schedule IV of Companies Act, 2013 and SEBI LODR guidelines.",
    },
    {
      title: "Policy on Familiarisation Programme for Independent Directors",
      filename: "J.-Policy-On-Familiarisation-of-Independent-Directors.pdf",
      url: "/documents/investors/code-of-conduct/J.-Policy-On-Familiarisation-of-Independent-Directors.pdf",
      fileSize: "623 KB",
      type: "Statutory Policy",
      scope: "Regulation 25(7) and Regulation 46(2) of SEBI LODR Regulations.",
    },
    {
      title: "Corporate Social Responsibility (CSR) Policy",
      filename: "K.-CSR-policy.pdf",
      url: "/documents/investors/code-of-conduct/K.-CSR-policy.pdf",
      fileSize: "1.10 MB",
      type: "Statutory Policy",
      scope: "Section 135 and Schedule VII of Companies Act, 2013.",
    },
    {
      title: "Revised Articles of Association (AOA) & MOA",
      filename: "Revised-AOA.pdf",
      url: "/documents/investors/corporate/Revised-AOA.pdf",
      fileSize: "1.25 MB",
      type: "Constitutional Charter",
      scope: "Articles of Association of Kalyani Cast Tech Limited as amended for public listing.",
    },
  ],
  "/investors/ipo-corporate-actions": [
    {
      title: "Final Prospectus — BSE SME Initial Public Offering (Scrip: 544023)",
      filename: "Prospectus_Kalyani.pdf",
      url: "/documents/investors/drhp-prospectus/Prospectus_Kalyani.pdf",
      fileSize: "6.57 MB",
      type: "Final Offer Document",
      scope: "Official prospectus registered with ROC and BSE Limited for initial public offer of equity shares.",
    },
    {
      title: "Red Herring Prospectus (RHP) — Initial Public Offering",
      filename: "RHP_Kalyani.pdf",
      url: "/documents/investors/drhp-prospectus/RHP_Kalyani.pdf",
      fileSize: "6.56 MB",
      type: "Offer Document",
      scope: "Red Herring Prospectus filed with ROC Delhi & Haryana and BSE Limited.",
    },
    {
      title: "Draft Red Herring Prospectus (DRHP) — Initial Public Offering",
      filename: "DRHP_Kalyani.pdf",
      url: "/documents/investors/drhp-prospectus/DRHP_Kalyani.pdf",
      fileSize: "4.95 MB",
      type: "Draft Offer Document",
      scope: "Draft offer document filed with BSE SME platform.",
    },
    {
      title: "Statement of Deviation in IPO Proceeds (Period ended 31.03.2025)",
      filename: "Statement-of-Deviation_31.03.2025.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_31.03.2025.pdf",
      fileSize: "3.63 MB",
      type: "Regulation 32 Compliance",
      scope: "Confirmation of nil deviation/variation in utilization of funds raised under IPO.",
    },
    {
      title: "Statement of Deviation in IPO Proceeds (Period ended 30.09.2024)",
      filename: "Statement-of-Deviation_30.09.2024.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_30.09.2024.pdf",
      fileSize: "17.20 MB",
      type: "Regulation 32 Compliance",
      scope: "Statement of nil deviation signed by Company Secretary and Managing Director.",
    },
    {
      title: "Code of Conduct for Prevention of Insider Trading (PIT)",
      filename: "Policy-for-Insider-Trading.pdf",
      url: "/documents/investors/drhp-prospectus/Policy-for-Insider-Trading.pdf",
      fileSize: "402 KB",
      type: "Insider Trading Code",
      scope: "SEBI (Prohibition of Insider Trading) Regulations, 2015 statutory code.",
    },
  ],
  "/investors/meetings-presentations": [
    {
      title: "Institutional Investor Corporate Presentation",
      filename: "Kalyani-Cast-Tech-Investor-Presentation.pdf",
      url: "/documents/investors/Kalyani-Cast-Tech-Investor-Presentation.pdf",
      fileSize: "13.70 MB",
      type: "Executive Presentation",
      scope:
        "Official institutional investor presentation covering business pillars, financial history, and Shivlakha expansion.",
    },
  ],
};

/**
 * Chapter 6 — Railway Rolling Stock & Wagons Portfolio Assets
 */
export const WAGON_ASSETS = {
  carCarrier: {
    src: "/assets/wagons/Car Carrier 9 Car.png",
    alt: "Bi-Level Multi-Deck Auto Car Carrier Railway Wagon (9 Car Capacity)",
    caption: "Bi-Level Auto Car Carrier Wagon — High-capacity multi-deck automotive movement with automated roll-on roll-off tie-downs.",
    aspect: "16/9",
    tag: "Automotive Logistics",
  },
  carCarrierInfographic: {
    src: "/assets/wagons/Efficient Car Carrier Wagon Infographic.png",
    alt: "Efficient Car Carrier Wagon Technical Layout and Aerodynamics Infographic",
    caption: "Car Carrier Wagon Engineering Layout — Optimized internal height envelope, twin-deck ramp linkages, and high-speed bogie integration.",
    aspect: "16/9",
    tag: "Engineering Diagram",
  },
  containerWagon: {
    src: "/assets/wagons/New Container Wagon.png",
    alt: "New Generation Low-Platform Container Flat Wagon",
    caption: "High-Speed Container Flat Wagon (BLC/BLCS) — Low deck height for double-stack container transport under 25kV OHE wires.",
    aspect: "16/9",
    tag: "Intermodal Rail",
  },
  containerWagonDesign: {
    src: "/assets/wagons/Next-Generation Container Wagon Design.png",
    alt: "Next-Generation Heavy Freight Container Wagon 3D Render",
    caption: "Next-Generation High Axle-Load Container Flat Wagon — Fabricated high-tensile underframe rated for 25T axle load operations.",
    aspect: "16/9",
    tag: "25T Axle Load",
  },
  roroWagon: {
    src: "/assets/wagons/RORO Wagon Container.png",
    alt: "Roll-On Roll-Off (Ro-Ro) Intermodal Rail Wagon",
    caption: "Ro-Ro Freight Wagon — Direct roll-on loading for heavy commercial trucks and loaded intermodal road trailers.",
    aspect: "16/9",
    tag: "Ro-Ro Transport",
  },
  roroWagonPlatform: {
    src: "/assets/wagons/RoRo Wagon 1.png",
    alt: "Low Bed Ro-Ro Rail Platform Design",
    caption: "Low-Bed Ro-Ro Carrier Platform — Ultra-low clearance floor structure for highway tractor-trailer combinations on rail.",
    aspect: "16/9",
    tag: "Ultra-Low Deck",
  },
  specialWagon: {
    src: "/assets/wagons/Special Wagon Design3.png",
    alt: "Special Application Heavy Coil & Heavy Steel Freight Wagon",
    caption: "Special-Application Freight Wagon — Tailored cradles and floor reinforcements for concentrated steel coil and slab loads.",
    aspect: "16/9",
    tag: "Heavy Freight",
  },
};

