import type { Metadata } from "next";
import { LegalLink, LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site ANVSLAB : éditeur, directeur de la publication, hébergeur, propriété intellectuelle.",
  alternates: { canonical: absoluteUrl("/mentions-legales/") },
  robots: { index: true, follow: true },
};

/*
 * Identité légale : ANVSLAB LLC est en cours de constitution (Wyoming).
 * Aucun numéro d'immatriculation, d'EIN ni de SIREN ne doit être inventé ;
 * compléter cette page le jour où l'immatriculation est confirmée.
 */
export default function MentionsLegalesPage() {
  return (
    <LegalPage
      kicker="Informations légales"
      title="Mentions légales."
      updated="8 novembre 2026"
      sections={[
        {
          title: "Éditeur du site",
          paragraphs: [
            "Le site ANVSLAB est édité par ANVSLAB LLC, société établie dans l'État du Wyoming (États-Unis), en cours de constitution ; son numéro d'immatriculation est en cours d'attribution et sera publié ici dès réception.",
            <>
              Contact :{" "}
              <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>
            </>,
          ],
        },
        {
          title: "Directeur de la publication",
          paragraphs: ["Anas Elkhadir, fondateur d'ANVSLAB."],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Le site est hébergé par GitHub, Inc. (service GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L'ensemble du site (textes, graphismes, logo, marque ANVSLAB, code et mise en page) est protégé par le droit d'auteur et le droit des marques. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable d'ANVSLAB LLC est interdite.",
            "Les marques et logos de tiers éventuellement cités appartiennent à leurs propriétaires respectifs.",
          ],
        },
        {
          title: "Responsabilité",
          paragraphs: [
            "ANVSLAB s'efforce de tenir les informations de ce site exactes et à jour, sans pouvoir en garantir l'exhaustivité. Les prix et périmètres affichés sont indicatifs et font l'objet d'une proposition écrite avant tout engagement.",
          ],
        },
        {
          title: "Données personnelles",
          paragraphs: [
            <>
              Le traitement des données personnelles est décrit dans la{" "}
              <LegalLink href="/confidentialite/">politique de confidentialité</LegalLink>.
            </>,
          ],
        },
      ]}
    />
  );
}
