"use client";

import Link from "next/link";
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
    tag: "INITIAL",
    price: "799€",
    payment: "Un seul paiement. Pour exister correctement en ligne et commencer à être trouvé.",
    rows: [
      "Site sur mesure, rapide sur mobile",
      "Textes rédigés pour vous faire trouver",
      "Référencement Google et fiche Maps",
      "Messages du site et WhatsApp réunis",
      "Confirmations et rappels automatiques",
      "Rapport mensuel commenté",
    ],
  },
  {
    tag: "ÉQUILIBRE",
    price: "1 499€",
    payment: "Un seul paiement. Pour transformer la visibilité acquise en rendez-vous mesurés.",
    dark: true,
    rows: [
      "Tout le pack Initial",
      "Pages dédiées par service et par ville",
      "Instagram, Facebook et Messenger raccordés",
      "Tableau de bord actualisé chaque jour",
      "Campagnes d'acquisition pilotées",
      "Point mensuel avec votre référent",
    ],
  },
  {
    tag: "INTENSE",
    price: "2 999€",
    payment: "Un seul paiement, périmètre calé après audit. Pour prendre la première place et la tenir.",
    rows: [
      "Tout le pack Équilibre",
      "Programme de contenus sur douze mois",
      "Visibilité dans les réponses des IA",
      "Analyse du comportement et tests A/B",
      "Acquisition multicanale",
      "Revue stratégique trimestrielle",
    ],
  },
];

function CardCta({ dark }: { dark?: boolean }) {
  return (
    <Link href={BOOKING_URL} className="group inline-flex items-stretch">
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
    </Link>
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
          Le travail est payé une fois, à un prix de PME. Support technique
          douze mois et accompagnement six mois sont compris dans les trois
          formules.
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
          décidez ensuite en toute connaissance de cause. Au terme des six mois
          d&apos;accompagnement, poursuivre la progression est un abonnement
          mensuel dès 100€, sans engagement de durée — jamais une obligation.
        </p>
      </Reveal>
    </section>
  );
}
