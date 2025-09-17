import { JSX } from "react";

export function ContentBlock({ block }: { block: any }) {
  // Handle different block types
  if (block.type === "heading") {
    const text = block.children[0]?.text || "";
    const level = block.level || 1;

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    // Fix the TypeScript error by using a type-safe approach
    const getHeadingClasses = (level: number): string => {
      switch (level) {
        case 1:
          return "text-4xl font-bold mt-12 mb-6";
        case 2:
          return "text-2xl font-bold mt-10 mb-4";
        case 3:
          return "text-xl font-bold mt-8 mb-3";
        default:
          return "text-lg font-bold mt-6 mb-2";
      }
    };

    return (
      <HeadingTag className={getHeadingClasses(level)}>
        {text.replace(/^#+\s*/, "")}
      </HeadingTag>
    );
  }

  // Handle paragraph blocks
  if (block.type === "paragraph") {
    return (
      <p
        className="font-light mb-6 leading-relaxed"
        style={{ lineHeight: "1.7em" }}
      >
        {renderChildren(block.children)}
      </p>
    );
  }

  return null;
}

// Helper function to render children (text, links, etc.)
function renderChildren(children: any[]): React.ReactNode {
  return children.map((child, index) => {
    if (child.type === "text") {
      return renderText(child, index);
    }

    if (child.type === "link") {
      return (
        <a
          key={index}
          href={child.url}
          className="text-ravenci-primary hover:underline font-medium"
          target={child.url.startsWith("http") ? "_blank" : "_self"}
          rel={child.url.startsWith("http") ? "noopener noreferrer" : ""}
        >
          {renderChildren(child.children)}
        </a>
      );
    }

    return null;
  });
}

// Helper function to render text with formatting
function renderText(textNode: any, key: number): React.ReactNode {
  let text = textNode.text || "";

  // Handle checkboxes
  if (text.startsWith("[ ]") || text.startsWith("[x]")) {
    const isChecked = text.startsWith("[x]");
    const cleanText = text.replace(/^\[[ x]\]\s*/, "");

    return (
      <span key={key} className="flex items-start gap-2 my-1">
        <span className="text-lg mt-0.5 select-none">
          {isChecked ? "☑" : "☐"}
        </span>
        <span className={getTextClasses(textNode)}>{cleanText}</span>
      </span>
    );
  }

  // Apply text formatting classes
  const className = getTextClasses(textNode);

  if (className) {
    return (
      <span key={key} className={className}>
        {text}
      </span>
    );
  }

  return text;
}

// Helper function to get text styling classes
function getTextClasses(textNode: any): string {
  const classes = [];

  if (textNode.bold) classes.push("font-bold");
  if (textNode.italic) classes.push("italic");
  if (textNode.underline) classes.push("underline");

  return classes.join(" ");
}
