import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0E0E1E", borderTop: "1px solid #2a2a3a" }}>
      <div
        className="mx-auto max-w-6xl px-6 py-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "#F5ECE4",
              letterSpacing: "0.01em",
            }}
          >
            Augmenté
          </span>
        </Link>

        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.07em",
            color: "rgba(245,236,228,0.3)",
          }}
        >
          &copy; {new Date().getFullYear()}{" "}Augmenté &nbsp;&middot;&nbsp; Charlottesville,&nbsp;VA
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.07em",
                color: "rgba(245,236,228,0.3)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
