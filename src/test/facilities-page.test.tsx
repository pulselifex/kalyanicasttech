import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { FacilitiesPage } from "@/routes/facilities";

describe("WP-5B.4 — Manufacturing Facilities & Capabilities Page (/facilities)", () => {
  describe("Section 1: Industrial Facilities Hero", () => {
    it("renders the primary H1 headline and central core message", () => {
      render(<FacilitiesPage />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toMatch(/Manufacturing Facilities & Industrial Infrastructure/i);

      expect(
        screen.getByText(
          /Manufacturing heritage supported by specialised industrial infrastructure and an expanding integrated platform/i
        )
      ).toBeInTheDocument();
    });

    it("renders breadcrumb navigation linking to Home and Manufacturing", () => {
      render(<FacilitiesPage />);
      const breadcrumb = screen.getByRole("navigation", { name: /Breadcrumb/i });
      expect(breadcrumb).toBeInTheDocument();
      expect(within(breadcrumb).getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
      expect(within(breadcrumb).getByRole("link", { name: /Manufacturing/i })).toHaveAttribute(
        "href",
        "/manufacturing"
      );
    });

    it("provides the primary action CTAs to capabilities and commercial consultation", () => {
      render(<FacilitiesPage />);
      const exploreBtn = screen.getByRole("link", { name: /Explore Capabilities/i });
      expect(exploreBtn).toBeInTheDocument();
      expect(exploreBtn).toHaveAttribute("href", "/manufacturing");

      const consultBtn = screen.getByRole("link", { name: /Commercial Consultation/i });
      expect(consultBtn).toBeInTheDocument();
      expect(consultBtn).toHaveAttribute("href", "/contact#enquiry-form");
    });

    it("displays authentic Rewari Works exterior visual with proper alt text", () => {
      render(<FacilitiesPage />);
      const heroImg = screen.getByAltText(/Kalyani Cast Tech Rewari Works industrial plant exterior facade/i);
      expect(heroImg).toBeInTheDocument();
      expect(heroImg).toHaveAttribute("src", "/assets/manufacturing/Rewari Kalyani Casttech.png");
    });
  });

  describe("Section 2: Manufacturing Heritage — Rewari Works", () => {
    it("identifies Rewari Works in Haryana and describes supported activities", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", {
          name: /Rewari Works: Heavy Foundry & Container Fabrication/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getAllByText(/Village Mamaria Thethar.*District Rewari/i).length
      ).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Ferrous Foundry Bays/i)).toBeInTheDocument();
      expect(screen.getByText(/Container Assembly Bays/i)).toBeInTheDocument();
    });
  });

  describe("Section 3: Manufacturing Infrastructure & Capabilities", () => {
    it("renders plate preparation, boxing jigs, and surface coating cards", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", {
          name: /Fabrication, Assembly & Container Infrastructure/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText(/Plate Preparation & Forming/i)).toBeInTheDocument();
      expect(screen.getByText(/Boxing Jigs & Frame Assembly/i)).toBeInTheDocument();
      expect(screen.getByText(/Surface Treatment & Coating/i)).toBeInTheDocument();
    });
  });

  describe("Section 4: Integrated Shivlakha Platform & Authorised Land Allocation", () => {
    it("strictly omits KMT wording per Management Clarification 1 (reserved exclusively for Shivlakha introduction)", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", { name: /The Integrated Shivlakha Platform/i })
      ).toBeInTheDocument();

      expect(screen.queryByText(/KMT Engineering/i)).not.toBeInTheDocument();
    });

    it("renders the 150-acre allocation table and adheres to strict prompt safeguards", () => {
      render(<FacilitiesPage />);
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();

      // Row 1: Gati Shakti Terminal 30 Acres
      expect(within(table).getByText("Gati Shakti Terminal")).toBeInTheDocument();
      expect(within(table).getAllByText("30 Acres").length).toBe(2);
      expect(within(table).getByText("Operational")).toBeInTheDocument();
      expect(within(table).getByText(/Inaugurated 15 September 2026/i)).toBeInTheDocument();

      // Row 2: Inland Container Terminal 30 Acres
      expect(within(table).getByText("Inland Container Terminal")).toBeInTheDocument();
      expect(within(table).getByText("Under development")).toBeInTheDocument();
      expect(within(table).getByText(/CBIC approval received 10 September 2026/i)).toBeInTheDocument();

      // Row 3: Shed 5 Acres
      expect(within(table).getByText("Container and wagon manufacturing shed")).toBeInTheDocument();
      expect(within(table).getByText("5 Acres")).toBeInTheDocument();
      expect(within(table).getByText("Manufacturing Infrastructure")).toBeInTheDocument();

      // Row 4: Future Expansion 85 Acres
      expect(within(table).getByText("Future expansion")).toBeInTheDocument();
      expect(within(table).getByText("85 Acres")).toBeInTheDocument();
      expect(within(table).getByText("Allocated for Future Expansion")).toBeInTheDocument();

      // Total: 150 Acres
      expect(within(table).getByText("Total Master Plan Allocation")).toBeInTheDocument();
      expect(within(table).getByText("150 Acres")).toBeInTheDocument();

      // Mandatory safeguards check: Ensure unverified codes are NOT published
      expect(screen.queryByText(/KEGS/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/08524078/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/720\s*m/i)).not.toBeInTheDocument();
    });
  });

  describe("Section 5: Engineering, Quality & Testing Infrastructure", () => {
    it("renders load testing rig and metallurgical testing with management certification disclaimer", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", {
          name: /Engineering, Testing & Quality Infrastructure/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByText(/In-House ISO 1496 Container Testing Facility/i)).toBeInTheDocument();
      expect(screen.getByText(/Metallurgical & NDT Examination/i)).toBeInTheDocument();

      // Certification clarification disclaimer
      expect(
        screen.getByText(
          /ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 represent certified management system standards and do not constitute blanket product certification/i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Section 6: Facilities Photographic Gallery", () => {
    it("renders category filter buttons and filters gallery items on click", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", { name: /Facilities Photographic Gallery/i })
      ).toBeInTheDocument();

      const allBtn = screen.getByRole("button", { name: /All Facilities/i });
      const rewariBtn = screen.getByRole("button", { name: /Rewari Works/i });
      const processesBtn = screen.getByRole("button", { name: /Manufacturing Processes/i });
      const qualityBtn = screen.getByRole("button", { name: /Quality & Testing/i });
      const shivlakhaBtn = screen.getByRole("button", { name: /Shivlakha Development/i });

      expect(allBtn).toBeInTheDocument();
      expect(rewariBtn).toBeInTheDocument();
      expect(processesBtn).toBeInTheDocument();
      expect(qualityBtn).toBeInTheDocument();
      expect(shivlakhaBtn).toBeInTheDocument();

      // Click "Rewari Works" tab
      fireEvent.click(rewariBtn);
      expect(screen.getByText(/Rewari Works Main Plant Facade/i)).toBeInTheDocument();
      expect(screen.queryByText(/Gati Shakti Terminal Rail Siding/i)).not.toBeInTheDocument();

      // Click "Shivlakha Development" tab
      fireEvent.click(shivlakhaBtn);
      expect(screen.getByText(/Gati Shakti Terminal Rail Siding/i)).toBeInTheDocument();
      expect(screen.queryByText(/Rewari Works Main Plant Facade/i)).not.toBeInTheDocument();

      // Click "All Facilities" tab
      fireEvent.click(allBtn);
      expect(screen.getByText(/Rewari Works Main Plant Facade/i)).toBeInTheDocument();
      expect(screen.getByText(/Gati Shakti Terminal Rail Siding/i)).toBeInTheDocument();
    });
  });

  describe("Section 7: Enquiry and Consultation", () => {
    it("provides clear routes to commercial enquiry and corporate directory", () => {
      render(<FacilitiesPage />);
      expect(
        screen.getByRole("heading", {
          name: /Arrange a Technical Audit or Facilities Visit/i,
        })
      ).toBeInTheDocument();

      const enquiryLink = screen.getByRole("link", { name: /Commercial Enquiry Form/i });
      expect(enquiryLink).toBeInTheDocument();
      expect(enquiryLink).toHaveAttribute("href", "/contact#enquiry-form");

      const directoryLink = screen.getByRole("link", { name: /Corporate Directory & Contacts/i });
      expect(directoryLink).toBeInTheDocument();
      expect(directoryLink).toHaveAttribute("href", "/contact");
    });
  });
});
