# Stratégie SEO ANVSLAB — v1 (8 novembre 2026)

Objectif : positionner ANVSLAB sur trois marchés francophones — **développement web**, **web design** et **SEO (+ GEO)** — auprès des PME, en France d'abord, au Maroc ensuite.

> **État des données.** Les cinq boîtes à outils Semrush (mots-clés, concurrents, domaine, organique, backlinks) ont toutes répondu `no_api_units` le 8 nov. 2026 : le solde d'unités API du compte est à zéro, comme déjà fin octobre pour MADAMOON. Rien n'a pu être extrait de Semrush. Cette v1 s'appuie sur : l'audit du site en ligne, 1 399 requêtes réelles récoltées sur Google Suggest (FR + MA), et une veille concurrentielle web. Les volumes, difficultés et CPC seront ajoutés par le plan d'extraction [SEMRUSH-PLAN-EXTRACTION.md](SEMRUSH-PLAN-EXTRACTION.md) dès que les unités sont rechargées (https://www.semrush.com/mcp-access). Ne jamais présenter cette base comme complète.

---

## 1. Diagnostic de départ

### 1.1 Le site aujourd'hui (https://anaselkhadir.github.io/anvslab/)

| Point | Constat | Gravité |
|---|---|---|
| Domaine | **anvslab.com n'est pas déposé** (whois : « No match »), anvslab.fr/.io/.co libres aussi. Le site déclare pourtant `og:url = https://anvslab.com/`. Le site vit sur un sous-dossier GitHub Pages : aucune autorité ne se construit sur un nom à soi. | Bloquant |
| Pages indexables | 2 (`/` et `/rendez-vous/`). Aucune page service, aucune page cible, aucun blog. | Bloquant |
| robots.txt / sitemap.xml | 404 tous les deux | Haute |
| Données structurées | Aucun JSON-LD (Organization, Service, FAQPage alors qu'une FAQ existe) | Haute |
| Canonical / hreflang | Absents | Moyenne |
| Balises | Title « ANVSLAB \| Studio digital & IA pour PME » (correct), description cohérente, H1 unique, 5 images toutes avec alt | OK |
| Contenu | ~800 mots sur l'accueil, orientés marque et promesse, aucun mot-clé de recherche (« agence web », « création site internet », « agence SEO ») | Haute |
| Mentions légales / confidentialité | 404 — signal de confiance manquant (E-E-A-T) et obligation légale pour un prospect français | Haute |
| Performance | Next.js export statique, polices préchargées : bonne base Core Web Vitals | OK |

Conclusion : le site est une belle vitrine de marque mais n'est **pas encore un actif SEO**. Tout est à construire, ce qui est une chance : on part sur une architecture propre.

### 1.2 Le marché

- **Saturation des termes génériques.** Les SERP « agence web », « agence SEO », « création site internet » sont tenues par des annuaires (La Fabrique du Net : 754 agences « site internet », 609 « SEO », 118 « GEO » ; Impli ; Sortlist) et des grandes agences (Eskimoz, Primelis). Attaquer ces têtes de longue traîne en 2027 n'est pas réaliste.
- **La demande est locale et chiffrée.** Sur 1 399 requêtes récoltées, 217 contiennent une ville française, 34 une ville marocaine, 145 portent sur le prix/devis. Les gens cherchent « agence web [ville] » et « combien coûte un site internet vitrine ».
- **Le GEO est encore ouvert.** 57 requêtes GEO/IA récoltées (« agence seo geo », « agence référencement chatgpt », « agence ia pme », « assistant ia pme »). Peu d'acteurs PME crédibles : Ad's up, Agence Scroll, Hackceleration visent plutôt les comptes moyens et grands. C'est le créneau le plus différenciant pour ANVSLAB, déjà présent dans sa promesse.
- **Un concurrent a déjà le double marché FR + MA** : kolonell.com publie des dizaines d'articles programmatiques « prix site vitrine PME Casablanca 2026 », « refonte site web PME Casablanca », « SEO local B2B Bordeaux ». C'est le modèle à battre sur le Maroc, et la preuve que le créneau fonctionne.
- **Prix du marché** (ordres de grandeur, sources commerciales) : site vitrine freelance 250–740 €, agence FR 2 000–10 000 €, Casablanca 12 000–80 000 MAD ; SEO mensuel 500–2 000 €/mois pour une TPE/PME. Les packs ANVSLAB (799 / 1 499 / 2 999 € tout compris, 12 mois de support, 6 mois d'accompagnement SEO) sont **très compétitifs** face aux agences françaises : c'est un argument de contenu (« ce qui est inclus ») à exploiter sans jamais mentionner le crédit publicitaire sur le site.

---

## 2. Positionnement SEO

**Ligne directrice :** *le studio digital & IA qui rend une PME visible sur Google ET dans ChatGPT, avec un site qui convertit en rendez-vous — prix tout compris.*

Trois territoires sémantiques, un mot-clé pivot chacun :

| Territoire | Pivot (FR) | Angle ANVSLAB |
|---|---|---|
| Développement web | création site internet PME / site vitrine qui convertit | Next.js, performance, « site nouvelle génération », promesse mesurée visiteur → RDV |
| Web design | web design / refonte site internet | Design éditorial premium accessible aux PME, exemples avant/après |
| SEO + GEO | agence SEO PME / référencement IA (GEO) | Le seul pack PME qui couvre Google + moteurs génératifs, 3 niveaux |

Cibles géographiques : **France** (base `fr`, clients déjà à Paris) en priorité ; **Maroc** (base `ma`, équipe à Casablanca) en second, avec pages dédiées et prix en MAD.

Promesse à éviter : ne jamais garantir une position, ne jamais inventer de chiffres clients. Les preuves viendront des cas MADAMOON et ANAS FER quand Anas acceptera de les publier.

---

## 3. Univers de mots-clés (base Google Suggest, 8 nov. 2026)

Fichier : [data/mots-cles-clusters-2026-11-08.csv](data/mots-cles-clusters-2026-11-08.csv) — 1 399 requêtes uniques, 216 interrogations Suggest (graines FR + MA, balayage alphabétique de 5 têtes, 24 questions). Colonnes `volume_semrush`, `kd_semrush`, `cpc_semrush` vides, à remplir par le plan d'extraction.

| Cluster | Requêtes | Intention dominante | Usage |
|---|---|---|---|
| SEO / référencement | 255 | transactionnelle + info | Pages service SEO, audit gratuit, guides |
| Web design / UX | 244 | transactionnelle | Page service design, portfolio |
| Local France | 217 | transactionnelle locale | Pages villes (phase 3) |
| Agence / métier | 196 | transactionnelle | Pages « agence web / digitale / IA pour PME » |
| Création / refonte site | 168 | transactionnelle + info | Pages service, guides de choix |
| Prix / devis | 145 | commerciale | Guides prix (le cluster à plus forte conversion) |
| GEO / IA | 57 | transactionnelle émergente | Pilier GEO, assistants IA PME |
| Local Maroc | 34 | transactionnelle locale | Pages Casablanca / Rabat / Maroc |
| E-commerce | 3 | — | Secondaire, pas de page dédiée en v1 |
| Autre (bruit) | 80 | — | À ignorer |

### 3.1 Mots-clés prioritaires par page (sélection à confirmer avec Semrush)

**Pilier « Création de site internet pour PME »** : création site internet pme · création site web professionnel · site vitrine · site internet pme · refonte site internet · agence web next js · développement web sur mesure · application web sur mesure · landing page.

**Pilier « Agence SEO pour PME »** : agence seo pme · accompagnement seo pme · référencement naturel · seo local · audit seo gratuit · audit seo gratuit en ligne · analyse seo gratuite · consultant seo · stratégie seo.

**Pilier « GEO — référencement dans les IA »** : geo generative engine optimization · geo generative engine optimization definition · agence seo geo · agence référencement chatgpt · agence référencement ia · agence web seo & visibilité ia · agence ia pme · assistant ia pme · chatbot pme · automatisation pme.

**Pilier « Web design »** : web design · agence web design · design site internet · refonte site web prix · ux design agence · site vitrine exemple.

**Guides prix (cluster à plus forte valeur)** : combien coûte un site internet vitrine · combien coûte un site internet pour une entreprise · combien coûte un site internet par mois · combien coûte un site internet professionnel · quel prix pour créer un site internet · création site internet prix · refonte site web prix · tarif agence web · prix site internet vitrine · référencement naturel prix · devis site internet · landing page prix.

**Questions (80 détectées)** : comment choisir une agence web · quelle agence développement web choisir · pourquoi créer un site internet pour un artisan · pourquoi mon site internet n'apparaît pas sur google · comment améliorer le référencement naturel d'un site · comment faire un référencement naturel gratuit · quelle est la meilleure agence seo en france.

**Maroc** : agence web maroc · agence web casablanca · agence seo casablanca · agence seo maroc · agence référencement naturel maroc · création site web maroc · conception site web maroc · prix site web maroc · agence digitale casablanca · agence seo rabat / tanger / marrakech / agadir.

---

## 4. Architecture cible du site

```
/                                   Accueil (pivot marque + 3 territoires)
/services/creation-site-internet/   Pilier dev web (+ sous-pages : site-vitrine, refonte, landing-page, application-sur-mesure)
/services/web-design/               Pilier design
/services/seo/                      Pilier SEO (+ /audit-seo-gratuit/ : aimant à leads)
/services/geo-referencement-ia/     Pilier GEO (+ /assistant-ia-pme/)
/offres/                            Les 3 packs (Initial / Équilibre / Intense) — sans crédit publicitaire
/realisations/                      Quand Anas l'autorise (MADAMOON, ANAS FER)
/guides/                            Hub éditorial : prix, choix d'agence, SEO, GEO
/guides/prix-site-internet-pme/     etc.
/agence-web/paris/ … /lyon/ …       Pages villes FR (phase 3, 6 villes max, contenu réel)
/maroc/agence-web-casablanca/       Pages Maroc (phase 2), prix en MAD
/a-propos/  /contact/  /rendez-vous/  /mentions-legales/  /confidentialite/
```

Règles : une page = une intention ; chaque page service lie vers 2 guides et vers `/rendez-vous/` ; chaque guide lie vers son service ; fil d'Ariane partout ; FR uniquement en v1 (pas d'anglais ni d'arabe avant le Maroc phase 2).

---

## 5. Chantiers techniques (semaine 1–2)

1. **Déposer anvslab.com** (et anvslab.fr en protection) et brancher le domaine sur GitHub Pages avec HTTPS. Mettre à jour `metadataBase`, `og:url`, canonical. Déposer le nom dans Google Search Console et Bing Webmaster.
2. `robots.txt` + `sitemap.xml` générés par Next (`app/robots.ts`, `app/sitemap.ts`) ; retirer `NEXT_PUBLIC_BASE_PATH` une fois le domaine racine actif.
3. JSON-LD : `Organization` (logo, sameAs, zone desservie), `ProfessionalService`, `FAQPage` sur la FAQ existante, `Service` + `Offer` sur /offres, `BreadcrumbList`, `Article` sur les guides.
4. Canonical par page, `lang="fr"`, titres et descriptions uniques, OG image 1200×630.
5. Pages légales (mentions légales avec la formule « ANVSLAB LLC, Wyoming, États-Unis — société en cours de constitution », politique de confidentialité).
6. Mesure : GA4 ou Plausible + Search Console reliés ; événement « RDV pris » comme conversion principale (c'est la promesse commerciale).
7. Core Web Vitals : budget LCP < 2 s mobile ; vérifier que le préloader 1,7 s et le champ ASCII n'impactent pas l'INP.

---

## 6. Plan de contenu — 90 jours

| Semaine | Livrables | Cluster servi |
|---|---|---|
| 1–2 | Domaine + technique (§5) ; 4 pages piliers services ; page /offres ; pages légales | Agence / création / SEO / GEO |
| 3–4 | Guide « Combien coûte un site internet pour une PME en 2026 » ; guide « Prix d'un site vitrine : ce qui est inclus (et ce qui ne l'est pas) » ; page /audit-seo-gratuit | Prix / devis |
| 5–6 | Guide « GEO : être cité par ChatGPT, Gemini et Perplexity — guide PME » ; guide « SEO ou GEO : que choisir en 2027 ? » ; page /assistant-ia-pme | GEO / IA |
| 7–8 | Guide « Comment choisir une agence web (checklist 12 points) » ; guide « Refonte de site : quand et combien » ; guide « Pourquoi mon site n'apparaît pas sur Google » | Questions / création |
| 9–10 | Pages Maroc : /maroc/agence-web-casablanca, guide « Prix d'un site vitrine au Maroc (MAD) », guide « Agence SEO au Maroc » | Local Maroc |
| 11–12 | 6 pages villes FR (Paris, Lyon, Bordeaux, Marseille, Lille, Nantes) avec contenu spécifique (tissu PME local, exemples sectoriels) ; 2 études de cas si autorisées | Local France |

Rythme de croisière ensuite : 2 guides/mois + 1 page sectorielle/mois (artisans, cabinets, commerces, B2B industriel — en écho aux collections du portfolio retiré). Chaque guide : 1 500–2 500 mots, un tableau de prix, une FAQ en JSON-LD, un CTA RDV, des réponses courtes et citables pour le GEO.

---

## 7. Netlinking et autorité (en continu)

- **Annuaires d'agences** qui dominent les SERP : fiches La Fabrique du Net, Impli, Sortlist (FR + MA), Clutch, GoodFirms Maroc. Gratuit, rapide, backlinks + leads.
- **Profils** : Google Business Profile Casablanca (adresse réelle de l'équipe), LinkedIn page entreprise, GitHub (déjà), Malt pour Anas.
- **Liens d'écosystème** : Next.js showcase, templates/outils open source d'ANVSLAB, articles invités sur blogs PME (BPI, CCI, réseaux d'entrepreneurs), communiqués des clients (« site réalisé par ANVSLAB » en pied de page MADAMOON et ANAS FER — un lien dofollow par client livré).
- **Relations presse légères** : prise de parole GEO (sujet neuf, journalistes demandeurs) ; baromètres maison à partir des données Semrush (« ce que les PME françaises cherchent avant de choisir une agence ») = contenus linkables.
- Objectif 12 mois : 60–100 domaines référents de qualité ; refuser tout achat de liens.

---

## 8. GEO : être recommandé par les IA

- Pages à réponses directes (définitions en 40–60 mots, listes, tableaux comparatifs, FAQ) ; données chiffrées sourcées ; auteur identifié (Anas Elkhadir) avec bio.
- JSON-LD complet, `llms.txt` à la racine, contenu accessible sans JavaScript (export statique OK).
- Présence cohérente de l'entité « ANVSLAB » : même description sur site, LinkedIn, annuaires, Wikidata (dès que l'entreprise est immatriculée), GitHub.
- Suivi mensuel : 20 requêtes test dans ChatGPT, Perplexity, Gemini, AI Overviews (« meilleure agence web PME France », « agence GEO pour PME », « prix site vitrine PME Casablanca ») et journal des citations.

---

## 9. KPI et jalons

| Horizon | Indicateur | Cible |
|---|---|---|
| J+30 | Domaine propre, 100 % des pages piliers indexées, Search Console actif | 15 pages indexées |
| M+3 | Mots-clés en top 100 (Semrush Position Tracking) | 150 |
| M+6 | Mots-clés top 10 sur guides prix + GEO ; sessions organiques/mois | 25 · 1 500 |
| M+6 | RDV pris d'origine organique / mois | 6–10 (soit 2–3 clients, l'objectif commercial) |
| M+12 | Domaines référents ; citations IA observées sur 20 requêtes test | 60–100 · 8/20 |

---

## 10. Prochaines actions immédiates

1. Recharger les unités API Semrush, puis lancer [SEMRUSH-PLAN-EXTRACTION.md](SEMRUSH-PLAN-EXTRACTION.md) (une seule séance, ~25 appels) pour chiffrer et prioriser les 1 399 requêtes et récupérer les mots-clés des concurrents.
2. Déposer anvslab.com (+ .fr).
3. Valider l'architecture §4 et la grille de 3 packs à afficher sur /offres (nouvelle grille 799 / 1 499 / 2 999, sans crédit publicitaire).
4. Décider si les cas MADAMOON et ANAS FER peuvent être publiés : c'est le premier levier de confiance du site.

Dossier : `~/Desktop/anvslab-site/seo-strategy/` (données dans `data/`, scripts de récolte rejouables dans `data/raw/`).
