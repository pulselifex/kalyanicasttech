import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Factory } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { mainNavItems } from "@/content/site";
import { SiteLink } from "./SiteLink";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ManufacturingMegaMenu } from "./ManufacturingMegaMenu";
import { SiteSearch } from "./SiteSearch";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mfgAccordionOpen, setMfgAccordionOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  // Safe pathname extraction (works within RouterProvider and gracefully in tests)
  let currentPath = "/";
  try {
    const loc = useLocation();
    currentPath = loc?.pathname ?? "/";
  } catch {
    if (typeof window !== "undefined") {
      currentPath = window.location.pathname;
    }
  }

  // Check if current route is part of the Manufacturing section
  const isManufacturingActive =
    currentPath === "/manufacturing" ||
    currentPath.startsWith("/manufacturing/") ||
    currentPath === "/facilities" ||
    currentPath === "/products-applications" ||
    currentPath === "/innovation" ||
    currentPath === "/engineering-quality";

  // Close mobile menu on Escape key press and restore focus to toggle button
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (mobileOpen) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
  };

  // Close mobile drawer when window resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-structural-border bg-background print:static"
      onKeyDown={handleKeyDown}
    >
      {/* ── Main Navigation Bar (Clean Static Corporate Identity - WP-5B.20) ── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 lg:px-8">
        {/* Left: Principal Corporate Identity & Logo (Clean Static Presentation) */}
        <SiteLink
          to="/"
          className="flex shrink-0 items-center gap-3 rounded-md outline-none focus-visible:outline-2 focus-visible:outline-industrial-navy"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/assets/company/Kalyani Cast Tech Logo.jpeg"
            alt="Kalyani Cast Tech Limited logo"
            className="h-10 w-10 shrink-0 object-contain rounded"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight text-industrial-navy sm:text-lg dark:text-white">
              Kalyani Cast Tech Limited
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-steel-cobalt dark:text-blue-300">
              BSE SME: 544023
            </span>
          </div>
        </SiteLink>

        {/* Center: Primary Navigation (Desktop - 8 Items per Approved Architecture) */}
        <nav aria-label="Main Navigation" className="hidden items-center xl:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-0.5 list-none">
              {mainNavItems.map((item) => {
                const isItemActive = currentPath === item.to;

                // Handle regular navigation item without submenu
                if (!item.children || item.children.length === 0) {
                  return (
                    <NavigationMenuItem key={item.to}>
                      <NavigationMenuLink asChild>
                        <SiteLink
                          to={item.to}
                          aria-current={isItemActive ? "page" : undefined}
                          className={`rounded-md px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap outline-none focus-visible:outline-2 focus-visible:outline-industrial-navy ${
                            isItemActive
                              ? "border-b-2 border-steel-cobalt bg-foundry-surface/80 font-semibold text-steel-cobalt dark:bg-white/10 dark:text-blue-300"
                              : "text-iron-charcoal hover:bg-foundry-surface/60 hover:text-steel-cobalt dark:text-white/90 dark:hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </SiteLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                // Handle Manufacturing Mega-Menu Trigger & Panel
                return (
                  <NavigationMenuItem key={item.to}>
                    <NavigationMenuTrigger
                      aria-current={isManufacturingActive ? "page" : undefined}
                      className={`h-auto rounded-md px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap outline-none focus-visible:outline-2 focus-visible:outline-industrial-navy ${
                        isManufacturingActive
                          ? "border-b-2 border-steel-cobalt bg-foundry-surface/80 font-semibold text-steel-cobalt dark:bg-white/10 dark:text-blue-300"
                          : "text-iron-charcoal hover:bg-foundry-surface/60 hover:text-steel-cobalt dark:text-white/90 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ManufacturingMegaMenu currentPath={currentPath} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Utilities & Primary Call to Action */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteSearch />
          <Button
            asChild
            className="hidden h-10 rounded-md bg-steel-cobalt px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-industrial-navy sm:inline-flex"
          >
            <SiteLink to="/contact#enquiry-form">
              Send Business Enquiry <ArrowUpRight className="ml-1 h-4 w-4" />
            </SiteLink>
          </Button>

          {/* Mobile Navigation Toggle Button */}
          <Button
            ref={mobileToggleRef}
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 rounded-md xl:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* ── Mobile & Tablet Drawer (< 1280px viewports) ── */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation Drawer"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-structural-border bg-background px-5 pb-8 pt-3 shadow-2xl xl:hidden"
        >
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const isItemActive = currentPath === item.to;

              // Items without submenus
              if (!item.children || item.children.length === 0) {
                return (
                  <SiteLink
                    key={item.to}
                    to={item.to}
                    aria-current={isItemActive ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between border-b border-structural-border/60 py-3.5 font-display text-base transition-colors ${
                      isItemActive
                        ? "font-bold text-steel-cobalt"
                        : "text-iron-charcoal hover:text-steel-cobalt dark:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-machined-slate/40">&rarr;</span>
                  </SiteLink>
                );
              }

              // Manufacturing Collapsible Accordion Section
              return (
                <div key={item.to} className="border-b border-structural-border/60">
                  <button
                    type="button"
                    onClick={() => setMfgAccordionOpen(!mfgAccordionOpen)}
                    aria-expanded={mfgAccordionOpen}
                    aria-controls="mobile-manufacturing-submenu"
                    className="flex w-full items-center justify-between py-3.5 font-display text-base font-semibold text-iron-charcoal dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Factory className="h-4 w-4 text-steel-cobalt" />
                      <span className={isManufacturingActive ? "font-bold text-steel-cobalt" : ""}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-machined-slate transition-transform duration-200 ${
                        mfgAccordionOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu links */}
                  {mfgAccordionOpen && (
                    <div
                      id="mobile-manufacturing-submenu"
                      className="mb-3 space-y-1 rounded-md bg-foundry-surface p-3 border border-structural-border/80 dark:bg-white/5"
                    >
                      <SiteLink
                        to="/manufacturing"
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-steel-cobalt hover:bg-white dark:hover:bg-white/10 ${
                          currentPath === "/manufacturing" ? "bg-white shadow-sm font-bold" : ""
                        }`}
                      >
                        Manufacturing Overview &rarr;
                      </SiteLink>
                      {item.children.map((subItem) => {
                        const isSubActive = currentPath === subItem.to;
                        return (
                          <SiteLink
                            key={subItem.to}
                            to={subItem.to}
                            aria-current={isSubActive ? "page" : undefined}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded px-2.5 py-2 text-sm font-medium transition-colors ${
                              isSubActive
                                ? "bg-white font-semibold text-steel-cobalt shadow-sm dark:bg-white/10"
                                : "text-machined-slate hover:bg-white/70 hover:text-steel-cobalt dark:text-white/80"
                            }`}
                          >
                            {subItem.label}
                          </SiteLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Action & Corporate Details */}
          <div className="mt-6 space-y-4 pt-2">
            <Button
              asChild
              className="w-full rounded-md bg-steel-cobalt py-3.5 text-sm font-semibold text-white shadow-md hover:bg-industrial-navy"
            >
              <SiteLink to="/contact#enquiry-form" onClick={() => setMobileOpen(false)}>
                Send Business Enquiry <ArrowUpRight className="ml-1 h-4 w-4" />
              </SiteLink>
            </Button>

            <div className="rounded-md border border-structural-border bg-foundry-surface p-3 text-[11px] font-mono text-machined-slate dark:bg-white/5 dark:text-white/60">
              <p className="font-semibold text-industrial-navy dark:text-white">
                Kalyani Cast Tech Limited (BSE SME: 544023)
              </p>
              <p className="mt-1">
                Shivlakha Multimodal Platform (Kachchh, Gujarat)
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
