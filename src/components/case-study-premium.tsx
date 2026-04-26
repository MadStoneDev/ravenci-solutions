import Image from "next/image";
import Link from "next/link";

import {
  IconCircleCheckFilled,
  IconExternalLink,
  IconArrowRight,
} from "@tabler/icons-react";

import type { CaseStudy } from "@/data/case-studies";
import { getRelatedCaseStudies } from "@/data/case-studies";
import Breadcrumbs from "@/components/breadcrumbs";
import TestimonialCarousel from "@/components/testimonials-single";
import ScrollingScreenshot from "@/components/scrolling-screenshot";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov"];

function isVideoFile(src: string): boolean {
  const lower = src.toLowerCase().split("?")[0];
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/**
 * Renders the right element for whatever media file you point at:
 * - .mp4 / .webm / .ogg / .mov → autoplay-loop-muted <video>
 * - everything else (including .gif) → next/image
 *
 * Lets case studies mix static screenshots, animated GIFs, and video
 * walkthroughs in the same gallery without per-file configuration.
 */
function MediaItem({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes?: string;
}) {
  if (isVideoFile(src)) {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      sizes={sizes}
    />
  );
}

/**
 * Image/video gallery helper — renders 1, 2, or 3 columns based on count.
 * Falls back gracefully to a single `image` if `images` array isn't provided.
 * Each item can be a static image, animated GIF, or video file.
 */
function SectionGallery({
  images,
  fallback,
  alt,
  aspectClass = "aspect-[16/10]",
}: {
  images?: string[];
  fallback?: string;
  alt: string;
  aspectClass?: string;
}) {
  const list = images && images.length > 0 ? images : fallback ? [fallback] : [];
  if (list.length === 0) return null;

  const colsClass =
    list.length === 1
      ? "grid-cols-1"
      : list.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mt-12 grid ${colsClass} gap-4 md:gap-6`}>
      {list.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`relative w-full ${aspectClass} overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100`}
        >
          <MediaItem
            src={src}
            alt={`${alt} screenshot ${i + 1}`}
            sizes={
              list.length === 1
                ? "100vw"
                : list.length === 2
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyPremium({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const relatedStudies = getRelatedCaseStudies(caseStudy.slug, 3);
  const hasMetrics =
    caseStudy.results.metrics && caseStudy.results.metrics.length > 0;

  return (
    <>
      {/* Hero — text left, big metric strip below, full-bleed image */}
      <section className="content-section pt-32 pb-12 md:pb-16 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Case Studies", href: "/case-studies" },
              { label: caseStudy.clientName },
            ]}
          />

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs font-medium tracking-widest uppercase text-ravenci-primary">
              {caseStudy.industryLabel}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-xs font-medium tracking-wider uppercase text-neutral-500">
              {caseStudy.clientName}
            </span>
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-medium text-ravenci-dark leading-[1.05]">
            {caseStudy.heroHeadline}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-500/90 max-w-3xl leading-relaxed">
            {caseStudy.heroSubheadline}
          </p>

          {caseStudy.clientUrl && (
            <a
              href={caseStudy.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-ravenci-primary hover:gap-3 transition-all duration-200"
            >
              <span className="font-medium">Visit live site</span>
              <IconExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Hero metric strip — adapts to metric count */}
        {hasMetrics &&
          (() => {
            const metricsCount = caseStudy.results.metrics!.length;
            const totalCells = metricsCount + (caseStudy.timeline ? 1 : 0);
            const gridClass =
              totalCells === 2
                ? "grid-cols-2"
                : totalCells === 3
                  ? "grid-cols-3"
                  : totalCells === 4
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2 md:grid-cols-3";
            return (
              <div
                className={`mt-12 md:mt-16 grid ${gridClass} gap-px bg-neutral-200 border border-neutral-200`}
              >
                {caseStudy.results.metrics!.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-white p-6 md:p-8 flex flex-col items-start"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-ravenci-primary">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-xs md:text-sm text-neutral-500 tracking-wide uppercase">
                      {metric.label}
                    </span>
                  </div>
                ))}
                {caseStudy.timeline && (
                  <div className="bg-white p-6 md:p-8 flex flex-col items-start">
                    <span className="text-3xl md:text-4xl font-bold text-ravenci-dark">
                      {caseStudy.timeline}
                    </span>
                    <span className="mt-1 text-xs md:text-sm text-neutral-500 tracking-wide uppercase">
                      Build Time
                    </span>
                  </div>
                )}
              </div>
            );
          })()}
      </section>

      {/* Featured image — full-bleed under hero. Auto-scrolling if the
          case study sets featuredImageScroll; static otherwise. Video files
          render as autoplay-loop-muted videos. */}
      <section className="content-section bg-white pb-16 md:pb-20 px-5 sm:px-20 xl:px-36">
        {caseStudy.featuredImageScroll ? (
          <ScrollingScreenshot
            src={caseStudy.featuredImage}
            alt={`${caseStudy.clientName} featured project image`}
          />
        ) : (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
            <MediaItem
              src={caseStudy.featuredImage}
              alt={`${caseStudy.clientName} featured project image`}
              sizes="100vw"
            />
          </div>
        )}
      </section>

      {/* At-a-glance bar */}
      <section className="content-section py-6 md:py-8 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-sm">
          {caseStudy.year && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400">
                Year
              </span>
              <span className="mt-1 block font-medium">{caseStudy.year}</span>
            </div>
          )}
          {caseStudy.timeline && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400">
                Timeline
              </span>
              <span className="mt-1 block font-medium">
                {caseStudy.timeline}
              </span>
            </div>
          )}
          {caseStudy.techStack && caseStudy.techStack.length > 0 && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400">
                Platform
              </span>
              <span className="mt-1 block font-medium">
                {caseStudy.techStack.slice(0, 3).join(" · ")}
              </span>
            </div>
          )}
          {caseStudy.serviceLabels && caseStudy.serviceLabels.length > 0 && (
            <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400">
                Services
              </span>
              <span className="mt-1 block font-medium">
                {caseStudy.serviceLabels.slice(0, 3).join(" · ")}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* The Challenge */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            01 — The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            {caseStudy.problem.heading}
          </h2>
          <div className="mt-8 flex flex-col gap-4 text-neutral-600 leading-relaxed">
            {caseStudy.problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <SectionGallery
          images={caseStudy.problem.images}
          fallback={caseStudy.problem.image}
          alt={`${caseStudy.clientName} — the challenge`}
        />
      </section>

      {/* Our Approach */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-neutral-100">
        <div className="max-w-3xl">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            02 — Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            {caseStudy.approach.heading}
          </h2>
          <div className="mt-8 flex flex-col gap-4 text-neutral-600 leading-relaxed">
            {caseStudy.approach.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {caseStudy.approach.highlights &&
            caseStudy.approach.highlights.length > 0 && (
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {caseStudy.approach.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 p-3 bg-white rounded border border-neutral-200/70"
                  >
                    <IconCircleCheckFilled
                      size={20}
                      className="mt-0.5 text-ravenci-primary flex-shrink-0"
                    />
                    <span className="text-sm text-neutral-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
        </div>

        <SectionGallery
          images={caseStudy.approach.images}
          fallback={caseStudy.approach.image}
          alt={`${caseStudy.clientName} — our approach`}
        />
      </section>

      {/* Key Features */}
      {caseStudy.features && caseStudy.features.length > 0 && (
        <section className="content-section py-20 md:py-28 px-5 sm:px-20 xl:px-36 bg-white">
          <div className="max-w-3xl mb-16">
            <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
              03 — Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
              What We Built
            </h2>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {caseStudy.features.map((feature, i) => {
              const featureImages =
                feature.images && feature.images.length > 0
                  ? feature.images
                  : feature.image
                    ? [feature.image]
                    : [];
              const isReverse = i % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center`}
                >
                  {/* Text */}
                  <div
                    className={`lg:col-span-5 ${
                      isReverse ? "lg:order-2 lg:col-start-8" : "lg:col-start-1"
                    }`}
                  >
                    <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-neutral-500">
                      Feature {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-ravenci-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image gallery for this feature */}
                  {featureImages.length > 0 && (
                    <div
                      className={`lg:col-span-7 ${
                        isReverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"
                      }`}
                    >
                      <div
                        className={`grid ${
                          featureImages.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        } gap-3 md:gap-4`}
                      >
                        {featureImages.map((img, j) => {
                          const useScroll =
                            feature.imageScroll === true &&
                            !feature.images && // only when single image
                            !isVideoFile(img);
                          return (
                            <div
                              key={`${img}-${j}`}
                              className={`relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 group ${
                                featureImages.length > 2 && j === 0
                                  ? "col-span-2"
                                  : ""
                              }`}
                            >
                              {useScroll ? (
                                <ScrollingScreenshot
                                  src={img}
                                  alt={`${feature.title} screenshot ${j + 1}`}
                                  className="absolute inset-0 w-full h-full overflow-hidden group"
                                />
                              ) : (
                                <MediaItem
                                  src={img}
                                  alt={`${feature.title} screenshot ${j + 1}`}
                                  sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* The Results — metrics first, narrative second */}
      {(hasMetrics || caseStudy.results.paragraphs.length > 0) && (
        <section className="content-section py-20 md:py-28 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
          <div className="max-w-3xl">
            <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-white/80">
              04 — The Results
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              {caseStudy.results.heading}
            </h2>
          </div>

          {hasMetrics && (
            <div
              className={`mt-12 grid gap-px bg-white/15 border border-white/15 ${
                caseStudy.results.metrics!.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : caseStudy.results.metrics!.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {caseStudy.results.metrics!.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-ravenci-primary p-8 flex flex-col items-start"
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-sm text-white/80 tracking-wide uppercase">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {caseStudy.results.paragraphs.length > 0 && (
            <div className="mt-12 max-w-3xl flex flex-col gap-4 text-white/90 leading-relaxed">
              {caseStudy.results.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {caseStudy.results.images && caseStudy.results.images.length > 0 && (
            <SectionGallery
              images={caseStudy.results.images}
              alt={`${caseStudy.clientName} — results`}
            />
          )}
        </section>
      )}

      {/* Project Gallery */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-white">
          <div className="max-w-3xl mb-12">
            <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
              05 — Project Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
              The Finished Product
            </h2>
          </div>
          <div
            className={`grid gap-4 md:gap-6 ${
              caseStudy.galleryImages.length === 1
                ? "grid-cols-1"
                : caseStudy.galleryImages.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {caseStudy.galleryImages.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
              >
                <MediaItem
                  src={img}
                  alt={`${caseStudy.clientName} gallery image ${i + 1}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <TestimonialCarousel
          testimonial={{
            content: caseStudy.testimonial.content,
            author: caseStudy.testimonial.author,
            image: null,
          }}
          extraClassNames="content-section bg-ravenci-dark"
        />
      )}

      {/* Project info block — replaces the sidebar from the old template */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-100">
        <div className="max-w-5xl">
          <h3 className="mb-8 font-serif text-2xl font-bold text-ravenci-dark">
            Project Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.techStack && caseStudy.techStack.length > 0 && (
              <div>
                <h4 className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-white text-neutral-700 rounded border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.collaborators && caseStudy.collaborators.length > 0 && (
              <div>
                <h4 className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                  Team
                </h4>
                <div className="flex flex-col gap-2">
                  {caseStudy.collaborators.map((collab) => (
                    <div key={collab.name} className="text-sm text-neutral-700">
                      <span className="block text-xs text-neutral-500">
                        {collab.role}
                      </span>
                      {collab.url ? (
                        <a
                          href={collab.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ravenci-primary hover:underline"
                        >
                          {collab.name}
                        </a>
                      ) : (
                        <span>{collab.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.serviceLabels && caseStudy.serviceLabels.length > 0 && (
              <div>
                <h4 className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                  Services Provided
                </h4>
                <div className="flex flex-col gap-1 text-sm text-neutral-700">
                  {caseStudy.serviceLabels.map((s) => (
                    <span key={s}>· {s}</span>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.clientUrl && (
              <div>
                <h4 className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                  Live Site
                </h4>
                <a
                  href={caseStudy.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ravenci-primary hover:underline text-sm"
                >
                  Visit website
                  <IconExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
          <div className="flex items-end justify-between mb-12 max-w-5xl">
            <div>
              <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
                More Work
              </span>
              <h2 className="text-3xl font-medium text-ravenci-dark">
                Other recent projects
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-sm text-ravenci-dark hover:text-ravenci-primary transition-colors"
            >
              View all <IconArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStudies.map((related) => (
              <Link
                key={related.slug}
                href={`/case-studies/${related.slug}`}
                className="group block overflow-hidden rounded-lg border border-neutral-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={related.featuredImage}
                    alt={related.clientName}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-ravenci-primary">
                    {related.industryLabel}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-ravenci-dark group-hover:text-ravenci-primary transition-colors">
                    {related.clientName}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="content-section py-24 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium">
            Ready for results like these?
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Tell us about your project in 2 minutes. We&apos;ll come back with
            a tailored proposal — same approach, same standards, your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/launch-your-vision"
              className="px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 grid place-content-center rounded-full text-white border-2 border-white/30 hover:bg-white hover:text-ravenci-dark transition-colors duration-300"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
