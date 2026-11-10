import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import {
  Factory,
  CheckCircle2,
  Train,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  MapPin,
  Users,
  Compass,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => pageHead("/about-us"),
  component: AboutUsPage,
});

export function AboutUsPage() {
  return (
    <article className="min-h-screen bg-[#f8f9fa] text-[#101820]" aria-labelledby="about-kalyani-heading">
      {/* ============================================================ */}
      {/* 1. SECTION 1 — CORPORATE HERO                                */}
      {/* ============================================================ */}
      <header className="relative overflow-hidden bg-[#0e2a55] border-b border-white/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/manufacturing/factory-rewari-facade-01.png"
            alt="Kalyani Cast Tech Limited Rewari Works corporate and manufacturing facility facade"
            className="h-full w-full object-cover object-center opacity-25 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a55] via-[#0e2a55]/95 to-[#143a75]/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70">
            <SiteLink to="/" className="hover:text-amber-300 transition-colors">
              Home
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300 font-semibold">About Kalyani</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              {/* Statutory Credentials Strip */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono text-blue-300 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">BSE SME: 544023</span>
                  <span className="text-white/40">&middot;</span>
                  <span>CIN: L26990DL2012PLC242760</span>
                  <span className="text-white/40">&middot;</span>
                  <span>Inc. Sep 2012</span>
                </div>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300 font-mono">
                Corporate Profile &amp; Business Overview
              </p>

              <h1
                id="about-kalyani-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Kalyani Cast Tech Limited
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Engineering and manufacturing capabilities supporting specialised industrial and
                infrastructure applications across freight container fabrication, precision railway
                castings, and multimodal logistics development.
              </p>

              {/* Action CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#143a75] transition-colors"
                >
                  <a href="#business-divisions">
                    Explore Our Business <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-white/30 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Connect with Us
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-11 rounded-md text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  <SiteLink to="/contact">
                    Corporate Directory &rarr;
                  </SiteLink>
                </Button>
              </div>
            </div>

            {/* Right Column: Authentic Corporate & Industrial Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/company/Kalyani Team.JPG"
                    alt="Kalyani Cast Tech engineering, manufacturing and operations workforce at Rewari Works"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-blue-400/40 bg-[#07162c]/85 px-3 py-1 font-mono text-xs font-bold text-blue-300 backdrop-blur-md shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>Industrial Engineering Team</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#07162c]/90 px-4 py-2.5 backdrop-blur-md flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="font-semibold text-white">Rewari Works Workforce</span>
                    <span className="text-white/60">Haryana, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* ============================================================ */}
        {/* 2. SECTION 2 — WHO WE ARE                                    */}
        {/* ============================================================ */}
        <section aria-labelledby="who-we-are-heading" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
                  Section 02 · Corporate Identity
                </p>
                <h2 id="who-we-are-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
                  Who We Are
                </h2>
                <p className="mt-1 text-base font-medium text-[#44505e]">
                  An Industrial Engineering Enterprise Focused on Heavy Cargo Equipment &amp; Infrastructure
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#44505e]">
                <p>
                  <strong className="text-[#101820]">Kalyani Cast Tech Limited</strong> is an Indian listed
                  industrial engineering company incorporated in September 2012 (BSE SME: 544023, CIN:
                  L26990DL2012PLC242760). The company develops, fabricates, and supplies specialised freight
                  containers, precision ferrous castings, and heavy engineering equipment designed to meet the
                  rigorous operating standards of rail logistics and industrial bulk transport.
                </p>
                <p>
                  Our operations are structured around a disciplined, dual-location industrial framework:
                  an established manufacturing and foundry base at <strong className="text-[#101820]">Rewari Works</strong> (Haryana),
                  coupled with an ongoing rail-linked multimodal development at{" "}
                  <strong className="text-[#101820]">Shivlakha</strong> (Kachchh, Gujarat).
                </p>
              </div>
            </div>

            {/* Corporate Fact & Identifier Registry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-xs">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#101820] font-mono border-b border-[#e2e8f0] pb-3 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#1b4b96]" />
                  Statutory &amp; Operational Overview
                </h3>

                <dl className="mt-4 divide-y divide-[#e2e8f0] text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Legal Entity Name</dt>
                    <dd className="font-semibold text-[#101820]">Kalyani Cast Tech Limited</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Incorporation Date</dt>
                    <dd className="font-mono text-[#101820]">September 2012</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Stock Exchange Listing</dt>
                    <dd className="font-mono text-emerald-700 font-semibold">BSE SME (Scrip: 544023)</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Corporate Identity Number</dt>
                    <dd className="font-mono text-[#101820]">L26990DL2012PLC242760</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Manufacturing Works</dt>
                    <dd className="text-[#101820] text-right">Rewari Works, Haryana</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Integrated Development</dt>
                    <dd className="text-[#101820] text-right">Shivlakha, Kachchh, Gujarat</dd>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <dt className="text-[#44505e]">Foundry Standard</dt>
                    <dd className="font-mono text-[#101820]">IS 12117 Class A (Rewari)</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SECTION 3 — OUR BUSINESS (EXACTLY TWO DIVISIONS)          */}
        {/* ============================================================ */}
        <section id="business-divisions" aria-labelledby="our-business-heading" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
              Section 03 · Corporate Business Architecture
            </p>
            <h2 id="our-business-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
              Our Business
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#44505e]">
              Kalyani Cast Tech Limited operates through exactly two core business divisions: the{" "}
              <strong className="text-[#101820]">Manufacturing Division</strong> and the{" "}
              <strong className="text-[#101820]">Terminal Division</strong>.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {/* ── DIVISION 1: MANUFACTURING ── */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e2e8f0] pb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
                  <Factory className="h-3.5 w-3.5" />
                  Division 1
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#101820]">
                  Manufacturing Division
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#44505e] max-w-3xl">
                  Encompasses heavy industrial container fabrication, railway wagon manufacturing, and the
                  dedicated Foundry Unit producing container corner castings manufactured as per ISO 1161 specifications and engineering components.
                </p>
              </div>

              {/* Three Manufacturing Capabilities */}
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {/* 1. Container Manufacturing */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white border border-[#e2e8f0] mb-4">
                      <img
                        src="/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png"
                        alt="Specialised freight containers in assembly yard at Kalyani Cast Tech"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-base font-bold text-[#101820]">
                      Container Manufacturing
                    </h4>
                    <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                      Engineering and fabrication of ISO standard intermodal containers, heavy open-top coiltainers,
                      bulk mineral containers, and application-specific boxes tailored to customer cargo load limits.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <SiteLink
                      to="/products-applications"
                      className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#143a75]"
                    >
                      Explore Container Products <ArrowRight className="ml-1 h-3 w-3" />
                    </SiteLink>
                  </div>
                </div>

                {/* 2. Wagon Manufacturing */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white border border-[#e2e8f0] mb-4">
                      <img
                        src="/assets/containers/Next-Generation Container Wagon Design.png"
                        alt="Railway wagon concept and structural design"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-base font-bold text-[#101820]">
                      Wagon Manufacturing
                    </h4>
                    <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                      Manufacturing of railway wagons. Development of specialized freight rolling stock designed for
                      intermodal and bulk rail transit, with manufacturing bays co-located with rail access.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <SiteLink
                      to="/products-applications"
                      className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#143a75]"
                    >
                      Review Wagon Capabilities <ArrowRight className="ml-1 h-3 w-3" />
                    </SiteLink>
                  </div>
                </div>

                {/* 3. Foundry Unit */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white border border-[#e2e8f0] mb-4 flex items-center justify-center p-3">
                      <img
                        src="/assets/castings/factory-rewari-corner-castings-01.jpg"
                        alt="Container corner castings manufactured as per ISO 1161 specifications"
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-base font-bold text-[#101820]">
                      Foundry Unit
                    </h4>
                    <div className="mt-2 space-y-2 text-xs text-[#44505e] leading-relaxed">
                      <p>
                        <strong className="text-[#101820]">Corner Castings:</strong> High-grade ferrous corner
                        castings manufactured as per ISO 1161 specifications with Lloyd's Register foundry shop approval.
                      </p>
                      <p>
                        <strong className="text-[#101820]">Other Engineering Equipment:</strong> Locomotive brake blocks,
                        bearing housings, and railway structural equipment under IS 12117 Class A.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <SiteLink
                      to="/products-applications"
                      className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#143a75]"
                    >
                      View Precision Castings <ArrowRight className="ml-1 h-3 w-3" />
                    </SiteLink>
                  </div>
                </div>
              </div>

              {/* Manufacturing Cross-Links */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#e2e8f0] pt-4 text-xs font-mono">
                <span className="text-[#44505e]">Supporting Facilities:</span>
                <SiteLink to="/facilities" className="text-[#1b4b96] hover:underline font-semibold">
                  Inspect Manufacturing Facilities &rarr;
                </SiteLink>
                <span className="text-slate-400">&middot;</span>
                <SiteLink to="/engineering-quality" className="text-[#1b4b96] hover:underline font-semibold">
                  Engineering &amp; Quality Rig &rarr;
                </SiteLink>
              </div>
            </div>

            {/* ── DIVISION 2: TERMINAL ── */}
            <div className="rounded-2xl border border-emerald-300 bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e2e8f0] pb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800">
                  <Train className="h-3.5 w-3.5" />
                  Division 2
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#101820]">
                  Terminal Division
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#44505e] max-w-3xl">
                  Encompasses integrated rail-linked multimodal terminal operations co-located with manufacturing at
                  Shivlakha, Kachchh, Gujarat.
                </p>
              </div>

              {/* Two Terminal Components */}
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Facility 1: Gati Shakti Terminal */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-mono font-semibold text-emerald-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Operational
                      </span>
                      <span className="font-mono text-xs font-bold text-[#101820]">30 Acres</span>
                    </div>
                    <h4 className="mt-1 text-base font-bold text-[#101820]">
                      Gati Shakti Terminal
                    </h4>
                    <p className="mt-1 text-xs font-mono text-emerald-700 font-semibold">
                      Inaugurated 15 September 2026
                    </p>
                    <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                      30-acre operational rail-linked freight terminal equipped with private broad-gauge railway siding
                      connected directly to the Indian Railways network, high-mast illumination, and heavy loading apron.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <SiteLink
                      to="/shivlakha-rail-logistics"
                      className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#143a75]"
                    >
                      Explore Gati Shakti Terminal <ArrowRight className="ml-1 h-3 w-3" />
                    </SiteLink>
                  </div>
                </div>

                {/* Facility 2: Inland Container Terminal */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-mono font-semibold text-amber-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Under Construction
                      </span>
                      <span className="font-mono text-xs font-bold text-[#101820]">30 Acres</span>
                    </div>
                    <h4 className="mt-1 text-base font-bold text-[#101820]">
                      Inland Container Terminal
                    </h4>
                    <p className="mt-1 text-xs font-mono text-amber-700 font-semibold">
                      CBIC Approval Received · Under Development
                    </p>
                    <p className="mt-2 text-xs text-[#44505e] leading-relaxed">
                      30-acre planned facility currently under construction to provide container yard staging, customs
                      examination, and multimodal container handling. (Not operational / not commissioned for commercial bookings).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <SiteLink
                      to="/shivlakha-rail-logistics"
                      className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:text-[#143a75]"
                    >
                      Review Terminal Development <ArrowRight className="ml-1 h-3 w-3" />
                    </SiteLink>
                  </div>
                </div>
              </div>

              {/* 150-Acre Master Allocation & Operational Disclaimer */}
              <div className="mt-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#101820]">
                  <span className="font-bold">Shivlakha Project Master Land Allocation: Exactly 150 Acres</span>
                  <span className="text-[#44505e]">30A Gati Shakti Terminal + 30A Inland Container Terminal + 5A Manufacturing Shed + 85A Future Expansion</span>
                </div>
                <p className="text-xs text-[#44505e] leading-relaxed">
                  <strong className="text-[#101820]">Operational Clarity Note:</strong> Siding inauguration and infrastructure
                  readiness at the Gati Shakti Terminal do not constitute regular scheduled rake movements or published tariffs.
                  Commercial movements, terminal access, and siding operations are governed by railway operating rules and bilateral terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SECTION 4 — MANUFACTURING & ENGINEERING ORIENTATION       */}
        {/* ============================================================ */}
        <section aria-labelledby="manufacturing-orientation-heading" className="scroll-mt-24">
          <div className="rounded-2xl border border-[#d9dfe6] bg-white p-8 sm:p-10 shadow-xs">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
                Section 04 · Technical Execution
              </p>
              <h2 id="manufacturing-orientation-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
                Manufacturing &amp; Engineering Orientation
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#44505e]">
                Our engineering practices are governed by strict application parameters: cargo characteristics,
                tare-weight optimization, structural safety margins, and verified inspection protocols.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Cargo-Centric Design</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Every container configuration originates from cargo payload specifications, load distribution patterns,
                  handling equipment constraints, and route dimensional envelopes.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <Factory className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Standardised Fabrication</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Automated plasma plate cutting, precision jig fixtures, certified welding processes, and controlled
                  surface preparation maintain dimensional accuracy across production runs.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Inspection &amp; Quality Control</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Spectrometric chemical analysis, weld non-destructive testing (NDT), ultrasonic flaw detection, and
                  in-house ISO 1496 structural load testing verify structural performance.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <Compass className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Application Engineering</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Tailoring container designs for specialized commodities—such as coiltainers for steel rolls,
                  bulk hoppers for minerals, and high-cube units for low-density volume cargo.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <Users className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Customer Technical Alignment</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Collaborative technical reviews with supply-chain heads and container train operators ensure
                  equipment compatibility with terminal handling systems and rail rolling stock.
                </p>
              </div>

              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1b4b96] mb-3">
                  <FileCheck className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-[#101820]">Regulatory Conformity</h3>
                <p className="mt-1.5 text-xs text-[#44505e] leading-relaxed">
                  Manufacturing procedures conform to Indian Standards (IS), ISO requirements, and Lloyd&apos;s
                  Register/IRS specifications where certified, verified against current documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SECTION 5 — OUR INDUSTRIAL DEVELOPMENT                    */}
        {/* ============================================================ */}
        <section aria-labelledby="industrial-development-heading" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
              Section 05 · Strategic Evolution
            </p>
            <h2 id="industrial-development-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
              Our Industrial Development
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#44505e]">
              Kalyani Cast Tech Limited&apos;s development trajectory connects proven manufacturing works with phased,
              multimodal infrastructure. Explore the dedicated sections of our corporate platform:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SiteLink
              to="/facilities"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-5 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Facility Infrastructure</span>
                <ArrowRight className="h-4 w-4 text-[#1b4b96] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-2 text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Manufacturing Facilities &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Review installed foundry casting, cutting, boxing, and paint facilities at Rewari Works (Haryana).
              </p>
            </SiteLink>

            <SiteLink
              to="/products-applications"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-5 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Equipment Catalogue</span>
                <ArrowRight className="h-4 w-4 text-[#1b4b96] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-2 text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Products &amp; Applications &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Examine verified container models, coiltainers, and precision castings with technical data sheets.
              </p>
            </SiteLink>

            <SiteLink
              to="/innovation"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-5 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Engineering R&amp;D</span>
                <ArrowRight className="h-4 w-4 text-[#1b4b96] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-2 text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Innovation &amp; Concepts &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Inspect next-generation rolling-stock concepts, specialized cargo units, and developmental prototypes.
              </p>
            </SiteLink>

            <SiteLink
              to="/engineering-quality"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-5 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Testing &amp; Compliance</span>
                <ArrowRight className="h-4 w-4 text-[#1b4b96] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-2 text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Engineering &amp; Quality &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Review in-house ISO 1496 testing facility, laboratory equipment, and quality assurance framework.
              </p>
            </SiteLink>

            <SiteLink
              to="/shivlakha-rail-logistics"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-5 hover:border-[#1b4b96] hover:shadow-xs transition-all block sm:col-span-2 lg:col-span-2"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>150-Acre Multimodal Hub</span>
                <ArrowRight className="h-4 w-4 text-[#1b4b96] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="mt-2 text-base font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Shivlakha Integrated Project &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Explore the master development combining the Gati Shakti Terminal (30 acres, ready),
                Inland Container Terminal (30 acres, under construction), container and wagon manufacturing shed (5 acres), and 85-acre future expansion.
              </p>
            </SiteLink>
          </div>

          {/* Shivlakha Operational Status Clarity Callout */}
          <div className="mt-6 rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-4 text-xs text-[#44505e] leading-relaxed">
            <span className="font-semibold text-[#101820]">Status Clarity Note:</span> Siding completion and infrastructure
            readiness at the Gati Shakti Terminal do not constitute regular commercial schedules or published tariffs. Siding access,
            container handling, and commercial operations are subject to railway operating rules, bilateral agreements, and
            statutory clearances.
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. SECTION 6 — OUR APPROACH                                  */}
        {/* ============================================================ */}
        <section aria-labelledby="our-approach-heading" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
              Section 06 · Corporate Methodology
            </p>
            <h2 id="our-approach-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
              Our Approach
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#44505e]">
              We anchor our commercial relationships in engineering discipline, verified capabilities, and honest
              operational disclosure rather than generic corporate claims.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-[#101820] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                Manufacturing Quality &amp; Precision
              </h3>
              <p className="text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Adherence to specified metallurgical compositions, dimensional tolerances, and multi-stage inspection
                checklists across casting and fabrication bays.
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-[#101820] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                Customer Requirements First
              </h3>
              <p className="text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Evaluating cargo density, handling equipment, and route axle-load parameters before proposing
                specific container structural drawings or material grades.
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-[#101820] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                Engineering Discipline &amp; Verification
              </h3>
              <p className="text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Validating performance through accredited physical testing—including full-scale structural load
                stacking and spectrometer testing—prior to dispatch.
              </p>
            </div>

            <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 space-y-2 shadow-xs">
              <h3 className="text-base font-bold text-[#101820] flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                Disciplined Phased Development
              </h3>
              <p className="text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Expanding manufacturing and logistics infrastructure through verified milestones, ensuring that
                operational readiness precedes commercial commitments.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. SECTION 7 — EXPLORE KALYANI (8 APPROVED DESTINATIONS)     */}
        {/* ============================================================ */}
        <section aria-labelledby="explore-kalyani-heading" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1b4b96]">
              Section 07 · Comprehensive Directory
            </p>
            <h2 id="explore-kalyani-heading" className="mt-1 text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
              Explore Kalyani
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#44505e]">
              Navigate across the complete corporate, industrial, and investor destinations of the Kalyani Cast Tech Limited platform:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SiteLink
              to="/our-journey"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <Calendar className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Our Journey &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Review the 14-year chronological development ledger from 2012 incorporation to 2026 rail terminal milestones.
              </p>
            </SiteLink>

            <SiteLink
              to="/leadership"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <Users className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Board &amp; Management &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Verified leadership profiles, executive management, independent directors, and governance committees.
              </p>
            </SiteLink>

            <SiteLink
              to="/facilities"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <Factory className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Manufacturing &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Explore the dual facilities at Rewari Works (foundry and fabrication) and Shivlakha (manufacturing shed).
              </p>
            </SiteLink>

            <SiteLink
              to="/products-applications"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <Layers className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Products &amp; Applications &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Standard ISO containers, specialized cargo solutions, and precision corner castings catalogue.
              </p>
            </SiteLink>

            <SiteLink
              to="/engineering-quality"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <ShieldCheck className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Engineering &amp; Quality &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Inspection protocols, testing equipment, metallurgical laboratory, and load testing verification.
              </p>
            </SiteLink>

            <SiteLink
              to="/shivlakha-rail-logistics"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <Train className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Shivlakha Project &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                150-acre multimodal development combining Gati Shakti Terminal, Inland Container Terminal, and expansion land.
              </p>
            </SiteLink>

            <SiteLink
              to="/investor-relations"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <TrendingUp className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Investor Relations &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Official BSE SME disclosures, audited financial reports, corporate presentations, and shareholder contacts.
              </p>
            </SiteLink>

            <SiteLink
              to="/contact"
              className="group rounded-xl border border-[#d9dfe6] bg-white p-4 hover:border-[#1b4b96] hover:shadow-xs transition-all block"
            >
              <MapPin className="h-5 w-5 text-[#1b4b96] mb-2" />
              <h3 className="text-sm font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors">
                Contact Desk &rarr;
              </h3>
              <p className="mt-1 text-xs text-[#44505e] leading-relaxed">
                Corporate registered office, plant addresses, investor grievance contacts, and business enquiry routing.
              </p>
            </SiteLink>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. SECTION 8 — BUSINESS ENQUIRY                              */}
        {/* ============================================================ */}
        <section aria-labelledby="connect-heading" className="scroll-mt-24">
          <div className="rounded-2xl border border-[#b8c9e5] bg-gradient-to-br from-[#ebf3fe] via-white to-[#f8fafc] p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1b4b96]">
                  Section 08 · Commercial Dialogue
                </span>
                <h2 id="connect-heading" className="text-2xl font-bold tracking-tight text-[#101820] sm:text-3xl">
                  Connect with Kalyani Cast Tech Limited
                </h2>
                <p className="text-sm sm:text-base text-[#44505e] leading-relaxed">
                  We invite industrial cargo consignors, railway freight operators, fleet leasing organizations,
                  and engineering procurement teams to discuss container manufacturing requirements, precision
                  castings, or multimodal logistics planning.
                </p>
                <p className="text-xs text-[#556579] pt-2 border-t border-[#d9dfe6]">
                  Commercial terms, siding access protocols, technical drawings, and manufacturing schedules
                  are shared strictly under bilateral confidentiality agreements and qualified industrial discussions.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#143a75] transition-colors"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Submit Commercial Enquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d9dfe6] bg-white px-6 text-sm font-semibold text-[#101820] hover:bg-slate-50"
                >
                  <SiteLink to="/contact">
                    View Corporate Directory
                  </SiteLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
