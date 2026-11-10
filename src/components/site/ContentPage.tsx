import { ArrowRight, Download, FileText, Newspaper } from "lucide-react";
import {
  getPage,
  ctaTarget,
  isPlaceholder,
  navGroups,
  investorGroup,
  type Section,
} from "@/content/site";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./SiteLink";
import { ImageSlot } from "./ImageSlot";
import { EnquiryForm } from "./EnquiryForm";
import { ShivlakhaStatus } from "./ShivlakhaStatus";
import { ROUTE_ASSETS, ROUTE_DOCUMENTS } from "@/content/route-assets";

export function SectionBody({ section }: { section: Section }) {
  const items = section.body.filter((b) => b.li);
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
      {section.body
        .filter((b) => b.p)
        .map((b, i) => {
          const raw = b.p ?? "";
          if (isPlaceholder(raw)) {
            // DEF-07: Strip out [Placeholder: ...] wrapping and render as clean text
            const clean = raw
              .replace(/^\[Placeholder:\s*/i, "")
              .replace(/\]$/, "")
              .trim();
            if (!clean) return null;
            return (
              <p key={i} className="text-sm text-muted-foreground">
                {clean}
              </p>
            );
          }
          return <p key={i}>{raw}</p>;
        })}
      {items.length > 0 && (
        <ul className="divide-y divide-border border-y border-border">
          {items.map((b, i) => (
            <li key={i} className="py-3 text-foreground">
              {b.li}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FileText;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3 border-t border-border py-6">
      <Icon className="h-6 w-6 text-primary" aria-hidden />
      <p className="font-display text-lg font-semibold text-foreground">{title}</p>
      <p className="max-w-lg text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

const isDocPage = (url: string) =>
  /data-sheets|brochures|quality-certifications|financial-information|stock-exchange|corporate-governance|shareholder|ipo|meetings/.test(
    url,
  );

// Generate anchor id from heading or index
function getSectionAnchorId(heading: string, index: number): string {
  const h = heading.toLowerCase();
  if (h.includes("standard") || h.includes("iso")) return "standard-iso";
  if (h.includes("dwarf")) return "dwarf";
  if (h.includes("coil")) return "coiltainers";
  if (h.includes("tank") || h.includes("hopper")) return "tank-hopper";
  if (h.includes("cuboid") || h.includes("parcel")) return "cuboid";
  if (h.includes("casting") || h.includes("foundry")) return "castings";
  if (h.includes("status") || h.includes("platform")) return "status";
  if (h.includes("cargo") || h.includes("evaluation")) return "cargo-evaluation";
  return `section-${index + 1}`;
}

export function ContentPage({ url }: { url: string }) {
  const page = getPage(url);
  const isInvestor = url.startsWith("/investors");
  const isShivlakha = url.startsWith("/shivlakha");
  const group = [...navGroups, investorGroup].find((g) => g.children.some((c) => c.to === url));
  const withForm =
    url === "/business-enquiry" ||
    url === "/contact" ||
    url === "/shivlakha-rail-logistics/cargo-opportunities";
  const isManufacturing = url.startsWith("/manufacturing");
  const isProduct = url.startsWith("/containers-solutions");
  const heroTheme = isShivlakha
    ? "blueprint text-primary-foreground"
    : isManufacturing
      ? "border-b border-border bg-muted text-foreground"
      : "border-b border-border bg-background text-foreground";
  const mappedAsset = ROUTE_ASSETS[url];
  const mappedDocs = ROUTE_DOCUMENTS[url];

  return (
    <article className="relative">
      <header className={heroTheme}>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className={`eyebrow flex flex-wrap gap-2 ${isShivlakha ? "text-primary-foreground/60" : "text-muted-foreground"}`}
          >
            <SiteLink to="/" className="hover:underline">
              Home
            </SiteLink>
            {group && group.to !== url && (
              <>
                <span>/</span>
                <SiteLink to={group.to} className="hover:underline">
                  {group.label}
                </SiteLink>
              </>
            )}
            <span>/</span>
            <span className={isShivlakha ? "text-signal" : "text-primary"}>{page.name}</span>
          </nav>
          <h1
            className={`mt-6 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${isProduct ? "text-primary" : ""}`}
          >
            {page.h1}
          </h1>
          {page.hero && (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${isShivlakha ? "text-primary-foreground/80" : "text-muted-foreground"}`}
            >
              {page.hero}
            </p>
          )}
          {withForm && (
            <Button
              asChild
              className="mt-6 rounded-md bg-[#1b4b96] px-5 text-sm font-semibold text-white hover:bg-[#143a75]"
            >
              <a href="#enquiry-form">
                {page.primaryCta}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          )}
          {isShivlakha && (
            <div id="status" className="mt-12 scroll-mt-28 lg:scroll-mt-36">
              <ShivlakhaStatus dark />
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {withForm && (
          <section id="enquiry-form" className="mb-14 max-w-4xl scroll-mt-28 lg:scroll-mt-36">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Send an enquiry</h2>
            <EnquiryForm
              initialKind={
                url === "/contact"
                  ? "general"
                  : url === "/shivlakha-rail-logistics/cargo-opportunities"
                    ? "B"
                    : "A"
              }
            />
          </section>
        )}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="space-y-14">
            {page.sections.map((s, i) => {
              const anchorId = getSectionAnchorId(s.heading, i);
              return (
                <section
                  key={i}
                  id={anchorId}
                  className="grid gap-4 border-t border-border pt-8 md:grid-cols-[3rem_1fr] scroll-mt-28 lg:scroll-mt-36"
                >
                  <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    {s.heading && (
                      <h2 className="mb-4 text-2xl font-semibold text-foreground">{s.heading}</h2>
                    )}
                    <SectionBody section={s} />
                  </div>
                </section>
              );
            })}
            {mappedDocs && mappedDocs.length > 0 && (
              <section className="border-t border-border pt-8 scroll-mt-28 lg:scroll-mt-36">
                <p className="eyebrow text-primary">Approved Documents &amp; Downloads</p>
                <div className="mt-6 divide-y divide-border border-y border-border">
                  {mappedDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 shrink-0 text-primary" />
                          <span className="font-display text-base font-semibold text-foreground">
                            {doc.title}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{doc.scope}</p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {doc.type} · {doc.fileSize}
                        </p>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="shrink-0 rounded-md border-[#d9dfe6] hover:border-[#1b4b96] hover:bg-[#f1f4f8]"
                      >
                        <a
                          href={doc.url}
                          download={doc.filename}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="mr-2 h-4 w-4" /> Download
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {url === "/resources/news-media" && (
              <EmptyState
                icon={Newspaper}
                title="No news items published yet"
                text="Approved announcements and media releases will appear here once confirmed for publication."
              />
            )}
            {isDocPage(url) && (!mappedDocs || mappedDocs.length === 0) && (
              <EmptyState
                icon={FileText}
                title="No documents published yet"
                text="Approved documents will be listed here with title, date and file size once released."
              />
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {!isInvestor && !withForm && (
              <ImageSlot
                src={mappedAsset?.src}
                alt={mappedAsset?.alt}
                caption={mappedAsset?.caption}
                brief={page.visual}
                className="min-h-64"
              />
            )}
            <div className="space-y-3 border-t border-border pt-6">
              <p className="eyebrow text-muted-foreground">Next step</p>
              {page.primaryCta && (
                <Button
                  asChild
                  className="h-auto w-full justify-between whitespace-normal rounded-md bg-[#1b4b96] py-3 text-left font-semibold text-white hover:bg-[#143a75]"
                >
                  {withForm ? (
                    <a href="#enquiry-form">
                      {page.primaryCta}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  ) : (
                    <SiteLink to={ctaTarget(page.primaryCta, page)}>
                      {page.primaryCta}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </SiteLink>
                  )}
                </Button>
              )}
              {page.secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  className="h-auto w-full justify-between whitespace-normal rounded-md border-[#d9dfe6] py-3 text-left font-semibold text-[#101820] hover:border-[#1b4b96]"
                >
                  {url === "/business-enquiry" ? (
                    <a href="#enquiry-form">
                      {page.secondaryCta}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  ) : (
                    <SiteLink to={ctaTarget(page.secondaryCta, page)}>
                      {page.secondaryCta}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </SiteLink>
                  )}
                </Button>
              )}
            </div>
          </aside>
        </div>

        {page.links.length > 0 && (
          <section className="mt-20">
            <h2 className="eyebrow text-muted-foreground">Related pages</h2>
            <div className="mt-4 grid border-t border-border sm:grid-cols-2">
              {page.links.map((l) => (
                <SiteLink
                  key={l.to}
                  to={l.to}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-5 pr-6 text-sm font-semibold text-foreground hover:text-primary"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                </SiteLink>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
