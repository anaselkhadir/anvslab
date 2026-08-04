"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/components/Nav";
import { COLLECTIONS, WORKS, type CollectionId } from "@/lib/work";

const EASE = [0.16, 1, 0.3, 1] as const;

function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
  return (
    <a
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-panel">
        <Image
          src={work.image}
          alt={`Site web réalisé pour ${work.client}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-lg bg-white text-signal opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4.5" strokeWidth={2.2} />
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {work.client}
        </h3>
        <p className="font-mono text-[13px] text-fog">
          {work.sector} · {work.city} · {work.year}
        </p>
      </div>
      <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-fog">
        {work.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {work.stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-panel-line px-3 py-1 font-mono text-[12px] text-fog"
          >
            {s}
          </li>
        ))}
      </ul>
    </a>
  );
}

/* Place libre dans la collection : on le dit franchement et on la propose. */
function OpenSlot({ scope, first }: { scope: string; first: boolean }) {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-panel p-8 md:p-10">
      <div>
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-signal">
          {first ? "Collection en ouverture" : "Place disponible"}
        </p>
        <p className="mt-5 max-w-[34ch] text-2xl font-medium leading-[1.15] tracking-tight text-ink">
          {first
            ? "La première entreprise de cette collection sera la vôtre."
            : "La prochaine référence de cette collection sera la vôtre."}
        </p>
        <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-fog">
          {scope}.
        </p>
      </div>
      <a href={BOOKING_URL} className="group mt-8 inline-flex items-stretch">
        <span className="flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-snow transition-colors duration-300 group-hover:bg-signal">
          Prendre la place
        </span>
        <span
          className="ml-1 flex w-11 items-center justify-center rounded-lg bg-ink text-snow transition-colors duration-300 group-hover:bg-signal"
          aria-hidden
        >
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.2}
          />
        </span>
      </a>
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState<CollectionId>("industriel");
  const reduce = useReducedMotion();

  const current = COLLECTIONS.find((c) => c.id === active)!;
  const shown = WORKS.filter((w) => w.collection === active);

  return (
    <section
      id="realisations"
      className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28"
    >
      <Reveal>
        <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Ce que nous avons construit.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-fog">
          Trois collections, selon le métier de nos clients. Chaque site est
          conçu, écrit et développé par notre équipe.
        </p>
      </Reveal>

      {/* Sélecteur de collection */}
      <Reveal delay={0.08} className="mt-10">
        <div
          role="tablist"
          aria-label="Collections de réalisations"
          className="flex flex-wrap gap-2"
        >
          {COLLECTIONS.map((c) => {
            const isActive = active === c.id;
            const count = WORKS.filter((w) => w.collection === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-ink text-snow"
                    : "bg-panel text-fog hover:text-ink"
                }`}
              >
                {c.label}
                <span
                  className={`font-mono text-[12px] ${
                    isActive ? "text-white/50" : "text-dim"
                  }`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Contenu de la collection active.
          La clé remonte le bloc à chaque changement : le contenu est toujours
          juste, même si l'animation d'entrée est interrompue. */}
      <div className="mt-10">
        {
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {shown.length > 0 ? (
              <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
                <div>
                  {shown.map((w) => (
                    <WorkCard key={w.slug} work={w} />
                  ))}
                </div>
                <OpenSlot scope={current.scope} first={false} />
              </div>
            ) : (
              <div className="lg:max-w-[640px]">
                <OpenSlot scope={current.scope} first />
              </div>
            )}
          </motion.div>
        }
      </div>
    </section>
  );
}
