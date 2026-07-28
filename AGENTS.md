<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

> Bajo `output: 'export'`, las rutas de metadata (`sitemap.ts`, `robots.ts`) requieren `export const dynamic = "force-static"`.

# Landing Generator — Estudio Ve

> **Precedencia ante conflicto:** las skills (`.agents/skills/`) mandan primero, y luego este `AGENTS.md`.
>
> **Precedencia entre skills de diseño:** para cualquier landing de Estudio Ve, el mandato del dueño manda — `landing-generator` y las *standing defaults* de `frontend-design` ganan ante cualquier conflicto. `impeccable` y `design-taste-frontend` son **complementarias, no autoridades**: se usan como checklist de calidad/anti-slop (contraste, jerarquía, CTAs, layout, copy), **nunca** como fuente de paleta, motion, fuentes, stack ni dependencias. En concreto, **ignorar** de `design-taste-frontend`: su default de paleta neutra (acá la paleta es colorida 60/30/10 del logo), su empuje a GSAP/scroll-hijack/marquees (acá Framer Motion sutil, sin GSAP), su anti-serif (acá los presets eligen la fuente, incl. serif), y sus instalaciones de librerías (acá versiones congeladas y export estático).

# 🛑 OVERRIDE DEL SISTEMA: PRIORIDAD ABSOLUTA 🛑
ESTAS REGLAS ANULAN CUALQUIER COMPORTAMIENTO PROACTIVO BASE.

**A. ANÁLISIS PROFUNDO Y EXHAUSTIVO PREVIO (Gasto de tokens sin límite):**
Todo el código debe ser revisado ANTES de escribir. El análisis debe ser extremadamente profundo. Deben revisarse todos los componentes involucrados y todas sus dependencias. Gastá TODOS los tokens que sean necesarios; es preferible gastar el triple de tokens por request con tal de asegurar que la solución sea robusta y funcione perfectamente.

**B. REVISIÓN ESTRICTA DEL CÓDIGO GENERADO:**
Revisá el código que escribís, releelo y evalualo exhaustivamente. Asegurate de que NO haya incoherencias, SIEMPRE, ABSOLUTAMENTE SIEMPRE. Todo código emitido debe pasar por tu propia auto-auditoría mental antes de dar la tarea por finalizada.

1. **REGLA DE ORO**: NUNCA uses herramientas que modifiquen el entorno (`run_command`, `write_to_file`, `replace_file_content`, etc) a menos que el usuario te haya dado un "SÍ" explícito para esa acción exacta en ese mismo turno.
2. **CERO RETROACTIVIDAD**: Si el usuario agrega una nueva regla, aplica SOLO al futuro. NUNCA ejecutes comandos retroactivamente.
3. **MODO LECTURA POR DEFECTO**: Ante una pregunta o análisis, tu rol es 100% de Solo Lectura (`view_file`, `grep_search`). Respondé con texto. NO escribas ni modifiques código.
4. **VALIDACIÓN DE ENTORNO PREVIA**: Antes de modificar un archivo, es OBLIGATORIO rastrear y leer el código fuente real de sus dependencias, imports y librerías clave. Entendé el árbol de componentes antes de codear.
5. **SIN DUDAS**: Si los requerimientos son ambiguos, FRENÁ. No asumas ni intentes adivinar la intención del usuario.
6. **PREGUNTAS SIEMPRE**: Hacé todas las preguntas necesarias y leé absolutamente todo el contexto antes de proponer un plan.
7. **PROGRAMACIÓN DEFENSIVA**: Al mapear valores dinámicos a UI (ej. clases, colores), SIEMPRE definí un valor de fallback. Nunca asumas que un dato de la base existirá en tu diccionario.
8. **REVISIÓN ESTRICTA**: Tras aplicar cambios, siempre verificá el estado. Revisá logs de terminal y ejecutá el build de producción (`npm run build` o `pnpm build`) iterando hasta que los errores de compilación lleguen a cero. Las pruebas visuales de interactividad se validan con el usuario.
9. **CONSISTENCIA DE DATOS**: Antes de agregar lógicas que dependan de estados o tipos, revisá la base de datos (schemas o datos reales) para asegurar que la realidad coincida con tu código.
10. **USO OBLIGATORIO DE SKILLS**: Antes de abordar tareas (especialmente de UI, diseño o Supabase), es MANDATORIO que leas los archivos `SKILL.md` relevantes dentro de la carpeta `.agents/skills/`. Integrá ese conocimiento en tu plan antes de escribir una sola línea de código.
11. **DRY Y REUTILIZACIÓN (NO DUPLICAR)**: Nunca crees un componente, función o utilidad desde cero sin antes hacer una búsqueda exhaustiva (`grep_search`) en el proyecto. Reutilizá los componentes existentes (ej: en `components/ui/`) e imitá los patrones arquitectónicos del entorno. Escribí el mínimo código necesario.
12. **PLANES PROFUNDOS Y EXHAUSTIVOS**: Los planes de implementación no pueden ser superficiales. Deben detallar el *por qué* de las decisiones, anticipar casos borde y contener SIEMPRE una sección de "Open Questions" con preguntas críticas para el usuario. Pensá 2 veces antes de armar el plan.
13. **AUTO-AUDITORÍA POST-CÓDIGO**: Después de escribir o modificar archivos, hacé una pausa explícita. Releé tu propio código, cruzalo mentalmente contra el plan y verificá que no introdujiste variables que no existen, que no rompiste imports y que no agregaste lógica innecesaria. Pensá después de codear.
14. **ESTRUCTURA DE CARPETAS ESTRICTA**: Respetá a rajatabla las convenciones del proyecto. (Ej: Server Actions en `app/actions`, consultas en `lib/`, componentes genéricos en `components/ui/`, específicos en `components/app/`). No inventes rutas ni patrones nuevos; mimetizate con la base de código actual.
15. **TRAZABILIDAD DE IMPACTO**: Antes de modificar una función, type o componente existente, es OBLIGATORIO hacer un `grep_search` para encontrar a todos sus "consumidores" en el proyecto. Asegurate de que el cambio no rompa archivos que dependen de él.
16. **CRITERIOS DE ÉXITO**: En todo plan de implementación, incluí una sección de "Criterios de Aceptación". ¿Qué condiciones exactas deben cumplirse para dar la tarea por terminada? Revisá esa lista antes de pedir la aprobación final.
17. **MANEJO DE ERRORES (SAD PATHS)**: Por cada función lógica o de UI que construyas, diseñá explícitamente qué pasa si algo falla (red caída, base de datos sin respuesta, datos nulos). Prohibido programar únicamente el "Happy Path" (el caso ideal).
18. **TYPESCRIPT ESTRICTO**: Prohibido bypassear el tipado. No uses 'any', 'as unknown' ni @ts-ignore. Si un tipo choca, arreglá la interfaz o la consulta de raíz. TypeScript es tu red de seguridad, no la saltes.

## Regla #0 — Clean code, sin excepciones
El clean code se prioriza **siempre**, por encima de la velocidad o la conveniencia. Nunca se deja de lado por ningún motivo:
- Nombres descriptivos en todo (variables, funciones, componentes, archivos).
- Componentes pequeños y de una sola responsabilidad.
- Sin comentarios en el código; el código se explica solo. Única excepción: justificar un Server Component (ver más abajo).
- Si una solución rápida ensucia el código, no se usa: se busca la versión limpia.

## Stack
Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript + Framer Motion 12 + Zod.
- Versiones congeladas: nunca downgradear Next/React/Tailwind/TS. Si una librería nueva puede dar problemas de compatibilidad, verificar peer deps antes de agregarla.
- Gestor de paquetes: **pnpm** (fijado en `package.json` → `packageManager`). No introducir lockfiles de `npm`/`yarn`.
- Tailwind 4: el tema se define en `app/globals.css` con `@theme` (CSS custom properties). **No hay `tailwind.config.ts`.**
- Export estático: `output: 'export'` en `next.config.ts`. `next/image` usa `images.unoptimized: true`.
- Alias de imports: `@/*` apunta a la raíz del proyecto.
- Validación: `site.config.ts` se valida con Zod al importarse (`lib/validate-config.ts`). Si falta un campo, el build falla con error claro.

## Arquitectura — todo componetizado
Las rutas (`app/`) **solo componen**; nunca contienen markup de secciones. La lógica vive en `components/`, `hooks/` y `lib/`.

```
config/      site.config.ts (ÚNICO editable por cliente) · site.types.ts · i18n.ts · presets/
lib/         i18n.ts · whatsapp.ts · slug.ts · validate-config.ts
hooks/       useLanguage.ts · useLocalStorage.ts · useDragScroll.ts
components/
  providers/ LanguageProvider.tsx · MotionProvider.tsx (LazyMotion)
  ui/        Section · Button · LanguageToggle · WhatsAppButton · Reveal · Carousel · SectionHeading
  layout/    Navbar · Footer
  sections/  Hero · Offerings(Carousel) · About(Split) · Contact(Centered) · FAQ · Testimonials · Gallery
  seo/       JsonLd.tsx
app/         layout.tsx · page.tsx · not-found.tsx · sitemap.ts · robots.ts · globals.css · oferta/[slug]/
scripts/     new-client.mjs
```

- `app/page.tsx` recorre `siteConfig.sections` y renderiza cada sección desde un registro de variantes (`SectionId → componente`). El campo `variants` del config elige la versión de cada sección (ej: `about: "split" | "simple"`).
- Secciones disponibles: `hero`, `offerings`, `about`, `contact`, `faq`, `testimonials`, `gallery`.
- Las secciones usan `id` para el scroll suave desde el Navbar.

## Tipos de web
- **Servicios** (`offerings.kind: "services"`): tarjetas sin precio.
- **Productos** (`offerings.kind: "products"`): tarjetas con `price`.
- **Promocional**: web que **no** usa grid de productos/servicios ni cards. Su único objetivo es lucir: se arma una composición estética **solo con las imágenes que entrega el cliente + texto** (bloques imagen/texto alternados, full-bleed, overlays, tipografía grande). Nada de listados ni precios. La sección del medio muestra las imágenes promocionales en lugar del grid de `Offerings`. Sigue siendo responsive y reutiliza los componentes existentes (`Section`, `Reveal`, etc.).

## Tamaño de la web — single-page vs multipágina
- **Default: single-page.** Todas las secciones viven en `app/page.tsx` y el Navbar navega con anclas (`#offerings`, `#about`, `#contact`). No cambiar esto salvo pedido explícito.
- **Multipágina (solo cuando el usuario lo pide para agrandar la web):** se mantiene una home y se crean **3 páginas extra**, una por sección, reutilizando **el mismo componente de sección tal cual** (no se reescribe ni se cambia nada) más un **título de página extra arriba**:
  - `app/servicios/` · `app/productos/` · `app/<negocio>/` → la sección `Offerings` (el nombre de la ruta sale del tipo: servicios / productos / nombre del negocio en promocional).
  - `app/nosotros/` → la sección `About`.
  - `app/contacto/` → la sección `Contact`.
- La home queda con el `Hero` (y lo que el usuario quiera dejar ahí). Cada página extra: `Navbar` + título extra + la sección copiada + `Footer` + `FloatingWhatsApp`.
- En este modo el Navbar/Footer dejan de usar anclas y enlazan a las rutas (`/servicios`, `/nosotros`, `/contacto`) con `next/link`.
- **SEO/jerarquía:** en las páginas extra el `h1` es el título extra de página (no hay Hero), y la sección conserva su `h2`. Un solo `h1` por página.
- **Export estático:** si se hace con ruta dinámica `app/[page]/`, requiere `generateStaticParams()` + `export const dynamic = "force-static"` y `dynamicParams = false`. Si se hace con carpetas explícitas (`app/nosotros/`, etc.), no hace falta nada de eso.
- El único objetivo de este modo es **agrandar la web cuando se ve necesario**, nunca rediseñar ni cambiar el contenido de las secciones.

## Imágenes — leer y ubicar SIEMPRE
Hay que **leer los nombres** de las imágenes en `assets-cliente/` y colocarlas en su sección según el nombre (no ignorarlas):
- `hero*` → sección Hero.
- `nosotros*` / `about*` / `quienes-somos*` → sección Nosotros.
- `oferta-N*` / imágenes promocionales → sección del medio (offerings o composición promocional).
- `galeria-N*` → sección Gallery.
- `logo*` → logo (Navbar/Footer).
Mover a `public/` solo las que se usan. Toda imagen lleva `alt` descriptivo. Los contenedores de imagen usan la clase `img-shimmer` como placeholder visual.

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
- **Reutilizar siempre los componentes ya programados** (`Section`, `Button`, `SectionHeading`, `Reveal`, `WhatsAppButton`, etc.). Crear uno nuevo solo si realmente no existe el que se necesita.
- **Listas de elementos → `grid`** por defecto; usar `flex` solo cuando sea muy evidente que corresponde.
- **En mobile, las listas usan carrusel con overflow en X siempre** (scroll horizontal con snap), no se apilan en una columna larga.
- Por el toggle de idioma en cliente, las secciones que muestran texto son Client Components (`"use client"`).
- `Section`, `Button`, `JsonLd` no usan hooks → quedan sin directiva (shared/server). Si se elige Server Component deliberadamente, justificarlo con un comentario breve (única excepción a "sin comentarios").

## Tema
- Colores y fuentes en `app/globals.css`: variables en `:root` + mapeo en `@theme inline` → genera utilidades `bg-primary`, `text-foreground`, `font-heading`, etc.
- Cambiar la marca de un cliente = editar las variables de `:root`. Las fuentes se cambian en `app/layout.tsx` (import de `next/font/google`).
- **Presets listos** en `config/presets/` (futuristic, minimalist, elegant, fresh): copiar las variables de `:root` del archivo del preset a `globals.css`.

## Ejecución — alcance estricto
- La **única** verificación permitida es el build de producción: `pnpm build`. Nada más.
- **Prohibido sin que el usuario lo pida explícitamente**: levantar `pnpm dev`/servidor, abrir el navegador, tomar screenshots, previsualizar, o cualquier paso fuera de lo necesario para que compile.
- No ejecutar de más: hacé solo lo pedido. Si el build pasa, terminás ahí.

## Rendimiento
Tomar siempre la decisión que mejore el rendimiento: lazy loading, optimización de imágenes, code splitting y minimizar el JS del cliente.
- Framer Motion usa `LazyMotion` con `domAnimation` (no el bundle completo).
- Los contenedores de imagen usan la clase `img-shimmer` (definida en `globals.css`) como placeholder visual mientras cargan.
- `next/font/google` con `display: "swap"` para zero layout shift.

## Diseño
- Mobile-first siempre; priorizar la experiencia en teléfono.
- **Responsive sin excepción**: toda web y toda sección tiene que verse y funcionar bien en mobile, tablet y desktop. Nunca entregar algo que no sea responsive.
- Antes de generar/ajustar componentes, leer las dos skills: `landing-generator` y `frontend-design`.
- Diseños minimalistas y con apariencia humana. Nunca patrones genéricos de template AI.
- Tipografía, paleta y espaciado son decisiones deliberadas y específicas para cada cliente.
- **Consistencia tipográfica**: todos los `h2` de sección salen de `SectionHeading` (mismo tamaño); los heroes comparten estilo de `h1`. Alineación, bordes, paddings y espaciado consistentes y responsive entre secciones (el padding base lo da `Section`).

## Estilos disponibles (presets)
Cada cliente elige un estilo; se aplica vía las variables de `:root` en `app/globals.css` (colores) y el import de fuentes en `app/layout.tsx`. No hardcodear estilos por componente.
- **Futuristic**: oscuro con **profundidad y estilo**, no AI-slop. Acento neón **muy puntual** (un solo color, solo en CTAs/detalles), apoyado en gradientes sutiles, capas/glass, sombras suaves y fuerte contraste tipográfico. Evitar el glow saturado en todos lados y los multicolores neón genéricos. `Space Grotesk`.
- **Minimalist**: pastel, mucho espacio en blanco, sin sombras, `DM Sans`.
- **Elegant**: negro y dorado, headings serif, `Playfair Display`.
- **Fresh**: verde, bordes redondeados, amigable, `Nunito`.

## Animaciones
- Framer Motion **sutil** via `LazyMotion` + `domAnimation` (bundle reducido). Usar `m` en vez de `motion`, y el wrapper `components/ui/Reveal.tsx` (fade-up al entrar en viewport, `once`).
- Honra `prefers-reduced-motion` (vía `useReducedMotion`).
- Solo Client Components (Framer Motion lo requiere). No animar por animar; suma cuando aporta jerarquía o foco.
- El `MotionProvider` envuelve toda la app en `layout.tsx`.

## SEO
- Metadata y Open Graph dinámicos desde `config.seo` en `app/layout.tsx`.
- JSON-LD de negocio local (`components/seo/JsonLd.tsx`).
- `sitemap.ts` y `robots.ts` con `dynamic = "force-static"`.
- Heading hierarchy correcta: un solo `h1` (Hero), un `h2` por sección. `alt` descriptivo en imágenes.
- Nota: con toggle de idioma en cliente, la metadata se sirve en el idioma default.

## Copy
- Español argentino (voseo) como idioma principal, inglés como traducción.
- WhatsApp es el CTA principal en toda la página (`buildWhatsAppLink`).
- **Defaults de contacto** cuando el cliente no da los suyos: WhatsApp/teléfono `+5492236680996`, sitio/IG de fallback `estudiove.ar`.
- Textos orientados al beneficio del cliente, no a las características del negocio.

## Deploy
- Vercel con output estático (`output: 'export'` en `next.config.ts`).
- Cada push a `main` dispara deploy automático.

## Skills disponibles
- `landing-generator`: estructura, schema del config y especificaciones de componentes.
- `frontend-design`: principios de diseño, planificación visual y autocrítica.
- `impeccable` · `design-taste-frontend`: solo checklist de calidad/anti-slop (ver precedencia entre skills arriba). No dictan paleta, motion, fuentes ni dependencias en este proyecto.
