# ANVSLAB — Site officiel

Site flagship d'ANVSLAB, studio digital & IA pour PME francophones.
Éditorial clair (Geist + Geist Mono), signal orange #ff2d00, héro noir
avec champ ASCII organique réactif à la souris.

## Développement

```bash
npm install
npm run dev      # http://localhost:5300
npm run build
```

## Architecture

- `app/page.tsx` : accueil (Preloader → Banner → HeroDark → Hero statement →
  Method [scroll horizontal épinglé] → Pillars → Team → Pricing → Faq →
  FinalCta → Footer)
- `app/rendez-vous/` : prise de rendez-vous (page verrouillée sur desktop,
  formulaire à défilement interne, envoi par email récapitulatif)
- `components/AsciiField.tsx` : fond ASCII (bruit 2 octaves, trame · : + * #,
  halo souris)
- Tous les CTA pointent vers `/rendez-vous` via `BOOKING_URL` (Nav.tsx)

## Sauvegarde

Ce dépôt est sous git : committer après chaque évolution validée.
