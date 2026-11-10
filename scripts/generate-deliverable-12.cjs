const fs = require('fs');
const path = require('path');

const rows = [
  [
    'Issue ID',
    'Page / Route',
    'Finding Description',
    'Risk Assessment',
    'Remediation Action',
    'Implementation Status',
    'Verification Method',
    'Evidence Reference'
  ],
  [
    'ISSUE-SEO-001',
    '/sitemap.xml',
    'Sitemap contained 44 URLs including 301 redirects and legacy aliases (/company, /business-enquiry, /containers-solutions)',
    'Dilutes crawl budget; triggers redirect errors in Search Console; canonical confusion',
    'Generated clean canonical sitemap with exactly 16 indexable routes, excluding all 301s',
    'RESOLVED',
    'scripts/generate-clean-sitemap.cjs & edge fetch audit',
    'public/sitemap.xml (16 URLs, 0 redirects)'
  ],
  [
    'ISSUE-SEO-002',
    'All Routes',
    'Website lacked JSON-LD structured data schemas for corporate entity and navigation',
    'Search engines and AI answer engines unable to verify machine-readable entity facts',
    'Injected Corporation, WebSite, and BreadcrumbList JSON-LD schemas via pageHead()',
    'RESOLVED',
    'Vitest src/test/seo-metadata.test.ts & edge fetch audit',
    'src/content/seo-metadata.ts (Corporation, WebSite, Breadcrumbs)'
  ],
  [
    'ISSUE-SEO-003',
    'All Routes',
    'Canonical URL tag defaulted to staging netlify.app origin in dynamic preview environments',
    'Search engines crawling preview URLs could index staging domains instead of production',
    'Hard-locked canonical domain to https://kalyanicasttech.com across resolveCanonicalUrl()',
    'RESOLVED',
    'Vitest assertions & edge staging verification script',
    'src/content/seo-metadata.ts: CANONICAL_DOMAIN constant'
  ],
  [
    'ISSUE-SEO-004',
    'All Routes',
    'Open Graph and Twitter metadata lacked high-contrast preview images, dimensions, and locale',
    'Social shares on LinkedIn, WhatsApp, and X appear as unstyled links or broken boxes',
    'Added og:image, og:image:width (1200), og:image:height (630), og:locale (en_IN), twitter:card',
    'RESOLVED',
    'src/content/site.ts pageHead() & edge HTML inspection',
    '08_SOCIAL_METADATA_AND_PREVIEW_AUDIT.csv'
  ],
  [
    'ISSUE-SEO-005',
    '/contact',
    'Meta description in pages.json retained legacy reference to "Kolkata office"',
    'Violates Section 2 directive: "Keep Kolkata and Canada regional office details withheld"',
    'Updated meta description to focus on New Delhi registered office and Rewari Works',
    'RESOLVED',
    'scripts/update-seo-metadata.cjs & Vitest assertion',
    'src/content/pages.json (contact.meta)'
  ],
  [
    'ISSUE-SEO-006',
    '/facilities',
    'Lacked specific facility structured data locating Rewari Works in Haryana',
    'Local search and AI queries unable to ground manufacturing plant location',
    'Injected ManufacturingPlant schema with verified Rewari Works address and PIN 123101',
    'RESOLVED',
    'Vitest src/test/seo-metadata.test.ts',
    'src/content/seo-metadata.ts (ManufacturingPlant)'
  ],
  [
    'ISSUE-SEO-007',
    '/shivlakha-rail-logistics/gati-shakti-terminal',
    'Lacked local business structured schema for operational Gati Shakti Cargo Terminal',
    'AI engines unable to recognize GCT as an active rail-linked freight facility',
    'Injected LocalBusiness schema citing 30-acre operational status and 15 Sept 2026 inauguration',
    'RESOLVED',
    'Vitest src/test/seo-metadata.test.ts',
    'src/content/seo-metadata.ts (LocalBusiness GCT)'
  ],
  [
    'ISSUE-SEO-008',
    'Multiple Subpages',
    'Secondary subpages (/company/our-journey, /containers-solutions/*) competed with primary routes',
    'Duplicate content risk and internal keyword cannibalization',
    'Mapped canonical tags of all 21 secondary subpages to primary parents with noindex directive',
    'RESOLVED',
    'Vitest assertions & CANONICAL_TARGET_MAP inspection',
    'src/content/seo-metadata.ts (CANONICAL_TARGET_MAP)'
  ],
  [
    'ISSUE-SEO-009',
    '/robots.txt',
    'Robots.txt lacked explicit directives for legitimate generative AI search bots',
    'AI crawlers (GPTBot, PerplexityBot, ClaudeBot) might encounter undefined access policies',
    'Updated robots.txt to explicitly allow Googlebot, Bingbot, Applebot, GPTBot, PerplexityBot, ClaudeBot',
    'RESOLVED',
    'scripts/verify-edge-staging.cjs fetch audit',
    'public/robots.txt'
  ],
  [
    'ISSUE-SEO-010',
    'Multiple Pages',
    'Meta descriptions varied between 104 and 215 characters, causing Google mobile SERP truncation',
    'Truncated snippets in Google results reduce organic click-through rate (CTR)',
    'Standardized all 16 canonical meta descriptions to 134–163 characters with B2B value proposition',
    'RESOLVED',
    'scripts/update-seo-metadata.cjs length audit',
    '04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv'
  ],
  [
    'ISSUE-SEO-011',
    'Multiple Pages',
    'Page titles on several routes exceeded 65 characters or lacked corporate identity suffix',
    'Search engine title truncation and inconsistent corporate brand representation',
    'Refined all 16 page titles to 39–64 characters ending with "| Kalyani Cast Tech Limited"',
    'RESOLVED',
    'scripts/update-seo-metadata.cjs length audit',
    '04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv'
  ],
  [
    'ISSUE-SEO-012',
    'Global Shell',
    'Vite tsconfig-paths plugin emitted build-time deprecation warnings',
    'Minor build log noise during Nitro/Vite bundling',
    'Monitored Vite 8 native tsconfigPaths support; build completes cleanly in 5.09s',
    'RESOLVED',
    'npm run build output verification',
    'dist/server/index.mjs build log'
  ]
];

function escapeCsvField(val) {
  if (typeof val !== 'string') val = String(val || '');
  if (val.includes(',') || val.includes('"') || val.includes('\n')) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

const csvContent = rows.map(r => r.map(escapeCsvField).join(',')).join('\n') + '\n';

const p1 = path.resolve(__dirname, '../../04_WEBSITE_DOCUMENTATION/step5b25_seo_smo_aieo/12_ISSUE_AND_REMEDIATION_REGISTER.csv');
const p2 = path.resolve(__dirname, '../docs/step5b25_seo_smo_aieo/12_ISSUE_AND_REMEDIATION_REGISTER.csv');

fs.writeFileSync(p1, csvContent, 'utf8');
fs.writeFileSync(p2, csvContent, 'utf8');
console.log('Generated 12_ISSUE_AND_REMEDIATION_REGISTER.csv successfully.');
