import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JusteLien : Le bon avocat. Pour votre situation. (Québec)",
  description:
    "Votre besoin. Votre région. Votre choix. Trouver le bon avocat au Québec en droit du travail, famille, affaires, immobilier, civil et pénal.",
  keywords: [
    "avocat Québec",
    "trouver un avocat",
    "Barreau du Québec",
    "droit du travail",
    "droit de la famille",
    "droit des affaires",
    "avocat Montréal",
    "avocat Québec",
  ],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M14 8 C8 8 5 13 5 20 C5 27 8 32 14 32 C17 32 20 29 22 25 L20 23 C18 26 16 28 14 28 C10 28 8 24 8 20 C8 16 10 12 14 12 C18 12 21 16 23 20 L25 18 C22 13 19 8 14 8 Z' fill='%23deb887'/%3E%3Cpath d='M26 32 C32 32 35 27 35 20 C35 13 32 8 26 8 C23 8 20 11 18 15 L20 17 C22 14 24 12 26 12 C30 12 32 16 32 20 C32 24 30 28 26 28 C22 28 19 24 17 20 L15 22 C18 27 21 32 26 32 Z' fill='%23deb887'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1c18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-[#0a1815] text-[#16241f] font-sans antialiased selection:bg-[#164e43] selection:text-white">
        {children}
      </body>
    </html>
  );
}
