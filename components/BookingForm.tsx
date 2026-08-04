"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

/* Créneaux proposés, heure de Casablanca */
const SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

type Fields = {
  prenom: string;
  nom: string;
  societe: string;
  site: string;
  email: string;
  telephone: string;
  date: string;
  heure: string;
};

const EMPTY: Fields = {
  prenom: "",
  nom: "",
  societe: "",
  site: "",
  email: "",
  telephone: "",
  date: "",
  heure: "",
};

const LABELS: Record<keyof Fields, string> = {
  prenom: "Prénom",
  nom: "Nom",
  societe: "Nom de votre société",
  site: "Site web actuel",
  email: "Adresse email",
  telephone: "Numéro de téléphone",
  date: "Date du rendez-vous",
  heure: "Heure",
};

function validate(f: Fields): Partial<Record<keyof Fields, string>> {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.prenom.trim()) e.prenom = "Indiquez votre prénom.";
  if (!f.nom.trim()) e.nom = "Indiquez votre nom.";
  if (!f.societe.trim()) e.societe = "Indiquez le nom de votre société.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Indiquez une adresse email valide.";
  if (f.telephone.replace(/\D/g, "").length < 8)
    e.telephone = "Indiquez un numéro de téléphone valide.";
  if (!f.date) e.date = "Choisissez une date.";
  if (!f.heure) e.heure = "Choisissez un créneau.";
  return e;
}

const inputCls =
  "w-full rounded-xl border border-panel-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-dim focus:border-ink";

function Field({
  name,
  error,
  required = true,
  hint,
  children,
}: {
  name: keyof Fields;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {LABELS[name]}
        {required ? (
          <span className="text-signal"> *</span>
        ) : (
          <span className="text-dim"> (facultatif)</span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-dim">{hint}</p>}
      {error && (
        <p role="alert" className="text-sm text-signal">
          {error}
        </p>
      )}
    </div>
  );
}

export function BookingForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const reduce = useReducedMotion();

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const set =
    (name: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [name]: e.target.value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    const dateFr = new Date(`${fields.date}T00:00:00`).toLocaleDateString(
      "fr-FR",
      { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    );
    const lines = [
      `Prénom : ${fields.prenom}`,
      `Nom : ${fields.nom}`,
      `Société : ${fields.societe}`,
      `Site web actuel : ${fields.site.trim() || "Pas encore de site"}`,
      `Email : ${fields.email}`,
      `Téléphone : ${fields.telephone}`,
      `Rendez-vous souhaité : ${dateFr} à ${fields.heure} (heure de Casablanca)`,
    ];
    const mailto = `mailto:hello@anvslab.com?subject=${encodeURIComponent(
      `Rendez-vous découverte : ${fields.societe}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    const dateFr = new Date(`${fields.date}T00:00:00`).toLocaleDateString(
      "fr-FR",
      { weekday: "long", day: "numeric", month: "long" },
    );
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-panel p-8 md:p-10"
      >
        <span className="flex size-11 items-center justify-center rounded-lg bg-signal">
          <Check className="size-5 text-white" strokeWidth={2.6} />
        </span>
        <h2 className="mt-6 text-2xl font-medium tracking-tight text-ink md:text-3xl">
          Votre demande est prête.
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-fog">
          Votre messagerie vient de s&apos;ouvrir avec le récapitulatif de
          votre demande pour le {dateFr} à {fields.heure}. Envoyez simplement
          le message : notre équipe vous confirme le créneau par email dans la
          journée.
        </p>
        <p className="mt-4 text-sm text-fog">
          Si votre messagerie ne s&apos;est pas ouverte, écrivez-nous
          directement à{" "}
          <a
            href="mailto:hello@anvslab.com"
            className="font-medium text-ink underline underline-offset-4"
          >
            hello@anvslab.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setFields(EMPTY);
          }}
          className="mt-8 text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-signal"
        >
          Prendre un autre rendez-vous
        </button>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-panel p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="prenom" error={errors.prenom}>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            value={fields.prenom}
            onChange={set("prenom")}
            className={inputCls}
          />
        </Field>
        <Field name="nom" error={errors.nom}>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            value={fields.nom}
            onChange={set("nom")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field name="societe" error={errors.societe}>
          <input
            id="societe"
            type="text"
            autoComplete="organization"
            value={fields.societe}
            onChange={set("societe")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field
          name="site"
          required={false}
          hint="Laissez vide si vous n'avez pas encore de site : c'est justement notre métier."
        >
          <input
            id="site"
            type="url"
            autoComplete="url"
            value={fields.site}
            onChange={set("site")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field name="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            className={inputCls}
          />
        </Field>
        <Field name="telephone" error={errors.telephone}>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            value={fields.telephone}
            onChange={set("telephone")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field name="date" error={errors.date} hint="Du lundi au vendredi.">
          <input
            id="date"
            type="date"
            min={minDate}
            value={fields.date}
            onChange={set("date")}
            className={inputCls}
          />
        </Field>
        <Field name="heure" error={errors.heure} hint="Heure de Casablanca.">
          <select
            id="heure"
            value={fields.heure}
            onChange={set("heure")}
            className={inputCls}
          >
            <option value="">Choisir un créneau</option>
            {SLOTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-9">
        <button type="submit" className="group inline-flex items-stretch">
          <span className="flex items-center rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-snow transition-colors duration-300 group-hover:bg-signal">
            Confirmer le rendez-vous
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
        </button>
        <p className="mt-4 text-xs leading-relaxed text-dim">
          Vos informations servent uniquement à organiser cet appel. Aucune
          liste, aucun spam.
        </p>
      </div>
    </form>
  );
}
