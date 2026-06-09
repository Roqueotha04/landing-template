"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const { business } = siteConfig;

const socialLinks = [
  business.instagram && {
    label: "Instagram",
    href: `https://instagram.com/${business.instagram.replace(/^@/, "")}`,
  },
  business.facebook && {
    label: "Facebook",
    href: `https://facebook.com/${business.facebook}`,
  },
].filter((link): link is { label: string; href: string } => Boolean(link));

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 text-center md:px-8">
        <span className="font-heading text-lg font-semibold text-foreground">
          {business.name}
        </span>

        {socialLinks.length > 0 && (
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} {business.name}. {t(ui.footer.rights)}
        </p>
      </div>
    </footer>
  );
}
