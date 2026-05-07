import type { Metadata } from "next";
import { MessageSquareHeart, Star, UserCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReviewForm from "@/components/ReviewForm";
import BrandName from "@/components/BrandName";
import { buildMetadata } from "@/lib/metadata";
import { testimonials } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Reviews | Parent & Player Testimonials",
  description:
    "Read parent and player reviews about the GBC Huskies youth basketball program, training, player development, teamwork, and coaching experience.",
  path: "/reviews",
});

const reviewQuestions = [
  "Parent/guardian name",
  "Parent email",
  "Player name",
  "Player grade/team",
  "Rating",
  "Testimonial or review message",
  "Permission to display the review on the website",
  "Display preference: full name, first name only, or anonymous",
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Program feedback"
          title="Parent & Player Reviews"
          description="A review area for families and players to share what the GBC Huskies program has meant for their development, confidence, and tournament experience."
          note={
            <>
              <BrandName /> displays testimonials only when families give permission and the coach approves them.
            </>
          }
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div className="section-shell">
            <div className="grid gap-4 lg:grid-cols-3">
              {testimonials.map((review) => (
                <article
                  key={review.name}
                  className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
                >
                  <div className="mb-5 flex items-center gap-1 text-[#d71920]" aria-label="Five star placeholder review">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" aria-hidden />
                    ))}
                  </div>
                  <p className="text-base font-bold leading-7 text-[#1f2933]/78">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#071827]/10 pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                      <UserCheck size={21} aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-[#071827]">{review.name}</h2>
                      <p className="text-sm font-semibold text-[#1f2933]/56">{review.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-[#071827]/12 bg-[#071827] p-5 text-white md:p-7">
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d71920] text-white">
                  <MessageSquareHeart size={27} aria-hidden />
                </div>
                <h2 className="font-display text-5xl leading-none">Leave a Review</h2>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/68">
                  The review form should collect the basics needed to safely publish
                  testimonials only when permission is given. Submissions should be
                  reviewed manually before they appear on the website, and families
                  can choose anonymous display.
                </p>
                <a
                  href="#leave-review"
                  data-analytics-event="click_leave_review"
                  data-analytics-events="click_review_form"
                  data-analytics-label="Reviews page jump to onsite review form"
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
                >
                  Leave a Review
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {reviewQuestions.map((question) => (
                    <span key={question} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-black text-[#b8d8ea]">
                      {question}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ReviewForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
