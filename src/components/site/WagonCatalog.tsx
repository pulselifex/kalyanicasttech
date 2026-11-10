import { useState } from "react";
import {
  Train,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Maximize2,
  Download,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { SiteLink } from "./SiteLink";
import { cn } from "@/lib/utils";

export interface WagonModel {
  id: string;
  name: string;
  typeDesignation: string;
  category: string;
  headline: string;
  description: string;
  payload: string;
  grossRailLoad: string;
  axleLoad: string;
  deckHeight: string;
  speed: string;
  coupler: string;
  brakes: string;
  bogie: string;
  rdsoStandard: string;
  facilityStatus: string;
  primaryImage: string;
  technicalDiagram?: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

export const WAGON_MODELS: WagonModel[] = [
  {
    id: "wagon-01",
    name: "Bi-Level Multi-Deck Auto Car Carrier Wagon",
    typeDesignation: "BCACBM Class Equivalent",
    category: "Automotive Logistics",
    headline: "High-Capacity Multi-Deck Rolling Stock for Finished Automobile Distribution",
    description:
      "Engineered for high-volume automotive logistics across electrified Indian Railways networks. Features an articulated twin-deck structure with continuous roll-on roll-off internal ramps, specialized multi-point vehicle restraint chocks, and aerodynamic end enclosures protecting high-value vehicle cargo during high-speed transit.",
    payload: "Up to 9–10 Passenger Cars / Compact SUVs",
    grossRailLoad: "68.0 Tonnes",
    axleLoad: "17.0 Tonnes Axle Load",
    deckHeight: "Optimized Upper/Lower Clearances to IR Maximum Moving Dimensions (MMD)",
    speed: "100 km/h (Loaded & Empty)",
    coupler: "Non-transition tight-lock Centre Buffer Coupler (CBC) with high-capacity draft gear",
    brakes: "Twin-pipe graduated release air brake system with automatic load sensing device (LSD)",
    bogie: "High-speed cast steel bogie with primary coil springs and polyurethane wear pads",
    rdsoStandard: "Compliant with RDSO guidelines for bi-level auto car carrier wagons",
    facilityStatus: "Shivlakha Rolling-Stock Line (Target Q4 FY 2026-27)",
    primaryImage: "/assets/wagons/Car Carrier 9 Car.png",
    technicalDiagram: "/assets/wagons/Efficient Car Carrier Wagon Infographic.png",
    features: [
      "Carries 9+ cars across twin articulated levels",
      "Internal transition ramps for rapid roll-on roll-off train loading",
      "Multi-point adjustable tire locking chocks preventing in-transit movement",
      "Full enclosed side screen mesh preventing transit debris damage",
    ],
    keySpecs: [
      { label: "Wagon Classification", value: "Bi-Level Auto Car Carrier (BCACBM Class)" },
      { label: "Carrying Capacity", value: "9–10 Passenger Cars / Compact SUVs" },
      { label: "Gross Rail Load (GRL)", value: "68.0 Tonnes" },
      { label: "Axle Load Limit", value: "17.0 Tonnes" },
      { label: "Operating Speed", value: "100 km/h" },
      { label: "Braking Architecture", value: "Twin-pipe air brake with auto Load Sensing Device" },
      { label: "Coupling System", value: "AAR tight-lock Centre Buffer Coupler (CBC)" },
      { label: "Production Facility", value: "Shivlakha Rolling-Stock Bay (220 m × 45 m Shed)" },
    ],
  },
  {
    id: "wagon-02",
    name: "Next-Generation Low-Deck Container Flat Wagon",
    typeDesignation: "BLCS / BLCM Low-Platform Series",
    category: "Intermodal Freight",
    headline: "25T Axle-Load Low-Platform Wagon for Double-Stack Intermodal Rail Logistics",
    description:
      "Fabricated with high-tensile structural micro-alloyed steel, this low-platform container flat wagon achieves a floor height of 1,009 mm above rail level. Specifically designed to haul double-stacked ISO dry containers and specialized dwarf containers beneath 25kV AC electrified overhead wires on Indian Railways corridors and Dedicated Freight Corridors (DFC).",
    payload: "65.0 Tonnes per wagon (130 Tonnes per twin-wagon block)",
    grossRailLoad: "81.2 Tonnes (20.3T to 25.0T Axle Load operations)",
    axleLoad: "20.3T / 22.0T / 25.0T Upgradable",
    deckHeight: "1,009 mm Above Rail Level (ARL)",
    speed: "100 km/h",
    coupler: "Slackless drawbar interconnecting twin cars; AAR Grade E CBC at outer ends",
    brakes: "Automatic twin-pipe graduated release air brakes with composite K-type blocks",
    bogie: "Low-height LCCF 20(C) / CASNUB-derived cast steel bogie with cartridge roller bearings",
    rdsoStandard: "RDSO Specification CONTR-02-BLCS-2005 / DFC 25T Axle Load Standards",
    facilityStatus: "Shivlakha Rolling-Stock Line (Target Q4 FY 2026-27)",
    primaryImage: "/assets/wagons/New Container Wagon.png",
    technicalDiagram: "/assets/wagons/Next-Generation Container Wagon Design.png",
    features: [
      "1,009 mm platform height enables double-stack clearance under electrified OHE",
      "Carries 2 × 20' or 1 × 40' / 42' container combinations per flat car",
      "Heavy-duty retractable container twist locks with positive latch indicator",
      "Engineered for 25-tonne heavy-haul axle loading on DFC routes",
    ],
    keySpecs: [
      { label: "Wagon Classification", value: "Bogie Low-Floor Container Flat (BLCS)" },
      { label: "Platform Deck Height", value: "1,009 mm Above Rail Level" },
      { label: "Container Load Combinations", value: "2 × 20' GP/HC or 1 × 40'/42' Container" },
      { label: "Axle Load Capacity", value: "20.3 Tonnes (Designed for 25.0T DFC Service)" },
      { label: "Maximum Speed", value: "100 km/h" },
      { label: "Twist Lock Mechanism", value: "Fold-down / Retractable Automatic Twist Locks" },
      { label: "Underframe Material", value: "High-Tensile Corten / Micro-Alloyed Steel" },
      { label: "Manufacturing Base", value: "Shivlakha Works (Target Q4 FY 2026-27)" },
    ],
  },
  {
    id: "wagon-03",
    name: "Roll-On Roll-Off (Ro-Ro) Commercial Truck Wagon",
    typeDesignation: "Ultra-Low Floor Ro-Ro Carrier Platform",
    category: "Multimodal Highway-to-Rail",
    headline: "Ultra-Low Bed Rail Platform for Direct Roll-On Commercial Truck Transport",
    description:
      "An intermodal highway-to-rail solution allowing loaded commercial trucks, tractor-trailers, and bulk tankers to drive directly onto the rail rake without crane off-loading. Incorporates small-wheel bogies and ultra-low recessed decks providing vertical clearances compliant with Indian Railways tunnels and overhead electrified structures.",
    payload: "Up to 55.0 Tonnes per wagon (Loaded multi-axle truck or trailer)",
    grossRailLoad: "75.0 Tonnes",
    axleLoad: "18.75 Tonnes",
    deckHeight: "840 mm Above Rail Level (Ultra-Low Floor Profile)",
    speed: "80–100 km/h",
    coupler: "Slackless articulated intermediate couplers with end CBC transition couplers",
    brakes: "Twin-pipe fail-safe air brake system with automatic brake slack adjuster",
    bogie: "Small-diameter wheel bogie (wheel dia. 730 mm / 680 mm) with sealed CTRB",
    rdsoStandard: "Engineered to RDSO Ro-Ro operational clearance guidelines",
    facilityStatus: "Shivlakha Rolling-Stock Line (Target Q4 FY 2026-27)",
    primaryImage: "/assets/wagons/RORO Wagon Container.png",
    technicalDiagram: "/assets/wagons/RoRo Wagon 1.png",
    features: [
      "Direct drive-on drive-off train loading without heavy terminal cranes",
      "Ultra-low 840 mm deck height accommodates full-height highway trailers",
      "Integrated wheel chocks and high-tensile ratchet lashing tensioners",
      "Reduces highway diesel consumption, carbon emissions, and driver fatigue",
    ],
    keySpecs: [
      { label: "Wagon Classification", value: "Continuous Ro-Ro Commercial Truck Carrier" },
      { label: "Deck Floor Height", value: "840 mm Above Rail Level" },
      { label: "Wheel Diameter", value: "730 mm / 680 mm Specially Designed Small Wheels" },
      { label: "Payload Capacity", value: "55.0 Metric Tons per Loaded Truck/Trailer" },
      { label: "Tie-Down Architecture", value: "Continuous ratchet lashing & automatic wheel chocks" },
      { label: "Loading Method", value: "Direct drive-through end-to-end rake roll-on" },
      { label: "Terminal Compatibility", value: "Operational at Shivlakha Paved Gati Shakti Terminal Platforms" },
      { label: "Readiness Horizon", value: "Target Q4 FY 2026-27 (Shivlakha Expansion)" },
    ],
  },
  {
    id: "wagon-04",
    name: "Special-Application Heavy Coil & Steel Freight Wagon",
    typeDesignation: "BFNS / BOST Heavy Steel Series",
    category: "Heavy Metallurgy Freight",
    headline: "Fabricated High-Yield Steel Wagon for Concentrated Steel Coil & Slab Transport",
    description:
      "Purpose-built for heavy steel mills, metallurgical plants, and coastal port logistics. Designed with integrated transversal V-shaped cradles, high-density rubber/polyurethane saddle linings, and heavily reinforced centre sills engineered to absorb dynamic impact loads from concentrated hot-rolled steel coils, wire rod bundles, and structural steel slabs.",
    payload: "66.8 Tonnes Payload Capacity",
    grossRailLoad: "89.2 Tonnes (22.32T Axle Load; Upgradable to 25.0T)",
    axleLoad: "22.32 Tonnes / 25.0 Tonnes",
    deckHeight: "1,270 mm Above Rail Level",
    speed: "100 km/h (Empty) / 75–100 km/h (Loaded)",
    coupler: "High-tensile AAR Grade E Centre Buffer Coupler with high-capacity elastomeric draft gear",
    brakes: "Graduated release air brake with distributor valve and auto slack adjuster",
    bogie: "CASNUB 22NGB cast steel bogie with grease-lubricated cartridge tapered roller bearings",
    rdsoStandard: "RDSO Specification WD-01-BFNS-2012 / Heavy Freight Class",
    facilityStatus: "Shivlakha Rolling-Stock Line (Target Q4 FY 2026-27)",
    primaryImage: "/assets/wagons/Special Wagon Design3.png",
    features: [
      "V-shaped transverse saddles for secure transport of eye-horizontal steel coils",
      "Polyurethane-lined cradle surfaces preventing edge damage to prime steel",
      "Fabricated centre sill with high-strength micro-alloyed structural steel",
      "Heavy lashing rings rated for 10 MT strap tension per securing point",
    ],
    keySpecs: [
      { label: "Wagon Classification", value: "Bogie Flat Steel & Coil Wagon (BFNS Class)" },
      { label: "Carrying Payload", value: "66.8 Metric Tons" },
      { label: "Gross Rail Load (GRL)", value: "89.2 Metric Tons" },
      { label: "Axle Load Limit", value: "22.32 Tonnes (25T Heavy Freight Ready)" },
      { label: "Saddle Architecture", value: "Integrated V-Groove Cradles with Polyurethane Pads" },
      { label: "Bogie Profile", value: "Cast Steel CASNUB 22NGB with Cartridge Bearings" },
      { label: "Underframe Construction", value: "High-Yield Structural Steel (SAILMA 350HI / E450)" },
      { label: "Manufacturing Base", value: "Shivlakha Works (Target Q4 FY 2026-27)" },
    ],
  },
];

export function WagonCatalog() {
  const [selectedWagon, setSelectedWagon] = useState<WagonModel | null>(null);

  return (
    <div className="space-y-8">
      {/* RDSO Stage-I Concept Approval & Shivlakha Expansion Banner */}
      <div className="rounded-xl border border-emerald-300 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="rounded-lg bg-emerald-600 p-2.5 text-white shrink-0 mt-0.5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded border border-emerald-300">
                  RDSO Stage-I Concept Design Approval Secured · 26 October 2026
                </span>
                <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Target Capacity: ~2,400 Wagons/Annum
                </span>
              </div>
              <h3 className="mt-1.5 font-display text-lg sm:text-xl font-bold text-[#101820]">
                Specialized Freight Wagons for ISO, Domestic &amp; Dwarf Containers
              </h3>
              <p className="mt-1 text-sm text-[#44505e] leading-relaxed">
                Kalyani Cast Tech Limited achieved formal Stage-I Concept Design Approval from RDSO (Ministry of Railways) in October 2026. Rolling-stock manufacturing is being established at the Shivlakha engineering complex, directly integrated with the Gati Shakti Terminal rail sidings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Model Visual Capability Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WAGON_MODELS.map((wagon) => (
          <div
            key={wagon.id}
            data-testid={`wagon-card-${wagon.id}`}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-lg"
          >
            <div>
              {/* Visual Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f1f4f8]">
                <img
                  src={wagon.primaryImage}
                  alt={wagon.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-white backdrop-blur-sm">
                  {wagon.typeDesignation}
                </div>
                <div className="absolute bottom-2.5 right-2.5 rounded bg-black/75 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
                  {wagon.category}
                </div>
              </div>

              {/* Engineering Header Bar */}
              <div className="flex items-center justify-between border-t border-[#d9dfe6] bg-[#0a1f3d] px-3.5 py-2 text-xs font-mono font-medium text-white/90">
                <span className="font-bold text-amber-400">{wagon.axleLoad}</span>
                <span className="text-white/80">{wagon.grossRailLoad} GRL</span>
              </div>

              {/* Content Block */}
              <div className="p-5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#101820] group-hover:text-[#1b4b96] leading-snug">
                  {wagon.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#44505e]">
                  {wagon.description}
                </p>

                {/* Key Bullet Callouts */}
                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-[#44505e]">
                  {wagon.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="p-5 pt-0">
              <Button
                type="button"
                data-testid={`open-spec-${wagon.id}`}
                onClick={() => setSelectedWagon(wagon)}
                className="w-full h-9 rounded-md bg-[#1b4b96] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#143a75] transition-colors"
              >
                Inspect Engineering Specs &rarr;
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Wagon Comparison Table */}
      <div className="overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm">
        <div className="border-b border-[#d9dfe6] bg-[#f8fafc] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-bold text-[#101820]">
              Railway Wagon Engineering Specification Matrix
            </h3>
            <p className="font-mono text-xs text-[#1b4b96]">
              RDSO Compliance &middot; Axle Loads &middot; Coupler &middot; Shivlakha Target Q4 FY 2026-27
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 font-mono text-[11px] font-bold text-amber-900 border border-amber-300">
            <Clock className="h-3.5 w-3.5 text-amber-600" />
            Rolling Stock Expansion Pipeline
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#d9dfe6] bg-[#0e2a55] font-mono text-[11px] uppercase tracking-wider text-white">
              <tr>
                <th className="py-3 px-4">Wagon Classification</th>
                <th className="py-3 px-4">Payload Capacity</th>
                <th className="py-3 px-4">Gross Rail Load (GRL)</th>
                <th className="py-3 px-4">Axle Load</th>
                <th className="py-3 px-4">Deck Height (ARL)</th>
                <th className="py-3 px-4">Bogie &amp; Brakes</th>
                <th className="py-3 px-4">Manufacturing Line</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {WAGON_MODELS.map((w) => (
                <tr key={w.id} className="hover:bg-[#f1f4f8] transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#101820]">
                    <span className="block font-bold">{w.name}</span>
                    <span className="font-mono text-[11px] text-[#1b4b96]">{w.typeDesignation}</span>
                  </td>
                  <td className="py-3 px-4 font-mono font-medium text-[#44505e]">{w.payload}</td>
                  <td className="py-3 px-4 font-mono font-bold text-[#101820]">{w.grossRailLoad}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-emerald-700">{w.axleLoad}</td>
                  <td className="py-3 px-4 font-mono text-[#44505e]">{w.deckHeight}</td>
                  <td className="py-3 px-4 text-[#44505e]">
                    <span className="block font-medium">{w.bogie.split(" with ")[0]}</span>
                    <span className="text-[11px] text-muted-foreground">{w.brakes.split(" with ")[0]}</span>
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">
                    <span className="inline-flex items-center gap-1 text-amber-800 font-semibold">
                      <Clock className="h-3 w-3 text-amber-600" />
                      Q4 FY 2026-27
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedWagon(w)}
                      className="font-mono text-xs font-bold text-[#1b4b96] hover:underline"
                    >
                      View Specs &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Slide-Over Specification Drawer */}
      <Sheet open={!!selectedWagon} onOpenChange={(open) => !open && setSelectedWagon(null)}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto p-6 lg:p-8">
          {selectedWagon && (
            <div className="space-y-6">
              <SheetHeader className="border-b border-[#d9dfe6] pb-5">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#1b4b96] px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                    {selectedWagon.typeDesignation}
                  </span>
                  <span className="rounded bg-[#f1f4f8] px-2.5 py-0.5 text-xs font-semibold text-[#44505e]">
                    {selectedWagon.category}
                  </span>
                </div>
                <SheetTitle className="mt-3 font-display text-2xl font-bold text-[#101820]">
                  {selectedWagon.name}
                </SheetTitle>
                <SheetDescription className="font-mono text-xs text-[#1b4b96]">
                  {selectedWagon.headline}
                </SheetDescription>
              </SheetHeader>

              {/* Wagon Visual Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#d9dfe6] bg-[#f1f4f8]">
                <img
                  src={selectedWagon.primaryImage}
                  alt={selectedWagon.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Technical Blueprint / Infographic if available */}
              {selectedWagon.technicalDiagram && (
                <div className="rounded-lg border border-[#b8c9e5] bg-[#ebf3fe]/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Technical Blueprint &amp; Aerodynamic Layout
                    </span>
                    <span className="rounded bg-[#1b4b96] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                      Rolling Stock Engineering
                    </span>
                  </div>
                  <div className="overflow-hidden rounded border border-[#d9dfe6] bg-white p-2">
                    <img
                      src={selectedWagon.technicalDiagram}
                      alt={`${selectedWagon.name} layout diagram`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Operational & Engineering Description */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                  Operational &amp; Structural Architecture
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#44505e]">
                  {selectedWagon.description}
                </p>
              </div>

              {/* Complete Specifications Grid */}
              <div className="rounded-lg border border-[#d9dfe6] bg-[#f8fafc] p-4 text-xs">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1b4b96] mb-3">
                  Technical Specifications &middot; RDSO &amp; DFC Alignment
                </p>
                <div className="space-y-2.5">
                  {selectedWagon.keySpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between gap-1 border-b border-[#e2e8f0] pb-2 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline"
                    >
                      <span className="font-medium text-[#44505e]">{spec.label}:</span>
                      <span className="font-mono font-bold text-[#101820] text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shivlakha Integration Status */}
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-950">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Clock className="h-4 w-4 text-amber-700" />
                  <span>Manufacturing Facility Status:</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-amber-900">
                  Wagon fabrication and assembly is scheduled for commissioning at our 220 m × 45 m
                  heavy manufacturing shed and 5-acre wagon maintenance bay at Shivlakha (Target Q4 FY 2026-27),
                  integrated directly with the Gati Shakti Terminal sidings.
                </p>
              </div>

              {/* Enquiry Button */}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full h-11 bg-[#1b4b96] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#143a75]"
                >
                  <SiteLink
                    to={`/contact?subject=${encodeURIComponent(
                      `Rolling Stock Enquiry - ${selectedWagon.name}`
                    )}#enquiry-form`}
                  >
                    Enquire for Rolling Stock / Wagons &rarr;
                  </SiteLink>
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
