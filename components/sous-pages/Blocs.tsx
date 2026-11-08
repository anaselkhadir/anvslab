import Link from "next/link";
import { BOOKING_URL, PillArrow } from "@/components/Nav";
import { FaqList } from "@/components/sous-pages/FaqList";
import type { Bloc } from "@/lib/contenu/types";

const H2 = "max-w-[22ch] text-3xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl";
const P = "text-[17px] leading-relaxed text-fog";

/** Rend un lien interne écrit [texte](/chemin/) dans un paragraphe de contenu. */
function Inline({ texte }: { texte: string }) {
  const parts = texte.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{p}</span>;
        return (
          <Link
            key={i}
            href={m[2]}
            className="font-medium text-ink underline underline-offset-4 transition-colors hover:text-signal"
          >
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

const packs = [
  { tag: "INITIAL", prix: "799 €", pour: "Exister correctement en ligne et commencer à être trouvé." },
  { tag: "ÉQUILIBRE", prix: "1 499 €", pour: "Transformer la visibilité acquise en rendez-vous mesurés.", sombre: true },
  { tag: "INTENSE", prix: "2 999 €", pour: "Prendre la première place et la tenir, Google et IA comprises." },
];

export function Blocs({ blocs }: { blocs: Bloc[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {blocs.map((b, i) => {
        switch (b.type) {
          case "texte":
            return (
              <section key={i} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                <div>{b.titre && <h2 className={H2}>{b.titre}</h2>}</div>
                <div className="max-w-[68ch] space-y-5">
                  {b.paragraphes.map((p, j) => (
                    <p key={j} className={P}>
                      <Inline texte={p} />
                    </p>
                  ))}
                </div>
              </section>
            );

          case "definition":
            return (
              <section key={i} className="rounded-2xl border border-panel-line p-8 md:p-10">
                <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">Définition</p>
                <p className="mt-4 max-w-[72ch] text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                  <strong className="font-medium">{b.terme}</strong> : {b.texte}
                </p>
              </section>
            );

          case "liste":
            return (
              <section key={i} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                <div>
                  <h2 className={H2}>{b.titre}</h2>
                  {b.intro && <p className={`mt-6 max-w-[44ch] ${P}`}>{b.intro}</p>}
                </div>
                <ul>
                  {b.items.map((it) => (
                    <li key={it.titre} className="grid gap-2 border-t border-panel-line py-6 last:border-b md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                      <h3 className="text-lg font-medium tracking-tight text-ink">{it.titre}</h3>
                      <p className="text-[16px] leading-relaxed text-fog">
                        <Inline texte={it.texte} />
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );

          case "cartes":
            return (
              <section key={i}>
                <h2 className={H2}>{b.titre}</h2>
                {b.intro && <p className={`mt-6 max-w-[60ch] ${P}`}>{b.intro}</p>}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {b.items.map((it, j) => (
                    <article key={it.titre} className="flex h-full flex-col rounded-2xl bg-panel p-8">
                      <p className="font-mono text-sm text-ink">{String(j + 1).padStart(2, "0")}</p>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink">{it.titre}</h3>
                      <p className="mt-4 text-[16px] leading-relaxed text-fog">
                        <Inline texte={it.texte} />
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );

          case "etapes":
            return (
              <section key={i} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                <div>
                  <h2 className={H2}>{b.titre}</h2>
                  {b.intro && <p className={`mt-6 max-w-[44ch] ${P}`}>{b.intro}</p>}
                </div>
                <ol>
                  {b.items.map((it, j) => (
                    <li key={it.titre} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-panel-line py-6 last:border-b">
                      <span className="font-mono text-sm text-ink">{String(j + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-lg font-medium tracking-tight text-ink">{it.titre}</h3>
                        <p className="mt-2 text-[16px] leading-relaxed text-fog">
                          <Inline texte={it.texte} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );

          case "tableau":
            return (
              <section key={i}>
                <h2 className={H2}>{b.titre}</h2>
                {b.intro && <p className={`mt-6 max-w-[64ch] ${P}`}>{b.intro}</p>}
                <div className="mt-10 overflow-x-auto rounded-2xl border border-panel-line">
                  <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="bg-panel">
                        {b.colonnes.map((c) => (
                          <th key={c} className="px-5 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-fog">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.lignes.map((l, j) => (
                        <tr key={j} className="border-t border-panel-line">
                          {l.map((cell, k) => (
                            <td key={k} className={`px-5 py-4 align-top leading-relaxed ${k === 0 ? "font-medium text-ink" : "text-fog"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && <p className="mt-4 max-w-[80ch] text-sm leading-relaxed text-dim">{b.note}</p>}
              </section>
            );

          case "packs":
            return (
              <section key={i}>
                <h2 className={H2}>{b.titre ?? "Trois formules, un seul paiement."}</h2>
                <p className={`mt-6 max-w-[60ch] ${P}`}>
                  {b.intro ??
                    "Support technique douze mois et accompagnement du référencement six mois compris. Ensuite, poursuivre est un abonnement dès 100 € par mois, sans engagement de durée."}
                </p>
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {packs.map((p) => (
                    <article
                      key={p.tag}
                      className={`rounded-2xl p-8 ${
                        p.sombre
                          ? "bg-night bg-[radial-gradient(circle_at_88%_-4%,rgba(255,45,0,0.32),transparent_52%)] text-snow"
                          : "bg-panel text-ink"
                      }`}
                    >
                      <p className={`font-mono text-[13px] uppercase tracking-[0.14em] ${p.sombre ? "text-white/60" : "text-fog"}`}>{p.tag}</p>
                      <p className="mt-6 text-5xl font-medium tracking-tight">{p.prix}</p>
                      <p className={`mt-4 text-[15px] leading-relaxed ${p.sombre ? "text-white/60" : "text-fog"}`}>{p.pour}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-6 text-[15px] text-fog">
                  Le détail de chaque formule est sur la{" "}
                  <Link href="/#tarifs" className="font-medium text-ink underline underline-offset-4 hover:text-signal">
                    grille tarifaire
                  </Link>
                  .
                </p>
              </section>
            );

          case "faq":
            return (
              <section key={i} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                <div>
                  <h2 className={H2}>{b.titre ?? "Questions fréquentes."}</h2>
                </div>
                <FaqList items={b.items} />
              </section>
            );

          case "cta":
            return (
              <section key={i} className="rounded-2xl bg-panel px-8 py-14 text-center md:px-12 md:py-20">
                <h2 className="mx-auto max-w-[20ch] text-3xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">{b.titre}</h2>
                <p className="mx-auto mt-5 max-w-[50ch] text-[17px] leading-relaxed text-fog">{b.texte}</p>
                <div className="mt-8 flex justify-center">
                  <PillArrow href={BOOKING_URL}>{b.label ?? "Réserver un appel de 15 min"}</PillArrow>
                </div>
              </section>
            );
        }
      })}
    </div>
  );
}
