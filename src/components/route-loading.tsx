/**
 * RouteLoading — App Router suspense fallback. A hairline indeterminate bar
 * under the fixed header plus sr-only status text (BRIEF §4.1). No spinner,
 * no layout shift. Rendered from the various loading.tsx files.
 */
export default function RouteLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed left-0 right-0 top-16 z-[55] md:top-[76px]"
    >
      <div className="h-0.5 w-full overflow-hidden bg-transparent">
        <div className="rv-progress-bar h-full w-1/4 bg-accent" />
      </div>
      <span className="sr-only">Loading page</span>
    </div>
  );
}
