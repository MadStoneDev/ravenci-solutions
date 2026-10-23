const TZ = "Australia/Brisbane";

/** e.g. "23 Oct 2026" in Brisbane time. */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: TZ,
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

/** e.g. "9:00 am" in Brisbane time. */
export function formatTime(iso?: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(new Date(iso))
    .replace(/\s?(AM|PM)/i, (m) => m.trim().toLowerCase());
}

/** e.g. "Tue 28 Oct, 9:00 am". */
export function formatDateTime(iso?: string): string {
  if (!iso) return "";
  const d = new Intl.DateTimeFormat("en-AU", {
    timeZone: TZ,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(iso));
  return `${d}, ${formatTime(iso)}`;
}

/** Rough "edited 2 hours ago" style. */
export function relativeTime(iso?: string): string {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min${mins === 1 ? "" : "s"} ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  return formatDate(iso);
}
