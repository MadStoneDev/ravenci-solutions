import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import { getAllLabProjects, type LabStatus } from "@/data/lab-projects";

export const metadata: Metadata = {
  title:
    "RAVENCI Labs — Side Projects, Tools and Experiments | RAVENCI Solutions",
  description:
    "Things RAVENCI builds for ourselves — web apps, tools and experiments that show what we love building when nobody's asking us to.",
  openGraph: {
    title: "RAVENCI Labs — Side Projects, Tools and Experiments",
    description:
      "Web apps, tools and experiments built by RAVENCI for ourselves — what we love building when nobody's asking.",
    type: "website",
  },
  alternates: { canonical: "/labs" },
};

const STATUS_LABEL: Record<LabStatus, string> = {
  live: "Live",
  beta: "Beta",
  "in-progress": "In Progress",
  concept: "Concept",
};

const STATUS_CLASSES: Record<LabStatus, string> = {
  live: "bg-green-100 text-green-700 border-green-200",
  beta: "bg-blue-100 text-blue-700 border-blue-200",
  "in-progress": "bg-yellow-100 text-yellow-700 border-yellow-200",
  concept: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function LabsPage() {
  const projects = getAllLabProjects();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-20 md:pb-24 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs items={[{ label: "Labs" }]} />
          <span className="mt-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary">
            RAVENCI Labs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            Things we built for ourselves.
          </h1>
          <h2 className="mt-2 max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light text-neutral-500">
            Web apps, tools and experiments — what we love building when nobody
            commissioned it.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80 leading-relaxed">
            Client work pays the bills. Side projects keep the craft sharp.
            Some of these become real products, some stay personal tools, some
            quietly fade away. They&apos;re here because they&apos;re proof of
            what we like building when we&apos;re the only stakeholder.
          </p>
        </article>
      </section>

      {/* Projects grid */}
      <section className="content-section py-16 md:py-20 px-5 sm:px-20 xl:px-36 bg-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-200">
                <Image
                  src={project.featuredImage}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full border ${
                    STATUS_CLASSES[project.status]
                  }`}
                >
                  {STATUS_LABEL[project.status]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-ravenci-primary">
                    {project.category}
                  </span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-xs text-neutral-500">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-ravenci-dark">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 italic">
                  {project.tagline}
                </p>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                    What it does
                  </p>
                  <ul className="space-y-3">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-sm">
                        <p className="font-medium text-ravenci-dark">
                          {f.title}
                        </p>
                        <p className="text-neutral-600 mt-0.5 leading-relaxed">
                          {f.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="mb-3 text-xs font-bold tracking-wider uppercase text-neutral-500">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-neutral-100 text-neutral-700 rounded border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 transition-colors text-sm"
                    >
                      Visit {project.name}
                      <IconExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-200 text-neutral-500 rounded-full text-sm cursor-not-allowed">
                      {project.status === "in-progress"
                        ? "Coming Soon"
                        : "No public URL yet"}
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 text-ravenci-dark rounded-full hover:bg-neutral-50 transition-colors text-sm"
                    >
                      View on GitHub
                      <IconExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why we have a labs section */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl">
          <h3 className="font-serif text-h3 font-bold mb-6 text-ravenci-dark">
            Why we have a Labs section
          </h3>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              Most of what we ship is for clients — websites, brand work,
              e-commerce stores, web apps. The work in Labs is what we build
              when there&apos;s no client brief, just an idea worth chasing.
            </p>
            <p>
              These projects keep the craft sharp. They&apos;re where we try
              new tools, push edges, and prove out approaches before suggesting
              them to clients. Some become real products. Some stay personal.
              All of them are built end-to-end the same way as our client work
              — properly engineered, properly designed.
            </p>
            <p>
              If you&apos;re thinking about building something custom — a tool,
              a platform, a web app for your business — these are a useful
              proof point. We&apos;ve built things from scratch, end-to-end,
              including the bits most agencies outsource.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/web-apps"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ravenci-dark text-white rounded-full hover:bg-ravenci-primary transition-colors"
            >
              See Our Web App Services
              <IconArrowRight size={16} />
            </Link>
            <Link
              href="/launch-your-vision"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ravenci-dark text-ravenci-dark rounded-full hover:bg-ravenci-dark hover:text-white transition-colors"
            >
              Talk to Us About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Labs",
                item: "https://ravenci.solutions/labs",
              },
            ],
          }),
        }}
      />

      {/* CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "RAVENCI Labs — Side Projects",
            description:
              "Side projects, tools and experiments built by RAVENCI Solutions.",
            url: "https://ravenci.solutions/labs",
            isPartOf: {
              "@type": "WebSite",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            hasPart: projects.map((p) => ({
              "@type": "SoftwareApplication",
              name: p.name,
              description: p.description,
              applicationCategory: p.category,
              ...(p.url ? { url: p.url } : {}),
            })),
          }),
        }}
      />
    </main>
  );
}
