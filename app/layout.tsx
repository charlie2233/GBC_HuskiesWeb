import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GBC Huskies Basketball | Orange County AAU Basketball Program",
  description:
    "GBC Huskies is an Orange County AAU basketball program focused on skills development, strength & conditioning, and local/national tournament competition.",
  keywords: [
    "GBC Huskies",
    "GBC Huskies Basketball",
    "Gilliam Basketball Club",
    "Orange County AAU basketball",
    "AAU basketball Orange County",
    "youth basketball training Orange County",
    "basketball skills development Orange County",
    "strength and conditioning basketball Orange County",
    "MADE Hoops basketball",
    "14U AAU basketball",
    "16U AAU basketball",
    "Coca Cola Nationals 14U Champions",
  ],
  openGraph: {
    title: "GBC Huskies Basketball",
    description:
      "Developing players. Building teams. Competing nationally.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#071827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
