import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import "../styles/custom.scss";
import { site } from "@/data/site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://beingchanchal.com"),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "https://beingchanchal.com",
    images: [site.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
  keywords: [
    "copywriter",
    "content strategist",
    "social media strategist",
    "retention marketing",
    "lifecycle messaging",
    "content strategy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="bg-ink-900 text-sand-100 antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KL2L6RSXJ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4KL2L6RSXJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
