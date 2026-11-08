# Plan d'extraction Semrush — à lancer dès que les unités API sont rechargées

Statut le 8 nov. 2026 : toutes les boîtes à outils du MCP Semrush répondent `no_api_units` (compte actif, solde d'unités à zéro). Rechargement : https://www.semrush.com/mcp-access. Ne pas réessayer avant.

Objectif de la séance : ~25 appels `execute_report`, exports bruts datés dans `data/raw/semrush/`, puis fusion dans `data/mots-cles-clusters-2026-11-08.csv` (colonnes `volume_semrush`, `kd_semrush`, `cpc_semrush`). Rappel MADAMOON : demander `display_limit` élevé (500–1000) pour que les gros exports soient écrits sur disque plutôt que dans le contexte ; le solde est tombé à zéro après ~21 requêtes en octobre, donc **prioriser dans cet ordre**.

Bases : `fr` en priorité, `ma` pour le volet Maroc. Noms de rapports à confirmer via `get_report_schema` au moment de l'exécution (la découverte n'a pas pu être faite).

## Lot A — chiffrer notre univers (priorité 1, ~8 appels)

| # | Toolkit | Rapport (type) | Paramètres | But |
|---|---|---|---|---|
| A1 | keyword_research | phrase_all / batch (plusieurs phrases) | les ~120 mots-clés prioritaires du §3.1 de la stratégie, database=fr | volume, KD, CPC, intention |
| A2 | keyword_research | phrase_fullsearch (broad match) | « agence seo pme », database=fr, limit 500 | longue traîne SEO PME |
| A3 | keyword_research | phrase_fullsearch | « création site internet », database=fr, limit 1000, filtre KD ≤ 40 | longue traîne dev web atteignable |
| A4 | keyword_research | phrase_fullsearch | « geo generative engine optimization » + « référencement ia », database=fr, limit 300 | univers GEO complet |
| A5 | keyword_research | phrase_questions | « site internet », « référencement naturel », database=fr, limit 300 | questions pour guides + FAQ |
| A6 | keyword_research | phrase_fullsearch | « web design » + « refonte site internet », database=fr, limit 500 | univers design |
| A7 | keyword_research | phrase_all / batch | les 34 requêtes Maroc du CSV, database=ma | volumes Maroc |
| A8 | keyword_research | phrase_fullsearch | « agence web casablanca », database=ma, limit 300 | longue traîne Maroc |

## Lot B — concurrents (priorité 2, ~10 appels)

Panel : voir [data/concurrents-a-analyser.csv](data/concurrents-a-analyser.csv) (priorité 1 : digidop.com, agence-scroll.com, kolonell.com, hackceleration.com).

| # | Toolkit | Rapport | Paramètres | But |
|---|---|---|---|---|
| B1 | domain_overview | domain_ranks (batch) | les 8 domaines concurrents, database=fr | trafic, nb mots-clés, autorité : calibrer l'ambition |
| B2–B5 | organic_research | domain_organic | chaque concurrent priorité 1, database=fr, limit 500, tri par trafic | leurs pages/mots-clés gagnants |
| B6 | organic_research | domain_organic_pages | digidop.com et kolonell.com, limit 200 | quelles pages (guides prix) rapportent le trafic |
| B7 | competitors_research | domain_domains (Keyword Gap) | 4 concurrents priorité 1, database=fr, limit 1000 | mots-clés communs à ≥ 2 concurrents = cœur de marché |
| B8 | competitors_research | domain_organic_organic | digidop.com, database=fr, limit 30 | découvrir des concurrents non identifiés |
| B9 | organic_research | domain_organic | kolonell.com, database=ma, limit 300 | le volet Maroc du concurrent FR+MA |

## Lot C — backlinks (priorité 3, ~5 appels)

| # | Toolkit | Rapport | Paramètres | But |
|---|---|---|---|---|
| C1 | backlinks_research | backlinks_overview | digidop.com, agence-scroll.com, yateo.com | ordre de grandeur d'autorité à atteindre |
| C2 | backlinks_research | backlinks_refdomains | digidop.com, limit 200, tri par AS | sources de liens reproductibles (annuaires, médias, partenaires) |
| C3 | backlinks_research | backlinks_refdomains | agence-scroll.com, limit 200 | idem, angle GEO |
| C4 | competitors_research | backlink competitors / gap | panel priorité 1 | domaines qui lient à ≥ 2 concurrents : liste de prospection |

## Lot D — suivi (une fois le domaine en ligne)

- `projects` : créer le projet ANVSLAB (anvslab.com), puis `position_tracking` sur ~150 mots-clés (FR mobile + desktop, Paris ; MA Casablanca) et `site_audit` hebdomadaire.
- Export mensuel → tableau de bord Power BI existant (`~/Desktop/anvslab-powerbi/`).

## Après extraction

1. Fusionner A1–A8 dans le CSV clusters (clé = mot-clé normalisé) ; recalculer la priorité = volume × intention transactionnelle ÷ KD.
2. Ajouter les mots-clés d'écart (B7) absents du CSV avec le cluster correspondant.
3. Mettre à jour le §3.1 de la stratégie et le plan de contenu §6 avec les volumes réels.
4. Dater et archiver les exports bruts ; ne jamais écraser une extraction antérieure.
