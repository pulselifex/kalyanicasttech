import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  Factory,
  MapPin,
  Train,
  ShieldCheck,
  ArrowRight,
  Boxes,
  Layers,
  FlaskConical,
  Phone,
  Mail,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => pageHead("/facilities"),
  component: FacilitiesPage,
});

/* ------------------------------------------------------------------ */
/* Section 4: Authorised 150-Acre Land Allocation Table               */
/* Strictly adheres to Section 6 safeguards (no unverified codes)     */
/* ------------------------------------------------------------------ */
const shivlakhaAllocations = [
  {
    zone: "Gati Shakti Terminal",
    acres: "30 Acres",
    status: "Operational",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    notes: "Inaugurated 15 September 2026. Operational broad-gauge rail siding connecting to the Western Railway network. Commercial freight movement subject to railway operating arrangements and scheduling.",
  },
  {
    zone: "Inland Container Terminal",
    acres: "30 Acres",
    status: "Under development",
    statusColor: "text-amber-700 bg-amber-50 border-amber-200",
    notes: "CBIC approval received 10 September 2026. Dedicated container handling yard and administrative facility under planning and construction.",
  },
  {
    zone: "Container and wagon manufacturing shed",
    acres: "5 Acres",
    status: "Manufacturing Infrastructure",
    statusColor: "text-blue-700 bg-blue-50 border-blue-200",
    notes: "Fabrication and assembly shed infrastructure co-located with the rail siding. Commissioning and operational status to be verified prior to commercial production.",
  },
  {
    zone: "Future expansion",
    acres: "85 Acres",
    status: "Allocated for Future Expansion",
    statusColor: "text-slate-700 bg-slate-50 border-slate-200",
    notes: "Allocated land bank for future expansion.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 6: Authentic Facilities Photographic Gallery Data          */
/* ------------------------------------------------------------------ */
type GalleryCategory = "all" | "rewari" | "processes" | "quality" | "shivlakha";

interface GalleryItem {
  id: string;
  category: "rewari" | "processes" | "quality" | "shivlakha";
  categoryLabel: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  // 1. Rewari Works
  {
    id: "rewari-facade",
    category: "rewari",
    categoryLabel: "Rewari Works",
    title: "Rewari Works Main Plant Facade",
    caption: "Industrial manufacturing plant located at Village Mamaria Thethar, District Rewari, Haryana.",
    image: "/assets/manufacturing/Rewari Kalyani Casttech.png",
    alt: "Kalyani Cast Tech Rewari Works industrial facade in Haryana",
  },
  {
    id: "rewari-plant",
    category: "rewari",
    categoryLabel: "Rewari Works",
    title: "Rewari Plant & Assembly Yards",
    caption: "Fabrication workshop bays and open storage yard at Rewari Works.",
    image: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    alt: "Rewari Works manufacturing plant and fabrication yards",
  },
  {
    id: "rewari-hero",
    category: "rewari",
    categoryLabel: "Rewari Works",
    title: "Heavy Engineering Works Facade",
    caption: "Industrial entrance and administrative complex at Rewari Works.",
    image: "/assets/manufacturing/factory-rewari-facade-01.png",
    alt: "Kalyani Cast Tech manufacturing facility entrance and signage",
  },

  // 2. Manufacturing Processes
  {
    id: "mfg-fabrication-workshop",
    category: "processes",
    categoryLabel: "Manufacturing Processes",
    title: "Container Fabrication & Assembly Bays",
    caption: "Structural steel fitting, jig positioning, and sub-assembly alignment.",
    image: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    alt: "Container fabrication workshop bay with structural steel frames",
  },
  {
    id: "mfg-boxing-process",
    category: "processes",
    categoryLabel: "Manufacturing Processes",
    title: "Industrial Container Boxing Jig",
    caption: "Precision alignment of side panels, roof assembly, and corner posts in boxing jig.",
    image: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    alt: "Specialized boxing jig aligning container panels and frame",
  },
  {
    id: "mfg-welding-process",
    category: "processes",
    categoryLabel: "Manufacturing Processes",
    title: "Structural Welding & Assembly",
    caption: "Semi-automatic GMAW/FCAW welding lines for container frame rigidity.",
    image: "/assets/manufacturing/Container Welding Process after Boxing.jpg",
    alt: "GMAW structural welding on container base and side framework",
  },
  {
    id: "mfg-paint-booth",
    category: "processes",
    categoryLabel: "Manufacturing Processes",
    title: "Surface Treatment & Paint Finishing",
    caption: "Containers emerging from controlled paint application and surface drying booth.",
    image: "/assets/manufacturing/Contrs Coming Out from Paint Booth.jpg",
    alt: "Finished freight containers leaving industrial paint spray booth",
  },

  // 3. Quality & Castings
  {
    id: "quality-corner-castings",
    category: "quality",
    categoryLabel: "Quality & Testing",
    title: "Container Corner Castings",
    caption: "High-integrity corner castings manufactured as per ISO 1161 specifications with Lloyd's Register foundry shop approval.",
    image: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    alt: "Container corner castings manufactured as per ISO 1161 specifications",
  },
  {
    id: "quality-rolling-stock-casting",
    category: "quality",
    categoryLabel: "Quality & Testing",
    title: "Rolling Stock Casting Components",
    caption: "Ferrous casting for heavy railway rolling stock applications produced at Rewari foundry.",
    image: "/assets/castings/adapter-for-WDG4-loco.png",
    alt: "Heavy railway rolling stock cast component",
  },
  {
    id: "quality-machinery",
    category: "quality",
    categoryLabel: "Quality & Testing",
    title: "Precision Metal Fabrication Machinery",
    caption: "Metal processing and shearing equipment supporting container fabrication.",
    image: "/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg",
    alt: "Precision metal forming and shearing equipment in workshop",
  },

  // 4. Shivlakha Development
  {
    id: "shivlakha-gct-terminal",
    category: "shivlakha",
    categoryLabel: "Shivlakha Development",
    title: "Gati Shakti Terminal Rail Siding",
    caption: "Operational broad-gauge rail siding at Shivlakha, inaugurated on 15 September 2026.",
    image: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    alt: "Operational rail siding and container rake handling at Gati Shakti Terminal Shivlakha",
  },
  {
    id: "shivlakha-rail-access",
    category: "shivlakha",
    categoryLabel: "Shivlakha Development",
    title: "Rail Siding & Plant Connectivity",
    caption: "Track connection connecting the terminal platform to the Western Railway broad-gauge network.",
    image: "/assets/shivlakha/Ktech Rail Siding Siding n Plant access via rail.jpg",
    alt: "Rail siding track and platform access at Shivlakha",
  },
  {
    id: "shivlakha-masterplan-overview",
    category: "shivlakha",
    categoryLabel: "Shivlakha Development",
    title: "150-Acre Master Plan Layout",
    caption: "Master development plan demarcating rail siding, container shed, and future expansion zones.",
    image: "/assets/shivlakha/shivlakha-isometric-masterplan.jpg",
    alt: "Shivlakha 150-acre integrated platform master plan drawing",
  },
];

export function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filteredGallery =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ============================================================ */}
      {/* SECTION 1: INDUSTRIAL FACILITIES HERO                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#07162c] text-white">
        {/* Ambient Grid Pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 30%, rgba(27,75,150,0.3) 0%, rgba(7,22,44,0.95) 75%, #050e1d 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-white transition-colors">
              Home
            </SiteLink>
            <span>/</span>
            <SiteLink to="/manufacturing" className="hover:text-white transition-colors">
              Manufacturing
            </SiteLink>
            <span>/</span>
            <span className="text-blue-300">Facilities &amp; Infrastructure</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              {/* Supporting Brand Line Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Heavy Manufacturing &amp; Infrastructure Footprint</span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl xl:text-5xl">
                Manufacturing Facilities &amp;{" "}
                <span className="text-[#5b8def]">Industrial Infrastructure</span>
              </h1>

              {/* Central Core Statement */}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Manufacturing heritage supported by specialised industrial infrastructure and an expanding integrated platform.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                Kalyani Cast Tech Limited operates established casting and container fabrication facilities at Rewari Works (Haryana), with strategic multimodal infrastructure development underway at the Integrated Shivlakha Project (Kachchh, Gujarat).
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg bg-[#1b4b96] px-7 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#143a75] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <SiteLink to="/manufacturing">
                    Explore Capabilities <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg border border-white/30 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#07162c]"
                >
                  <SiteLink to="/contact#enquiry-form">Commercial Consultation</SiteLink>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/manufacturing/Rewari Kalyani Casttech.png"
                    alt="Kalyani Cast Tech Rewari Works industrial plant exterior facade"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />

                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-[#07162c]/85 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Operating Facility</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#07162c]/90 px-5 py-3 backdrop-blur-md flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="font-semibold text-white">Rewari Works</span>
                    <span className="text-white/60">District Rewari, Haryana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: MANUFACTURING HERITAGE — REWARI WORKS             */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#d9dfe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Manufacturing Heritage · Established Plant
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
                Rewari Works: Heavy Foundry &amp; Container Fabrication
              </h2>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono text-[#1b4b96]">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India</span>
              </div>

              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#44505e]">
                <p>
                  Rewari Works is the established industrial engineering base of Kalyani Cast Tech Limited. Located approximately 90 kilometres southwest of New Delhi, the facility integrates ferrous foundry operations, specialized container fabrication bays, and physical structural testing infrastructure under one roof.
                </p>
                <p>
                  Rooted in metallurgical discipline, the plant operates a dedicated ferrous foundry producing precision castings for Indian Railways rolling stock and heavy industry, alongside container corner castings manufactured as per ISO 1161 specifications under Lloyd&apos;s Register foundry approval.
                </p>
                <p>
                  The works houses multiple fabrication bays equipped for semi-automatic GMAW/FCAW welding, panel assembly, surface shot-blasting, and epoxy primer/polyurethane spray finishing booths.
                </p>
              </div>

              {/* Verified Facility Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4.5">
                  <div className="flex items-center gap-2.5 text-[#0e2a55]">
                    <Factory className="h-5 w-5 text-[#1b4b96]" />
                    <h3 className="font-display text-sm font-bold text-[#101820]">
                      Ferrous Foundry Bays
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                    Medium-frequency induction melting furnaces and molding lines producing railway and industrial ferrous castings.
                  </p>
                </div>

                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4.5">
                  <div className="flex items-center gap-2.5 text-[#0e2a55]">
                    <Boxes className="h-5 w-5 text-[#1b4b96]" />
                    <h3 className="font-display text-sm font-bold text-[#101820]">
                      Container Assembly Bays
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                    Dedicated jigs for sub-assembly alignment, structural welding, corrugated panel boxing, and surface finishing.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/manufacturing">
                    Review Manufacturing Scope <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <SiteLink
                  to="/contact"
                  className="text-sm font-bold text-[#1b4b96] hover:underline"
                >
                  Contact Rewari Works &rarr;
                </SiteLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-slate-100 shadow-xs">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg"
                      alt="Rewari Works manufacturing plant and fabrication bays"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-[#d9dfe6] text-xs font-mono text-[#44505e]">
                    Plant Fabrication Bays · Rewari
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-slate-100 shadow-xs">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/assets/manufacturing/factory-rewari-facade-01.png"
                      alt="Kalyani Cast Tech corporate plant entrance"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-[#d9dfe6] text-xs font-mono text-[#44505e]">
                    Industrial Entrance · Rewari Works
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: MANUFACTURING INFRASTRUCTURE & CAPABILITIES       */}
      {/* ============================================================ */}
      <section className="bg-[#f8fafc] py-16 lg:py-20 border-b border-[#d9dfe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              Production Infrastructure
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
              Fabrication, Assembly &amp; Container Infrastructure
            </h2>
            <p className="mt-4 text-base text-[#44505e] leading-relaxed">
              Our manufacturing infrastructure is organized to support physical freight requirements: structural steel shearing, automated welding, multi-stage surface preparation, and precision assembly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Infrastructure Card 1: Cutting & Forming */}
            <div className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src="/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg"
                    alt="Precision metal fabrication machines"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#101820]">
                  Plate Preparation &amp; Forming
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                  Heavy-gauge steel plate shearing, CNC plasma cutting, and hydraulic press braking for corrugated container wall panels, structural cross-members, and corner post profiles.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                Structural Component Forming
              </div>
            </div>

            {/* Infrastructure Card 2: Assembly & Boxing Jigs */}
            <div className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src="/assets/manufacturing/manufacturing-container-qc-testing-01.jpg"
                    alt="Industrial container boxing process jig"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#101820]">
                  Boxing Jigs &amp; Frame Assembly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                  Heavy-duty alignment boxing fixtures ensure squareness and dimensional tolerances across base frames, corner castings, and end frames prior to final weld completion.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                Dimensional Tolerance Rigidity
              </div>
            </div>

            {/* Infrastructure Card 3: Surface Treatment & Painting */}
            <div className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src="/assets/manufacturing/Contrs Coming Out from Paint Booth.jpg"
                    alt="Containers emerging from paint finishing booth"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#101820]">
                  Surface Treatment &amp; Coating
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                  Abrasive grit surface preparation followed by multi-coat protective finishes: zinc-rich primers, intermediate epoxy barriers, and weather-resistant polyurethane topcoats.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                Corrosion Protection Standards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: INTEGRATED SHIVLAKHA PLATFORM                     */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#07162c] py-16 text-white lg:py-22 border-b border-[#d9dfe6]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Kachchh Multimodal Infrastructure · Gujarat</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                The Integrated Shivlakha Platform
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                Located at Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat (Khasra No. 438), the 150-acre platform is positioned adjacent to National Highway 41, providing multimodal rail connectivity towards Kandla and Mundra maritime gateways and the Western Dedicated Freight Corridor network.
              </p>

              {/* Operational Transparency Safeguard */}
              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-white/75 leading-relaxed">
                <strong className="text-white">Operational Clarity:</strong> Siding inauguration does not establish regular scheduled commercial freight services. Commercial movements, terminal handling, and siding access depend on applicable railway permissions and commercial operating agreements.
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/shivlakha-rail-logistics">
                    Explore Shivlakha Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-white/25 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <SiteLink to="/contact">Discuss Logistics Enquiry</SiteLink>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur-xs">
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative">
                  <img
                    src="/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg"
                    alt="Operational rail siding and track alignment at Shivlakha Gati Shakti Terminal"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Inaugurated 15 Sept 2026</span>
                  </div>
                </div>
                <div className="border-t border-white/10 p-4 text-xs text-white/80">
                  <strong className="text-white">Gati Shakti Terminal:</strong> Operational broad-gauge rail siding connected to Indian Railways network.
                </div>
              </div>
            </div>
          </div>

          {/* Authorised 150-Acre Land Allocation Table (Strict Section 6 Safeguards) */}
          <div className="mt-12">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Authorised 150-Acre Platform Allocation &amp; Operational Status
            </h3>
            <div className="overflow-x-auto rounded-xl border border-white/15 bg-white/5 backdrop-blur-xs">
              <table className="w-full text-left text-sm text-white/90">
                <thead className="border-b border-white/10 bg-white/10 font-mono text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Platform Component</th>
                    <th scope="col" className="px-5 py-3.5">Allocation</th>
                    <th scope="col" className="px-5 py-3.5">Approved Status</th>
                    <th scope="col" className="px-5 py-3.5">Statutory &amp; Operational Disclosure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {shivlakhaAllocations.map((row) => (
                    <tr key={row.zone} className="hover:bg-white/5">
                      <td className="px-5 py-4 font-semibold text-white">{row.zone}</td>
                      <td className="px-5 py-4 font-mono font-bold text-emerald-300">{row.acres}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-white/75 leading-relaxed">{row.notes}</td>
                    </tr>
                  ))}
                  <tr className="bg-white/10 font-bold text-white">
                    <td className="px-5 py-3.5">Total Master Plan Allocation</td>
                    <td className="px-5 py-3.5 font-mono text-emerald-300">150 Acres</td>
                    <td className="px-5 py-3.5 text-xs uppercase font-mono text-emerald-400">Integrated Area</td>
                    <td className="px-5 py-3.5 text-xs text-white/90">Comprehensive multimodal manufacturing and logistics development platform.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: ENGINEERING, QUALITY & TESTING INFRASTRUCTURE     */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#d9dfe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Testing &amp; Quality Rigour
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl lg:text-4xl leading-tight">
                Engineering, Testing &amp; Quality Infrastructure
              </h2>
              <p className="mt-4 text-base text-[#44505e] leading-relaxed">
                Manufacturing integrity is verified through physical proof testing, metallurgical laboratory evaluation, and non-destructive examination prior to customer dispatch.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-5">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-[#1b4b96]" />
                    <h3 className="font-display text-base font-bold text-[#101820]">
                      In-House ISO 1496 Container Testing Facility
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#44505e] leading-relaxed">
                    Rewari Works operates an in-house structural load-testing facility for container designs: full-scale physical load verification for container structural testing and engineering quality assurance in compliance with applicable ISO 1496 testing requirements.
                  </p>
                </div>

                <div className="rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-5">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="h-5 w-5 text-[#0e2a55]" />
                    <h3 className="font-display text-base font-bold text-[#101820]">
                      Metallurgical &amp; NDT Examination
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#44505e] leading-relaxed">
                    Equipped with a 40-Tonne Universal Testing Machine (UTM), sub-zero Charpy impact testing (down to -45°C for low-temperature toughness), optical emission spectrometer chemical analysis, ultrasonic flaw detection (USFD), magnetic particle inspection (MPI), and liquid dye penetrant testing (DP).
                  </p>
                </div>

                {/* Statutory Certification Clarification Safeguard */}
                <div className="rounded-lg border border-[#d9dfe6] bg-slate-50 p-4 text-xs text-[#718096] leading-relaxed">
                  <strong>Quality &amp; Standards Note:</strong> ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 represent certified management system standards and do not constitute blanket product certification. Individual container models undergo specific physical prototype testing and statutory certification under ISO 1496 and CSC 1972 standards.
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/engineering-quality">
                    Review Quality Rig Specifications <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-slate-100 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/castings/factory-rewari-corner-castings-01.jpg"
                    alt="Container corner castings manufactured as per ISO 1161 specifications"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#d9dfe6]">
                  <h4 className="font-display text-sm font-bold text-[#101820]">
                    Container Corner Castings
                  </h4>
                  <p className="mt-1 text-xs text-[#44505e]">
                    Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari foundry with Lloyd&apos;s Register foundry shop approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: FACILITIES GALLERY                                 */}
      {/* ============================================================ */}
      <section className="bg-[#f8fafc] py-16 lg:py-20 border-b border-[#d9dfe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                Visual Evidence
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#101820] sm:text-4xl">
                Facilities Photographic Gallery
              </h2>
              <p className="mt-2 max-w-2xl text-base text-[#44505e]">
                Authentic photographic evidence of operating workshops, manufacturing processes, quality inspection, and platform development.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Facilities" },
                { id: "rewari", label: "Rewari Works" },
                { id: "processes", label: "Manufacturing Processes" },
                { id: "quality", label: "Quality & Testing" },
                { id: "shivlakha", label: "Shivlakha Development" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as GalleryCategory)}
                  className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#1b4b96] text-white shadow-xs"
                      : "bg-white text-[#44505e] border border-[#d9dfe6] hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-xs transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="inline-block rounded bg-[#f1f4f8] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#1b4b96]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: ENQUIRY AND TECHNICAL CONSULTATION                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#07162c] py-16 text-white lg:py-20">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-full w-96 opacity-10"
          style={{
            background: "linear-gradient(135deg, #1b4b96 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-300">
              Commercial &amp; Technical Consultation
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
              Arrange a Technical Audit or Facilities Visit
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Customer technical visits, classification society inspections, and container fleet procurement discussions can be scheduled in advance through our commercial team.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-[#1b4b96] px-7 text-sm font-bold text-white shadow-md transition-all hover:bg-[#143a75] hover:-translate-y-0.5"
            >
              <SiteLink to="/contact#enquiry-form">
                Commercial Enquiry Form <ArrowRight className="ml-2 h-4 w-4" />
              </SiteLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/30 bg-transparent px-6 text-sm font-bold text-white hover:bg-white hover:text-[#07162c]"
            >
              <SiteLink to="/contact">Corporate Directory &amp; Contacts</SiteLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
