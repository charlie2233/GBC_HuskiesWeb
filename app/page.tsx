import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
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
    "Gilliam Basketball Club, home of GBC Huskies, is a youth basketball program focused on fundamentals, player development, teamwork, discipline, sportsmanship, and helping athletes grow on and off the court.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero />
        <Highlights />
        <HomeActions />
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
