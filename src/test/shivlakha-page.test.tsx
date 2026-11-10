import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import { Route } from "@/routes/shivlakha-rail-logistics.index";

const ShivlakhaPage = Route.options.component!;

describe("Shivlakha Integrated Project Page (WP-5B.8)", () => {
  describe("Section 1: Hero Banner & Draft Safeguards", () => {
    it("renders the approved H1 headline and corporate introduction", () => {
      render(<ShivlakhaPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent(/Shivlakha — An Integrated Multimodal Development/i);
      expect(
        screen.getByText(/An integrated infrastructure development combining rail-linked logistics planning/i)
      ).toBeInTheDocument();
    });

    it("ensures public internal draft verification badge is eradicated per WP-5B.13", () => {
      render(<ShivlakhaPage />);
      expect(screen.queryByText(/Internal draft — verify\/approve before publication/i)).not.toBeInTheDocument();
    });

    it("renders breadcrumb navigation linking to Home", () => {
      render(<ShivlakhaPage />);
      const breadcrumb = screen.getByLabelText(/breadcrumb/i);
      expect(within(breadcrumb).getByText(/Home/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Shivlakha Integrated Project/i)).toBeInTheDocument();
    });

    it("renders primary action CTAs linking to enquiry and project introduction", () => {
      render(<ShivlakhaPage />);
      const discussBtn = screen.getByRole("link", { name: /Discuss a Business Requirement/i });
      expect(discussBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const exploreBtn = screen.getByRole("link", { name: /Explore the Project/i });
      expect(exploreBtn).toHaveAttribute("href", "#introduction");
    });
  });

  describe("Section 2: Project Introduction & KMT Working SPV Reference", () => {
    it("mentions KMT Engineering Private Limited strictly as the working SPV within the introduction", () => {
      render(<ShivlakhaPage />);
      expect(
        screen.getByText(
          /The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited/i
        )
      ).toBeInTheDocument();
    });

    it("confirms Kalyani Cast Tech Limited remains the principal corporate entity", () => {
      render(<ShivlakhaPage />);
      expect(
        screen.getByText(/Principal Identity: Kalyani Cast Tech Limited/i)
      ).toBeInTheDocument();
    });

    it("ensures NO external or separate website link exists for KMT", () => {
      const { container } = render(<ShivlakhaPage />);
      const links = container.querySelectorAll("a");
      links.forEach((link) => {
        const href = link.getAttribute("href") || "";
        expect(href).not.toMatch(/kmtengineering/i);
      });
    });
  });

  describe("Section 3: 150-Acre Master Plan Land Allocation", () => {
    it("renders total land allocation of exactly 150 acres and 100% contiguous land bank", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByText(/Total Integrated Development Allocation: 150 Acres/i)).toBeInTheDocument();
      expect(screen.getByText(/100% Contiguous Land Bank/i)).toBeInTheDocument();
    });

    it("allocates exactly 30 acres to Gati Shakti Terminal, 30 acres to Inland Container Terminal, 5 acres to Mfg Shed, and 85 acres to Future Expansion", () => {
      render(<ShivlakhaPage />);
      expect(screen.getAllByText(/30 Acres \(20\.0%\)/i).length).toBe(4); // 2 in bar legend, 2 in component cards
      expect(screen.getAllByText(/5 Acres \(3\.3%\)/i).length).toBe(2); // 1 in legend, 1 in card
      expect(screen.getAllByText(/85 Acres \(56\.7%\)/i).length).toBe(2); // 1 in legend, 1 in card
    });

    it("renders notice clarifying that land allocation does not imply all 150 acres are commercially operational", () => {
      render(<ShivlakhaPage />);
      expect(
        screen.getByText(
          /Readiness and development stages vary by component and do not imply that all 150 acres are currently in commercial operation\./i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Section 4: Distinct Project Components & Status Labels", () => {
    it("renders Gati Shakti Terminal with 30 acres, 'Operational' badge, and 15 September 2026 inauguration", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 3, name: /^Gati Shakti Terminal$/i })).toBeInTheDocument();
      expect(screen.getByText("Operational")).toBeInTheDocument();
      expect(screen.getAllByText(/Connected to Indian Railways Network/i).length).toBeGreaterThanOrEqual(1);
    });

    it("ensures Gati Shakti Terminal is not represented as having regular commercial service, scheduled rakes, or published tariffs", () => {
      render(<ShivlakhaPage />);
      expect(
        screen.getByText(
          /Operational status does not imply regular scheduled rake operations or published commercial tariffs/i
        )
      ).toBeInTheDocument();
    });

    it("renders Inland Container Terminal with 30 acres, 'Under Construction' badge, and CBIC approval stage", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 3, name: /^Inland Container Terminal$/i })).toBeInTheDocument();
      expect(screen.getByText("Under Construction")).toBeInTheDocument();
      expect(screen.getByText(/CBIC Approval Received \(10 Sept 2026\) · Planning Stage/i)).toBeInTheDocument();
    });

    it("ensures Inland Container Terminal is not represented as operational, commissioned, or open for commercial bookings", () => {
      render(<ShivlakhaPage />);
      expect(
        screen.getByText(
          /Currently under construction\. Not operational, not commissioned, and not open for commercial bonded cargo bookings\./i
        )
      ).toBeInTheDocument();
    });

    it("renders Manufacturing Shed with 5 acres and 'Manufacturing Infrastructure' status", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 3, name: /Container and wagon manufacturing shed/i })).toBeInTheDocument();
      expect(screen.getByText("Manufacturing Infrastructure")).toBeInTheDocument();
    });

    it("renders Future Expansion with 85 acres and 'Future Expansion' status", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 3, name: /^Future expansion$/i })).toBeInTheDocument();
      expect(screen.getByText("Future Expansion")).toBeInTheDocument();
      expect(
        screen.getByText(
          /Not represented as committed or operational infrastructure\./i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Section 5: Strategic Integration Vision", () => {
    it("renders the 4 strategic development pillars", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 3, name: /Co-Located Manufacturing & Logistics/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Direct Broad-Gauge Rail Connection/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Regional Industrial Catchment Alignment/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Controlled, Phased Development/i })).toBeInTheDocument();
    });

    it("includes the controlled operational scope notice avoiding unsupported commercial promises", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByText(/Controlled Operational Scope:/i)).toBeInTheDocument();
      expect(
        screen.getByText(
          /The company does not advertise generic transit-time guarantees, published freight discounts, or unverified train frequencies\./i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Section 6: Project Gallery", () => {
    it("renders 6 authentic Shivlakha photographs with descriptive alt text and high-contrast caption bars", () => {
      render(<ShivlakhaPage />);
      const images = screen.getAllByRole("img");
      const expectedAlts = [
        /Broad-gauge rail siding and terminal tracks connecting to Indian Railways mainline/i,
        /Shivlakha terminal operations yard, weighbridge access and administration building/i,
        /Covered freight container fabrication workshop and structural assembly shed/i,
        /Broad-gauge railway track siding with heavy ballast and pre-stressed concrete sleepers/i,
        /Shivlakha rail yard track layout and terminal staging platform/i,
        /Rail siding alignment and plant connectivity corridor/i,
      ];

      expectedAlts.forEach((altRegex) => {
        const found = images.some((img) => altRegex.test(img.getAttribute("alt") || ""));
        expect(found).toBe(true);
      });
    });
  });

  describe("Section 7: Business Enquiry", () => {
    it("renders the approved heading and customer-facing copy", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Explore a Business Discussion at Shivlakha/i })).toBeInTheDocument();
      expect(
        screen.getByText(
          /Organisations interested in the Shivlakha Integrated Project may contact Kalyani Cast Tech Limited to discuss their requirements/i
        )
      ).toBeInTheDocument();
    });

    it("links to /contact#enquiry-form and /contact", () => {
      render(<ShivlakhaPage />);
      const initiateBtn = screen.getByRole("link", { name: /Initiate Project Discussion/i });
      expect(initiateBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const contactBtn = screen.getByRole("link", { name: /Contact Corporate Office & Plant/i });
      expect(contactBtn).toHaveAttribute("href", "/contact");
    });

    it("renders the commercial terms disclosure", () => {
      render(<ShivlakhaPage />);
      expect(screen.getByText(/Commercial Terms:/i)).toBeInTheDocument();
      expect(
        screen.getByText(
          /Submitting cargo or infrastructure details initiates technical and operational feasibility review\. It does not constitute a booking confirmation/i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Strict Negative Safeguards & Perimeter Control", () => {
    it("strictly omits unverified railway and siding codes (KEGS, 08524078) and dimension (720 m)", () => {
      const { container } = render(<ShivlakhaPage />);
      const text = container.textContent || "";
      expect(text).not.toMatch(/\bKEGS\b/);
      expect(text).not.toMatch(/\b08524078\b/);
      expect(text).not.toMatch(/\b720\s*m\b/i);
      expect(text).not.toMatch(/\b720m\b/i);
    });

    it("confirms NO separate KMT navigation item or corporate profile exists", () => {
      const { container } = render(<ShivlakhaPage />);
      const navElements = container.querySelectorAll("nav");
      navElements.forEach((nav) => {
        expect(nav.textContent).not.toMatch(/KMT Engineering/i);
      });
    });
  });
});
