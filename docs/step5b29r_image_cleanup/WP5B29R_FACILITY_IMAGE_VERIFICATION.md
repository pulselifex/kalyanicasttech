# WP-5B.29R — Facility Image Verification & Spatial Disambiguation

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** PASS — REWARI & SHIVLAKHA STRICTLY DISAMBIGUATED  

---

## 1. Executive Summary & Dual-Facility Operating Model

A critical finding in the management review was the geographic conflation of production facilities:
- Photos of the established container fabrication bays at **Rewari Works (Haryana)** were previously mislabeled or displayed as operational manufacturing sheds at **Shivlakha Hub (Gujarat)**.
- The two-storey administration headquarters at Shivlakha was previously miscaptioned as an "Inland Container Terminal development site".
- The corporate relationship between listed parent **Kalyani Cast Tech Limited** and working SPV **KMT Engineering Private Limited** required strict single-sentence containment.

---

## 2. Facility Boundary Disambiguation Matrix

### 2.1 Rewari Works, Haryana (Established Manufacturing & Foundry)
- **Physical Address:** Khasra No. 12/2, 13/1, Village Mamaria Thethar, Tehsil Bawal, District Rewari, Haryana – 123401.
- **Site Footprint:** 5 contiguous acres with >6,000 sq.m across 4 covered industrial workshop sheds.
- **Operational Status:** Fully operational since September 2012 / January 2014 baseline.
- **Approved Activities:**
  - IS 12117 Class A Ferrous Foundry (induction melting 2,000 kg and 1,000 kg, 10 TPH no-bake moulding).
  - Lloyd's Register EMEA approved container corner castings (LR2489004WA).
  - Freight container structural fabrication, certified MIG seam welding, and paint booth.
  - In-house ISO 1496 structural load-testing facility for container designs (IRS Assessment DLH21X014).
- **Canonical Photography:**
  - Facade & Entrance: `/assets/manufacturing/factory-rewari-facade-01.png`
  - Container Finishing & Staging: `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`
  - MIG Welding Bays: `/assets/manufacturing/manufacturing-container-mig-welding-01.jpg`
  - Paint Booth & Surface Protection: `/assets/manufacturing/manufacturing-container-paint-booth-01.jpg`
  - Testing & Quality Rig: `/assets/manufacturing/manufacturing-container-qc-testing-01.jpg`
  - Corner Castings Batch: `/assets/castings/factory-rewari-corner-castings-01.jpg`

### 2.2 Shivlakha Hub, Gujarat (Integrated Multimodal Logistics Development)
- **Physical Address:** Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145.
- **Master Plan Allocation (150 Contiguous Acres):**
  1. **Gati Shakti Terminal (30 Acres / 20.0%):** Operational. Dedicated broad-gauge railway siding connecting directly to Indian Railways.
  2. **Inland Container Terminal (30 Acres / 20.0%):** Under Construction. CBIC in-principle approval received (10 Sept 2026). Not commissioned or open for bonded cargo.
  3. **Container & Wagon Manufacturing Infrastructure (5 Acres / 3.3%):** Structural fabrication infrastructure developed to support production alongside rail tracks.
  4. **Future Expansion Land Bank (85 Acres / 56.7%):** Reserved land parcel.
- **Canonical Photography:**
  - 150-Acre Multimodal Complex (8K Aerial Drone): `/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg`
  - Operational Siding Rake Handling: `/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg`
  - Permanent Way Infrastructure (Ballast & Sleepers): `/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg`
  - Terminal Platform & Tracks: `/assets/shivlakha/terminal-shivlakha-rail-terminal-01.png`
  - Terminal Staging & Yard Layout: `/assets/shivlakha/terminal-shivlakha-panoramic-aerial-01.jpg`
  - Site Administration & Dispatch Office: `/assets/shivlakha/terminal-shivlakha-admin-office-01.png`
  - Approved Multimodal Master Plan: `/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg`

---

## 3. Eradication of Mislabeled Assets

1. **Mislabeled Fabrication Sheds Removed from Shivlakha:**
   - `Industrial Container Fabrication Workshop.png` (a Rewari shed photo) has been permanently removed from `/shivlakha-rail-logistics` gallery and `ShivlakhaStatus.tsx`.
   - Shivlakha gallery now displays authentic rail terminal infrastructure (`terminal-shivlakha-rail-terminal-01.png`) and permanent way sidings.
2. **Administration Building Mislabeling Corrected:**
   - In `gallery.tsx`, item `ict-1` previously used `Admin Shivlakha.jpeg` to depict the "Customs-Notified Inland Container Terminal Development Site".
   - This was corrected to `/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg` depicting the approved master plan layout of the 30-acre Inland Container Terminal area.

---

## 4. KMT Single-Sentence Constraint Verification

Management established a strict governance boundary:
> *"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited"* must appear strictly once in `/shivlakha-rail-logistics` intro. No "wholly owned subsidiary" phrasing.

- **Source Code Verification (`shivlakha-rail-logistics.index.tsx` lines 264–266):**
  ```tsx
  <p className="border-l-2 border-[#1b4b96] pl-4 font-medium text-[#101820]">
    The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited.
  </p>
  ```
- **Occurrences in Repo:** Exactly 1 occurrence across the entire public-facing route hierarchy.
- **Wholly Owned Subsidiary Check:** 0 occurrences of "wholly owned subsidiary" across all routes and components.
- **Negative Safeguards:**
  - Siding code `KEGS`: 0 occurrences.
  - IR numerical code `08524078`: 0 occurrences.
  - Hardcoded siding length `720 m`: 0 occurrences in uncontrolled prose.

---

## 5. Audit Verdict

**VERDICT: PASS**  
Geographic separation between Rewari Works and Shivlakha Hub is 100% distinct, verified, and free of mislabeled or duplicate assets.
