# Intentions de recherche et mots-clés organiques — ANVSLAB (8 novembre 2026)

Complément de [STRATEGIE-SEO-ANVSLAB.md](STRATEGIE-SEO-ANVSLAB.md). Ce document répond à une question : **pour chaque page que nous allons créer, qui cherche quoi, dans quel état d'esprit, et que doit contenir la page pour gagner.**

Fichier de travail : [data/cartographie-mots-cles-2026-11-08.csv](data/cartographie-mots-cles-2026-11-08.csv) — 1 776 requêtes réelles (Google Suggest France et Maroc, deux récoltes), classées sur six axes : statut, intention, service, géographie, modificateur, page cible, plus une priorité. Script rejouable : `data/raw/classifier_intentions.py`.

> **Semrush toujours à zéro unité** (contrôlé à nouveau le 8 nov. 2026, réponse `no_api_units`). Les colonnes `volume_semrush`, `kd_semrush`, `cpc_semrush` et `intention_semrush` du CSV sont vides. Google Suggest atteste qu'une requête existe, pas son volume : les priorités ci-dessous sont **structurelles** (intention × service × géographie) et seront re-pondérées par les volumes dès l'extraction. Semrush fournit aussi sa propre étiquette d'intention par mot-clé : elle servira à contrôler la nôtre.

---

## 1. La base, après nettoyage

| | Requêtes |
|---|---|
| Récoltées (uniques) | 1 776 |
| **Cibles** (France ou Maroc, prestataire ou guide) | **1 250** |
| Hors cible : anglais / homonymes (Séoul, géocaching, « référence APA ChatGPT »…) | 246 |
| Hors cible : géographie hors FR/MA (Belgique, Suisse, Québec, Tunisie…) | 117 |
| Hors cible : bruit | 60 |
| Hors cible : emploi, formation, salaire | 47 |
| Hors cible : faire soi-même (Wix, hébergeur, « créer un site avec IA ») | 30 |
| Hors cible : marque tierce (Eskimoz, Klee Group, Webup…) | 26 |

Les 526 exclusions restent dans le CSV avec leur motif : rien n'est perdu, et la règle est vérifiable. Les « faire soi-même » sont exclus de la cible commerciale mais notés : ils disent ce que le marché attend en prix plancher et en autonomie.

---

## 2. Les quatre intentions, et ce qu'elles exigent de nous

| Intention | Requêtes cibles | Signal typique | Ce que la page doit faire | Type de page |
|---|---|---|---|---|
| **Transactionnelle explicite** | 617 (49 %) | « agence web pme », « création site internet avocat », « agence seo lyon » | Prouver la compétence en 10 secondes, montrer le prix et le périmètre, un seul appel à l'action : le rendez-vous | Page service, page ville, page métier |
| **Transactionnelle implicite** | 307 (25 %) | « seo pme », « webdesigner », « référencement naturel nantes » : un service nommé, sans verbe | Même chose, mais la SERP mélange souvent prestataires et définitions : ouvrir la page par une réponse courte, puis l'offre | Page service avec bloc « en bref » |
| **Informationnelle** | 170 (14 %) | « seo ou sea », « c'est quoi le geo », « pourquoi créer un site internet », « core web vitals » | Répondre complètement, sans vendre dans les 300 premiers mots ; tableau, FAQ, définition citables par les IA ; lien vers le service en fin | Guide (1 500–2 500 mots) |
| **Commerciale (comparaison, prix)** | 156 (12 %) | « combien coûte un site internet vitrine », « meilleure agence web », « devis site internet », « audit seo gratuit » | Donner un vrai chiffre, une grille, un comparatif honnête ; c'est là que la transparence tout compris d'ANVSLAB fait la différence | Guide prix, comparatif, outil (audit gratuit) |

Lecture : **trois quarts des recherches cherchent déjà un prestataire.** Le marché n'est pas à éduquer, il est à convaincre. Les guides (26 %) servent à capter plus tôt et à nourrir les citations IA, pas à faire du volume pour le volume.

### Règles de rédaction par intention

- **Transactionnelle** : titre = service + cible (« Création de site internet pour PME ») ; au-dessus de la ligne de flottaison : promesse mesurable, prix d'entrée, preuve (cas client dès qu'autorisé), bouton rendez-vous. Aucun paragraphe de définition en tête de page.
- **Implicite** : même structure, précédée d'un encadré de 40–60 mots qui répond à « c'est quoi » ; Google teste souvent les deux lectures sur ces requêtes, l'encadré couvre la seconde.
- **Informationnelle** : réponse directe en premier paragraphe, sommaire, H2 formulés comme les questions réelles du CSV, tableau comparatif, FAQ en JSON-LD, auteur identifié, date. Un seul appel à l'action, en fin.
- **Commerciale** : chiffres réels avec fourchettes et ce qu'elles incluent, tableau « freelance / agence / ANVSLAB », zéro superlatif. Les packs à 799 / 1 499 / 2 999 € s'y insèrent naturellement, sans jamais citer le crédit publicitaire.

---

## 3. Intention × service : où est la demande

| Service | Transac. explicite | Transac. implicite | Informationnelle | Commerciale | Total |
|---|---|---|---|---|---|
| Création de site | 360 | 71 | 31 | 100 | **562** |
| SEO | 166 | 94 | 70 | 30 | **360** |
| Web design | 14 | 117 | 29 | — | **158** |
| GEO / IA | 23 | 12 | 24 | — | **59** |
| Refonte / performance | 12 | 11 | 15 | 5 | **43** |
| Agence généraliste | 33 | — | — | 1 | **34** |
| E-commerce | 11 | — | 3 | 15 | **29** |

Trois enseignements :

1. **La création de site est le point d'entrée** (45 % de la demande cible), et c'est elle qui porte presque toutes les requêtes prix (100 sur 156). La page service et le guide prix doivent être les deux pages les plus travaillées du site.
2. **Le web design se cherche sans verbe** (« webdesigner », « web design paris », « site internet design moderne ») : la SERP y est hybride, entre portfolios, définitions et agences. Une page service seule ne suffira pas : il faut une galerie et un guide « tendances / exemples » qui renvoient vers le service.
3. **Le GEO est le seul territoire où l'informationnel dépasse le transactionnel** (24 contre 23) : le marché se renseigne encore. Celui qui publie les meilleures définitions (« geo vs seo », « seo geo vs aeo », « optimisation pour les moteurs génératifs ») sera cité par les IA elles-mêmes, et deviendra l'agence par défaut quand la demande basculera.

---

## 4. Géographie et modificateurs

| Axe | Répartition (cibles) | Décision |
|---|---|---|
| National FR implicite | 758 (61 %) | Cœur : pages services + guides, sans ville dans le titre |
| Ville FR | 412 (33 %), dont Paris 27, Lyon 19, Nantes 11, Toulouse 9, Marseille 8, Bordeaux 7, Lille 5 ; 326 villes secondaires ou « à vérifier » | 7 pages villes en phase 3 ; les secondaires attendent les volumes Semrush |
| Maroc | 70 (6 %) : Casablanca, Rabat, Tanger, Agadir, Marrakech, Fès, Kénitra, Oujda | 2 pages Maroc (web, SEO), prix en MAD ; concurrent à battre : kolonell.com |
| Modificateur « secteur » | 183 : artisan, avocat, restaurant, immobilier, architecte, coach, expert-comptable, dentiste, médecin, hôtel, BTP, plombier, salon de coiffure, institut de beauté, garage, photographe, association | 8 à 10 pages métier (§5) : c'est la longue traîne la plus qualifiée du lot |
| Modificateur « prix » | 98 | 3 guides prix (site, SEO, refonte) |
| « définition » / « comment » | 99 | Guides SEO, GEO, design, création |
| « gratuit » | 40 | Un seul aimant : l'audit SEO gratuit ; le reste (« site vitrine gratuit ») n'est pas notre client |
| « meilleur » | 32 | Guide « comment choisir une agence web » ; ne jamais s'autoproclamer meilleur |

---

## 5. Cartographie mots-clés → pages (34 pages cibles)

Pour chaque page : mot-clé principal, variantes à couvrir dans les H2, intention dominante, priorité. Les comptes indiquent le nombre de requêtes réelles rattachées. Les volumes Semrush trancheront l'ordre définitif ; l'ordre ci-dessous est l'ordre de construction recommandé.

### Priorité 1 — argent et différenciation

| Page | Mot-clé principal | Variantes (extraits) | Intention | Requêtes |
|---|---|---|---|---|
| `/services/creation-site-internet/` | création site internet pme | agence web, agence web pme, site web pme, création site web professionnel, agence web france, entreprise création site internet | Transactionnelle | 120 |
| `/guides/prix-site-internet-pme/` | combien coûte un site internet | prix site internet vitrine, création site internet prix, devis site internet, tarif agence web, site vitrine prix moyen, combien coûte un site internet par mois, prix création site internet wordpress | Commerciale | 66 |
| `/services/seo/` | agence seo pme | seo pme, agence seo, accompagnement seo pme, seo b2b, référencement naturel pme, consultant seo, stratégie seo | Transactionnelle | 96 |
| `/services/web-design/` | agence web design | webdesigner, web design, design site internet, site internet design moderne, site internet haut de gamme, ux ui agence | Implicite | 121 |
| `/services/geo-referencement-ia/` | agence seo geo | référencement ia, agence référencement chatgpt, agence ia pme, agence web ia, agence web seo & visibilité ia, optimisation pour les moteurs génératifs | Transactionnelle | 23 |
| `/guides/geo-referencement-ia/` | geo generative engine optimization | geo vs seo, seo vs geo 2026, seo geo vs aeo, qu'est-ce que le geo, comment être cité par chatgpt | Informationnelle | 24 |
| `/services/seo/audit-seo-gratuit/` | audit seo gratuit | audit seo, audit seo en ligne, analyse seo gratuite, audit référencement gratuit | Commerciale | 19 |
| `/secteurs/[metier]/` (8–10 pages) | création site internet avocat, …artisan, …restaurant, …agence immobilière, …architecte, …coach, …expert-comptable, …cabinet dentaire | site internet avocat, site internet pour artisan, seo avocat, seo restaurant, seo local avocat, site internet btp, site internet hôtel | Transactionnelle | 81 (+ seo métier) |
| `/maroc/agence-web-casablanca/` | agence web casablanca | agence web maroc, création site web maroc, prix site web maroc, conception site web maroc, agence digitale casablanca, agence web rabat / fès / kénitra / oujda | Transactionnelle | 48 |
| `/maroc/agence-seo-maroc/` | agence seo maroc | agence seo casablanca, agence seo rabat, référencement naturel maroc, référencement maroc prix | Transactionnelle | 22 |
| `/guides/prix-referencement-naturel/` | référencement naturel prix | coût référencement naturel, tarif référencement naturel, devis référencement naturel, agence seo pas cher | Commerciale | 9 |
| `/services/assistant-ia-pme/` | assistant ia pme | chatbot pour pme, automatisation pme, aide ia pme, agent téléphonique ia | Transactionnelle | 11 |

### Priorité 2 — guides qui captent plus tôt et nourrissent le GEO

| Page | Mot-clé principal | Variantes | Requêtes |
|---|---|---|---|
| `/guides/seo/` (hub + articles) | c'est quoi le seo | seo ou sea, seo sea définition, référencement naturel ou payant, comment améliorer son référencement, pourquoi mon site n'apparaît pas sur google, combien de temps pour être référencé, netlinking c'est quoi | 61 |
| `/guides/web-design/` | web design exemple | ux design c'est quoi, web design vs ui ux, design web moderne, tendance web design 2026 | 29 |
| `/guides/creation-site-internet/` | pourquoi créer un site internet | site vitrine exemple, site vitrine définition, comment faire son site internet, pourquoi créer un site internet pour un artisan | 18 |
| `/services/seo/seo-local/` | seo local | seo local c'est quoi, seo local avocat, fiche google my business, référencement local | 18 |
| `/guides/choisir-une-agence-web/` | comment choisir une agence web | meilleure agence web, quelle agence développement web choisir, meilleure agence seo en france | 12 |
| `/guides/refonte-site-internet/` | core web vitals | refonte site internet pourquoi, quand refaire son site, site internet lent, mobile first | 11 |
| `/services/creation-site-internet/refonte/` | refonte site internet | site internet rapide, site mobile first, refonte site web | 8 |
| `/guides/prix-refonte-site-internet/` | refonte site web prix | landing page prix, refonte site internet prix | 6 |
| `/services/creation-site-internet/landing-page/` | landing page | landing page exemple, landing page saas, landing page qui convertit | 11 |
| `/services/creation-site-internet/site-e-commerce/` | agence web e-commerce | agence site shopify, création site e-commerce, prix site e-commerce shopify | 12 |
| `/services/creation-site-internet/site-vitrine/` | site vitrine | création site internet vitrine, site vitrine wordpress | 5 |
| `/services/creation-site-internet/application-sur-mesure/` | application web sur mesure | développement web sur mesure, agence développement web sur mesure | 6 |

### Priorité 3 — local France (phase 3, après volumes)

| Page | Mot-clé principal | Variantes | Requêtes |
|---|---|---|---|
| `/agence-web/paris/` | agence web paris | agence seo paris, web design paris, webdesigner paris, agence web paris 8 / 13 | 27 |
| `/agence-web/lyon/` | agence web lyon | agence seo lyon, consultant seo lyon, agence digitale lyon, agence web design lyon | 19 |
| `/agence-web/nantes/` | agence web nantes | agence seo nantes, agence digitale nantes, référencement naturel nantes | 11 |
| `/agence-web/toulouse/` | agence web toulouse | webdesigner toulouse, agence digitale toulouse, référencement naturel toulouse | 9 |
| `/agence-web/marseille/` | agence web marseille | agence seo marseille, seo local marseille, refonte site internet marseille | 8 |
| `/agence-web/bordeaux/` | agence web bordeaux | agence seo bordeaux, consultant seo bordeaux, agence digitale bordeaux | 7 |
| `/agence-web/lille/` | agence web lille | consultant seo lille, agence digitale lille | 5 |
| Villes secondaires et « à vérifier » | — | 326 requêtes (Pau, Dax, Quimper, Angers, Rennes, Strasbourg, Caen, Montpellier, Rouen…) : attendre les volumes avant toute page | 326 |

Règle pour les pages villes : pas de présence physique inventée. Le texte dit ce qui est vrai (studio francophone, équipe à Casablanca, clients à Paris, travail à distance), et apporte de la valeur locale réelle : tissu de PME de la ville, exemples sectoriels, tarifs identiques partout.

---

## 6. Maillage : qui lie vers qui

- Chaque **page service** lie vers son guide prix, un guide informationnel et le rendez-vous ; elle reçoit des liens de l'accueil, du pied de page, des pages métier et des pages villes.
- Chaque **guide** lie vers le service correspondant (en fin de texte) et vers deux guides voisins ; il reçoit des liens du hub `/guides/` et des FAQ des services.
- Les **pages métier** lient vers création de site, SEO local et le guide prix ; elles sont liées depuis la page création de site (bloc « par secteur »).
- Les **pages Maroc** forment un silo : accueil → `/maroc/` → web / SEO, prix en MAD, lien vers le rendez-vous avec créneaux Casablanca.
- Une requête = une page. Si deux pages ciblent le même mot-clé principal, l'une devient section de l'autre.

---

## 7. Protocole de validation des intentions dans la SERP (à faire avant d'écrire chaque page)

Google tranche l'intention, pas nous. Pour chacun des 34 mots-clés principaux, dans une fenêtre de navigation privée en français, localisation Paris puis Casablanca :

1. **Nature des 10 résultats** : combien d'agences, d'annuaires, de guides, de pages prix ? Si 7 résultats sur 10 sont des guides, la page transactionnelle seule ne passera pas : il faut le guide.
2. **Fonctionnalités SERP** : « Autres questions posées » (copier les questions dans les H2), aperçu IA (noter les sources citées : ce sont nos cibles de contenu et de liens), pack local (si présent, la fiche Google Business devient obligatoire), vidéos, annonces (le CPC Semrush confirmera la valeur).
3. **Titres des 3 premiers** : angle, présence d'un prix, d'une ville, d'une année.
4. Reporter dans le CSV les colonnes `serp_dominante` et `serp_features` (à ajouter), puis écrire.

Puis, dès les unités Semrush rechargées : lot A du plan d'extraction (volumes, KD, CPC, intention Semrush) → fusion → tri des 34 pages par `volume × intention transactionnelle ÷ KD` → correction de l'ordre de construction si nécessaire.

---

## 8. Ce que les données disent déjà de la ligne éditoriale

- **Le prix est la première objection** : 100 requêtes prix sur la création de site, aucune sur le design. Afficher les prix sur la page service (déjà fait sur l'accueil) et écrire le guide prix en premier.
- **Le secteur est le premier filtre** : « site internet avocat » et « création site internet artisan » existent en dizaines de variantes. Dix pages métier bien faites valent mieux que cinquante pages villes.
- **Le GEO se cherche en comparaison** (« geo vs seo », « seo geo vs aeo ») : le guide doit être un comparatif, pas un plaidoyer.
- **Le « gratuit » n'est pas notre client**, sauf l'audit : c'est le seul endroit où donner sans contrepartie rapporte des rendez-vous.
- **Le Maroc cherche par ville** (Casablanca, Rabat, Tanger, Agadir, Marrakech, Fès, Kénitra, Oujda) : une page pays plus une page Casablanca, avec les autres villes en sections, suffit en phase 2.
