import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-bold mt-5 mb-2">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-bold mt-4 mb-2">{children}</h6>
  ),
  p: ({ children }) => (
    <p className="font-light mb-6 leading-relaxed" style={{ lineHeight: "1.7em" }}>
      {children}
    </p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-ravenci-primary hover:underline font-medium"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-1 font-light" style={{ lineHeight: "1.7em" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-1 font-light" style={{ lineHeight: "1.7em" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-ravenci-primary pl-4 my-6 italic text-neutral-600">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-neutral-100 text-sm px-1.5 py-0.5 rounded font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-neutral-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <span className="block relative my-6 w-full">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={956}
        height={623}
        className="w-full h-auto rounded"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </span>
  ),
  hr: () => <hr className="my-8 border-neutral-200" />,
};
