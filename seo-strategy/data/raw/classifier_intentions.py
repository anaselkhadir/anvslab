"""
Classification fine des requêtes récoltées (Google Suggest) sur six axes :
statut (cible / hors cible), intention, service, géographie, modificateur,
page cible. Écrit ../cartographie-mots-cles-2026-11-08.csv et imprime les
synthèses utilisées dans INTENTIONS-ET-MOTS-CLES.md.

Rejouable : python3 -I classifier_intentions.py (depuis data/raw/).
Les volumes viendront de Semrush ; ici seule la présence est attestée.
"""
import csv, re, collections, unicodedata, sys

def n(s):
    return unicodedata.normalize("NFKD", s.lower()).encode("ascii", "ignore").decode()

def rx(p):
    return re.compile(p)

SOURCES = ["google-suggest-brut-2026-11-08.csv", "google-suggest-complement-2026-11-08.csv"]
seen = {}
for f in SOURCES:
    for r in csv.DictReader(open(f, encoding="utf-8")):
        k = r["suggestion"].strip().lower()
        if k and k not in seen:
            seen[k] = r

# ---------- hors cible ----------
HORS_GEO = rx(r"\b(belgique|bruxelles|liege|namur|wallonie|suisse|geneve|lausanne|zurich|vaud|quebec|montreal|canada|tunisie|tunis|algerie|alger|oran|luxembourg|senegal|dakar|usa|londres|london|cote d.ivoire|abidjan|cameroun|douala|monaco|reunion|guadeloupe|martinique|tahiti|nouvelle caledonie|madagascar|mali|bamako|burkina|togo|benin|gabon|congo|kinshasa|niger|mauritanie|guinee|conakry|haiti|maurice|espagne|portugal|italie|allemagne|dubai|emirats|turquie|guyane|brossard|gatineau|sherbrooke|laurentides|charleroi|gembloux|uccle|neuchatel|monastir|sfax|sousse|\bnz\b|\buk\b)\b")
HORS_EMPLOI = rx(r"(recrut|emploi|offre d.emploi|alternance|\bstage\b|salaire|formation|cours|apprendre|devenir|ecole|bts|licence|master|certification|openclassrooms|fiche metier|job)")
HORS_BRUIT = rx(r"(best online site|best site online|casino|poker|gambling|dating|jingliu|iapmo|nature referenc|reference book|cheques? cadhoc|carte illicado|carte hdf|bic ferme|\bartv\b|le plus traduit|reseau social|adresse ip|pour enfant|entreprises rge|compte comptable|quel compte|wordpress swat|design online xco|agence digital x\b|\bk4\b|\bcic\b|optimize 360|\bapv\b|listing produit|suspendu|ne s.ouvre|ne fonctionne plus|inaccessible|ne s.affiche)")
HORS_DIY = rx(r"(wix|jimdo|site123|weebly|google sites|canva|hostinger|ionos|o2switch|lws\b|ovh|hebergement|nom de domaine|generateur de site|site gratuit|gratuitement|soi.meme|moi.meme|sans coder|no code|logiciel de creation)")
# Suggestions en anglais ou hors sujet (homonymes : Séoul, géocaching, « référence nature »…)
HORS_ANGLAIS = rx(r"(\bagency\b|\byour\b|\bfor\b|\bwith\b|\bbest\b|\bonline design\b|\bdesigner\b|\bbasics\b|\bbooks?\b|\bpdf\b|\bblogs?\b|\bawards\b|\bbusiness\b|\bbackground\b|\bbanner\b|\bapp\b|\badalah\b|\bque es\b|\bin [a-z]+$|mumbai|jakarta|toronto|new york|los angeles|hong kong|qatar|birmingham|brisbane|morocco|\bguk\b|lego|\bis\b|strategy|specialist|\bai\b(?! pme)|^www\b|seoul|geocentrisme|geocooling|geofencing|geotextile|geocaching|geomarketing|reference (for|format|of|to|nature|iam)|nature (morte|philo)|mots fleches|3 lettres|en anglais|en arabe|^le referencement naturel est$|site officiel|claude|html css|\.org$|sword|interim|yamoussoukro|yopougon|park seo|oujda est|\bapa\b|harvard|referencing|meaning|explained|\bwiki\b|princeton|aggarwal|\bicon\b|o que e|services$|\bki\b|\bjm\b|^agence (seo|web) it$|joomla|\btaxi\b)")
# Requêtes de marque tierce (liste explicite ; le reste des « agence X » inconnus
# est conservé comme ville secondaire ou marque « à vérifier », jamais exclu à l'aveugle)
MARQUES = rx(r"\b(klee group|xaltis|seolis|webup|zebra|zmirov|winter|utopia|banana|circus|factory|mixer|acerra|asit|eskimoz|hackers|wave|yesstyle|zooart|swat|optimize|k4|cic|led|digital circus|primelis|yateo|digidop|kolonell|ranker|uplix|level up|jloo|key web|zol)\b")
MARQUE_TIERCE = rx(r"^(agence|studio) (digitale?|web|seo|communication) ([a-z0-9&'-]+(?: [a-z0-9&'-]+)?)$")
BRUIT_2 = rx(r"(^info design$|^site online$|^agence web it$|listing|wifi|seo localisation|^page web prix$|^reference ia$)")

# ---------- intention ----------
INFO = rx(r"(^(comment|pourquoi|quand|quel|quelle|quels|quelles|combien de temps|c.est quoi|qu.est|le |la )|definition|\bdef\b|c.est quoi|qu.est.ce|signification|exemple|modele|guide|etapes|conseil|avantage|difference|\bvs\b|\bou\b (sea|payant|organique|sponsorise)|et payant|tendance|checklist|astuce|erreur|bonne pratique|core web vitals|taux de conversion|tunnel|mots cles|deontologie|\bordre\b|barreau|\brin\b|collaborateur|sans site internet|inspiration|epure|moderne)")
COMMERCIAL = rx(r"(prix|tarif|cout|coute|combien|devis|budget|pas cher|meilleur|top|classement|avis|comparatif|choisir|gratuit|grille|forfait|pack|abonnement|mensuel)")
TRANSAC = rx(r"(agence|studio|freelance|consultant|developpeur|prestataire|entreprise de|societe de|webmaster|expert|specialiste|creation|creer|conception|realisation|refonte|developpement|service|accompagnement|audit|optimisation|agent|assistant|chatbot|automatisation)")

# ---------- service ----------
SERVICES = [
    ("GEO / IA", rx(r"(\bgeo\b|generative|generatif|chatgpt|gpt|\bia\b|\bai pme\b|intelligence artificielle|\bllm\b|perplexity|gemini|\baeo\b|answer engine|moteurs? generatif|assistant|chatbot|agent telephonique|automatisation|automation|n8n|\bmake\b|visibilite ia)")),
    ("SEO", rx(r"(\bseo\b|referencement|netlinking|backlink|audit|mots? cles?|positionnement|google my business|fiche google|\bsea\b|search console|apparai|cite par|premiere page)")),
    ("E-commerce", rx(r"(e.?commerce|shopify|boutique en ligne|woocommerce|prestashop|vente en ligne|marchand)")),
    ("Web design", rx(r"(design|webdesign|\bux\b|\bui\b|maquette|graphi|figma|charte|haut de gamme|premium|moderne|tendance)")),
    ("Refonte / performance", rx(r"(refonte|refaire|lent|rapide|mobile first|core web vitals|convertit|conversion|tunnel|landing)")),
    ("Création de site", rx(r"(site|landing|page|wordpress|webflow|next|developp|application|sur mesure|\bcms\b|web\b)")),
    ("Agence généraliste", rx(r"(agence|studio|communication|digital|marketing)")),
]

# ---------- géographie ----------
VILLES_FR = rx(r"\b(paris|lyon|marseille|bordeaux|toulouse|nantes|lille|nice|strasbourg|montpellier|rennes|grenoble|annecy|quimper|brest|rouen|reims|nancy|metz|dijon|tours|angers|orleans|caen|limoges|pau|bayonne|biarritz|perpignan|nimes|avignon|valence|chambery|clermont(.ferrand)?|mulhouse|besancon|poitiers|la rochelle|lorient|vannes|troyes|amiens|le havre|aix(.en.provence| les bains)?|saint.etienne|toulon|cannes|antibes|le mans|evreux|perigueux|cherbourg|albi|pontivy|arcachon|beziers|belley|yssingeaux|andrezieux|ugine|uzes|saint.malo|colmar|niort|agen|tarbes|auxerre|bourges|blois|chartres|laval|cholet|roanne|vichy|montauban|carcassonne|narbonne|sete|frejus|hyeres|ajaccio|bastia|calais|dunkerque|arras|lens|valenciennes|boulogne|compiegne|beauvais|creil|melun|versailles|nanterre|boulogne.billancourt|saint.denis|montreuil|creteil|argenteuil|cergy|evry|\b(75|92|93|94|95|77|78|91|69|13|33|31|44|59|67|34|35|06)\b|ile de france|idf|bretagne|normandie|alsace|provence|aquitaine|occitanie|auvergne|rhone|loire|savoie|vendee|var\b|herault|gironde|nord\b)\b")
VILLES_TOP = ["paris", "lyon", "marseille", "bordeaux", "toulouse", "nantes", "lille"]
MAROC = rx(r"(maroc|casablanca|rabat|marrakech|tanger|agadir|\bfes\b|meknes|kenitra|oujda|tetouan|mohammedia|el jadida|beni mellal|nador|safi|\bdh\b|dirham)")
FRANCE_NAT = rx(r"\b(france|francais|francaise)\b")

# ---------- modificateur ----------
MODS = [
    ("prix", rx(r"(prix|tarif|cout|coute|combien|devis|budget|pas cher|grille|forfait|mensuel|abonnement)")),
    ("gratuit", rx(r"gratuit")),
    ("meilleur", rx(r"(meilleur|top|classement|avis|comparatif|choisir)")),
    ("exemple", rx(r"(exemple|modele|template|inspiration|tendance)")),
    ("definition", rx(r"(definition|c.est quoi|qu.est|signification|difference|\bvs\b)")),
    ("comment", rx(r"^(comment|pourquoi|quand|combien de temps)")),
    ("secteur", rx(r"(artisan|restaurant|avocat|medecin|dentaire|dentiste|immobili|architecte|coach|plombier|electricien|coiffure|beaute|garage|comptable|association|hotel|photographe|nettoyage|\bbtp\b|industrie|industriel|commerce|commercant|\bpme\b|\btpe\b|\bb2b\b|cabinet|notaire|kine|osteopathe|veterinaire|boulangerie|fleuriste|paysagiste|menuisier|peintre|macon|chauffagiste|serrurier|auto.ecole|salle de sport|ecole|clinique|pharmacie|opticien|agence de voyage|transport|logistique|startup|freelance pour)")),
    ("pme", rx(r"(\bpme\b|\btpe\b|petite entreprise|entreprise)")),
]

# ---------- page cible ----------
def page_for(service, intent, geo, mod, kw):
    if geo == "Maroc":
        if "SEO" in service or "GEO" in service:
            return "/maroc/agence-seo-maroc/"
        return "/maroc/agence-web-casablanca/"
    if geo.startswith("Ville FR"):
        city = geo.split(":")[1].strip()
        return f"/agence-web/{city}/" if city in VILLES_TOP else "/agence-web/ (villes secondaires, phase 3)"
    if mod == "prix" and intent != "Transactionnelle":
        if "SEO" in service: return "/guides/prix-referencement-naturel/"
        if "Refonte" in service: return "/guides/prix-refonte-site-internet/"
        return "/guides/prix-site-internet-pme/"
    if service == "GEO / IA":
        if re.search(r"assistant|chatbot|agent|automatisation|automation|aide ia", kw):
            return "/services/assistant-ia-pme/"
        return "/guides/geo-referencement-ia/" if intent == "Informationnelle" else "/services/geo-referencement-ia/"
    if service == "SEO":
        if re.search(r"audit|analyse", kw): return "/services/seo/audit-seo-gratuit/"
        if re.search(r"local|google my business|fiche google|maps", kw): return "/services/seo/seo-local/"
        return "/guides/seo/" if intent == "Informationnelle" else "/services/seo/"
    if service == "Web design":
        return "/guides/web-design/" if intent == "Informationnelle" else "/services/web-design/"
    if service == "Refonte / performance":
        if re.search(r"landing", kw): return "/services/creation-site-internet/landing-page/"
        return "/guides/refonte-site-internet/" if intent == "Informationnelle" else "/services/creation-site-internet/refonte/"
    if service == "E-commerce":
        return "/services/creation-site-internet/site-e-commerce/"
    if mod == "secteur" and service in ("Création de site", "Agence généraliste", "Autre") and not re.search(r"\bpme\b|\btpe\b|entreprise", kw):
        return "/secteurs/ (pages métier)"
    if service == "Autre":
        return "/guides/seo/" if "SEO" in kw or "google" in kw else "/ (accueil)"
    if service == "Création de site":
        if mod == "meilleur": return "/guides/choisir-une-agence-web/"
        if intent == "Informationnelle": return "/guides/creation-site-internet/"
        if re.search(r"vitrine", kw): return "/services/creation-site-internet/site-vitrine/"
        if re.search(r"application|sur mesure|logiciel", kw): return "/services/creation-site-internet/application-sur-mesure/"
        return "/services/creation-site-internet/"
    if service == "Agence généraliste":
        if mod == "meilleur": return "/guides/choisir-une-agence-web/"
        if mod in ("secteur", "pme"): return "/ (accueil : agence digitale pour PME)"
        return "/ (accueil)"
    return "/ (accueil)"

out = []
for kw, r in seen.items():
    t = n(kw)
    statut, motif = "cible", ""
    if HORS_BRUIT.search(t): statut, motif = "hors cible", "bruit"
    elif HORS_EMPLOI.search(t): statut, motif = "hors cible", "emploi / formation"
    elif HORS_GEO.search(t) and not MAROC.search(t): statut, motif = "hors cible", "géographie hors FR/MA"
    elif HORS_DIY.search(t): statut, motif = "hors cible", "faire soi-même / hébergeur"
    # « créer un site avec ia » : l'internaute cherche un générateur, pas un studio
    elif re.search(r"((creation|creer|faire|site).*\bia\b|\bia\b.*(creation|site))", t) and not re.search(r"agence|visibilite|referencement|seo|geo|studio", t):
        statut, motif = "hors cible", "faire soi-même / hébergeur"
    elif HORS_ANGLAIS.search(t) and "google my business" not in t: statut, motif = "hors cible", "anglais / hors sujet"
    elif MARQUES.search(t): statut, motif = "hors cible", "marque tierce (navigationnelle)"
    elif BRUIT_2.search(t): statut, motif = "hors cible", "bruit"

    if INFO.search(t): intent = "Informationnelle"
    elif COMMERCIAL.search(t): intent = "Commerciale"
    elif TRANSAC.search(t): intent = "Transactionnelle"
    else: intent = "Transactionnelle (implicite)"  # « seo pme », « webdesigner lyon » : recherche d'un prestataire sans verbe
    # une question qui parle de prix reste commerciale
    if re.search(r"(combien coute|quel prix|quel est le prix|quel tarif)", t): intent = "Commerciale"

    service = "Autre"
    for name, p in SERVICES:
        if p.search(t): service = name; break

    if MAROC.search(t) or r["gl"] == "ma": geo = "Maroc"
    else:
        m = VILLES_FR.search(t)
        if m: geo = f"Ville FR : {m.group(1).replace(' ', '-')}"
        elif FRANCE_NAT.search(t): geo = "France (national explicite)"
        else:
            geo = "National (FR implicite)"
            # « agence seo dax », « agence web hossegor » : dernier mot inconnu des
            # règles → ville secondaire ou marque, à trancher avec les volumes Semrush
            mt = MARQUE_TIERCE.match(t)
            if mt:
                tail = mt.group(3)
                known = any(p.search(tail) for _, p in SERVICES) or any(p.search(tail) for _, p in MODS) or INFO.search(tail) or COMMERCIAL.search(tail) or TRANSAC.search(tail)
                if not known: geo = "Ville FR : à-vérifier"

    mod = "aucun"
    for name, p in MODS:
        if p.search(t): mod = name; break

    page = page_for(service, intent, geo, mod, t) if statut == "cible" else ""

    # priorité : P1 = argent et différenciation, P2 = guides, P3 = longue traîne locale
    if statut != "cible": prio = "—"
    elif geo.startswith("Ville FR") and geo.split(":")[1].strip() not in VILLES_TOP: prio = "P3"
    elif service == "GEO / IA" or mod == "prix": prio = "P1"
    elif intent in ("Transactionnelle", "Transactionnelle (implicite)", "Commerciale") and service in ("SEO", "Création de site", "Web design", "Refonte / performance", "Agence généraliste") and (mod in ("pme", "secteur", "aucun", "meilleur") or geo == "Maroc"): prio = "P1"
    elif intent == "Informationnelle": prio = "P2"
    else: prio = "P2"

    out.append({
        "mot_cle": kw, "statut": statut, "motif_exclusion": motif, "intention": intent,
        "service": service, "geographie": geo, "modificateur": mod, "page_cible": page,
        "priorite": prio, "marche": "MA" if geo == "Maroc" else "FR",
        "source": f"Google Suggest {r['kind']} 2026-11-08", "seed": r["seed"],
        "volume_semrush": "", "kd_semrush": "", "cpc_semrush": "", "intention_semrush": "",
    })

order = {"P1": 0, "P2": 1, "P3": 2, "—": 3}
out.sort(key=lambda x: (order[x["priorite"]], x["page_cible"], x["mot_cle"]))
with open("../cartographie-mots-cles-2026-11-08.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0].keys())); w.writeheader(); w.writerows(out)

cible = [o for o in out if o["statut"] == "cible"]
C = collections.Counter
print(f"total {len(out)} | cible {len(cible)} | hors cible {len(out)-len(cible)}")
print("exclusions:", C(o["motif_exclusion"] for o in out if o["statut"] != "cible").most_common())
print("\nintention (cible):", C(o["intention"] for o in cible).most_common())
print("service (cible):", C(o["service"] for o in cible).most_common())
print("géo (cible):", C(o["geographie"].split(":")[0] for o in cible).most_common())
print("modificateur (cible):", C(o["modificateur"] for o in cible).most_common())
print("priorité:", C(o["priorite"] for o in cible).most_common())
print("\ncroisement intention × service (cible) :")
cross = C((o["intention"], o["service"]) for o in cible)
for (i, s), v in sorted(cross.items(), key=lambda x: -x[1])[:18]: print(f"  {v:4d}  {i:<28} {s}")
print("\npages cibles (nb mots-clés, 3 exemples les plus courts) :")
pages = collections.defaultdict(list)
for o in cible: pages[o["page_cible"]].append(o["mot_cle"])
for p, kws in sorted(pages.items(), key=lambda x: -len(x[1])):
    ex = sorted(kws, key=len)[:6]
    print(f"  {len(kws):4d}  {p:<58} {' | '.join(ex)}")
