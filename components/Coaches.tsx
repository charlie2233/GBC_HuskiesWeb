import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AtSign, ClipboardCheck, Phone, ShieldCheck, Trophy, UsersRound } from "lucide-react";
import {
  areaServed,
  coachInfluence,
  coachInstagramUrl,
  coachPhoneDisplay,
  coachPhoneHref,
  coachProfile,
  programFullName,
  programStatements,
} from "@/lib/siteConfig";

const coachStandards = [
  {
    title: "Fundamentals First",
    text: "Teach the game in detail so every player can become efficient in more areas of basketball.",
    icon: ClipboardCheck,
  },
  {
    title: "Player Growth",
    text: "Build confidence, work ethic, discipline, and basketball IQ through structured training.",
    icon: UsersRound,
  },
  {
    title: "Team Standards",
    text: "Create habits around accountability, effort, sportsmanship, and the DEFENSE program slogan.",
    icon: ShieldCheck,
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="court-texture relative overflow-hidden bg-[#071827] py-20 text-white md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#d71920]" aria-hidden />
      <div className="absolute left-[-7rem] top-12 h-72 w-72 rounded-full bg-[#d71920]/14 blur-3xl" aria-hidden />
      <div className="absolute right-[-8rem] bottom-0 h-80 w-80 rounded-full bg-[#b8d8ea]/12 blur-3xl" aria-hidden />

      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">Our coaches</p>
          <h2 className="mt-3 font-display text-6xl leading-none md:text-7xl">
            Training Led With Standards
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/74">
            {programFullName} training is guided by coaches who care about the
            full player: fundamentals, discipline, teamwork, sportsmanship, and
            growth on and off the basketball court.
          </p>
        </div>

        <article className="mt-10 grid overflow-hidden rounded-lg border border-white/12 bg-white/[0.055] shadow-[0_28px_70px_rgba(0,0,0,0.28)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative min-h-[410px] bg-[#dfeff3]">
            <Image
              src={coachProfile.image}
              alt={coachProfile.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-contain p-3"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071827] via-[#071827]/70 to-transparent p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8d8ea]">
                Public GBC source graphic
              </p>
              <p className="mt-1 text-sm font-bold text-white/76">
                {areaServed} &bull; training, tournaments, and player development
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-[#d71920] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                {coachProfile.title}
              </span>
              <span className="rounded-lg border border-[#b8d8ea]/26 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#b8d8ea]">
                {coachProfile.instagramHandle}
              </span>
            </div>

            <h3 className="mt-6 font-display text-6xl uppercase leading-none md:text-7xl">
              <span className="block text-[#d71920]">{coachProfile.displayName}</span>
              <span className="block text-white">{coachProfile.name}</span>
            </h3>

            <p className="mt-5 text-lg leading-8 text-white/76">{coachProfile.bio}</p>
            <p className="mt-4 border-l-4 border-[#d71920] pl-4 text-base font-semibold leading-7 text-white/70">
              {programStatements.values}
            </p>

            <div className="mt-6 rounded-lg border border-[#b8d8ea]/18 bg-[#06111d]/74 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d71920] text-white">
                  <Trophy size={24} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b8d8ea]">
                    {coachInfluence.title}
                  </p>
                  <h4 className="mt-2 text-xl font-black text-white">{coachInfluence.label}</h4>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    {coachInfluence.text}
                  </p>
                  <p className="mt-3 text-xs font-semibold leading-5 text-white/46">
                    {coachInfluence.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {coachStandards.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-lg border border-white/12 bg-[#06111d]/72 p-4">
                  <Icon className="h-7 w-7 text-[#b8d8ea]" aria-hidden />
                  <h4 className="mt-4 text-base font-black text-white">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={coachPhoneHref}
                data-analytics-event="click_phone"
                data-analytics-label="Coach section phone"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                <Phone size={18} aria-hidden />
                Call/Text Coach Jay: {coachPhoneDisplay}
              </a>
              <a
                href={coachInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="click_instagram"
                data-analytics-label="Coach section Instagram"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/30 bg-white/[0.055] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#b8d8ea]/60"
              >
                <AtSign size={18} aria-hidden />
                Coach Jay Instagram
              </a>
            </div>

            <Link
              href="/contact"
              data-analytics-event="click_contact"
              data-analytics-label="Coach section contact"
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/14 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ask About Training
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
