import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Scale,
  Maximize2,
  Box,
  Truck,
  CheckCircle2,
  SlidersHorizontal,
  CheckSquare,
  Square,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { SiteLink } from "./SiteLink";
import { CONTAINER_MODEL_ASSETS } from "@/content/route-assets";

export interface ContainerModelSpec {
  id: number;
  name: string;
  nominalSize: string;
  category: "standard-iso" | "dwarf" | "coiltainers" | "tank-hopper" | "cuboid";
  categoryLabel: string;
  externalDim: string;
  internalDim: string;
  doorOpening?: string;
  sideDoorOpening?: string;
  topHatchOpening?: string;
  grossWeight: string;
  tareWeight: string;
  maxPayload: string;
  cubicCapacity: string;
  floorStrength: string;
  stackingTestLoad: string;
  handlingRating?: string;
  handlingMethod?: string;
  unitVehicleCapacity?: string;
  railWagonLoading?: string;
  parcelCargoPerRake?: string;
  twoWheelerPerRake?: string;
  threeWheelerPerRake?: string;
  tolerancesNote?: string;
  standardRef: string;
  featured?: boolean;
  commercialAdvantage?: string;
  specificationsOnly?: boolean;
  imagePending?: boolean;
}

export const CONTAINER_MODELS: ContainerModelSpec[] = [
  {
    id: 1,
    name: "20 Feet GP Container",
    nominalSize: "20′ × 8′ × 8′6″",
    category: "standard-iso",
    categoryLabel: "Standard ISO",
    externalDim: "6058 +0/-6 × 2438 +0/-5 × 2590 +0/-5 mm",
    internalDim: "5900 +0/-5 × 2346 +0/-5 × 2389 +0/-5 mm",
    doorOpening: "2338 +0/-5 × 2281 +0/-5 mm",
    grossWeight: "30,500 kg / 67,240 lb",
    tareWeight: "2,250 kg / 4,960 lb (±2%)",
    maxPayload: "28,250 kg / 62,875 lb",
    cubicCapacity: "33.07 m³ / 1,168 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,012 kg / 211,670 lb",
    standardRef: "Manufactured and designed to comply with ISO 1496 Series-1 requirements",
    commercialAdvantage:
      "Manufactured and designed to comply with ISO 1496 Series-1 requirements. Verified through in-house structural load testing at Rewari Works with IRS Works Capacity Assessment (DLH21X014); delivers 28,250 kg max payload at 30,500 kg gross.",
  },
  {
    id: 2,
    name: "20 Feet HC Container",
    nominalSize: "20′ × 8′ × 9′6″",
    category: "standard-iso",
    categoryLabel: "Standard ISO",
    externalDim: "6058 +0/-6 × 2438 +0/-5 × 2896 +0/-5 mm",
    internalDim: "5900 +0/-5 × 2346 +0/-5 × 2695 +0/-5 mm",
    doorOpening: "2338 +0/-5 × 2587 +0/-5 mm",
    grossWeight: "36,500 kg / 80,468 lb",
    tareWeight: "2,450 kg / 5,401 lb (±2%)",
    maxPayload: "34,050 kg / 75,067 lb (at 36,500 kg gross; 28,500 kg at 30,950 kg gross)",
    cubicCapacity: "37.30 m³ / 1,317 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,012 kg / 211,670 lb",
    standardRef: "Manufactured and designed to comply with ISO 1496 Series-1 requirements",
    commercialAdvantage:
      "Manufactured and designed to comply with ISO 1496 Series-1 requirements. Verified through in-house structural load testing at Rewari Works with IRS Works Capacity Assessment (DLH21X014); delivers 34,050 kg max payload at 36,500 kg gross (37.30 m³ volume).",
  },
  {
    id: 3,
    name: "20 Feet HC Side Access Container",
    nominalSize: "20′ × 8′ × 9′6″",
    category: "standard-iso",
    categoryLabel: "Standard ISO",
    externalDim: "6058 +0/-6 × 2438 +0/-5 × 2896 +0/-5 mm",
    internalDim: "5897 +0/-5 × 2350 +0/-5 × 2697 +0/-5 mm",
    doorOpening: "2338 × 2592 mm (Rear door)",
    sideDoorOpening: "1510 × 2480 mm (Side door)",
    grossWeight: "36,500 kg / 80,468 lb",
    tareWeight: "3,100 kg / 6,834 lb (±2%)",
    maxPayload: "33,400 kg / 73,634 lb",
    cubicCapacity: "37.37 m³ / 1,320 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,000 kg / 211,644 lb",
    standardRef: "ISO 1496-1 High-Cube with Side Access Doors",
    commercialAdvantage:
      "Built and tested on our in-house ISO 1496 Series-1 test rig with IRS Capacity Certification (DLH21X014); adds a 1,510 × 2,480 mm side door for mechanised pallet loading in tight factory bays at 33,400 kg payload.",
  },
  {
    id: 4,
    name: "40 Feet HC Container",
    nominalSize: "40′ × 8′ × 9′6″",
    category: "standard-iso",
    categoryLabel: "Standard ISO",
    externalDim: "12192 +0/-10 × 2438 +0/-5 × 2896 +0/-5 mm",
    internalDim: "12027 +0/-10 × 2350 +0/-5 × 2692 +0/-5 mm",
    doorOpening: "2338 +0/-5 × 2594 +0/-5 mm",
    grossWeight: "40,000 kg / 88,185 lb",
    tareWeight: "4,700 kg / 10,362 lb (±2%)",
    maxPayload: "35,300 kg / 77,823 lb",
    cubicCapacity: "76.09 m³ (Standard ISO 40' HC) / up to 84.00 m³ (Cotton bale configuration)",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,000 kg / 211,644 lb",
    standardRef: "High-Cube Volumetric Design · ISO 1496 Series-1 · CSC 1972",
    commercialAdvantage:
      "Delivers 76.09 m³ standard ISO capacity with 35,300 kg max payload at 40,000 kg gross weight. For agricultural and textile corridors, high-cube internal geometry accommodates up to 84.00 m³ specialized packing configurations for compressed cotton bales.",
  },
  {
    id: 5,
    name: "40 Feet Side Access Dwarf Container",
    nominalSize: "40′ × 8′6″ × 6′3″",
    category: "dwarf",
    categoryLabel: "Dwarf Containers",
    externalDim: "12192 +0/-10 × 2600 +0/-5 × 1930 +0/-5 mm",
    internalDim: "12038 +0/-5 × 2508 +0/-5 × 1792 +0/-5 mm (Alt Rear-Door Dwarf: 12050 × 2550 × 1812 mm, 55.00 m³ / 1,943 cu.ft)",
    doorOpening: "2500 × 1719.5 mm (Door)",
    sideDoorOpening: "764 × 1482 mm (Side door)",
    grossWeight: "36,000 kg / 79,366 lb",
    tareWeight: "4,300 kg / 9,479 lb",
    maxPayload: "31,700 kg / 69,886 lb",
    cubicCapacity: "54.10 m³ / 1,911 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "41,148 kg / 90,715 lb",
    tolerancesNote: "In-House Developed · FRP Composite Floor · Modified 242×115×178 mm Corner Castings",
    standardRef: "Indian Railways OHE Double-Stack Clearance Standard · FRP Composite Floor",
    featured: true,
    commercialAdvantage:
      "1,930 mm low-profile height allows double-stack container movement beneath electrified Indian Railways overhead wires (OHE), while the wider 2,600 mm body and in-house variable-thickness FRP composite floor reduce tare weight by ~400 kg vs. wood and support 7,260 kg forklift wheel loads.",
  },
  {
    id: 6,
    name: "40 Feet Open Top Coiltainer",
    nominalSize: "40′ × 8′ × 8′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12192 +0/-10 × 2438 +0/-5 × 2591 +0/-5 mm",
    internalDim: "12084 +0/-10 × 2347 +0/-5 × 2152 +0/-5 mm",
    doorOpening: "1510 +0/-5 × 1860 +0/-5 mm (Mid-side door)",
    sideDoorOpening: "764 +0/-5 × 1860 +0/-5 mm (Side door)",
    grossWeight: "80,000 kg / 176,369 lb",
    tareWeight: "5,000 kg / 11,023 lb (±2%)",
    maxPayload: "75,000 kg / 165,347 lb",
    cubicCapacity: "61.03 m³ / 2,155 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT (36,000 kg) · Chassis Operation: 71 MT (71,000 kg)",
    stackingTestLoad: "88,888 kg / 195,964 lb",
    standardRef: "Heavy Metallurgy Open-Top Coiltainer · 71 MT Chassis Protocol",
    commercialAdvantage:
      "Engineered for high payload density (75,000 kg max payload; 80,000 kg gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. Open-top design enables overhead EOT crane loading of heavy coils without end-door damage.",
  },
  {
    id: 7,
    name: "40 Feet HC Open Top Coiltainer",
    nominalSize: "40′ × 8′ × 9′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12192 × 2438 × 2896 mm",
    internalDim: "12084 × 2330 × 2470 mm",
    doorOpening: "1510 × 2077 mm (Mid-side door)",
    sideDoorOpening: "764 × 2077 mm (Side door)",
    grossWeight: "80,000 kg / 176,369 lb",
    tareWeight: "5,500 kg / 12,125 lb",
    maxPayload: "74,500 kg / 164,244 lb",
    cubicCapacity: "69.54 m³ / 2,456 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "Per engineering specification",
    standardRef: "High-Cube Open-Top Coiltainer · 71 MT Chassis Protocol",
    commercialAdvantage:
      "Engineered for extreme payload density (74,500 kg max payload; 80.0T gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. High-cube open-top with 1,510 mm mid-side doors enables overhead crane loading of heavy coils and 12-meter TMT bar bundles.",
  },
  {
    id: 8,
    name: "40 Feet Dwarf Open Top Coiltainer",
    nominalSize: "40′ × 8′6″ × 6′3″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12192 × 2600 × 1930 mm",
    internalDim: "12086 × 2461 × 1584 mm",
    doorOpening: "764 × 1296 mm (Mid-side door)",
    sideDoorOpening: "764 × 1296 mm (Side door)",
    grossWeight: "73,000 kg / 160,937 lb",
    tareWeight: "5,000 kg / 11,023 lb (with roof bow and tarpaulin)",
    maxPayload: "68,000 kg / 149,914 lb",
    cubicCapacity: "47.11 m³ / 1,664 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "41,148 kg / 90,715 lb",
    standardRef: "Double-Stack Dwarf Open-Top · Electrified Rail Corridor Standard",
    commercialAdvantage:
      "Combines 1,930 mm low-profile double-stack electrified rail clearance with 68,000 kg max payload (73T gross rating) with 71 MT chassis operation and 36 MT lift rating for heavy bulk and coil movements under OHE wires.",
  },
  {
    id: 9,
    name: "40 Feet Universal Container, Openable Top",
    nominalSize: "40′ × 8′ × 9′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12192 × 2438 × 2896 mm",
    internalDim: "12033 × 2338 × 2439 mm",
    doorOpening: "2338 × 2340 mm (Rear door)",
    sideDoorOpening: "764 × 2038 mm (Side door)",
    grossWeight: "72,000 kg / 158,732 lb",
    tareWeight: "5,500 kg / 12,125 lb",
    maxPayload: "66,500 kg / 146,607 lb",
    cubicCapacity: "68.62 m³ / 2,423 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "Per engineering specification",
    standardRef: "Universal Openable Top · Removable Roof Bow Clearances",
    commercialAdvantage:
      "Engineered for extreme payload density (66,500 kg max payload; 72.0T gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. Universal openable top and side doors enable overhead crane loading of steel coils and structural profiles.",
  },
  {
    id: 10,
    name: "42 Feet HC Open Coiltainer (8′6″ Wide)",
    nominalSize: "42′ × 8′6″ × 9′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12802 × 2600 × 2896 mm",
    internalDim: "12704 × 2513 × 2549 mm",
    doorOpening: "1176 × 2262 mm (Mid-side door)",
    sideDoorOpening: "764 × 2262 mm (Side door)",
    grossWeight: "70,000 kg / 154,323 lb",
    tareWeight: "7,900 kg / 17,416 lb",
    maxPayload: "62,100 kg / 136,907 lb",
    cubicCapacity: "81.38 m³ / 2,874 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "91,440 kg / 201,590 lb",
    standardRef: "42ft High-Cube Wide-Body Coiltainer · 71 MT Chassis Protocol",
    commercialAdvantage:
      "Engineered for extreme payload density (62,100 kg max payload; 70.0T gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. 42' length and 2,600 mm width accommodate 12-meter TMT bar bundles and heavy coils.",
  },
  {
    id: 11,
    name: "42 Feet Dwarf Open Top Container",
    nominalSize: "42′ × 8′6″ × 6′3″",
    category: "dwarf",
    categoryLabel: "Dwarf Containers",
    externalDim: "12802 × 2600 × 1930 mm",
    internalDim: "12704 × 2476 × 1756 mm",
    doorOpening: "764 × 1468 mm (Mid-side door)",
    sideDoorOpening: "764 × 1468 mm (Side door)",
    grossWeight: "68,000 kg / 149,914 lb",
    tareWeight: "6,000 kg / 13,228 lb",
    maxPayload: "62,000 kg / 136,686 lb",
    cubicCapacity: "55.24 m³ / 1,951 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "91,440 kg / 201,590 lb",
    standardRef: "42ft Double-Stack Dwarf Open-Top · Low-Clearance Rail Standard",
    commercialAdvantage:
      "42' double-stack dwarf profile (1,930 mm height, 2,600 mm width) rated at 68,000 kg gross / 62,000 kg max payload with 71 MT chassis rating, enabling double-stack rail dispatch of heavy freight under electrified OHE wires.",
  },
  {
    id: 12,
    name: "42 Feet HC Open Top Coiltainer (8′ Wide)",
    nominalSize: "42′ × 8′ × 9′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12802 × 2438 × 2896 mm",
    internalDim: "12688 × 2331 × 2352 mm",
    doorOpening: "1510 × 2046 mm (Mid-side door)",
    sideDoorOpening: "764 × 2046 mm (Side door)",
    grossWeight: "67,320 kg / 148,415 lb",
    tareWeight: "7,100 kg / 15,653 lb",
    maxPayload: "60,220 kg / 132,762 lb",
    cubicCapacity: "69.56 m³ / 2,457 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "91,440 kg / 201,590 lb",
    standardRef: "42ft High-Cube Heavy Coiltainer · 71 MT Chassis Rating",
    commercialAdvantage:
      "Engineered for extreme payload density (60,220 kg max payload; 67.3T gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. 42' open-top profile allows direct overhead crane loading of 12-meter TMT bars.",
  },
  {
    id: 13,
    name: "42 Feet HC for Coil and TMT Bars",
    nominalSize: "42′ × 8′ × 9′6″",
    category: "coiltainers",
    categoryLabel: "Coiltainers & Heavy Cargo",
    externalDim: "12802 × 2438 × 2896 mm",
    internalDim: "12694 × 2351 × 2550 mm",
    doorOpening: "1176 × 2262 mm (Mid-side door)",
    sideDoorOpening: "764 × 2262 mm (Side door)",
    grossWeight: "70,000 kg / 154,323 lb",
    tareWeight: "7,200 kg / 15,873 lb",
    maxPayload: "62,800 kg / 138,450 lb",
    cubicCapacity: "76.10 m³ / 2,687 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    handlingRating: "Lift-On & Lift-Off: 36 MT · Chassis: 71 MT",
    stackingTestLoad: "91,440 kg / 201,590 lb",
    standardRef: "42ft High-Cube Coil & TMT Heavy Freight Specification",
    commercialAdvantage:
      "Engineered for extreme payload density (62,800 kg max payload; 70.0T gross rating) with 71 MT chassis operation and 36 MT lift-on/lift-off ratings. Purpose-designed for 12-meter TMT rebar bundles and heavy hot-rolled steel coils.",
  },
  {
    id: 14,
    name: "20 Feet Tank Container",
    nominalSize: "20′ × 8′6″ × 9′6″",
    category: "tank-hopper",
    categoryLabel: "Tank & Hopper",
    externalDim: "6058 +0/-6 × 2600 +0/-5 × 2896 +0/-5 mm",
    internalDim: "Tank vessel",
    grossWeight: "36,600 kg / 80,689 lb",
    tareWeight: "3,600 kg / 7,936 lb (±2%)",
    maxPayload: "33,000 kg / 72,752 lb",
    cubicCapacity: "31.00 m³ / 1,094 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,000 kg / 211,644 lb",
    standardRef: "ISO 1496-3 Cylindrical Tank Container · IMDG & ADR Compliant",
    commercialAdvantage:
      "Enclosed cylindrical tank container built for liquid bulk commodities with 31.00 m³ volume and 33,000 kg max payload on an ISO-compatible 20' footprint rated for 96,000 kg stacking.",
  },
  {
    id: 15,
    name: "20 Feet Hopper Container",
    nominalSize: "20′ × 8′6″ × 9′6″",
    category: "tank-hopper",
    categoryLabel: "Tank & Hopper",
    externalDim: "6058 +0/-6 × 2600 +0/-5 × 2956 +0/-5 mm",
    internalDim: "5946 +0/-5 × 2504 +0/-5 × 1987 +0/-5 mm",
    topHatchOpening: "Width 473 +0/-5 × Height 2730 +0/-5 mm",
    grossWeight: "36,500 kg / 80,468 lb",
    tareWeight: "3,800 kg / 8,377 lb (±2%)",
    maxPayload: "32,700 kg / 72,091 lb",
    cubicCapacity: "37.00 m³ / 1,306 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,000 kg / 211,643 lb",
    standardRef: "ISO 1496 Gravity Discharge Bulk Hopper Specification",
    commercialAdvantage:
      "Engineered for bulk commodities—uses a 473 × 2,730 mm top hatch and bottom discharge (37.00 m³ Hopper, 32,700 kg payload) for silo-to-rail transfer of cement, flyash, clinker, salt, and grains.",
  },
  {
    id: 16,
    name: "CUBOID Container (Parcel, Two-Wheeler & Three-Wheeler Box)",
    nominalSize: "2.55 × 2.00 × 2.73 m",
    category: "cuboid",
    categoryLabel: "CUBOID & Rail Boxes",
    externalDim: "2550 × 2000 × 2730 mm",
    internalDim: "12.5 m³",
    grossWeight: "3,300 kg / 7,275 lb",
    tareWeight: "800 kg / 1,764 lb",
    maxPayload: "2,500 kg / 5,512 lb",
    cubicCapacity: "12.50 m³ / 441 cu.ft",
    floorStrength: "Internal multi-tier support",
    stackingTestLoad: "Multi-tier rail and yard stacking",
    handlingMethod: "5 MT forklift with load centre at 1.225 m",
    unitVehicleCapacity: "10 motorbikes per CUBOID · 4 three-wheelers per CUBOID",
    railWagonLoading: "6 CUBOIDs per BLC flat wagon · 45 wagons per rake · 270 CUBOIDs per rake",
    parcelCargoPerRake: "Parcel: 15 MT/wagon (675 MT/rake)",
    twoWheelerPerRake: "Two-wheelers: 48/wagon (2,160/rake)",
    threeWheelerPerRake: "Three-wheelers: 18/wagon (810/rake)",
    standardRef: "Modular Parcel & Automotive Rail Box Specification for BLC Wagons",
    featured: true,
    commercialAdvantage:
      "Six CUBOID units lock onto a single standard BLC flat wagon (270 boxes per 45-wagon rake), enabling a single train rake to carry 2,160 motorbikes, 810 three-wheelers, or 675 MT of LTL parcels/FMCG with rapid 5 MT forklift side-loading.",
  },
  {
    id: 17,
    name: "20 Feet 304-Grade Stainless Steel Salt Container",
    nominalSize: "20′ × 8′ × 8′6″",
    category: "tank-hopper",
    categoryLabel: "Stainless Steel Salt & Marine Cargo",
    externalDim: "6058 +0/-6 × 2438 +0/-5 × 2590 +0/-5 mm",
    internalDim: "5900 +0/-5 × 2346 +0/-5 × 2389 +0/-5 mm",
    doorOpening: "2338 +0/-5 × 2281 +0/-5 mm",
    grossWeight: "30,500 kg / 67,240 lb",
    tareWeight: "2,600 kg / 5,732 lb (2.6 MT Tare Weight)",
    maxPayload: "27,900 kg / 61,508 lb",
    cubicCapacity: "33.07 m³ / 1,168 cu.ft",
    floorStrength: "7,260 kg / 16,006 lb",
    stackingTestLoad: "96,012 kg / 211,670 lb",
    standardRef: "ISO 1496 Series-1 Design · CSC 1972",
    featured: true,
    specificationsOnly: true,
    imagePending: true,
    commercialAdvantage:
      "Specifications-only record: Developed for marine salt transport in strategic collaboration with Jindal Stainless and rigorously field-trialed at Bhimasar, Gandhidham. Constructed with 304-grade stainless steel to resist severe saline corrosion from raw marine salt while maintaining an ultra-light 2.6 MT tare weight (2,600 kg). Designed to comply with ISO 1496 Series-1 and CSC 1972 requirements. Authentic production photography pending engineering release.",
  },
];

export function ContainerCatalog() {
  const [selectedModel, setSelectedModel] = useState<ContainerModelSpec | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [comparedIds, setComparedIds] = useState<number[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  function toggleCompare(id: number, e?: React.MouseEvent) {
    if (e) e.stopPropagation();
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  }

  const comparedModels = useMemo(() => {
    return CONTAINER_MODELS.filter((m) => comparedIds.includes(m.id));
  }, [comparedIds]);

  const categories = [
    { id: "all", label: "All Models" },
    { id: "standard-iso", label: "Standard ISO", anchor: "standard-iso" },
    { id: "dwarf", label: "Dwarf Containers", anchor: "dwarf" },
    { id: "coiltainers", label: "Coiltainers & Heavy", anchor: "coiltainers" },
    { id: "tank-hopper", label: "Tank, Hopper & Stainless", anchor: "tank-hopper" },
    { id: "cuboid", label: "CUBOID Rail Boxes", anchor: "cuboid" },
  ];

  const filteredModels = useMemo(() => {
    return CONTAINER_MODELS.filter((m) => {
      const matchCat = activeCategory === "all" || m.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        `model ${m.id}`.includes(q) ||
        `model ${String(m.id).padStart(2, "0")}`.toLowerCase().includes(q) ||
        m.nominalSize.toLowerCase().includes(q) ||
        m.categoryLabel.toLowerCase().includes(q) ||
        m.grossWeight.toLowerCase().includes(q) ||
        m.cubicCapacity.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* Layer 1: Category Filter Pills, Search & View Controls       */}
      {/* ============================================================ */}
      <div className="rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-[#0e2a55] text-white shadow-sm"
                    : "bg-[#f1f4f8] text-[#44505e] hover:bg-[#e2e8f0] hover:text-[#101820]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search model, dimension, cargo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 text-xs"
              />
            </div>
            <div className="hidden sm:flex items-center rounded-lg border border-[#d9dfe6] p-1 bg-[#f8fafc]">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${
                  viewMode === "grid" ? "bg-[#1b4b96] text-white shadow-xs" : "text-[#44505e] hover:text-[#101820]"
                }`}
              >
                Visual Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${
                  viewMode === "table" ? "bg-[#1b4b96] text-white shadow-xs" : "text-[#44505e] hover:text-[#101820]"
                }`}
              >
                Spec Table
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#d9dfe6] pt-3 text-xs text-[#44505e]">
          <span>
            Showing <strong>{filteredModels.length}</strong> Container Configurations across Specialised &amp; Heavy Logistics Range
          </span>
          <span className="font-mono text-[11px] text-[#1b4b96]">
            Controlled specifications per ISO 1496 Series-1, CSC 1972 &amp; IRS standards
          </span>
        </div>
      </div>

      {/* Category Anchors for direct deep-linking */}
      <div id="standard-iso" className="scroll-mt-28" />
      <div id="dwarf" className="scroll-mt-28" />
      <div id="coiltainers" className="scroll-mt-28" />
      <div id="tank-hopper" className="scroll-mt-28" />
      <div id="cuboid" className="scroll-mt-28" />

      {/* ============================================================ */}
      {/* Layer 2: Visual-First Product Catalogue Grid                 */}
      {/* ============================================================ */}
      {viewMode === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model) => {
            const asset = CONTAINER_MODEL_ASSETS[model.id];
            const isCompared = comparedIds.includes(model.id);
            return (
              <div
                key={model.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:border-[#1b4b96] hover:shadow-lg ${
                  isCompared ? "border-[#1b4b96] ring-2 ring-[#1b4b96]/20" : "border-[#d9dfe6]"
                }`}
              >
                {/* 1. Large Authentic Product Photograph or Clean Spec-Only Box */}
                {model.specificationsOnly || model.imagePending ? (
                  <div
                    className="aspect-[3/2] w-full bg-[#0a1f3d] flex flex-col items-center justify-center p-6 text-center text-white relative cursor-pointer"
                    onClick={() => setSelectedModel(model)}
                    data-testid={`model-card-spec-only-${model.id}`}
                  >
                    <div className="rounded-full bg-amber-500/20 p-3 border border-amber-500/40 text-amber-300 mb-2">
                      <FileSpreadsheet className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                      Specifications Available &middot; Image Pending
                    </span>
                    <p className="mt-1.5 text-[11px] text-white/80 max-w-[260px] leading-relaxed">
                      Engineering design &amp; metallurgical parameters verified. Authentic photography pending final engineering release.
                    </p>
                    <div className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55] border border-white/20 px-2.5 py-1 font-mono text-[11px] font-bold text-white shadow-xs">
                      Model {String(model.id).padStart(2, "0")}
                    </div>
                    <div className="absolute top-2.5 right-2.5 rounded bg-white/95 px-2 py-0.5 font-mono text-[10px] font-bold text-[#1b4b96] border border-[#b8c9e5] shadow-xs">
                      {model.nominalSize}
                    </div>
                    <div className="absolute bottom-2 left-2 rounded bg-amber-500/90 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs">
                      Specs-Only Record
                    </div>
                  </div>
                ) : (
                  <div
                    className="aspect-[3/2] w-full overflow-hidden bg-slate-100 relative cursor-pointer"
                    onClick={() => setSelectedModel(model)}
                    data-testid={`model-card-img-${model.id}`}
                  >
                    <img
                      src={asset?.src || "/assets/containers/ISO Container.png"}
                      alt={asset?.alt || model.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Model ID Badge */}
                    <div className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2.5 py-1 font-mono text-[11px] font-bold text-white shadow-xs">
                      Model {String(model.id).padStart(2, "0")}
                    </div>
                    {/* Nominal Size Pill */}
                    <div className="absolute top-2.5 right-2.5 rounded bg-white/95 px-2 py-0.5 font-mono text-[10px] font-bold text-[#1b4b96] border border-[#b8c9e5] shadow-xs">
                      {model.nominalSize}
                    </div>
                    {/* Special Status Highlights */}
                    {model.id === 4 && (
                      <div className="absolute bottom-2 left-2 rounded bg-amber-500/95 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs">
                        84 m³ Cotton Bale Config
                      </div>
                    )}
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1b4b96]">
                        {model.categoryLabel}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => toggleCompare(model.id, e)}
                        className={`inline-flex items-center gap-1 text-[11px] font-mono transition-colors ${
                          isCompared ? "text-[#1b4b96] font-bold" : "text-slate-400 hover:text-slate-600"
                        }`}
                        title="Add to comparison"
                      >
                        {isCompared ? <CheckSquare className="h-3.5 w-3.5 text-[#1b4b96]" /> : <Square className="h-3.5 w-3.5" />}
                        <span>Compare</span>
                      </button>
                    </div>

                    {/* 2. Approved Product / Model Name */}
                    <h3
                      onClick={() => setSelectedModel(model)}
                      className="mt-1 font-display text-lg font-bold text-[#101820] group-hover:text-[#1b4b96] transition-colors cursor-pointer"
                    >
                      {model.name}
                    </h3>

                    {/* 4. One Short Application Description */}
                    <p className="mt-2 text-sm leading-relaxed text-[#44505e] line-clamp-2">
                      {model.commercialAdvantage || model.standardRef}
                    </p>
                  </div>

                  {/* Certified Metrics Strip */}
                  <div className="pt-3 border-t border-[#f1f4f8] grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="rounded bg-[#f8fafc] p-2 border border-[#e2e8f0]">
                      <span className="text-xs text-muted-foreground block">Max Payload</span>
                      <span className="font-bold text-[#101820]">{model.maxPayload.split(" / ")[0]}</span>
                    </div>
                    <div className="rounded bg-[#f8fafc] p-2 border border-[#e2e8f0]">
                      <span className="text-xs text-muted-foreground block">Cubic Volume</span>
                      <span className="font-bold text-[#101820]">{model.cubicCapacity.split(" (")[0].split(" / ")[0]}</span>
                    </div>
                  </div>

                  {/* 5. Simple 'View Details' Action */}
                  <Button
                    type="button"
                    onClick={() => setSelectedModel(model)}
                    className="w-full h-10 rounded-md bg-[#1b4b96] text-sm font-bold text-white hover:bg-[#143a75] transition-all"
                  >
                    View Engineering Details &rarr;
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ============================================================ */
        /* Table View: Engineering Specifications Matrix               */
        /* ============================================================ */
        <div className="rounded-xl border border-[#d9dfe6] bg-white shadow-sm overflow-hidden">
          <div className="border-b border-[#d9dfe6] bg-[#f8fafc] px-6 py-4">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-[#1b4b96]">
                  Engineering Specification Master
                </p>
                <h3 className="font-display text-lg font-bold text-[#101820]">
                  Container Specification Table
                </h3>
              </div>
              <p className="text-xs text-[#44505e]">
                Click any row to open the complete engineering tolerance drawer
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#d9dfe6] bg-[#f1f4f8] text-[#44505e]">
                <tr>
                  <th className="py-3.5 pl-4 pr-1 font-mono font-bold uppercase text-center w-12" title="Select up to 3 models to compare">
                    Compare
                  </th>
                  <th className="py-3.5 pl-3 pr-3 font-mono font-bold uppercase">#</th>
                  <th className="py-3.5 px-3 font-bold uppercase">Model Name</th>
                  <th className="py-3.5 px-3 font-bold uppercase">Nominal Size</th>
                  <th className="py-3.5 px-3 font-bold uppercase">External L×W×H</th>
                  <th className="py-3.5 px-3 font-bold uppercase">Internal L×W×H</th>
                  <th className="py-3.5 px-3 font-bold uppercase">Gross / Tare / Payload</th>
                  <th className="py-3.5 px-3 font-bold uppercase">Floor / Stacking</th>
                  <th className="py-3.5 pl-3 pr-6 text-right font-bold uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d9dfe6]">
                {filteredModels.map((model) => (
                  <tr
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`group cursor-pointer transition-colors ${
                      comparedIds.includes(model.id) ? "bg-blue-50/60" : "hover:bg-[#f8fafc]"
                    }`}
                  >
                    <td
                      className="py-4 pl-4 pr-1 text-center"
                      onClick={(e) => toggleCompare(model.id, e)}
                    >
                      <button
                        type="button"
                        aria-label={`Compare ${model.name}`}
                        data-testid={`compare-chk-${model.id}`}
                        className={`inline-flex items-center justify-center p-1 rounded transition-colors ${
                          comparedIds.includes(model.id)
                            ? "text-[#1b4b96]"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        {comparedIds.includes(model.id) ? (
                          <CheckSquare className="h-4 w-4 text-[#1b4b96]" />
                        ) : (
                          <Square className="h-4 w-4" />
                        )}
                      </button>
                    </td>
                    <td className="py-4 pl-3 pr-3 font-mono font-bold text-[#1b4b96] text-sm">
                      {String(model.id).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-3">
                      <span className="font-display font-bold text-base text-[#101820] group-hover:text-[#1b4b96]">
                        {model.name}
                      </span>
                      <span className="block text-xs font-medium text-[#44505e]">
                        {model.categoryLabel}
                      </span>
                      {model.id === 4 && (
                        <span className="mt-0.5 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                          84 m³ Cotton Bale Capacity
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-3 font-mono text-sm text-[#44505e] [font-variant-numeric:tabular-nums]">{model.nominalSize}</td>
                    <td className="py-4 px-3 font-mono text-sm text-[#44505e] [font-variant-numeric:tabular-nums]">
                      {model.externalDim.replace(/ · /g, " ")}
                    </td>
                    <td className="py-4 px-3 font-mono text-sm text-[#44505e] [font-variant-numeric:tabular-nums]">
                      {model.internalDim.replace(/ · /g, " ")}
                    </td>
                    <td className="py-4 px-3 font-mono text-sm text-[#101820] [font-variant-numeric:tabular-nums]">
                      <span className="font-bold">{model.grossWeight.split(" / ")[0]}</span> /{" "}
                      {model.tareWeight.split(" / ")[0]}
                      <span className="block text-xs font-semibold text-[#1b4b96]">
                        Payload: {model.maxPayload.split(" (")[0]}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-sm text-[#44505e] [font-variant-numeric:tabular-nums]">
                      <span className="block font-semibold text-emerald-700 font-mono">7,260 kg floor</span>
                      <span className="font-mono">{model.stackingTestLoad.split(" / ")[0]}</span>
                    </td>
                    <td className="py-4 pl-3 pr-6 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded border-[#d9dfe6] text-xs font-semibold text-[#1b4b96] group-hover:border-[#1b4b96] group-hover:bg-[#1b4b96] group-hover:text-white transition-all h-9"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedModel(model);
                        }}
                      >
                        Spec Drawer &rarr;
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* Layer 4: Slide-Over Engineering Specification Drawer */}
      {/* ============================================================ */}
      <Sheet open={!!selectedModel} onOpenChange={(open) => !open && setSelectedModel(null)}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto p-6 lg:p-8">
          {selectedModel && (
            <div className="space-y-6">
              <SheetHeader className="border-b border-[#d9dfe6] pb-5">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#1b4b96] px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                    Model #{selectedModel.id}
                  </span>
                  <span className="rounded bg-[#f1f4f8] px-2.5 py-0.5 text-xs font-semibold text-[#44505e]">
                    {selectedModel.categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-[#1b4b96]">
                    Verified Engineering Specification
                  </span>
                </div>
                <SheetTitle className="mt-3 font-display text-2xl font-bold text-[#101820]">
                  {selectedModel.name}
                </SheetTitle>
                <SheetDescription className="font-mono text-sm text-[#44505e]">
                  Nominal: {selectedModel.nominalSize}
                </SheetDescription>
              </SheetHeader>

              {/* Commercial & Operational Advantage Highlight Box */}
              {selectedModel.commercialAdvantage && (
                <div className="rounded-lg border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] via-white to-white p-4 shadow-sm text-sm">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    Commercial &amp; Operational Advantage
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#101820] font-medium">
                    {selectedModel.commercialAdvantage}
                  </p>
                </div>
              )}

              {/* Authentic Model Visual Story Image Banner or Clean Spec Notice */}
              {selectedModel.specificationsOnly || selectedModel.imagePending ? (
                <div
                  className="rounded-lg border border-amber-300 bg-amber-50/90 p-5 text-amber-900"
                  data-testid="drawer-spec-only-banner"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
                    <FileSpreadsheet className="h-4 w-4 text-amber-700 shrink-0" />
                    Specifications Available &middot; Authentic Image Pending Engineering Release
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                    Engineering design, material specifications, and load ratings are verified and listed below. Authentic production photographs will be published following final production release.
                  </p>
                </div>
              ) : CONTAINER_MODEL_ASSETS[selectedModel.id] ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#d9dfe6] bg-[#f1f4f8]">
                  <img
                    src={CONTAINER_MODEL_ASSETS[selectedModel.id].src}
                    alt={CONTAINER_MODEL_ASSETS[selectedModel.id].alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-xs sm:text-sm text-white">
                    <span className="font-bold">
                      {CONTAINER_MODEL_ASSETS[selectedModel.id].caption}
                    </span>
                  </div>
                </div>
              ) : null}

              {/* Technical General Arrangement Drawing */}
              {(selectedModel.id === 7 || selectedModel.id === 9) && (
                <div className="rounded-lg border border-[#b8c9e5] bg-[#ebf3fe]/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Simplified General Arrangement Diagram
                    </span>
                    <span className="rounded bg-[#1b4b96] px-2 py-0.5 font-mono text-xs font-bold text-white">
                      General Arrangement Diagram
                    </span>
                  </div>
                  <div className="overflow-hidden rounded border border-[#d9dfe6] bg-white p-3">
                    <img
                      src={
                        selectedModel.id === 7
                          ? "/assets/containers/40_spl_steel_drawing_cross_section.png"
                          : "/assets/containers/40_spl_steel_drawing_elevation.png"
                      }
                      alt={
                        selectedModel.id === 7
                          ? "40ft High Cube Open Top Coiltainer Technical Cross-Section Drawing"
                          : "40ft Universal Openable Top Engineering Elevation Drawing"
                      }
                      className="w-full object-contain max-h-64 mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#101820]">
                    {selectedModel.id === 7
                      ? "40' HC Open Top Coiltainer Engineering Cross-Section"
                      : "40' Universal Openable Top Engineering Elevation"}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                    {selectedModel.id === 7
                      ? "Simplified engineering cross-section illustrating internal coil cradle contours, reinforced floor underframe and removable roof bow clearances."
                      : "Simplified structural CAD elevation diagram illustrating side wall corrugations, corner post connections and top openable door clearance."}
                  </p>
                </div>
              )}

              {/* Approved Engineering Spec Table */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="eyebrow text-[#1b4b96]">
                    Approved Technical Specifications
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-[#101820]">
                    Tolerance: +0 / -5 mm (standard)
                  </span>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#d9dfe6] bg-white shadow-sm">
                  <div className="max-h-[55vh] overflow-y-auto">
                    <table className="w-full border-collapse text-left [font-variant-numeric:tabular-nums]">
                      <thead className="sticky top-0 z-10 bg-[#0e2a55] text-white shadow-xs">
                        <tr>
                          <th className="w-2/5 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white">
                            Engineering Parameter
                          </th>
                          <th className="w-3/5 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                            Certified Value (+0/-5 mm)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e2e8f0]">
                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            External Dimensions (L × W × H)
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-semibold text-[#101820] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.externalDim}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Internal Dimensions (L × W × H)
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-semibold text-[#101820] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.internalDim}
                          </td>
                        </tr>

                        {selectedModel.doorOpening && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              End / Rear Door Opening
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.doorOpening}
                            </td>
                          </tr>
                        )}

                        {selectedModel.sideDoorOpening && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Side Door Opening
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.sideDoorOpening}
                            </td>
                          </tr>
                        )}

                        {selectedModel.topHatchOpening && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Top Hatch / Discharge Opening
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.topHatchOpening}
                            </td>
                          </tr>
                        )}

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Max. Gross Weight (M.G.W.)
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-bold text-[#101820] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.grossWeight}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Tare Weight
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.tareWeight}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Max. Payload
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-bold text-[#1b4b96] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.maxPayload}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Cubic Capacity
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-bold text-[#101820] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.cubicCapacity}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Floor Strength
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-bold text-emerald-700 [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.floorStrength}
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                            Stacking Test Load
                          </td>
                          <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                            {selectedModel.stackingTestLoad}
                          </td>
                        </tr>

                        {selectedModel.handlingRating && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors bg-amber-50/60">
                            <td className="px-4 py-3 text-sm font-bold text-amber-900 align-top">
                              Handling Rating
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-bold text-amber-900 [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.handlingRating}
                            </td>
                          </tr>
                        )}

                        {selectedModel.handlingMethod && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Handling Method
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.handlingMethod}
                            </td>
                          </tr>
                        )}

                        {selectedModel.unitVehicleCapacity && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Vehicle Capacity
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.unitVehicleCapacity}
                            </td>
                          </tr>
                        )}

                        {selectedModel.railWagonLoading && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Rail Wagon Loading
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.railWagonLoading}
                            </td>
                          </tr>
                        )}

                        {selectedModel.parcelCargoPerRake && (
                          <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-bold text-[#101820] align-top">
                              Rake Logistics
                            </td>
                            <td className="px-4 py-3 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] align-top">
                              {selectedModel.parcelCargoPerRake} &middot; {selectedModel.twoWheelerPerRake}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {selectedModel.tolerancesNote && (
                  <p className="mt-2 text-xs text-[#44505e] italic font-mono">
                    Tolerance Note: {selectedModel.tolerancesNote}
                  </p>
                )}

                {/* Approved Engineering Standards Block */}
                <div className="mt-4 rounded-lg border border-[#d9dfe6] bg-[#f8fafc] p-4 text-xs">
                  <span className="font-bold text-[#101820] block mb-2">
                    Applicable Approved Engineering Standards
                  </span>
                  <ul className="space-y-1.5 text-[#44505e]">
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold text-[#1b4b96]">&bull;</span>
                      <span>
                        <strong className="text-[#101820]">
                          Structural design &amp; testing rig:
                        </strong>{" "}
                        ISO 1496 Series-1 freight container testing rig at Rewari works
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold text-[#1b4b96]">&bull;</span>
                      <span>
                        <strong className="text-[#101820]">Corner fittings:</strong> ISO 1161
                        (standard) and 242 &times; 115 &times; 178 mm (wide-body dwarf)
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold text-[#1b4b96]">&bull;</span>
                      <span>
                        <strong className="text-[#101820]">Foundry:</strong> IS 12117:1996
                        (Reaffirmed 2007) Class A Foundry
                      </span>
                    </li>
                    {selectedModel.id === 2 && (
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-[#1b4b96]">&bull;</span>
                        <span>
                          <strong className="text-[#101820]">
                            IRS Certificate (Report No. DLH21X014):
                          </strong>{" "}
                          Applicable specifically to 20-Feet High Cube End Open ISO Containers, 34T
                          under ISO 1496:2013 and CSC 1972
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Buttons in Drawer */}
              <div className="space-y-3 pt-4 border-t border-[#d9dfe6]">
                <Button
                  asChild
                  className="w-full h-11 rounded-md bg-[#1b4b96] text-sm font-bold text-white hover:bg-[#143a75]"
                >
                  <SiteLink
                    to={`/contact?product=${encodeURIComponent(selectedModel.name)}#enquiry-form`}
                  >
                    Enquire About This Configuration &rarr;
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-10 rounded-md border-[#d9dfe6] text-xs font-semibold text-[#101820]"
                >
                  <SiteLink to="/resources/product-data-sheets">
                    Browse All Technical Documents
                  </SiteLink>
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Floating Side-by-Side Comparison Pill Bar */}
      {comparedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 rounded-full border border-[#1b4b96] bg-[#0e2a55] px-5 py-3 text-white shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-amber-300" />
            <span className="font-mono text-xs font-bold">
              Comparing ({comparedIds.length}/3 Models):
            </span>
            <div className="flex -space-x-1 overflow-hidden">
              {comparedModels.map((m) => (
                <span
                  key={m.id}
                  className="inline-block rounded-full bg-[#1b4b96] px-2 py-0.5 text-[10px] font-mono font-bold text-white border border-white/20"
                >
                  #{String(m.id).padStart(2, "0")}
                </span>
              ))}
            </div>
          </div>

          <Button
            size="sm"
            onClick={() => setIsCompareOpen(true)}
            data-testid="open-compare-modal-btn"
            className="h-8 rounded-full bg-emerald-500 px-4 text-xs font-bold text-white hover:bg-emerald-600 shadow cursor-pointer"
          >
            Compare Side-by-Side &rarr;
          </Button>

          <button
            type="button"
            onClick={() => setComparedIds([])}
            className="text-white/70 hover:text-white text-xs font-mono underline ml-1 cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}

      {/* Side-by-Side Model Comparison Modal */}
      {isCompareOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Side-by-Side Container Comparison"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsCompareOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#d9dfe6] bg-[#0e2a55] px-6 py-4 text-white">
              <div>
                <span className="font-mono text-xs font-bold text-amber-300">
                  Interactive Model Comparison &middot; Up to 3 Configurations
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Side-by-Side Container Engineering Comparison
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCompareOpen(false)}
                aria-label="Close comparison"
                className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content Table */}
            <div className="overflow-x-auto p-6 max-h-[78vh] overflow-y-auto">
              <table className="w-full border-collapse text-left [font-variant-numeric:tabular-nums]">
                <thead className="sticky top-0 z-20 shadow-xs">
                  <tr className="border-b border-[#0e2a55] bg-[#0e2a55] text-white">
                    <th className="py-3 px-4 font-mono font-bold text-amber-300 uppercase w-48 text-xs">
                      Specification
                    </th>
                    {comparedModels.map((m) => (
                      <th
                        key={m.id}
                        className="py-3 px-4 font-display font-bold text-white text-sm border-l border-white/20 bg-[#0e2a55]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">{m.name}</span>
                          <button
                            type="button"
                            onClick={() => toggleCompare(m.id)}
                            className="text-xs text-rose-300 hover:text-white hover:underline font-mono"
                          >
                            Remove
                          </button>
                        </div>
                        <span className="block font-mono text-xs font-normal text-white/80 mt-0.5">
                          {m.categoryLabel} &middot; {m.nominalSize}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d9dfe6]">
                  {/* Photo row */}
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Visual Photograph
                    </td>
                    {comparedModels.map((m) => {
                      const asset = CONTAINER_MODEL_ASSETS[m.id];
                      return (
                        <td key={m.id} className="py-3 px-4 border-l border-[#d9dfe6]">
                          <div className="aspect-[16/10] overflow-hidden rounded border border-slate-200 bg-slate-100 max-w-[200px]">
                            {asset ? (
                              <img
                                src={asset.src}
                                alt={asset.alt}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-slate-400 font-mono text-xs">
                                Photo
                              </div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* External Dimensions */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      External L × W × H (+0/-5)
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-medium text-[#101820] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.externalDim}
                      </td>
                    ))}
                  </tr>

                  {/* Internal Dimensions */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Internal L × W × H (+0/-5)
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-medium text-[#101820] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.internalDim}
                      </td>
                    ))}
                  </tr>

                  {/* Gross Weight */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Max Gross Weight (M.G.W.)
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-bold text-[#101820] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.grossWeight}
                      </td>
                    ))}
                  </tr>

                  {/* Tare Weight */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Tare Weight
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-medium text-[#44505e] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.tareWeight}
                      </td>
                    ))}
                  </tr>

                  {/* Max Payload */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Max Payload Capacity
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-bold text-emerald-700 [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.maxPayload}
                      </td>
                    ))}
                  </tr>

                  {/* Cubic Capacity */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Cubic Volume
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-bold text-amber-700 [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.cubicCapacity}
                      </td>
                    ))}
                  </tr>

                  {/* Floor Strength */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Floor Strength
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] font-semibold text-[#101820] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.floorStrength}
                      </td>
                    ))}
                  </tr>

                  {/* Stacking Load */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Stacking Test Load
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-sm sm:text-[15px] text-[#44505e] [font-variant-numeric:tabular-nums] border-l border-[#d9dfe6]">
                        {m.stackingTestLoad}
                      </td>
                    ))}
                  </tr>

                  {/* Standard Ref */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Engineering Standard
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 font-mono text-xs text-[#1b4b96] border-l border-[#d9dfe6]">
                        {m.standardRef}
                      </td>
                    ))}
                  </tr>

                  {/* Commercial Advantage */}
                  <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Commercial Advantage
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 text-xs text-[#44505e] leading-relaxed border-l border-[#d9dfe6]">
                        {m.commercialAdvantage}
                      </td>
                    ))}
                  </tr>

                  {/* Action */}
                  <tr className="bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-[#101820] text-sm">
                      Actions
                    </td>
                    {comparedModels.map((m) => (
                      <td key={m.id} className="py-3 px-4 border-l border-[#d9dfe6]">
                        <div className="flex flex-col gap-2">
                          <Button
                            size="sm"
                            onClick={() => {
                              setIsCompareOpen(false);
                              setSelectedModel(m);
                            }}
                            className="h-9 rounded bg-[#1b4b96] text-white hover:bg-[#143a75] text-xs font-bold"
                          >
                            Open Spec Drawer
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="h-9 rounded border-[#d9dfe6] text-xs font-semibold text-[#101820]"
                          >
                            <SiteLink
                              to={`/contact?product=${encodeURIComponent(m.name)}#enquiry-form`}
                            >
                              Enquire for Model &rarr;
                            </SiteLink>
                          </Button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
