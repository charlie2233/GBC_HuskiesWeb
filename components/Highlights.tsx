import { CalendarDays, HeartHandshake, Medal, Shirt, Trophy, Users } from "lucide-react";

const highlights = [
  {
    title: "Roster Call",
    stat: "13U-15U",
    text: "Spring/summer MADE Hoops roster building is active.",
    icon: Users,
  },
  {
    title: "Road Events",
    stat: "5 stops",
    text: "Corona, Anaheim, and Las Vegas tournament weekends.",
    icon: CalendarDays,
  },
  {
    title: "Recent Result",
    stat: "15U",
    text: "3-1 in division play at MADE Hoops West Mania.",
    icon: Medal,
  },
  {
    title: "Team Standard",
    stat: "All in",
    text: "Effort, accountability, toughness, and togetherness.",
    icon: Shirt,
  },
  {
    title: "Support Run",
    stat: "70%",
    text: "GoFundMe support helps with fees, travel, and program needs.",
    icon: HeartHandshake,
  },
];

export default function Highlights() {
  return (
    <section aria-label="GBC Huskies season pulse" className="bg-[#f4f6f8] py-8">
      <div className="section-shell">
        <div className="mb-4 flex items-end justify-between gap-5">
          <div>
            <h2 className="font-display text-4xl leading-none text-[#071827] md:text-5xl">
              Season Pulse
            </h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/68">
              The quick read on where the Huskies are competing, building, and rallying support.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-lg bg-[#071827] px-4 py-3 text-sm font-black text-white md:flex">
            <Trophy size={18} className="text-[#d71920]" aria-hidden />
            2025 14U National Champions
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map(({ title, stat, text, icon: Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-lg border border-[var(--line)] bg-white p-4 shadow-[0_12px_28px_rgba(7,24,39,0.07)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#d71920] transition group-hover:bg-[#b8d8ea]" aria-hidden />
            <Icon className="mb-5 h-7 w-7 text-[#d71920]" aria-hidden />
            <p className="font-display text-4xl leading-none text-[#071827]">{stat}</p>
            <h3 className="mt-2 text-base font-black text-[#071827]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#1f2933]/76">{text}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
