---
name: footer-cards-slugs-standing
description: Reglas fijas del template (footer Estudio Ve, tamaño de cards, slugs de oferta)
metadata:
  type: feedback
---

Mandatos del dueño para TODO cliente del template (2026-06-11), ya implementados a nivel template:

- **Footer fijo template-level, común (no curvo).** Nada de efecto `stacked`/rounded ni wave en el footer. Es un footer normal de 4 columnas: (1) logo+datos del cliente + redes, (2) accesos a secciones, (3) Legal (privacidad/términos/cookies, links placeholder `#`), (4) firma de Estudio Ve: logo + "Estudio Ve" + bajada "Agencia de Desarrollo de Software" + link a www.estudiove.com (todo linkea a https://www.estudiove.com). El logo oficial vive en `public/estudio-ve-logo.png` (con transparencia) y queda **siempre**. La marca del cliente sale del config.
- **Cards de oferta SIEMPRE ~30% más chicas** que el default del template, **sin cambiar la cantidad por fila** (en desktop siguen 3 por fila; se achican vía contenedor más angosto `md:max-w-[52rem]` y mobile `w-[48vw]`/`sm:w-[30vw]`). Más aire, no más columnas.
- **Cada producto/servicio tiene slug + página de detalle** estática en `/oferta/[slug]` (título y descripción autogenerados, precio si lo da el cliente). El botón es "Agregar al carrito" (products) / "Solicitar servicio" (services) y **abre WhatsApp con el ítem** — sin carrito real.
- En la sección de oferta hay un botón **"Ver todos"** (estético, sin función por ahora). Los links legales del footer también son estéticos.

**Why:** el dueño los pidió explícitamente como reglas permanentes, no como ajuste de un cliente.
**How to apply:** ya están en el código del template; cada cliente nuevo los hereda. No revertir a footer curvo ni agrandar cards. Complementa [[landing-standing-corrections]].
