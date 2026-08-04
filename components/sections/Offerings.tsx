"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGridCard } from "@/components/ui/ServiceGridCard";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { useDragScroll } from "@/hooks/useDragScroll";

const { offerings } = siteConfig;

const BAND_IMAGE = "/coaching-ejecutivo.jpg";

export function Offerings() {
  const { t } = useLanguage();
  const scrollRef = useDragScroll<HTMLDivElement>();

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

      <Reveal delay={0.05} className="mt-12">
        <div className="elev-1 relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-surface-raised p-0.5 ring-1 ring-primary/15">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[0.9rem]">
            <Image
              src={BAND_IMAGE}
              alt={t(offerings.title)}
              fill
              sizes="(max-width: 768px) 92vw, 900px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      <div
        ref={scrollRef}
        className="mt-14 -mx-6 flex snap-x snap-proximity scroll-px-6 gap-8 overflow-x-auto px-6 pb-4 select-none cursor-grab active:cursor-grabbing md:mx-auto md:grid md:max-w-[72.25rem] md:grid-cols-2 md:gap-[3.6rem] md:overflow-visible md:px-0 md:pb-0 md:scroll-px-0 md:cursor-auto md:select-auto lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {offerings.items.map((item, index) => (
          <Reveal
            key={item.name.es}
            delay={index * 0.04}
            className="w-[62vw] shrink-0 snap-start sm:w-[40vw] md:w-auto"
          >
            <ServiceGridCard item={item} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-2.5 text-sm font-bold text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {t(ui.offerings.viewAll)}
        </button>
      </div>
    </Section>
  );
}
