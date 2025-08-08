import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "./components/floating-nav";
import ClientLayout from "./components/client-layout";
import PageTransition from "./components/page-transition";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
        <FloatingNav />
      </body>
    </html>
  );
}
