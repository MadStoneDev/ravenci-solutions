import type { Metadata } from "next";
import Link from "next/link";

import CaseStudyCard from "@/components/case-study-card";
import { getAllCaseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | RAVENCI Solutions",
  description:
    "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow through strategic web development and design.",
  openGraph: {
    title: "Case Studies | RAVENCI Solutions",
    description:
      "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies | RAVENCI Solutions",
    description:
      "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow through strategic web development and design.",
    url: "https://ravenci.solutions/case-studies",
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      url: "https://ravenci.solutions",
    },
  };

  return (
    <main className={`flex flex-col`}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-3xl`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-h1 font-medium text-ravenci-dark`}
          >
            Our Work Speaks for Itself
          </h1>
          <p className={`mt-6 text-lg text-neutral-500 max-w-2xl`}>
            Real projects. Real results. Explore how we&apos;ve helped
            Australian businesses transform their digital presence and achieve
            measurable growth.
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <section
        className={`content-section py-12 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white`}
      >
        <div
          className={`mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl text-center`}
        >
          <article className={`flex flex-col items-center`}>
            <span className={`text-3xl md:text-4xl font-bold`}>20+</span>
            <span className={`mt-1 text-sm font-light text-white/80`}>
              Years Experience
            </span>
          </article>
          <article className={`flex flex-col items-center`}>
            <span className={`text-3xl md:text-4xl font-bold`}>50+</span>
            <span className={`mt-1 text-sm font-light text-white/80`}>
              Projects Delivered
            </span>
          </article>
          <article className={`flex flex-col items-center`}>
            <span className={`text-3xl md:text-4xl font-bold`}>95+</span>
            <span className={`mt-1 text-sm font-light text-white/80`}>
              Avg. PageSpeed Score
            </span>
          </article>
          <article className={`flex flex-col items-center`}>
            <span className={`text-3xl md:text-4xl font-bold`}>100%</span>
            <span className={`mt-1 text-sm font-light text-white/80`}>
              Australian Owned
            </span>
          </article>
        </div>
      </section>

      {/* Case study grid */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14`}
        >
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className={`content-section py-24 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white`}
      >
        <div className={`max-w-2xl mx-auto text-center`}>
          <h2 className={`text-3xl md:text-4xl font-medium`}>
            Ready to become our next success story?
          </h2>
          <p className={`mt-4 text-white/80`}>
            Every project in our portfolio started with a conversation. Let&apos;s
            start yours.
          </p>
          <div className={`mt-10`}>
            <Link
              href={`/launch-your-vision`}
              className={`inline-block px-8 py-3 bg-white text-ravenci-dark font-medium rounded-full hover:bg-neutral-100 transition-colors duration-300 ease-in-out`}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <section className={`content-section py-6 bg-white`}></section>
    </main>
  );
}
