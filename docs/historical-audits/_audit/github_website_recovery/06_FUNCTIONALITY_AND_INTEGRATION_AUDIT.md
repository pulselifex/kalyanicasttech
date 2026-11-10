# FUNCTIONALITY AND INTEGRATION AUDIT

## Kalyani Cast Tech Limited — Forms, Search, Media, Analytics & Third-Party Services

- **Repository**: \`pixel-perfect-painter-750\`
- **Auditor Verification Method**: Static AST Inspection, Code Tracing, and Interface Evaluation
- **Testing Protocol**: Strictly read-only; no dummy submissions sent, no paid APIs called

---

### 1. Form Implementations & Lead Generation

All interactive user inputs across the website are centralized into a single polymorphic component: [src/components/site/EnquiryForm.tsx](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/components/site/EnquiryForm.tsx).

#### A. Form Variants Breakdown

| Form Variant                              | Accessible On                                                   | Field Definitions                                                                                                                                                                                                                                                                                                                                                                               | Client-Side Validation Rules                                                                                                                              | Actual Submission Destination                                                                                             |
| :---------------------------------------- | :-------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **General Enquiry** (\`"general"\`)       | \`/contact\`, tab switcher on \`/business-enquiry\`             | 1. Contact person (\`text\`)<br>2. Company name (\`text\`)<br>3. Business email (\`email\`)<br>4. Telephone (\`tel\`, opt)<br>5. Message (\`textarea\`)<br>6. Consent checkbox                                                                                                                                                                                                                  | - All marked fields required non-empty.<br>- Email validated by regex: \`/^[^\s@]+@[^\s@]+\.[^\s@]+$/\`<br>- Consent checkbox mandatory.                  | **NONE (Preview Only)**.<br>On submit, sets React state \`sent = true\` and displays "Validation passed" preview message. |
| **Container / Product Enquiry** (\`"A"\`) | \`/business-enquiry\`, default on most product links            | 1. Category (\`select\` dropdown)<br>2. Company name (\`text\`)<br>3. Contact person (\`text\`)<br>4. Business email (\`email\`)<br>5. Telephone (\`tel\`)<br>6. Product/model (\`text\`)<br>7. Cargo type (\`text\`)<br>8. Dimensions/weight (\`text\`, opt)<br>9. Quantity (\`text\`)<br>10. Target date (\`date\`, opt)<br>11. Technical details (\`textarea\`, opt)<br>12. Consent checkbox | - Category, company, contact, email, phone, product, cargo, and quantity are mandatory.<br>- Format validation on email.<br>- Consent checkbox mandatory. | **NONE (Preview Only)**.<br>No network request dispatched. No fetch/XHR call.                                             |
| **Cargo / Logistics Enquiry** (\`"B"\`)   | \`/shivlakha-rail-logistics/cargo-opportunities\`, tab switcher | 1. Category (\`select\` dropdown)<br>2. Company name & industry (\`text\`)<br>3. Contact person (\`text\`)<br>4. Business email (\`email\`)<br>5. Telephone (\`tel\`)<br>6. Cargo type (\`text\`)<br>7. Origin & destination (\`text\`)<br>8. Volume & frequency (\`text\`)<br>9. Current transport mode (\`text\`, opt)<br>10. Additional details (\`textarea\`, opt)<br>11. Consent checkbox  | - Category, company, contact, email, phone, cargo, route, and volume are mandatory.<br>- Format validation on email.<br>- Consent checkbox mandatory.     | **NONE (Preview Only)**.<br>Submissions are validated in-memory only.                                                     |

#### B. Forensic Code Evidence for Form Handling

In [EnquiryForm.tsx:L83-91](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/components/site/EnquiryForm.tsx#L83-L91):

```tsx
{sent ? (
  <div className="p-8" role="status">
    <p className="eyebrow text-primary">Validation passed</p>
    <p className="mt-2 font-display text-xl font-semibold text-foreground">Your enquiry details are complete.</p>
    <p className="mt-2 text-sm text-muted-foreground">
      Preview only: this form is not yet connected to email or any enquiry system, so nothing has been sent.
    </p>
    <Button variant="outline" className="mt-6 rounded-none" onClick={() => setSent(false)}>Start again</Button>
  </div>
) : ( ... )}
```

And in [roadmap.md:L12](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/roadmap.md#L12):

> _- [ ] Enquiry delivery destination and approval to connect a real submission service; forms remain validation-only._

#### C. Required Work for Form Activation:

1. Choose backend submission provider (e.g., Supabase \`leads\` table, Resend transactional email, or Webhook to CRM/Zapier).
2. Implement serverless function / edge action to process POST requests.
3. Add Honeypot or Cloudflare Turnstile CAPTCHA to protect against spam.
4. Replace \`[Approved privacy notice wording to be inserted]\` with the official legal privacy policy link.

---

### 2. Search Engine & Query Capabilities

- **Source Code**: [src/content/search.ts](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/content/search.ts) and [src/components/site/SiteSearch.tsx](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/components/site/SiteSearch.tsx).
- **Architecture**: 100% in-browser static text indexing.
- **Search Scope**: Indexes all 34 page models from [pages.json](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/content/pages.json).
  - Searchable attributes: \`page.name\`, \`page.h1\`, \`page.hero\`, \`s.heading\`, \`b.p\`, \`b.li\`.
- **Scoring Algorithm**:
  - Matches all query terms (\`every\`).
  - Title matches score 3 points; body matches score 1 point.
  - Sorts descending by score.
- **UI & Accessibility**:
  - Triggered via Search icon button in header or hotkey.
  - Opens in a Radix UI dialog modal with auto-focus.
  - Keyboard navigable with live result counter (\`role="status"\`).
- **External Dependencies**: Zero. No Algolia, MeiliSearch, or backend API needed.
- **Test Evidence**: [src/test/content-search.test.ts](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/test/content-search.test.ts) tests approved term matching ("inland container depot") and rejection of unapproved fabricated terms.

---

### 3. Media, Downloads & Document Distribution

1. **Document Downloads**:
   - **Status: NOT FUNCTIONAL / NO ASSETS UPLOADED**.
   - 9 routes are designated for documents (data sheets, corporate brochures, ISO certificates, financial filings, stock exchange disclosures, governance policies, shareholder information, IPO archive, and meeting presentations).
   - In [ContentPage.tsx:L92-94](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/components/site/ContentPage.tsx#L92-L94), all document routes render an \`EmptyState\` component:
     _"No documents published yet. Approved documents will be listed here with title, date and file size once released."_
   - There are zero PDF or DOC files committed in the repository.

2. **News & Press Releases**:
   - **Status: EMPTY STATE**.
   - Route \`/resources/news-media\` renders \`EmptyState\` with Newspaper icon:
     _"No news items published yet. Approved announcements and media releases will appear here once confirmed for publication."_

3. **Video Embeds & Streaming**:
   - **Status: NONE**.
   - No video elements, player libraries, or streaming embeds are present.

4. **Maps & Geographic Embeds**:
   - **Status: NONE**.
   - Neither Google Maps nor OpenStreetMap embeds are present. Geographic locations (Rewari, Haryana and Bachau, Kachchh, Gujarat) are communicated through typography and card components.

---

### 4. Third-Party Integrations & Backend Services

| Service Type             | Target Provider                | Present in Repo? | Configuration / Status                                                                                                                                                                                   |
| :----------------------- | :----------------------------- | :--------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentication**       | N/A                            |      **No**      | Corporate static informational site; no user login or member portal needed.                                                                                                                              |
| **Database**             | N/A                            |      **No**      | Content stored statically in \`pages.json\`.                                                                                                                                                             |
| **Analytics / Tracking** | Google Analytics / Plausible   |      **No**      | No scripts or tracking pixels detected.                                                                                                                                                                  |
| **Tag Manager**          | Google Tag Manager             |      **No**      | Not installed in \`__root.tsx\`.                                                                                                                                                                         |
| **Email Delivery**       | Resend / SendGrid / SMTP       |      **No**      | Required to enable enquiry form submissions.                                                                                                                                                             |
| **CDN / Media Storage**  | Application Template R2 Storage             |   **Partial**    | \`src/assets/kalyani-cast-tech-logo.jpeg.asset.json\` references Application Template R2 CDN.                                                                                                                         |
| **Error Reporting**      | Application Template Internal Error Tracker |     **Yes**      | [src/lib/application-template-error-reporting.ts](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/lib/application-template-error-reporting.ts) captures client/SSR errors for Application Template's editor. |
