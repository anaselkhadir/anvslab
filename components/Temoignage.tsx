"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base";

/**
 * Témoignage client.
 *
 * Mise en page : titre de section à gauche, puis la ligne d'attribution —
 * portrait et nom à gauche, logo de la marque à droite — et l'avis centré
 * en dessous.
 *
 * La ligne d'attribution tient sur une seule ligne jusque sur téléphone : les
 * tailles y sont réduites et le logo ne se comprime pas.
 */
const temoignage = {
  // Texte reçu de Mouna, repris mot pour mot. Seules deux normalisations
  // typographiques : la graphie de la marque et l'espace fine avant le « ! ».
  citation:
    "Si vous êtes exigeant et perfectionniste, ANVSLAB est l'agence qu'il vous " +
    "faut ! J'ai été agréablement surprise non seulement par sa réactivité " +
    "mais aussi par sa créativité. Que ce soit pour le design du site internet " +
    "ou pour le référencement, mes attentes ont été comprises et le résultat " +
    "final a été plus qu'à la hauteur. Je recommande vivement.",
  auteur: "Mouna Elachab",
  fonction: "Présidente",
  marque: "MADAMOON",
  logo: "/madamoon-logo.png",
  photo: "/mouna-elachab.jpg" as string | null,
};

export function Temoignage() {
  const enAttente = temoignage.citation.trim() === "";

  // Rien ne part en ligne tant que l'avis n'est pas arrivé.
  if (enAttente && process.env.NODE_ENV !== "development") return null;

  return (
    <section className="mx-auto max-w-[1760px] px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-16">
      {/* Titre dans l'angle haut-gauche de la section, aligné sur la marge de
          la page — pas sur le conteneur resserré qui porte l'avis. */}
      <Reveal>
        <h2 className="max-w-[18ch] text-[22px] font-medium leading-[1.18] tracking-tight text-ink md:text-[32px]">
          Histoires de marques, mots de clients
        </h2>
      </Reveal>

      <div className="mx-auto mt-16 max-w-[1100px] md:mt-24">
        {/* ------------------- attribution : nom à gauche, logo à droite */}
        <Reveal delay={0.08}>
          {/* Une seule ligne, y compris sur téléphone : pas de `flex-wrap`, et
              des tailles réduites en dessous de md pour que le nom et le logo
              tiennent côte à côte sans se toucher. */}
          <div className="flex items-center justify-between gap-5 border-b border-panel-line pb-6 md:gap-6 md:pb-8">
            <figcaption className="flex min-w-0 items-center gap-3 md:gap-4">
              {temoignage.photo ? (
                <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-panel md:size-12">
                  <Image
                    src={asset(temoignage.photo)}
                    alt={`${temoignage.auteur}, ${temoignage.fonction} de ${temoignage.marque}`}
                    fill
                    sizes="(min-width: 768px) 48px, 40px"
                    className="object-cover"
                  />
                </span>
              ) : (
                process.env.NODE_ENV === "development" && (
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-dashed border-panel-line font-mono text-[9px] uppercase tracking-[0.1em] text-dim md:size-12">
                    photo
                  </span>
                )
              )}
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-bold leading-tight text-ink md:text-[17px]">
                  {temoignage.auteur}
                </span>
                <span className="mt-0.5 block truncate text-[13px] text-fog md:text-[15px]">
                  {temoignage.fonction}
                </span>
              </span>
            </figcaption>

            <Image
              src={asset(temoignage.logo)}
              alt={temoignage.marque}
              width={513}
              height={56}
              className="h-[14px] w-auto shrink-0 md:h-[20px]"
            />
          </div>
        </Reveal>

        {/* ------------------------------------------------- l'avis, centré */}
        {enAttente ? (
          <p className="mx-auto mt-14 max-w-[40ch] text-center text-[clamp(20px,2.2vw,30px)] font-medium leading-[1.25] tracking-tight text-dim">
            Emplacement réservé au témoignage de {temoignage.auteur}. Masqué sur
            le site publié tant que l&apos;avis n&apos;est pas arrivé.
          </p>
        ) : (
          /* Révélation d'un seul bloc, volontairement.
             La version précédente masquait chaque mot derrière un parent en
             `overflow-hidden` puis le décalait de 110 % vers le bas. Le mot se
             retrouvait entièrement rogné : son intersection avec l'écran valait
             zéro, le déclencheur `whileInView` n'était donc jamais satisfait et
             le texte ne réapparaissait jamais. L'avis restait invisible.
             Ici l'élément animé n'est jamais rogné : s'il est à l'écran, il se
             révèle. */
          <Reveal delay={0.12}>
            <blockquote className="mt-14 md:mt-16">
              <p className="mx-auto max-w-[34ch] text-center text-[clamp(22px,2.6vw,40px)] font-medium leading-[1.24] tracking-tight text-ink">
                {temoignage.citation}
              </p>
            </blockquote>
          </Reveal>
        )}
      </div>
    </section>
  );
}
