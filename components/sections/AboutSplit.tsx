"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const { about } = siteConfig;

export function AboutSplit() {
  const { t } = useLanguage();

  return (
    <Section id="about" stacked className="overflow-hidden bg-accent">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-2xl"
      />

      {/* Título en Mobile arriba de todo */}
      <div className="md:hidden relative max-w-6xl mx-auto px-6 mb-8 mt-10">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} align="center" />
      </div>

      <div className="relative grid items-center gap-12 md:grid-cols-2 max-w-6xl mx-auto px-6 md:px-0">
        <Reveal delay={0.05} className="order-first md:order-first">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] border border-primary/20 bg-background/50">
              <div className="absolute inset-0 bg-background img-shimmer" />
              {about.image && (
                <Image
                  src={about.image}
                  alt={t(about.title)}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="hidden md:block">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          </div>
          <div className="mt-5 md:mt-8 space-y-4 text-center md:text-left">
            {t(about.body).map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-foreground/80 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {about.highlights && about.highlights.length > 0 && (
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight.value}
                  className="flex flex-col items-start text-left"
                >
                  <dt className="font-heading text-xl font-bold text-primary mb-1">
                    {highlight.value}
                  </dt>
                  <dd className="text-sm text-foreground/70 leading-relaxed font-medium">
                    {t(highlight.label)}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
