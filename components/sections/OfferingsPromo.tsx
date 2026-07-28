"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

const { offerings } = siteConfig;

export function OfferingsPromo() {
  const { t } = useLanguage();

  return (
    <Section
      id="offerings"
      className="bg-white text-neutral-900"
      topDivider={<WaveDivider className="fill-white" />}
    >
      <div className="text-neutral-900">
        <SectionHeading title={offerings.title} subtitle={offerings.subtitle} align="center" />
      </div>

      <div className="mt-20 flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
        {offerings.items.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <Reveal
              key={item.name.es}
              delay={0.1}
              className={`flex flex-col gap-10 md:items-center ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="w-full md:w-3/5 space-y-5">
                <h3 className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
                  {t(item.name)}
                </h3>
                <div className="h-0.5 w-12 bg-primary" />
                <p className="text-base text-neutral-700 md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                  {t(item.description)}
                </p>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative w-full aspect-square max-w-[340px] rounded-lg overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-black/5 bg-neutral-100">
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
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
