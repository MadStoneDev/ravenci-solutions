export function ContentBlock({ block }: { block: any }) {
  const text = block.children[0].text;

  if (!text) return null;

  if (text.startsWith("###")) {
    return (
      <h3 className="text-xl font-bold mt-10 mb-3">
        {text.replace("###", "").trim()}
      </h3>
    );
  }

  if (text.startsWith("##")) {
    return (
      <h2 className="text-2xl font-bold mt-10 mb-4">
        {text.replace("##", "").trim()}
      </h2>
    );
  }

  if (text.startsWith("#")) {
    return (
      <h1 className="text-4xl font-bold mt-12 mb-6">
        {text.replace("#", "").trim()}
      </h1>
    );
  }

  // Replace bold text (**text**)
  const boldRegex = /\*\*(.*?)\*\*/g;
  const withBold = text.replace(boldRegex, "<strong>$1</strong>");

  // Replace italic text (*text*)
  const italicRegex = /\*(.*?)\*/g;
  const withBoldAndItalic = withBold.replace(italicRegex, "<em>$1</em>");

  return (
    <p
      className={"font-light"}
      style={{
        marginBottom: "1.5em",
        lineHeight: "1.7em",
      }}
      dangerouslySetInnerHTML={{ __html: withBoldAndItalic }}
    />
  );
}
