import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://anvslab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ANVSLAB | Studio digital & IA pour PME",
  description:
    "ANVSLAB construit, étape par étape, l'infrastructure digitale qui transforme les PME ambitieuses en leaders de leur secteur : sites nouvelle génération, SEO, GEO, assistants IA, agents téléphoniques, automatisation, ERP, CRM et logiciels sur mesure.",
  openGraph: {
    title: "ANVSLAB | Studio digital & IA pour PME",
    description:
      "Sites nouvelle génération, SEO, GEO, assistants IA et systèmes sur mesure pour PME francophones.",
    url: siteUrl,
    siteName: "ANVSLAB",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANVSLAB",
  url: siteUrl,
  description:
    "Studio digital et IA pour PME francophones : sites nouvelle génération, SEO, GEO, assistants IA, automatisation, ERP, CRM, logiciels sur mesure.",
  email: "hello@anvslab.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
