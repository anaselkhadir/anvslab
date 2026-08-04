"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";

type Pill = {
  label: string;
  color: string;
  text?: string;
  /** Position desktop en pourcentages du conteneur */
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  float: number;
};

const pills: Pill[] = [
  {
    label: "Anas · Full Stack",
    color: "bg-[#3b82f6]",
    top: "12%",
    left: "18%",
    rotate: -6,
    float: 9,
  },
  {
    label: "Houssam · Design",
    color: "bg-[#fb6f92]",
    top: "14%",
    right: "16%",
    rotate: 5,
    float: 10,
  },
  {
    label: "Houssine · Data",
    color: "bg-[#06d6a0]",
    top: "66%",
    right: "12%",
    rotate: -4,
    float: 8,
  },
  {
    label: "SEO & GEO",
    color: "bg-[#ff7b00]",
    top: "70%",
    left: "24%",
    rotate: 6,
    float: 11,
  },
  {
    label: "Assistants IA",
    color: "bg-[#ef233c]",
    top: "38%",
    left: "6%",
    rotate: -8,
    float: 10,
  },
  {
    label: "Automatisation",
    color: "bg-[#8338ec]",
    top: "44%",
    right: "5%",
    rotate: 7,
    float: 9,
  },
  {
    label: "Power BI",
    color: "bg-[#ffb703]",
    text: "text-ink",
    top: "84%",
    left: "44%",
    rotate: -3,
    float: 12,
  },
];

export function Team() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      <div className="relative flex min-h-[560px] items-center justify-center md:min-h-[640px]">
        <Reveal className="relative z-10 text-center">
          <h2 className="mx-auto max-w-[16ch] text-5xl font-medium leading-[1.06] tracking-tight text-ink md:text-7xl">
            Une équipe dédiée, pleinement intégrée
          </h2>
        </Reveal>

        {/* Pastilles éparpillées, flottement lent */}
        <div className="absolute inset-0 hidden md:block" aria-hidden>
          {pills.map((p, i) => (
            <motion.span
              key={p.label}
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                delay: i * 0.09,
              }}
              className="absolute"
              style={{ top: p.top, left: p.left, right: p.right }}
            >
              <motion.span
                animate={reduce ? undefined : { y: [0, -p.float, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ rotate: p.rotate }}
                className={`inline-block rounded-full px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm ${p.color} ${p.text ?? ""}`}
              >
                {p.label}
              </motion.span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Repli mobile : les pastilles en rang */}
      <ul className="mt-8 flex flex-wrap justify-center gap-2.5 md:hidden">
        {pills.map((p) => (
          <li
            key={p.label}
            className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${p.color} ${p.text ?? ""}`}
          >
            {p.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
