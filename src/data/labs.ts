// Labs: products Richard has built, as proof of range (README §2).
// Seeded with real product names; every other field is a [PLACEHOLDER] for
// Richard to fill. Do NOT invent descriptions. Status defaults to "wip" until
// he confirms the real one per product.

export type LabStatus = "live" | "beta" | "wip";

export interface LabProject {
  name: string;
  /** External URL, or "" until confirmed. */
  url: string;
  oneLiner: string;
  stack: string[];
  /** One short paragraph on the interesting technical part. */
  problemSolved: string;
  status: LabStatus;
  screenshot?: string;
}

const P = "[PLACEHOLDER]";

export const LAB_PROJECTS: LabProject[] = [
  { name: "JustNoted", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "TheJury", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "QRmory", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "RankRiot", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "Download Ledger", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "RAVENCI Builder", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "JustSent", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "JustTerms", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
  { name: "Just Cases", url: "", oneLiner: P, stack: [P], problemSolved: P, status: "wip" },
];
