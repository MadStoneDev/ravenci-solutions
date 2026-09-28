import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { WEB_DEVELOPMENT } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: WEB_DEVELOPMENT.metaTitle,
  description: WEB_DEVELOPMENT.metaDescription,
  alternates: { canonical: `/${WEB_DEVELOPMENT.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: WEB_DEVELOPMENT.metaTitle,
    description: WEB_DEVELOPMENT.metaDescription,
    url: `/${WEB_DEVELOPMENT.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function WebDevelopmentPage() {
  return <ServicePage data={WEB_DEVELOPMENT} />;
}
