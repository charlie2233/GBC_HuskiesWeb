# GBC Huskies Admin Content Guide

This site does not have an admin dashboard, login, database, or backend content
system. Updates are manual for now so the coach can keep public information
safe and approved.

## Content Safety Rules

- Do not publish parent emails, player private details, payment account details,
  bank info, tax info, SSNs, card numbers, Zelle passwords, or Stripe passwords.
- Do not auto-publish submitted reviews.
- Do not display player photos unless the team has permission for public use.
- Only approved public review text should be copied into site content.
- Keep Zelle/cash instructions simple and confirm amounts outside the website.

## Displayed Testimonials

Displayed review cards live in:

```text
lib/siteConfig.ts
```

Update the `testimonials` array only after the coach approves the exact public
text. Use safe display names such as:

```text
GBC Parent
Player Parent
GBC Family
First-name Family
```

Do not add parent email, player full name, phone number, or private family
details to public review cards.

## Payment Page

The payment page currently supports only three public actions:

- Zelle payment information
- Cash option
- GoFundMe donations

The recommended memo format is:

```text
Player Name - What The Payment Is For
```

Do not add public cards for team fees, monthly fees, custom payments, uniforms,
or merch until the coach asks for them again. If Stripe links are added later,
do not add secret keys or private payment credentials to the repo. Only public
payment links should be used.

## Team Store Items

Store data lives in:

```text
lib/siteConfig.ts
```

Edit `storeItems` to update product names, descriptions, prices, sizes, images,
and feature bullets. The shared arrival note is:

```text
storeArrivalNotice
```

The store is currently locked by:

```text
teamStoreStatus.locked
```

Keep the store preview-only until official order/payment links are confirmed.
When ordering opens, confirm products, prices, sizes, inventory, pickup or
delivery details, and the up-to-3-weeks arrival expectation.

## Tournament And Team Info

Team, tournament, schedule, and program copy currently lives across:

```text
lib/siteConfig.ts
components/Teams.tsx
components/Tournaments.tsx
components/Championship.tsx
```

Before updating public results, dates, rosters, or photos, confirm the details
with the coach. Do not publish full rosters or private player details without
explicit approval.

## FAQ Content

FAQ questions and homepage quick answers live in:

```text
lib/faq.ts
```

FAQ items use this shape:

```ts
{
  category: "Payments",
  question: "How do parents make payments?",
  answer: "Payments can be made by Zelle or cash...",
  links: [{ label: "Payment Options", href: "/payments" }]
}
```

Keep FAQ answers parent-friendly, direct, and based on verified program
information.

## Deployment Status

After a production deploy, update:

```text
docs/deployment-status.md
```

Refresh these fields from Vercel:

- Last verified
- Active deployment id
- Active deployment URL
- Status
- Source commit

Recommended flow:

```bash
npm run lint
npm run build
git status --short
git add .
git commit -m "..."
git pull --rebase --autostash origin main
git push origin main
npx vercel deploy --prod --yes
npx vercel inspect https://gbchuskies.com
```

Then verify the changed public page on `https://gbchuskies.com` and update the
deployment status doc with the live deployment evidence.
