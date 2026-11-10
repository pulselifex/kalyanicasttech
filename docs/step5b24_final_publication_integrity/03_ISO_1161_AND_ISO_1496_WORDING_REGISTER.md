# WP-5B.24 — ISO 1161 & ISO 1496 WORDING & TECHNICAL CLAIM REGISTER

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Statutory Context & Principles

In the freight container and railway rolling stock industries, international technical standards specify dimensions, tolerances, testing procedures, and performance requirements. Regulatory integrity demands strict precision when distinguishing between:
1. **Foundry Shop Approval:** Third-party assessment of the casting foundry, metallurgy, processes, and quality management (e.g. Lloyd's Register Certificate `LR2489004WA`).
2. **Standard Specification Compliance:** Manufacturing products in geometric and metallurgical conformity with a published standard (e.g. `ISO 1161:2016` Series 1 freight containers — Corner and intermediate fittings).
3. **Container Design Compliance:** Designing and fabricating container bodies to meet the structural strength and testing requirements of a standard (e.g. `ISO 1496-1:2013` Series 1 freight containers — Specification and testing — Part 1: General cargo containers for general purposes).
4. **In-House Testing Facility:** Internal test rigs and fixtures utilized for prototype proof-testing and factory acceptance, which do not themselves constitute third-party type certificates.

---

## 2. Definitive Codebase Before & After Audit

| Source File & Location | Previous Text / Claim | WP-5B.24 Corrected & Defensible Wording | Compliance Principle Enforced |
| :--- | :--- | :--- | :--- |
| `src/routes/facilities.tsx`<br>Line ~170 | *"Container Corner Castings (Lloyd's Register certified ISO 1161 container corner castings)"* | *"Container Corner Castings: Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari foundry with Lloyd's Register foundry shop approval."* | Removes claim that product itself is "Lloyd's certified ISO 1161"; clarifies foundry shop approval under certificate LR2489004WA. |
| `src/routes/facilities.tsx`<br>Line ~220 | *"ISO 1496 Series-1 Stacking & Racking Rig"* | *"In-House ISO 1496 Container Testing Facility"* | Identifies the rig as an in-house proof-testing facility, avoiding confusion with an external accredited testing laboratory. |
| `src/routes/products-applications.tsx`<br>Line ~210 | *"Lloyd's Register certified ISO 1161 container corner fittings"* | *"Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari foundry with Lloyd's Register foundry shop approval (Certificate LR2489004WA)."* | Aligns product catalog with statutory legal disclosures. |
| `src/routes/products-applications.tsx`<br>Card 6 Header | *"ISO 1161 Certified Corner Castings"* | *"Manufactured to ISO 1161 Specifications"* | Eliminates false product certification headline. |
| `src/components/site/ContainerCatalog.tsx`<br>Model 1 (20ft GP) | `standardRef: "ISO 1496-1:2013 Certified"`<br>`commercialAdvantage: "Fully certified to ISO 1496 Series-1..."` | `standardRef: "Manufactured and designed to comply with ISO 1496 Series-1 requirements."`<br>`commercialAdvantage: "Manufactured and designed to comply with ISO 1496 Series-1 requirements. Stacking rated to 216,000 kg."` | Eradicates "Certified" claim while highlighting high structural stacking rating. |
| `src/components/site/ContainerCatalog.tsx`<br>Model 2 (20ft HC) | `standardRef: "ISO 1496-1:2013 Certified"`<br>`commercialAdvantage: "Certified ISO 1496-1 Series-1..."` | `standardRef: "Manufactured and designed to comply with ISO 1496 Series-1 requirements."`<br>`commercialAdvantage: "Manufactured and designed to comply with ISO 1496 Series-1 requirements. 9.5-foot exterior profile."` | Enforces exact mandated compliance terminology. |
| `src/routes/engineering-quality.tsx`<br>Section 3 Header | *"ISO 1496 Series-1 Stacking & Racking Test Rig"* | *"In-House ISO 1496 Structural Load-Testing Facility"* | Standardises heading across the engineering narrative. |
| `src/routes/engineering-quality.tsx`<br>Corner Casting Caption | *"Corner casting with Lloyd's Register ISO 1161 certification stamp"* | *"Corner casting manufactured as per ISO 1161 specifications at Rewari Works foundry with Lloyd's Register foundry shop approval"* | Eliminates "certification stamp" implication; references approved manufacturing process. |
| `src/routes/our-journey.tsx`<br>Milestone 2024 | *"Lloyd's Register ISO 1161 container corner casting approval received"* | *"Lloyd's Register Foundry Approval received for Corner Castings manufactured as per ISO 1161 specifications at Rewari Works (Certificate LR2489004WA)"* | Accurately describes milestone as foundry approval. |
| `src/routes/gallery.tsx`<br>Item cc-1 Title & Caption | Title: *"ISO 1161 Corner Castings"*<br>Caption: *"Lloyd's Register certified ISO 1161 container corner castings..."* | Title: *"Container Corner Castings"*<br>Caption: *"Container corner castings manufactured as per ISO 1161 specifications at Rewari Works ferrous foundry with Lloyd's Register foundry shop approval."* | Reconciles corporate photo gallery. |
| `src/components/site/ManufacturingMegaMenu.tsx`<br>Line 42 | *"ISO 1496 Series-1 test rig, 40-tonne UTM..."* | *"In-house ISO 1496 testing facility, 40-tonne UTM, minus 45°C sub-zero impact testing, USFD and MPI."* | Mega-menu navigation copy reconciled. |
| `src/content/pages.json`<br>Lines 906, 2535 | *"Lloyd's Register certified ISO 1161 corner castings"* | *"Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari foundry with Lloyd's Register foundry shop approval."* | Canonical metadata synchronized. |

---

## 3. Automated Verification

- Automated tests in `engineering-quality.test.tsx`, `products-applications.test.tsx`, `facilities-page.test.tsx`, and `navigation-mega-menu.test.tsx` pass without regression.
- Global codebase text search confirms zero remaining instances of `"certified ISO 1161"` or `"ISO 1496 Series-1 Certified"`.
