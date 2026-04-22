import { notFound } from "next/navigation";

import {
  getAllSlugs,
  getCaseStudyBySlug,
} from "@/data/case-studies";
import CaseStudyResultsDriven from "@/components/case-study-results-driven";
import CaseStudyVisualShowcase from "@/components/case-study-visual-showcase";
import CaseStudyPremium from "@/components/case-study-premium";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | RAVENCI Solutions",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: [
        {
          url: `https://ravenci.solutions${caseStudy.featuredImage}`,
          alt: `${caseStudy.clientName} project showcase`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: [`https://ravenci.solutions${caseStudy.featuredImage}`],
    },
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.heroHeadline,
    description: caseStudy.metaDescription,
    url: `https://ravenci.solutions/case-studies/${caseStudy.slug}`,
    image: `https://ravenci.solutions${caseStudy.featuredImage}`,
    author: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      url: "https://ravenci.solutions",
    },
    about: {
      "@type": "Organization",
      name: caseStudy.clientName,
      ...(caseStudy.clientUrl ? { url: caseStudy.clientUrl } : {}),
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ravenci.solutions",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://ravenci.solutions/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.clientName,
        item: `https://ravenci.solutions/case-studies/${caseStudy.slug}`,
      },
    ],
  };

  return (
    <main className={`flex flex-col`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {caseStudy.template === "premium" ? (
        <CaseStudyPremium caseStudy={caseStudy} />
      ) : caseStudy.template === "visual-showcase" ? (
        <CaseStudyVisualShowcase caseStudy={caseStudy} />
      ) : (
        <CaseStudyResultsDriven caseStudy={caseStudy} />
      )}
    </main>
  );
}
