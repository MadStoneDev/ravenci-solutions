"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Accordion from "@/components/accordion";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  accordionContent: string;
}

export default function PricingCards({ tiers }: { tiers: PricingTier[] }) {
  const [allOpen, setAllOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleToggle = () => setAllOpen((prev) => !prev);

  return (
    <div className={`grid grid-cols-1 ${tiers.length === 4 ? "lg:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-3"} gap-8`}>
      {tiers.map((tier, index) => (
        <div
          key={index}
          className="grid lg:row-span-4 lg:[grid-template-rows:subgrid] rounded-sm border border-border bg-card p-8 shadow-1"
        >
          <h4 className="text-heading-s text-foreground">
            {tier.name}
          </h4>
          <p className="mt-2 mb-2 text-body text-muted-foreground">
            {tier.description}
          </p>
          <div className="mt-2">
            <Accordion
              titleClassName="px-4 mb-2 rounded-sm border border-border bg-muted text-foreground hover:border-accent hover:bg-muted/70 transition-colors"
              items={[
                {
                  title: "What's Included",
                  content: tier.accordionContent,
                },
              ]}
              {...(isDesktop
                ? { isOpen: allOpen, onToggle: handleToggle }
                : {})}
            />
          </div>
          <Link
            href="/launch-your-vision"
            className="group/cta mt-4 block rounded-sm border border-border bg-background p-6 text-center transition-colors hover:border-foreground hover:bg-foreground"
          >
            <p className="text-small text-muted-foreground transition-colors group-hover/cta:text-background/70">
              {/^\d/.test(tier.price) ? "from" : " "}
            </p>
            <p className="text-display-m font-bold text-foreground transition-colors group-hover/cta:text-background">
              {/^\d/.test(tier.price) ? `$${tier.price}` : tier.price}
            </p>
            <p className="mt-3 text-small font-medium text-foreground transition-colors group-hover/cta:text-background">
              Request a proposal &rarr;
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
