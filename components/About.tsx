import { Brain, ShieldCheck, UsersRound } from "lucide-react";

const pillars = [
  {
    title: "Development",
    text: "Building fundamentals, confidence, basketball IQ, and game-ready skills.",
    icon: Brain,
  },
  {
    title: "Competition",
    text: "Giving players real tournament experience against strong competition.",
    icon: ShieldCheck,
  },
  {
    title: "Culture",
    text: "Creating a team-first environment based on effort, accountability, and growth.",
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
            GBC Huskies is an Orange County-based AAU basketball program focused
            on developing young athletes through skills training, strength &
            conditioning, competitive team play, and local/national tournament
            competition.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#1f2933]/80">
            The program is built around discipline, teamwork, player growth, and
            preparing athletes to compete at higher levels.
          </p>
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
