# Kalyani Cast Tech Limited — Certificate & Statutory Integrity Register
**Document Reference:** `docs/website-certificate-integrity-register.md`  
**Revision Date:** 30 October 2026  
**Status:** Approved & Implemented  
**Core Reference:** Master Implementation Brief (Sections 10 & 15)

---

## 1. Executive Summary

This register audits every statutory approval, accreditation, quality certificate, and corporate registration displayed or cited on the Kalyani Cast Tech Limited website.

It reconciles discrepancies noted in earlier website audits (including Lloyd's Register certificate number variations, BIS classification status, ISO 9001 certificates, and IRS capacity references), ensuring 100% legal veracity and documentary defensibility.

---

## 2. Statutory Corporate Identifiers

| Identifier | Value | Statutory Authority | Verification Status |
|---|---|---|---|
| **CIN** | `L26990DL2012PLC242760` | Ministry of Corporate Affairs (MCA), Govt of India | Verified Active |
| **BSE SME Scrip Code** | `544023` | Bombay Stock Exchange (BSE Limited) | Listed Nov 2023 |
| **ISIN** | `INE0N6U01018` | NSDL / CDSL | Active Demat |
| **Incorporation Date** | 20 September 2012 | Registrar of Companies, NCT of Delhi & Haryana | Verified |
| **Western Railway GCT Code** | Alpha: `KEGS` · Numeric: `08524078` | Western Railway / Ministry of Railways | Active Commercial Siding |

---

## 3. Technical & Engineering Certifications Audit

### A. Lloyd's Register Foundry Approval
- **Discrepancy in earlier draft:** Some references cited expired `LR21254575WA`, while others cited active `LR2489004WA`.
- **Approved Resolution:** The active, current certificate is **`LR2489004WA`**, issued under Lloyd's Register Rules for Materials (Chapter 4, Section 9).
- **Approved Scope:** Container corner castings cast in annealed killed carbon-manganese steel up to 18.00 kg piece weight.
- **Validity:** Valid from 1 July 2024 through **30 June 2027**.
- **Display Status:** Live scan and download available in `CertificatesGallery.tsx`.

### B. Indian Register of Shipping (IRS) Capacity Assessment
- **Certificate Reference:** **Report No. DLH21X014**
- **Standard:** ISO 1496:2013 and CSC 1972 Convention
- **Verified Scope:** Capacity to manufacture ≥1,000 ISO freight containers (20ft High Cube End Open 34T rating).
- **Facility:** Rewari Works (Mamaria Thethar, Haryana).
- **Display Status:** Live scan and download available in `CertificatesGallery.tsx`.

### C. Indian Register of Shipping (IRS) Competent Manufacturer
- **Certificate Reference:** Competency Assessment under IRS Rules and CSC 1972
- **Verified Scope:** Approved manufacturer for structural container fabrication, certified welding, surface preparation, and quality assurance.
- **Display Status:** Live scan and download available in `CertificatesGallery.tsx`.

### D. Bureau of Indian Standards (IS 12117:1996 Class A Foundry)
- **Status in Codebase:** Properly marked as *"Under Document Update"* in `CertificatesGallery.tsx`.
- **Operating Rule:** No fabricated or outdated scans are shown. The physical capabilities of the foundry (cast steel and SG ductile iron from 20 kg to 2,000 kg single pours) are accurately described.

### E. ISO 9001:2015 Quality Management System
- **Status in Codebase:** Properly marked as *"Under Document Update"* in `CertificatesGallery.tsx`.
- **Operating Rule:** No placeholder or third-party scans are displayed.

---

## 4. Official Address Directory (6 Verified Blocks)

1. **Registered Office:**  
   B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India  
   Tel: `+91-9650891119` / `+91-8076389093` · Email: `info@kalyanicasttech.com`
2. **Corporate & Works Office (Rewari Works):**  
   Village Mamaria Thethar, District Rewari, Haryana – 123101, India  
   Tel: `+91-8076389093` / `+91-9650891119` · Email: `business.development@kalyanicasttech.com`
3. **Shivlakha Terminal Office (KMT Engineering Pvt Ltd):**  
   Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India  
   Email: `terminal.head@kalyanicasttech.com`
4. **Investor Relations & Secretarial Office:**  
   PT-62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India  
   Tel: `+91-9711735302` / `+91-8816984205` · Email: `cs@kalyanicasttech.com`
5. **Registrar & Share Transfer Agent (Bigshare Services Pvt Ltd):**  
   Office No. S6-2, 6th Floor, Pinnacle Business Park, Mahakali Caves Road, Andheri (East), Mumbai – 400093  
   Tel: `+91-22-6263-8200` · Email: `info@bigshareonline.com`
6. **Associate / Regional Liaison:**  
   Kolkata Regional Liaison Desk & Canada Business Associate (Enquiry routing through `info@kalyanicasttech.com`).

---

## 5. Verification Sign-off
All certificate codes, validity horizons, and statutory details in `src/content/site-config.ts` and `src/components/site/CertificatesGallery.tsx` match this register exactly.

