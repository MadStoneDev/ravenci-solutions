"use client";

import "@blocknote/mantine/style.css";
import {
  BlockNoteView,
  darkDefaultTheme,
  type Theme,
} from "@blocknote/mantine";
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

  const editorTheme = {
    ...darkDefaultTheme,
    colors: {
      ...darkDefaultTheme.colors,
      // Keep `editor` empty — do NOT give it colours, and do NOT drop this and
      // rely on the `...darkDefaultTheme` spread above. This theme object is
      // applied inline to both the editor container AND the slash-menu portal:
      //  - Any editor colour here is written inline and overrides the
      //    globals.css `.bn-container` rule that makes the editor transparent.
      //  - It also leaks onto the menu portal and strips its styling.
      // Leaving it {} lets globals.css own the editor surface while the menu
      // keeps its dark default theme.
      editor: {},
    },
    fontFamily: "inherit",
  } satisfies Theme;

  return (
    // No wrapper of its own — the shared EditorFrame provides the box, and
    // globals.css .bn-container overrides make it inherit the page.
    <BlockNoteView
      editor={editor}
      theme={editorTheme}
      onChange={async () => {
        if (!ready.current) return;
        const md = await editor.blocksToMarkdownLossy(editor.document);
        onChange(md);
      }}
    />
  );
}
