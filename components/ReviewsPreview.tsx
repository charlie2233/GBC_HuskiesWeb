import Link from "next/link";
import { MessageSquareHeart } from "lucide-react";
import { testimonials } from "@/lib/siteConfig";
import ReviewCards from "./ReviewCards";

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
              feel inside the GBC Huskies program. Reviews with display
              permission can appear immediately on the site view.
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
              <Link
                href="/reviews#leave-review"
                data-analytics-event="click_leave_review"
                data-analytics-events="click_review_form"
                data-analytics-label="Homepage leave a review"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
              >
                Leave a Review
              </Link>
            </div>
          </div>

          <ReviewCards initialReviews={testimonials} limit={3} compact />
        </div>
      </div>
    </section>
  );
}
