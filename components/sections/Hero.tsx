"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { AGENDA_ROUTE } from "@/lib/nav";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

const { hero, booking } = siteConfig;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-background bg-grid-pattern text-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <span className="hero-orb-a absolute -left-24 top-4 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        <span className="hero-orb-b absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
        <span className="hero-spotlight absolute left-0 top-1/4 h-[28rem] w-[38rem] max-w-full" />
      </div>

      <div className="relative mx-auto flex flex-col md:grid md:grid-cols-[1.2fr_1fr] md:grid-rows-[auto_1fr] items-center md:items-center w-full max-w-6xl gap-10 md:gap-x-16 md:gap-y-8 px-6 py-16 md:px-8 md:py-32 z-10">

        {/* Columna Izquierda: Texto y Botones agrupados para centrado vertical */}
        <div className="flex flex-col justify-center gap-8 md:gap-12 md:col-start-1 md:row-start-1 md:row-span-2">
          {/* Titulo y Subtitulo */}
          <Reveal className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight sm:whitespace-nowrap text-gradient-gold">
              {t(hero.title)}
            </h1>
            <p className="font-heading text-lg md:text-xl font-medium text-foreground/80 leading-relaxed max-w-2xl">
              {t(hero.subtitle)}
            </p>
          </Reveal>

          {/* Botones */}
          <Reveal delay={0.2} className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <div className="flex flex-col w-full sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
              {booking ? (
                <Link
                  href={AGENDA_ROUTE}
                  className="cta-shine elev-gold group relative inline-flex w-full sm:w-auto h-[60px] items-center justify-center gap-3 overflow-hidden rounded-sm bg-gradient-to-r from-secondary to-primary px-10 font-heading text-lg font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                >
                  {t(hero.ctaText)}
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <WhatsAppButton label={t(hero.ctaText)} className="w-full sm:w-auto text-primary-foreground font-bold shadow-lg shadow-primary/20 flex justify-center" />
              )}

              {hero.secondaryCtaText && (
                <Link
                  href="/#offerings"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-2 py-2 text-base font-semibold text-foreground/70 underline-offset-8 transition-colors hover:text-primary hover:underline"
                >
                  {t(hero.secondaryCtaText)}
                </Link>
              )}
            </div>

            {booking?.perks && booking.perks.length > 0 && (
              <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
                {booking.perks.map((perk, index) => (
                  <li
                    key={perk.es}
                    className="flex items-center gap-3 text-sm font-medium text-foreground/60"
                  >
                    {index > 0 && (
                      <span aria-hidden className="text-primary/50">
                        ·
                      </span>
                    )}
                    {t(perk)}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>

        {/* Imagen del Hero (Derecha en Desktop, #2 en Mobile) */}
        {hero.backgroundImage && (
          <Reveal
            delay={0.1}
            className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[280px] lg:max-w-[320px] mx-auto flex justify-center md:col-start-2 md:row-start-1 md:row-span-2 order-first md:order-none mb-8 md:mb-0"
          >
            <div className="relative aspect-square w-full">
              <span
                aria-hidden
                className="absolute -inset-6 rounded-full bg-primary/15 blur-2xl"
              />
              <span
                aria-hidden
                className="hero-orbit absolute -inset-3 rounded-full"
              />
              <span
                aria-hidden
                className="absolute -inset-3 rounded-full ring-1 ring-primary/20"
              />
              <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-primary/45 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] bg-white">
                <div className="absolute inset-0 bg-white img-shimmer" />
                <Image
                  src={hero.backgroundImage}
                  alt={t(hero.title)}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover object-[50%_30%] scale-105"
                />
              </div>
            </div>
          </Reveal>
        )}
        
      </div>
    </section>
  );
}
