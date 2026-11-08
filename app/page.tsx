import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { Banner } from "@/components/Banner";
import { FloatingCta } from "@/components/Nav";
import { HeroDark } from "@/components/HeroDark";
import { Temoignage } from "@/components/Temoignage";
import { Method } from "@/components/Method";
import { Pillars } from "@/components/Pillars";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faq";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";

const description =
  "Sites nouvelle génération, SEO, GEO, assistants IA et systèmes sur mesure pour PME francophones. Trois packs tout compris, support douze mois, accompagnement six mois.";

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "ANVSLAB | Studio digital & IA pour PME",
    description,
    url: absoluteUrl("/"),
  },
  twitter: {
    title: "ANVSLAB | Studio digital & IA pour PME",
    description,
  },
};

/* Les trois packs de la section Tarifs, dans l'ordre d'affichage.
   Mettre à jour ici si Pricing.tsx change. */
const offers = [
  { name: "Initial", price: "799" },
  { name: "Équilibre", price: "1499" },
  { name: "Intense", price: "2999" },
];

const service = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": absoluteUrl("/#service"),
  name: SITE_NAME,
  url: absoluteUrl("/"),
  email: CONTACT_EMAIL,
  image: absoluteUrl("/anvslab-logo-black.png"),
  description,
  provider: { "@id": absoluteUrl("/#organization") },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Maroc" },
  ],
  serviceType: [
    "Création de site internet",
    "Web design",
    "Référencement naturel (SEO)",
    "Référencement dans les moteurs génératifs (GEO)",
    "Assistants et agents IA",
    "Automatisation et logiciels sur mesure",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Packs ANVSLAB",
    itemListElement: offers.map((o) => ({
      "@type": "Offer",
      name: `Pack ${o.name}`,
      price: o.price,
      priceCurrency: "EUR",
      url: absoluteUrl("/#tarifs"),
      availability: "https://schema.org/InStock",
    })),
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: absoluteUrl("/rendez-vous/"),
    name: "Réserver un appel découverte",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": absoluteUrl("/#faq"),
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <SmoothScroll>
      <JsonLd data={service} />
      <JsonLd data={faqPage} />
      <Preloader />
      <Banner />
      <FloatingCta />
      <main>
        <HeroDark />
        <Temoignage />
        <Method />
        <Pillars />
        <Team />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
