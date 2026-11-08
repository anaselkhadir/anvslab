import type { Metadata } from "next";
import { PageHub } from "@/components/sous-pages/PageHub";
import { hubParType } from "@/lib/contenu";
import { absoluteUrl } from "@/lib/site";

const hub = hubParType("maroc");

export const metadata: Metadata = {
  title: hub.titre,
  description: hub.description,
  alternates: { canonical: absoluteUrl(hub.slug) },
  openGraph: { title: `${hub.titre} | ANVSLAB`, description: hub.description, url: absoluteUrl(hub.slug) },
  robots: { index: true, follow: true },
};

export default function Hub() {
  return <PageHub hub={hub} />;
}
