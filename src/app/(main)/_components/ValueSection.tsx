"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf: number;
    let tick = 0;
    let mouseActive = false;
    let targetX = 50, targetY = 50;
    let curX = 50, curY = 50;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      if (!mouseActive) {
        tick += 0.0012;
        targetX = 50 + Math.sin(tick) * 22;
        targetY = 50 + Math.cos(tick * 0.65) * 22;
      }
      curX = lerp(curX, targetX, 0.025);
      curY = lerp(curY, targetY, 0.025);
      el.style.backgroundPosition = `${curX * 4}% ${curY * 4}%`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      mouseActive = true;
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const onLeave = () => { mouseActive = false; };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
        background:
          "linear-gradient(135deg, #111122 0%, #1E1040 35%, #2A1528 65%, #111830 100%)",
        backgroundSize: "300% 300%",
      }}
    >
      <div
        style={{
          maxWidth: 680,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Overline */}
        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(245,236,228,0.5)",
            marginBottom: "1.25rem",
          }}
        >
          The New Web
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            color: "#F5ECE4",
            lineHeight: 1.08,
            letterSpacing: "0.01em",
            margin: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.3)",
          }}
        >
          You&rsquo;re in control now.
        </h2>

        {/* Rule */}
        <div
          style={{
            height: 2,
            width: "60%",
            margin: "1.5rem auto 0",
            backgroundColor: "#5858C8",
            borderRadius: 1,
            opacity: 0.8,
          }}
        />

        {/* Body */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.75,
              color: "rgba(245,236,228,0.82)",
            }}
          >
            For years, a great website meant one thing — a team you&rsquo;d never
            fully meet and a bill that stung. Designers, engineers, project
            managers. Months of back-and-forth for something that was&hellip;
            close enough.
          </p>

          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
              color: "#F5ECE4",
              letterSpacing: "0.01em",
              textShadow: "0 1px 12px rgba(0,0,0,0.25)",
            }}
          >
            AI just changed the math completely.
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.75,
              color: "rgba(245,236,228,0.82)",
            }}
          >
            You tell me what you want. I build it — fast, sharp, and exactly how
            you pictured it. No agency markup. No rounds of &ldquo;we&rsquo;ll
            circle back.&rdquo; No mystery invoice.
          </p>

          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              letterSpacing: "0.06em",
              color: "rgba(245,236,228,0.65)",
              textTransform: "uppercase",
            }}
          >
            One person &nbsp;·&nbsp; The best tools ever made &nbsp;·&nbsp; Your
            vision, finally right
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F5ECE4",
              border: "2px solid rgba(245,236,228,0.55)",
              borderRadius: "3rem",
              padding: "0.85rem 2.5rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#F5ECE4";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(245,236,228,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(245,236,228,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
            }}
          >
            Let&rsquo;s build yours &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
