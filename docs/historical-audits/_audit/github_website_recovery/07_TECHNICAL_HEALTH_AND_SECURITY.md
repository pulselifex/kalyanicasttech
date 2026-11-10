# TECHNICAL HEALTH AND SECURITY AUDIT

## Kalyani Cast Tech Limited — Code Quality, Security Posture, Dependencies & Readiness

- **Repository**: \`pixel-perfect-painter-750\`
- **Auditor Role**: Senior Repository Auditor & Security Analyst
- **Static Inspection Tool**: Custom AST & Import Graph Analyzer (\`scratch/audit_inspector.mjs\`)
- **Working Tree Cleanliness**: Verified Clean (0 tracked files modified)

---

### 1. Framework & Runtime Architecture

The application is structured around the cutting-edge (and partially experimental) **TanStack Start** meta-framework.

| Component                | Technology                  | Version             | Forensic Status                |
| :----------------------- | :-------------------------- | :------------------ | :----------------------------- |
| **Runtime / Build Tool** | Vite                        | \`8.1.5\`           | Current major release          |
| **UI Library**           | React / React-DOM           | \`^19.2.0\`         | Latest React 19 architecture   |
| **Meta-Framework**       | @tanstack/react-start       | \`1.168.60\`        | Beta release (SSR wrapper)     |
| **Client Router**        | @tanstack/react-router      | \`1.170.41\`        | File-based type-safe routing   |
| **Server Engine**        | Nitro                       | \`3.0.260603-beta\` | Headless SSR server target     |
| **CSS Framework**        | Tailwind CSS                | \`^4.2.1\`          | Tailwind v4 (CSS-first config) |
| **Animation Engine**     | tw-animate-css              | \`^1.3.4\`          | Keyframe animations utility    |
| **Lockfile**             | Bun Lockfile (\`bun.lock\`) | N/A                 | Bun-managed lockfile           |

---

### 2. Static Analysis & Import Graph Integrity

Using automated AST inspection across all 125 repository files:

- **Total TypeScript / TSX Files**: 106
- **Total Import Statements Analyzed**: 312
- **Broken Internal Imports**: **0 (Zero)**. Every relative path (\`./\` or \`../\`) and alias (\`@/...\`) resolves to a valid file on disk.
- **Missing NPM Dependencies**: **0 (Zero)**. Every third-party import exists in [package.json](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/package.json).
- **TypeScript Configuration**: [tsconfig.json](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/tsconfig.json) is properly configured with \`"strict": true\`, \`"moduleResolution": "Bundler"\`, and \`"@/_": ["./src/_"]\` paths.

---

### 3. Dead Code & Unused Dependencies

1. **Unused UI Primitives**:
   Out of 46 components in \`src/components/ui/\`, **26 are completely unreferenced**:
   - _List_: \`accordion\`, \`alert-dialog\`, \`aspect-ratio\`, \`avatar\`, \`breadcrumb\`, \`calendar\`, \`carousel\`, \`chart\`, \`command\`, \`context-menu\`, \`drawer\`, \`hover-card\`, \`input-otp\`, \`menubar\`, \`navigation-menu\`, \`pagination\`, \`progress\`, \`radio-group\`, \`resizable\`, \`scroll-area\`, \`sidebar\`, \`slider\`, \`sonner\`, \`switch\`, \`tabs\`, \`toggle-group\`.
   - _Impact_: Increases bundle size and cognitive overhead. They can be safely deleted or omitted in a rebuild.

2. **Unused Heavy NPM Packages**:
   The following dependencies are declared in \`package.json\` but never used in production code:
   - \`recharts\` (\`^2.15.4\`): Large charting library (~500KB bundle footprint).
   - \`embla-carousel-react\` (\`^8.6.0\`): Carousel engine.
   - \`react-day-picker\` (\`^9.14.0\`) & \`date-fns\` (\`^4.1.0\`): Calendar date picking.
   - \`input-otp\` (\`^1.4.2\`): OTP authentication input.
   - \`vaul\` (\`^1.1.2\`): Drawer primitive.
   - \`cmdk\` (\`^1.1.1\`): Command palette.
   - \`react-resizable-panels\` (\`^4.6.5\`): Resizable split panes.

---

### 4. Security Audit & Secret Exposure Check

1. **API Keys & Credentials**:
   - **Result: ZERO SECRETS FOUND**.
   - An exhaustive regex scan across all tracked files, commit messages, and git diffs for tokens, private keys, passwords, AWS/GCP keys, and database connection strings returned **no exposed credentials**.
   - No \`.env\` or \`.env.local\` files exist in the repository.

2. **Hard-Coded Domain URLs**:
   In [src/content/site.ts:L31](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/content/site.ts#L31):
   \`\`\`typescript
   links: [{ rel: "canonical", href: `https://staging.kalyanicasttech.com${url === "/" ? "/" : url}` }]
   \`\`\`
   - _Risk_: The Application Template preview subdomain is hard-coded into the canonical link generator. When deploying to the official domain (\`kalyanicasttech.com\`), this must be updated to avoid SEO self-harm.

3. **Crawlability & SEO Risk**:
   [public/robots.txt](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/public/robots.txt) allows all web crawlers:
   \`\`\`txt
   User-agent: *
   Allow: /
   \`\`\`
   - _Risk_: As noted in [roadmap.md:L13](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/roadmap.md#L13), crawlers currently index placeholder copy, unverified statutory notes, and review previews. Staging environments should be protected with \`Disallow: /\` or HTTP Basic Auth.
   - _Missing Element_: No \`sitemap.xml\` has been generated or installed.

4. **Form Security & Spam Protection**:
   - Client-side validation only.
   - No CSRF token or origin verification on the form itself (since submissions are client-only).
   - Once a real delivery endpoint is attached, CAPTCHA (Turnstile) and server-side sanitization are essential.

---

### 5. Rebuild & Transfer Readiness Assessment

| Evaluation Dimension                      |     Rating      | Findings & Recommendations                                                                                                                                                                                   |
| :---------------------------------------- | :-------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Can the project run as-is?**            | **Conditional** | Requires running \`npm install\` or \`bun install\` first. Dependencies are currently uninstalled in the repository working tree.                                                                            |
| **Can it be previewed locally?**          |     **Yes**     | Once dependencies are installed, \`npm run dev\` will start the local Vite development server on port 3000/5173.                                                                                             |
| **Can it be imported into Application Template?**      |     **Yes**     | Designed specifically for the Application Template platform with \`project.json\` template configuration.                                                                                                                 |
| **Does it require framework conversion?** | **Recommended** | TanStack Start (SSR beta) introduces unnecessary complexity (Nitro server, Cloudflare SSR wrappers). Migrating to standard **Vite + React SPA** is strongly recommended for stability and universal hosting. |
| **Required Environment Variables**        |    **None**     | No frontend environment variables are currently mandatory. Attaching a form backend will require \`RESEND_API_KEY\` or \`SUPABASE_URL\` / \`SUPABASE_ANON_KEY\`.                                             |
| **What could break during transfer?**     |  **Low Risk**   | 1. If the Application Template project is deleted, the logo asset pointer URL will fail unless replaced by the offline JPEG preserved in this audit.<br>2. SSR server configuration if transferred to a non-Nitro host.   |
