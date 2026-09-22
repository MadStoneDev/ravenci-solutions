"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * HeroBuild (Tier B, JS-light, no animation library) — a blueprint of a web
 * page that keeps drafting itself:
 *   1. blocks slide up from below into place (staggered)
 *   2. the PageSpeed and LCP figures count up together (0 -> 85+, 0 -> 0.9s)
 *      and snap to the accent purple in unison
 *   3. hold ~5s, fade out, then repeat from the bottom
 * Cursor parallax lives on the card wrapper so it never fights the slide.
 * aria-hidden (the hero text carries the meaning and the LCP). Reduced motion
 * renders the finished state, static.
 */

const PS_TARGET = 85;
const LCP_TARGET = 0.9;
const SLIDE_MS = 700;
const STAGGER = 0.12; // seconds per block
const BLOCKS = 8;
const COUNT_MS = 1600;
const HOLD_MS = 5000;
const FADE_MS = 500;
const EASE = "cubic-bezier(0.2,0,0,1)";

type Phase = "reset" | "in" | "out";

export default function HeroBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  const [phase, setPhase] = useState<Phase>("reset");
  const [ps, setPs] = useState(0);
  const [lcp, setLcp] = useState(0);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const h = () => setReduced(m.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase("in");
      setPs(PS_TARGET);
      setLcp(LCP_TARGET);
      setDone(true);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let raf = 0;
    const wait = (ms: number, cb: () => void) => timers.push(setTimeout(cb, ms));

    const count = (onDone: () => void) => {
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / COUNT_MS);
        const e = t * (2 - t); // easeOutQuad
        setPs(PS_TARGET * e);
        setLcp(LCP_TARGET * e);
        if (t < 1) raf = requestAnimationFrame(tick);
        else {
          setPs(PS_TARGET);
          setLcp(LCP_TARGET);
          onDone();
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const run = () => {
      if (cancelled) return;
      setDone(false);
      setPs(0);
      setLcp(0);
      setPhase("reset"); // snap below, no transition
      // two frames so the browser paints the reset before transitioning in
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (cancelled) return;
          setPhase("in");
          const slideTotal = SLIDE_MS + BLOCKS * STAGGER * 1000;
          wait(slideTotal, () =>
            count(() => {
              setDone(true);
              wait(HOLD_MS, () => {
                setPhase("out");
                wait(FADE_MS, run);
              });
            }),
          );
        }),
      );
    };
    run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setP({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  }, []);

  const cardStyle: CSSProperties = {
    transform: `translate(${p.x * 5}px, ${p.y * 5}px)`,
    transition: `transform 220ms ${EASE}`,
  };

  // Per-block reveal style. reset = below+hidden (no transition); in = in place
  // (staggered); out = fade in place.
  const block = (i: number): CSSProperties => {
    if (phase === "reset") return { opacity: 0, transform: "translateY(16px)", transition: "none" };
    if (phase === "out") return { opacity: 0, transform: "translateY(0)", transition: `opacity ${FADE_MS}ms ${EASE}` };
    return {
      opacity: 1,
      transform: "translateY(0)",
      transition: `opacity ${SLIDE_MS}ms ${EASE}, transform ${SLIDE_MS}ms ${EASE}`,
      transitionDelay: `${i * STAGGER}s`,
    };
  };

  const metricTone = done ? "text-accent" : "text-muted-foreground";

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={() => setP({ x: 0, y: 0 })} className="flex-1" aria-hidden>
      <div className="relative rounded-sm border border-border bg-card p-6 shadow-2" style={cardStyle}>
        {/* top width dimension line */}
        <div className="mb-5 flex items-center gap-2" style={block(0)}>
          <span className="h-2 w-px bg-border" />
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-label-sm uppercase text-muted-foreground">1440 px</span>
          <span className="h-px flex-1 bg-border" />
          <span className="h-2 w-px bg-border" />
        </div>

        {/* header: logo + nav */}
        <div className="mb-5 flex items-center justify-between" style={block(1)}>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="h-2 w-16 rounded-sm bg-foreground/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-sm bg-muted" />
            <span className="h-1.5 w-8 rounded-sm bg-muted" />
            <span className="h-5 w-14 rounded-sm bg-accent/80" />
          </div>
        </div>

        {/* hero heading + sub + CTAs */}
        <div className="mb-2 h-3.5 w-4/5 rounded-sm bg-foreground/70" style={block(2)} />
        <div className="mb-4 h-2 w-3/5 rounded-sm bg-muted" style={block(3)} />
        <div className="mb-5 flex gap-2" style={block(3)}>
          <span className="h-6 w-24 rounded-sm bg-foreground" />
          <span className="h-6 w-24 rounded-sm border border-foreground/25" />
        </div>

        {/* media frame */}
        <div className="mb-5 aspect-[16/7] rounded-sm border border-dashed border-accent/60 bg-muted" style={block(4)} />

        {/* feature cards */}
        <div className="mb-5 grid grid-cols-3 gap-3" style={block(5)}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-sm border border-border p-3">
              <div className={`mb-2 h-1.5 w-8 rounded-sm ${i === 0 ? "bg-accent" : "bg-muted"}`} />
              <div className="mb-1.5 h-1.5 w-full rounded-sm bg-muted" />
              <div className="h-1.5 w-2/3 rounded-sm bg-muted" />
            </div>
          ))}
        </div>

        {/* content lines */}
        <div className="mb-1.5 h-1.5 w-full rounded-sm bg-muted" style={block(6)} />
        <div className="mb-5 h-1.5 w-5/6 rounded-sm bg-muted" style={block(6)} />

        {/* counting metrics */}
        <div className="flex justify-between border-t border-border pt-3 font-mono text-label-sm uppercase" style={block(7)}>
          <span className={`tnum transition-colors duration-base ${metricTone}`}>
            LCP {lcp.toFixed(1)}s
          </span>
          <span className={`tnum transition-colors duration-base ${metricTone}`}>
            {Math.round(ps)}
            {done ? "+" : ""} PageSpeed
          </span>
          <span className="text-muted-foreground">Hero / SVG</span>
        </div>
      </div>
    </div>
  );
}
