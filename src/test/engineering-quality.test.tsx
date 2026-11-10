import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import { EngineeringQualityPage } from "@/routes/engineering-quality";

describe("Engineering & Quality Page (WP-5B.7 Objective C)", () => {
  describe("Section 1: Hero Banner", () => {
    it("renders the approved H1 headline and corporate engineering narrative", () => {
      render(<EngineeringQualityPage />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent(/Engineering Precision\. Manufacturing Confidence\./i);
      expect(screen.getAllByText(/Kalyani Cast Tech Limited/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Rewari Works/i).length).toBeGreaterThan(0);
    });

    it("renders breadcrumb navigation linking to Home and Manufacturing", () => {
      render(<EngineeringQualityPage />);
      const breadcrumb = screen.getByLabelText(/breadcrumb/i);
      expect(within(breadcrumb).getByText(/Home/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Manufacturing & Quality/i)).toBeInTheDocument();
      expect(within(breadcrumb).getByText(/Engineering & Quality/i)).toBeInTheDocument();
    });

    it("renders the 4-metric quick stat strip", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getAllByText(/ISO 1496-1/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/96,012 kg/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/24 Elements/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Level-II/i).length).toBeGreaterThan(0);
    });

    it("renders primary action CTAs linking to capabilities, testing infrastructure and enquiry", () => {
      render(<EngineeringQualityPage />);
      const capBtn = screen.getByRole("link", { name: /Explore Engineering Capabilities/i });
      expect(capBtn).toHaveAttribute("href", "#capabilities");

      const infraBtn = screen.getByRole("link", { name: /Testing Rig & Infrastructure/i });
      expect(infraBtn).toHaveAttribute("href", "#testing-infrastructure");

      const enquiryBtn = screen.getByRole("link", { name: /Commercial & Technical Enquiry/i });
      expect(enquiryBtn).toHaveAttribute("href", "/contact#enquiry-form");
    });
  });

  describe("Section 2: Engineering Capabilities", () => {
    it("renders the 5 B2B capability areas without shopfloor trivia", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByText(/Design & Engineering Capabilities/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Product Engineering & Structural Design/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Specialised Container Development/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Manufacturing Engineering & Tooling/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Application-Oriented Engineering/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Continuous Product Improvement/i })).toBeInTheDocument();
    });

    it("articulates key engineering deliverables including FEA, clearance envelopes, and tooling", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByText(/FEA structural deflection and joint stress analysis/i)).toBeInTheDocument();
      expect(screen.getByText(/Low-profile double-stack electrified corridor envelopes/i)).toBeInTheDocument();
      expect(screen.getByText(/Hydraulic and pneumatic assembly alignment jigs/i)).toBeInTheDocument();
      expect(screen.getByText(/Tare weight reduction saving up to 400 kg per container/i)).toBeInTheDocument();
    });
  });

  describe("Section 3: Quality in Manufacturing", () => {
    it("renders the 5 staged quality assurance pillars from raw melt to finished product", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByText(/Quality Assurance Architecture/i)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Material Evaluation & Incoming Inspection/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /In-Process Manufacturing Verification/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Dimensional & Geometric Inspection/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Finished Product Inspection/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Testing & Validation Protocols/i })).toBeInTheDocument();
    });

    it("cites relevant technical standards across each stage", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByText(/ASTM A36 · IS 2062 · Corten Grade · ISO 1161 Raw Melts/i)).toBeInTheDocument();
      expect(screen.getByText(/AWS D1\.1 \/ ISO 15614 Qualified Welding Procedures/i)).toBeInTheDocument();
      expect(screen.getByText(/ISO 668 Dimensional Tolerances · ISO 1161 Geometry/i)).toBeInTheDocument();
      expect(screen.getByText(/SA 2\.5 Shot Blast · 120\+ Micron Multi-Coat Marine System/i)).toBeInTheDocument();
      expect(screen.getByText(/ISO 1496-1 §6\.2 \(Stacking\) · §6\.8 \(Floor\) · §6\.14 \(Weather-tight\)/i)).toBeInTheDocument();
    });
  });

  describe("Section 4: Testing & Inspection Infrastructure", () => {
    it("renders the 8 in-house testing facilities at Rewari Works", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByRole("heading", { level: 3, name: /In-House ISO 1496 Structural Load-Testing Facility/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Floor-Strength Dynamic Axle Load Tester/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /24-Element Optical Emission Spectrometer/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /40-Tonne Universal Testing Machine/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /-45°C Sub-Zero Charpy Impact Tester/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Non-Destructive Testing \(NDT\) Suite/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /High-Pressure Multi-Nozzle Water Spray Rig/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: /Computerised Heat Treatment & Furnace Control/i })).toBeInTheDocument();
    });

    it("verifies accurate ratings for stacking load and forklift axle test", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getAllByText(/96,012 kg/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/7,260 kg \(16,006 lb\) total axle load/i)).toBeInTheDocument();
      expect(screen.getByText(/ASNT \/ ISNT Level-II specialists/i)).toBeInTheDocument();
    });
  });

  describe("Section 5: Standards & Certifications", () => {
    it("renders the mandatory governance distinction that testing is not automatic certification", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByText(/Mandatory Governance Distinction — Testing Is Not Automatic Certification:/i)).toBeInTheDocument();
      expect(screen.getByText(/Test equipment, inspection methods, test reports, and third-party certifications are distinct legal and technical instruments/i)).toBeInTheDocument();
    });

    it("distinguishes management systems from product type approvals and statutory assessments", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getAllByText(/MANAGEMENT SYSTEMS/i).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("heading", { level: 3, name: /ISO 9001:2015 Quality Management/i }).length).toBeGreaterThan(0);

      expect(screen.getAllByText(/PRODUCT TYPE APPROVALS/i).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("heading", { level: 3, name: /Lloyd's Register & IRS Approvals/i }).length).toBeGreaterThan(0);

      expect(screen.getAllByText(/STATUTORY ASSESSMENTS/i).length).toBeGreaterThan(0);
      expect(screen.getAllByRole("heading", { level: 3, name: /RITES & Technical Appraisals/i }).length).toBeGreaterThan(0);
    });

    it("embeds the interactive CertificatesGallery component", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Official Approvals & Tested Capacity Records/i })).toBeInTheDocument();
    });
  });

  describe("Section 6: Engineering and Quality Gallery", () => {
    it("renders 6 authentic Rewari Works photographs with high-contrast captions", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Rewari Works Testing & Quality Inspection Gallery/i })).toBeInTheDocument();

      const images = screen.getAllByRole("img");
      const galleryAlts = [
        /Container structural welding inspection and ISO 1496 verification protocol/i,
        /Hydraulic container boxing fixture verifying squareness/i,
        /Container corner castings manufactured as per ISO 1161/i,
        /Industrial container fabrication workshop and structural assembly bay/i,
        /Precision metal forming, CNC shearing and brake-press tooling/i,
        /Finished freight containers exiting the paint curing booth/i,
      ];

      galleryAlts.forEach((altRegex) => {
        const found = images.some((img) => altRegex.test(img.getAttribute("alt") || ""));
        expect(found).toBe(true);
      });
    });
  });

  describe("Section 7: Business Enquiry", () => {
    it("renders the business enquiry section with clear CTAs and commercial terms", () => {
      render(<EngineeringQualityPage />);
      expect(screen.getByRole("heading", { level: 2, name: /Discuss Your Manufacturing Requirement/i })).toBeInTheDocument();

      const initiateBtn = screen.getByRole("link", { name: /Initiate Technical Enquiry/i });
      expect(initiateBtn).toHaveAttribute("href", "/contact#enquiry-form");

      const plantBtn = screen.getByRole("link", { name: /Contact Plant & Corporate Directory/i });
      expect(plantBtn).toHaveAttribute("href", "/contact");

      expect(screen.getByText(/Commercial Terms:/i)).toBeInTheDocument();
      expect(screen.getByText(/Manufacturing slot availability, custom tooling feasibility/i)).toBeInTheDocument();
    });
  });

  describe("Governance & Perimeter Controls", () => {
    it("enforces omission of unverified codes (KEGS, 08524078)", () => {
      const { container } = render(<EngineeringQualityPage />);
      const text = container.textContent || "";
      expect(text).not.toMatch(/\bKEGS\b/);
      expect(text).not.toMatch(/\b08524078\b/);
    });

    it("verifies Kalyani Cast Tech Limited is the sole principal corporate identity", () => {
      const { container } = render(<EngineeringQualityPage />);
      const text = container.textContent || "";
      expect(text).toMatch(/Kalyani Cast Tech Limited/);
    });
  });
});
