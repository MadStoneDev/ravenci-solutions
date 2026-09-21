import type { Metadata } from "next";

import ServicePage from "@/components/service-page";
import { BUILD_ONLY } from "@/data/service-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: BUILD_ONLY.metaTitle,
  description: BUILD_ONLY.metaDescription,
  alternates: { canonical: `/${BUILD_ONLY.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: BUILD_ONLY.metaTitle,
    description: BUILD_ONLY.metaDescription,
    url: `/${BUILD_ONLY.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function BuildOnlyPage() {
  return <ServicePage data={BUILD_ONLY} />;
}
