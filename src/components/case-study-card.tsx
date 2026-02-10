import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/data/case-studies";
import { IconArrowRight } from "@tabler/icons-react";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className={`group flex flex-col overflow-hidden`}
    >
      {/* Image */}
      <div
        className={`relative w-full aspect-[16/10] overflow-hidden bg-neutral-100`}
      >
        <Image
          src={caseStudy.featuredImage}
          alt={`${caseStudy.clientName} project showcase`}
          fill
          className={`object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out`}
        />
      </div>

      {/* Content */}
      <div className={`pt-5 flex flex-col flex-1`}>
        <span
          className={`mb-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary`}
        >
          {caseStudy.industryLabel}
        </span>
        <h3 className={`text-xl font-semibold text-ravenci-dark`}>
          {caseStudy.clientName}
        </h3>
        <p className={`mt-2 text-sm text-neutral-500 line-clamp-3 flex-1`}>
          {caseStudy.excerpt}
        </p>

        {/* Service pills */}
        <div className={`mt-4 flex flex-wrap gap-2`}>
          {caseStudy.serviceLabels.slice(0, 3).map((service) => (
            <span
              key={service}
              className={`px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* View link */}
        <div className={`mt-4`}>
          <span
            className={`group/link relative inline-flex items-center gap-1 px-2 text-sm font-medium text-ravenci-primary`}
          >
            <span
              className={`z-10 group-hover:text-white transition-colors duration-300`}
            >
              View Case Study
            </span>
            <IconArrowRight
              className={`z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-300`}
            />{" "}
            <div
              className={`absolute top-0 left-full group-hover:left-0 right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
            ></div>
          </span>
        </div>
      </div>
    </Link>
  );
}
