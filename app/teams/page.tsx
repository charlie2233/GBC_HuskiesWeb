import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import BrandName from "@/components/BrandName";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Teams from "@/components/Teams";
import Tournaments from "@/components/Tournaments";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Teams | Youth Basketball Program",
  description:
    "Learn about GBC Huskies youth basketball teams, player development, training, teamwork, and program opportunities.",
  path: "/teams",
});

export default function TeamsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Youth basketball teams"
          title="GBC Huskies Teams"
          description="GBC Huskies youth basketball teams are built around player development, competitive standards, teamwork, discipline, sportsmanship, and tournament experience."
          note={
            <>
              <BrandName /> does not publish full rosters unless families and the program approve.
            </>
          }
        />

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
            <div>
              <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
                Boys Basketball Program Built for Growth
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#1f2933]/78">
                The program gives athletes a place to train, compete, and learn
                how to represent a youth basketball team with effort, accountability,
                and team-first habits.
              </p>
            </div>
            <div className="rounded-lg border border-[#071827]/12 bg-[#f4f6f8] p-5">
              <ShieldCheck className="h-10 w-10 text-[#d71920]" aria-hidden />
              <p className="mt-4 text-sm font-bold leading-6 text-[#1f2933]/72">
                Team details can change by season. Contact GBC Huskies for current
                roster openings, practice details, tournament plans, and team fees.
              </p>
            </div>
          </div>
        </section>

        <Teams />
        <Tournaments />

        <section className="bg-[#071827] py-16 text-white">
          <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-5xl leading-none">Ask About Team Opportunities</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                Families can ask about youth basketball teams, AAU basketball tournament schedules, and player development expectations.
              </p>
            </div>
            <Link
              href="/contact"
              data-analytics-event="click_contact"
              data-analytics-label="Teams page contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Contact the Program
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
