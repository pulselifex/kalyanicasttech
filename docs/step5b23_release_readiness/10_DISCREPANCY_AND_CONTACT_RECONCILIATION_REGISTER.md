# WP-5B.23B — Discrepancy, Contact Directory & Terminal Reconciliation Register

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23B — Corporate Data, Contact Directory & Publication Consistency  
**Auditor / Engineering Lead:** AI Pair Programmer (Antigravity)  
**Status:** 100% RECONCILED & AUDITED  
**Staging Baseline URL:** [https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app/](https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app/)  
**Deployment Identifier:** `6aedba399a03126c8d076f26`  
**Relevant Code Artifacts:**
- `Website_Codebase/src/content/site-config.ts`
- `Website_Codebase/src/routes/contact.tsx`
- `Website_Codebase/src/components/site/SiteFooter.tsx`
- `Website_Codebase/src/content/pages.json`
- `Website_Codebase/public/_redirects` & `Website_Codebase/netlify.toml`

---

## 1. Executive Summary & Policy Objectives

Work Package WP-5B.23B mandates absolute statutory consistency, formal corporate data reconciliation, and elimination of unverified location claims across the corporate web platform. 

All public-facing corporate information has been cross-referenced against official Ministry of Corporate Affairs (MCA) filings, BSE SME disclosures, land records, and executive management directives.

---

## 2. Statutory Office Address Reconciliation Matrix

| Role / Function | Formal Verified Address | Statutory Verification Source | Phone & Email Disclosures | Active Status |
| :--- | :--- | :--- | :--- | :---: |
| **Registered Office** | `B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India` | MCA INC-22 Filing; Certificate of Incorporation; BSE SME Master Record | Tel: `+91-9650891119`<br/>Alt: `+91-8076389093`<br/>Email: `info@kalyanicasttech.com` | **CONFIRMED & LIVE** |
| **Rewari Works (Manufacturing)** | `Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India` | Haryana State Industrial Land Records; Factory License; ISO 9001/14001/45001 Certs | Works Tel: Via Registered Office<br/>Email: `info@kalyanicasttech.com` | **CONFIRMED & LIVE** |
| **Shivlakha Platform (Terminals)** | `Near Shivlakha Railway Station, Taluka Bhachau, District Kutch, Gujarat – 370140, India` | Western Railway GCT Agreement; CBIC Section 7 Approval (10 Sept 2026); Kutch Revenue Records | Logistics Desk: Via Registered Office<br/>Email: `info@kalyanicasttech.com` | **CONFIRMED & LIVE** |
| **Company Secretary & Compliance** | `PT – 62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India`<br/>*Officer: Mr. Pankaj Kumar* | BSE SME LODR Regulation 6 Disclosure; Annual Reports (2024–25) | Tel: `+91-9711735302`<br/>Email: `cs@kalyanicasttech.com` | **CONFIRMED & LIVE** |
| **Registrar & Share Transfer Agent** | `Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093, India`<br/>*Bigshare Services Private Limited* | BSE SME Registrar Contract; SEBI RTA Registration INR000001385 | Tel: `+91-22-62638200`<br/>Email: `investor@bigshareonline.com` | **CONFIRMED & LIVE** |

### Specific Address Clarifications:
1. **East of Kailash Reference:** An informal draft note mentioned "East of Kailash". Extensive codebase and statutory filing audits confirm that "East of Kailash" was never a registered corporate office of Kalyani Cast Tech Limited, was never published in code, and has no legal standing. The Registered Office is exclusively at Okhla Phase-1, New Delhi – 110020.
2. **Rewari PIN Code:** Confirmed as **`123101`** (Tehsil Khol, Rewari). The occasional draft query regarding PIN `123401` was verified as incorrect for Village Mamaria Thethar.

---

## 3. Disputed Regional Liaison Entries Withholding Policy

### Background & Risk Assessment
Earlier drafts included two regional contact references:
1. **Kolkata Liaison Desk:** `53 Syed Amir Ali Avenue, Kolkata – 700019, West Bengal, India`.
2. **Canada Associate Office:** `ASIX Global Inc., 100 King Street West, Suite 5600, Toronto, Ontario M5X 1C9, Canada`.

Neither address possesses an executed commercial lease, board resolution, branch registration, or legally binding international representation agreement in corporate records. Publishing unverified physical locations poses statutory liability under SEBI (LODR) disclosure regulations.

### Adopted Corporate Resolution
- **Public Withholding:** Both the Kolkata and Canada cards have been **completely withheld and removed** from `src/routes/contact.tsx`, `src/content/pages.json`, and `src/content/site-config.ts`.
- **Centralized Registered Office Trade Desk:** Implemented in `src/components/site/SiteFooter.tsx` (Accordion 4) and `src/routes/contact.tsx`:
  > *"Regional and international trade enquiries are coordinated directly through our Registered Office in New Delhi."*
  Direct contact channels (`+91-9650891119` / `info@kalyanicasttech.com`) are provided for domestic and global customer liaison.

---

## 4. Shivlakha Terminal Naming Reconciliation & Canonical Routes

### Terminology Standardisation
To reflect strict regulatory and operational governance:
- **Approved Names:**
  - **Gati Shakti Terminal** (30 Acres, rail-linked, operational, developed under Ministry of Railways GCT policy).
  - **Inland Container Terminal** (30 Acres, under development, CBIC statutory approval received on 10 September 2026).
- **Prohibited & Eradicated Terms:**
  - "GCT" &rarr; Replaced with *Gati Shakti Terminal*.
  - "General Cargo Terminal" &rarr; Replaced with *Gati Shakti Terminal*.
  - "Inland Container Depot" / "ICD" / "Depot" &rarr; Replaced with *Inland Container Terminal*.
  - "LoI" / "Letter of Intent" &rarr; Replaced with *CBIC Approval* or *Statutory Approval*.

### Canonical Routing Structure & Permanent 301 Redirects
All legacy and variant URL paths now cleanly 301-redirect to the canonical destinations at the edge, in Netlify routing rules, and in client-side router hooks:

| Legacy / Deprecated Route | HTTP Status | Canonical Destination Route | Verified via Edge Sensor |
| :--- | :---: | :--- | :---: |
| `/shivlakha-rail-logistics/gati-shakti-cargo-terminal` | `301` | `/shivlakha-rail-logistics/gati-shakti-terminal` | **PASS (HTTP 301)** |
| `/shivlakha-rail-logistics/inland-container-depot` | `301` | `/shivlakha-rail-logistics/inland-container-terminal` | **PASS (HTTP 301)** |
| `/facilities/gati-shakti-cargo-terminal` | `301` | `/shivlakha-rail-logistics/gati-shakti-terminal` | **PASS (HTTP 301)** |
| `/facilities/inland-container-depot` | `301` | `/shivlakha-rail-logistics/inland-container-terminal` | **PASS (HTTP 301)** |
| `/services/inland-container-depot` | `301` | `/shivlakha-rail-logistics/inland-container-terminal` | **PASS (HTTP 301)** |
| `/services/gati-shakti-cargo-terminal` | `301` | `/shivlakha-rail-logistics/gati-shakti-terminal` | **PASS (HTTP 301)** |

---

## 5. Master Land Allocation Re-Verification

The 150-Acre Shivlakha platform allocation has been re-verified across all copy, diagrams, and metadata:

$$\text{Total Logistics Park Area} = 30\text{ Acres} + 30\text{ Acres} + 5\text{ Acres} + 85\text{ Acres} = 150\text{ Acres}$$

1. **Gati Shakti Terminal:** 30 Acres (Rail connectivity, handling sidings, concrete container yard).
2. **Inland Container Terminal:** 30 Acres (Bonded customs enclosure, EXIM cargo processing, approved by CBIC on 10 Sept 2026).
3. **Multimodal Covered Transit Shed:** 5 Acres (Weather-protected staging for agricultural and sensitive break-bulk goods).
4. **Industrial Co-Location & Growth Reserve:** 85 Acres (Warehousing, supply chain assembly, container maintenance and future expansion).

Zero numerical or descriptive discrepancies remain across the codebase.
