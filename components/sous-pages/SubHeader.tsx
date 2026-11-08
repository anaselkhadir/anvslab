import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_URL } from "@/components/Nav";
import { asset } from "@/lib/base";

const liens = [
  { label: "Services", href: "/services/" },
  { label: "Métiers", href: "/secteurs/" },
  { label: "Guides", href: "/guides/" },
  { label: "Tarifs", href: "/#tarifs" },
];

/** En-tête clair des sous-pages : logo, liens de section, bouton rendez-vous. */
export function SubHeader() {
  return (
    <header className="mx-auto flex h-[76px] w-full max-w-[1760px] items-center justify-between gap-6 px-6 md:px-10">
      <Link href="/" aria-label="ANVSLAB, retour à l'accueil" className="shrink-0">
        <Image
          src={asset("/anvslab-logo-black.png")}
          alt="ANVSLAB"
          width={118}
          height={36}
          priority
        />
      </Link>
      <nav aria-label="Sections du site" className="hidden md:block">
        <ul className="flex items-center gap-1 rounded-full bg-panel p-1">
          {liens.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-full px-4 py-2 text-sm font-medium text-fog transition-colors duration-300 hover:bg-white hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href={BOOKING_URL} className="group inline-flex shrink-0 items-stretch">
        <span className="flex items-center rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-snow transition-colors duration-300 group-hover:bg-signal">
          Réserver un appel
        </span>
        <span
          className="ml-1 flex w-10 items-center justify-center rounded-lg bg-ink text-snow transition-colors duration-300 group-hover:bg-signal"
          aria-hidden
        >
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.2}
          />
        </span>
      </Link>
    </header>
  );
}
