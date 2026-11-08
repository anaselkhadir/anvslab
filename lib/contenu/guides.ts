import type { Page } from "./types";

const MAJ = "2026-11-08";

/*
 * Guides : intention informationnelle ou commerciale. Réponse directe en tête,
 * tableaux, FAQ, un seul appel à l'action en fin. Les fourchettes de prix sont
 * des ordres de grandeur relevés sur les grilles publiques d'agences et de
 * plateformes de freelances en novembre 2026 ; elles sont présentées comme
 * telles, jamais comme des tarifs de marché certifiés.
 */
export const guides: Page[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/prix-site-internet-pme/",
    type: "guide",
    titre: "Combien coûte un site internet pour une PME en 2026 ?",
    description:
      "Prix d'un site internet pour une PME : de 250 € en freelance à plus de 10 000 € en agence. Ce qui explique les écarts, les coûts cachés, et ce que comprend vraiment un devis.",
    motCle: "combien coûte un site internet",
    kicker: "Guide · Prix",
    h1: "Combien coûte un site internet pour une PME ?",
    lede: "Réponse courte : entre 250 € et plus de 10 000 € pour un site vitrine, selon qui le fait et ce qui est compris. Réponse utile : voici ce qui explique ces écarts, ce que les devis oublient de dire, et combien il faut vraiment prévoir.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Prix d'un site internet pour une PME",
        texte: "en novembre 2026, sur les grilles publiques relevées en France, un site vitrine de 5 à 10 pages se situe entre 250 et 2 500 € chez un freelance ou sur une plateforme, entre 2 000 et 10 000 € en agence, et au-delà de 10 000 € pour un projet sur mesure avec stratégie de contenus. À cela s'ajoutent des coûts récurrents : hébergement, nom de domaine, maintenance.",
      },
      {
        type: "tableau",
        titre: "Les fourchettes, par type de prestataire.",
        intro: "Ordres de grandeur relevés en novembre 2026 sur les grilles publiques d'agences françaises et de plateformes de freelances. Un devis précis dépend toujours du périmètre.",
        colonnes: ["Prestataire", "Site vitrine (5–10 pages)", "Ce qui est généralement compris", "Ce qui est souvent en plus"],
        lignes: [
          ["Constructeur de site (Wix, Squarespace…) fait soi-même", "0 à 40 € / mois", "Hébergement, modèles, éditeur", "Votre temps, le design, les textes, le référencement"],
          ["Freelance sur plateforme", "250 à 1 000 €", "Installation d'un thème WordPress, mise en page", "Textes (200 à 500 €), référencement, maintenance, licences de thème et extensions"],
          ["Freelance expérimenté", "1 000 à 2 500 €", "Thème personnalisé ou design simple, textes parfois", "Référencement, suivi, hébergement"],
          ["Agence web PME", "2 000 à 10 000 €", "Design sur mesure, intégration, référencement de base", "Textes, photos, maintenance (30 à 100 € / mois), suivi SEO"],
          ["Agence premium / sur mesure", "10 000 € et plus", "Stratégie, design, contenus, développement spécifique", "Maintenance, hébergement, campagnes"],
          ["ANVSLAB", "799, 1 499 ou 2 999 € tout compris", "Design sur mesure, textes, référencement, fiche Google, support 12 mois, suivi 6 mois", "Hébergement et nom de domaine à votre nom (quelques dizaines d'euros par an)"],
        ],
        note: "Les prix en dessous de 500 € correspondent presque toujours à un thème installé, sans textes ni référencement. Ce n'est pas un défaut en soi, mais il faut le savoir en comparant.",
      },
      {
        type: "liste",
        titre: "Ce qui fait varier le prix, dans l'ordre.",
        items: [
          { titre: "Les textes", texte: "Le poste le plus sous-estimé. Un site sans textes travaillés ne se référence pas et ne convainc pas. Rédigés par un professionnel, comptez 100 à 250 € par page chez un rédacteur indépendant. Chez ANVSLAB, ils sont compris." },
          { titre: "Thème ou sur mesure", texte: "Un thème coûte quelques dizaines d'euros et fait gagner du temps ; il impose aussi son apparence et sa lourdeur. Le sur mesure demande un designer et un développeur : c'est le premier facteur d'écart entre 800 et 5 000 €. Voir notre page [web design](/services/web-design/)." },
          { titre: "Le nombre de pages", texte: "Une page de plus, c'est un texte, une maquette déclinée, un référencement. Au-delà de dix pages, le prix suit à peu près linéairement, sauf si les pages suivent un même gabarit." },
          { titre: "Le référencement", texte: "Le « SEO compris » des devis bon marché se limite souvent aux balises. Un vrai travail (mots-clés, structure, contenus, fiche Google, suivi) est un poste à part entière : voir notre guide sur le [prix du référencement naturel](/guides/prix-referencement-naturel/)." },
          { titre: "Les fonctionnalités", texte: "Prise de rendez-vous, paiement, espace client, catalogue, multilingue : chaque fonction ajoute du développement et des tests. C'est ce qui sépare un site vitrine d'un site marchand (souvent 3 000 à 15 000 € et plus)." },
          { titre: "Le suivi", texte: "Un site livré puis abandonné perd de la valeur chaque mois. Le suivi (positions, corrections, évolutions) est soit un abonnement, soit compris pour une durée définie. Vérifiez laquelle." },
        ],
      },
      {
        type: "tableau",
        titre: "Les coûts que les devis oublient.",
        colonnes: ["Poste", "Ordre de grandeur", "Remarque"],
        lignes: [
          ["Nom de domaine", "10 à 20 € / an", "Doit être enregistré à votre nom, jamais à celui du prestataire"],
          ["Hébergement", "0 à 30 € / mois", "Un site statique bien construit s'héberge pour presque rien"],
          ["Maintenance (WordPress)", "30 à 100 € / mois", "Mises à jour, sauvegardes, sécurité ; inutile sur un site statique"],
          ["Licences de thème et d'extensions", "50 à 300 € / an", "Fréquent sur WordPress, à renouveler"],
          ["Textes et traductions", "100 à 250 € / page", "Si non compris"],
          ["Photos professionnelles", "300 à 1 500 €", "Une demi-journée de photographe change tout"],
          ["Refonte", "Tous les 3 à 5 ans", "À anticiper : un site qui vieillit coûte en clients perdus"],
        ],
      },
      {
        type: "texte",
        titre: "Site vitrine, site marchand, application : trois budgets.",
        paragraphes: [
          "Un site vitrine présente l'entreprise et amène des demandes de contact ou de rendez-vous. C'est le besoin de la grande majorité des PME de services, et c'est la fourchette décrite plus haut.",
          "Un site marchand vend en ligne : catalogue, panier, paiement, livraison, comptes clients. Le périmètre et les coûts récurrents (plateforme, commissions, logistique) sont d'une autre nature ; comptez de 3 000 à 15 000 € pour une boutique sérieuse, davantage avec des intégrations.",
          "Une application web sur mesure (espace client, outil métier, portail) se chiffre au jour de développement et dépend entièrement du cahier des charges. Elle commence rarement sous 8 000 €. Ce n'est plus un site : c'est un logiciel.",
        ],
      },
      {
        type: "etapes",
        titre: "Comment lire un devis de site internet.",
        items: [
          { titre: "Cherchez les textes", texte: "Sont-ils rédigés, relus, intégrés ? Par qui ? Si ce n'est pas écrit, ils ne sont pas compris." },
          { titre: "Cherchez le mot « thème »", texte: "S'il y est, le design n'est pas sur mesure. Ce peut être acceptable ; ce doit être dit." },
          { titre: "Cherchez la ligne référencement", texte: "Que recouvre-t-elle ? Balises seules, ou mots-clés, structure, fiche Google, suivi des positions ?" },
          { titre: "Cherchez la propriété", texte: "Domaine, hébergement, code, comptes : à quel nom ? Vous devez pouvoir partir avec tout." },
          { titre: "Cherchez l'après", texte: "Support, corrections, évolutions, suivi : compris combien de temps, puis combien par mois ?" },
        ],
      },
      { type: "packs", titre: "Ce que coûte un site chez ANVSLAB.", intro: "Trois prix, un seul paiement, et tout ce qui précède compris : design sur mesure, textes, référencement, fiche Google, support douze mois, suivi six mois. Le détail est sur la page [création de site internet](/services/creation-site-internet/)." },
      {
        type: "faq",
        items: [
          { q: "Combien coûte un site internet vitrine ?", a: "Entre 250 et 2 500 € chez un freelance, entre 2 000 et 10 000 € en agence, d'après les grilles publiques relevées en novembre 2026 en France. L'écart vient surtout des textes, du design (thème ou sur mesure) et du référencement. Chez ANVSLAB, un site vitrine sur mesure avec textes et référencement coûte 799 € tout compris." },
          { q: "Combien coûte un site internet par mois ?", a: "Un site fait soi-même sur un constructeur coûte 0 à 40 € par mois. Un site WordPress maintenu par un prestataire coûte 30 à 100 € par mois de maintenance, plus l'hébergement. Un site statique sur mesure n'a quasiment pas de coût mensuel : domaine et hébergement représentent quelques dizaines d'euros par an." },
          { q: "Pourquoi un tel écart entre 500 € et 5 000 € ?", a: "À 500 €, on installe un thème et on met en page vos textes. À 5 000 €, on conçoit un design propre, on écrit les textes, on travaille le référencement et on suit les résultats. Les deux sont des sites ; ils ne produisent pas la même chose." },
          { q: "Faut-il payer le site en une fois ou par abonnement ?", a: "Les deux modèles existent. L'abonnement lisse la dépense mais vous rend dépendant : si vous arrêtez, le site s'éteint souvent. Le paiement unique coûte plus au départ et vous laisse propriétaire. Vérifiez dans tous les cas à qui appartiennent le domaine et le code." },
          { q: "Combien coûte la refonte d'un site internet ?", a: "Le plus souvent entre 60 et 100 % du prix d'un site neuf, parce qu'il faut en plus analyser l'existant, conserver les positions acquises et rediriger les anciennes adresses. Chez ANVSLAB, la refonte est au même prix que la création : 799, 1 499 ou 2 999 € selon le pack." },
        ],
      },
      {
        type: "cta",
        titre: "Vous voulez un chiffre pour votre cas ?",
        texte: "Quinze minutes d'appel, un audit gratuit de votre présence actuelle, et une recommandation écrite. Sans engagement.",
      },
    ],
    liens: [
      { label: "Création de site internet pour PME", href: "/services/creation-site-internet/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "Web design sur mesure", href: "/services/web-design/" },
      { label: "Sites par métier", href: "/secteurs/" },
      { label: "Les trois formules", href: "/#tarifs" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/prix-referencement-naturel/",
    type: "guide",
    titre: "Prix du référencement naturel pour une PME : le vrai coût du SEO",
    description:
      "Combien coûte le référencement naturel ? Audit, forfait mensuel, freelance ou agence : les fourchettes 2026 pour une PME, ce que vous payez vraiment, et les signaux d'alerte.",
    motCle: "référencement naturel prix",
    kicker: "Guide · Prix",
    h1: "Combien coûte le référencement naturel pour une PME ?",
    lede: "Réponse courte : de 300 € par mois chez un freelance à plus de 2 000 € par mois en agence, ou un audit ponctuel entre 500 et 3 000 €. Réponse utile : ce que ces montants achètent réellement, pourquoi le SEO se paie dans la durée, et comment éviter de payer pour rien.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Prix du référencement naturel",
        texte: "en France, en novembre 2026, une prestation SEO pour une PME se facture le plus souvent sous forme de forfait mensuel : 300 à 1 000 € chez un consultant indépendant, 500 à 2 000 € en agence spécialisée PME, au-delà de 2 000 € pour les agences nationales. Un audit seul coûte 500 à 3 000 €. Le prix dépend du nombre de recherches visées, du volume de contenus produits et de la concurrence du secteur.",
      },
      {
        type: "tableau",
        titre: "Les formats et leurs prix.",
        intro: "Ordres de grandeur relevés sur les grilles publiques en novembre 2026.",
        colonnes: ["Format", "Prix", "Pour qui", "Limite"],
        lignes: [
          ["Audit SEO ponctuel", "500 à 3 000 €", "Savoir où l'on en est avant d'investir", "Un diagnostic n'améliore rien tant qu'on n'agit pas"],
          ["Forfait mensuel freelance", "300 à 1 000 € / mois", "TPE et PME locales, un marché peu concurrentiel", "Capacité de production limitée ; vérifier qui écrit les contenus"],
          ["Forfait mensuel agence PME", "500 à 2 000 € / mois", "PME avec plusieurs services ou plusieurs villes", "Engagement souvent de 6 à 12 mois ; lire le périmètre"],
          ["Agence nationale", "2 000 à 10 000 € / mois", "Marchés très concurrentiels, e-commerce, grands comptes", "Hors d'échelle pour la plupart des PME"],
          ["Compris dans la création du site (ANVSLAB)", "0 € pendant 6 mois, puis dès 100 € / mois", "PME qui créent ou refont leur site", "Le socle et le suivi ; les programmes de contenus lourds relèvent du pack Intense"],
        ],
      },
      {
        type: "liste",
        titre: "Ce que vous payez, poste par poste.",
        items: [
          { titre: "La recherche de mots-clés", texte: "Identifier les recherches qui amènent des clients, pas du trafic. Une fois au départ, puis affinée. C'est ce qui évite de travailler six mois sur les mauvais mots." },
          { titre: "La technique", texte: "Indexation, vitesse, balises, données structurées, erreurs. Un chantier au départ, puis de la surveillance. Sur un site bien construit, ce poste est faible ; sur un site ancien, il peut absorber les premiers mois." },
          { titre: "Les contenus", texte: "Le poste principal dans la durée. Pages de service, pages métier, guides, questions-réponses : 100 à 250 € la page chez un rédacteur, davantage si un expert métier intervient. Un programme sérieux produit deux à quatre contenus par mois." },
          { titre: "La présence locale", texte: "Fiche d'établissement Google, avis, cohérence des coordonnées sur les annuaires. Décisif pour les métiers de proximité, et souvent négligé." },
          { titre: "L'autorité (liens)", texte: "Obtenir des liens de sites qui comptent : annuaires professionnels, partenaires, presse. Long et manuel. Méfiez-vous des forfaits « 20 backlinks par mois » : ce sont des liens achetés, que Google sanctionne." },
          { titre: "Le suivi et le reporting", texte: "Positions, trafic, conversions, un point régulier. Sans lui, vous payez à l'aveugle. Il doit porter sur les recherches convenues et sur les rendez-vous obtenus, pas sur un score de visibilité abstrait." },
        ],
      },
      {
        type: "texte",
        titre: "Pourquoi le SEO se paie dans la durée.",
        paragraphes: [
          "Le référencement n'est pas un état, c'est une position à tenir. Les premiers effets d'un travail sérieux se voient en deux à quatre mois sur des recherches locales et métier. Les recherches concurrentielles demandent six à douze mois de contenus et de liens. Et une fois en première page, vos concurrents continuent d'avancer : s'arrêter, c'est reculer lentement.",
          "C'est pour cela que la majorité des prestations sont mensuelles, et que le vrai critère n'est pas le prix par mois mais ce qu'il produit : combien de recherches en première page, combien de visites, combien de rendez-vous d'origine organique. Un forfait à 400 € qui amène trois clients par mois vaut mieux qu'un forfait à 1 500 € qui améliore un score.",
          "Chez ANVSLAB, le référencement est compris dans la [création du site](/services/creation-site-internet/) avec six mois d'accompagnement, puis se poursuit par un abonnement dès 100 € par mois, sans engagement. L'objectif top 10 sur une liste de recherches définie ensemble est écrit dans la proposition. La page [référencement naturel](/services/seo/) détaille la méthode.",
        ],
      },
      {
        type: "cartes",
        titre: "Les signaux d'alerte sur un devis SEO.",
        items: [
          { titre: "« Première page garantie »", texte: "Personne ne décide à la place de Google. Une garantie de position est soit une promesse creuse, soit une position sur une recherche que personne ne tape." },
          { titre: "Des liens par paquets", texte: "« 20 backlinks par mois », « réseau de sites partenaires » : des liens achetés ou artificiels. Le risque de pénalité est réel, et le coût de nettoyage ensuite aussi." },
          { titre: "Un engagement de 24 mois", texte: "Six à douze mois sont raisonnables pour juger. Au-delà, l'engagement protège le prestataire, pas vous." },
          { titre: "Un reporting sans conversions", texte: "Si le rapport mensuel parle de visibilité et jamais de demandes ou de rendez-vous, on ne mesure pas ce qui compte." },
          { titre: "Pas de liste de recherches", texte: "Sans liste de mots-clés convenue par écrit, impossible de savoir sur quoi l'on travaille ni de vérifier les progrès." },
          { titre: "Le SEO sans les textes", texte: "Un forfait qui n'inclut aucune rédaction ne peut pas faire progresser durablement un site. Demandez qui écrit, et combien par mois." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien coûte un audit SEO ?", a: "Entre 500 et 3 000 € selon la taille du site et la profondeur de l'analyse, d'après les grilles publiques relevées en novembre 2026. ANVSLAB réalise un audit SEO gratuit avant toute proposition : positions, blocages techniques, recherches à viser, plan d'action." },
          { q: "Quel budget SEO mensuel pour une PME locale ?", a: "Pour une PME de services sur une ville ou un département, 300 à 1 000 € par mois suffisent généralement à tenir la première page sur les recherches métier locales, à condition que des contenus soient produits. Chez ANVSLAB, le suivi après les six mois compris démarre à 100 € par mois." },
          { q: "SEO ou publicité Google : lequel coûte le moins cher ?", a: "La publicité coûte à chaque clic et s'arrête quand on arrête de payer ; elle est immédiate et sert à tester ce qui convertit. Le référencement coûte du travail au départ, puis rapporte sans coût par clic. Sur douze mois et plus, le référencement est presque toujours moins cher par client obtenu." },
          { q: "Peut-on faire son référencement naturel gratuitement ?", a: "Les bases, oui : fiche Google, titres clairs, pages par service, avis clients. C'est du temps plutôt que de l'argent. Le travail de fond (mots-clés, contenus réguliers, technique, liens) demande des compétences et des heures que peu de dirigeants ont." },
        ],
      },
      {
        type: "cta",
        titre: "Commencez par l'audit, il est gratuit.",
        texte: "Positions actuelles, blocages, recherches à viser, plan d'action : le document est à vous, quelle que soit votre décision.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Audit SEO gratuit", href: "/services/seo/audit-seo-gratuit/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "SEO ou GEO : que choisir ?", href: "/guides/geo-referencement-ia/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/geo-referencement-ia/",
    type: "guide",
    titre: "SEO ou GEO : que choisir en 2027 ? Guide pour PME",
    description:
      "GEO (Generative Engine Optimization) vs SEO : définitions, différences, comment ChatGPT, Gemini et Perplexity choisissent leurs sources, et les sept actions pour qu'une PME soit citée par les IA.",
    motCle: "geo generative engine optimization",
    kicker: "Guide · GEO",
    h1: "SEO ou GEO : que choisir en 2027 ?",
    lede: "Réponse courte : les deux, parce que le GEO repose sur le SEO et le prolonge là où les clients posent désormais leurs questions. Réponse utile : ce qui change vraiment dans la façon d'écrire, de structurer et de prouver, et par quoi commencer quand on est une PME.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "GEO (Generative Engine Optimization)",
        texte: "optimisation pour les moteurs génératifs : ensemble des pratiques qui augmentent la probabilité qu'une entreprise, un produit ou un contenu soit cité et correctement décrit dans les réponses rédigées par des IA comme ChatGPT, Gemini, Perplexity ou les aperçus IA de Google. Là où le SEO cherche une position dans une liste de liens, le GEO cherche une place dans la réponse elle-même.",
      },
      {
        type: "texte",
        titre: "Ce qui a changé dans la recherche.",
        paragraphes: [
          "Pendant vingt ans, chercher voulait dire taper quelques mots, parcourir dix liens, en ouvrir deux ou trois. Depuis 2024, une part croissante des recherches obtient d'abord une réponse rédigée : un paragraphe, une liste, un tableau, avec quelques sources citées en marge. Dans Google, ce sont les aperçus IA ; ailleurs, ce sont ChatGPT, Perplexity, Gemini, Claude.",
          "Pour une PME, la conséquence est simple : si la réponse cite trois prestataires et que vous n'y êtes pas, le client ne saura jamais que vous existez, même si votre site est en quatrième position du classement classique. Et à l'inverse, une entreprise bien décrite et souvent citée gagne une recommandation implicite que dix liens bleus ne donnaient pas.",
          "Le GEO n'est pas un gadget ni un nouveau métier venu de nulle part : c'est la suite logique du [référencement naturel](/services/seo/), avec quelques règles supplémentaires.",
        ],
      },
      {
        type: "tableau",
        titre: "SEO et GEO, côte à côte.",
        colonnes: ["", "SEO (référencement naturel)", "GEO (moteurs génératifs)"],
        lignes: [
          ["Objectif", "Apparaître dans les dix premiers liens de Google", "Être cité ou recommandé dans la réponse rédigée par l'IA"],
          ["Unité de mesure", "Position, clics, trafic", "Citations, mentions, exactitude de la description"],
          ["Ce que la machine lit", "Mots-clés, structure, liens, vitesse", "Réponses claires, chiffres, définitions, cohérence de l'entité sur tout le web"],
          ["Format de contenu gagnant", "Page complète sur une intention", "Même page, plus des passages courts et autonomes, citables tels quels"],
          ["Signaux de confiance", "Liens entrants, ancienneté, avis", "Les mêmes, plus un auteur identifié, des sources, une entité cohérente (site, fiche Google, annuaires, LinkedIn)"],
          ["Horizon", "Deux à douze mois", "Variable ; les réponses changent selon la question, le moment et le modèle"],
          ["Ce qui ne change pas", "Un site rapide, bien structuré, avec des contenus utiles", "Idem : le GEO ne fonctionne pas sur un mauvais site"],
        ],
      },
      {
        type: "texte",
        titre: "Comment les IA choisissent leurs sources.",
        paragraphes: [
          "Les moteurs génératifs ne publient pas leurs critères, mais leur fonctionnement général est connu : ils recherchent (souvent via un index classique), ils sélectionnent quelques pages jugées pertinentes et fiables, puis ils rédigent à partir d'elles. Ce qui favorise une page à l'étape de sélection, c'est ce qui favorisait déjà le SEO : pertinence, autorité, fraîcheur.",
          "Ce qui favorise une page à l'étape de rédaction est plus spécifique : des passages qui répondent directement à la question, sans détour ; des chiffres et des définitions ; des listes et des tableaux ; une structure de titres qui dit de quoi parle chaque partie ; un auteur, une date, une entreprise identifiable. Une IA cite plus volontiers ce qu'elle peut reprendre sans le réécrire.",
          "Enfin, les IA recoupent. Une entreprise décrite d'une façon sur son site, d'une autre sur sa fiche Google et d'une troisième sur un annuaire inspire moins confiance qu'une entreprise dont le nom, l'activité, la zone et les coordonnées sont identiques partout.",
        ],
      },
      {
        type: "etapes",
        titre: "Sept actions GEO pour une PME, dans l'ordre.",
        items: [
          { titre: "Vérifier ce que les IA disent déjà de vous", texte: "Posez à ChatGPT, Perplexity et Gemini vingt questions que posent vos clients (« quelle agence web pour une PME à… », « bon expert-comptable pour… »). Notez qui est cité, et si votre description est exacte." },
          { titre: "Mettre d'équerre l'entité", texte: "Même nom, même description de 40 mots, mêmes coordonnées sur le site, la fiche Google, LinkedIn, les annuaires professionnels. Pages légales complètes." },
          { titre: "Ouvrir chaque page par une réponse", texte: "Les 40 à 60 premiers mots de chaque page de service ou de guide doivent répondre à la question principale. Le reste développe." },
          { titre: "Ajouter des définitions, des tableaux, des FAQ", texte: "Ce sont les trois formats que les IA reprennent le plus. Une définition par page, un tableau quand il y a comparaison, trois à cinq questions-réponses en fin." },
          { titre: "Compléter les données structurées", texte: "Organisation, services, offres et prix, FAQ, auteur, fil d'Ariane : le vocabulaire schema.org permet aux machines de comprendre sans interpréter." },
          { titre: "Signer et dater", texte: "Un auteur identifié avec une courte biographie, une date de mise à jour visible, des sources quand il y a des chiffres." },
          { titre: "Mesurer chaque mois", texte: "Reposez les vingt questions. Comptez les citations, notez les sources concurrentes, ajustez les contenus. C'est le seul indicateur GEO qui vaille." },
        ],
      },
      {
        type: "texte",
        titre: "GEO, AEO, SEO : trois sigles, un même travail.",
        paragraphes: [
          "L'AEO (Answer Engine Optimization) désigne l'optimisation pour les réponses directes : extraits optimisés en haut de Google, assistants vocaux. Le GEO vise les réponses générées par les IA conversationnelles. Le SEO reste le socle. Dans la pratique, les trois demandent la même chose : des contenus qui répondent, une structure que les machines comprennent, une entreprise identifiable et digne de confiance.",
          "Pour une PME, la question n'est donc pas « SEO ou GEO ? » mais « par quoi commencer ? ». La réponse est toujours la même : un site rapide et bien structuré, les pages de service et de métier qui manquent, la fiche Google, puis les contenus citables et la mesure des citations. C'est l'ordre du pack Intense d'ANVSLAB, décrit sur la page [GEO](/services/geo-referencement-ia/).",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Qu'est-ce que le GEO en référencement ?", a: "Le GEO (Generative Engine Optimization) est l'optimisation pour les moteurs génératifs : rendre une entreprise ou un contenu citable et correctement décrit dans les réponses rédigées par ChatGPT, Gemini, Perplexity ou les aperçus IA de Google. Il prolonge le SEO avec des contenus directement réutilisables, des données structurées complètes et une entité cohérente sur tout le web." },
          { q: "Quelle est la différence entre SEO et GEO ?", a: "Le SEO vise une position dans la liste de liens de Google ; le GEO vise une place dans la réponse elle-même. Le SEO se mesure en positions et en clics ; le GEO en citations et en exactitude. Les fondations sont communes : le GEO ne fonctionne pas sur un site mal référencé." },
          { q: "Comment être cité par ChatGPT ?", a: "En étant une source claire et fiable : réponses directes en tête de page, définitions, tableaux, FAQ, données structurées, auteur identifié, et une description d'entreprise identique sur le site, la fiche Google et les annuaires. Puis en mesurant chaque mois si les citations arrivent, question par question." },
          { q: "Le GEO est-il utile pour une petite entreprise locale ?", a: "Oui, et parfois plus que pour une grande : les IA composent des listes courtes (« trois bons dentistes à… »). Y figurer capte une demande qualifiée. Les actions sont les mêmes que pour le SEO local, avec plus de soin sur la cohérence de l'entité et la clarté des pages." },
          { q: "Combien coûte le GEO ?", a: "Chez ANVSLAB, il est compris dans le pack Intense à 2 999 €, avec le programme de contenus sur douze mois qui l'alimente. Sur le marché, les agences spécialisées facturent le GEO en forfait mensuel, souvent au niveau des prestations SEO d'agence (500 à 2 000 € par mois et plus) ; la discipline est jeune et les prix peu standardisés." },
        ],
      },
      {
        type: "cta",
        titre: "Que disent les IA de votre entreprise ?",
        texte: "Nous posons vingt questions de vos clients à ChatGPT, Gemini et Perplexity et nous vous montrons le résultat. Gratuitement, en quinze minutes d'appel.",
        label: "Demander l'audit de visibilité IA",
      },
    ],
    liens: [
      { label: "GEO : notre méthode et le pack Intense", href: "/services/geo-referencement-ia/" },
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "Assistants IA pour PME", href: "/services/assistant-ia-pme/" },
    ],
  },
];
