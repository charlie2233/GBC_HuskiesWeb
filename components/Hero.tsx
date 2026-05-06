import { ArrowRight, HeartHandshake, Trophy } from "lucide-react";
import SiteMark from "./SiteMark";

export default function Hero() {
  return (
    <section id="home" className="court-texture relative bg-[#071827] text-white">
      <div className="court-lines" aria-hidden />
      <div className="section-shell relative grid min-h-[calc(84svh-80px)] items-center gap-10 py-8 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div className="reveal relative z-10 max-w-3xl text-center md:text-left">
          <h1 className="font-display text-6xl leading-[0.88] sm:text-8xl lg:text-9xl">
            GBC Huskies
            <span className="block text-[#b8d8ea]">Basketball</span>
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl">
            Developing Players. Building Teams. Competing Nationally.
          </p>
          <p className="mt-4 text-sm font-black uppercase text-[#b8d8ea] sm:text-base md:hidden">
            AAU Basketball &bull; Skills Development &bull; Tournaments
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/76 md:mx-0 md:mt-5 md:text-lg md:leading-8">
            Orange County AAU basketball program focused on skills development,
            strength & conditioning, and local/national tournament competition.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8 md:justify-start">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-6 text-base font-extrabold text-white shadow-[0_18px_36px_rgba(215,25,32,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Join the Huskies
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="https://gofund.me/192839eaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/35 bg-white/8 px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              <HeartHandshake size={18} aria-hidden />
              Support the Program
            </a>
          </div>
          <div className="mx-auto mt-4 flex max-w-lg items-center justify-center gap-3 rounded-lg border border-[#b8d8ea]/24 bg-[#101820]/82 px-4 py-2 text-left md:mx-0 md:mt-8 md:py-3">
            <Trophy className="h-8 w-8 flex-none text-[#d71920] md:h-9 md:w-9" aria-hidden />
            <p className="text-sm font-extrabold leading-6 text-white">
              2025 Coca Cola Nationals 14U Champions
            </p>
          </div>
        </div>

        <div className="reveal relative mx-auto hidden w-full max-w-[460px] items-center justify-center md:flex md:justify-end">
          <div className="absolute h-[310px] w-[310px] rounded-full bg-[#d71920]/28 blur-3xl" aria-hidden />
          <div className="absolute h-[230px] w-[230px] translate-x-16 translate-y-12 rounded-full bg-[#b8d8ea]/20 blur-3xl" aria-hidden />
          <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-lg border border-transparent bg-transparent p-0 shadow-none md:border-white/12 md:bg-white/8 md:p-7 md:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <SiteMark className="h-full w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.36)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
