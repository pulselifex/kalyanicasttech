# KALYANI CAST TECH LIMITED — OPEN ISSUES & DEPENDENCIES

## Master Blockers, Dependencies & Authorisation Register

- **Date**: 2026-10-16
- **Project**: Kalyani Cast Tech Limited Corporate Website
- **Repository**: `pixel-perfect-painter-750`

---

### 1. Active External Dependencies & Authorisations Required

| Dependency ID | Area                    | Exact Dependency / Information Required                                                                                                                   | Responsible Party              | Current Fallback / Status                                                                                 | Impact on Deployment                                                                                        |
| :-----------: | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
|  **DEP-01**   | **Statutory Contact**   | Verified Registered Office Address, Corporate Headquarters Address, Official Boardline Phone, and Official Corporate Email.                               | Company Secretary / Management | Marked as _"awaiting confirmation against current statutory records"_ in `SiteFooter.tsx` and `/contact`. | **BLOCKER FOR PRODUCTION**: Public corporate site cannot launch without official registered address.        |
|  **DEP-02**   | **Investor Compliance** | Designated Compliance Officer / Company Secretary Name, direct investor grievance email (e.g. `investors@...`), and SEBI SCORES portal registration link. | Company Secretary              | Rendered with standard procedural disclosure and placeholder notification.                                | **BLOCKER FOR STATUTORY COMPLIANCE**: SME/Mainboard listing compliance requires verified grievance contact. |
|  **DEP-03**   | **Enquiry Inbox**       | Approved commercial recipient email address (e.g. `sales@kalyanicasttech.com`, `rfq@...`) and transactional delivery service (Resend / Supabase / SMTP).  | IT Director / Project Owner    | `EnquiryForm.tsx` operates in clean client-side validation preview mode with clear user notice.           | **BLOCKER FOR LIVE ENQUIRIES**: Form data is not delivered to company staff until wired.                    |
|  **DEP-04**   | **Production Domain**   | Official domain name confirmation (e.g. `https://kalyanicasttech.com`) and DNS access for deployment.                                                     | IT Admin / Domain Registrar    | Canonical and OpenGraph tags default to staging preview.                                                  | **PRE-DEPLOYMENT**: Requires configuration during deployment phase.                                         |
|  **DEP-05**   | **Investor Documents**  | Verified PDF copies of Annual Reports, Shareholding Patterns, and Stock Exchange Filings.                                                                 | Finance / Investor Relations   | Statutory investor routes currently render clean, compliant `EmptyState` ("No documents published yet").  | **NON-BLOCKER**: Site can launch with recent disclosures or upload as filings occur.                        |

---

### 2. Risk Mitigation & Anti-Hallucination Protocol

To protect Kalyani Cast Tech Limited from regulatory liability, commercial misrepresentation, and reputational risk, the following non-negotiable rules remain enforced:

1. **Zero Fabricated Claims**: No specifications, load limits, tare weights, or certifications are published without reference to an approved data sheet or certificate.
2. **Strict Operational Status**: The Shivlakha Rail & Logistics platform components are explicitly categorized as **Under Development** or **Planned**; none are presented as operational commercial rakes.
3. **Genuine Photography Only**: Synthetic AI imagery of containers, railway rolling stock, or factories is strictly forbidden. All active photos are authentic high-resolution DSLR masters taken at Rewari Works or the Shivlakha hub.
