import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { ECOMMERCE } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: ECOMMERCE.metaTitle,
  description: ECOMMERCE.metaDescription,
  alternates: { canonical: `/${ECOMMERCE.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: ECOMMERCE.metaTitle,
    description: ECOMMERCE.metaDescription,
    url: `/${ECOMMERCE.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function EcommercePage() {
  return <ServicePage data={ECOMMERCE} />;
}
