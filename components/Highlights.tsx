import { CalendarDays, Dumbbell, Heart, Target, Trophy } from "lucide-react";

const highlights = [
  {
    title: "Skills Development",
    text: "Fundamentals. IQ. Repetition.",
    icon: Target,
  },
  {
    title: "Strength & Conditioning",
    text: "Train smart. Compete harder.",
    icon: Dumbbell,
  },
  {
    title: "MADE Hoops Events",
    text: "Compete against the best.",
    icon: CalendarDays,
  },
  {
    title: "2025 Coca Cola Nationals",
    text: "14U Champions.",
    icon: Trophy,
  },
  {
    title: "Support Our Season",
    text: "Help us get to every court.",
    icon: Heart,
  },
];

export default function Highlights() {
  return (
    <section aria-label="GBC Huskies program highlights" className="hero-feature-strip relative overflow-hidden text-white">
      <div className="section-shell relative grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map(({ title, text, icon: Icon }) => (
          <a
            key={title}
            href={title === "Support Our Season" ? "#support" : title === "MADE Hoops Events" ? "#tournaments" : "#contact"}
            className="feature-strip-item group flex min-h-24 items-center gap-4 border-white/10 px-4 py-4 transition hover:bg-white/[0.06] sm:border-r"
          >
            <Icon className="h-8 w-8 shrink-0 text-[#b8d8ea] transition group-hover:text-[#d71920]" aria-hidden />
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.06em] text-white">{title}</span>
              <span className="mt-1 block text-xs font-semibold leading-5 text-white/62">{text}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
