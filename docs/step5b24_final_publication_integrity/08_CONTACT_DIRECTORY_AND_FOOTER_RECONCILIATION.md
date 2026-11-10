# WP-5B.24 — CONTACT DIRECTORY & FOOTER RECONCILIATION REGISTER

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Corporate Contact Directory Reconciliation

All corporate addresses, telephone numbers, and email routing across the website have been reconciled against the official BSE SME corporate filings (`544023`) and statutory filings with the Ministry of Corporate Affairs (MCA).

| Office / Unit | Physical Address | Telephone | Email | Operational Role |
| :--- | :--- | :--- | :--- | :--- |
| **Registered & Corporate Office** | `B-105, 2nd Floor, Mayapuri Industrial Area, Phase-I, New Delhi – 110064, India` | `+91 11 4057 4444` | `info@kalyanicasttech.com` | Corporate headquarters, executive management, commercial contracting & central administration. |
| **Rewari Works (Manufacturing Plant)** | `Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India` | `+91 11 4057 4444` *(Centralized switchboard)* | `info@kalyanicasttech.com` | Integrated container fabrication, ferrous foundry, in-house testing & prototype development. |
| **Shivlakha Multimodal Platform** | `Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370140, India` | `+91 11 4057 4444` *(Centralized switchboard)* | `info@kalyanicasttech.com` | Gati Shakti Terminal (Operational), ICT (Under dev) & manufacturing shed. |
| **Investor Grievance & Compliance** | `B-105, 2nd Floor, Mayapuri Industrial Area, Phase-I, New Delhi – 110064, India` | `+91 11 4057 4444` | `cs@kalyanicasttech.com` | Dedicated desk for shareholder queries, statutory disclosures & investor relations. |
| **Registrar & Share Transfer Agent (RTA)** | **Bigshare Services Pvt. Ltd.**<br>`Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093, Maharashtra, India` | `+91 22 6263 8200` | `investor@bigshareonline.com` | Share registry, transfer processing & depository reconciliation. |

---

## 2. Footer Structure & Collapsible Accordion Policy

In response to management feedback regarding visual clutter in the page footer, the site footer was streamlined into:
1. **Always-Visible Statutory Identity Bar:**
   - Full corporate name: `Kalyani Cast Tech Limited`.
   - BSE SME Symbol: `544023` (with direct link to BSE portal).
   - CIN: `L26990DL2012PLC242760`.
   - Date of Incorporation: `2012`.
   - Central Phone & Email: `+91 11 4057 4444` & `info@kalyanicasttech.com`.
2. **Four Logical Navigation Columns:**
   - Column 1: `Manufacturing Division` (Overview, Facilities, Products, Quality).
   - Column 2: `Terminal Division` (Overview, Gati Shakti Terminal, Inland Container Terminal, Cargo Opportunities).
   - Column 3: `Investor Relations` (Overview, Governance, Financials, Filings, Grievance).
   - Column 4: `Company & Governance` (About Us, Our Journey, Leadership, Gallery, Contact).
3. **Collapsible Address Accordions (Default Closed):**
   - 5 distinct accordion triggers that allow users to inspect detailed postal addresses without pushing down essential navigation:
     * *Registered Office (New Delhi)*
     * *Rewari Works (Haryana – 123101)*
     * *Shivlakha Platform (Gujarat – 370140)*
     * *Regional & International Enquiries*
     * *Investor Grievance & RTA Details*
   - Fully keyboard accessible (Enter / Spacebar / Tab navigation) and screen-reader compliant (`aria-expanded`, `aria-controls`).

---

## 3. Verification Sensor Results

- Vitest sensor `site-footer.test.tsx` (9 tests) verifies:
  * Always-visible statutory strip contains exact CIN and BSE symbol.
  * All 5 address accordion groups are collapsed on initial page render.
  * Expanding and collapsing each accordion reveals accurate, verified postal parameters.
  * Postal code `123101` and `Tehsil Khol` are rendered in the Rewari Works accordion.
