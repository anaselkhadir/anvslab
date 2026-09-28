#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère les icônes du site : le hibou du logo, en blanc, sur une tuile pleine
au signal orangé #ff2d00.

Le dessin n'est jamais retouché ni redessiné. Le PNG source porte le hibou en
blanc, ses yeux étant des anneaux évidés : posé sur la tuile, l'orange remonte
par ces évidements et reconstitue exactement le hibou du logo.

Une tentative précédente remplaçait les anneaux par des pupilles pleines aux
petites tailles, pour gagner en lisibilité à 16 px. Le résultat ne ressemblait
plus à un hibou : abandonné. Mieux vaut un hibou juste et un peu doux à 16 px
qu'une forme nette et fausse.

Sorties, aux emplacements que Next.js reconnaît dans app/ :
  app/icon.png        512×512   onglet HiDPI, signets, partages
  app/apple-icon.png  180×180   écran d'accueil iOS
  app/favicon.ico     16/32/48  navigateurs anciens et Windows

Usage : python3 scripts/build-favicon.py
"""

import pathlib
import struct
from io import BytesIO

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "anvslab-owl-white.png"
APP = ROOT / "app"

SIGNAL = (0xFF, 0x2D, 0x00, 255)

# Composition toujours faite à cette taille avant réduction : l'anticrénelage
# se joue alors contre l'orange, jamais contre du transparent, ce qui éviterait
# un liseré grisâtre sur les contours.
MASTER = 1024

# Part de la hauteur de tuile occupée par le hibou. En dessous de 0,75 il se
# perd ; au-delà de 0,88 les aigrettes frôlent le bord.
RATIO = 0.82

# Le hibou est plus lourd en bas qu'en haut : le remonter légèrement, sinon il
# paraît tomber dans la tuile.
LIFT = 0.02


def tuile(size: int) -> Image.Image:
    owl = Image.open(SOURCE).convert("RGBA")
    canvas = Image.new("RGBA", (MASTER, MASTER), SIGNAL)

    h = int(MASTER * RATIO)
    w = round(h * owl.width / owl.height)
    canvas.alpha_composite(
        owl.resize((w, h), Image.LANCZOS),
        ((MASTER - w) // 2, (MASTER - h) // 2 - int(MASTER * LIFT)),
    )
    return canvas.resize((size, size), Image.LANCZOS).convert("RGB")


def ecrire_ico(chemin: pathlib.Path, images) -> None:
    """Chaque taille est composée puis réduite séparément depuis le master :
    plus net que de laisser le format décliner une image unique."""
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

    tuile(512).save(APP / "icon.png", optimize=True)
    tuile(180).save(APP / "apple-icon.png", optimize=True)
    ecrire_ico(APP / "favicon.ico", [tuile(16), tuile(32), tuile(48)])

    for nom in ("icon.png", "apple-icon.png", "favicon.ico"):
        print(f"  app/{nom:<16} {(APP / nom).stat().st_size:>6} o")


if __name__ == "__main__":
    main()
