"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";

const { hero } = siteConfig;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-background bg-grid-pattern text-foreground"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 md:left-[66%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-15 mix-blend-screen blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(229,193,88,0.8) 0%, rgba(197,160,89,0) 70%)"
        }}
      />

      <div className="relative mx-auto flex flex-col md:grid md:grid-cols-[1.2fr_1fr] md:grid-rows-[auto_1fr] items-center md:items-center w-full max-w-6xl gap-10 md:gap-x-16 md:gap-y-8 px-6 py-16 md:px-8 md:py-32 z-10">
        
        {/* Columna Izquierda: Texto y Botones agrupados para centrado vertical */}
        <div className="flex flex-col justify-center gap-8 md:gap-12 md:col-start-1 md:row-start-1 md:row-span-2">
          {/* Titulo y Subtitulo */}
          <Reveal className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-nowrap text-gradient-gold">
              {t(hero.title)}
            </h1>
            <p className="font-heading text-base md:text-lg font-medium text-foreground/80 leading-relaxed max-w-2xl">
              {t(hero.subtitle)}
            </p>
          </Reveal>

          {/* Botones */}
          <Reveal delay={0.2} className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <div className="flex flex-col w-full sm:flex-row gap-4 justify-center md:justify-start">
              <WhatsAppButton label={t(hero.ctaText)} className="w-full sm:w-auto text-primary-foreground font-bold shadow-lg shadow-primary/20 flex justify-center" />
              
              {hero.secondaryCtaText && (
                <Link 
                  href="#offerings"
                  className="inline-flex w-full sm:w-auto h-[52px] items-center justify-center rounded-sm bg-white/10 px-8 text-base font-bold text-foreground border border-white/20 transition-all hover:bg-white/20 hover:scale-[1.02]"
                >
                  {t(hero.secondaryCtaText)}
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        {/* Imagen del Hero (Derecha en Desktop, #2 en Mobile) */}
        {hero.backgroundImage && (
          <Reveal
            delay={0.1}
            className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[280px] lg:max-w-[320px] mx-auto flex justify-center md:col-start-2 md:row-start-1 md:row-span-2 order-first md:order-none mb-8 md:mb-0"
          >
            <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-primary/30 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] bg-white">
              <div className="absolute inset-0 bg-white img-shimmer" />
              <Image
                src={hero.backgroundImage}
                alt={t(hero.title)}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
        
      </div>
    </section>
  );
}
