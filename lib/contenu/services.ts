import type { Page } from "./types";

const MAJ = "2026-11-08";

export const services: Page[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/services/creation-site-internet/",
    type: "service",
    titre: "Création de site internet pour PME, prix tout compris",
    description:
      "Création de site internet pour PME : site sur mesure, rapide sur mobile, textes rédigés pour être trouvé, référencement Google compris. Dès 799 €, support 12 mois.",
    motCle: "création site internet pme",
    kicker: "Création de site internet",
    h1: "Un site qui fait prendre rendez-vous, pas seulement bonne figure.",
    lede: "Pour une PME, un site n'est pas une plaquette : c'est le premier commercial de l'entreprise. Nous le concevons sur mesure, nous écrivons les textes qui le font trouver sur Google, et nous mesurons une seule chose : combien de visiteurs deviennent des rendez-vous.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Création de site internet pour PME",
        texte: "conception, rédaction, développement et mise en ligne d'un site professionnel pensé pour être trouvé sur Google et convertir ses visiteurs en demandes de contact ou de rendez-vous. Chez ANVSLAB, le prix comprend les textes, le référencement de base, la fiche Google Maps et douze mois de support.",
      },
      {
        type: "texte",
        titre: "Ce qui différencie un site qui rapporte d'un site qui décore.",
        paragraphes: [
          "La plupart des sites de PME sont construits à l'envers : on choisit un modèle, on remplit les cases, on publie. Puis on s'étonne qu'il n'amène personne. Un site qui rapporte part de l'autre bout : des recherches que tapent vos futurs clients, du chemin qu'ils parcourent avant de vous appeler, et de ce qui les fait hésiter.",
          "Nous écrivons donc les textes avant de dessiner les pages. Chaque page répond à une intention précise, avec une promesse, une preuve et une seule action possible. Le design vient ensuite : sobre, rapide, lisible sur un téléphone à la lumière du jour, parce que c'est là que vos clients vous découvrent.",
          "Le résultat n'est pas un modèle personnalisé mais un site sur mesure, développé avec les mêmes technologies que les grandes plateformes, livré avec son code, ses contenus et ses accès. Il vous appartient entièrement.",
        ],
      },
      {
        type: "liste",
        titre: "Ce que comprend la création de votre site.",
        intro: "Tout ce qui suit est inclus dans le pack Initial à 799 €. Rien n'est vendu en option cachée.",
        items: [
          { titre: "Structure pensée pour la recherche", texte: "Une page par service et par intention, des titres qui reprennent les mots de vos clients, un maillage qui guide Google et le visiteur vers la prise de contact." },
          { titre: "Textes rédigés pour vous", texte: "Nous écrivons l'intégralité des contenus à partir d'un entretien et de vos documents. Vous relisez, vous ajustez, nous publions." },
          { titre: "Design sur mesure", texte: "Pas de thème acheté : une identité visuelle propre à votre entreprise, déclinée sur chaque page. Voir notre approche du [web design](/services/web-design/)." },
          { titre: "Rapidité et mobile d'abord", texte: "Site statique servi au plus près de vos visiteurs, images optimisées, aucune surcouche inutile. Les délais de chargement sont mesurés avant la mise en ligne." },
          { titre: "Référencement de base et fiche Google Maps", texte: "Balises, données structurées, plan du site, Search Console configurée, fiche d'établissement créée ou reprise en main. Le détail est sur la page [référencement naturel](/services/seo/)." },
          { titre: "Prise de contact unifiée", texte: "Les messages du site et de WhatsApp arrivent au même endroit, avec confirmations et rappels automatiques de rendez-vous." },
          { titre: "Mesure et rapport mensuel", texte: "Un rapport commenté chaque mois : visites, provenance, pages lues, rendez-vous pris. Vous savez ce que le site produit." },
          { titre: "Support douze mois", texte: "Corrections, mises à jour de sécurité, petites évolutions de contenu : compris pendant un an." },
        ],
      },
      {
        type: "etapes",
        titre: "Quatre semaines, cinq étapes.",
        intro: "Un calendrier type pour un site vitrine de 6 à 10 pages. Les sites plus ambitieux font l'objet d'un périmètre calé après audit.",
        items: [
          { titre: "Appel découverte et audit", texte: "Quinze minutes pour comprendre votre activité, puis un audit gratuit de votre présence actuelle et des recherches de vos clients." },
          { titre: "Architecture et textes", texte: "Plan du site, choix des mots-clés par page, rédaction des contenus. Vous validez les textes avant toute maquette." },
          { titre: "Design", texte: "Direction artistique, maquettes de l'accueil et d'une page type, puis déclinaison. Deux allers-retours compris." },
          { titre: "Développement et mise en ligne", texte: "Intégration, tests sur mobile, mesure des performances, données structurées, nom de domaine et certificat. Mise en ligne sur un domaine qui vous appartient." },
          { titre: "Six mois de suivi", texte: "Positions Google, trafic, rendez-vous : un point chaque mois et les ajustements qui s'imposent, compris dans le prix." },
        ],
      },
      { type: "packs" },
      {
        type: "cartes",
        titre: "Selon votre point de départ.",
        items: [
          { titre: "Vous n'avez pas de site", texte: "C'est le cas le plus simple : nous partons de vos informations, de vos photos et de votre métier. Le prix est le même." },
          { titre: "Votre site existe mais n'amène rien", texte: "Nous analysons ce qu'il a acquis (positions, liens) pour ne rien perdre, et nous reconstruisons ce qui doit l'être. Voir la [refonte de site internet](/guides/prix-site-internet-pme/)." },
          { titre: "Vous vendez en ligne", texte: "Un site marchand demande un périmètre spécifique (catalogue, paiement, logistique). Nous le calons après audit, dans le pack Intense ou sur devis." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte la création d'un site internet pour une PME ?", a: "Chez ANVSLAB, 799 € tout compris pour le pack Initial : site sur mesure, textes, référencement de base, fiche Google Maps, support douze mois et six mois de suivi. Les packs Équilibre (1 499 €) et Intense (2 999 €) ajoutent les pages par service et par ville, le tableau de bord, les campagnes et la visibilité dans les IA. Notre guide détaille les prix du marché : combien coûte un site internet pour une PME." },
          { q: "Combien de temps faut-il pour mettre un site en ligne ?", a: "Quatre semaines en moyenne pour un site vitrine de 6 à 10 pages, de l'appel découverte à la mise en ligne, à condition que les textes soient validés dans les délais convenus." },
          { q: "Le site m'appartient-il ?", a: "Oui, entièrement : code, contenus, données, nom de domaine et comptes sont à votre nom. Au terme du support de douze mois, vous continuez avec nous ou vous repartez avec l'ensemble, documentation comprise." },
          { q: "Pourquoi pas WordPress ou un constructeur de site ?", a: "Ils conviennent à beaucoup d'usages. Nous préférons un site statique sur mesure pour trois raisons : la vitesse, la sécurité (rien à mettre à jour, rien à pirater) et la liberté de design. Si votre contexte impose WordPress, nous le disons lors de l'audit." },
          { q: "Que se passe-t-il après les six mois d'accompagnement ?", a: "Le site reste en ligne et vous gardez vos positions. Poursuivre la progression du référencement est un abonnement mensuel dès 100 €, sans engagement de durée." },
        ],
      },
      {
        type: "cta",
        titre: "Parlons de votre site en quinze minutes.",
        texte: "Un premier regard sur votre présence en ligne, la formule recommandée, et vos questions. Sans engagement.",
      },
    ],
    liens: [
      { label: "Combien coûte un site internet pour une PME ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Web design", href: "/services/web-design/" },
      { label: "Sites par métier", href: "/secteurs/" },
      { label: "Être cité par les IA (GEO)", href: "/services/geo-referencement-ia/" },
      { label: "Les trois formules", href: "/#tarifs" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/seo/",
    type: "service",
    titre: "Agence SEO pour PME : référencement naturel, objectif top 10",
    description:
      "Référencement naturel pour PME : audit, mots-clés, pages, contenus, SEO local, suivi mensuel des positions. Objectif top 10 écrit dans la proposition. Compris dans les trois packs.",
    motCle: "agence seo pme",
    kicker: "Référencement naturel",
    h1: "Être trouvé par les clients qui cherchent déjà ce que vous faites.",
    lede: "Le référencement naturel, c'est se placer devant les recherches que tapent vos futurs clients, et y rester. Nous l'intégrons dès la construction du site, nous écrivons l'objectif dans la proposition, et nous vous envoyons les positions chaque mois.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Référencement naturel (SEO)",
        texte: "ensemble des actions qui font apparaître un site dans les résultats non payants de Google : choix des mots-clés, structure des pages, qualité des contenus, vitesse, liens entrants, fiche d'établissement. Pour une PME, l'enjeu est d'occuper les recherches locales et métier qui amènent des rendez-vous, pas de gagner un concours de trafic.",
      },
      {
        type: "texte",
        titre: "Notre approche : peu de mots-clés, les bons, et tenir.",
        paragraphes: [
          "Une PME n'a pas besoin de mille positions. Elle a besoin d'être en première page sur vingt à cinquante recherches précises : son métier, sa zone, ses services, les questions que posent ses clients avant d'acheter. Nous définissons cette liste avec vous, nous l'écrivons dans la proposition, et c'est sur elle que nous rendons des comptes.",
          "Le travail commence par la structure : une page par intention, des titres clairs, des données structurées, un site rapide. Puis par les contenus : pages de service, pages métier, guides qui répondent aux questions réelles. Puis par l'autorité : fiche Google, annuaires qui comptent, liens de partenaires et de clients. Les premiers effets se voient en deux à quatre mois.",
          "Depuis 2025, une partie des recherches passe par les réponses générées par l'IA, dans Google comme dans ChatGPT. Nous traitons ce volet à part, sous le nom de [GEO](/services/geo-referencement-ia/), parce que les règles ne sont pas tout à fait les mêmes.",
        ],
      },
      {
        type: "liste",
        titre: "Ce que nous faisons, concrètement.",
        items: [
          { titre: "Audit et recherche de mots-clés", texte: "État de votre site, de vos positions et de vos concurrents ; liste des recherches à viser, par volume et par intention. Vous pouvez commencer par l'[audit SEO gratuit](/services/seo/audit-seo-gratuit/)." },
          { titre: "Socle technique", texte: "Balises, canoniques, plan du site, robots, données structurées, vitesse, mobile, Search Console. Compris dans toute création de site." },
          { titre: "Pages et contenus", texte: "Une page par service, par métier, par ville quand c'est justifié ; des guides qui répondent aux questions de vos clients. Rédigés par nous, validés par vous." },
          { titre: "SEO local", texte: "Fiche d'établissement Google créée ou optimisée, avis, catégories, photos, publications ; cohérence nom-adresse-téléphone sur les annuaires." },
          { titre: "Autorité et liens", texte: "Annuaires professionnels, partenaires, fournisseurs, clients, presse locale. Jamais de liens achetés." },
          { titre: "Suivi mensuel", texte: "Positions sur la liste convenue, trafic, pages d'entrée, rendez-vous d'origine organique : un rapport commenté, un point avec votre référent." },
        ],
      },
      {
        type: "tableau",
        titre: "Trois niveaux, selon l'ambition.",
        intro: "Le référencement est compris dans les trois packs. Ce qui change, c'est la profondeur.",
        colonnes: ["", "Initial · 799 €", "Équilibre · 1 499 €", "Intense · 2 999 €"],
        lignes: [
          ["Socle technique et fiche Google", "Compris", "Compris", "Compris"],
          ["Pages par service et par ville", "Pages principales", "Compris", "Compris"],
          ["Programme de contenus", "—", "—", "Douze mois"],
          ["Visibilité dans les réponses des IA", "—", "—", "Compris"],
          ["Suivi", "Rapport mensuel", "Tableau de bord quotidien + point mensuel", "Tableau de bord avancé, tests A/B, revue trimestrielle"],
          ["Accompagnement compris", "6 mois", "6 mois", "6 mois"],
        ],
        note: "Après les six mois, la poursuite de l'accompagnement est un abonnement mensuel dès 100 €, sans engagement de durée. Le site et les positions acquises restent à vous si vous arrêtez.",
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte le référencement naturel pour une PME ?", a: "Chez ANVSLAB il est compris dans le prix du site : 799, 1 499 ou 2 999 € selon le pack, avec six mois d'accompagnement. Au-delà, dès 100 € par mois. Sur le marché, une prestation SEO seule pour une PME se facture le plus souvent entre 500 et 2 000 € par mois ; notre guide sur le prix du référencement naturel détaille ces fourchettes." },
          { q: "Au bout de combien de temps voit-on des résultats ?", a: "Les premiers mouvements de positions apparaissent en deux à quatre mois sur des recherches locales et métier. Les recherches très concurrentielles demandent plus de temps et de contenus. Nous le disons avant, pas après." },
          { q: "Garantissez-vous la première page ?", a: "Nous écrivons l'objectif top 10 dans la proposition, sur une liste de recherches définie ensemble, et nous rendons compte chaque mois. Personne ne peut garantir une position précise : Google décide. Mais nous nous engageons sur le travail, sa méthode et sa transparence." },
          { q: "Faut-il aussi faire de la publicité Google ?", a: "Pas nécessairement. La publicité apporte du trafic immédiat et sert à mesurer ce qui convertit pendant que le référencement monte ; elle fait partie des packs Équilibre et Intense sous la forme de campagnes pilotées. Le référencement, lui, construit un actif durable." },
          { q: "SEO et GEO, quelle différence ?", a: "Le SEO vise les résultats classiques de Google. Le GEO vise les réponses générées par les IA (ChatGPT, Gemini, Perplexity, aperçus IA de Google), qui citent des sources. Les fondations sont communes, mais le GEO exige des contenus directement citables et une entité d'entreprise cohérente partout. Nous expliquons la différence dans notre guide GEO." },
        ],
      },
      {
        type: "cta",
        titre: "Commencez par savoir où vous en êtes.",
        texte: "L'audit SEO est gratuit : positions actuelles, points bloquants, recherches à viser. Puis on en parle quinze minutes.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Audit SEO gratuit", href: "/services/seo/audit-seo-gratuit/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "GEO : être cité par les IA", href: "/services/geo-referencement-ia/" },
      { label: "SEO ou GEO, que choisir ?", href: "/guides/geo-referencement-ia/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Référencement par métier", href: "/secteurs/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/seo/audit-seo-gratuit/",
    type: "service",
    titre: "Audit SEO gratuit de votre site : positions, blocages, plan",
    description:
      "Audit SEO gratuit pour PME : vos positions actuelles, les points techniques bloquants, les recherches à viser et un plan d'action. Réalisé par notre équipe, sans engagement.",
    motCle: "audit seo gratuit",
    kicker: "Audit SEO gratuit",
    h1: "Savoir exactement pourquoi Google ne vous montre pas.",
    lede: "Avant toute proposition, notre équipe analyse votre site, vos positions et votre présence en ligne, gratuitement. Vous recevez un document clair : ce qui bloque, ce qui manque, ce qu'il faudrait viser. Vous en faites ce que vous voulez.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Audit SEO",
        texte: "examen méthodique d'un site pour mesurer sa visibilité sur Google et identifier ce qui l'empêche de progresser : technique (vitesse, indexation, balises), contenus (pages, mots-clés, intentions), autorité (liens, fiche d'établissement, avis). Il se conclut par une liste d'actions classées par effet et par effort.",
      },
      {
        type: "texte",
        titre: "Pourquoi gratuit, et pourquoi par des humains.",
        paragraphes: [
          "Les audits automatiques en ligne produisent un score et deux cents alertes dont personne ne sait quoi faire. Le nôtre est fait par notre équipe, en regardant votre marché : qui est devant vous, sur quelles recherches, et pourquoi. C'est le même travail que nous faisons pour nos clients, en version courte.",
          "Il est gratuit parce qu'il nous sert aussi : c'est à partir de lui que nous recommandons une formule, ou que nous vous disons honnêtement que vous n'avez pas besoin de nous. Un audit qui conclut « ne changez rien » existe, et nous l'avons déjà rendu.",
        ],
      },
      {
        type: "liste",
        titre: "Ce que contient l'audit.",
        items: [
          { titre: "Vos positions actuelles", texte: "Sur quelles recherches votre site apparaît, à quelle place, et ce que cela représente en visites." },
          { titre: "Technique", texte: "Indexation, vitesse mobile, balises, données structurées, erreurs qui empêchent Google de lire le site." },
          { titre: "Contenus et intentions", texte: "Les recherches de vos clients que votre site ne couvre pas, et les pages qu'il faudrait pour les couvrir." },
          { titre: "Présence locale", texte: "Fiche d'établissement Google, avis, cohérence des informations sur les annuaires." },
          { titre: "Concurrence", texte: "Trois concurrents qui vous précèdent : ce qu'ils font que vous ne faites pas." },
          { titre: "Plan d'action", texte: "Dix actions au plus, classées par effet attendu, avec ce que vous pouvez faire seul et ce qui demande un prestataire." },
        ],
      },
      {
        type: "etapes",
        titre: "Comment ça se passe.",
        items: [
          { titre: "Vous réservez un appel de quinze minutes", texte: "Nous comprenons votre activité, votre zone et vos objectifs. C'est tout ce dont nous avons besoin pour commencer." },
          { titre: "Nous analysons", texte: "Trois à cinq jours ouvrés, selon la taille du site." },
          { titre: "Vous recevez le document", texte: "Et, si vous le souhaitez, trente minutes pour le parcourir ensemble et répondre à vos questions." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "L'audit SEO est-il vraiment gratuit ?", a: "Oui, sans condition ni engagement. Il est réalisé avant toute proposition commerciale, et vous gardez le document quelle que soit votre décision." },
          { q: "Quelle différence avec un audit SEO en ligne automatique ?", a: "Les outils en ligne vérifient des critères techniques génériques. Notre audit est fait par notre équipe et regarde votre marché : vos recherches, vos concurrents, vos clients. Il se conclut par des actions, pas par un score." },
          { q: "Faut-il avoir un site pour demander l'audit ?", a: "Non. Sans site, l'audit porte sur votre fiche Google, votre présence sur les annuaires et les recherches de votre marché : c'est le point de départ de la création de votre site." },
        ],
      },
      {
        type: "cta",
        titre: "Demandez votre audit.",
        texte: "Quinze minutes d'appel, puis trois à cinq jours d'analyse. Le document est à vous.",
        label: "Réserver l'appel",
      },
    ],
    liens: [
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/web-design/",
    type: "service",
    titre: "Agence web design pour PME : un site haut de gamme, lisible",
    description:
      "Web design sur mesure pour PME : identité visuelle propre, typographie soignée, mise en page éditoriale, mobile d'abord. Un design qui inspire confiance et fait agir, compris dans la création du site.",
    motCle: "agence web design",
    kicker: "Web design",
    h1: "Le design qui donne envie de vous faire confiance.",
    lede: "En trois secondes, un visiteur décide si votre entreprise est sérieuse. Le design fait ce travail avant le moindre mot. Nous concevons des sites sobres, précis et haut de gamme, parce qu'une PME mérite la même exigence qu'une grande marque, sans le budget d'une grande marque.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Web design",
        texte: "conception de l'apparence et de l'expérience d'un site : hiérarchie visuelle, typographie, couleurs, mise en page, images, animations, parcours jusqu'à l'action. Un bon web design ne se remarque pas : il rend le site évident, rapide à comprendre et agréable à utiliser, sur téléphone comme sur ordinateur.",
      },
      {
        type: "texte",
        titre: "Notre style : éditorial, sobre, précis.",
        paragraphes: [
          "Nous ne partons jamais d'un thème. Chaque site reçoit une direction artistique propre : une ou deux typographies choisies pour votre métier, une couleur de signal, beaucoup d'espace, des photos vraies plutôt que des banques d'images. L'inspiration vient de la presse et de l'édition plus que des modèles de sites : des pages qui se lisent, où l'œil sait toujours où aller.",
          "Le design est au service de la conversion. Chaque page a une action principale, placée là où le regard arrive naturellement. Les formulaires demandent le minimum. Les prix sont visibles. Les preuves (avis, réalisations, chiffres) sont là où le doute apparaît. C'est ce qui transforme un beau site en un site qui fait prendre rendez-vous.",
          "Et il est conçu sur téléphone d'abord, parce que c'est là que la majorité de vos visiteurs vous découvrent, souvent debout, souvent pressés.",
        ],
      },
      {
        type: "cartes",
        titre: "Ce que nous concevons.",
        items: [
          { titre: "Identité du site", texte: "Typographies, couleurs, grille, composants : un petit système graphique cohérent, documenté, réutilisable sur vos autres supports." },
          { titre: "Pages", texte: "Accueil, services, métier, à-propos, contact, guides : chaque gabarit dessiné pour son rôle, puis décliné." },
          { titre: "Mouvement", texte: "Des animations discrètes qui guident la lecture, jamais qui la ralentissent. Respect des préférences d'accessibilité." },
          { titre: "Images", texte: "Direction photo si vous avez un photographe, retouche et cadrage sinon ; illustrations ou pictogrammes dessinés si le métier s'y prête." },
          { titre: "Refonte graphique", texte: "Moderniser un site existant sans perdre ses positions : nouvelle peau, mêmes adresses, contenus consolidés." },
          { titre: "Performance", texte: "Le design est validé en conditions réelles : chargement mesuré sur mobile, contrastes vérifiés, lisibilité testée." },
        ],
      },
      {
        type: "tableau",
        titre: "Thème, constructeur ou sur mesure ?",
        colonnes: ["", "Thème acheté", "Constructeur (Wix, Squarespace…)", "Sur mesure ANVSLAB"],
        lignes: [
          ["Apparence", "Vue mille fois", "Correcte, limitée aux blocs", "Propre à votre entreprise"],
          ["Vitesse", "Souvent lourde", "Moyenne", "Mesurée et optimisée"],
          ["Référencement", "Dépend des réglages", "Limité", "Intégré dès la conception"],
          ["Évolution", "Dépend de l'éditeur du thème", "Dans les limites de l'outil", "Libre, code à vous"],
          ["Prix", "Bas", "Abonnement mensuel", "Dès 799 € tout compris"],
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Le web design est-il facturé en plus de la création du site ?", a: "Non. La direction artistique, les maquettes et la déclinaison sont comprises dans les trois packs, dès 799 €. Il n'y a pas de site ANVSLAB sans design sur mesure." },
          { q: "Puis-je garder mon logo et mes couleurs ?", a: "Bien sûr. Nous partons de votre identité existante et nous la prolongeons sur le web. Si elle doit être rafraîchie, nous le proposons, nous ne l'imposons pas." },
          { q: "Combien d'allers-retours sur les maquettes ?", a: "Deux sont compris, et ils suffisent dans la grande majorité des cas parce que les textes sont validés avant le design : on ne dessine pas dans le vide." },
          { q: "Qu'est-ce que l'UX design, et en faites-vous ?", a: "L'UX (expérience utilisateur) est la partie du design qui s'occupe du parcours : ce que le visiteur cherche, où il clique, ce qui le freine. Oui, c'est le cœur de notre travail : un site est jugé sur sa capacité à faire agir, pas seulement sur son apparence." },
        ],
      },
      {
        type: "cta",
        titre: "Montrez-nous votre site actuel.",
        texte: "Ou votre absence de site. En quinze minutes, nous vous disons ce qu'un design à la hauteur de votre métier changerait.",
      },
    ],
    liens: [
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Référencement naturel", href: "/services/seo/" },
      { label: "Sites par métier", href: "/secteurs/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/geo-referencement-ia/",
    type: "service",
    titre: "Agence GEO : être cité par ChatGPT, Gemini et les IA de Google",
    description:
      "GEO (Generative Engine Optimization) pour PME : faire citer votre entreprise dans les réponses de ChatGPT, Perplexity, Gemini et des aperçus IA de Google. Méthode, suivi des citations, compris dans le pack Intense.",
    motCle: "agence seo geo",
    kicker: "GEO · Référencement dans les IA",
    h1: "Quand vos clients demandent à une IA, c'est vous qu'elle doit citer.",
    lede: "Une part croissante des recherches ne passe plus par dix liens bleus mais par une réponse rédigée, dans ChatGPT, Perplexity, Gemini ou directement dans Google. Ces réponses citent des sources. Le GEO consiste à devenir l'une d'elles, pour votre métier et votre zone.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "GEO (Generative Engine Optimization)",
        texte: "ensemble des pratiques qui augmentent la probabilité qu'une entreprise soit citée, recommandée ou décrite correctement dans les réponses des moteurs génératifs (ChatGPT, Gemini, Perplexity, aperçus IA de Google). Il repose sur des contenus directement citables, des données structurées complètes et une identité d'entreprise cohérente sur l'ensemble du web.",
      },
      {
        type: "texte",
        titre: "Ce qui change, et ce qui ne change pas.",
        paragraphes: [
          "Les moteurs génératifs ne classent pas des pages : ils composent une réponse à partir de sources qu'ils jugent fiables et claires. Pour être retenu, il ne suffit plus d'être premier sur un mot-clé. Il faut que vos pages contiennent des réponses nettes, des chiffres, des définitions, des comparaisons que l'IA peut reprendre telles quelles, et que votre entreprise soit décrite de la même façon partout : site, fiche Google, annuaires, réseaux.",
          "Les fondations restent celles du [référencement naturel](/services/seo/) : site rapide, bien structuré, contenus de qualité, autorité. Le GEO ajoute une couche : la façon d'écrire, les données structurées, la cohérence de l'entité, et une mesure spécifique, celle des citations obtenues dans les réponses des IA.",
          "Notre guide [SEO ou GEO : que choisir en 2027](/guides/geo-referencement-ia/) détaille les différences, avec des exemples.",
        ],
      },
      {
        type: "liste",
        titre: "Notre méthode GEO.",
        items: [
          { titre: "Audit de visibilité IA", texte: "Vingt questions que posent vos clients, posées à ChatGPT, Perplexity, Gemini et aux aperçus IA de Google. Qui est cité, qui ne l'est pas, et pourquoi." },
          { titre: "Contenus citables", texte: "Définitions de 40 à 60 mots, réponses directes en tête de page, tableaux comparatifs, FAQ, chiffres sourcés. Chaque page est écrite pour pouvoir être reprise par une IA sans la déformer." },
          { titre: "Données structurées complètes", texte: "Organisation, services, offres, FAQ, auteur, fil d'Ariane : tout ce qui permet à une machine de comprendre qui vous êtes et ce que vous faites." },
          { titre: "Cohérence de l'entité", texte: "Même nom, même description, mêmes coordonnées sur le site, la fiche Google, LinkedIn, les annuaires professionnels. Les IA recoupent." },
          { titre: "Signaux de confiance", texte: "Auteur identifié, pages légales, avis, mentions dans la presse locale et les annuaires qui comptent." },
          { titre: "Suivi des citations", texte: "Chaque mois, les vingt questions sont reposées : nous notons les citations obtenues, les sources concurrentes et les ajustements à faire." },
        ],
      },
      {
        type: "cartes",
        titre: "Pour qui le GEO compte dès maintenant.",
        items: [
          { titre: "Métiers de conseil et de confiance", texte: "Avocats, experts-comptables, architectes, consultants : les clients demandent une recommandation à l'IA avant d'appeler." },
          { titre: "Services locaux comparés", texte: "« Meilleur restaurant italien à… », « bon dentiste près de… » : les IA composent des listes courtes. Y figurer, c'est capter la demande." },
          { titre: "B2B et industrie", texte: "Les acheteurs préparent leurs consultations avec des IA. Être décrit précisément, avec ses spécialités et ses références, pèse dans la présélection." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Le GEO remplace-t-il le SEO ?", a: "Non. Le GEO s'appuie sur les mêmes fondations (site rapide, contenus de qualité, autorité) et y ajoute des contenus citables, des données structurées complètes et une mesure des citations dans les IA. Une PME a besoin des deux ; le pack Intense les réunit." },
          { q: "Comment mesurez-vous les résultats du GEO ?", a: "Par un suivi mensuel de vingt questions représentatives posées à ChatGPT, Perplexity, Gemini et aux aperçus IA de Google : nous notons si votre entreprise est citée, comment, et quelles sources concurrentes le sont. C'est un indicateur de présence, pas une position au sens classique." },
          { q: "Peut-on garantir d'être cité par ChatGPT ?", a: "Non, et méfiez-vous de qui le promet : les réponses varient selon la formulation, le moment et le modèle. Ce que l'on peut garantir, c'est le travail qui augmente la probabilité d'être cité, et sa mesure dans le temps." },
          { q: "Qu'est-ce que l'AEO, et quelle différence avec le GEO ?", a: "L'AEO (Answer Engine Optimization) vise les réponses directes : extraits optimisés de Google, assistants vocaux. Le GEO vise les réponses générées par les IA conversationnelles. Les pratiques se recoupent largement ; nous les traitons ensemble." },
          { q: "Quel pack comprend le GEO ?", a: "Le pack Intense, à 2 999 €, qui comprend aussi le programme de contenus sur douze mois, indispensable pour fournir aux IA de quoi vous citer. Pour les packs Initial et Équilibre, les fondations (données structurées, contenus citables sur les pages principales) sont déjà posées." },
        ],
      },
      {
        type: "cta",
        titre: "Que disent les IA de vous aujourd'hui ?",
        texte: "Nous posons les questions de vos clients à ChatGPT, Gemini et Perplexity, et nous vous montrons le résultat. Gratuitement, avant toute proposition.",
        label: "Demander l'audit de visibilité IA",
      },
    ],
    liens: [
      { label: "SEO ou GEO : que choisir ?", href: "/guides/geo-referencement-ia/" },
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Assistants IA pour PME", href: "/services/assistant-ia-pme/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Le pack Intense", href: "/#tarifs" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/services/assistant-ia-pme/",
    type: "service",
    titre: "Assistant IA pour PME : répondre, qualifier, prendre rendez-vous",
    description:
      "Assistants et agents IA pour PME : réponses sur le site, WhatsApp et Messenger, agent téléphonique qui décroche vos appels manqués, relances et rappels automatiques. Entraînés sur votre activité.",
    motCle: "assistant ia pme",
    kicker: "Assistants et agents IA",
    h1: "Une équipe qui répond quand vous ne pouvez pas.",
    lede: "Un client qui n'a pas de réponse appelle le suivant. Nos assistants IA, entraînés sur votre activité, renseignent, qualifient la demande et prennent le rendez-vous, sur le site, WhatsApp, Messenger et au téléphone. Vous recevez le résumé. Rien ne se perd.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Assistant IA pour PME",
        texte: "programme conversationnel entraîné sur les informations d'une entreprise (services, horaires, tarifs, zone, questions fréquentes) qui répond aux clients par écrit ou par la voix, qualifie leur demande et déclenche une action : prise de rendez-vous, devis, transfert à un humain. Il travaille à toute heure et transmet un résumé de chaque échange.",
      },
      {
        type: "texte",
        titre: "Le problème qu'il résout.",
        paragraphes: [
          "Une PME perd des clients à des moments précis : le soir et le week-end, quand personne ne répond ; pendant un chantier ou une consultation, quand le téléphone sonne dans le vide ; sur WhatsApp, quand un message attend deux jours. Chaque fois, le client a déjà trouvé quelqu'un d'autre.",
          "Un assistant IA bien construit ne remplace pas votre accueil : il le prolonge. Il répond aux questions simples avec vos mots, il prend le rendez-vous dans votre agenda, il envoie la confirmation et le rappel, et il vous passe la main dès que la demande sort de son périmètre. Vous gardez la relation ; vous ne perdez plus la demande.",
        ],
      },
      {
        type: "cartes",
        titre: "Ce que nous mettons en place.",
        items: [
          { titre: "Assistant écrit multicanal", texte: "Sur le site, WhatsApp, Messenger et Instagram : une seule boîte, un seul assistant, vos réponses. Compris dès le pack Initial pour le site et WhatsApp." },
          { titre: "Agent téléphonique IA", texte: "Une voix naturelle qui décroche vos appels manqués, renseigne, qualifie et prend le rendez-vous. Vous recevez la transcription et le résumé." },
          { titre: "Confirmations et rappels", texte: "Chaque rendez-vous confirmé par message, rappelé la veille, reprogrammé en un clic. Moins de lapins, moins d'appels." },
          { titre: "Relances automatiques", texte: "Devis sans réponse, avis à demander après prestation, clients à revoir : des séquences écrites avec vous, envoyées au bon moment." },
          { titre: "Base de connaissances", texte: "Vos services, tarifs, conditions, questions fréquentes : organisés, versionnés, mis à jour par vous en quelques minutes." },
          { titre: "Passage à l'humain", texte: "Dès qu'une demande sort du périmètre ou qu'un client le demande, l'assistant transfère avec le contexte. Jamais de client coincé face à une machine." },
        ],
      },
      {
        type: "etapes",
        titre: "Mise en place en trois semaines.",
        items: [
          { titre: "Entretien et collecte", texte: "Vos questions fréquentes, vos réponses, vos règles (ce que l'assistant peut dire, ce qu'il doit transférer), vos canaux." },
          { titre: "Construction et tests", texte: "Nous entraînons l'assistant, nous le testons avec des scénarios réels, vous l'essayez avant toute mise en ligne." },
          { titre: "Lancement et réglages", texte: "Mise en service canal par canal, lecture des premiers échanges ensemble, ajustements. Puis un rapport mensuel : conversations, rendez-vous pris, demandes transférées." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Un assistant IA convient-il à une petite entreprise ?", a: "C'est pour elle qu'il est le plus utile : quand on est deux ou cinq, personne n'est dédié à l'accueil, et chaque appel manqué est un client perdu. L'assistant écrit est compris dès le pack Initial pour le site et WhatsApp." },
          { q: "Que fait l'assistant quand il ne sait pas répondre ?", a: "Il le dit, prend les coordonnées et transfère la demande avec son contexte à la personne que vous avez désignée. Il ne devine jamais un prix ou un engagement." },
          { q: "Où vont les données de mes clients ?", a: "Dans des outils dont vous êtes titulaire des comptes, hébergés en Europe lorsque c'est possible, avec une politique de conservation définie avec vous. Rien n'est utilisé pour entraîner des modèles tiers." },
          { q: "Combien coûte un agent téléphonique IA ?", a: "Il dépend du volume d'appels et des intégrations (agenda, logiciel métier). Il est calé après audit, le plus souvent dans le cadre du pack Intense ou sur devis séparé. Les assistants écrits sont compris dans les packs." },
        ],
      },
      {
        type: "cta",
        titre: "Combien d'appels manquez-vous par semaine ?",
        texte: "Faites le compte, puis parlons-en quinze minutes. Nous vous dirons ce qu'un assistant changerait dans votre cas.",
      },
    ],
    liens: [
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "GEO : être cité par les IA", href: "/services/geo-referencement-ia/" },
      { label: "Référencement naturel", href: "/services/seo/" },
      { label: "Sites par métier", href: "/secteurs/" },
    ],
  },
];
