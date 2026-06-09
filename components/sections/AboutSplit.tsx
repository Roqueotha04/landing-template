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
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading title={about.title} />
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            {t(about.body)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-accent">
            {about.image && (
              <Image
                src={about.image}
                alt={t(about.title)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
