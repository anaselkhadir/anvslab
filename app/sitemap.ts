import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "@/lib/site";
import { ROUTES_CONTENU } from "@/lib/contenu";

export const dynamic = "force-static";

/* Date figée au build : l'export statique ne connaît pas la date de requête. */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...ROUTES_CONTENU.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path.split("/").filter(Boolean).length === 1 ? 0.6 : 0.8,
    })),
  ];
}
