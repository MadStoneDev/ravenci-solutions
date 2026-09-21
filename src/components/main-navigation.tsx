"use client";

import { useState, useRef, useEffect, useCallback } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconChevronDown, IconMenu, IconX } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

type NavLink = { href: string; label: string };

// IA per README §2: existing slugs kept, no /services/ prefix; Branding and
// Mobile Apps dropped from nav.
const SERVICES: NavLink[] = [
  { href: "/web-development", label: "Website Design & Development" },
  { href: "/ecommerce", label: "eCommerce" },
  { href: "/web-apps", label: "Web Apps & Client Portals" },
  { href: "/website-maintenance", label: "Managed Web" },
  { href: "/seo-and-content", label: "SEO / AEO / GEO" },
];

const INDUSTRIES: NavLink[] = [
  { href: "/construction", label: "Construction" },
  { href: "/healthcare", label: "Healthcare" },
  { href: "/ecommerce", label: "eCommerce" },
];

const PRIMARY: NavLink[] = [
  { href: "/case-studies", label: "Work" },
  { href: "/our-process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const COMPANY: NavLink[] = [
  ...PRIMARY,
  { href: "/articles", label: "Articles" },
  { href: "/labs", label: "Labs" },
];

const CTA = { href: "/launch-your-vision", label: "Start a project" };

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

/** Desktop dropdown: hover to open, keyboard-focusable, Escape/blur to close. */
function NavDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavLink[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const active = items.some((i) => isActive(pathname, i.href));

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-fast ${
          active ? "text-accent" : "text-foreground/80 hover:text-foreground"
        }`}
      >
        {label}
        <IconChevronDown
          size={14}
          className={`transition-transform duration-base ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full pt-3 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } transition-opacity duration-base`}
      >
        <div
          role="menu"
          className="min-w-[240px] rounded-sm border border-border bg-card py-2 shadow-2"
        >
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm transition-colors duration-fast hover:bg-muted ${
                isActive(pathname, item.href)
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MainNavigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the mobile drawer on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 w-full items-center gap-8 px-5 md:h-[76px] md:px-12 lg:px-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="RAVENCI home">
            <Image
              src="/ravenci-logo-dark.svg"
              alt="RAVENCI"
              width={125}
              height={25}
              priority
              className="dark:hidden"
            />
            <Image
              src="/ravenci-logo.svg"
              alt="RAVENCI"
              width={125}
              height={25}
              priority
              className="hidden dark:block"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden flex-1 items-center gap-7 lg:flex">
            <NavDropdown label="Services" items={SERVICES} pathname={pathname} />
            <NavDropdown label="Industries" items={INDUSTRIES} pathname={pathname} />
            {PRIMARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-fast ${
                  isActive(pathname, item.href)
                    ? "border-b border-accent pb-0.5 text-accent"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="ml-auto hidden lg:block">
            <Button asChild size="default">
              <Link href={CTA.href}>{CTA.label}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
          >
            {menuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background px-5 pb-16 pt-6 lg:hidden"
        >
          <nav className="flex flex-col gap-8">
            <MobileGroup label="Services" items={SERVICES} pathname={pathname} onNav={closeMenu} />
            <MobileGroup label="Industries" items={INDUSTRIES} pathname={pathname} onNav={closeMenu} />
            <MobileGroup label="Company" items={COMPANY} pathname={pathname} onNav={closeMenu} />
            <Button asChild size="lg" className="w-full">
              <Link href={CTA.href} onClick={closeMenu}>
                {CTA.label}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}

function MobileGroup({
  label,
  items,
  pathname,
  onNav,
}: {
  label: string;
  items: NavLink[];
  pathname: string;
  onNav: () => void;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-label uppercase text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            onClick={onNav}
            className={`py-1.5 text-lead ${
              isActive(pathname, item.href) ? "text-accent" : "text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
