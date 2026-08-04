"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const { whyUs } = siteConfig;

export function WhyUs() {
  const { t } = useLanguage();

  if (!whyUs) return null;

  return (
    <Section id="whyUs" stacked className="overflow-hidden bg-accent">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-16">
        <div>
          <SectionHeading
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
            subtitle={whyUs.subtitle}
          />

          <div className="mt-10 space-y-8">
            {whyUs.reasons.map((reason, index) => (
              <Reveal key={reason.title.es} delay={index * 0.05}>
                <article className="border-l-2 border-primary/40 pl-6">
                  <h3 className="font-heading text-lg font-bold text-primary md:text-xl">
                    {t(reason.title)}
                  </h3>
                  {t(reason.body).map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-2 text-sm leading-relaxed text-foreground/70 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md">
            <span
              aria-hidden
              className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl"
            />
            {whyUs.image && (
              <Image
                src={whyUs.image}
                alt={siteConfig.business.name}
                width={640}
                height={640}
                sizes="(max-width: 768px) 85vw, 28rem"
                className="relative w-full rounded-2xl"
              />
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
