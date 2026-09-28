import { IconStarFilled } from "@tabler/icons-react";
import type { Testimonial } from "@/data/testimonials";

const PARTNERS = [
  "Shopify Partner",
  "BigCommerce Partner",
  "Synergy Wholesale Partner",
];

const GOOGLE_REVIEWS_URL = "https://g.page/r/CTttHG3mMzZ_EAI/review";

/**
 * Reusable trust block for placing next to CTAs: Google rating, one short
 * client quote, the 85+ PageSpeed guarantee, and partner badges. Pass the
 * page's own testimonial (or omit to show the block without a quote).
 */
export default function ProofCluster({
  testimonial,
  theme = "light",
}: {
  testimonial?: Testimonial | null;
  theme?: "light" | "dark";
}) {
  const dark = theme === "dark";

  return (
    <div
      className={`${dark ? "dark " : ""}mx-auto max-w-3xl rounded-sm border border-border bg-card p-6`}
    >
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-opacity hover:opacity-80"
      >
        <div className="flex text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <IconStarFilled key={i} size={16} />
          ))}
        </div>
        <span className="text-small text-muted-foreground underline decoration-border underline-offset-2">
          5.0 from 11 Google reviews
        </span>
      </a>

      {testimonial && (
        <>
          <blockquote className="mt-4 text-body leading-relaxed text-foreground">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>
          <p className="mt-2 text-small text-muted-foreground">
            <span className="font-semibold text-foreground">
              {testimonial.author}
            </span>
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </p>
        </>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-5">
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-heading-s font-bold text-accent">
            85+
          </span>
          <span className="text-small text-muted-foreground">
            PageSpeed guarantee
          </span>
        </span>
        {PARTNERS.map((b) => (
          <span
            key={b}
            className="rounded-sm border border-border px-3 py-1 text-small text-muted-foreground"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
