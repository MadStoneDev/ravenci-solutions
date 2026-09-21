import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({
  caseStudy,
  priority = false,
}: {
  caseStudy: CaseStudy;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={caseStudy.cardImage ?? caseStudy.featuredImage}
          alt={`${caseStudy.clientName} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 font-mono text-label uppercase text-accent">
          {caseStudy.industryLabel}
        </span>
        <h3 className="text-heading-s text-foreground">{caseStudy.clientName}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-small text-muted-foreground">
          {caseStudy.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.serviceLabels.slice(0, 3).map((service) => (
            <span
              key={service}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-label-sm uppercase text-muted-foreground"
            >
              {service}
            </span>
          ))}
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-small font-medium text-accent">
          View case study
          <IconArrowRight
            size={16}
            aria-hidden
            className="transition-transform duration-fast group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
