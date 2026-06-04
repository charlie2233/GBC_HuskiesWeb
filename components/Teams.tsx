import Link from "next/link";
import { ArrowRight, FileText, Phone, Users } from "lucide-react";
import { coachPhoneHref, registrationFormUrl } from "@/lib/siteConfig";
import BrandName from "./BrandName";

const teams = [
  {
    name: "9U / 3rd Grade",
    text: "Introductory team experience focused on fundamentals, effort, listening habits, and learning how to compete.",
  },
  {
    name: "10U / 4th Grade",
    text: "Development-first basketball environment built around skill growth, teamwork, and confidence.",
  },
  {
    name: "11U / 5th Grade",
    text: "Fundamental team basketball with an emphasis on spacing, defense, ball movement, and accountability.",
  },
  {
    name: "12U / 6th Grade",
    text: "Competitive habits, skill work, and team concepts for athletes preparing for stronger tournament play.",
  },
  {
    name: "13U / 7th Grade",
    text: "AAU team development for athletes ready to train consistently and compete with a higher team standard.",
  },
  {
    name: "14U / 8th Grade",
    text: "Tournament-focused team experience built around development, discipline, and preparation for high school basketball.",
  },
  {
    name: "15U / 9th Grade",
    text: "High school transition team experience for players building confidence, role clarity, and competitive toughness.",
  },
  {
    name: "16U / 10th Grade",
    text: "Upper-level team experience with recruiting awareness and program resources designed to help players prepare for college opportunities.",
  },
  {
    name: "17U / 11th Grade",
    text: "Recruiting-minded team experience that uses program resources, exposure events, and player development to support athletes working toward college basketball.",
  },
];

export default function Teams() {
  return (
    <section id="teams" className="bg-[#f4f6f8] py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
              Huskies Teams
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2933]/80">
              <BrandName /> provides team opportunities from 9U/3rd grade
              through 17U/11th grade for athletes ready to train, compete, and
              represent the program in tournament play.
            </p>
            <p className="mt-4 text-base leading-7 text-[#1f2933]/72">
              We currently compete in MADE Hoops events and look forward to
              participating in the Jr. Nike EYBL in the near future. Families
              can contact Coach Jay by DM, call/text, or registration form.
            </p>
          </div>
          <p className="max-w-sm rounded-lg border border-[#071827]/12 bg-white p-4 text-sm leading-6 text-[#1f2933]/72">
            Full rosters are not listed here unless <BrandName /> provides
            permission and verified roster information.
          </p>
        </div>

        <div className="mt-8 grid gap-3 rounded-lg border border-[#071827]/12 bg-white p-4 shadow-[0_14px_34px_rgba(7,24,39,0.06)] sm:grid-cols-2">
          <a
            href={registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_join_program"
            data-analytics-label="Teams section registration form"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#071827] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#10243a]"
          >
            <FileText size={18} aria-hidden />
            Registration Form
          </a>
          <a
            href={coachPhoneHref}
            data-analytics-event="click_phone"
            data-analytics-label="Teams section phone"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#071827]/18 px-5 font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:border-[#071827]"
          >
            <Phone size={18} aria-hidden />
            Call/Text Coach Jay
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => (
            <article key={team.name} className="rounded-lg bg-white p-6 shadow-[0_18px_42px_rgba(7,24,39,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                <Users size={28} aria-hidden />
              </div>
              <h3 className="font-display text-5xl leading-none text-[#071827]">{team.name}</h3>
              <p className="mt-4 text-base leading-7 text-[#1f2933]/78">{team.text}</p>
              <Link
                href="/contact"
                data-analytics-event="click_contact"
                data-analytics-label={`Ask about ${team.name}`}
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                Ask About This Team
                <ArrowRight size={18} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
