# WP-5B.30 — Corporate Information & CIN Verification Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Corporate Compliance Auditor & Senior Technical Lead  
**Audit Target:** Corporate Identity Number (CIN) placement, statutory compliance, and homepage removal verification.

---

## 1. Governance Context & Management Directive

Management issued an explicit instruction:
1. **Remove the CIN from the homepage and shared global footer.**
2. **Retain the CIN in designated Company Information and Statutory areas** (specifically [`About Kalyani — Corporate Information`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/routes/about-us.tsx) and [`Contact — Registered Office`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/routes/contact.tsx)).
3. **Preserve legal accuracy without inventing or modifying statutory numbers.**

---

## 2. Authoritative Corporate Identifiers

| Parameter | Authoritative Statutory Record | Verification Status | Source Reference |
| :--- | :--- | :--- | :--- |
| **Legal Entity Name** | Kalyani Cast Tech Limited | **VERIFIED** | Certificate of Incorporation / BSE SME Filings |
| **Corporate Identity Number (CIN)** | `L26990DL2012PLC242760` | **VERIFIED** | Ministry of Corporate Affairs (MCA) Master Data |
| **BSE SME Scrip Code** | `544023` | **VERIFIED** | BSE India Listed Security Directory |
| **BSE Scrip ID** | `KCT` | **VERIFIED** | BSE India Platform Directory |
| **Date of Incorporation** | 20 September 2012 | **VERIFIED** | RoC Delhi Registration Records |
| **Registered Office** | B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi, South Delhi, Delhi – 110020, India | **VERIFIED** | Statutory Filing Baseline & Notice of AGM |

---

## 3. Placement Audit & Forensic Verification Matrix

| Location / Surface | Expected State | Actual State | Forensic Verification Method |
| :--- | :--- | :--- | :--- |
| **Homepage Hero** (`/`) | **ABSENT** | **ABSENT** | Full DOM inspection (`root.data`); zero occurrences in visible text. |
| **Homepage Divisions & Sections** (`/`) | **ABSENT** | **ABSENT** | Regex scan of `HomePage.tsx`; zero matches. |
| **Shared Global Footer on Homepage** (`/`) | **ABSENT** | **ABSENT** | `SiteFooter.tsx` brand column, accordion, and bottom copyright bar verified free of CIN. |
| **About Kalyani Corporate Info** (`/about-us`) | **PRESENT** | **PRESENT** | Verified in Header Badge (Line 60), Section 2 Overview (Line 165), and Statutory Table (Line 202). |
| **Contact Registered Office Card** (`/contact`) | **PRESENT** | **PRESENT** | Verified in Registered Office card: `...· CIN: L26990DL2012PLC242760` (Line 54). |
| **Structured Data (Organization Schema)** | **RETAINED** | **RETAINED** | JSON-LD schema retains statutory PropertyValue `CIN` for Google search crawler validation (`seo-metadata.test.ts` passing). |
| **Investor Disclosures & Governance** | **RETAINED** | **RETAINED** | Statutory filings, annual reports, and secretarial disclosures retain statutory CIN as legally required by SEBI (LODR). |

---

## 4. Live Edge Telemetry Probe (Deployment `6af2fbd3034f1a7c7b2b172b`)

A live HTTPS inspection script was executed against the active staging candidate URL:

```bash
# Automated Probe Output
[HOMEPAGE /] HTTP Status: 200
[HOMEPAGE /] Visible HTML has CIN: false
[ABOUT US /about-us] HTTP Status: 200
[ABOUT US /about-us] CIN retained in Company Information: true
[CONTACT /contact] HTTP Status: 200
[CONTACT /contact] CIN retained in Registered Office: true
```

### Test Suite Evidence:
- [`src/test/site-footer.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/site-footer.test.tsx):
  ```tsx
  // BSE SME listing code retained; CIN removed from footer per WP-5B.30 management instruction
  expect(screen.getAllByText(/544023/i).length).toBeGreaterThanOrEqual(1);
  expect(screen.queryByText(/L26990DL2012PLC242760/i)).not.toBeInTheDocument();
  ```
  Result: **PASS** (9/9 tests passing).
- [`src/test/about-page.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/about-page.test.tsx):
  ```tsx
  // Confirms CIN displayed in corporate information table
  expect(screen.getByText("L26990DL2012PLC242760")).toBeInTheDocument();
  ```
  Result: **PASS** (26/26 tests passing).

---

## 5. Audit Conclusion

The Corporate Identity Number has been excised from the homepage presentation layer while remaining intact in appropriate statutory and corporate information sections. No legal non-compliance or search schema degradation has occurred.

**VERDICT: FULLY COMPLIANT**
