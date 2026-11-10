import { cn } from "@/lib/utils";

export interface ImageSlotProps {
  src?: string | undefined;
  alt?: string | undefined;
  caption?: string | undefined;
  brief?: string | undefined;
  className?: string;
  dark?: boolean;
}

/**
 * DEF-07: Renders authentic company photography with fallback to verified
 * engineering works photography rather than raw dashed wireframe boxes.
 */
export function ImageSlot({ src, alt, caption, brief, className }: ImageSlotProps) {
  const actualSrc = src || "/assets/manufacturing/factory-rewari-facade-01.png";
  const actualAlt = alt || "Kalyani Cast Tech manufacturing works and industrial engineering";
  const actualCaption =
    caption || brief || "Kalyani Cast Tech manufacturing works, fabrication and operations.";

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={actualSrc}
          alt={actualAlt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <figcaption className="border-t border-border bg-card/95 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {actualCaption}
      </figcaption>
    </figure>
  );
}
