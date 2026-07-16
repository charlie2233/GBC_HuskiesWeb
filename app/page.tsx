import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FundraiserStrip from "@/components/FundraiserStrip";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import HomeActions from "@/components/HomeActions";
import MediaGrid from "@/components/MediaGrid";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import ParentQuickAnswers from "@/components/ParentQuickAnswers";
import Support from "@/components/Support";
import Tournaments from "@/components/Tournaments";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies | Youth Basketball Program & Player Development",
  description:
    "Gilliam Basketball Club, home of GBC Huskies, is an Orange County youth basketball program and 2026 MADE Hoops Vegas Live Session 1 15U Dodgers Division champion.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero />
        <FundraiserStrip />
        <HomeActions />
        <Highlights />
        <ParentQuickAnswers />
        <MediaGrid />
        <Tournaments />
        <Support />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
