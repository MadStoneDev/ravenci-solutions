"use client";

import { useEffect, useRef, useState } from "react";

import SectionLabel from "@/components/section-label";

const STEPS = [
  { n: "01", name: "Design", copy: "Wireframes and a full visual design you sign off before a line of code is written.", tag: "Signed-off design" },
  { n: "02", name: "Build", copy: "Hand-built on the right platform. Your code, your content, your domain. No lock-in.", tag: "Repo + CMS" },
  { n: "03", name: "Host", copy: "Managed Australian-supported hosting from $39/mo. SSL, daily backups, monitoring, 99.9% uptime.", tag: "Live, monitored" },
  { n: "04", name: "Secure", copy: "Patching, firewall, domain and DNS management, and a restore that has actually been tested.", tag: "Patch log" },
  { n: "05", name: "Optimise", copy: "SEO, AEO and GEO: found by Google, and quoted correctly by the AI assistants your buyers now ask.", tag: "Monthly report" },
  { n: "06", name: "Maintain", copy: "Updates, content changes and new features on retainer from $249/mo. You email me, not a ticket system.", tag: "Care plan" },
];

const PAD = "px-5 py-16 md:px-12 md:py-24 lg:px-20";

function Intro() {
  return (
    <div className="flex flex-col gap-4">
      <SectionLabel index="02" label="The whole stack" tone="muted" />
      <h2 className="text-display-m text-foreground">One person, the whole stack.</h2>
      <p className="text-body text-muted-foreground">
        Most agencies hand you off: a designer, then a developer, then a support
        queue, then a hosting company who has never seen your site. I do all six
        steps, so nothing falls between them.
      </p>
    </div>
  );
}

function Row({ step, active }: { step: (typeof STEPS)[number]; active: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2 border-t border-white/10 py-5 transition-opacity duration-base md:flex-row md:items-baseline md:gap-6 ${
        active ? "bg-accent/30 px-4 opacity-100" : "opacity-55"
      }`}
    >
      <span className="font-mono text-label text-muted-foreground md:w-10">{step.n}</span>
      <span className="text-heading-s text-foreground md:w-36 md:shrink-0">{step.name}</span>
      <span className="flex-1 text-small text-muted-foreground">{step.copy}</span>
      <span className="font-mono text-label-sm uppercase text-foreground/80 md:w-44 md:text-right">{step.tag}</span>
    </div>
  );
}

function Closing() {
  return (
    <p className="mt-8 text-heading-s text-foreground">
      Built once. Built properly. Still working in five years.
    </p>
  );
}

function Stacked({ highlight = "03" }: { highlight?: string }) {
  return (
    <div className={PAD}>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="lg:w-[420px] lg:shrink-0">
          <Intro />
        </div>
        <div className="flex-1">
          {STEPS.map((s) => (
            <Row key={s.n} step={s} active={s.n === highlight} />
          ))}
          <Closing />
        </div>
      </div>
    </div>
  );
}

export default function StackStory() {
  // SSR + first client render = stacked (content always present, no hydration
  // mismatch). After mount, enhance to the pinned scroll story only on desktop
  // and only when reduced motion is off (BRIEF §5.2). No animation library.
  const [enhance, setEnhance] = useState(false);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setEnhance(wide.matches && !reduce.matches);
    decide();
    wide.addEventListener("change", decide);
    reduce.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      reduce.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (!enhance) return;
    const el = outerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setProgress(p);
        setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enhance]);

  if (!enhance) {
    return (
      <section id="process" className="dark bg-background text-foreground">
        <Stacked />
      </section>
    );
  }

  return (
    <section id="process" className="dark bg-background text-foreground">
      <div ref={outerRef} className="h-[360vh]">
        <div className="sticky top-0 flex h-screen items-center px-12 lg:px-20">
          <div className="flex w-full gap-16">
            <div className="flex w-[420px] shrink-0 flex-col gap-8">
              <Intro />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-label uppercase text-muted-foreground">Progress</span>
                <div className="h-0.5 w-full overflow-hidden bg-white/15">
                  <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
                </div>
                <span className="font-mono text-label text-foreground">
                  {STEPS[active].n}/{STEPS[STEPS.length - 1].n}
                </span>
              </div>
            </div>
            <div className="flex-1">
              {STEPS.map((s, i) => (
                <Row key={s.n} step={s} active={i === active} />
              ))}
              <Closing />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
