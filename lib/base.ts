/*
 * Préfixe d'URL du site. Vide en local et sur domaine propre, égal au nom
 * du dépôt sur GitHub Pages (ex. /anvslab).
 * next/link applique déjà ce préfixe aux routes ; ce helper sert aux
 * fichiers de public/, que Next ne préfixe pas automatiquement.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
