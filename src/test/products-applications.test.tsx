import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import React from "react";
import { ProductsApplicationsPage } from "@/routes/products-applications";
import { ContainerCatalog, CONTAINER_MODELS } from "@/components/site/ContainerCatalog";

describe("Products & Applications Page (WP-5B.5)", () => {

  describe("Section 1: Product Hero Banner", () => {
    it("renders the primary H1 headline and corporate engineering narrative", () => {
      render(<ProductsApplicationsPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent(/The cargo picks the container\. We engineer it\./i);
      expect(screen.getAllByText(/Kalyani Cast Tech Limited/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Engineered Freight Containers · ISO 1496 Series-1 Rig Tested/i)).toBeInTheDocument();
    });

    it("renders breadcrumb navigation linking to Home", () => {
      render(<ProductsApplicationsPage />);
      const breadcrumb = screen.getByLabelText(/breadcrumb/i);
      expect(within(breadcrumb).getByText(/Home/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Products & Applications/i)).toBeInTheDocument();
    });

    it("provides the primary action CTAs linking to catalogue, cargo solutions, and enquiry", () => {
      render(<ProductsApplicationsPage />);
      const catalogueBtn = screen.getByRole("link", { name: /Explore Product Catalogue/i });
      expect(catalogueBtn).toHaveAttribute("href", "#catalogue");

      const cargoBtn = screen.getByRole("link", { name: /Solutions by Cargo/i });
      expect(cargoBtn).toHaveAttribute("href", "#cargo-solutions");

      const enquiryBtn = screen.getByRole("link", { name: /Commercial & Technical Enquiry/i });
      expect(enquiryBtn).toHaveAttribute("href", "/contact#enquiry-form");
    }, 15000);
  });

  describe("Section 2: Supported Product Categories", () => {
    it("renders the supported equipment categories without unverified marketing items", () => {
      render(<ProductsApplicationsPage />);
      expect(screen.getByText(/Specialised High-Cube & Bulk/i)).toBeInTheDocument();
      expect(screen.getByText(/Double-Stack Dwarf Range/i)).toBeInTheDocument();
      expect(screen.getByText(/Heavy Coiltainers & Steel Freight/i)).toBeInTheDocument();
      expect(screen.getByText(/CUBOID Parcel & Automotive Boxes/i)).toBeInTheDocument();
      expect(screen.getByText(/Precision Foundry & Rail Castings/i)).toBeInTheDocument();
    });

    it("renders the rolling-stock innovation callout directing R&D concepts to /innovation", () => {
      render(<ProductsApplicationsPage />);
      expect(screen.getByText(/Looking for Railway Rolling Stock Concepts\?/i)).toBeInTheDocument();
      const innovationLink = screen.getByRole("link", { name: /Explore Innovation R&D/i });
      expect(innovationLink).toHaveAttribute("href", "/innovation");
    });
  });

  describe("Section 3: Interactive Product Catalogue", () => {
    it("renders data-driven dynamic product count rather than a hardcoded number", () => {
      render(<ContainerCatalog />);
      const countNotice = screen.getByText(/Showing/i);
      expect(countNotice).toHaveTextContent(new RegExp(`Showing ${CONTAINER_MODELS.length} Container Configurations`, "i"));
      // Ensure no permanent hardcoded text like "Showing 16" or "Showing 17"
      expect(countNotice).not.toHaveTextContent("Showing 16 Container Models");
    });

    it("filters container models when clicking category filter tabs", () => {
      render(<ContainerCatalog />);
      // Click 'Dwarf Containers' tab
      const dwarfTab = screen.getByRole("button", { name: "Dwarf Containers" });
      fireEvent.click(dwarfTab);

      // Verify dwarf models are visible
      expect(screen.getByText("40 Feet Side Access Dwarf Container")).toBeInTheDocument();
      expect(screen.getByText("42 Feet Dwarf Open Top Container")).toBeInTheDocument();

      // Verify non-dwarf models are filtered out
      expect(screen.queryByText("40 Feet Open Top Coiltainer")).not.toBeInTheDocument();
    });

    it("filters models dynamically via search input", () => {
      render(<ContainerCatalog />);
      const searchInput = screen.getByPlaceholderText(/Search model, dimension, cargo\.\.\./i);
      fireEvent.change(searchInput, { target: { value: "Cotton" } });

      // Model 4 (Cotton Bale container) should remain visible
      expect(screen.getByText(/40 Feet HC Container/i)).toBeInTheDocument();
      expect(screen.getByText(/84 m³ Cotton Bale Config/i)).toBeInTheDocument();

      // Unrelated model should be hidden
      expect(screen.queryByText("CUBOID Container (Parcel, Two-Wheeler & Three-Wheeler Box)")).not.toBeInTheDocument();
    });

    it("renders Model 17 (20HC SS) in specifications-only layout with image pending notice", () => {
      render(<ContainerCatalog />);
      // Verify Model 17 card exists
      const specOnlyCard = screen.getByTestId("model-card-spec-only-17");
      expect(specOnlyCard).toBeInTheDocument();

      // Verify it displays the approved specifications-only copy
      expect(within(specOnlyCard).getByText(/Specifications Available · Image Pending/i)).toBeInTheDocument();
      expect(within(specOnlyCard).getByText(/Authentic photography pending final engineering release/i)).toBeInTheDocument();
      expect(within(specOnlyCard).getByText(/Specs-Only Record/i)).toBeInTheDocument();

      // Verify it does NOT render an img tag inside its card banner
      const imgInCard = specOnlyCard.querySelector("img");
      expect(imgInCard).toBeNull();
    });
  });

  describe("Section 4: Specification Drawer Presentation", () => {
    it("opens the specification drawer with certified tolerances when selecting a model", () => {
      render(<ContainerCatalog />);
      const viewDetailsBtn = screen.getAllByRole("button", { name: /View Engineering Details/i })[0];
      fireEvent.click(viewDetailsBtn);

      // Verify drawer opens with technical parameters
      expect(screen.getByRole("heading", { level: 2, name: /20 Feet GP Container/i })).toBeInTheDocument();
      expect(screen.getByText(/Tolerance: \+0 \/ -5 mm \(standard\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Applicable Approved Engineering Standards/i)).toBeInTheDocument();
    });

    it("displays the general arrangement diagram and diagram badge on models with diagrams without confidentiality notice", () => {
      render(<ContainerCatalog />);
      // Filter or find Model 7 (HC Open Top Coiltainer)
      const searchInput = screen.getByPlaceholderText(/Search model, dimension, cargo\.\.\./i);
      fireEvent.change(searchInput, { target: { value: "Model 07" } });

      const model7Btn = screen.getByRole("button", { name: /View Engineering Details/i });
      fireEvent.click(model7Btn);

      // Verify drawing section exists with General Arrangement Diagram badge
      expect(screen.getByText(/Simplified General Arrangement Diagram/i)).toBeInTheDocument();
      expect(screen.getAllByText(/General Arrangement Diagram/i).length).toBeGreaterThanOrEqual(1);
      // Verify confidentiality notice has been removed per Objective B
      expect(screen.queryByText(/Confidentiality Notice: Detailed component-level manufacturing prints/i)).not.toBeInTheDocument();
      // Verify button CTA says "Enquire About This Configuration"
      expect(screen.getByRole("link", { name: /Enquire About This Configuration/i })).toBeInTheDocument();
    });

    it("displays the specifications-only banner in the drawer for Model 17", () => {
      render(<ContainerCatalog />);
      const searchInput = screen.getByPlaceholderText(/Search model, dimension, cargo\.\.\./i);
      fireEvent.change(searchInput, { target: { value: "Stainless Steel" } });

      const model17Btn = screen.getByRole("button", { name: /View Engineering Details/i });
      fireEvent.click(model17Btn);

      // Verify drawer displays the spec-only banner
      expect(screen.getByTestId("drawer-spec-only-banner")).toBeInTheDocument();
      expect(screen.getByText(/Authentic Image Pending Engineering Release/i)).toBeInTheDocument();
    });
  });

  describe("WP-5B.7 Objective B: Drawing Policy Content Removal", () => {
    it("confirms public-facing drawing policy and documentation governance section has been removed", () => {
      render(<ProductsApplicationsPage />);
      expect(screen.queryByText(/Drawing Security & Documentation Policy/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Technical Documentation & Engineering Drawing Governance/i)).not.toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 3, name: /Manufacturing Prints/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 3, name: /General Arrangement/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 3, name: /Sanitised Schematics/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("heading", { level: 3, name: /CAD Layer Sanitisation/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("link", { name: /Request Technical Datasheet \/ GA Drawing/i })).not.toBeInTheDocument();
    });
  });

  describe("WP-5B.7 Objective A: Website-Wide Dimensional Notation", () => {
    it("renders feet-and-inches prime/double-prime notation across container models", () => {
      render(<ContainerCatalog />);
      // Standard ISO models
      expect(screen.getAllByText(/20′ × 8′ × 8′6″/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/20′ × 8′ × 9′6″/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/40′ × 8′ × 9′6″/i).length).toBeGreaterThan(0);
      // Dwarf container exception: height strictly 6′3″
      expect(screen.getAllByText(/40′ × 8′6″ × 6′3″/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/42′ × 8′6″ × 6′3″/i).length).toBeGreaterThan(0);
    });

    it("ensures no legacy decimal feet notation exists in container nominal sizes", () => {
      render(<ContainerCatalog />);
      CONTAINER_MODELS.forEach((m) => {
        expect(m.nominalSize).not.toMatch(/8\.5'/);
        expect(m.nominalSize).not.toMatch(/8\.6'/);
        expect(m.nominalSize).not.toMatch(/9\.5'/);
        expect(m.nominalSize).not.toMatch(/9\.6'/);
        expect(m.nominalSize).not.toMatch(/6\.3'/);
      });
    });
  });

  describe("Sub-Navigation & Products Refinement (WP-5B.6 Objective A)", () => {
    it("renders product sub-navigation tabs distinguishing Containers from Precision Castings", () => {
      render(<ProductsApplicationsPage />);
      const tablist = screen.getByRole("tablist", { name: /Product Divisions Sub-Navigation/i });
      expect(tablist).toBeInTheDocument();

      const containersTab = within(tablist).getByRole("tab", { name: /Containers & Specialised Products/i });
      const castingsTab = within(tablist).getByRole("tab", { name: /Precision Castings/i });

      expect(containersTab).toHaveAttribute("aria-selected", "true");
      expect(castingsTab).toHaveAttribute("aria-selected", "false");
    });

    it("switches to Precision Castings division when clicking the tab", () => {
      render(<ProductsApplicationsPage />);
      const castingsTab = screen.getByRole("tab", { name: /Precision Castings/i });
      fireEvent.click(castingsTab);

      expect(castingsTab).toHaveAttribute("aria-selected", "true");
      expect(screen.getByText(/Kalyani Cast Tech Limited · Precision Castings Division/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Container Corner Castings/i })).toBeInTheDocument();
    });
  });

  describe("Section 6: Precision Castings Division (WP-5B.6)", () => {
    it("renders the 5 authentic Rewari Works casting items with high-contrast captions when Castings tab is selected", () => {
      render(<ProductsApplicationsPage />);
      const castingsTab = screen.getByRole("tab", { name: /Precision Castings/i });
      fireEvent.click(castingsTab);

      expect(screen.getByText(/Precision Ferrous Castings for Rail & Core Industry/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Container Corner Castings/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /WDG4 Locomotive Adapter/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Electric Locomotive Bearing Housing/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Graded Cast-Iron Brake Blocks/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Electrical Loco End Covers & Plungers/i })).toBeInTheDocument();
    });

    it("presents Container Corner Castings prominently as a featured core casting product with Lloyd's and IRS badges", () => {
      render(<ProductsApplicationsPage />);
      const castingsTab = screen.getByRole("tab", { name: /Precision Castings/i });
      fireEvent.click(castingsTab);

      expect(screen.getByText(/Featured Core Casting Product/i)).toBeInTheDocument();
      expect(screen.getByText(/Lloyd's Register & IRS Approved/i)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /Enquire About Corner Castings/i })).toHaveAttribute(
        "href",
        "/contact?product=Corner%20Castings#enquiry-form"
      );
    });

    it("renders the 4-point foundry infrastructure and quality parameters strip", () => {
      render(<ProductsApplicationsPage />);
      const castingsTab = screen.getByRole("tab", { name: /Precision Castings/i });
      fireEvent.click(castingsTab);

      expect(screen.getByText(/Foundry Infrastructure & Quality Parameters/i)).toBeInTheDocument();
      expect(screen.getByText(/Melting Capacity/i)).toBeInTheDocument();
      expect(screen.getByText(/No-Bake Moulding/i)).toBeInTheDocument();
      expect(screen.getByText(/Spectrometry & NDT Lab/i)).toBeInTheDocument();
      expect(screen.getAllByText(/Heat Treatment/i).length).toBeGreaterThan(0);
    });

    it("renders the 6-parameter custom engineering checklist and commercial disclaimer on containers tab", () => {
      render(<ProductsApplicationsPage />);
      expect(screen.getByText(/Looking for the Right Container Configuration\?/i)).toBeInTheDocument();
      expect(screen.getByText(/Key Parameters We Review to Confirm a Configuration:/i)).toBeInTheDocument();
      expect(screen.getByText(/Commodity type and bulk density/i)).toBeInTheDocument();
      expect(screen.getByText(/Unit dimensions and total payload weight/i)).toBeInTheDocument();
      expect(screen.getByText(/Loading and unloading method/i)).toBeInTheDocument();
      expect(screen.getByText(/Handling equipment at origin and destination/i)).toBeInTheDocument();
      expect(screen.getByText(/Route, transport mode and electrified rail clearances/i)).toBeInTheDocument();
      expect(screen.getByText(/Target requirement date and annual delivery schedule/i)).toBeInTheDocument();

      // Check commercial governance notice (no promises on timelines or quotes)
      expect(screen.getByText(/Commercial Notice:/i)).toBeInTheDocument();
      expect(screen.getByText(/Production slots, custom design feasibility, minimum order quantities/i)).toBeInTheDocument();
    });

    it("provides high-contrast enquiry routes to /contact#enquiry-form and /contact", () => {
      render(<ProductsApplicationsPage />);
      const enquiryLink = screen.getByRole("link", { name: /Enquire About a Product Configuration/i });
      expect(enquiryLink).toHaveAttribute("href", "/contact#enquiry-form");

      const directoryLink = screen.getByRole("link", { name: /Corporate Directory & Plant Enquiries/i });
      expect(directoryLink).toHaveAttribute("href", "/contact");
    });
  });

  describe("Strict Negative Safeguards & Perimeter Control", () => {
    it("enforces omission of unverified codes (KEGS, 08524078) and measurement (720 m)", () => {
      const { container } = render(<ProductsApplicationsPage />);
      const textContent = container.textContent || "";
      expect(textContent).not.toMatch(/\bKEGS\b/);
      expect(textContent).not.toMatch(/\b08524078\b/);
      expect(textContent).not.toMatch(/\b720\s*m\b/i);
      expect(textContent).not.toMatch(/\b720m\b/i);
    });
  });
});
