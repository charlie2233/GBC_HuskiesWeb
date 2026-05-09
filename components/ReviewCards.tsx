"use client";

import { useEffect, useMemo, useState } from "react";
import { Star, UserCheck } from "lucide-react";
import type { DisplayedReview } from "@/lib/reviews";
import { getStoredReviews, subscribeToDisplayedReviews } from "@/lib/reviews";

type ReviewCardsProps = {
  initialReviews: DisplayedReview[];
  limit?: number;
  compact?: boolean;
};

function starLabel(rating: number) {
  return `${rating} star${rating === 1 ? "" : "s"} review`;
}

export default function ReviewCards({ initialReviews, limit, compact = false }: ReviewCardsProps) {
  const [submittedReviews, setSubmittedReviews] = useState<DisplayedReview[]>([]);

  useEffect(() => {
    function refreshReviews() {
      setSubmittedReviews(getStoredReviews());
    }

    refreshReviews();

    return subscribeToDisplayedReviews(refreshReviews);
  }, []);

  const reviews = useMemo(() => {
    const merged = [...submittedReviews, ...initialReviews];
    return typeof limit === "number" ? merged.slice(0, limit) : merged;
  }, [initialReviews, limit, submittedReviews]);

  return (
    <div className={compact ? "grid gap-4 md:grid-cols-3" : "grid gap-4 lg:grid-cols-3"}>
      {reviews.map((review) => (
        <article
          key={review.id}
          className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex gap-1 text-[#d71920]" aria-label={starLabel(review.rating)}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={compact ? 15 : 18}
                  fill={index < review.rating ? "currentColor" : "none"}
                  aria-hidden
                />
              ))}
            </div>
            {review.source === "submitted" ? (
              <span className="rounded-lg bg-[#b8d8ea]/34 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#071827]">
                New
              </span>
            ) : null}
          </div>

          <p className={`${compact ? "text-sm leading-6" : "text-base leading-7"} font-bold text-[#1f2933]/78`}>
            &ldquo;{review.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-[#071827]/10 pt-4">
            {!compact ? (
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                <UserCheck size={21} aria-hidden />
              </div>
            ) : null}
            <div>
              <h3 className="text-base font-black text-[#071827]">{review.name}</h3>
              <p className="text-sm font-semibold text-[#1f2933]/56">{review.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
