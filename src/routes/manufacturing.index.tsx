import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Boxes, Lightbulb, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/manufacturing/")({
  head: () => pageHead("/manufacturing"),
  component: ManufacturingLandingPage,
});

const manufacturingDestinations = [
  {
    num: "01",
    title: "Manufacturing Facilities",
    headline: "Two plants. One engineering standard.",
    desc: "Our two distinct manufacturing hubs: Rewari Works (Haryana) for ferrous foundry and container assembly, and Shivlakha Platform (Gujarat) for high-capacity container manufacturing and rail logistics.",
    link: "/facilities",
    linkText: "Explore Operating Facilities",
    icon: Factory,
    photo: "/assets/manufacturing/Rewari Kalyani Casttech.png",
    stat: "Rewari & Shivlakha",
    statLabel: "Dual-Plant Infrastructure",
  },
  {
    num: "02",
    title: "Capabilities & Products",
    headline: "The cargo picks the container. We engineer it.",
    desc: "A data-driven portfolio spanning Standard ISO boxes, High-Cube containers, Double-Stack Dwarf units, heavy-duty Open-Top Coiltainers, special freight wagons (under development), and corner castings manufactured as per ISO 1161 specifications.",
    link: "/products-applications",
    linkText: "View Products Portfolio",
    icon: Boxes,
    photo: "/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png",
    stat: "Containers, Wagons & Castings",
    statLabel: "Multi-Modal Cargo Hardware",
  },
  {
    num: "03",
    title: "Engineering Innovation",
    headline: "Problem-solving hardware for Indian freight.",
    desc: "Application-specific developments including India's first commercial double-stack dwarf container, 304-grade stainless steel salt boxes, 12.5 m³ modular parcel boxes, and the New Wagon Design with RDSO Stage-I approval.",
    link: "/innovation",
    linkText: "Explore Innovations",
    icon: Lightbulb,
    photo: "/assets/containers/product-40ft-dwarf-side-access-01.png",
    stat: "Commercial & Development",
    statLabel: "Product Development & Innovation",
  },
  {
    num: "04",
    title: "Engineering & Quality",
    headline: "From design to testing — engineering under one roof.",
    desc: "In-house 3D CAD design, optical emission spectrography, NDT flaw detection, and in-house ISO 1496 structural load-testing facility for container designs available at Rewari Works.",
    link: "/engineering-quality",
    linkText: "Explore Engineering & Quality",
    icon: ShieldCheck,
    photo: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    stat: "ISO 1496 & Lloyd's Register",
    statLabel: "Structural Testing & Quality Validation",
  },
];

export function ManufacturingLandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Hero Banner — 7:5 Image-Dominant Proportion                  */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden bg-[#0e2a55] px-5 py-12 text-white sm:py-16 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-amber-300">
              Home
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Manufacturing</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left 5 Cols: Narrative & Actions */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Manufacturing Division · Dual Facilities
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl">
                Integrated Heavy Manufacturing &amp; Engineering
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Kalyani Cast Tech combines heavy structural container fabrication, an IS 12117 Class A
                ferrous foundry, full-scale ISO load-testing, and direct broad-gauge rail connectivity across our Rewari and Shivlakha hubs.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-10 rounded-md bg-[#1b4b96] px-5 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/facilities">
                    View Facilities <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 rounded-md border-white/30 bg-white/10 px-5 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
                >
                  <SiteLink to="/products-applications">
                    Browse Products
                  </SiteLink>
                </Button>
              </div>
            </div>

            {/* Right 7 Cols: Dominant Authentic Photography */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl">
                <div className="aspect-[16/10] w-full">
                  <img
                    src="/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg"
                    alt="Kalyani Cast Tech Heavy Fabrication Hall"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
                  <div>
                    <span className="font-mono font-bold uppercase text-amber-300">
                      Heavy Structural Assembly
                    </span>
                    <p className="text-white/80 font-medium">
                      Automated welding fixtures, ISO jigs &amp; Class A ferrous foundry operations
                    </p>
                  </div>
                  <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[11px] text-white/90 backdrop-blur-sm border border-white/20">
                    Dual Plants · Unified Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Dual Manufacturing Locations Showcase                        */}
      {/* ============================================================ */}
      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow text-[#1b4b96]">Unified Manufacturing Division</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-[#101820] sm:text-4xl">
            Two Strategic Manufacturing Hubs
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44505e]">
            Kalyani Cast Tech Limited operates its primary manufacturing infrastructure across two strategically positioned locations under a single, unified Manufacturing Division.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Location 1: Rewari Works */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/assets/manufacturing/Rewari Kalyani Casttech.png"
                  alt="Rewari Works Haryana Manufacturing Facility"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3 py-1 font-mono text-xs font-bold text-emerald-300 backdrop-blur-xs flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Operational Hub · Haryana
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                  Ferrous Foundry &amp; ISO Container Works
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                  Rewari Works — Haryana
                </h3>
                <p className="mt-2 text-sm text-[#44505e] leading-relaxed">
                  Established heavy engineering and metallurgical foundry facility executing specialized container fabrication and certified railway casting programs.
                </p>

                <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-xs sm:text-sm text-[#44505e]">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>Class A Ferrous Foundry (IS 12117):</strong> Lloyd&apos;s Register approved foundry manufacturing corner castings as per ISO 1161 specifications and specialized rail components.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>Container Fabrication:</strong> Heavy assembly jigs for Standard ISO boxes, High-Cube units, Open-Top Coiltainers, and Dwarf containers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>In-House ISO 1496 Testing Facility:</strong> In-house structural load-testing facility for container designs available at Rewari Works for container structural testing and engineering quality assurance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>Metallurgical Laboratory:</strong> Optical emission spectrometer, ultrasonic flaw detection, and tensile verification suites.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#f1f4f8] bg-[#f8fafc] px-6 py-4 sm:px-8 flex items-center justify-between">
              <SiteLink
                to="/facilities"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-[#1b4b96] hover:text-[#143a75]"
              >
                Inspect Rewari Facilities <ArrowRight className="h-4 w-4" />
              </SiteLink>
              <span className="font-mono text-xs font-semibold text-[#556579]">Foundry &amp; Containers</span>
            </div>
          </div>

          {/* Location 2: Shivlakha */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg"
                  alt="Shivlakha Gujarat Manufacturing Shed and Rail Siding"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3 py-1 font-mono text-xs font-bold text-emerald-300 backdrop-blur-xs flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Gati Shakti Terminal Operational · Gujarat
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                  Container &amp; Wagon Manufacturing Shed
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                  Shivlakha Platform — Gujarat
                </h3>
                <p className="mt-2 text-sm text-[#44505e] leading-relaxed">
                  High-capacity 5-acre covered manufacturing shed co-located with private rail siding infrastructure, engineered for high-throughput container and rolling-stock manufacturing.
                </p>

                <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-xs sm:text-sm text-[#44505e]">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>5-Acre Covered Manufacturing Shed:</strong> Heavy-bay fabrication layout co-located with dedicated broad-gauge rail siding for rapid dispatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>New Wagon Design:</strong> Has received RDSO Stage-I approval and is progressing through subsequent levels of approval.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>High-Throughput Container Output:</strong> Engineered to support large-scale fleet builds adjacent to western maritime freight corridors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#1b4b96]">•</span>
                    <span><strong>Distinct Manufacturing Footprint:</strong> Specifically delineated 5-acre manufacturing zone, distinct from the co-located 30A Gati Shakti Terminal and 30A Inland Container Terminal.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#f1f4f8] bg-[#f8fafc] px-6 py-4 sm:px-8 flex items-center justify-between">
              <SiteLink
                to="/facilities"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-[#1b4b96] hover:text-[#143a75]"
              >
                Inspect Shivlakha Shed <ArrowRight className="h-4 w-4" />
              </SiteLink>
              <span className="font-mono text-xs font-semibold text-[#556579]">5-Acre Covered Shed</span>
            </div>
          </div>
        </div>

        {/* Corporate Architecture Clarification Banner */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs sm:text-sm text-blue-950">
          <p>
            <strong>Corporate Architecture Note:</strong> Both Rewari Works and the Shivlakha manufacturing shed operate under the single, unified <strong>Manufacturing Division</strong> of Kalyani Cast Tech Limited. The adjacent 30-acre Gati Shakti Terminal and 30-acre Inland Container Terminal at Shivlakha operate under the <strong>Terminal Division</strong>.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4 Image-Led Navigation Destination Cards                     */}
      {/* ============================================================ */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-[#1b4b96]">Manufacturing Destinations</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-[#101820] sm:text-4xl">
            Explore Our Manufacturing Operations
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#44505e]">
            Select a section to inspect detailed facility layouts, product specifications, engineering
            innovations, or quality test procedures.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {manufacturingDestinations.map((dest) => {
            const Icon = dest.icon;
            return (
              <div
                key={dest.num}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={dest.photo}
                      alt={dest.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-xs">
                      {dest.num} · {dest.title}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      {dest.statLabel}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#101820] group-hover:text-[#1b4b96]">
                      {dest.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700 italic">
                      &ldquo;{dest.headline}&rdquo;
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-[#44505e] leading-relaxed">
                      {dest.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#f1f4f8] bg-[#f8fafc] px-6 py-4 sm:px-8 flex items-center justify-between">
                  <SiteLink
                    to={dest.link}
                    className="inline-flex items-center gap-2 font-display text-sm font-bold text-[#1b4b96] group-hover:text-[#143a75]"
                  >
                    {dest.linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </SiteLink>
                  <span className="font-mono text-sm font-semibold text-[#556579]">{dest.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manufacturing Enquiry CTA */}
        <div className="mt-16 rounded-2xl border border-[#b8c9e5] bg-[#0e2a55] p-8 text-white sm:p-10 shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Direct Engineering Collaboration
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Discuss Your Technical Specifications with Our Engineering Desk
              </h3>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
                Whether you need custom container dimensional alterations, high-volume ISO fleets, or
                certified railway castings, our engineering team works directly from physical cargo parameters.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                asChild
                className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
              >
                <SiteLink to="/contact#enquiry-form">
                  Submit Technical Requirement &rarr;
                </SiteLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
