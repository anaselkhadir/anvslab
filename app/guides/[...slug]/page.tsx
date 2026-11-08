import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContenu } from "@/components/sous-pages/PageContenu";
import { pageParSlug, pagesParType } from "@/lib/contenu";
import { absoluteUrl } from "@/lib/site";

const TYPE = "guide" as const;
const BASE = "/guides/";

const toSlug = (parts: string[]) => `${BASE}${parts.join("/")}/`;

export const dynamicParams = false;

export function generateStaticParams() {
  return pagesParType(TYPE).map((p) => ({
    slug: p.slug.slice(BASE.length, -1).split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageParSlug(toSlug(slug));
  if (!page) return {};
  return {
    title: page.titre,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.slug) },
    openGraph: {
      title: `${page.titre} | ANVSLAB`,
      description: page.description,
      url: absoluteUrl(page.slug),
      type: page.type === "guide" ? "article" : "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pageParSlug(toSlug(slug));
  if (!page || page.type !== TYPE) notFound();
  return <PageContenu page={page} />;
}
