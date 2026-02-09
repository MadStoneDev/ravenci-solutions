// /app/quote/page.tsx
import QuotingComponent from "@/components/quoting-component";

export const metadata = {
  title: "Hosting & Maintenance - RAVENCI Solutions",
  description:
    "Configure your hosting or maintenance plan and check out securely via Stripe. For project work, request a proposal.",
};

export default function QuotingPage() {
  return <QuotingComponent />;
}
