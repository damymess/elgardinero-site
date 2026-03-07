# elgardinero.ma - Site Jardinier Rabat

## Contexte
Site vitrine multi-pages pour un jardinier artisan independant a Rabat, Maroc.
Objectif : generer des demandes de devis via WhatsApp et appels telephoniques.
Domaine : elgardinero.ma

## Stack technique
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- lucide-react (icones)
- next-sitemap (sitemap/robots)
- Deploiement prevu : Vercel ou Coolify

## Structure du projet
```
src/
  app/
    layout.tsx              - Layout (Navbar, WhatsAppFloat, GA, JSON-LD)
    page.tsx                - Accueil (Hero, Compteurs, Services, Realisations, Comment ca marche, Temoignages, Tarifs, FAQ, A propos, Footer)
    globals.css             - Styles Tailwind
    google-analytics.tsx    - Composant GA (client)
    mentions-legales/       - Page mentions legales
    jardinier-hay-riad/     - Page SEO locale
    jardinier-souissi/      - Page SEO locale
    jardinier-agdal/        - Page SEO locale
    jardinier-temara/       - Page SEO locale
    jardinier-sale/         - Page SEO locale
    jardinier-harhoura/     - Page SEO locale
    services/
      taille-elagage/       - Page service detaillee
      entretien-pelouse/    - Page service detaillee
      nettoyage-jardin/     - Page service detaillee
      plantation-fleurs/    - Page service detaillee
      amenagement-jardin/   - Page service detaillee
  components/
    Navbar.tsx              - Barre de navigation fixe
    WhatsAppFloat.tsx       - Widget WhatsApp flottant (client)
    LocationPage.tsx        - Template pages quartiers
    ServicePage.tsx         - Template pages services
  data/
    locations.ts            - Donnees des 6 quartiers/villes
    services.ts             - Donnees des 5 services
```

## Configuration jardinier
- Nom : Adil
- Zone : Rabat (Hay Riad, Souissi, Agdal), Sale, Temara, Harhoura
- Contact : WhatsApp + telephone (numeros a configurer)
- Langue du site : francais

## Palette de couleurs
- Principal : emerald-800 (vert jardin)
- Fond : neutral-50
- Texte : neutral-800 / emerald-950
- CTA WhatsApp : #25D366
- Footer : neutral-950

## Conventions
- Composants partages dans src/components/
- SEO : chaque page a ses propres metadata exportees
- Images : dossier /public, utiliser next/image avec alt descriptif
- CTA principal : toujours WhatsApp, secondaire : telephone
- Pages locales : template LocationPage + donnees locations.ts
- Pages services : template ServicePage + donnees services.ts

## Roadmap
Voir ROADMAP-ELGARDINERO.md - Phases 1 a 6 TERMINEES.
Phase 7 (Marketing & Growth) = actions manuelles du client.

## SEO Mots-cles cibles
- jardinier rabat / hay riad / souissi / agdal / temara / sale
- entretien jardin rabat
- paysagiste rabat
- prix jardinier maroc
- taille haie temara / elagage rabat
