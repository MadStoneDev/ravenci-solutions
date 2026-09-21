"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";

/**
 * HeroBuild (Tier B, kept JS-light) — the decorative blueprint. It assembles
 * on load via CSS (.rv-assemble, staggered by --i) so nothing above the fold
 * pulls in an animation library, and adds cursor parallax with a tiny pointer
 * handler. aria-hidden; the hero text carries the meaning and the LCP. Reduced
 * motion is handled by the global prefers-reduced-motion rule (instant, no
 * parallax because the pointer handler no-ops without movement).
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
    transition: "transform 200ms cubic-bezier(0.2,0,0,1)",
  });

  const block = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={() => setP({ x: 0, y: 0 })} className="flex-1" aria-hidden>
      <div className="rounded-sm border border-border bg-card p-6 shadow-1" style={shift(2)}>
        <div className="rv-assemble mb-4 flex items-center justify-between" style={block(0)}>
          <div className="h-2.5 w-24 rounded-sm bg-foreground/80" />
          <div className="h-6 w-20 rounded-sm bg-accent" />
        </div>
        <div className="rv-assemble mb-3 h-3 w-3/4 rounded-sm bg-foreground/70" style={block(1)} />
        <div className="rv-assemble mb-5 h-2 w-1/2 rounded-sm bg-muted" style={block(2)} />
        <div className="rv-assemble mb-5 aspect-[16/7] rounded-sm border border-dashed border-accent/60 bg-muted" style={{ ...block(3), ...shift(6) }} />
        <div className="rv-assemble grid grid-cols-3 gap-3" style={{ ...block(4), ...shift(3) }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-sm border border-border p-3">
              <div className={`mb-2 h-1.5 w-8 rounded-sm ${i === 0 ? "bg-accent" : "bg-muted"}`} />
              <div className="h-1.5 w-full rounded-sm bg-muted" />
            </div>
          ))}
        </div>
        <div className="rv-assemble mt-5 flex justify-between font-mono text-label-sm uppercase text-muted-foreground" style={block(5)}>
          <span>1440 px</span>
          <span>LCP 0.9s</span>
          <span>Hero / SVG</span>
        </div>
      </div>
    </div>
  );
}
