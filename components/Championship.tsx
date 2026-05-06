import { Trophy } from "lucide-react";
import SiteMark from "./SiteMark";

export default function Championship() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 text-white md:py-28">
      <div className="court-lines" aria-hidden />
      <SiteMark className="absolute -right-16 top-12 h-72 w-72 opacity-10" />
      <div className="section-shell relative grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="flex aspect-square max-w-[260px] items-center justify-center rounded-lg border border-white/12 bg-white/8">
          <Trophy className="h-28 w-28 text-[#d71920]" aria-hidden />
        </div>
        <div>
          <p className="font-display text-8xl leading-none text-[#b8d8ea] md:text-9xl">2025</p>
          <h2 className="mt-3 font-display text-6xl leading-none md:text-8xl">
            Coca Cola Nationals
            <span className="block text-white">14U Champions</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            The GBC Huskies 14U team captured the 2025 Coca Cola Nationals
            championship, representing the program&apos;s commitment to development,
            teamwork, and competitive excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
