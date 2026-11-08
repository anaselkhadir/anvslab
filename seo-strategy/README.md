# seo-strategy — ANVSLAB

- `STRATEGIE-SEO-ANVSLAB.md` — stratégie v1 (diagnostic, positionnement, clusters, architecture, plan 90 jours, netlinking, GEO, KPI).
- `INTENTIONS-ET-MOTS-CLES.md` — intentions de recherche (4 types), matrice intention × service, cartographie des 1 250 requêtes cibles vers 34 pages, protocole de validation SERP.
- `SEMRUSH-PLAN-EXTRACTION.md` — les ~25 appels Semrush à lancer dès rechargement des unités API (solde à zéro le 8 nov. 2026, re-contrôlé le même jour).
- `data/cartographie-mots-cles-2026-11-08.csv` — **fichier de référence** : 1 776 requêtes (deux récoltes), statut cible / hors cible avec motif, intention, service, géographie, modificateur, page cible, priorité ; colonnes Semrush vides à remplir.
- `data/mots-cles-clusters-2026-11-08.csv` — première passe (1 399 requêtes, 10 clusters), conservée pour historique.
- `data/concurrents-a-analyser.csv` — panel de 8 concurrents + 3 annuaires (backlinks).
- `data/raw/` — export brut Google Suggest et les deux scripts rejouables :

```bash
python3 -I data/raw/recolte_google_suggest.py   # écrit suggest_raw.csv dans le dossier courant
python3 -I data/raw/recolte_complement.py       # secteurs, questions SEO/GEO, design, Maroc
python3 -I data/raw/clusteriser.py              # première passe (10 clusters)
cd data/raw && python3 -I classifier_intentions.py   # classification fine → ../cartographie-mots-cles-2026-11-08.csv
```

Google Suggest ne donne ni volume ni difficulté : seule la présence d'une requête est attestée. Les chiffres viennent de Semrush.
