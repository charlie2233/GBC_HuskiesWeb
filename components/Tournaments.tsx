import { CalendarDays, MapPin } from "lucide-react";

const tournaments = [
  { date: "May 8-9", event: "SoCal Clash", location: "Corona, CA" },
  { date: "May 15-17", event: "SoCal Live", location: "Anaheim, CA" },
  { date: "July 2-3", event: "SoCal Summer Tune-Up", location: "Corona, CA" },
  { date: "July 8-10", event: "Vegas Summer Live S1", location: "Las Vegas, NV" },
  { date: "July 11-12", event: "Vegas Summer Live S2", location: "Las Vegas, NV" },
];

export default function Tournaments() {
  return (
    <section id="tournaments" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-end">
          <div>
            <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
              Competing on Bigger Stages
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2933]/80">
              The Huskies compete in local, regional, and national tournament
              settings, giving players valuable experience against strong competition.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["MADE Hoops", "Local tournaments", "National tournaments", "Championship results"].map((item) => (
              <div key={item} className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-4 text-sm font-extrabold text-[#071827]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-lg border border-[var(--line)] md:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#071827] text-white">
              <tr>
                <th scope="col" className="px-5 py-4 text-sm font-black">
                  Date
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-black">
                  Event
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-black">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {tournaments.map((tournament) => (
                <tr key={tournament.event} className="border-t border-[var(--line)]">
                  <td className="px-5 py-5 font-black text-[#d71920]">{tournament.date}</td>
                  <td className="px-5 py-5 font-bold text-[#071827]">{tournament.event}</td>
                  <td className="px-5 py-5 text-[#1f2933]/76">{tournament.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-3 md:hidden">
          {tournaments.map((tournament) => (
            <article key={tournament.event} className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-5">
              <div className="flex items-center gap-2 text-sm font-black text-[#d71920]">
                <CalendarDays size={18} aria-hidden />
                {tournament.date}
              </div>
              <h3 className="mt-3 text-2xl font-black text-[#071827]">{tournament.event}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-[#1f2933]/72">
                <MapPin size={16} aria-hidden />
                {tournament.location}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-[#1f2933]/65">
          Schedule subject to change. Contact GBC Huskies for the latest tournament information.
        </p>
      </div>
    </section>
  );
}
