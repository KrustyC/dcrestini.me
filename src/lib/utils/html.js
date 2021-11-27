import { generateHTML } from "@tiptap/core";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import HardBreak from "@tiptap/extension-hard-break";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";

export function parseJSONtoHTML(json) {
  return generateHTML(json, [
    Document,
    Paragraph,
    Italic,
    Text,
    Bold,
    HardBreak,
    // other extensions …
  ]);
}
