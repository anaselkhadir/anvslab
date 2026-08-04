import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const pillars = [
  {
    num: "01",
    name: "Présence",
    desc: "Être trouvé, choisi, retenu : partout où vos clients cherchent, de Google à ChatGPT.",
    services: [
      "Sites nouvelle génération",
      "SEO, objectif top 10 écrit",
      "GEO : cité par les IA",
      "Optimisation de conversion",
    ],
  },
  {
    num: "02",
    name: "Intelligence",
    desc: "Des IA entraînées sur votre activité qui répondent, relancent et prennent les rendez-vous.",
    services: [
      "Assistants IA multicanaux",
      "Agents téléphoniques IA",
      "Emails et relances automatiques",
      "Automatisation métier",
    ],
  },
  {
    num: "03",
    name: "Systèmes",
    desc: "Quand le logiciel du marché ne suffit plus, nous construisons le vôtre. Le code vous appartient.",
    services: [
      "CRM adapté à votre vente",
      "ERP sur mesure",
      "Logiciels métier",
      "Intégrations et API",
    ],
  },
];

export function Pillars() {
  return (
    <section id="services" className="mx-auto max-w-[1760px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <h2 className="max-w-[20ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Tout ce qu&apos;il faut pour prendre l&apos;avance.
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
        {pillars.map((p) => (
          <StaggerItem key={p.num}>
            <article className="flex h-full flex-col rounded-2xl bg-panel p-8 md:p-10">
              <p className="font-mono text-sm text-ink">{p.num}</p>
              <h3 className="mt-4 text-3xl font-medium tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-fog">
                {p.desc}
              </p>
              <ul className="mt-10">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="border-t border-panel-line py-3.5 text-[15px] text-ink last:border-b"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
