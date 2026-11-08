import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BOOKING_URL, PillArrow } from "@/components/Nav";
import { SubHeader } from "@/components/sous-pages/SubHeader";
import { pagesParType } from "@/lib/contenu";
import type { Hub } from "@/lib/contenu/types";
import { absoluteUrl } from "@/lib/site";

/** Page d'index d'une famille (services, guides, métiers, Maroc). */
export function PageHub({ hub }: { hub: Hub }) {
  const pages = pagesParType(hub.type);
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl(hub.slug),
    name: hub.h1,
    description: hub.description,
    inLanguage: "fr",
    isPartOf: { "@id": absoluteUrl("/#website") },
    hasPart: pages.map((p) => ({ "@type": "WebPage", name: p.h1, url: absoluteUrl(p.slug) })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <SubHeader />
      <main className="mx-auto w-full max-w-[1760px] px-6 pb-24 md:px-10">
        <header className="grid gap-10 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">{hub.kicker}</p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-medium leading-[1.06] tracking-tight text-ink md:text-6xl">
              {hub.h1}
            </h1>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-[50ch] text-lg leading-relaxed text-fog md:text-xl">{hub.lede}</p>
            <div className="mt-8">
              <PillArrow href={BOOKING_URL}>Réserver un appel de 15 min</PillArrow>
            </div>
          </div>
        </header>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={p.slug}
                className="group flex h-full flex-col rounded-2xl bg-panel p-8 transition-colors duration-300 hover:bg-ink"
              >
                <p className="font-mono text-sm text-ink transition-colors group-hover:text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-snow">
                  {p.h1}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-fog transition-colors group-hover:text-white/70">
                  {p.description}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-ink transition-colors group-hover:text-snow">
                  Lire
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
