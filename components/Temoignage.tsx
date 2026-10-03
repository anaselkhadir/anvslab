"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Témoignage client.
 *
 * `citation` est vide tant que MADAMOON n'a pas envoyé son avis. Dans ce cas
 * la section ne s'affiche pas sur le site publié — mieux vaut pas de
 * témoignage qu'un témoignage inventé sous le nom d'une personne réelle.
 * En développement, un gabarit apparaît à la place pour juger la mise en page.
 *
 * Pour la mettre en ligne : coller le texte reçu dans `citation`, déposer le
 * portrait dans public/ et renseigner `photo`. Rien d'autre à toucher.
 */
const temoignage = {
  citation: "",
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
    <div className="flex items-center gap-1.5" role="img" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="19"
          height="19"
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
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        {/* ------------------------------------------------- colonne gauche */}
        <Reveal>
          <figure className="flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-panel">
              {temoignage.photo ? (
                <Image
                  src={asset(temoignage.photo)}
                  alt={`${temoignage.auteur}, ${temoignage.fonction} de ${temoignage.marque}`}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  Portrait à venir
                </span>
              )}
            </div>

            <div className="mt-6">
              <Etoiles note={temoignage.note} />
            </div>

            <figcaption className="mt-5">
              <p className="text-[17px] font-medium leading-tight text-ink">
                {temoignage.auteur}
              </p>
              <p className="mt-1 text-[15px] text-fog">{temoignage.fonction}</p>
              <Image
                src={asset(temoignage.logo)}
                alt={temoignage.marque}
                width={513}
                height={56}
                className="mt-5 h-[18px] w-auto"
              />
            </figcaption>
          </figure>
        </Reveal>

        {/* -------------------------------------------------- colonne droite */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">
              Ce qu&apos;ils disent
            </p>
          </Reveal>

          {enAttente ? (
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-dashed border-panel-line px-8 py-14">
                <p className="max-w-[40ch] text-[clamp(22px,2.4vw,34px)] font-medium leading-[1.2] tracking-tight text-dim">
                  Emplacement réservé au témoignage de {temoignage.auteur}.
                </p>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-dim">
                  Visible uniquement en développement : la section reste masquée
                  sur le site publié tant que l&apos;avis n&apos;est pas arrivé.
                </p>
              </div>
            </Reveal>
          ) : (
            <blockquote className="mt-8">
              <p className="max-w-[26ch] text-[clamp(28px,3.4vw,56px)] font-medium leading-[1.12] tracking-tight text-ink">
                {temoignage.citation.split(" ").map((mot, i) => (
                  <span key={i} className="inline-block overflow-hidden pb-1 align-top">
                    <motion.span
                      className="inline-block"
                      initial={reduce ? false : { y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.018, ease: EASE }}
                    >
                      {mot}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
}
