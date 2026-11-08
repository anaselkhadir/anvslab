import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BOOKING_URL, PillArrow } from "@/components/Nav";
import { Blocs } from "@/components/sous-pages/Blocs";
import { SubHeader } from "@/components/sous-pages/SubHeader";
import { hubParType } from "@/lib/contenu";
import type { Page } from "@/lib/contenu/types";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";

const dateLisible = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** Gabarit commun des pages services, guides, métiers et Maroc. */
export function PageContenu({ page }: { page: Page }) {
  const hub = hubParType(page.type);
  const ariane = [
    { label: "Accueil", href: "/" },
    { label: hub.kicker, href: hub.slug },
    { label: page.h1.replace(/\.$/, ""), href: page.slug },
  ];
  const faq = page.blocs.find((b) => b.type === "faq");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ariane.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.label,
      item: absoluteUrl(a.href),
    })),
  };

  const principal =
    page.type === "guide"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": absoluteUrl(`${page.slug}#article`),
          headline: page.h1,
          description: page.description,
          inLanguage: "fr",
          dateModified: page.dateMaj,
          datePublished: page.dateMaj,
          author: { "@type": "Person", name: "Anas Elkhadir" },
          publisher: { "@id": absoluteUrl("/#organization") },
          mainEntityOfPage: absoluteUrl(page.slug),
          keywords: page.motCle,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl(`${page.slug}#service`),
          name: page.h1.replace(/\.$/, ""),
          description: page.description,
          serviceType: page.motCle,
          url: absoluteUrl(page.slug),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed:
            page.type === "maroc"
              ? { "@type": "Country", name: "Maroc" }
              : { "@type": "Country", name: "France" },
          potentialAction: {
            "@type": "ReserveAction",
            target: absoluteUrl(BOOKING_URL + "/"),
            name: "Réserver un appel découverte",
          },
        };

  const faqLd = faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(`${page.slug}#faq`),
    mainEntity: faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={principal} />
      {faqLd && <JsonLd data={faqLd} />}
      <SubHeader />

      <main className="mx-auto w-full max-w-[1760px] px-6 pb-24 md:px-10">
        <nav aria-label="Fil d'Ariane" className="pt-6">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-fog">
            {ariane.map((a, i) => (
              <li key={a.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i < ariane.length - 1 ? (
                  <Link href={a.href} className="transition-colors hover:text-ink">
                    {a.label}
                  </Link>
                ) : (
                  <span className="text-ink" aria-current="page">
                    {a.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header className="grid gap-10 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">{page.kicker}</p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-medium leading-[1.06] tracking-tight text-ink md:text-6xl">
              {page.h1}
            </h1>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-[50ch] text-lg leading-relaxed text-fog md:text-xl">{page.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PillArrow href={BOOKING_URL}>Réserver un appel de 15 min</PillArrow>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[15px] font-medium text-ink underline underline-offset-4 transition-colors hover:text-signal"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            {page.type === "guide" && (
              <p className="mt-8 text-sm text-dim">
                Par Anas Elkhadir, {SITE_NAME} · mis à jour le {dateLisible(page.dateMaj)}
              </p>
            )}
          </div>
        </header>

        <Blocs blocs={page.blocs} />

        {page.liens.length > 0 && (
          <section className="mt-20 border-t border-panel-line pt-12 md:mt-28">
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog">Pour aller plus loin</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {page.liens.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-panel px-6 py-5 text-[16px] font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-snow"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
