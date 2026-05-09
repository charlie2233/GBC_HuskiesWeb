import type { Metadata } from "next";
import BrandName from "@/components/BrandName";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";

export const metadata: Metadata = buildMetadata({
  title: "Contact GBC Huskies | Youth Basketball Program",
  description:
    "Contact GBC Huskies to learn more about basketball training, team opportunities, player development, payments, and program information.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Contact the program"
          title="Contact GBC Huskies"
          description="Reach out about youth basketball training, team opportunities, basketball skills training, tournament information, payments, sponsorship, or general program questions."
          note={
            <>
              <BrandName /> uses contact information already published on the current site.
            </>
          }
          topics={getSeoTopicsForPath("/contact")}
        />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
