"use client";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";

const theme = EditorView.theme({
  "&": { fontSize: "13px", backgroundColor: "transparent" },
  ".cm-content": {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    caretColor: "hsl(var(--foreground))",
    padding: "20px 0",
    // Fill the frame so clicking anywhere (not just a text line) focuses.
    minHeight: "560px",
  },
  // Make the text cursor visible (was invisible: no caret color was set).
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: "hsl(var(--foreground))",
    borderLeftWidth: "2px",
  },
  "&.cm-focused .cm-cursor": { borderLeftColor: "hsl(var(--foreground))" },
  ".cm-selectionBackground, ::selection": {
    backgroundColor: "hsl(var(--accent) / 0.2)",
  },
  ".cm-gutters": {
    backgroundColor: "transparent",
    border: "none",
    paddingLeft: "8px",
  },
  ".cm-editor": { minHeight: "600px" },
  "&.cm-focused": { outline: "none" },
});

export default function MdxCodeEditor({
  value,
  onChange,
  onReady,
}: {
  value: string;
  onChange: (v: string) => void;
  onReady?: (view: EditorView) => void;
}) {
  // No border/background here — the shared EditorFrame in article-editor provides
  // it so both modes look identical.
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      onCreateEditor={(view) => onReady?.(view)}
      theme="none"
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
        EditorView.lineWrapping,
        theme,
      ]}
      basicSetup={{
        lineNumbers: true,
        foldGutter: false,
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
      className="text-foreground"
    />
  );
}
