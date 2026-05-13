import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import AugmenteLogo from "@/components/AugmenteLogo";

/* ─── Decorative: sparkle SVG ─── */
function Sparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
    </svg>
  );
}

/* ─── Stat card ─── */
function StatCard({
  bg, label, value, children,
}: {
  bg: string; label: string; value: string; rotate?: number; children?: React.ReactNode;
}) {
  return (
    <div className={`${bg} rounded-xl p-3.5 shadow-md text-white`}>
      <p className="text-[10px] font-semibold uppercase tracking-wide opacity-70">{label}</p>
      <p className="mt-0.5 text-xl font-extrabold tracking-tight">{value}</p>
      {children}
    </div>
  );
}

const services = [
  {
    title: "Websites That Convert",
    description:
      "Fast, mobile-first websites built to turn visitors into paying customers. Every page designed around your business goals — not a template.",
    color: "cobalt" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Ads That Actually Work",
    description:
      "Google Ads managed with AI precision — no wasted budget, no guesswork. I optimize campaigns until every dollar earns its keep.",
    color: "vermillion" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Social That Grows",
    description:
      "Content strategy, creation, and scheduling across the platforms your customers actually use. Build an audience that shows up and buys.",
    color: "sage" as const,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
];

const faqs = [
  { q: "How much does a website cost?", a: "Most small business websites start at $950. You'll get an exact quote after a free website audit — no surprises." },
  { q: "How long does it take to build?", a: "Most projects are live within 2 to 4 weeks. AI tools let me move fast without cutting corners on quality." },
  { q: "What does 'showing up on Google' actually mean?", a: "When someone nearby searches for your type of business, your name should appear near the top — not a competitor's. I optimize your website and Google Business Profile to make that happen." },
  { q: "Do I have to sign a long-term contract?", a: "Never. Ongoing services run month-to-month with 30 days notice to cancel. I'd rather earn your business every month than lock you in." },
  { q: "I'm not tech-savvy. Will I be able to manage my own site?", a: "Yes. I build sites so you can update your hours, add a photo, or post a special without calling anyone. And I'm always one message away." },
  { q: "Why one person instead of an agency?", a: "At a traditional agency, a team of 10 means 9 people in meetings while 1 does your work. With AI tools, I deliver the same output — faster, with no overhead passed on to you." },
];

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — salmon bg
          text 2/3 · cards 1/3
          ════════════════════════════════ */}
      <section className="relative flex min-h-[calc(100vh-60px)] flex-col overflow-hidden bg-gradient-to-br from-salmon via-salmon to-[#f0c4b0] px-4 sm:px-6 lg:px-8">

        {/* Decorative background circles for warmth */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cobalt/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-vermillion/10" />

        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center">
          <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[3fr_2fr]">

            {/* ── Left (3/5): copy ── */}
            <div className="relative z-10">

              {/* Headline */}
              <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                <span className="block whitespace-nowrap">You don&apos;t need</span>
                <span className="relative block whitespace-nowrap">
                  <span className="relative z-10">an agency.</span>
                  <svg className="absolute -bottom-2 left-0 z-0 w-full overflow-visible" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C50 3 100 1 150 5C200 9 250 7 298 3" stroke="#C84030" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="mt-2 block text-3xl font-bold text-cobalt sm:text-4xl lg:text-5xl">
                  I&apos;m here to help.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-foreground/75">
                I help small business owners get found online — a great website,
                showing up on Google, and social that brings in customers.
                No tech jargon. No agency markup. Just real results.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-foreground/80"
                >
                  Let&apos;s talk →
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border-2 border-foreground/25 bg-white/40 px-8 py-4 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:bg-white/70"
                >
                  See the work
                </Link>
              </div>

              {/* Trust chips */}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/70">
                {["No contracts", "Free website audit", "Plain English — always"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="font-bold text-sage">✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: compact result cards ── */}
            <div className="hidden lg:flex lg:flex-col gap-3 max-w-[220px] ml-auto">

              {/* Card 1 — warm welcome */}
              <div className="rounded-xl bg-white p-3.5 shadow-md ring-1 ring-border">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-base">☕</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">New customer</p>
                    <p className="text-xs font-bold text-foreground">&ldquo;Found you on Google!&rdquo;</p>
                  </div>
                </div>
              </div>

              {/* Card 2 — cobalt leads */}
              <StatCard bg="bg-cobalt" label="New customers this month" value="+127%">
                <svg viewBox="0 0 80 20" className="mt-2 w-full opacity-60" fill="none">
                  <polyline points="0,18 15,12 30,14 45,6 60,8 75,2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </StatCard>

              {/* Card 3 — Google */}
              <StatCard bg="bg-vermillion" label="Google ranking" value="#1 local">
                <div className="mt-2 flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-1 flex-1 rounded-full bg-white" />
                  ))}
                </div>
              </StatCard>

              {/* Card 4 — launch time */}
              <StatCard bg="bg-sage" label="Avg. time to go live" value="14 days">
                <p className="mt-1.5 text-[10px] text-white/70">First call to live website</p>
              </StatCard>

            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <svg viewBox="0 0 1440 64" fill="none" className="w-full text-white" preserveAspectRatio="none">
            <path d="M0 64 L0 36 Q180 4 360 36 Q540 64 720 36 Q900 4 1080 36 Q1260 64 1440 36 L1440 64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════
          THE HONEST PITCH
          ════════════════════════════ */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            The old model — hire an agency, pay a graphic designer, engineer, and photographer, wait months going back and forth —{" "}
            <span className="relative inline-block">
              <span className="relative z-10">and never get what you want.</span>
              <span className="absolute inset-x-0 bottom-0.5 z-0 h-3 -skew-x-3 bg-salmon/70" />
            </span>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            There&apos;s a better way now. AI changed what one person can do. You get a faster website, a real Google presence, and someone who actually explains what&apos;s happening — without the agency price tag. That&apos;s Augmenté.
          </p>
        </div>
      </section>


      {/* ════════════════════════════
          SERVICES
          ════════════════════════════ */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Three services — website, ads, and social — all optimized with AI and managed by one person who cares about your bottom line.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-1.5 rounded-full border-2 border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-cobalt hover:text-cobalt">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FAQ
          ════════════════════════════ */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Questions people actually ask
            </h2>
            <p className="mt-4 text-muted">Straight answers. No fluff.</p>
          </div>
          <dl className="mt-12 flex flex-col divide-y divide-border">
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="text-base font-bold text-foreground">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ════════════════════════════
          CTA
          ════════════════════════════ */}
      <CTA
        heading="Your customers are searching right now."
        description="Every day without a strong online presence is a day your competition wins business that should be yours. Let's fix that."
        buttonText="Start a project"
      />
    </>
  );
}
