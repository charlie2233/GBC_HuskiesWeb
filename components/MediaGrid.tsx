import Image from "next/image";
import { AtSign, ExternalLink, Play, UserRound } from "lucide-react";

const media = [
  {
    src: "/media/instagram/made-hoops-rosters.jpg",
    alt: "GBC Huskies MADE Hoops summer schedule graphic from Instagram",
    label: "MADE Hoops schedule",
    tag: "Recruiting",
    url: "https://www.instagram.com/p/DXhlRQRjSLh/",
    fit: "contain",
    bg: "bg-white",
  },
  {
    src: "/media/instagram/made-hoops-west-mania.jpg",
    alt: "GBC Huskies 15U team photo from MADE Hoops West Mania",
    label: "15U West Mania",
    tag: "Team result",
    url: "https://www.instagram.com/p/DXVzpu5lc5m/",
    fit: "cover",
    bg: "bg-[#071827]",
  },
  {
    src: "/media/instagram/best-of-west-champs.jpg",
    alt: "GBC Huskies Best of the West Showdown champions photo",
    label: "Best of the West",
    tag: "Champions",
    url: "https://www.instagram.com/p/DPu_Y6mjq6f/",
    fit: "cover",
    bg: "bg-[#071827]",
  },
  {
    src: "/media/instagram/aau-club-team.jpg",
    alt: "GBC Huskies AAU club team information graphic from Instagram",
    label: "Club team info",
    tag: "Program",
    url: "https://www.instagram.com/p/DV6webKEna1/",
    fit: "contain",
    bg: "bg-[#dfeff3]",
  },
  {
    src: "/media/instagram/huskies-high-school.jpg",
    alt: "GBC Huskies high school progression post from Instagram",
    label: "High school path",
    tag: "Development",
    url: "https://www.instagram.com/p/DRc1xDykmnn/",
    fit: "cover",
    bg: "bg-[#071827]",
  },
  {
    src: "/media/instagram/support-fundraiser.jpg",
    alt: "GBC Huskies GoFundMe support graphic from Instagram",
    label: "Help the Huskies",
    tag: "Support",
    url: "https://www.instagram.com/p/DPwwqI2EoaC/",
    fit: "contain",
    bg: "bg-white",
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
            <a
              key={item.src}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-lg ${item.bg} shadow-[0_18px_42px_rgba(7,24,39,0.12)]`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={720}
                className={`aspect-square h-full w-full ${item.fit === "contain" ? "object-contain p-2" : "object-cover"} transition duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-x-0 bottom-0 flex min-h-16 items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-8 text-white">
                <span>
                  <span className="block text-[11px] font-black uppercase tracking-wide text-[#b8d8ea]">
                    {item.tag}
                  </span>
                  <span className="block text-sm font-black">{item.label}</span>
                </span>
                {index === 4 ? <Play size={18} aria-hidden /> : <ExternalLink size={17} aria-hidden />}
              </div>
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[#1f2933]/64">
          Media sourced from public @gbc_huskies Instagram posts. Use only approved
          player photos and videos on the public website.
        </p>
      </div>
    </section>
  );
}
