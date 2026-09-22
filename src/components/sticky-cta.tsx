"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

type StickyCTAProps = {
  link: string;
  label?: string;
  startingPrice?: number;
  priceNote?: string;
};

export default function StickyCTA({
  link,
  label = "Get a quote",
  startingPrice,
  priceNote = "ex GST",
}: StickyCTAProps) {
  const formatted = useMemo(() => {
    if (typeof startingPrice !== "number") return null;
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(startingPrice);
  }, [startingPrice]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 py-3">
        <div className="text-small">
          {formatted ? (
            <div className="leading-tight">
              <p className="font-medium text-foreground">{`From ${formatted}`}</p>
              <p className="text-small text-muted-foreground">{priceNote}</p>
            </div>
          ) : (
            <p className="font-medium text-foreground">Ready to start?</p>
          )}
        </div>
        <Button asChild variant="primary">
          <Link href={link} aria-label={label}>
            {label}
          </Link>
        </Button>
      </div>
      <div className="h-[env(safe-area-inset-bottom,0)]" />
    </div>
  );
}
