# Kalyani Cast Tech Limited — Functional QA & Verification Report
**Document Reference:** `docs/website-content-functional-qa-report.md`  
**Execution Date:** 30 October 2026  
**Test Suite:** Vitest v4.1.12  
**Build Environment:** Vite v8.1.5, TanStack Start, Tailwind CSS v4, Netlify SSR Target  
**Status:** 100% Pass (37/37 Automated Sensor Assertions Passed)  

---

## 1. Automated Test Sensor Results
All test suites executed within `Website_Codebase` passed with zero errors and zero warnings:

```text
 RUN  v4.1.12 D:/Kalyani Tech/Kalyani Records/Company Presentation & Brochure/Kalyani Website/Website Content n Working/Website_Codebase

 ✓ src/test/legacy-redirects.test.ts (7 tests) 53ms
 ✓ src/test/enquiry-handler.test.ts (12 tests) 83ms
 ✓ src/test/content-search.test.ts (2 tests) 17ms
 ✓ src/test/shivlakha-masterplan.test.tsx (7 tests) 993ms
 ✓ src/test/tools.test.tsx (8 tests) 1549ms
 ✓ src/test/app-routing.test.tsx (1 test) 20ms

 Test Files  6 passed (6)
      Tests  37 passed (37)
   Start at  16:08:10
   Duration  8.30s (transform 3.26s, setup 3.02s, import 7.30s, tests 2.72s, environment 17.69s)
```

---

## 2. Production Build Verification
The production build was executed locally using the active Netlify deployment target configuration:
- Client compilation: `dist/client/` built successfully in 25.36s.
- Server SSR compilation: `dist/server/` built successfully in 2.52s.
- Redirects & Canonical Routing: `public/_redirects` verified and synchronized to `dist/client/_redirects`.
- Zero JSX, TypeScript, or asset bundling errors.

---

## 3. Page-by-Page Functional & Visual Inspection

### 3.1 Board & Management (`/leadership`)
- **Section Order:** Verified sequence:
  1. Management Team (3 profiles: Naresh Kumar, Jayashree Kumar, Devender Kumar Yadav).
  2. Promoter Group – Experience & Strategic Contribution (3 profiles: Javed Aslam, Jay Bhagnani, Naresh Kumar).
  3. Independent Directors (2 profiles: Kumar Sharat Chandra, Sanjeev Negi).
  4. Key Personnel (3 profiles: Amit Kumar, Pankaj Kumar, Ratnesh Mahajan).
- **Portrait Dimensions:** Consistent 4:5 aspect ratio cards with neutral border containment and object-top alignment.
- **Responsive Layout:** 3-column on desktop (`lg:grid-cols-3`), 2-column on tablet (`md:grid-cols-2`), 1-column on mobile.
- **Copy Check:** Verified exact bio copy for Javed Aslam, Jay Bhagnani, and Naresh Kumar.

### 3.2 Facilities & Locations (`/facilities`)
- **Concise Copy:**
  - Rewari: *"Foundry and container manufacturing."*
  - Shivlakha: *"Container manufacturing and an expanding rail-linked logistics hub."*
- **Customer Technical Audits:** Shortened sentence verified; security clearances and PPE sentence removed.
- **Card Balance:** Side-by-side comparison panels maintain identical padding, typography, and visual balance.

### 3.3 Shivlakha Rail & Logistics (`/shivlakha-rail-logistics`)
- **Identity:** Breadcrumb, hero heading, and content use **"Shivlakha Integrated Rail & Logistics Hub"**.
- **Readiness Section:** Introductory disclaimer paragraph block removed; 4 component cards rendered directly.
- **Component Sequence:** Verified 1. Container Manufacturing &rarr; 2. GCT &rarr; 3. Wagon Manufacturing &rarr; 4. ICD.
- **Component Copy:**
  - Container capacity: Qualified with 10,000 units stated / 25,000 expansion target by Q4 FY 2026–27.
  - GCT: Inauguration date 15 September 2026 clearly stated.
  - Wagon Manufacturing: Target Q4 FY 2026–27 prominently displayed under development.
  - ICD: Concise LoI copy with management target Q1 FY 2027–28; unwanted land/layout details omitted.

### 3.4 Milestones Ledger (`#milestones-2026`)
- Verified total removal of 20 August 2026 milestone.
- Verified 100% eradication of the phrase *"Rewari-built containers"*.
- Remaining milestones reflect authorized Western Railway, CBIC, and RDSO records.

### 3.5 Global Navigation & Menus
- **Desktop Navigation:** "Resources" removed from `navGroups`. Navigation items now cleanly span:
  - About Us
  - Containers & Solutions
  - Manufacturing & Quality
  - Shivlakha Hub
  - Investor Relations
  - Contact
- **Mobile Drawer:** Resources menu item removed; drawer functions cleanly with zero layout shift.
- **Footer Links:** Resources link updated to point to `/engineering-quality` (*"Engineering & Quality Certifications"*).
- **Internal Links:** All internal links tested; zero broken links.

---

## 4. Codebase Terminology Search Sensor
A project-wide scan confirmed zero remaining occurrences of outdated phrases:
| Pattern Checked | Occurrences in `src/` | Status |
|---|---|---|
| `Rewari-built` | 0 | Cleared |
| `20 August` | 0 | Cleared |
| `Shivlakha Platform` | 0 | Cleared |
| `Shivlakha Node` | 0 | Cleared |
| `GCT Node` | 0 | Cleared |
| `Logistics Node` | 0 | Cleared |
| `Rail Node` | 0 | Cleared |
| `Development Node` | 0 | Cleared |
| `Separated by Readiness` | 0 | Cleared |

---

## 5. Outstanding Defects & Tests Not Performed
- **Outstanding Defects:** None. All acceptance criteria from the implementation brief are satisfied.
- **Tests Not Performed:** Physical end-to-end multi-region mobile browser farm testing (covered by desktop browser responsive simulation down to 320px viewport).
