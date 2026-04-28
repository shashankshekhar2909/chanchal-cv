import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Copywriter in India | Chanchal Verma",
  description:
    "Hire Chanchal Verma for SEO copywriting in India, including SEO blog strategy, product descriptions, and catalog copy optimization for discoverability and conversion.",
  alternates: {
    canonical: "https://www.beingchanchal.com/seo-copywriter-india",
  },
};

export default function SeoCopywriterIndiaPage() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "3rem clamp(1.25rem, 5vw, 2.5rem)" }}>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>SEO Copywriter in India</h1>
      <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
        Chanchal Verma writes SEO content mapped to search intent and business goals. Work includes blog topics,
        category copy, product descriptions, and catalog optimization for better discoverability and user action.
      </p>
      <h2 style={{ marginTop: "2rem", fontSize: "1.35rem" }}>SEO copywriting services</h2>
      <ul style={{ marginTop: "0.75rem", lineHeight: 1.8, paddingLeft: "1rem" }}>
        <li>SEO blog planning and writing</li>
        <li>Catalog and product description optimization</li>
        <li>Keyword-to-page copy structure</li>
        <li>Conversion-focused on-page messaging</li>
      </ul>
      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/#case-studies">See SEO-related work</Link>
        <Link href="/#contact">Request writing samples</Link>
      </div>
    </main>
  );
}
