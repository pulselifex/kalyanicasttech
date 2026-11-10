import { useState } from "react";
import {
  ArrowRight,
  Package,
  Train,
  Factory,
  Boxes,
  ShieldCheck,
  FlaskConical,
  FileText,
  Building2,
  Anchor,
  Award,
  Layers,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./SiteLink";
import { HomeIntegratedHero } from "./HomeIntegratedHero";

/* ------------------------------------------------------------------ */
/* Data: Two Business Divisions Architecture                          */
/* ------------------------------------------------------------------ */
const businessDivisions = [
  {
    id: "mfg-division",
    title: "Manufacturing Division",
    subtitle: "Container Manufacturing, Railway Equipment & Precision Castings",
    location: "Rewari Manufacturing Works · Haryana",
    img: "/assets/manufacturing/Rewari Kalyani Casttech.png",
    imgAlt: "Kalyani Cast Tech Rewari Works manufacturing plant and fabrication bays",
    desc: "Rewari Works brings together container manufacturing, railway equipment development and ferrous foundry operations.",
    capabilities: [
      {
        title: "Freight Container Manufacturing",
        desc: "ISO standard, high-cube, open-top coiltainers and custom freight containers.",
      },
      {
        title: "Railway Equipment & Rolling Stock",
        desc: "New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval.",
      },
      {
        title: "Foundry Unit & Precision Castings",
        desc: "Ferrous foundry producing container corner castings manufactured as per ISO 1161 specifications, and heavy industrial castings.",
      },
    ],
    link: "/manufacturing",
    linkText: "Explore Manufacturing Capabilities",
    theme: "border-[#1b4b96]/20 bg-white hover:border-[#1b4b96]",
    badgeColor: "bg-[#1b4b96]/10 text-[#1b4b96] border-[#1b4b96]/20",
  },
  {
    id: "terminal-division",
    title: "Terminal Division",
    subtitle: "Rail-Linked Logistics Infrastructure",
    location: "Shivlakha Integrated Platform · Kachchh, Gujarat",
    img: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    imgAlt: "Operational container rake handling at Gati Shakti Terminal Shivlakha private rail siding",
    desc: "150-acre integrated development at Shivlakha, comprising terminal infrastructure, a container and wagon manufacturing shed, and land reserved for future expansion.",
    capabilities: [
      {
        title: "Gati Shakti Terminal",
        desc: "Operational 30-acre terminal with a dedicated broad-gauge railway siding connected directly to the Indian Railways network.",
      },
      {
        title: "Inland Container Terminal",
        desc: "Under development; CBIC approval received 10 September 2026. Planned 30-acre customs-bonded terminal facility.",
      },
      {
        title: "Integrated Development",
        desc: "5-acre manufacturing shed and 85-acre land reserve for future expansion.",
      },
    ],
    link: "/shivlakha-rail-logistics",
    linkText: "Explore Terminal Infrastructure",
    theme: "border-emerald-600/20 bg-white hover:border-emerald-600",
    badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20",
  },
];

/* ------------------------------------------------------------------ */
/* Data: Key Enterprise Scale & Quality Highlight Metrics             */
/* ------------------------------------------------------------------ */
const scaleMetrics = [
  {
    stat: "Containers",
    label: "Freight Solutions",
  },
  {
    stat: "Foundry",
    label: "Ferrous Castings",
  },
  {
    stat: "Testing",
    label: "Structural Load Testing",
  },
  {
    stat: "150 Acres",
    label: "Shivlakha Platform",
  },
];

/* ------------------------------------------------------------------ */
/* Data: Selected Flagship Product Families                           */
/* ------------------------------------------------------------------ */
const productFamilies = {
  standard: {
    id: "standard",
    name: "Standard ISO Containers",
    tag: "Manufactured to ISO 1496 Series-1 Requirements",
    title: "20' GP & High Cube ISO Freight Containers",
    desc: "Manufactured and designed to comply with ISO 1496 Series-1 requirements. 20-foot GP and high-cube containers for multimodal freight movement.",
    specs: [
      "Corten steel construction",
      "Structural welding and inspection",
      "Verified stacking and payload ratings",
    ],
    img: "/assets/containers/product-20ft-gp-container-01.png",
    imgAlt: "20 Feet GP Standard ISO Container on Rail Rake",
    link: "/products-applications#standard-containers",
  },
  specialised: {
    id: "specialised",
    name: "Specialised Industrial Freight",
    tag: "Heavy Payloads & Severe Environments",
    title: "Heavy Open-Top Coiltainers & Specialised Freight Boxes",
    desc: "Custom freight containers engineered for concentrated steel coils, bulk minerals and heavy industrial cargo.",
    specs: [
      "Integral cradle well saddles for heavy coil cargo",
      "Heavy-duty corner posts and reinforced end frames",
      "Forklift pockets and top-lifting apertures",
    ],
    img: "/assets/containers/product-40ft-open-top-coiltainer-01.jpeg",
    imgAlt: "Specialised Salt and Steel Cargo Container manufactured by Kalyani Cast Tech",
    link: "/products-applications#specialised-containers",
  },
  rail: {
    id: "rail",
    name: "Electrified Rail Logistics",
    tag: "Low-Profile Design",
    title: "Commercial Double-Stack Dwarf Freight Containers",
    desc: "Patented 1,930 mm low-profile container architecture engineered to run double-stacked under 25 kV AC overhead electric equipment on Indian Railways.",
    specs: [
      "1,930 mm low profile maximizing overhead clearance",
      "Operational on Western Railway since July 2018",
      "Compatible with low-deck container flat wagons",
    ],
    img: "/assets/containers/product-40ft-dwarf-side-access-01.png",
    imgAlt: "Patented Double-Stack Dwarf Container for electrified Indian Railways routes",
    link: "/innovation#dwarf-containers",
  },
  castings: {
    id: "castings",
    name: "Precision Castings & Foundry",
    tag: "Manufactured to ISO 1161",
    title: "Corner Castings & Heavy Rolling-Stock Components",
    desc: "High-integrity carbon-manganese steel castings manufactured in an IS 12117 compliant ferrous foundry. Our Corner Castings are manufactured as per ISO 1161 specifications.",
    specs: [
      "Manufactured as per ISO 1161 specifications with Lloyd's Register foundry approval",
      "In-house optical emission spectrometer analysis",
      "Sub-zero Charpy impact and physical tensile testing",
    ],
    img: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    imgAlt: "Corner Castings manufactured as per ISO 1161 specifications at Rewari Works",
    link: "/products-applications#precision-castings",
  },
};

/* ------------------------------------------------------------------ */
/* Data: Dual Operating Facilities Footprint                          */
/* ------------------------------------------------------------------ */
const facilityLocations = [
  {
    name: "Rewari Manufacturing Works",
    state: "Haryana",
    type: "Container Fabrication Plant & Foundry Unit",
    img: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    imgAlt: "Heavy steel fabrication bay at Rewari Works, Haryana",
    desc: "Established production plant housing a ferrous foundry, CNC plate preparation, automated boxing jigs, and structural container test rig.",
    highlights: [
      "Ferrous foundry pouring corner castings manufactured as per ISO 1161 specifications",
      "In-house ISO 1496 structural load-testing facility for container designs",
      "CNC hydraulic press brake and automated welding lines",
      "In-house spectrometer and ultrasonic flaw detection",
    ],
    link: "/facilities#rewari",
    linkText: "View Rewari Works Details",
  },
  {
    name: "Shivlakha Integrated Platform",
    state: "Kachchh, Gujarat",
    type: "150-Acre Rail-Linked Logistics Platform",
    img: "/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg",
    imgAlt: "Operational broad-gauge railway siding and terminal layout at Shivlakha, Gujarat",
    desc: "150-acre integrated development at Shivlakha, comprising terminal infrastructure, a container and wagon manufacturing shed, and land reserved for future expansion.",
    highlights: [
      "30 Acres: Gati Shakti Terminal (Operational · Dedicated Rail Siding)",
      "30 Acres: Inland Container Terminal (CBIC approval received on 10 September 2026 · Under development)",
      "5 Acres: Container and wagon manufacturing shed",
      "85 Acres: Future expansion reserve (150 Acres Master Plan)",
    ],
    link: "/shivlakha-rail-logistics",
    linkText: "Explore Shivlakha Platform",
  },
];

/* ------------------------------------------------------------------ */
/* Data: Key Statutory Investor Disclosures                           */
/* ------------------------------------------------------------------ */
const investorDisclosures = [
  {
    title: "13th Annual Report (FY 2024-25)",
    category: "Annual Statements",
    date: "September 2025",
    url: "/documents/investors/13th-Annual-Report_FY-2024-2025.pdf",
  },
  {
    title: "Financial Results (Half-Year ended 30.09.2025)",
    category: "Financial Results",
    date: "November 2025",
    url: "/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf",
  },
  {
    title: "Shareholding Pattern (Quarter ended 31.03.2025)",
    category: "Shareholder Information",
    date: "April 2025",
    url: "/documents/investors/Shareholding-pattern_31.03.2025.pdf",
  },
  {
    title: "Code of Conduct & Corporate Governance Policies",
    category: "Governance Policies",
    date: "Statutory Disclosures",
    url: "/investors/corporate-governance",
  },
];

/* ------------------------------------------------------------------ */
/* Data: 3 B2B Commercial Enquiry Personas                            */
/* ------------------------------------------------------------------ */
const enquiryPersonas = [
  {
    title: "Container Fleet Procurement",
    subtitle: "Standard ISO & Specialised Freight",
    desc: "Submit technical specifications for standard ISO dry cargo boxes, high-cube units, dwarf containers, or custom industrial bulk containers.",
    cta: "Inquire Container Fleet",
    href: "/contact#enquiry-form",
    icon: Boxes,
  },
  {
    title: "Precision Castings & Foundry",
    subtitle: "Corner Castings & Rolling Stock",
    desc: "Enquire about Corner Castings manufactured as per ISO 1161 specifications, locomotive brake blocks, or heavy carbon-manganese industrial castings from our ferrous foundry.",
    cta: "Inquire Castings Supply",
    href: "/contact#enquiry-form",
    icon: Factory,
  },
  {
    title: "Terminal Infrastructure & Siding",
    subtitle: "Shivlakha Rail-Linked Platform",
    desc: "Enquire about rail-linked infrastructure, terminal development status, and logistics requirements at our Shivlakha platform.",
    cta: "Enquire About Infrastructure",
    href: "/contact#enquiry-form",
    icon: Train,
  },
];

export function HomePage() {
  const [activeFamily, setActiveFamily] = useState<
    "standard" | "specialised" | "rail" | "castings"
  >("standard");

  const currentProduct = productFamilies[activeFamily];

  return (
    <div className="flex flex-col">
      {/* ============================================================ */}
      {/* SECTION 1: HERO & CORPORATE POSITIONING GATEWAY              */}
      {/* ============================================================ */}
      <HomeIntegratedHero />

      {/* ============================================================ */}
      {/* SECTION 2: TWO BUSINESS DIVISIONS ARCHITECTURE SHOWCASE      */}
      {/* ============================================================ */}
      <section
        id="business-divisions"
        className="bg-white py-16 lg:py-24 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              Business Divisions
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
              Two Business Divisions. One Integrated Vision.
            </h2>
            <p className="mt-4 text-base text-[#44505e] leading-relaxed">
              Kalyani Cast Tech operates through two divisions: Manufacturing and Terminal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {businessDivisions.map((division) => (
              <div
                key={division.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border ${division.theme} shadow-xs transition-all duration-300 hover:shadow-xl`}
              >
                <div>
                  {/* High-Resolution Division Photo */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={division.img}
                      alt={division.imgAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-bold backdrop-blur-md ${division.badgeColor}`}
                      >
                        {division.location}
                      </span>
                    </div>
                  </div>

                  {/* Division Narrative & Key Capabilities */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-bold text-[#101820]">
                      {division.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-medium text-[#1b4b96]">
                      {division.subtitle}
                    </p>
                    <p className="mt-4 text-sm text-[#44505e] leading-relaxed">
                      {division.desc}
                    </p>

                    <div className="mt-6 space-y-3.5 border-t border-[#d9dfe6]/60 pt-6">
                      {division.capabilities.map((cap) => (
                        <div key={cap.title} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b4b96]" />
                          <div>
                            <strong className="text-sm font-semibold text-[#101820]">
                              {cap.title}:
                            </strong>{" "}
                            <span className="text-sm text-[#44505e]">
                              {cap.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clear Action Link */}
                <div className="border-t border-[#f1f4f8] bg-[#f8fafc] p-5 sm:px-8">
                  <Button
                    asChild
                    className="w-full sm:w-auto h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75] shadow-xs"
                  >
                    <SiteLink to={division.link}>
                      {division.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </SiteLink>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: ENTERPRISE SCALE & QUALITY HIGHLIGHT STRIP         */}
      {/* ============================================================ */}
      <section
        id="scale-metrics"
        className="bg-[#f8fafc] py-12 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {scaleMetrics.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col ${
                  idx !== 0 ? "lg:border-l lg:border-[#d9dfe6] lg:pl-8" : ""
                }`}
              >
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1b4b96]">
                  {item.stat}
                </span>
                <h4 className="mt-2 font-display text-base font-bold text-[#101820]">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: SELECTED FLAGSHIP PRODUCT FAMILIES SHOWCASE        */}
      {/* ============================================================ */}
      <section
        id="product-families"
        className="bg-white py-16 lg:py-24 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Capabilities &amp; Products
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl">
                Container Manufacturing &amp; Rolling Stock
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#44505e] leading-relaxed">
                Standard and specialised freight containers, railway equipment and precision castings.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 shrink-0 border-[#d9dfe6] bg-white text-[#101820] hover:border-[#1b4b96] hover:bg-slate-50 font-semibold"
            >
              <SiteLink to="/products-applications">
                Explore Product Catalogue <ArrowRight className="ml-2 h-4 w-4" />
              </SiteLink>
            </Button>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 border-b border-[#d9dfe6] pb-4">
            {Object.values(productFamilies).map((family) => {
              const isActive = activeFamily === family.id;
              return (
                <button
                  key={family.id}
                  onClick={() =>
                    setActiveFamily(
                      family.id as "standard" | "specialised" | "rail" | "castings"
                    )
                  }
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#1b4b96] text-white shadow-xs"
                      : "bg-[#f8fafc] text-[#44505e] hover:bg-slate-100 hover:text-[#101820]"
                  }`}
                >
                  {family.name}
                </button>
              );
            })}
          </div>

          {/* Dynamic Media Showcase (Large Split Layout) */}
          <div className="mt-8 rounded-2xl border border-[#d9dfe6] bg-[#f8fafc] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Product Visual Asset (55% Width on LG) */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-xs aspect-[16/10]">
                  <img
                    src={currentProduct.img}
                    alt={currentProduct.imgAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Product Technical Narrative (45% Width on LG) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#1b4b96]">
                    {currentProduct.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-[#101820]">
                    {currentProduct.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#44505e] leading-relaxed">
                    {currentProduct.desc}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {currentProduct.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 shrink-0 text-[#1b4b96] mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-[#101820]">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d9dfe6]">
                  <Button
                    asChild
                    className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75]"
                  >
                    <SiteLink to={currentProduct.link}>
                      View Specifications in Catalogue <ArrowRight className="ml-2 h-4 w-4" />
                    </SiteLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#718096] italic">
            * Note: Certain specialized container designs and rail wagon concepts represent custom engineering solutions developed to client operational specifications.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: DUAL OPERATING LOCATIONS & TERMINAL FOOTPRINT      */}
      {/* ============================================================ */}
      <section
        id="operating-locations"
        className="bg-[#f1f4f8] py-16 lg:py-24 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              Infrastructure &amp; Plant Locations
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
              Our Facilities
            </h2>
            <p className="mt-4 text-base text-[#44505e] leading-relaxed">
              Manufacturing at Rewari, Haryana, and an integrated rail-linked development at Shivlakha, Gujarat.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {facilityLocations.map((loc) => (
              <div
                key={loc.name}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={loc.img}
                      alt={loc.imgAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#0e2a55]/90 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                        {loc.state}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="font-mono text-xs font-bold text-[#1b4b96]">
                      {loc.type}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                      {loc.name}
                    </h3>
                    <p className="mt-3 text-sm text-[#44505e] leading-relaxed">
                      {loc.desc}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-[#d9dfe6] pt-6">
                      {loc.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b4b96]" />
                          <span className="text-sm font-medium text-[#101820]">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#f1f4f8] bg-[#f8fafc] p-5 sm:px-8">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto h-11 border-[#d9dfe6] bg-white text-[#101820] hover:border-[#1b4b96] hover:bg-slate-50 font-semibold"
                  >
                    <SiteLink to={loc.link}>
                      {loc.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </SiteLink>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#556579] text-center max-w-3xl mx-auto">
            * Commercial freight movement at the Gati Shakti Terminal is subject to railway operating arrangements and scheduling. Inland Container Terminal is under active planning and construction backed by CBIC approval dated 10 September 2026.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: ENGINEERING RIGOR, TESTING RIG & CERTIFICATIONS    */}
      {/* ============================================================ */}
      <section
        id="engineering-rigor"
        className="bg-white py-16 lg:py-24 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left 60%: Authentic Workshop / Testing Bay Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-[#d9dfe6] bg-slate-100 shadow-md aspect-[16/10]">
                <img
                  src="/assets/manufacturing/manufacturing-container-mig-welding-01.jpg"
                  alt="Industrial container fabrication workshop and testing bay at Rewari Works"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#07162c]/90 p-4 text-white backdrop-blur-md">
                  <span className="font-mono text-xs font-bold text-blue-300">
                    Structural Load Testing
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-white/90">
                    In-house structural load testing for container designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 40%: Accredited Frameworks & Credentials */}
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Industrial Discipline &amp; Compliance
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
                Engineering, Quality &amp; Governance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#44505e] leading-relaxed">
                Our manufacturing activities are supported by defined quality systems, engineering tests and relevant certifications.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4 flex items-start gap-3.5">
                  <Award className="h-5 w-5 text-[#1b4b96] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#101820]">
                      Lloyd&apos;s Register EMEA Approved Foundry
                    </h4>
                    <p className="text-xs text-[#556579] mt-0.5">
                      Certificate No: LR2489004WA foundry shop approval for carbon and alloy steel castings (Valid to June 2027).
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4 flex items-start gap-3.5">
                  <ShieldCheck className="h-5 w-5 text-[#1b4b96] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#101820]">
                      ISO Management System Certifications
                    </h4>
                    <p className="text-xs text-[#556579] mt-0.5">
                      ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Safety).
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4 flex items-start gap-3.5">
                  <FlaskConical className="h-5 w-5 text-[#1b4b96] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#101820]">
                      In-House Metallurgical &amp; NDT Labs
                    </h4>
                    <p className="text-xs text-[#556579] mt-0.5">
                      40T UTM tensile test, -45°C sub-zero Charpy impact, spectrometer chemical analysis.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4 flex items-start gap-3.5">
                  <FileText className="h-5 w-5 text-[#1b4b96] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#101820]">
                      Listed Corporate Governance &amp; Transparency
                    </h4>
                    <p className="text-xs text-[#556579] mt-0.5">
                      BSE SME Scrip: 544023 · SEBI LODR Regulation 46 disclosures and audited statutory filings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/engineering-quality">
                    Explore Engineering &amp; Quality <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d9dfe6] bg-white px-5 text-sm font-semibold text-[#101820] hover:border-[#1b4b96]"
                >
                  <SiteLink to="/investor-relations">Investor Portal</SiteLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: LISTED CORPORATE GOVERNANCE & INVESTOR GATEWAY     */}
      {/* ============================================================ */}
      <section
        id="investor-gateway"
        className="bg-[#f8fafc] py-16 border-b border-[#d9dfe6]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Investor Relations · BSE SME: 544023
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Investor Information &amp; Disclosures
              </h2>
              <p className="mt-2 text-sm text-[#44505e] max-w-2xl leading-relaxed">
                Annual reports, financial results, shareholding information and corporate disclosures.
              </p>
            </div>
            <Button
              asChild
              className="h-10 shrink-0 rounded-md bg-[#1b4b96] px-5 text-sm font-semibold text-white hover:bg-[#143a75]"
            >
              <SiteLink to="/investor-relations">
                Access Investor Relations Portal <ArrowRight className="ml-1.5 h-4 w-4" />
              </SiteLink>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {investorDisclosures.map((doc) => (
              <a
                key={doc.title}
                href={doc.url}
                target={doc.url.startsWith("http") || doc.url.endsWith(".pdf") ? "_blank" : undefined}
                rel={doc.url.startsWith("http") || doc.url.endsWith(".pdf") ? "noreferrer noopener" : undefined}
                className="group flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-5 shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#1b4b96] uppercase">
                    {doc.category}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-[#101820] group-hover:text-[#1b4b96]">
                    {doc.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#f1f4f8] pt-3 text-xs text-[#556579]">
                  <span>{doc.date}</span>
                  <span className="font-semibold text-[#1b4b96] group-hover:underline">
                    Access &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: TARGETED B2B COMMERCIAL ENQUIRY DESK               */}
      {/* ============================================================ */}
      <section
        id="commercial-enquiry"
        className="relative overflow-hidden bg-[#07162c] py-16 lg:py-20 text-white"
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 h-full w-96 opacity-10"
          style={{
            background: "linear-gradient(135deg, #1b4b96 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-300">
              Business Enquiries
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-white">
              Discuss Your Business Requirements
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80">
              Contact our team about containers, precision castings or Shivlakha infrastructure.
            </p>
          </div>

          {/* 3 Targeted Persona Action Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {enquiryPersonas.map((persona) => {
              const Icon = persona.icon;
              return (
                <div
                  key={persona.title}
                  className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-xs transition-all hover:border-blue-400/60 hover:bg-white/10"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1b4b96] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">
                      {persona.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-blue-300">
                      {persona.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                      {persona.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Button
                      asChild
                      className="w-full h-10 rounded-md bg-[#1b4b96] px-4 text-xs sm:text-sm font-semibold text-white hover:bg-[#143a75]"
                    >
                      <SiteLink to={persona.href}>
                        {persona.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </SiteLink>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-white/60">
              Technical evaluations and business enquiries available for specialized container designs and fleet requirements.
            </span>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-10 rounded-md border-white/30 bg-transparent px-5 text-xs font-bold text-white hover:bg-white hover:text-[#07162c]"
            >
              <SiteLink to="/contact">Corporate Directory &amp; Offices</SiteLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
