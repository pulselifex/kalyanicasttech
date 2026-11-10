import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { ContainerCatalog } from "@/components/site/ContainerCatalog";
import { CargoSolutionsGrid } from "@/components/site/CargoSolutionsGrid";
import { Button } from "@/components/ui/button";
import {
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  Train,
  Factory,
  ExternalLink,
  Award,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/products-applications")({
  head: () => pageHead("/products-applications"),
  component: ProductsApplicationsPage,
});

export function ProductsApplicationsPage() {
  const [activeTab, setActiveTab] = useState<"containers" | "castings">("containers");

  // Handle URL hash and query param navigation on mount and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash === "#castings" ||
        hash === "#foundry" ||
        search.includes("tab=castings") ||
        search.includes("product=precision%20castings") ||
        search.includes("product=corner%20castings")
      ) {
        setActiveTab("castings");
      } else if (
        hash === "#containers" ||
        hash === "#catalogue" ||
        hash === "#cargo-solutions" ||
        search.includes("tab=containers")
      ) {
        setActiveTab("containers");
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, []);

  const handleTabSwitch = (tab: "containers" | "castings") => {
    setActiveTab(tab);
    const targetHash = tab === "containers" ? "#containers" : "#castings";
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, "", targetHash);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Section 1: Product Hero Banner                               */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden bg-[#0e2a55] px-5 py-16 text-white sm:py-20 lg:px-8">
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
            <span className="text-amber-300">Products &amp; Applications</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Engineered Freight Containers &middot; ISO 1496 Series-1 Rig Tested
              </div>

              <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
                Kalyani Cast Tech Limited &middot; Manufacturing Capabilities &amp; Product Catalogue
              </p>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The cargo picks the container. We engineer it.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Explore Kalyani Cast Tech Limited&apos;s specialised freight container range, heavy-payload steel coiltainers, double-stack dwarf solutions, and precision ferrous castings. Designed to international standards (ISO 1496 Series-1, CSC 1972) and verified through in-house structural load testing at Rewari Works.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <a
                    href="#catalogue"
                    onClick={() => {
                      if (activeTab !== "containers") {
                        setActiveTab("containers");
                      }
                    }}
                  >
                    Explore Product Catalogue <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
                >
                  <a
                    href="#cargo-solutions"
                    onClick={() => {
                      if (activeTab !== "containers") {
                        setActiveTab("containers");
                      }
                    }}
                  >
                    Solutions by Cargo
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-11 rounded-md text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                >
                  <SiteLink to="/contact#enquiry-form">Commercial &amp; Technical Enquiry</SiteLink>
                </Button>
              </div>
            </div>

            {/* Right Column: Authentic Container Product Visual */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png"
                    alt="Kalyani Cast Tech specialized containers in assembly staging yard"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-[#07162c]/85 px-3 py-1 font-mono text-xs font-bold text-emerald-300 backdrop-blur-md shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Specialised Containers</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#07162c]/90 px-4 py-2.5 backdrop-blur-md flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="font-semibold text-white">Staging Yard Logistics</span>
                    <span className="text-white/60">ISO 1496 Series-1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Sub-Navigation Bar: Containers vs Precision Castings         */}
      {/* ============================================================ */}
      <div className="sticky top-0 z-20 border-b border-[#d9dfe6] bg-white/95 backdrop-blur-md shadow-xs transition-all">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div
              role="tablist"
              aria-label="Product Divisions Sub-Navigation"
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <button
                type="button"
                role="tab"
                id="tab-containers"
                aria-selected={activeTab === "containers"}
                aria-controls="panel-containers"
                onClick={() => handleTabSwitch("containers")}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "containers"
                    ? "bg-[#0e2a55] text-white shadow-sm ring-2 ring-[#0e2a55]/20"
                    : "bg-[#f1f4f8] text-[#44505e] hover:bg-[#e2e8f0] hover:text-[#101820]"
                }`}
              >
                <Package className="h-4 w-4 shrink-0" />
                <span>Containers &amp; Specialised Products</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-mono font-semibold ${
                    activeTab === "containers"
                      ? "bg-white/20 text-white"
                      : "bg-[#d9dfe6] text-[#44505e]"
                  }`}
                >
                  17 Models
                </span>
              </button>

              <button
                type="button"
                role="tab"
                id="tab-castings"
                aria-selected={activeTab === "castings"}
                aria-controls="panel-castings"
                onClick={() => handleTabSwitch("castings")}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "castings"
                    ? "bg-[#0e2a55] text-white shadow-sm ring-2 ring-[#0e2a55]/20"
                    : "bg-[#f1f4f8] text-[#44505e] hover:bg-[#e2e8f0] hover:text-[#101820]"
                }`}
              >
                <Layers className="h-4 w-4 shrink-0" />
                <span>Precision Castings</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-mono font-semibold ${
                    activeTab === "castings"
                      ? "bg-white/20 text-white"
                      : "bg-[#d9dfe6] text-[#44505e]"
                  }`}
                >
                  Rewari Works Foundry
                </span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-3 text-xs text-[#44505e] font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Lloyd&apos;s Register &amp; IRS Certified</span>
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <Factory className="h-4 w-4 text-[#1b4b96]" />
                <span>IS 12117 Class A Foundry</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* TAB PANEL 1: Containers & Specialised Products               */}
        {/* ============================================================ */}
        <div
          id="panel-containers"
          role="tabpanel"
          aria-labelledby="tab-containers"
          className={activeTab === "containers" ? "block" : "hidden"}
        >
          {/* Section 2: Supported Product Categories */}
          <div id="containers" className="mt-10 scroll-mt-28">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#d9dfe6] pb-3">
              <div>
                <p className="eyebrow text-[#1b4b96]">Supported Product Categories</p>
                <h2 className="font-display text-xl font-bold text-[#101820]">
                  Explore by Equipment &amp; Component Range
                </h2>
              </div>
              <p className="text-xs text-[#44505e]">
                Categorised freight equipment verified through engineering documentation and authentic production records
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Specialised High-Cube & Bulk",
                  desc: "High volumetric efficiency containers engineered for low-density bulk cargo, including 84 m³ yarn/cotton configurations and multi-commodity units.",
                  anchor: "catalogue",
                  tag: "ISO 1496 Series-1",
                  img: "/assets/containers/20 HC SuperHigh Volume Container.png",
                  isInternalAnchor: true,
                },
                {
                  title: "Double-Stack Dwarf Range",
                  desc: "2,600 mm wide × 1,930 mm low-profile profile engineered for double-stack rail operations beneath 25 kV AC electrified overhead equipment (OHE).",
                  anchor: "dwarf",
                  tag: "Electrified Corridors",
                  img: "/assets/containers/product-40ft-dwarf-side-access-01.png",
                  isInternalAnchor: true,
                },
                {
                  title: "Heavy Coiltainers & Steel Freight",
                  desc: "Open-top heavy units rated for 36 MT lift-on and 71 MT chassis operation, designed for heavy hot-rolled coils and 12-meter TMT rebar bundles.",
                  anchor: "coiltainers",
                  tag: "71 MT Chassis Protocol",
                  img: "/assets/containers/product-42ft-hc-cj-darcl-01.png",
                  isInternalAnchor: true,
                },
                {
                  title: "CUBOID Parcel & Automotive Boxes",
                  desc: "12.5 m³ modular intermodal boxes carrying 10 motorbikes or 4 three-wheelers per unit, engineered for standard BLC rail flat wagons.",
                  anchor: "cuboid",
                  tag: "Parcel & Auto Logistics",
                  img: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
                  isInternalAnchor: true,
                },
                {
                  title: "Cargo & Industry Solutions",
                  desc: "6-Sector commodity matching matrix aligning cargo characteristics with verified container designs and terminal transshipment methods.",
                  anchor: "cargo-solutions",
                  tag: "Commodity Matching",
                  img: "/assets/containers/product-40ft-open-top-coiltainer-01.jpeg",
                  isInternalAnchor: true,
                },
                {
                  title: "Precision Foundry & Rail Castings",
                  desc: "Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari Class A foundry (IS 12117:1996) with Lloyd's Register foundry approval, alongside critical locomotive components.",
                  anchor: "castings",
                  tag: "IS 12117 Class A",
                  img: "/assets/castings/factory-rewari-corner-castings-01.jpg",
                  isInternalAnchor: false,
                  action: () => handleTabSwitch("castings"),
                },
              ].map((card) => {
                if (card.isInternalAnchor) {
                  return (
                    <a
                      key={card.anchor}
                      href={`#${card.anchor}`}
                      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-md"
                    >
                      <div>
                        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                            {card.tag}
                          </span>
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#44505e]">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <div className="px-4 pb-3 pt-1 border-t border-[#f1f4f8] flex items-center justify-between text-sm font-bold text-[#1b4b96]">
                        <span>Explore Equipment Range</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </a>
                  );
                }

                return (
                  <button
                    key={card.anchor}
                    type="button"
                    onClick={card.action}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-md text-left cursor-pointer"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                          {card.tag}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#44505e]">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    <div className="px-4 pb-3 pt-1 border-t border-[#f1f4f8] flex items-center justify-between text-sm font-bold text-[#1b4b96] w-full">
                      <span>Switch to Precision Castings Division &rarr;</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Rolling Stock & Innovation Callout Note */}
            <div className="mt-6 rounded-lg border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] via-white to-white p-4 text-xs sm:text-sm text-[#44505e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Train className="h-4 w-4 text-[#1b4b96] shrink-0" />
                <span>
                  <strong>Looking for Railway Rolling Stock Concepts?</strong> Rolling stock R&amp;D concepts (bi-level auto car carriers and special container flat wagons) belong strictly in our separate Innovation section.
                </span>
              </div>
              <SiteLink
                to="/innovation"
                className="inline-flex items-center gap-1 font-bold text-[#1b4b96] hover:underline shrink-0"
              >
                <span>Explore Innovation R&amp;D</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </SiteLink>
            </div>
          </div>

          {/* Section 3: Visual-First Product Catalogue */}
          <div id="catalogue" className="mt-16 scroll-mt-28">
            <div className="mb-8">
              <p className="eyebrow text-[#1b4b96]">
                Interactive Engineering Catalogue
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#101820]">
                Container Range &amp; Verified Configurations
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
                Filter by category, search by dimensional parameters, or select any container to inspect the certified engineering drawer with verified tolerances, gross weight limits, and floor load ratings.
              </p>
            </div>

            <ContainerCatalog />
          </div>

          {/* Section 4: 6-Sector Cargo & Industry Solutions Grid */}
          <div id="cargo-solutions" className="mt-20 scroll-mt-28">
            <CargoSolutionsGrid />
          </div>

          {/* Section 5: Custom Container Engineering & Commercial Enquiry */}
          <div className="mt-16 rounded-xl border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] via-white to-white p-8 shadow-sm">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#1b4b96]">
                Custom Engineering &amp; Commercial Enquiry
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Looking for the Right Container Configuration?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                Share your cargo, bulk density, and transit route constraints with our engineering team. We engineer each container around the cargo rather than forcing cargo into a generic box.
              </p>

              <div className="mt-6 border-t border-[#b8c9e5] pt-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96] block mb-3">
                  Key Parameters We Review to Confirm a Configuration:
                </span>
                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  {[
                    "Commodity type and bulk density (kg/m³)",
                    "Unit dimensions and total payload weight",
                    "Loading and unloading method (crane, forklift, gravity)",
                    "Handling equipment at origin and destination",
                    "Route, transport mode and electrified rail clearances",
                    "Target requirement date and annual delivery schedule",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded bg-white p-2.5 border border-[#d9dfe6]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1b4b96] font-mono text-[10px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-[#101820] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governance Disclaimer on Timelines & Quotations */}
              <div className="mt-6 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-xs text-[#44505e]">
                <p className="leading-relaxed">
                  <strong>Commercial Notice:</strong> Production slots, custom design feasibility, minimum order quantities (MOQ), and delivery timelines are subject to formal commercial and engineering evaluation. Formal quotations are issued upon technical parameter confirmation.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Enquire About a Product Configuration <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d9dfe6] bg-white px-6 text-sm font-semibold text-[#101820] hover:border-[#1b4b96]"
                >
                  <SiteLink to="/contact">
                    Corporate Directory &amp; Plant Enquiries
                  </SiteLink>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB PANEL 2: Precision Castings Division                     */}
        {/* ============================================================ */}
        <div
          id="panel-castings"
          role="tabpanel"
          aria-labelledby="tab-castings"
          className={activeTab === "castings" ? "block" : "hidden"}
        >
          <div id="foundry" className="scroll-mt-28" />
          <div
            id="castings"
            className="mt-10 scroll-mt-28 rounded-xl border border-[#d9dfe6] bg-white p-6 sm:p-8 shadow-sm"
          >
            {/* Division Header */}
            <div className="border-b border-[#d9dfe6] pb-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="eyebrow text-[#1b4b96]">
                    Kalyani Cast Tech Limited &middot; Precision Castings Division
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleTabSwitch("containers")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:underline cursor-pointer"
                >
                  <span>&larr; Switch to Containers &amp; Specialised Products</span>
                </button>
              </div>

              <h2 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-4xl">
                Precision Ferrous Castings for Rail &amp; Core Industry
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#44505e] sm:text-base">
                Produced at our Class A ferrous foundry at Rewari, Haryana (IS 12117:1996), supplying
                high-load structural cast steel, SG iron (ductile iron), and graded grey cast iron
                from 20 kg to 2,000 kg single pours. Specialising in container corner fittings, locomotive bogie adapters, and rolling-stock brake and suspension components.
              </p>

              {/* Quality & Accreditation Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="rounded bg-[#0e2a55] px-2.5 py-1 font-bold text-white">
                  IS 12117:1996 Class A
                </span>
                <span className="rounded bg-[#1b4b96] px-2.5 py-1 font-bold text-white">
                  Lloyd&apos;s Register Certified
                </span>
                <span className="rounded bg-[#2a64b9] px-2.5 py-1 font-bold text-white">
                  Indian Register of Shipping (IRS)
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-1 font-bold text-[#101820] border border-slate-200">
                  Rewari Works, Haryana
                </span>
              </div>
            </div>

            {/* Featured Hero Product Card: Container Corner Castings */}
            <div className="mt-8 overflow-hidden rounded-2xl border-2 border-[#1b4b96] bg-gradient-to-br from-[#f8fafc] via-white to-[#ebf3fe] p-6 sm:p-8 shadow-md">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Visual Asset (5 cols) */}
                <div className="lg:col-span-5 aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 border border-[#d9dfe6] relative shadow-inner">
                  <img
                    src="/assets/castings/factory-rewari-corner-castings-01.jpg"
                    alt="Container Corner Castings"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 rounded bg-[#0e2a55] px-2.5 py-1 font-mono text-xs font-bold text-white shadow-md">
                    Featured Core Casting Product
                  </span>
                </div>

                {/* Technical Product Narrative (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Manufactured to ISO 1161 Specifications
                    </span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
                      Lloyd&apos;s Register &amp; IRS Approved Foundry
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                    Container Corner Castings
                  </h4>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#1b4b96]">
                    Manufactured as per ISO 1161 specifications &amp; 242 &times; 115 &times; 178 mm Wide-Body Dwarf Corner Fittings
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#44505e]">
                    Our Corner Castings are manufactured as per ISO 1161 specifications. Precision cast steel corner fittings engineered to withstand extreme static stacking loads, dynamic railway shunting impacts, and standardized container twistlock securing. Cast in high-tensile structural steel with verified low-temperature impact properties and excellent weldability for structural integration into container corner posts.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 text-xs">
                    <div className="rounded-lg border border-[#d9dfe6] bg-white p-3">
                      <strong className="block font-display text-sm text-[#101820]">
                        Standard ISO 1161 Castings
                      </strong>
                      <span className="mt-1 block text-[#44505e]">
                        Manufactured as per ISO 1161 specifications for 20 ft and 40 ft international ISO shipping containers with universal top/bottom aperture geometry.
                      </span>
                    </div>
                    <div className="rounded-lg border border-[#d9dfe6] bg-white p-3">
                      <strong className="block font-display text-sm text-[#101820]">
                        Wide-Body Dwarf Fittings
                      </strong>
                      <span className="mt-1 block text-[#44505e]">
                        Proprietary 242 &times; 115 &times; 178 mm modified fittings designed for 2,600 mm wide double-stack dwarf frames.
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button
                      asChild
                      className="h-10 rounded-md bg-[#1b4b96] px-5 text-xs font-bold text-white hover:bg-[#143a75]"
                    >
                      <SiteLink to="/contact?product=Corner%20Castings#enquiry-form">
                        Enquire About Corner Castings &rarr;
                      </SiteLink>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-md border-[#d9dfe6] bg-white px-5 text-xs font-semibold text-[#101820] hover:border-[#1b4b96]"
                    >
                      <SiteLink to="/facilities#rewari-foundry">
                        View Rewari Foundry Facilities
                      </SiteLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other 4 Supported Precision Castings Grid */}
            <div className="mt-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e8f0] pb-2">
                <h3 className="font-display text-lg font-bold text-[#101820]">
                  Railway Rolling-Stock &amp; Core Industry Ferrous Castings
                </h3>
                <span className="font-mono text-xs text-[#44505e]">
                  Authentic Rewari Works Production Photography
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    src: "/assets/castings/adapter-for-WDG4-loco.png",
                    name: "WDG4 Locomotive Adapter",
                    spec: "High-Tensile Cast Steel · Locomotive Bogie Component",
                    desc: "Machined adapter for heavy freight diesel locomotive bogie assemblies running across Indian Railways.",
                    tag: "Diesel Loco",
                  },
                  {
                    src: "/assets/castings/bearing-housing-for-electrical-loco.png",
                    name: "Electric Locomotive Bearing Housing",
                    spec: "Grade DIN 17182 Structural Cast Steel · Precision CNC",
                    desc: "Axle bearing housing for high-speed electric locomotives, stress-relieved via computerized heat treatment.",
                    tag: "Electric Loco",
                  },
                  {
                    src: "/assets/castings/CI-brake-blocks.png",
                    name: "Graded Cast-Iron Brake Blocks",
                    spec: "High-Friction Cast Iron · Rolling-Stock Specification",
                    desc: "Locomotive and freight wagon brake shoes cast in-house with continuous metallurgical spectrometer testing.",
                    tag: "Braking System",
                  },
                  {
                    src: "/assets/castings/end-covers-for-electrical-locos.png",
                    name: "Electrical Loco End Covers & Plungers",
                    spec: "High-Impact Cast Steel · Traction Motor & Buffer",
                    desc: "Heavy-duty traction motor end covers and side buffer plungers engineered for severe dynamic shunting loads.",
                    tag: "Buffer & Motor",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-md"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-2 left-2 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                    <div className="border-t border-[#d9dfe6] bg-[#0a1f3d] px-3.5 py-1.5 text-[11px] font-mono font-medium text-white/90 truncate">
                      {item.spec}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display text-base font-bold text-[#101820]">{item.name}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#44505e]">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foundry Capabilities Summary Strip (Rewari Works) */}
            <div className="mt-10 rounded-xl border border-[#b8c9e5] bg-[#f8fafc] p-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96] block mb-3">
                Foundry Infrastructure &amp; Quality Parameters (Rewari Works, Haryana)
              </span>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="rounded-lg bg-white p-4 border border-[#e2e8f0]">
                  <strong className="block font-display text-sm text-[#101820]">
                    Melting Capacity
                  </strong>
                  <p className="mt-1 text-[#44505e]">
                    Dual medium-frequency induction furnaces: 2,000 kg and 1,000 kg crucibles for flexible batch production.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-[#e2e8f0]">
                  <strong className="block font-display text-sm text-[#101820]">
                    No-Bake Moulding
                  </strong>
                  <p className="mt-1 text-[#44505e]">
                    10 TPH continuous resin sand mixer and compaction table delivering superior dimensional repeatability and surface finish.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-[#e2e8f0]">
                  <strong className="block font-display text-sm text-[#101820]">
                    Spectrometry &amp; NDT Lab
                  </strong>
                  <p className="mt-1 text-[#44505e]">
                    Direct-reading optical emission spectrometer for 24-element melt analysis, ultrasonic testing, and magnetic particle testing.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-[#e2e8f0]">
                  <strong className="block font-display text-sm text-[#101820]">
                    Heat Treatment
                  </strong>
                  <p className="mt-1 text-[#44505e]">
                    Computerized heat treatment furnace with programmed soaking cycles for normalizing, stress relieving, and tempering.
                  </p>
                </div>
              </div>
            </div>

            {/* Dedicated Precision Castings B2B Enquiry Card */}
            <div className="mt-8 rounded-xl border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] via-white to-white p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                    B2B Commercial &amp; Technical Enquiry
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                    Discuss a Precision Casting Requirement
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                    Our metallurgical and foundry engineering teams at Rewari evaluate casting patterns, single-pour weight requirements (20 kg to 2,000 kg), metallurgy (carbon steel, alloy steel, SG iron, graded cast iron), and batch production schedules.
                  </p>
                  <p className="mt-2 text-xs text-[#44505e]">
                    <strong>Foundry Commercial Terms:</strong> Pattern feasibility, sample inspection, minimum order quantities (MOQ), and delivery timelines are confirmed upon review of technical drawings and metallurgical specifications.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <Button
                    asChild
                    className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
                  >
                    <SiteLink to="/contact?product=Precision%20Castings#enquiry-form">
                      Submit Casting Enquiry &rarr;
                    </SiteLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-md border-[#d9dfe6] bg-white px-5 text-sm font-semibold text-[#101820] hover:border-[#1b4b96]"
                  >
                    <SiteLink to="/contact">
                      Contact Rewari Foundry
                    </SiteLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
