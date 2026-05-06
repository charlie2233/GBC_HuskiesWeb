import Image from "next/image";
import {
  ArrowRight,
  AtSign,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import SiteMark from "./SiteMark";

const registrationForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRVsKkKjcZXcZESTNTXjga9qLWYElRvhPUtd4KXsAjYVYm7A/viewform?usp=publish-editor";

const bestOfWestPost = "https://www.instagram.com/p/DPu_Y6mjq6f/";
const westManiaPost = "https://www.instagram.com/p/DXVzpu5lc5m/";

const roadStops = [
  { date: "May 8-9", event: "SoCal Clash", location: "Corona" },
  { date: "May 15-17", event: "SoCal Live", location: "Anaheim" },
  { date: "July 8-12", event: "Vegas Summer Live", location: "Las Vegas" },
];

export default function Hero() {
  return (
    <section id="home" className="court-texture relative overflow-hidden bg-[#071827] text-white">
      <div className="court-lines" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#d71920_0_38%,#b8d8ea_38%_70%,#ffffff_70%)]" aria-hidden />
      <div className="section-shell relative grid min-h-[calc(88svh-80px)] items-center gap-10 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-16">
        <div className="reveal relative z-10 max-w-3xl text-center md:text-left">
          <h1 className="font-display text-6xl leading-[0.88] sm:text-8xl lg:text-[9.25rem]">
            GBC Huskies{" "}
            <span className="block text-[#b8d8ea]">Basketball</span>
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl">
            Tournament weekends. Team standards. Player growth.
          </p>
          <p className="mt-4 text-sm font-black uppercase text-[#b8d8ea] sm:text-base md:hidden">
            13U-15U &bull; MADE Hoops &bull; 2025 14U Champions
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/76 md:mx-0 md:mt-5 md:text-lg md:leading-8">
            Orange County AAU basketball program building athletes for skills
            sessions, road events, MADE Hoops competition, and moments that
            ask every player to bring energy for the team.
          </p>
          <a
            href="https://www.instagram.com/gbc_huskies/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/28 bg-[#101820]/70 px-4 text-sm font-black text-[#b8d8ea] transition hover:border-white/40 hover:text-white md:mx-0"
          >
            <AtSign size={16} aria-hidden />
            @gbc_huskies
          </a>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8 md:justify-start">
            <a
              href={registrationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-6 text-base font-extrabold text-white shadow-[0_18px_36px_rgba(215,25,32,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Register for Season
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#tournaments"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/35 bg-white/8 px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              <CalendarDays size={18} aria-hidden />
              View Event Run
            </a>
          </div>
          <div className="mx-auto mt-5 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-3 md:mx-0 md:mt-8">
            {[
              { icon: Trophy, label: "2025 14U", text: "Coca Cola National Champions" },
              { icon: Users, label: "13U-15U", text: "Spring/summer roster call" },
              { icon: Phone, label: "Coach Jay", text: "657-253-0078" },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-lg border border-[#b8d8ea]/18 bg-[#101820]/78 p-3">
                <Icon className="mb-3 h-5 w-5 text-[#d71920]" aria-hidden />
                <p className="text-sm font-black text-white">{label}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/64">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[640px]">
          <div className="absolute -right-10 top-4 h-72 w-72 rounded-full bg-[#d71920]/24 blur-3xl" aria-hidden />
          <div className="absolute -bottom-8 left-0 h-72 w-72 rounded-full bg-[#b8d8ea]/18 blur-3xl" aria-hidden />
          <div className="relative rounded-lg border border-white/14 bg-white/[0.07] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.36)] backdrop-blur">
            <div className="grid gap-3 md:grid-cols-[0.82fr_1.18fr]">
              <a
                href={bestOfWestPost}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GBC Huskies Best of the West Instagram post"
                className="group relative overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src="/media/instagram/best-of-west-champs.jpg"
                  alt="GBC Huskies championship team photo"
                  width={750}
                  height={750}
                  priority
                  className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 to-transparent p-4">
                  <p className="text-xs font-black uppercase tracking-wide text-[#b8d8ea]">Championship energy</p>
                  <p className="text-xl font-black">Best of the West</p>
                </div>
              </a>
              <div className="grid gap-3">
                <a
                  href={westManiaPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GBC Huskies MADE Hoops West Mania Instagram post"
                  className="group relative min-h-56 overflow-hidden rounded-lg bg-[#101820]"
                >
                  <Image
                    src="/media/instagram/made-hoops-west-mania.jpg"
                    alt="GBC Huskies 15U team at MADE Hoops West Mania"
                    width={750}
                    height={750}
                    priority
                    className="h-full min-h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/92 via-[#071827]/22 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs font-black uppercase tracking-wide text-[#b8d8ea]">Recent result</p>
                    <p className="text-2xl font-black leading-none">15U West Mania</p>
                    <p className="mt-2 text-sm font-semibold text-white/72">3-1 in division play</p>
                  </div>
                </a>
                <div className="rounded-lg border border-white/12 bg-[#071827] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="font-display text-3xl leading-none">Next Road Stops</p>
                    <SiteMark compact className="h-11 w-11 flex-none" />
                  </div>
                  <div className="grid gap-2">
                    {roadStops.map((stop) => (
                      <div key={stop.event} className="grid grid-cols-[72px_1fr] gap-3 rounded-lg border border-white/10 bg-white/7 p-3">
                        <p className="text-xs font-black uppercase leading-5 text-[#b8d8ea]">{stop.date}</p>
                        <div>
                          <p className="text-sm font-black text-white">{stop.event}</p>
                          <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-white/58">
                            <MapPin size={12} aria-hidden />
                            {stop.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://gofund.me/192839eaa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/24 bg-white/10 px-5 font-extrabold text-white transition hover:bg-white/16"
            >
              <HeartHandshake size={18} aria-hidden />
              Support the Huskies road season
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
