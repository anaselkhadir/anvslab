import type { Bloc, Page } from "./types";

const MAJ = "2026-11-08";

type Metier = {
  slug: string;
  nom: string;            // « avocat »
  pluriel: string;        // « avocats »
  titre: string;
  description: string;
  motCle: string;
  h1: string;
  lede: string;
  contexte: string[];     // 2 paragraphes : enjeux propres au métier
  doitFaire: { titre: string; texte: string }[];
  recherches: { titre: string; texte: string }[];
  local: { titre: string; texte: string }[];
  faq: { q: string; a: string }[];
  cta: { titre: string; texte: string };
};

const metiers: Metier[] = [
  {
    slug: "avocat",
    nom: "avocat",
    pluriel: "avocats",
    titre: "Site internet pour avocat : être choisi, dans les règles",
    description:
      "Création de site internet pour avocats et cabinets : pages par domaine de droit, prise de rendez-vous, référencement local, dans le respect des règles de votre Ordre. Dès 799 € tout compris.",
    motCle: "création site internet avocat",
    h1: "Un site qui inspire confiance avant le premier rendez-vous.",
    lede: "Un justiciable qui cherche un avocat compare trois ou quatre sites en dix minutes, souvent dans l'urgence. Il retient celui qui explique clairement ce qu'il fait, pour qui, et comment prendre rendez-vous. Nous construisons ce site, dans le respect des règles déontologiques de votre barreau.",
    contexte: [
      "Le site d'un cabinet d'avocats doit tenir deux exigences à la fois : convaincre un client qui ne connaît rien au droit, et rester irréprochable au regard des règles de communication de la profession. Trop de sites sacrifient l'une à l'autre : jargon illisible d'un côté, promesses déplacées de l'autre.",
      "Nous écrivons des pages par domaine d'intervention (famille, travail, immobilier, pénal, affaires…) qui répondent aux questions que se posent vraiment les clients, avec un ton sobre et informatif. Chaque page mène à une prise de rendez-vous simple, avec les premières informations utiles : honoraires de consultation, pièces à apporter, délais.",
    ],
    doitFaire: [
      { titre: "Une page par domaine de droit", texte: "« Avocat droit du travail à [ville] » est une recherche à part entière. Chaque domaine a sa page, ses questions fréquentes et son appel à rendez-vous." },
      { titre: "Expliquer le déroulé et les honoraires", texte: "Consultation, convention d'honoraires, aide juridictionnelle : ce que le client veut savoir avant d'appeler, dit clairement." },
      { titre: "Rassurer sans promettre", texte: "Parcours, inscription au barreau, domaines, publications : les faits qui établissent la compétence, sans superlatif ni résultat garanti." },
      { titre: "Prise de rendez-vous en deux clics", texte: "Formulaire court, créneaux, confirmation et rappel automatiques. Un client dans l'urgence ne remplit pas douze champs." },
      { titre: "Confidentialité exemplaire", texte: "Formulaires sobres, mentions légales et politique de confidentialité complètes, aucun traceur publicitaire." },
    ],
    recherches: [
      { titre: "Métier + domaine + ville", texte: "« avocat divorce lyon », « avocat licenciement nantes » : la recherche la plus fréquente et la plus décisive. Une page par combinaison pertinente." },
      { titre: "Questions pratiques", texte: "« combien coûte un avocat », « avocat gratuit », « comment se passe une consultation » : des guides courts qui captent le client en amont." },
      { titre: "Situation vécue", texte: "« licenciement sans cause réelle », « garde alternée refusée » : des pages qui partent du problème du client, pas de la nomenclature juridique." },
    ],
    local: [
      { titre: "Fiche Google du cabinet", texte: "Catégorie exacte, domaines, horaires, photos du cabinet, réponses aux avis : pour un avocat, la fiche Maps est souvent le premier contact." },
      { titre: "Cohérence Ordre, annuaires, site", texte: "Nom, adresse, domaines identiques partout : annuaire du barreau, annuaires juridiques, fiche Google, LinkedIn." },
      { titre: "Contenus locaux", texte: "Tribunaux compétents, délais locaux, permanences : des informations utiles qui ancrent le cabinet dans sa ville." },
    ],
    faq: [
      { q: "Un avocat a-t-il le droit d'avoir un site internet et de faire du référencement ?", a: "Oui. La communication des avocats est autorisée et encadrée par le Règlement intérieur national et par chaque barreau : information sincère, pas de démarchage non sollicité, pas de mention comparative ni de promesse de résultat. Nous écrivons dans ce cadre et vous validez chaque texte." },
      { q: "Combien coûte un site internet pour un cabinet d'avocats ?", a: "Chez ANVSLAB, 799 € tout compris pour le pack Initial (site sur mesure, textes, référencement de base, fiche Google, support douze mois). Le pack Équilibre à 1 499 € ajoute les pages par domaine et par ville et le tableau de bord ; le pack Intense à 2 999 € le programme de contenus et la visibilité dans les IA." },
      { q: "Peut-on afficher les honoraires sur le site ?", a: "Oui, et c'est recommandé : le tarif de la consultation et les modes de facturation (forfait, horaire, résultat dans les limites autorisées) rassurent et filtrent. Nous les présentons sobrement, avec la mention de la convention d'honoraires." },
    ],
    cta: { titre: "Parlons de votre cabinet.", texte: "Quinze minutes pour comprendre vos domaines et votre barreau, puis un audit gratuit de votre présence actuelle." },
  },
  {
    slug: "artisan",
    nom: "artisan",
    pluriel: "artisans",
    titre: "Site internet pour artisan : des devis, pas des visites",
    description:
      "Création de site internet pour artisans (plombier, électricien, menuisier, maçon, chauffagiste…) : pages par prestation et par commune, demande de devis, fiche Google Maps. Dès 799 € tout compris.",
    motCle: "création site internet artisan",
    h1: "Un site qui remplit le carnet de chantiers.",
    lede: "Un particulier qui cherche un plombier ou un menuisier tape le métier et sa commune, regarde trois résultats, appelle celui qui répond et inspire confiance. Nous construisons le site qui vous place dans ces trois résultats, et l'assistant qui répond quand vous êtes sur un chantier.",
    contexte: [
      "Pour un artisan, le site n'a qu'un rôle : transformer une recherche locale en demande de devis. Tout le reste est secondaire. Cela suppose des pages par prestation (« remplacement chauffe-eau », « pose de fenêtres ») et par commune desservie, des photos de vrais chantiers, des avis, et un moyen de vous joindre qui ne dépend pas de votre disponibilité.",
      "C'est aussi le métier où les appels manqués coûtent le plus cher : vous êtes sur un chantier, le téléphone sonne, le client appelle le suivant. Nos packs réunissent les messages du site et de WhatsApp, et peuvent ajouter un [agent téléphonique IA](/services/assistant-ia-pme/) qui décroche, qualifie et prend le rendez-vous.",
    ],
    doitFaire: [
      { titre: "Une page par prestation", texte: "Dépannage, installation, rénovation, entretien : chaque prestation a sa page, avec le déroulé, les délais et une fourchette de prix quand c'est possible." },
      { titre: "Une page par commune desservie", texte: "Quand les recherches le justifient : les communes de votre zone, avec un contenu réel (chantiers réalisés, délais d'intervention), pas un texte copié." },
      { titre: "Des photos de vos chantiers", texte: "Avant / après, en situation. Une banque d'images se repère en une seconde et fait fuir." },
      { titre: "Demande de devis en trente secondes", texte: "Trois champs, une photo facultative, un bouton WhatsApp. Confirmation immédiate, rappel automatique." },
      { titre: "Preuves de sérieux", texte: "Assurance décennale, qualifications (RGE, Qualibat…), avis Google, années d'activité : affichés là où le doute apparaît." },
    ],
    recherches: [
      { titre: "Métier + commune", texte: "« plombier annecy », « électricien bayonne » : la recherche reine, dominée par la fiche Google Maps et les annuaires. Il faut les deux : site et fiche." },
      { titre: "Prestation + urgence", texte: "« fuite d'eau urgence », « dépannage chaudière week-end » : des pages dédiées avec le numéro en premier." },
      { titre: "Prix", texte: "« prix remplacement chauffe-eau », « tarif pose fenêtre pvc » : des guides courts avec des fourchettes honnêtes qui amènent des devis qualifiés." },
    ],
    local: [
      { titre: "La fiche Google Maps avant tout", texte: "Pour un artisan, elle génère souvent plus d'appels que le site. Catégories exactes, zone desservie, photos, horaires, avis sollicités après chaque chantier." },
      { titre: "Annuaires qui comptent", texte: "Pages Jaunes, annuaires de la fédération, plateformes de mise en relation : mêmes coordonnées partout." },
      { titre: "Avis réguliers", texte: "Un message automatique après chaque chantier terminé, avec le lien direct. Les avis récents pèsent plus que les anciens." },
    ],
    faq: [
      { q: "Un artisan a-t-il vraiment besoin d'un site, avec la fiche Google ?", a: "La fiche amène le premier contact ; le site transforme l'hésitation en devis : prestations détaillées, photos, assurances, prix indicatifs. Les deux ensemble se renforcent, et le site est ce qui vous appartient si Google change ses règles." },
      { q: "Combien coûte un site internet pour un artisan ?", a: "799 € tout compris chez ANVSLAB : site sur mesure, textes, référencement de base, fiche Google Maps, messages site et WhatsApp réunis, support douze mois. Les pages par commune et le tableau de bord sont dans le pack Équilibre à 1 499 €." },
      { q: "Je n'ai pas le temps de m'occuper d'un site.", a: "C'est prévu : nous écrivons les textes à partir d'un entretien et de vos photos, nous gérons la mise en ligne et le suivi. Votre seule tâche : envoyer quelques photos de chantiers et relire les textes." },
    ],
    cta: { titre: "Votre prochain chantier commence par un appel de quinze minutes.", texte: "Nous regardons votre fiche Google, vos concurrents et les recherches de votre zone, gratuitement." },
  },
  {
    slug: "restaurant",
    nom: "restaurant",
    pluriel: "restaurants",
    titre: "Site internet pour restaurant : réservations et visibilité locale",
    description:
      "Création de site internet pour restaurants : carte à jour, réservation, fiche Google Maps, photos, référencement local. Un site rapide qui remplit la salle. Dès 799 € tout compris.",
    motCle: "création site internet restaurant",
    h1: "Un site qui remplit la salle, pas seulement l'écran.",
    lede: "Un client qui cherche où dîner regarde la fiche Google, les photos, les avis, puis veut deux choses : la carte et réserver. Nous construisons un site rapide qui donne les deux en un geste, et qui se place sur les recherches « restaurant [type] [quartier] ».",
    contexte: [
      "Le site d'un restaurant est consulté debout, sur un téléphone, souvent à quelques mètres de la porte. Il doit charger en une seconde, montrer la carte (lisible, pas un PDF scanné), les horaires, l'adresse et le bouton de réservation. Tout le reste (histoire, chef, équipe) vient après, pour ceux qui veulent en savoir plus.",
      "En référencement, le restaurant est le métier le plus local qui soit : la fiche Google Maps, les photos et les avis décident de la visite. Le site vient confirmer et convertir, et il capte les recherches que la fiche ne couvre pas : « brunch dimanche », « privatisation », « menu de groupe », « restaurant terrasse ».",
    ],
    doitFaire: [
      { titre: "La carte en HTML, à jour", texte: "Lisible, cherchable par Google, modifiable par vous en cinq minutes. Avec allergènes et prix." },
      { titre: "Réserver sans friction", texte: "Bouton visible partout, lien vers votre outil de réservation ou formulaire simple, confirmation et rappel automatiques pour limiter les absences." },
      { titre: "Photos vraies", texte: "Les plats, la salle, l'équipe : une séance photo d'une demi-journée vaut tous les textes." },
      { titre: "Pages pour les occasions", texte: "Brunch, groupes, privatisation, événements, menu du jour : des recherches précises, des pages dédiées." },
      { titre: "Infos pratiques en premier", texte: "Horaires, adresse, accès, parking, téléphone cliquable : sur chaque page, en haut." },
    ],
    recherches: [
      { titre: "Type + quartier", texte: "« restaurant italien bastille », « japonais lyon part-dieu » : fiche Google et site se partagent la première page. La fiche attire, le site convertit." },
      { titre: "Occasion", texte: "« brunch dimanche », « restaurant anniversaire groupe », « privatiser un restaurant » : des pages dédiées, peu concurrentielles, très rentables." },
      { titre: "Marque", texte: "Le nom de votre restaurant : vous devez être premier, devant les plateformes d'avis et de livraison, avec vos propres horaires et votre propre réservation." },
    ],
    local: [
      { titre: "Fiche Google Maps complète", texte: "Catégories, menu, photos renouvelées, horaires exacts (jours fériés compris), réponses aux avis, publications. C'est le premier levier." },
      { titre: "Avis", texte: "Demande automatique après la réservation, lien direct. Répondre à tous, surtout aux critiques." },
      { titre: "Cohérence des plateformes", texte: "Mêmes horaires et même carte sur Google, le site, les plateformes de réservation et de livraison." },
    ],
    faq: [
      { q: "Un restaurant a-t-il besoin d'un site en plus de Google et Instagram ?", a: "Oui, pour trois raisons : la carte à jour et cherchable, la réservation sans commission, et les recherches d'occasion (brunch, groupe, privatisation) que ni la fiche ni Instagram ne captent. Le site est aussi ce qui vous appartient." },
      { q: "Combien coûte un site internet pour un restaurant ?", a: "799 € tout compris chez ANVSLAB : site sur mesure, textes, carte modifiable, référencement local, fiche Google Maps, support douze mois. Le pack Équilibre à 1 499 € ajoute Instagram, Facebook et Messenger raccordés et le tableau de bord quotidien." },
      { q: "Puis-je modifier la carte moi-même ?", a: "Oui, en quelques minutes, sans compétence technique. C'est prévu dès la conception." },
    ],
    cta: { titre: "Parlons de votre restaurant.", texte: "Quinze minutes, un regard sur votre fiche Google et vos concurrents de quartier, une recommandation." },
  },
  {
    slug: "agence-immobiliere",
    nom: "agence immobilière",
    pluriel: "agences immobilières",
    titre: "Site internet pour agence immobilière : mandats et acheteurs",
    description:
      "Création de site internet pour agences immobilières : estimation en ligne, biens à jour, pages par quartier, référencement local. Un site qui rentre des mandats. Dès 799 € tout compris.",
    motCle: "création site internet agence immobilière",
    h1: "Un site qui rentre des mandats, pas seulement des visites.",
    lede: "Les acheteurs sont sur les portails. Les vendeurs, eux, cherchent « estimation appartement [ville] » et « agence immobilière [quartier] ». C'est là que votre site doit être : clair sur votre méthode, précis sur votre secteur, et prêt à prendre un rendez-vous d'estimation.",
    contexte: [
      "Une agence immobilière ne gagnera pas la bataille des annonces contre les grands portails. Elle peut gagner celle du mandat : convaincre un propriétaire de lui confier son bien. Cela se joue sur des pages locales (quartiers, communes, types de biens), une page d'estimation qui rassure, des preuves (ventes récentes, délais, avis) et un parcours de contact simple.",
      "Le site doit aussi servir votre fiche Google et vos annonces : biens à jour, photos, cohérence des coordonnées. Et il doit charger vite sur mobile, parce qu'un vendeur consulte souvent depuis son salon, le soir, en comparant trois agences.",
    ],
    doitFaire: [
      { titre: "Une page estimation qui rassure", texte: "Méthode, délai, gratuité, ce qui se passe ensuite. Formulaire court ou prise de rendez-vous directe." },
      { titre: "Des pages par quartier et par commune", texte: "Marché local, prix observés, biens vendus, vie de quartier : un contenu réel qui montre que vous connaissez le terrain." },
      { titre: "Biens à jour, synchronisés", texte: "Flux depuis votre logiciel de transaction : jamais de bien vendu encore affiché." },
      { titre: "Preuves", texte: "Ventes récentes (avec accord), délais moyens, avis Google, équipe avec visages et numéros directs." },
      { titre: "Contact direct", texte: "Téléphone et WhatsApp par négociateur, rendez-vous d'estimation en ligne, confirmation et rappel." },
    ],
    recherches: [
      { titre: "Estimation + ville", texte: "« estimation maison toulouse », « estimer mon appartement gratuitement » : la recherche du vendeur, la plus précieuse. Une page dédiée, par ville." },
      { titre: "Agence + quartier", texte: "« agence immobilière croix-rousse », « immobilier vieux-lille » : fiche Google et pages quartier se partagent la première page." },
      { titre: "Questions du vendeur", texte: "« frais d'agence qui paie », « mandat exclusif ou simple », « combien de temps pour vendre » : des guides courts qui installent votre expertise." },
    ],
    local: [
      { titre: "Fiche Google de l'agence", texte: "Catégorie, zone, photos de l'équipe et de la vitrine, avis de vendeurs et d'acheteurs, réponses systématiques." },
      { titre: "Pages quartier liées à la fiche", texte: "Chaque page de quartier renvoie vers la fiche et inversement : Google comprend votre territoire." },
      { titre: "Partenaires locaux", texte: "Notaires, diagnostiqueurs, artisans, commerçants : des liens naturels entre sites du même quartier." },
    ],
    faq: [
      { q: "Faut-il afficher les biens sur le site si on est déjà sur les portails ?", a: "Oui, synchronisés automatiquement : un vendeur veut voir ce que vous vendez et comment vous le présentez. Mais le cœur du site est la page estimation et les pages de quartier, pas la liste des biens." },
      { q: "Combien coûte un site internet pour une agence immobilière ?", a: "Chez ANVSLAB, 799 € pour le pack Initial. Pour une agence, le pack Équilibre à 1 499 € est généralement le bon : pages par quartier et par commune, réseaux raccordés, tableau de bord quotidien. La synchronisation des biens avec votre logiciel est chiffrée après audit." },
      { q: "Pouvez-vous faire une page par quartier sans dupliquer le contenu ?", a: "C'est précisément le travail : chaque page a son marché, ses prix, ses ventes, ses commerces. Une page quartier copiée-collée ne se référence pas et nuit au reste du site." },
    ],
    cta: { titre: "Combien de mandats votre site rentre-t-il ?", texte: "Quinze minutes pour regarder votre présence locale face aux agences voisines, gratuitement." },
  },
  {
    slug: "architecte",
    nom: "architecte",
    pluriel: "architectes",
    titre: "Site internet pour architecte : un portfolio qui amène des projets",
    description:
      "Création de site internet pour architectes et architectes d'intérieur : portfolio soigné, pages par type de projet, démarche, référencement local. Un site à la hauteur de votre travail. Dès 799 €.",
    motCle: "création site internet architecte",
    h1: "Un site à la hauteur de ce que vous dessinez.",
    lede: "Un maître d'ouvrage choisit un architecte sur ses réalisations, sa démarche et la confiance qu'inspire le premier contact. Votre site doit montrer les trois, avec la précision graphique que vous mettez dans vos plans, et se placer sur « architecte [type de projet] [ville] ».",
    contexte: [
      "Le site d'un architecte est d'abord un portfolio, mais un portfolio qui se référence : chaque projet a sa page, son type (extension, rénovation, maison neuve, tertiaire, intérieur), sa commune, ses photos en grand, son récit court. C'est ce qui permet d'apparaître sur « extension maison bordeaux » autant que sur votre nom.",
      "Le design du site doit être irréprochable, parce qu'il est jugé par des gens qui jugent le design pour vivre. Sobriété, typographie, rythme des images, chargement rapide malgré les visuels : c'est notre terrain, et c'est pourquoi nous travaillons les textes et la structure avant la moindre maquette.",
    ],
    doitFaire: [
      { titre: "Un portfolio structuré pour la recherche", texte: "Une page par projet, classée par type et par lieu, avec légendes et texte court. Beau et indexable." },
      { titre: "Une page par type de mission", texte: "Extension, surélévation, rénovation, construction neuve, aménagement intérieur, permis de construire : ce que vous faites, pour qui, comment, en combien de temps." },
      { titre: "La démarche et les honoraires", texte: "Étapes d'un projet, mode de rémunération (pourcentage, forfait, mission partielle), délais : les questions qu'un client n'ose pas poser." },
      { titre: "Images rapides", texte: "Grandes photos optimisées, chargées à la demande : le site reste rapide sur mobile." },
      { titre: "Premier contact simple", texte: "Formulaire court (type de projet, commune, budget indicatif), prise de rendez-vous, réponse sous 24 h." },
    ],
    recherches: [
      { titre: "Type de projet + ville", texte: "« architecte extension lyon », « architecte d'intérieur paris 11 » : la recherche la plus qualifiée. Une page par combinaison pertinente." },
      { titre: "Questions réglementaires", texte: "« architecte obligatoire 150 m2 », « permis de construire délai » : des guides courts qui captent le projet dès l'idée." },
      { titre: "Prix", texte: "« honoraires architecte pourcentage », « combien coûte un architecte pour une extension » : la transparence rassure et filtre." },
    ],
    local: [
      { titre: "Fiche Google de l'agence", texte: "Catégorie, photos de projets, zone d'intervention, avis de maîtres d'ouvrage." },
      { titre: "Ordre et annuaires", texte: "Inscription à l'Ordre, annuaires d'architectes, plateformes de projets : mêmes coordonnées et même description partout." },
      { titre: "Projets géolocalisés", texte: "Chaque projet mentionne sa commune : le site couvre votre territoire sans pages artificielles." },
    ],
    faq: [
      { q: "Mon site actuel est un portfolio sur un outil de créatifs. Pourquoi changer ?", a: "Ces outils montrent bien les images mais se référencent mal : pas de pages par type de projet, textes absents, chargement lent. Si votre site n'apparaît que sur votre nom, il ne vous amène aucun nouveau client." },
      { q: "Combien coûte un site internet pour un architecte ?", a: "799 € tout compris chez ANVSLAB pour le pack Initial : design sur mesure, portfolio structuré, textes, référencement, support douze mois. Le pack Équilibre à 1 499 € ajoute les pages par type de mission et par ville et le tableau de bord." },
      { q: "Pouvez-vous respecter ma charte graphique ?", a: "Oui, c'est même préférable : nous la prolongeons sur le web. Si vous n'en avez pas, nous concevons une identité sobre qui laisse la place à vos projets." },
    ],
    cta: { titre: "Montrez-nous votre portfolio.", texte: "Quinze minutes pour regarder ce que votre site actuel fait, et ne fait pas, pour vos projets." },
  },
  {
    slug: "coach",
    nom: "coach",
    pluriel: "coachs",
    titre: "Site internet pour coach : des séances réservées, une expertise visible",
    description:
      "Création de site internet pour coachs (sportif, professionnel, de vie) : offres claires, réservation en ligne, contenus qui prouvent l'expertise, référencement local et thématique. Dès 799 €.",
    motCle: "création site internet coach",
    h1: "Un site qui remplit votre agenda de séances.",
    lede: "Un futur client de coach hésite longtemps et cherche beaucoup : « coach sportif à domicile [ville] », « coach professionnel reconversion », « comment choisir un coach ». Votre site doit rassurer sur la méthode, prouver l'expertise et permettre de réserver une première séance sans effort.",
    contexte: [
      "Le coaching se vend sur la confiance, et la confiance se construit par les contenus : qui vous êtes, votre méthode, pour qui, avec quels résultats raisonnablement attendus. Un site de coach qui ne dit que « contactez-moi » ne convertit pas ; un site qui répond aux vraies questions (durée, prix, déroulé, pour qui ce n'est pas fait) convertit.",
      "Le référencement est double : local pour le coaching en présentiel (ville, quartier, domicile, salle), thématique pour le coaching à distance (reconversion, prise de parole, remise en forme après grossesse…). Les deux demandent des pages distinctes.",
    ],
    doitFaire: [
      { titre: "Des offres lisibles", texte: "Séance découverte, forfaits, accompagnement : durée, prix, déroulé, pour qui. Pas de « sur devis » pour tout." },
      { titre: "Réserver la première séance", texte: "Agenda en ligne, paiement si vous le souhaitez, confirmation et rappel automatiques." },
      { titre: "Prouver l'expertise", texte: "Certifications, parcours, témoignages, et surtout des contenus utiles : articles, vidéos, réponses aux questions fréquentes." },
      { titre: "Une page par thématique", texte: "Chaque problème que vous traitez a sa page : c'est ce qui se référence et ce qui fait dire « c'est pour moi »." },
      { titre: "Une page locale", texte: "Si vous recevez ou vous déplacez : ville, quartiers, salles partenaires, domicile." },
    ],
    recherches: [
      { titre: "Spécialité + ville", texte: "« coach sportif à domicile rennes », « coach professionnel bordeaux » : la demande en présentiel, très locale." },
      { titre: "Problème à résoudre", texte: "« reprendre le sport après 40 ans », « préparer un entretien », « reconversion professionnelle accompagnement » : le client cherche son problème, pas votre titre." },
      { titre: "Choisir et comparer", texte: "« combien coûte un coach », « coach ou psychologue », « comment choisir un coach sportif » : des guides qui installent la confiance." },
    ],
    local: [
      { titre: "Fiche Google", texte: "Même pour un coach itinérant : zone desservie, horaires, photos, avis de clients." },
      { titre: "Lieux partenaires", texte: "Salles, cabinets, espaces de coworking : liens croisés et mentions." },
      { titre: "Avis vérifiables", texte: "Témoignages avec prénom et contexte, avis Google sollicités en fin d'accompagnement." },
    ],
    faq: [
      { q: "Je suis seul et je débute : un site à 799 € est-il raisonnable ?", a: "C'est le pack conçu pour cela : site sur mesure, textes rédigés, référencement de base, réservation, support douze mois. Il remplace les mois passés sur un constructeur de site sans résultat." },
      { q: "Faut-il écrire des articles pour être référencé ?", a: "Pour les recherches thématiques (reconversion, remise en forme…), oui : c'est ce que les gens cherchent. Nous écrivons les premiers avec vous ; le pack Intense comprend un programme de contenus sur douze mois." },
      { q: "Puis-je vendre des séances en ligne directement ?", a: "Oui : réservation et paiement en ligne se branchent sur le site. Le périmètre exact est calé lors de l'audit." },
    ],
    cta: { titre: "Parlons de votre pratique.", texte: "Quinze minutes pour comprendre qui vous accompagnez et comment, puis un audit gratuit de votre présence en ligne." },
  },
  {
    slug: "expert-comptable",
    nom: "expert-comptable",
    pluriel: "experts-comptables",
    titre: "Site internet pour expert-comptable : des dossiers, pas du trafic",
    description:
      "Création de site internet pour cabinets d'expertise comptable : offres par profil de client, prise de rendez-vous, contenus utiles, référencement local. Un site qui signe des lettres de mission. Dès 799 €.",
    motCle: "création site internet expert comptable",
    h1: "Un site qui signe des lettres de mission.",
    lede: "Un créateur d'entreprise ou un dirigeant qui change de cabinet tape « expert-comptable [ville] » ou « comptable auto-entrepreneur en ligne », compare les offres et les prix, et prend rendez-vous avec celui qui parle sa langue. Votre site doit être celui-là.",
    contexte: [
      "Le site d'un cabinet d'expertise comptable souffre souvent du même mal : une liste de missions (tenue, révision, social, juridique, fiscal) qui ne parle qu'aux confrères. Le client, lui, se reconnaît dans un profil : créateur, indépendant, commerçant, profession libérale, PME avec salariés. Nous construisons les pages par profil, avec les missions traduites en bénéfices et des prix d'entrée quand c'est possible.",
      "Le référencement joue sur deux plans : local (« expert-comptable à [ville] », décisif pour les commerçants et artisans) et thématique (« comptable pour médecin », « expert-comptable e-commerce »), où un cabinet spécialisé peut rayonner bien au-delà de sa ville.",
    ],
    doitFaire: [
      { titre: "Une page par profil de client", texte: "Créateurs, indépendants, commerçants, professions libérales, PME : leurs problèmes, vos réponses, un prix d'entrée." },
      { titre: "Des offres et des prix lisibles", texte: "Forfaits mensuels par profil, ce qui est compris, ce qui ne l'est pas. La transparence est rare dans la profession : elle fait la différence." },
      { titre: "Rendez-vous en ligne", texte: "Premier échange gratuit, créneaux, confirmation et rappel. Un créateur d'entreprise décide vite." },
      { titre: "Contenus utiles", texte: "Calendrier fiscal, choix du statut, TVA, embauche : des réponses courtes qui installent la compétence et se référencent." },
      { titre: "Équipe visible", texte: "Visages, spécialités, numéros directs : on confie ses comptes à des personnes." },
    ],
    recherches: [
      { titre: "Métier + ville", texte: "« expert-comptable lille », « cabinet comptable à proximité » : fiche Google et site en première page." },
      { titre: "Profil + besoin", texte: "« comptable auto-entrepreneur prix », « expert-comptable création d'entreprise », « comptable pour kiné » : des pages dédiées, très qualifiées." },
      { titre: "Questions pratiques", texte: "« changer d'expert-comptable », « combien coûte un expert-comptable », « sasu ou eurl » : des guides courts qui captent le client au bon moment." },
    ],
    local: [
      { titre: "Fiche Google du cabinet", texte: "Catégorie, horaires, photos, avis de clients (sollicités après la clôture), réponses." },
      { titre: "Ordre et annuaires", texte: "Inscription à l'Ordre, annuaires professionnels, réseaux de créateurs : cohérence des informations." },
      { titre: "Écosystème local", texte: "Banques, CCI, pépinières, avocats, notaires : des liens et des recommandations croisées." },
    ],
    faq: [
      { q: "Peut-on afficher des prix pour un cabinet d'expertise comptable ?", a: "Oui, sous forme de forfaits d'entrée par profil (« à partir de … par mois »), avec le périmètre. C'est ce que cherchent les créateurs et les indépendants, et ce qui vous distingue des cabinets qui ne disent rien." },
      { q: "Combien coûte un site internet pour un cabinet comptable ?", a: "799 € tout compris chez ANVSLAB pour le pack Initial. Le pack Équilibre à 1 499 € ajoute les pages par profil et par ville et le tableau de bord ; le pack Intense à 2 999 € le programme de contenus (calendrier fiscal, guides) et la visibilité dans les IA." },
      { q: "Le site peut-il intégrer un espace client ?", a: "Le lien vers votre portail existant, oui, dès le départ. Un espace client sur mesure est un développement spécifique, chiffré après audit." },
    ],
    cta: { titre: "Parlons de votre cabinet.", texte: "Quinze minutes pour comprendre vos profils de clients, puis un audit gratuit de votre présence face aux cabinets voisins." },
  },
  {
    slug: "cabinet-dentaire",
    nom: "cabinet dentaire",
    pluriel: "cabinets dentaires",
    titre: "Site internet pour cabinet dentaire : informer et prendre rendez-vous",
    description:
      "Création de site internet pour cabinets dentaires : informations sur les soins, prise de rendez-vous, équipe, accès, référencement local, dans le respect du code de déontologie. Dès 799 €.",
    motCle: "création site internet cabinet dentaire",
    h1: "Un site qui informe, rassure et prend le rendez-vous.",
    lede: "Un patient cherche « dentiste [ville] », regarde les avis, veut savoir si vous prenez de nouveaux patients, quels soins vous pratiquez et comment prendre rendez-vous. Nous construisons un site sobre qui répond à ces questions, dans le cadre déontologique de la profession.",
    contexte: [
      "La communication des chirurgiens-dentistes est encadrée : information loyale, pas de promotion commerciale, pas de comparaison. Dans ce cadre, un site reste l'outil le plus utile pour un cabinet : présenter l'équipe, les soins pratiqués, le déroulé d'une première consultation, les tarifs encadrés, l'accès, et permettre la prise de rendez-vous.",
      "Le référencement est strictement local. La fiche Google Maps et les avis font le premier contact ; le site confirme, informe et convertit, et il capte les recherches par soin (« implant dentaire [ville] », « orthodontie adulte », « urgence dentaire ») que la fiche ne couvre pas.",
    ],
    doitFaire: [
      { titre: "Une page par soin", texte: "Soins courants, prothèses, implants, parodontologie, orthodontie, esthétique dans les limites autorisées : déroulé, durée, suites, tarifs encadrés. Un ton informatif, sans promesse." },
      { titre: "Nouveaux patients et urgences", texte: "Dire clairement si vous acceptez de nouveaux patients, comment sont gérées les urgences, et quoi faire en attendant." },
      { titre: "Prise de rendez-vous", texte: "Lien vers votre outil ou formulaire, confirmation et rappel automatiques : les rappels réduisent nettement les absences." },
      { titre: "Équipe et cabinet", texte: "Praticiens, assistantes, plateau technique, hygiène, accessibilité : les éléments qui rassurent un patient anxieux." },
      { titre: "Informations pratiques", texte: "Horaires, adresse, accès, parking, conventionnement, moyens de paiement, documents à apporter." },
    ],
    recherches: [
      { titre: "Dentiste + ville", texte: "« dentiste annecy », « cabinet dentaire proche » : fiche Google Maps d'abord, site ensuite. Les deux doivent être parfaits." },
      { titre: "Soin + ville", texte: "« implant dentaire nantes », « blanchiment dentaire prix », « orthodontie adulte lyon » : des pages par soin, informatives." },
      { titre: "Urgence et nouveaux patients", texte: "« dentiste urgence week-end », « dentiste qui prend de nouveaux patients » : une page dédiée, claire sur la marche à suivre." },
    ],
    local: [
      { titre: "Fiche Google du cabinet", texte: "Catégorie exacte, praticiens, horaires, photos du cabinet, réponses aux avis conformes à la déontologie." },
      { titre: "Annuaires de santé", texte: "Ordre, annuaire santé public, plateformes de rendez-vous : mêmes informations partout." },
      { titre: "Accessibilité", texte: "Accès PMR, transports, parking : des informations qui comptent pour les patients et pour Google." },
    ],
    faq: [
      { q: "Un cabinet dentaire a-t-il le droit d'avoir un site et d'être référencé ?", a: "Oui. Le code de déontologie autorise la communication d'informations au public, de manière loyale et sans caractère commercial : présentation du cabinet, des soins, des tarifs encadrés, prise de rendez-vous. Nous écrivons dans ce cadre et vous validez chaque texte." },
      { q: "Combien coûte un site internet pour un cabinet dentaire ?", a: "799 € tout compris chez ANVSLAB pour le pack Initial : site sur mesure, textes, référencement local, fiche Google Maps, support douze mois. Le pack Équilibre à 1 499 € ajoute les pages par soin et le tableau de bord." },
      { q: "Peut-on afficher les tarifs ?", a: "Les tarifs des actes encadrés et les informations d'affichage obligatoires, oui ; pour les actes à honoraires libres, une information sur la remise d'un devis. Toujours de façon informative, jamais promotionnelle." },
    ],
    cta: { titre: "Parlons de votre cabinet.", texte: "Quinze minutes pour comprendre votre pratique et votre patientèle, puis un audit gratuit de votre présence locale." },
  },
];

const autres = (slug: string) =>
  metiers
    .filter((m) => m.slug !== slug)
    .slice(0, 3)
    .map((m) => ({ label: `Site internet pour ${m.nom}`, href: `/secteurs/${m.slug}/` }));

export const secteurs: Page[] = metiers.map((m) => {
  const blocs: Bloc[] = [
    { type: "texte", titre: `Ce qui se joue pour un ${m.nom}.`, paragraphes: m.contexte },
    { type: "liste", titre: "Ce que votre site doit faire.", items: m.doitFaire },
    { type: "cartes", titre: "Ce que cherchent vos clients.", intro: "Trois familles de recherches, trois façons d'y répondre. L'audit gratuit établit la liste précise pour votre ville.", items: m.recherches },
    { type: "liste", titre: `Référencement local pour ${m.pluriel}.`, intro: "La fiche Google Maps et le site se renforcent. Voir notre page [référencement naturel](/services/seo/).", items: m.local },
    { type: "packs", intro: `Les trois formules s'appliquent aux ${m.pluriel} comme à toute PME : site sur mesure, textes, référencement, fiche Google, support douze mois, accompagnement six mois. Détail sur la page [création de site internet](/services/creation-site-internet/).` },
    { type: "faq", items: m.faq },
    { type: "cta", titre: m.cta.titre, texte: m.cta.texte },
  ];
  return {
    slug: `/secteurs/${m.slug}/`,
    type: "secteur",
    titre: m.titre,
    description: m.description,
    motCle: m.motCle,
    kicker: `Métier · ${m.nom.charAt(0).toUpperCase() + m.nom.slice(1)}`,
    h1: m.h1,
    lede: m.lede,
    dateMaj: MAJ,
    blocs,
    liens: [
      { label: "Création de site internet", href: "/services/creation-site-internet/" },
      { label: "Combien coûte un site internet ?", href: "/guides/prix-site-internet-pme/" },
      { label: "Référencement naturel", href: "/services/seo/" },
      ...autres(m.slug),
    ],
  };
});
