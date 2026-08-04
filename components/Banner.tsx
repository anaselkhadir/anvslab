"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { BOOKING_URL } from "@/components/Nav";

/** Bandeau d'annonce signal, refermable. */
export function Banner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative z-[60] bg-signal px-12 py-2.5 text-center">
      <p className="text-sm font-medium text-white">
        Nouveau : votre site refait en 2 semaines,{" "}
        <a href={BOOKING_URL} className="underline underline-offset-2">
          forfait dès 1 000€
        </a>
      </p>
      <button
        aria-label="Fermer l'annonce"
        onClick={() => setOpen(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 transition-opacity hover:opacity-70"
      >
        <X className="size-4" strokeWidth={2.4} />
      </button>
    </div>
  );
}
