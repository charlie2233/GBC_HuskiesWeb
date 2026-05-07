import Image from "next/image";
import { ArrowRight, CalendarDays, Crown, HeartHandshake, MapPin, Trophy } from "lucide-react";
import SiteMark from "./SiteMark";

const registrationForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRVsKkKjcZXcZESTNTXjga9qLWYElRvhPUtd4KXsAjYVYm7A/viewform?usp=publish-editor";

const bestOfWestPost = "https://www.instagram.com/p/DPu_Y6mjq6f/";
const westManiaPost = "https://www.instagram.com/p/DXVzpu5lc5m/";

const roadStops = [
  { date: "May 8-9", event: "SoCal Clash", location: "Corona, CA" },
  { date: "May 15-17", event: "SoCal Live", location: "Anaheim, CA" },
  { date: "July 8-12", event: "Vegas Summer Live", location: "Las Vegas, NV" },
];

export default function Hero() {
  return (
    <section id="home" className="home-arena relative isolate overflow-hidden text-white">
      <div className="court-lines" aria-hidden />
      <div className="road-map-lines" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#d71920_0_38%,#b8d8ea_38%_70%,#ffffff_70%_73%,transparent_73%)]" aria-hidden />

      <div className="section-shell hero-preview-shell relative grid min-h-[calc(86svh-80px)] items-center gap-9 pb-0 pt-8 md:grid-cols-[0.84fr_1.16fr] md:pt-8 lg:gap-12">
        <div className="reveal relative z-20 text-center md:text-left">
          <h1 className="hero-title font-display uppercase leading-[0.86]">
            <span className="block text-[#d71920]">GBC</span>
            <span className="block text-white">Huskies</span>
            <span className="block text-[#b8d8ea]">Basketball</span>
          </h1>

          <div className="hero-red-swipe mx-auto mt-5 md:mx-0" aria-hidden />
          <p className="mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl md:text-[1.95rem]">
            Tournament weekends.
            <br />
            Team standards. Player growth.
          </p>
          <p className="mt-5 text-sm font-black uppercase tracking-[0.04em] text-[#b8d8ea] sm:text-base">
            13U-15U &bull; MADE Hoops &bull; 2025 14U Champions
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/74 md:mx-0">
            Orange County AAU basketball program building athletes for skills
            sessions, strength and conditioning, road events, MADE Hoops
            competition, and moments that ask every player to bring energy for
            the team.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#d71920] px-6 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(215,25,32,0.3)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              <span className="hero-ball-icon" aria-hidden />
              Register for Season
              <ArrowRight size={19} aria-hidden />
            </a>
            <a
              href="#tournaments"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#b8d8ea]/35 bg-[#06111d]/72 px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              <CalendarDays size={19} aria-hidden />
              View Event Run
            </a>
          </div>
        </div>

        <div className="hero-collage reveal relative z-10 mx-auto h-[620px] w-full max-w-[780px] md:h-[650px]">
          <div className="made-stamp" aria-hidden>
            <span>MA</span>
            <span>DE</span>
            <small>HOOPS</small>
          </div>
          <div className="ms-stamp" aria-hidden>
            <span>M</span>
            <span>S</span>
          </div>
          <div className="road-season-mark" aria-hidden>
            Road
            <br />
            Season
            <span>Built Different</span>
          </div>
          <div className="travel-route" aria-hidden>
            <MapPin className="route-pin route-pin-top" size={72} />
            <span />
            <MapPin className="route-pin route-pin-bottom" size={62} />
          </div>

          <a
            href={westManiaPost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GBC Huskies MADE Hoops West Mania Instagram post"
            className="hero-photo-card hero-photo-card-back group"
          >
            <div className="card-meta-top">
              <span>GBC Huskies</span>
              <span>Road SZN</span>
            </div>
            <Image
              src="/media/instagram/made-hoops-west-mania.jpg"
              alt="GBC Huskies team photo at MADE Hoops West Mania"
              width={850}
              height={850}
              priority
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="card-year">2025</span>
          </a>

          <a
            href={bestOfWestPost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GBC Huskies championship Instagram post"
            className="hero-photo-card hero-photo-card-front group"
          >
            <Image
              src="/media/instagram/best-of-west-champs.jpg"
              alt="GBC Huskies players holding trophies after a championship win"
              width={850}
              height={850}
              priority
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="polaroid-caption">
              <span>2025 Coca Cola Nationals</span>
              <strong>14U Champions</strong>
            </div>
          </a>

          <Crown className="hero-crown-sketch" size={76} aria-hidden />

          <div className="next-road-card">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-4xl leading-none text-white">Next Road Stops</p>
                <span className="red-marker" aria-hidden />
              </div>
              <Trophy className="mt-1 h-6 w-6 text-[#b8d8ea]" aria-hidden />
            </div>
            <div className="grid gap-3">
              {roadStops.map((stop) => (
                <a
                  key={stop.event}
                  href="#tournaments"
                  className="road-stop-row grid grid-cols-[104px_1fr] items-center gap-4 rounded-lg border border-white/12 bg-white/[0.055] px-4 py-3 transition hover:border-[#b8d8ea]/38 hover:bg-white/[0.09]"
                >
                  <span className="flex items-center gap-2 text-xs font-black uppercase text-[#b8d8ea]">
                    <CalendarDays size={18} aria-hidden />
                    {stop.date}
                  </span>
                  <span>
                    <span className="block text-base font-black text-white">{stop.event}</span>
                    <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-white/58">
                      <MapPin size={13} aria-hidden />
                      {stop.location}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="https://gofund.me/192839eaa"
            target="_blank"
            rel="noopener noreferrer"
            className="support-chip hidden min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d71920]/48 bg-[#071827]/78 px-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_38px_rgba(0,0,0,0.22)] transition hover:bg-[#d71920] lg:inline-flex"
          >
            <HeartHandshake size={18} aria-hidden />
            Support our season
          </a>

          <SiteMark compact className="collage-logo-watermark" />
        </div>
      </div>
    </section>
  );
}
