"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import type { FaqEntry } from "@/lib/faq";

function Item({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-panel-line last:border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-lg font-medium tracking-tight text-ink md:text-xl">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-panel"
        >
          <Plus className="size-4 text-ink" strokeWidth={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[66ch] pb-6 text-[16px] leading-relaxed text-fog">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Accordéon de questions ; le texte des réponses est dans le HTML, replié ou non. */
export function FaqList({ items }: { items: FaqEntry[] }) {
  return (
    <div>
      {items.map((f) => (
        <Item key={f.q} {...f} />
      ))}
    </div>
  );
}
