import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "Quick Support | RAVENCI Solutions",
  description:
    "Need remote support? Connect with RAVENCI instantly for screen sharing and troubleshooting. Brisbane-based web support for existing clients.",
  alternates: { canonical: "/quick-support" },
  robots: { index: false, follow: false },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Quick Support | RAVENCI Solutions",
    description:
      "Need remote support? Connect with RAVENCI instantly for screen sharing and troubleshooting.",
    url: "/quick-support",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function QuickSupportPage() {
  return (
    <main className="flex flex-col">
      <section className={`${SECTION} border-b border-border`}>
        <article className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Breadcrumbs items={[{ label: "Quick Support" }]} />
          <SectionLabel label="Remote support session" tick />
          <h1 className="text-display-l text-foreground">Quick Support</h1>
          <p className="max-w-lg text-lead text-muted-foreground">
            Need a hand? Use the widget below to start a remote support session.
            Once connected, I can see your screen and help you sort things out
            in real time.
          </p>
        </article>
      </section>

      <section className={SECTION}>
        <div className="mx-auto flex max-w-md flex-col items-center">
          <iframe
            title="RAVENCI Remote Support"
            src="https://getscreen.me/invite/widget?token=PU8So02pAnH7GCk5fx0rx6RRQYLXHDuI&v=2"
            className="h-[400px] w-full max-w-[400px] rounded-sm border border-border"
            style={{ border: "none" }}
          />
          <p className="mt-6 max-w-sm text-center text-small text-muted-foreground">
            This session is private and secure. Screen sharing ends the moment
            you close the connection.
          </p>
        </div>
      </section>
    </main>
  );
}
