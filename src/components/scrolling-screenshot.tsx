"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

interface ScrollingScreenshotProps {
  src: string;
  alt: string;
  /** Total animation cycle in seconds. Default 60 (slow enough to read comfortably). */
  duration?: number;
  /** Optional className for the outer container — used to control aspect ratio. */
  className?: string;
}

export default function ScrollingScreenshot({
  src,
  alt,
  duration = 60,
  className = "relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 group",
}: ScrollingScreenshotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { props: imageProps } = getImageProps({
    src,
    alt,
    width: 1920,
    height: 10800,
    quality: 75,
    sizes: "100vw",
  });

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageRef}
          src={imageProps.src}
          srcSet={imageProps.srcSet as string}
          sizes="100vw"
          alt={alt}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
}
