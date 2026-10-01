import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { BRANDING } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: BRANDING.metaTitle,
  description: BRANDING.metaDescription,
  alternates: { canonical: `/${BRANDING.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: BRANDING.metaTitle,
    description: BRANDING.metaDescription,
    url: `/${BRANDING.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function BusinessDesignPage() {
  return <ServicePage data={BRANDING} />;
}
