"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export default function FaqExplorer({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(items.map((item) => item.category))];
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = items.filter((item) => {
    const content = `${item.question} ${item.answer} ${item.category}`.toLowerCase();
    return (!category || item.category === category) && terms.every((term) => content.includes(term));
  });

  return (
    <div className="min-w-0">
      <div role="search" aria-label="Frequently asked questions" className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem]">
        <div>
          <label htmlFor="faq-search" className="text-sm font-bold text-[#071827]">Search questions</label>
          <div className="relative mt-2">
            <Search className="pointer-events-none absolute left-3 top-4 h-5 w-5 text-[#1f2933]/60" aria-hidden />
            <input
              id="faq-search"
              role="searchbox"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Teams, training, payments..."
              aria-controls="faq-results"
              className="min-h-13 w-full rounded-lg border border-[#071827]/25 bg-white py-3 pr-12 pl-10 text-base text-[#071827] outline-offset-4 focus:outline-2 focus:outline-[#d71920]"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                title="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-1 top-0.5 flex h-12 w-12 items-center justify-center text-[#071827] hover:text-[#d71920]"
              >
                <X size={19} aria-hidden />
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="faq-category" className="text-sm font-bold text-[#071827]">Topic</label>
          <select
            id="faq-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-controls="faq-results"
            className="mt-2 min-h-13 w-full rounded-lg border border-[#071827]/25 bg-white px-3 py-3 text-base text-[#071827] outline-offset-4 focus:outline-2 focus:outline-[#d71920]"
          >
            <option value="">All topics</option>
            {categories.map((topic) => <option key={topic}>{topic}</option>)}
          </select>
        </div>
      </div>

      <p className="my-5 text-sm font-semibold text-[#1f2933]/75" role="status">
        {results.length} {results.length === 1 ? "answer" : "answers"}
      </p>
      <div id="faq-results" className="border-t border-[#071827]/15">
        {results.length ? results.map((item) => (
          <details key={item.question} className="faq-answer group border-b border-[#071827]/15 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-[#071827] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#d71920]">
              <span>
                <span className="mb-2 block text-xs font-bold text-[#b41017]">{item.category}</span>
                <span className="text-lg font-bold leading-7">{item.question}</span>
              </span>
              <ChevronDown className="h-5 w-5 flex-none transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <div className="pb-6 sm:pr-10">
              <p className="text-base leading-7 text-[#1f2933]/85">{item.answer}</p>
              {item.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  {item.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        data-analytics-event={link.event}
                        data-analytics-label={`FAQ link ${link.label}`}
                        className="inline-flex min-h-12 items-center gap-1.5 text-sm font-bold text-[#b41017] underline decoration-[#b41017]/35 underline-offset-4 hover:decoration-current"
                      >
                        {link.label}
                        {external ? <ArrowUpRight size={16} aria-hidden /> : null}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </details>
        )) : (
          <div className="py-12">
            <h2 className="text-xl font-bold text-[#071827]">No matching questions</h2>
            <button
              type="button"
              onClick={() => { setQuery(""); setCategory(""); }}
              className="mt-3 inline-flex min-h-12 items-center gap-2 font-bold text-[#b41017] underline underline-offset-4"
            >
              <X size={17} aria-hidden />
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
