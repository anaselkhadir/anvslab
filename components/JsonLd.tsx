/**
 * Données structurées schema.org. Composant serveur : le JSON est sérialisé
 * au build, sans JavaScript côté client. Le `<` est échappé pour qu'aucune
 * valeur ne puisse fermer la balise script.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
