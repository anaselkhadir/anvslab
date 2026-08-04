"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CONTACT_MAILTO } from "@/components/Nav";

const faqs = [
  {
    q: "Je n'ai pas de site du tout, est-ce un problème ?",
    a: "Au contraire, c'est encore plus simple : on part d'une page blanche avec vos informations, vos photos et votre activité. Le prix reste le même.",
  },
  {
    q: "L'objectif top 10 Google, c'est sérieux ?",
    a: "Oui : il est inscrit dans la proposition, sur des recherches définies ensemble pour votre métier et votre zone. Les premiers effets se voient en 2 à 4 mois, avec un rapport de positions chaque mois.",
  },
  {
    q: "Pourquoi des abonnements sur certains services ?",
    a: "L'assistant IA, l'agent téléphonique et l'hébergement consomment des serveurs et de l'intelligence artificielle en continu. On les facture au juste prix, uniquement si vous les activez, et c'est résiliable à tout moment.",
  },
  {
    q: "C'est quoi, un agent téléphonique IA ?",
    a: "Une voix naturelle qui décroche quand vous ne pouvez pas : elle renseigne, qualifie la demande, prend le rendez-vous et vous envoie le résumé. Vos appels manqués deviennent des clients.",
  },
  {
    q: "Que se passe-t-il après les 24 mois ?",
    a: "Le site et les systèmes vous appartiennent entièrement : code, contenus, données. Vous continuez avec nous si vous le souhaitez, et les services connectés restent actifs tant que vous les utilisez.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-panel-line last:border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-xl font-medium tracking-tight text-ink">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-panel"
        >
          <Plus className="size-4 text-ink" strokeWidth={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 text-[16px] leading-relaxed text-fog">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-[14ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
              Les questions qu&apos;on nous pose.
            </h2>
            <p className="mt-6 text-[16px] text-fog">
              Pour le reste, une ligne suffit :{" "}
              <a
                href={CONTACT_MAILTO}
                className="font-medium text-ink underline underline-offset-4 transition-colors hover:text-signal"
              >
                hello@anvslab.com
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqs.map((f) => (
              <Item key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
