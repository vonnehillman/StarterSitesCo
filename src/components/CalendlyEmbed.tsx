"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  /** Your Calendly scheduling URL, e.g. "https://calendly.com/your-name/30min" */
  url?: string;
}

export default function CalendlyEmbed({
  url = "https://calendly.com/vonibeaty/30min",
}: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
