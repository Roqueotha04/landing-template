"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { buildNavItems, AGENDA_ROUTE } from "@/lib/nav";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { WhatsAppIcon } from "@/components/ui/icons";

const { business, contact, booking } = siteConfig;
const navItems = buildNavItems();

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  const whatsappHref = buildWhatsAppLink(business.whatsapp, t(contact.whatsappMessage));

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-secondary/15 bg-accent/85 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="/#hero" className="flex items-center gap-2.5">
          {business.logo && (
            <Image
              src={business.logo}
              alt={business.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full ring-2 ring-secondary/40"
            />
          )}
          <span className="font-heading text-base font-bold text-primary sm:text-lg">
            <span className="sm:hidden">
              {business.logoTextShort ?? business.logoText ?? business.name}
            </span>
            <span className="hidden sm:inline">
              {business.logoText ?? business.name}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              {item.isRoute ? (
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-foreground/70 transition-colors hover:text-secondary"
                >
                  {t(item.label)}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-semibold text-foreground/70 transition-colors hover:text-secondary"
                >
                  {t(item.label)}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(ui.whatsapp.aria)}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          {booking && (
            <Link
              href={AGENDA_ROUTE}
              className="hidden items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.04] md:inline-flex"
            >
              {t(ui.nav.booking)}
            </Link>
          )}
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

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 border-t border-secondary/15 px-6 py-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-secondary"
                  >
                    {t(item.label)}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-secondary"
                  >
                    {t(item.label)}
                  </a>
                ),
              )}
              {booking && (
                <Link
                  href={AGENDA_ROUTE}
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  {t(ui.nav.booking)}
                </Link>
              )}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                aria-label={t(ui.whatsapp.aria)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-sm border border-primary/40 px-4 py-2.5 text-sm font-bold text-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t(ui.whatsapp.cta)}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
