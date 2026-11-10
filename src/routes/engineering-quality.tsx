import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { CertificatesGallery } from "@/components/site/CertificatesGallery";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  FlaskConical,
  Scale,
  FileCheck2,
  Package,
  Wrench,
  TrendingUp,
  Droplets,
  Flame,
  Award,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/engineering-quality")({
  head: () => pageHead("/engineering-quality"),
  component: EngineeringQualityPage,
});

// Section 2: 5 B2B Engineering Capabilities
const engineeringCapabilities = [
  {
    icon: Cpu,
    tag: "3D CAD & Finite Element Analysis",
    title: "Product Engineering & Structural Design",
    desc: "Rigorous 3D solid modeling, structural rigidity calculation, and finite element analysis (FEA) simulation. Every container structure is engineered to optimize internal volume while resisting severe dynamic rail-transport shock forces and multi-tier stacking loads.",
    deliverables: [
      "FEA structural deflection and joint stress analysis",
      "Corner casting load transfer profiling per ISO 1161",
      "Dynamic rail-impact and transverse racking simulation",
    ],
  },
  {
    icon: Package,
    tag: "High-Density & Clearance Engineering",
    title: "Specialised Container Development",
    desc: "Bespoke container engineering for non-standard operational profiles: low-profile double-stack dwarf containers engineered for 25 kV electrified rail corridors (1,930 mm external height), heavy-duty coiltainers with recessed floor saddles, and universal open-top units.",
    deliverables: [
      "Low-profile double-stack electrified corridor envelopes",
      "Heavy coil cradles for 71 MT chassis operation",
      "Universal openable tops with removable structural roof bows",
    ],
  },
  {
    icon: Wrench,
    tag: "Precision Jigs & Weld Automation",
    title: "Manufacturing Engineering & Tooling",
    desc: "In-house design and fabrication of heavy pneumatic assembly fixtures, submerged arc welding (SAW) tracking systems, and robotic weld positioners ensuring tight dimensional repeatability across high-volume container runs.",
    deliverables: [
      "Hydraulic and pneumatic assembly alignment jigs",
      "Automated SAW longitudinal seam tracking systems",
      "Jig qualification verifying zero permanent framework set",
    ],
  },
  {
    icon: Layers,
    tag: "Cargo-Specific Dynamic Analysis",
    title: "Application-Oriented Engineering",
    desc: "Custom structural configurations designed around specific industrial payloads: high-density steel coils, cotton and yarn bales, loose bulk minerals, automotive parts, and corrosive commodities. Dynamic axle load balancing prevents rail wagon derailment risks.",
    deliverables: [
      "Payload density and axle-load distribution modeling",
      "High-tensile floor underframe crossmember spacing",
      "Internal lashing rings and tie-down anchor matrices",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Weight Optimization & Longevity",
    title: "Continuous Product Improvement",
    desc: "Systematic tare weight optimization using high-strength low-alloy (HSLA) and Corten-equivalent weathering steels, polyurethane coating systems applied over SA 2.5 shot blast profiles, and lightweight composite FRP flooring boards.",
    deliverables: [
      "Tare weight reduction saving up to 400 kg per container",
      "Multi-coat marine epoxy barrier systems (120+ µm DFT)",
      "High-cycle fatigue resistance for heavy rail operations",
    ],
  },
];

// Section 3: 5 Staged Quality Assurance Pillars
const qualityProcessPillars = [
  {
    stage: "01",
    name: "Material Evaluation & Incoming Inspection",
    subtitle: "Chemical, Mechanical & Ultrasonic Verification",
    desc: "Every batch of raw steel plates, rolled profiles, and casting heats undergoes mandatory mill test certificate (MTC) validation, optical emission spectroscopy, ultrasonic plate lamination scanning, and hardness verification before shop-floor issue.",
    standards: "ASTM A36 · IS 2062 · Corten Grade · ISO 1161 Raw Melts",
  },
  {
    stage: "02",
    name: "In-Process Manufacturing Verification",
    subtitle: "Weld Parameters & Submerged Arc Profiling",
    desc: "Real-time verification of welding parameters (current, voltage, travel speed), root-pass penetration checks on automatic SAW seams, fit-up tacking alignment, and laser dimensional squareness checks prior to roof and side skin closure.",
    standards: "AWS D1.1 / ISO 15614 Qualified Welding Procedures",
  },
  {
    stage: "03",
    name: "Dimensional & Geometric Inspection",
    subtitle: "Laser Diagonals & ISO 1161 Tolerances",
    desc: "Full 3D diagonal trueness verification using precision laser distance meters, ISO 1161 corner casting aperture center-to-center distances verified to +0/-5 mm tolerances, door opening squareness, and dual EPDM gasket seal compression.",
    standards: "ISO 668 Dimensional Tolerances · ISO 1161 Geometry",
  },
  {
    stage: "04",
    name: "Finished Product Inspection",
    subtitle: "NDT Examination & Paint Barrier Profiling",
    desc: "100% visual examination of structural joints, non-destructive testing (MPI on corner casting weld toes, ultrasonic inspection on main load-bearing crossmembers), and electromagnetic dry film thickness (DFT) paint gauging across all surfaces.",
    standards: "SA 2.5 Shot Blast · 120+ Micron Multi-Coat Marine System",
  },
  {
    stage: "05",
    name: "Testing & Validation Protocols",
    subtitle: "Full-Scale Stacking, Lift & Water Spray Tests",
    desc: "Full-scale physical load verification on the in-house ISO 1496 Series-1 test rig (stacking loads up to 96,012 kg per post), floor-strength axle load verification (7,260 kg forklift load), and high-pressure multi-nozzle weather-tightness water spraying.",
    standards: "ISO 1496-1 §6.2 (Stacking) · §6.8 (Floor) · §6.14 (Weather-tight)",
  },
];

// Section 4: 8 Testing & Inspection Infrastructure Facilities
const testingInfrastructure = [
  {
    num: "01",
    name: "In-House ISO 1496 Structural Load-Testing Facility",
    badge: "Structural Rigidity",
    desc: "In-house structural load-testing facility for container designs available at Rewari Works: full-scale physical load verification for container structural testing and engineering quality assurance in compliance with applicable ISO 1496 testing requirements.",
  },
  {
    num: "02",
    name: "Floor-Strength Dynamic Axle Load Tester",
    badge: "Forklift Axle Rating",
    desc: "Certified forklift axle load tester applying 7,260 kg (16,006 lb) total axle load (2,730 kg per wheel over 142 cm² contact area) verifying zero permanent deflection across steel checker plate, hardwood timber, and FRP composite flooring.",
  },
  {
    num: "03",
    name: "24-Element Optical Emission Spectrometer",
    badge: "Melt Chemistry",
    desc: "Computerised multi-channel optical emission spectrograph providing rapid, heat-by-heat chemical analysis of steel melts, SG iron, and alloy grades across 24 elements before tapping and pouring at our Rewari foundry.",
  },
  {
    num: "04",
    name: "40-Tonne Universal Testing Machine (UTM)",
    badge: "Mechanical Lab",
    desc: "Calibrated 400 kN hydraulic UTM conducting tensile strength, yield stress, and percentage elongation tests on test coupons cast or rolled with production batches to confirm required mechanical properties.",
  },
  {
    num: "05",
    name: "-45°C Sub-Zero Charpy Impact Tester",
    badge: "Sub-Zero Toughness",
    desc: "Low-temperature conditioning bath and Charpy V-notch impact test rig verifying impact energy absorption and fracture toughness down to -45°C for railway casting grades and extreme-climate container steels.",
  },
  {
    num: "06",
    name: "Non-Destructive Testing (NDT) Suite",
    badge: "NDT Inspection",
    desc: "Ultrasonic Flaw Detection (USFD), Magnetic Particle Inspection (MPI), and Liquid Dye Penetrant (DP) testing conducted by certified ASNT / ISNT Level-II specialists to identify subsurface flaws and surface discontinuities.",
  },
  {
    num: "07",
    name: "High-Pressure Multi-Nozzle Water Spray Rig",
    badge: "Weather-Tightness",
    desc: "Full-envelope multi-nozzle high-pressure water spray test curtain delivering 1 kg/cm² pressure across all container seals, door gaskets, and roof seams per ISO 1496 weather-tightness verification standards.",
  },
  {
    num: "08",
    name: "Computerised Heat Treatment & Furnace Control",
    badge: "Thermal Processing",
    desc: "Electric and oil/gas-fired heat treatment furnaces equipped with multi-point digital thermocouple logging and automated temperature controllers for precise normalizing, quenching, and tempering cycles.",
  },
];

// Section 6: 6 Authentic Rewari Works Quality & Testing Photos
const engineeringGallery = [
  {
    src: "/assets/manufacturing/Container Welding Process after Boxing.jpg",
    alt: "Container structural welding inspection and ISO 1496 verification protocol at Rewari Works",
    caption: "CONTAINER WELDING & STRUCTURAL INSPECTION: Certified MIG welding, seam inspection & ISO 1496 verification protocol · Rewari Works",
  },
  {
    src: "/assets/manufacturing/manufacturing-container-qc-testing-01.jpg",
    alt: "Hydraulic container boxing fixture verifying squareness and corner post alignment",
    caption: "CONTAINER BOXING & SQUARING JIG: Heavy hydraulic alignment fixtures ensuring strict diagonal tolerances and corner post perpendicularity",
  },
  {
    src: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    alt: "Container corner castings manufactured as per ISO 1161 specifications at Rewari Foundry",
    caption: "PRECISION CORNER CASTINGS: Corner castings manufactured as per ISO 1161 specifications with Lloyd's Register foundry approval · Rewari Foundry",
  },
  {
    src: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    alt: "Industrial container fabrication workshop and structural assembly bay at Rewari Works",
    caption: "STRUCTURAL FABRICATION BAY: Automated seam welding stations and sub-assembly staging at Rewari manufacturing facility",
  },
  {
    src: "/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg",
    alt: "Precision metal forming, CNC shearing and brake-press tooling for container side-wall corrugations",
    caption: "CORRUGATION & FORMING TOOLING: High-tonnage CNC hydraulic press brakes forming Corten steel container wall panels",
  },
  {
    src: "/assets/manufacturing/Contrs Coming Out from Paint Booth.jpg",
    alt: "Finished freight containers exiting the paint curing booth following multi-coat DFT inspection",
    caption: "PAINT BOOTH EXIT & SURFACE INSPECTION: Finished container units exiting heated curing booth following dry-film thickness inspection",
  },
];

export function EngineeringQualityPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Section 1: Hero Banner                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#0e2a55] px-5 py-16 text-white sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
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
              Manufacturing &amp; Quality
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Engineering &amp; Quality</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            In-House ISO 1496 Series-1 Test Rig &middot; Optical Emission Spectrometer &middot; Non-Destructive Testing (NDT)
          </div>

          <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Engineering, Testing &amp; Quality Systems &middot; Rewari Works
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Precision. Manufacturing Confidence.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            From 3D solid modeling and finite element simulation to full-scale structural load testing and multi-channel metallurgical spectroscopy, Kalyani Cast Tech Limited integrates product engineering and rigorous quality verification under one roof at Rewari, Haryana.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl">
            <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <span className="font-mono text-xs text-white/70 block">Structural Frame</span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">ISO 1496-1</span>
              <span className="text-[11px] text-[#5b8def] block">Full-Scale Rig Tested</span>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <span className="font-mono text-xs text-white/70 block">Corner Post Rating</span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">96,012 kg</span>
              <span className="text-[11px] text-[#5b8def] block">Stacking Load Tested</span>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <span className="font-mono text-xs text-white/70 block">Melt Analysis</span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">24 Elements</span>
              <span className="text-[11px] text-[#5b8def] block">Optical Spectrometer</span>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <span className="font-mono text-xs text-white/70 block">NDT Personnel</span>
              <span className="font-display text-lg sm:text-xl font-bold text-white">Level-II</span>
              <span className="text-[11px] text-[#5b8def] block">ASNT / ISNT Certified</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
            >
              <a href="#capabilities">
                Explore Engineering Capabilities <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
            >
              <a href="#testing-infrastructure">Testing Rig &amp; Infrastructure</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-white/30 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#0e2a55]"
            >
              <SiteLink to="/contact#enquiry-form">Commercial &amp; Technical Enquiry</SiteLink>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* Section 2: Engineering Capabilities                          */}
        {/* ============================================================ */}
        <section id="capabilities" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Design &amp; Engineering Capabilities</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Purpose-Engineered Freight Containers &amp; Precision Castings
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              We approach container manufacturing not as generic metal fabrication, but as rigorous structural engineering. Every model is engineered around specific commodity densities, handling equipment constraints, and route clearance envelopes.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`flex flex-col justify-between rounded-xl border p-6 shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-md ${
                    idx === 0
                      ? "md:col-span-2 lg:col-span-1 border-[#b8c9e5] bg-gradient-to-br from-[#ebf3fe] via-white to-white"
                      : "border-[#d9dfe6] bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b4b96]/10 text-[#1b4b96]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded bg-[#f1f4f8] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#1b4b96]">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-[#101820]">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#f1f4f8] pt-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1b4b96] block mb-2">
                      Key Deliverables &amp; Focus:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#44505e]">
                      {cap.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 3: Quality in Manufacturing                          */}
        {/* ============================================================ */}
        <section id="quality-process" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Quality Assurance Architecture</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Five-Stage Quality Verification from Raw Melt to Finished Container
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Quality at Kalyani Cast Tech Limited is an unbroken operational continuum. Every container and casting progresses through staged gate inspections, verified by calibrated instrumentation and documented inspection records.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {qualityProcessPillars.map((p) => (
              <div
                key={p.stage}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-[#d9dfe6] bg-white p-5 shadow-sm transition-all hover:border-[#1b4b96]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0e2a55] font-mono text-base font-bold text-white">
                    {p.stage}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#101820]">
                        {p.name}
                      </h3>
                      <span className="rounded bg-[#ebf3fe] px-2 py-0.5 font-mono text-xs font-semibold text-[#1b4b96]">
                        {p.subtitle}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 md:text-right border-t md:border-t-0 md:border-l border-[#d9dfe6] pt-3 md:pt-0 md:pl-5">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1b4b96] block">
                    Verification Standard
                  </span>
                  <span className="font-mono text-xs text-[#101820] font-semibold mt-0.5 block">
                    {p.standards}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 4: Testing & Inspection Infrastructure               */}
        {/* ============================================================ */}
        <section id="testing-infrastructure" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">In-House Testing Facility</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Calibrated Physical Testing &amp; Metallurgical Laboratories
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Kalyani Cast Tech operates in-house structural and metallurgical testing infrastructure at its Rewari works, supporting on-site quality verification and compliance before dispatch.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testingInfrastructure.map((lab) => (
              <div
                key={lab.name}
                className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-5 shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#1b4b96]">{lab.badge}</span>
                    <span className="rounded bg-[#f1f4f8] px-2 py-0.5 font-mono text-xs font-semibold text-[#44505e]">
                      Rewari Works
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-[#101820]">
                    {lab.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">{lab.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 5: Standards and Certifications                      */}
        {/* ============================================================ */}
        <section id="standards-certifications" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Statutory &amp; Quality Approvals</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Standards, Type Approvals &amp; Quality Management Systems
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Rigorous compliance governed by international standards, third-party classification societies, and statutory Indian industrial authorities.
            </p>
          </div>

          {/* Mandatory Governance Notice: Testing is Not Certification */}
          <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50/90 p-5 text-amber-950 shadow-sm flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="text-amber-900 block font-semibold mb-1">
                Mandatory Governance Distinction — Testing Is Not Automatic Certification:
              </strong>
              Test equipment, inspection methods, test reports, and third-party certifications are distinct legal and technical instruments. An in-house test facility does not confer automatic certification on every fabrication; third-party certificates apply strictly within the specific models, casting grades, and scopes verified in official audit documentation. Enquire with our engineering team to confirm which specific certificate or type approval applies to your model.
            </div>
          </div>

          {/* 3 Clear Category Blocks: Management System, Product Type Approval, Technical Assessments */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-[#b8c9e5] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1b4b96]">
                <ShieldCheck className="h-4 w-4 text-[#1b4b96]" />
                <span>MANAGEMENT SYSTEMS</span>
              </div>
              <h3 className="mt-2 font-display text-base font-bold text-[#101820]">
                ISO 9001:2015 Quality Management
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Accredited quality management system covering design, engineering, procurement, fabrication, non-destructive testing, and supply of ISO freight containers and ferrous precision castings.
              </p>
              <div className="mt-4 rounded bg-[#f8fafc] border border-[#e2e8f0] p-2.5 font-mono text-[11px] text-[#44505e]">
                Scope: Container fabrication &amp; foundry operations · Rewari Works
              </div>
            </div>

            <div className="rounded-xl border border-[#b8c9e5] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-700">
                <Award className="h-4 w-4 text-emerald-700" />
                <span>PRODUCT TYPE APPROVALS</span>
              </div>
              <h3 className="mt-2 font-display text-base font-bold text-[#101820]">
                Lloyd's Register &amp; IRS Approvals
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Independent classification society approvals for our Rewari foundry producing corner castings manufactured as per ISO 1161 specifications (Lloyd's Register &amp; IRS), CSC 1972 container safety compliance, and IS 12117 Class A foundry approval.
              </p>
              <div className="mt-4 rounded bg-[#f8fafc] border border-[#e2e8f0] p-2.5 font-mono text-[11px] text-[#44505e]">
                ISO 1161 · CSC 1972 · ISO 1496:2013 · IS 12117 Class A
              </div>
            </div>

            <div className="rounded-xl border border-[#b8c9e5] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1b4b96]">
                <FileCheck2 className="h-4 w-4 text-[#1b4b96]" />
                <span>STATUTORY ASSESSMENTS</span>
              </div>
              <h3 className="mt-2 font-display text-base font-bold text-[#101820]">
                RITES &amp; Technical Appraisals
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                Institutional capacity assessments and technical competency appraisals conducted by RITES and Indian industrial bodies verifying plant infrastructure, tooling, and annual production volumes.
              </p>
              <div className="mt-4 rounded bg-[#f8fafc] border border-[#e2e8f0] p-2.5 font-mono text-[11px] text-[#44505e]">
                Statutory plant inspections &amp; technical capacity audits
              </div>
            </div>
          </div>

          {/* Interactive Certificates Gallery with Viewer */}
          <div id="certificates" className="mt-10 scroll-mt-28">
            <CertificatesGallery />
          </div>
        </section>

        {/* ============================================================ */}
        {/* Section 6: Engineering and Quality Gallery                   */}
        {/* ============================================================ */}
        <section id="gallery" className="mt-20 scroll-mt-28">
          <div className="border-b border-[#d9dfe6] pb-6">
            <p className="eyebrow text-[#1b4b96]">Shop-Floor Verification</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Rewari Works Testing &amp; Quality Inspection Gallery
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#44505e]">
              Authentic photographic records from active container fabrication, structural squaring, welding inspection, and precision casting operations at Rewari, Haryana.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringGallery.map((item) => (
              <div
                key={item.src}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-[#d9dfe6] bg-[#0a1f3d] px-3.5 py-2 text-[11px] font-mono font-medium text-white/90">
                  {item.caption}
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
              <p className="eyebrow text-[#1b4b96]">Commercial &amp; Technical Engagement</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Discuss Your Manufacturing Requirement
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                Whether you require custom container engineering, specialized freight prototypes, precision casting development, or quality documentation for an upcoming tender, our technical team is available to review your specifications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#1b4b96] px-6 text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink to="/contact#enquiry-form">
                    Initiate Technical Enquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d9dfe6] bg-white px-6 text-sm font-semibold text-[#101820] hover:border-[#1b4b96]"
                >
                  <SiteLink to="/contact">
                    Contact Plant &amp; Corporate Directory
                  </SiteLink>
                </Button>
              </div>

              <div className="mt-6 border-t border-[#b8c9e5] pt-4 text-xs text-[#44505e]">
                <strong className="text-[#101820]">Commercial Terms:</strong> Manufacturing slot availability, custom tooling feasibility, minimum order quantities (MOQ), and commercial proposals are confirmed upon review of complete technical parameters.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
