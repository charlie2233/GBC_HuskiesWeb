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
import { getFundraiserStats } from "@/lib/fundraiser";
import { buildMetadata } from "@/lib/metadata";
import { siteDescription } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies | Youth Basketball Program & Player Development",
  description: siteDescription,
  path: "/",
});

export default async function Home() {
  const fundraiser = await getFundraiserStats();

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero />
        <FundraiserStrip fundraiser={fundraiser} />
        <HomeActions />
        <Highlights />
        <ParentQuickAnswers />
        <MediaGrid />
        <Tournaments />
        <Support fundraiser={fundraiser} />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
