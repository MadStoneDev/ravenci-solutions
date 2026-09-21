// src/lib/motion.ts
// Shared motion tokens for the three Tier B components.
// Nothing else in the codebase imports Framer Motion.

export const EASE = {
  standard: [0.2, 0, 0, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
  spring: [0.34, 1.2, 0.64, 1] as const,
};

export const DUR = {
  fast: 0.12,
  base: 0.22,
  slow: 0.42,
  story: 0.9,
  stagger: 0.06,
} as const;

export const SPRING = {
  // Hero cursor parallax
  parallax: { type: "spring", damping: 30, stiffness: 120, mass: 0.6 },
  // Platform selector layoutId pill
  pill: { type: "spring", damping: 26, stiffness: 320 },
} as const;

/**
 * Every Tier B component wraps its animation in this check and renders the
 * final state when it returns true. Framer's own useReducedMotion() hook.
 *
 *   const reduced = useReducedMotion();
 *   if (reduced) return <HeroStatic />;
 */

/** Tier A reveal props, for the rare case a section needs it in JS. */
export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: DUR.slow, ease: EASE.standard },
};
