import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifecycle Messaging Specialist | Chanchal Verma",
  description:
    "Work with Chanchal Verma for lifecycle messaging across push notifications, WhatsApp, and SMS campaigns with testing-first retention strategy.",
  alternates: {
    canonical: "https://www.beingchanchal.com/lifecycle-messaging-specialist",
  },
};

export default function LifecycleMessagingSpecialistPage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem clamp(1.25rem, 5vw, 2.5rem)" }}>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>Lifecycle Messaging Specialist</h1>
      <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
        Chanchal Verma creates retention-focused lifecycle content systems across push notifications, WhatsApp, and SMS.
        Messaging is designed through hypothesis testing, segmentation, and measurable iteration.
      </p>
      <h2 style={{ marginTop: "2rem", fontSize: "1.35rem" }}>What this includes</h2>
      <ul style={{ marginTop: "0.75rem", lineHeight: 1.8, paddingLeft: "1rem" }}>
        <li>Message frameworks by lifecycle stage</li>
        <li>A/B tests for hooks, urgency, and send timing</li>
        <li>Cohort-based messaging refinement</li>
        <li>Weekly optimization loops linked to CTR and engagement</li>
      </ul>
      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/#case-studies">View lifecycle case study</Link>
        <Link href="/#contact">Book a project discussion</Link>
      </div>
    </main>
  );
}
