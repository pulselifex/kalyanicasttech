import {
  Waves,
  Layers,
  Sparkles,
  Boxes,
  Bike,
  Building2,
  ArrowRight,
  Train,
  CheckCircle2,
} from "lucide-react";
import { SiteLink } from "./SiteLink";

export interface CargoSector {
  num: string;
  title: string;
  tag: string;
  icon: typeof Waves;
  hardware: string;
  terminalSolution: string;
  roiCallout: string;
  enquiryType: string;
}

export const CARGO_SECTORS: CargoSector[] = [
  {
    num: "01",
    title: "Industrial Salt, Soda Ash & Marine Chemicals",
    tag: "Bulk & Coastal Catchment",
    icon: Waves,
    hardware: "20' SS Salt Container (2.6 MT tare · Jindal Stainless / Bhimasar trialed), 20' Gravity Hopper & 40' Dwarf Open-Top Container",
    terminalSolution:
      "Direct bulk rake loading and containerized dispatch at the Shivlakha Gati Shakti Terminal cargo platform, connecting coastal Kachchh salt works to pan-India rail corridors.",
    roiCallout: "Engineered for bulk transport; 2.6 MT SS tare weight provides high payload capacity with 304-grade stainless steel corrosion resistance.",
    enquiryType: "cargo",
  },
  {
    num: "02",
    title: "Hot-Rolled Steel Coils, Plates & 12m TMT Bars",
    tag: "Heavy Density Freight",
    icon: Layers,
    hardware: "40' & 42' Heavy Open-Top Coiltainers (up to 80T gross / 71T chassis rating with integral cradle wells)",
    terminalSolution:
      "Full-rake handling siding with dual tracks; overhead crane and heavy forklift staging on the reinforced Gati Shakti Terminal cargo wharf.",
    roiCallout: "71 MT chassis operation and 36 MT lift rating allow overhead EOT loading of 12m bundles and heavy coils without end-wall damage.",
    enquiryType: "container",
  },
  {
    num: "03",
    title: "Cotton Bales, Textiles & Light-Density FMCG",
    tag: "High-Cube Volume Maximisation",
    icon: Sparkles,
    hardware: "40' HC 84 Cu.m Cotton Bale Container (84.00 m³ / 34 MT payload rating) & 40' Side-Access Dwarf Container (54.1 m³)",
    terminalSolution:
      "Double-stack rail clearance under electrified overhead catenary (OHE) wires via Chitrod Junction on the Mundra–Kandla–Palanpur corridor.",
    roiCallout: "+10.4% more internal volume vs. standard 76.09 m³ ISO boxes; maximizes bale count per wagon under 34 MT payload limits.",
    enquiryType: "container",
  },
  {
    num: "04",
    title: "Ceramics, Vitrified Tiles & Sanitaryware",
    tag: "Morbi–Kachchh Industrial Belt",
    icon: Boxes,
    hardware: "20' HC Container (34.05T payload) & 20' HC Side-Access Container with 7,260 kg forklift floor rating",
    terminalSolution:
      "Co-located container dispatch ~68 km to Deendayal (Kandla) Port and ~132 km to Mundra Port, offering rail-intermodal feeder transit.",
    roiCallout: "1,510 × 2,480 mm side door allows rapid forklift pallet loading in tight bays with zero tile breakage and high axle load resistance.",
    enquiryType: "cargo",
  },
  {
    num: "05",
    title: "Two-Wheelers, Three-Wheelers & Express Parcels",
    tag: "Automotive OEM Transit",
    icon: Bike,
    hardware: "CUBOID 3-Tier Modular Box (12.50 m³ · 2.5 MT payload · 270 boxes per 45-wagon rake)",
    terminalSolution:
      "Dedicated unit train handling at Shivlakha Gati Shakti Terminal, with rapid 5 MT forklift loading and staging alongside Rewari fabrication lines.",
    roiCallout: "Carries 2,160 motorbikes, 810 three-wheelers, or 675 MT parcels per single rake with zero transit abrasion.",
    enquiryType: "container",
  },
  {
    num: "06",
    title: "Bulk Cement, Clinker, Flyash & Fertiliser",
    tag: "Pneumatic & Gravity Discharge",
    icon: Building2,
    hardware: "20' Bottom-Discharge Hopper Container (37.00 m³ / 32.7T payload) & specialized bulk wagons",
    terminalSolution:
      "Full 45-wagon placement at Shivlakha Gati Shakti Terminal rail siding with rapid bottom-discharge pit transfer and Silo integration.",
    roiCallout: "Enclosed hopper container designed for top-hatch loading and gravity bottom discharge, supporting mechanical transfer from plant to rail.",
    enquiryType: "cargo",
  },
];

export function CargoSolutionsGrid({ className = "" }: { className?: string }) {
  return (
    <section
      id="cargo-solutions"
      className={`scroll-mt-28 rounded-2xl border border-[#b8c9e5] bg-white p-6 sm:p-10 shadow-sm ${className}`}
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-[#d9dfe6] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              6-Sector Commodity Matrix &middot; Hardware + Terminal Integration
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#101820] sm:text-3xl">
            Solutions by Cargo &amp; Industry
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[#44505e]">
            Kalyani Cast Tech pairs purpose-built container and rolling-stock engineering with our
            Gati Shakti Terminal at Shivlakha. Select your cargo stream to see
            the matched hardware and logistics architecture.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <SiteLink
            to="/contact?type=cargo#enquiry-form"
            className="inline-flex items-center gap-2 rounded-md bg-[#1b4b96] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#143a75]"
          >
            Submit Commodity Requirements &rarr;
          </SiteLink>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARGO_SECTORS.map((sector) => {
          const Icon = sector.icon;
          return (
            <div
              key={sector.num}
              className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-5 transition-all hover:border-[#1b4b96] hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0e2a55] font-mono text-xs font-bold text-white">
                    {sector.num}
                  </span>
                  <span className="rounded bg-slate-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-[#1b4b96]">
                    {sector.tag}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#ebf3fe] text-[#1b4b96]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#101820] leading-snug">
                    {sector.title}
                  </h3>
                </div>

                <div className="mt-4 space-y-2.5 text-sm">
                  <div className="rounded-md border border-[#e2e8f0] bg-white p-2.5">
                    <span className="font-mono text-xs font-bold uppercase text-[#1b4b96] block">
                      Matched Hardware:
                    </span>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#101820] leading-relaxed">
                      {sector.hardware}
                    </p>
                  </div>

                  <div className="rounded-md border border-[#e2e8f0] bg-white p-2.5">
                    <span className="font-mono text-xs font-bold uppercase text-emerald-800 block">
                      Terminal &amp; Rail Architecture:
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                      {sector.terminalSolution}
                    </p>
                  </div>

                  <div className="rounded-md bg-amber-50/70 border border-amber-200/80 p-2.5">
                    <span className="font-mono text-xs font-bold uppercase text-amber-900 block">
                      Commercial Advantage:
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                      {sector.roiCallout}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#e2e8f0] flex items-center justify-between">
                <SiteLink
                  to={`/contact?type=${sector.enquiryType}#enquiry-form`}
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#1b4b96] hover:underline"
                >
                  Evaluate Route &amp; Specs <ArrowRight className="h-3 w-3" />
                </SiteLink>
                <span className="font-mono text-xs text-[#64748b]">KCT Engineering</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
