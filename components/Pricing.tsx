"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { BOOKING_URL, PillArrow } from "@/components/Nav";

type Tier = {
  tag: string;
  price: string;
  payment: string;
  rows: string[];
  dark?: boolean;
};

const tiers: Tier[] = [
  {
    tag: "PRÉSENCE",
    price: "1 000€",
    payment: "800€ à la signature, puis 200€ répartis sur 24 mois.",
    rows: [
      "Site refait à neuf, jusqu'à 5 pages",
      "Textes réécrits par des professionnels",
      "SEO et fiche Google Maps",
      "Templates email à vos couleurs",
      "Support et maintenance 24 mois",
      "Services connectés en option, dès 29€/mois",
    ],
  },
  {
    tag: "CROISSANCE",
    price: "1 300€",
    payment: "Un seul paiement, support et maintenance 24 mois inclus.",
    dark: true,
    rows: [
      "Tout le pack Présence",
      "Tableau de bord de votre activité",
      "Assistant IA : site, WhatsApp, réseaux",
      "Rappels, relances et emails automatiques",
      "2 automatisations métier au choix",
      "Services connectés : 59€/mois",
    ],
  },
  {
    tag: "SIGNATURE",
    price: "dès 5 900€",
    payment: "Sur devis après audit. 60% à la signature, 40% à la livraison.",
    rows: [
      "Tout le pack Croissance",
      "Agent téléphonique IA",
      "Pilotage financier automatisé",
      "SEO et visibilité IA niveau ingénieur",
      "Refonte large : site, réseaux, supports",
      "Services connectés : 129€/mois",
    ],
  },
];

function CardCta({ dark }: { dark?: boolean }) {
  return (
    <a href={BOOKING_URL} className="group inline-flex items-stretch">
      <span className="flex items-center rounded-full bg-white px-5 py-3 text-[15px] font-medium text-ink transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
        Réserver votre appel
      </span>
      <span
        className={`ml-1 flex w-11 items-center justify-center rounded-lg text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white ${
          dark ? "bg-white" : "bg-ink"
        }`}
        aria-hidden
      >
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.2}
        />
      </span>
    </a>
  );
}

export function Pricing() {
  return (
    <section id="tarifs" className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <h2 className="max-w-[18ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Pensé pour votre élan, pas pour les contrats.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-fog">
          Le travail est payé une fois, à un prix de PME. Seuls les services
          qui tournent en continu ont un abonnement, résiliable à tout moment.
        </p>
        <div className="mt-8">
          <PillArrow href={BOOKING_URL}>Réserver un appel de 15 min</PillArrow>
        </div>
      </Reveal>

      <Stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <StaggerItem key={t.tag}>
            <article
              className={`flex h-full flex-col rounded-2xl p-8 md:p-10 ${
                t.dark
                  ? "bg-night bg-[radial-gradient(circle_at_88%_-4%,rgba(255,45,0,0.32),transparent_52%)] text-snow"
                  : "bg-panel text-ink"
              }`}
            >
              <p
                className={`font-mono text-[13px] uppercase tracking-[0.14em] ${
                  t.dark ? "text-white/60" : "text-fog"
                }`}
              >
                {t.tag}
              </p>
              <p className="mt-8 whitespace-nowrap text-6xl font-medium tracking-tight md:text-7xl">
                {t.price}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  t.dark ? "text-white/55" : "text-fog"
                }`}
              >
                {t.payment}
              </p>

              <ul
                className={`mt-10 divide-y ${
                  t.dark ? "divide-white/15" : "divide-panel-line"
                }`}
              >
                {t.rows.map((r) => (
                  <li
                    key={r}
                    className={`py-4 text-[16px] ${
                      t.dark ? "text-snow" : "text-ink"
                    }`}
                  >
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <CardCta dark={t.dark} />
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <p className="max-w-[72ch] text-[15px] leading-relaxed text-fog">
          Vous hésitez entre deux formules ? C&apos;est précisément l&apos;objet
          de l&apos;audit gratuit : notre équipe analyse votre site actuel,
          l&apos;état de votre référencement et l&apos;ensemble de votre
          présence en ligne, puis vous recommande la formule la plus adaptée à
          vos objectifs, accompagnée d&apos;un plan d&apos;action précis. Vous
          décidez ensuite en toute connaissance de cause.
        </p>
      </Reveal>
    </section>
  );
}
