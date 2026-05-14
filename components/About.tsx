import { Brain, ShieldCheck, UsersRound } from "lucide-react";
import { programFullName, programStatements } from "@/lib/siteConfig";
import BrandName from "./BrandName";

const pillars = [
  {
    title: "Development",
    text: "Teaching fundamental basketball skills through game play, training, and attention to detail.",
    icon: Brain,
  },
  {
    title: "Structure",
    text: "Maximizing each player's potential through organization, standards, and consistent habits.",
    icon: ShieldCheck,
  },
  {
    title: "Life Skills",
    text: "Building work ethic, teamwork, sportsmanship, discipline, and service to the community.",
    icon: UsersRound,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f4f6f8] py-20 md:py-28">
      <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
            Built for Development and Competition
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#1f2933]/80">
            {programFullName}, home of <BrandName />, is designed to emphasize
            fundamental basketball skills through gameplay and training tailored
            to each athlete&apos;s needs and skill level.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#1f2933]/80">
            {programStatements.mission}
          </p>
          <div className="mt-6 rounded-lg border border-[#071827]/12 bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d71920]">
              {programStatements.slogan}
            </p>
            <p className="mt-2 text-lg font-black leading-7 text-[#071827]">
              {programStatements.sloganMeaning}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {pillars.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg bg-white p-5 shadow-[0_18px_38px_rgba(7,24,39,0.09)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="text-xl font-black text-[#071827]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#1f2933]/76">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
