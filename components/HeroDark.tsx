"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AsciiField } from "@/components/AsciiField";
import { BOOKING_URL } from "@/components/Nav";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

/** Horloge locale, montée côté client uniquement. */
function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Casablanca",
        }).format(new Date()),
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return <>{time ?? "--:--"}</>;
}

function Enter({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function HeroDark() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#000000] text-snow">
      <AsciiField />

      {/* Nav du héro : pilules sombres, logo centré, CTA à droite */}
      <div className="relative z-10 grid grid-cols-2 items-center gap-4 px-6 pt-6 md:grid-cols-3 md:px-10">
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full bg-white/[0.08] px-5 py-2.5 text-sm text-snow transition-colors duration-300 hover:bg-white/[0.16]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:text-center">
          <Image
            src="/anvslab-logo-white.png"
            alt="ANVSLAB"
            width={112}
            height={35}
            priority
            className="inline-block"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <a
            href={BOOKING_URL}
            className="group flex items-center gap-3 text-[15px] font-medium text-snow"
          >
            <span className="hidden sm:inline">Travaillons ensemble</span>
            <span className="flex size-10 items-center justify-center rounded-lg bg-white text-ink transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
              <ArrowUpRight className="size-4.5" strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>

      {/* Titre principal */}
      <div className="relative z-10 mt-auto px-6 pb-12 pt-20 md:px-10">
        <h1 className="max-w-[18ch] text-[clamp(30px,4.4vw,76px)] font-normal leading-[1.06] tracking-tight">
          {["Chaque PME mérite", "de devenir une référence", "de son marché."].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        <Enter delay={0.6}>
          <p className="mt-7 max-w-[52ch] text-[15px] font-normal leading-relaxed text-snow/75">
            Nous construisons, étape par étape, l&apos;infrastructure digitale
            qui transforme les entreprises ambitieuses en leaders de leur
            secteur.
          </p>
        </Enter>

        <Enter delay={0.75} className="mt-9">
          <a href={BOOKING_URL} className="group inline-flex items-stretch">
            <span className="flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-normal text-ink transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
              Réserver un appel
            </span>
            <span
              className="ml-1 flex w-10 items-center justify-center rounded-lg bg-white transition-colors duration-300 group-hover:bg-signal"
              aria-hidden
            >
              <ArrowUpRight
                className="size-4 text-signal transition-colors duration-300 group-hover:text-white"
                strokeWidth={2}
              />
            </span>
          </a>
        </Enter>

        <Enter
          delay={0.9}
          className="mt-16 flex flex-col gap-2 text-[15px] sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="text-snow">Studio créatif & technologique pour PME</p>
          <p className="text-snow/50">
            <span className="text-snow/80">Impact global</span>
            <br />
            Casablanca, Maroc · <Clock />
          </p>
        </Enter>
      </div>
    </section>
  );
}
