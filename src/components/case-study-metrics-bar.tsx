import type { CaseStudyMetric } from "@/data/case-studies";

export default function CaseStudyMetricsBar({
  metrics,
}: {
  metrics: CaseStudyMetric[];
}) {
  return (
    <section
      className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary`}
    >
      <div
        className={`mx-auto grid grid-cols-2 md:grid-cols-${metrics.length} gap-8 md:gap-4 max-w-5xl text-center text-white`}
      >
        {metrics.map((metric) => (
          <article key={metric.label} className={`flex flex-col items-center`}>
            <span className={`text-4xl md:text-5xl font-bold`}>
              {metric.value}
            </span>
            <span className={`mt-2 text-sm font-light text-white/80`}>
              {metric.label}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
