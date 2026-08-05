import type { NextConfig } from "next";

/*
 * Site exporté en statique pour GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH vaut le nom du dépôt en CI (ex. /anvslab) et
 * reste vide en local ou sur un domaine propre.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  images: {
    /* Pas de serveur d'optimisation d'images sur Pages */
    unoptimized: true,
  },
};

export default nextConfig;
