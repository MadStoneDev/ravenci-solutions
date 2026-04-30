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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className="grid lg:row-span-4 lg:[grid-template-rows:subgrid] bg-neutral-800/50 rounded-xl p-8 border border-neutral-700"
        >
          <h4 className="font-serif text-2xl font-bold text-white">
            {tier.name}
          </h4>
          <p className="mt-2 mb-2 text-neutral-400">
            {tier.description}
          </p>
          <div className="mt-2">
            <Accordion
              titleClassName="py-3 px-4 mb-2 text-base rounded-lg border border-neutral-600 bg-neutral-800 text-white hover:border-ravenci-primary hover:bg-ravenci-primary/20 transition-colors"
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
            className="group/cta mt-4 block text-center rounded-xl border border-neutral-600 hover:border-white hover:bg-white p-6 transition-colors"
          >
            <p className="text-sm text-neutral-400 group-hover/cta:text-neutral-500 transition-colors">
              from
            </p>
            <p className="text-4xl font-bold text-white group-hover/cta:text-ravenci-dark transition-colors">
              ${tier.price}
            </p>
            <p className="mt-3 text-sm font-medium text-white group-hover/cta:text-ravenci-dark transition-colors">
              Request a proposal &rarr;
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
