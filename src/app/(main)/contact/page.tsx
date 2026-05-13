import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to get your business found online? Drop Augmenté an email and let's get started.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-salmon px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            No forms. No robots. Just me.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s get your business<br />found online.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            You don&apos;t need to fill out a 12-step form or schedule a call
            three weeks out. Just send me an email, tell me a little about your
            business, and I&apos;ll get back to you the same day.
          </p>
        </div>
      </section>

      {/* Email CTA */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-xl text-center">

          {/* Big email button */}
          <a
            href="mailto:vonibeaty@gmail.com"
            className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-8 py-5 text-white shadow-xl transition-all hover:bg-foreground/80 hover:shadow-2xl"
          >
            <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">vonibeaty@gmail.com</span>
          </a>

          <p className="mt-6 text-sm text-muted">
            Click to open your email app — or copy and paste it into your inbox.
          </p>

          {/* What to include */}
          <div className="mt-14 rounded-2xl bg-surface p-8 text-left">
            <h2 className="text-base font-bold text-foreground">
              Not sure what to say? Here&apos;s a simple starter:
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-white p-5 text-sm leading-relaxed text-muted">
              <p className="font-medium text-foreground">Hi Voni,</p>
              <p className="mt-2">
                I run a [type of business] in [city]. I&apos;d love help with
                [website / Google / social media]. Here&apos;s a little about
                what I&apos;m looking for...
              </p>
              <p className="mt-2 text-foreground/50">— [Your name]</p>
            </div>
            <p className="mt-4 text-xs text-muted">
              That&apos;s it. No pitch deck needed. I&apos;ll ask questions if I need to know more.
            </p>
          </div>

          {/* Response promise */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cobalt/10 p-5 text-left">
            <span className="text-2xl">⚡</span>
            <div>
              <p className="text-sm font-bold text-foreground">Same-day replies, always.</p>
              <p className="mt-0.5 text-sm text-muted">
                I read every email personally and respond the same day — usually within a few hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom nudge */}
      <section className="border-t border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-muted text-sm">
            Not ready to email yet? Take a look at{" "}
            <Link href="/services" className="font-semibold text-foreground underline underline-offset-2 hover:text-cobalt">
              what I offer
            </Link>
            {" "}or{" "}
            <Link href="/portfolio" className="font-semibold text-foreground underline underline-offset-2 hover:text-cobalt">
              see past work
            </Link>
            {" "}first.
          </p>
        </div>
      </section>
    </>
  );
}
