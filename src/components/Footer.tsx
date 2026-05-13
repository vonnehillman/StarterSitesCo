import Link from "next/link";
import AugmenteLogo from "@/components/AugmenteLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <AugmenteLogo variant="wordmark" size={44} textColor="white" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">
              One person. The best AI tools. Full-agency output — websites, ads, and social for small businesses that want to grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["Website Development", "Google Ads", "Social Media", "Google Business Profile"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-stone-400 transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-stone-400">
              <li>
                <a href="mailto:vonibeaty@gmail.com" className="transition-colors hover:text-white">
                  vonibeaty@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-700 pt-8 sm:flex-row">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Augmenté. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <Link href="/privacy" className="transition-colors hover:text-stone-300">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-stone-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
