"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollingScreenshotProps {
  src: string;
  alt: string;
  /** Total animation cycle in seconds. Default 60 (slow enough to read comfortably). */
  duration?: number;
  /** Optional className for the outer container — used to control aspect ratio. */
  className?: string;
}

/**
 * Renders a full-length screenshot (much taller than its container) inside a
 * fixed-aspect frame, animating from top to bottom and back continuously.
 * Pauses on hover, respects prefers-reduced-motion, and degrades to a static
 * top-of-page image if the script can't measure the image.
 */
export default function ScrollingScreenshot({
  src,
  alt,
  duration = 60,
  className = "relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 group",
}: ScrollingScreenshotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !imageRef.current) return;
      const containerHeight = containerRef.current.offsetHeight;
      const imageHeight = imageRef.current.offsetHeight;
      setScrollDistance(Math.max(0, imageHeight - containerHeight));
    };

    const img = imageRef.current;
    if (img?.complete) {
      measure();
    } else {
      img?.addEventListener("load", measure);
    }
    window.addEventListener("resize", measure);

    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [src]);

  const animationStyle: React.CSSProperties =
    scrollDistance > 0
      ? {
          animation: `scroll-screenshot ${duration}s ease-in-out infinite`,
          ["--scroll-distance" as string]: `${-scrollDistance}px`,
        }
      : {};

  return (
    <div ref={containerRef} className={className}>
      <div
        className="scrolling-screenshot-track absolute top-0 left-0 right-0 will-change-transform group-hover:[animation-play-state:paused]"
        style={animationStyle}
      >
        {/* Native <img> rather than next/image so the natural height is
            preserved (next/image with width/height auto-calc requires both
            dimensions known up front). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imageRef} src={src} alt={alt} className="block w-full h-auto" />
      </div>
    </div>
  );
}
