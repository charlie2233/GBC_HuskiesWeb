import { Activity, Dumbbell, ShieldPlus } from "lucide-react";

const focusAreas = [
  "Speed and agility",
  "Balance and coordination",
  "Strength basics",
  "Conditioning",
  "Injury prevention habits",
  "Explosiveness",
  "Basketball-specific movement",
];

export default function StrengthConditioning() {
  return (
    <section id="strength" className="court-texture relative bg-[#101820] py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#d71920]">
            <Dumbbell size={31} aria-hidden />
          </div>
          <h2 className="font-display text-6xl leading-none md:text-7xl">
            Build the Athlete, Not Just the Player
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/76">
            GBC Huskies emphasizes athletic development through strength,
            conditioning, movement, and durability. Training is designed to help
            players become stronger, faster, more balanced, and more prepared
            for competitive basketball.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div
              key={area}
              className="flex min-h-[76px] items-center gap-3 rounded-lg border border-white/12 bg-white/8 px-4 py-3"
            >
              {index % 2 === 0 ? (
                <Activity className="h-6 w-6 flex-none text-[#b8d8ea]" aria-hidden />
              ) : (
                <ShieldPlus className="h-6 w-6 flex-none text-[#d71920]" aria-hidden />
              )}
              <span className="font-bold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
