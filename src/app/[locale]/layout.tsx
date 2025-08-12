import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import FloatingNav from "../components/floating-nav";
import ClientLayout from "../components/client-layout";
import type { Locale } from "@/lib/i18n";
import { I18nProvider } from "@/i18n/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KB Portfolio",
  description: "Kasparas Balys Portfolio 2025",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#000000",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider locale={locale}>
          <ClientLayout>{children}</ClientLayout>
          <FloatingNav />
        </I18nProvider>
        {/* Global minimal spinner keyframes for any loaders we render inline */}
        <style>
          {`@keyframes spin { from { transform: rotate(0deg)} to { transform: rotate(360deg)} }`}
        </style>
      </body>
    </html>
  );
}
