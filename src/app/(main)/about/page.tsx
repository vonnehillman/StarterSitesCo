import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Augmenté is a solo AI-powered web consulting practice built to help small businesses get found online — without the agency price tag.",
};

const values = [
  {
    title: "Results over vanity metrics",
    description:
      "I measure success by your business outcomes — more calls, more customers, more revenue. Not impressions or follower counts.",
  },
  {
    title: "Honest communication",
    description:
      "I tell you what will work, what won't, and why. You'll always know exactly what I'm doing and what it's doing for your business.",
  },
  {
    title: "Small business focus",
    description:
      "I work exclusively with small businesses because that's where this work makes the biggest difference. Your growth matters to me personally.",
  },
  {
    title: "No fluff. No contracts.",
    description:
      "Everything runs month-to-month. If I'm not delivering value, you can walk away. I'd rather earn your business every month than lock you in.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-salmon px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            One person.<br />The best AI tools.<br />Full-agency output.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-foreground/70">
            Augmenté is a solo AI-powered web consulting practice. I started it
            because small businesses deserve professional digital marketing —
            without paying for a team of 10 people in meetings.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-foreground/70">
            AI changed what one person can do. I use it to build faster websites,
            run smarter ads, and create better content than most agencies deliver
            with a full staff. You get the output. You skip the overhead.
          </p>
        </div>
      </section>

      {/* The name */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cobalt">The name</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What does <span className="italic" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Augment<span className="text-vermillion">é</span></span> mean?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            <strong className="text-foreground">To augment</strong>{" "}means to enhance, expand, or make something greater than it was before.
            That&apos;s exactly what AI does for this business — and for yours.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The accent on the <strong className="text-foreground">é</strong>{" "}is a nod to the French word for &ldquo;augmented&rdquo; —
            a small detail that signals something elevated. Just like AI elevates what one person
            can deliver: a faster website, smarter ads, and content that actually reaches people.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The old agency model added headcount to add capacity. Augmenté adds intelligence instead.
            Same output. Costs that serve the customer.
          </p>
        </div>
      </section>

      {/* What I do */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What I do
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Websites",
                body: "Fast, mobile-first websites built to convert visitors into customers. Starting at $950 — live in two weeks.",
                color: "border-cobalt",
              },
              {
                title: "Google Ads",
                body: "AI-optimized Google Ads campaigns with no wasted budget. Every dollar tracked, every result reported.",
                color: "border-vermillion",
              },
              {
                title: "Social Media",
                body: "Content strategy, creation, and scheduling across the platforms your customers actually use.",
                color: "border-sage",
              },
            ].map((s) => (
              <div key={s.title} className={`rounded-xl border-t-4 ${s.color} bg-surface p-6`}>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What I stand for
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Ready to grow your business online?"
        description="Start with a free website audit. I'll show you exactly what's holding your online presence back — and how to fix it."
        buttonText="Get your free audit"
      />
    </>
  );
}
