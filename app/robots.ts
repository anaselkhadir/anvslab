import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/*
 * Note : Google ne lit robots.txt qu'à la racine d'un hôte. Tant que le site
 * vit dans un sous-dossier GitHub Pages, ce fichier est servi mais sans
 * effet ; il devient actif dès que le site tourne sur son propre domaine.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/_next/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
