import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import { buildMetadata } from "@/lib/metadata";
import { getInquiryProgram } from "@/lib/contactInquiry";

export const metadata: Metadata = buildMetadata({
  title: "Contact GBC Huskies | Youth Basketball Program",
  description:
    "Contact GBC Huskies to learn more about basketball training, team opportunities, player development, payments, and program information.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: {
  searchParams: Promise<{ program?: string | string[] }>;
}) {
  const program = getInquiryProgram((await searchParams).program);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <ContactForm key={program?.id ?? "general"} standalone initialProgram={program?.name} />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
