"use client";

import { useEffect } from "react";

interface TypeformEmbedProps {
  /** Typeform form ID from the data-tf-live attribute */
  formId?: string;
}

export default function TypeformEmbed({
  formId = "01K1VFD0V1G515MJ95NGTRCY2R",
}: TypeformEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live={formId} />;
}
