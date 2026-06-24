export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T = string> = Record<Locale, T>;

export type OfferingKind = "services" | "products";

export type SectionId = "hero" | "offerings" | "about" | "contact";

export interface Offering {
  name: Localized;
  description: Localized;
  price?: string;
  image?: string;
  slug?: string;
}

export interface SiteMeta {
  url: string;
  defaultLocale: Locale;
}

export interface Business {
  name: string;
  legalName?: string;
  logoText?: string;
  logo?: string;
  phone: string;
  whatsapp: string;
  email?: string;
  address?: string;
  mapUrl?: string;
  instagram?: string;
  facebook?: string;
  hours?: Localized;
}

export interface Brand {
  headingFont: string;
  bodyFont: string;
}

export interface HeroContent {
  eyebrow?: Localized;
  title: Localized;
  subtitle: Localized;
  ctaText: Localized;
  backgroundImage?: string;
}

export interface OfferingsContent {
  kind: OfferingKind;
  title: Localized;
  subtitle?: Localized;
  items: Offering[];
}

export interface AboutContent {
  title: Localized;
  eyebrow?: Localized;
  body: Localized<string[]>;
  highlights?: { value: string; label: Localized }[];
  image?: string;
}

export interface ContactContent {
  title: Localized;
  subtitle: Localized;
  whatsappMessage: Localized;
}

export interface LegalLink {
  label: Localized;
  href: string;
}

export interface SeoContent {
  title: Localized;
  description: Localized;
  keywords?: string[];
  ogImage?: string;
}

export interface SiteConfig {
  site: SiteMeta;
  business: Business;
  brand: Brand;
  sections: SectionId[];
  hero: HeroContent;
  offerings: OfferingsContent;
  about: AboutContent;
  contact: ContactContent;
  legalLinks?: LegalLink[];
  seo: SeoContent;
}
