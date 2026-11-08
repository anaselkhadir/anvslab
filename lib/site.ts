/*
 * Adresse publique du site, sans barre oblique finale.
 *
 * - En CI (GitHub Pages), le workflow passe NEXT_PUBLIC_SITE_URL avec le
 *   sous-dossier du dépôt (https://anaselkhadir.github.io/anvslab) : les
 *   canoniques, le sitemap et les données structurées pointent ainsi vers
 *   des URL qui existent vraiment.
 * - Le jour où anvslab.com est déposé et branché sur Pages, il suffit de
 *   changer la valeur dans le workflow (et de vider NEXT_PUBLIC_BASE_PATH).
 * - En local, repli sur le futur domaine.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anvslab.com"
).replace(/\/$/, "");

export const SITE_NAME = "ANVSLAB";
export const CONTACT_EMAIL = "hello@anvslab.com";

/** URL absolue d'une route du site (`/rendez-vous/` → `${SITE_URL}/rendez-vous/`). */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Routes indexables, avec leur dernière modification et leur priorité. */
export const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/rendez-vous/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mentions-legales/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/confidentialite/", priority: 0.2, changeFrequency: "yearly" },
];
