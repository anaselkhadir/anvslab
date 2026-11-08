import type { FaqEntry } from "@/lib/faq";

/*
 * Modèle de contenu des sous-pages SEO (services, guides, métiers, Maroc).
 * Une page = une intention de recherche = un mot-clé principal.
 * Les blocs sont rendus par components/sous-pages/Blocs.tsx.
 */

export type Bloc =
  /** Paragraphes, avec titre H2 facultatif. */
  | { type: "texte"; titre?: string; paragraphes: string[] }
  /** Encadré de définition : 40–60 mots, citable tel quel par les moteurs génératifs. */
  | { type: "definition"; terme: string; texte: string }
  /** Liste à filets (comme les lignes des cartes tarifs). */
  | { type: "liste"; titre: string; intro?: string; items: { titre: string; texte: string }[] }
  /** Grille de cartes grises numérotées (comme les piliers de l'accueil). */
  | { type: "cartes"; titre: string; intro?: string; items: { titre: string; texte: string }[] }
  /** Étapes numérotées. */
  | { type: "etapes"; titre: string; intro?: string; items: { titre: string; texte: string }[] }
  /** Tableau comparatif ou grille de prix. */
  | { type: "tableau"; titre: string; intro?: string; colonnes: string[]; lignes: string[][]; note?: string }
  /** Les trois packs, rappelés sur la page. */
  | { type: "packs"; titre?: string; intro?: string }
  /** Questions fréquentes propres à la page (rendues aussi en FAQPage). */
  | { type: "faq"; titre?: string; items: FaqEntry[] }
  /** Appel à l'action intermédiaire. */
  | { type: "cta"; titre: string; texte: string; label?: string };

export type TypePage = "service" | "guide" | "secteur" | "maroc";

export type Page = {
  /** Chemin complet, avec barres obliques : "/services/seo/". */
  slug: string;
  type: TypePage;
  /** Balise <title> sans le suffixe « | ANVSLAB » (≤ 60 caractères). */
  titre: string;
  /** Méta-description (≤ 160 caractères). */
  description: string;
  /** Mot-clé principal visé (documentation, données structurées). */
  motCle: string;
  kicker: string;
  h1: string;
  lede: string;
  /** ISO, pour Article.dateModified. */
  dateMaj: string;
  blocs: Bloc[];
  /** Pages liées (maillage), affichées en fin de page. */
  liens: { label: string; href: string }[];
};

export type Hub = {
  slug: string;
  type: TypePage;
  titre: string;
  description: string;
  kicker: string;
  h1: string;
  lede: string;
};
