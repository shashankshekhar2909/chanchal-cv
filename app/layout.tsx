import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "../styles/custom.scss";
import { site } from "@/data/site";
import AnimationProvider from "@/components/AnimationProvider";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beingchanchal.com"),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  alternates: {
    canonical: "https://www.beingchanchal.com",
  },
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "portfolio",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "https://www.beingchanchal.com",
    siteName: site.name,
    locale: "en_US",
    images: [site.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
    creator: "@beingchanchal",
  },
  keywords: [
    "chanchal verma",
    "chanchal",
    "chanchal verma content strategist",
    "chanchal verma portfolio",
    "chanchal verma copywriter",
    "chanchal verma social media strategist",
    "chanchal verma seo copywriter",
    "chanchal verma bengaluru",
    "chanchal verma bangalore",
    "chanchal varma",
    "chanchal vermaa",
    "content strategist portfolio",
    "content strategist india",
    "content strategist bengaluru",
    "content strategist bangalore",
    "content strategy specialist",
    "content stratagist",
    "content strategist",
    "copywriter portfolio",
    "copywriter india",
    "lifecycle marketing strategist",
    "content strategy",
    "lifecycle content specialist",
    "retention messaging specialist",
    "social media content strategist",
    "social media strategist",
    "digital content strategist",
    "whatsapp marketing strategist",
    "push notification copy",
    "push notification copywriter",
    "push notification strategist",
    "whatsapp campaign messaging",
    "sms marketing content",
    "sms campaign copy",
    "reels scripting",
    "reels script writer",
    "social content operations",
    "seo content strategy",
    "seo copywriter",
    "seo copywriter india",
    "catalog copywriter",
    "ecommerce catalog copywriter",
    "engagement growth",
    "a/b testing messaging",
    "high volume content planning",
    "consumer content strategist",
    "growth content specialist",
    "conversion-focused copywriter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            alternateName: ["Chanchal", "Chanchal V"],
            url: "https://www.beingchanchal.com",
            email: site.contact.email,
            homeLocation: {
              "@type": "Place",
              name: site.location,
            },
            knowsAbout: [
              "Content Strategy",
              "Lifecycle Messaging",
              "Push Notification Copywriting",
              "WhatsApp Campaign Messaging",
              "SMS Marketing Content",
              "Social Media Strategy",
              "Reels Scripting",
              "SEO Copywriting",
              "Catalog Copy Optimization",
            ],
            sameAs: ["https://www.beingchanchal.com"],
            jobTitle: [
              "Content Strategist",
              "Lifecycle Content Specialist",
              "Social Media Content Strategist",
            ],
          })}
        </Script>
        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: "https://www.beingchanchal.com",
            description: site.seo.description,
          })}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EK12YHP9B0"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK12YHP9B0');
          `}
        </Script>
        {children}
        <AnimationProvider />
      </body>
    </html>
  );
}
