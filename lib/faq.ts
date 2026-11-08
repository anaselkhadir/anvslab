/*
 * Questions fréquentes : affichées dans la section FAQ de l'accueil et
 * reprises telles quelles dans les données structurées FAQPage.
 * Garder les deux synchronisées est la raison d'être de ce fichier.
 */
export type FaqEntry = { q: string; a: string };

export const faqs: FaqEntry[] = [
  {
    q: "Je n'ai pas de site du tout, est-ce un problème ?",
    a: "Au contraire, c'est encore plus simple : on part d'une page blanche avec vos informations, vos photos et votre activité. Le prix reste le même.",
  },
  {
    q: "L'objectif top 10 Google, c'est sérieux ?",
    a: "Oui : il est inscrit dans la proposition, sur des recherches définies ensemble pour votre métier et votre zone. Les premiers effets se voient en 2 à 4 mois, avec un rapport de positions chaque mois.",
  },
  {
    q: "Pourquoi un abonnement après six mois ?",
    a: "Le référencement n'est pas un état, c'est une position à tenir : vos concurrents continuent d'avancer. Les six premiers mois d'accompagnement sont compris dans le prix. Ensuite, poursuivre la progression est un abonnement dès 100€ par mois, sans engagement de durée. Si vous arrêtez, le site reste en ligne et vous gardez vos positions acquises.",
  },
  {
    q: "C'est quoi, un agent téléphonique IA ?",
    a: "Une voix naturelle qui décroche quand vous ne pouvez pas : elle renseigne, qualifie la demande, prend le rendez-vous et vous envoie le résumé. Vos appels manqués deviennent des clients.",
  },
  {
    q: "Que se passe-t-il au terme du support de douze mois ?",
    a: "Le site et les systèmes vous appartiennent entièrement : code, contenus, données, noms de domaine et comptes. Rien ne s'éteint et rien ne vous retient : vous continuez avec nous si vous le souhaitez, ou vous repartez avec l'ensemble, documentation comprise.",
  },
];
