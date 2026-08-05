import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base";

export const metadata: Metadata = {
  title: "Réserver un appel | ANVSLAB",
  description:
    "Réservez votre appel découverte de 15 minutes : notre équipe analyse votre présence en ligne et vous recommande la formule la plus adaptée.",
  robots: { index: true, follow: true },
};

const points = [
  "15 minutes, sans engagement",
  "Un premier regard sur votre présence en ligne",
  "La formule recommandée pour vos objectifs",
  "Toutes vos questions, réponses directes",
];

export default function RendezVousPage() {
  return (
    /* Desktop : page verrouillée à la hauteur de l'écran,
       seul le panneau du formulaire défile. Mobile : flux normal. */
    <div className="lg:flex lg:h-dvh lg:flex-col lg:overflow-hidden">
      <header className="mx-auto flex h-[76px] w-full max-w-[1760px] shrink-0 items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="ANVSLAB, retour à l'accueil">
          <Image
            src={asset("/anvslab-logo-black.png")}
            alt="ANVSLAB"
            width={118}
            height={36}
            priority
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-fog transition-colors duration-300 hover:text-ink"
        >
          <ArrowLeft className="size-4" strokeWidth={2.2} />
          Retour au site
        </Link>
      </header>

      <main className="mx-auto w-full max-w-[1760px] flex-1 px-6 pb-20 pt-8 md:px-10 lg:min-h-0 lg:pb-8 lg:pt-4">
        <div className="grid gap-12 lg:h-full lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:min-h-0">
            <div className="lg:flex lg:h-full lg:flex-col lg:justify-center">
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">
                Appel découverte
              </p>
              <h1 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl xl:text-6xl">
                Réservez votre appel.
              </h1>
              <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-fog">
                Un échange direct et honnête, sans slides ni blabla. Choisissez
                votre créneau, on s&apos;occupe du reste.
              </p>

              <ul className="mt-8 max-w-md">
                {points.map((p) => (
                  <li
                    key={p}
                    className="border-t border-panel-line py-3 text-[15px] text-ink last:border-b"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-fog">
                Après l&apos;appel, si le courant passe, notre équipe réalise
                l&apos;audit complet de votre site et de votre référencement,
                gratuitement, avant toute proposition.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full lg:min-h-0">
            <div className="lg:h-full lg:overflow-y-auto lg:rounded-2xl [scrollbar-width:thin]">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
