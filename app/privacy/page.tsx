import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | GBC Huskies Basketball",
  description:
    "Read how the GBC Huskies website uses analytics, contact forms, review forms, and third-party payment links while avoiding private payment data collection.",
  path: "/privacy",
});

const policyItems = [
  "The site may use analytics to understand website traffic, popular pages, and button clicks.",
  "Payments are handled by third-party payment processors such as Stripe when public payment links are enabled.",
  "The website does not collect or store bank information, card details, tax information, SSNs, or Stripe passwords.",
  "Contact and review forms may collect submitted names, emails, phone numbers, player/team context, and messages.",
  "Visitor data is used to improve the website, understand program interest, and make the site easier for families to use.",
  "The program should avoid collecting unnecessary personal information from or about youth players.",
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Website privacy"
          title="Privacy Policy"
          description="A plain-language privacy note for families, players, and supporters using the GBC Huskies website."
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div className="section-shell max-w-4xl">
            <div className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-[0_16px_36px_rgba(7,24,39,0.08)] md:p-8">
              <h2 className="font-display text-5xl leading-none text-[#071827]">How This Site Handles Data</h2>
              <div className="mt-6 grid gap-3">
                {policyItems.map((item) => (
                  <p key={item} className="rounded-lg bg-[#f4f6f8] p-4 text-sm font-semibold leading-6 text-[#1f2933]/76">
                    {item}
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold leading-6 text-[#1f2933]/70">
                For questions about this website privacy note or to request changes
                to submitted contact/review information, contact the program through
                the official contact page.
              </p>

              <Link
                href="/contact"
                data-analytics-event="click_contact"
                data-analytics-label="Privacy page contact"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                Contact GBC Huskies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
