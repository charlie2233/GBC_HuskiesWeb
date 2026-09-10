"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, FileText, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import {
  coachPhoneDisplay,
  coachPhoneHref,
  contactEmail,
  currentTeamRange,
  formspreeEndpoint,
  programRegions,
  registrationFormUrl,
} from "@/lib/siteConfig";
import { basketballPrograms, interestTypes, needsPlayerDetails, type InterestType, type ProgramName } from "@/lib/contactInquiry";
import BrandName from "./BrandName";

const fieldClass = "min-h-12 w-full min-w-0 rounded-lg border border-[#071827]/25 bg-white px-3 text-base font-normal outline-none transition focus:border-[#d71920] focus:ring-2 focus:ring-[#d71920]/20";
const labelClass = "grid min-w-0 gap-2 text-sm font-bold";

export default function ContactForm({ standalone = false, initialProgram = "" }: {
  standalone?: boolean;
  initialProgram?: ProgramName | "";
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [interest, setInterest] = useState<InterestType | "">(initialProgram ? "Joining a team" : "");
  const [program, setProgram] = useState<ProgramName | "">(initialProgram);
  const submitting = useRef(false);
  const playerInquiry = needsPlayerDetails(interest);
  const Heading = standalone ? "h1" : "h2";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("formType", "GBC Huskies Contact");
    formData.set("_subject", `GBC Huskies: ${interest}`);
    formData.set("sourcePage", window.location.href);

    submitting.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setInterest("");
      setProgram("");
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }

  return (
    <section id="contact" className={`bg-[#071827] text-white ${standalone ? "py-10 md:py-16" : "py-20 md:py-28"}`}>
      <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-sm font-bold text-[#b8d8ea]">Two counties. One Huskies family.</p>
          <Heading className="mt-3 font-display text-5xl leading-none md:text-6xl">
            Contact <BrandName />
          </Heading>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
            Find the right fit for your player, ask about training, or support the program.
            Connect with Coach Jay and the Huskies.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#b8d8ea]">
            <MapPin size={18} className="mt-1 shrink-0" aria-hidden />
            <span>{programRegions.join(" & ")}<br />{currentTeamRange} / All skill levels</span>
          </p>

          <div className="mt-7 border-t border-white/20 pt-5">
            <p className="font-bold">Coach Jay</p>
            <p className="mt-1 text-sm text-white/75">{coachPhoneDisplay}</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={coachPhoneHref} aria-label="Call Coach Jay" data-analytics-event="click_phone" data-analytics-label="Contact call Coach Jay"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-3 text-sm font-bold transition hover:bg-white/10">
                <Phone size={18} className="shrink-0" aria-hidden /> Call
              </a>
              <a href={coachPhoneHref.replace("tel:", "sms:")} aria-label="Text Coach Jay" data-analytics-event="click_phone" data-analytics-label="Contact text Coach Jay"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-3 text-sm font-bold transition hover:bg-white/10">
                <MessageCircle size={18} className="shrink-0" aria-hidden /> Text
              </a>
            </div>
            <a href={`mailto:${contactEmail}`} data-analytics-event="click_email" data-analytics-label="Contact section email"
              className="mt-3 flex min-h-12 items-center gap-3 text-sm font-semibold underline underline-offset-4 hover:text-[#b8d8ea]">
              <Mail size={18} className="shrink-0" aria-hidden /><span className="break-all">{contactEmail}</span>
            </a>
          </div>
          <a href={registrationFormUrl} target="_blank" rel="noopener noreferrer"
            data-analytics-event="click_join_program" data-analytics-label="Contact section registration form"
            className="mt-4 inline-flex min-h-12 items-center gap-2 text-sm font-bold text-[#b8d8ea] underline underline-offset-4 hover:text-white">
            <FileText size={18} aria-hidden /> Open Registration Form
          </a>
        </div>

        <form id="inquiry" onSubmit={handleSubmit} aria-label="Program inquiry" aria-busy={status === "sending"}
          onChange={() => { if (status === "sent") setStatus("idle"); }}
          className="min-w-0 scroll-mt-28 rounded-lg bg-white p-5 text-[#071827] md:p-7">
          <h2 className="font-display text-3xl">Send an Inquiry</h2>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <fieldset disabled={status === "sending"} className="mt-5 min-w-0 space-y-5 disabled:opacity-65">
            <legend className="sr-only">Inquiry details</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>I am interested in
                <select name="interestType" required value={interest} className={fieldClass}
                  onChange={(event) => {
                    const value = event.target.value as InterestType;
                    setInterest(value);
                    if (value !== "Joining a team") setProgram("");
                  }}>
                  <option value="" disabled>Select an interest</option>
                  {interestTypes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className={labelClass}>Preferred County{!playerInquiry ? " (optional)" : ""}
                <select name="county" required={playerInquiry} defaultValue="" className={fieldClass}>
                  <option value="">Select a county</option>
                  {programRegions.map((region) => <option key={region}>{region}</option>)}
                  <option>Not sure yet</option>
                </select>
              </label>
              {interest === "Joining a team" ? (
                <label className={`${labelClass} sm:col-span-2`}>Program (optional)
                  <select name="program" value={program} className={fieldClass} onChange={(event) => setProgram(event.target.value as ProgramName | "")}>
                    <option value="">Help me find the right fit</option>
                    {basketballPrograms.map((item) => <option key={item.id}>{item.name}</option>)}
                  </select>
                </label>
              ) : null}
            </div>

            <div className="grid gap-4 border-t border-[#071827]/15 pt-5 sm:grid-cols-2">
              <label className={`${labelClass} sm:col-span-2`}>{playerInquiry ? "Parent/Guardian Name" : "Your Name"}
                <input name="contactName" autoComplete="name" required maxLength={120} className={fieldClass} />
              </label>
              <label className={labelClass}>Email
                <input type="email" name="email" autoComplete="email" required maxLength={254} className={fieldClass} />
              </label>
              <label className={labelClass}>Phone (optional)
                <input type="tel" name="phone" autoComplete="tel" maxLength={30} className={fieldClass} />
              </label>
            </div>

            {playerInquiry ? (
              <fieldset className="grid min-w-0 gap-4 border-t border-[#071827]/15 pt-5 sm:grid-cols-2">
                <legend className="sr-only">Player details</legend>
                <label className={`${labelClass} sm:col-span-2`}>Player First Name
                  <input name="playerName" autoComplete="off" required maxLength={80} className={fieldClass} />
                </label>
                <label className={labelClass}>Player Age
                  <input type="number" name="playerAge" autoComplete="off" inputMode="numeric" min={1} max={99} step={1} required className={fieldClass} />
                </label>
                <label className={labelClass}>Player Grade (optional)
                  <input name="playerGrade" autoComplete="off" maxLength={40} className={fieldClass} />
                </label>
              </fieldset>
            ) : null}

            <label className={labelClass}>Message
              <textarea name="message" required rows={4} maxLength={5000} className={`${fieldClass} resize-y py-3`} />
            </label>
          </fieldset>

          <p className="mt-4 text-xs leading-5 text-[#1f2933]/75">
            Your details are used only to respond to this inquiry. Do not include medical or payment information. See our{" "}
            <Link href="/privacy" className="font-bold text-[#8a1116] underline underline-offset-2">privacy policy</Link>.
          </p>
          <button type="submit" disabled={status === "sending"}
            data-analytics-event="click_contact" data-analytics-label="Contact form send message"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:bg-[#b71118] disabled:cursor-not-allowed disabled:opacity-65">
            <Send size={18} aria-hidden />{status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <div aria-live="polite" aria-atomic="true">
            {status === "sent" ? (
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-900">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden />
                <span>Thanks for contacting GBC Huskies. Your message has been sent, and we&apos;ll get back to you soon.</span>
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="mt-4 rounded-lg bg-[#d71920]/10 p-4 text-sm font-semibold leading-6 text-[#8a1116]">
                We couldn&apos;t confirm your message was sent. Your details are still here. Please try again or email{" "}
                <a className="break-all underline underline-offset-2" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
