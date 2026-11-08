# Récolte complémentaire Google Suggest : secteurs PME et questions SEO/GEO
import json, time, urllib.parse, urllib.request, csv
seeds = [
 # secteurs
 *[f"site internet {m}" for m in ["artisan","restaurant","avocat","médecin","cabinet dentaire","agence immobilière","architecte","coach","plombier","électricien","salon de coiffure","institut de beauté","garage automobile","cabinet comptable","consultant","association","hôtel","boutique","photographe","entreprise de nettoyage","btp","industrie"]],
 *[f"création site internet {m}" for m in ["artisan","restaurant","avocat","médecin","agence immobilière","architecte","coach","pme industrielle","commerce"]],
 *[f"seo {m}" for m in ["artisan","restaurant","avocat","médecin","immobilier","e-commerce","b2b","industrie","pme"]],
 # questions SEO / GEO / IA
 "c'est quoi le seo","qu'est-ce que le référencement naturel","seo ou sea","seo vs geo","geo seo différence","qu'est-ce que le geo","comment être cité par chatgpt","comment apparaître dans chatgpt","référencement chatgpt entreprise","optimisation pour les moteurs génératifs","aeo answer engine optimization","visibilité ia entreprise","comment améliorer son référencement google","combien de temps pour être référencé sur google","pourquoi mon site n'apparaît pas sur google","mots clés seo comment choisir","audit seo c'est quoi","netlinking c'est quoi","seo local c'est quoi","fiche google my business",
 # refonte / performance / conversion
 "refonte site internet pourquoi","quand refaire son site internet","site internet qui convertit","taux de conversion site vitrine","site internet lent que faire","site mobile first","core web vitals","site internet rapide","landing page qui convertit","tunnel de conversion pme",
 # design
 "tendance web design 2026","web design moderne","site internet design","charte graphique site internet","ux design c'est quoi","refonte graphique site internet","site internet haut de gamme","site internet premium",
 # Maroc complément
 "création site web casablanca prix","agence digitale maroc","référencement naturel maroc prix","site web entreprise maroc","agence web rabat prix","développeur web maroc","agence seo maroc prix",
]
def sug(q, gl):
    url = "https://suggestqueries.google.com/complete/search?" + urllib.parse.urlencode({"client":"firefox","hl":"fr","gl":gl,"q":q})
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r: return json.loads(r.read().decode("utf-8","ignore"))[1]
    except Exception as e: return []
rows=[]
for s in seeds:
    gl = "ma" if any(k in s for k in ("maroc","casablanca","rabat")) else "fr"
    for x in sug(s, gl): rows.append({"seed":s,"suggestion":x,"gl":gl,"kind":"complement"})
    time.sleep(0.25)
with open("google-suggest-complement-2026-11-08.csv","w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=["seed","suggestion","gl","kind"]); w.writeheader(); w.writerows(rows)
print("seeds:",len(seeds),"lignes:",len(rows),"uniques:",len(set(r["suggestion"] for r in rows)))
