import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import LaunchYourVisionStepper from "@/components/launch-your-vision-stepper";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

export const metadata = {
  title: "Launch Your Vision | RAVENCI Solutions",
  description:
    "Start your project with RAVENCI in Brisbane. Tell me about your website, store, app or branding project in two minutes, and get a tailored proposal back.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Launch Your Vision | RAVENCI Solutions",
    description:
      "Start your project with RAVENCI in Brisbane. Tell me about your website, store, app or branding project in two minutes, and get a tailored proposal back.",
    url: "/launch-your-vision",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/launch-your-vision" },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20">
        <article className="flex flex-col">
          <Breadcrumbs items={[{ label: "Launch Your Vision" }]} className="mb-5 md:mb-10" />
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel label="Start a project" tick />
            <h1 className="text-display-l text-foreground">
              Launch Your Vision
            </h1>
            <p className="max-w-2xl text-lead text-muted-foreground">
              Two minutes. I&apos;ll come back with a tailored proposal.
            </p>
          </div>

          <LaunchYourVisionStepper />
        </article>
      </section>
    </main>
  );
}
