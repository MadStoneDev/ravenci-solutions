import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Privacy Policy | RAVENCI Solutions",
  description:
    "How RAVENCI Solutions collects, uses and protects your personal information across ravenci.solutions and its services.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Privacy Policy | RAVENCI Solutions",
    description:
      "How RAVENCI Solutions collects, uses and protects your personal information across ravenci.solutions and its services.",
    url: "/privacy-policy",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col">
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-5 md:mb-10" />
        <div className="flex max-w-5xl flex-col gap-4">
          <SectionLabel label="Legal" tick />
          <h1 className="text-display-l text-foreground">Privacy Policy</h1>
          <p className="text-lead text-muted-foreground">
            What I collect, why, and what you can do about it.
          </p>
        </div>
      </section>

      <section className={SECTION}>
        <div className="flex max-w-5xl flex-col gap-5 text-body text-muted-foreground">
          <p>Last updated: 9 November 2026</p>
          <p>
            I am Richard Haddad, trading as RAVENCI Solutions (ABN 35 664 615
            205), a sole trader based in Australia. This policy explains what
            personal information I collect through my website,{" "}
            <a
              className="text-accent hover:underline"
              href="https://ravenci.solutions"
            >
              ravenci.solutions
            </a>
            , and the services I provide, why I collect it, and how I look after
            it. I handle personal information in line with the Australian Privacy
            Principles.
          </p>
          <p>
            Personal information is any information that can identify you, such as
            your name, email address, phone number, or details about how you use
            my website.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Information you give me
          </h3>
          <p>I collect information you provide directly, for example when you:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              fill in a contact or enquiry form (your name, email, phone if you
              add it, and whatever you write in your message),
            </li>
            <li className="mb-1 list-disc">
              request a free website audit or visibility check (your website
              address and the email you want the report sent to),
            </li>
            <li className="mb-1 list-disc">
              sign up to receive updates from me (your email address), or
            </li>
            <li className="mb-1 list-disc">
              become a client (the details I need to do the work and invoice you).
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">
            Information collected automatically
          </h3>
          <p>
            When you visit the site, my servers and analytics tools may record
            standard technical data, such as your IP address, browser type, the
            pages you view, and the date and time of your visit. On its own this
            usually does not identify you, but it can when combined with other
            information.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Cookies and analytics
          </h3>
          <p>
            Cookies are small files stored on your device. I use a small number
            of them to run the site and, with your consent, to understand how the
            site is used so I can improve it.
          </p>
          <p>
            When you first visit, a banner lets you accept or decline analytics
            cookies. Analytics only run if you accept. The analytics tools I use
            are:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              Google Analytics and Google Tag Manager, to see which pages are
              visited and how people find the site, and
            </li>
            <li className="mb-1 list-disc">
              Microsoft Clarity, which can record how visitors interact with
              pages (such as mouse movement, clicks and scrolling) to help me
              spot problems and improve the layout.
            </li>
          </ul>
          <p>
            You can change your mind at any time by clearing cookies in your
            browser, and you can block cookies in your browser settings, though
            some parts of the site may not work as well.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Spam protection
          </h3>
          <p>
            I use Cloudflare Turnstile on my forms to tell real people from bots.
            It may collect limited technical information from your browser to do
            that. It is there to stop spam, not to track you.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Payments</h3>
          <p>
            If you pay me, the payment is handled by my payment providers (such
            as Stripe and Square). They process your card or bank details on their
            own secure systems. I do not see or store your full card number.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Why I collect it
          </h3>
          <p>I only collect what I reasonably need, and I use it to:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              reply to your enquiry and provide the services you ask for,
            </li>
            <li className="mb-1 list-disc">
              send you an audit, report or update you requested,
            </li>
            <li className="mb-1 list-disc">
              invoice you and keep proper business records,
            </li>
            <li className="mb-1 list-disc">
              run, protect and improve the website, and
            </li>
            <li className="mb-1 list-disc">
              meet my legal and tax obligations.
            </li>
          </ul>
          <p>I do not sell your personal information to anyone.</p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Who I share it with
          </h3>
          <p>
            I share personal information only where I need to, and only with
            providers who help me run my business. These include:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              email providers I use to send and manage email (MailerSend and
              MailerLite),
            </li>
            <li className="mb-1 list-disc">
              analytics and spam-protection providers (Google, Microsoft Clarity
              and Cloudflare),
            </li>
            <li className="mb-1 list-disc">
              payment providers (Stripe and Square),
            </li>
            <li className="mb-1 list-disc">
              hosting and storage providers that run my website and store data,
              and
            </li>
            <li className="mb-1 list-disc">
              government bodies, courts or authorities where the law requires it.
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">
            Where your information is held
          </h3>
          <p>
            I am based in Australia and I keep personal information in Australia
            where I can. Some of the providers above are based overseas (for
            example in the United States), so some information may be stored or
            processed outside Australia. Where that happens, I take reasonable
            steps to make sure it is handled with care. Where I have agreed that a
            client&apos;s data is sensitive or must stay in Australia, I keep it on
            Australian servers.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            How long I keep it
          </h3>
          <p>
            I keep personal information only for as long as I need it for the
            purpose I collected it, or for as long as the law requires (for
            example, tax and accounting records). When I no longer need it, I
            delete it or remove the details that identify you.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Keeping it secure
          </h3>
          <p>
            I take reasonable steps to protect your information from loss, misuse
            and unauthorised access. No method of sending or storing data online
            is completely secure, so I cannot promise absolute security, but I
            treat your information carefully and act quickly if something goes
            wrong.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Your rights</h3>
          <p>You can ask me to:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              tell you what personal information I hold about you,
            </li>
            <li className="mb-1 list-disc">
              correct it if it is wrong or out of date, or
            </li>
            <li className="mb-1 list-disc">
              delete it, where I am not required to keep it.
            </li>
          </ul>
          <p>
            If you have signed up for updates, every email has an unsubscribe
            link, and you can opt out at any time. Just email me at the address
            below and I will help. If you are not happy with how I have handled
            your information, you can also contact the Office of the Australian
            Information Commissioner (OAIC) at{" "}
            <a
              className="text-accent hover:underline"
              href="https://www.oaic.gov.au"
            >
              oaic.gov.au
            </a>
            .
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Children&apos;s privacy
          </h3>
          <p>
            My services are aimed at businesses, not children. I do not knowingly
            collect personal information from children under 13.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Links to other sites
          </h3>
          <p>
            My website may link to other sites I do not control. This policy does
            not cover them, so please read their own privacy policies when you
            visit them.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Changes to this policy
          </h3>
          <p>
            I may update this policy from time to time as my business or the law
            changes. When I do, I will update this page and the date at the top.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Contact</h3>
          <p>
            If you have any questions about your privacy or this policy, email me:
          </p>
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
