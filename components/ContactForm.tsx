"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { FileText, Mail, Phone, Send } from "lucide-react";
import {
  coachPhoneDisplay,
  coachPhoneHref,
  contactEmail,
  formspreeEndpoint,
  registrationFormUrl,
} from "@/lib/siteConfig";
import BrandName from "./BrandName";

const interestTypes = [
  "Joining a team",
  "Skills development",
  "Strength & conditioning",
  "Tournament information",
  "Sponsorship",
  "General question",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("formType", "GBC Huskies Contact");
    formData.set("_subject", "GBC Huskies Website Inquiry");
    formData.set("sourcePage", window.location.href);

    setStatus("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#071827] py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <h2 className="font-display text-6xl leading-none md:text-7xl">
            Contact <BrandName />
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/76">
            Interested in joining a team, attending skills development,
            supporting the program, or learning more? Send a message and{" "}
            <BrandName /> will get back to you.
          </p>
          <div className="mt-8 grid gap-3">
            <a
              href={`mailto:${contactEmail}`}
              data-analytics-event="click_email"
              data-analytics-label="Contact section email"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/32 bg-white/8 px-5 font-extrabold text-white transition hover:bg-white/14"
            >
              <Mail size={19} aria-hidden />
              {contactEmail}
            </a>
            <a
              href={coachPhoneHref}
              data-analytics-event="click_phone"
              data-analytics-label="Contact section phone"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/32 bg-white/8 px-5 font-extrabold text-white transition hover:bg-white/14"
            >
              <Phone size={19} aria-hidden />
              Call/Text Coach Jay: {coachPhoneDisplay}
            </a>
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="click_join_program"
              data-analytics-label="Contact section registration form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:bg-[#f02a31]"
            >
              <FileText size={19} aria-hidden />
              Open Registration Form
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
          className="rounded-lg bg-white p-5 text-[#071827] shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:p-7"
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Parent/Guardian Name
              <input name="parentName" autoComplete="name" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Name
              <input name="playerName" autoComplete="off" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Grade
              <input name="playerGrade" autoComplete="off" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Age
              <input name="playerAge" autoComplete="off" required inputMode="numeric" className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Email
              <input type="email" name="email" autoComplete="email" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Phone Number
              <input type="tel" name="phone" autoComplete="tel" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black sm:col-span-2">
              Interest Type
              <select name="interestType" required defaultValue="" className="min-h-12 rounded-lg border border-[#071827]/16 bg-white px-4 font-normal outline-none transition focus:border-[#d71920]">
                <option value="" disabled>
                  Select an interest
                </option>
                {interestTypes.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black sm:col-span-2">
              Message
              <textarea name="message" required rows={5} className="rounded-lg border border-[#071827]/16 px-4 py-3 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
          </div>

          <p className="mt-4 text-xs font-semibold leading-5 text-[#1f2933]/66">
            Your details are used only to respond to this inquiry. Do not
            include medical or payment information. See our{" "}
            <Link href="/privacy" className="font-black text-[#8a1116] underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={status === "sending"}
            data-analytics-event="click_contact"
            data-analytics-label="Contact form send message"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:bg-[#f02a31] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
          >
            <Send size={18} aria-hidden />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <div aria-live="polite" aria-atomic="true">
            {status === "sent" ? (
              <p className="mt-4 rounded-lg bg-[#b8d8ea]/28 p-4 text-sm font-bold leading-6 text-[#071827]">
                Thanks for contacting <BrandName />. Your message has been sent,
                and we&apos;ll get back to you soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="mt-4 rounded-lg bg-[#d71920]/10 p-4 text-sm font-bold leading-6 text-[#8a1116]">
                Something went wrong. Please email{" "}
                <a className="underline underline-offset-2" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>{" "}
                directly.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
