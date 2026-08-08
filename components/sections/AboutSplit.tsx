"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ShieldIcon, ListeningIcon, TargetIcon } from "@/components/ui/icons";
import type { HighlightIcon } from "@/config/site.types";

const { about } = siteConfig;

const highlightIcons: Record<HighlightIcon, ComponentType<{ className?: string }>> = {
  shield: ShieldIcon,
  listening: ListeningIcon,
  target: TargetIcon,
};

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

      {/* On desktop the right side is split into three rows — heading, body
          copy, highlights — so the portrait can share the body row alone and
          sit centered against the paragraphs instead of the whole column. */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-x-12 gap-y-8 px-6 md:grid-cols-2 md:px-0">
        <Reveal
          delay={0.05}
          className="order-first md:col-start-1 md:row-start-2 md:self-center"
        >
          <div className="relative mx-auto w-full max-w-105">
            <span
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-primary/15 blur-2xl"
            />
            <div className="elev-2 relative aspect-square w-full overflow-hidden rounded-2xl bg-surface-raised ring-2 ring-primary/40">
              {about.image && (
                <Image
                  src={about.image}
                  alt={t(about.title)}
                  fill
                  sizes="(max-width: 768px) 85vw, 420px"
                  className="object-cover object-[50%_20%]"
                />
              )}
            </div>
          </div>
        </Reveal>

        <Reveal className="hidden md:col-start-2 md:row-start-1 md:block">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            tone="onLight"
          />
        </Reveal>

        <Reveal className="md:col-start-2 md:row-start-2 md:self-center">
          <div className="space-y-4 text-center md:text-left">
            {t(about.body).map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-start-2 md:row-start-3">
          {about.highlights && about.highlights.length > 0 && (
            <dl className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3 sm:gap-4">
              {about.highlights.map((highlight) => {
                const Icon = highlightIcons[highlight.icon ?? "shield"];

                return (
                  <div
                    key={highlight.value.es}
                    className="group flex h-full flex-col rounded-xl border border-primary/20 bg-surface-raised/60 p-5 text-left transition-colors duration-300 hover:border-primary/45 hover:bg-surface-raised sm:aspect-square"
                  >
                    <Icon className="h-6 w-6 text-primary-deep/70 transition-colors duration-300 group-hover:text-primary-deep" />
                    <dt className="mt-3 font-heading text-base font-bold leading-tight text-ink">
                      {t(highlight.value)}
                    </dt>
                    <dd className="mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                      {t(highlight.label)}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
