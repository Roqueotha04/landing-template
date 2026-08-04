import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import type { Localized, SectionId } from "@/config/site.types";

export interface NavItem {
  key: string;
  href: string;
  label: Localized;
  /** Internal route (next/link) instead of a same-page anchor. */
  isRoute?: boolean;
}

export const AGENDA_ROUTE = "/agenda";

function navLabel(id: SectionId): Localized {
  return id === "offerings" ? siteConfig.offerings.title : ui.nav[id];
}

/**
 * Nav entries shared by Navbar and Footer.
 *
 * Anchors are absolute (`/#about`, not `#about`) so they also work from
 * routes other than the home page. The `booking` section is skipped: its
 * place in the menu is taken by the `/agenda` route link below. `presentation`
 * is skipped too — it reads as part of the opening, and adding it overflows
 * the bar on desktop.
 */
const HIDDEN_FROM_NAV: SectionId[] = ["hero", "presentation", "booking"];

export function buildNavItems(): NavItem[] {
  const sectionItems: NavItem[] = siteConfig.sections
    .filter((id) => !HIDDEN_FROM_NAV.includes(id))
    .map((id) => ({ key: id, href: `/#${id}`, label: navLabel(id) }));

  if (!siteConfig.booking) return sectionItems;

  return [
    ...sectionItems,
    { key: "agenda", href: AGENDA_ROUTE, label: ui.nav.booking, isRoute: true },
  ];
}
