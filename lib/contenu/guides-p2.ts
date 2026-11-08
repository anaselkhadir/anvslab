import type { Page } from "./types";

const MAJ = "2026-11-08";

/* Guides de priorité 2 : intention informationnelle, captent le client en amont
   et nourrissent les citations dans les moteurs génératifs. */
export const guidesP2: Page[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/seo/",
    type: "guide",
    titre: "C'est quoi le SEO ? Le référencement naturel expliqué aux dirigeants",
    description:
      "SEO, SEA, référencement naturel ou payant, netlinking, délais : le référencement expliqué sans jargon à un dirigeant de PME, avec ce qui compte vraiment et ce qui ne compte plus.",
    motCle: "c'est quoi le seo",
    kicker: "Guide · SEO",
    h1: "C'est quoi le SEO, concrètement ?",
    lede: "Réponse courte : le SEO (référencement naturel) est l'ensemble du travail qui fait apparaître votre site dans les résultats non payants de Google quand un client cherche ce que vous faites. Réponse utile : voici comment ça marche, ce qui le distingue de la publicité, combien de temps ça prend, et ce qu'un dirigeant doit savoir pour ne pas se faire raconter d'histoires.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "SEO (Search Engine Optimization, référencement naturel)",
        texte: "ensemble des techniques qui améliorent la position d'un site dans les résultats organiques (non payants) des moteurs de recherche. Il repose sur trois piliers : la technique (le site est rapide, lisible par Google), les contenus (les pages répondent aux recherches réelles) et l'autorité (d'autres sites fiables le citent). Il se mesure en positions, en visites et, pour une entreprise, en demandes obtenues.",
      },
      {
        type: "texte",
        titre: "Comment Google décide qui apparaît.",
        paragraphes: [
          "Quand quelqu'un tape « expert-comptable lyon », Google ne cherche pas dans le web en direct : il interroge un index de pages qu'il a déjà visitées et analysées. Pour chaque page, il a estimé de quoi elle parle, si elle est fiable, si elle se charge vite, si d'autres sites la recommandent. Puis il classe les pages qui correspondent le mieux à l'intention derrière la recherche : ici, trouver un cabinet à Lyon, pas lire la définition de l'expertise comptable.",
          "Le SEO consiste donc à rendre chaque page évidente pour Google : un sujet par page, un titre qui le dit, un texte qui y répond complètement, une structure propre, et des signaux extérieurs (liens, avis, fiche d'établissement) qui confirment que l'entreprise existe et compte. Il n'y a pas de formule magique, et toute agence qui en vend une ment.",
          "Depuis 2024, une partie des réponses est rédigée par une IA en haut de la page de résultats, à partir de sources qu'elle cite. Ce volet, appelé [GEO](/guides/geo-referencement-ia/), prolonge le SEO sans le remplacer.",
        ],
      },
      {
        type: "tableau",
        titre: "SEO ou SEA : naturel ou payant ?",
        intro: "Les deux apparaissent sur la même page de Google ; ils n'ont ni le même coût ni la même durée de vie.",
        colonnes: ["", "SEO (référencement naturel)", "SEA (publicité Google Ads)"],
        lignes: [
          ["Où", "Résultats organiques, fiche Maps, aperçus IA", "Annonces marquées « Sponsorisé », en haut et en bas"],
          ["Coût", "Du travail (temps ou prestataire), pas de coût par clic", "Chaque clic est facturé, selon l'enchère"],
          ["Délai", "Deux à douze mois selon la concurrence", "Immédiat"],
          ["Durée de vie", "Les positions acquises restent tant qu'on les entretient", "S'arrête dès qu'on arrête de payer"],
          ["Confiance du client", "Élevée : résultat « mérité »", "Plus faible : résultat « acheté »"],
          ["Usage pour une PME", "Construire un actif durable", "Tester un marché, amener du volume immédiat, mesurer ce qui convertit"],
        ],
        note: "Les deux se complètent : la publicité révèle vite quelles recherches amènent des clients, le référencement les occupe ensuite durablement. C'est l'ordre que suivent nos packs Équilibre et Intense.",
      },
      {
        type: "liste",
        titre: "Les trois piliers, et ce qu'ils veulent dire pour vous.",
        items: [
          { titre: "Technique", texte: "Le site se charge en moins de deux secondes sur mobile, chaque page a un titre et une description uniques, Google peut tout lire (pas de contenu caché dans des scripts), le plan du site est déclaré, les données structurées décrivent l'entreprise. Un site bien construit règle ce pilier une fois pour toutes." },
          { titre: "Contenus", texte: "Chaque recherche importante a sa page : un service, un métier, une ville, une question. Le texte répond complètement, dans les mots du client, avec des éléments concrets (prix, délais, déroulé). C'est le pilier qui demande le plus de travail dans la durée, et celui qui fait la différence." },
          { titre: "Autorité", texte: "D'autres sites parlent de vous : fiche Google avec avis, annuaires professionnels, partenaires, presse locale, clients. Google y voit une confirmation d'existence et de sérieux. Les liens achetés en masse sont détectés et pénalisés." },
        ],
      },
      {
        type: "texte",
        titre: "Combien de temps pour être référencé ?",
        paragraphes: [
          "Être indexé (présent dans l'index de Google) prend de quelques heures à quelques semaines pour un site neuf déclaré dans la Search Console. Être bien positionné est une autre affaire : comptez deux à quatre mois pour des recherches locales et métier peu disputées, six à douze mois pour des recherches concurrentielles, et un entretien permanent ensuite, parce que les concurrents avancent aussi.",
          "Ce rythme explique pourquoi le SEO se vend en accompagnement plutôt qu'en prestation ponctuelle, et pourquoi il faut se méfier des promesses de première page en un mois. Notre guide sur le [prix du référencement naturel](/guides/prix-referencement-naturel/) détaille ce qu'il est raisonnable de payer pour quoi.",
        ],
      },
      {
        type: "cartes",
        titre: "Le vocabulaire qu'on vous servira.",
        items: [
          { titre: "Mots-clés", texte: "Les recherches que tapent vos clients. Le travail consiste à choisir les bonnes (celles qui amènent des demandes) et à y consacrer une page chacune." },
          { titre: "Netlinking (liens entrants)", texte: "Obtenir des liens d'autres sites vers le vôtre. Utile quand les liens sont naturels et pertinents ; dangereux quand ils sont achetés par paquets." },
          { titre: "SEO local", texte: "Apparaître sur les recherches de proximité (« près de moi », nom de ville), surtout via la fiche d'établissement Google. Décisif pour les métiers de terrain. Voir notre page [SEO local](/services/seo/seo-local/)." },
          { titre: "Balises title et meta description", texte: "Le titre et le résumé affichés dans les résultats de Google. Un par page, uniques, avec la recherche visée." },
          { titre: "Search Console", texte: "L'outil gratuit de Google qui montre sur quelles recherches votre site apparaît et les erreurs qu'il rencontre. Indispensable, souvent jamais ouvert." },
          { titre: "Core Web Vitals", texte: "Les mesures de vitesse et de stabilité que Google utilise. Détail dans notre guide sur la [refonte de site](/guides/refonte-site-internet/)." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "C'est quoi le SEO en trois lettres ?", a: "SEO signifie Search Engine Optimization, optimisation pour les moteurs de recherche. En français : référencement naturel. C'est le travail qui fait apparaître un site dans les résultats non payants de Google." },
          { q: "Quelle est la différence entre référencement naturel et payant ?", a: "Le référencement naturel (SEO) place le site dans les résultats organiques grâce au travail sur le site ; il prend du temps mais dure. Le référencement payant (SEA, Google Ads) affiche des annonces facturées au clic ; il est immédiat mais s'arrête avec le budget." },
          { q: "Comment améliorer le référencement naturel de son site soi-même ?", a: "Par ordre d'effet : créer et compléter la fiche d'établissement Google ; donner à chaque page un titre clair avec la recherche visée ; écrire une page par service et par ville réellement desservie ; demander des avis ; déclarer le site dans la Search Console. Le reste (technique, contenus réguliers, liens) demande du temps ou un prestataire." },
          { q: "Le SEO est-il encore utile avec l'IA ?", a: "Plus que jamais : les réponses des IA sont rédigées à partir de pages bien référencées et bien structurées. Sans SEO, pas de GEO. Les deux se travaillent ensemble." },
        ],
      },
      {
        type: "cta",
        titre: "Où en est votre site, concrètement ?",
        texte: "L'audit SEO est gratuit : positions actuelles, blocages, recherches à viser, plan d'action. Puis quinze minutes pour en parler.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Pourquoi mon site n'apparaît pas sur Google ?", href: "/guides/site-invisible-google/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "SEO ou GEO : que choisir ?", href: "/guides/geo-referencement-ia/" },
      { label: "SEO local et fiche Google", href: "/services/seo/seo-local/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/site-invisible-google/",
    type: "guide",
    titre: "Pourquoi mon site n'apparaît pas sur Google ? 9 causes et leurs solutions",
    description:
      "Votre site n'apparaît pas sur Google ? Les neuf causes les plus fréquentes, de la non-indexation à l'absence de contenu, comment vérifier chacune en deux minutes et quoi faire.",
    motCle: "pourquoi mon site n'apparaît pas sur google",
    kicker: "Guide · Diagnostic",
    h1: "Pourquoi mon site n'apparaît pas sur Google ?",
    lede: "Réponse courte : soit Google ne connaît pas votre site, soit il le connaît mais ne le juge pas pertinent pour les recherches que vous tapez. Réponse utile : neuf causes, de la plus fréquente à la plus rare, avec le test de deux minutes pour chacune et la solution.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Site absent de Google",
        texte: "un site peut être invisible pour deux raisons distinctes : il n'est pas indexé (Google ne l'a pas enregistré, ou en a été empêché) ou il est indexé mais mal positionné (il existe dans l'index, mais d'autres pages répondent mieux aux recherches). Le test « site:votredomaine.fr » dans Google distingue les deux cas en quelques secondes.",
      },
      {
        type: "etapes",
        titre: "Le test de deux minutes.",
        items: [
          { titre: "Tapez site:votredomaine.fr dans Google", texte: "Si des pages apparaissent, le site est indexé : le problème est le positionnement (causes 5 à 9). Si rien n'apparaît, le problème est l'indexation (causes 1 à 4)." },
          { titre: "Tapez le nom exact de votre entreprise", texte: "Si vous n'apparaissez pas sur votre propre nom alors que le site est indexé, la fiche Google et les signaux d'identité sont en cause." },
          { titre: "Ouvrez la Search Console", texte: "L'outil gratuit de Google dit précisément quelles pages sont indexées, lesquelles sont exclues et pourquoi. Si vous ne l'avez jamais ouverte, c'est la première chose à faire." },
        ],
      },
      {
        type: "liste",
        titre: "Les neuf causes, et leurs solutions.",
        items: [
          { titre: "1. Le site est trop récent", texte: "Google met de quelques jours à quelques semaines à découvrir un site neuf. Solution : déclarer le site dans la Search Console et y soumettre le plan du site (sitemap.xml). L'indexation suit généralement sous une à deux semaines." },
          { titre: "2. Le site interdit l'indexation", texte: "Une balise « noindex » ou un fichier robots.txt qui bloque tout, souvent oubliés depuis la phase de développement. Solution : vérifier le code source de l'accueil (chercher « noindex ») et le fichier /robots.txt ; retirer l'interdiction." },
          { titre: "3. Aucun lien ne pointe vers le site", texte: "Google découvre les pages en suivant des liens. Un site sans aucun lien entrant, pas même depuis une fiche Google ou un annuaire, peut rester inconnu. Solution : fiche d'établissement Google, annuaires professionnels, réseaux sociaux, signature d'e-mail." },
          { titre: "4. Le site est techniquement illisible", texte: "Contenu entièrement chargé par des scripts, erreurs serveur, redirections en boucle, certificat expiré. Solution : tester chaque page avec l'outil d'inspection d'URL de la Search Console ; corriger ou faire corriger." },
          { titre: "5. Les pages n'ont pas de contenu", texte: "Dix mots par page, des images sans texte, un PDF à télécharger : Google ne peut pas savoir de quoi parle la page. Solution : un texte réel par page, qui répond à une recherche précise." },
          { titre: "6. Les pages ne visent aucune recherche", texte: "Titre « Accueil », « Nos services », « Bienvenue » : aucune recherche ne correspond. Solution : un titre par page avec le service, le métier ou la ville visés (« Plombier chauffagiste à Annecy »)." },
          { titre: "7. Le site est lent ou illisible sur mobile", texte: "Google évalue la version mobile en priorité. Un site qui met six secondes à charger ou dont le texte est illisible sur téléphone est déclassé. Solution : mesurer avec PageSpeed Insights ; alléger ou reconstruire. Voir notre guide sur la [refonte](/guides/refonte-site-internet/)." },
          { titre: "8. Le contenu est copié ou dupliqué", texte: "Textes repris d'un fournisseur ou d'un concurrent, mêmes pages déclinées par ville avec un mot changé : Google n'en garde qu'une, rarement la vôtre. Solution : réécrire, et ne créer une page par ville que si son contenu est réellement différent." },
          { titre: "9. La concurrence est simplement plus forte", texte: "Site indexé, propre, mais des concurrents avec plus de contenus, plus d'avis, plus de liens, depuis plus longtemps. Solution : c'est le travail de fond du [référencement naturel](/services/seo/) : pages par intention, contenus réguliers, fiche Google, autorité. Deux à douze mois selon le secteur." },
        ],
      },
      {
        type: "texte",
        titre: "Le cas fréquent de la fiche Google qui apparaît sans le site.",
        paragraphes: [
          "Beaucoup d'entreprises constatent que leur fiche Maps apparaît sur leur nom mais que le site n'apparaît nulle part sur les recherches métier. C'est le cas typique d'un site vitrine de trois pages sans textes : la fiche porte l'identité, le site n'apporte rien de plus à Google. La solution n'est pas de « faire du SEO » sur le site tel quel, mais de lui donner des pages qui répondent aux recherches : services, métier, ville, prix, questions.",
          "Un [audit SEO gratuit](/services/seo/audit-seo-gratuit/) identifie en quelques jours laquelle des neuf causes vous concerne, et ce qu'il faut faire en premier.",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Combien de temps pour apparaître sur Google après la mise en ligne ?", a: "L'indexation prend de quelques jours à quelques semaines si le site est déclaré dans la Search Console avec un plan du site. Apparaître en bonne position sur des recherches métier prend deux à quatre mois au minimum, davantage si la concurrence est forte." },
          { q: "Mon site apparaît sur mon nom mais pas sur mon métier, pourquoi ?", a: "Parce que votre nom n'a pas de concurrence et que votre métier en a. Apparaître sur « plombier annecy » demande une page dédiée, un contenu réel, une fiche Google optimisée et des signaux d'autorité. C'est le travail du référencement naturel." },
          { q: "Faut-il payer Google pour apparaître ?", a: "Non. Les résultats organiques et la fiche Maps sont gratuits. Payer (Google Ads) affiche des annonces en plus, immédiatement, tant que le budget dure. Les deux sont indépendants." },
          { q: "Comment savoir si mon site est indexé ?", a: "Tapez site:votredomaine.fr dans Google. Si des pages s'affichent, il est indexé. La Search Console donne le détail page par page et les raisons d'exclusion." },
        ],
      },
      {
        type: "cta",
        titre: "Faites établir le diagnostic.",
        texte: "Indexation, positions, blocages, recherches à viser : l'audit est gratuit et le document reste à vous.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Audit SEO gratuit", href: "/services/seo/audit-seo-gratuit/" },
      { label: "C'est quoi le SEO ?", href: "/guides/seo/" },
      { label: "Référencement naturel pour PME", href: "/services/seo/" },
      { label: "Refonte de site : quand et pourquoi", href: "/guides/refonte-site-internet/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/web-design/",
    type: "guide",
    titre: "Web design : UX, UI, exemples et tendances 2026 pour un site de PME",
    description:
      "Web design, UX et UI expliqués simplement : ce qui fait qu'un site inspire confiance et fait agir, les tendances 2026 qui servent une PME et celles qui la desservent, et comment juger un design.",
    motCle: "web design exemple",
    kicker: "Guide · Design",
    h1: "Web design : ce qui fait qu'un site inspire confiance.",
    lede: "Réponse courte : un bon web design rend le site évident, rapide à comprendre et agréable à utiliser, en servant une action précise. Réponse utile : la différence entre UX et UI, les principes qui comptent pour une PME, les tendances 2026 à suivre ou à fuir, et une grille pour juger un design en cinq minutes.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Web design",
        texte: "conception visuelle et fonctionnelle d'un site : hiérarchie, typographie, couleurs, mise en page, images, mouvement et parcours jusqu'à l'action. Il se divise en UX (expérience utilisateur : ce que le visiteur cherche, comprend et fait) et UI (interface utilisateur : l'apparence des éléments avec lesquels il interagit). Un bon design ne se remarque pas ; il fait agir.",
      },
      {
        type: "tableau",
        titre: "UX et UI : la différence en une table.",
        colonnes: ["", "UX (expérience utilisateur)", "UI (interface utilisateur)"],
        lignes: [
          ["Question posée", "Le visiteur trouve-t-il ce qu'il cherche et agit-il ?", "Les éléments sont-ils clairs, cohérents, agréables ?"],
          ["Objets de travail", "Parcours, architecture, contenus, formulaires, friction", "Typographie, couleurs, boutons, espacements, icônes, mouvement"],
          ["Se mesure par", "Taux de conversion, temps jusqu'à l'action, abandons", "Lisibilité, cohérence, contraste, perception de qualité"],
          ["Erreur typique", "Un beau site où l'on ne sait pas quoi faire", "Un parcours logique rendu illisible par le style"],
          ["Pour une PME", "Décide si le site amène des demandes", "Décide si l'on vous croit sérieux en trois secondes"],
        ],
      },
      {
        type: "liste",
        titre: "Sept principes qui comptent pour un site de PME.",
        items: [
          { titre: "Une action par page", texte: "Réserver, demander un devis, appeler. Un bouton principal, visible sans défiler, répété en fin de page. Tout le reste est secondaire." },
          { titre: "Hiérarchie évidente", texte: "Un titre qui dit ce que vous faites et pour qui, un sous-titre qui dit pourquoi vous, puis les preuves. L'œil doit savoir où aller sans réfléchir." },
          { titre: "Typographie lisible", texte: "Une ou deux polices, des corps de texte de 16 pixels au moins, des lignes de 60 à 75 caractères, un contraste suffisant. La plupart des sites de PME échouent ici." },
          { titre: "Photos vraies", texte: "Votre équipe, vos locaux, vos réalisations. Une banque d'images se repère en une seconde et dit « nous n'avons rien à montrer »." },
          { titre: "Mobile d'abord", texte: "La majorité des visites viennent d'un téléphone. Le design est conçu pour un écran étroit, puis élargi ; jamais l'inverse." },
          { titre: "Vitesse", texte: "Un design n'est bon que s'il se charge en moins de deux secondes. Images optimisées, polices limitées, pas de vidéo en fond sur mobile." },
          { titre: "Cohérence", texte: "Mêmes boutons, mêmes espacements, mêmes couleurs partout. La cohérence est perçue comme du sérieux ; l'incohérence comme de l'amateurisme." },
        ],
      },
      {
        type: "cartes",
        titre: "Tendances 2026 : à suivre, à fuir.",
        intro: "Une tendance ne vaut que si elle sert l'action. Voici notre lecture.",
        items: [
          { titre: "À suivre : le style éditorial", texte: "Grandes typographies, beaucoup d'espace, peu de couleurs, une mise en page qui se lit comme un magazine. Il vieillit bien et met le contenu en avant." },
          { titre: "À suivre : la sobriété animée", texte: "Des transitions discrètes qui guident la lecture (apparition au défilement, états de survol), désactivables pour qui le demande." },
          { titre: "À suivre : les pages longues qui répondent", texte: "Une page de service complète (déroulé, prix, preuves, questions) plutôt que cinq pages creuses. Mieux pour le visiteur, mieux pour Google et les IA." },
          { titre: "À fuir : les effets qui ralentissent", texte: "Vidéos en fond, animations 3D lourdes, curseurs personnalisés, défilement détourné : spectaculaires en démonstration, pénibles sur un téléphone en 4G." },
          { titre: "À fuir : le dark mode par défaut", texte: "Élégant pour un studio créatif, inadapté à un cabinet ou à un artisan : moins lisible, perçu comme moins accessible." },
          { titre: "À fuir : les modèles vus partout", texte: "Même héros, mêmes trois cartes, même bandeau de logos : le visiteur l'a vu cent fois et ne vous distingue pas." },
        ],
      },
      {
        type: "etapes",
        titre: "Juger un design en cinq minutes.",
        items: [
          { titre: "Le test des trois secondes", texte: "Montrez l'accueil à quelqu'un trois secondes. Peut-il dire ce que fait l'entreprise et pour qui ? Sinon, la hiérarchie est à revoir." },
          { titre: "Le test du pouce", texte: "Sur votre téléphone, pouvez-vous atteindre l'action principale sans zoomer ni défiler longtemps ?" },
          { titre: "Le test de la lecture", texte: "Lisez un paragraphe à voix haute. Si vous butez, le texte est trop petit, trop long ou trop pâle." },
          { titre: "Le test de la vitesse", texte: "PageSpeed Insights sur mobile : au-dessus de 90, c'est bien ; en dessous de 60, le design coûte des clients." },
          { titre: "Le test de la preuve", texte: "Où sont les avis, les réalisations, les visages ? S'il faut les chercher, le doute du visiteur ne sera pas levé." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "C'est quoi l'UX design ?", a: "L'UX design (conception de l'expérience utilisateur) s'occupe du parcours du visiteur : ce qu'il cherche, où il clique, ce qui le freine, comment il arrive à l'action. Il se mesure en taux de conversion. L'UI design s'occupe de l'apparence des éléments." },
          { q: "Quelle différence entre web design et UX/UI ?", a: "Le web design est le terme général ; UX et UI en sont les deux composantes : le parcours (UX) et l'interface (UI). Un bon web designer travaille les deux, dans cet ordre." },
          { q: "Faut-il refaire le design de son site tous les combien ?", a: "Un design sobre et bien construit tient cinq ans et plus. Ce qui vieillit vite, ce sont les effets de mode et les thèmes achetés. Refaire s'impose quand le site est lent, illisible sur mobile ou ne convertit plus." },
          { q: "Combien coûte le web design d'un site ?", a: "Chez ANVSLAB, il est compris dans la création du site dès 799 € : direction artistique, maquettes, déclinaison. Sur le marché, un design sur mesure seul se facture souvent de 1 000 à 5 000 € selon le nombre de gabarits. Voir notre page web design." },
        ],
      },
      {
        type: "cta",
        titre: "Faites passer les cinq tests à votre site.",
        texte: "Ou laissez-nous le faire : en quinze minutes, nous vous disons ce que son design fait, et ne fait pas, pour vos clients.",
      },
    ],
    liens: [
      { label: "Web design sur mesure", href: "/services/web-design/" },
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Refonte de site : quand et pourquoi", href: "/guides/refonte-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/creation-site-internet/",
    type: "guide",
    titre: "Pourquoi créer un site internet pour son entreprise en 2026 ?",
    description:
      "Pourquoi créer un site internet quand on a déjà une fiche Google et Instagram ? Ce qu'un site apporte à une PME ou un artisan, ce qu'est un site vitrine, par où commencer et quelles erreurs éviter.",
    motCle: "pourquoi créer un site internet",
    kicker: "Guide · Création",
    h1: "Pourquoi créer un site internet pour son entreprise ?",
    lede: "Réponse courte : parce que c'est le seul endroit en ligne qui vous appartient, qui répond à toutes les questions de vos clients et qui travaille pour vous sans commission. Réponse utile : ce qu'un site apporte concrètement à une PME ou à un artisan en 2026, ce qu'est un site vitrine, par où commencer et les erreurs qui coûtent cher.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Site vitrine",
        texte: "site internet qui présente une entreprise, ses services et ses coordonnées dans le but d'obtenir des demandes de contact, de devis ou de rendez-vous, sans vente en ligne. Il compte généralement de cinq à quinze pages : accueil, services, réalisations ou équipe, à-propos, contact, et des pages par métier ou par ville quand le référencement le justifie.",
      },
      {
        type: "texte",
        titre: "« J'ai déjà une fiche Google et Instagram. »",
        paragraphes: [
          "C'est l'objection la plus fréquente, et elle est légitime : la fiche Google amène des appels, Instagram montre le travail. Mais aucun des deux ne vous appartient, aucun ne répond aux questions de fond (prix, déroulé, délais, garanties), aucun n'apparaît sur les recherches de vos services ou de vos spécialités, et les deux peuvent changer leurs règles demain.",
          "Le site est l'endroit où le client qui hésite vient vérifier : il a vu la fiche, il a regardé trois photos, et maintenant il veut savoir si vous faites ce qu'il cherche, combien ça coûte, comment ça se passe. S'il ne trouve pas de site, ou un site vide, il appelle le concurrent qui a répondu à ces questions.",
          "Le site est aussi le seul endroit que Google et les IA peuvent lire en entier pour comprendre votre entreprise et la recommander. Une fiche Google sans site est une identité sans contenu.",
        ],
      },
      {
        type: "cartes",
        titre: "Ce qu'un site apporte, concrètement.",
        items: [
          { titre: "Des demandes sans commission", texte: "Un rendez-vous pris sur votre site ne coûte rien, là où les plateformes de mise en relation prélèvent une part ou facturent le contact." },
          { titre: "Des réponses à toute heure", texte: "Prix, déroulé, zone, délais, questions fréquentes : le site répond quand vous dormez ou quand vous êtes sur un chantier." },
          { titre: "La présence sur vos services", texte: "« Remplacement chauffe-eau », « avocat droit du travail » : des recherches que la fiche Google ne couvre pas et que seule une page dédiée capte." },
          { titre: "La crédibilité", texte: "En 2026, une entreprise sans site paraît soit très petite, soit peu sérieuse. Un site soigné corrige cette perception en trois secondes." },
          { titre: "Un actif qui vous appartient", texte: "Domaine, contenus, positions acquises : le site se valorise avec le temps et se transmet avec l'entreprise." },
          { titre: "La base de tout le reste", texte: "Publicité, réseaux, e-mailing, fiche Google : tout renvoie vers le site. Sans lui, chaque canal s'arrête à mi-chemin." },
        ],
      },
      {
        type: "etapes",
        titre: "Par où commencer.",
        items: [
          { titre: "Listez les questions de vos clients", texte: "Celles qu'on vous pose au téléphone avant de signer. Chacune mérite une réponse sur le site ; les plus fréquentes méritent une page." },
          { titre: "Choisissez vos recherches", texte: "Vos services, votre métier, votre ville : les combinaisons que tapent vos clients. Elles donnent le plan du site." },
          { titre: "Réunissez vos preuves", texte: "Photos de réalisations, avis, qualifications, chiffres (années, clients, délais). C'est ce qui convainc." },
          { titre: "Déposez votre nom de domaine", texte: "À votre nom, pas à celui d'un prestataire. Le .fr ou le .com de votre marque, avant qu'un autre le prenne." },
          { titre: "Décidez qui construit", texte: "Vous-même sur un constructeur (temps, résultat moyen), un freelance (variable), une agence (plus cher). Notre guide sur le [prix d'un site internet](/guides/prix-site-internet-pme/) compare, et celui sur le [choix d'une agence](/guides/choisir-une-agence-web/) donne la grille." },
        ],
      },
      {
        type: "liste",
        titre: "Les erreurs qui coûtent cher.",
        items: [
          { titre: "Parler de soi plutôt qu'au client", texte: "« Notre passion », « notre histoire » en page d'accueil. Le client veut savoir ce que vous faites pour lui, combien, comment." },
          { titre: "Pas de prix, pas de délai", texte: "« Sur devis » partout. Un prix d'entrée ou une fourchette filtre les curieux et rassure les sérieux." },
          { titre: "Un site sans textes", texte: "Trois pages, dix mots, des images : invisible pour Google, inutile pour le client." },
          { titre: "Le domaine au nom du prestataire", texte: "Le jour où vous changez de prestataire, vous perdez votre adresse et vos positions. Vérifiez le titulaire." },
          { titre: "Oublier le téléphone", texte: "Un site conçu sur un grand écran, testé une fois sur mobile. La majorité de vos clients ne verront que la version mobile." },
          { titre: "Livrer puis abandonner", texte: "Pas de suivi, pas de mise à jour, horaires faux au bout d'un an. Un site vit ; prévoyez qui s'en occupe." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Pourquoi créer un site internet pour un artisan ?", a: "Parce que ses clients cherchent « métier + commune » et comparent trois résultats : la fiche Google amène le premier contact, le site transforme l'hésitation en devis avec les prestations, les photos de chantiers, les assurances et un formulaire simple. Voir notre page site internet pour artisan." },
          { q: "Qu'est-ce qu'un site vitrine, avec un exemple ?", a: "Un site qui présente l'entreprise pour obtenir des demandes, sans vente en ligne. Exemple type pour un cabinet comptable : accueil, une page par profil de client (créateurs, indépendants, PME), équipe, tarifs d'entrée, contact avec prise de rendez-vous. Dix pages, chacune répondant à une recherche." },
          { q: "Comment faire son site internet soi-même ?", a: "Avec un constructeur (Wix, Squarespace, WordPress.com) : comptez plusieurs week-ends, un résultat correct mais rarement différenciant, et un référencement limité. C'est un bon point de départ pour tester une activité ; au-delà, un site sur mesure amène plus de clients pour un coût qui n'est plus hors de portée." },
          { q: "Combien de pages faut-il ?", a: "Autant que de recherches importantes de vos clients : au minimum accueil, une page par service principal, à-propos, contact. Entre six et douze pages pour la plupart des PME au départ, puis des pages métier, ville et guides au fil du référencement." },
        ],
      },
      {
        type: "cta",
        titre: "Vous partez de zéro ? C'est le cas le plus simple.",
        texte: "Quinze minutes pour comprendre votre activité, puis un plan de site et un prix. Sans engagement.",
      },
    ],
    liens: [
      { label: "Création de site internet pour PME", href: "/services/creation-site-internet/" },
      { label: "Site vitrine", href: "/services/creation-site-internet/site-vitrine/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Comment choisir une agence web", href: "/guides/choisir-une-agence-web/" },
      { label: "Sites par métier", href: "/secteurs/" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/choisir-une-agence-web/",
    type: "guide",
    titre: "Comment choisir une agence web : la checklist en 12 points",
    description:
      "Comment choisir une agence web ou un prestataire pour son site : douze questions à poser, les réponses qui rassurent, les signaux d'alerte, et comment comparer deux devis qui ne disent pas la même chose.",
    motCle: "comment choisir une agence web",
    kicker: "Guide · Choisir",
    h1: "Comment choisir une agence web sans se tromper.",
    lede: "Réponse courte : choisissez celle qui parle de vos clients avant de parler de design, qui écrit ce qu'elle promet, et qui vous laisse propriétaire de tout. Réponse utile : douze questions à poser à chaque candidat, les réponses attendues, et une méthode pour comparer des devis qui ne couvrent pas la même chose.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Agence web",
        texte: "prestataire qui conçoit, développe et met en ligne des sites internet, et qui en assure souvent le référencement et le suivi. Le terme recouvre des réalités très différentes : du freelance seul à l'agence de cinquante personnes, du thème installé au développement sur mesure. Le bon choix dépend moins de la taille que de la méthode, de la transparence et de ce qui reste à vous à la fin.",
      },
      {
        type: "texte",
        titre: "Le critère qui prime : de qui parle-t-elle en premier ?",
        paragraphes: [
          "Une agence qui ouvre la conversation par ses réalisations, ses récompenses ou sa technologie vous parle d'elle. Une agence qui commence par vos clients, ce qu'ils cherchent, ce qui les fait hésiter, vous parle de votre résultat. La seconde construira un site qui amène des demandes ; la première, un site qui lui fera un beau cas d'étude.",
          "Le second critère est l'écrit. Objectifs, périmètre, délais, ce qui est compris, ce qui ne l'est pas, à qui appartient quoi : tout ce qui n'est pas écrit n'existe pas. Les douze questions ci-dessous servent à obtenir ces écrits.",
        ],
      },
      {
        type: "etapes",
        titre: "Les douze questions à poser.",
        items: [
          { titre: "Qui écrit les textes ?", texte: "Réponse attendue : l'agence, à partir d'un entretien, avec votre relecture. Alerte : « vous nous fournissez les contenus »." },
          { titre: "Thème ou sur mesure ?", texte: "Attendue : une réponse claire et assumée. Alerte : le mot « thème » absent du devis mais présent dans la livraison." },
          { titre: "Quelles recherches le site doit-il gagner ?", texte: "Attendue : une liste de mots-clés écrite dans la proposition. Alerte : « SEO compris » sans liste." },
          { titre: "Comment mesure-t-on le résultat ?", texte: "Attendue : demandes ou rendez-vous obtenus, positions sur la liste, rapport mensuel. Alerte : un score de visibilité abstrait." },
          { titre: "À qui appartiennent le domaine, le code, les comptes ?", texte: "Attendue : à vous, dès le départ. Alerte : domaine au nom de l'agence, code non remis, abonnement obligatoire pour garder le site." },
          { titre: "Que se passe-t-il si nous arrêtons ?", texte: "Attendue : le site reste en ligne, vous repartez avec tout, documentation comprise. Alerte : le site s'éteint ou devient inutilisable." },
          { titre: "Quel est le délai, et qu'est-ce qui le fait glisser ?", texte: "Attendue : un calendrier avec les étapes de validation qui dépendent de vous. Alerte : « deux semaines » sans conditions." },
          { titre: "Combien d'allers-retours sur le design ?", texte: "Attendue : un nombre, et la méthode qui le rend suffisant (textes validés avant). Alerte : « autant que nécessaire », qui finit en facturation d'avenants." },
          { titre: "Qu'y a-t-il après la livraison ?", texte: "Attendue : support et suivi compris pour une durée écrite, puis un prix mensuel clair sans engagement. Alerte : engagement de 24 mois ou maintenance obligatoire chère." },
          { titre: "Le site sera-t-il rapide sur mobile ?", texte: "Attendue : un engagement mesurable (PageSpeed, Core Web Vitals) et la méthode. Alerte : « bien sûr » sans mesure." },
          { titre: "Puis-je modifier les contenus moi-même ?", texte: "Attendue : oui pour les contenus courants, avec une courte formation. Alerte : toute modification facturée." },
          { titre: "Pouvez-vous me montrer un site qui amène des clients, et le prouver ?", texte: "Attendue : un exemple avec des chiffres (positions, demandes), ou l'honnêteté de dire que l'agence est jeune. Alerte : un portfolio d'images sans résultats." },
        ],
      },
      {
        type: "tableau",
        titre: "Comparer deux devis qui ne disent pas la même chose.",
        intro: "Ramenez chaque devis à cette grille avant de comparer les totaux.",
        colonnes: ["Poste", "À vérifier", "Si absent"],
        lignes: [
          ["Textes", "Rédigés, relus, intégrés", "Ajoutez 100 à 250 € par page"],
          ["Design", "Sur mesure ou thème, nombre de gabarits", "Ajoutez le thème et sa licence, ou acceptez l'apparence"],
          ["Référencement", "Liste de mots-clés, structure, fiche Google, suivi", "Ajoutez une prestation SEO ou acceptez l'invisibilité"],
          ["Propriété", "Domaine, code, comptes à votre nom", "Négociez ou écartez"],
          ["Suivi", "Durée comprise, prix mensuel ensuite", "Ajoutez 30 à 100 € par mois"],
          ["Hébergement et domaine", "Compris ou à votre charge, à quel prix", "Ajoutez 50 à 300 € par an"],
        ],
        note: "Nos trois formules à 799, 1 499 et 2 999 € sont construites pour que cette grille soit entièrement cochée : textes, design sur mesure, référencement avec liste écrite, propriété totale, support douze mois et suivi six mois compris.",
      },
      {
        type: "faq",
        items: [
          { q: "Agence web ou freelance : que choisir ?", a: "Un bon freelance fait souvent aussi bien qu'une agence pour un site vitrine, moins cher, avec un interlocuteur unique ; le risque est la disponibilité et la continuité. Une agence apporte plusieurs compétences (design, rédaction, SEO, développement) et une continuité ; le risque est le prix et la dilution. Dans les deux cas, les douze questions s'appliquent." },
          { q: "Faut-il choisir une agence web près de chez soi ?", a: "Ce n'est plus nécessaire : la plupart des projets se mènent à distance. La proximité compte pour les photos et pour un métier très local ; la méthode et la transparence comptent davantage." },
          { q: "Quelle est la meilleure agence web ?", a: "Celle qui répond clairement aux douze questions, qui écrit ses engagements et qui vous laisse propriétaire de tout. Les classements en ligne sont le plus souvent publiés par des annuaires rémunérés par les agences ou par les agences elles-mêmes." },
          { q: "Combien de devis demander ?", a: "Deux ou trois, ramenés à la même grille. Au-delà, vous passez plus de temps à comparer qu'à décider, et les écarts viennent surtout de périmètres différents." },
        ],
      },
      {
        type: "cta",
        titre: "Posez-nous les douze questions.",
        texte: "Quinze minutes, des réponses écrites, et un audit gratuit de votre présence actuelle. Vous comparez ensuite.",
      },
    ],
    liens: [
      { label: "Création de site internet pour PME", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Prix du référencement naturel", href: "/guides/prix-referencement-naturel/" },
      { label: "Les trois formules", href: "/#tarifs" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/guides/refonte-site-internet/",
    type: "guide",
    titre: "Refonte de site internet : quand, pourquoi, combien, et les Core Web Vitals",
    description:
      "Quand refaire son site internet ? Les signes qui ne trompent pas, les Core Web Vitals expliqués, comment refondre sans perdre ses positions Google, et ce que coûte une refonte en 2026.",
    motCle: "refonte site internet",
    kicker: "Guide · Refonte",
    h1: "Refonte de site internet : quand, pourquoi et comment.",
    lede: "Réponse courte : refaites votre site quand il est lent sur mobile, quand il ne convertit plus ou quand il ne reflète plus ce que vous êtes, et jamais sans un plan de redirections. Réponse utile : les signes qui imposent la refonte, les Core Web Vitals sans jargon, la méthode qui préserve vos positions, et les prix.",
    dateMaj: MAJ,
    blocs: [
      {
        type: "definition",
        terme: "Refonte de site internet",
        texte: "reconstruction partielle ou totale d'un site existant : design, structure, contenus, technique, ou l'ensemble. Une refonte réussie conserve ce que le site a acquis (positions Google, liens entrants, adresses connues) grâce à un plan de redirections, et corrige ce qui le freine : lenteur, illisibilité mobile, contenus datés, parcours qui ne convertit pas.",
      },
      {
        type: "liste",
        titre: "Les signes qui imposent une refonte.",
        items: [
          { titre: "Il est lent sur mobile", texte: "Plus de trois secondes pour afficher le contenu principal, mesuré avec PageSpeed Insights. Chaque seconde de plus fait partir des visiteurs et pèse sur Google." },
          { titre: "Il n'amène plus de demandes", texte: "Du trafic mais pas de formulaires, pas d'appels : le parcours ou le message est en cause. Souvent les deux." },
          { titre: "Il ne reflète plus l'entreprise", texte: "Services disparus, équipe changée, photos d'il y a huit ans, prix faux. Le client qui compare le remarque." },
          { titre: "Il est illisible sur téléphone", texte: "Texte minuscule, boutons impossibles à toucher, menu cassé : la majorité de vos visiteurs partent." },
          { titre: "Il repose sur une technologie à bout de souffle", texte: "CMS plus mis à jour, extensions abandonnées, alertes de sécurité, prestataire disparu." },
          { titre: "Il ne peut pas accueillir ce qu'il vous faut", texte: "Pages par métier, prise de rendez-vous, assistant, contenus : chaque ajout est un bricolage." },
        ],
      },
      {
        type: "tableau",
        titre: "Les Core Web Vitals, sans jargon.",
        intro: "Les trois mesures que Google utilise pour juger l'expérience d'une page. Elles se lisent dans PageSpeed Insights et dans la Search Console.",
        colonnes: ["Mesure", "Ce qu'elle mesure", "Bon", "À corriger"],
        lignes: [
          ["LCP (Largest Contentful Paint)", "Le temps d'affichage du plus grand élément visible, en général l'image ou le titre principal", "Moins de 2,5 s", "Plus de 4 s"],
          ["INP (Interaction to Next Paint)", "Le délai entre une action (clic, saisie) et la réaction visible de la page", "Moins de 200 ms", "Plus de 500 ms"],
          ["CLS (Cumulative Layout Shift)", "Les sauts de mise en page pendant le chargement (le bouton qui bouge au moment où l'on clique)", "Moins de 0,1", "Plus de 0,25"],
        ],
        note: "Les causes habituelles : images trop lourdes, polices et scripts tiers, publicités ou vidéos en fond, thèmes surchargés. Un site statique sur mesure passe ces trois seuils sans effort ; un site WordPress à thème lourd les rate presque toujours sur mobile.",
      },
      {
        type: "etapes",
        titre: "Refondre sans perdre ses positions.",
        intro: "C'est le risque principal d'une refonte : un site plus beau qui disparaît de Google parce que les anciennes adresses mènent à des erreurs.",
        items: [
          { titre: "Inventaire de l'existant", texte: "Toutes les pages, leurs positions, leur trafic, les liens entrants qui pointent vers elles. Ce qui rapporte est identifié avant de toucher à quoi que ce soit." },
          { titre: "Nouvelle architecture", texte: "Une page par intention, les pages inutiles fusionnées, les manquantes ajoutées. Chaque ancienne adresse a une destination dans la nouvelle structure." },
          { titre: "Plan de redirections", texte: "Chaque ancienne URL redirige définitivement (301) vers sa nouvelle page. Aucune ne doit finir en erreur 404." },
          { titre: "Contenus consolidés", texte: "Les textes qui rankent sont conservés et enrichis, pas réécrits à zéro. Les nouveaux complètent." },
          { titre: "Bascule et surveillance", texte: "Mise en ligne, soumission du nouveau plan du site, surveillance quotidienne des erreurs et des positions pendant un mois. Une baisse temporaire de quelques jours est normale ; une chute durable signale une redirection manquée." },
        ],
      },
      {
        type: "texte",
        titre: "Combien coûte une refonte ?",
        paragraphes: [
          "Une refonte complète coûte en général entre 60 et 100 % du prix d'un site neuf : le travail de conception est le même, et s'y ajoutent l'inventaire, la consolidation des contenus et le plan de redirections. Une refonte graphique seule (nouvelle apparence, même structure) est moins chère ; une refonte technique seule (migration, vitesse) dépend entièrement de l'existant.",
          "Chez ANVSLAB, la refonte est au même prix que la création : 799, 1 499 ou 2 999 € selon le pack, redirections et consolidation comprises. Le détail est sur notre page [refonte de site internet](/services/creation-site-internet/refonte/), et les fourchettes du marché dans notre guide sur le [prix d'un site internet](/guides/prix-site-internet-pme/).",
          "Une landing page (page unique pour une campagne ou une offre) n'est pas une refonte : c'est une page conçue pour une seule action, chiffrée à part. Voir notre page [landing page](/services/creation-site-internet/landing-page/).",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Quand faut-il refaire son site internet ?", a: "Quand il est lent sur mobile (plus de trois secondes), quand il n'amène plus de demandes malgré du trafic, quand il ne reflète plus l'entreprise, ou quand sa technologie n'est plus maintenue. En moyenne tous les quatre à six ans pour un site bien construit, plus tôt pour un site à thème." },
          { q: "Une refonte fait-elle perdre son référencement ?", a: "Seulement si elle est mal faite : anciennes adresses non redirigées, contenus qui rankaient supprimés, site plus lent qu'avant. Avec un inventaire, un plan de redirections et une consolidation des contenus, une refonte améliore les positions dans la grande majorité des cas." },
          { q: "C'est quoi les Core Web Vitals ?", a: "Trois mesures de Google sur l'expérience d'une page : LCP (vitesse d'affichage du contenu principal, bon sous 2,5 s), INP (réactivité aux clics, bon sous 200 ms) et CLS (stabilité visuelle, bon sous 0,1). Elles pèsent dans le classement et se lisent dans PageSpeed Insights." },
          { q: "Mon site est lent, que faire sans tout refaire ?", a: "Compresser et redimensionner les images, supprimer les extensions et scripts inutiles, limiter les polices, activer la mise en cache. Cela suffit souvent à passer le LCP sous 2,5 s. Si le thème lui-même est lourd, seule une refonte règle le problème." },
        ],
      },
      {
        type: "cta",
        titre: "Votre site mérite-t-il une refonte ?",
        texte: "L'audit gratuit mesure sa vitesse, ses positions et ce qu'il convertit, puis dit honnêtement s'il faut refaire, corriger ou ne rien changer.",
        label: "Demander l'audit gratuit",
      },
    ],
    liens: [
      { label: "Refonte de site internet : le service", href: "/services/creation-site-internet/refonte/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Pourquoi mon site n'apparaît pas sur Google ?", href: "/guides/site-invisible-google/" },
      { label: "Web design : ce qui inspire confiance", href: "/guides/web-design/" },
    ],
  },
];
