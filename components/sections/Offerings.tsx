"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

const { offerings } = siteConfig;

const BAND_IMAGE = "/coaching-ejecutivo.jpg";

export function Offerings() {
  const { t } = useLanguage();

  return (
    <Section
      id="offerings"
      wide
      className="bg-gradient-to-b from-surface to-surface-deep text-ink"
      topDivider={<WaveDivider className="fill-surface" />}
    >
      <SectionHeading
        title={offerings.title}
        subtitle={offerings.subtitle}
        align="center"
        tone="onLight"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14">
        <Reveal delay={0.05}>
          <div className="elev-1 relative overflow-hidden rounded-2xl bg-surface-raised p-0.5 ring-1 ring-primary/15">
            <div className="relative aspect-square w-full overflow-hidden rounded-[0.9rem]">
              <Image
                src={BAND_IMAGE}
                alt={t(offerings.title)}
                fill
                sizes="(max-width: 768px) 92vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <ul className="border-l-2 border-primary/40">
          {offerings.items.map((item, index) => (
            <li key={item.name.es} className="border-b border-primary/10 last:border-b-0">
              <Reveal delay={index * 0.04}>
                <div className="flex items-baseline gap-4 py-5 pl-6">
                  <span
                    aria-hidden
                    className="font-heading text-sm font-bold tabular-nums text-primary-deep/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-ink md:text-xl">
                    {t(item.name)}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
