import type { Metadata } from "next";

import IndustryPage from "@/components/industry-page";
import { HEALTHCARE } from "@/data/industry-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: HEALTHCARE.metaTitle,
  description: HEALTHCARE.metaDescription,
  alternates: { canonical: `/${HEALTHCARE.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: HEALTHCARE.metaTitle,
    description: HEALTHCARE.metaDescription,
    url: `/${HEALTHCARE.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function HealthcarePage() {
  return <IndustryPage data={HEALTHCARE} />;
}
