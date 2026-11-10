import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { OurJourneyPage } from "../routes/our-journey";

describe("Our Journey Page (WP-5B.10)", () => {
  describe("Section 1: Hero Banner & Mandatory Internal Draft Badge", () => {
    it("renders the primary H1 headline 'Our Journey'", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 1, name: /^Our Journey$/i })
      ).toBeInTheDocument();
    });

    it("renders the approved supporting narrative", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByText(
          /An evolving journey in industrial manufacturing, specialised products and terminal infrastructure development/i
        )
      ).toBeInTheDocument();
    });

    it("confirms complete removal of the internal draft verification badge per Management Clarification 5", () => {
      render(<OurJourneyPage />);
      expect(
        screen.queryByText(/Internal draft — verify\/approve before publication/i)
      ).not.toBeInTheDocument();
    });

    it("renders breadcrumb navigation linking to Home", () => {
      render(<OurJourneyPage />);
      const homeLink = screen.getByRole("link", { name: "Home" });
      expect(homeLink).toHaveAttribute("href", "/");
    });

    it("provides the primary action CTAs to facilities and shivlakha", () => {
      render(<OurJourneyPage />);
      const mfgBtn = screen.getByRole("link", { name: /Explore Manufacturing/i });
      expect(mfgBtn).toHaveAttribute("href", "/facilities");

      const terminalBtn = screen.getByRole("link", { name: /Review Terminal Development/i });
      expect(terminalBtn).toHaveAttribute("href", "/shivlakha-rail-logistics");
    });
  });

  describe("Section 2: Corporate Overview & Heritage Introduction", () => {
    it("renders Section 2 heading and corporate facts", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Over a Decade of Disciplined Industrial Engineering/i })
      ).toBeInTheDocument();
      expect(screen.getAllByText(/BSE SME: 544023/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/L26990DL2012PLC242760/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/September 2012/i).length).toBeGreaterThan(0);
    });

    it("explicitly articulates the two-division operating structure", () => {
      render(<OurJourneyPage />);
      expect(screen.getAllByText(/Division 1 — Manufacturing/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Division 2 — Terminal/i).length).toBeGreaterThan(0);
      expect(screen.getByText("Two Business Divisions")).toBeInTheDocument();
    });

    it("strictly omits KMT wording from narrative per Management Clarification 1 (reserved exclusively for Shivlakha introduction)", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/SPV KMT Engineering Private Limited/i);
      expect(container.innerHTML).not.toMatch(/KMT Engineering/i);
    });
  });

  describe("Section 3: Corporate Timeline (Chronological Ledger)", () => {
    it("renders Section 3 heading and all 7 verified chronological milestones", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Chronological Development Ledger/i })
      ).toBeInTheDocument();

      const expectedMilestones = [
        "Incorporation & Rewari Works Established",
        "Commercial Production & Facility Trial",
        "Commercial Double-Stack Dwarf Container Run",
        "BSE SME Public Listing",
        "CBIC Approval Received",
        "Gati Shakti Terminal Infrastructure Completion",
        "RDSO Stage-I Approval for New Wagon Design",
      ];

      for (const title of expectedMilestones) {
        expect(screen.getByRole("heading", { level: 3, name: new RegExp(title, "i") })).toBeInTheDocument();
      }
    });

    it("ensures CBIC approval milestone (10 Sept 2026) precedes Gati Shakti Terminal inauguration (15 Sept 2026) chronologically", () => {
      const { container } = render(<OurJourneyPage />);
      const timelineText = container.querySelector("#corporate-timeline")?.textContent || "";
      const cbicIndex = timelineText.indexOf("10 Sept 2026");
      const gatiShaktiIndex = timelineText.indexOf("15 Sept 2026");

      expect(cbicIndex).toBeGreaterThan(-1);
      expect(gatiShaktiIndex).toBeGreaterThan(-1);
      expect(cbicIndex).toBeLessThan(gatiShaktiIndex);
    });

    it("displays authentic photography and document reference evidence for all 7 milestones", () => {
      const { container } = render(<OurJourneyPage />);
      const timelineImages = container.querySelectorAll("#corporate-timeline img");
      expect(timelineImages.length).toBe(7);

      expect(screen.getAllByText(/Document Reference:/i).length).toBe(7);
      expect(screen.getByText(/Certificate of Incorporation · RoC Delhi & Haryana/i)).toBeInTheDocument();
      expect(screen.getByText(/BSE SME Listing Confirmation · Scrip Code: 544023/i)).toBeInTheDocument();
      expect(screen.getByText(/CBIC Letter of Intent · Inter-Ministerial Committee \(IMC\) Clearance/i)).toBeInTheDocument();
      expect(screen.getByText(/RDSO Stage-I Concept Approval Notification · Ministry of Railways/i)).toBeInTheDocument();
    });
  });

  describe("Section 4: Manufacturing Division Journey", () => {
    it("renders Manufacturing Division heading and 3 activity groups", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Manufacturing Division Evolution/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Container Manufacturing/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Wagon Manufacturing/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Foundry Unit/i })).toBeInTheDocument();
    });

    it("provides verified links to products catalogue and facilities", () => {
      render(<OurJourneyPage />);
      expect(screen.getByRole("link", { name: /View Container Catalogue/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /Review Wagon Capabilities/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /View Precision Castings/i })).toHaveAttribute("href", "/products-applications");
      expect(screen.getByRole("link", { name: /Inspect Manufacturing Facilities/i })).toHaveAttribute("href", "/facilities");
    });
  });

  describe("Section 5: Terminal Division Journey & Master Land Bank", () => {
    it("renders Terminal Division heading and components", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Terminal Division Infrastructure Development/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /^Gati Shakti Terminal$/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /^Inland Container Terminal$/i })).toBeInTheDocument();
    });

    it("presents Gati Shakti Terminal as 30 acres and Operational", () => {
      render(<OurJourneyPage />);
      expect(screen.getAllByText("Operational").length).toBeGreaterThan(0);
      expect(screen.getAllByText(/15 Sept(ember)? 2026/i).length).toBeGreaterThan(0);
    });

    it("presents Inland Container Terminal as 30 acres and Under Construction", () => {
      render(<OurJourneyPage />);
      expect(screen.getAllByText("Under Construction").length).toBeGreaterThan(0);
      expect(screen.getAllByText(/CBIC approval received on 10 September 2026/i).length).toBeGreaterThan(0);
    });

    it("renders the 150-acre land allocation table accurately", () => {
      render(<OurJourneyPage />);
      expect(screen.getByText(/Shivlakha Project Master Land Bank Allocation \(150 Acres Total\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Container and wagon manufacturing shed/i)).toBeInTheDocument();
      expect(screen.getByText(/Future expansion/i)).toBeInTheDocument();
      expect(screen.getByText("150 acres")).toBeInTheDocument();
    });
  });

  describe("Section 6: Looking Ahead", () => {
    it("renders Section 6 heading and strategic links", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Integrating Heavy Fabrication with Direct Rail Logistics/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /Review Shivlakha Infrastructure/i })).toHaveAttribute("href", "/shivlakha-rail-logistics");
      expect(screen.getByRole("link", { name: /Review Quality Systems/i })).toHaveAttribute("href", "/engineering-quality");
    });
  });

  describe("Section 7: Explore Kalyani (8 Approved Destinations)", () => {
    it("renders Section 7 heading and all 8 approved destination links", () => {
      const { container } = render(<OurJourneyPage />);
      expect(screen.getByRole("heading", { level: 2, name: /^Explore Kalyani$/i })).toBeInTheDocument();

      const section7 = container.querySelector('section[aria-labelledby="explore-kalyani-heading"]');
      expect(section7).toBeInTheDocument();

      const expectedLinks = [
        { label: "About Kalyani", href: "/about-us" },
        { label: "Manufacturing Facilities", href: "/facilities" },
        { label: "Products & Applications", href: "/products-applications" },
        { label: "Innovation & Concepts", href: "/innovation" },
        { label: "Engineering & Quality", href: "/engineering-quality" },
        { label: "Shivlakha Project", href: "/shivlakha-rail-logistics" },
        { label: "Board & Management", href: "/leadership" },
        { label: "Investor Relations", href: "/investor-relations" },
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
    it("renders Section 8 heading and enquiry CTAs", () => {
      render(<OurJourneyPage />);
      expect(
        screen.getByRole("heading", { level: 2, name: /Discuss Your Container or Rail Engineering Requirements/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /Submit Technical Enquiry/i })).toHaveAttribute("href", "/contact#enquiry-form");
      expect(screen.getByRole("link", { name: /Corporate Directory & Office Locations/i })).toHaveAttribute("href", "/contact");
    });
  });

  describe("Negative Safeguards & Public Disclosure Restrictions", () => {
    it("enforces omission of unverified railway alpha code KEGS", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/\bKEGS\b/);
    });

    it("enforces omission of Indian Railways numeric code 08524078", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/\b08524078\b/);
    });

    it("enforces omission of unverified track length 720 m / 720m", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/\b720\s*m\b/i);
    });

    it("enforces omission of obsolete 114-acre reference", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/\b114-acre\b/i);
      expect(container.innerHTML).not.toMatch(/\b114\s+acres\b/i);
    });

    it("enforces omission of alternative KMT descriptions ('wholly owned subsidiary', 'working SPV')", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/wholly owned subsidiary/i);
      expect(container.innerHTML).not.toMatch(/working special purpose vehicle/i);
      expect(container.innerHTML).not.toMatch(/project execution vehicle/i);
    });

    it("enforces omission of deprecated 'five business areas' or 'five industrial pillars'", () => {
      const { container } = render(<OurJourneyPage />);
      expect(container.innerHTML).not.toMatch(/five business areas/i);
      expect(container.innerHTML).not.toMatch(/five industrial pillars/i);
      expect(container.innerHTML).not.toMatch(/five pillars/i);
    });
  });
});
