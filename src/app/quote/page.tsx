import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
// /app/quote/page.tsx
import QuotingComponent from "@/components/quoting-component";

export const metadata = {
  title: "Get a Quote | RAVENCI Solutions",
  description:
    "Configure your hosting or maintenance plan and check out securely. For project work, request a proposal.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Get a Quote | RAVENCI Solutions",
    description:
      "Configure your hosting or maintenance plan and check out securely. For project work, request a proposal.",
    url: "/quote",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/quote" },
};

export default function QuotingPage() {
  return <QuotingComponent />;
}
