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
  /** How the thumbnail is cropped in its frame; defaults to "top". */
  imagePosition?: "top" | "center";
  /** Lightbox gallery; falls back to [image] when omitted. */
  images?: string[];
  /** Service pills, e.g. ["Branding", "Print"]. */
  tags: string[];
  /** Mixed-grid position; shares CaseStudy.order's scale. */
  order: number;
}

// Images are pending ("coming-soon"), so these render a "Coming soon" tile and
// stay non-clickable until real `image`/`images` paths are added — then the
// lightbox turns on automatically.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "coast-remedial-branding",
    title: "Coast Remedial Constructions",
    label: "Branding",
    excerpt:
      "Brand identity, company capability statement and business cards for Gold Coast remedial building specialists.",
    image: "coming-soon",
    tags: ["Branding", "Company Capability Statement", "Business Cards"],
    order: 10,
  },
  {
    id: "covenant-security-branding",
    title: "Covenant Security Solutions",
    label: "Branding",
    excerpt:
      "Brand identity, print and stationery, and vehicle and window signage for Brisbane security specialists.",
    image: "coming-soon",
    tags: [
      "Brand Identity",
      "Print & Stationery",
      "Vehicle & Window Signage",
      "Advertising and Marketing",
    ],
    order: 11,
  },
  {
    id: "cadeaurable-branding",
    title: "Cadeaurable",
    label: "Branding",
    excerpt:
      "Branding, business cards and packaging design for a Brisbane custom gifts and laser-cut decor maker.",
    image: "coming-soon",
    tags: ["Branding", "Business Cards", "Packaging Design"],
    order: 12,
  },
  {
    id: "reconcili8-branding",
    title: "Reconcili8",
    label: "Branding",
    excerpt: "Brand identity and logo design for Reconcili8.",
    image: "/showcase-images/reconcili8/reconcili8-logo.webp",
    imagePosition: "center",
    images: ["/showcase-images/reconcili8/reconcili8-logo.webp"],
    tags: ["Branding", "Identity"],
    order: 13,
  },
  {
    id: "weq-branding",
    title: "WEQ",
    label: "Branding",
    excerpt:
      "Branding and vehicle wraps for Willis Electrical QLD (WEQ), a Queensland electrical business.",
    image: "/showcase-images/weq/weq-ute-aerial.webp",
    imagePosition: "center",
    images: [
      "/showcase-images/weq/weq-ute-aerial.webp",
      "/showcase-images/weq/weq-ute-front.webp",
      "/showcase-images/weq/weq-polo.webp",
    ],
    tags: ["Branding", "Vehicle Wraps"],
    order: 14,
  },
];

export function getPortfolioItems(): PortfolioItem[] {
  return [...portfolioItems].sort((a, b) => a.order - b.order);
}
