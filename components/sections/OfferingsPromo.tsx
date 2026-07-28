"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

const { offerings } = siteConfig;

export function OfferingsPromo() {
  const { t } = useLanguage();
  const whatsappHref = buildWhatsAppLink(
    siteConfig.business.whatsapp,
    t(siteConfig.contact.whatsappMessage)
  );

  return (
    <Section
      id="offerings"
      className="bg-white text-neutral-900 relative"
      topDivider={<WaveDivider className="fill-white" />}
    >
      <div 
        className="absolute inset-0 pointer-events-none bg-dot-pattern opacity-50"
        style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }}
      />
      <div className="text-neutral-900 relative z-10">
        <SectionHeading title={offerings.title} subtitle={offerings.subtitle} align="center" />
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
        
        <Reveal delay={0.2} className="flex justify-center mt-8 md:mt-12 w-full px-6 md:px-0">
          <a 
            href={whatsappHref} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary via-[#e5c158] to-primary px-12 sm:px-20 py-4 font-heading text-lg font-bold text-primary-foreground shadow-[0_10px_30px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(197,160,89,0.6)]"
          >
            ¡Quiero saber mas!
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
