import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://iconclave2026.vercel.app"),
  title: {
    default: `iConclave 2026 — ${siteConfig.university}`,
    template: `%s | iConclave 2026`,
  },
  description: siteConfig.description,
  keywords: [
    "iConclave",
    "iConclave 2026",
    "Premier University",
    "PITCH3",
    "Clash of Projects",
    "HerTech Hustle",
    "PromptWar",
    "GoalBot Challenge",
    "Research Exhibition",
    "technology competition",
    "student innovation",
    "Chattogram",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iconclave2026.vercel.app",
    siteName: "iConclave 2026",
    title: "iConclave 2026 — Premier University",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "iConclave 2026 — Premier University",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-[#111111] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
