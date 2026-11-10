# WP-5B.23 Release Candidate Status & Outstanding Decisions

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23  
**Release Candidate ID:** `RC-WP5B23-20261106`  
**Git Branch:** `feature/kct-step5b23-release-readiness`  
**Git Commit:** `551d8ce`  
**Staging Baseline Deployment:** `https://6aed8c44d29ce6873c7c2631--kalyanicasttech.netlify.app/`  
**Target Production Domain:** `https://kalyanicasttech.com` (FROZEN — Awaiting Management Approval)

---

## 1. Categorised Release Candidate Inventory

In accordance with prompt Section 8, all elements of the release candidate are strictly categorized:

### 1.1 Confirmed Complete
- **Corporate Entity Architecture:** Pure representation of Kalyani Cast Tech Limited as the sole listed corporate entity (BSE SME: 544023). Exactly two business divisions: Manufacturing Division and Terminal Division.
- **KMT Single-Sentence Governance:** SPV KMT Engineering Private Limited is cited strictly once across the entire site, located exclusively in the introduction of `/shivlakha-rail-logistics`.
- **Terminal Naming Standardisation:** All references across components, routes, and JSON registries standardized to *Gati Shakti Terminal* and *Inland Container Terminal*. All obsolete references ("ICD", "Depot", "LoI", "Cargo Terminal") extirpated.
- **Land Allocation Arithmetic:** 30 Acres (GCT) + 30 Acres (ICT) + 5 Acres (Manufacturing Shed) + 85 Acres (Future Expansion) = 150 Acres harmonised across all pages.
- **Public Interface Hygiene:** No diagnostic timer labels (`4.5s Auto`), developer-style tooltips, or raw numeric slide counters (`01 / 22`) in public view. Slide 1 guaranteed as 20' GP container. Progress dots centered.
- **Sitemap & Robots:** `robots.txt` configured and `sitemap.xml` regenerated with 44 verified canonical URLs.

### 1.2 Passed Automated Verification
- **Vitest Unit & Integration Suite:** 19 out of 19 test files passed (234 of 234 test cases passing, 0 failures).
- **Vite Production Build:** SSR and client bundles compiled with exit code 0.
- **Investor Repository:** 173 verified investor PDFs confirmed on disk and tested for route alignment.
- **Live Netlify Edge Routing:** 24/24 routes tested on live staging endpoint with 100% HTTP 200/301 success.
- **Security Middleware:** CSRF token verification and client IP rate-limiting sensors verified.

### 1.3 Manually Inspected
- **Visual Design & Typography:** Verified across 1440px desktop, 1280px laptop, 768px tablet, and 390px/360px mobile viewports. High contrast typography, generous margins, and no layout shift.
- **Image Prominence & Fidelity:** Authentic factory photography displayed with sharp resolution and high-contrast captions; no AI-generated artifacts.
- **Carousel Usability:** Smooth 4.5s rotation, responsive hover/focus pause, keyboard arrow stepping, and reduced-motion fallback verified.
- **Footer Collapsible Accordions:** Confirmed that all 5 accordion groups initialize in a collapsed state on load and open individually upon click.

### 1.4 Pending Owner Approval
- **Kolkata Regional Office Address:** Management confirmation needed to ratify either *53 Syed Amir Ali Avenue (Shivam Chambers)* or *50, Chowringhee Road*.
- **Canada International Associate Representation:** Management confirmation of corporate agreement and representation rights for *ASIX Global Inc. (Mississauga)* or *Vancouver associate*.

### 1.5 Release Blockers (Pre-Production Cutover)
- **Disputed Regional Liaison Entries:** The unverified Kolkata and Canada entries must be either verified by owner documentation or withheld/removed from the public release build before pointing DNS to `kalyanicasttech.com`.

---

## 2. Outstanding Management Decisions

Prior to pointing the live canonical domain (`kalyanicasttech.com`) to the new deployment, management must execute the following two decisions:

1. **Decision on Regional Offices (Accordion 4):**
   - *Option A (Recommended):* Withhold Accordion 4 from production view, directing all regional enquiries to the Registered Office in New Delhi until formal lease and agency documents are signed.
   - *Option B:* Provide authenticated documentation for the Shivam Chambers (Kolkata) and ASIX Global (Canada) entries to permit immediate publication.
2. **Authorization of Production DNS Cutover:**
   - Formal sign-off on the WP-5B.23 dossier authorizing the merge of the release candidate into `release/kct-website-v1` and execution of `netlify deploy --prod`.

---

## 3. Known Limitations (Non-Blocking)

- **Customs-Bonded Terminal Development:** The Inland Container Terminal is under construction/development (CBIC approval received on 10 September 2026). As clearly stated on the website, commercial container operations and customs clearance services are not yet operational.
- **RDSO Rolling Stock:** Freight wagon models are in RDSO Stage-I concept validation and are clearly marked as conceptual developments, not commercially cleared production stock.
- **Staging Edge Header:** Staging edge responses carry `X-Robots-Tag: noindex` to prevent search engine indexing prior to production cutover.

---

## 4. Final Recommendation

All development, editorial refinement, factual reconciliation, automated testing, and staging deployment verification are complete. The codebase is clean, performant, and secure.

Pursuant to the strict completion criteria of Work Package WP-5B.23:

### Definitive Recommendation:
**READY FOR INDEPENDENT FINAL REVIEW**

*(Condition: Prior to production DNS cutover, management must execute the decision on the disputed Kolkata/Canada liaison entries per Section 2 of this report).*

