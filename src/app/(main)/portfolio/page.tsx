import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how Apex Digital has helped small businesses grow through web design, branding, and digital marketing.",
};

const projects = [
  {
    name: "Greenleaf Landscaping",
    category: "Web Design & SEO",
    result: "3x increase in organic leads within 6 months",
    description:
      "A complete rebrand and responsive website for a regional landscaping company. We combined local SEO with a conversion-focused design to turn website visitors into booked consultations.",
  },
  {
    name: "Bloom & Barrel Bakery",
    category: "E-Commerce & Brand Identity",
    result: "Online orders grew 140% in the first quarter",
    description:
      "We built an online ordering system and developed a cohesive brand identity that carried across packaging, social media, and the storefront — giving this neighborhood bakery a regional presence.",
  },
  {
    name: "Trident Financial Advisors",
    category: "Web Development & Content Strategy",
    result: "45% more qualified appointment bookings",
    description:
      "A professional, trust-building website paired with an educational blog strategy. The content pipeline established Trident as a thought leader and drove consistent inbound leads.",
  },
  {
    name: "Riverwalk Dental",
    category: "UI/UX Design & Local SEO",
    result: "Ranked #1 for 12 local search terms",
    description:
      "We redesigned the patient experience from first search to booked appointment. A streamlined site, optimized Google Business profile, and review strategy filled their schedule.",
  },
  {
    name: "Summit Fitness Studio",
    category: "Social Media & Web Design",
    result: "Membership sign-ups doubled in 90 days",
    description:
      "A high-energy brand refresh and social media campaign paired with a new class-booking website. The integrated approach turned followers into paying members.",
  },
  {
    name: "Oakridge Law Group",
    category: "Web Development & Brand Strategy",
    result: "60% reduction in bounce rate, 2x consultation requests",
    description:
      "We replaced an outdated site with a modern, mobile-first experience that communicated credibility and made it easy for potential clients to take the next step.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work that speaks for itself
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Real projects, real results. Here are some of the businesses
            we have helped transform their digital presence.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border border-border bg-white p-6"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-4 rounded-md bg-blue-50 px-3 py-2 text-xs font-semibold text-primary">
                Result: {project.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTA
        heading="Like what you see?"
        description="Every project starts with a conversation. Tell us about your business and we will show you what is possible."
        buttonText="Start Your Project"
      />
    </>
  );
}
