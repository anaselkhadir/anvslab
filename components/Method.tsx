"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Planifiez votre appel",
    desc: "Un échange direct et honnête, sans slides ni blabla. On découvre votre activité, vos objectifs, et là où on peut créer de la valeur le plus vite.",
  },
  {
    num: "02",
    title: "Choisissez votre formule",
    desc: "Trois formules claires, un prix exact, un calendrier. Rien ne démarre avant votre validation écrite.",
  },
  {
    num: "03",
    title: "On construit",
    desc: "2 à 6 semaines selon le périmètre. Votre site actuel reste en ligne, votre activité continue, vous validez chaque étape.",
  },
  {
    num: "04",
    title: "On reste à bord",
    desc: "Support et maintenance 24 mois inclus. Rapports de positions, chiffres, améliorations : l'avance prise ne se referme pas.",
  },
];

/**
 * Section épinglée : le scroll vertical fait défiler les cartes
 * horizontalement jusqu'à la dernière, puis la page reprend son cours.
 * Sur mobile et en mouvement réduit : pile verticale classique.
 */
export function Method() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const distance = () => track.current!.scrollWidth - window.innerWidth;
      const tween = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, [reduce]);

  return (
    <section id="methode" ref={wrap} className="overflow-hidden">
      <div className="flex flex-col justify-center gap-10 py-20 md:h-[100svh] md:gap-14 md:py-0">
        <Reveal className="px-6 md:px-10">
          <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
            Comment on travaille ensemble.
          </h2>
        </Reveal>

        <div
          ref={track}
          className="flex flex-col gap-5 px-6 will-change-transform md:w-max md:flex-row md:px-10"
        >
          {steps.map((s) => (
            <article
              key={s.num}
              className="flex min-h-[340px] flex-col rounded-2xl bg-panel p-8 md:h-[54vh] md:w-[44vw] md:shrink-0 md:p-10 lg:w-[38vw]"
            >
              <p className="font-mono text-sm text-ink">{s.num}</p>
              <h3 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-auto max-w-[52ch] pt-16 text-[17px] leading-relaxed text-fog">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
