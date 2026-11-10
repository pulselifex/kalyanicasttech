import { useState } from "react";
import {
  Train,
  Calculator,
  TrendingUp,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./SiteLink";

export type RakeConfigType = "cuboid" | "cotton" | "dwarf" | "coiltainer";

export function RakeCalculator({ className = "" }: { className?: string }) {
  const [selectedConfig, setSelectedConfig] = useState<RakeConfigType>("cotton");
  const [rakeCount, setRakeCount] = useState<number>(1);
  const [wagonsPerRake, setWagonsPerRake] = useState<number>(45);

  const totalWagons = rakeCount * wagonsPerRake;

  return (
    <section
      id="rake-calculator"
      data-testid="rake-calculator-tool"
      className={`scroll-mt-28 rounded-2xl border border-[#b8c9e5] bg-gradient-to-b from-[#f8fafc] via-white to-white p-6 sm:p-10 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-[#d9dfe6] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              Interactive Rail Logistics Simulator
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl text-[#101820]">
            Rail Rake &amp; Payload Calculator
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#44505e] max-w-2xl leading-relaxed">
            Simulate payload throughput, volumetric expansion, and equipment efficiency across verified
            Kalyani Cast Tech train rake configurations operating on Indian Railways broad-gauge networks.
          </p>
        </div>
        <div className="rounded-lg bg-[#0e2a55] px-4 py-2 font-mono text-xs font-bold text-white shrink-0">
          Broad-Gauge BLC Rake Architecture
        </div>
      </div>

      {/* Configuration Selectors */}
      <div className="mt-8">
        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96] mb-3">
          1. Choose Freight Configuration
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: "cotton",
              name: "40' HC Cotton Bale (84.00 m³)",
              tag: "+10.4% Volumetric Advantage",
              desc: "84 Cu.m High-Cube box carrying 168 bales per container at 34 MT payload (34,000 kg).",
            },
            {
              id: "dwarf",
              name: "Double-Stack Dwarf (2,600 × 1,930 mm)",
              tag: "Low OHE Clearance + ~400 kg FRP",
              desc: "Under-wire double-stack with lightweight composite floor.",
            },
            {
              id: "coiltainer",
              name: "Heavy Coiltainers (71 MT Chassis)",
              tag: "60.2T to 75.0T Payload",
              desc: "Heavy open-top cradles rated for steel coils, billets, and TMT.",
            },
            {
              id: "cuboid",
              name: "CUBOID Automotive & Parcel Box",
              tag: "270 Boxes per Full Rake",
              desc: "Modular 12.5 m³ boxes carrying 2,160 motorbikes or 810 three-wheelers.",
            },
          ].map((cfg) => {
            const isSelected = selectedConfig === cfg.id;
            return (
              <button
                key={cfg.id}
                type="button"
                data-testid={`calc-cfg-${cfg.id}`}
                onClick={() => setSelectedConfig(cfg.id as RakeConfigType)}
                className={`flex flex-col justify-between rounded-xl p-4 text-left transition-all border ${
                  isSelected
                    ? "bg-[#0e2a55] border-[#1b4b96] text-white shadow-md ring-2 ring-[#1b4b96]/40"
                    : "bg-white border-[#d9dfe6] text-[#101820] hover:border-[#1b4b96] hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                        isSelected
                          ? "bg-emerald-400 text-[#0e2a55]"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {cfg.tag}
                    </span>
                  </div>
                  <h3
                    className={`mt-2 font-display text-sm font-bold leading-snug ${
                      isSelected ? "text-white" : "text-[#101820]"
                    }`}
                  >
                    {cfg.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs leading-relaxed ${
                      isSelected ? "text-white/80" : "text-[#44505e]"
                    }`}
                  >
                    {cfg.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rake Count & Wagons Controls */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f1f4f8] p-6 rounded-xl border border-[#d9dfe6]">
        <div>
          <div className="flex items-center justify-between">
            <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#101820]">
              Number of Full Train Rakes
            </label>
            <span className="font-mono text-base font-bold text-[#1b4b96]">
              {rakeCount} {rakeCount === 1 ? "Rake" : "Rakes"}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                data-testid={`rake-count-btn-${num}`}
                onClick={() => setRakeCount(num)}
                className={`flex-1 py-2 rounded-md font-mono text-xs font-bold transition-all border ${
                  rakeCount === num
                    ? "bg-[#1b4b96] text-white border-[#1b4b96] shadow-sm"
                    : "bg-white text-[#101820] border-[#d9dfe6] hover:border-[#1b4b96]"
                }`}
              >
                {num} {num === 1 ? "Rake" : "Rakes"}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-[#556579]">
            1 standard broad-gauge rake accommodates 45 BLC container flat wagons (standard broad-gauge train rake).
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#101820]">
              Wagons per Train Rake
            </label>
            <span className="font-mono text-base font-bold text-[#1b4b96]">
              {wagonsPerRake} Wagons / Rake ({totalWagons} Total Wagons)
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {[15, 30, 45].map((wCount) => (
              <button
                key={wCount}
                type="button"
                onClick={() => setWagonsPerRake(wCount)}
                className={`flex-1 py-2 rounded-md font-mono text-xs font-bold transition-all border ${
                  wagonsPerRake === wCount
                    ? "bg-[#0e2a55] text-white border-[#0e2a55] shadow-sm"
                    : "bg-white text-[#101820] border-[#d9dfe6] hover:border-[#1b4b96]"
                }`}
              >
                {wCount} Wagons {wCount === 45 ? "(Full Rake)" : "(Sub-Rake)"}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-[#556579]">
            Full 45-wagon placement matches the broad-gauge siding at the Gati Shakti Terminal, Shivlakha.
          </p>
        </div>
      </div>

      {/* Dynamic Results Dashboard */}
      <div className="mt-8 rounded-xl border border-[#b8c9e5] bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Train className="h-5 w-5 text-[#1b4b96]" />
            <h3 className="font-display text-base font-bold text-[#101820] sm:text-lg">
              Simulated Rail Performance Metrics &middot; {totalWagons} Broad-Gauge Wagons
            </h3>
          </div>
          <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Calculated Live
          </span>
        </div>

        {/* Dynamic Metric Display based on configuration */}
        {selectedConfig === "cotton" && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#1b4b96]">
                  {(totalWagons * 2).toLocaleString()}
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  40&apos; HC Containers Loaded (2 / wagon)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-emerald-700">
                  {(totalWagons * 2 * 84).toLocaleString()} m³
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Total Usable Cargo Volume
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-amber-600">
                  +{(totalWagons * 2 * 7.91).toFixed(1)} m³
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  +10.4% Volumetric Advantage vs. Standard ISO
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#0e2a55]">
                  {(totalWagons * 2 * 168).toLocaleString()} Bales
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Compressed Cotton Bales (168 / box)
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-900 leading-relaxed">
              <strong>Commercial Comparison Note:</strong> Standard ISO 40&apos; HC containers provide only 76.09 m³ capacity (max 150 bales). Kalyani Cast Tech&apos;s 84.00 m³ design carries 168 bales (+18 bales per container). For a {rakeCount}-rake operation ({totalWagons * 2} containers), you move <strong>{(totalWagons * 2 * 18).toLocaleString()} additional bales</strong> on the exact same train rake slot without paying extra railway haulage!
            </div>
          </div>
        )}

        {selectedConfig === "dwarf" && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#1b4b96]">
                  {(totalWagons * 2).toLocaleString()}
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Dwarf Boxes (Double-Stacked)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-emerald-700">
                  1,930 mm
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Profile Height Under 25kV OHE Wires
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-amber-600">
                  -{(totalWagons * 2 * 0.4).toFixed(1)} MT
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Tare Weight Saved via In-House FRP Floor
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#0e2a55]">
                  {(totalWagons * 2 * 31.7).toFixed(1)} MT
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Combined Net Payload Capacity
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-xs text-blue-900 leading-relaxed">
              <strong>Double-Stack Under Electrified Lines:</strong> Standard 2,896 mm (9&apos;6&quot;) High-Cube containers cannot be double-stacked under Indian Railways 25kV overhead electrification. Kalyani Cast Tech&apos;s 1,930 mm Dwarf container enables full double-stacking on electrified routes, unlocking <strong>{(totalWagons * 2 * 54.1).toFixed(0)} m³</strong> of transit volume while the composite FRP floor saves {(totalWagons * 2 * 400).toLocaleString()} kg in dead weight.
            </div>
          </div>
        )}

        {selectedConfig === "coiltainer" && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#1b4b96]">
                  {totalWagons} Units
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Heavy Coiltainers (1 / BLC Wagon)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-emerald-700">
                  75,000 kg
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Max Container Payload Rating
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-amber-600">
                  {(totalWagons * 65.0).toLocaleString()} MT
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Heavy Steel Haul Throughput
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#0e2a55]">
                  88,888 kg
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Stacking Load per Corner Post
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed">
              <strong>Zero-Dunnage Steel Haulage:</strong> Traditional rail flat cars require extensive timber lashing and risk steel coil roll-off during emergency braking. KCT Coiltainers feature integral V-shaped steel troughs lined with polyurethane cushioning, carrying up to 75 MT per unit on 71 MT chassis with <strong>zero transit roll risk</strong> and rapid EOT overhead crane turnarounds.
            </div>
          </div>
        )}

        {selectedConfig === "cuboid" && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#1b4b96]">
                  {(totalWagons * 6).toLocaleString()} Boxes
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  CUBOID Units (6 / BLC Wagon)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-emerald-700">
                  {(totalWagons * 48).toLocaleString()} Units
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Motorbikes Transferred (48 / wagon)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-amber-600">
                  {(totalWagons * 18).toLocaleString()} Units
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  Three-Wheelers Carried (18 / wagon)
                </span>
              </div>

              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4 text-center">
                <span className="block font-mono text-2xl font-extrabold text-[#0e2a55]">
                  {(totalWagons * 15.0).toLocaleString()} MT
                </span>
                <span className="text-xs text-[#556579] font-medium">
                  High-Value Parcel Payload
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-900 leading-relaxed">
              <strong>Automotive &amp; E-Commerce Rail Logistics:</strong> For a single 45-wagon rake, 270 CUBOID boxes transport up to <strong>2,160 motorbikes</strong> or <strong>810 three-wheelers</strong> or <strong>675 MT of parcel freight</strong>. Individual boxes can be detached by forklift at intermediate terminal stops without holding up the entire freight train rake.
            </div>
          </div>
        )}

        {/* Action Callout */}
        <div className="mt-8 pt-5 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#101820]">
              Need route-specific rail tariff analysis or test rake trial allocation?
            </p>
            <p className="text-[11px] text-[#556579]">
              Shivlakha Gati Shakti Terminal officers and Rewari technical teams review individual cargo streams.
            </p>
          </div>
          <Button
            asChild
            className="h-10 rounded-md bg-[#1b4b96] px-5 text-xs font-bold text-white hover:bg-[#143a75] shrink-0"
          >
            <SiteLink
              to={`/contact?subject=${encodeURIComponent(
                `Rail Rake Enquiry: ${rakeCount} Rake(s) of ${
                  selectedConfig === "cotton"
                    ? "40ft HC Cotton Bale"
                    : selectedConfig === "dwarf"
                      ? "Double-Stack Dwarf"
                      : selectedConfig === "coiltainer"
                        ? "Heavy Coiltainer"
                        : "CUBOID Automotive"
                }`,
              )}#enquiry-form`}
            >
              Evaluate Rake Movement &rarr;
            </SiteLink>
          </Button>
        </div>
      </div>
    </section>
  );
}

