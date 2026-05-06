import { Dumbbell, Medal, Plane, Shield, Zap } from "lucide-react";

const highlights = [
  {
    title: "AAU Basketball",
    text: "Competitive youth basketball program",
    icon: Shield,
  },
  {
    title: "Skills Development",
    text: "Game-speed player development",
    icon: Zap,
  },
  {
    title: "Strength & Conditioning",
    text: "Training built for athletic growth",
    icon: Dumbbell,
  },
  {
    title: "Local & National Tournaments",
    text: "Competitive tournament exposure",
    icon: Plane,
  },
  {
    title: "2025 Champions",
    text: "Coca Cola Nationals 14U Champions",
    icon: Medal,
  },
];

export default function Highlights() {
  return (
    <section aria-label="Program highlights" className="bg-white py-8">
      <div className="section-shell grid grid-cols-2 gap-3 md:grid-cols-5">
        {highlights.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-4 shadow-[0_12px_28px_rgba(7,24,39,0.07)]"
          >
            <Icon className="mb-4 h-7 w-7 text-[#d71920]" aria-hidden />
            <h2 className="text-base font-black text-[#071827]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#1f2933]/76">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
