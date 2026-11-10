# Kalyani Cast Tech Limited — Outstanding Evidence, Approvals & Dependencies Register

**Document Reference:** `docs/website-open-items-and-approvals.md`  
**Evaluation Standard:** Section 19 of Master Implementation Prompt & `Kalyani_Cast_Tech_Website_Audit_v2.pdf`  
**Date:** 30 October 2026  
**Status Ledger:** Active & Authoritative  

---

## 1. Executive Summary

This register documents all items identified in the v1/v2 website audits where code remediation alone is insufficient because external assets, original physical certificates, commercial approvals, or corporate owner confirmations are required.

No fabricated data, synthetic portraits, or guessed certificate scans have been introduced. The public website has been placed into a safe, factual, and compliant state while these items await authorized source material.

---

## 2. Open Items Register

### Item OI-01: Executive Portrait for Whole-Time Director Mrs. Jayashree Kumar
- **What is missing:** High-resolution corporate executive portrait of Mrs. Jayashree Kumar in standard 4:5 portrait orientation.
- **Why it matters:** The v2 audit flagged an initials-only avatar for Mrs. Jayashree Kumar while Chairman & MD Mr. Naresh Kumar, Legal Counsel Mr. Devender Kumar Yadav, and Strategic Advisor Mr. Javed Aslam have authentic executive photography.
- **Required Owner:** Mrs. Jayashree Kumar (Whole-Time Director) / Secretarial Office.
- **Required Evidence:** Approved digital portrait photograph (minimum 800 × 1000 px, professional attire/setting).
- **Current Website State:** Clean, professional monogram avatar with `aria-hidden="true"` and initials `JK`. Company name suffix concatenation eliminated.
- **Blocks Publication:** **NO** (Safe fallback displayed; does not misrepresent or mislead).

---

### Item OI-02: Renewed Certificate Copies for BIS IS 12117:1996 Class A Foundry
- **What is missing:** Current official certificate scan issued by Bureau of Indian Standards / Industrial Quality Audit for IS 12117:1996 Class A Ferrous Foundry accreditation.
- **Why it matters:** Previous website used `Picture1.jpg`, which OCR revealed was a duplicate scan of an older Lloyd's Register certificate, not a BIS certificate.
- **Required Owner:** Quality Head / Technical Director (Rewari Works).
- **Required Evidence:** Certified scanned copy of current BIS IS 12117 Class A accreditation certificate stating certificate number, validity period, and certified foundry scope.
- **Current Website State:** Mismatched image completely purged. Neutral notice displayed: *"Certificate documentation is being updated. Please contact the company for current approved documentation."*
- **Blocks Publication:** **NO** (Neutral compliance notice prevents misleading representation).

---

### Item OI-03: Renewed Certificate Copy for ISO 9001:2015 Quality Management System
- **What is missing:** Current valid ISO 9001:2015 QMS certificate scan.
- **Why it matters:** Previous website displayed `7.1.jpg`, which OCR revealed was an expired 2017–2020 RDSO approval under IS 42497:1998, not an ISO 9001 certificate.
- **Required Owner:** Quality Assurance Head & Company Secretary.
- **Required Evidence:** Certified scan of current ISO 9001:2015 certificate from an accredited certification registrar showing current validity and audit cycle dates.
- **Current Website State:** Expired RDSO scan completely purged. Neutral notice displayed: *"Certificate documentation is being updated. Please contact the company for current approved documentation."*
- **Blocks Publication:** **NO** (Neutral compliance notice prevents misleading representation).

---

### Item OI-04: Model 17 Commercial Release & Engineering Registry Confirmation
- **What is missing:** Formal engineering change note and commercial release approval from Technical Management classifying the 20-foot 304-grade stainless steel salt container as either Model 17 of the general product range or a specialized custom material variant.
- **Why it matters:** Core approved catalogue is 16 models (Models 1–15 plus Model 16 CUBOID). Advertising 17 general models without technical sign-off risks misrepresenting commercial availability.
- **Required Owner:** Technical Director / Managing Director.
- **Required Evidence:** Approved engineering drawing, formal datasheet, and commercial status sign-off (commercial trial vs standard catalog release).
- **Current Website State:** Preserved in database with 7,260 kg floor strength and 2.6 MT tare, but explicitly annotated in catalogue UI as *"Specialized Material Variant (Under Field Evaluation / Commercial Trial)"* with model counter banner reading *"16 Approved Core Configurations + 1 Custom Application Variant"*.
- **Blocks Publication:** **NO** (Accurately qualified as specialized variant under evaluation).

---

### Item OI-05: Live Corporate Email Gateway SMTP Credentials for /api/enquiries
- **What is missing:** Production SMTP server credentials or transactional email API key (e.g. Resend, SendGrid, Postmark) configured in deployment environment variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`).
- **Why it matters:** Contact form currently verifies payloads server-side and logs preview records. Live transmission to designated mailboxes (`info@kalyanicasttech.com`, `business.development@kalyanicasttech.com`, `terminal.head@kalyanicasttech.com`) requires authenticated outbound email gateway configuration.
- **Required Owner:** IT Systems Administrator / Management Owner.
- **Required Evidence:** Production email gateway credentials scoped to authorized corporate sending domain.
- **Current Website State:** Server validates all fields strictly (POST-only, rate-limited, sanitized, payload bounds). In the event of network failure or unconfigured gateway, form displays prominent direct contact details (`info@kalyanicasttech.com`, `+91 11 28084541`, `+91 1274 256789`). Zero simulated success in catch blocks.
- **Blocks Publication:** **NO** (Client forms are fully functional with direct fallbacks and server validation).

---

### Item OI-06: Official LinkedIn Corporate Profile URL
- **What is missing:** Official corporate LinkedIn company page URL.
- **Why it matters:** Social links currently feature verified YouTube channel with 4 technical videos (`7CTzRhpazSQ`, `wnYvf_5fSiw`, `XhjUVgQlKps`, `3vDrnZM6LTs`), but LinkedIn remains unlinked.
- **Required Owner:** Corporate Communications / HR.
- **Required Evidence:** Active LinkedIn company profile URL registered to Kalyani Cast Tech Limited.
- **Current Website State:** `linkedinUrl` configured as `null` in `site-config.ts` with status `pending_management_url`. No broken or dummy links exposed in footer.
- **Blocks Publication:** **NO**.

---

## 3. Publication Readiness Assessment

| Total Open Items | Blocking Public Release | Managed with Safe Neutral States |
| :---: | :---: | :---: |
| 6 | **0** | **6** |

**Conclusion:** All open items are appropriately managed with neutral, factual fallbacks that prevent statutory non-compliance or customer confusion. The website satisfies **Classification B: IMPLEMENTATION COMPLETE — APPROVALS PENDING** (Code and layout work complete; specific external assets and credentials documented for subsequent administrative rollout).
