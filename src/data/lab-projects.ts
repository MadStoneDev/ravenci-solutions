// ─── Types ────────────────────────────────────────────────────────────────────

export type LabStatus = "live" | "beta" | "in-progress" | "concept";

export interface LabFeature {
  title: string;
  description: string;
}

export interface LabProject {
  slug: string;
  name: string;
  tagline: string; // one-liner
  description: string; // 2-3 sentence intro
  status: LabStatus;
  category: string; // e.g. "Web App", "Tool", "Game"
  url?: string; // live URL (optional — in-progress projects may not have one)
  githubUrl?: string;
  featuredImage: string; // path in /public/showcase-images/
  techStack: string[];
  features: LabFeature[];
  year: number;
  order: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const LAB_PROJECTS: LabProject[] = [
  // ── 1. JustReel ─────────────────────────────────────────────────────────────
  // TODO: Richard to confirm tech stack, live URL, status, and any extra features
  {
    slug: "justreel",
    name: "JustReel",
    tagline: "Track movies and shows. Build collections. Share with friends.",
    description:
      "A movie and TV show database for tracking what you've watched, building shareable collections, and actually discussing shows with the people you watch them with. Built because the existing options either treat tracking as a chore or treat sharing as an afterthought.",
    status: "in-progress", // TODO: Richard to update to "live" / "beta" once deployed
    category: "Web App",
    // url: "https://justreel.app", // TODO: Richard to add live URL
    featuredImage: "/showcase-images/JustReel.png",
    techStack: [
      // TODO: Richard to confirm actual stack
      "Next.js",
      "TypeScript",
      "TBC",
    ],
    features: [
      {
        title: "Episode-level tracking",
        description:
          "Mark individual episodes as watched, not just whole seasons. The detail people who actually finish shows want.",
      },
      {
        title: "Custom collections",
        description:
          "Build collections by theme, mood, or whatever you like. Share them with anyone — and give people permission to add to them with you.",
      },
      {
        title: "Friend invites & collaboration",
        description:
          "Invite friends, share collections, give edit access to people you watch with. Collections become shared spaces, not silos.",
      },
      {
        title: "Discussion threads",
        description:
          "Message friends and discuss specific shows or movies in-context. The conversation lives where the show lives.",
      },
    ],
    year: 2026,
    order: 1,
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getLabProjectBySlug(slug: string): LabProject | undefined {
  return LAB_PROJECTS.find((p) => p.slug === slug);
}

export function getAllLabProjects(): LabProject[] {
  return [...LAB_PROJECTS].sort((a, b) => a.order - b.order);
}
