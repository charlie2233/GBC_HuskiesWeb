import { ArrowRight, BadgeDollarSign, HeartHandshake } from "lucide-react";

const tiers = [
  { name: "Friend of the Huskies", amount: "$100+", recognition: "Website thank-you" },
  { name: "Bronze Sponsor", amount: "$250+", recognition: "Website logo placement" },
  { name: "Silver Sponsor", amount: "$500+", recognition: "Website + social media recognition" },
  { name: "Gold Sponsor", amount: "$1,000+", recognition: "Featured website/social recognition" },
  { name: "Team Sponsor", amount: "Custom", recognition: "Custom sponsor package" },
];

const layerOffsets = ["lg:translate-y-3", "lg:translate-y-4", "lg:translate-y-5", "lg:translate-y-6", "lg:translate-y-7"];

const fundraiser = {
  raised: "$350",
  goal: "$500",
  progress: 70,
  donations: 3,
};

export default function Support() {
  return (
    <section id="support" className="bg-white py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:pt-3">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#d71920] text-white">
            <HeartHandshake size={31} aria-hidden />
          </div>
          <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
            Support the Huskies
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#1f2933]/80">
            Your support helps provide young athletes with access to training,
            tournament opportunities, travel, uniforms, equipment, and program development.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#1f2933]/80">
            Every contribution helps the Huskies continue building a strong
            basketball community and creating opportunities for players to compete and grow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://gofund.me/192839eaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Donate Through GoFundMe
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#071827]/18 px-5 font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:border-[#071827]"
            >
              Become a Sponsor
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:pt-8">
          <article className="rounded-lg border border-[var(--line)] bg-[#071827] p-5 text-white shadow-[0_22px_54px_rgba(7,24,39,0.16)] lg:translate-y-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-[#b8d8ea]">GoFundMe Goal</p>
                <h3 className="mt-2 font-display text-5xl leading-none">
                  {fundraiser.raised} raised of {fundraiser.goal}
                </h3>
              </div>
              <p className="rounded-lg bg-white/10 px-3 py-2 text-sm font-black text-[#b8d8ea]">
                {fundraiser.progress}% funded
              </p>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/14">
              <div className="h-full rounded-full bg-[#b8d8ea]" style={{ width: `${fundraiser.progress}%` }} />
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-bold text-white/74 sm:flex-row sm:items-center sm:justify-between">
              <span>{fundraiser.donations} donations so far</span>
              <a href="https://gofund.me/192839eaa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white transition hover:text-[#b8d8ea]">
                Help the Huskies
                <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </article>
          {tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`grid gap-3 rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5 shadow-[0_12px_28px_rgba(7,24,39,0.06)] sm:grid-cols-[1fr_auto] sm:items-center ${layerOffsets[index]}`}
            >
              <div className="flex items-start gap-4">
                <BadgeDollarSign className="mt-1 h-6 w-6 flex-none text-[#d71920]" aria-hidden />
                <div>
                  <h3 className="text-xl font-black text-[#071827]">{tier.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#1f2933]/72">{tier.recognition}</p>
                </div>
              </div>
              <p className="font-display text-4xl leading-none text-[#071827]">{tier.amount}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
