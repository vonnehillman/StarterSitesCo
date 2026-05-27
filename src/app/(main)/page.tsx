import ValueSection from "./_components/ValueSection";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════
          HERO — business card front
          ══════════════════════════════ */}
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">

        {/* Background geometry */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1400 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Mauve/purple-rose base — shows only at corners */}
          <rect width="1400" height="800" fill="#A06898" />

          {/* Orange diamond — expanded to dominate most of the canvas */}
          <polygon points="500,-300 1250,400 500,1100 -250,400" fill="#F06020" />

          {/* Dark circle — right side, partially off-canvas */}
          <circle cx="1100" cy="340" r="340" fill="#7A2030" />

          {/* Hot-pink triangle — bottom-left */}
          <polygon points="0,560 0,800 260,800" fill="#E03280" />

          {/* Dark navy wedge — bottom-right */}
          <polygon points="720,800 1400,800 1400,300" fill="#181828" />
        </svg>

        {/* Animated dots — top right */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: "17%",
            top: "13%",
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.28)",
            animation: "aug-dot-1 9s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            right: "12%",
            top: "8%",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.18)",
            animation: "aug-dot-2 12s ease-in-out infinite",
          }}
        />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center px-8 text-center">
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(3.8rem, 11vw, 9rem)",
              color: "#F5ECE4",
              lineHeight: 1,
              letterSpacing: "0.01em",
              margin: 0,
              textShadow: "0 2px 20px rgba(0,0,0,0.35)",
              animation: "aug-fade-up 0.7s ease-out 0.1s both",
            }}
          >
            Augmenté
          </h1>

          {/* Blue-purple rule with flash */}
          <div
            style={{
              position: "relative",
              height: 2,
              width: "100%",
              backgroundColor: "#5858C8",
              borderRadius: 1,
              marginTop: "0.75rem",
              overflow: "hidden",
              transformOrigin: "left center",
              animation: "aug-line-draw 0.75s ease-out 0.55s both",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "40%",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.75) 50%, transparent 100%)",
                animation: "aug-line-flash 4s ease-in-out 1.5s infinite",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.62rem, 1.35vw, 0.92rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F5ECE4",
              margin: "1rem 0 0",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              animation: "aug-fade-up 0.7s ease-out 0.65s both",
            }}
          >
            Websites That Get Found
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.58rem, 1.15vw, 0.82rem)",
              letterSpacing: "0.16em",
              color: "rgba(245,236,228,0.72)",
              margin: "0.4rem 0 0",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              animation: "aug-fade-up 0.7s ease-out 0.8s both",
            }}
          >
            AI-Powered Web Consulting
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "clamp(0.58rem, 1.05vw, 0.78rem)",
              letterSpacing: "0.07em",
              color: "rgba(245,236,228,0.48)",
              margin: "2.2rem 0 0",
              animation: "aug-fade-up 0.7s ease-out 0.95s both",
            }}
          >
            augmente.co · Charlottesville, VA
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ animation: "aug-fade-up 0.7s ease-out 1.8s both" }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,236,228,0.45)",
            }}
          >
            scroll
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
            style={{ animation: "aug-bounce 2s ease-in-out infinite" }}
          >
            <path
              d="M4 6.5L9 11.5L14 6.5"
              stroke="rgba(245,236,228,0.55)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════
          VALUE SECTION
          ══════════════════════════════ */}
      <ValueSection />
    </>
  );
}
