# WP-5B.25 — Search Console & Analytics Readiness Plan

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25  
**Topic:** Post-Publication Search Console Configuration, Indexation Workflow & Privacy-Preserving Analytics  
**Canonical Production Domain:** `https://kalyanicasttech.com` (FROZEN pending explicit authorisation)  
**Date:** 6 November 2026  

---

## 1. Executive Intent & Governance Boundary

In strict compliance with Section 11 of WP-5B.25:
- **No False Connectivity Claims:** We do not claim that Google Search Console or Bing Webmaster Tools are currently connected to the production domain, because `https://kalyanicasttech.com` remains frozen and DNS controls reside exclusively with corporate management.
- **No Staging Traffic Substitution:** Staging preview metrics are never used as a proxy for organic search rankings or real user demand.
- **Minimal, Privacy-Friendly Tracking:** Measurement architecture is designed around genuine commercial enquiry conversions and investor document access, without invasive third-party ad tracking pixels or cross-site fingerprinting.

---

## 2. Google Search Console (GSC) Production Onboarding Plan

Upon management authorisation to publish the website to `https://kalyanicasttech.com`, the following verification and submission sequence should be executed:

### Step 1: Domain-Level Ownership Verification
- **Recommended Method:** DNS TXT Record via domain registrar (e.g., Cloudflare, GoDaddy, or National Internet Exchange of India).
- **DNS Record Configuration:**
  - Type: `TXT`
  - Name / Host: `@` (or `kalyanicasttech.com`)
  - Value: `google-site-verification=<unique_verification_token_supplied_by_google>`
  - TTL: `3600` (1 hour)
- **Fallback Method:** HTML Meta Tag in `src/routes/__root.tsx` (`<meta name="google-site-verification" content="..." />`) or verification HTML file uploaded to `public/`.

### Step 2: Production XML Sitemap Submission
- **Sitemap URL to Submit:** `https://kalyanicasttech.com/sitemap.xml`
- **Expected Indexable URL Count:** Exactly 16 canonical indexable URLs.
- **Monitoring Alerts:** Monitor for any crawl errors, blocked resources, or inadvertent redirect submissions.

### Step 3: Priority Indexing Inspection Order
Immediately request URL Inspection and live testing for priority pages in the following sequence:
1. `https://kalyanicasttech.com/` (Homepage)
2. `https://kalyanicasttech.com/about-us` (Corporate Profile)
3. `https://kalyanicasttech.com/products-applications` (Container Catalogue & Castings)
4. `https://kalyanicasttech.com/facilities` (Rewari Works Manufacturing Plant)
5. `https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal` (Operational GCT Siding)
6. `https://kalyanicasttech.com/engineering-quality` (Structural Load Testing Rig)
7. `https://kalyanicasttech.com/investor-relations` (BSE SME Statutory Disclosures)
8. `https://kalyanicasttech.com/contact` (Commercial Enquiry Desk)

---

## 3. Bing Webmaster Tools & IndexNow Integration

- **Bing Webmaster Tools Verification:** Authenticate via verified Google Search Console account or domain DNS CNAME/TXT record.
- **IndexNow Protocol (Optional):** Enables instant push notification to Microsoft Bing and Yandex whenever product data sheets or statutory investor filings are updated, bypassing passive crawl delays.

---

## 4. B2B Commercial Conversion & Event Tracking Architecture

A privacy-preserving analytics framework should be configured to track genuine B2B commercial intent across four critical interaction categories:

```
+-------------------------------------------------------------------------------+
|                      B2B CONVERSION TRACKING CATEGORIES                       |
+-------------------------------------------------------------------------------+
|                                                                               |
|  1. Commercial Enquiry Submissions (Form Submit)                             |
|     - Event: 'enquiry_form_submit'                                            |
|     - Parameters: enquiry_kind ('container' | 'logistics' | 'general')        |
|     - Success Destination: High-contrast modal confirmation                   |
|                                                                               |
|  2. Direct Executive & Commercial Contact Clicks                              |
|     - Tel Clicks: 'contact_tel_click' (+91-9650891119 / +91-8076389093)      |
|     - Sales Email: 'contact_email_click' (info@kalyanicasttech.com)           |
|     - Terminal Email: 'terminal_email_click' (terminal.head@kalyanicasttech.com)|
|     - Investor Email: 'investor_email_click' (cs@kalyanicasttech.com)         |
|                                                                               |
|  3. Technical Specification & Data Sheet Downloads                            |
|     - Event: 'brochure_download'                                              |
|     - Parameters: file_name, file_category ('container_sheet' | 'brochure')   |
|                                                                               |
|  4. Investor Statutory PDF Access                                             |
|     - Event: 'investor_filing_view'                                           |
|     - Parameters: filing_type ('financial_result' | 'annual_report' | 'lodr') |
|     - Parameter: period ('FY24-25', 'Q1-2026', etc.)                          |
+-------------------------------------------------------------------------------+
```

---

## 5. Privacy, GDPR & Digital Personal Data Protection (DPDP) Compliance

1. **Zero Cookie Banner Necessity for Core Tracking:** If using privacy-first analytics (such as Plausible, Cloudflare Web Analytics, or cookieless GA4 with `client_storage: 'none'`), no persistent tracking cookies are written to visitor devices, eliminating intrusive cookie consent popups.
2. **IP Anonymization:** Client IP addresses are truncated at the edge before storage (`ClientIP: 192.168***` in enquiry logger).
3. **Form Data Security:** Commercial enquiry forms validate strictly on serverless edge functions with CSRF tokens, honeypot spam traps, and per-minute rate limiting (5 req/min/IP). No sensitive personal data is logged in plain text.

---

## 6. Post-Launch Review Checklist

- [ ] Confirm DNS records resolved to Netlify production server.
- [ ] Submit `sitemap.xml` in Google Search Console.
- [ ] Verify SSL certificate issued for `kalyanicasttech.com` and `www.kalyanicasttech.com`.
- [ ] Inspect HTTP 301 canonical redirect from `http://` to `https://` and `www.` to root.
- [ ] Perform live GSC URL Inspection on the 16 canonical routes.
- [ ] Audit Search Console Coverage report at 7 days and 30 days post-launch.

**Readiness Status:** BLUEPRINT ESTABLISHED — READY FOR POST-LAUNCH DEPLOYMENT.
