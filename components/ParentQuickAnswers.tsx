import Link from "next/link";
import { ArrowRight, CircleHelp, MessageCircle, ShieldCheck } from "lucide-react";
import { parentQuickAnswers } from "@/lib/faq";

export default function ParentQuickAnswers() {
  return (
    <section className="bg-[#f4f6f8] py-12 md:py-16">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <div className="rounded-lg bg-[#071827] p-6 text-white shadow-[0_22px_54px_rgba(7,24,39,0.18)] md:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d71920]">
              <CircleHelp size={26} aria-hidden />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#b8d8ea]">
              Parent trust
            </p>
            <h2 className="mt-2 font-display text-5xl leading-none md:text-6xl">
              Parent Quick Answers
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/68">
              A simple guide for joining, training, payments, store timing, reviews, and safe public information.
            </p>
            <Link
              href="/faq"
              data-analytics-event="click_faq_page"
              data-analytics-label="Homepage parent quick answers"
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/32 bg-white/8 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              View Full FAQ
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {parentQuickAnswers.map((answer) => (
              <Link
                key={answer.title}
                href={answer.href}
                data-analytics-event={answer.event}
                data-analytics-label={`Homepage quick answer ${answer.title}`}
                className="group rounded-lg border border-[#071827]/12 bg-white p-5 shadow-[0_14px_32px_rgba(7,24,39,0.07)] transition hover:-translate-y-1 hover:border-[#d71920]/36"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf4fa] text-[#071827]">
                    {answer.title === "Reviews" ? (
                      <ShieldCheck size={22} aria-hidden />
                    ) : (
                      <MessageCircle size={22} aria-hidden />
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#d71920] transition group-hover:translate-x-1" aria-hidden />
                </div>
                <h3 className="font-display text-4xl leading-none text-[#071827]">{answer.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/70">{answer.text}</p>
                <p className="mt-4 text-sm font-black text-[#d71920]">{answer.linkLabel}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
