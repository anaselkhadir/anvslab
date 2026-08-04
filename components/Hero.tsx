"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const traits = ["Créatifs", "Exigeants", "Opérationnels"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-[1760px] px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <ul className="flex gap-5 lg:flex-col lg:gap-1">
          {traits.map((t, i) => (
            <motion.li
              key={t}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: EASE }}
              className="text-[17px] font-medium text-ink"
            >
              {t}
            </motion.li>
          ))}
        </ul>

        <h1 className="max-w-[28ch] text-[clamp(32px,4.2vw,76px)] font-medium leading-[1.1] tracking-tight text-ink">
          {"Votre entreprise évolue. Votre stratégie digitale aussi. Nous avançons à votre rythme, sans jamais laisser votre marché prendre de l'avance."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-top">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + i * 0.018,
                    ease: EASE,
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
        </h1>
      </div>

      <Reveal delay={0.9} className="mt-14 lg:pl-[220px]">
        <p className="max-w-[52ch] text-lg leading-relaxed text-fog">
          Sites nouvelle génération, SEO objectif top 10, visibilité sur
          ChatGPT, assistants et agents téléphoniques IA, automatisation, ERP
          et CRM sur mesure. Pour les PME francophones.
        </p>
      </Reveal>
    </section>
  );
}
