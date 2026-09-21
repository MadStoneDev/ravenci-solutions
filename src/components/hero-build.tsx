"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";

/**
 * HeroBuild (Tier B, JS-light) — a blueprint of a web page that keeps drafting
 * itself. Pure DOM/CSS: the blocks pulse in and out on a slow staggered loop
 * (.rv-buildloop, opacity only) and drift with cursor parallax (transform, so
 * the two never fight). aria-hidden; the hero text carries the meaning and the
 * LCP. Reduced motion renders it static and full-opacity.
 */
export default function HeroBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setP({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  }, []);

  const shift = (mult: number): CSSProperties => ({
    transform: `translate(${p.x * mult}px, ${p.y * mult}px)`,
    transition: "transform 220ms cubic-bezier(0.2,0,0,1)",
  });
  const step = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={() => setP({ x: 0, y: 0 })} className="flex-1" aria-hidden>
      <div className="relative rounded-sm border border-border bg-card p-6 shadow-2" style={shift(5)}>
        {/* top width dimension line */}
        <div className="rv-buildloop mb-5 flex items-center gap-2" style={step(0)}>
          <span className="h-2 w-px bg-border" />
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-label-sm uppercase text-muted-foreground">1440 px</span>
          <span className="h-px flex-1 bg-border" />
          <span className="h-2 w-px bg-border" />
        </div>

        {/* header: logo + nav */}
        <div className="rv-buildloop mb-5 flex items-center justify-between" style={step(1)}>
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
        <div className="rv-buildloop mb-2 h-3.5 w-4/5 rounded-sm bg-foreground/70" style={step(2)} />
        <div className="rv-buildloop mb-4 h-2 w-3/5 rounded-sm bg-muted" style={step(3)} />
        <div className="rv-buildloop mb-5 flex gap-2" style={step(3)}>
          <span className="h-6 w-24 rounded-sm bg-foreground" />
          <span className="h-6 w-24 rounded-sm border border-foreground/25" />
        </div>

        {/* media frame */}
        <div className="rv-buildloop mb-5 aspect-[16/7] rounded-sm border border-dashed border-accent/60 bg-muted" style={step(4)} />

        {/* feature cards */}
        <div className="rv-buildloop mb-5 grid grid-cols-3 gap-3" style={step(5)}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-sm border border-border p-3">
              <div className={`mb-2 h-1.5 w-8 rounded-sm ${i === 0 ? "bg-accent" : "bg-muted"}`} />
              <div className="mb-1.5 h-1.5 w-full rounded-sm bg-muted" />
              <div className="h-1.5 w-2/3 rounded-sm bg-muted" />
            </div>
          ))}
        </div>

        {/* content lines */}
        <div className="rv-buildloop mb-1.5 h-1.5 w-full rounded-sm bg-muted" style={step(6)} />
        <div className="rv-buildloop mb-5 h-1.5 w-5/6 rounded-sm bg-muted" style={step(6)} />

        {/* bottom annotations */}
        <div className="rv-buildloop flex justify-between border-t border-border pt-3 font-mono text-label-sm uppercase text-muted-foreground" style={step(7)}>
          <span>LCP 0.9s</span>
          <span>85+ PageSpeed</span>
          <span>Hero / SVG</span>
        </div>
      </div>
    </div>
  );
}
