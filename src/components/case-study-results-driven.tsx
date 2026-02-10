import Image from "next/image";
import Link from "next/link";

import { IconArrowLeft, IconCircleCheckFilled } from "@tabler/icons-react";

import type { CaseStudy } from "@/data/case-studies";
import CaseStudyMetricsBar from "@/components/case-study-metrics-bar";
import TestimonialCarousel from "@/components/testimonials-single";

export default function CaseStudyResultsDriven({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <>
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-4xl`}>
          <Link
            href={`/case-studies`}
            className={`group relative mb-6 pl-1 pr-2 py-0.5 inline-flex items-center gap-2 w-fit hover:scale-110 font-bold text-sm text-ravenci-primary hover:text-white transition-all duration-300 ease-in-out`}
          >
            <IconArrowLeft size={18} className={`z-10`} />
            <span className={`z-10`}>Back to Case Studies</span>
            <div
              className={`absolute top-0 left-full group-hover:left-0 right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
            ></div>
          </Link>

          <span
            className={`block mb-4 text-xs font-medium tracking-wider uppercase text-ravenci-primary`}
          >
            {caseStudy.industryLabel}
          </span>

          <h1 className={`text-4xl md:text-5xl font-medium text-ravenci-dark`}>
            {caseStudy.heroHeadline}
          </h1>

          <p className={`mt-6 text-lg text-neutral-500 max-w-2xl`}>
            {caseStudy.heroSubheadline}
          </p>

          {/* Service pills */}
          <div className={`mt-8 flex flex-wrap gap-2`}>
            {caseStudy.serviceLabels.map((service) => (
              <span
                key={service}
                className={`px-4 py-1.5 text-sm font-medium bg-neutral-100 text-neutral-600 rounded-full`}
              >
                {service}
              </span>
            ))}
          </div>

          {/* Client logo */}
          {caseStudy.clientLogo && (
            <div className={`mt-10`}>
              <Image
                src={caseStudy.clientLogo}
                alt={`${caseStudy.clientName} logo`}
                width={160}
                height={60}
                className={`h-10 w-auto object-contain`}
              />
            </div>
          )}
        </div>
      </section>

      {/* Featured image */}
      <section className={`content-section w-full bg-white`}>
        <div className={`relative w-full aspect-[16/9] max-h-[600px] overflow-hidden`}>
          <Image
            src={caseStudy.featuredImage}
            alt={`${caseStudy.clientName} project showcase`}
            fill
            className={`object-cover object-top`}
            priority
          />
        </div>
      </section>

      {/* Metrics bar */}
      <CaseStudyMetricsBar metrics={caseStudy.results.metrics} />

      {/* Problem + Approach */}
      <section className={`content-section grid grid-cols-1 lg:grid-cols-2`}>
        {/* Problem — light */}
        <div className={`py-20 px-5 sm:px-12 xl:px-20 bg-neutral-200/50`}>
          <h2 className={`text-3xl font-medium text-ravenci-dark`}>
            {caseStudy.problem.heading}
          </h2>
          <div className={`mt-8 flex flex-col gap-4 text-neutral-600`}>
            {caseStudy.problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Approach — dark */}
        <div
          className={`py-20 px-5 sm:px-12 xl:px-20 bg-ravenci-dark text-white`}
        >
          <h2 className={`text-3xl font-medium`}>
            {caseStudy.approach.heading}
          </h2>
          <div className={`mt-8 flex flex-col gap-4 text-neutral-300`}>
            {caseStudy.approach.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {caseStudy.approach.highlights && (
            <ul className={`mt-8 flex flex-col gap-3`}>
              {caseStudy.approach.highlights.map((highlight) => (
                <li key={highlight} className={`flex items-start gap-3`}>
                  <IconCircleCheckFilled
                    size={20}
                    className={`mt-0.5 text-ravenci-primary flex-shrink-0`}
                  />
                  <span className={`text-neutral-200`}>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Results */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-3xl`}>
          <h2 className={`text-3xl font-medium text-ravenci-dark`}>
            {caseStudy.results.heading}
          </h2>
          <div className={`mt-8 flex flex-col gap-4 text-neutral-600`}>
            {caseStudy.results.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <TestimonialCarousel
          testimonial={{
            content: caseStudy.testimonial.content,
            author: caseStudy.testimonial.author,
            image: null,
          }}
          extraClassNames={`content-section bg-ravenci-primary`}
        />
      )}

      {/* Gallery */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
            {caseStudy.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative w-full aspect-[16/10] overflow-hidden`}
              >
                <Image
                  src={img}
                  alt={`${caseStudy.clientName} gallery image ${i + 1}`}
                  fill
                  className={`object-cover object-top`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className={`content-section py-24 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-2xl mx-auto text-center`}>
          <h2 className={`text-3xl md:text-4xl font-medium text-ravenci-dark`}>
            Ready to achieve similar results?
          </h2>
          <p className={`mt-4 text-neutral-500`}>
            Let&apos;s talk about how we can help your business grow with a
            website that actually works.
          </p>
          <div className={`mt-10 flex justify-center gap-4`}>
            <Link
              href={`/launch-your-vision`}
              className={`group relative px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-all duration-300 ease-in-out`}
            >
              Start Your Project
            </Link>
            <Link
              href={`/case-studies`}
              className={`group relative px-8 py-3 grid place-content-center rounded-full text-ravenci-dark border-2 border-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <section className={`content-section py-6 bg-white`}></section>
    </>
  );
}
