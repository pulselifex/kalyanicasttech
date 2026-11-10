const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, '../src/components/site/SiteHeader.tsx');
let c = fs.readFileSync(headerPath, 'utf8');

// Update desktop nav
const oldDesktopNav = `        {/* Center: Primary page links (desktop) */}
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {desktopDropdownGroups.map((g) => (
            <DropdownMenu key={g.to}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-auto rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-transparent"
                >
                  {g.label}
                  <ChevronDown className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 rounded-lg p-2 shadow-lg border border-border"
              >
                {g.children.map((c) => (
                  <DropdownMenuItem
                    key={c.to}
                    asChild
                    className="rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  >
                    <SiteLink to={c.to}>{c.label}</SiteLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <SiteLink
            to="/contact"
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
          >
            Contact
          </SiteLink>
        </nav>`;

const newDesktopNav = `        {/* Center: Primary page links (desktop) */}
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {desktopDropdownGroups.map((g) =>
            g.children.length === 0 ? (
              <SiteLink
                key={g.to}
                to={g.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {g.label}
              </SiteLink>
            ) : (
              <DropdownMenu key={g.to}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-transparent"
                  >
                    {g.label}
                    <ChevronDown className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-72 rounded-lg p-2 shadow-lg border border-border"
                >
                  {g.children.map((c) => (
                    <DropdownMenuItem
                      key={c.to}
                      asChild
                      className="rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                    >
                      <SiteLink to={c.to}>{c.label}</SiteLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )}
          <SiteLink
            to="/contact"
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
          >
            Contact
          </SiteLink>
        </nav>`;

// Update mobile nav
const oldMobileNav = `          {allNavCategories.map((g) => (
            <details key={g.to} className="border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-sm font-semibold text-foreground">
                {g.label}
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </summary>
              <div className="pb-3 pl-3 space-y-1">
                {g.children.map((c) => (
                  <SiteLink
                    key={c.to}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {c.label}
                  </SiteLink>
                ))}
              </div>
            </details>
          ))}`;

const newMobileNav = `          {allNavCategories.map((g) =>
            g.children.length === 0 ? (
              <SiteLink
                key={g.to}
                to={g.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-display text-sm font-semibold text-foreground hover:text-primary"
              >
                {g.label}
              </SiteLink>
            ) : (
              <details key={g.to} className="border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-sm font-semibold text-foreground">
                  {g.label}
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </summary>
                <div className="pb-3 pl-3 space-y-1">
                  {g.children.map((c) => (
                    <SiteLink
                      key={c.to}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {c.label}
                    </SiteLink>
                  ))}
                </div>
              </details>
            )
          )}`;

// normalize CRLF
const norm = (s) => s.replace(/\r\n/g, '\n');
const isCRLF = c.includes('\r\n');
let normC = norm(c);

if (!normC.includes(norm(oldDesktopNav))) {
  console.error('Could not find oldDesktopNav');
  process.exit(1);
}

normC = normC.replace(norm(oldDesktopNav), norm(newDesktopNav));
normC = normC.replace(norm(oldMobileNav), norm(newMobileNav));

if (isCRLF) {
  normC = normC.replace(/\n/g, '\r\n');
}

fs.writeFileSync(headerPath, normC, 'utf8');
console.log('Successfully updated SiteHeader.tsx');

