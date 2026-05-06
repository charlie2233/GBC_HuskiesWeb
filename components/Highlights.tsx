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
    <section aria-label="GBC Huskies season pulse" className="relative overflow-hidden bg-[#06111d] py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-[#b8d8ea]/28" aria-hidden />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-[linear-gradient(110deg,rgba(215,25,32,0.18),transparent_66%)]" aria-hidden />
      <div className="section-shell relative">
        <div className="mb-4 flex items-end justify-between gap-5">
          <div>
            <h2 className="font-display text-4xl leading-none text-white md:text-5xl">
              Season Pulse
            </h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/64">
              The quick read on where the Huskies are competing, building, and rallying support.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-lg border border-white/12 bg-white/8 px-4 py-3 text-sm font-black text-white md:flex">
            <Trophy size={18} className="text-[#d71920]" aria-hidden />
            2025 14U National Champions
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map(({ title, stat, text, icon: Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#d71920] transition group-hover:bg-[#b8d8ea]" aria-hidden />
            <div className="absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent,rgba(184,216,234,0.08))]" aria-hidden />
            <Icon className="mb-5 h-7 w-7 text-[#d71920]" aria-hidden />
            <p className="font-display text-4xl leading-none text-[#b8d8ea]">{stat}</p>
            <h3 className="mt-2 text-base font-black text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/64">{text}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
