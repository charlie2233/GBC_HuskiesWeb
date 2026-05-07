import About from "@/components/About";
import Championship from "@/components/Championship";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import MediaGrid from "@/components/MediaGrid";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import StrengthConditioning from "@/components/StrengthConditioning";
import Support from "@/components/Support";
import Teams from "@/components/Teams";
import Tournaments from "@/components/Tournaments";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Hero />
        <Highlights />
        <MediaGrid />
        <About />
        <Skills />
        <StrengthConditioning />
        <Teams />
        <Tournaments />
        <Championship />
        <Support />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
