# WP-5B.31 — Public Content & Internal Label Audit Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.31 — Final Public-Facing Content, Footer, Visual Consistency & Production Candidate Finalisation  
**Date:** 2026-11-10  
**Scope:** Complete Codebase (`Website_Codebase/src/`), Content Registries, Route Templates, Component Headers  
**Target Search Patterns:** `Activity`, `Activity Group`, `Activity Highlights`, developer markers, sequencing notes  

---

## 1. Executive Directive & Audit Context

During the iterative engineering phases of the website modernisation project, internal development labels (such as `Activity A`, `Activity B`, `Activity C`, `Activity Group A/B/C`, `Verified Activity Highlights`, and sequence notes like `3 Profiles in verified sequence`) were introduced into code, route templates, and comments to organize deliverables.

Executive review for final closure required that **all internal engineering terminology be eradicated from public-facing copy, metadata, and JSX structures**, presenting an uncompromising corporate tone throughout.

---

## 2. Forensic Codebase Audit & Remediations

A comprehensive multi-pass AST and substring scan across all 70+ files in `Website_Codebase/src/` was conducted.

### 2.1 Remediation Register

| File Path | Previous Text / Marker | Remediated Corporate Phrasing | Status |
| :--- | :--- | :--- | :--- |
| `src/routes/about-us.tsx` | `<span ...>Activity A</span>` | Badge span removed; preserved heading `Container Manufacturing` | **ERADICATED** |
| `src/routes/about-us.tsx` | `<span ...>Activity B</span>` | Badge span removed; preserved heading `Wagon Manufacturing` | **ERADICATED** |
| `src/routes/about-us.tsx` | `<span ...>Activity C</span>` | Badge span removed; preserved heading `Foundry Unit` | **ERADICATED** |
| `src/routes/leadership.tsx` | `"3 Profiles in verified sequence"` | `"Executive leadership and strategic advisory"` | **REMEDIATED** |
| `src/routes/leadership.tsx` | `"2 Independent Directors chairing core SEBI LODR statutory committees"` | `"Independent Directors chairing core statutory committees"` | **REMEDIATED** |
| `src/content/pages.json` (L101) | `"We keep the scope and status of each activity clear..."` | `"We keep the scope and status of each capability and project clear..."` | **REMEDIATED** |
| `src/content/pages.json` (L2312) | `"We keep the scope and status of each activity clear..."` | `"We keep the scope and status of each capability and project clear..."` | **REMEDIATED** |
| `src/routes/our-journey.tsx` | `{/* Activity Group A/B/C */}` | Clean JSX comments: `1. Container Manufacturing`, etc. | **CLEANED** |
| `src/routes/facilities.tsx` | `{/* Verified Activity Highlights */}` | Clean JSX comment: `{/* Verified Facility Highlights */}` | **CLEANED** |
| `src/routes/engineering-quality.tsx` | `import { Activity } from 'lucide-react'` | Removed unused import `Activity` icon | **REMOVED** |
| `src/components/site/SiteHeader.tsx` | `(Parent)` label in mobile drawer identity | Removed; displays `Kalyani Cast Tech Limited` cleanly | **REMOVED** |

---

## 3. Post-Remediation Verification Scans

### 3.1 Substring Search for Prohibited Terms
A recursive case-insensitive search across `Website_Codebase/src` was executed:

```bash
Search Term: "activity" (case-insensitive)
Target Directory: Website_Codebase/src/
Files Inspected: 74
Matches Found: 0
Status: CLEAN (0 OCCURRENCES)
```

```bash
Search Term: "Activity A" | "Activity B" | "Activity C" | "Activity Group"
Matches Found: 0
Status: ERADICATED (0 OCCURRENCES)
```

```bash
Search Term: "3 Profiles in verified sequence"
Matches Found: 0
Status: ERADICATED (0 OCCURRENCES)
```

---

## 4. Dual-Entity Hierarchy & Regulatory Constraint Audit

To ensure statutory compliance with SEBI LODR and BSE SME listing requirements, strict checks were re-verified across the entire codebase:

1. **Exact Single KMT Sentence:**
   - **Target Sentence:** `"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited"`
   - **Location:** `src/routes/shivlakha-rail-logistics.index.tsx` (Line 265)
   - **Total Occurrences in Entire Codebase:** **Exactly 1**.
2. **Prohibited Phrase "wholly owned subsidiary":**
   - **Total Occurrences in Codebase:** **0**.
3. **Prohibited Technical Claim "216,000 kg" / "216000 kg" Stacking:**
   - **Total Occurrences in Codebase:** **0**.
4. **Primary Navigation Registry:**
   - The primary navigation menu strictly maintains the 8 approved canonical items:
     1. `About Us`
     2. `Leadership`
     3. `Our Journey`
     4. `Manufacturing & Facilities`
     5. `Containers & Solutions`
     6. `Shivlakha Hub`
     7. `Investor Relations`
     8. `Contact Us`

---

## 5. Live Staging Probe Audit

On the deployed Netlify staging instance (`https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app`), edge HTML responses for `/`, `/about-us`, `/leadership`, and `/shivlakha-rail-logistics` confirmed:
- Zero occurrences of `Activity A`, `Activity B`, or `Activity C`.
- Zero occurrences of `3 Profiles in verified sequence`.
- Presence of `"Executive leadership and strategic advisory"`.
- Presence of exact single KMT sentence.
- Zero occurrences of `"wholly owned subsidiary"`.

## 6. Audit Verdict

**PASSED — 100% COMPLIANT**. The website content is completely free of developer labels, maintains a unified corporate tone, and upholds all dual-entity statutory constraints.
