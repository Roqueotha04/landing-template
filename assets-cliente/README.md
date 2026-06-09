# assets-cliente/

Carpeta de **input crudo** por cliente. Tirá acá todas las imágenes que tengas; yo
selecciono, optimizo y muevo a `public/` solo las que se usan. De las fotos también
extraigo la paleta si lo pedís en el brief.

## Convención de nombres

El nombre me dice el rol de cada imagen, así no tengo que preguntarte:

```
logo.png            → logo del negocio
hero.jpg            → fondo del hero (la foto fuerte)
about.jpg           → foto de la sección "Sobre nosotros"
oferta-1.jpg        → imagen del 1er servicio/producto (mismo orden que el brief)
oferta-2.jpg
oferta-3.jpg
paleta/             → fotos extra de las que querés que saque colores (opcional)
```

## Notas
- Formatos: `.png`, `.jpg`/`.jpeg`, `.webp`, `.svg`.
- Toda imagen es opcional: si una sección no tiene foto, funciona igual sin ella.
- El orden de `oferta-N` debe coincidir con el orden de los items en `BRIEF.md`.
- Bajo export estático las imágenes finales viven en `public/` con `images.unoptimized: true`.
