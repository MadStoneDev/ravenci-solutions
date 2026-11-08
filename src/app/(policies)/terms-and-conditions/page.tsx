import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Terms and Conditions | RAVENCI Solutions",
  description:
    "The terms and conditions for using the ravenci.solutions website. For buying services, see the RAVENCI Solutions Terms of Service.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Terms and Conditions | RAVENCI Solutions",
    description:
      "The terms and conditions for using the ravenci.solutions website. For buying services, see the RAVENCI Solutions Terms of Service.",
    url: "/terms-and-conditions",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col">
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} className="mb-5 md:mb-10" />
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionLabel label="Legal" tick />
          <h1 className="text-display-l text-foreground">
            Terms and Conditions
          </h1>
          <p className="text-lead text-muted-foreground">
            The rules for using this website.
          </p>
        </div>
      </section>

      <section className={SECTION}>
        <div className="flex max-w-prose flex-col gap-5 text-body text-muted-foreground">
          <p>Last updated: 9 November 2026</p>
          <p>
            These terms and conditions cover your use of my website,{" "}
            <a
              className="text-accent hover:underline"
              href="https://ravenci.solutions"
            >
              ravenci.solutions
            </a>
            . By using the site, you agree to these terms and to follow all
            applicable laws. If you do not agree, please do not use the site.
          </p>
          <p>
            These are the rules for using the website itself. When you buy a
            service from me, the{" "}
            <a className="text-accent hover:underline" href="/terms-of-service">
              Terms of Service
            </a>{" "}
            apply, and they cover quotes, payment, hosting, ownership and the rest
            of the working relationship.
          </p>
          <p>
            I am Richard Haddad, trading as RAVENCI Solutions (ABN 35 664 615
            205). I may update these terms from time to time, and the current
            version always lives on this page.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Using this website
          </h3>
          <p>
            You agree that you will not, for yourself or anyone you act for:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              copy, modify, reverse engineer or make derivative works of the
              materials or software on this website;
            </li>
            <li className="mb-1 list-disc">
              remove any copyright or ownership notices from the materials;
            </li>
            <li className="mb-1 list-disc">
              copy or mirror the materials on another server;
            </li>
            <li className="mb-1 list-disc">
              use the website in a way that abuses, disrupts or overloads it or
              any service I provide;
            </li>
            <li className="mb-1 list-disc">
              use the website to send or publish anything harassing, indecent,
              misleading, fraudulent or unlawful;
            </li>
            <li className="mb-1 list-disc">
              use the website to send spam or unauthorised advertising;
            </li>
            <li className="mb-1 list-disc">
              harvest or collect other people&apos;s data without their consent;
              or
            </li>
            <li className="mb-1 list-disc">
              use the website in a way that infringes the privacy or
              intellectual property of others.
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">
            Intellectual property
          </h3>
          <p>
            The content on this website (text, design, code, logos and images) is
            owned by or licensed to me and is protected by copyright and trade
            mark law. You may view and use the site for your own personal,
            non-commercial use. That is a licence to use the site, not a transfer
            of ownership, and it ends if you break these terms.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            The website is provided as is
          </h3>
          <p>
            I keep the website accurate and up to date as best I can, but it is
            provided on an &ldquo;as is&rdquo; basis and is for general
            information only. To the extent the law allows, I do not guarantee
            that the website will be error free, uninterrupted, or that the
            information on it is complete or current.
          </p>
          <p>
            Nothing in these terms takes away any rights you have under the
            Australian Consumer Law that cannot be excluded. Beyond those rights,
            I am not responsible for any loss arising from your use of, or
            inability to use, this website.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Links to other sites
          </h3>
          <p>
            This website may link to sites I do not run. I have not reviewed all
            of them and I am not responsible for their content. A link is not an
            endorsement, so please make your own judgement about any site you
            visit from here.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Suspending access
          </h3>
          <p>
            I may suspend or withdraw your access to the website at any time if
            you break these terms.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            If part of these terms does not hold
          </h3>
          <p>
            If any part of these terms is found to be invalid or unenforceable,
            that part is removed and the rest still applies.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Governing law</h3>
          <p>
            These terms are governed by the laws of Queensland, Australia, and
            both of us submit to the non-exclusive jurisdiction of its courts.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Contact</h3>
          <p>If you have any questions about these terms, email me:</p>
          <p>
            <span className="font-semibold text-foreground">
              Richard Haddad, RAVENCI Solutions
            </span>
            <br />
            <a
              className="text-accent hover:underline"
              href="mailto:hello@ravenci.solutions"
            >
              hello@ravenci.solutions
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
