"use client";

import { FormEvent, useState } from "react";
import { FileText, Mail, Phone, Send } from "lucide-react";
import { coachPhoneDisplay, coachPhoneHref, contactEmail, registrationFormUrl } from "@/lib/siteConfig";
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
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    setStatus("sending");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      } else {
        const lines = [
          "GBC Huskies Website Inquiry",
          "",
          `Parent/Guardian Name: ${formData.get("parentName") ?? ""}`,
          `Player Name: ${formData.get("playerName") ?? ""}`,
          `Player Grade: ${formData.get("playerGrade") ?? ""}`,
          `Player Age: ${formData.get("playerAge") ?? ""}`,
          `Email: ${formData.get("email") ?? ""}`,
          `Phone Number: ${formData.get("phone") ?? ""}`,
          `Interest Type: ${formData.get("interestType") ?? ""}`,
          "",
          "Message:",
          `${formData.get("message") ?? ""}`,
        ];
        const subject = encodeURIComponent("GBC Huskies Website Inquiry");
        const body = encodeURIComponent(lines.join("\n"));
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
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

        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-5 text-[#071827] shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Parent/Guardian Name
              <input name="parentName" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Name
              <input name="playerName" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Grade
              <input name="playerGrade" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Age
              <input name="playerAge" required inputMode="numeric" className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Email
              <input type="email" name="email" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Phone Number
              <input type="tel" name="phone" required className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]" />
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

          {status === "sent" ? (
            <p className="mt-4 rounded-lg bg-[#b8d8ea]/28 p-4 text-sm font-bold leading-6 text-[#071827]">
              Thanks for contacting <BrandName />. Your message has been sent,
              and we&apos;ll get back to you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 rounded-lg bg-[#d71920]/10 p-4 text-sm font-bold leading-6 text-[#8a1116]">
              Something went wrong. Please email {contactEmail} directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
