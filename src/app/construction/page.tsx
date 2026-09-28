import type { Metadata } from "next";

import IndustryPage from "@/components/industry-page";
import { CONSTRUCTION } from "@/data/industry-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: CONSTRUCTION.metaTitle,
  description: CONSTRUCTION.metaDescription,
  alternates: { canonical: `/${CONSTRUCTION.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: CONSTRUCTION.metaTitle,
    description: CONSTRUCTION.metaDescription,
    url: `/${CONSTRUCTION.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function ConstructionPage() {
  return <IndustryPage data={CONSTRUCTION} />;
}
