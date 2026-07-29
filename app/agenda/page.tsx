import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BookingCalendar } from "@/components/sections/BookingCalendar";

const { booking, business, site } = siteConfig;
const locale = site.defaultLocale;

export const metadata: Metadata = {
  title: booking
    ? `${(booking.pageTitle ?? booking.title)[locale]} — ${business.name}`
    : business.name,
  description: booking?.subtitle?.[locale],
  alternates: { canonical: "/agenda" },
};

export default function AgendaPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingCalendar />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
