import Image from "next/image";
import { ArrowRight, CalendarDays, Crown, HeartHandshake, MapPin, Trophy } from "lucide-react";
import { goFundMeUrl, instagramUrl, programFullName, programStatements, registrationFormUrl } from "@/lib/siteConfig";
import SiteMark from "./SiteMark";

const westManiaPost = "https://www.instagram.com/p/DXVzpu5lc5m/";

const roadStops = [
  { date: "July 2-3", event: "MADE Hoops SoCal Summer Tune Up", location: "Corona, CA" },
  { date: "July 8-10", event: "MADE Hoops Vegas Summer Live Session 1", location: "Las Vegas, NV" },
  { date: "July 11-12", event: "MADE Hoops Vegas Summer Live Session 2", location: "Las Vegas, NV" },
];

export default function Hero() {
  return (
    <section id="home" className="home-arena relative isolate overflow-hidden text-white">
      <div className="court-lines" aria-hidden />
      <div className="road-map-lines" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#d71920_0_38%,#b8d8ea_38%_70%,#ffffff_70%_73%,transparent_73%)]" aria-hidden />

      <div className="section-shell hero-preview-shell relative grid min-h-[calc(86svh-80px)] items-center gap-9 pb-8 pt-8 md:grid-cols-[0.84fr_1.16fr] md:pb-0 md:pt-8 lg:gap-12">
        <div className="reveal relative z-20 min-w-0 text-center md:text-left">
          <p className="mb-4 inline-flex rounded-lg border border-[#b8d8ea]/26 bg-[#06111d]/72 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b8d8ea]">
            {programFullName}
          </p>
          <h1 className="hero-title font-display uppercase leading-[0.86]">
            <span className="block text-[#d71920]">GBC</span>
            <span className="block text-white">Huskies</span>
            <span className="block text-[#b8d8ea]">Basketball</span>
          </h1>

          <div className="hero-red-swipe mx-auto mt-5 md:mx-0" aria-hidden />
          <p className="mx-auto mt-5 w-full max-w-[21rem] text-2xl font-black leading-tight text-white sm:text-3xl md:mx-0 md:max-w-2xl md:text-[1.95rem]">
            Orange County based AAU basketball program.
            <br />
            Our slogan: {programStatements.slogan}.
          </p>
          <p className="mx-auto mt-5 flex w-full max-w-[21rem] flex-col items-center justify-center gap-x-2 gap-y-2 overflow-hidden text-sm font-black uppercase tracking-[0.04em] text-[#b8d8ea] sm:text-base md:mx-0 md:max-w-xl md:flex-row md:flex-wrap md:items-start md:justify-start md:gap-y-1">
            <span className="min-w-0 max-w-full break-words">{programStatements.sloganMeaning}</span>
            <span className="hidden md:inline" aria-hidden>&bull;</span>
            <span className="min-w-0 max-w-full break-words">Proud participant in MADE Hoops events</span>
          </p>
          <p className="mx-auto mt-4 hidden w-full max-w-[21rem] text-base leading-7 text-white/74 sm:block md:mx-0 md:max-w-xl">
            Our program is designed to emphasize fundamental basketball skills
            through game play and training tailored to each individual&apos;s need
            and skill level. Through attention to detail, our goal is to improve
            basketball skills for athletes who possess a passion for the game
            and a willingness to learn.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_join_program"
              data-analytics-label="Hero register for season"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#d71920] px-6 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(215,25,32,0.3)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              <span className="hero-ball-icon" aria-hidden />
              Register for Season
              <ArrowRight size={19} aria-hidden />
            </a>
            <a
              href="#tournaments"
              data-analytics-event="click_join_program"
              data-analytics-label="Hero view event run"
              className="hidden min-h-12 items-center justify-center gap-3 rounded-lg border border-[#b8d8ea]/35 bg-[#06111d]/72 px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/12 sm:inline-flex"
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
            data-analytics-event="click_instagram"
            data-analytics-label="Hero MADE Hoops Instagram post"
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
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 34vw, (min-width: 768px) 46vw, 82vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="card-year">2025</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_instagram"
            data-analytics-label="Hero championship team photo"
            aria-label="View GBC Huskies Instagram profile"
            className="hero-photo-card hero-photo-card-front group"
          >
            <Image
              src="/media/instagram/championship-shirts-crop.jpg"
              alt="GBC Huskies players in championship shirts after a tournament result"
              width={850}
              height={850}
              preload
              sizes="(min-width: 1280px) 26vw, (min-width: 768px) 36vw, 78vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="polaroid-caption">
              <span>Championship shirts</span>
              <strong>Team standard</strong>
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
                  data-analytics-event="click_join_program"
                  data-analytics-label={`Hero road stop ${stop.event}`}
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
            href={goFundMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_payment_donation"
            data-analytics-label="Hero support season"
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
