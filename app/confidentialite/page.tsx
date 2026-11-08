import type { Metadata } from "next";
import { LegalLink, LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données ANVSLAB collecte via son site, pourquoi, combien de temps, et vos droits.",
  alternates: { canonical: absoluteUrl("/confidentialite/") },
  robots: { index: true, follow: true },
};

/*
 * Le site est statique : pas de cookies, pas de compte, pas de mesure
 * d'audience à ce jour. Le formulaire de rendez-vous compose un e-mail dans
 * le logiciel de messagerie du visiteur ; rien n'est stocké côté site.
 * Mettre à jour cette page le jour où un outil de mesure est ajouté.
 */
export default function ConfidentialitePage() {
  return (
    <LegalPage
      kicker="Vie privée"
      title="Politique de confidentialité."
      updated="8 novembre 2026"
      sections={[
        {
          title: "Responsable du traitement",
          paragraphs: [
            <>
              ANVSLAB LLC (Wyoming, États-Unis, société en cours de constitution), représentée par
              Anas Elkhadir. Pour toute question :{" "}
              <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>.
            </>,
          ],
        },
        {
          title: "Données collectées",
          paragraphs: [
            "Le site ne crée aucun compte et ne dépose aucun cookie. Il n'embarque, à ce jour, aucun outil de mesure d'audience ni de publicité. Les polices de caractères sont servies depuis le site lui-même, sans appel à un service tiers.",
            "Le formulaire de prise de rendez-vous prépare un e-mail dans votre propre logiciel de messagerie, contenant les informations que vous avez saisies (prénom, nom, société, site web, adresse e-mail, téléphone, créneaux souhaités). Rien n'est enregistré sur le site : c'est vous qui envoyez ce message, et seule notre boîte de réception le reçoit.",
          ],
        },
        {
          title: "Finalités et base légale",
          paragraphs: [
            "Les informations que vous nous adressez servent uniquement à vous répondre, organiser l'appel découverte et, le cas échéant, préparer une proposition. La base légale est l'exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).",
            "Nous ne vendons ni ne louons aucune donnée, et nous ne vous inscrivons à aucune liste de diffusion sans votre accord explicite.",
          ],
        },
        {
          title: "Durée de conservation",
          paragraphs: [
            "Les échanges par e-mail sont conservés le temps de la relation commerciale puis au plus trois ans après le dernier contact, sauf obligation légale ou contrat en cours.",
          ],
        },
        {
          title: "Hébergement et transferts",
          paragraphs: [
            "Le site est hébergé par GitHub, Inc. (GitHub Pages), aux États-Unis. GitHub peut collecter des journaux techniques (adresse IP, pages consultées) pour la sécurité et le fonctionnement du service, selon sa propre politique de confidentialité. Les e-mails sont reçus sur une messagerie professionnelle ; ANVSLAB LLC étant établie aux États-Unis, vos données peuvent être traitées hors de l'Union européenne, avec les garanties prévues par le RGPD.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            <>
              Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
              d'opposition sur vos données, ainsi que du droit d'en définir le sort après votre
              décès. Écrivez à{" "}
              <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink> ; nous
              répondons sous un mois. Vous pouvez aussi saisir la CNIL (
              <LegalLink href="https://www.cnil.fr">cnil.fr</LegalLink>).
            </>,
          ],
        },
        {
          title: "Évolution de cette politique",
          paragraphs: [
            "Si nous ajoutons un jour un outil de mesure d'audience ou un formulaire enregistré côté serveur, cette page sera mise à jour avant la mise en service, avec la date indiquée en haut de page.",
          ],
        },
      ]}
    />
  );
}
