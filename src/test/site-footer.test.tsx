import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SiteFooter } from "@/components/site/SiteFooter";

describe("SiteFooter Component & Collapsible Address Directory (WP-5B.20)", () => {
  it("renders the always-visible corporate identity and statutory parameters", () => {
    render(<SiteFooter />);

    // Principal legal identity
    expect(screen.getAllByText("Kalyani Cast Tech Limited").length).toBeGreaterThanOrEqual(1);

    // BSE SME listing code retained; CIN removed from footer per WP-5B.30 management instruction
    expect(screen.getAllByText(/544023/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/L26990DL2012PLC242760/i)).not.toBeInTheDocument();

    // Primary corporate email visible without expanding accordion
    expect(screen.getAllByText("info@kalyanicasttech.com").length).toBeGreaterThanOrEqual(1);

    // Copyright statement
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders the four logical navigation groups", () => {
    render(<SiteFooter />);

    // Group 1: Company & Heritage
    expect(screen.getByText("Company & Heritage")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About Kalyani" })).toHaveAttribute("href", "/about-us");
    expect(screen.getByRole("link", { name: "Our Journey" })).toHaveAttribute("href", "/our-journey");
    expect(screen.getByRole("link", { name: "Board & Management" })).toHaveAttribute("href", "/leadership");
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");

    // Group 2: Manufacturing & Platform
    expect(screen.getByText("Manufacturing & Platform")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Manufacturing" })).toHaveAttribute("href", "/manufacturing");
    expect(screen.getByRole("link", { name: "Facilities" })).toHaveAttribute("href", "/facilities");
    expect(screen.getByRole("link", { name: "Capabilities & Products" })).toHaveAttribute("href", "/products-applications");
    expect(screen.getByRole("link", { name: "Innovation" })).toHaveAttribute("href", "/innovation");
    expect(screen.getByRole("link", { name: "Engineering & Quality" })).toHaveAttribute("href", "/engineering-quality");
    expect(screen.getByRole("link", { name: "Shivlakha" })).toHaveAttribute("href", "/shivlakha-rail-logistics");

    // Group 3: Governance & Investors
    expect(screen.getByText("Governance & Investors")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Investor Relations" })[0]).toHaveAttribute("href", "/investor-relations");
    expect(screen.getByRole("link", { name: "Statutory Filings & Governance" })).toHaveAttribute("href", "/investors/corporate-governance");
    expect(screen.getByRole("link", { name: "Financial Results" })).toHaveAttribute("href", "/investors/financial-information");
    expect(screen.getByRole("link", { name: "Stock Exchange Disclosures" })).toHaveAttribute("href", "/investors/stock-exchange-disclosures");
    expect(screen.getByRole("link", { name: "Shareholder Information" })).toHaveAttribute("href", "/investors/shareholder-information");

    // Group 4: Contact & Locations header
    expect(screen.getByText("Contact & Locations")).toBeInTheDocument();
  });

  it("initialises all 5 address accordion groups in a collapsed state by default", () => {
    render(<SiteFooter />);

    const buttons = [
      screen.getByRole("button", { name: /^Registered Office/i }),
      screen.getByRole("button", { name: /^Rewari Works/i }),
      screen.getByRole("button", { name: /^Integrated Multimodal Logistics & Manufacturing Hub/i }),
      screen.getByRole("button", { name: /^Regional & International Enquiries/i }),
      screen.getByRole("button", { name: /^Investor Grievance & RTA/i }),
    ];

    expect(buttons).toHaveLength(5);
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("expands and collapses the Registered Office accordion on user interaction", () => {
    render(<SiteFooter />);

    const regBtn = screen.getByRole("button", { name: /^Registered Office/i });
    expect(regBtn).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    fireEvent.click(regBtn);
    expect(regBtn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Okhla Industrial Area Phase-1/i)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(regBtn);
    expect(regBtn).toHaveAttribute("aria-expanded", "false");
  });

  it("expands Rewari Manufacturing Works and reveals verified details", () => {
    render(<SiteFooter />);

    const rewariBtn = screen.getByRole("button", { name: /^Rewari Works/i });
    fireEvent.click(rewariBtn);

    expect(rewariBtn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/District Rewari, Haryana [–-] 123101/i)).toBeInTheDocument();
    expect(screen.getByText(/Container fabrication, ferrous foundry unit/i)).toBeInTheDocument();
  });

  it("expands Integrated Multimodal Logistics & Manufacturing Hub and reveals verified contact details", () => {
    render(<SiteFooter />);

    // Verify old location label does NOT appear
    expect(screen.queryByText("Shivlakha Platform")).toBeNull();

    const hubBtn = screen.getByRole("button", { name: /^Integrated Multimodal Logistics & Manufacturing Hub/i });
    fireEvent.click(hubBtn);

    expect(hubBtn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Khasra No\. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat [–-] 370145, India\./i)).toBeInTheDocument();
    
    // Verify categories
    expect(screen.getByText(/Container & Wagon Manufacturing:/i)).toBeInTheDocument();
    expect(screen.getByText(/Terminal Operations \/ Inland Container Terminal:/i)).toBeInTheDocument();

    // Verify clickable mailto and tel links
    expect(screen.getByRole("link", { name: "business.development@kalyanicasttech.com" })).toHaveAttribute("href", "mailto:business.development@kalyanicasttech.com");
    expect(screen.getByRole("link", { name: "terminal.head@kalyanicasttech.com" })).toHaveAttribute("href", "mailto:terminal.head@kalyanicasttech.com");
    expect(screen.getByRole("link", { name: /\+91 98719 77772/i })).toHaveAttribute("href", "tel:+919871977772");

    // Verify 150-acre breakdown is strictly omitted from the footer
    expect(screen.queryByText(/150-acre integrated platform/i)).toBeNull();
    expect(screen.queryByText(/30-acre Gati Shakti Terminal/i)).toBeNull();
    expect(screen.queryByText(/Future expansion/i)).toBeNull();
  });

  it("expands Regional & International Enquiries and reveals centralized coordination policy", () => {
    render(<SiteFooter />);

    const regionalBtn = screen.getByRole("button", { name: /^Regional & International Enquiries/i });
    fireEvent.click(regionalBtn);

    expect(regionalBtn).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/Regional and international trade enquiries are coordinated directly through our Registered Office in New Delhi/i)
    ).toBeInTheDocument();
    // Verify disputed third-party addresses are withheld
    expect(screen.queryByText(/Syed Amir Ali Avenue/i)).toBeNull();
    expect(screen.queryByText(/M\/S ASIX GLOBAL INC/i)).toBeNull();
  });

  it("expands Investor Grievance and reveals Compliance Officer and RTA details", () => {
    render(<SiteFooter />);

    const investorBtn = screen.getByRole("button", {
      name: /^Investor Grievance & RTA/i,
    });
    fireEvent.click(investorBtn);

    expect(investorBtn).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Mr\. Pankaj Kumar/i)).toBeInTheDocument();
    expect(screen.getByText(/Bigshare Services Pvt\. Ltd\./i)).toBeInTheDocument();
    expect(screen.getByText(/INR000001385/i)).toBeInTheDocument();
  });

  it("strictly omits KMT naming from the footer per Management Clarification 1", () => {
    render(<SiteFooter />);
    expect(screen.queryByText(/KMT Engineering/i)).toBeNull();
  });
});
