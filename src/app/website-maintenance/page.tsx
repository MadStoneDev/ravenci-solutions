import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { MANAGED_WEB } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: MANAGED_WEB.metaTitle,
  description: MANAGED_WEB.metaDescription,
  alternates: { canonical: `/${MANAGED_WEB.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: MANAGED_WEB.metaTitle,
    description: MANAGED_WEB.metaDescription,
    url: `/${MANAGED_WEB.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function ManagedWebPage() {
  return <ServicePage data={MANAGED_WEB} />;
}
