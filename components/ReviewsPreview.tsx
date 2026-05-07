import Link from "next/link";
import { MessageSquareHeart, Star } from "lucide-react";
import { reviewFormUrl, testimonials } from "@/lib/siteConfig";

export default function ReviewsPreview() {
  return (
    <section id="reviews" className="bg-[#f4f6f8] py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d71920] text-white">
              <MessageSquareHeart size={28} aria-hidden />
            </div>
            <h2 className="font-display text-6xl leading-none text-[#071827] md:text-7xl">
              Parent & Player Reviews
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2933]/76">
              Share the development, culture, and tournament experience families
              feel inside the GBC Huskies program. Reviews are displayed only
              after permission and coach approval.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reviews"
                data-analytics-event="click_reviews_page"
                data-analytics-label="Homepage view reviews"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#071827] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#10243a]"
              >
                View Reviews
              </Link>
              {reviewFormUrl ? (
                <a
                  href={reviewFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="click_leave_review"
                  data-analytics-events="click_review_form"
                  data-analytics-label="Homepage leave a review"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
                >
                  Leave a Review
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#071827]/14 bg-white px-5 text-sm font-black text-[#071827]/58">
                  Review form coming soon
                </span>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]">
                <div className="mb-4 flex gap-1 text-[#d71920]" aria-label="Five star placeholder review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <p className="text-sm font-bold leading-6 text-[#1f2933]/76">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-black text-[#071827]">{review.name}</p>
                <p className="text-xs font-semibold text-[#1f2933]/56">{review.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
