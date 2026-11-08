import json, sys, time, urllib.parse, urllib.request, csv
seeds_fr = [
 "agence web","agence web pme","agence web paris","agence web lyon","agence web casablanca",
 "création site internet","création site internet pme","création site internet prix","création site web professionnel",
 "refonte site internet","refonte site web prix","site vitrine","site vitrine prix","site internet pme",
 "agence seo","agence seo pme","agence seo paris","référencement naturel","référencement naturel prix","consultant seo",
 "audit seo","audit seo gratuit","stratégie seo","seo local","seo pme",
 "web design","agence web design","webdesigner","design site internet","ux design agence",
 "agence digitale","agence digitale pme","studio digital","agence marketing digital pme",
 "geo generative engine optimization","référencement chatgpt","référencement ia","optimisation ia recherche",
 "agence ia pme","assistant ia pme","chatbot pme","automatisation pme",
 "landing page","landing page prix","site e-commerce prix","site shopify agence",
 "combien coûte un site internet","devis site internet","tarif agence web","prix site internet vitrine",
 "agence web next.js","développeur web freelance","développement web sur mesure","application web sur mesure",
]
seeds_ma = ["agence web maroc","agence web casablanca","création site web maroc","agence seo maroc","référencement maroc","agence digitale casablanca","prix site web maroc","agence web rabat"]
alpha_heads = ["agence web","création site internet","agence seo","référencement naturel","web design"]
letters = "abcdefghijklmnopqrstuvwxyz"
def sug(q, gl):
    url = "https://suggestqueries.google.com/complete/search?" + urllib.parse.urlencode({"client":"firefox","hl":"fr","gl":gl,"q":q})
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read().decode("utf-8","ignore"))[1]
    except Exception as e:
        return ["__ERR__ "+str(e)]
rows = []
def run(seed, gl, kind):
    for s in sug(seed, gl):
        rows.append({"seed":seed,"suggestion":s,"gl":gl,"kind":kind})
    time.sleep(0.25)
for s in seeds_fr: run(s,"fr","seed")
for s in seeds_ma: run(s,"ma","seed")
for h in alpha_heads:
    for l in letters: run(f"{h} {l}","fr","alpha")
for h in ["agence web","création site internet","agence seo","site internet"]:
    for pre in ["comment choisir","pourquoi","combien coûte","quel prix","meilleure","quelle"]:
        run(f"{pre} {h}","fr","question")
with open("suggest_raw.csv","w",newline="",encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["seed","suggestion","gl","kind"]); w.writeheader(); w.writerows(rows)
uniq = sorted(set(r["suggestion"] for r in rows if not r["suggestion"].startswith("__ERR__")))
errs = [r for r in rows if r["suggestion"].startswith("__ERR__")]
print("requêtes:", len(seeds_fr)+len(seeds_ma)+len(alpha_heads)*26+4*6, "lignes:", len(rows), "uniques:", len(uniq), "erreurs:", len(errs))
if errs: print(errs[:2])
