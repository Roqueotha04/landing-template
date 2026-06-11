<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

> Bajo `output: 'export'`, las rutas de metadata (`sitemap.ts`, `robots.ts`) requieren `export const dynamic = "force-static"`.

# Landing Generator — Estudio Ve

> **Precedencia ante conflicto:** las skills (`.claude/skills/`) mandan primero, luego `CLAUDE.md`, y por último este `AGENTS.md`.
>
> **Precedencia entre skills de diseño:** para cualquier landing de Estudio Ve, el mandato del dueño manda — `landing-generator` y las *standing defaults* de `frontend-design` ganan ante cualquier conflicto. `impeccable` y `design-taste-frontend` son **complementarias, no autoridades**: se usan como checklist de calidad/anti-slop (contraste, jerarquía, CTAs, layout, copy), **nunca** como fuente de paleta, motion, fuentes, stack ni dependencias. En concreto, **ignorar** de `design-taste-frontend`: su default de paleta neutra (acá la paleta es colorida 60/30/10 del logo), su empuje a GSAP/scroll-hijack/marquees (acá Framer Motion sutil, sin GSAP), su anti-serif (acá los presets eligen la fuente, incl. serif), y sus instalaciones de librerías (acá versiones congeladas y export estático).

## Regla #0 — Clean code, sin excepciones
El clean code se prioriza **siempre**, por encima de la velocidad o la conveniencia. Nunca se deja de lado por ningún motivo:
- Nombres descriptivos en todo (variables, funciones, componentes, archivos).
- Componentes pequeños y de una sola responsabilidad.
- Sin comentarios en el código; el código se explica solo. Única excepción: justificar un Server Component (ver más abajo).
- Si una solución rápida ensucia el código, no se usa: se busca la versión limpia.

## Stack
Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript + Framer Motion 12.
- Versiones congeladas: nunca downgradear Next/React/Tailwind/TS. Si una librería nueva puede dar problemas de compatibilidad, verificar peer deps antes de agregarla.
- Gestor de paquetes: **pnpm** (fijado en `package.json` → `packageManager`). No introducir lockfiles de `npm`/`yarn`.
- Tailwind 4: el tema se define en `app/globals.css` con `@theme` (CSS custom properties). **No hay `tailwind.config.ts`.**
- Export estático: `output: 'export'` en `next.config.ts`. `next/image` usa `images.unoptimized: true`.
- Alias de imports: `@/*` apunta a la raíz del proyecto.

## Arquitectura — todo componetizado
Las rutas (`app/`) **solo componen**; nunca contienen markup de secciones. La lógica vive en `components/`, `hooks/` y `lib/`.

```
config/      site.config.ts (ÚNICO editable por cliente) · site.types.ts · i18n.ts
lib/         i18n.ts (translate) · whatsapp.ts (buildWhatsAppLink)
hooks/       useLanguage.ts · useLocalStorage.ts
components/
  providers/ LanguageProvider.tsx   (estado de idioma + persistencia)
  ui/        Section · Button · LanguageToggle · WhatsAppButton
  layout/    Navbar · Footer
  sections/  Hero · Offerings · About · Contact
  seo/       JsonLd.tsx
app/         layout.tsx · page.tsx · sitemap.ts · robots.ts · globals.css
```

- `app/page.tsx` recorre `siteConfig.sections` y renderiza cada sección desde un registro `SectionId → componente`. Activar/desactivar/reordenar secciones = editar ese array en el config.
- Las secciones usan `id` (`hero`, `offerings`, `about`, `contact`) para el scroll suave desde el Navbar.

## Configuración y contenido
- **Todo el contenido del negocio sale de `config/site.config.ts`.** Nunca hardcodear texto, colores, números ni links en componentes.
- Tipos en `config/site.types.ts`. No se editan al armar un cliente.
- Textos de UI (labels, aria, menú) viven en `config/i18n.ts`, organizados por sección.
- Todo texto visible es `Localized<string>` → `{ es, en }`.

## Idiomas
- Default `es`, persistido en `localStorage` (key `locale`).
- Toggle en el cliente desde el Navbar; `LanguageProvider` actualiza `document.documentElement.lang`.
- Componentes consumen `useLanguage()` → `{ locale, t, toggleLocale }`. `t(localized)` resuelve al idioma actual.

## Componentes
- Por el toggle de idioma en cliente, las secciones que muestran texto son Client Components (`"use client"`).
- `Section`, `Button`, `JsonLd` no usan hooks → quedan sin directiva (shared/server). Si se elige Server Component deliberadamente, justificarlo con un comentario breve (única excepción a "sin comentarios").

## Tema
- Colores y fuentes en `app/globals.css`: variables en `:root` + mapeo en `@theme inline` → genera utilidades `bg-primary`, `text-foreground`, `font-heading`, etc.
- Cambiar la marca de un cliente = editar las variables de `:root`. Las fuentes se cambian en `app/layout.tsx` (import de `next/font/google`).

## Rendimiento
Tomar siempre la decisión que mejore el rendimiento: lazy loading, optimización de imágenes, code splitting y minimizar el JS del cliente.

## Diseño
- Mobile-first siempre; priorizar la experiencia en teléfono.
- Antes de generar/ajustar componentes, leer las dos skills: `landing-generator` y `frontend-design`.
- Diseños minimalistas y con apariencia humana. Nunca patrones genéricos de template AI.
- Tipografía, paleta y espaciado son decisiones deliberadas y específicas para cada cliente.
- **Consistencia tipográfica**: todos los `h2` de sección salen de `SectionHeading` (mismo tamaño); los heroes comparten estilo de `h1`. Alineación, bordes, paddings y espaciado consistentes y responsive entre secciones (el padding base lo da `Section`).

## Estilos disponibles (presets)
Cada cliente elige un estilo; se aplica vía las variables de `:root` en `app/globals.css` (colores) y el import de fuentes en `app/layout.tsx`. No hardcodear estilos por componente.
- **Futuristic**: neón, fondos oscuros, glow, `Space Grotesk`.
- **Minimalist**: pastel, mucho espacio en blanco, sin sombras, `DM Sans`.
- **Elegant**: negro y dorado, headings serif, `Playfair Display`.
- **Fresh**: verde, bordes redondeados, amigable, `Nunito`.

## Animaciones
- Framer Motion **sutil**: usar el wrapper `components/ui/Reveal.tsx` (fade-up al entrar en viewport, `once`).
- Honra `prefers-reduced-motion` (vía `useReducedMotion`).
- Solo Client Components (Framer Motion lo requiere). No animar por animar; suma cuando aporta jerarquía o foco.

## SEO
- Metadata y Open Graph dinámicos desde `config.seo` en `app/layout.tsx`.
- JSON-LD de negocio local (`components/seo/JsonLd.tsx`).
- `sitemap.ts` y `robots.ts` con `dynamic = "force-static"`.
- Heading hierarchy correcta: un solo `h1` (Hero), un `h2` por sección. `alt` descriptivo en imágenes.
- Nota: con toggle de idioma en cliente, la metadata se sirve en el idioma default.

## Copy
- Español argentino (voseo) como idioma principal, inglés como traducción.
- WhatsApp es el CTA principal en toda la página (`buildWhatsAppLink`).
- Textos orientados al beneficio del cliente, no a las características del negocio.

## Deploy
- Vercel con output estático (`output: 'export'` en `next.config.ts`).
- Cada push a `main` dispara deploy automático.

## Skills disponibles
- `landing-generator`: estructura, schema del config y especificaciones de componentes.
- `frontend-design`: principios de diseño, planificación visual y autocrítica.
- `impeccable` · `design-taste-frontend`: solo checklist de calidad/anti-slop (ver precedencia entre skills arriba). No dictan paleta, motion, fuentes ni dependencias en este proyecto.
