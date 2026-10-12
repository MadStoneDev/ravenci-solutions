// Portfolio items are lighter than case studies: a single card that opens its
// images in a lightbox, with no deep-dive detail page. Use these for branding,
// print or identity work that doesn't warrant a full write-up. `order` shares
// the same scale as CaseStudy.order, so items mix into the case-study grid by
// position (lower = earlier).

export interface PortfolioItem {
  id: string;
  /** Project or client name shown as the card title. */
  title: string;
  /** Accent category label, e.g. "Branding", "Print", "Identity". */
  label: string;
  excerpt: string;
  /** Card thumbnail. */
  image: string;
  /** Lightbox gallery; falls back to [image] when omitted. */
  images?: string[];
  /** Service pills, e.g. ["Branding", "Print"]. */
  tags: string[];
  /** Mixed-grid position; shares CaseStudy.order's scale. */
  order: number;
}

export const portfolioItems: PortfolioItem[] = [
  // Example shape — replace with real work:
  // {
  //   id: "acme-brand",
  //   title: "Acme Co.",
  //   label: "Branding",
  //   excerpt: "Logo, colour system and stationery for a Brisbane trades business.",
  //   image: "/showcase-images/acme/cover.jpg",
  //   images: [
  //     "/showcase-images/acme/logo.jpg",
  //     "/showcase-images/acme/cards.jpg",
  //     "/showcase-images/acme/signage.jpg",
  //   ],
  //   tags: ["Branding", "Print"],
  //   order: 10,
  // },
];

export function getPortfolioItems(): PortfolioItem[] {
  return [...portfolioItems].sort((a, b) => a.order - b.order);
}
