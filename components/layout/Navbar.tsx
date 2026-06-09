"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import type { Localized, SectionId } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const navSections: SectionId[] = siteConfig.sections.filter((id) => id !== "hero");

function navLabel(id: SectionId): Localized {
  return id === "offerings" ? siteConfig.offerings.title : ui.nav[id];
}

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#hero" className="font-heading text-lg font-semibold text-foreground">
          {siteConfig.business.logoText ?? siteConfig.business.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navSections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {t(navLabel(id))}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t(ui.menu.close) : t(ui.menu.open)}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-foreground/10 px-6 py-4 md:hidden">
          {navSections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base text-foreground/80 transition-colors hover:text-foreground"
              >
                {t(navLabel(id))}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
