import { ArrowRight, BadgeDollarSign, HeartHandshake } from "lucide-react";

const tiers = [
  { name: "Friend of the Huskies", amount: "$100+", recognition: "Website thank-you" },
  { name: "Bronze Sponsor", amount: "$250+", recognition: "Website logo placement" },
  { name: "Silver Sponsor", amount: "$500+", recognition: "Website + social media recognition" },
  { name: "Gold Sponsor", amount: "$1,000+", recognition: "Featured website/social recognition" },
  { name: "Team Sponsor", amount: "Custom", recognition: "Custom sponsor package" },
];

export default function Support() {
  return (
    <section id="support" className="bg-white py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
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

        <div className="grid gap-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="grid gap-3 rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5 sm:grid-cols-[1fr_auto] sm:items-center">
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
