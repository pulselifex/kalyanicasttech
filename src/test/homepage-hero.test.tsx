import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { HomePage } from "@/components/site/HomePage";
import { HomeIntegratedHero } from "@/components/site/HomeIntegratedHero";

describe("WP-5B.3 — Kalyani Corporate Homepage & Industrial Hero", () => {
  describe("Section 1: Industrial Hero (HomeIntegratedHero)", () => {
    it("renders the strategic transformation narrative in the primary H1", () => {
      render(<HomeIntegratedHero />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toMatch(/Engineering Solutions for Freight and Industry/i);
    });

    it("displays the approved supporting brand line", () => {
      render(<HomeIntegratedHero />);
      expect(screen.getByText(/Built for what India moves/i)).toBeInTheDocument();
    });

    it("presents Kalyani Cast Tech Limited as the sole corporate identity in the hero", () => {
      render(<HomeIntegratedHero />);
      expect(
        screen.getByText(/Kalyani Cast Tech manufactures freight containers and precision castings/i)
      ).toBeInTheDocument();
      // Ensure KMT is NOT mentioned in the hero section
      expect(screen.queryByText(/KMT Engineering/i)).not.toBeInTheDocument();
    });

    it("provides the two primary call-to-action buttons with correct destinations", () => {
      render(<HomeIntegratedHero />);
      const exploreMfg = screen.getByRole("link", { name: /Explore Manufacturing/i });
      expect(exploreMfg).toBeInTheDocument();
      expect(exploreMfg).toHaveAttribute("href", "/manufacturing");

      const discoverShivlakha = screen.getByRole("link", { name: /Discover Shivlakha/i });
      expect(discoverShivlakha).toBeInTheDocument();
      expect(discoverShivlakha).toHaveAttribute("href", "/shivlakha-rail-logistics");
    });

    it("renders dynamic container and wagon carousel with authentic slides and controls", () => {
      render(<HomeIntegratedHero />);
      const carousel = screen.getByRole("region", {
        name: /Kalyani Cast Tech Container and Wagon Product Showcase/i,
      });
      expect(carousel).toBeInTheDocument();

      // Verified first container slide
      const firstImage = screen.getByAltText(/Standard freight container on rail rake/i);
      expect(firstImage).toBeInTheDocument();
      expect(firstImage).toHaveAttribute("src", "/assets/containers/product-20ft-gp-container-01.png");

      // Controls present
      expect(screen.getByRole("button", { name: /Previous product slide/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Next product slide/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Pause slideshow/i })).toBeInTheDocument();
    });
  });

  describe("Complete Homepage Section Architecture (8 Approved Sections)", () => {
    it("renders Section 2: Two Business Divisions Architecture Showcase", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", {
          name: /Two Business Divisions\. One Integrated Vision\./i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText("Business Divisions")).toBeInTheDocument();
      expect(screen.getByText("Manufacturing Division")).toBeInTheDocument();
      expect(screen.getByText("Terminal Division")).toBeInTheDocument();

      expect(screen.getByText(/Rewari Manufacturing Works · Haryana/i)).toBeInTheDocument();
      expect(screen.getByText(/Shivlakha Integrated Platform · Kachchh, Gujarat/i)).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Explore Manufacturing Capabilities/i })
      ).toHaveAttribute("href", "/manufacturing");
      expect(
        screen.getByRole("link", { name: /Explore Terminal Infrastructure/i })
      ).toHaveAttribute("href", "/shivlakha-rail-logistics");

      // Strict single-sentence KMT rule: KMT is NEVER mentioned on Homepage
      expect(screen.queryByText(/KMT Engineering/i)).not.toBeInTheDocument();
    });

    it("renders Section 3: Enterprise Scale & Quality Highlight Strip", () => {
      render(<HomePage />);
      // Key scale metrics
      expect(screen.getByText("Containers")).toBeInTheDocument();
      expect(screen.getByText("Freight Solutions")).toBeInTheDocument();

      expect(screen.getByText("Foundry")).toBeInTheDocument();
      expect(screen.getByText("Ferrous Castings")).toBeInTheDocument();

      expect(screen.getByText("Testing")).toBeInTheDocument();
      expect(screen.getAllByText("Structural Load Testing").length).toBeGreaterThanOrEqual(1);

      expect(screen.getAllByText("150 Acres").length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText("Shivlakha Platform")).toBeInTheDocument();
    });

    it("renders Section 4: Selected Flagship Product Families Showcase with interactive tabs", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", { name: /Container Manufacturing & Rolling Stock/i })
      ).toBeInTheDocument();

      // Product category tabs
      expect(screen.getByRole("button", { name: "Standard ISO Containers" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Specialised Industrial Freight" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Electrified Rail Logistics" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Precision Castings & Foundry" })).toBeInTheDocument();

      // Link to catalogue
      expect(
        screen.getByRole("link", { name: /Explore Product Catalogue/i })
      ).toHaveAttribute("href", "/products-applications");

      // Caveat note
      expect(
        screen.getByText(/Certain specialized container designs and rail wagon concepts represent custom engineering solutions/i)
      ).toBeInTheDocument();
    });

    it("renders Section 5: Dual Operating Locations & Terminal Footprint with 150-acre allocation", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", { name: /Our Facilities/i })
      ).toBeInTheDocument();

      // KMT omitted per Management Clarification 1 (reserved exclusively for Shivlakha page introduction)
      expect(screen.queryByText(/KMT Engineering/i)).not.toBeInTheDocument();

      // 150-Acre Land Allocation highlights
      expect(screen.getByText(/30 Acres: Gati Shakti Terminal \(Operational · Dedicated Rail Siding\)/i)).toBeInTheDocument();
      expect(screen.getByText(/30 Acres: Inland Container Terminal \(CBIC approval received on 10 September 2026 · Under development\)/i)).toBeInTheDocument();
      expect(screen.getByText(/5 Acres: Container and wagon manufacturing shed/i)).toBeInTheDocument();
      expect(screen.getByText(/85 Acres: Future expansion reserve \(150 Acres Master Plan\)/i)).toBeInTheDocument();

      // Location links
      expect(screen.getByRole("link", { name: /View Rewari Works Details/i })).toHaveAttribute(
        "href",
        "/facilities#rewari"
      );
      expect(screen.getByRole("link", { name: /Explore Shivlakha Platform/i })).toHaveAttribute(
        "href",
        "/shivlakha-rail-logistics"
      );

      // Operational status note
      expect(
        screen.getByText(/Commercial freight movement at the Gati Shakti Terminal is subject to railway operating arrangements/i)
      ).toBeInTheDocument();
    });

    it("renders Section 6: Engineering Rigor, Testing Rig & Certifications", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", {
          name: /Engineering, Quality & Governance/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText("Lloyd's Register EMEA Approved Foundry")).toBeInTheDocument();
      expect(screen.getByText("ISO Management System Certifications")).toBeInTheDocument();
      expect(screen.getByText("In-House Metallurgical & NDT Labs")).toBeInTheDocument();
      expect(screen.getByText("Listed Corporate Governance & Transparency")).toBeInTheDocument();

      expect(screen.getByRole("link", { name: /Explore Engineering & Quality/i })).toHaveAttribute(
        "href",
        "/engineering-quality"
      );
      expect(screen.getByRole("link", { name: /Investor Portal/i })).toHaveAttribute(
        "href",
        "/investor-relations"
      );
    });

    it("renders Section 7: Listed Corporate Governance & Investor Gateway with direct disclosures", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", {
          name: /Investor Information & Disclosures/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText("13th Annual Report (FY 2024-25)")).toBeInTheDocument();
      expect(screen.getByText("Financial Results (Half-Year ended 30.09.2025)")).toBeInTheDocument();
      expect(screen.getByText("Shareholding Pattern (Quarter ended 31.03.2025)")).toBeInTheDocument();
      expect(screen.getByText("Code of Conduct & Corporate Governance Policies")).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Access Investor Relations Portal/i })
      ).toHaveAttribute("href", "/investor-relations");
    });

    it("renders Section 8: Targeted B2B Commercial Enquiry Desk with 3 persona pathways", () => {
      render(<HomePage />);
      expect(
        screen.getByRole("heading", {
          name: /Discuss Your Business Requirements/i,
        })
      ).toBeInTheDocument();

      const containerInquiry = screen.getByRole("link", { name: /Inquire Container Fleet/i });
      expect(containerInquiry).toBeInTheDocument();
      expect(containerInquiry).toHaveAttribute("href", "/contact#enquiry-form");

      const castingsInquiry = screen.getByRole("link", { name: /Inquire Castings Supply/i });
      expect(castingsInquiry).toBeInTheDocument();
      expect(castingsInquiry).toHaveAttribute("href", "/contact#enquiry-form");

      const railInquiry = screen.getByRole("link", { name: /Enquire About Infrastructure/i });
      expect(railInquiry).toBeInTheDocument();
      expect(railInquiry).toHaveAttribute("href", "/contact#enquiry-form");

      const directoryLink = screen.getByRole("link", { name: /Corporate Directory & Offices/i });
      expect(directoryLink).toBeInTheDocument();
      expect(directoryLink).toHaveAttribute("href", "/contact");
    });
  });
});
