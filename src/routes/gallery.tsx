import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  X,
  ZoomIn,
  Camera,
  Newspaper,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Award,
  Factory,
  Train,
  Package,
} from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("/gallery"),
  component: GalleryPage,
});

/* ------------------------------------------------------------------ */
/* News & Updates Item Interface & Approved Historical Records        */
/* ------------------------------------------------------------------ */
export interface NewsUpdateItem {
  id: string;
  date: string;
  year: number;
  title: string;
  summary: string;
  category:
    | "Corporate Announcement"
    | "Manufacturing Milestone"
    | "Regulatory Approval"
    | "Infrastructure Development"
    | "Product Innovation";
  source: string;
  image: string;
  linkText?: string;
  linkHref?: string;
}

export const APPROVED_NEWS_UPDATES: NewsUpdateItem[] = [
  {
    id: "news-2026-10",
    date: "October 2026",
    year: 2026,
    title: "RDSO Stage-I Approval for New Wagon Design",
    summary:
      "New Wagon Design has received RDSO Stage-I approval from Research Designs and Standards Organisation (RDSO, Ministry of Railways) and is progressing through subsequent levels of approval.",
    category: "Regulatory Approval",
    source: "RDSO Notification · Ministry of Railways",
    image: "/assets/wagons/Next-Generation Container Wagon Design.png",
    linkText: "Review Journey Milestone",
    linkHref: "/our-journey",
  },
  {
    id: "news-2026-09-15",
    date: "15 September 2026",
    year: 2026,
    title: "Gati Shakti Terminal Operational at Shivlakha",
    summary:
      "Gati Shakti Terminal at Shivlakha, Gujarat, is operational and connected to the Indian Railways network, featuring a dedicated broad-gauge railway siding for industrial freight transit.",
    category: "Terminal Operations",
    source: "Terminal Operations Record",
    image: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    linkText: "Explore Shivlakha Platform",
    linkHref: "/shivlakha-rail-logistics",
  },
  {
    id: "news-2026-09-10",
    date: "10 September 2026",
    year: 2026,
    title: "CBIC Approval Received",
    summary:
      "Central Board of Indirect Taxes and Customs (CBIC) approval received for the Inland Container Terminal at Shivlakha. Dedicated customs area, container handling yard, and administrative center are currently under construction and planning.",
    category: "Regulatory Approval",
    source: "CBIC Notification · Inter-Ministerial Committee",
    image: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
    linkText: "View Facilities Details",
    linkHref: "/facilities#shivlakha",
  },
  {
    id: "news-2024-09",
    date: "September 2024",
    year: 2024,
    title: "12th Annual General Meeting Concluded & Statutory Disclosures Published",
    summary:
      "Kalyani Cast Tech Limited successfully held its 12th AGM, approving audited annual accounts, director appointments, and corporate disclosures following its institutional listing on the BSE SME platform.",
    category: "Corporate Announcement",
    source: "BSE SME Statutory Filing · Scrip 544023",
    image: "/assets/company/team-workforce-workforce-01.jpg",
    linkText: "Access Investor Filings",
    linkHref: "/investor-relations",
  },
  {
    id: "news-2023-11",
    date: "November 2023",
    year: 2023,
    title: "Kalyani Cast Tech Limited Successfully Lists on BSE SME Platform",
    summary:
      "Initial Public Offering (IPO) of equity shares concludes successfully, marking the corporate transition of Kalyani Cast Tech Limited into an institutionally listed public entity on BSE SME under Scrip Code 544023.",
    category: "Corporate Announcement",
    source: "BSE Listing Confirmation Notice",
    image: "/assets/company/leadership-naresh-kumar-minister-01.jpg",
    linkText: "Review Listing Governance",
    linkHref: "/investor-relations",
  },
  {
    id: "news-2021-08",
    date: "August 2021",
    year: 2021,
    title: "CUBOID Modular Parcel & Two-Wheeler Rail Box Introduced",
    summary:
      "Kalyani Cast Tech launched the CUBOID 12.5 m³ modular container box designed specifically for BLC railway flatcars, enabling a 45-wagon freight rake to carry up to 2,160 motorbikes or 675 MT of express parcel freight.",
    category: "Product Innovation",
    source: "Container Engineering R&D Dossier",
    image: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
    linkText: "View CUBOID Specs",
    linkHref: "/products-applications#cuboid",
  },
  {
    id: "news-2018-07",
    date: "July 2018",
    year: 2018,
    title: "Commercial Double-Stack Dwarf Container Run — July 2018",
    summary:
      "Managing Director Shri Naresh Kumar's patented 1,930 mm low-profile dwarf container entered commercial service on the Western Railway network from Kanalus to Rewari, proving double-stack freight movement under 25 kV AC electrified wires.",
    category: "Manufacturing Milestone",
    source: "Western Railway Commercial Traffic Record",
    image: "/assets/rail/Double-Stacked Eco Freight at Sunset.png",
    linkText: "Review Innovation Heritage",
    linkHref: "/innovation",
  },
  {
    id: "news-2016-05",
    date: "May 2016",
    year: 2016,
    title: "Ministry of Railways Adopts Dwarf Container Strategy Developed by Kalyani Cast Tech",
    summary:
      "Indian Railways officially announced plans to introduce double-stack dwarf containers engineered by Shri Naresh Kumar, Director of Kalyani Cast Tech, to overcome electrified overhead wire clearance constraints nationally.",
    category: "Product Innovation",
    source: "Ministry of Railways Press Announcement",
    image:
      "/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg",
    linkText: "Read Journey Timeline",
    linkHref: "/our-journey",
  },
  {
    id: "news-2014-01",
    date: "January 2014",
    year: 2014,
    title: "Commercial Foundry Production & Facility Trials Commenced at Rewari",
    summary:
      "Commercial trial production commenced at Rewari Works (Haryana), proving induction melting furnaces, chemically bonded sand moulding, and corner casting production lines manufactured as per ISO 1161 specifications with Lloyd's Register foundry shop approval.",
    category: "Manufacturing Milestone",
    source: "Plant Commissioning Log · Rewari Works",
    image: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    linkText: "View Facilities Overview",
    linkHref: "/facilities",
  },
  {
    id: "news-2012-09",
    date: "20 September 2012",
    year: 2012,
    title: "Kalyani Cast Tech Limited Incorporated & Rewari Works Founded",
    summary:
      "Kalyani Cast Tech Limited was incorporated under the Companies Act (CIN: L26990DL2012PLC242760). Established an IS 12117 Class A ferrous foundry at Village Mamaria Thethar, District Rewari, Haryana.",
    category: "Corporate Announcement",
    source: "Certificate of Incorporation · RoC Delhi & Haryana",
    image: "/assets/manufacturing/factory-rewari-facade-01.png",
    linkText: "About Kalyani Background",
    linkHref: "/about-us",
  },
];

/* ------------------------------------------------------------------ */
/* Historical Photo Gallery Categories & Items (2012 - 2026)           */
/* ------------------------------------------------------------------ */
export type GalleryCategory =
  | "All"
  | "Company History & Milestones"
  | "Rewari Manufacturing Works"
  | "Container Manufacturing"
  | "Specialised Containers"
  | "Wagon Manufacturing & Development"
  | "Foundry & Precision Castings"
  | "Corner Castings"
  | "Engineering & Quality"
  | "Shivlakha Rail & Logistics"
  | "Gati Shakti Terminal"
  | "Inland Container Terminal Development"
  | "Corporate Events & Activities";

export interface HistoricalGalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  yearPeriod: "2012–2015" | "2016–2019" | "2020–2022" | "2023–2024" | "2025–2026";
  approxYear: number;
  src: string;
  caption: string;
  location: string;
  sourceRef: string;
}

export const HISTORICAL_PHOTO_GALLERY: HistoricalGalleryItem[] = [
  // 1. Company History & Milestones
  {
    id: "hist-1",
    title: "Rewari Manufacturing Plant Foundation Facade",
    category: "Company History & Milestones",
    yearPeriod: "2012–2015",
    approxYear: 2012,
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    caption: "Operational manufacturing plant facade and primary administrative entrance at Village Mamaria Thethar, District Rewari, Haryana.",
    location: "Rewari Works, Haryana",
    sourceRef: "Plant Establishment Record 2012",
  },
  {
    id: "hist-2",
    title: "National Launch of Double-Stack Dwarf Container Train",
    category: "Company History & Milestones",
    yearPeriod: "2016–2019",
    approxYear: 2016,
    src: "/assets/rail/Central-launch-Dwarf-container-1.jpeg",
    caption: "National launch presentation with Ministry of Railways for the patented Double-Stack Dwarf Container concept engineered by Kalyani Cast Tech.",
    location: "Rail Bhawan, New Delhi",
    sourceRef: "Ministry of Railways Launch Record",
  },
  {
    id: "hist-3",
    title: "Managing Director with Hon'ble Minister of Railways",
    category: "Company History & Milestones",
    yearPeriod: "2016–2019",
    approxYear: 2016,
    src: "/assets/company/leadership-naresh-kumar-minister-01.jpg",
    caption: "Managing Director Shri Naresh Kumar presenting the Double-Stack Dwarf Container train model to the Hon'ble Minister for Railways.",
    location: "Rail Bhawan, New Delhi",
    sourceRef: "Official Railway Press Record",
  },
  {
    id: "hist-4",
    title: "First Commercial Double-Stack Dwarf Run on Western Railway",
    category: "Company History & Milestones",
    yearPeriod: "2016–2019",
    approxYear: 2018,
    src: "/assets/rail/Double-Stacked Eco Freight at Sunset.png",
    caption: "Commercial double-stack dwarf container unit train running under 25 kV AC overhead electric traction on the Western Railway network.",
    location: "Western Railway Corridor",
    sourceRef: "Western Railway Traffic Log (July 2018)",
  },
  {
    id: "hist-5",
    title: "BSE SME Public Listing Corporate Milestone",
    category: "Company History & Milestones",
    yearPeriod: "2023–2024",
    approxYear: 2023,
    src: "/assets/company/team-workforce-workforce-01.jpg",
    caption: "Transition into an institutionally listed public company on the BSE SME platform under Scrip Code 544023.",
    location: "BSE SME Platform",
    sourceRef: "BSE SME Scrip Code: 544023 Record",
  },

  // 2. Rewari Manufacturing Works
  {
    id: "rew-1",
    title: "Rewari Works Workshop Bays & Open Fabrication Yard",
    category: "Rewari Manufacturing Works",
    yearPeriod: "2012–2015",
    approxYear: 2014,
    src: "/assets/manufacturing/factory-rewari-facade-01.png",
    caption: "Over 6,000 sq.m of covered industrial workshop bays housing casting finishing, CNC machining, and specialized container fabrication.",
    location: "Rewari Works, Haryana",
    sourceRef: "Rewari Plant Operations Record",
  },
  {
    id: "rew-2",
    title: "Heavy Engineering Works Facade & Industrial Complex",
    category: "Rewari Manufacturing Works",
    yearPeriod: "2020–2022",
    approxYear: 2021,
    src: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    caption: "Industrial plant entrance, administrative offices, and testing rig facility at Village Mamaria Thethar, Rewari.",
    location: "Rewari Works, Haryana",
    sourceRef: "Facility Expansion Log",
  },

  // 3. Container Manufacturing
  {
    id: "cont-mfg-1",
    title: "Precision Industrial Container Boxing Process Jig",
    category: "Container Manufacturing",
    yearPeriod: "2020–2022",
    approxYear: 2021,
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    caption: "Final 3D geometry boxing jig ensuring millimeter-level squaring and dimensional tolerance for ISO corner fittings.",
    location: "Rewari Boxing Bay",
    sourceRef: "Tooling & Fixture Validation",
  },
  {
    id: "cont-mfg-2",
    title: "Container Welding Process Following Boxing Alignment",
    category: "Container Manufacturing",
    yearPeriod: "2020–2022",
    approxYear: 2022,
    src: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    caption: "Semi-automatic GMAW/FCAW welding lines welding corner posts and Corten corrugated steel side skins to floor underframe.",
    location: "Fabrication Line 2",
    sourceRef: "Welding Procedure Qualification (WPS)",
  },
  {
    id: "cont-mfg-3",
    title: "Finished Freight Containers Exiting Heated Paint Booth",
    category: "Container Manufacturing",
    yearPeriod: "2023–2024",
    approxYear: 2023,
    src: "/assets/manufacturing/Contrs Coming Out from Paint Booth.jpg",
    caption: "Finished container units exiting heated curing booth following multi-coat DFT marine epoxy coating inspection.",
    location: "Surface Treatment Bay",
    sourceRef: "Coating Inspection Log",
  },
  {
    id: "cont-mfg-4",
    title: "Heavy Structural Steel Fabrication Hall in Action",
    category: "Container Manufacturing",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    caption: "Continuous sub-assembly fit-up and longitudinal seam welding for high-volume container manufacturing orders.",
    location: "Heavy Fabrication Hall",
    sourceRef: "Shop Floor Production Log",
  },

  // 4. Specialised Containers
  {
    id: "spec-1",
    title: "Double-Stack Dwarf Container (1,930 mm Height Profile)",
    category: "Specialised Containers",
    yearPeriod: "2016–2019",
    approxYear: 2018,
    src: "/assets/containers/product-40ft-dwarf-side-access-01.png",
    caption: "Patented low-profile 1,930 mm container engineered for double-stack rail transit under 25 kV AC electrified overhead lines.",
    location: "Western Railway Network",
    sourceRef: "Patented Dwarf Specification",
  },
  {
    id: "spec-2",
    title: "40ft High-Cube Cotton Bale Container (84 Cu.m)",
    category: "Specialised Containers",
    yearPeriod: "2020–2022",
    approxYear: 2020,
    src: "/assets/containers/product-40ft-hc-high-volume-01.png",
    caption: "Specialized volumetric container engineered for pressed raw cotton bales and high-cube agricultural commodities.",
    location: "Rewari Works / Customer Loading",
    sourceRef: "Agricultural Logistics Program",
  },
  {
    id: "spec-3",
    title: "Three-Tier Motorcycle Transport Container (CUBOID)",
    category: "Specialised Containers",
    yearPeriod: "2020–2022",
    approxYear: 2021,
    src: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
    caption: "CUBOID 12.5 m³ modular container box designed specifically for BLC railway flatcars for high-density parcel freight and two-wheelers.",
    location: "Rail Dispatch Bay",
    sourceRef: "Automotive Intermodal Dossier",
  },
  {
    id: "spec-4",
    title: "40ft Heavy Open-Top Coiltainer with Contoured Saddle",
    category: "Specialised Containers",
    yearPeriod: "2020–2022",
    approxYear: 2022,
    src: "/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg",
    caption: "Heavy steel coil transport box featuring an integral contoured saddle well rated for 30 MT single-coil concentrated load.",
    location: "Rewari Testing Rig",
    sourceRef: "IRS Load Test Report",
  },
  {
    id: "spec-5",
    title: "Specialised Salt & Heavy Mineral Bulk Cargo Containers",
    category: "Specialised Containers",
    yearPeriod: "2023–2024",
    approxYear: 2023,
    src: "/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png",
    caption: "Reinforced underframe containers staged for bulk mineral, industrial salt, and heavy commodity rail transportation.",
    location: "Staging Yard Logistics",
    sourceRef: "Bulk Logistics Supply Order",
  },
  {
    id: "spec-6",
    title: "CJ DARCL 42ft High-Cube Cargo Container",
    category: "Specialised Containers",
    yearPeriod: "2023–2024",
    approxYear: 2023,
    src: "/assets/containers/product-42ft-hc-cj-darcl-01.png",
    caption: "Extended 42-foot high-cube intermodal freight container built for domestic express cargo and parcel volume efficiency.",
    location: "Domestic Freight Operations",
    sourceRef: "Fleet Build Verification",
  },
  {
    id: "spec-7",
    title: "42ft Low-Profile Dwarf Container for Heavy Timber Cargo",
    category: "Specialised Containers",
    yearPeriod: "2020–2022",
    approxYear: 2021,
    src: "/assets/containers/product-42ft-dwarf-open-top-timber-01.png",
    caption: "42-foot low-height dwarf open top container built for heavy timber logs and high-density industrial cargo.",
    location: "Timber Freight Operations",
    sourceRef: "Forest Products Rail Project",
  },
  {
    id: "spec-8",
    title: "20ft Standard ISO Dry Freight Containers on Rail Rake",
    category: "Specialised Containers",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/containers/product-20ft-gp-container-01.png",
    caption: "CSC-plated standard ISO freight containers placed directly on broad-gauge flat wagons for intermodal movement.",
    location: "Indian Railways Network",
    sourceRef: "ISO 1496 Series-1 Specification",
  },

  // 5. Wagon Manufacturing & Development
  {
    id: "wagon-1",
    title: "Bi-Level Multi-Deck Auto Car Carrier Railway Wagon",
    category: "Wagon Manufacturing & Development",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/wagons/Car Carrier 9 Car.png",
    caption: "Bi-level high-capacity automotive carrier wagon with automated roll-on roll-off ramp tie-downs for 9 vehicles.",
    location: "Engineering Design Pipeline",
    sourceRef: "Automotive Wagon Project",
  },
  {
    id: "wagon-2",
    title: "High-Speed Low-Platform Container Flat Wagon (BLC)",
    category: "Wagon Manufacturing & Development",
    yearPeriod: "2025–2026",
    approxYear: 2025,
    src: "/assets/wagons/New Container Wagon.png",
    caption: "Low deck height flat wagon engineered for double-stack container transport under 25 kV AC electrified wires.",
    location: "Rolling Stock Development",
    sourceRef: "BLC Platform Blueprint",
  },
  {
    id: "wagon-3",
    title: "Next-Generation 25T Axle Load Container Wagon",
    category: "Wagon Manufacturing & Development",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/wagons/Next-Generation Container Wagon Design.png",
    caption: "New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval.",
    location: "RDSO Stage-I Evaluation",
    sourceRef: "RDSO Approval Notification",
  },
  {
    id: "wagon-4",
    title: "Roll-On / Roll-Off (Ro-Ro) Intermodal Rail Wagon Design",
    category: "Wagon Manufacturing & Development",
    yearPeriod: "2025–2026",
    approxYear: 2025,
    src: "/assets/wagons/RORO Wagon Container.png",
    caption: "Bi-level highway-to-rail intermodal rolling stock model designed for rapid roll-on truck-trailer freight transit.",
    location: "Engineering Development",
    sourceRef: "Ro-Ro Engineering Specification",
  },
  {
    id: "wagon-5",
    title: "Special Application Heavy Coil Freight Wagon",
    category: "Wagon Manufacturing & Development",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/wagons/Special Wagon Design3.png",
    caption: "Reinforced underframe and contoured floor cradles engineered for concentrated heavy steel coils and slabs.",
    location: "Engineering Pipeline",
    sourceRef: "Heavy Haul Wagon R&D",
  },

  // 6. Foundry & Precision Castings
  {
    id: "foundry-1",
    title: "Electric Locomotive Cast Steel Bearing Housing",
    category: "Foundry & Precision Castings",
    yearPeriod: "2012–2015",
    approxYear: 2014,
    src: "/assets/castings/bearing-housing-for-electrical-loco.png",
    caption: "Heavy-duty electric locomotive axle bearing housing cast and machined to rigorous Indian Railways RDSO specifications.",
    location: "Rewari Machine Shop",
    sourceRef: "IS 12117 Class A Foundry Melt",
  },
  {
    id: "foundry-2",
    title: "WDG4 Freight Locomotive Adapter Castings",
    category: "Foundry & Precision Castings",
    yearPeriod: "2016–2019",
    approxYear: 2017,
    src: "/assets/castings/adapter-for-WDG4-loco.png",
    caption: "High-integrity cast steel journal bearing adapter for heavy-haul diesel-electric freight locomotives.",
    location: "Rewari Foundry & Finishing",
    sourceRef: "Locomotive Spares Register",
  },
  {
    id: "foundry-3",
    title: "Cast Iron Brake Blocks for Railway Rolling Stock",
    category: "Foundry & Precision Castings",
    yearPeriod: "2016–2019",
    approxYear: 2018,
    src: "/assets/castings/CI-brake-blocks.png",
    caption: "High-friction railway grade cast iron brake blocks produced under strict metallurgical control.",
    location: "Rewari Foundry Line",
    sourceRef: "Railway Castings Schedule",
  },
  {
    id: "foundry-4",
    title: "Traction Motor End Covers for Electrical Locos",
    category: "Foundry & Precision Castings",
    yearPeriod: "2020–2022",
    approxYear: 2020,
    src: "/assets/castings/end-covers-for-electrical-locos.png",
    caption: "Precision machined end covers for high-power electric locomotives, inspected with ultrasonic NDT.",
    location: "Machine Bay 1",
    sourceRef: "Locomotive Component Quality Log",
  },

  // 7. Corner Castings
  {
    id: "corner-1",
    title: "Corner Castings Manufactured as per ISO 1161 Specifications",
    category: "Corner Castings",
    yearPeriod: "2016–2019",
    approxYear: 2017,
    src: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    caption: "Precision sand-cast corner castings produced in carbon-manganese steel under Lloyd's Register foundry approval (LR2489004WA).",
    location: "Rewari Foundry",
    sourceRef: "Lloyd's Register LR2489004WA Certificate",
  },

  // 8. Engineering & Quality
  {
    id: "eng-1",
    title: "In-House ISO 1496 Structural Load-Testing Facility",
    category: "Engineering & Quality",
    yearPeriod: "2020–2022",
    approxYear: 2021,
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    caption: "In-house structural load-testing facility for container designs available at Rewari Works verifying structural performance per ISO 1496 testing requirements.",
    location: "Rewari Testing Rig Facility",
    sourceRef: "IRS Certificate Report DLH21X014",
  },
  {
    id: "eng-2",
    title: "Precision Metal Forming CNC Hydraulic Press Brake Bay",
    category: "Engineering & Quality",
    yearPeriod: "2020–2022",
    approxYear: 2022,
    src: "/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg",
    caption: "High-tonnage CNC hydraulic press brake tooling forming corrugated Corten steel wall panels and structural profiles.",
    location: "Machine Bay, Rewari",
    sourceRef: "Plant Equipment Audit",
  },

  // 9. Shivlakha Rail & Logistics
  {
    id: "shiv-1",
    title: "Shivlakha Platform Administration & Operations Centre",
    category: "Shivlakha Rail & Logistics",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
    caption: "Central operations administration building and vehicle staging apron at the 150-acre Shivlakha multimodal platform.",
    location: "Shivlakha Platform, Gujarat",
    sourceRef: "Shivlakha Site Office Log",
  },
  {
    id: "shiv-2",
    title: "Approved NA-Zoned Multimodal Platform Master Plan",
    category: "Shivlakha Rail & Logistics",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    caption: "Approved NA-zoned master engineering layout (233,304 sq.m) depicting container sheds, Gati Shakti Terminal rail siding, and future Inland Container Terminal zones.",
    location: "Shivlakha Master Layout",
    sourceRef: "Kachchh Planning Approval Record",
  },
  {
    id: "shiv-3",
    title: "Shivlakha Rail Siding & Access Track Corridor",
    category: "Shivlakha Rail & Logistics",
    yearPeriod: "2025–2026",
    approxYear: 2025,
    src: "/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg",
    caption: "Dedicated broad-gauge railway siding and plant access trackage connecting to the mainline at Shivlakha.",
    location: "Shivlakha Works Corridor",
    sourceRef: "Siding Track Verification",
  },

  // 10. Gati Shakti Terminal
  {
    id: "gst-1",
    title: "Operational Rail Rake Handling at Gati Shakti Terminal Shivlakha",
    category: "Gati Shakti Terminal",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    caption: "Operational rake handling operations at Gati Shakti Terminal, Shivlakha, connected to the Indian Railways network.",
    location: "Shivlakha Gati Shakti Terminal",
    sourceRef: "Operational Handover September 2026",
  },
  {
    id: "gst-2",
    title: "Aerial View of Rail Siding & Rake Operations at Shivlakha",
    category: "Gati Shakti Terminal",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/shivlakha/terminal-shivlakha-panoramic-aerial-01.jpg",
    caption: "Aerial view of broad-gauge rail rake on the private siding at Gati Shakti Terminal, Shivlakha.",
    location: "Shivlakha Gati Shakti Terminal",
    sourceRef: "Aerial Operations Record 2026",
  },
  {
    id: "gst-3",
    title: "Container Yard Operations at Gati Shakti Terminal",
    category: "Gati Shakti Terminal",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg",
    caption: "Active container yard handling and reach-stacker operations at Gati Shakti Terminal, Shivlakha.",
    location: "Shivlakha Terminal Yard",
    sourceRef: "Yard Operations Log 2026",
  },

  // 11. Inland Container Terminal Development
  {
    id: "ict-1",
    title: "Customs-Notified Inland Container Terminal Development Zone",
    category: "Inland Container Terminal Development",
    yearPeriod: "2025–2026",
    approxYear: 2026,
    src: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    caption: "Shivlakha Inland Container Terminal site (CBIC approval received 10 September 2026; under construction and planning).",
    location: "Shivlakha Inland Container Terminal",
    sourceRef: "CBIC In-Principle Approval Record",
  },

  // 12. Corporate Events & Activities
  {
    id: "corp-1",
    title: "Kalyani Cast Tech Core Engineering & Operations Workforce",
    category: "Corporate Events & Activities",
    yearPeriod: "2023–2024",
    approxYear: 2024,
    src: "/assets/company/team-workforce-workforce-01.jpg",
    caption: "Corporate leadership, foundry metallurgists, design engineers, and technical workforce of Kalyani Cast Tech Limited.",
    location: "Rewari Manufacturing Works",
    sourceRef: "Annual Corporate Workforce Record",
  },
  {
    id: "corp-2",
    title: "Founder & Managing Director Shri Naresh Kumar",
    category: "Corporate Events & Activities",
    yearPeriod: "2016–2019",
    approxYear: 2018,
    src: "/assets/company/Naresh Sir.jpeg",
    caption: "Shri Naresh Kumar, B.E. Mech, M.Tech (IIT Madras) — Founder, Managing Director and pioneer of Indian Double-Stack Dwarf Containers.",
    location: "Corporate Office",
    sourceRef: "Executive Leadership Profile",
  },
];

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"news" | "photos">("news");
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [selectedYearPeriod, setSelectedYearPeriod] = useState<string>("All Years");
  const [modalItem, setModalItem] = useState<HistoricalGalleryItem | null>(null);

  // Synchronise with URL hash
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h === "#photos" || h === "#photo-gallery" || h === "#archive") {
        setActiveTab("photos");
      } else if (h === "#news" || h === "#updates") {
        setActiveTab("news");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabSwitch = (tab: "news" | "photos") => {
    setActiveTab(tab);
    const targetHash = tab === "news" ? "#news" : "#photos";
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, "", targetHash);
    }
  };

  const categories: GalleryCategory[] = [
    "All",
    "Company History & Milestones",
    "Rewari Manufacturing Works",
    "Container Manufacturing",
    "Specialised Containers",
    "Wagon Manufacturing & Development",
    "Foundry & Precision Castings",
    "Corner Castings",
    "Engineering & Quality",
    "Shivlakha Rail & Logistics",
    "Gati Shakti Terminal",
    "Inland Container Terminal Development",
    "Corporate Events & Activities",
  ];

  const yearPeriods = [
    "All Years",
    "2012–2015",
    "2016–2019",
    "2020–2022",
    "2023–2024",
    "2025–2026",
  ];

  // Filtered Photo Items
  const filteredPhotos = useMemo(() => {
    return HISTORICAL_PHOTO_GALLERY.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      if (selectedYearPeriod !== "All Years" && item.yearPeriod !== selectedYearPeriod) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedYearPeriod]);

  // Modal navigation within filtered list
  const currentModalIndex = useMemo(() => {
    if (!modalItem) return -1;
    return filteredPhotos.findIndex((p) => p.id === modalItem.id);
  }, [modalItem, filteredPhotos]);

  const handleModalPrev = () => {
    if (currentModalIndex > 0) {
      setModalItem(filteredPhotos[currentModalIndex - 1]);
    } else {
      setModalItem(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  const handleModalNext = () => {
    if (currentModalIndex < filteredPhotos.length - 1) {
      setModalItem(filteredPhotos[currentModalIndex + 1]);
    } else {
      setModalItem(filteredPhotos[0]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalItem) return;
      if (e.key === "Escape") setModalItem(null);
      if (e.key === "ArrowLeft") handleModalPrev();
      if (e.key === "ArrowRight") handleModalNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItem, currentModalIndex, filteredPhotos]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24 text-[#101820]">
      {/* ============================================================ */}
      {/* Hero Banner with Authentic Rail Freight Visual               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#0a1f3d] px-5 py-16 text-white sm:py-20 lg:px-8 border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70">
            <SiteLink to="/" className="hover:text-amber-300 transition-colors">
              Home
            </SiteLink>
            <span className="text-white/40">/</span>
            <span className="text-amber-300 font-semibold">Corporate Archive &amp; Gallery</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-medium text-blue-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Documented Milestones &amp; Industrial Operations (2012–2026)</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                News, Updates &amp; Historical Archive
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Explore the verified photographic record, milestone announcements, and manufacturing developments of Kalyani Cast Tech Limited from 2012 through 2026.
              </p>

              {/* Tab Navigation Switches */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleTabSwitch("news")}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "news"
                      ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-400"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <Newspaper className="h-4 w-4" />
                  <span>News &amp; Updates</span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-mono">
                    10 Disclosures
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTabSwitch("photos")}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "photos"
                      ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-400"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <Camera className="h-4 w-4" />
                  <span>Photo Gallery</span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-mono">
                    {HISTORICAL_PHOTO_GALLERY.length} Photographs
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-4 hidden sm:block">
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/rail/Double-Stacked Eco Freight at Sunset.png"
                    alt="Commercial Double-Stack Dwarf Container Train on Western Railway Network"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 z-10 rounded-full border border-amber-400/40 bg-[#07162c]/85 px-2.5 py-0.5 font-mono text-[11px] font-bold text-amber-300">
                    Commercial Heritage
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#07162c]/90 px-3.5 py-2 backdrop-blur-md flex items-center justify-between text-[11px] font-mono text-white/80">
                    <span className="font-semibold text-white">Western Railway Line</span>
                    <span className="text-white/60">July 2018 Run</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Main Content Area: News vs Photo Gallery                     */}
      {/* ============================================================ */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12">
        {/* SECTION 1: NEWS & UPDATES */}
        {activeTab === "news" && (
          <section id="news" aria-labelledby="news-updates-heading" className="scroll-mt-28">
            <div className="border-b border-[#d9dfe6] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
                  Section 1 · Official Announcements &amp; Milestone Disclosures
                </span>
                <h2 id="news-updates-heading" className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#101820]">
                  Company News &amp; Updates (2012–2026)
                </h2>
              </div>
              <span className="font-mono text-xs text-[#44505e]">
                Verified chronologically from official corporate, BSE, and regulatory records
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {APPROVED_NEWS_UPDATES.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-[#07162c]/85 px-3 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                      {item.category}
                    </div>
                    <div className="absolute bottom-2.5 right-3 rounded-md bg-[#07162c]/90 px-2 py-0.5 font-mono text-xs font-bold text-amber-300">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#44505e] mb-2">
                        <Calendar className="h-3.5 w-3.5 text-[#1b4b96]" />
                        <span>{item.date}</span>
                        <span>·</span>
                        <span className="font-semibold text-primary">{item.source}</span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-[#101820] leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#44505e]">
                        {item.summary}
                      </p>
                    </div>

                    {item.linkHref && (
                      <div className="mt-6 border-t border-[#f1f4f8] pt-4">
                        <SiteLink
                          to={item.linkHref}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:text-[#0e2a55] transition-colors"
                        >
                          <span>{item.linkText || "View Details"}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </SiteLink>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: PHOTO GALLERY */}
        {activeTab === "photos" && (
          <section id="photos" aria-labelledby="photo-gallery-heading" className="scroll-mt-28">
            <div className="border-b border-[#d9dfe6] pb-4 mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
                Section 2 · Historical Corporate Photo Archive
              </span>
              <h2 id="photo-gallery-heading" className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#101820]">
                Authentic Photographic Archive (2012–2026)
              </h2>
              <p className="mt-1 text-sm text-[#44505e]">
                Explore authentic photography across manufacturing operations, container designs, rolling stock, and rail terminal infrastructure.
              </p>
            </div>

            {/* Filter Bar: Chronological Year Periods */}
            <div className="rounded-xl border border-[#d9dfe6] bg-white p-4 sm:p-5 shadow-xs mb-6">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#44505e] block mb-2">
                    1. Filter by Historical Time Period (2012–2026):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {yearPeriods.map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => setSelectedYearPeriod(period)}
                        className={`rounded-lg px-3.5 py-1.5 text-xs font-bold font-mono transition-all cursor-pointer ${
                          selectedYearPeriod === period
                            ? "bg-[#0e2a55] text-white shadow-xs ring-2 ring-[#0e2a55]/20"
                            : "bg-[#f1f4f8] text-[#44505e] hover:bg-[#e2e8f0] hover:text-[#101820]"
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#f1f4f8] pt-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#44505e] block mb-2">
                    2. Filter by Authentic Archive Category:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`rounded-md px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#1b4b96] text-white shadow-xs font-bold"
                            : "bg-[#f8f9fa] text-[#44505e] border border-[#d9dfe6] hover:bg-[#e2e8f0]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Results Counter */}
            <div className="flex items-center justify-between text-xs font-mono text-[#44505e] mb-6 px-1">
              <span>
                Showing <strong>{filteredPhotos.length}</strong> authentic photographs in{" "}
                <strong className="text-[#101820]">{selectedCategory}</strong> ({selectedYearPeriod})
              </span>
              {(selectedCategory !== "All" || selectedYearPeriod !== "All Years") && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedYearPeriod("All Years");
                  }}
                  className="text-[#1b4b96] hover:underline font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Photos Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md"
                >
                  <div
                    onClick={() => setModalItem(item)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <div className="absolute top-3 left-3 rounded-full bg-[#07162c]/85 px-2.5 py-0.5 font-mono text-[11px] font-bold text-white border border-white/20 backdrop-blur-md">
                      {item.yearPeriod}
                    </div>

                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#07162c]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <ZoomIn className="h-4 w-4" />
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                      <span className="truncate pr-2 font-medium">{item.location}</span>
                      <span className="text-amber-300 font-bold shrink-0">{item.approxYear}</span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1b4b96] block mb-1">
                        {item.category}
                      </span>
                      <h3
                        onClick={() => setModalItem(item)}
                        className="font-display text-sm font-bold text-[#101820] leading-snug cursor-pointer group-hover:text-[#1b4b96] transition-colors"
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#44505e] line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-[#f1f4f8] pt-2.5 flex items-center justify-between text-[11px] font-mono text-[#718096]">
                      <span className="truncate pr-2">{item.sourceRef}</span>
                      <button
                        type="button"
                        onClick={() => setModalItem(item)}
                        className="text-[#1b4b96] font-bold hover:underline shrink-0 cursor-pointer"
                      >
                        Enlarge &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ============================================================ */}
      {/* Lightbox / Modal Image Viewer                                */}
      {/* ============================================================ */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-slate-950 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#07162c] px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-300 border border-blue-400/30">
                  {modalItem.category}
                </span>
                <span className="font-mono text-xs text-white/60">
                  {modalItem.yearPeriod} (Circa {modalItem.approxYear})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                aria-label="Close modal viewer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Body with Prev/Next Controls */}
            <div className="relative aspect-[16/10] w-full max-h-[62vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={modalItem.src}
                alt={modalItem.title}
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={handleModalPrev}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#07162c]/80 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={handleModalNext}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#07162c]/80 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="border-t border-white/10 bg-[#07162c] p-5">
              <h2 className="font-display text-lg font-bold text-white">
                {modalItem.title}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                {modalItem.caption}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60 border-t border-white/5 pt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>{modalItem.location}</span>
                </div>
                <div>
                  <span>Source Reference: </span>
                  <span className="text-white/80">{modalItem.sourceRef}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
