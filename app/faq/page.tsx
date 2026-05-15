import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, LockKeyhole, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { faqItems } from "@/lib/faq";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies FAQ | Parent Questions & Program Process",
  description:
    "Answers for GBC Huskies families about joining a team, training expectations, Zelle and cash payments, team store timing, reviews, player photo privacy, and contact expectations.",
  path: "/faq",
});

const trustNotes = [
  {
    title: "No private payment data",
    text: "The website does not collect card numbers, bank details, SSNs, tax info, Zelle logins, or payment passwords.",
    icon: LockKeyhole,
  },
  {
    title: "Manual review approval",
    text: "Testimonials are reviewed before public display. Only approved public review text goes into site content.",
    icon: ShieldCheck,
  },
  {
    title: "Clear response path",
    text: "Families can use the contact page for team questions, training questions, payment questions, and store timing.",
    icon: Clock,
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Parent process guide"
          title="GBC Huskies FAQ"
          description="Clear answers for families about joining, training expectations, payments, store timing, reviews, player privacy, and how to contact the program."
          note="FAQ answers are editable site content and should use only approved public program information."
          topics={getSeoTopicsForPath("/faq")}
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-3">
              {trustNotes.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-lg border border-[#071827]/12 bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                    <Icon size={24} aria-hidden />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-[#071827]">{title}</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/72">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
              <aside className="rounded-lg bg-[#071827] p-6 text-white shadow-[0_22px_54px_rgba(7,24,39,0.2)] md:sticky md:top-28">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8d8ea]">Quick process</p>
                <h2 className="mt-3 font-display text-5xl leading-none">Before You Send Anything</h2>
                <ul className="mt-5 grid gap-3">
                  {[
                    "Confirm team, training, store, or payment details with the coach.",
                    "Use clear payment memos for Zelle or cash records.",
                    "Do not submit sensitive private information through public forms.",
                    "Only approved photos and approved public reviews should appear on the site.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/72">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  data-analytics-event="click_contact"
                  data-analytics-label="FAQ contact coach"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
                >
                  Contact GBC
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </aside>

              <div className="grid gap-4">
                {faqItems.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-lg border border-[#071827]/12 bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)] md:p-6"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d71920]">{item.category}</p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-[#071827]">{item.question}</h2>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[#1f2933]/74">{item.answer}</p>
                    {item.links?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            data-analytics-event={link.event}
                            data-analytics-label={`FAQ link ${link.label}`}
                            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#071827]/12 bg-[#f4f6f8] px-4 text-sm font-black text-[#071827] transition hover:border-[#d71920]/36 hover:text-[#d71920]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
