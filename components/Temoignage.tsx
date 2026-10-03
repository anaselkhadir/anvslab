"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Témoignage client.
 *
 * Mise en page : titre de section à gauche, puis la ligne d'attribution —
 * portrait et nom à gauche, logo de la marque à droite — et l'avis centré
 * en dessous.
 *
 * Le portrait n'est pas encore arrivé : tant que `photo` est nul, la pastille
 * n'est pas rendue en ligne et le nom tient seul. Déposer l'image dans public/
 * et renseigner `photo` suffit à la faire apparaître.
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
  photo: null as string | null,
};

export function Temoignage() {
  const reduce = useReducedMotion();
  const enAttente = temoignage.citation.trim() === "";

  // Rien ne part en ligne tant que l'avis n'est pas arrivé.
  if (enAttente && process.env.NODE_ENV !== "development") return null;

  return (
    <section className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      {/* Titre, avis et attribution partagent le même conteneur : les bords
          gauche et droit se répondent d'un bloc à l'autre. */}
      <div className="mx-auto max-w-[1100px]">
        {/* ------------------------------------------------ titre, à gauche */}
        <Reveal>
          <h2 className="max-w-[18ch] text-[22px] font-medium leading-[1.18] tracking-tight text-ink md:text-[32px]">
            Histoires de marques, mots de clients
          </h2>
        </Reveal>

        {/* ------------------- attribution : nom à gauche, logo à droite */}
        <Reveal delay={0.08}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-b border-panel-line pb-8 md:mt-20">
            <figcaption className="flex items-center gap-4">
              {temoignage.photo ? (
                <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-panel">
                  <Image
                    src={asset(temoignage.photo)}
                    alt={`${temoignage.auteur}, ${temoignage.fonction} de ${temoignage.marque}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              ) : (
                process.env.NODE_ENV === "development" && (
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-dashed border-panel-line font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                    photo
                  </span>
                )
              )}
              <span>
                <span className="block text-[17px] font-bold leading-tight text-ink">
                  {temoignage.auteur}
                </span>
                <span className="mt-0.5 block text-[15px] text-fog">
                  {temoignage.fonction}
                </span>
              </span>
            </figcaption>

            <Image
              src={asset(temoignage.logo)}
              alt={temoignage.marque}
              width={513}
              height={56}
              className="h-[20px] w-auto"
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
          <blockquote className="mt-14 md:mt-16">
            <p className="mx-auto max-w-[34ch] text-center text-[clamp(22px,2.6vw,40px)] font-medium leading-[1.24] tracking-tight text-ink">
              {temoignage.citation.split(" ").map((mot, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 align-top">
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "110%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.012, ease: EASE }}
                  >
                    {mot}&nbsp;
                  </motion.span>
                </span>
              ))}
            </p>
          </blockquote>
        )}
      </div>
    </section>
  );
}
