import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ANVSLAB | Studio digital & IA pour PME",
    template: "%s | ANVSLAB",
  },
  description:
    "ANVSLAB construit, étape par étape, l'infrastructure digitale qui transforme les PME ambitieuses en leaders de leur secteur : sites nouvelle génération, SEO, GEO, assistants IA, agents téléphoniques, automatisation, ERP, CRM et logiciels sur mesure.",
  applicationName: SITE_NAME,
  authors: [{ name: "Anas Elkhadir" }],
  creator: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary" },
  robots: { index: true, follow: true },
};

/* Entité ANVSLAB : une seule déclaration, reprise par référence (@id)
   dans les données structurées des pages. */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE_NAME,
  legalName: "ANVSLAB LLC",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/anvslab-logo-black.png"),
  email: CONTACT_EMAIL,
  description:
    "Studio digital et IA pour PME francophones : sites nouvelle génération, SEO, GEO, assistants IA, automatisation, ERP, CRM, logiciels sur mesure.",
  founder: { "@type": "Person", name: "Anas Elkhadir" },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Maroc" },
  ],
  knowsLanguage: ["fr"],
  sameAs: ["https://github.com/anaselkhadir"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: absoluteUrl("/"),
  name: SITE_NAME,
  inLanguage: "fr",
  publisher: { "@id": absoluteUrl("/#organization") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        {children}
      </body>
    </html>
  );
}
