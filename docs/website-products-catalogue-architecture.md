# Kalyani Cast Tech Limited — Products Catalogue Architecture
**Document Reference:** `docs/website-products-catalogue-architecture.md`  
**Revision Date:** 30 October 2026  
**Status:** Approved & Implemented  
**Route:** `/products-applications`

---

## 1. Architectural Strategy & Removal of Fixed Count Rule

Earlier versions of the website enforced a rigid, hardcoded count ("16 configurations", "16 models", "17 models"). Per Section 6 of the Master Implementation Brief (30 October 2026):
- **Eradication of Hard-Coded Counts:** All artificial phrases citing fixed counts have been purged from headings, body copy, and navigation.
- **Data-Driven Model Rendering:** The catalogue renders dynamically from verified engineering specifications.
- **Three-Pillar Division:** The portfolio is structured into three primary industrial categories:
  1. **Containers** (`/products-applications#containers`)
  2. **Wagons** (`/products-applications#wagons`)
  3. **Foundry (Corner Castings)** (`/products-applications#foundry`)

---

## 2. Category 1: Freight Containers Portfolio

The container portfolio encompasses verified designs engineered for standard multimodal shipping and specialized heavy-haul logistics:

| Category | Typical Models | Technical Highlights |
|---|---|---|
| **Standard ISO Series** | 20ft & 40ft GP / High-Cube | Corten steel, ISO 1496 Series-1 tested, 9-high stacking (96,000 kg), timber/steel floors |
| **Double-Stack Dwarf Series** | 40ft & 42ft Dwarf (1,930 mm height) | In-house designed; enables double-stacking under electrified overhead wires (OHE); FRP composite flooring |
| **Heavy-Duty Coiltainers** | 20ft Open-Top Coiltainers | Dedicated well for heavy steel coils, 36 MT lift rating, up to 71 MT chassis rating, anti-shifting wedges |
| **Tank & Hopper Containers** | 31 m³ Liquid Tanks & 37 m³ Bulk Hoppers | Food-grade/chemical liquid transport and bottom-gravity discharge hoppers for cement, salt, minerals |
| **CUBOID Parcel Boxes** | 12.5 m³ Modular BLC Box | 3-tier modular racking carrying 10 motorbikes or 4 three-wheelers; 270 boxes per 45-wagon rake |
| **Custom & Specialised** | Stainless Steel Salt, Open-Tops, Side-Doors | Jindal 304-grade stainless steel salt containers, side-access doors, heavy aggregate containers |

---

## 3. Category 2: Railway Wagons (Rolling Stock)

- **Development Stage:** Under active development at Shivlakha platform (Target Commissioning: Q4 FY 2026–27).
- **Regulatory Milestones:** Secured formal **RDSO Stage-I Concept Design Approval** on 26 October 2026 for specialised railway freight wagons.
- **Planned Execution:** ~2,400 wagons/annum licensed capacity integrated directly with the 720 m broad-gauge private rail sidings at Shivlakha.
- **Configurations Under Development:**
  - Container Flat Wagons (BLC / BLSS equivalents for ISO, domestic, and dwarf boxes)
  - Bi-Level Automotive Car Carriers
  - Heavy Steel Coil Wagons with integrated securing frames

---

## 4. Category 3: Foundry & Railway Castings

- **Plant Location:** Rewari Works (Mamaria Thethar, District Rewari, Haryana).
- **Capacity & Pour Range:** 20 kg to 2,000 kg single-piece castings across cast steel, SG (ductile) iron, and graded grey iron.
- **Accreditation:** Classified as IS 12117:1996 Class A Foundry; holds **Lloyd's Register Foundry Approval (LR2489004WA)** valid through 30 June 2027.
- **Core Product:** ISO 1161 container corner castings manufactured in annealed killed carbon-manganese steel, plus rolling-stock brake beams, centre pivots, and draft gear components.

---

## 5. Verification Sign-off
- Headline applied: *"The cargo picks the container. We engineer it."*
- Jump anchors verified: `#containers`, `#wagons`, `#foundry` operational.
- All references to "16 configurations" replaced with dynamic descriptions.

