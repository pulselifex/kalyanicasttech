# KALYANI CAST TECH LIMITED — NEXT STAGE EXECUTION PLAN

## Prioritised Implementation, Remediation & Hardening Roadmap

- **Date**: 2026-10-16
- **Architecture**: TanStack Start / React 19 / Nitro SSR / Tailwind CSS v4
- **Project Root**: `pixel-perfect-painter-750`
- **Status**: Stage A & Stage B Complete. Hardening Phase Active.

---

### 1. Issue Priority Classification Matrix

Issues and tasks are classified strictly according to operational impact, data integrity, and compliance:

```
PRIORITY CLASSIFICATION SCHEME:
├── P0 (Critical / Blocker): Security, data loss, fatal build/runtime crashes.
├── P1 (High / Commercial): Broken navigation, critical responsive defects, false/unsupported claims, nonfunctional primary enquiry path.
├── P2 (Medium / Polish): Missing approved imagery/documents, incomplete page composition, accessibility and SEO defects.
└── P3 (Low / Enhancement): Animations, micro-interactions, optional UI enhancements.
```

---

### 2. Prioritised Issue Inventory & Status

| Priority |     ID     | Category                         | Description                                                                                                                  | Proposed / Executed Solution                                                                                                                     |          Status           |
| :------: | :--------: | :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------: |
|  **P1**  | **ISS-01** | **Asset Authenticity**           | Reliance on CDN JSON pointers and hatched `ImageSlot` boxes instead of real company photos.                                  | Upgraded `ImageSlot.tsx` to dual-mode, updated logo to local master, and created `route-assets.ts` mapping 15 key routes to authentic photos.    |       **RESOLVED**        |
|  **P1**  | **ISS-02** | **Document Access**              | Corporate brochure and RDSO certificate pages rendered empty states.                                                         | Integrated direct downloads for Brochure 1 (1.43 MB), Brochure 2 (3.23 MB), Master PDF, RDSO certificate, and Investor PPTX.                     |       **RESOLVED**        |
|  **P1**  | **ISS-03** | **Enquiry Path**                 | `EnquiryForm.tsx` validates client-side but has no backend delivery.                                                         | Prepared serverless delivery specification (Resend / Supabase / SMTP). Retain safe, explicit preview mode pending client recipient confirmation. | **PENDING CLIENT ACTION** |
|  **P2**  | **ISS-04** | **Statutory Contact**            | Registered office address and Compliance Officer contact on `/contact` and `/investors` are marked as awaiting confirmation. | Retain strict placeholder notices until Company Secretary supplies certified registered office address.                                          | **PENDING CLIENT ACTION** |
|  **P2**  | **ISS-05** | **Prettier / Linter Formatting** | ESLint / Prettier reports Windows CRLF line-ending discrepancies across source files.                                        | Configure `.gitattributes` to enforce `text=auto eol=lf` or run `npm run lint -- --fix`.                                                         |      **IN PROGRESS**      |
|  **P2**  | **ISS-06** | **SEO Canonical Domain**         | `pageHead()` currently references `https://staging.kalyanicasttech.com`.                                           | Update canonical domain generator to support configurable production base URL (`https://kalyanicasttech.com`).                                   |  **READY FOR EXECUTION**  |
|  **P3**  | **ISS-07** | **8-Stage Shopfloor Visualizer** | `/manufacturing/container-manufacturing` outlines 8 manufacturing stages textually.                                          | Build interactive 8-stage image stepper using the 8 shopfloor photos transferred from client records.                                            |        **PLANNED**        |

---

### 3. Execution Action Plan

#### Workstream 1: Safe Immediate Remediations (Executed)

1. **Local Asset Bridge**: Replaced external Cloudflare R2 asset JSON pointer in `SiteHeader.tsx` and `SiteFooter.tsx` with verified local master `/assets/company/Kalyani Cast Tech Logo.jpeg`.
2. **Dual-Mode ImageSlot**: Enhanced `ImageSlot.tsx` to render real company photographs with captions while retaining compliant brief fallbacks where assets are pending.
3. **Route Asset & Document Map**: Created `src/content/route-assets.ts` and updated `ContentPage.tsx` to automatically render authentic photography and downloadable corporate documents.
4. **Verification**: Executed `npm test` (3/3 tests passed) and `npm run build` (compiled clean in 2.22s).

#### Workstream 2: Commercial Enquiry Backend Integration (Prepared)

1. Implement a serverless POST handler `/api/enquiries` accepting Form A (Containers), Form B (Logistics), and General enquiries.
2. Require environment variables:
   - `ENQUIRY_RECIPIENT_EMAIL`: Client's official recipient email inbox.
   - `RESEND_API_KEY` or `SUPABASE_SERVICE_ROLE_KEY`: Transactional delivery credentials.
   - `TURNSTILE_SECRET_KEY`: Anti-bot spam protection.
3. Keep current preview behavior active until credentials and recipient address are authorized by the project owner.

#### Workstream 3: Statutory Compliance & Final Signoff

1. Company Secretary to provide verified statutory registered office address and phone for `/contact` and `/investors/investor-grievance-contact`.
2. Company Secretary to confirm official corporate domain (e.g., `https://kalyanicasttech.com`).
