# WP-5B.30 — Unsupported Claims Remediation Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Senior Corporate Content Auditor & Risk Officer  
**Objective:** Identify and eliminate all unsubstantiated commercial benefit claims, absolute cost-elimination statements, and unverified customer savings assertions across all public routes.

---

## 1. Compliance Standard & Editorial Principle

In accordance with corporate governance directives, commercial claims must never promise customer cost reductions, transit-time advantages, or operational savings unless backed by published comparative engineering studies or formal tariff benchmarks.

### Prohibited Expressions:
- *"Eliminates road repositioning costs"*
- *"Eliminates structural handling costs / cycles"*
- *"Reduces freight costs / guarantees cost savings"*
- *"Eliminates manual labour / spillage"*
- *"Eliminates third-party testing delays"*
- *"Guaranteed transit times / unverified train frequencies"*

---

## 2. Inventory of Remediated Commercial Claims

### Finding 1: Shivlakha Road Repositioning & Handling Costs
- **Affected Route / File:** [`/shivlakha-rail-logistics`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/routes/shivlakha-rail-logistics.index.tsx) (Line 89).
- **Previous Unverified Text:**
  > *"Co-locating container fabrication and wagon engineering directly alongside a mainline rail siding eliminates road repositioning costs and structural handling cycles between factory and dispatch tracks."*
- **Audit Defect:** Makes an absolute customer financial claim without empirical baseline cost data.
- **Remediated Factual Text:**
  > *"Co-located manufacturing infrastructure and rail connectivity are planned to support the movement of containers and railway equipment between manufacturing and rail facilities."*
- **Evidence Verification:** Factual description of physical master plan layout without commercial promises.

---

### Finding 2: Salt & Bulk Cargo Handling Spillage
- **Affected Route / File:** `CargoSolutionsGrid.tsx` (Line 34).
- **Previous Unverified Text:**
  > *"Eliminates spillage and dual handling; 2.6 MT SS tare weight maximizes payload per wagon with zero marine corrosion."*
- **Audit Defect:** Uses superlative "eliminates spillage and dual handling".
- **Remediated Factual Text:**
  > *"Engineered for bulk transport; 2.6 MT SS tare weight provides high payload capacity with 304-grade stainless steel corrosion resistance."*
- **Evidence Verification:** Emphasizes material grade (304 SS) and verified tare weight (2.6 MT).

---

### Finding 3: Bulk Hopper Manual Labour Elimination
- **Affected Route / File:** `CargoSolutionsGrid.tsx` (Line 89).
- **Previous Unverified Text:**
  > *"Eliminates bag tear, moisture contamination, and manual labour; delivers high-throughput mechanical transfer from plant to rail."*
- **Audit Defect:** Makes an unverified operational labour-elimination assertion.
- **Remediated Factual Text:**
  > *"Enclosed hopper container designed for top-hatch loading and gravity bottom discharge, supporting mechanical transfer from plant to rail."*
- **Evidence Verification:** Describes the physical apertures (top hatch and bottom discharge mechanism).

---

### Finding 4: Cylindrical Tank Container Spillage Claim
- **Affected Route / File:** `ContainerCatalog.tsx` (Line 347).
- **Previous Unverified Text:**
  > *"Eliminates spillage and handling losses for liquid cargo with 31.00 m³ volume and 33,000 kg max payload on an ISO-compatible 20' footprint rated for 96,000 kg stacking."*
- **Audit Defect:** Asserts complete loss elimination.
- **Remediated Factual Text:**
  > *"Enclosed cylindrical tank container built for liquid bulk commodities with 31.00 m³ volume and 33,000 kg max payload on an ISO-compatible 20' footprint rated for 96,000 kg stacking."*
- **Evidence Verification:** Focuses on verified volumetric capacity (31.00 m³) and physical stacking rating (96,000 kg).

---

### Finding 5: Bulk Hopper Container Manual Bagging Claim
- **Affected Route / File:** `ContainerCatalog.tsx` (Line 366).
- **Previous Unverified Text:**
  > *"Eliminates manual bagging and spillage for bulk commodities—uses a 473 × 2,730 mm top hatch and bottom discharge..."*
- **Audit Defect:** Asserts complete elimination of manual bagging without customer context.
- **Remediated Factual Text:**
  > *"Engineered for bulk commodities—uses a 473 × 2,730 mm top hatch and bottom discharge (37.00 m³ Hopper, 32,700 kg payload) for silo-to-rail transfer of cement, flyash, clinker, salt, and grains."*
- **Evidence Verification:** Preserves exact hatch dimensions (473 × 2,730 mm) and gross payload (32,700 kg).

---

### Finding 6: In-House Testing Delay Elimination Claim
- **Affected Route / File:** [`/engineering-quality`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/routes/engineering-quality.tsx) (Line 440).
- **Previous Unverified Text:**
  > *"eliminating third-party testing delays and providing verifiable proof of compliance before dispatch."*
- **Audit Defect:** Claims complete elimination of third-party delays.
- **Remediated Factual Text:**
  > *"supporting on-site quality verification and compliance before dispatch."*
- **Evidence Verification:** Factual statement regarding on-site physical load and metallurgical testing equipment.

---

## 3. Preservation of Approved Commercial Disclaimers

The website actively maintains clear commercial disclaimers to ensure transparency:
1. **Modal Evaluation Disclaimer** ([`pages.json`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/content/pages.json)):
   > *"Rail is not automatically cheaper or better for every shipment. The right decision depends on cargo volume, distance, route, frequency, handling, reliability requirements and total logistics cost."*
2. **Shivlakha Operational Disclaimer** ([`shivlakha-rail-logistics.index.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/routes/shivlakha-rail-logistics.index.tsx)):
   > *"The company does not advertise generic transit-time guarantees, published freight discounts, or unverified train frequencies."*

---

## 4. Verification & Status

All public routes have been scanned with automated regex pattern sensors. Zero unsubstantiated cost-reduction claims remain in the codebase.

**VERDICT: REMEDIATION COMPLETE & VERIFIED**
