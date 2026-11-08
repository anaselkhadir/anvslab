import type { Hub, Page, TypePage } from "./types";
import { services } from "./services";
import { guides } from "./guides";
import { secteurs } from "./secteurs";
import { maroc } from "./maroc";

export const PAGES: Page[] = [...services, ...guides, ...secteurs, ...maroc];

export const HUBS: Hub[] = [
  {
    slug: "/services/",
    type: "service",
    titre: "Services : site, SEO, GEO, design, IA",
    description:
      "Les services ANVSLAB pour PME : création de site internet, web design, référencement naturel, visibilité dans les IA, assistants IA. Prix tout compris.",
    kicker: "Services",
    h1: "Ce que nous construisons pour les PME.",
    lede: "Un site qui convertit, un référencement qui tient, une présence dans les réponses des IA, des assistants qui travaillent pour vous. Chaque service a sa page, son périmètre et son prix.",
  },
  {
    slug: "/guides/",
    type: "guide",
    titre: "Guides : prix, SEO, GEO pour PME",
    description:
      "Guides ANVSLAB pour dirigeants de PME : combien coûte un site internet, prix du référencement naturel, GEO et visibilité dans ChatGPT.",
    kicker: "Guides",
    h1: "Comprendre avant de décider.",
    lede: "Des réponses complètes, chiffrées et sans jargon aux questions que se posent les dirigeants de PME avant de choisir un site, un référencement ou une présence dans les IA.",
  },
  {
    slug: "/secteurs/",
    type: "secteur",
    titre: "Sites internet par métier : avocat, artisan, restaurant…",
    description:
      "Création de site internet et référencement par métier : avocats, artisans, restaurants, agences immobilières, architectes, coachs, experts-comptables, cabinets dentaires.",
    kicker: "Métiers",
    h1: "Chaque métier a ses clients, ses recherches, ses règles.",
    lede: "Un cabinet d'avocats ne se cherche pas comme un restaurant. Pour chaque métier, ce que le site doit dire, ce que Google attend et ce qui fait prendre rendez-vous.",
  },
  {
    slug: "/maroc/",
    type: "maroc",
    titre: "Agence web et SEO au Maroc",
    description:
      "ANVSLAB au Maroc : création de site internet et référencement naturel pour les PME de Casablanca, Rabat, Tanger, Marrakech et Agadir. Équipe à Casablanca.",
    kicker: "Maroc",
    h1: "Le même studio, depuis Casablanca.",
    lede: "Notre équipe travaille depuis Casablanca. Pour les PME marocaines : site internet, référencement sur Google.ma et dans les IA, aux mêmes standards que pour nos clients français.",
  },
];

export const pageParSlug = (slug: string) => PAGES.find((p) => p.slug === slug);
export const pagesParType = (type: TypePage) => PAGES.filter((p) => p.type === type);
export const hubParType = (type: TypePage) => HUBS.find((h) => h.type === type)!;

/** Toutes les routes indexables issues du contenu (sitemap, llms.txt). */
export const ROUTES_CONTENU = [
  ...HUBS.map((h) => h.slug),
  ...PAGES.map((p) => p.slug),
];
