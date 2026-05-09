// /app/quote/page.tsx
import QuotingComponent from "@/components/quoting-component";

export const metadata = {
  title: "Get a Quote | RAVENCI Solutions",
  description:
    "Configure your hosting or maintenance plan and check out securely. For project work, request a proposal.",
  openGraph: {
    title: "Get a Quote | RAVENCI Solutions",
    description:
      "Configure your hosting or maintenance plan and check out securely. For project work, request a proposal.",
    url: "/quote",
    type: "website" as const,
  },
  twitter: { card: "summary_large_image" as const },
  alternates: { canonical: "/quote" },
};

export default function QuotingPage() {
  return <QuotingComponent />;
}
