# WP-5B.24 — RDSO NEW WAGON DESIGN APPROVAL STATUS REGISTER

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Statutory Context & Ministry of Railways Governance

Research Designs and Standards Organisation (RDSO), Ministry of Railways, Government of India, is the sole statutory technical authority responsible for the design appraisal, technical evaluation, clearance, and type-approval of railway rolling-stock operated on the Indian Railways broad-gauge network.

Under RDSO approval guidelines:
1. **Stage-I Approval:** Represents conceptual design appraisal, feasibility assessment, basic parameter validation, and permission to proceed with detailed design, simulation, and prototyping.
2. **Subsequent Approvals (Stage-II, Prototyping, Oscillation Trials):** Prototype fabrication, instrumentation testing, static structural test, dynamic oscillation trials, speed certification, and Railway Board commercial sanction.

Management policy explicitly mandates that the company's website:
- **Must NOT** claim or imply that the New Wagon Design is commercially available, in series production, or ready for dispatch.
- **Must NOT** describe the wagon as "RDSO Certified" or "Fully Approved by Ministry of Railways".
- **Must ALWAYS** clearly disclose: `"New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval."`

---

## 2. Standardised Corporate Disclosure Policy

| Parameter | Standard Corporate Policy Specification |
| :--- | :--- |
| **Official Heading** | `RDSO Stage-I Approval for New Wagon Design` |
| **Approved Description** | `New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Stage-I approval represents concept validation and does not constitute commercial production clearance or rolling-stock availability.` |
| **Development Status Tag** | `RDSO Stage-I Approved · Progressing Subsequent Approvals` |
| **Associated Visual Asset** | `/assets/wagons/Next-Generation Container Wagon Design.png` |

---

## 3. Cross-Route Implementation Audit

| Route & File | Section / UI Component | Displayed Text / Headline | Status |
| :--- | :--- | :--- | :--- |
| `src/routes/our-journey.tsx`<br>Milestone 2026 | Milestone 7: October 2026 Milestone Card | **Heading:** `RDSO Stage-I Approval for New Wagon Design`<br>**Body:** `New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Stage-I approval represents concept validation and does not constitute commercial production clearance or rolling-stock availability.` | **Verified** |
| `src/routes/manufacturing.index.tsx`<br>Wagon Mfg Section | Activity Group 3 & Summary | **Heading:** `New Wagon Design (RDSO Stage-I Approved)`<br>**Text:** `New Wagon Design: Has received RDSO Stage-I approval and is progressing through subsequent levels of approval.` | **Verified** |
| `src/routes/innovation.tsx`<br>Section 4 (Rolling-Stock Concepts) | Concept Card 2 | **Heading:** `New Wagon Design — Next-Generation Low-Platform Container Flat Wagon`<br>**Text:** `New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Low-deck-height container rail flatcar design study engineered to maximize vertical clearance...`<br>**Badge:** `Status: RDSO Stage-I Approval Received · Progressing Subsequent Approvals` | **Verified** |
| `src/routes/gallery.tsx`<br>News Item & Gallery Item | News Item 1 & Photo `wagon-3` | **News Title:** `RDSO Stage-I Approval for New Wagon Design`<br>**Caption:** `New Wagon Design concept visualization. Design has received RDSO Stage-I approval and is progressing through subsequent approval levels.` | **Verified** |
| `src/routes/investor-relations.tsx`<br>Regulatory Disclosures | Material Disclosures Table | **Entry:** `RDSO Stage-I Approval for New Wagon Design`<br>**Date:** `October 2026`<br>**Category:** `Regulatory & Product Approval` | **Verified** |

---

## 4. Regulatory Defensibility & Verification Sensor

All rolling-stock references strictly align with SEBI (LODR) Regulations, 2015 and RDSO technical appraisal procedures. The Vitest automated sensor suite (`journey-page.test.tsx`, `innovation-page.test.tsx`, `gallery-archive.test.tsx`) validates that this wording is rendered faithfully without regression.
