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
        {/* « mots de clients » est insécable : la ligne casse après la virgule
            quand la place manque, jamais entre « mots » et « de clients ». */}
        <h2 className="max-w-[38ch] text-[22px] font-medium leading-[1.18] tracking-tight text-ink md:text-[32px]">
          Histoires de marques,{" "}
          <span className="whitespace-nowrap">mots de clients</span>
        </h2>
      </Reveal>

      {/* Carte grise, mêmes valeurs que les cartes du reste du site :
          fond `panel` (#f4f4f4) et arrondi `rounded-2xl`. */}
      <Reveal
        delay={0.08}
        className="mx-auto mt-14 max-w-[1100px] rounded-2xl bg-panel p-5 sm:p-6 md:mt-20 md:p-12"
      >
        {/* -------- attribution : nom à gauche, logo à droite. Une seule
            ligne y compris sur téléphone — pas de `flex-wrap`, et des tailles
            réduites en dessous de md pour qu'ils tiennent côte à côte. */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-panel-line pb-6 md:gap-6 md:pb-8">
          <figcaption className="flex items-center gap-2.5 md:gap-4">
            {temoignage.photo ? (
              <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-snow md:size-12">
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
            <span>
              <span className="block whitespace-nowrap text-[14px] font-bold leading-tight text-ink md:text-[17px]">
                {temoignage.auteur}
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-[13px] text-fog md:text-[15px]">
                {temoignage.fonction}
              </span>
            </span>
          </figcaption>

          <Image
            src={asset(temoignage.logo)}
            alt={temoignage.marque}
            width={513}
            height={56}
            className="h-[10px] w-auto shrink-0 sm:h-[14px] md:h-[20px]"
          />
        </div>

        {/* ------------------------------------------------- l'avis, centré */}
        {enAttente ? (
          <p className="mx-auto mt-10 max-w-[40ch] text-center text-[clamp(20px,2.2vw,30px)] font-medium leading-[1.25] tracking-tight text-dim md:mt-14">
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
          <blockquote className="mt-8 md:mt-12">
            {/* Guillemet décoratif. `aria-hidden` car la balise blockquote
                porte déjà le sens : un lecteur d'écran n'a pas à annoncer un
                caractère isolé. `leading-[0.6]` évite la grande réserve de
                blanc que traîne un glyphe de cette taille. */}
            <p
              aria-hidden
              className="text-center text-[88px] leading-[0.8] text-signal md:text-[128px]"
            >
              &ldquo;
            </p>
            <p className="mx-auto mt-2 max-w-[34ch] text-center text-[clamp(22px,2.6vw,40px)] font-medium leading-[1.24] tracking-tight text-ink md:mt-4">
              {temoignage.citation}
            </p>
          </blockquote>
        )}
      </Reveal>
    </section>
  );
}
