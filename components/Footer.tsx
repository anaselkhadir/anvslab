"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_URL } from "@/components/Nav";
import { asset } from "@/lib/base";

const links = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

/** Pied de page signal : liens, hibou, contact, wordmark géant coupé. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-signal text-white">
      <div className="relative z-10 mx-auto grid max-w-[1760px] grid-cols-2 items-start gap-y-8 px-6 pt-12 md:grid-cols-3 md:px-10">
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] font-semibold transition-opacity duration-300 hover:opacity-70"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-start justify-center md:flex">
          <Image
            src={asset("/anvslab-owl-white.png")}
            alt=""
            width={30}
            height={40}
            className="h-10 w-auto"
            aria-hidden
          />
        </div>

        <div className="flex flex-col items-end gap-4 text-right">
          <p className="text-sm text-white/90">
            &copy; {new Date().getFullYear()} ANVSLAB
          </p>
          <Link href={BOOKING_URL} className="group inline-flex items-stretch">
            <span className="flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
              Réserver un appel
            </span>
            <span
              className="ml-1 flex w-10 items-center justify-center rounded-lg bg-white text-signal transition-colors duration-300 group-hover:bg-ink group-hover:text-white"
              aria-hidden
            >
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.2}
              />
            </span>
          </Link>
          <a
            href="mailto:hello@anvslab.com"
            className="text-sm text-white/90 transition-opacity duration-300 hover:opacity-70"
          >
            hello@anvslab.com
          </a>
        </div>
      </div>

      {/* Wordmark géant, ton sur ton, coupé par le bord bas */}
      <div className="pointer-events-none mt-20 overflow-hidden md:mt-32" aria-hidden>
        <p className="-mb-[0.1em] w-full whitespace-nowrap text-center text-[clamp(88px,26vw,610px)] font-medium leading-[0.82] tracking-tight text-white/25 select-none">
          Anvslab<span className="align-super text-[0.32em]">®</span>
        </p>
      </div>
    </footer>
  );
}
