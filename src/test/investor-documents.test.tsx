import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { APPROVED_INVESTOR_DOCS } from "@/components/site/InvestorDocumentLibrary";
import pagesData from "@/content/pages.json";

describe("Investor Relations Document Integrity & Registry Verification (WP-5B.13 Workstream C)", () => {
  describe("InvestorDocumentLibrary Component Registry", () => {
    it("contains verified approved investor documents", () => {
      expect(APPROVED_INVESTOR_DOCS.length).toBe(27);
    });

    it("enforces 100% uniqueness of document IDs and URLs (zero duplicates)", () => {
      const ids = APPROVED_INVESTOR_DOCS.map((d) => d.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);

      const urls = APPROVED_INVESTOR_DOCS.map((d) => d.url);
      const uniqueUrls = new Set(urls);
      expect(uniqueUrls.size).toBe(urls.length);
    });

    it("verifies every document URL exists on disk in public/", () => {
      APPROVED_INVESTOR_DOCS.forEach((doc) => {
        // Strip leading slash for relative lookup from public directory
        const relativePath = doc.url.startsWith("/") ? doc.url.slice(1) : doc.url;
        const filePath = path.resolve(process.cwd(), "public", relativePath);
        const exists = fs.existsSync(filePath);
        expect(exists, `Document file not found on disk: ${doc.url} (${filePath})`).toBe(true);
      });
    });

    it("covers all 4 approved categories", () => {
      const categories = new Set(APPROVED_INVESTOR_DOCS.map((d) => d.category));
      expect(categories.has("Annual Statements")).toBe(true);
      expect(categories.has("Code of Conduct")).toBe(true);
      expect(categories.has("DRHP & Prospectus")).toBe(true);
      expect(categories.has("Corporate & Statutory")).toBe(true);
    });

    it("preserves all critical statutory annual reports (12th, 13th, 14th AGM)", () => {
      const urls = APPROVED_INVESTOR_DOCS.map((d) => d.url);
      expect(urls.some((u) => u.includes("12th-Annual-Report"))).toBe(true);
      expect(urls.some((u) => u.includes("13th-Annual-Report"))).toBe(true);
      expect(urls.some((u) => u.includes("Annual-Report_FY_2025-26"))).toBe(true);
    });

    it("preserves critical half-yearly and full-year financial results", () => {
      const urls = APPROVED_INVESTOR_DOCS.map((d) => d.url);
      expect(urls.some((u) => u.includes("Financial-Results_30.09.2023"))).toBe(true);
      expect(urls.some((u) => u.includes("Financial-Results_30.09.2024"))).toBe(true);
      expect(urls.some((u) => u.includes("Financial-Results_31.03.2025"))).toBe(true);
      expect(urls.some((u) => u.includes("Financial-Results_30.09.2025"))).toBe(true);
    });

    it("preserves 11 signed Code of Conduct & governance policies (Policies A to K)", () => {
      const cocDocs = APPROVED_INVESTOR_DOCS.filter((d) => d.category === "Code of Conduct");
      expect(cocDocs.length).toBe(11);
      const ids = cocDocs.map((d) => d.id);
      ["coc-a", "coc-b", "coc-c", "coc-d", "coc-e", "coc-f", "coc-g", "coc-h", "coc-i", "coc-j", "coc-k"].forEach((id) => {
        expect(ids).toContain(id);
      });
    });
  });

  describe("pages.json Investor Subpage Registry", () => {
    // Extract all document links across investor pages in pages.json
    const investorPages = pagesData.filter((p: { url: string }) => p.url.startsWith("/investors"));
    const allDocLinks: { page: string; url: string }[] = [];

    investorPages.forEach((p: { url: string; sections?: { body?: { p?: string }[] }[] }) => {
      if (p.sections) {
        p.sections.forEach((s) => {
          if (s.body) {
            s.body.forEach((item) => {
              if (item.p) {
                const regex = /\[(?:Download PDF|Download PPTX)\]\(([^)]+)\)/g;
                let match;
                while ((match = regex.exec(item.p)) !== null) {
                  allDocLinks.push({ page: p.url, url: match[1] });
                }
              }
            });
          }
        });
      }
    });

    it("contains cleaned investor document links", () => {
      expect(allDocLinks.length).toBeGreaterThan(50);
    });

    it("verifies 100% of document links resolve to valid files on disk", () => {
      allDocLinks.forEach((link) => {
        const relativePath = link.url.startsWith("/") ? link.url.slice(1) : link.url;
        const filePath = path.resolve(process.cwd(), "public", relativePath);
        const exists = fs.existsSync(filePath);
        expect(exists, `Document link broken on ${link.page}: ${link.url}`).toBe(true);
      });
    });

    it("enforces consolidation of duplicate board meeting intimations on /investors/stock-exchange-disclosures", () => {
      const disclosuresPage = investorPages.find(
        (p: { url: string }) => p.url === "/investors/stock-exchange-disclosures"
      );
      expect(disclosuresPage).toBeDefined();

      const pageStr = JSON.stringify(disclosuresPage);

      // Verify redundant sequential files -1.pdf through -13.pdf are eliminated
      for (let i = 1; i <= 13; i++) {
        expect(
          pageStr.includes(`KCT_Intimation-of-BM_Kalyani_-${i}.pdf`),
          `Redundant duplicate KCT_Intimation-of-BM_Kalyani_-${i}.pdf still found in disclosures`
        ).toBe(false);
      }

      // Verify the canonical file is retained exactly once
      expect(pageStr.includes("KCT_Intimation-of-BM_Kalyani_.pdf")).toBe(true);
      const matches = pageStr.match(/KCT_Intimation-of-BM_Kalyani_\.pdf/g);
      expect(matches?.length).toBe(1);
    });

    it("retains all statutory categories in stock exchange disclosures", () => {
      const disclosuresPage = investorPages.find(
        (p: { url: string }) => p.url === "/investors/stock-exchange-disclosures"
      );
      const pageStr = JSON.stringify(disclosuresPage);

      // Check key disclosures
      expect(pageStr.includes("Postal_Ballot_Kalyani.pdf")).toBe(true);
      expect(pageStr.includes("Annual-Return_AGM-2024.pdf")).toBe(true);
      expect(pageStr.includes("Intimation_Investor-Meet.pdf")).toBe(true);
      expect(pageStr.includes("Intimation-of-BM_Preferential-Allotment.pdf")).toBe(true);
      expect(pageStr.includes("Board-Meeting-Outcome_30.09.2025.pdf")).toBe(true);
    });
  });
});

