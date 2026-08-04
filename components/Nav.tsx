"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const CONTACT_MAILTO =
  "mailto:hello@anvslab.com?subject=Travaillons%20ensemble";

/** Page de prise de rendez-vous : cible de tous les CTA du site. */
export const BOOKING_URL = "/rendez-vous";

/** Bouton signature : pilule noire + carré flèche accolé. */
export function PillArrow({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="group inline-flex items-stretch">
      <span className="flex items-center rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-snow transition-colors duration-300 group-hover:bg-signal">
        {children}
      </span>
      <span
        className="ml-1 flex w-12 items-center justify-center rounded-lg bg-ink text-snow transition-colors duration-300 group-hover:bg-signal"
        aria-hidden
      >
        <ArrowUpRight
          className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}

/** CTA flottant : apparaît une fois le héro noir dépassé. */
export function FloatingCta() {
  const [shown, setShown] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    setShown(v > window.innerHeight * 0.85);
  });

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-5 top-5 z-50 md:right-8"
        >
          <PillArrow href={BOOKING_URL}>Travaillons ensemble</PillArrow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
