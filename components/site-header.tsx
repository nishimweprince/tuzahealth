"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { parseHash, scrollToId } from "@/lib/scroll";
import { NAV_LINKS, COMPANY, CTA } from "@/lib/site-data";

function navHref(pathname: string, link: (typeof NAV_LINKS)[number]) {
  return pathname === "/" ? link.homeHref : link.href;
}

function handleInPageNav(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
  onItemClick?: () => void,
) {
  const id = parseHash(href);
  if (!id || pathname !== "/") return;

  event.preventDefault();

  if (onItemClick) {
    // Close the mobile sheet first, then scroll once its scroll-lock is released
    // (scrolling while the body is locked is a no-op).
    onItemClick();
    window.setTimeout(() => scrollToId(id), 300);
  } else {
    scrollToId(id);
  }
}

function NavLinkList({
  mobile = false,
  pathname,
  onItemClick,
  lightChrome = false,
  activeSection = null,
}: {
  mobile?: boolean;
  pathname: string;
  onItemClick?: () => void;
  lightChrome?: boolean;
  activeSection?: string | null;
}) {
  return (
    <nav aria-label="Primary" className={mobile ? "w-full" : undefined}>
      <ul className={cn("flex items-center gap-1", mobile && "flex-col items-stretch gap-0.5")}>
        {NAV_LINKS.map((link) => {
          const href = navHref(pathname, link);
          const isAnchor = href.startsWith("#");
          const anchorId = isAnchor ? parseHash(href) : null;
          const isActive =
            pathname === "/"
              ? anchorId != null && anchorId === activeSection
              : href === pathname;

          const linkClass = cn(
            "relative rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            mobile
              ? "block px-2 py-2.5 text-[15px]"
              : cn(
                  "px-3 py-2 text-[14.5px]",
                  // Growing-from-left underline on hover; persistent when active.
                  "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none",
                  isActive && "after:scale-x-100",
                ),
            lightChrome
              ? cn("text-white/90 hover:text-white", isActive && "text-white")
              : cn("text-[#2b3640] hover:text-primary", isActive && "text-primary"),
          );

          return (
            <li key={link.label}>
              {isAnchor ? (
                <a
                  href={href}
                  onClick={(e) => handleInPageNav(e, href, pathname, onItemClick)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={href}
                  onClick={onItemClick}
                  aria-current={isActive ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const SPY_SECTION_IDS = ["services", "compliance", "faqs", "careers", "contact"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : "/contact";

  const closeMobile = () => setOpen(false);

  useEffect(() => {
    const updateScrolled = () => {
      if (pathname !== "/") {
        setScrolled(true);
        return;
      }

      const threshold = window.innerHeight * 0.15;
      setScrolled(window.scrollY >= threshold);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, [pathname]);

  // Scroll-spy: highlight the nav link for the section currently in view (home only).
  // On other routes activeSection is ignored (links resolve active state via pathname).
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = SPY_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const headerSolid = !isHome || scrolled;
  const lightChrome = isHome && !scrolled;

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={cn(
        "sticky top-0 z-50 h-(--header-height,4rem) w-full box-border transition-[background-color,border-color,box-shadow] duration-200",
        headerSolid
          ? "border-b border-border bg-background shadow-[0_1px_0_rgba(14,42,61,0.02)]"
          : "border-b-0 bg-transparent shadow-none",
      )}
    >
      <div className="page-container flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              scrollToId("top");
            }
          }}
          className="flex items-center gap-2.5 no-underline"
          aria-label="Tuza Health home"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={115}
            height={115}
            className="h-9 w-9 shrink-0"
            priority
          />
          <span className="sr-only">{COMPANY.legalName}</span>
          <span
            className={cn(
              "font-serif text-[18px] max-sm:text-[14px] font-bold tracking-wide",
              lightChrome ? "text-white" : "text-foreground",
            )}
          >
            Tuza Health
          </span>
          <span
            className={cn(
              "text-xs max-sm:text-xs uppercase tracking-[0.04em] max-sm:hidden",
              lightChrome ? "text-white/70" : "text-label-muted",
            )}
          >
            LLC
          </span>
        </Link>

        <div className="hidden md:block">
          <NavLinkList
            pathname={pathname}
            lightChrome={lightChrome}
            activeSection={activeSection}
          />
        </div>

        <div className="flex items-center gap-3.5">
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className={cn(
              "hidden md:inline text-[14.5px] font-semibold no-underline",
              lightChrome
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary",
            )}
          >
            {COMPANY.phone}
          </a>

          <Button
            asChild
            size="sm"
            variant={lightChrome ? "outline" : "default"}
            className={cn(
              "hidden sm:inline-flex",
              lightChrome &&
                "border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white",
            )}
          >
            {pathname === "/" ? (
              <a
                href={contactHref}
                onClick={(e) => handleInPageNav(e, contactHref, pathname)}
              >
                {CTA.contact}
              </a>
            ) : (
              <Link href={contactHref}>{CTA.contact}</Link>
            )}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(lightChrome && "text-white hover:bg-white/10 hover:text-white")}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 p-6 pt-12">
                <div className="font-serif font-semibold tracking-tight">{COMPANY.legalName}</div>
                <NavLinkList mobile pathname={pathname} onItemClick={closeMobile} />
                <a href={`tel:${COMPANY.phoneHref}`} className="text-sm font-semibold">
                  {COMPANY.phone}
                </a>
                <Button asChild className="w-full" onClick={closeMobile}>
                  {pathname === "/" ? (
                    <a
                      href={contactHref}
                      onClick={(e) => handleInPageNav(e, contactHref, pathname, closeMobile)}
                    >
                      {CTA.contact}
                    </a>
                  ) : (
                    <Link href={contactHref}>{CTA.contact}</Link>
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}