// Live PageSpeed score for the homepage proof gauge (README §4).
// Fetched server-side with the project's PAGESPEED_API_KEY, cached ~24h.
// Never fetched client-side. If the key is missing, the API fails, or the
// score is below the 85+ guarantee, we return null and the page renders the
// guarantee copy without a number rather than one that contradicts it.

const PSI_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const TARGET = "https://ravenci.solutions/";

export async function getHomepagePageSpeed(): Promise<number | null> {
  const key = process.env.PAGESPEED_API_KEY;
  if (!key) return null;

  const url = `${PSI_URL}?url=${encodeURIComponent(TARGET)}&strategy=mobile&category=PERFORMANCE&key=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data?.lighthouseResult?.categories?.performance?.score;
    if (typeof raw !== "number") return null;
    const score = Math.round(raw * 100);
    // Only surface a number that upholds the 85+ guarantee.
    return score >= 85 ? score : null;
  } catch {
    return null;
  }
}
