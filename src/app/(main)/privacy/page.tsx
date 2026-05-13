import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Augmenté.",
};

export default function PrivacyPage() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: May 2026</p>

        <div className="prose prose-sm mt-10 max-w-none text-foreground [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul>li]:mt-1 [&_ul>li]:text-sm [&_ul>li]:text-muted">

          <h2>1. Information I collect</h2>
          <p>
            When you reach out via email, I may collect your name, email address, and any
            information you choose to share about your business. I do not collect payment
            information directly — any payments are handled by third-party processors.
          </p>

          <h2>2. How I use your information</h2>
          <p>I use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiry and discuss your project</li>
            <li>Provide the services you have engaged me for</li>
            <li>Send occasional updates about my services (you can opt out at any time)</li>
          </ul>
          <p>I do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2>3. Cookies and analytics</h2>
          <p>
            This website may use cookies and analytics tools (such as Google Analytics) to
            understand how visitors use the site. This helps me improve the experience.
            You can disable cookies in your browser settings at any time.
          </p>

          <h2>4. Data retention</h2>
          <p>
            I retain your contact information for as long as necessary to provide my services
            or as required by law. You may request deletion of your data at any time by
            emailing me directly.
          </p>

          <h2>5. Your rights</h2>
          <p>
            You have the right to access, correct, or delete the personal information I hold
            about you. To make a request, contact me at the email address below.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions about this policy? Email me at{" "}
            <a href="mailto:vonibeaty@gmail.com" className="text-primary hover:underline">
              vonibeaty@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
