import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { SEO_CONTENT } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: SEO_CONTENT.metaTitle,
  description: SEO_CONTENT.metaDescription,
  alternates: { canonical: `/${SEO_CONTENT.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: SEO_CONTENT.metaTitle,
    description: SEO_CONTENT.metaDescription,
    url: `/${SEO_CONTENT.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function SeoContentPage() {
  return <ServicePage data={SEO_CONTENT} />;
}
