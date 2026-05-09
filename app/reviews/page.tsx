import type { Metadata } from "next";
import { MessageSquareHeart } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReviewCards from "@/components/ReviewCards";
import ReviewForm from "@/components/ReviewForm";
import BrandName from "@/components/BrandName";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
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
              <BrandName /> displays testimonials only when families give permission and choose a public display preference.
            </>
          }
          topics={getSeoTopicsForPath("/reviews")}
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div id="review-cards" className="section-shell scroll-mt-28">
            <ReviewCards initialReviews={testimonials} />

            <div className="mt-8 rounded-lg border border-[#071827]/12 bg-[#071827] p-5 text-white md:p-7">
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d71920] text-white">
                  <MessageSquareHeart size={27} aria-hidden />
                </div>
                <h2 className="font-display text-5xl leading-none">Leave a Review</h2>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/68">
                  The review form should collect the basics needed to safely publish
                  testimonials only when permission is given. Public cards show
                  the selected display name, rating, review message, and grade/team
                  context only. Families can choose anonymous display.
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
