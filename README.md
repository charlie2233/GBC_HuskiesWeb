# GBC Huskies Basketball

Official one-page website for GBC Huskies Basketball, an Orange County AAU basketball program focused on skills development, strength and conditioning, and local/national tournament competition.

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

The MVP payments and store setup uses public Stripe Payment Links only. The
website does not collect or store bank info, tax info, SSNs, card numbers, or
Stripe passwords.

Routes:

- `/payments` - team fees, tournament fees, monthly payments, donations, merch, and custom payments
- `/store` - placeholder merch and gear items
- `/reviews` - parent/player review cards and review form CTA

Set these optional public environment variables in Vercel when the coach
provides real links:

```bash
NEXT_PUBLIC_STRIPE_TEAM_FEE_URL=
NEXT_PUBLIC_STRIPE_TOURNAMENT_FEE_URL=
NEXT_PUBLIC_STRIPE_MONTHLY_PAYMENT_URL=
NEXT_PUBLIC_STRIPE_DONATION_URL=
NEXT_PUBLIC_STRIPE_MERCH_URL=
NEXT_PUBLIC_REVIEW_FORM_URL=
```

See `.env.example` for optional custom-payment and item-specific merch links.
If a link is blank, the related button displays `Coming Soon`.

## Assets

The repo includes the GBC Huskies logo and selected public Instagram media under
`public/media/instagram`. Use only approved player photos and videos on the
public website.

## License

MIT
