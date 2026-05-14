# GBC Huskies SEO and Analytics Plan

This checklist keeps the website, Google setup, and social/off-site work aligned.
Use real program details only. Do not invent city, address, phone number, service
area, private account details, or payment processor credentials.

## Code-Side SEO

- Pages now covered: `/`, `/about`, `/training`, `/teams`, `/payments`, `/store`, `/reviews`, `/contact`, `/privacy`.
- Submit `https://gbchuskies.com/sitemap.xml` after production deploys.
- Confirm `https://gbchuskies.com/robots.txt` references the sitemap.
- Keep page titles and descriptions natural. Do not rely on meta keywords.
- Use real image alt text only, such as team logo, team photo, tournament graphic, or training image descriptions.
- Keep every important page reachable from header, footer, or homepage links.

## Google Search Console

- Verify `gbchuskies.com`.
- Submit `https://gbchuskies.com/sitemap.xml`.
- Inspect the homepage.
- Inspect `/about`, `/training`, `/teams`, `/payments`, `/store`, `/reviews`, and `/contact`.
- Monitor indexing errors.
- Monitor search queries and clicks.
- Request indexing after major page updates.

## Google Analytics 4

- Create a GA4 property under the GBC/team Google account.
- Add a Web data stream for `https://gbchuskies.com`.
- Copy the Measurement ID, which should look like `G-XXXXXXXXXX`.
- Add it to Vercel as `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Verify with Google Tag Assistant after deployment.
- Track page views and CTA button clicks.

Tracked click events include:

- `click_payment_donation`
- `click_payment_zelle_copy`
- `click_payment_zelle_phone`
- `click_payment_page`
- `click_store_item`
- `click_review_form`
- `click_reviews_page`
- `click_leave_review`
- `click_contact`
- `click_email`
- `click_phone`
- `click_instagram`
- `click_join_program`

## Google Business Profile

- Create or claim a profile only if GBC has a real service area or location.
- Add official name, logo, photos, contact info, website link, and service area.
- Ask real parents for honest reviews.
- Do not fake an address or pay for reviews.

## Social and Off-Site SEO

- Add the website link to Instagram bio.
- Add the website link to Facebook, YouTube, TikTok, or other team profiles if used.
- Ask tournament, gym, sponsor, and partner pages to link to `https://gbchuskies.com`.
- Share the website after tournaments, tryouts, training announcements, and team updates.
- Use UTM links in social posts, such as:

```text
https://gbchuskies.com/?utm_source=instagram&utm_medium=social&utm_campaign=tryouts
https://gbchuskies.com/store?utm_source=instagram&utm_medium=social&utm_campaign=team_store
https://gbchuskies.com/payments?utm_source=coach&utm_medium=dm&utm_campaign=payments
```

## Content Plan

- Add monthly training or player development notes.
- Add tournament recap posts or pages when results are verified.
- Add tryout announcements.
- Add parent/player testimonials with permission.
- Add team photos with accurate captions and approved public use.

## Parent Reviews Auto Display MVP

The website includes an on-site review form at `/reviews#leave-review`. Set
`NEXT_PUBLIC_REVIEW_FORMSPREE_ENDPOINT` if the team wants direct form delivery
through a public Formspree endpoint. If that value is blank, the form still
displays reviews locally in the visitor's site view, but it does not deliver
submissions to the coach.

Reviews with display permission are added immediately to the review cards in
the visitor's browser using local storage. This MVP does not create a public
cross-device review database. For sitewide auto-display across all visitors,
connect a real storage provider or approved reviews feed and keep moderation
controls in place.

Suggested review fields:

- Parent/guardian name.
- Parent email.
- Player name.
- Player grade/team.
- Rating.
- Review/testimonial message.
- Permission to display review on website.
- Display preference: full name, first name only, or anonymous.

The public card should never show parent email or player name. Anonymous
display is supported by using labels such as `GBC Parent`, `Player Parent`, or
`GBC Family`.

## Coach TODOs

- Official city or service area.
- Official phone and email confirmation.
- Practice location or general area, if public.
- Current logo and approved team photos.
- Instagram and any other official social links.
- Confirmed Zelle/cash payment instructions and any future approved payment links.
- Review form URL.
- Optional on-site review form endpoint.
- GA4 Measurement ID.
- Google Search Console access.
- Google Business Profile access or permission to create/claim it.
- Sponsors, gyms, tournaments, and partners that can link to the website.

## Vercel Analytics Note

The project does not currently include the Vercel Analytics package. Keep using
GA4 for the MVP. Add Vercel Analytics later only if the team wants it and the
dependency is approved.
