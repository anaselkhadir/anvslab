import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { asset } from "@/lib/base";

export type LegalSection = { title: string; paragraphs: React.ReactNode[] };

/**
 * Gabarit des pages légales : même en-tête que /rendez-vous, colonne de
 * lecture étroite, sections à filets comme le reste du site, pied de page.
 */
export function LegalPage({
  kicker,
  title,
  updated,
  sections,
}: {
  kicker: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="mx-auto flex h-[76px] w-full max-w-[1760px] items-center justify-between px-6 md:px-10">
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

      <main className="mx-auto w-full max-w-[1760px] px-6 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">
              {kicker}
            </p>
            <h1 className="mt-4 max-w-[14ch] text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-sm text-fog">Dernière mise à jour : {updated}</p>
          </div>

          <div className="max-w-[66ch]">
            {sections.map((s) => (
              <section
                key={s.title}
                className="border-t border-panel-line py-8 last:border-b"
              >
                <h2 className="text-xl font-medium tracking-tight text-ink">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-fog">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Lien inline au style du site, réutilisé dans les textes légaux. */
export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const cls =
    "font-medium text-ink underline underline-offset-4 transition-colors hover:text-signal";
  return external ? (
    <a href={href} className={cls} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
