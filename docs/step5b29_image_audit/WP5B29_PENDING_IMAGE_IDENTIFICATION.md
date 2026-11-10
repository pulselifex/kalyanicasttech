# WP-5B.29 — Pending Image Identification & Governance Register
**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29 (Corporate Website Image Audit, Asset Mapping & Visual Consistency)  
**Role:** Senior Website Visual Director, Digital Asset Manager and Frontend Implementation Lead  
**Governance Status:** DOCUMENTED & MONITORED  
**Date of Audit:** November 10, 2026  
**Repository Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Protected Release Branch:** `release/kct-website-v1` (FROZEN at `f1e26bb`)  

---

## 1. Purpose & Governance Protocol

This register identifies any visual assets, technical parameters, or corporate representations where physical photography is pending engineering release, where master archival negatives are held in secure storage, or where corporate governance requires explicit editorial boundaries.

By documenting these items transparently, Kalyani Cast Tech Limited ensures complete factual integrity, prevents unverified assumptions, and maintains compliance with SEBI LODR, BSE SME listing regulations, and statutory railway engineering standards.

---

## 2. Pending & Unreleased Product Imagery

### 2.1 Model 17: 20ft 304-Grade Stainless Steel Salt Container
- **Current Status:** Specifications Verified & Publicly Listed · Production Photography Pending Engineering Release.
- **Catalogue Entry:** `CONTAINER_MODELS[16]` / `CONTAINER_MODEL_ASSETS[17]`.
- **Approved Technical Specifications:**
  - Standard: ISO 1496 Series-1 / CSC 1972
  - Dimensions: 20′ (L) × 8′ (W) × 8′6″ (H) (External)
  - Gross Weight: 34,000 kg | Tare Weight: 2,400 kg | Payload: 31,600 kg
  - Stacking Capacity: 216,000 kg (9-high stack, 96,012 kg per post)
  - Floor Axle Load: 7,260 kg (Forklift test rating)
  - Material: Corrosive-resistant AISI 304 stainless steel interior lining for bulk food-grade and industrial salt haulage.
- **Visual Implementation on Website:**
  - The website intentionally renders an elegant **"Specifications Available · Production Image Pending Engineering Release"** placeholder card with an amber technical badge and technical drafting icon.
  - The technical parameter drawer renders the full approved engineering specifications without an unverified image.
- **Governance Action:**
  - Once the commercial manufacturing batch is finalized at Rewari Works, official shopfloor photography will be captured and deployed via a standard update work package.
  - No synthetic, third-party, or unverified stock photographs may be substituted.

---

## 3. Master Archival Raw Formats & Non-Runtime Assets

### 3.1 `AST-005`: `Shivlakha GCT_Aerial_3.DNG` (41.51 MB)
- **Source Folder:** `03_Shivlakha_Logistics/Rail n Yard Operations`
- **Asset Description:** Adobe Digital Negative (DNG) raw camera sensor output captured during the September 2026 drone survey of Gati Shakti Terminal.
- **Technical Status:**
  - DNG is an uncompressed sensor format designed for studio archival and color grading, not for direct web runtime delivery.
  - `AST-003` (`Rakehandling_GCT_3.JPG`, 8064 × 6048 px, 12.87 MB) and `AST-004` (`Rakehandling_GCT_4.JPG`, 5280 × 3956 px) serve as the fully graded visual representatives of this survey.
- **Recommendation:** Retained in corporate digital asset management archives. No action required for web runtime.

---

## 4. Dual-Entity Corporate Governance Boundaries

To preserve legal and statutory precision across all visual captions, alt attributes, and associated page copy:

1. **Listed Parent Exclusivity:**
   - **Kalyani Cast Tech Limited** is the sole listed parent entity (BSE SME: 544023).
   - All references to Rewari Works, corporate management, financial disclosures, and patent holdings must reference Kalyani Cast Tech Limited exclusively.
2. **Wholly Owned Subsidiary SPV Rule:**
   - **KMT Engineering Private Limited** is the wholly owned Special Purpose Vehicle (SPV) incorporated as the concessionaire and developer for the Shivlakha Platform.
   - Per Management Clarification 1, KMT may **only** be mentioned in the exact approved single-sentence context within the introduction of the Shivlakha Rail Logistics hub page:
     > *"KMT Engineering Private Limited is a wholly owned subsidiary of Kalyani Cast Tech Limited, serving as the special purpose vehicle (SPV) for developing the Shivlakha Gati Shakti Terminal and multimodal logistics hub."*
   - KMT must **never** be cited as the manufacturer of Rewari containers or listed parent company.
3. **Shivlakha Operational Footprint Disambiguation:**
   - **Operational:** Gati Shakti Terminal (Operational · 30 acres) with dedicated broad-gauge rail siding and concrete wharves.
   - **Under Development:** Inland Container Terminal (30 acres, CBIC customs notified status under process).
   - **Phased Expansion:** Container manufacturing shed (60 acres) and proposed steel foundry (12 acres).

---

## 5. Sign-Off & Maintenance Schedule

This register is maintained by the Digital Asset Management and Corporate Communications teams. Any new photography added to the source dropzones must undergo SHA-256 cataloguing and resolution verification before deployment to the production codebase.

- **Lead Visual Director & Asset Manager:** Antigravity / Gemini 3.8 High
- **Governance Audit Status:** COMPLETE & FROZEN FOR INDEPENDENT REVIEW
