# PRIORITISED ACTION PLAN: KALYANI CAST TECH WEBSITE

## Practical Execution Roadmap for Website Reconstruction, Verification & Launch

- **Project**: Kalyani Cast Tech Limited Corporate Website
- **Recovery Phase**: Post-Audit Implementation Roadmap
- **Target Platform**: Fresh Application Template Project (Separate Account)

---

### Phase 0: Immediate Critical Actions (Within 24–48 Hours)

| Task ID     | Action Item                          | Description                                                                                                                                                    | Responsible Party      | Dependency / Blockers                                                                             |
| :---------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------------------------------------------------------------------------------------------------ |
| **ACT-001** | **Preserve Offline Logo Asset**      | Ensure \`contact_sheets/kalyani-cast-tech-logo.jpeg\` (500x500 px) is backed up outside Application Template R2 CDN.                                                        | Recovery Engineer      | **COMPLETED** (Downloaded during audit)                                                           |
| **ACT-002** | **Obtain Statutory Company Details** | Collect official registered office address, corporate office address, official telephone, corporate email, and Company Secretary / Compliance Officer details. | Client Management / CS | Required to replace 2 placeholders in \`/contact\` and \`/investors/investor-grievance-contact\`. |
| **ACT-003** | **Initialize Fresh Application Template Project** | Create a new project in the client's separate Application Template account using the standard React/Vite/Tailwind template.                                                 | Lead Developer         | Access to new Application Template account.                                                                    |
| **ACT-004** | **Import Core Content & Styles**     | Copy \`src/content/pages.json\`, \`src/content/site.ts\`, \`src/content/search.ts\`, and \`src/styles.css\` into the new workspace.                            | Lead Developer         | ACT-003.                                                                                          |

---

### Phase 1: Core Functional & Technical Wiring (Week 1)

| Task ID     | Action Item                           | Description                                                                                                                                                                             | Responsible Party | Dependency / Blockers                         |
| :---------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------- | :-------------------------------------------- |
| **ACT-005** | **Wire Real Form Submission Backend** | Replace the validation-only preview state in \`EnquiryForm.tsx\` with a serverless API (e.g. Resend transactional email to \`info@kalyanicasttech.com\` or a Supabase \`leads\` table). | Frontend Engineer | Client decision on recipient email addresses. |
| **ACT-006** | **Integrate Spam Protection**         | Add Cloudflare Turnstile or a honeypot field to \`EnquiryForm.tsx\` to prevent automated spam upon public launch.                                                                       | Frontend Engineer | ACT-005.                                      |
| **ACT-007** | **Fix Canonical Domain Origin**       | Update \`src/content/site.ts:L31\` from \`https://staging.kalyanicasttech.com\` to \`https://kalyanicasttech.com\`.                                                           | Frontend Engineer | Official domain confirmation.                 |
| **ACT-008** | **Install Robots & Sitemap Rules**    | Replace open \`robots.txt\` with staging protections (\`Disallow: /\` during development) and configure automated \`sitemap.xml\` generation for production.                            | DevOps / SEO      | ACT-007.                                      |
| **ACT-009** | **Purge Unused Template Artifacts**   | Omit the 26 unused shadcn UI components (\`calendar\`, \`chart\`, \`carousel\`, etc.) from the new project to optimize bundle performance.                                              | Frontend Engineer | Clean repo setup.                             |

---

### Phase 2: Document Library & Content Fulfillment (Week 2)

| Task ID     | Action Item                             | Description                                                                                                               | Responsible Party  | Dependency / Blockers        |
| :---------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :----------------- | :--------------------------- |
| **ACT-010** | **Establish Document Storage Bucket**   | Setup a public R2 / S3 / Supabase storage bucket for downloadable PDF resources.                                          | DevOps / Cloud Eng | Cloud account setup.         |
| **ACT-011** | **Upload Technical Data Sheets**        | Collect and upload approved PDF specification sheets for standard ISO containers, dwarf containers, and vehicle carriers. | Engineering Team   | Product specs signoff.       |
| **ACT-012** | **Upload Statutory Investor Documents** | Populate statutory financial statements, annual reports, corporate governance charters, and exchange disclosures.         | Company Secretary  | Statutory compliance review. |
| **ACT-013** | **Draft Official Privacy Policy**       | Draft and approve formal privacy notice and terms of use to replace the placeholder link in the enquiry consent box.      | Legal Counsel      | Client legal signoff.        |

---

### Phase 3: Visual Asset Photography & Final Polish (Pre-Launch)

| Task ID     | Action Item                         | Description                                                                                                                                                                  | Responsible Party      | Dependency / Blockers   |
| :---------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :---------------------- |
| **ACT-014** | **Procure Factory Photography**     | Take or gather high-resolution genuine photographs of the Rewari container manufacturing plant (material prep, welding line, finished containers) matching ImageSlot briefs. | Marketing / Operations | Access to Rewari works. |
| **ACT-015** | **Procure Shivlakha Site Visuals**  | Obtain actual photographs or approved engineering schematics of the Bachau Gati Shakti terminal rail siding and ICD earthworks.                                              | Project Director       | Site photography.       |
| **ACT-016** | **Produce Vector SVG Logo**         | Request or redraw the Kalyani Cast Tech logo as a transparent SVG for crisp rendering on high-DPI retina screens and dark headers.                                           | Graphic Designer       | ACT-001.                |
| **ACT-017** | **End-to-End Cross-Device Testing** | Validate responsive layout, search dialog keyboard interaction, form error states, and contrast ratios on mobile, tablet, and desktop.                                       | QA Engineer            | Staging URL available.  |

---

### Key Decisions Required from Kalyani Cast Tech Management:

1. **Target Production Domain & DNS Control**: Confirmation of DNS provider (Cloudflare recommended) and SSL setup.
2. **Designated Inboxes for Enquiries**: Specific email addresses for container orders (\`sales@...\`) vs rail logistics (\`logistics@...\`) vs investor grievances (\`investors@...\`).
3. **Disclosure Signoff**: Final approval by the Board/Company Secretary on all historical milestones and project descriptions before public indexing.
