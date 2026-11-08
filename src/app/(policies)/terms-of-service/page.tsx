import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Terms of Service | RAVENCI Solutions",
  description:
    "The terms you agree to when you buy a service from RAVENCI Solutions, covering quotes, payment, hosting, ownership and more.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Terms of Service | RAVENCI Solutions",
    description:
      "The terms you agree to when you buy a service from RAVENCI Solutions, covering quotes, payment, hosting, ownership and more.",
    url: "/terms-of-service",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col">
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-5 md:mb-10" />
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionLabel label="Legal" tick />
          <h1 className="text-display-l text-foreground">Terms of Service</h1>
          <p className="text-lead text-muted-foreground">
            The agreement when you buy a service from me.
          </p>
        </div>
      </section>

      <section className={SECTION}>
        <div className="flex max-w-prose flex-col gap-5 text-body text-muted-foreground">
          <p>Last updated: 9 November 2026</p>
          <p>
            These are the terms you agree to when you buy a service from me. I
            have tried to keep them plain. If anything here is unclear, email me
            and I will explain it.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            1. Who these terms are between
          </h3>
          <p>
            In these terms, I, me, my or RAVENCI means Richard Haddad, trading as
            RAVENCI Solutions. You or your means the person or business buying my
            services. Services means the work you have asked me to do, as
            described in your quote, proposal or invoice. Materials means
            anything I need to buy to do the work, such as a theme, plugin, font
            or stock image licence.
          </p>
          <p>I run RAVENCI Solutions as a sole trader, ABN 35 664 615 205.</p>

          <h3 className="mt-4 text-heading-s text-foreground">
            2. When these terms apply and how you accept them
          </h3>
          <p>
            These terms apply to every service you buy from me, unless we have
            signed a separate written agreement that says otherwise.
          </p>
          <p>You accept these terms when you do any of these things:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">pay an invoice from me, or</li>
            <li className="mb-1 list-disc">
              sign or approve a quote or proposal, or
            </li>
            <li className="mb-1 list-disc">
              confirm in writing (email is fine) that you want me to start.
            </li>
          </ul>
          <p>
            If you are agreeing on behalf of a business, you are confirming you
            are allowed to do that. Please keep a copy of these terms for your
            records.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            3. The services I provide
          </h3>
          <p>
            Once you have accepted these terms, I will normally start the work
            straight away, or on a date we agree. I will do the work:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">with reasonable care and skill,</li>
            <li className="mb-1 list-disc">
              to the accepted standards for branding, web design and
              development, web security, maintenance and SEO, and
            </li>
            <li className="mb-1 list-disc">
              in line with Australian law at the time.
            </li>
          </ul>
          <p>
            The exact services, and what is and is not included, are set out in
            your quote, proposal or invoice. I work Monday to Friday, 8:30am to
            5pm, excluding public holidays.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            4. Quotes, estimates and prices
          </h3>
          <p>
            I give estimates, not fixed quotations. An estimate is my best
            assessment of the cost, and it can change if the work changes.
            Estimates are valid for 30 days unless I say otherwise.
          </p>
          <p>
            The price can end up higher than an estimate if what you ask for
            changes, or if the work turns out to be genuinely different from what
            we agreed and I could not reasonably have known that at the start. If
            the extra cost will be 10% or less of the estimate, I will carry on
            and complete the work without checking with you first. If it will be
            more than 10%, I will stop and get your approval before doing the
            extra work.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">5. Payment</h3>
          <p>
            Project work is paid in stages. Unless your quote says otherwise,
            that is a 50% deposit to book the work in, 25% at the first look, and
            25% before launch.
          </p>
          <p>
            Ongoing services (hosting, maintenance, Website Care and similar
            subscriptions) are billed monthly in advance, at the start of each
            month.
          </p>
          <p>
            An invoice is due on the date shown on the invoice. Monthly services
            are due on the date they are issued.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">6. Late payment</h3>
          <p>
            If you cannot pay on time, tell me. I would far rather sort something
            out than send reminders.
          </p>
          <p>
            I send reminders to your nominated email address: 3 days before the
            due date, on the due date, 3 days after, and 7 days after. These are
            a courtesy. Not receiving one does not change what you owe, so please
            keep your email address up to date with me.
          </p>
          <p>If an invoice is still unpaid:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              15 days after the due date, I add a one-off $35 administration fee
              to cover the cost of chasing it, and I let you know.
            </li>
            <li className="mb-1 list-disc">
              20 days after the due date, I may pause your services (see below).
              I will warn you before I do.
            </li>
            <li className="mb-1 list-disc">
              60 days after the due date, I may cancel the affected services for
              good. I will send a final warning before this point.
            </li>
          </ul>
          <p>
            If I have to recover the debt through a debt collector or legal
            action, you also cover the reasonable costs of doing that.
          </p>
          <h4 className="mt-2 text-body font-semibold text-foreground">
            What a pause means
          </h4>
          <p>Pausing is not cancelling. When a service is paused:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              your website may be taken offline and your email may stop working,
            </li>
            <li className="mb-1 list-disc">
              I keep your data and your domain safe during the pause, and
            </li>
            <li className="mb-1 list-disc">
              the service starts again once the invoice is paid. In some cases a
              reconnection fee applies to bring a paused service back online, and
              I will tell you if one does.
            </li>
          </ul>
          <h4 className="mt-2 text-body font-semibold text-foreground">
            What cancelling at 60 days means
          </h4>
          <p>
            If an invoice is still unpaid 60 days after the due date, I may
            cancel the service permanently. After that:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              your data and backups may be deleted, and
            </li>
            <li className="mb-1 list-disc">
              a domain I renew on your behalf may be allowed to lapse, which can
              mean you lose it.
            </li>
          </ul>
          <p>I will always send a final warning before this happens.</p>

          <h3 className="mt-4 text-heading-s text-foreground">
            7. Your responsibilities
          </h3>
          <p>To do the work well I need a few things from you:</p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              content, information, approvals and access, supplied in reasonable
              time,
            </li>
            <li className="mb-1 list-disc">accurate information, and</li>
            <li className="mb-1 list-disc">
              the right to use anything you give me.
            </li>
          </ul>
          <p>
            You confirm that any text, images, logos or other content you give me
            is yours to use, or that you have permission to use it. If a claim is
            made against me because of content you supplied, you cover me for the
            reasonable cost of dealing with it.
          </p>
          <p>
            If I am held up because I am waiting on you, the timing of the work
            may move accordingly.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">8. Timing</h3>
          <p>
            I aim to do the work by the dates we agree or that I tell you. I
            cannot firmly guarantee a start or finish date, because web projects
            depend on content, approvals and third parties. Where no date is
            fixed, I will do the work within a reasonable time.
          </p>
          <p>
            If I do not start or finish within a reasonable time, you can choose
            to keep waiting, or you can end the contract. If you end it, you pay
            for the work done up to that point and for any Materials I am
            committed to paying for. If you have paid more than that, I refund
            the difference within 15 days.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            9. Things outside my control
          </h3>
          <p>
            Sometimes something outside my reasonable control gets in the way,
            for example a third-party service (a host, registrar, plugin or
            payment provider) going down or changing, Materials I rely on not
            being available, content or approvals not arriving from you, or other
            events I could not avoid.
          </p>
          <p>
            When that happens I restart the work as soon as I reasonably can. If
            it causes a long delay, you can choose to keep waiting, or to end the
            contract on the same terms as in clause 8.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            10. Cancelling and ending a service
          </h3>
          <p>
            Ongoing services are monthly, with no lock-in contract. You can
            cancel any time. Cancelling takes effect at the end of the month you
            have paid for, and I do not refund part months. The one exception is
            the optional 12-month Website Care contract, which has its own terms,
            including an early-exit fee, set out when you take it up.
          </p>
          <p>
            Project work: once booked, a project is not something you can cancel
            part way through on a whim, because I set time aside for it. If we
            agree to stop a project early, you pay for the work done up to that
            point and for any Materials I am committed to paying for, and I refund
            anything you have paid beyond that within 15 days.
          </p>
          <p>
            I may suspend or stop a service if you do not pay, as set out in
            clause 6.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            11. Hosting, domains, email and backups
          </h3>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              Domains are registered in your name, so you own them. If I renew or
              manage a domain for you, that does not change who owns it.
            </li>
            <li className="mb-1 list-disc">
              Backups: where hosting or maintenance is part of your service, I
              take working daily backups. A backup that does not restore is
              useless to both of us, so they are tested, not just taken.
            </li>
            <li className="mb-1 list-disc">
              Uptime: I do not guarantee a specific uptime figure unless your
              service says so in writing.
            </li>
            <li className="mb-1 list-disc">
              Third-party providers: some things run on other companies&apos;
              systems (hosts, registrars, plugins, email and payment providers).
              I am not responsible for their outages or changes, though I will
              help you deal with them.
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">
            12. Search visibility (SEO, AEO, GEO)
          </h3>
          <p>
            I cannot guarantee a ranking, a position, or an amount of traffic on
            Google or in AI answers. Search engines and AI systems run their own
            results and change how they work often. I do the work to recognised
            standards, and any content I write for you comes with an honest note
            on where it is weak, but the outcome is not something I or anyone can
            promise.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            13. Who owns the work
          </h3>
          <p>
            Once you have paid for the work in full, the designs, code and content
            I create for you are yours. Until then, they remain mine, and you do
            not have the right to use unpaid work.
          </p>
          <p>
            Some parts of a website are not mine to give away. Third-party
            components (themes, plugins, fonts, stock images and software
            libraries) stay under their own licences, which I pass on to you.
            Tools and frameworks I reuse across projects stay mine. Where your
            site uses RAVENCI Builder, it is covered by its own separate licence,
            which stands on its own and is not part of your hosting or Website
            Care.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            14. Showing your work in my portfolio
          </h3>
          <p>
            I may feature work I have done for you in my portfolio and marketing,
            on ravenci.solutions and elsewhere. That can include your business
            name, logo and screenshots of the site. If you would rather I did
            not, just tell me and I will leave you out. Where I have agreed to
            keep a project private, I will not show it at all.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            15. Privacy and your data
          </h3>
          <p>
            I handle your data in line with my{" "}
            <a className="text-accent hover:underline" href="/privacy-policy">
              privacy policy
            </a>
            . Where I have agreed that your data is sensitive or needs to stay in
            Australia, I keep it on Australian servers.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            16. If something goes wrong
          </h3>
          <p>
            Nothing in these terms takes away any rights you have under the
            Australian Consumer Law that cannot be excluded. Where the law lets
            me limit what I am responsible for, my responsibility for a failure in
            the services is limited to doing the work again, or paying the cost of
            having it done again.
          </p>
          <p>
            I do not limit my responsibility for death or personal injury caused
            by my negligence.
          </p>
          <p>
            Beyond that, I am only responsible for loss or damage that is a
            reasonably foreseeable result of me breaking these terms. If you are
            using my services for a business, I am not responsible for business
            losses, including lost profits or other economic loss.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">17. GST</h3>
          <p>
            I am not currently registered for GST, so GST is not added to my
            prices.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            18. Changes to these terms
          </h3>
          <p>
            I may update these terms if the law changes, if I change my prices
            (which I can do with notice), or to fix a minor error. For any change
            that materially affects you, I will give you at least 30 days&apos;
            notice. If you keep using the service, or pay your next invoice, after
            a change takes effect, that counts as accepting the new terms.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">19. Law</h3>
          <p>
            These terms are governed by the laws of Queensland, Australia, and
            both of us submit to the non-exclusive jurisdiction of its courts.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">20. Contact</h3>
          <p>You can reach me here:</p>
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
            <br />
            <a className="text-accent hover:underline" href="tel:+61731061836">
              (07) 3106 1836
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
