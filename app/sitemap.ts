import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/* Date figée au build : l'export statique ne connaît pas la date de requête. */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
