import type { Metadata } from "next";

import IndustryPage from "@/components/industry-page";
import { PROFESSIONAL_SERVICES } from "@/data/industry-pages";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: PROFESSIONAL_SERVICES.metaTitle,
  description: PROFESSIONAL_SERVICES.metaDescription,
  alternates: { canonical: `/${PROFESSIONAL_SERVICES.slug}` },
  openGraph: {
    ...OG_DEFAULTS,
    title: PROFESSIONAL_SERVICES.metaTitle,
    description: PROFESSIONAL_SERVICES.metaDescription,
    url: `/${PROFESSIONAL_SERVICES.slug}`,
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function ProfessionalServicesPage() {
  return <IndustryPage data={PROFESSIONAL_SERVICES} />;
}
