import Link from "next/link";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Persistent home link — fixed top-left on every page */}
      <Link
        href="/"
        aria-label="Return to home"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "1.5rem",
          zIndex: 100,
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "rgba(245,236,228,0.55)",
          textDecoration: "none",
          textShadow: "0 1px 8px rgba(0,0,0,0.4)",
          lineHeight: 1,
          transition: "color 0.2s ease",
        }}
        className="aug-home-link"
      >
        A
      </Link>

      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
