/**
 * Validate an MDX body by compiling it. Lazy-imports @mdx-js/mdx so the compiler
 * only loads inside the editor. Syntax errors (unclosed JSX, bad expressions) are
 * returned as a message; undefined components are fine at compile time.
 */
export async function validateMdx(
  source: string,
): Promise<{ ok: boolean; message?: string }> {
  try {
    const { compile } = await import("@mdx-js/mdx");
    await compile(source, { outputFormat: "function-body" });
    return { ok: true };
  } catch (e) {
    const err = e as Error & { line?: number; column?: number };
    const where =
      err.line != null ? ` (line ${err.line}${err.column != null ? `:${err.column}` : ""})` : "";
    return { ok: false, message: `${err.message}${where}` };
  }
}
