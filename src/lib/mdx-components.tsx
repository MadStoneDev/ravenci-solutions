import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-12 text-heading-m text-foreground">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-heading-m text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-heading-s text-foreground">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-6 text-lead font-semibold text-foreground">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="mb-2 mt-5 text-body font-semibold text-foreground">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="mb-2 mt-4 text-small font-semibold text-foreground">{children}</h6>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-body leading-relaxed text-subtle">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="font-medium text-accent hover:underline"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-1.5 pl-6 text-body leading-relaxed text-subtle">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-1.5 pl-6 text-body leading-relaxed text-subtle">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 text-lead italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-small text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-sm border border-border bg-muted p-4 font-mono text-small">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <span className="my-6 block">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={956}
        height={623}
        className="h-auto w-full rounded-sm border border-border"
        sizes="(max-width: 768px) 100vw, 680px"
      />
    </span>
  ),
  hr: () => <hr className="my-8 border-border" />,
};
