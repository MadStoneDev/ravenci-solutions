"use client";

import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect, useRef } from "react";

/**
 * Visual block editor over the MDX body. Parses the markdown to blocks on mount
 * and serialises back on edit. Standard prose round-trips cleanly; custom MDX
 * component blocks (Callout/Checklist/Raw MDX) are best edited in MDX mode — the
 * editor warns when they're present.
 */
export default function BlocksEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (markdown: string) => void;
}) {
  const editor = useCreateBlockNote();
  const ready = useRef(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const blocks = await editor.tryParseMarkdownToBlocks(value || "");
      if (!cancelled) {
        editor.replaceBlocks(editor.document, blocks);
        ready.current = true;
      }
    })();
    return () => {
      cancelled = true;
    };
    // init once on mount; parent remounts (keyed) when re-entering blocks mode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    // No wrapper of its own — the shared EditorFrame provides the box, and
    // globals.css .bn-container overrides make it inherit the page.
    <BlockNoteView
      editor={editor}
      onChange={async () => {
        if (!ready.current) return;
        const md = await editor.blocksToMarkdownLossy(editor.document);
        onChange(md);
      }}
    />
  );
}
