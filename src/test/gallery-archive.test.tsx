import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  GalleryPage,
  APPROVED_NEWS_UPDATES,
  HISTORICAL_PHOTO_GALLERY,
} from "@/routes/gallery";

describe("Historical Gallery & Corporate Archive (WP-5B.13 Workstream B)", () => {
  it("contains 10 verified historical news updates covering 2012 to 2026", () => {
    expect(APPROVED_NEWS_UPDATES).toHaveLength(10);

    const titles = APPROVED_NEWS_UPDATES.map((n) => n.title);
    expect(titles).toContain("RDSO Stage-I Approval for New Wagon Design");
    expect(titles).toContain("Gati Shakti Terminal Operational at Shivlakha");
    expect(titles).toContain("CBIC Approval Received");
    expect(titles).toContain("Kalyani Cast Tech Limited Successfully Lists on BSE SME Platform");
    expect(titles).toContain("Commercial Double-Stack Dwarf Container Run — July 2018");
    expect(titles).toContain("Kalyani Cast Tech Limited Incorporated & Rewari Works Founded");
  });

  it("contains 40 authentic photographs across 12 categories from 2012 to 2026", () => {
    expect(HISTORICAL_PHOTO_GALLERY).toHaveLength(40);

    const categories = new Set(HISTORICAL_PHOTO_GALLERY.map((p) => p.category));
    expect(categories.has("Company History & Milestones")).toBe(true);
    expect(categories.has("Rewari Manufacturing Works")).toBe(true);
    expect(categories.has("Container Manufacturing")).toBe(true);
    expect(categories.has("Specialised Containers")).toBe(true);
    expect(categories.has("Wagon Manufacturing & Development")).toBe(true);
    expect(categories.has("Foundry & Precision Castings")).toBe(true);
    expect(categories.has("Corner Castings")).toBe(true);
    expect(categories.has("Engineering & Quality")).toBe(true);
    expect(categories.has("Shivlakha Rail & Logistics")).toBe(true);
    expect(categories.has("Gati Shakti Terminal")).toBe(true);
    expect(categories.has("Inland Container Terminal Development")).toBe(true);
    expect(categories.has("Corporate Events & Activities")).toBe(true);
  });

  it("renders News & Updates by default and allows switching to Photo Gallery", () => {
    render(<GalleryPage />);

    // News & Updates section is active by default
    expect(
      screen.getByRole("heading", { name: /Company News & Updates \(2012–2026\)/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/RDSO Stage-I Approval for New Wagon Design/i)
    ).toBeInTheDocument();

    // Switch to Photo Gallery
    const photosTab = screen.getByRole("button", { name: /Photo Gallery/i });
    fireEvent.click(photosTab);

    expect(
      screen.getByRole("heading", { name: /Authentic Photographic Archive \(2012–2026\)/i })
    ).toBeInTheDocument();
  });

  it("filters photo gallery items by year period", () => {
    render(<GalleryPage />);

    // Switch to photos
    fireEvent.click(screen.getByRole("button", { name: /Photo Gallery/i }));

    // Click 2012–2015 period
    const periodBtn = screen.getByRole("button", { name: "2012–2015" });
    fireEvent.click(periodBtn);

    // Verified photos in 2012–2015
    expect(screen.getByText("Rewari Manufacturing Plant Foundation Facade")).toBeInTheDocument();
    expect(
      screen.getByText("Rewari Works Workshop Bays & Open Fabrication Yard")
    ).toBeInTheDocument();
  });

  it("filters photo gallery items by category", () => {
    render(<GalleryPage />);

    // Switch to photos
    fireEvent.click(screen.getByRole("button", { name: /Photo Gallery/i }));

    // Click Corner Castings category
    const cornerBtn = screen.getByRole("button", { name: "Corner Castings" });
    fireEvent.click(cornerBtn);

    expect(
      screen.getByText("Corner Castings Manufactured as per ISO 1161 Specifications")
    ).toBeInTheDocument();
  });

  it("opens modal lightbox on image click and closes on close button", () => {
    render(<GalleryPage />);

    // Switch to photos
    fireEvent.click(screen.getByRole("button", { name: /Photo Gallery/i }));

    const enlargeButtons = screen.getAllByRole("button", { name: /Enlarge/i });
    fireEvent.click(enlargeButtons[0]);

    // Modal dialog is displayed
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole("button", { name: /Close modal viewer/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
