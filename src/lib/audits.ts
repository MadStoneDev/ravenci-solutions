import fs from "fs";
import path from "path";
import matter from "gray-matter";

const AUDITS_DIR = path.join(process.cwd(), "src/content/audits");

export interface AuditCategory {
  id: string;
  label: string;
  score: number;
  summary: string;
  findings: string[];
  recommendations: string[];
}

export interface AuditFrontmatter {
  token: string;
  status: "draft" | "published";
  clientName: string;
  clientBusiness: string;
  clientEmail: string;
  clientWebsite: string;
  conductedDate: string;
  overallScore: number;
  headline: string;
  specialMessage?: string;
  categories: AuditCategory[];
  priorityActions: string[];
}

export interface Audit extends AuditFrontmatter {
  content: string;
}

function ensureDir() {
  if (!fs.existsSync(AUDITS_DIR)) {
    fs.mkdirSync(AUDITS_DIR, { recursive: true });
  }
}

function normaliseDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

export function getAuditByToken(token: string): Audit | undefined {
  // Reject anything that isn't a plain slug so the token can't traverse out of
  // AUDITS_DIR (e.g. "../../etc/something") when concatenated into the path.
  if (!/^[A-Za-z0-9_-]+$/.test(token)) return undefined;

  ensureDir();
  const filePath = path.join(AUDITS_DIR, `${token}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as Partial<AuditFrontmatter>;

  // Fail gracefully (caller renders a 404) on malformed frontmatter rather
  // than throwing a 500 deep in render when a required field is missing.
  if (
    !fm.token ||
    !fm.clientName ||
    !fm.clientBusiness ||
    !fm.headline ||
    !Array.isArray(fm.categories) ||
    !Array.isArray(fm.priorityActions)
  ) {
    return undefined;
  }

  return {
    ...(fm as AuditFrontmatter),
    conductedDate: normaliseDate(fm.conductedDate),
    content,
  };
}

export function getAllAuditTokens(): string[] {
  ensureDir();
  return fs
    .readdirSync(AUDITS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
