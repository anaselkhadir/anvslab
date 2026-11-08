# seo-strategy — ANVSLAB

- `STRATEGIE-SEO-ANVSLAB.md` — stratégie v1 (diagnostic, positionnement, clusters, architecture, plan 90 jours, netlinking, GEO, KPI).
- `SEMRUSH-PLAN-EXTRACTION.md` — les ~25 appels Semrush à lancer dès rechargement des unités API (solde à zéro le 8 nov. 2026).
- `data/mots-cles-clusters-2026-11-08.csv` — 1 399 requêtes Google Suggest (FR + MA) classées par cluster et intention ; colonnes Semrush vides à remplir.
- `data/concurrents-a-analyser.csv` — panel de 8 concurrents + 3 annuaires (backlinks).
- `data/raw/` — export brut Google Suggest et les deux scripts rejouables :

```bash
python3 -I data/raw/recolte_google_suggest.py   # écrit suggest_raw.csv dans le dossier courant
python3 -I data/raw/clusteriser.py              # écrit mots_cles_clusters.csv
```

Google Suggest ne donne ni volume ni difficulté : seule la présence d'une requête est attestée. Les chiffres viennent de Semrush.
