import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, UsersRound } from "lucide-react";
import BrandName from "@/components/BrandName";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
import { programStatements } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "About GBC Huskies | Mission, Vision & Youth Basketball Values",
  description:
    "Learn about the GBC Huskies mission, vision, values, DEFENSE slogan, and player development approach built around fundamentals, discipline, teamwork, work ethic, sportsmanship, and life skills.",
  path: "/about",
});

const values = [
  {
    title: "Mission",
    text: programStatements.mission,
    icon: ShieldCheck,
  },
  {
    title: "Vision",
    text: programStatements.vision,
    icon: HeartHandshake,
  },
  {
    title: "Values",
    text: programStatements.values,
    icon: UsersRound,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Mission and values"
          title="About GBC Huskies"
          description="GBC Huskies basketball is built for player development, fundamentals, teamwork, discipline, sportsmanship, work ethic, and competitive youth basketball growth."
          note={
            <>
              <BrandName /> is listed as an Orange County AAU basketball program based on existing site content.
            </>
          }
          topics={getSeoTopicsForPath("/about")}
        />

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell">
            <div className="max-w-4xl">
              <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
                Mission, Vision, and Values
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#1f2933]/78">
                <BrandName /> is built around structure, attention to detail,
                fundamental skill, player growth, and helping young athletes
                become better players and people.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {values.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                    <Icon size={24} aria-hidden />
                  </div>
                  <h3 className="text-2xl font-black text-[#071827]">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-lg bg-[#071827] p-5 text-white md:grid-cols-[1fr_0.7fr] md:p-7">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b8d8ea]">About the program</p>
                <p className="mt-4 text-base font-semibold leading-7 text-white/78">
                  {programStatements.about}
                </p>
              </div>
              <div className="rounded-lg border border-[#b8d8ea]/18 bg-white/8 p-5">
                <p className="font-display text-6xl leading-none text-[#d71920]">
                  {programStatements.slogan}
                </p>
                <p className="mt-3 text-xl font-black leading-7 text-white">
                  {programStatements.sloganMeaning}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/training"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                Explore Training
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/contact"
                data-analytics-event="click_contact"
                data-analytics-label="About page contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#071827]/18 px-5 font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:border-[#071827]"
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
