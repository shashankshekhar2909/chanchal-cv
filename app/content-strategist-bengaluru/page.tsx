import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Strategist in Bengaluru | Chanchal Verma",
  description:
    "Hire Chanchal Verma, a content strategist in Bengaluru for lifecycle messaging, social media content strategy, campaign planning, and growth-focused content systems.",
  alternates: {
    canonical: "https://www.beingchanchal.com/content-strategist-bengaluru",
  },
};

export default function ContentStrategistBengaluruPage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem clamp(1.25rem, 5vw, 2.5rem)" }}>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>Content Strategist in Bengaluru</h1>
      <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
        Chanchal Verma helps brands build content systems that improve retention, engagement, and conversions.
        Core strengths include lifecycle messaging, social storytelling, and SEO-led planning for consumer growth.
      </p>
      <h2 id="social-media-content-strategy" style={{ marginTop: "2rem", fontSize: "1.35rem" }}>Social Media Content Strategy</h2>
      <p style={{ marginTop: "0.65rem", lineHeight: 1.7 }}>
        Strategy covers monthly planning, campaign themes, reels scripting, content pillars, and execution frameworks
        designed for high-output publishing and consistent brand voice.
      </p>
      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/#case-studies">See case studies</Link>
        <Link href="/#contact">Hire Chanchal Verma</Link>
      </div>
    </main>
  );
}
