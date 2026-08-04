"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

const { about } = siteConfig;

export function AboutSplit() {
  const { t } = useLanguage();

  return (
    <Section
      id="about"
      className="overflow-hidden bg-surface text-ink"
      topDivider={<WaveDivider className="fill-surface" />}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-2xl"
      />

      {/* Título en Mobile arriba de todo */}
      <div className="md:hidden relative max-w-6xl mx-auto px-6 mb-8">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          align="center"
          tone="onLight"
        />
      </div>

      <div className="relative grid items-center gap-12 md:grid-cols-2 max-w-6xl mx-auto px-6 md:px-0">
        <Reveal delay={0.05} className="order-first md:order-first">
          <div className="relative mx-auto w-full max-w-[280px]">
            <span
              aria-hidden
              className="absolute -inset-4 rounded-full bg-primary/15 blur-2xl"
            />
            <div className="elev-2 relative aspect-square w-full overflow-hidden rounded-full bg-surface-raised ring-2 ring-primary/40">
              {about.image && (
                <Image
                  src={about.image}
                  alt={t(about.title)}
                  fill
                  sizes="(max-width: 768px) 70vw, 280px"
                  className="object-cover object-[50%_20%] scale-105"
                />
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="hidden md:block">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              tone="onLight"
            />
          </div>
          <div className="mt-5 md:mt-8 space-y-4 text-center md:text-left">
            {t(about.body).map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink-muted md:text-lg"
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
                  <dt className="font-heading text-xl font-bold text-primary-deep mb-1">
                    {highlight.value}
                  </dt>
                  <dd className="text-sm text-ink-muted leading-relaxed font-medium">
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
