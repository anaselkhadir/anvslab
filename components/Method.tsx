"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const etapes = [
  {
    num: "01",
    titre: "Cadrage & Premier Échange",
    detail: "Planification de l'appel initial",
  },
  {
    num: "02",
    titre: "Orientation Artistique & Maquettes",
    detail: "Création de plusieurs pistes de design au choix",
  },
  {
    num: "03",
    titre: "Benchmark & Analyse Concurrentielle",
    detail: "Étude comparative et positionnement actuel",
  },
  {
    num: "04",
    titre: "Stratégie Mots-Clés & Intentions",
    detail: "Ciblage SEO & cartographie des recherches",
  },
  {
    num: "05",
    titre: "Rédaction, Copywriting & Maillage",
    detail: "Rédaction persuasive et architecture interne",
  },
  {
    num: "06",
    titre: "Déploiement & Hébergement",
    detail: "Mise en ligne et infrastructure technique",
  },
  {
    num: "07",
    titre: "Monitoring SEO & Suivi d'Avancement",
    detail: "Analyse des performances et progression du positionnement",
  },
];

/** Seuil de progression auquel l'étape `i` s'allume. */
const seuil = (i: number) => i / (etapes.length - 1);

/**
 * Pastille d'étape. Elle se remplit quand l'avancée du défilement passe son
 * seuil. Seul le remplissage est animé : le numéro et le libellé restent
 * lisibles en toutes circonstances, même si l'animation ne démarre pas.
 */
function Pastille({
  progression,
  index,
  reduit,
}: {
  progression: MotionValue<number>;
  index: number;
  reduit: boolean;
}) {
  const s = seuil(index);
  // Fondu court juste avant le seuil : l'allumage suit le doigt sans à-coup.
  const avancee = useTransform(progression, [Math.max(0, s - 0.06), s], [0, 1]);
  const opacite = reduit ? 1 : avancee;

  return (
    <span className="relative flex size-7 shrink-0 items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-panel-line bg-snow" />
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-signal"
        style={{ opacity: opacite, scale: reduit ? 1 : avancee }}
      />
      <motion.span aria-hidden style={{ opacity: opacite }} className="relative text-snow">
        <Check className="size-3.5" strokeWidth={3} />
      </motion.span>
    </span>
  );
}

function Libelle({ etape }: { etape: (typeof etapes)[number] }) {
  return (
    <>
      <p className="font-mono text-[12px] tracking-[0.1em] text-dim">
        Étape {etape.num}
      </p>
      <p className="mt-2 text-[15px] leading-snug font-medium text-ink md:text-[16px]">
        {etape.titre}
      </p>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-fog">{etape.detail}</p>
    </>
  );
}

/**
 * Frise des étapes. Le rail se remplit à mesure que la section défile et les
 * pastilles s'allument l'une après l'autre.
 *
 * Deux dispositions plutôt qu'une seule acrobatique : rail horizontal à partir
 * de `lg`, vertical en dessous. Sept étapes aux libellés longs ne tiennent pas
 * côte à côte sur un écran étroit.
 */
export function Method() {
  const zone = useRef<HTMLDivElement>(null);
  const reduit = useReducedMotion() ?? false;

  // La frise se remplit entre le moment où elle entre dans l'écran et celui
  // où elle en atteint le milieu — pas sur toute la hauteur de la page.
  const { scrollYProgress } = useScroll({
    target: zone,
    offset: ["start 0.85", "end 0.55"],
  });
  const progression = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const largeurRail = useTransform(progression, [0, 1], ["0%", "100%"]);
  const hauteurRail = largeurRail;

  return (
    <section id="methode" className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Comment on travaille ensemble.
        </h2>
      </Reveal>

      <div ref={zone} className="mt-16 md:mt-24">
        {/* ------------------------------------------- frise horizontale */}
        <ol className="relative hidden lg:grid lg:grid-cols-7 lg:gap-6">
          {/* rail : posé au centre des pastilles, soit 14px du haut */}
          <span
            aria-hidden
            className="absolute top-[13px] right-0 left-0 h-px bg-panel-line"
          />
          <motion.span
            aria-hidden
            className="absolute top-[13px] left-0 h-px origin-left bg-signal"
            style={{ width: reduit ? "100%" : largeurRail }}
          />

          {etapes.map((etape, i) => (
            <li key={etape.num} className="relative flex flex-col">
              <Pastille progression={progression} index={i} reduit={reduit} />
              <div className="mt-6 pr-4">
                <Libelle etape={etape} />
              </div>
            </li>
          ))}
        </ol>

        {/* --------------------------------------------- frise verticale */}
        <ol className="relative lg:hidden">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[13px] w-px bg-panel-line"
          />
          <motion.span
            aria-hidden
            className="absolute top-2 left-[13px] w-px origin-top bg-signal"
            style={{ height: reduit ? "100%" : hauteurRail }}
          />

          {etapes.map((etape, i) => (
            <li key={etape.num} className="relative flex gap-5 pb-10 last:pb-0">
              <Pastille progression={progression} index={i} reduit={reduit} />
              <div className="-mt-1 min-w-0 flex-1">
                <Libelle etape={etape} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
