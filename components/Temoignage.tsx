"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Témoignage client.
 *
 * Mise en page : le titre de section à gauche, l'avis centré au milieu, puis
 * une ligne d'attribution — portrait et nom à gauche, logo de la marque à
 * droite.
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
  note: 5,
};

function Etoiles({ note }: { note: number }) {
  const reduce = useReducedMotion();
  return (
    <div
      className="flex items-center justify-center gap-1.5"
      role="img"
      aria-label={`${note} étoiles sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className={i < note ? "text-signal" : "text-panel-line"}
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE }}
        >
          <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45 6.2 20.5l1.1-6.47-4.7-4.58 6.5-.95L12 2.6z" />
        </motion.svg>
      ))}
    </div>
  );
}

export function Temoignage() {
  const reduce = useReducedMotion();
  const enAttente = temoignage.citation.trim() === "";

  // Rien ne part en ligne tant que l'avis n'est pas arrivé.
  if (enAttente && process.env.NODE_ENV !== "development") return null;

  return (
    <section className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      {/* --------------------------------------------- titre, calé à droite.
          Même conteneur que l'avis et l'attribution : le titre et le logo
          partagent ainsi exactement le même bord droit. */}
      <Reveal className="mx-auto max-w-[1100px]">
        <h2 className="ml-auto max-w-[18ch] text-right text-[22px] font-medium leading-[1.18] tracking-tight text-ink md:text-[32px]">
          Histoires de marques, mots de clients
        </h2>
      </Reveal>

      {/* ------------------------------------------------- l'avis, au centre */}
      <div className="mx-auto mt-16 max-w-[1100px] md:mt-24">
        <Reveal>
          <Etoiles note={temoignage.note} />
        </Reveal>

        {enAttente ? (
          <p className="mx-auto mt-10 max-w-[40ch] text-center text-[clamp(20px,2.2vw,30px)] font-medium leading-[1.25] tracking-tight text-dim">
            Emplacement réservé au témoignage de {temoignage.auteur}. Masqué sur
            le site publié tant que l&apos;avis n&apos;est pas arrivé.
          </p>
        ) : (
          <blockquote className="mt-10">
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

        {/* ------------------------------ attribution : nom à gauche, logo à droite */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-panel-line pt-8 md:mt-20">
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
      </div>
    </section>
  );
}
