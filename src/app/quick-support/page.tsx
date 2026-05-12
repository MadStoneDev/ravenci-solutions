import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Breadcrumbs from "@/components/breadcrumbs";

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
      <section className="content-section pt-32 pb-12 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Quick Support" }]} />
          <h1 className="mt-4 text-4xl md:text-5xl font-medium">
            Quick Support
          </h1>
          <p className="mt-4 text-neutral-500/80 max-w-lg">
            Need a hand? Use the widget below to start a remote support session.
            Once connected, I can see your screen and help you sort things out
            in real time.
          </p>
        </article>
      </section>

      <section className="content-section pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <iframe
            title="RAVENCI Remote Support"
            src="https://getscreen.me/invite/widget?token=PU8So02pAnH7GCk5fx0rx6RRQYLXHDuI&v=2"
            className="w-full max-w-[400px] h-[400px] rounded-xl border border-neutral-200"
            style={{ border: "none" }}
          />
          <p className="mt-6 text-sm text-neutral-400 text-center max-w-sm">
            This session is private and secure. Screen sharing ends the moment
            you close the connection.
          </p>
        </div>
      </section>
    </main>
  );
}
