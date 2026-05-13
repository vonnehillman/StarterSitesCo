import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Augmenté.",
};

export default function TermsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: May 2026</p>

        <div className="prose prose-sm mt-10 max-w-none text-foreground [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul>li]:mt-1 [&_ul>li]:text-sm [&_ul>li]:text-muted">

          <h2>1. Services</h2>
          <p>
            Augmenté provides website design and development, Google Ads management, social
            media management, and related digital marketing services to small businesses. The
            specific scope of work for each engagement is defined in a separate project agreement
            or proposal.
          </p>

          <h2>2. Payment</h2>
          <p>
            Payment terms are outlined in your individual project agreement. For project-based
            work, a deposit is typically required before work begins. For ongoing monthly services,
            payment is due at the start of each billing period.
          </p>

          <h2>3. Cancellation</h2>
          <p>
            For ongoing monthly services, you may cancel with 30 days written notice. Project-based
            engagements are governed by the terms in your project agreement. Deposits for project
            work are non-refundable once work has begun.
          </p>

          <h2>4. Ownership</h2>
          <p>
            Upon full payment, you own the website and all creative assets produced for you.
            I retain the right to display the work in my portfolio unless you request otherwise
            in writing.
          </p>

          <h2>5. Client responsibilities</h2>
          <p>
            You are responsible for providing accurate information about your business, supplying
            any content or assets requested in a timely manner, and reviewing and approving
            deliverables. Delays caused by late feedback may affect project timelines.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            Augmenté is not liable for any indirect, incidental, or consequential damages
            arising from the use of these services. Total liability for any claim is limited to
            the amount paid in the 30 days preceding the claim.
          </p>

          <h2>7. Changes to these terms</h2>
          <p>
            These terms may be updated from time to time. Continued use of my services after
            changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions? Email me at{" "}
            <a href="mailto:vonibeaty@gmail.com" className="text-primary hover:underline">
              vonibeaty@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
