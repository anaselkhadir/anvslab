import type { Page } from "./types";

const MAJ = "2026-11-08";

/*
 * Pages Maroc : l'équipe ANVSLAB travaille depuis Casablanca. Tout ce qui
 * est écrit ici est vrai : pas d'agence physique inventée, prix en euros
 * (ANVSLAB LLC facture depuis l'étranger), devis en dirhams sur demande.
 */
export const maroc: Page[] = [
  {
    slug: "/maroc/agence-web-casablanca/",
    type: "maroc",
    titre: "Agence web à Casablanca : création de site internet pour PME au Maroc",
    description:
      "Création de site internet pour les PME marocaines, depuis Casablanca : site sur mesure, textes en français, référencement sur Google.ma, fiche Google Maps. Rabat, Tanger, Marrakech, Agadir, Fès.",
    motCle: "agence web casablanca",
    kicker: "Maroc · Création de site",
    h1: "Un site qui fait venir des clients, conçu à Casablanca.",
    lede: "Notre équipe travaille depuis Casablanca et construit des sites pour des PME au Maroc comme en France, aux mêmes standards : sur mesure, rapides sur mobile, écrits pour être trouvés sur Google.ma et dans les réponses des IA, et mesurés sur une seule chose, les rendez-vous qu'ils produisent.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Agence web à Casablanca",
        texte: "prestataire qui conçoit, rédige, développe et met en ligne des sites internet pour les entreprises marocaines. ANVSLAB le fait depuis Casablanca, avec une équipe locale et une méthode éprouvée sur le marché français : textes avant design, référencement intégré dès la conception, site livré avec son code et ses accès au nom du client.",
      },
      {
        type: "texte",
        titre: "Ce que cherche une PME marocaine, et ce qu'on lui vend trop souvent.",
        paragraphes: [
          "Au Maroc, le marché du site internet va du modèle installé en deux jours à l'agence qui facture des dizaines de milliers de dirhams pour un site vitrine. Entre les deux, beaucoup de PME reçoivent un site joli mais introuvable, sans textes travaillés, qui ne produit ni appel ni message WhatsApp.",
          "Nous faisons l'inverse. Nous partons des recherches que tapent vos clients sur Google.ma (« [votre métier] casablanca », « prix », « devis », en français et de plus en plus souvent en arabe), nous écrivons les pages qui y répondent, puis nous dessinons un site qui met ces pages en valeur et qui amène vers une seule action : vous contacter, par formulaire, par téléphone ou par WhatsApp.",
          "La méthode est celle décrite sur notre page [création de site internet](/services/creation-site-internet/), appliquée au marché marocain : fiche Google Maps, horaires, avis, WhatsApp Business, mobile d'abord parce que c'est là que tout se passe.",
        ],
      },
      {
        type: "liste",
        titre: "Ce qui est compris, pour une PME au Maroc.",
        items: [
          { titre: "Site sur mesure, en français", texte: "Design propre à votre entreprise, textes rédigés par nous à partir d'un entretien. Version arabe ou anglaise sur devis, avec une structure prévue pour l'accueillir." },
          { titre: "Référencement sur Google.ma", texte: "Mots-clés par ville et par service, balises, données structurées, Search Console. Détail sur notre page [agence SEO au Maroc](/maroc/agence-seo-maroc/)." },
          { titre: "Fiche Google Maps", texte: "Création ou reprise en main, catégories, photos, horaires, réponses aux avis. Pour une PME marocaine, c'est souvent la première source de clients." },
          { titre: "WhatsApp au centre", texte: "Bouton WhatsApp sur chaque page, messages du site et de WhatsApp réunis, confirmations et rappels automatiques de rendez-vous." },
          { titre: "Rapidité réelle", texte: "Site statique, images optimisées : il s'ouvre vite même en 4G moyenne, ce qui compte plus au Maroc qu'ailleurs." },
          { titre: "Support douze mois, suivi six mois", texte: "Corrections, mises à jour, positions Google suivies chaque mois. Le site, le domaine (.ma ou .com) et les comptes sont à votre nom." },
        ],
      },
      {
        type: "cartes",
        titre: "Casablanca, et les autres villes.",
        intro: "Nous travaillons à distance avec des PME de tout le Maroc. Le référencement local se fait ville par ville.",
        items: [
          { titre: "Casablanca", texte: "Notre base. PME de services, cabinets, commerces, industrie : les recherches locales y sont les plus concurrentielles du pays, et les plus rentables." },
          { titre: "Rabat et Kénitra", texte: "Administrations, cabinets, prestataires B2B : des recherches précises, une concurrence en ligne encore faible sur beaucoup de métiers." },
          { titre: "Tanger, Marrakech, Agadir, Fès", texte: "Tourisme, immobilier, artisanat, services : des marchés où le multilingue et les avis Google pèsent lourd. Nous adaptons la structure du site en conséquence." },
        ],
      },
      {
        type: "packs",
        titre: "Les mêmes formules qu'en France.",
        intro: "Prix en euros, facturés par ANVSLAB LLC ; équivalent en dirhams indiqué sur le devis au taux du jour. Support douze mois et accompagnement six mois compris. Ensuite, poursuivre est un abonnement dès 100 € par mois, sans engagement.",
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte la création d'un site internet au Maroc ?", a: "Sur le marché marocain, les offres publiques pour un site vitrine de PME vont de quelques milliers de dirhams pour un modèle installé à plusieurs dizaines de milliers pour une agence. Chez ANVSLAB, un site sur mesure avec textes, référencement et fiche Google coûte 799 € tout compris, soit l'équivalent en dirhams indiqué sur le devis ; les packs Équilibre et Intense sont à 1 499 et 2 999 €." },
          { q: "Avez-vous des bureaux à Casablanca ?", a: "Notre équipe travaille depuis Casablanca ; les rendez-vous se font en visioconférence ou sur place à Casablanca selon le projet. ANVSLAB est une société de droit américain (Wyoming) en cours de constitution, qui facture en euros." },
          { q: "Le site peut-il être en français et en arabe ?", a: "Oui. Le pack comprend le site en français ; la version arabe (ou anglaise) est chiffrée sur devis, et la structure du site est prévue dès le départ pour l'accueillir sans refonte." },
          { q: "Travaillez-vous avec des PME hors de Casablanca ?", a: "Oui, dans tout le Maroc, à distance. Le référencement est travaillé pour votre ville et votre zone de chalandise, avec la fiche Google Maps correspondante." },
        ],
      },
      {
        type: "cta",
        titre: "Parlons de votre site, depuis Casablanca.",
        texte: "Quinze minutes en visio ou sur place, un audit gratuit de votre présence en ligne, une recommandation écrite avec son prix en dirhams.",
      },
    ],
    liens: [
      { label: "Agence SEO au Maroc", href: "/maroc/agence-seo-maroc/" },
      { label: "Création de site internet : la méthode", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Sites par métier", href: "/secteurs/" },
    ],
  },

  {
    slug: "/maroc/agence-seo-maroc/",
    type: "maroc",
    titre: "Agence SEO au Maroc : référencement naturel sur Google.ma pour PME",
    description:
      "Référencement naturel pour les PME marocaines : mots-clés par ville, fiche Google Maps, contenus en français, suivi mensuel des positions sur Google.ma. Casablanca, Rabat, Tanger, Marrakech, Agadir.",
    motCle: "agence seo maroc",
    kicker: "Maroc · Référencement naturel",
    h1: "Être trouvé sur Google.ma par les clients de votre ville.",
    lede: "Au Maroc, la plupart des PME n'ont pas encore de vrai travail de référencement : c'est une chance pour celles qui s'y mettent maintenant. Nous ciblons les recherches de votre métier et de votre ville, nous écrivons les pages qui y répondent, et nous vous envoyons les positions chaque mois.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Référencement naturel au Maroc",
        texte: "faire apparaître un site dans les résultats non payants de Google.ma sur les recherches des clients marocains : métier + ville, services, prix, questions. Les leviers sont ceux du SEO classique (structure, contenus, fiche Google Maps, liens), avec deux spécificités : des recherches souvent bilingues français-arabe, et une concurrence en ligne encore faible sur de nombreux métiers.",
      },
      {
        type: "texte",
        titre: "Pourquoi le moment est bon.",
        paragraphes: [
          "Sur beaucoup de recherches locales marocaines (« cabinet comptable rabat », « menuisier aluminium casablanca », « architecte d'intérieur marrakech »), la première page de Google est occupée par des annuaires, des pages Facebook et des sites anciens. Une PME avec un site rapide, des pages claires par service et une fiche Google soignée peut s'y installer en quelques mois.",
          "La méthode est celle de notre page [référencement naturel](/services/seo/) : une liste de vingt à cinquante recherches définie ensemble et écrite dans la proposition, un socle technique propre, des contenus qui répondent, une fiche Maps travaillée, un rapport mensuel. L'objectif top 10 sur cette liste est inscrit dans la proposition.",
          "Nous ajoutons ce qui est propre au Maroc : le choix des mots entre français et arabe selon les recherches réelles, la place de WhatsApp dans la prise de contact, et la fiche Google Maps comme premier point d'entrée, bien avant le site lui-même pour beaucoup de métiers.",
        ],
      },
      {
        type: "liste",
        titre: "Ce que nous faisons pour votre référencement au Maroc.",
        items: [
          { titre: "Recherche de mots-clés ville par ville", texte: "Casablanca, Rabat, Tanger, Marrakech, Agadir, Fès, Kénitra, Oujda : les recherches réelles de votre métier, en français et en arabe, classées par intention." },
          { titre: "Fiche Google Maps", texte: "Catégories, description, photos, horaires, questions-réponses, collecte et réponse aux avis. Décisive sur mobile." },
          { titre: "Pages par service et par ville", texte: "Quand c'est justifié par les recherches, une page par ville desservie, avec un contenu réel, pas un texte dupliqué." },
          { titre: "Socle technique", texte: "Vitesse sur réseau mobile, balises, données structurées, Search Console, indexation. Compris dans toute création de site." },
          { titre: "Autorité locale", texte: "Annuaires professionnels marocains, chambres et fédérations, partenaires, presse régionale. Jamais de liens achetés." },
          { titre: "Suivi mensuel", texte: "Positions sur Google.ma, visites, appels et messages WhatsApp d'origine organique : un rapport commenté chaque mois." },
        ],
      },
      {
        type: "tableau",
        titre: "Référencement au Maroc : ce que l'on trouve, et ce que nous proposons.",
        colonnes: ["", "Offres courantes au Maroc", "ANVSLAB"],
        lignes: [
          ["Format", "Forfait mensuel, souvent avec engagement", "Compris six mois dans la création du site, puis dès 100 € / mois sans engagement"],
          ["Mots-clés", "Rarement écrits dans le contrat", "Liste convenue et écrite dans la proposition, objectif top 10"],
          ["Contenus", "Souvent en option", "Rédigés par nous, en français ; arabe sur devis"],
          ["Mesure", "Rapport d'outil", "Positions + appels et messages WhatsApp obtenus"],
          ["Liens", "Parfois achetés", "Jamais"],
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte le référencement naturel au Maroc ?", a: "Les agences marocaines proposent le plus souvent des forfaits mensuels de quelques milliers de dirhams, avec engagement. Chez ANVSLAB, le référencement est compris dans la création du site (799, 1 499 ou 2 999 €) avec six mois d'accompagnement, puis se poursuit dès 100 € par mois, sans engagement. Devis en dirhams sur demande." },
          { q: "Faut-il un site en arabe pour être référencé au Maroc ?", a: "Cela dépend de votre métier et de vos clients. Pour beaucoup de PME de services et B2B, les recherches se font en français ; pour les commerces et services grand public, une part croissante se fait en arabe. L'audit gratuit regarde les recherches réelles et tranche." },
          { q: "En combien de temps voit-on des résultats sur Google.ma ?", a: "Sur des recherches métier + ville à concurrence faible, les premiers mouvements apparaissent en deux à trois mois. Sur Casablanca et les métiers concurrentiels, comptez quatre à six mois de contenus et de travail sur la fiche Google." },
          { q: "Travaillez-vous avec des entreprises hors de Casablanca ?", a: "Oui, dans tout le Maroc, à distance, en visioconférence. Le travail de référencement est local par nature : il vise votre ville et votre zone." },
        ],
      },
      {
        type: "cta",
        titre: "Commencez par l'audit, il est gratuit.",
        texte: "Vos positions actuelles sur Google.ma, votre fiche Maps, les recherches à viser : un document clair, puis quinze minutes pour en parler.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Agence web à Casablanca", href: "/maroc/agence-web-casablanca/" },
      { label: "Référencement naturel : la méthode", href: "/services/seo/" },
      { label: "Audit SEO gratuit", href: "/services/seo/audit-seo-gratuit/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
    ],
  },
];
