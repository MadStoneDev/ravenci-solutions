import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Terms and Conditions | RAVENCI Solutions",
  description:
    "Terms of Service governing the use of ravenci.solutions and services provided by RAVENCI Solutions.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Terms and Conditions | RAVENCI Solutions",
    description:
      "Terms of Service governing the use of ravenci.solutions and services provided by RAVENCI Solutions.",
    url: "/terms-and-conditions",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col">
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
          <SectionLabel label="Legal" tick />
          <h1 className="text-display-l text-foreground">
            Terms and Conditions
          </h1>
          <p className="text-lead text-muted-foreground">Terms of Service.</p>
        </div>
      </section>

      <section className={SECTION}>
        <div className="flex max-w-prose flex-col gap-5 text-body text-muted-foreground">
          <p>
            These Terms of Service govern your use of the website located at{" "}
            <a
              className="text-accent hover:underline"
              href="https://ravenci.solutions"
            >
              https://ravenci.solutions
            </a>{" "}
            and any related services provided by RAVENCI.
          </p>
          <p>
            By accessing{" "}
            <a
              className="text-accent hover:underline"
              href="https://ravenci.solutions"
            >
              https://ravenci.solutions
            </a>
            , you agree to abide by these Terms of Service and to comply with
            all applicable laws and regulations. If you do not agree with these
            Terms of Service, you are prohibited from using or accessing this
            website or using any other services provided by RAVENCI.
          </p>
          <p>
            We, RAVENCI, reserve the right to review and amend any of these
            Terms of Service at our sole discretion. Upon doing so, we will
            update this page. Any changes to these Terms of Service will take
            effect immediately from the date of publication.
          </p>
          <p>These Terms of Service were last updated on 3 October 2026.</p>

          <h3 className="mt-4 text-heading-s text-foreground">Care Plans and Hosting</h3>
          <p>
            The following terms apply to RAVENCI care plans, the online store
            add-on, and standalone hosting, in addition to any separate proposal
            or agreement for project work:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">
                Monthly care plans
              </span>{" "}
              have a minimum term of three months. After the minimum term, they
              continue month-to-month and may be cancelled with 30 days' written
              notice. The plan remains active and billable until the notice
              period ends.
            </li>
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">
                Plans paid 6 or 12 months upfront
              </span>{" "}
              are billed in advance for the full period and renew automatically
              at the same rate for the same period unless cancelled in writing
              before the renewal date. Amounts paid for a period already paid are
              non-refundable, except where a refund is required by law.
            </li>
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">
                Included hours
              </span>{" "}
              reset each month and do not roll over. Included hours cover design,
              development, content updates, and small SEO tasks. Work beyond the
              included hours is billed at the plan's extra-hour rate and is only
              carried out after we confirm it with you.
            </li>
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">Hosting</span> is
              included with every care plan for as long as the plan is active.
              Standalone managed hosting, without a care plan, is $39 per month.
            </li>
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">
                The online store add-on
              </span>{" "}
              is $200 per month and may be added to any care plan.
            </li>
            <li className="mb-1 list-disc">
              <span className="font-semibold text-foreground">
                When a care plan or hosting ends,
              </span>{" "}
              hosting continues until the end of the paid period. On request,
              we'll provide your website files and database and reasonable help
              moving your site to a new host, provided your account is paid up to
              date. Additional migration work beyond reasonable assistance is
              billed at $165 per hour.
            </li>
          </ul>
          <p>Prices are in Australian dollars.</p>

          <h3 className="mt-4 text-heading-s text-foreground">Limitations of Use</h3>
          <p>
            By using this website, you warrant on behalf of yourself, your
            users, and other parties you represent that you will not:
          </p>
          <ul className="pl-5">
            <li className="mb-1 list-disc">
              modify, copy, prepare derivative works of, decompile, or reverse
              engineer any materials and software contained on this website;
            </li>
            <li className="mb-1 list-disc">
              remove any copyright or other proprietary notations from any
              materials and software on this website;
            </li>
            <li className="mb-1 list-disc">
              transfer the materials to another person or "mirror" the materials
              on any other server;
            </li>
            <li className="mb-1 list-disc">
              knowingly or negligently use this website or any of its associated
              services in a way that abuses or disrupts our networks or any
              other service RAVENCI provides;
            </li>
            <li className="mb-1 list-disc">
              use this website or its associated services to transmit or publish
              any harassing, indecent, obscene, fraudulent, or unlawful
              material;
            </li>
            <li className="mb-1 list-disc">
              use this website or its associated services in violation of any
              applicable laws or regulations;
            </li>
            <li className="mb-1 list-disc">
              use this website in conjunction with sending unauthorised
              advertising or spam;
            </li>
            <li className="mb-1 list-disc">
              harvest, collect, or gather user data without the user's consent;
              or
            </li>
            <li className="mb-1 list-disc">
              use this website or its associated services in such a way that may
              infringe the privacy, intellectual property rights, or other
              rights of third parties.
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">Intellectual Property</h3>
          <p>
            The intellectual property in the materials contained in this website
            are owned by or licensed to RAVENCI and are protected by applicable
            copyright and trademark law. We grant our users permission to
            download one copy of the materials for personal, non-commercial
            transitory use.
          </p>
          <p>
            This constitutes the grant of a licence, not a transfer of title.
            This licence shall automatically terminate if you violate any of
            these restrictions or the Terms of Service, and may be terminated by
            RAVENCI at any time.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Liability</h3>
          <p>
            Our website and the materials on our website are provided on an 'as
            is' basis. To the extent permitted by law, RAVENCI makes no
            warranties, expressed or implied, and hereby disclaims and negates
            all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property, or
            other violation of rights.
          </p>
          <p>
            In no event shall RAVENCI or its suppliers be liable for any
            consequential loss suffered or incurred by you or any third party
            arising from the use or inability to use this website or the
            materials on this website, even if RAVENCI or an authorised
            representative has been notified, orally or in writing, of the
            possibility of such damage.
          </p>
          <p>
            In the context of this agreement, &ldquo;consequential loss&rdquo;
            includes any consequential loss, indirect loss, real or anticipated
            loss of profit, loss of benefit, loss of revenue, loss of business,
            loss of goodwill, loss of opportunity, loss of savings, loss of
            reputation, loss of use and/or loss or corruption of data, whether
            under statute, contract, equity, tort (including negligence),
            indemnity, or otherwise.
          </p>
          <p>
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Accuracy of Materials</h3>
          <p>
            The materials appearing on our website are not comprehensive and are
            for general information purposes only. RAVENCI does not warrant or
            make any representations concerning the accuracy, likely results, or
            reliability of the use of the materials on this website, or
            otherwise relating to such materials or on any resources linked to
            this website.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Links</h3>
          <p>
            RAVENCI has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement, approval, or
            control by RAVENCI of the site. Use of any such linked site is at
            your own risk and we strongly advise you make your own
            investigations with respect to the suitability of those sites.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Right to Terminate</h3>
          <p>
            We may suspend or terminate your right to use our website and
            terminate these Terms of Service immediately upon written notice to
            you for any breach of these Terms of Service.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Severance</h3>
          <p>
            Any term of these Terms of Service which is wholly or partially void
            or unenforceable is severed to the extent that it is void or
            unenforceable. The validity of the remainder of these Terms of
            Service is not affected.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Governing Law</h3>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of Australia. You irrevocably submit to the exclusive
            jurisdiction of the courts in that State or location.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Contact Us</h3>
          <p>
            For any questions or concerns regarding these terms, you may contact
            us using the following details:
          </p>
          <p>
            <span className="font-semibold text-foreground">RAVENCI Team</span>
            <br />
            <a
              className="text-accent hover:underline"
              href="mailto: hello@ravenci.solutions"
            >
              hello@ravenci.solutions
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
