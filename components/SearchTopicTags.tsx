import Link from "next/link";
import type { SeoTopic } from "@/lib/seoTopics";

type SearchTopicTagsProps = {
  topics: SeoTopic[];
  compact?: boolean;
  theme?: "dark" | "light";
};

export default function SearchTopicTags({ topics, compact = false, theme = "light" }: SearchTopicTagsProps) {
  const dark = theme === "dark";

  return (
    <section
      aria-labelledby="search-topics-title"
      className={compact ? "mt-7" : dark ? "bg-[#071827] py-10 text-white" : "bg-[#f4f6f8] py-10"}
    >
      <div className={compact ? "" : "section-shell"}>
        <p
          id="search-topics-title"
          className={`text-xs font-black uppercase tracking-[0.18em] ${dark ? "text-[#b8d8ea]" : "text-[#d71920]"}`}
        >
          Search topics
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Link
              key={`${topic.href}-${topic.label}`}
              href={topic.href}
              data-analytics-event="click_seo_topic"
              data-analytics-label={topic.label}
              className={`rounded-lg px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
                dark
                  ? "border border-[#b8d8ea]/18 bg-white/[0.07] text-white hover:border-[#b8d8ea]/44"
                  : "border border-[#071827]/10 bg-white text-[#071827] shadow-[0_10px_24px_rgba(7,24,39,0.06)] hover:border-[#d71920]/34"
              }`}
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
