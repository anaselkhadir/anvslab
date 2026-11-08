import type { Page } from "./types";

const MAJ = "2026-11-08";

/* Sous-pages services de priorité 2 : une intention transactionnelle précise chacune. */
export const servicesP2: Page[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/services/seo/seo-local/",
    type: "service",
    titre: "SEO local et fiche Google : être trouvé par les clients de votre ville",
    description:
      "Référencement local pour PME, artisans, cabinets et commerces : fiche d'établissement Google optimisée, avis, pages par ville, cohérence des annuaires. Compris dans les trois packs.",
    motCle: "seo local",
    kicker: "SEO local",
    h1: "Apparaître quand un client cherche « près de moi ».",
    lede: "Pour un artisan, un cabinet, un restaurant ou un commerce, la plupart des clients viennent d'une recherche locale : le métier et la ville, ou « près de moi ». Ces recherches affichent d'abord la carte et trois fiches. Le SEO local consiste à être l'une de ces trois, puis à confirmer sur le site.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "SEO local (référencement local)",
        texte: "ensemble des actions qui font apparaître une entreprise sur les recherches de proximité : nom de ville, quartier, « près de moi ». Il repose sur la fiche d'établissement Google (ex-Google My Business), les avis, la cohérence du nom, de l'adresse et du téléphone sur tous les annuaires, et des pages du site dédiées aux zones desservies. Il est décisif pour les métiers de terrain et de proximité.",
      },
      {
        type: "texte",
        titre: "Pourquoi la fiche Google compte autant.",
        paragraphes: [
          "Sur une recherche locale, Google affiche en haut un bloc carte avec trois établissements : c'est le « pack local », et il capte l'essentiel des clics et des appels. Y figurer dépend de trois facteurs : la pertinence (la fiche dit exactement ce que vous faites), la distance (par rapport au chercheur) et la notoriété (avis, mentions, cohérence des informations). Le site vient ensuite confirmer et convertir.",
          "La fiche d'établissement est gratuite, et pourtant la plupart sont incomplètes : catégorie approximative, pas de description, trois photos, horaires faux, avis sans réponse. La remettre en état est l'action la plus rentable du référencement d'une PME locale, et elle est comprise dans toute création de site chez ANVSLAB.",
        ],
      },
      {
        type: "liste",
        titre: "Ce que nous faisons pour votre référencement local.",
        items: [
          { titre: "Fiche d'établissement Google", texte: "Création ou reprise en main, catégorie principale et secondaires exactes, description, services, zone desservie, horaires (jours fériés compris), photos, attributs, questions-réponses." },
          { titre: "Avis", texte: "Demande automatique après chaque prestation ou rendez-vous, lien direct, réponse à chaque avis dans votre ton. Les avis récents et réguliers pèsent plus que le nombre total." },
          { titre: "Cohérence nom-adresse-téléphone", texte: "Les mêmes informations, au caractère près, sur la fiche, le site, les annuaires (Pages Jaunes, annuaires professionnels), les réseaux. Les incohérences coûtent des positions." },
          { titre: "Pages locales sur le site", texte: "Une page par ville ou zone réellement desservie, avec un contenu propre : interventions, délais, exemples. Jamais une page dupliquée avec un nom de ville changé." },
          { titre: "Données structurées locales", texte: "Adresse, horaires, zone, coordonnées, type d'établissement : décrits dans le code du site pour que Google et les IA les lisent sans interprétation." },
          { titre: "Suivi", texte: "Positions dans le pack local sur vos recherches, appels et itinéraires depuis la fiche, avis reçus : dans le rapport mensuel." },
        ],
      },
      {
        type: "cartes",
        titre: "Les métiers où le local décide de tout.",
        items: [
          { titre: "Artisans et dépannage", texte: "Plombier, électricien, serrurier, chauffagiste : « métier + commune » et urgence. La fiche amène l'appel. Voir [site internet pour artisan](/secteurs/artisan/)." },
          { titre: "Santé et cabinets", texte: "Dentistes, kinés, avocats, experts-comptables : la carte et les avis font le premier tri. Voir [cabinet dentaire](/secteurs/cabinet-dentaire/) et [avocat](/secteurs/avocat/)." },
          { titre: "Restaurants et commerces", texte: "La fiche est consultée debout, devant la porte : horaires, photos, avis, menu. Voir [restaurant](/secteurs/restaurant/)." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Qu'est-ce que le SEO local, en une phrase ?", a: "C'est le travail qui fait apparaître une entreprise sur les recherches de proximité (ville, quartier, « près de moi »), principalement via la fiche d'établissement Google, les avis et des pages locales sur le site." },
          { q: "La fiche Google My Business est-elle gratuite ?", a: "Oui, entièrement. Elle s'appelle aujourd'hui « fiche d'établissement Google ». Ce qui coûte, c'est le temps de la compléter correctement et de l'entretenir : photos, horaires, avis, publications. Nous le faisons dans le cadre des trois packs." },
          { q: "Faut-il une page par ville sur le site ?", a: "Seulement pour les villes réellement desservies, et avec un contenu réel pour chacune. Des pages dupliquées avec un nom de ville changé sont ignorées par Google et nuisent au reste du site." },
          { q: "Comment obtenir plus d'avis Google ?", a: "En les demandant systématiquement, au bon moment (juste après la prestation), avec un lien direct, par message. Un flux régulier d'avis sincères vaut mieux qu'une campagne ponctuelle. Nous automatisons la demande dans les trois packs." },
        ],
      },
      {
        type: "cta",
        titre: "Où est votre fiche sur les recherches de votre ville ?",
        texte: "L'audit gratuit regarde votre fiche, vos avis, vos concurrents du pack local et ce qu'il faut corriger en premier.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Audit SEO gratuit", href: "/services/seo/audit-seo-gratuit/" },
      { label: "Pourquoi mon site n'apparaît pas sur Google ?", href: "/guides/site-invisible-google/" },
      { label: "Sites par métier", href: "/secteurs/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/refonte/",
    type: "service",
    titre: "Refonte de site internet pour PME : plus rapide, plus clair, sans perdre Google",
    description:
      "Refonte de site internet pour PME : inventaire de l'existant, nouvelle architecture, design sur mesure, redirections, contenus consolidés. Même prix que la création : 799, 1 499 ou 2 999 €.",
    motCle: "refonte site internet",
    kicker: "Refonte de site internet",
    h1: "Refaire le site sans perdre ce qu'il a acquis.",
    lede: "Votre site existe, il a des positions, des liens, des habitudes. Il est aussi lent, daté, ou il n'amène plus rien. Nous le reconstruisons en conservant ce qui rapporte et en corrigeant ce qui freine, avec un plan de redirections qui protège vos positions Google.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Refonte de site internet",
        texte: "reconstruction d'un site existant : design, structure, contenus et technique, en conservant les positions Google, les liens entrants et les adresses connues grâce à un inventaire préalable et à un plan de redirections. Chez ANVSLAB, la refonte est au même prix que la création et comprend la consolidation des contenus qui rankent.",
      },
      {
        type: "texte",
        titre: "Ce qui distingue une refonte d'une création.",
        paragraphes: [
          "Un site existant a une histoire : des pages que Google connaît, des liens depuis d'autres sites, des adresses imprimées sur des cartes de visite. Une refonte qui ignore cette histoire repart de zéro, et perd souvent en quelques semaines ce que le site avait mis des années à acquérir.",
          "Nous commençons donc par l'inventaire : quelles pages rapportent, quelles adresses reçoivent des liens, quels contenus rankent. Puis nous dessinons la nouvelle architecture en donnant une destination à chaque ancienne page, nous consolidons les textes qui fonctionnent, nous ajoutons ceux qui manquent, et nous redirigeons tout. La méthode est détaillée dans notre guide sur la [refonte de site](/guides/refonte-site-internet/).",
        ],
      },
      {
        type: "etapes",
        titre: "La refonte en six étapes.",
        items: [
          { titre: "Audit et inventaire", texte: "Positions, trafic, liens entrants, vitesse, erreurs, contenus : ce que le site a et ce qui le freine. Gratuit, avant toute proposition." },
          { titre: "Nouvelle architecture", texte: "Une page par intention, pages inutiles fusionnées, pages manquantes (métier, ville, guides) ajoutées. Chaque ancienne adresse a sa destination." },
          { titre: "Contenus consolidés", texte: "Les textes qui rankent sont conservés et enrichis ; les autres sont réécrits. Nous rédigeons, vous validez." },
          { titre: "Design sur mesure", texte: "Nouvelle identité ou prolongement de l'existante, mobile d'abord, vitesse mesurée. Voir [web design](/services/web-design/)." },
          { titre: "Développement et redirections", texte: "Site statique rapide, données structurées, plan de redirections 301 complet, plan du site, Search Console." },
          { titre: "Bascule et surveillance", texte: "Mise en ligne, surveillance quotidienne des erreurs et des positions pendant un mois, puis suivi mensuel six mois." },
        ],
      },
      { type: "packs", titre: "La refonte au prix de la création.", intro: "Inventaire, redirections et consolidation compris. Support douze mois, accompagnement six mois. Ensuite, dès 100 € par mois sans engagement." },
      {
        type: "faq",
        items: [
          { q: "Combien coûte la refonte d'un site internet ?", a: "Chez ANVSLAB, le même prix que la création : 799, 1 499 ou 2 999 € selon le pack, inventaire et redirections compris. Sur le marché, une refonte coûte en général entre 60 et 100 % du prix d'un site neuf." },
          { q: "Vais-je perdre mes positions Google ?", a: "Non si la refonte est faite avec un inventaire et un plan de redirections complet, ce qui est notre méthode. Une baisse de quelques jours au moment de la bascule est normale ; les positions reviennent puis s'améliorent avec la nouvelle structure." },
          { q: "Peut-on garder mon design actuel et ne refaire que la technique ?", a: "Oui, si le design tient la route sur mobile. L'audit le dit. Dans la plupart des cas, un site lent est lent à cause de son thème, et le design est refait en même temps." },
          { q: "Combien de temps dure une refonte ?", a: "Quatre à six semaines pour un site de 10 à 20 pages, de l'audit à la bascule, selon les délais de validation des textes." },
        ],
      },
      {
        type: "cta",
        titre: "Faites mesurer ce que votre site vaut avant de le refaire.",
        texte: "L'audit gratuit dit ce qu'il faut garder, ce qu'il faut corriger et s'il faut vraiment tout refaire.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Refonte : quand, pourquoi, Core Web Vitals", href: "/guides/refonte-site-internet/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Web design", href: "/services/web-design/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/site-vitrine/",
    type: "service",
    titre: "Site vitrine pour PME : 5 à 12 pages qui amènent des demandes",
    description:
      "Création de site vitrine sur mesure pour PME et indépendants : pages par service, textes rédigés, référencement, fiche Google, prise de contact. 799 € tout compris, support douze mois.",
    motCle: "site vitrine",
    kicker: "Site vitrine",
    h1: "Un site vitrine qui travaille, pas qui décore.",
    lede: "Le site vitrine est le besoin de la plupart des PME de services : présenter ce que vous faites, pour qui, à quel prix, et obtenir des demandes. Nous le concevons sur mesure, avec les textes et le référencement compris, pour 799 €.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Site vitrine",
        texte: "site internet qui présente une entreprise et ses services pour obtenir des demandes de contact, de devis ou de rendez-vous, sans vente en ligne. Il compte généralement de cinq à douze pages. Un site vitrine efficace consacre une page à chaque service important, affiche ses prix ou ses fourchettes, montre ses preuves et mène à une seule action.",
      },
      {
        type: "liste",
        titre: "Les pages d'un site vitrine qui convertit.",
        items: [
          { titre: "Accueil", texte: "Ce que vous faites, pour qui, pourquoi vous, et l'action. En trois secondes." },
          { titre: "Une page par service", texte: "Déroulé, délais, prix ou fourchette, questions fréquentes, appel à l'action. C'est ce qui se référence et ce qui convainc." },
          { titre: "Réalisations ou preuves", texte: "Photos, avis, chiffres, qualifications : là où le doute apparaît." },
          { titre: "À propos", texte: "Qui vous êtes, avec des visages. On achète à des personnes." },
          { titre: "Contact et rendez-vous", texte: "Formulaire court, téléphone cliquable, WhatsApp, prise de rendez-vous avec confirmation et rappel." },
          { titre: "Pages métier ou ville", texte: "Quand les recherches le justifient : dans le pack Équilibre." },
        ],
      },
      {
        type: "tableau",
        titre: "Site vitrine : les options du marché.",
        colonnes: ["", "Constructeur (soi-même)", "Freelance (thème)", "ANVSLAB (sur mesure)"],
        lignes: [
          ["Prix", "0 à 40 € / mois + votre temps", "250 à 2 500 €", "799 € tout compris"],
          ["Textes", "À vous", "Souvent à vous", "Rédigés par nous"],
          ["Design", "Modèle", "Thème personnalisé", "Sur mesure"],
          ["Référencement", "Limité", "Variable", "Compris, avec fiche Google"],
          ["Vitesse mobile", "Moyenne", "Dépend du thème", "Mesurée, site statique"],
          ["Propriété", "Dépend de la plateforme", "Généralement oui", "Totale : code, domaine, comptes"],
          ["Suivi", "Aucun", "Rarement", "Support 12 mois, suivi 6 mois"],
        ],
      },
      { type: "packs", titre: "Le site vitrine dans les trois formules.", intro: "Le pack Initial est le site vitrine complet. Équilibre ajoute les pages par service et par ville, les réseaux raccordés et le tableau de bord ; Intense le programme de contenus et la visibilité dans les IA." },
      {
        type: "faq",
        items: [
          { q: "Quelle différence entre site vitrine et site e-commerce ?", a: "Le site vitrine présente et amène des demandes ; le site e-commerce vend en ligne avec catalogue, panier, paiement et livraison. Le second demande un périmètre et des coûts récurrents d'une autre nature. Voir notre page site e-commerce." },
          { q: "Combien coûte un site vitrine ?", a: "799 € tout compris chez ANVSLAB : design sur mesure, textes, référencement, fiche Google, support douze mois. Sur le marché, de 250 € (thème sans textes) à plus de 5 000 € (agence). Le détail dans notre guide sur le prix d'un site internet." },
          { q: "Combien de pages pour un site vitrine ?", a: "Entre cinq et douze au départ : accueil, une par service principal, preuves, à-propos, contact. Puis des pages métier, ville et guides au fil du référencement." },
          { q: "Puis-je modifier mon site vitrine moi-même ?", a: "Oui pour les contenus courants (textes, horaires, photos, actualités), avec une courte prise en main. Les évolutions de structure sont comprises dans le support pendant douze mois." },
        ],
      },
      {
        type: "cta",
        titre: "Votre site vitrine en quatre semaines.",
        texte: "Quinze minutes pour comprendre votre activité, un plan de site, un prix. Sans engagement.",
      },
    ],
    liens: [
      { label: "Création de site internet pour PME", href: "/services/creation-site-internet/" },
      { label: "Pourquoi créer un site internet ?", href: "/guides/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Site e-commerce", href: "/services/creation-site-internet/site-e-commerce/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/landing-page/",
    type: "service",
    titre: "Landing page qui convertit : une page, une offre, une action",
    description:
      "Création de landing page pour PME : une page conçue pour une campagne ou une offre, un message, une action, mesurée. Rédaction, design, formulaire, suivi des conversions.",
    motCle: "landing page",
    kicker: "Landing page",
    h1: "Une page, une offre, une action.",
    lede: "Une landing page est une page d'atterrissage : celle où arrive un visiteur depuis une publicité, un e-mail ou un lien, et qui n'a qu'un but, le faire agir. Pas de menu, pas de détour, un message et un formulaire. Nous la concevons, la rédigeons et la mesurons.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Landing page (page d'atterrissage)",
        texte: "page web autonome conçue pour une source de trafic précise (publicité, e-mail, réseau social) et une seule action (demande de devis, inscription, rendez-vous, téléchargement). Elle se distingue d'une page de site par l'absence de navigation, un message unique aligné sur la campagne, et une mesure du taux de conversion. Une bonne landing page convertit deux à cinq fois mieux qu'un accueil générique.",
      },
      {
        type: "texte",
        titre: "Quand une landing page s'impose.",
        paragraphes: [
          "Quand vous payez pour du trafic (Google Ads, Meta, LinkedIn), chaque clic a un coût ; envoyer ce clic vers un accueil qui parle de tout fait perdre la moitié des visiteurs. Une landing page alignée sur l'annonce (même promesse, même vocabulaire, même offre) garde le fil et convertit.",
          "Elle sert aussi à lancer une offre (ouverture, promotion, nouveau service), à tester un marché avant de construire plus, ou à recruter des inscrits pour un événement. Dans tous les cas, elle se mesure : visiteurs, conversions, coût par conversion.",
          "Elle ne remplace pas le site. Le site se référence et répond à toutes les questions ; la landing page concentre une campagne. Les deux se complètent, et la landing page vit souvent sur le même domaine, hors du menu.",
        ],
      },
      {
        type: "liste",
        titre: "Anatomie d'une landing page qui convertit.",
        items: [
          { titre: "Titre aligné sur la source", texte: "Le visiteur doit retrouver en une seconde la promesse de l'annonce ou de l'e-mail qui l'a amené." },
          { titre: "Bénéfice, puis preuve", texte: "Ce qu'il gagne, en une phrase ; puis les avis, chiffres, logos ou photos qui le rendent crédible." },
          { titre: "Une seule action", texte: "Un formulaire court (trois à cinq champs) ou un bouton, répété deux ou trois fois sur la page. Rien d'autre à cliquer." },
          { titre: "Objections traitées", texte: "Prix, délai, engagement, « et si » : trois à cinq questions-réponses juste avant l'action finale." },
          { titre: "Vitesse", texte: "Une landing page lente perd des clics payés. Statique, images optimisées, pas de script inutile." },
          { titre: "Mesure", texte: "Suivi des conversions branché sur la campagne : vous savez ce que chaque euro produit." },
        ],
      },
      {
        type: "texte",
        titre: "Prix et cadre.",
        paragraphes: [
          "Une landing page seule (rédaction, design, développement, mesure) est chiffrée après un court échange sur la campagne qu'elle sert. Elle s'inscrit le plus souvent dans le pack Équilibre, qui comprend les campagnes d'acquisition pilotées : la page et la campagne sont conçues ensemble, ce qui est la condition pour qu'elles fonctionnent.",
          "Si vous avez déjà un site ANVSLAB, la landing page reprend son design et vit sur votre domaine ; sinon, elle peut être le premier pas, à condition de ne pas la confondre avec un site : elle ne se référence pas et ne répond qu'à une question.",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "C'est quoi une landing page, avec un exemple ?", a: "Une page unique vers laquelle on envoie du trafic pour une action précise. Exemple : une annonce Google « Audit SEO gratuit pour PME » mène à une page qui reprend cette promesse, montre trois avis, explique ce que contient l'audit, et propose un formulaire de trois champs. Rien d'autre." },
          { q: "Quelle différence entre landing page et site vitrine ?", a: "Le site vitrine présente toute l'entreprise, se référence sur Google et répond à toutes les questions ; la landing page concentre une campagne sur une action, sans navigation, et ne se référence pas. L'un construit, l'autre convertit un trafic payé ou envoyé." },
          { q: "Combien coûte une landing page ?", a: "Elle est chiffrée après un échange sur la campagne qu'elle sert, et s'inscrit le plus souvent dans le pack Équilibre à 1 499 € avec les campagnes pilotées. Sur le marché, une landing page seule se facture de quelques centaines à quelques milliers d'euros selon la rédaction et le design." },
          { q: "Peut-on faire une landing page sans site ?", a: "Techniquement oui, et c'est utile pour tester une offre. Mais elle ne se référence pas et ne construit rien dans la durée : prévoyez le site ensuite." },
        ],
      },
      {
        type: "cta",
        titre: "Vous payez du trafic ? Vérifions où il atterrit.",
        texte: "Quinze minutes pour regarder votre campagne et la page qui la reçoit, et dire ce qu'une vraie landing page changerait.",
      },
    ],
    liens: [
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Site vitrine", href: "/services/creation-site-internet/site-vitrine/" },
      { label: "Web design", href: "/services/web-design/" },
      { label: "Le pack Équilibre", href: "/#tarifs" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/site-e-commerce/",
    type: "service",
    titre: "Site e-commerce pour PME : vendre en ligne sans se faire vendre une usine",
    description:
      "Création de site e-commerce pour PME et commerçants : choix de la plateforme (Shopify ou sur mesure), catalogue, paiement, livraison, référencement produit. Périmètre calé après audit.",
    motCle: "agence web e-commerce",
    kicker: "Site e-commerce",
    h1: "Vendre en ligne, à la mesure de votre boutique.",
    lede: "Un site marchand n'est pas un site vitrine avec un panier : c'est un catalogue, des paiements, une logistique, des fiches produit qui se référencent et un parcours d'achat sans friction. Nous dimensionnons le projet à votre boutique, pas à l'inverse, et nous choisissons la plateforme en conséquence.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Site e-commerce",
        texte: "site internet qui permet d'acheter en ligne : catalogue de produits, fiches, panier, paiement sécurisé, gestion des commandes et de la livraison, compte client. Il repose soit sur une plateforme dédiée (Shopify, WooCommerce, PrestaShop) soit sur un développement sur mesure. Le choix dépend du nombre de produits, des besoins de personnalisation et du budget récurrent acceptable.",
      },
      {
        type: "tableau",
        titre: "Shopify, WooCommerce ou sur mesure ?",
        colonnes: ["", "Shopify", "WooCommerce (WordPress)", "Sur mesure"],
        lignes: [
          ["Pour qui", "Commerçants et PME qui veulent vendre vite et bien", "Boutiques qui ont déjà WordPress et des besoins spécifiques", "Catalogues complexes, B2B, intégrations métier"],
          ["Coût de départ", "Modéré", "Modéré à élevé selon les extensions", "Élevé"],
          ["Coût récurrent", "Abonnement + commissions", "Hébergement, maintenance, extensions", "Hébergement, évolutions"],
          ["Maintenance", "Prise en charge par la plateforme", "À votre charge (sécurité, mises à jour)", "À prévoir"],
          ["Design", "Thème personnalisé ou sur mesure", "Thème personnalisé", "Libre"],
          ["Référencement", "Bon, avec du travail sur les fiches", "Bon, avec du travail", "Libre, dépend de la construction"],
          ["Notre recommandation", "Le choix par défaut pour une PME", "Si WordPress est déjà là", "Quand les deux autres bloquent"],
        ],
      },
      {
        type: "liste",
        titre: "Ce qui fait vendre un site e-commerce.",
        items: [
          { titre: "Des fiches produit qui répondent", texte: "Photos nettes sous plusieurs angles, description qui lève les doutes (matière, taille, usage, entretien), prix, délai de livraison, avis. Chaque fiche est une page qui se référence." },
          { titre: "Un parcours sans friction", texte: "Panier visible, paiement en une page, création de compte facultative, moyens de paiement attendus, frais de livraison annoncés avant le paiement." },
          { titre: "La confiance", texte: "Avis vérifiés, politique de retour claire, contact visible, mentions légales complètes, paiement sécurisé affiché." },
          { titre: "La vitesse", texte: "Les boutiques lentes perdent des paniers. Images optimisées, applications limitées, mesure sur mobile." },
          { titre: "Le référencement produit", texte: "Catégories pensées comme des recherches, fiches uniques, données structurées produit (prix, stock, avis) pour les résultats enrichis de Google." },
          { titre: "La relance", texte: "Paniers abandonnés, avis après livraison, réachat : des messages automatiques qui font une part réelle du chiffre." },
        ],
      },
      {
        type: "texte",
        titre: "Prix et périmètre.",
        paragraphes: [
          "Un site e-commerce se chiffre après audit, parce que tout dépend du catalogue (dix produits ou mille), des variantes, des moyens de paiement, de la logistique et des intégrations (stock, comptabilité, transporteurs). Il s'inscrit le plus souvent dans le pack Intense, ou sur devis séparé pour les projets plus larges.",
          "Sur le marché, une boutique sérieuse coûte de 3 000 à 15 000 € et plus, auxquels s'ajoutent les coûts récurrents de la plateforme. Notre guide sur le [prix d'un site internet](/guides/prix-site-internet-pme/) situe ces ordres de grandeur. Nous vous dirons aussi, le cas échéant, qu'une boutique n'est pas le bon premier pas et qu'un [site vitrine](/services/creation-site-internet/site-vitrine/) avec prise de commande par message suffit pour commencer.",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte un site e-commerce ?", a: "Chez ANVSLAB, le périmètre est calé après audit, le plus souvent dans le pack Intense à 2 999 € ou sur devis pour les catalogues larges. Sur le marché, une boutique sérieuse coûte de 3 000 à 15 000 € et plus, plus les coûts récurrents de la plateforme (abonnement, commissions, extensions)." },
          { q: "Shopify ou site sur mesure ?", a: "Shopify pour la grande majorité des PME : fiable, maintenu, rapide à lancer, bon pour le référencement avec du travail sur les fiches. Le sur mesure se justifie pour des catalogues complexes, du B2B avec tarifs négociés ou des intégrations métier lourdes." },
          { q: "Peut-on commencer par vendre sans boutique en ligne ?", a: "Oui : un site vitrine avec des pages produit et une prise de commande par formulaire ou WhatsApp suffit pour tester la demande. C'est souvent ce que nous recommandons avant d'investir dans une boutique complète." },
          { q: "Le référencement d'une boutique est-il différent ?", a: "Les principes sont les mêmes, appliqués à des centaines de pages : catégories pensées comme des recherches, fiches uniques et complètes, données structurées produit, vitesse. Le volume de travail est plus grand, d'où l'importance de bien structurer dès le départ." },
        ],
      },
      {
        type: "cta",
        titre: "Parlons de ce que vous vendez.",
        texte: "Quinze minutes pour comprendre votre catalogue et vos clients, puis une recommandation honnête : boutique, vitrine avec commande, ou attendre.",
      },
    ],
    liens: [
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Site vitrine", href: "/services/creation-site-internet/site-vitrine/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Référencement naturel", href: "/services/seo/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/application-sur-mesure/",
    type: "service",
    titre: "Application web sur mesure pour PME : quand le logiciel du marché ne suffit plus",
    description:
      "Développement d'applications web sur mesure pour PME : espace client, portail, outil métier, CRM ou ERP adapté, intégrations et API. Le code vous appartient. Chiffré sur cahier des charges.",
    motCle: "application web sur mesure",
    kicker: "Application web sur mesure",
    h1: "Quand le logiciel du marché ne suffit plus, nous construisons le vôtre.",
    lede: "Un espace client, un portail de commandes, un outil de planning, un CRM qui suit votre façon de vendre : à un moment, les logiciels génériques coûtent plus en contournements qu'un outil fait pour vous. Nous le concevons et le développons. Le code, les données et les comptes vous appartiennent.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Application web sur mesure",
        texte: "logiciel accessible depuis un navigateur, conçu et développé pour les besoins précis d'une entreprise : processus, données, utilisateurs, intégrations. Contrairement à un site, elle sert à faire (gérer, commander, planifier, suivre) plutôt qu'à informer. Elle se chiffre sur cahier des charges, au périmètre, et son code appartient au client.",
      },
      {
        type: "texte",
        titre: "Le bon moment pour un outil sur mesure.",
        paragraphes: [
          "Le signe le plus fiable : vos équipes travaillent dans des tableurs partagés, des fils WhatsApp et trois logiciels qui ne se parlent pas, et quelqu'un passe ses journées à ressaisir. Ou bien le logiciel du marché fait 80 % du travail, et les 20 % restants vous coûtent chaque semaine en contournements et en erreurs.",
          "Un outil sur mesure n'est pas toujours la réponse : souvent, un logiciel existant bien paramétré et quelques automatisations suffisent, et nous le disons. Quand il l'est, nous le construisons par étapes : d'abord le cœur qui rend service dès la première semaine, puis les extensions, pour que chaque livraison soit utilisable et que le budget suive la valeur.",
        ],
      },
      {
        type: "cartes",
        titre: "Ce que nous construisons.",
        items: [
          { titre: "Espaces clients et portails", texte: "Vos clients consultent leurs dossiers, commandes, factures, documents ; ils commandent, réservent, signent. Moins d'appels, plus de service." },
          { titre: "Outils métier", texte: "Planning d'interventions, suivi de production, gestion de parc, devis complexes : l'outil qui suit votre processus, pas l'inverse." },
          { titre: "CRM adapté", texte: "Vos étapes de vente, vos relances, vos indicateurs, relié à votre site, votre téléphone et vos assistants IA." },
          { titre: "ERP léger", texte: "Commandes, stocks, facturation, achats : pour les PME que les ERP du marché écrasent par leur coût et leur complexité." },
          { titre: "Intégrations et API", texte: "Faire parler vos outils existants : comptabilité, banque, transporteurs, plateformes. Fin des ressaisies." },
          { titre: "Automatisations", texte: "Les tâches répétitives (relances, rapports, synchronisations) exécutées sans intervention, avec des [assistants IA](/services/assistant-ia-pme/) quand il faut comprendre un texte ou une demande." },
        ],
      },
      {
        type: "etapes",
        titre: "Comment nous travaillons.",
        items: [
          { titre: "Cadrage", texte: "Un atelier pour comprendre le processus, les utilisateurs, les données et les outils existants. Il en sort un périmètre, un découpage en étapes et un prix. Si un logiciel du marché suffit, nous le disons ici." },
          { titre: "Première version utile", texte: "Le cœur de l'outil, livré en quelques semaines, utilisé en conditions réelles par vos équipes. Les retours guident la suite." },
          { titre: "Extensions", texte: "Chaque étape ajoute une capacité et se paie à la livraison. Pas d'effet tunnel." },
          { titre: "Transmission", texte: "Code source, documentation, comptes et données à votre nom. Vous pouvez continuer avec nous, en interne ou avec un autre prestataire." },
        ],
      },
      {
        type: "texte",
        titre: "Prix.",
        paragraphes: [
          "Une application sur mesure se chiffre au périmètre, après cadrage, et dépasse rarement le cadre des packs du site : elle fait l'objet d'un devis séparé, par étapes. Sur le marché, un premier outil utile commence rarement sous 8 000 € ; au-delà, tout dépend du cahier des charges. Le cadrage, lui, est inclus dans l'audit gratuit : vous repartez avec un périmètre et un ordre de grandeur, quelle que soit votre décision.",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte une application web sur mesure ?", a: "Elle se chiffre au périmètre, après un cadrage compris dans l'audit gratuit. Un premier outil utile commence rarement sous 8 000 € ; nous découpons en étapes payées à la livraison pour que le budget suive la valeur." },
          { q: "Sur mesure ou logiciel du marché ?", a: "Logiciel du marché tant qu'il couvre l'essentiel de votre processus sans contournement coûteux. Sur mesure quand les contournements, les ressaisies et les limites vous coûtent chaque semaine, ou quand l'outil est au cœur de votre avantage. Le cadrage tranche, et il nous arrive de recommander le marché." },
          { q: "À qui appartient le code ?", a: "À vous, intégralement, avec la documentation, les comptes et les données. Vous pouvez poursuivre avec nous, en interne ou avec un autre prestataire." },
          { q: "Combien de temps pour une première version ?", a: "De quatre à dix semaines pour le cœur d'un outil, selon le périmètre et les intégrations. Puis des extensions par étapes." },
        ],
      },
      {
        type: "cta",
        titre: "Décrivez-nous le tableur qui vous fait perdre du temps.",
        texte: "Quinze minutes pour comprendre le processus, puis un cadrage gratuit : périmètre, étapes, ordre de grandeur. Et une réponse honnête si un logiciel du marché suffit.",
        label: "Réserver le cadrage",
      },
    ],
    liens: [
      { label: "Assistants et agents IA", href: "/services/assistant-ia-pme/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Site e-commerce", href: "/services/creation-site-internet/site-e-commerce/" },
      { label: "Les trois formules", href: "/#tarifs" },
    ],
  },
];
