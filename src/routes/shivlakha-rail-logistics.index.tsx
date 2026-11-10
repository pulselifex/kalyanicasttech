import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Train,
  Factory,
  Layers,
  MapPin,
  Clock,
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Building2,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/shivlakha-rail-logistics/")({
  head: () => pageHead("/shivlakha-rail-logistics"),
  component: ShivlakhaPage,
});

// 150-Acre Land Allocation Register Data
const landAllocations = [
  {
    id: "gct",
    name: "Gati Shakti Terminal",
    acres: 30,
    pct: "20.0%",
    status: "Operational",
    statusBadgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    dotColor: "bg-emerald-500",
    inauguration: "Operational · Connected to Indian Railways Network",
    summary:
      "Dedicated 30-acre operational rail-linked terminal equipped with private broad-gauge railway siding connecting directly to the Indian Railways network.",
    governanceNote:
      "Gati Shakti Terminal at Shivlakha, Gujarat, is operational and connected to the Indian Railways network. Operational status does not imply regular scheduled rake operations or published commercial tariffs; specific cargo movements are evaluated on bilateral feasibility.",
  },
  {
    id: "icd",
    name: "Inland Container Terminal",
    acres: 30,
    pct: "20.0%",
    status: "Under Construction",
    statusBadgeColor: "bg-blue-50 text-blue-800 border-blue-300",
    dotColor: "bg-blue-500",
    inauguration: "CBIC Approval Received (10 Sept 2026) · Planning Stage",
    summary:
      "30-acre planned facility currently under construction to provide container yard staging, customs examination, and multimodal container handling.",
    governanceNote:
      "Currently under construction. Not operational, not commissioned, and not open for commercial bonded cargo bookings.",
  },
  {
    id: "mfg",
    name: "Container and wagon manufacturing shed",
    acres: 5,
    pct: "3.3%",
    status: "Manufacturing Infrastructure",
    statusBadgeColor: "bg-amber-50 text-amber-900 border-amber-300",
    dotColor: "bg-amber-500",
    inauguration: "Covered Structural Fabrication Shed",
    summary:
      "Dedicated 5-acre covered manufacturing infrastructure designed for structural assembly, welding, and inspection of freight containers and rolling stock.",
    governanceNote:
      "Manufacturing infrastructure developed to support container production and rolling-stock assembly. Production schedules confirmed per project enquiry.",
  },
  {
    id: "expansion",
    name: "Future expansion",
    acres: 85,
    pct: "56.7%",
    status: "Future Expansion",
    statusBadgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    dotColor: "bg-slate-400",
    inauguration: "Available / Reserved Land Bank",
    summary:
      "Contiguous 85-acre land parcel reserved for future expansion.",
    governanceNote:
      "Reserved land allocation supporting future project development. Not represented as committed or operational infrastructure.",
  },
];

// Strategic Integration Pillars
const strategicPillars = [
  {
    title: "Co-Located Manufacturing & Logistics",
    desc: "Co-located manufacturing infrastructure and rail connectivity are planned to support the movement of containers and railway equipment between manufacturing and rail facilities.",
  },
  {
    title: "Direct Broad-Gauge Rail Connection",
    desc: "A dedicated private siding connected to Indian Railways enables direct block-rake loading for heavy industrial cargo, linking western maritime gateways with north and central Indian freight corridors.",
  },
  {
    title: "Regional Industrial Catchment Alignment",
    desc: "Positioned in Kachchh district to serve high-volume, cost-sensitive commodities including bulk minerals (bauxite, bentonite), industrial salt, marine chemicals, ceramics, and structural steel.",
  },
  {
    title: "Controlled, Phased Development",
    desc: "Infrastructure readiness precedes commercial operations. Each facility component advances through disciplined regulatory, structural, and operational milestones before service commencement.",
  },
];

// 6 Authentic Shivlakha Photographs
const shivlakhaGallery = [
  {
    src: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    alt: "Broad-gauge rail siding and terminal tracks connecting to Indian Railways mainline at Shivlakha",
    caption: "OPERATIONAL RAIL SIDING: Rake handling operations at Gati Shakti Terminal, Shivlakha, connected to Indian Railways network",
  },
  {
    src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
    alt: "Shivlakha terminal operations yard, weighbridge access and administration building",
    caption: "TERMINAL YARD & ADMINISTRATION: Site operations office and vehicle staging yard at Village Shivlakha",
  },
  {
    src: "/assets/shivlakha/terminal-shivlakha-rail-terminal-01.png",
    alt: "Covered freight container fabrication workshop and structural assembly shed at Shivlakha",
    caption: "PERMANENT WAY INFRASTRUCTURE: Ballasted rail siding and plant access trackage at Shivlakha platform",
  },
  {
    src: "/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg",
    alt: "Broad-gauge railway track siding with heavy ballast and pre-stressed concrete sleepers at Shivlakha",
    caption: "PERMANENT WAY INFRASTRUCTURE: Ballasted broad-gauge track and concrete sleepers at Shivlakha siding",
  },
  {
    src: "/assets/shivlakha/terminal-shivlakha-panoramic-aerial-01.jpg",
    alt: "Shivlakha rail yard track layout and terminal staging platform",
    caption: "RAIL TERMINAL STAGING: Dedicated trackage and cargo transfer platform at Shivlakha Gati Shakti Terminal",
  },
  {
    src: "/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg",
    alt: "Rail siding alignment and plant connectivity corridor at Shivlakha platform",
    caption: "CONNECTIVITY CORRIDOR: Rail alignment integrating manufacturing bays with terminal rail siding",
  },
];

function ShivlakhaPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Section 1: Hero Banner — 7:5 Image-Dominant Proportion       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#07162c] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-amber-300">
              Home
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Shivlakha Integrated Project</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left 5 Cols: Narrative & Actions */}
            <div className="lg:col-span-5">
              {/* Multimodal Platform Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                150-Acre Multimodal Platform
              </div>

              <p className="mt-3 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
                Integrated Multimodal Logistics &amp; Manufacturing
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl">
                Shivlakha — An Integrated Multimodal Development
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                An integrated infrastructure development combining rail-linked logistics planning, container and wagon manufacturing infrastructure, and future expansion in Kachchh, Gujarat.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-10 rounded-md bg-[#1b4b96] px-5 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Discuss a Business Requirement <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 rounded-md border-white/30 bg-white/10 px-5 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
                >
                  <a href="#introduction">Explore the Project</a>
                </Button>
              </div>
            </div>

            {/* Right 7 Cols: Dominant Authentic Photography */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl">
                <div className="aspect-[16/10] w-full">
                  <img
                    src="/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg"
                    alt="Aerial view of 150-acre Shivlakha multimodal platform, private rail siding and terminal development"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
                  <div>
                    <span className="font-mono font-bold uppercase text-amber-300">
                      Gati Shakti Terminal &amp; Private Rail Siding
                    </span>
                    <p className="text-white/80 font-medium">
                      Operational and connected to the Indian Railways network
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-950/80 px-3 py-1 font-mono text-[11px] text-emerald-300 backdrop-blur-sm border border-emerald-400/30 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Operational · Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Caption Bar for Hero */}
        <div className="relative border-t border-white/15 bg-[#0a1f3d]/90 px-5 py-2.5 text-xs text-white/75 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between flex-wrap gap-2">
            <span>
              <strong className="text-white">Facility View:</strong> Integrated Rail Siding &amp; Multimodal Development Site
            </span>
            <span className="font-mono text-white/80">
              Location: Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* Section 2: Project Introduction                              */}
        {/* ============================================================ */}
        <section id="introduction" className="mt-20 scroll-mt-28">
          <div className="rounded-xl border border-[#b8c9e5] bg-white p-8 sm:p-10 shadow-sm">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#1b4b96]">Project Overview &amp; Corporate Structure</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Bridging Industrial Manufacturing with Mainline Rail Freight
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#44505e]">
                <p>
                  The Shivlakha Integrated Project is located at Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat. The development is planned as a multimodal industrial platform that combines heavy freight container and rolling-stock manufacturing with direct broad-gauge rail connectivity.
                </p>
                <p className="border-l-2 border-[#1b4b96] pl-4 font-medium text-[#101820]">
                  The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited.
                </p>
                <p>
                  Kalyani Cast Tech Limited is the listed parent company and principal corporate entity. The Shivlakha development extends the company&apos;s established manufacturing capabilities at Rewari Works (Haryana) into Gujarat&apos;s strategic maritime and industrial freight belt.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-[#d9dfe6] pt-5 text-xs text-[#44505e]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1b4b96] shrink-0" />
                  <span>Bhachau, Kachchh, Gujarat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="h-4 w-4 text-[#1b4b96] shrink-0" />
                  <span>Broad-Gauge Indian Railways Siding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#1b4b96] shrink-0" />
                  <span>Principal Identity: Kalyani Cast Tech Limited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 3: 150-Acre Integrated Development                   */}
        {/* ============================================================ */}
        <section id="land-allocation" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Master Plan Land Allocation</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              150-Acre Master Plan: Dedicated Infrastructure Allocation
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              The Shivlakha development encompasses a contiguous 150-acre master plan in Kachchh, Gujarat. Land is formally allocated across operational infrastructure, active development, dedicated manufacturing sheds, and long-term expansion reserves.
            </p>
          </div>

          {/* Allocation Progress Bar */}
          <div className="mt-8 rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#101820]">
                Total Integrated Development Allocation: 150 Acres
              </span>
              <span className="font-mono text-xs font-semibold text-[#1b4b96]">
                100% Contiguous Land Bank
              </span>
            </div>

            <div className="h-5 w-full overflow-hidden rounded-full bg-[#f1f4f8] flex">
              <div
                className="bg-emerald-600 transition-all"
                style={{ width: "20.0%" }}
                title="Gati Shakti Terminal: 30 Acres (20.0%)"
              />
              <div
                className="bg-blue-600 transition-all"
                style={{ width: "20.0%" }}
                title="Inland Container Terminal: 30 Acres (20.0%)"
              />
              <div
                className="bg-amber-500 transition-all"
                style={{ width: "3.3%" }}
                title="Container and Wagon Manufacturing Shed: 5 Acres (3.3%)"
              />
              <div
                className="bg-slate-400 transition-all"
                style={{ width: "56.7%" }}
                title="Future Expansion: 85 Acres (56.7%)"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-emerald-600 shrink-0" />
                <span>Gati Shakti Terminal: 30 Acres (20.0%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-blue-600 shrink-0" />
                <span>Inland Container Terminal: 30 Acres (20.0%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-amber-500 shrink-0" />
                <span>Mfg Shed: 5 Acres (3.3%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-slate-400 shrink-0" />
                <span>Future Expansion: 85 Acres (56.7%)</span>
              </div>
            </div>

            <p className="mt-4 border-t border-[#d9dfe6] pt-3 text-xs text-[#44505e] italic">
              Notice: This visual represents master plan land allocation across the 150-acre site. Readiness and development stages vary by component and do not imply that all 150 acres are currently in commercial operation.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 4: Project Components (4 Distinct Cards)             */}
        {/* ============================================================ */}
        <section id="components" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Project Components</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Distinct Infrastructure Components &amp; Operational Status
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              The four functional components of the Shivlakha Integrated Project represent separate operational roles, developmental phases, and regulatory frameworks.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {landAllocations.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-bold ${item.statusBadgeColor}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                      {item.status}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#101820]">
                      {item.acres} Acres ({item.pct})
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-[#101820]">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#1b4b96]">
                    {item.inauguration}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#f1f4f8] pt-3 text-xs text-[#44505e] bg-[#f8fafc] -mx-6 -mb-6 p-4 rounded-b-xl border-t border-[#d9dfe6]">
                  <strong className="text-[#101820] block mb-1">Status Disclosure:</strong>
                  {item.governanceNote}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 5: Integrated Development Vision                     */}
        {/* ============================================================ */}
        <section id="vision" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Strategic Integration</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Synergy Between Manufacturing and Rail-Linked Logistics
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Shivlakha is conceived not as standalone warehousing or disconnected fabrication, but as an integrated industrial ecosystem where container production directly feeds railway logistics.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategicPillars.map((p, idx) => (
              <div
                key={p.title}
                className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-5 shadow-sm"
              >
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e2a55] font-mono text-xs font-bold text-white mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#101820]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-[#b8c9e5] bg-[#ebf3fe]/70 p-4 text-xs sm:text-sm text-[#101820] leading-relaxed">
            <strong className="block mb-1 font-semibold text-[#1b4b96]">
              Controlled Operational Scope:
            </strong>
            The integrated development model emphasizes disciplined execution. Infrastructure availability is verified on site before commercial agreements are confirmed. The company does not advertise generic transit-time guarantees, published freight discounts, or unverified train frequencies.
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 6: Project Gallery                                   */}
        {/* ============================================================ */}
        <section id="gallery" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Photographic Documentation</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Authentic Shivlakha Project &amp; Infrastructure Gallery
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Verified photographic records documenting active railway infrastructure, terminal operations yard, and manufacturing sheds at Village Shivlakha, Kachchh, Gujarat.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shivlakhaGallery.map((img) => (
              <div
                key={img.src}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-[#d9dfe6] bg-[#0a1f3d] px-3.5 py-2.5 text-[11px] font-mono font-medium text-white/90">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 7: Business Enquiry                                  */}
        {/* ============================================================ */}
        <section id="enquiry" className="mt-20 scroll-mt-28">
          <div className="rounded-xl border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] via-white to-white p-8 sm:p-10 shadow-sm">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#1b4b96]">Commercial Engagement</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Explore a Business Discussion at Shivlakha
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#44505e]">
                Organisations interested in the Shivlakha Integrated Project may contact Kalyani Cast Tech Limited to discuss their requirements and explore the appropriate next steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Initiate Project Discussion <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d9dfe6] bg-white px-6 text-sm font-semibold text-[#101820] hover:border-[#1b4b96]"
                >
                  <SiteLink to="/contact">
                    Contact Corporate Office &amp; Plant
                  </SiteLink>
                </Button>
              </div>

              <div className="mt-6 border-t border-[#b8c9e5] pt-4 text-xs text-[#44505e]">
                <strong className="text-[#101820]">Commercial Terms:</strong> Submitting cargo or infrastructure details initiates technical and operational feasibility review. It does not constitute a booking confirmation, tariff schedule, or commercial service commitment.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
