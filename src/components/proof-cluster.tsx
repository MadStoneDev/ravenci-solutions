import { IconStarFilled } from "@tabler/icons-react";
import type { Testimonial } from "@/data/testimonials";

const PARTNERS = [
  "Shopify Partner",
  "BigCommerce Partner",
  "Synergy Wholesale Partner",
];

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
      className={`max-w-3xl mx-auto p-6 rounded-xl border ${
        dark ? "border-white/15 bg-white/5" : "border-neutral-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="flex text-ravenci-primary">
          {[0, 1, 2, 3, 4].map((i) => (
            <IconStarFilled key={i} size={16} />
          ))}
        </div>
        <span
          className={`text-sm ${dark ? "text-neutral-300" : "text-neutral-500"}`}
        >
          5.0 from 11 Google reviews
        </span>
      </div>

      {testimonial && (
        <>
          <p
            className={`mt-4 font-light leading-relaxed ${
              dark ? "text-neutral-200" : "text-neutral-700"
            }`}
          >
            &ldquo;{testimonial.content}&rdquo;
          </p>
          <p
            className={`mt-2 text-sm ${
              dark ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            <span className="font-bold">{testimonial.author}</span>
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </p>
        </>
      )}

      <div
        className={`mt-5 pt-5 border-t flex flex-wrap items-center gap-x-3 gap-y-2 ${
          dark ? "border-white/15" : "border-neutral-200"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="font-serif text-lg font-bold text-ravenci-primary">
            85+
          </span>
          <span
            className={`text-xs ${dark ? "text-neutral-300" : "text-neutral-500"}`}
          >
            PageSpeed guarantee
          </span>
        </span>
        {PARTNERS.map((b) => (
          <span
            key={b}
            className={`px-3 py-1 rounded-full border text-xs ${
              dark
                ? "border-white/20 text-neutral-300"
                : "border-neutral-200 text-neutral-500"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
