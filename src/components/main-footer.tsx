import Link from "next/link";

import FooterEmailCapture from "@/components/footer-email-capture";

type FooterLink = { href: string; label: string; external?: boolean };

// IA per README §2: existing slugs, Branding + Mobile Apps dropped, Labs kept.
const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Services",
    links: [
      { href: "/web-development", label: "Website Design & Development" },
      { href: "/ecommerce", label: "eCommerce" },
      { href: "/web-apps", label: "Web Apps & Client Portals" },
      { href: "/website-maintenance", label: "Managed Web" },
      { href: "/seo-and-content", label: "SEO / AEO / GEO" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { href: "/construction", label: "Construction" },
      { href: "/healthcare", label: "Healthcare" },
      { href: "/ecommerce", label: "eCommerce brands" },
      { href: "/professional-services", label: "Professional services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/case-studies", label: "Work" },
      { href: "/our-process", label: "Process" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About" },
      { href: "/articles", label: "Articles" },
      { href: "/labs", label: "Labs" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { href: "/cost-of-a-website-in-brisbane", label: "Brisbane website costs" },
      { href: "/wordpress-vs-shopify-vs-custom", label: "WordPress vs Shopify vs Custom" },
      { href: "/custom-vs-template", label: "Custom vs template" },
      { href: "/how-to-choose-a-web-designer-in-brisbane", label: "How to choose a web designer" },
    ],
  },
];

export default function MainFooter() {
  const year = new Date().getFullYear();

  return (
    // `dark` scopes the footer to the charcoal palette in both themes.
    <footer
      id="start"
      className="dark border-t border-border bg-background px-5 pb-10 pt-16 text-foreground md:px-12 md:pt-[72px] lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14">
        {/* Row A — brand + link columns */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">
          <div className="lg:w-80">
            <p className="text-[17px] font-bold tracking-[0.1em]">RAVENCI</p>
            <p className="mt-4 text-body text-muted-foreground">
              Custom web development, eCommerce and managed web for Australian
              businesses. Brisbane, Australia.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-body">
              <a href="tel:+61731061836" className="hover:text-foreground">
                07 3106 1836
              </a>
              <a href="tel:+61426238272" className="hover:text-foreground">
                0426 238 272
              </a>
            </div>
            <div className="mt-4 flex gap-4 text-small text-foreground/80">
              <a
                href="https://www.linkedin.com/company/91459779/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <span aria-hidden className="text-border">
                ·
              </span>
              <a
                href="https://www.designrush.com/agency/website-design-development"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                DesignRush
              </a>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 font-mono text-label uppercase text-muted-foreground">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-small text-foreground/90 transition-colors duration-fast hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Row B — email capture (existing wiring, restyled shell) */}
        <div className="border-y border-border py-7">
          <FooterEmailCapture />
        </div>

        {/* Row C — legal bar */}
        <div className="flex flex-col gap-4 text-small text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2018 – {year} RAVENCI Solutions</span>
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/accessibility-statement" className="hover:text-foreground">
              Accessibility
            </Link>
          </div>
          <span className="font-mono text-label uppercase tracking-[0.08em] text-muted-foreground md:ml-auto">
            Built once. Built properly.
          </span>
        </div>
      </div>
    </footer>
  );
}
