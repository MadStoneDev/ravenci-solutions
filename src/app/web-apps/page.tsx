import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { WEB_APPS } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: WEB_APPS.metaTitle,
  description: WEB_APPS.metaDescription,
  alternates: { canonical: `/${WEB_APPS.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: WEB_APPS.metaTitle,
    description: WEB_APPS.metaDescription,
    url: `/${WEB_APPS.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function WebAppsPage() {
  return <ServicePage data={WEB_APPS} />;
}
