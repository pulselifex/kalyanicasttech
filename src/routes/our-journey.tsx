import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Factory,
  Train,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/our-journey")({
  head: () => pageHead("/our-journey"),
  component: OurJourneyPage,
});

// Verified Corporate & Industrial Milestones
const companyMilestones = [
  {
    year: "Sept 2012",
    title: "Incorporation & Rewari Works Established",
    badge: "Foundation Milestone",
    division: "Division 1 — Manufacturing",
    desc: "Kalyani Cast Tech Limited was incorporated on 20 September 2012 (CIN: L26990DL2012PLC242760). Established a Class A ferrous foundry to IS 12117:1996 and precision machine shop at Village Mamaria Thethar, District Rewari, Haryana, supplying critical precision castings to Indian Railways, power, cement, and core engineering industries.",
    evidence: "Certificate of Incorporation · RoC Delhi & Haryana · CIN: L26990DL2012PLC242760",
    photo: "/assets/manufacturing/factory-rewari-facade-01.png",
    caption: "Rewari Manufacturing Works (Haryana) — Foundry & Container Fabrication Facility",
  },
  {
    year: "Jan 2014",
    title: "Commercial Production & Facility Trial",
    badge: "Operational Baseline",
    division: "Division 1 — Manufacturing",
    desc: "The integrated commercial trial run at Rewari commenced, proving induction melting furnaces, no-bake chemical sand moulding, and dedicated hydraulic fixtures for freight container underframes and corrugated steel boxing.",
    evidence: "Rewari Plant Operations Record · Plant Commissioning Log",
    photo: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    caption: "Container Underframe & Side-Wall Fabrication Line at Rewari Works",
  },
  {
    year: "July 2018",
    title: "Commercial Double-Stack Dwarf Container Run",
    badge: "Engineering Breakthrough",
    division: "Division 1 — Manufacturing",
    desc: "Designed and engineered in-house under the leadership of Managing Director Shri Naresh Kumar, the 1,930 mm height low-profile dwarf container enabled the first commercial double-stack freight train service under 25 kV AC electrified overhead equipment (OHE) in July 2018, operating from Kanalus to Rewari on Western Railway.",
    evidence: "Western Railway Commercial Traffic Record · Indian Railways Notification",
    photo: "/assets/rail/Double-Stacked Eco Freight at Sunset.jpeg",
    caption: "Double-Stack Dwarf Container Rake Operating Under Electrified Traction",
  },
  {
    year: "Nov 2023",
    title: "BSE SME Public Listing",
    badge: "Public Governance",
    division: "Corporate Milestone",
    desc: "Successfully listed on the Bombay Stock Exchange (BSE Limited) SME Platform under Scrip Code 544023. Transitioned into an institutionally audited public company with statutory corporate governance, board committees, and transparent shareholder reporting.",
    evidence: "BSE SME Listing Confirmation · Scrip Code: 544023 · ISIN: INE0N6U01018",
    photo: "/assets/company/NK & Rly Minister.jpg",
    caption: "Corporate Governance & Industry Engagement",
  },
  {
    year: "10 Sept 2026",
    title: "CBIC Approval Received",
    badge: "Regulatory Approval",
    division: "Division 2 — Terminal",
    desc: "Central Board of Indirect Taxes and Customs (CBIC) approval received on 10 September 2026 for the Inland Container Terminal at Shivlakha. The facility is under construction and planning; approval does not constitute operational commissioning or commercial bonded cargo availability.",
    evidence: "CBIC Letter of Intent · Inter-Ministerial Committee (IMC) Clearance",
    photo: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
    caption: "Shivlakha Inland Container Terminal Development Site — Administration & Yard Staging Area",
  },
  {
    year: "15 Sept 2026",
    title: "Gati Shakti Terminal Infrastructure Completion",
    badge: "Terminal Infrastructure",
    division: "Division 2 — Terminal",
    desc: "Completion and formal inauguration on 15 September 2026 of the 30-acre Gati Shakti Terminal at Village Shivlakha, Kachchh, Gujarat. Equipped with dedicated broad-gauge railway siding connected directly to the Indian Railways network.",
    evidence: "Shivlakha Terminal Infrastructure Handover & Inauguration Record",
    photo: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    caption: "Gati Shakti Terminal (30 Acres) — Operational Rail Siding at Shivlakha",
  },
  {
    year: "Oct 2026",
    title: "RDSO Stage-I Approval for New Wagon Design",
    badge: "Advanced Engineering",
    division: "Division 1 — Manufacturing",
    desc: "New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Stage-I approval represents concept validation and does not constitute commercial production clearance or rolling-stock availability.",
    evidence: "RDSO Stage-I Concept Approval Notification · Ministry of Railways",
    photo: "/assets/containers/Next-Generation Container Wagon Design.png",
    caption: "Specialized Freight Wagon Rolling Stock Design Concept",
  },
];

// Explore Kalyani 8 Approved Destinations
const exploreDestinations = [
  {
    title: "About Kalyani",
    href: "/about-us",
    desc: "Corporate background, industrial identity, two-division operating structure, and governance standards.",
  },
  {
    title: "Manufacturing Facilities",
    href: "/facilities",
    desc: "Heavy fabrication bays, induction melt shop, and testing equipment at Rewari Works.",
  },
  {
    title: "Products & Applications",
    href: "/products-applications",
    desc: "Standard ISO containers, specialized cargo solutions, and Corner Castings manufactured as per ISO 1161 specifications.",
  },
  {
    title: "Innovation & Concepts",
    href: "/innovation",
    desc: "Forward-looking freight engineering concepts, dwarf container designs, and rolling stock R&D.",
  },
  {
    title: "Engineering & Quality",
    href: "/engineering-quality",
    desc: "In-house mechanical and NDT testing rig, metallurgical laboratory, and statutory quality systems.",
  },
  {
    title: "Shivlakha Project",
    href: "/shivlakha-rail-logistics",
    desc: "150-acre rail-linked multimodal terminal platform and manufacturing development in Kachchh, Gujarat.",
  },
  {
    title: "Board & Management",
    href: "/leadership",
    desc: "Experienced executive leadership and independent board members guiding corporate growth.",
  },
  {
    title: "Investor Relations",
    href: "/investor-relations",
    desc: "Financial results, statutory filings, annual reports, and investor communications for BSE SME: 544023.",
  },
];

export function OurJourneyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#101820] selection:bg-[#1b4b96] selection:text-white pb-24">
      {/* ============================================================ */}
      {/* 1. SECTION 1 — HERO BANNER                                    */}
      {/* ============================================================ */}
      <section
        aria-labelledby="our-journey-hero-heading"
        className="relative overflow-hidden bg-[#0a1f3d] px-5 py-16 text-white sm:py-24 lg:px-8 border-b border-white/10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-amber-300 transition-colors">
              Home
            </SiteLink>
            <span className="text-white/40">/</span>
            <span className="text-amber-300 font-semibold">Our Journey</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left 5 cols: Narrative & CTAs */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-medium text-blue-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Over a Decade of Milestones (2012–2026)</span>
              </div>

              <h1
                id="our-journey-hero-heading"
                className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl"
              >
                Our Journey
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                An evolving journey in industrial manufacturing, specialised products and terminal infrastructure development from 2012 to 2026.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-10 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                >
                  <SiteLink to="/facilities">
                    Explore Manufacturing <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 rounded-md border-white/30 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white transition-colors"
                >
                  <SiteLink to="/shivlakha-rail-logistics">
                    Review Terminal Development
                  </SiteLink>
                </Button>
              </div>
            </div>

            {/* Right 7 cols: Authentic Historical Hero Visual */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/rail/Central-launch-Dwarf-container-1.jpeg"
                    alt="National launch of Double-Stack Dwarf Container with Ministry of Railways"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#07162c]/85 px-3 py-1 font-mono text-xs font-bold text-amber-300 backdrop-blur-md shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>Historical Milestone</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#07162c]/90 px-4 py-2.5 backdrop-blur-md flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="font-semibold text-white">National Launch Service</span>
                    <span className="text-white/60">Ministry of Railways Flag-off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* 2. SECTION 2 — CORPORATE INTRODUCTION                        */}
        {/* ============================================================ */}
        <section
          id="corporate-overview"
          aria-labelledby="corporate-overview-heading"
          className="mt-16 scroll-mt-28"
        >
          <div className="rounded-xl border border-[#b8c9e5] bg-white p-8 sm:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
                  Corporate Heritage &amp; Industrial Architecture
                </span>
                <h2
                  id="corporate-overview-heading"
                  className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#101820]"
                >
                  Over a Decade of Disciplined Industrial Engineering
                </h2>
                <div className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-[#44505e]">
                  <p>
                    <strong className="text-[#101820]">Kalyani Cast Tech Limited</strong> was incorporated on 20 September 2012
                    (BSE SME: 544023, CIN: L26990DL2012PLC242760). From our origins as a dedicated ferrous foundry and
                    precision engineering facility at Rewari Works, Haryana, the company has consistently focused on heavy
                    engineering hardware that demands structural reliability and metallurgical rigor.
                  </p>
                  <p>
                    Over 14+ years, this operational foundation has driven our growth into custom freight container manufacturing,
                    including the pioneering in-house engineering of low-profile dwarf containers for double-stack electrified
                    rail transport. Today, Kalyani Cast Tech Limited operates through a clear, two-division structure:
                    <strong className="text-[#101820]"> Division 1 — Manufacturing</strong> and
                    <strong className="text-[#101820]"> Division 2 — Terminal</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Metrics Column */}
              <div className="lg:col-span-4 bg-[#f1f5f9] p-6 rounded-lg border border-[#d9dfe6]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#556579] font-bold">
                  Corporate Snapshot
                </h3>
                <dl className="mt-4 divide-y divide-[#cbd5e1] text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#556579]">Incorporation</dt>
                    <dd className="font-mono font-semibold text-[#101820]">September 2012</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#556579]">BSE SME Scrip Code</dt>
                    <dd className="font-mono font-bold text-[#1b4b96]">544023</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#556579]">Business Structure</dt>
                    <dd className="font-semibold text-[#101820]">Two Business Divisions</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#556579]">Primary Manufacturing Base</dt>
                    <dd className="text-[#101820]">Rewari Works, Haryana</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#556579]">Multimodal Terminal Base</dt>
                    <dd className="text-[#101820]">Shivlakha, Gujarat</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SECTION 3 — CORPORATE TIMELINE (CHRONOLOGICAL LEDGER)     */}
        {/* ============================================================ */}
        <section
          id="corporate-timeline"
          aria-labelledby="timeline-heading"
          className="mt-20 scroll-mt-28"
        >
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
              Verified Milestones &amp; Audit Trail
            </span>
            <h2
              id="timeline-heading"
              className="mt-2 font-display text-2xl sm:text-4xl font-bold text-[#101820]"
            >
              Chronological Development Ledger
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44505e]">
              A documented timeline of key corporate and industrial milestones grounded in statutory records,
              Western Railway traffic logs, and official notifications.
            </p>
          </div>

          <div className="relative border-l-2 border-[#b8c9e5] ml-4 md:ml-36 space-y-12">
            {companyMilestones.map((ms, idx) => (
              <div key={idx} className="relative pl-6 md:pl-10">
                {/* Timeline Indicator Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#1b4b96] shadow-sm" />

                {/* Year Stamp on Desktop */}
                <div className="hidden md:block absolute -left-40 top-0 w-28 text-right">
                  <span className="font-mono text-sm font-bold text-[#1b4b96] bg-[#ebf3fe] px-2.5 py-1 rounded border border-[#b8c9e5]">
                    {ms.year}
                  </span>
                </div>

                {/* Milestone Content Card */}
                <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    {/* Authentic Photography */}
                    <div className="md:col-span-5 bg-slate-100 aspect-[16/10] overflow-hidden">
                      <img
                        src={ms.photo}
                        alt={ms.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Narrative & Evidence */}
                    <div className="md:col-span-7 p-6 md:pl-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="md:hidden font-mono text-xs font-bold text-[#1b4b96] bg-[#ebf3fe] px-2 py-0.5 rounded">
                          {ms.year}
                        </span>
                        <span className="rounded-full border border-blue-400/40 bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-800">
                          {ms.division}
                        </span>
                        <span className="rounded-full border border-emerald-400/40 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
                          {ms.badge}
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-[#101820]">
                        {ms.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#44505e] sm:text-base">
                        {ms.desc}
                      </p>

                      <div className="mt-4 rounded bg-[#f8fafc] border border-[#e2e8f0] p-2.5 text-xs font-mono text-[#556579]">
                        <span className="font-bold text-[#1b4b96]">Document Reference:</span>{" "}
                        {ms.evidence}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Visual Documentary & Motion Media Concept                    */}
        {/* ============================================================ */}
        <section
          id="documentary-concept"
          aria-labelledby="documentary-concept-heading"
          className="mt-20 scroll-mt-28"
        >
          <div className="overflow-hidden rounded-2xl border border-[#b8c9e5] bg-gradient-to-br from-[#0a1f3d] via-[#0e2a55] to-[#143a75] p-8 text-white shadow-xl sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Media Roadmap · In Production Planning
              </div>
              <span className="font-mono text-xs text-white/70">
                Format: 16:9 4K UHD · Planned Runtime: 2.5–3.5 Minutes
              </span>
            </div>

            <div className="mt-6 max-w-3xl">
              <h2
                id="documentary-concept-heading"
                className="font-display text-2xl font-bold sm:text-3xl"
              >
                Corporate Documentary &amp; Engineering Showcase Concept
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">
                To complement static corporate milestones with authentic industrial motion, a four-movement corporate documentary is structured for future digital publication:
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-xs">
                <span className="font-mono text-xs font-bold text-amber-300">Movement 01</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">Foundry Melt &amp; Metallurgy</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Induction furnace melt streams, optical emission spectroscopy, and precision pouring of corner castings manufactured as per ISO 1161 specifications at Rewari Works.
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-xs">
                <span className="font-mono text-xs font-bold text-amber-300">Movement 02</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">Structural Fabrication &amp; Rig</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  High-cube and dwarf container assembly in specialized boxing jigs, GMAW welding passes, and in-house ISO 1496 structural load-testing facility for container designs available at Rewari Works.
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-xs">
                <span className="font-mono text-xs font-bold text-amber-300">Movement 03</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">July 2018 Dwarf Milestone</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Archival documentary video of the maiden double-stack dwarf container rake movement under 25 kV AC overhead electric traction on Western Railway (Kanalus to Rewari).
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-xs">
                <span className="font-mono text-xs font-bold text-amber-300">Movement 04</span>
                <h3 className="mt-2 font-display text-base font-bold text-white">Shivlakha Multimodal Platform</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Cinematic aerial cinematography showcasing the 150-acre contiguous land bank, operational Gati Shakti Terminal with private broad-gauge railway siding, and 5-acre covered fabrication shed in Gujarat.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-3.5 text-xs text-white/70">
              <strong className="text-white">Directorial Status Note:</strong> Archival footage master compilation and site cinematography coordination are underway. Video player container scheduled for deployment upon final editorial sign-off.
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SECTION 4 — MANUFACTURING DIVISION JOURNEY               */}
        {/* ============================================================ */}
        <section
          id="manufacturing-journey"
          aria-labelledby="manufacturing-journey-heading"
          className="mt-24 scroll-mt-28"
        >
          <div className="rounded-xl border border-[#b8c9e5] bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
                  Division 1 — Manufacturing
                </span>
                <h2
                  id="manufacturing-journey-heading"
                  className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#101820]"
                >
                  Manufacturing Division Evolution
                </h2>
                <p className="mt-2 text-sm text-[#44505e]">
                  Integrated heavy industrial capabilities spanning freight containers, rolling-stock concept design, and foundry precision castings.
                </p>
              </div>
              <Button asChild variant="outline" className="border-[#1b4b96] text-[#1b4b96] hover:bg-blue-50 shrink-0">
                <SiteLink to="/facilities">
                  Inspect Manufacturing Facilities <ArrowRight className="ml-1.5 h-4 w-4" />
                </SiteLink>
              </Button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* 1. Container Manufacturing */}
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#1b4b96]">
                    <Layers className="h-5 w-5 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-[#101820]">
                      Container Manufacturing
                    </h3>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                    Custom ISO freight containers, dwarf containers, coiltainers, open-top, and modular cargo units
                    engineered to ISO 668 and ISO 1496-1 specifications with certified weld integrity and surface protection.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                  <SiteLink
                    to="/products-applications"
                    className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#101820]"
                  >
                    View Container Catalogue <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </SiteLink>
                </div>
              </div>

              {/* 2. Wagon Manufacturing */}
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#1b4b96]">
                    <Train className="h-5 w-5 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-[#101820]">
                      Wagon Manufacturing
                    </h3>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                    Next-generation rolling-stock concept designs engineered for heavy freight corridors, including
                    the New Wagon Design with RDSO Stage-I approval progressing through subsequent approval levels.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                  <SiteLink
                    to="/products-applications"
                    className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#101820]"
                  >
                    Review Wagon Capabilities <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </SiteLink>
                </div>
              </div>

              {/* 3. Foundry Unit */}
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#1b4b96]">
                    <Factory className="h-5 w-5 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-[#101820]">
                      Foundry Unit
                    </h3>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                    Operates an IS 12117 Class A ferrous foundry at Rewari producing precision castings, corner
                    castings manufactured as per ISO 1161 specifications (with Lloyd&apos;s Register and IRS foundry approvals), and critical locomotive components.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                  <SiteLink
                    to="/products-applications"
                    className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#101820]"
                  >
                    View Precision Castings <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SECTION 5 — TERMINAL DIVISION JOURNEY                    */}
        {/* ============================================================ */}
        <section
          id="terminal-journey"
          aria-labelledby="terminal-journey-heading"
          className="mt-16 scroll-mt-28"
        >
          <div className="rounded-xl border border-[#b8c9e5] bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
                  Division 2 — Terminal
                </span>
                <h2
                  id="terminal-journey-heading"
                  className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#101820]"
                >
                  Terminal Division Infrastructure Development
                </h2>
                <p className="mt-2 text-sm text-[#44505e]">
                  Multimodal terminal infrastructure combining direct broad-gauge rail connectivity with container and rolling-stock facilities.
                </p>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white shrink-0">
                <SiteLink to="/shivlakha-rail-logistics">
                  Explore Shivlakha Project <ArrowRight className="ml-1.5 h-4 w-4" />
                </SiteLink>
              </Button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Component 1: Gati Shakti Terminal */}
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
                    Operational
                  </span>
                  <span className="font-mono text-xs text-[#556579]">30 Acres</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-[#101820]">
                  Gati Shakti Terminal
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                  Dedicated 30-acre rail-linked terminal equipped with private broad-gauge railway siding
                  connecting directly to the Indian Railways network. Formal infrastructure inauguration conducted
                  on 15 September 2026.
                </p>
                <div className="mt-4 rounded bg-white border border-[#e2e8f0] p-3 text-xs text-[#556579]">
                  <strong className="text-[#101820]">Operational Note:</strong> Operational status.
                  Inauguration and operational status do not imply regular scheduled rake operations or published commercial
                  tariffs; specific movements are evaluated on bilateral feasibility.
                </div>
              </div>

              {/* Component 2: Inland Container Terminal */}
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 border border-blue-300 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-800">
                    Under Construction
                  </span>
                  <span className="font-mono text-xs text-[#556579]">30 Acres</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-[#101820]">
                  Inland Container Terminal
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                  30-acre planned facility currently under construction to provide container yard staging, customs
                  examination, and multimodal container handling. Advancing under formal CBIC approval received on 10 September 2026.
                </p>
                <div className="mt-4 rounded bg-white border border-[#e2e8f0] p-3 text-xs text-[#556579]">
                  <strong className="text-[#101820]">Governance Note:</strong> Currently under construction.
                  Not operational, not commissioned, and not open for commercial bonded cargo bookings.
                </div>
              </div>
            </div>

            {/* Shivlakha 150-Acre Master Allocation Table */}
            <div className="mt-8 overflow-hidden rounded-lg border border-[#cbd5e1]">
              <div className="bg-[#f1f5f9] px-4 py-3 border-b border-[#cbd5e1]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#101820]">
                  Shivlakha Project Master Land Bank Allocation (150 Acres Total)
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-[#cbd5e1] bg-[#f8fafc] font-mono text-xs text-[#556579]">
                    <tr>
                      <th className="px-4 py-2.5">Project Component</th>
                      <th className="px-4 py-2.5 text-right">Allocation</th>
                      <th className="px-4 py-2.5">Current Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#101820]">Gati Shakti Terminal</td>
                      <td className="px-4 py-2.5 font-mono text-right text-[#101820]">30 acres</td>
                      <td className="px-4 py-2.5 text-emerald-800 font-medium">Operational (Inaugurated 15 Sept 2026)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#101820]">Inland Container Terminal</td>
                      <td className="px-4 py-2.5 font-mono text-right text-[#101820]">30 acres</td>
                      <td className="px-4 py-2.5 text-blue-800 font-medium">Under development (CBIC approval received on 10 September 2026)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#101820]">Container and wagon manufacturing shed</td>
                      <td className="px-4 py-2.5 font-mono text-right text-[#101820]">5 acres</td>
                      <td className="px-4 py-2.5 text-amber-800 font-medium">Covered fabrication shed</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-semibold text-[#101820]">Future expansion</td>
                      <td className="px-4 py-2.5 font-mono text-right text-[#101820]">85 acres</td>
                      <td className="px-4 py-2.5 text-[#556579]">Reserved contiguous industrial land bank</td>
                    </tr>
                    <tr className="bg-[#f8fafc] font-bold">
                      <td className="px-4 py-2.5 text-[#101820]">Total Land Allocation</td>
                      <td className="px-4 py-2.5 font-mono text-right text-[#1b4b96]">150 acres</td>
                      <td className="px-4 py-2.5 text-[#101820]">100% Contiguous Project Boundary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. SECTION 6 — LOOKING AHEAD                                 */}
        {/* ============================================================ */}
        <section
          id="looking-ahead"
          aria-labelledby="looking-ahead-heading"
          className="mt-16 scroll-mt-28"
        >
          <div className="rounded-xl border border-[#b8c9e5] bg-gradient-to-r from-[#0a1f3d] to-[#1b4b96] p-8 sm:p-10 text-white shadow-lg">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
              Future Industrial Direction
            </span>
            <h2
              id="looking-ahead-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-bold"
            >
              Integrating Heavy Fabrication with Direct Rail Logistics
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/90">
              Kalyani Cast Tech Limited continues to progress through disciplined, phased development.
              By combining precision foundry casting, specialized freight container fabrication, and rolling-stock
              concept engineering with direct rail terminal siding connectivity at Shivlakha, the company is positioning
              itself to address high-volume bulk and containerized cargo movement demands across western maritime corridors
              and northern industrial hinterlands.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-white text-[#0a1f3d] hover:bg-slate-100 font-semibold">
                <SiteLink to="/shivlakha-rail-logistics">
                  Review Shivlakha Infrastructure <ArrowRight className="ml-1.5 h-4 w-4" />
                </SiteLink>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <SiteLink to="/engineering-quality">
                  Review Quality Systems
                </SiteLink>
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. SECTION 7 — EXPLORE KALYANI (8 APPROVED DESTINATIONS)     */}
        {/* ============================================================ */}
        <section
          id="explore-kalyani"
          aria-labelledby="explore-kalyani-heading"
          className="mt-20 scroll-mt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
              Corporate Navigation
            </span>
            <h2
              id="explore-kalyani-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#101820]"
            >
              Explore Kalyani
            </h2>
            <p className="mt-2 text-sm text-[#44505e]">
              Navigate across the operational facilities, product capabilities, governance frameworks, and investor portals of Kalyani Cast Tech Limited.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exploreDestinations.map((dest, idx) => (
              <SiteLink
                key={idx}
                to={dest.href}
                className="group flex flex-col justify-between rounded-lg border border-[#cbd5e1] bg-white p-5 transition-all duration-200 hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                      {dest.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-[#556579] group-hover:text-[#1b4b96] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#556579]">
                    {dest.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f1f5f9] font-mono text-[11px] text-[#1b4b96] font-semibold">
                  Access Portal &rarr;
                </div>
              </SiteLink>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. SECTION 8 — COMMERCIAL ENQUIRY ROUTING                    */}
        {/* ============================================================ */}
        <section
          id="commercial-enquiry"
          aria-labelledby="commercial-enquiry-heading"
          className="mt-20 scroll-mt-28"
        >
          <div className="rounded-xl border border-[#b8c9e5] bg-white p-8 sm:p-10 shadow-sm text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b4b96]">
              Commercial Discussions
            </span>
            <h2
              id="commercial-enquiry-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#101820]"
            >
              Discuss Your Container or Rail Engineering Requirements
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#44505e]">
              Connect with our technical and commercial teams to discuss custom freight container fabrication,
              precision castings, or rail-linked multimodal terminal feasibility.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild className="h-11 rounded-md bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                <SiteLink to="/contact#enquiry-form">
                  Submit Technical Enquiry <ArrowRight className="ml-1.5 h-4 w-4" />
                </SiteLink>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-md border-[#cbd5e1] px-6 text-sm font-semibold text-[#101820] hover:bg-[#f1f5f9]">
                <SiteLink to="/contact">
                  Corporate Directory &amp; Office Locations
                </SiteLink>
              </Button>
            </div>
            <div className="mt-8 pt-6 border-t border-[#e2e8f0] text-xs font-mono text-[#556579]">
              Kalyani Cast Tech Limited · BSE SME: 544023 · CIN: L26990DL2012PLC242760
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
