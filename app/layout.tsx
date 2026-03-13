import React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talent Bridge Africa – Graduate With Experience, Not Just A Degree",
  description:
    "Talent Bridge Africa connects skilled university students with growing African businesses that need affordable, high-quality professional services.",
  metadataBase: new URL("https://talentbridge.africa"),
  openGraph: {
    title: "Talent Bridge Africa – Graduate With Experience, Not Just A Degree",
    description:
      "A student talent agency that connects skilled university students with growing businesses that need affordable professional services.",
    url: "https://talentbridge.africa",
    siteName: "Talent Bridge Africa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talent Bridge Africa – Student talent agency",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talent Bridge Africa – Graduate With Experience, Not Just A Degree",
    description:
      "A student talent agency connecting African students with real projects and income.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} font-sans bg-bg-soft text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

