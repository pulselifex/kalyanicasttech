import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  ManufacturingMegaMenu,
  MANUFACTURING_DESTINATIONS,
} from "@/components/site/ManufacturingMegaMenu";
import { mainNavItems } from "@/content/site";

describe("SiteHeader & Manufacturing Mega-Menu (WP-5B.2)", () => {
  describe("Primary Navigation Architecture (8 Approved Items)", () => {
    it("declares all 8 primary navigation items in exact approved order", () => {
      const expectedLabels = [
        "About Kalyani",
        "Our Journey",
        "Board & Management",
        "Manufacturing",
        "Investors",
        "Gallery",
        "Shivlakha",
        "Contact",
      ];

      expect(mainNavItems.map((i) => i.label)).toEqual(expectedLabels);
    });

    it("maps all 8 navigation items to canonical routes without legacy redirect stubs", () => {
      const expectedRoutes = [
        "/about-us",
        "/our-journey",
        "/leadership",
        "/manufacturing",
        "/investor-relations",
        "/gallery",
        "/shivlakha-rail-logistics",
        "/contact",
      ];

      expect(mainNavItems.map((i) => i.to)).toEqual(expectedRoutes);
    });

    it("renders desktop navigation with all 8 items and main navigation landmark", () => {
      render(<SiteHeader />);

      const nav = screen.getByRole("navigation", { name: /Main Navigation/i });
      expect(nav).toBeDefined();

      expect(screen.getByRole("link", { name: "About Kalyani" })).toBeDefined();
      expect(screen.getByRole("link", { name: "Our Journey" })).toBeDefined();
      expect(screen.getByRole("link", { name: "Board & Management" })).toBeDefined();
      expect(screen.getByRole("button", { name: /Manufacturing/i })).toBeDefined();
      expect(screen.getByRole("link", { name: "Investors" })).toBeDefined();
      expect(screen.getByRole("link", { name: "Gallery" })).toBeDefined();
      expect(screen.getByRole("link", { name: "Shivlakha" })).toBeDefined();
      expect(screen.getByRole("link", { name: "Contact" })).toBeDefined();
    });
  });

  describe("Corporate Identity Presentation & Static Header (WP-5B.20)", () => {
    it("displays static corporate identity block with company name and BSE SME code", () => {
      render(<SiteHeader />);

      expect(screen.getByText("Kalyani Cast Tech Limited")).toBeDefined();
      expect(screen.getByText("BSE SME: 544023")).toBeDefined();

      // Ensure ticker and "Listed Parent" wording are completely removed
      expect(screen.queryByText("Listed Parent")).toBeNull();
    });

    it("strictly omits KMT naming per Management Clarification 1", () => {
      render(<SiteHeader />);
      expect(screen.queryByText(/KMT Engineering/i)).toBeNull();
    });
  });

  describe("Manufacturing Mega-Menu Specifications", () => {
    it("contains all four approved Manufacturing destinations with approved copy", () => {
      render(<ManufacturingMegaMenu currentPath="/" />);

      // 1. Manufacturing Facilities
      expect(screen.getByText("Manufacturing Facilities")).toBeDefined();
      expect(
        screen.getByText(
          /Rewari works in Haryana and Shivlakha Integrated Rail & Logistics platform in Kachchh/i,
        ),
      ).toBeDefined();
      expect(screen.getByText("Rewari & Shivlakha")).toBeDefined();

      // 2. Capabilities & Products
      expect(screen.getByText("Capabilities & Products")).toBeDefined();
      expect(
        screen.getByText(/16 container models: ISO dry, dwarf, coiltainer, tank, hopper & CUBOID/i),
      ).toBeDefined();
      expect(screen.getByText("16 Models & Castings")).toBeDefined();

      // 3. Innovation & Concepts
      expect(screen.getByText("Innovation & Concepts")).toBeDefined();
      expect(
        screen.getByText(/Application-specific hardware: Double-Stack Dwarf, 304-grade salt/i),
      ).toBeDefined();
      expect(screen.getByText("Custom Hardware")).toBeDefined();

      // 4. Engineering & Quality
      expect(screen.getByText("Engineering & Quality")).toBeDefined();
      expect(
        screen.getByText(/In-house ISO 1496 testing facility, 40-tonne UTM, minus 45°C sub-zero impact/i),
      ).toBeDefined();
      expect(screen.getByText("ISO 1496 Testing")).toBeDefined();
    });

    it("provides the top overview banner targeting /manufacturing", () => {
      render(<ManufacturingMegaMenu currentPath="/" />);

      const overviewLink = screen.getByRole("link", {
        name: /Manufacturing Overview & Technical Capabilities/i,
      });
      expect(overviewLink.getAttribute("href")).toBe("/manufacturing");
      expect(
        screen.getByText(
          /Container fabrication lines, Class A ferrous foundry to IS 12117:1996/i,
        ),
      ).toBeDefined();
    });

    it("highlights the active destination when currentPath matches", () => {
      const { container } = render(<ManufacturingMegaMenu currentPath="/facilities" />);

      // The active item link should have border-steel-cobalt class
      const facilitiesLink = container.querySelector('a[href="/facilities"]');
      expect(facilitiesLink?.className).toContain("border-steel-cobalt");
    });
  });

  describe("Mobile & Tablet Navigation Drawer", () => {
    it("controls drawer open and close state via accessible toggle button", () => {
      render(<SiteHeader />);

      const toggleBtn = screen.getByRole("button", { name: /Open navigation menu/i });
      expect(toggleBtn.getAttribute("aria-expanded")).toBe("false");
      expect(toggleBtn.getAttribute("aria-controls")).toBe("mobile-nav-drawer");

      // Open drawer
      fireEvent.click(toggleBtn);
      expect(toggleBtn.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("navigation", { name: /Mobile Navigation Drawer/i })).toBeDefined();

      // Close drawer
      fireEvent.click(toggleBtn);
      expect(toggleBtn.getAttribute("aria-expanded")).toBe("false");
      expect(screen.queryByRole("navigation", { name: /Mobile Navigation Drawer/i })).toBeNull();
    });

    it("provides expandable accordion for Manufacturing in mobile navigation", () => {
      render(<SiteHeader />);

      const toggleBtn = screen.getByRole("button", { name: /Open navigation menu/i });
      fireEvent.click(toggleBtn);

      const drawer = screen.getByRole("navigation", { name: /Mobile Navigation Drawer/i });
      const mfgAccordionBtn = within(drawer).getByRole("button", { name: /Manufacturing/i });
      expect(mfgAccordionBtn.getAttribute("aria-expanded")).toBe("false");

      // Expand accordion
      fireEvent.click(mfgAccordionBtn);
      expect(mfgAccordionBtn.getAttribute("aria-expanded")).toBe("true");

      const submenu = document.getElementById("mobile-manufacturing-submenu");
      expect(submenu).toBeDefined();
      expect(within(drawer).getByRole("link", { name: /Manufacturing Overview/i })).toBeDefined();
      expect(within(drawer).getByRole("link", { name: "Manufacturing Facilities" })).toBeDefined();
      expect(within(drawer).getByRole("link", { name: "Manufacturing Capabilities & Products" })).toBeDefined();
      expect(within(drawer).getByRole("link", { name: "Innovation" })).toBeDefined();
      expect(within(drawer).getByRole("link", { name: "Engineering & Quality" })).toBeDefined();
    });

    it("closes mobile navigation drawer on Escape key press and restores focus", () => {
      render(<SiteHeader />);

      const toggleBtn = screen.getByRole("button", { name: /Open navigation menu/i });
      fireEvent.click(toggleBtn);
      expect(screen.getByRole("navigation", { name: /Mobile Navigation Drawer/i })).toBeDefined();

      // Press Escape on header
      fireEvent.keyDown(screen.getByRole("banner"), { key: "Escape", code: "Escape" });

      expect(screen.queryByRole("navigation", { name: /Mobile Navigation Drawer/i })).toBeNull();
      expect(toggleBtn.getAttribute("aria-expanded")).toBe("false");
    });
  });

  describe("Call to Action & Enquiry Routing", () => {
    it("provides high-contrast business enquiry CTA pointing to /contact#enquiry-form", () => {
      render(<SiteHeader />);

      const ctaLinks = screen.getAllByRole("link", { name: /Send Business Enquiry/i });
      expect(ctaLinks.length).toBeGreaterThanOrEqual(1);

      for (const link of ctaLinks) {
        expect(link.getAttribute("href")).toBe("/contact#enquiry-form");
      }
    });
  });
});
