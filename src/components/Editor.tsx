import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import DOMPurify from "dompurify";
import type { EditorPropTypes } from "../utils/types";

export default function Editor({ className, setContent }: EditorPropTypes) {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const currentContent = DOMPurify.sanitize(quill.root.innerHTML);
        setContent(currentContent);
      });
    }
  });

  return (
    <div className={className}>
      <div ref={quillRef}></div>
    </div>
  );
}
