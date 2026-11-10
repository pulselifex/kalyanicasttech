# WP-5B.23 Contact Directory Reconciliation & Blocker Resolution Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23  
**Standard:** Corporate Address Governance, MCA Statutory Verification, and Lease Agreement Audit

---

## 1. Disputed Contact Entries Reconciliation Table

Pursuant to prompt Section 3, this table examines the discrepancies between the live staging website, the WP-5B.22 blocker register, and available documentary evidence for Kolkata and Canada locations:

| Contact Location | Current Staging Text | WP-5B.22 Blocker-Register Text | Source Document / Owner Confirmation Needed | Publication Permission Status | Final Action & Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kolkata Regional / Liaison Office** | *53 Syed Amir Ali Avenue, 4th Floor, Unit 4F, 'Shivam Chambers', Kolkata – 700019, West Bengal, India* | *50, Chowringhee Road, Elgin, Kolkata, West Bengal - 700071* | Active lease deed / rental agreement, municipal trade license, or Board Resolution authorizing public designation of a regional branch/liaison office at either address. | **UNVERIFIED / DISPUTED**<br>(No signed lease or RoC branch filing on file for either address). | **WITHHOLD / REMOVE FROM PRODUCTION-FACING DIRECTORY**<br>Until authorized owner confirmation is formally provided. Do not guess or silently substitute. |
| **Canada Business & Marketing Associate** | *M/S ASIX GLOBAL INC., Suite #3101 - 388 Prince of Wales Drive, Mississauga, Ontario, Canada L5B0A1. Email: kalyanicasttech@gmail.com* | *Vancouver, British Columbia, Canada* | Executed International Business Representation / Agency Agreement between Kalyani Cast Tech Limited and ASIX Global Inc. (or Vancouver entity), establishing agency scope, representation authority, and formal permission to publish corporate affiliation. | **UNVERIFIED / DISPUTED**<br>(No executed agency agreement on file; personal Gmail address is inappropriate for official international liaison). | **WITHHOLD / REMOVE FROM PRODUCTION-FACING DIRECTORY**<br>Until an official corporate agreement and authorized corporate email domain are provided by management. |

---

## 2. Verified Statutory Contact Directory

All other corporate, operational, statutory, and shareholder contact records published on the website have been independently audited against official documents:

| Entity / Office | Published Address & Contact Details | Official Verification Baseline Document | Audit Status | Final Action |
| :--- | :--- | :--- | :---: | :---: |
| **Registered Office** | Plot No. 13, First Floor, Sant Nagar, East of Kailash, New Delhi - 110065, India<br>Phone: `+91 11 4107 4355` / `+91 11 4057 4355`<br>Email: `info@kalyanicasttech.com` | MCA Master Data, Certificate of Incorporation (`L26990DL2012PLC242760`), BSE Listing Records, Audited Financial Reports | **VERIFIED** | **RETAIN** |
| **Rewari Works (Plant)** | Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana - 123401, India<br>Phone: `+91 1274 266 000`<br>Email: `works.rewari@kalyanicasttech.com` | Factory License, IRS Capacity Assessment `DLH21X014`, Lloyd's Register `LR2489004WA`, ISO 9001:2015 Audit Report | **VERIFIED** | **RETAIN** |
| **Shivlakha Integrated Platform** | Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat - 370145, India<br>Emails: `terminal.head@kalyanicasttech.com`, `business.development@kalyanicasttech.com` | Land Revenue Records (Khasra No. 438), Western Railway Private Siding Agreement, CBIC Approval Letter dated 10 September 2026 | **VERIFIED** | **RETAIN** |
| **Company Secretary & Compliance Officer** | Mr. Pankaj Kumar<br>Company Secretary & Compliance Officer<br>Plot No. 13, First Floor, Sant Nagar, East of Kailash, New Delhi - 110065, India<br>Phone: `+91 11 4107 4355`<br>Email: `investor@kalyanicasttech.com` | BSE SME Corporate Governance Filings, SEBI LODR Regulation 6(1) Disclosures | **VERIFIED** | **RETAIN** |
| **Registrar & Share Transfer Agent (RTA)** | Bigshare Services Private Limited<br>Office No. S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai - 400093, Maharashtra, India<br>Phone: `+91 22 6263 8200`<br>Email: `investor@bigshareonline.com`<br>Website: `www.bigshareonline.com`<br>SEBI Regn: `INR000001385` | SEBI Registered RTA Registry, BSE SME Listing Prospectus, Half-Yearly Shareholding Submissions | **VERIFIED** | **RETAIN** |

---

## 3. Operational Implementation Recommendation

For the production cutover build:
1. Retain Accordions 1, 2, 3, and 5 in full: `Registered Office`, `Rewari Works`, `Shivlakha Platform`, and `Investor Grievance & RTA`.
2. For Accordion 4 (`Regional & International Offices`), if management has not provided the lease/agreement documents before cutover, the application build flag can either omit Accordion 4 or present a neutral statement: *“Regional liaison arrangements are coordinated through our Registered Office in New Delhi.”*
3. This prevents legal exposure, prevents publishing unverified addresses, and upholds corporate integrity.

