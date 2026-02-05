import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/custom.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Chanchal Verma | Copywriter & Content Strategist",
  description:
    "Creative resume site for Chanchal Verma, showcasing copywriting, social media, and content strategy expertise.",
  openGraph: {
    title: "Chanchal Verma | Copywriter & Content Strategist",
    description:
      "Transforming brand ideas into scroll-stopping stories across social, push, and influencer channels.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
