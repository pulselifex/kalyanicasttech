import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./SiteLink";
import { HomeHeroCarousel } from "./HomeHeroCarousel";

export function HomeIntegratedHero() {
  return (
    <section className="relative overflow-hidden bg-[#07162c] text-white">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(27,75,150,0.35) 0%, rgba(7,22,44,0.95) 70%, #050e1d 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-16 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* ========================================================== */}
          {/* LEFT SUPPORTING AUTHORITY COLUMN (5 Cols on LG / XL)       */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Supporting Brand Line */}
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Built for what India moves.</span>
            </div>

            {/* Approved Executive Headline */}
            <h1 className="mt-3.5 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.65rem]">
              Engineering Solutions for Freight and Industry
            </h1>

            {/* Approved Supporting Paragraph */}
            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Kalyani Cast Tech manufactures freight containers and precision castings, while developing rail-linked logistics infrastructure at Shivlakha, Gujarat.
            </p>

            {/* 2 Clear Primary Navigation Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-lg bg-[#1b4b96] px-6 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#143a75] hover:shadow-xl hover:-translate-y-0.5"
              >
                <SiteLink to="/manufacturing">
                  Explore Manufacturing <ArrowRight className="ml-2 h-4 w-4" />
                </SiteLink>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-11 rounded-lg border border-white/30 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#07162c]"
              >
                <SiteLink to="/shivlakha-rail-logistics">
                  Discover Shivlakha
                </SiteLink>
              </Button>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: DOMINANT PRODUCT & WAGON CAROUSEL (7 Cols)   */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <HomeHeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
