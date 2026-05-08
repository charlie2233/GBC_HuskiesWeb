import Image from "next/image";
import { Trophy } from "lucide-react";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

const bestOfWestPost = "https://www.instagram.com/p/DPu_Y6mjq6f/";

export default function Championship() {
  return (
    <section className="relative overflow-hidden bg-[#071827] py-20 text-white md:py-28">
      <div className="court-lines" aria-hidden />
      <SiteMark className="absolute -right-16 top-12 h-72 w-72 opacity-10" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="grid gap-4">
          <a
            href={bestOfWestPost}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_instagram"
            data-analytics-label="Championship Instagram post"
            aria-label="View GBC Huskies Best of the West Instagram post"
            className="group relative overflow-hidden rounded-lg border border-white/12 bg-white/8 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          >
            <Image
              src="/media/instagram/best-of-west-champs.jpg"
              alt="GBC Huskies championship team moment"
              width={750}
              height={750}
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="aspect-[4/3] w-full rounded-md object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-md bg-[#071827]/88 p-4 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-wide text-[#b8d8ea]">
                Hardware culture
              </p>
              <p className="mt-1 text-lg font-black">Best of the West Gold Champions</p>
            </div>
          </a>
          <div className="grid grid-cols-3 gap-3">
            {["Effort", "Team", "Toughness"].map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/8 px-3 py-4 text-center text-sm font-black text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#d71920]">
            <Trophy className="h-9 w-9 text-white" aria-hidden />
          </div>
          <p className="font-display text-8xl leading-none text-[#b8d8ea] md:text-9xl">2025</p>
          <h2 className="mt-3 font-display text-6xl leading-none md:text-8xl">
            Coca Cola Nationals
            <span className="block text-white">14U Champions</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            The <BrandName /> 14U team captured the 2025 Coca Cola Nationals
            championship, representing the program&apos;s commitment to development,
            teamwork, and competitive excellence.
          </p>
          <p className="mt-5 max-w-2xl border-l-4 border-[#d71920] pl-5 text-xl font-black leading-8 text-white">
            Built through daily reps, shared standards, and players who compete
            for more than their own box score.
          </p>
        </div>
      </div>
    </section>
  );
}
