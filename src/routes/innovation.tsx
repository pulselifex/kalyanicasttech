import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Wrench,
  Layers,
  CheckCircle2,
  Clock,
  Train,
  Compass,
  Box,
  Truck,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/innovation")({
  head: () => pageHead("/innovation"),
  component: InnovationPage,
});

export function InnovationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Section 1: Innovation Hero Banner                            */}
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
            <SiteLink to="/manufacturing" className="hover:text-amber-300">
              Manufacturing
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Innovation &amp; Concepts</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Specialised Cargo R&amp;D &middot; Verified Engineering Concepts
          </div>

          <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Kalyani Cast Tech Limited &middot; Engineering &amp; Innovation
          </p>

          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering ideas for specialised cargo and rail applications.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Kalyani Cast Tech Limited explores forward-looking freight hardware, specialised container geometries, and rail-linked equipment designed to overcome route clearance bottlenecks, severe dynamic loads, and commodity-specific transit challenges across Indian industrial corridors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
            >
              <a href="#concepts">
                Explore Engineering Concepts <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
            >
              <SiteLink to="/contact#enquiry-form">
                Discuss a Specialised Requirement
              </SiteLink>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-11 rounded-md text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
            >
              <SiteLink to="/products-applications">
                View Commercial Products &rarr;
              </SiteLink>
            </Button>
          </div>

          {/* Hero Authentic Visual Card */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 aspect-[16/9] overflow-hidden rounded-xl bg-slate-900 border border-white/10">
                <img
                  src="/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg"
                  alt="2016 Indian Railways initiative on dwarf containers designed by Shri Naresh Kumar"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="lg:col-span-5 text-xs sm:text-sm text-white/80 space-y-3">
                <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                  Engineering Milestone Record
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Pioneering Double-Stack Dwarf Container Technology
                </h3>
                <p className="leading-relaxed">
                  Historical milestone photograph from 2016 marking Indian Railways&apos; initiative to introduce double-stack dwarf containers, conceptualized and developed by Shri Naresh Kumar (Managing Director, Kalyani Cast Tech Limited) to enable double-stack transit beneath 25 kV AC electrified overhead lines.
                </p>
                <div className="pt-2 border-t border-white/10 font-mono text-[11px] text-white/60">
                  Verified Heritage &middot; Commercial Operations Operational on Western Railway
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* Section 2: Engineering and Innovation Approach               */}
        {/* ============================================================ */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-10 max-w-3xl border-b border-[#d9dfe6] pb-4">
            <p className="eyebrow text-[#1b4b96]">Engineering Methodology</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              How We Approach Complex Freight Constraints
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#44505e] sm:text-base">
              Rather than forcing non-standard cargo into generic shipping boxes, our engineering approach begins with the physical properties of the commodity, terminal handling constraints, and electrified railway route clearances.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ebf3fe] text-[#1b4b96]">
                <Box className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#101820]">
                Cargo-Centric Dimensional Modeling
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Designing volume envelopes and internal racking directly around cargo geometry—such as low-bulk-density yarn, automotive units, or high-density coil loads—to maximize cubic space utilization on standard rail flat wagons.
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ebf3fe] text-[#1b4b96]">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#101820]">
                Electrified Rail Clearance Engineering
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Engineering low-profile container profiles (e.g., 1,930 mm height) that permit double-stack rail operations beneath 25 kV AC overhead electric traction (OHE) wires without exceeding railway Maximum Moving Dimensions (MMD).
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ebf3fe] text-[#1b4b96]">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#101820]">
                High-Payload Structural Distribution
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Integrating reinforced underframe cradles, contoured floor wells, and longitudinal stringers capable of absorbing 36 MT lift-on, 71 MT chassis operating loads, and dynamic braking forces without structural deflection.
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ebf3fe] text-[#1b4b96]">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#101820]">
                Intermodal Road-Rail Integration
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Developing modular container dimensions and end-loading roll-on roll-off concepts to facilitate direct transfer between road chassis and railway flatcars without requiring heavy yard crane infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Section 3: Specialised Container Concepts                    */}
        {/* ============================================================ */}
        <div id="concepts" className="mt-20 scroll-mt-28">
          <div className="mb-10 max-w-3xl border-b border-[#d9dfe6] pb-4">
            <p className="eyebrow text-[#1b4b96]">Specialised Container Engineering</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Specialised Cargo Hardware &amp; Concept Developments
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#44505e] sm:text-base">
              Examining selected hardware developments tailored to distinct cargo profiles—from pioneering low-profile double-stack containers to corrosion-resistant bulk carriers and modular parcel systems.
            </p>
          </div>

          <div className="space-y-8">
            {/* Concept 1: Double-Stack Dwarf Container */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96]">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                  <img
                    src="/assets/containers/product-40ft-dwarf-side-access-01.png"
                    alt="Double-Stack Dwarf Container"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
                      Commercially In-Service &middot; Proven Technology
                    </span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="font-mono text-xs font-semibold text-[#1b4b96]">
                      Double-Stack Electrified Corridors
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#101820]">
                    Double-Stack Dwarf Container (1,930 mm Profile)
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#44505e] leading-relaxed">
                    <div>
                      <strong className="text-[#101820]">The Freight Challenge:</strong> Indian Railways trunk routes operating under 25 kV AC overhead electric traction (OHE) cannot accommodate double-stacking of standard ISO containers (2,591 mm or 2,896 mm height) due to structural contact-wire clearance limits.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Engineering Approach:</strong> Conceptualized and engineered with a low-profile 1,930 mm structural shell and lightweight FRP composite flooring, meeting Indian Railways Maximum Moving Dimensions (MMD) under electrified lines.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Commercial Operation:</strong> Operational in commercial freight service on Western Railway since July 2018, delivering up to 66% greater volume capacity per train for industrial cargo, white goods, and light manufacturing.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-[#f1f4f8]">
                    <span className="font-mono text-xs text-[#1b4b96]">
                      Available in our commercial product catalogue:
                    </span>
                    <SiteLink
                      to="/products-applications"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:underline"
                    >
                      <span>View Dwarf Container Models in Catalogue &rarr;</span>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 2: Heavy-Duty Open-Top Coiltainer */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96]">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                  <img
                    src="/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg"
                    alt="Heavy-Duty Open-Top Coiltainer"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
                      Commercially In-Service &middot; Verified Design
                    </span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="font-mono text-xs font-semibold text-[#1b4b96]">
                      71 MT Chassis Operating Protocol
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#101820]">
                    Specialised Heavy-Duty Coiltainer with Integral Saddles
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#44505e] leading-relaxed">
                    <div>
                      <strong className="text-[#101820]">The Freight Challenge:</strong> Heavy hot-rolled and cold-rolled steel coils generate concentrated point loads and severe dynamic braking inertia that crack standard container timber floors and cause hazardous load shifting during transit.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Engineering Approach:</strong> Engineered with a reinforced structural steel well incorporating integral contoured cradle saddles, anti-shifting locking wedges, and heavy longitudinal stringers rated for 36 MT lift-on and 71 MT chassis operation.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Application:</strong> Hot-rolled and cold-rolled steel coil distribution from primary steel manufacturing centers to regional auto-ancillary and stamping facilities across India.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-[#f1f4f8]">
                    <span className="font-mono text-xs text-[#1b4b96]">
                      Available in our commercial product catalogue:
                    </span>
                    <SiteLink
                      to="/products-applications"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:underline"
                    >
                      <span>Inspect Coiltainer Specifications in Catalogue &rarr;</span>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 3: CUBOID Modular Parcel & Auto Box */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96]">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                  <img
                    src="/assets/containers/product-cuboid-modular-parcel-box-01.png"
                    alt="CUBOID Modular Parcel and Automotive Box"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-800">
                      Concept Design &middot; Engineering Prototype
                    </span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="font-mono text-xs font-semibold text-[#1b4b96]">
                      Modular Rail Freight System
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#101820]">
                    CUBOID 12.5 m³ Modular Parcel &amp; 2-Wheeler Box
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#44505e] leading-relaxed">
                    <div>
                      <strong className="text-[#101820]">The Freight Challenge:</strong> Express courier parcels, e-commerce cartons, and finished two-wheelers have low bulk density, resulting in substantial wasted headspace and poor payload economics when transported in standard ISO boxes.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Engineering Approach:</strong> Developed as a 3-tier modular lockable container system (12.50 m³ volume per unit). Sized to stack in multiples of six on standard BLC railway flat wagons, accommodating up to 10 motorcycles or 4 three-wheelers per box with integrated wheel-chock clamps.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Development Status:</strong> Concept design and prototype development evaluated for automotive OEMs and multi-drop less-than-truckload (LTL) rail transit.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-[#f1f4f8]">
                    <Button
                      asChild
                      className="h-9 rounded-md bg-[#1b4b96] px-4 text-xs font-bold text-white hover:bg-[#143a75]"
                    >
                      <SiteLink to="/contact#enquiry-form">
                        Enquire About Modular Box Prototype &rarr;
                      </SiteLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 4: 304 Stainless Steel Bulk Salt Container */}
            <div className="overflow-hidden rounded-2xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96]">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                  <img
                    src="/assets/containers/SS Steel  Container.png"
                    alt="304 Stainless Steel Salt and Bulk Cargo Container"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-blue-300 bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-800">
                      Engineering Development &middot; Field Trials
                    </span>
                    <span className="text-gray-300">&middot;</span>
                    <span className="font-mono text-xs font-semibold text-[#1b4b96]">
                      Corrosion-Resistant Bulk Transit
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#101820]">
                    304-Grade Stainless Steel Salt &amp; Bulk Chemical Container
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#44505e] leading-relaxed">
                    <div>
                      <strong className="text-[#101820]">The Freight Challenge:</strong> Bulk marine salt, chlor-alkali products, and corrosive chemicals cause rapid galvanic corrosion, pitting, and floor deterioration in conventional mild steel containers.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Engineering Approach:</strong> Fabricated with corrosion-resistant 304-grade stainless steel panels, reinforced internal corner joints, and a specialized 2.6 MT tare weight profile designed to resist acid attack and moisture condensation.
                    </div>
                    <div>
                      <strong className="text-[#101820]">Development Status:</strong> Field-trialed at Bhimasar, Kachchh for regional salt and chemical producers. Designed for dedicated coastal-to-inland bulk salt movement without product contamination.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-[#f1f4f8]">
                    <Button
                      asChild
                      className="h-9 rounded-md bg-[#1b4b96] px-4 text-xs font-bold text-white hover:bg-[#143a75]"
                    >
                      <SiteLink to="/contact#enquiry-form">
                        Enquire About Bulk Stainless Development &rarr;
                      </SiteLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Section 4: Rolling-Stock Concepts and R&D                    */}
        {/* ============================================================ */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl border-b border-[#d9dfe6] pb-4">
            <div className="flex items-center gap-2">
              <Train className="h-5 w-5 text-[#1b4b96]" />
              <p className="eyebrow text-[#1b4b96]">Railway Rolling-Stock Concepts</p>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Rolling-Stock Concepts &amp; Forward Engineering Initiatives
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#44505e] sm:text-base">
              Forward-looking rail freight concepts engineered for high-cube container transit, automotive logistics, and intermodal transport. Clearly segregated from commercial container manufacturing.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Rolling Stock Concept 1: Bi-Level Auto Car Carrier */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src="/assets/wagons/Car Carrier 9 Car.png"
                  alt="Bi-Level Auto Car Carrier Wagon Concept"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                  Concept Design &middot; Engineering Evaluation
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#101820]">
                    Bi-Level Multi-Deck Auto Car Carrier Wagon
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                    Articulated double-deck railway freight wagon concept designed to maximize vehicle payload for automotive OEMs on broad-gauge corridors, staying within standard moving dimension clearances.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                  Status: Engineering Evaluation &amp; Feasibility Study
                </div>
              </div>
            </div>

            {/* Rolling Stock Concept 2: Next-Gen Container Flat Wagon */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src="/assets/wagons/Next-Generation Container Wagon Design.png"
                  alt="Next-Generation Container Flat Wagon Concept"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                  Concept Design &middot; Under Development
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#101820]">
                    New Wagon Design — Next-Generation Low-Platform Container Flat Wagon
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                    New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Low-deck-height container rail flatcar design study engineered to maximize vertical clearance for high-cube containers and domestic dwarf boxes across electrified rail networks.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                  Status: RDSO Stage-I Approval Received · Progressing Subsequent Approvals
                </div>
              </div>
            </div>

            {/* Rolling Stock Concept 3: RORO Intermodal Rail Wagon */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src="/assets/containers/RORO Wagon Container.png"
                  alt="Roll-on Roll-off (RORO) Intermodal Rail Wagon Concept"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                  Conceptual Study &middot; Engineering Review
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#101820]">
                    Roll-on Roll-off (RORO) Intermodal Rail Wagon
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                    End-loading rail wagon concept designed for rapid drive-on and drive-off of loaded road trucks, reducing long-haul highway fuel consumption and highway congestion.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#f1f4f8] text-xs font-mono text-[#1b4b96]">
                  Status: Conceptual Engineering Study
                </div>
              </div>
            </div>
          </div>

          {/* Governance Notice on Rolling-Stock Concepts */}
          <div className="mt-8 rounded-lg border border-[#b8c9e5] bg-[#ebf3fe]/60 p-4 text-xs text-[#44505e]">
            <p className="leading-relaxed">
              <strong>Regulatory &amp; Engineering Notice:</strong> All rolling-stock concepts presented above are forward-looking engineering design studies. Commercial availability, statutory clearances, prototype testing, and manufacturing schedules are subject to formal railway authority evaluation. Kalyani Cast Tech Limited does not represent these concepts as currently commissioned commercial railway wagons.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Section 5: Innovation Gallery                                */}
        {/* ============================================================ */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl border-b border-[#d9dfe6] pb-4">
            <p className="eyebrow text-[#1b4b96]">Authentic Visual Records</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Innovation &amp; Engineering Visual Archive
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#44505e] sm:text-base">
              Authentic photographs and approved engineering schematics documenting Kalyani Cast Tech Limited&apos;s engineering journey and forward-looking concepts.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg",
                title: "Dwarf Container Railway Introduction",
                tag: "Historical Milestone · 2016",
                caption: "Shri Naresh Kumar with Indian Railways leadership reviewing the double-stack dwarf container design.",
              },
              {
                src: "/assets/containers/product-40ft-dwarf-side-access-01.png",
                title: "Double-Stack Dwarf Container",
                tag: "Commercial Operation · Western Railway",
                caption: "2,600 mm wide × 1,930 mm low-profile container operating under electrified overhead equipment.",
              },
              {
                src: "/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg",
                title: "Heavy-Duty Coiltainer Structural Cradle",
                tag: "Heavy Freight · Rewari Works",
                caption: "Contoured steel well saddles engineered to distribute heavy coil point loads across the underframe.",
              },
              {
                src: "/assets/containers/product-cuboid-modular-parcel-box-01.png",
                title: "CUBOID Modular Container Prototype",
                tag: "Modular Prototype · Auto Logistics",
                caption: "12.5 m³ modular intermodal box configured for multi-tier motorcycle transport on BLC flat wagons.",
              },
              {
                src: "/assets/wagons/Next-Generation Container Wagon Design.png",
                title: "Next-Generation Container Flat Wagon",
                tag: "Rolling Stock Concept · Engineering R&D",
                caption: "Low-platform rail flatcar design study engineered for maximum vertical clearance on electrified routes.",
              },
              {
                src: "/assets/wagons/Car Carrier 9 Car.png",
                title: "Bi-Level Auto Car Carrier Concept",
                tag: "Auto Logistics Concept · Design Study",
                caption: "Bi-level automotive carrier concept modeled for high-capacity passenger vehicle distribution by rail.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs">
                    {card.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-display text-sm font-bold text-[#101820]">{card.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#44505e]">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* Section 6: Business Enquiry Callout                          */}
        {/* ============================================================ */}
        <div className="mt-20 rounded-2xl border border-[#b8c9e5] bg-gradient-to-r from-[#0e2a55] to-[#143a75] p-8 sm:p-10 text-white shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                B2B Engineering Collaboration
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Discuss a Specialised Requirement
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/90">
                Have a non-standard cargo dimension, bulk density constraint, or specialised rail corridor requirement? Our engineering team reviews technical parameters to evaluate design feasibility and structural requirements.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                <strong>Commercial Notice:</strong> Technical feasibility, development schedules, tooling requirements, and commercial terms are evaluated individually upon parameter submission. Kalyani Cast Tech Limited does not make pre-feasibility commitments on unverified inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                asChild
                className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
              >
                <SiteLink to="/contact#enquiry-form">
                  Enquire About Custom Engineering &rarr;
                </SiteLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md border-white/30 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white hover:text-[#0e2a55]"
              >
                <SiteLink to="/products-applications">
                  View Commercial Catalogue
                </SiteLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md border-white/30 bg-white/10 px-5 text-sm font-semibold text-white hover:bg-white hover:text-[#0e2a55]"
              >
                <SiteLink to="/products-applications#castings">
                  Precision Castings Division
                </SiteLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
