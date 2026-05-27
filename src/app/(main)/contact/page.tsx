import type { Metadata } from "next";
import ContactClient from "./_contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Vonne Hillman at Augmenté — AI-powered web consulting in Charlottesville, VA.",
};

export default function ContactPage() {
  return <ContactClient />;
}
