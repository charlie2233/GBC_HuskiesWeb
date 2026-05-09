"use client";

import { FormEvent, useState } from "react";
import { Send, ShieldCheck, Star } from "lucide-react";
import { buildPublicReview, saveDisplayedReview } from "@/lib/reviews";
import { contactEmail, reviewFormEndpoint } from "@/lib/siteConfig";
import BrandName from "./BrandName";

const gradeOptions = [
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
  "Parent / family review",
];

const ratingOptions = ["5", "4", "3", "2", "1"];
const displayOptions = ["Anonymous", "First name only", "Full name"];

function scrollToReviewCards() {
  window.setTimeout(() => {
    document.getElementById("review-cards")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 80);
}

export default function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "displayed" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const publicReview = buildPublicReview(formData);

    formData.set("formType", "GBC Huskies Review");
    formData.set("autoDisplayRequested", "true");
    formData.set("publicDisplayName", publicReview?.name || "");
    formData.set("publicDisplayDetail", publicReview?.detail || "");

    setStatus("sending");

    try {
      if (publicReview) {
        saveDisplayedReview(publicReview);
      }

      if (reviewFormEndpoint) {
        const response = await fetch(reviewFormEndpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Review submission failed");
        }

        form.reset();
        setStatus("displayed");
        scrollToReviewCards();
        return;
      }

      form.reset();
      setStatus("displayed");
      scrollToReviewCards();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="leave-review" className="bg-[#071827] py-16 text-white md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d71920] text-white">
            <Star size={28} fill="currentColor" aria-hidden />
          </div>
          <h2 className="font-display text-6xl leading-none md:text-7xl">Leave a Review</h2>
          <p className="mt-5 text-lg leading-8 text-white/76">
            Families can share their experience with <BrandName /> directly on
            this page. Reviews with display permission appear immediately in
            the on-site review cards using only safe public display fields.
          </p>
          <div className="mt-6 rounded-lg border border-[#b8d8ea]/18 bg-white/8 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 flex-none text-[#b8d8ea]" aria-hidden />
              <p className="text-sm font-semibold leading-6 text-white/72">
                Do not include sensitive private details. Email, player name,
                and private contact fields are never shown in the public review
                cards. Anonymous display is supported.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-5 text-[#071827] shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Parent/Guardian Name
              <input
                name="guardianName"
                autoComplete="name"
                required
                className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Parent Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Name
              <input
                name="playerName"
                autoComplete="off"
                placeholder="Optional"
                className="min-h-12 rounded-lg border border-[#071827]/16 px-4 font-normal outline-none transition focus:border-[#d71920]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Player Grade/Team
              <select
                name="playerGradeTeam"
                required
                defaultValue=""
                className="min-h-12 rounded-lg border border-[#071827]/16 bg-white px-4 font-normal outline-none transition focus:border-[#d71920]"
              >
                <option value="" disabled>
                  Select one
                </option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black">
              Rating
              <select
                name="rating"
                required
                defaultValue="5"
                className="min-h-12 rounded-lg border border-[#071827]/16 bg-white px-4 font-normal outline-none transition focus:border-[#d71920]"
              >
                {ratingOptions.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} star{rating === "1" ? "" : "s"}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black">
              Display Preference
              <select
                name="displayPreference"
                required
                defaultValue="Anonymous"
                className="min-h-12 rounded-lg border border-[#071827]/16 bg-white px-4 font-normal outline-none transition focus:border-[#d71920]"
              >
                {displayOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black sm:col-span-2">
              Review/Testimonial Message
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Share what the program has meant for your family, player development, teamwork, confidence, or tournament experience."
                className="rounded-lg border border-[#071827]/16 px-4 py-3 font-normal outline-none transition focus:border-[#d71920]"
              />
            </label>
          </div>

          <label className="mt-5 flex gap-3 rounded-lg border border-[#071827]/12 bg-[#f4f6f8] p-4 text-sm font-bold leading-6 text-[#1f2933]/80">
            <input
              type="checkbox"
              name="displayPermission"
              value="yes"
              required
              className="mt-1 h-4 w-4 flex-none accent-[#d71920]"
            />
            I give GBC Huskies permission to review this testimonial and display
            it on the website or social media using my selected display
            preference.
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            data-analytics-event="click_leave_review"
            data-analytics-events="click_review_form"
            data-analytics-label="Onsite review form submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:bg-[#f02a31] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
          >
            <Send size={18} aria-hidden />
            {status === "sending" ? "Submitting..." : "Submit Review"}
          </button>

          {status === "displayed" ? (
            <p className="mt-4 rounded-lg bg-[#b8d8ea]/28 p-4 text-sm font-bold leading-6 text-[#071827]">
              Thanks for sharing your review. It is now displayed in the review
              cards on this site view.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 rounded-lg bg-[#d71920]/10 p-4 text-sm font-bold leading-6 text-[#8a1116]">
              The review displayed locally, but delivery failed. Please email
              the coach at {contactEmail} if you want to send a copy.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
