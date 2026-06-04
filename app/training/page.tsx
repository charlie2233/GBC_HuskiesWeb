import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Dumbbell, Target } from "lucide-react";
import Coaches from "@/components/Coaches";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
import StrengthConditioning from "@/components/StrengthConditioning";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Basketball Training | Player Development & Fundamentals",
  description:
    "GBC Huskies basketball training led by Coach Jay focuses on fundamentals, skill development, discipline, teamwork, and helping athletes grow on and off the court.",
  path: "/training",
});

export default function TrainingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Player development"
          title="GBC Huskies Basketball Training"
          description="Basketball training for young athletes focused on fundamentals, ball handling, shooting, footwork, defense, basketball IQ, strength, conditioning, teamwork, discipline, and work ethic."
          note={
            <>
              Training details can vary by age group, team, and season.
            </>
          }
          topics={getSeoTopicsForPath("/training")}
        />

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-6">
              <Target className="h-10 w-10 text-[#d71920]" aria-hidden />
              <h2 className="mt-5 font-display text-5xl leading-none text-[#071827]">Basketball Skills Training</h2>
              <p className="mt-4 text-base font-semibold leading-7 text-[#1f2933]/74">
                Players work on game-ready basketball fundamentals, decision-making,
                spacing, finishing, shooting, ball handling, and defensive habits.
              </p>
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[#071827] p-6 text-white">
              <Dumbbell className="h-10 w-10 text-[#b8d8ea]" aria-hidden />
              <h2 className="mt-5 font-display text-5xl leading-none">Athlete Development</h2>
              <p className="mt-4 text-base font-semibold leading-7 text-white/70">
                Strength and conditioning work supports balance, coordination,
                speed, agility, durability, and the ability to compete harder on
                tournament weekends.
              </p>
            </article>
          </div>
        </section>

        <Skills />
        <StrengthConditioning />
        <Coaches />

        <section className="bg-[#f4f6f8] py-16">
          <div className="section-shell flex flex-col gap-4 rounded-lg border border-[#071827]/12 bg-white p-6 shadow-[0_16px_36px_rgba(7,24,39,0.08)] md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-5xl leading-none text-[#071827]">Ready to Train?</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/70">
                Contact the program to ask about basketball player development sessions and team basketball training.
              </p>
            </div>
            <Link
              href="/contact"
              data-analytics-event="click_contact"
              data-analytics-label="Training page contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Contact GBC Huskies
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
