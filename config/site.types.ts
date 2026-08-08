export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T = string> = Record<Locale, T>;

export type OfferingKind = "services" | "products";

export type SectionId =
  | "hero"
  | "presentation"
  | "offerings"
  | "about"
  | "whyUs"
  | "booking"
  | "contact"
  | "testimonials"
  | "gallery"
  | "faq";

export interface SectionVariants {
  about?: "split" | "simple";
  contact?: "full" | "centered";
  offerings?: "grid" | "carousel" | "promo";
}

export interface Testimonial {
  name: string;
  role?: Localized;
  quote: Localized;
  avatar?: string;
}

export interface TestimonialsContent {
  title: Localized;
  subtitle?: Localized;
  items: Testimonial[];
}

export interface GalleryImage {
  src: string;
  alt: Localized;
}

export interface GalleryContent {
  title: Localized;
  subtitle?: Localized;
  images: GalleryImage[];
}

export interface FaqItem {
  question: Localized;
  answer: Localized;
}

export interface FaqContent {
  title: Localized;
  subtitle?: Localized;
  items: FaqItem[];
}

export interface Offering {
  name: Localized;
  description: Localized;
  bulletsTitle?: Localized;
  bullets?: Localized<string[]>;
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
  logoTextShort?: string;
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
  body?: Localized;
  ctaText: Localized;
  secondaryCtaText?: Localized;
  backgroundImage?: string;
}

export interface OfferingsContent {
  kind: OfferingKind;
  title: Localized;
  subtitle?: Localized;
  items: Offering[];
}

export interface PresentationContent {
  title: Localized;
  eyebrow?: Localized;
  body: Localized<string[]>;
  image?: string;
}

export interface WhyUsReason {
  title: Localized;
  body: Localized<string[]>;
  bulletsTitle?: Localized;
  bullets?: Localized<string[]>;
}

export interface WhyUsContent {
  title: Localized;
  eyebrow?: Localized;
  subtitle?: Localized;
  reasons: WhyUsReason[];
  image?: string;
}

/** Icons available for the about highlights, rendered by `AboutSplit`. */
export type HighlightIcon = "shield" | "listening" | "target";

export interface AboutHighlight {
  /** Short headline of the highlight, e.g. "Espacio Seguro". */
  value: Localized;
  label: Localized;
  icon?: HighlightIcon;
}

export interface AboutContent {
  title: Localized;
  eyebrow?: Localized;
  body: Localized<string[]>;
  highlights?: AboutHighlight[];
  image?: string;
}

export interface ContactContent {
  title: Localized;
  subtitle: Localized;
  whatsappMessage: Localized;
}

export interface BookingContent {
  title: Localized;
  subtitle?: Localized;
  eyebrow?: Localized;
  ctaText?: Localized;
  perks?: Localized[];
  pageTitle?: Localized;
  calLink: string;
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
  variants?: SectionVariants;
  hero: HeroContent;
  presentation?: PresentationContent;
  offerings: OfferingsContent;
  about: AboutContent;
  whyUs?: WhyUsContent;
  booking?: BookingContent;
  contact: ContactContent;
  testimonials?: TestimonialsContent;
  gallery?: GalleryContent;
  faq?: FaqContent;
  legalLinks?: LegalLink[];
  seo: SeoContent;
}
