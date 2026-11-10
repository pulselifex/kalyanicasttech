import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import { InnovationPage } from "@/routes/innovation";

describe("Innovation & Concepts Page (WP-5B.6 Objective B)", () => {
  describe("Section 1: Innovation Hero Banner", () => {
    it("renders the primary H1 headline and corporate engineering narrative", () => {
      render(<InnovationPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent(/Engineering ideas for specialised cargo and rail applications\./i);
      expect(screen.getAllByText(/Kalyani Cast Tech Limited/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Specialised Cargo R&D · Verified Engineering Concepts/i)).toBeInTheDocument();
    });

    it("renders breadcrumb navigation linking to Home and Manufacturing", () => {
      render(<InnovationPage />);
      const breadcrumb = screen.getByLabelText(/breadcrumb/i);
      expect(within(breadcrumb).getByText(/Home/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Manufacturing/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Innovation & Concepts/i)).toBeInTheDocument();
    });

    it("provides the 3 primary action CTAs linking to concepts, enquiry, and commercial products", () => {
      render(<InnovationPage />);
      const conceptsBtn = screen.getByRole("link", { name: /Explore Engineering Concepts/i });
      expect(conceptsBtn).toHaveAttribute("href", "#concepts");

      const enquiryBtn = screen.getByRole("link", { name: /Discuss a Specialised Requirement/i });
      expect(enquiryBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const productsBtn = screen.getByRole("link", { name: /View Commercial Products/i });
      expect(productsBtn).toHaveAttribute("href", "/products-applications");
    });

    it("renders the authentic 2016 Indian Railways dwarf container milestone card", () => {
      render(<InnovationPage />);
      expect(screen.getByText(/Engineering Milestone Record/i)).toBeInTheDocument();
      expect(screen.getByText(/Pioneering Double-Stack Dwarf Container Technology/i)).toBeInTheDocument();
      expect(screen.getByText(/Shri Naresh Kumar \(Managing Director, Kalyani Cast Tech Limited\)/i)).toBeInTheDocument();
    });
  });

  describe("Section 2: Engineering & Innovation Approach", () => {
    it("renders the 4 core methodology pillars without unsupported R&D claims", () => {
      render(<InnovationPage />);
      expect(screen.getByText(/Engineering Methodology/i)).toBeInTheDocument();
      expect(screen.getByText(/How We Approach Complex Freight Constraints/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Cargo-Centric Dimensional Modeling/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Electrified Rail Clearance Engineering/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /High-Payload Structural Distribution/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Intermodal Road-Rail Integration/i })).toBeInTheDocument();
    });
  });

  describe("Section 3: Specialised Container Concepts", () => {
    it("renders Double-Stack Dwarf Container with commercial link to /products-applications", () => {
      render(<InnovationPage />);
      expect(screen.getByRole("heading", { level: 3, name: /Double-Stack Dwarf Container \(1,930 mm Profile\)/i })).toBeInTheDocument();
      expect(screen.getByText(/Commercially In-Service · Proven Technology/i)).toBeInTheDocument();
      const dwarfLink = screen.getByRole("link", { name: /View Dwarf Container Models in Catalogue/i });
      expect(dwarfLink).toHaveAttribute("href", "/products-applications");
    });

    it("renders Heavy-Duty Open-Top Coiltainer with commercial link to /products-applications", () => {
      render(<InnovationPage />);
      expect(screen.getByRole("heading", { level: 3, name: /Specialised Heavy-Duty Coiltainer with Integral Saddles/i })).toBeInTheDocument();
      expect(screen.getByText(/71 MT Chassis Operating Protocol/i)).toBeInTheDocument();
      const coiltainerLink = screen.getByRole("link", { name: /Inspect Coiltainer Specifications in Catalogue/i });
      expect(coiltainerLink).toHaveAttribute("href", "/products-applications");
    });

    it("renders CUBOID 12.5 m³ Modular Parcel & 2-Wheeler Box concept", () => {
      render(<InnovationPage />);
      expect(screen.getByRole("heading", { level: 3, name: /CUBOID 12\.5 m³ Modular Parcel & 2-Wheeler Box/i })).toBeInTheDocument();
      expect(screen.getByText(/Concept Design · Engineering Prototype/i)).toBeInTheDocument();
      expect(screen.getByText(/10 motorcycles or 4 three-wheelers/i)).toBeInTheDocument();
    });

    it("renders 304-Grade Stainless Steel Salt & Bulk Chemical Container development", () => {
      render(<InnovationPage />);
      expect(screen.getByRole("heading", { level: 3, name: /304-Grade Stainless Steel Salt & Bulk Chemical Container/i })).toBeInTheDocument();
      expect(screen.getByText(/Engineering Development · Field Trials/i)).toBeInTheDocument();
      expect(screen.getByText(/Bhimasar, Kachchh/i)).toBeInTheDocument();
    });
  });

  describe("Section 4: Rolling-Stock Concepts and R&D", () => {
    it("renders the 3 rolling-stock concepts with clear development status badges", () => {
      render(<InnovationPage />);
      expect(screen.getByText(/Railway Rolling-Stock Concepts/i)).toBeInTheDocument();
      expect(screen.getByText(/Rolling-Stock Concepts & Forward Engineering Initiatives/i)).toBeInTheDocument();

      // Bi-Level Auto Car Carrier
      expect(screen.getByRole("heading", { level: 3, name: /Bi-Level Multi-Deck Auto Car Carrier Wagon/i })).toBeInTheDocument();
      expect(screen.getByText(/Concept Design · Engineering Evaluation/i)).toBeInTheDocument();

      // Next-Gen Flat Wagon
      expect(screen.getByRole("heading", { level: 3, name: /Next-Generation Low-Platform Container Flat Wagon/i })).toBeInTheDocument();
      expect(screen.getByText(/Concept Design · Under Development/i)).toBeInTheDocument();

      // RORO Intermodal Wagon
      expect(screen.getByRole("heading", { level: 3, name: /Roll-on Roll-off \(RORO\) Intermodal Rail Wagon/i })).toBeInTheDocument();
      expect(screen.getByText(/Conceptual Study · Engineering Review/i)).toBeInTheDocument();
    });

    it("renders the regulatory & engineering governance disclaimer on rolling stock concepts", () => {
      render(<InnovationPage />);
      expect(screen.getByText(/Regulatory & Engineering Notice:/i)).toBeInTheDocument();
      expect(screen.getByText(/All rolling-stock concepts presented above are forward-looking engineering design studies/i)).toBeInTheDocument();
      expect(screen.getByText(/Kalyani Cast Tech Limited does not represent these concepts as currently commissioned commercial railway wagons/i)).toBeInTheDocument();
    });
  });

  describe("Section 5: Innovation Gallery", () => {
    it("renders the 6 authentic gallery cards with captions and metadata tags", () => {
      render(<InnovationPage />);
      expect(screen.getByText(/Innovation & Engineering Visual Archive/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Dwarf Container Railway Introduction/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Double-Stack Dwarf Container/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Heavy-Duty Coiltainer Structural Cradle/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /CUBOID Modular Container Prototype/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Next-Generation Container Flat Wagon/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 4, name: /Bi-Level Auto Car Carrier Concept/i })).toBeInTheDocument();
    });
  });

  describe("Section 6: Business Enquiry Callout", () => {
    it("renders the B2B engineering consultation section with commercial disclaimer and direct CTAs", () => {
      render(<InnovationPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Discuss a Specialised Requirement/i })).toBeInTheDocument();
      expect(screen.getByText(/B2B Engineering Collaboration/i)).toBeInTheDocument();
      expect(screen.getByText(/Kalyani Cast Tech Limited does not make pre-feasibility commitments on unverified inquiries/i)).toBeInTheDocument();

      const customEnquiryBtn = screen.getByRole("link", { name: /Enquire About Custom Engineering/i });
      expect(customEnquiryBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const catalogueBtn = screen.getByRole("link", { name: /View Commercial Catalogue/i });
      expect(catalogueBtn).toHaveAttribute("href", "/products-applications");

      const castingsBtn = screen.getByRole("link", { name: /Precision Castings Division/i });
      expect(castingsBtn).toHaveAttribute("href", "/products-applications#castings");
    });
  });

  describe("Strict Negative Safeguards & Perimeter Control", () => {
    it("enforces omission of unverified codes (KEGS, 08524078), measurements (720 m), and unverified capacity (2,400 wagons)", () => {
      const { container } = render(<InnovationPage />);
      const textContent = container.textContent || "";
      expect(textContent).not.toMatch(/\bKEGS\b/);
      expect(textContent).not.toMatch(/\b08524078\b/);
      expect(textContent).not.toMatch(/\b720\s*m\b/i);
      expect(textContent).not.toMatch(/\b720m\b/i);
      expect(textContent).not.toMatch(/2[,.]?400\s*(?:wagons|units)/i);
    });
  });
});
