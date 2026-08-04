"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AsciiField } from "@/components/AsciiField";

/** Écran d'entrée : logo centré sur le champ ASCII, puis fondu vers le site. */
export function Preloader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
    }, 1700);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]"
          aria-hidden
        >
          <AsciiField />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src="/anvslab-logo-white.png"
              alt=""
              width={150}
              height={46}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
