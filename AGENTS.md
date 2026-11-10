# Progressive Disclosure Routing Map (AGENTS.md)

This is the primary web application subsystem for Kalyani Cast Tech Limited.

## Directory Structure

- `src/`: Core application source.
  - `src/routes/`: TanStack Start file-based routing and canonical 301 redirects.
  - `src/components/site/`: Industrial layout components, interactive Cargo Matcher, and Rake Calculator.
  - `src/components/ui/`: Base Radix UI and Tailwind v4 primitives.
  - `src/content/`: Canonical content registry (`pages.json`, `site-config.ts`, `route-assets.ts`).
  - `src/test/`: Vitest automated test suite.
- `docs/`: Technical specifications, audit matrices, decisions, and session logs.
- `public/`: Public static assets (156+ statutory investor PDFs, verified certificate scans, technical drawings).

## Operating Rules

1. **Page Copy**: Lives in `src/content/pages.json` and `src/content/site-config.ts`.
2. **Statutory Integrity**: Grounded in official BSE SME (544023), CIN (L26990DL2012PLC242760), and RDSO/CBIC approvals.
3. **No Fabrication**: Unverified assets or numbers are prohibited.
4. **Proof of Work Sensor**: Must pass `npm test` (`node ./node_modules/vitest/vitest.mjs run`) with exit code 0.
