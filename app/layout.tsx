import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import RouteTransitions from "@/components/RouteTransitions";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { siteDescription } from "@/lib/siteConfig";
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
  metadataBase: new URL("https://gbchuskies.com"),
  ...buildMetadata({
    title: "GBC Huskies | Youth Basketball Program & Player Development",
    description: siteDescription,
    path: "/",
  }),
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
      <body>
        <StructuredData />
        <RouteTransitions>{children}</RouteTransitions>
        <GoogleAnalytics />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
