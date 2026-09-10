import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqExplorer from "@/components/FaqExplorer";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { faqItems } from "@/lib/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies FAQ | Parent Questions & Program Process",
  description:
    "Answers for GBC Huskies families about joining a team, training expectations, Zelle and cash payments, team store timing, reviews, player photo privacy, and contact expectations.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="For players and families"
          title="GBC Huskies FAQ"
          description="Joining a team, getting ready for training, supporting the program. Your questions, answered."
        />
        <section className="bg-[#f4f6f8] py-12 md:py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <FaqExplorer items={faqItems} />
            <aside className="border-t border-[#071827]/15 pt-6 lg:sticky lg:top-28 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
              <h2 className="font-display text-3xl text-[#071827]">Let&apos;s Talk Basketball</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#1f2933]/80">
                Team openings and training schedules can change. Coach Jay can help you find the right next step.
              </p>
              <Link
                href="/contact"
                data-analytics-event="click_contact"
                data-analytics-label="FAQ contact coach"
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:bg-[#ba1017]"
              >
                Contact GBC
                <ArrowRight size={18} aria-hidden />
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
