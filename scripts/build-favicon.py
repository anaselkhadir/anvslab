#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère les icônes du site à partir du hibou du logo : blanc, centré, sur une
tuile pleine au signal orangé #ff2d00.

Deux dessins, pas un seul redimensionné — c'est la différence entre une icône
lisible et une bouillie dans l'onglet :

  • Détaillé — le hibou tel quel. Ses yeux sont des anneaux évidés qui laissent
    passer l'orange. Superbe à partir de 128 px, illisible en dessous de 48.
  • Simplifié — silhouette pleine (les évidements sont bouchés) et pupilles
    orange pleines. Les anneaux fins disparaissent, le visage reste.
    À 16 px le rendu est en plus seuillé : sans antialiasing la forme est
    franche, alors que le lissage la noie dans un gris rosé.

Sorties, aux emplacements que Next.js reconnaît dans app/ :
  app/icon.png        512×512   détaillé — onglet HiDPI, signets, partages
  app/apple-icon.png  180×180   détaillé — écran d'accueil iOS
  app/favicon.ico     16/32/48  simplifié — navigateurs anciens et Windows

Usage : python3 scripts/build-favicon.py
"""

import pathlib
import struct
from collections import deque
from io import BytesIO

import numpy as np
from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "anvslab-owl-white.png"
APP = ROOT / "app"

SIGNAL = (0xFF, 0x2D, 0x00)

# Composition toujours faite à cette taille avant réduction : l'anticrénelage
# se joue alors contre l'orange, jamais contre du transparent, ce qui évite
# un liseré grisâtre sur les contours.
MASTER = 1024

# Part de la hauteur de tuile occupée par le hibou. Le dessin détaillé respire
# davantage ; le simplifié, réservé aux petites tailles, occupe plus de place.
RATIO_DETAILLE = 0.72
RATIO_SIMPLIFIE = 0.86

# Le hibou est plus lourd en bas : le remonter un peu, sinon il paraît tomber.
LIFT = 0.03

# Diamètre des pupilles, en fraction du diamètre de l'œil d'origine.
PUPILLE = 0.70


def charger():
    """Renvoie (image source, silhouette pleine, centres des yeux, diamètre)."""
    owl = Image.open(SOURCE).convert("RGBA")
    mask = np.array(owl.split()[3]) > 128
    h, w = mask.shape

    # L'extérieur, ce sont les pixels vides reliés à un bord. Le hibou touchant
    # les bords latéraux, l'extérieur est coupé en plusieurs morceaux : on
    # amorce donc depuis tous les pixels de bordure, pas depuis un seul coin.
    outside = np.zeros_like(mask)
    q = deque()

    def seed(y, x):
        if not mask[y, x] and not outside[y, x]:
            outside[y, x] = True
            q.append((y, x))

    for x in range(w):
        seed(0, x)
        seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        seed(y, w - 1)
    while q:
        cy, cx = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w:
                seed(ny, nx)

    holes = ~mask & ~outside          # les évidements intérieurs : les yeux
    solid = mask | holes              # silhouette, trous bouchés

    # Étiquetage des évidements pour retrouver les deux yeux sans coordonnées
    # codées en dur : le jour où le logo est redessiné, le script suit.
    lab = np.zeros((h, w), np.int32)
    comps = []
    n = 0
    for y in range(h):
        for x in range(w):
            if holes[y, x] and lab[y, x] == 0:
                n += 1
                lab[y, x] = n
                stack = [(y, x)]
                px = []
                while stack:
                    cy, cx = stack.pop()
                    px.append((cy, cx))
                    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        ny, nx = cy + dy, cx + dx
                        if 0 <= ny < h and 0 <= nx < w and holes[ny, nx] and lab[ny, nx] == 0:
                            lab[ny, nx] = n
                            stack.append((ny, nx))
                ys = [p[0] for p in px]
                xs = [p[1] for p in px]
                comps.append((len(px), sum(xs) / len(px), sum(ys) / len(px),
                              max(xs) - min(xs) + 1))

    comps.sort(key=lambda c: -c[0])
    eyes = sorted(comps[:2], key=lambda c: c[1])
    if len(eyes) != 2:
        raise SystemExit("Les deux yeux n'ont pas été détectés dans le PNG source.")
    centres = [(e[1], e[2]) for e in eyes]
    diametre = sum(e[3] for e in eyes) / 2
    return owl, solid, centres, diametre


OWL, SOLID, EYES, EYE_D = charger()
SH, SW = SOLID.shape


def _poser(art: Image.Image, ratio: float, size: int) -> Image.Image:
    tuile = Image.new("RGBA", (MASTER, MASTER), SIGNAL + (255,))
    h = int(MASTER * ratio)
    w = round(h * SW / SH)
    tuile.alpha_composite(
        art.resize((w, h), Image.LANCZOS),
        ((MASTER - w) // 2, (MASTER - h) // 2 - int(MASTER * LIFT)),
    )
    return tuile.resize((size, size), Image.LANCZOS).convert("RGB")


def detaille(size: int) -> Image.Image:
    return _poser(OWL, RATIO_DETAILLE, size)


def simplifie(size: int, seuiller: bool = False) -> Image.Image:
    art = Image.new("RGBA", (SW, SH), (0, 0, 0, 0))
    art.paste((255, 255, 255, 255), (0, 0),
              Image.fromarray((SOLID * 255).astype(np.uint8)))
    d = ImageDraw.Draw(art)
    r = EYE_D * PUPILLE / 2
    for cx, cy in EYES:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=SIGNAL + (255,))

    im = _poser(art, RATIO_SIMPLIFIE, size)
    if seuiller:
        # Chaque pixel bascule vers le blanc ou vers l'orange, rien entre les
        # deux : à 16 px les demi-teintes ne décrivent plus aucune forme.
        a = np.array(im).astype(int)
        blanc = a.sum(axis=2) > (255 + 120 + 90)
        a[blanc] = [255, 255, 255]
        a[~blanc] = list(SIGNAL)
        im = Image.fromarray(a.astype(np.uint8))
    return im


def ecrire_ico(chemin: pathlib.Path, images) -> None:
    """ICO à dessins distincts par taille — Pillow ne sait que redimensionner
    une image unique, ce qui perdrait le rendu seuillé du 16 px."""
    blobs = []
    for im in images:
        buf = BytesIO()
        im.save(buf, format="PNG", optimize=True)
        blobs.append(buf.getvalue())

    offset = 6 + 16 * len(blobs)
    entries = b""
    for im, blob in zip(images, blobs):
        entries += struct.pack(
            "<BBBBHHII",
            im.width if im.width < 256 else 0,
            im.height if im.height < 256 else 0,
            0, 0, 1, 32, len(blob), offset,
        )
        offset += len(blob)

    chemin.write_bytes(
        struct.pack("<HHH", 0, 1, len(blobs)) + entries + b"".join(blobs)
    )


def main() -> None:
    APP.mkdir(exist_ok=True)
    print(f"yeux détectés : {[(round(x), round(y)) for x, y in EYES]} · "
          f"diamètre {EYE_D:.0f} px")

    detaille(512).save(APP / "icon.png", optimize=True)
    detaille(180).save(APP / "apple-icon.png", optimize=True)
    ecrire_ico(APP / "favicon.ico",
               [simplifie(16, seuiller=True), simplifie(32), simplifie(48)])

    for nom in ("icon.png", "apple-icon.png", "favicon.ico"):
        print(f"  app/{nom:<16} {(APP / nom).stat().st_size:>6} o")


if __name__ == "__main__":
    main()
