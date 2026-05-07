import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Trophy } from "lucide-react";
import BrandName from "./BrandName";

const tournaments = [
  { date: "May 8-9", event: "SoCal Clash", location: "Corona, CA", note: "Opening road test" },
  { date: "May 15-17", event: "SoCal Live", location: "Anaheim, CA", note: "Local live weekend" },
  { date: "July 2-3", event: "SoCal Summer Tune-Up", location: "Corona, CA", note: "Summer prep" },
  { date: "July 8-10", event: "Vegas Summer Live S1", location: "Las Vegas, NV", note: "National-stage run" },
  { date: "July 11-12", event: "Vegas Summer Live S2", location: "Las Vegas, NV", note: "Finish the week" },
];

const madeHoopsSchedulePost = "https://www.instagram.com/p/DXhlRQRjSLh/";

const results = [
  {
    title: "MADE Hoops West Mania",
    detail: "15U went 3-1 in division play and 3-2 overall against gold-level competition.",
  },
  {
    title: "Best of the West Showdown",
    detail: "2025 Gold champions, with every win by double digits.",
  },
];

export default function Tournaments() {
  return (
    <section id="tournaments" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,#f4f6f8,transparent)]" aria-hidden />
      <div className="section-shell">
        <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <h2 className="font-display text-6xl leading-none text-[#071827] md:text-8xl">
              Road Weeks & Event Energy
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2933]/80">
              The Huskies season is built around training that shows up on
              tournament weekends: local tests, MADE Hoops exposure, and travel
              moments where the team standard has to travel too.
            </p>
            <a
              href="/contact"
              data-analytics-event="click_contact"
              data-analytics-label="Tournaments section contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-6 font-extrabold text-white shadow-[0_18px_34px_rgba(215,25,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Ask About Tournament Teams
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[#071827] p-3 shadow-[0_24px_68px_rgba(7,24,39,0.16)]">
            <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr]">
              <a
                href={madeHoopsSchedulePost}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="click_instagram"
                data-analytics-label="Tournaments MADE Hoops schedule Instagram"
                aria-label="View GBC Huskies MADE Hoops schedule Instagram post"
                className="group overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src="/media/instagram/made-hoops-rosters.jpg"
                  alt="GBC Huskies MADE Hoops summer schedule"
                  width={750}
                  height={750}
                  className="aspect-[4/5] h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
              </a>
              <div className="grid content-between gap-4 p-3 text-white">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-[#b8d8ea]">
                    Event board
                  </p>
                  <h3 className="mt-2 font-display text-5xl leading-none">MADE Hoops Run</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Schedule style pulled from public <BrandName /> Instagram
                    content, with every date kept easy to scan on mobile.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm font-black">
                  {["Local", "Regional", "National", "Championship"].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/8 px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {results.map((result) => (
            <article key={result.title} className="relative overflow-hidden rounded-lg bg-[#071827] p-5 text-white shadow-[0_18px_42px_rgba(7,24,39,0.12)]">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[#d71920]" aria-hidden />
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#b8d8ea]">
                <Trophy size={16} aria-hidden />
                Recent Result
              </p>
              <h3 className="mt-2 text-2xl font-black">{result.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/74">{result.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {tournaments.map((tournament) => (
            <article key={tournament.event} className="relative rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5">
              <div className="absolute -top-2 left-5 h-4 w-4 rounded-full border border-[var(--line)] bg-white" aria-hidden />
              <div className="absolute -top-2 right-5 h-4 w-4 rounded-full border border-[var(--line)] bg-white" aria-hidden />
              <div className="flex items-center gap-2 text-sm font-black text-[#d71920]">
                <CalendarDays size={18} aria-hidden />
                {tournament.date}
              </div>
              <h3 className="mt-3 text-2xl font-black text-[#071827]">{tournament.event}</h3>
              <p className="mt-2 text-sm font-bold text-[#071827]/58">{tournament.note}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[#1f2933]/72">
                <MapPin size={16} aria-hidden />
                {tournament.location}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-[#1f2933]/65">
          Schedule subject to change. Contact <BrandName /> for the latest
          tournament information.
        </p>
      </div>
    </section>
  );
}
