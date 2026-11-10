import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutUsPage } from "@/routes/about-us";

describe("About Kalyani Corporate Profile Page (WP-5B.10 Corporate Architecture & SPV Alignment)", () => {
  describe("Section 1: Corporate Hero & Statutory Identity", () => {
    it("renders the primary H1 corporate headline", () => {
      render(<AboutUsPage />);
      const heading = screen.getByRole("heading", { level: 1, name: /Kalyani Cast Tech Limited/i });
      expect(heading).toBeInTheDocument();
    });

    it("ensures public internal draft watermark badge is eradicated per WP-5B.13", () => {
      render(<AboutUsPage />);
      expect(screen.queryByText(/Internal draft — verify\/approve before publication/i)).not.toBeInTheDocument();
    });

    it("displays statutory identity parameters (BSE SME, CIN, Incorporation)", () => {
      render(<AboutUsPage />);
      expect(screen.getAllByText(/544023/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/L26990DL2012PLC242760/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/September 2012/i).length).toBeGreaterThan(0);
    });

    it("provides the primary action CTAs linking to business divisions and contact desk", () => {
      render(<AboutUsPage />);
      const exploreBtn = screen.getByRole("link", { name: /Explore Our Business/i });
      expect(exploreBtn).toHaveAttribute("href", "#business-divisions");

      const contactBtn = screen.getByRole("link", { name: /Connect with Us/i });
      expect(contactBtn).toHaveAttribute("href", "/contact#enquiry-form");
    });
  });

  describe("Section 2: Who We Are & Corporate Focus", () => {
    it("identifies Kalyani Cast Tech Limited as the principal corporate entity", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Who We Are/i })).toBeInTheDocument();
      expect(screen.getByText(/An Industrial Engineering Enterprise Focused on Heavy Cargo Equipment & Infrastructure/i)).toBeInTheDocument();
    });

    it("strictly omits KMT wording from narrative per Management Clarification 1 (reserved exclusively for Shivlakha page introduction)", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/SPV KMT Engineering/i);
      expect(container.innerHTML).not.toMatch(/KMT Engineering/i);
    });

    it("strictly omits separate KMT disclosure card, hierarchy diagram, and standalone profiles", () => {
      const { container } = render(<AboutUsPage />);
      // No link pointing to external KMT or standalone KMT profile
      const kmtLinks = Array.from(container.querySelectorAll("a")).filter((a) =>
        a.textContent?.includes("KMT")
      );
      expect(kmtLinks).toHaveLength(0);
      // No standalone card heading for KMT
      expect(screen.queryByText(/Corporate Project & Subsidiary Framework/i)).not.toBeInTheDocument();
    });

    it("articulates the dual-facility operational model (Rewari Works & Shivlakha)", () => {
      render(<AboutUsPage />);
      expect(screen.getAllByText(/Rewari Works/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Shivlakha/i).length).toBeGreaterThan(0);
    });
  });

  describe("Section 3: Mandatory Corporate Business Architecture (Exactly Two Divisions)", () => {
    it("presents exactly two business divisions: Manufacturing and Terminal", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Our Business/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Manufacturing Division/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Terminal Division/i })).toBeInTheDocument();
    });

    it("ensures NO five-business-area or five-pillar structure exists on the page", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/five\s+business\s+areas/i);
      expect(container.innerHTML).not.toMatch(/five\s+industrial\s+pillars/i);
      expect(container.innerHTML).not.toMatch(/five\s+core\s+business/i);
    });

    it("structures Manufacturing Division into Container Mfg, Wagon Mfg, and Foundry Unit", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 4, name: /Container Manufacturing/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Wagon Manufacturing/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Foundry Unit/i })).toBeInTheDocument();
      // Verifies Corner Castings and Other Engineering Equipment are under Foundry Unit
      expect(screen.getByText(/Corner Castings:/i)).toBeInTheDocument();
      expect(screen.getByText(/Other Engineering Equipment:/i)).toBeInTheDocument();
    });

    it("structures Terminal Division into Gati Shakti Terminal and Inland Container Terminal", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 4, name: /Gati Shakti Terminal/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Inland Container Terminal/i })).toBeInTheDocument();
      expect(screen.getByText(/Inaugurated 15 September 2026/i)).toBeInTheDocument();
      expect(screen.getByText(/CBIC Approval Received · Under Development/i)).toBeInTheDocument();
    });

    it("provides verified internal links from divisions to detailed pages", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("link", { name: /Explore Container Products/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /Review Wagon Capabilities/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /View Precision Castings/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /Explore Gati Shakti Terminal/i })).toHaveAttribute("href", "/shivlakha-rail-logistics");
      expect(screen.getByRole("link", { name: /Review Terminal Development/i })).toHaveAttribute("href", "/shivlakha-rail-logistics");
      expect(screen.getByRole("link", { name: /Inspect Manufacturing Facilities/i })).toHaveAttribute("href", "/facilities");
      expect(screen.getByRole("link", { name: /Engineering & Quality Rig/i })).toHaveAttribute("href", "/engineering-quality");
    }, 15000);
  });

  describe("Section 4: Manufacturing & Engineering Orientation", () => {
    it("renders Section 4 heading and all 6 application-oriented engineering principles", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Manufacturing & Engineering Orientation/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Cargo-Centric Design/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Standardised Fabrication/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Inspection & Quality Control/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Application Engineering/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Customer Technical Alignment/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Regulatory Conformity/i })).toBeInTheDocument();
    });
  });

  describe("Section 5: Industrial Development & Shivlakha Status Integrity", () => {
    it("renders Section 5 heading and links to key development pages", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Our Industrial Development/i })).toBeInTheDocument();
    });

    it("accurately maintains Shivlakha 150-acre master plan component descriptions", () => {
      render(<AboutUsPage />);
      expect(screen.getAllByText(/Gati Shakti Terminal \(30 acres, ready\)/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Inland Container Terminal \(30 acres, under construction\)/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/manufacturing shed \(5 acres\), and 85-acre future expansion/i).length).toBeGreaterThan(0);
    });

    it("displays the operational scope disclaimer for rail siding and commercial movements", () => {
      render(<AboutUsPage />);
      expect(
        screen.getByText(/Siding completion and infrastructure readiness at the Gati Shakti Terminal do not constitute regular commercial schedules or published tariffs/i)
      ).toBeInTheDocument();
    });
  });

  describe("Section 6: Our Operating Approach", () => {
    it("renders Section 6 heading and 4 disciplined operating principles", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Our Approach/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Manufacturing Quality & Precision/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Customer Requirements First/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Engineering Discipline & Verification/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Disciplined Phased Development/i })).toBeInTheDocument();
    });
  });

  describe("Section 7: Explore Kalyani (8 Approved Destinations)", () => {
    it("renders Section 7 heading and all 8 approved destination links", () => {
      const { container } = render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Explore Kalyani/i })).toBeInTheDocument();

      const section7 = container.querySelector('section[aria-labelledby="explore-kalyani-heading"]');
      expect(section7).toBeInTheDocument();

      const expectedLinks = [
        { label: "Our Journey", href: "/our-journey" },
        { label: "Board & Management", href: "/leadership" },
        { label: "Manufacturing", href: "/facilities" },
        { label: "Products & Applications", href: "/products-applications" },
        { label: "Engineering & Quality", href: "/engineering-quality" },
        { label: "Shivlakha Project", href: "/shivlakha-rail-logistics" },
        { label: "Investor Relations", href: "/investor-relations" },
        { label: "Contact Desk", href: "/contact" },
      ];

      for (const linkItem of expectedLinks) {
        const linkElem = Array.from(section7!.querySelectorAll("a")).find((a) =>
          a.textContent?.includes(linkItem.label)
        );
        expect(linkElem).toBeDefined();
        expect(linkElem).toHaveAttribute("href", linkItem.href);
      }
    });
  });

  describe("Section 8: Commercial Enquiry Routing", () => {
    it("renders Section 8 heading and commercial discussion invite", () => {
      render(<AboutUsPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Connect with Kalyani Cast Tech Limited/i })).toBeInTheDocument();
    });

    it("provides the primary inquiry CTA to /contact#enquiry-form and secondary to /contact", () => {
      render(<AboutUsPage />);
      const submitBtn = screen.getByRole("link", { name: /Submit Commercial Enquiry/i });
      expect(submitBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const dirBtn = screen.getByRole("link", { name: /View Corporate Directory/i });
      expect(dirBtn).toHaveAttribute("href", "/contact");
    });

    it("displays the bilateral terms and confidentiality disclaimer", () => {
      render(<AboutUsPage />);
      expect(
        screen.getByText(/Commercial terms, siding access protocols, technical drawings, and manufacturing schedules are shared strictly under bilateral confidentiality agreements/i)
      ).toBeInTheDocument();
    });
  });

  describe("Negative Safeguards & Prohibited Claims Enforcement", () => {
    it("enforces strict omission of sensitive railway siding code KEGS", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/\bKEGS\b/);
    });

    it("enforces strict omission of Indian Railways numerical station code 08524078", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/\b08524078\b/);
    });

    it("enforces strict omission of unverified track length 720 m / 720m", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/720\s*m/i);
    });

    it("enforces omission of obsolete 114-acre reference in favor of 150-acre master plan", () => {
      const { container } = render(<AboutUsPage />);
      expect(container.innerHTML).not.toMatch(/\b114\s*-?\s*acre/i);
    });
  });
});
