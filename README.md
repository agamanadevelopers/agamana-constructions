# Agamana Constructions — Website

Production-ready, mobile-first marketing site for **Agamana Constructions**, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What to edit before launch

All content lives in `src/data/` — you can update the site without touching components.

| File | Fill in |
| --- | --- |
| `src/data/site.ts` | **Phone, WhatsApp number, email** (currently `+91 XXXXX` placeholders) |
| `src/data/packages.ts` | Package **specifications** — qualitative placeholders. Only the three prices (₹1,879 / ₹2,099 / ₹2,550) are confirmed. Replace with your official spec document. |
| `src/data/images.ts` | All **photos** — currently tasteful Unsplash placeholders. Swap for Agamana's own photography. |
| `src/data/projects.ts` | Empty by design. Add real projects and the Projects grid renders automatically; until then it shows the "Agamana Group Project Experience" section (no invented portfolio). |
| `src/data/team.ts`, `src/data/faq.ts` | Team bios and FAQs. |

## Structure

- `src/app/page.tsx` — single-page homepage (all sections)
- `src/app/packages/` — `/packages`, `/packages/[slug]`, `/packages/compare` (crawlable)
- `src/components/` — reusable UI (Header, Hero, PackageSection, EstimateModal, …)
- `src/app/sitemap.ts`, `robots.ts` — SEO

## Notes

- The **Get a Construction Estimate** form is a 4-step flow. It has no backend — on submit it opens a pre-filled WhatsApp message the visitor sends. Wire it to an API/CRM later if needed.
- Brand colours: `#01473A` (primary), `#51BA7C` (accent), `#E9FFF7` (light background).
- Fonts: Bricolage Grotesque (headings) + Inter (body), loaded via `next/font`.
