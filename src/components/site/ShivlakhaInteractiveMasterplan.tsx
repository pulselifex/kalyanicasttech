import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  Clock,
  Train,
  Truck,
  ArrowRight,
  ShieldCheck,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ZoneReadiness = "operational" | "development" | "planned";

export interface MasterplanZone {
  id: string;
  num: string;
  name: string;
  filterCategory: "operational" | "development" | "infrastructure";
  statusBadge: string;
  readiness: ZoneReadiness;
  dimBadge: string;
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
  hotspot: { x: number; y: number }; // Percentage (0-100) or SVG viewBox 1086x1448 coordinates
  groundPhoto?: {
    src: string;
    caption: string;
    alt: string;
  };
  actionUrl?: string;
  actionText?: string;
}

export const MASTERPLAN_ZONES: MasterplanZone[] = [
  {
    id: "zone-01",
    num: "01",
    name: "North Platform: 720 m (L) × 30 m (W)",
    filterCategory: "operational",
    statusBadge: "Operational · Gati Shakti Terminal",
    readiness: "operational",
    dimBadge: "720 m (L) × 30 m (W)",
    headline: "Heavy-Duty Paved Rail Wharf for Full-Rake Staging",
    description:
      "Northern reinforced concrete platform running 720 meters parallel to the railway sidings. Designed for full-length 45-wagon BLC train rakes with heavy reach stacker floor loading and continuous container handling.",
    specs: [
      { label: "Platform Dimensions", value: "720 m (L) × 30 m (W)" },
      { label: "Rake Capacity", value: "Full 45-Wagon Train Rake" },
      { label: "Pavement Rating", value: "Heavy-Duty Reinforced Concrete Wharf" },
      { label: "Terminal Status", value: "Operational Gati Shakti Terminal" },
    ],
    hotspot: { x: 164, y: 245 },
    groundPhoto: {
      src: "/assets/shivlakha/Shivlakha GCT Rail Terminal.png",
      caption: "Operational 720m Gati Shakti Terminal concrete platform and rail siding at Shivlakha Hub",
      alt: "North Platform 720m at Shivlakha",
    },
  },
  {
    id: "zone-02",
    num: "02",
    name: "South Platform: 720 m (L) × 20 m (W)",
    filterCategory: "operational",
    statusBadge: "Operational · Gati Shakti Terminal",
    readiness: "operational",
    dimBadge: "720 m (L) × 20 m (W)",
    headline: "Simultaneous Rake Loading & Cross-Docking Terminal",
    description:
      "Southern platform dedicated to simultaneous train rake handling, cross-dock transshipment, and direct vehicle-to-rail loading interfacing with the internal 10.0m arterial road network.",
    specs: [
      { label: "Platform Dimensions", value: "720 m (L) × 20 m (W)" },
      { label: "Operating Profile", value: "Simultaneous Dual-Rake Dispatch" },
      { label: "Road Interface", value: "Direct Interface to 10.0m Road Spine" },
      { label: "Handling Equipment", value: "Reach Stackers, Heavy Forklifts & Cranes" },
    ],
    hotspot: { x: 319, y: 245 },
    groundPhoto: {
      src: "/assets/shivlakha/Shivlakha GCT Rail Terminal1.png",
      caption: "Gati Shakti Terminal rail platform and track assembly at Shivlakha Hub",
      alt: "South Platform Gati Shakti Terminal",
    },
  },
  {
    id: "zone-03",
    num: "03",
    name: "Two Rail Lines Between Platforms",
    filterCategory: "operational",
    statusBadge: "Operational · Gati Shakti Terminal",
    readiness: "operational",
    dimBadge: "Dual Broad-Gauge Internal Tracks",
    headline: "Private Broad-Gauge Railway Siding with Direct Line Interlocking",
    description:
      "Two internal broad-gauge tracks situated between North and South platforms, providing seamless placement, shunting, and concurrent dispatch of container and bulk wagon rakes.",
    specs: [
      { label: "Track Configuration", value: "Dual Broad-Gauge Private Sidings" },
      { label: "Train Placement", value: "Parallel Rake Staging & Shunting" },
      { label: "Turnout Connectivity", value: "Direct Turnout to Mundra–Kandla Line" },
      { label: "Wagon Compatibility", value: "BLC Flat Wagons, BOXN & Open Wagons" },
    ],
    hotspot: { x: 239, y: 290 },
    groundPhoto: {
      src: "/assets/shivlakha/Ktech Rail Siding Siding n Plant access via rail.jpg",
      caption: "Dual private rail siding running through the terminal platforms",
      alt: "Dual Rail Siding at Shivlakha",
    },
  },
  {
    id: "zone-04",
    num: "04",
    name: "Wagon Maintenance Facility Shed: 5 Acres",
    filterCategory: "development",
    statusBadge: "Under Development · Target Q4 FY 2026-27",
    readiness: "development",
    dimBadge: "5 Acres Covered Rolling-Stock Facility",
    headline: "Heavy Rolling-Stock Inspection, Bogie Overhaul & Testing",
    description:
      "Dedicated 5-acre rolling-stock maintenance shed equipped for periodic overhaul, bogie repair, wheel profiling, brake rigging calibration, and statutory railway fitness certification.",
    specs: [
      { label: "Site Footprint", value: "5 Acres Dedicated Facility" },
      { label: "Target Readiness", value: "Q4 FY 2026-27" },
      { label: "Maintenance Scope", value: "BLC Wagons, Special Cargo Wagons & Bogies" },
      { label: "Testing Equipment", value: "Underfloor Jacks, Wheel Gauging & NDT Rigs" },
    ],
    hotspot: { x: 35, y: 305 },
    groundPhoto: {
      src: "/assets/shivlakha/Special Wagon Design3.png",
      caption: "Railway wagon fabrication and maintenance engineering drawings",
      alt: "Wagon Maintenance Shed",
    },
  },
  {
    id: "zone-05",
    num: "05",
    name: "Proposed Inland Container Terminal: 30 Acres",
    filterCategory: "development",
    statusBadge: "Under Development · Target Q1 FY 2027-28",
    readiness: "development",
    dimBadge: "30 Acres Paved Container Yard · Target April 2027",
    headline: "Customs-Bonded Inland Container Terminal & Container Freight Station",
    description:
      "30-acre Inland Container Terminal. CBIC approval received on 10 September 2026. The Inland Container Terminal is under development. Target Operational Date: April 2027 / Q1 FY 2027-28.",
    specs: [
      { label: "Total Yard Area", value: "30 Acres Paved Surface" },
      { label: "Target Operational Date", value: "April 2027 / Q1 FY 2027-28" },
      { label: "Statutory Approval", value: "CBIC approval received on 10 September 2026 (Under development)" },
      { label: "Customs Facilities", value: "Bonded Warehouse & EDI Clearance Desk" },
    ],
    hotspot: { x: 514, y: 275 },
    groundPhoto: {
      src: "/assets/shivlakha/Shivlakha GCT Rail Terminal2.png",
      caption: "Container staging and terminal development area",
      alt: "Proposed Inland Container Terminal",
    },
  },
  {
    id: "zone-06",
    num: "06",
    name: "Container Factory & Phased Expansion: 60 Acres",
    filterCategory: "operational",
    statusBadge: "Container Manufacturing: Operational · Phased Master Plan Expansion",
    readiness: "operational",
    dimBadge: "60-Acre Master Plan Envelope · Container Manufacturing Operational + Phased Capacity Expansion",
    headline: "Large-Scale Freight Container Manufacturing & Assembly Plant",
    description:
      "60-acre master plan envelope with active container fabrication line (220 m × 45 m workshop) operating alongside Rewari Works. Provides zoned capacity expansion for standard ISO dry boxes, dwarf containers, heavy coiltainers, and bulk hoppers.",
    specs: [
      { label: "Master Plan Envelope", value: "60 Acres Total Allocated Footprint" },
      { label: "Current Status", value: "Active Container Production (Operational)" },
      { label: "Fabrication Shed", value: "220 m × 45 m Workshop" },
      { label: "Product Portfolio", value: "Standard ISO, Dwarf, Coiltainer & Tank Boxes" },
    ],
    hotspot: { x: 494, y: 635 },
    groundPhoto: {
      src: "/assets/shivlakha/terminal-shivlakha-panoramic-aerial-01.jpg",
      caption: "Heavy structural fabrication hall and container production lines",
      alt: "Container Factory 60 Acres",
    },
  },
  {
    id: "zone-07",
    num: "07",
    name: "Proposed Steel Foundry: 12 Acres",
    filterCategory: "infrastructure",
    statusBadge: "Master Plan Infrastructure / Proposed Phase",
    readiness: "planned",
    dimBadge: "12 Acres Proposed Foundry Parcel",
    headline: "Backward-Integrated Ferrous Foundry Expansion Plot",
    description:
      "Allocated 12-acre parcel earmarked for future backward integration into heavy steel and railway rolling-stock castings. Ferrous castings and container corner fittings are currently supplied from our operational IS 12117 Class A Ferrous Foundry at Rewari Works, Haryana.",
    specs: [
      { label: "Site Footprint", value: "12 Acres Proposed Parcel" },
      { label: "Planned Function", value: "Heavy Steel & Railway Grade Castings" },
      { label: "Active Foundry Base", value: "Rewari Works, Haryana (Operational Class A)" },
      { label: "Statutory Approval", value: "IS 12117:1996 Class A / Lloyd's Register" },
    ],
    hotspot: { x: 40, y: 840 },
    groundPhoto: {
      src: "/assets/manufacturing/factory-rewari-facade-01.png",
      caption: "Operational Class A Ferrous Foundry at Rewari Works, Haryana",
      alt: "Rewari Foundry Base",
    },
    actionUrl: "/manufacturing",
    actionText: "View Operational Rewari Foundry Facilities →",
  },
  {
    id: "zone-08",
    num: "08",
    name: "Residential Complex: 3 Acres",
    filterCategory: "infrastructure",
    statusBadge: "Master Plan Infrastructure / Proposed Phase",
    readiness: "planned",
    dimBadge: "3 Acres Staff & Executive Housing",
    headline: "On-Site Staff Colony & Operations Administration Housing",
    description:
      "3-acre on-site residential and administrative staff colony providing 24/7 technical, managerial, and railway liaison coverage for round-the-clock terminal and manufacturing operations.",
    specs: [
      { label: "Footprint", value: "3 Acres On-Site Housing Colony" },
      { label: "Accommodations", value: "Executive Suites, Staff Quarters & Guest House" },
      { label: "Support Amenities", value: "Admin Center, Dining Hall & Health Post" },
      { label: "Operational Role", value: "Continuous 24/7 Dispatch & Yard Security" },
    ],
    hotspot: { x: 239, y: 715 },
    groundPhoto: {
      src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
      caption: "On-site operations and administration facilities at Shivlakha",
      alt: "Admin & Residential Complex",
    },
  },
  {
    id: "zone-09",
    num: "09",
    name: "GETCO Substation (Distribution Area): 220 MW",
    filterCategory: "infrastructure",
    statusBadge: "Master Plan Infrastructure / Proposed Phase",
    readiness: "planned",
    dimBadge: "220 MW GETCO Power Supply Area",
    headline: "High-Voltage Dedicated Electrical Distribution Substation",
    description:
      "Dedicated Gujarat Energy Transmission Corporation (GETCO) high-voltage distribution substation ensuring uninterruptible industrial power supply for welding bays, overhead cranes, and electrified rail yard operations.",
    specs: [
      { label: "Capacity Rating", value: "220 MW Power Distribution Substation" },
      { label: "Utility Partner", value: "Gujarat Energy Transmission Corp (GETCO)" },
      { label: "Grid Integration", value: "Dedicated High-Tension Industrial Feeder" },
      { label: "Redundancy Role", value: "Heavy Industrial Loads & Electric Rail Yard" },
    ],
    hotspot: { x: 224, y: 840 },
    groundPhoto: {
      src: "/assets/shivlakha/IMG20260922112714.jpg",
      caption: "High-voltage transmission infrastructure corridor adjacent to site",
      alt: "GETCO Substation Area",
    },
  },
  {
    id: "zone-10",
    num: "10",
    name: "Weigh Bridge: 100 Ton",
    filterCategory: "infrastructure",
    statusBadge: "Master Plan Infrastructure / Proposed Phase",
    readiness: "planned",
    dimBadge: "100 Ton Electronic Pitless Weighbridge",
    headline: "Automated RFID Gross/Tare Logistics Weighing Scale",
    description:
      "100-ton capacity computerized weighbridge integrated with automated logistics dispatch system, RFID container identification, and axle weight compliance sensors for heavy multi-axle freight vehicles.",
    specs: [
      { label: "Rated Capacity", value: "100 Metric Tons (100,000 kg)" },
      { label: "Platform Type", value: "Heavy-Duty Electronic Pitless Weighbridge" },
      { label: "Road Interface", value: "10.0m Wide Main Ingress/Egress Spine" },
      { label: "Automation", value: "RFID Gate & Automated Rake Manifest Sync" },
    ],
    hotspot: { x: 229, y: 585 },
    groundPhoto: {
      src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
      caption: "Shivlakha ingress road and vehicle control gateway",
      alt: "Weighbridge Ingress",
    },
  },
  {
    id: "zone-11",
    num: "11",
    name: "Manufacturing Unit Shed: 220 m × 45 m",
    filterCategory: "operational",
    statusBadge: "Container Manufacturing: Operational · Phased Master Plan Expansion",
    readiness: "operational",
    dimBadge: "220 m × 45 m Covered Fabrication Hall (9,900 m²)",
    headline: "Covered Container Structural Assembly & Welding Workshop",
    description:
      "Central 220 m × 45 m heavy manufacturing shed under covered roof. Active container fabrication bay equipped with automated panel welding, certified MIG welding stations, precision boxing jigs, and overhead EOT cranes.",
    specs: [
      { label: "Shed Dimensions", value: "220 m (L) × 45 m (W) × 12.5 m (H)" },
      { label: "Covered Floor Area", value: "9,900 sq.m (1,06,500 sq.ft)" },
      { label: "Welding Lines", value: "Automated Panel Seam & Certified MIG Welding" },
      { label: "Cranage", value: "Multiple Overhead EOT Gantry Cranes" },
    ],
    hotspot: { x: 109, y: 420 },
    groundPhoto: {
      src: "/assets/manufacturing/Container Welding Process after Boxing.jpg",
      caption: "Automated panel welding and certified MIG welding bay inside the fabrication shed",
      alt: "Manufacturing Unit Shed 220x45m",
    },
  },
  {
    id: "zone-12",
    num: "12",
    name: "Future Development Area: 5 Acre Plot",
    filterCategory: "infrastructure",
    statusBadge: "Master Plan Infrastructure / Proposed Phase",
    readiness: "planned",
    dimBadge: "5 Acre Plot for Multimodal Expansion",
    headline: "Multimodal Logistics Expansion & Auxiliary Rail Yard Plot",
    description:
      "Strategically positioned 5-acre expansion parcel situated between the main railway line and the terminal platforms, reserved for auxiliary rail sidings, temperature-controlled logistics, or bulk staging.",
    specs: [
      { label: "Parcel Size", value: "5 Acres Flat Terrain" },
      { label: "Rail Connectivity", value: "Direct Lateral Access to Chitrod Trunk Line" },
      { label: "Zoning", value: "Industrial Multi-Modal Logistics (Gati Shakti Terminal Catchment)" },
      { label: "Development Status", value: "Reserved for Custom Logistics Infrastructure" },
    ],
    hotspot: { x: 214, y: 110 },
    groundPhoto: {
      src: "/assets/shivlakha/Ktech GCT2.jpg",
      caption: "Terminal open storage and future multimodal development area",
      alt: "Future Development Plot",
    },
  },
  {
    id: "corridor-a",
    num: "RAIL",
    name: "Mundra–Kandla Railway Line · Up Main Line",
    filterCategory: "operational",
    statusBadge: "Operational · Indian Railways Connectivity",
    readiness: "operational",
    dimBadge: "Chitrod Junction – 7.33 km · Broad Gauge",
    headline: "Direct Electrified Broad-Gauge Rail Connectivity",
    description:
      "Direct junction turnout connecting Shivlakha private siding with the Western Railway Mundra–Kandla–Palanpur trunk route. Electrified heavy-haul corridor built for double-stack freight container trains.",
    specs: [
      { label: "Rail Mainline Junction", value: "7.33 km from Chitrod Junction on the Mundra–Kandla–Palanpur Broad-Gauge Rail Corridor" },
      { label: "Deendayal (Kandla) Port", value: "Approx. 68 km by road/rail corridor" },
      { label: "Mundra Port", value: "Approx. 132 km by road/rail corridor" },
      { label: "Axle Load Clearance", value: "25T Axle Load / Double Stack Clearance" },
    ],
    hotspot: { x: 49, y: 130 },
    groundPhoto: {
      src: "/assets/rail/Double-Stacked Freight at Sunset.jpeg",
      caption: "Double-stacked freight train on the Mundra–Kandla rail corridor",
      alt: "Mundra Kandla rail corridor",
    },
  },
  {
    id: "corridor-b",
    num: "ROAD",
    name: "National Highway 27 (Kandla–Delhi) & 10.0m Internal Road Network",
    filterCategory: "operational",
    statusBadge: "Operational · Multi-Lane Highway Access",
    readiness: "operational",
    dimBadge: "10.0 m Reinforced Internal Circulation Spine",
    headline: "Direct National Highway 27 & 10.0m Reinforced Internal Road Network",
    description:
      "Direct access to National Highway 27 (Kandla–Delhi corridor) via 10.0 m wide internal industrial road engineered for heavy multi-axle trailers and container trucks.",
    specs: [
      { label: "Highway Access", value: "Direct access to National Highway 27 (Kandla–Delhi corridor) via 10.0 m wide internal industrial road" },
      { label: "Deendayal (Kandla) Port", value: "Approx. 68 km by road/rail corridor" },
      { label: "Mundra Port", value: "Approx. 132 km by road/rail corridor" },
      { label: "Pavement Rating", value: "IRC Class 70R Multi-Axle Vehicle Ready" },
    ],
    hotspot: { x: 554, y: 880 },
    groundPhoto: {
      src: "/assets/shivlakha/terminal-shivlakha-admin-office-01.png",
      caption: "Internal 10m logistics road and administration complex",
      alt: "Internal Road Network",
    },
  },
];

const TOUR_SEQUENCE = ["zone-01", "zone-11", "zone-05", "zone-06", "zone-04", "corridor-a", "corridor-b"];

export function ShivlakhaInteractiveMasterplan() {
  const [selectedId, setSelectedId] = useState<string>("zone-01");
  const [filter, setFilter] = useState<"all" | "operational" | "development" | "infrastructure">("all");
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [tourProgress, setTourProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const canvasRef = useRef<HTMLDivElement>(null);
  const tourTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedZone = MASTERPLAN_ZONES.find((z) => z.id === selectedId) || MASTERPLAN_ZONES[0];

  // Filtered zones list
  const filteredZones = MASTERPLAN_ZONES.filter((z) => {
    if (filter === "all") return true;
    return z.filterCategory === filter;
  });

  // Handle tour progress and stepping
  const stepTour = useCallback(() => {
    setTourIndex((prev) => {
      const nextIdx = (prev + 1) % TOUR_SEQUENCE.length;
      setSelectedId(TOUR_SEQUENCE[nextIdx]);
      return nextIdx;
    });
    setTourProgress(0);
  }, []);

  useEffect(() => {
    if (!isPlayingTour) {
      if (tourTimerRef.current) clearInterval(tourTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      setTourProgress(0);
      return;
    }

    const stepIntervalMs = 4500;
    const progressIntervalMs = 50;
    const progressIncrement = (progressIntervalMs / stepIntervalMs) * 100;

    progressTimerRef.current = setInterval(() => {
      setTourProgress((p) => Math.min(100, p + progressIncrement));
    }, progressIntervalMs);

    tourTimerRef.current = setInterval(() => {
      stepTour();
    }, stepIntervalMs);

    return () => {
      if (tourTimerRef.current) clearInterval(tourTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlayingTour, stepTour]);

  function stopTour() {
    if (isPlayingTour) {
      setIsPlayingTour(false);
    }
  }

  function handleZoneSelect(id: string) {
    stopTour();
    setSelectedId(id);
  }

  return (
    <div
      id="masterplan-explorer"
      className="scroll-mt-28 rounded-2xl border border-[#b8c9e5] bg-white shadow-lg overflow-hidden"
    >
      {/* ============================================================ */}
      {/* 1. Header Toolbar & Mode Controls                            */}
      {/* ============================================================ */}
      <div className="border-b border-[#d9dfe6] bg-[#0e2a55] px-5 py-4 text-white sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-300">
                Interactive Isometric Master Plan &middot; Khasra No. 438, Shivlakha
              </p>
            </div>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Shivlakha Master Plan Explorer
            </h2>
          </div>

          {/* Interactive Guided Tour & Canvas Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              size="sm"
              onClick={() => {
                if (isPlayingTour) {
                  setIsPlayingTour(false);
                } else {
                  setSelectedId(TOUR_SEQUENCE[0]);
                  setTourIndex(0);
                  setIsPlayingTour(true);
                }
              }}
              className={cn(
                "h-9 rounded-md px-4 text-xs font-bold uppercase tracking-wider transition-all",
                isPlayingTour
                  ? "bg-amber-400 text-[#0e2a55] hover:bg-amber-300"
                  : "bg-emerald-500 text-white hover:bg-emerald-600",
              )}
            >
              {isPlayingTour ? (
                <>
                  <Pause className="mr-1.5 h-3.5 w-3.5" /> Pause Tour
                </>
              ) : (
                <>
                  <Play className="mr-1.5 h-3.5 w-3.5" /> Play Guided Tour (45s)
                </>
              )}
            </Button>

            <div className="flex items-center rounded-md border border-white/20 bg-white/10 p-0.5 text-xs">
              <button
                type="button"
                title="Zoom In"
                aria-label="Zoom In"
                onClick={() => setZoomLevel((z) => Math.min(1.8, +(z + 0.2).toFixed(1)))}
                className="p-1.5 hover:text-amber-300"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                title="Zoom Out"
                aria-label="Zoom Out"
                onClick={() => setZoomLevel((z) => Math.max(0.8, +(z - 0.2).toFixed(1)))}
                className="p-1.5 hover:text-amber-300"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                type="button"
                title="Reset View"
                aria-label="Reset View"
                onClick={() => setZoomLevel(1)}
                className="p-1.5 hover:text-amber-300"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tour Progress Bar */}
        {isPlayingTour && (
          <div className="mt-3 overflow-hidden rounded-full bg-white/20 h-1.5">
            <div
              className="h-full bg-amber-400 transition-all duration-75 ease-linear"
              style={{ width: `${tourProgress}%` }}
            />
          </div>
        )}

        {/* Filter Pills */}
        <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-white/15">
          <button
            type="button"
            data-testid="filter-all"
            onClick={() => {
              setFilter("all");
              stopTour();
            }}
            className={cn(
              "rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
              filter === "all"
                ? "bg-white text-[#0e2a55] shadow"
                : "bg-white/10 text-white/80 hover:bg-white/20",
            )}
          >
            All 12 Zones &amp; Corridors (14)
          </button>
          <button
            type="button"
            data-testid="filter-operational"
            onClick={() => {
              setFilter("operational");
              stopTour();
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
              filter === "operational"
                ? "bg-emerald-500 text-white shadow"
                : "bg-white/10 text-emerald-300 hover:bg-white/20",
            )}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            🟢 Operational Today (Container Mfg &amp; Gati Shakti Terminal)
          </button>
          <button
            type="button"
            data-testid="filter-development"
            onClick={() => {
              setFilter("development");
              stopTour();
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
              filter === "development"
                ? "bg-amber-500 text-white shadow"
                : "bg-white/10 text-amber-300 hover:bg-white/20",
            )}
          >
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            🟡 Under Development (Wagon Mfg &amp; Inland Container Terminal)
          </button>
          <button
            type="button"
            data-testid="filter-infrastructure"
            onClick={() => {
              setFilter("infrastructure");
              stopTour();
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all",
              filter === "infrastructure"
                ? "bg-slate-300 text-slate-900 shadow"
                : "bg-white/10 text-slate-300 hover:bg-white/20",
            )}
          >
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            🔵 Master Plan &amp; Utility Infrastructure
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Main Split-Screen Architecture (7 Cols Map + 5 Cols Spec) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f8fafc]">
        {/* Left Viewport: Interactive Isometric Canvas */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#d9dfe6] bg-slate-900 p-3 sm:p-6 flex flex-col justify-between overflow-hidden">
          <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
            <div
              ref={canvasRef}
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center center",
              }}
              className="relative aspect-[800/1448] w-full select-none transition-transform duration-200"
            >
              {/* High-Resolution Isometric Master Plan Image (Cropped 3D Terrain) */}
              <img
                src="/assets/shivlakha/shivlakha-isometric-masterplan.jpg"
                alt="Shivlakha Rail &amp; Logistics Platform Key Plan Isometric View"
                className="h-full w-full object-contain pointer-events-none"
                loading="eager"
              />

              {/* Interactive SVG Overlay with Precise Coordinate Hotspots */}
              <svg
                viewBox="0 0 800 1448"
                className="absolute inset-0 h-full w-full pointer-events-auto"
                aria-label="Shivlakha Masterplan Hotspot Overlay"
              >
                <defs>
                  {/* Subtle pulsing glow filters */}
                  <filter id="glow-selected" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Baked-In Label Callout Masks (Covering legacy labels on JPEG with 720m and 60-Acre badges) */}
                <g className="canvas-callout-masks pointer-events-none">
                  {/* Mask 1: North Platform 720 m × 30 m */}
                  <rect x="65" y="190" width="180" height="36" rx="5" fill="#0f172a" fillOpacity="0.97" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="155" y="206" textAnchor="middle" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">North Platform: 720 m × 30 m</text>
                  <text x="155" y="219" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">🟢 Operational Gati Shakti Rail Wharf</text>

                  {/* Mask 2: South Platform 720 m × 20 m */}
                  <rect x="235" y="190" width="180" height="36" rx="5" fill="#0f172a" fillOpacity="0.97" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="325" y="206" textAnchor="middle" fill="#38bdf8" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">South Platform: 720 m × 20 m</text>
                  <text x="325" y="219" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">🟢 Operational Transshipment</text>

                  {/* Mask 3: Inland Container Terminal: 30 Acres · Target April 2027 */}
                  <rect x="415" y="216" width="230" height="42" rx="5" fill="#0f172a" fillOpacity="0.97" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="530" y="233" textAnchor="middle" fill="#fde68a" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Inland Container Terminal: 30 Acres</text>
                  <text x="530" y="248" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">🟡 Target April 2027 · CBIC Approval 10 Sept 2026</text>

                  {/* Mask 4: Container Factory & Phased Expansion: 60 Acres (Covering old 1 LAC text) */}
                  <rect x="340" y="570" width="320" height="46" rx="5" fill="#0f172a" fillOpacity="0.97" stroke="#10b981" strokeWidth="1.5" />
                  <text x="500" y="589" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Container Factory &amp; Phased Expansion: 60 Acres</text>
                  <text x="500" y="605" textAnchor="middle" fill="#a7f3d0" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">🟢 Operational · 220 m × 45 m Fabrication Workshop</text>
                </g>

                {/* Animated Rail Corridor Line (Corridor A) */}
                <path
                  data-testid="hotspot-corridor-rail"
                  d="M 0 240 L 74 170 L 194 50 L 244 25"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="5"
                  strokeDasharray="8 6"
                  tabIndex={0}
                  role="button"
                  aria-label="Corridor A: Mundra–Kandla Railway Line"
                  className={cn(
                    "cursor-pointer transition-all",
                    selectedId === "corridor-a" ? "opacity-100 stroke-[7]" : "opacity-70 hover:opacity-100",
                  )}
                  onClick={() => handleZoneSelect("corridor-a")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleZoneSelect("corridor-a");
                    }
                  }}
                />

                {/* Animated Highway Corridor Line (Corridor B) */}
                <path
                  data-testid="hotspot-corridor-highway"
                  d="M 354 1000 L 494 840 L 654 680 L 764 540"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="6"
                  strokeDasharray="10 6"
                  tabIndex={0}
                  role="button"
                  aria-label="Corridor B: National Highway & Internal Road Network"
                  className={cn(
                    "cursor-pointer transition-all",
                    selectedId === "corridor-b" ? "opacity-100 stroke-[8]" : "opacity-70 hover:opacity-100",
                  )}
                  onClick={() => handleZoneSelect("corridor-b")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleZoneSelect("corridor-b");
                    }
                  }}
                />

                {/* Hotspot Markers for each Zone */}
                {MASTERPLAN_ZONES.map((zone) => {
                  const isSelected = selectedId === zone.id;
                  const isVisible =
                    filter === "all" || zone.filterCategory === filter;

                  const color =
                    zone.readiness === "operational"
                      ? "#10b981" // Emerald Green
                      : zone.readiness === "development"
                        ? "#f59e0b" // Amber
                        : "#94a3b8"; // Slate

                  return (
                    <g
                      key={zone.id}
                      data-testid={`hotspot-zone-${zone.num}`}
                      transform={`translate(${zone.hotspot.x}, ${zone.hotspot.y})`}
                      className="cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`${zone.name} - ${zone.statusBadge}`}
                      opacity={isVisible ? "1" : "0.2"}
                      style={{ pointerEvents: isVisible ? "auto" : "none" }}
                      onClick={() => handleZoneSelect(zone.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleZoneSelect(zone.id);
                        }
                      }}
                    >
                      {/* Pulsing ring around selected hotspot */}
                      {isSelected && (
                        <circle
                          r="32"
                          fill="none"
                          stroke={color}
                          strokeWidth="3"
                          opacity="0.8"
                          className="animate-ping origin-center"
                        />
                      )}

                      {/* Outer target halo */}
                      <circle
                        r={isSelected ? "24" : "19"}
                        fill={color}
                        fillOpacity={isSelected ? "0.95" : "0.85"}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        filter={isSelected ? "url(#glow-selected)" : undefined}
                        className="transition-all duration-200 group-hover:scale-125 origin-center"
                      />

                      {/* Number Label */}
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="#ffffff"
                        fontSize={zone.num.length > 2 ? "10" : "12"}
                        fontWeight="800"
                        fontFamily="ui-monospace, monospace"
                      >
                        {zone.num}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Quick-Jump Numbered Badge Grid (01–12, RAIL, ROAD) */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
              <span>Quick-Jump Zone Inspector:</span>
              <span className="text-slate-300">Click any badge to focus</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {MASTERPLAN_ZONES.map((z) => {
                const isSelected = selectedId === z.id;
                const isOp = z.readiness === "operational";
                const isDev = z.readiness === "development";

                return (
                  <button
                    key={z.id}
                    data-testid={`quick-jump-zone-${z.num}`}
                    type="button"
                    onClick={() => handleZoneSelect(z.id)}
                    className={cn(
                      "flex h-7 min-w-8 items-center justify-center rounded px-2 font-mono text-xs font-bold transition-all",
                      isSelected
                        ? "bg-white text-slate-900 ring-2 ring-amber-400 scale-105 shadow-md"
                        : isOp
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800 hover:bg-emerald-800 hover:text-white"
                          : isDev
                            ? "bg-amber-950/80 text-amber-300 border border-amber-800 hover:bg-amber-800 hover:text-white"
                            : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white",
                    )}
                  >
                    {z.num}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Viewport: Synchronized Engineering & Readiness Inspector */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Zone Tag & Number */}
            <div className="flex items-center justify-between gap-2 border-b border-[#d9dfe6] pb-4">
              <div className="inline-flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#0e2a55] font-mono text-xs font-bold text-white">
                  {selectedZone.num}
                </span>
                <span data-testid="inspector-spec-badge" className="font-mono text-xs font-semibold text-[#1b4b96]">
                  {selectedZone.dimBadge}
                </span>
              </div>

              {/* Status Badge */}
              <div
                data-testid="inspector-status-badge"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-bold",
                  selectedZone.readiness === "operational"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                    : selectedZone.readiness === "development"
                      ? "bg-amber-50 text-amber-900 border border-amber-300"
                      : "bg-slate-100 text-slate-700 border border-slate-300",
                )}
              >
                {selectedZone.readiness === "operational" ? (
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                ) : selectedZone.readiness === "development" ? (
                  <Clock className="h-3 w-3 text-amber-600" />
                ) : (
                  <Layers className="h-3 w-3 text-slate-500" />
                )}
                {selectedZone.statusBadge}
              </div>
            </div>

            {/* Zone Title & Headline */}
            <div className="mt-4">
              <h3 data-testid="inspector-title" className="font-display text-xl font-bold text-[#101820] sm:text-2xl leading-tight">
                {selectedZone.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-[#1b4b96]">
                {selectedZone.headline}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#44505e] sm:text-sm">
                {selectedZone.description}
              </p>
            </div>

            {/* Key Technical & Engineering Specs */}
            <div className="mt-5 rounded-lg border border-[#d9dfe6] bg-[#f8fafc] p-4 text-xs">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1b4b96] mb-2.5">
                Technical Specifications &middot; Master Plan Alignment
              </p>
              <div className="space-y-2">
                {selectedZone.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-1 border-b border-[#e2e8f0] pb-1.5 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline"
                  >
                    <span className="font-medium text-[#44505e]">{spec.label}:</span>
                    <span className="font-mono font-bold text-[#101820]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility Site Photograph Preview Card */}
            {selectedZone.groundPhoto && (
              <div className="mt-5 rounded-lg border border-[#b8c9e5] bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-[#1b4b96] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" /> Facility Site Photograph
                  </span>
                  <span className="text-[10px] text-[#44505e]">Operational Infrastructure</span>
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden rounded bg-slate-100 border border-[#d9dfe6]">
                  <img
                    src={selectedZone.groundPhoto.src}
                    alt={selectedZone.groundPhoto.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-[11px] text-[#44505e] leading-relaxed">
                  {selectedZone.groundPhoto.caption}
                </p>
              </div>
            )}

            {/* Optional Context Action Link (e.g. for Rewari Foundry) */}
            {selectedZone.actionUrl && (
              <div className="mt-4">
                <a
                  href={selectedZone.actionUrl}
                  className="inline-flex items-center text-xs font-semibold text-[#1b4b96] hover:underline"
                >
                  {selectedZone.actionText}
                </a>
              </div>
            )}
          </div>

          {/* Action CTA for Cargo Evaluation */}
          <div className="mt-6 pt-5 border-t border-[#d9dfe6]">
            <a
              data-testid="inspector-enquiry-cta"
              href="/contact?subject=Shivlakha%20Cargo%20Movement%20Evaluation#enquiry-form"
              className="inline-flex w-full h-11 items-center justify-center bg-[#1b4b96] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#143a75] transition-colors"
            >
              Evaluate Cargo Movement / Enquire for Shivlakha &rarr;
            </a>
            <p className="mt-2 text-[11px] text-center text-[#44505e]">
              Direct commercial review with our railway terminal logistics team.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. Mandatory Statutory Governance Caption (Verbatim §8 & §10) */}
      {/* ============================================================ */}
      <div data-testid="statutory-masterplan-disclaimer" className="border-t border-[#b8c9e5] bg-amber-50/80 p-5 text-xs text-amber-950 border-l-4 border-l-amber-600">
        <p className="font-bold flex items-center gap-1.5 text-amber-950">
          <ShieldCheck className="h-4 w-4 text-amber-700" />
          Master Plan &amp; Readiness Note:
        </p>
        <p className="mt-1.5 leading-relaxed text-amber-900">
          The isometric key plan illustrates the overall master layout and phased development plan at
          Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India. Today, Container
          Manufacturing and the Gati Shakti Terminal are operational; Railway Wagon
          Manufacturing (Target Q4 FY 2026-27), the Inland Container Terminal (CBIC approval received on 10 September 2026; Target Operational Date April 2027), and
          proposed expansion zones are under phased development. Specific rail cargo movements are
          evaluated individually against commodity permissions, route availability, and commercial
          agreement.
        </p>
      </div>
    </div>
  );
}
