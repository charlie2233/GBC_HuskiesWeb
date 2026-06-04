import { CircleDot, Footprints, Gauge, Hand, Shield, Target } from "lucide-react";
import BrandName from "./BrandName";

const skills = [
  {
    title: "Ball Handling",
    text: "Control, pace, pressure handling, change of direction",
    icon: Hand,
  },
  {
    title: "Shooting",
    text: "Mechanics, balance, footwork, catch-and-shoot reps",
    icon: Target,
  },
  {
    title: "Finishing",
    text: "Contact finishes, layup packages, touch, angles",
    icon: CircleDot,
  },
  {
    title: "Defense",
    text: "Stance, slides, closeouts, toughness",
    icon: Shield,
  },
  {
    title: "Footwork",
    text: "Balance, pivots, cuts, movement efficiency",
    icon: Footprints,
  },
  {
    title: "Basketball IQ",
    text: "Reads, spacing, decision-making, game awareness",
    icon: Gauge,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
            Train With Purpose
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#1f2933]/80">
            <BrandName /> skills development is built around the details that
            translate to real games: ball handling, shooting, footwork,
            finishing, defense, decision-making, and basketball IQ.
          </p>
          <p className="mt-4 text-base leading-7 text-[#1f2933]/72">
            Skills training incorporates concepts and training experience from
            current and former professional players as well as collegiate
            basketball players.
          </p>
        </div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-3">
          {skills.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="min-h-[210px] min-w-[76vw] snap-start rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5 sm:min-w-0"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d71920] text-white">
                <Icon size={24} aria-hidden />
              </div>
              <h3 className="text-2xl font-black text-[#071827]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#1f2933]/76">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
