import Link from "next/link";

interface CTAProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  heading = "Your customers are searching right now.",
  description = "Every day without a strong online presence is a day your competition wins business that should be yours. Let's fix that.",
  buttonText = "Start a project",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-foreground px-4 py-24 text-center text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-cobalt/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-salmon/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-vermillion/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-salmon">
          Let&apos;s work together
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-10 inline-block rounded-full bg-salmon px-10 py-4 text-sm font-bold text-foreground shadow-lg transition-all hover:bg-[#dA8070] hover:shadow-xl"
        >
          {buttonText} →
        </Link>
        <p className="mt-4 text-xs text-stone-500">
          Free consultation. No contracts. Response within 24 hours.
        </p>
      </div>
    </section>
  );
}
