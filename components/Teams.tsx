import { ArrowRight, Users } from "lucide-react";

const teams = [
  {
    name: "14U / 8th Grade",
    text: "Competitive AAU team focused on development, tournament play, and preparing athletes for higher-level competition.",
  },
  {
    name: "16U",
    text: "Upper-level team experience for players looking to compete in regional and national tournament settings.",
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
              GBC Huskies provides competitive team opportunities for athletes
              ready to train, compete, and represent the program in tournament play.
            </p>
          </div>
          <p className="max-w-sm rounded-lg border border-[#071827]/12 bg-white p-4 text-sm leading-6 text-[#1f2933]/72">
            Full rosters are not listed here unless GBC Huskies provides
            permission and verified roster information.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {teams.map((team) => (
            <article key={team.name} className="rounded-lg bg-white p-6 shadow-[0_18px_42px_rgba(7,24,39,0.08)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                <Users size={28} aria-hidden />
              </div>
              <h3 className="font-display text-5xl leading-none text-[#071827]">{team.name}</h3>
              <p className="mt-4 text-base leading-7 text-[#1f2933]/78">{team.text}</p>
              <a
                href="#contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                Ask About This Team
                <ArrowRight size={18} aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
