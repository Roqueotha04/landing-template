"use client";

import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useLanguage } from "@/hooks/useLanguage";
import { WaveDivider } from "@/components/ui/WaveDivider";

const { offerings } = siteConfig;
const Card = offerings.kind === "products" ? ProductCard : ServiceCard;

export function OfferingsCarousel() {
  const scrollRef = useDragScroll<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <Section id="offerings" className="bg-[#f0f2f5] text-neutral-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl text-gradient-gold drop-shadow-sm">
          {t(offerings.title)}
        </h2>
        {offerings.subtitle && (
          <p className="mt-4 max-w-xl text-lg text-neutral-900 font-semibold">{t(offerings.subtitle)}</p>
        )}
      </div>

      <div
        ref={scrollRef}
        className="mt-16 -mx-6 flex snap-x snap-proximity scroll-px-6 gap-6 overflow-x-auto px-6 pb-8 select-none cursor-grab active:cursor-grabbing md:mx-auto md:w-full md:max-w-[160rem] md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-6 md:cursor-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {offerings.items.map((item, index) => (
          <Reveal key={item.name.es} delay={index * 0.1} className="w-[70vw] max-w-[280px] shrink-0 snap-start md:w-auto md:max-w-none">
            <Card item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
