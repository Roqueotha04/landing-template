"use client";

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
      className="flex min-h-[80vh] scroll-mt-16 items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8">
        <Reveal className="max-w-2xl">
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            {t(hero.title)}
          </h1>
          <p className="mt-6 text-lg text-foreground/70 md:text-xl">
            {t(hero.subtitle)}
          </p>
          <div className="mt-10">
            <WhatsAppButton label={t(hero.ctaText)} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
