# GBC Huskies Basketball

Official website for GBC Huskies Basketball, the team identity for Gilliam Basketball Club, an Orange County AAU basketball program focused on skills development, strength and conditioning, and local/national tournament competition.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Live Site

- Production: [https://gbchuskies.com](https://gbchuskies.com)
- WWW: [https://www.gbchuskies.com](https://www.gbchuskies.com)
- Vercel: [https://gbc-huskies-web.vercel.app](https://gbc-huskies-web.vercel.app)

Keep [docs/deployment-status.md](docs/deployment-status.md) updated after every
production deployment.

## Contact Form

The form supports two modes:

- Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to send through Formspree.
- If no endpoint is configured, the form opens a prefilled email to `gbchuskiesoc@gmail.com`.

## Payments, Store, and Reviews

The payments page is a Zelle/cash payment hub. Payments can be made via Zelle
to `657-253-0078` or by cash after confirming the amount with the coach. The
website does not collect or store bank info, tax info, SSNs, card numbers, Zelle
login details, or passwords.

Routes:

- `/payments` - Zelle/cash hub for team fees, tournament fees, monthly payments, donations, merch, and custom payments
- `/store` - preview-only merch and gear page while ordering is paused
- `/store/[slug]` - product detail pages with images, sizes, paused-order messaging, and arrival timing notes
- `/reviews` - parent/player review cards and an on-site review form
- `/faq` - parent quick answers for joining, training, payments, store timing, reviews, privacy, and contact expectations

Set these optional public environment variables in Vercel when the coach
provides real form and analytics settings:

```bash
NEXT_PUBLIC_REVIEW_FORM_URL=
NEXT_PUBLIC_REVIEW_FORMSPREE_ENDPOINT=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

Team store item data, product detail copy, images, sizes, prices, and the
arrival notice live in `lib/siteConfig.ts`. Store items currently tell families
to allow up to 3 weeks for arrival. `teamStoreStatus.locked` keeps the store in
preview-only mode until official Stripe/order links are ready. Do not re-enable
store payment CTAs until the coach confirms the order and payment flow.

Displayed testimonials live in `lib/siteConfig.ts` and are editable placeholders
until real reviews are manually approved. Do not auto-publish review form
submissions. Families can choose anonymous display. The on-site review form uses
`NEXT_PUBLIC_REVIEW_FORMSPREE_ENDPOINT` when configured; otherwise it opens a
prefilled email to the team inbox for manual review.

FAQ content and homepage parent quick answers live in `lib/faq.ts`. See
`docs/admin-content-guide.md` for the manual owner update process.

## SEO and Analytics

The site includes crawlable App Router pages for `/about`, `/training`,
`/teams`, `/payments`, `/store`, `/reviews`, `/faq`, `/contact`, and
`/privacy`, plus generated `/sitemap.xml` and `/robots.txt`.

Google Analytics 4 is optional. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel
to load the Google tag. If the value is blank, analytics scripts are not loaded.
CTA clicks are tagged with safe event names only; the site does not track card
numbers, bank info, tax info, SSNs, Zelle login details, passwords, or private
payment data.

See `docs/seo-and-analytics-plan.md` for the Search Console, GA4, Google
Business Profile, social linking, backlinks, and content checklist.

## Assets

The repo includes the GBC Huskies logo and selected public Instagram media under
`public/media/instagram`. Use only approved player photos and videos on the
public website.

## Program Copy

Mission, vision, about, values, and the `DEFENSE` slogan live in
`lib/siteConfig.ts` as `programStatements`.

The central program identity also lives in `lib/siteConfig.ts`: `GBC` expands
to Gilliam Basketball Club, and the Coach Jay influence note keeps the UConn
basketball reference factual without using official marks or implying
affiliation.

## License

MIT
