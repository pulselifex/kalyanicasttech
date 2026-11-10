import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import {
  HomeHeroCarousel,
  HERO_CAROUSEL_SLIDES,
} from "@/components/site/HomeHeroCarousel";

describe("HomeHeroCarousel Component (WP-5B.30 Simplified 4-Slide Model)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Default matchMedia for prefers-reduced-motion: false
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("contains exactly 4 approved slides representing core business capabilities", () => {
    expect(HERO_CAROUSEL_SLIDES).toHaveLength(4);

    expect(HERO_CAROUSEL_SLIDES[0].name).toBe("Freight Container Manufacturing");
    expect(HERO_CAROUSEL_SLIDES[1].name).toBe("Specialised Freight Containers");
    expect(HERO_CAROUSEL_SLIDES[2].name).toBe("Precision Castings");
    expect(HERO_CAROUSEL_SLIDES[3].name).toBe("Rail-Linked Logistics at Shivlakha");
  });

  it("ensures all 4 slides use verified canonical assets and approved links", () => {
    expect(HERO_CAROUSEL_SLIDES[0].src).toBe("/assets/containers/product-20ft-gp-container-01.png");
    expect(HERO_CAROUSEL_SLIDES[1].src).toBe("/assets/containers/product-40ft-dwarf-side-access-01.png");
    expect(HERO_CAROUSEL_SLIDES[2].src).toBe("/assets/castings/factory-rewari-corner-castings-01.jpg");
    expect(HERO_CAROUSEL_SLIDES[3].src).toBe("/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg");

    expect(HERO_CAROUSEL_SLIDES[0].link).toBe("/products-applications#catalogue");
    expect(HERO_CAROUSEL_SLIDES[1].link).toBe("/products-applications#dwarf");
    expect(HERO_CAROUSEL_SLIDES[2].link).toBe("/products-applications#precision-castings");
    expect(HERO_CAROUSEL_SLIDES[3].link).toBe("/shivlakha-rail-logistics");
  });

  it("renders the carousel with initial slide and accessible region", () => {
    render(<HomeHeroCarousel />);
    const region = screen.getByRole("region", {
      name: /Kalyani Cast Tech Container and Wagon Product Showcase/i,
    });
    expect(region).toBeInTheDocument();

    // Initial slide headline & live region
    expect(screen.getByRole("heading", { name: "Freight Container Manufacturing" })).toBeInTheDocument();
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Intermodal freight containers engineered for containerized rail and road transit/i)
    ).toBeInTheDocument();
  });

  it("automatically advances slides every 4.5 seconds (4500 ms)", () => {
    render(<HomeHeroCarousel />);

    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();

    // Advance timer by 4500 ms
    act(() => {
      vi.advanceTimersByTime(4500);
    });

    // Should now be slide 2
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Specialised low-profile dwarf containers and open-top coiltainers engineered for demanding routes/i)
    ).toBeInTheDocument();

    // Advance by another 4500 ms
    act(() => {
      vi.advanceTimersByTime(4500);
    });

    // Should now be slide 3
    expect(screen.getByText(/Slide 3 of 4/i)).toBeInTheDocument();
    expect(
      screen.getByText(/High-integrity carbon-manganese corner castings and rolling stock components poured at our Rewari foundry/i)
    ).toBeInTheDocument();
  });

  it("supports manual previous and next navigation controls", () => {
    render(<HomeHeroCarousel />);

    const nextBtn = screen.getByRole("button", { name: /Next product slide/i });
    const prevBtn = screen.getByRole("button", { name: /Previous product slide/i });

    // Click next
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();

    // Click prev back to initial
    fireEvent.click(prevBtn);
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();

    // Click prev wraps to last slide (4)
    fireEvent.click(prevBtn);
    expect(screen.getByText(/Slide 4 of 4/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Rail-Linked Logistics at Shivlakha" })
    ).toBeInTheDocument();
  });

  it("pauses on hover and resumes when hover ends", () => {
    render(<HomeHeroCarousel />);
    const region = screen.getByRole("region", {
      name: /Kalyani Cast Tech Container and Wagon Product Showcase/i,
    });

    // Hover pauses
    fireEvent.mouseEnter(region);
    act(() => {
      vi.advanceTimersByTime(4000);
    });
    // Should still be slide 1
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();

    // Mouse leave resumes
    fireEvent.mouseLeave(region);
    act(() => {
      vi.advanceTimersByTime(4500);
    });
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();
  });

  it("pauses on focus and resumes on blur", () => {
    render(<HomeHeroCarousel />);
    const region = screen.getByRole("region", {
      name: /Kalyani Cast Tech Container and Wagon Product Showcase/i,
    });

    // Focus pauses
    fireEvent.focus(region);
    act(() => {
      vi.advanceTimersByTime(9000);
    });
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();

    // Blur resumes
    fireEvent.blur(region);
    act(() => {
      vi.advanceTimersByTime(4500);
    });
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();
  });

  it("toggles play/pause via dedicated control button", () => {
    render(<HomeHeroCarousel />);
    const pauseBtn = screen.getByRole("button", { name: /Pause slideshow/i });

    // Click to pause
    fireEvent.click(pauseBtn);
    act(() => {
      vi.advanceTimersByTime(9000);
    });
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();

    // Click to resume
    const resumeBtn = screen.getByRole("button", { name: /Resume slideshow/i });
    fireEvent.click(resumeBtn);
    act(() => {
      vi.advanceTimersByTime(4500);
    });
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();
  });

  it("supports keyboard arrow navigation", () => {
    render(<HomeHeroCarousel />);
    const region = screen.getByRole("region", {
      name: /Kalyani Cast Tech Container and Wagon Product Showcase/i,
    });

    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(screen.getByText(/Slide 2 of 4/i)).toBeInTheDocument();

    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();
  });

  it("respects prefers-reduced-motion media query by defaulting to paused", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<HomeHeroCarousel />);

    // Advance time
    act(() => {
      vi.advanceTimersByTime(4000);
    });

    // Should remain on initial slide because reduced motion is active
    expect(screen.getByText(/Slide 1 of 4/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Resume slideshow/i })
    ).toBeInTheDocument();
  });
});
