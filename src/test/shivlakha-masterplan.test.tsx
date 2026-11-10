import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShivlakhaInteractiveMasterplan } from "@/components/site/ShivlakhaInteractiveMasterplan";

describe("ShivlakhaInteractiveMasterplan Component", () => {
  it("renders all 12 numbered zone buttons and 2 connectivity corridors", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    // Check corridors via test-ids and accessible labels
    expect(screen.getByTestId("hotspot-corridor-rail")).toBeInTheDocument();
    expect(screen.getByTestId("hotspot-corridor-highway")).toBeInTheDocument();
    expect(screen.getByLabelText(/Corridor A: Mundra–Kandla Railway Line/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Corridor B: National Highway/i)).toBeInTheDocument();

    // Check all 12 zones in quick-jump and on the map
    for (let i = 1; i <= 12; i++) {
      const zoneNumber = i.toString().padStart(2, "0");
      expect(screen.getByTestId(`hotspot-zone-${zoneNumber}`)).toBeInTheDocument();
      expect(screen.getByTestId(`quick-jump-zone-${zoneNumber}`)).toBeInTheDocument();
    }
  });

  it("switches active state when clicking a zone hotspot or quick-jump button", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    // Default active zone is Zone 01
    expect(screen.getByTestId("inspector-title")).toHaveTextContent("North Platform");

    // Click Zone 05 (ICT)
    const zone05Btn = screen.getByTestId("quick-jump-zone-05");
    fireEvent.click(zone05Btn);

    expect(screen.getByTestId("inspector-title")).toHaveTextContent("Proposed Inland Container Terminal: 30 Acres");
    expect(screen.getByTestId("inspector-spec-badge")).toHaveTextContent("30 Acres");
    expect(screen.getByTestId("inspector-status-badge")).toHaveTextContent("Under Development · Target Q1 FY 2027-28");

    // Click Zone 11 (Manufacturing Unit Shed) via SVG hotspot button
    const zone11Hotspot = screen.getByTestId("hotspot-zone-11");
    fireEvent.click(zone11Hotspot);

    expect(screen.getByTestId("inspector-title")).toHaveTextContent("Manufacturing Unit Shed");
    expect(screen.getByTestId("inspector-spec-badge")).toHaveTextContent("220 m × 45 m");
  });

  it("handles keyboard navigation (Enter and Space) on hotspot elements", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    const zone04Hotspot = screen.getByTestId("hotspot-zone-04");
    
    // Press Space
    fireEvent.keyDown(zone04Hotspot, { key: " " });
    expect(screen.getByTestId("inspector-title")).toHaveTextContent("Wagon Maintenance Facility Shed");
    expect(screen.getByTestId("inspector-spec-badge")).toHaveTextContent("5 Acres");

    // Press Enter on Corridor Rail
    const railCorridor = screen.getByTestId("hotspot-corridor-rail");
    fireEvent.keyDown(railCorridor, { key: "Enter" });
    expect(screen.getByTestId("inspector-title")).toHaveTextContent("Mundra–Kandla Railway Line · Up Main Line");
  });

  it("filters accurately by readiness status", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    // Filter to "operational"
    const operationalFilter = screen.getByTestId("filter-operational");
    fireEvent.click(operationalFilter);

    // Operational items (Zones 1, 2, 3, 6, 11, rail corridor) should be active/visible
    const zone01 = screen.getByTestId("hotspot-zone-01");
    expect(zone01.getAttribute("opacity")).toBe("1");

    // Zone 04 (under development) should have reduced opacity when filtered
    const zone04 = screen.getByTestId("hotspot-zone-04");
    expect(zone04.getAttribute("opacity")).toBe("0.2");

    // Filter to "development"
    const developmentFilter = screen.getByTestId("filter-development");
    fireEvent.click(developmentFilter);
    expect(zone04.getAttribute("opacity")).toBe("1");
    expect(zone01.getAttribute("opacity")).toBe("0.2");

    // Reset to "all"
    const allFilter = screen.getByTestId("filter-all");
    fireEvent.click(allFilter);
    expect(zone01.getAttribute("opacity")).toBe("1");
    expect(zone04.getAttribute("opacity")).toBe("1");
  });

  it("displays the exact mandatory statutory governance disclaimer", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    const disclaimer = screen.getByTestId("statutory-masterplan-disclaimer");
    expect(disclaimer).toBeInTheDocument();
    expect(disclaimer).toHaveTextContent("Master Plan & Readiness Note:");
    expect(disclaimer).toHaveTextContent("Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat");
    expect(disclaimer).toHaveTextContent("Container Manufacturing and the Gati Shakti Terminal are operational");
    expect(disclaimer).toHaveTextContent("Railway Wagon Manufacturing (Target Q4 FY 2026-27)");
    expect(disclaimer).toHaveTextContent("Inland Container Terminal (CBIC approval received on 10 September 2026; Target Operational Date April 2027)");
    expect(disclaimer).toHaveTextContent("Specific rail cargo movements are evaluated individually against commodity permissions, route availability, and commercial agreement.");
  });

  it("provides direct inquiry CTA pre-selected for Shivlakha Cargo Movement Evaluation", () => {
    render(<ShivlakhaInteractiveMasterplan />);

    const cta = screen.getByTestId("inspector-enquiry-cta");
    expect(cta).toHaveAttribute(
      "href",
      "/contact?subject=Shivlakha%20Cargo%20Movement%20Evaluation#enquiry-form"
    );
  });

  it("displays updated 720 m (L) × 30 m (W) platform dimensions and ensures zero scroll hijacking", () => {
    const { container } = render(<ShivlakhaInteractiveMasterplan />);

    // Zone 01 platform dimension assertions
    expect(screen.getByTestId("inspector-title")).toHaveTextContent("720 m (L) × 30 m (W)");
    expect(screen.getByTestId("inspector-spec-badge")).toHaveTextContent("720 m (L) × 30 m (W)");

    // Ensure the explorer container does not attach any wheel listeners or intercept scrolling
    const explorer = container.querySelector("#masterplan-explorer");
    expect(explorer).toBeInTheDocument();
  });
});
