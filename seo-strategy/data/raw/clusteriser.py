import csv, re, collections, unicodedata
def norm(s): return unicodedata.normalize("NFKD", s.lower()).encode("ascii","ignore").decode()
rows = list(csv.DictReader(open("suggest_raw.csv", encoding="utf-8")))
seen = {}
for r in rows:
    k = r["suggestion"].strip().lower()
    if k not in seen: seen[k] = r
rules = [
 ("GEO / IA",           r"\b(geo|generative|chatgpt|gpt|ia\b|intelligence artificielle|llm|perplexity|gemini|assistant|chatbot|automatisation|automation|n8n|make)\b"),
 ("Prix / devis",       r"(prix|tarif|cout|coute|devis|combien|pas cher|gratuit|budget|cher)"),
 ("Local Maroc",        r"(maroc|casablanca|rabat|marrakech|tanger|agadir|dirham|dh\b)"),
 ("Local France",       r"\b(paris|lyon|marseille|bordeaux|toulouse|nantes|lille|nice|strasbourg|montpellier|rennes|grenoble|reims|annecy|dijon|tours|angers|metz|rouen|caen|brest|limoges|pau|nimes|orleans|clermont|le havre|perpignan|besancon|mulhouse|avignon|poitiers|valence|lorient|quimper|vannes|bayonne|biarritz|la rochelle|nancy|troyes|amiens|chambery|ile de france|idf|france|francais)\b"),
 ("SEO / référencement",r"(seo|referencement|netlinking|backlink|audit|mots? cles?|positionnement|google|search console|ranking)"),
 ("Web design / UX",    r"(design|webdesign|ux|ui\b|maquette|graphi|figma|charte)"),
 ("E-commerce",         r"(e-?commerce|shopify|boutique|woocommerce|prestashop|vente en ligne)"),
 ("Création / refonte site", r"(creation|creer|refonte|site vitrine|site internet|site web|landing|wordpress|webflow|wix|next|developp|application|sur mesure|cms)"),
 ("Agence / métier",    r"(agence|studio|freelance|consultant|developpeur|webmaster)"),
]
intent_rules = [("Transactionnel", r"(agence|devis|prix|tarif|prestataire|freelance|consultant|studio|service|offre|forfait|pack)"),
                ("Informationnel", r"(comment|pourquoi|quel|quelle|c'est quoi|definition|exemple|guide|etapes|conseil|avantage|difference)")]
out=[]; cnt=collections.Counter()
for k,r in seen.items():
    n = norm(k); cl="Autre"
    for name,rx in rules:
        if re.search(rx,n): cl=name; break
    intent="Navigationnel/autre"
    for name,rx in intent_rules:
        if re.search(rx,n): intent=name; break
    if re.search(r"^(comment|pourquoi|quel|quelle|combien|c'est quoi|que )",n): intent="Informationnel"
    out.append({"mot_cle":k,"cluster":cl,"intention":intent,"marche":"MA" if r["gl"]=="ma" or re.search(r"maroc|casablanca|rabat",n) else "FR","seed":r["seed"],"source":"Google Suggest 2026-11-08","volume_semrush":"","kd_semrush":"","cpc_semrush":""})
    cnt[cl]+=1
out.sort(key=lambda x:(x["cluster"],x["mot_cle"]))
with open("mots_cles_clusters.csv","w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=list(out[0].keys())); w.writeheader(); w.writerows(out)
print(len(out),"mots-clés uniques"); 
for c,n in cnt.most_common(): print(f"{n:4d}  {c}")
print("\n== échantillons ==")
for c,_ in cnt.most_common():
    ex=[o["mot_cle"] for o in out if o["cluster"]==c][:14]
    print(f"\n[{c}]"); print(" | ".join(ex))
print("\n== questions ==")
qs=[o["mot_cle"] for o in out if o["intention"]=="Informationnel"]
print(len(qs)); print(" | ".join(qs[:60]))
