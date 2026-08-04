"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

const { presentation } = siteConfig;

export function Presentation() {
  const { t } = useLanguage();

  if (!presentation) return null;

  return (
    <Section
      id="presentation"
      className="overflow-hidden bg-surface text-ink"
      topDivider={<WaveDivider className="fill-surface" />}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid items-center gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        <Reveal delay={0.05}>
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="elev-2 relative aspect-square w-full overflow-hidden rounded-2xl bg-background ring-1 ring-primary/20">
              {presentation.image && (
                <Image
                  src={presentation.image}
                  alt={siteConfig.business.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow={presentation.eyebrow}
            title={presentation.title}
            tone="onLight"
          />
          <div className="mt-6 space-y-4">
            {t(presentation.body).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-ink-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
