export type CollectionId = "industriel" | "commerce" | "services";

export type Collection = {
  id: CollectionId;
  label: string;
  /* Ce que couvre la collection, affiché quand elle est vide */
  scope: string;
};

export type Work = {
  slug: string;
  client: string;
  collection: CollectionId;
  sector: string;
  city: string;
  year: string;
  /* Ce que le site apporte au client, en une phrase */
  summary: string;
  stack: string[];
  image: string;
  url: string;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "industriel",
    label: "Industriel",
    scope: "Métallerie, usines, BTP, logistique, industrie",
  },
  {
    id: "commerce",
    label: "Commerce",
    scope: "Boutiques, marques, restaurants, e-commerce",
  },
  {
    id: "services",
    label: "Services",
    scope: "Cabinets, cliniques, agences, écoles, artisans",
  },
];

/*
 * Réalisations réelles uniquement. Ajouter chaque nouveau site livré ici :
 * placer la capture dans public/work/ puis compléter l'entrée.
 */
export const WORKS: Work[] = [
  {
    slug: "anasfer",
    client: "ANAS FER",
    collection: "industriel",
    sector: "Structures métalliques",
    city: "Casablanca",
    year: "2026",
    summary:
      "Vingt ans de métallerie mis en scène : héro 3D, catalogue d'ouvrages et demande de devis directe.",
    stack: ["Next.js", "Three.js", "GSAP", "SEO"],
    image: "/work/anasfer.jpg",
    url: "https://anaselkhadir.github.io/anasfer/",
  },
];
