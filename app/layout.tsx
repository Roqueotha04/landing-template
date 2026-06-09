import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { JsonLd } from "@/components/seo/JsonLd";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const { site, business, seo } = siteConfig;
const locale = site.defaultLocale;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title[locale],
  description: seo.description[locale],
  keywords: seo.keywords,
  openGraph: {
    title: seo.title[locale],
    description: seo.description[locale],
    url: site.url,
    siteName: business.name,
    locale,
    type: "website",
    ...(seo.ogImage && { images: [{ url: seo.ogImage }] }),
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={locale} className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full font-body">
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
