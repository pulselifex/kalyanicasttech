import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { searchPages } from "@/content/search";
import { SiteLink } from "./SiteLink";

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = searchPages(query);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search website"
          title="Search website"
          className="shrink-0 rounded-none"
        >
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-none"
      >
        <DialogTitle>Search Kalyani Cast Tech</DialogTitle>
        <Input
          aria-label="Search pages"
          placeholder="Search pages"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-none"
        />
        <div role="status" className="text-xs text-muted-foreground">
          {query.trim() ? `${results.length} ${results.length === 1 ? "page" : "pages"} found` : ""}
        </div>
        <div className="max-h-[55dvh] overflow-y-auto">
          {results.map((page) => (
            <SiteLink
              key={page.url}
              to={page.url}
              onClick={() => setOpen(false)}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-border py-4 text-foreground hover:text-primary"
            >
              <div>
                <p className="font-display font-semibold">{page.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {page.hero ?? page.meta}
                </p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4" />
            </SiteLink>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
