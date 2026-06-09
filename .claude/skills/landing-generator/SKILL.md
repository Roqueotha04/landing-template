---
name: landing-generator
description: Generate production-ready single-page landing websites for small businesses from the Estudio Ve template (Next.js 16 + React 19 + Tailwind 4, bilingual es/en, static export). Use this skill whenever the user asks to create a landing page, website, web page, or site for a business, client, or brand. Also trigger when mentioning Estudio Ve client work, client websites, business landings, or "armar una web para [negocio]". The template already exists — the job is to adapt it to a client, not scaffold from zero.
---

# Landing Page Generator

Adapt the **existing** Estudio Ve template into a finished landing for a specific business. The template is config-driven: ~90% of a client is done by editing `config/site.config.ts` and the theme in `app/globals.css`. Components already exist in `components/` and rarely need new code.

Always read `AGENTS.md` first — it is the source of truth for stack, architecture, and rules.

## Stack (real, verify before coding)
Next.js 16 (App Router) + React 19 + Tailwind 4 (`@theme` in CSS, no `tailwind.config.ts`) + TypeScript. Static export (`output: 'export'`). Bilingual es/en via a client-side toggle persisted in `localStorage`. Read `node_modules/next/dist/docs/01-app/` before using any Next API.

## Workflow

1. Gather the business brief (or receive it from the user).
2. Read `references/site-config-schema.md` → fill `config/site.config.ts`.
3. Set brand colors in `app/globals.css` (`:root`), fonts in `app/layout.tsx`.
4. Read `references/component-specs.md` → adapt components only if the client needs more than content/theme.
5. `pnpm build` and fix any errors before presenting.

The intended end-to-end flow is minimal: **`pnpm install` → 2 prompts → `pnpm build` → push**. The two prompts are (1) the business brief, (2) confirmation of generated translations/colors. The repo uses **pnpm** (pinned via `package.json` `packageManager`); never introduce an `npm`/`yarn` lockfile.

## Step 1: Gather the Brief

Need these inputs. If any required field is missing, ask once for all of them:

| Field | Required | Example |
|---|---|---|
| Business name | ✅ | "Peluquería Sol" |
| Industry/category | ✅ | "peluquería", "restaurante", "taller" |
| Offerings kind | ✅ | "services" or "products" |
| Items to showcase (3-6) | ✅ | "Corte, Color, Brushing, Alisado" (+ prices if products) |
| Brand color | ✅ | "#E91E63" or "rosa" |
| Phone / WhatsApp | ✅ | "+54 223 555-1234" |
| Site URL | ✅ | "https://peluqueriasol.com" (for SEO/sitemap) |
| Address / map | optional | "Av. Colón 1234, Mar del Plata" |
| Instagram / Facebook | optional | "@peluqueriasol" |
| Email | optional | "info@peluqueriasol.com" |
| Hours | optional | "Lun a Sáb 9 a 19 hs" |
| Hero tagline / descriptions | optional | AI generates if missing |

All visible text needs `es` **and** `en`. Generate the `en` translation when only `es` is given (and vice versa). Copy is informal Argentine Spanish (voseo), benefit-focused, WhatsApp-first.

## Step 2: Fill site.config.ts

`config/site.config.ts` is the single source of truth and the only file edited for most clients. Read `references/site-config-schema.md` for the full schema, the per-client checklist, and services vs products examples. Never hardcode business content in components.

## Step 3: Theme

Colors live in `app/globals.css` `:root` (not the config), mapped to utilities via `@theme inline`. Fonts load in `app/layout.tsx` via `next/font/google`. Both are documented in `references/site-config-schema.md`. Choose typography, palette, and spacing deliberately per client — read the `frontend-design` skill before making visual choices.

## Step 4: Components (only if needed)

The sections (Navbar, Hero, Offerings, About, Contact, Footer) already exist and adapt to the config. `references/component-specs.md` documents each. To add a new section type: build the component, add its `SectionId` to `config/site.types.ts`, register it in `app/page.tsx`, and add a nav label in `config/i18n.ts`. Sections are toggled/reordered via `siteConfig.sections`.

## Step 5: Verify

```bash
pnpm build
```

Must compile, pass TypeScript, and export static pages including `/sitemap.xml` and `/robots.txt`. Fix all errors before presenting.

## Design Principles

- **Mobile-first**: layouts start from mobile, expand with `md:`/`lg:`.
- **WhatsApp is the primary CTA**: hero and contact both use `WhatsAppButton`.
- **Fast and light**: CSS transitions only, no JS animation libraries.
- **Accessible**: one `h1`, an `h2` per section, focus states, descriptive `alt`.
- **Distinctive, not templated**: deliberate type/color/spacing per client. Read the `frontend-design` skill.

## Copy Guidelines

- **Hero title**: 6-10 words, speaks to the customer's desire. "Tu mejor versión empieza acá", not "Somos la mejor peluquería".
- **Offering descriptions**: 1-2 lines, benefit-focused.
- **About**: 3-4 sentences, human origin story.
- **CTAs**: action verbs — "Pedí tu turno", "Hacé tu pedido", "Escribinos".
- Argentine voseo for `es`; natural, equivalent `en` (not literal).
