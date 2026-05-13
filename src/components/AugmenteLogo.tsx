/**
 * Augmenté brand logo component.
 *
 * variant="full"      — serif wordmark + wave + two tagline lines  (hero)
 * variant="wordmark"  — serif wordmark + wave only                 (compact spots)
 * variant="icon"      — "Aé" initials only                        (favicon, small)
 *
 * Palette:
 *   "Augment" — textColor (default: foreground)
 *   "é"       — #E05858 vermillion
 *   wave      — #E05858 vermillion
 *   taglines  — #8C9B78 sage
 */

const VERMILLION = "#E05858";
const SAGE = "#8C9B78";

const ACCENT_GRADIENT: React.CSSProperties = {
  color: "#5AABDA",
};

interface AugmenteLogoProps {
  variant?: "full" | "wordmark" | "icon";
  /** Controls overall scale — wordmark font-size = size * 0.7px */
  size?: number;
  textColor?: string;
  className?: string;
}

export default function AugmenteLogo({
  variant = "full",
  size = 80,
  textColor = "var(--foreground)",
  className = "",
}: AugmenteLogoProps) {
  const wordmarkSize = Math.round(size * 0.7);
  const taglineSize  = Math.round(size * 0.13);

  const wordmarkStyle: React.CSSProperties = {
    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
    fontWeight: 800,
    fontSize: `${wordmarkSize}px`,
    color: textColor,
    lineHeight: 1,
    letterSpacing: "-0.01em",
    display: "block",
  };

  if (variant === "icon") {
    return (
      <span className={className} style={{ ...wordmarkStyle, fontSize: `${Math.round(size * 0.5)}px` }}>
        A<span style={ACCENT_GRADIENT}>é</span>
      </span>
    );
  }

  return (
    <div className={`inline-block ${className}`}>
      {/* Wordmark */}
      <span style={wordmarkStyle}>
        Augment<span style={ACCENT_GRADIENT}>é</span>
      </span>

      {/* Wavy underline */}
      <svg
        viewBox="0 0 400 18"
        fill="none"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: `${Math.round(size * 0.18)}px`, marginTop: `${Math.round(size * 0.04)}px` }}
        aria-hidden="true"
      >
        <path
          d="M0 9 Q50 2 100 9 Q150 16 200 9 Q250 2 300 9 Q350 16 400 9"
          stroke={VERMILLION}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Taglines — only in "full" variant */}
      {variant === "full" && (
        <div style={{ marginTop: `${Math.round(size * 0.1)}px` }}>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), Arial, sans-serif",
              fontWeight: 600,
              fontSize: `${taglineSize}px`,
              color: SAGE,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.6,
            }}
          >
            Websites That Get Found
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), Arial, sans-serif",
              fontWeight: 600,
              fontSize: `${taglineSize}px`,
              color: SAGE,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.6,
            }}
          >
            AI-Powered Web Consulting
          </p>
        </div>
      )}
    </div>
  );
}
