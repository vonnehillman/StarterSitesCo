"use client";

export default function ContactClient() {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">

      {/* ══════════════════════════
          LEFT PANEL — orange
          ══════════════════════════ */}
      <div
        className="w-full sm:w-[40%]"
        style={{
          background: "#F06020",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2.5rem",
          flexShrink: 0,
        }}
      >
        {/* Large dark circle — lower left */}
        <div
          style={{
            position: "absolute",
            bottom: "-8%",
            left: "-20%",
            width: "75%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "#C84010",
          }}
        />

        {/* "the ONE DEV" */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", userSelect: "none" }}>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              color: "rgba(255,255,255,0.88)",
              margin: "0 0 0.2rem",
              letterSpacing: "0.04em",
            }}
          >
            the
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              color: "#ffffff",
              lineHeight: 0.88,
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            ONE<br />DEV
          </p>
        </div>

        {/* Three descending circles */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.85rem",
            marginTop: "2.5rem",
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#B890C8" }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#7878A8" }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#282840" }} />
        </div>
      </div>

      {/* Thin vertical divider */}
      <div
        className="hidden sm:block"
        aria-hidden="true"
        style={{ width: 3, flexShrink: 0, background: "#A080B0" }}
      />

      {/* ══════════════════════════
          RIGHT PANEL — dark navy
          ══════════════════════════ */}
      <div style={{ background: "#181828", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            padding: "clamp(2rem, 5vw, 4rem) clamp(2rem, 5vw, 4.5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Augmenté + orange rule */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "#F5ECE4",
                lineHeight: 1,
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              Augmenté
            </h1>
            <div style={{ height: 3, background: "#F06020", borderRadius: 2, marginTop: "0.6rem" }} />
          </div>

          {/* Taglines */}
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.72rem, 1.3vw, 0.92rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5AABDA",
              margin: "1.5rem 0 0",
            }}
          >
            Websites That Get Found
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.62rem, 1.05vw, 0.78rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,236,228,0.45)",
              margin: "0.4rem 0 0",
            }}
          >
            AI-Powered Web Consulting
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(245,236,228,0.15)", margin: "2rem 0" }} />

          {/* Name */}
          <h2
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              color: "#F5ECE4",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Vonne Hillman
          </h2>

          {/* Pronunciation */}
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(0.88rem, 1.5vw, 1.15rem)",
              color: "#E03280",
              margin: "0.5rem 0 0",
              letterSpacing: "0.02em",
            }}
          >
            voN-EE &nbsp;&middot;&nbsp; rhymes with Bonnie
          </p>
        </div>

        {/* Contact strip — dark teal */}
        <div style={{ background: "#2A4A48", padding: "2.25rem clamp(2rem, 5vw, 4.5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "rgba(245,236,228,0.9)",
              margin: "0 0 0.85rem",
              lineHeight: 1.4,
            }}
          >
            Shoot me an email — let&rsquo;s get your business built out.
          </p>
          <a
            href="mailto:vonnehillman@gmail.com"
            className="aug-contact-link"
            style={{
              display: "inline-block",
              fontSize: "clamp(0.92rem, 1.6vw, 1.1rem)",
              fontWeight: 600,
              letterSpacing: "0.03em",
              marginBottom: "0.75rem",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "rgba(245,236,228,0.3)",
            }}
          >
            vonnehillman@gmail.com
          </a>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "clamp(0.68rem, 1.1vw, 0.78rem)",
              color: "rgba(245,236,228,0.45)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            augmente.co &nbsp;&middot;&nbsp; Charlottesville, VA
          </p>
        </div>
      </div>
    </div>
  );
}
