import Image from "next/image";
import Link from "next/link";

import { IconCircleCheckFilled } from "@tabler/icons-react";

import type { CaseStudy } from "@/data/case-studies";
import Breadcrumbs from "@/components/breadcrumbs";
import CaseStudyMetricsBar from "@/components/case-study-metrics-bar";
import TestimonialCarousel from "@/components/testimonials-single";

export default function CaseStudyVisualShowcase({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <>
      {/* Full-bleed hero */}
      <section
        className={`content-section relative min-h-[600px] flex items-end bg-ravenci-dark`}
      >
        <Image
          src={caseStudy.featuredImage}
          alt={`${caseStudy.clientName} project showcase`}
          fill
          className={`object-cover object-top opacity-40`}
          priority
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-ravenci-dark via-ravenci-dark/60 to-transparent`}
        ></div>

        <div className={`relative z-10 pt-32 pb-20 px-5 sm:px-20 xl:px-36 w-full`}>
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: caseStudy.clientName },
            ]}
            dark
          />

          <span
            className={`block mb-4 text-xs font-medium tracking-wider uppercase text-ravenci-primary`}
          >
            {caseStudy.industryLabel}
          </span>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-3xl`}>
            {caseStudy.heroHeadline}
          </h1>

          <p className={`mt-6 text-lg text-neutral-300 max-w-2xl`}>
            {caseStudy.heroSubheadline}
          </p>

          {/* Service pills */}
          <div className={`mt-8 flex flex-wrap gap-2`}>
            {caseStudy.serviceLabels.map((service) => (
              <span
                key={service}
                className={`px-4 py-1.5 text-sm font-medium bg-white/10 text-white/90 rounded-full border border-white/20`}
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
                className={`h-10 w-auto object-contain brightness-0 invert`}
              />
            </div>
          )}
        </div>
      </section>

      {/* Narrative: Problem → Approach → Results */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-3xl mx-auto`}>
          {/* Problem */}
          <h2 className={`text-3xl font-medium text-ravenci-dark`}>
            {caseStudy.problem.heading}
          </h2>
          <div className={`mt-8 flex flex-col gap-4 text-neutral-600`}>
            {caseStudy.problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Divider */}
          <div
            className={`my-16 w-16 h-0.5 bg-ravenci-primary`}
          ></div>

          {/* Approach */}
          <h2 className={`text-3xl font-medium text-ravenci-dark`}>
            {caseStudy.approach.heading}
          </h2>
          <div className={`mt-8 flex flex-col gap-4 text-neutral-600`}>
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
                  <span className={`text-neutral-700`}>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Divider */}
          <div
            className={`my-16 w-16 h-0.5 bg-ravenci-primary`}
          ></div>

          {/* Results */}
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

      {/* Gallery */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <div
            className={`grid grid-cols-1 ${caseStudy.galleryImages.length > 1 ? "md:grid-cols-2" : ""} gap-6`}
          >
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

      {/* Metrics bar */}
      <CaseStudyMetricsBar metrics={caseStudy.results.metrics ?? []} />

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

      {/* CTA */}
      <section
        className={`content-section py-24 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-2xl mx-auto text-center`}>
          <h2 className={`text-3xl md:text-4xl font-medium text-ravenci-dark`}>
            Ready to bring your vision to life?
          </h2>
          <p className={`mt-4 text-neutral-500`}>
            Let&apos;s create something beautiful together. Your brand deserves a
            digital experience that matches.
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
