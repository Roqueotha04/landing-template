import type { ComponentType } from "react";
import { siteConfig } from "@/config/site.config";
import type { SectionId } from "@/config/site.types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Offerings } from "@/components/sections/Offerings";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { Contact } from "@/components/sections/Contact";

const sectionComponents: Record<SectionId, ComponentType> = {
  hero: Hero,
  offerings: Offerings,
  about: AboutSplit,
  contact: Contact,
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {siteConfig.sections.map((id) => {
          const SectionComponent = sectionComponents[id];
          return <SectionComponent key={id} />;
        })}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
