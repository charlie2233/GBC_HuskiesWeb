import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Trophy } from "lucide-react";
import BrandName from "./BrandName";

const tournaments = [
  { date: "June 13-14", event: "Summer Tournament", location: "Seal Beach, CA", note: "Location tentative" },
  { date: "June 19-21", event: "Coca Cola Nationals", location: "Garden Grove, CA", note: "Championship stage" },
  { date: "July 2-3", event: "MADE Hoops SoCal Summer Tune Up", location: "Corona, CA", note: "Summer tune-up" },
  { date: "July 8-10", event: "MADE Hoops Vegas Summer Live Session 1", location: "Las Vegas, NV", note: "Vegas session 1" },
  { date: "July 11-12", event: "MADE Hoops Vegas Summer Live Session 2", location: "Las Vegas, NV", note: "Vegas session 2" },
  { date: "July 25-26", event: "Summer Tournament", location: "Irvine, CA", note: "Event name TBA" },
];

const westManiaPost = "https://www.instagram.com/p/DXVzpu5lc5m/";

const recaps = [
  {
    title: "Coca Cola Nationals",
    result: "2025 14U Champions",
    matchup: "Championship field",
    highlight: "A championship run built on development, teamwork, and tournament toughness.",
    image: "/media/instagram/championship-shirts-crop.jpg",
    alt: "GBC Huskies players in championship shirts after winning a tournament result",
  },
  {
    title: "MADE Hoops West Mania",
    result: "15U gold-level competition",
    matchup: "Multiple opponents",
    highlight: "15U went 3-1 in division play and 3-2 overall against gold-level competition.",
    image: "/media/instagram/made-hoops-west-mania.jpg",
    alt: "GBC Huskies team photo at MADE Hoops West Mania",
  },
  {
    title: "Best of the West Showdown",
    result: "2025 Gold Champions",
    matchup: "Tournament bracket",
    highlight: "Gold champions, with every win by double digits.",
    image: "/media/instagram/best-of-west-champs.jpg",
    alt: "GBC Huskies players after Best of the West Gold championship result",
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
              tournament weekends, local tests, and travel moments where the
              team standard has to travel too.
            </p>
            <Link
              href="/contact"
              data-analytics-event="click_contact"
              data-analytics-label="Tournaments section contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-6 font-extrabold text-white shadow-[0_18px_34px_rgba(215,25,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Ask About Tournament Teams
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[#071827] p-3 shadow-[0_24px_68px_rgba(7,24,39,0.16)]">
            <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr]">
              <a
                href={westManiaPost}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="click_instagram"
                data-analytics-label="Tournaments MADE Hoops team photo"
                aria-label="View GBC Huskies MADE Hoops team photo on Instagram"
                className="group overflow-hidden rounded-lg bg-[#071827]"
              >
                <Image
                  src="/media/instagram/made-hoops-west-mania.jpg"
                  alt="GBC Huskies players in matching team shirts at MADE Hoops West Mania"
                  width={750}
                  height={750}
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 88vw"
                  className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
              <div className="grid content-between gap-4 p-3 text-white">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-[#b8d8ea]">
                    Event board
                  </p>
                  <h3 className="mt-2 font-display text-5xl leading-none">MADE Hoops Run</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Summer dates, team travel energy, and a mobile-friendly
                    event board for parents to scan quickly.
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

        <div className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d71920]">Tournament recaps</p>
              <h3 className="mt-2 font-display text-5xl leading-none text-[#071827] md:text-6xl">
                Results Parents Can Scan
              </h3>
            </div>
            <p className="max-w-xl text-sm font-semibold leading-6 text-[#1f2933]/66">
              Recap cards keep results, photos, and highlights visible without
              overloading the homepage.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {recaps.map((recap) => (
              <article key={recap.title} className="overflow-hidden rounded-lg bg-[#071827] text-white shadow-[0_18px_42px_rgba(7,24,39,0.12)]">
                <Image
                  src={recap.image}
                  alt={recap.alt}
                  width={720}
                  height={540}
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 42vw, 92vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#b8d8ea]">
                    <Trophy size={15} aria-hidden />
                    {recap.result}
                  </p>
                  <h4 className="mt-2 text-2xl font-black">{recap.title}</h4>
                  <p className="mt-3 text-xs font-black uppercase tracking-wide text-white/44">
                    Matchup: {recap.matchup}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/74">{recap.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <article key={`${tournament.date}-${tournament.event}`} className="relative rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5">
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
