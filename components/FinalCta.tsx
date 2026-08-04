"use client";

import { Reveal } from "@/components/Reveal";
import { BOOKING_URL, PillArrow } from "@/components/Nav";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1760px] px-6 pb-10 pt-16 md:px-10 md:pt-24">
      <Reveal>
        <div className="rounded-2xl bg-panel px-8 py-16 text-center md:px-12 md:py-24">
          <h2 className="mx-auto max-w-[18ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
            Voyons ce que votre entreprise pourrait devenir.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-fog">
            Écrivez-nous en une ligne ce que fait votre entreprise. Réponse
            concrète sous 24h, gratuite et sans engagement.
          </p>
          <div className="mt-10 flex justify-center">
            <PillArrow href={BOOKING_URL}>Travaillons ensemble</PillArrow>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
