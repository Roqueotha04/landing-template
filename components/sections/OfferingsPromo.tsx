"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const { offerings } = siteConfig;

export function OfferingsPromo() {
  const { t } = useLanguage();

  return (
    <Section
      id="offerings"
      className="bg-gradient-to-b from-surface to-surface-deep text-ink"
    >
      <div className="relative z-10">
        <SectionHeading
          title={offerings.title}
          subtitle={offerings.subtitle}
          align="center"
          tone="onLight"
        />
      </div>

      <div className="mt-20 flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto relative z-10">
        {offerings.items.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <Reveal
              key={item.name.es}
              delay={0.1}
              className={`flex flex-col gap-10 md:items-center ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="w-full md:w-3/5 space-y-5">
                <span
                  aria-hidden
                  className="block font-heading text-5xl font-bold leading-none text-primary/35 md:text-6xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl font-bold text-ink md:text-3xl">
                  {t(item.name)}
                </h3>
                <div className="h-0.5 w-12 bg-primary" />
                <p className="text-base text-ink-muted md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                  {t(item.description)}
                </p>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                {/* Gallery mat: ivory border + gold hairline framing the photo. */}
                <div className="elev-2 relative w-full max-w-[340px] rounded-md bg-surface-raised p-3 ring-1 ring-primary/25">
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={t(item.name)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
