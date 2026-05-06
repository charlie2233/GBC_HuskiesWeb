import Image from "next/image";
import { AtSign, Play, UserRound } from "lucide-react";

const media = [
  {
    src: "/media/team-huddle.svg",
    alt: "GBC Huskies team huddle graphic",
    label: "Team moments",
  },
  {
    src: "/media/training-night.svg",
    alt: "GBC Huskies training graphic",
    label: "Training clips",
  },
  {
    src: "/media/championship-banner.svg",
    alt: "GBC Huskies championship banner graphic",
    label: "Championship result",
  },
  {
    src: "/media/tournament-card.svg",
    alt: "GBC Huskies tournament schedule graphic",
    label: "Tournament graphics",
  },
  {
    src: "/media/skills-reps.svg",
    alt: "GBC Huskies skills reps graphic",
    label: "Skills reps",
  },
  {
    src: "/media/support-post.svg",
    alt: "GBC Huskies support post graphic",
    label: "Support updates",
  },
];

export default function MediaGrid() {
  return (
    <section id="media" className="bg-[#f4f6f8] py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
              Follow the Huskies
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2933]/80">
              Stay connected with GBC Huskies for team updates, tournament
              schedules, highlights, photos, videos, and program announcements.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href="https://www.instagram.com/gbc_huskies/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#071827] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#10243a]"
            >
              <AtSign size={19} aria-hidden />
              Instagram @gbc_huskies
            </a>
            <a
              href="https://www.instagram.com/coachjaygill/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#071827]/18 px-5 font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:border-[#071827]"
            >
              <UserRound size={19} aria-hidden />
              Coach Jay
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {media.map((item, index) => (
            <article key={item.src} className="group relative overflow-hidden rounded-lg bg-[#071827] shadow-[0_18px_42px_rgba(7,24,39,0.12)]">
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={720}
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-16 items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-8 text-white">
                <span className="text-sm font-black">{item.label}</span>
                {index === 1 || index === 4 ? <Play size={18} aria-hidden /> : null}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[#1f2933]/64">
          Use only approved player photos and videos on the public website.
        </p>
      </div>
    </section>
  );
}
