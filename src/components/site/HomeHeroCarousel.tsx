import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Package,
  Train,
  Award,
} from "lucide-react";
import { SiteLink } from "./SiteLink";

export interface HeroCarouselSlide {
  id: string;
  type: "container" | "wagon" | "banner";
  name: string;
  category: string;
  badge: string;
  src: string;
  alt: string;
  caption: string;
  link: string;
}

/**
 * Approved Homepage Hero Carousel Slides (WP-5B.30 Simplified 4-Slide Model):
 * 1. Freight Container Manufacturing (ISO series-1 containers)
 * 2. Specialised Freight Containers (double-stack dwarf & coiltainers)
 * 3. Precision Castings (ISO 1161 corner castings & heavy foundry)
 * 4. Rail-Linked Logistics at Shivlakha (operational Gati Shakti Terminal)
 */
export const HERO_CAROUSEL_SLIDES: HeroCarouselSlide[] = [
  {
    id: "slide-01",
    type: "container",
    name: "Freight Container Manufacturing",
    category: "ISO Intermodal Containers",
    badge: "ISO 1496 Series-1",
    src: "/assets/containers/product-20ft-gp-container-01.png",
    alt: "Standard freight container on rail rake",
    caption: "Intermodal freight containers engineered for containerized rail and road transit",
    link: "/products-applications#catalogue",
  },
  {
    id: "slide-02",
    type: "container",
    name: "Specialised Freight Containers",
    category: "Low-Profile & Heavy Freight",
    badge: "Electrified Corridors & Heavy Cargo",
    src: "/assets/containers/product-40ft-dwarf-side-access-01.png",
    alt: "Low-profile double-stack dwarf container for electrified rail routes",
    caption: "Specialised low-profile dwarf containers and open-top coiltainers engineered for demanding routes",
    link: "/products-applications#dwarf",
  },
  {
    id: "slide-03",
    type: "container",
    name: "Precision Castings",
    category: "Ferrous Foundry & Components",
    badge: "ISO 1161 Approved",
    src: "/assets/castings/factory-rewari-corner-castings-01.jpg",
    alt: "Container corner castings manufactured as per ISO 1161 specifications at Rewari Foundry",
    caption: "High-integrity carbon-manganese corner castings and rolling stock components poured at our Rewari foundry",
    link: "/products-applications#precision-castings",
  },
  {
    id: "slide-04",
    type: "wagon",
    name: "Rail-Linked Logistics at Shivlakha",
    category: "Terminal Infrastructure",
    badge: "Gati Shakti Terminal Operational",
    src: "/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg",
    alt: "Operational Gati Shakti Terminal with dedicated rail siding at Shivlakha, Gujarat",
    caption: "Operational 30-acre Gati Shakti Terminal with dedicated broad-gauge rail connectivity on a 150-acre platform",
    link: "/shivlakha-rail-logistics",
  },
];

export function HomeHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const totalSlides = HERO_CAROUSEL_SLIDES.length;

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) setIsPlaying(false);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 4.5-second automatic rotation interval (WP-5B.19)
  useEffect(() => {
    if (!isPlaying || isHovered || isFocused) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      goToNext();
    } else if (distance < -50) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = HERO_CAROUSEL_SLIDES[currentIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Kalyani Cast Tech Container and Wagon Product Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        Slide {currentIndex + 1} of {totalSlides}: {currentSlide.name} ({currentSlide.category})
      </div>

      {/* Slide Image Container with Fixed Aspect Ratio (16/10) to eliminate CLS */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        {HERO_CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${totalSlides}: ${slide.name}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Subtle Gradient Overlays for Text Contrast without Obscuring Images */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07162c]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 rounded-full border border-blue-400/40 bg-[#07162c]/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md shadow-md">
                {slide.type === "container" ? (
                  <Package className="h-3 w-3 text-blue-400" />
                ) : slide.type === "wagon" ? (
                  <Train className="h-3 w-3 text-amber-400" />
                ) : (
                  <Award className="h-3 w-3 text-emerald-400" />
                )}
                <span>{slide.category}</span>
              </div>

              {/* Floating Engineering Metric Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 hidden xs:flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-[#07162c]/90 px-3 py-1 font-mono text-[11px] font-bold text-amber-300 backdrop-blur-md shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{slide.badge}</span>
              </div>
            </div>
          );
        })}

        {/* Previous / Next Manual Navigation Controls */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous product slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#07162c]/80 text-white backdrop-blur-md shadow-lg transition-all hover:bg-white hover:text-[#07162c] focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next product slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#07162c]/80 text-white backdrop-blur-md shadow-lg transition-all hover:bg-white hover:text-[#07162c] focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dynamic Industrial Caption Bar with Product Title & CTA */}
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-[#07162c]/95 px-4 py-3 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-white text-sm truncate font-display">
                {currentSlide.name}
              </h2>
              <span className="hidden sm:inline text-white/40 font-mono">·</span>
              <span className="hidden sm:inline text-amber-300 font-mono text-[11px]">
                {currentSlide.badge}
              </span>
            </div>
            <p className="mt-0.5 text-white/75 text-[11px] leading-tight line-clamp-1 font-mono">
              {currentSlide.caption}
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            {/* Direct Product Link CTA */}
            <SiteLink
              to={currentSlide.link}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
            >
              <span>Explore</span>
              <ArrowRight className="h-3 w-3" />
            </SiteLink>

            {/* Play/Pause Control Button */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause slideshow" : "Resume slideshow"}
              title={isPlaying ? "Pause slideshow" : "Resume slideshow"}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[11px] font-mono text-white/90 hover:bg-white/20 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3 w-3 text-amber-400" />
                  <span className="hidden md:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-emerald-400" />
                  <span className="hidden md:inline">Resume</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Indicators Bar */}
      <div className="flex items-center justify-center border-t border-white/10 bg-[#050e1d] px-4 py-2 text-[11px] font-mono text-white/70">
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-1 max-w-full scrollbar-none">
          {HERO_CAROUSEL_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.name}`}
              className={`h-1.5 transition-all rounded-full cursor-pointer ${
                index === currentIndex
                  ? "w-6 bg-blue-400"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

