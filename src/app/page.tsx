import Link from "next/link";

import Accordion from "@/components/accordion";
import ComparisonTable from "@/components/comparison-table";
import LazyVideo from "@/components/lazy-video";
import LogosPanel from "@/components/logo-panel";
import TestimonialsSingle from "@/components/testimonials-single";
import VisibilityCheckForm from "@/components/visibility-check-form";

import { CLIENT_LOGOS } from "@/lib/our-clients";
import {
  getTestimonialByID,
  getTestimonialsForPage,
} from "@/data/testimonials";

import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Image from "next/image";
import { Route } from "next";
import ServicesShowcase from "@/components/services-showcase";
import PlatformsSection from "@/components/platforms-section";

export const metadata = {
  title: "Custom Website Design Brisbane | RAVENCI Solutions",
  description: "Custom websites and eCommerce platforms for established Australian businesses. A structural engineer's approach to web development, built properly, still working in five years. Brisbane-based, 25+ years experience.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Custom Website Design Brisbane | RAVENCI Solutions",
    description: "Custom websites and eCommerce platforms for established Australian businesses. A structural engineer's approach to web development, built properly, still working in five years.",
    url: "/",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
};

export default function Home() {
  const homepageTestimonials = getTestimonialsForPage("homepage");
  const adamTestimonial = getTestimonialByID("adam-bisset");
  const geoffTestimonial = getTestimonialByID("geoff-beisler");

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 gap-6 justify-center min-h-[750px] bg-ravenci-dark`}
      >
        <article
          className={`col-span-12 lg:col-span-8 pb-16 lg:pb-0 flex flex-col justify-center`}
        >
          <h1
            className={`max-w-[500px] lg:max-w-[860px] text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium text-white leading-[1.05]`}
          >
            I&apos;m Richard. I build websites that{" "}
            <span className="font-serif italic font-normal text-ravenci-primary">
              pay for themselves
            </span>
            .
          </h1>
          <h2
            className={`mt-8 max-w-[600px] text-lg md:text-xl font-light text-neutral-400`}
          >
            Structural engineer by training, web developer for 25+ years.
            467 projects for established Australian businesses,
            built properly, still working in five years.
          </h2>

          <div className={`mt-16 flex gap-6`}>
            <Link
              href={`/launch-your-vision`}
              className={`group relative px-6 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Launch Your Vision</span>

              <div
                className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
              ></div>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
              ></div>
            </Link>

            <Link
              href={`/case-studies`}
              className={`group relative px-6 py-3 rounded-full text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Our Work</span>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-transparent group-hover:border-white z-10 transition-all duration-500 ease-in-out`}
              ></div>
            </Link>
          </div>
        </article>

        <ServicesShowcase />
      </section>

      {/* Video */}
      <section
        className={`content-section video-container relative h-[750px] bg-white overflow-hidden`}
        style={{
          backgroundColor: `rgba(255,255,255,0)`,
        }}
      >
        <article className={`absolute inset-0 w-full h-[750px]`}>
          <LazyVideo
            src="/ravenci-promo.mp4"
            poster="/og-image.jpg"
            className="relative w-full h-screen"
          />
        </article>

        <article className={`relative z-10 h-[750px]`}></article>
      </section>

      {/* Client Logos */}
      <LogosPanel
        logos={CLIENT_LOGOS}
        heading={`Some of Our Clients`}
        headingColour={`text-white`}
        headingSide={`bottom`}
        speed={`slow`}
      />

      {/* Services Section */}
      <section
        className={`content-section relative py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[750px] bg-ravenci-dark text-white`}
      >
        <Image
          className={`absolute -top-[52px] md:-top-[60px] lg:-top-[70px] right-2 md:right-12 scale-50 sm:scale-75 lg:scale-100 z-20`}
          src={`/standing-raven.svg`}
          alt={`RAVENCI Solutions`}
          width={74}
          height={88}
        />

        <article className={`col-span-12 lg:col-span-6 mb-16 lg:mb-0`}>
          <h2
            className={`max-w-[500px] text-5xl font-light`}
            style={{ lineHeight: "3.75rem" }}
          >
            Your website should generate results, not headaches.
          </h2>

          <div className={`mt-16 mb-24 flex flex-col gap-8 max-w-[500px]`}>
            <p>
              Most websites we replace were built with the right intentions and
              the wrong approach: drag-and-drop builders, plugin stacks,
              subscriptions piling up, eventually breaking. We don&apos;t work
              that way. We build properly, once, so it&apos;s still working
              five years from now.
            </p>

            <p>
              From design through to development, hosting and ongoing maintenance,
              your site remains performant and fresh without you having to think about it. Tell
              us what you need. We&apos;ll take it from there.
            </p>
          </div>

          <div className={`mt-16 flex gap-6`}>
            <Link
              href={`/launch-your-vision` as Route}
              className={`group relative px-6 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Start Creating</span>

              <div
                className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
              ></div>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
              ></div>
            </Link>
          </div>
        </article>

        <article className={`lg:col-start-8 col-span-12 lg:col-span-5`}>
          <Accordion
            titleClassName={`py-6 text-2xl`}
            items={[
              {
                title: `Development`,
                content: `<p class="mb-4 text-neutral-100">Built once. Built properly. Still working in five years.</p>

<p class="text-neutral-100">Content sites your team can manage</p>
<p class="mb-4 text-neutral-400/70">Sites you can update yourself without calling a developer for every little change. Built with a dashboard anyone can understand.</p>

<p class="text-neutral-100">Custom builds when off-the-shelf won't cut it</p>
<p class="mb-4 text-neutral-400/70">When the project genuinely needs something custom, we build it from scratch, engineered so it grows with you instead of against you.</p>

<p class="text-neutral-100">E-commerce that sells</p>
<p class="mb-4 text-neutral-400/70">Online stores designed around how your customers buy and how your team fulfils. Whether that's Shopify, BigCommerce, or a custom platform, chosen for what fits, not what's easiest.</p>

<p class="text-neutral-100">Talks to the rest of your business</p>
<p class="mb-4 text-neutral-400/70">Your website connected to your CRM, your booking system, your accounting, your email, so data flows automatically and nobody's re-typing it three times.</p>
`,
              },
              {
                title: `Design`,
                content: `<p class="mb-4 text-neutral-100">Design that works for your customers, not for design awards.</p><p class="text-neutral-100">Planning the experience</p>
<p class="mb-4 text-neutral-400/70">We start by studying the best user experience for your business: what your customers need, where they'll click, what makes them act. The design follows from that.</p>
<p class="text-neutral-100">How it looks</p>
<p class="mb-4 text-neutral-400/70">A site that looks and feels true to your brand. Modern, clean and complete with the kind of attention to detail your customers will appreciate.</p>
<p class="text-neutral-100">Driving action</p>
<p class="mb-4 text-neutral-400/70">Every page is designed with a purpose: to get your visitors to enquire, to buy, or to learn more about your business.</p>`,
              },
              {
                title: `After Launch`,
                content: `<p class="mb-4 text-neutral-100">We don't hand you a site and disappear.</p>

<p class="text-neutral-100">Hosting that performs</p>
<p class="mb-4 text-neutral-400/70">Every site we build lives on scalable cloud servers closest to your customers. Fast, secure, and properly maintained, not a shared hosting afterthought.</p>

<p class="text-neutral-100">Ongoing care</p>
<p class="mb-4 text-neutral-400/70">Security updates, performance checks, backups, content changes. We handle it so you don't have to chase a developer every time something needs attention. Regular care is what keeps a five-year website going well beyond five years.</p>

<a href="/retainer-packages" class="relative px-3 py-1 bg-ravenci-primary hover:bg-ravenci-primary/80 text-white rounded-full transition-all duration-300 ease-in-out">See our care plans</a>`,
              },
            ]}
          />
        </article>
      </section>

      {/* Platforms */}
      <PlatformsSection />

      {/* Testimonial */}
      <TestimonialsSingle
        key={adamTestimonial!.id}
        testimonial={{
          content: adamTestimonial!.content,
          author: adamTestimonial!.author,
          role: adamTestimonial!.role,
          company: adamTestimonial!.company,
          image: adamTestimonial!.image || null,
        }}
        extraClassNames={`content-section bg-ravenci-primary`}
      />

      {/* From the Founder */}
      <section
        className={`content-section pt-32 pb-32 px-5 sm:px-20 xl:px-36 flex flex-col justify-center min-h-[750px] bg-white`}
      >
        <blockquote
          className={`flex flex-col gap-10 max-w-[1100px] text-2xl md:text-3xl lg:text-4xl font-normal`}
          style={{
            lineHeight: "3.5rem",
          }}
        >
          <p>
            After 25+ years building websites for Australian businesses, I&apos;ve
            learned that the easy part is launch day. The hard part is the next five
            years.
          </p>

          <p>
            Most sites look great at launch and quietly fall apart after.
            Plugins clash, subscriptions stack up, the developer who built
            it stops returning calls. That&apos;s not how we work. We build
            it right the first time so you can stop thinking about it.
          </p>
          <footer className={`border-t border-ravenci-dark`}>
            <cite
              className={`text-base md:text-lg lg:text-xl font-light`}
              style={{
                fontStyle: "normal",
              }}
            >
              Richard Haddad, Founder
            </cite>
          </footer>
        </blockquote>
      </section>

      <section
        className={`content-section pt-40 pb-48 px-5 sm:px-20 xl:px-36 grid grid-cols-12 bg-neutral-100 text-ravenci-dark`}
      >
        <article className={`mb-16 lg:mb-0 col-span-12 lg:col-span-6`}>
          <h2
            className={`max-w-[500px] text-5xl font-light`}
            style={{ lineHeight: "3.75rem" }}
          >
            Proudly serving clients since 2018.
          </h2>

          <div className={`mt-10 flex flex-col gap-8 max-w-[450px]`}>
            <p>
              From custom business sites to full eCommerce platforms, we build
              the digital foundation that established businesses run on, and
              we stick around to keep it running.
            </p>
          </div>
        </article>

        <article className={`col-span-12 lg:col-span-6 md:px-10`}>
          <section
            className={`flex flex-row flex-wrap border-t border-l border-neutral-200`}
          >
            {CLIENT_LOGOS.slice(0, 9).map(({ title, logo, href }, index) => {
              return (
                <div
                  key={`icon-${title}-${index}`}
                  title={title}
                  className={`px-4 py-5 flex justify-center items-center w-1/2 sm:w-1/3 h-24 hover:bg-neutral-200/40 border-b border-r border-neutral-200 transition-all duration-300 ease-in-out`}
                >
                  <Image
                    src={logo}
                    alt={title}
                    width={150}
                    height={60}
                    className={`w-full h-full object-contain`}
                  />
                </div>
              );
            })}
          </section>
        </article>
      </section>

      {/* Comparison Table */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-2 font-serif text-h3 font-bold text-center">
            Why Businesses Choose RAVENCI
          </h2>
          <p className="mb-10 text-center text-neutral-500/80">
            Most agencies build websites to launch. We build them to last.
            Here&apos;s how we stack up against the typical drag-and-drop crowd
            and the DIY builders.
          </p>
          <ComparisonTable />
          <div className="mt-8 text-center">
            <Link
              href="/custom-vs-template"
              className="text-sm text-ravenci-primary hover:underline"
            >
              Read the full comparison breakdown
            </Link>
          </div>
        </div>
      </section>

      {/* SEO & Ongoing Growth */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-ravenci-primary">
              After Launch
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium">
              A Great Website Earns Its Keep. An Optimised One Earns More Every
              Month.
            </h2>
            <p className="mt-6 text-neutral-400 leading-relaxed">
              Most agencies hand you a site and disappear. We stick around to
              make sure it actually gets found. SEO retainers that compound your
              investment month over month: more visibility, more traffic, more
              enquiries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/seo-and-content"
                className="px-6 py-3 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 transition-colors duration-300"
              >
                SEO & Content Services
              </Link>
              <Link
                href="/retainer-packages"
                className="px-6 py-3 rounded-full text-white border-2 border-white/30 hover:bg-white hover:text-ravenci-dark transition-colors duration-300"
              >
                Care Plans
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-ravenci-primary">85+</p>
              <p className="mt-1 text-sm text-neutral-400">
                PageSpeed guaranteed on every build
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-ravenci-primary">
                Monthly
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Reporting so you see what&apos;s working
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 col-span-2">
              <p className="text-sm text-neutral-300">
                Most clients add an SEO retainer after launch. The website gets
                them online. The SEO gets them found.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSingle
        key={geoffTestimonial!.id}
        testimonial={{
          content: geoffTestimonial!.content,
          author: geoffTestimonial!.author,
          role: geoffTestimonial!.role,
          company: geoffTestimonial!.company,
          image: geoffTestimonial!.image || null,
        }}
        extraClassNames={`content-section bg-ravenci-primary`}
      />

      {/* Visibility Check Lead Magnet */}
      <section
        id="visibility-check"
        className={`content-section pt-20 pb-28 px-5 sm:px-20 xl:px-36 bg-neutral-100`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Is Your Website Visible to Google and AI?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get a free report showing how visible your business is to search
            engines and AI models.
          </p>
        </div>
        <VisibilityCheckForm />
      </section>

      <footer className={`bg-ravenci-dark`}></footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "RAVENCI Solutions Services",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Website Design", url: "https://ravenci.solutions/web-development" },
              { "@type": "ListItem", position: 2, name: "eCommerce", url: "https://ravenci.solutions/ecommerce" },
              { "@type": "ListItem", position: 3, name: "Branding", url: "https://ravenci.solutions/business-design" },
              { "@type": "ListItem", position: 4, name: "SEO & Content", url: "https://ravenci.solutions/seo-and-content" },
              { "@type": "ListItem", position: 5, name: "Retainer Packages", url: "https://ravenci.solutions/retainer-packages" },
            ],
          }),
        }}
      />
    </main>
  );
}
