import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, Google Ads, social media, and SEO — AI-powered digital services built for small businesses.",
};

const services = [
  {
    title: "Custom Website Development",
    description:
      "A fast, mobile-first website built around your business — not a template. Every site includes responsive design, clean branding, intuitive navigation, and on-page SEO baked in from day one. Good UI, a clear brand feel, and a smooth experience for your visitors are part of the package — not an upsell.",
    color: "cobalt" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Google Ads Management",
    description:
      "AI-optimized Google Ads campaigns with no wasted budget and no guesswork. I research your keywords, write the ads, set the targeting, and monitor performance so every dollar is working for you. Clear reporting — always in plain English.",
    color: "vermillion" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    description:
      "Content strategy, creation, and scheduling across the platforms your customers actually use. I plan posts that reflect your voice, grow your audience, and drive real traffic — not just likes.",
    color: "sage" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description:
      "I audit your site, research the keywords your customers are actually searching, and implement on-page and technical SEO that moves you up in results month over month. More visibility, more clicks, more customers.",
    color: "cobalt" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Google Business Profile",
    description:
      "For most local businesses, your Google Business Profile is the first thing a customer sees — before they ever visit your website. I set it up, write your description, add photos and hours, and make sure you show up when people nearby search for what you offer.",
    color: "vermillion" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Peace of Mind",
    description:
      "Your website going live is the beginning, not the end. When something looks off, a link breaks, or you just need to update your hours — you have a real person to call. No support tickets, no outsourced help desk. Just a direct line to me, and a same-day response every time.",
    color: "sage" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-salmon px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Everything you need.<br />Nothing you don&apos;t.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70">
            Five focused services — all AI-powered, all managed by one person
            who actually cares about your results.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            How I work
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Free Audit", text: "I review your current online presence and show you exactly what's holding you back." },
              { step: "02", title: "Clear Plan", text: "No jargon. Just a plain-English roadmap of what I'll do and what it'll cost." },
              { step: "03", title: "Fast Execution", text: "I build, launch, and deliver — most projects are live within two weeks." },
              { step: "04", title: "Real Results", text: "I track what matters — calls, clicks, customers — and report back to you monthly." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-3xl font-extrabold text-cobalt">{item.step}</span>
                <h3 className="mt-2 text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
