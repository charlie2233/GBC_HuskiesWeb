# Deployment Status

Last updated: 2026-05-06

## Vercel

- Project: `gbc-huskies-web`
- Production URL: `https://gbc-huskies-web.vercel.app`
- Deployment ID: `dpl_AZXe43Rxg6SW2CTrKVo7AKpMBCrU`
- Deployment status: `READY`

## Custom Domains

The following domains have been added to the Vercel project:

- `gbchuskies.com`
- `www.gbchuskies.com`

DNS is configured at Porkbun and the domains now resolve to Vercel:

- `gbchuskies.com` -> `76.76.21.21`
- `www.gbchuskies.com` -> `76.76.21.21`

Current nameservers are Porkbun:

- `curitiba.ns.porkbun.com`
- `fortaleza.ns.porkbun.com`
- `maceio.ns.porkbun.com`
- `salvador.ns.porkbun.com`

Current status:

- `http://gbchuskies.com` serves the Vercel deployment
- `https://gbchuskies.com` and `https://www.gbchuskies.com` are still waiting on working TLS/certificate issuance

Current public traffic may still reach the older Porkbun link host at `https://gbchuskies-com.l.ink/` while HTTPS finishes settling.

## DNS Records

In Porkbun DNS, the root and `www` records should point to Vercel:

```text
A     @      76.76.21.21
A     www    76.76.21.21
```

After Vercel finishes domain verification and certificate issuance, `https://gbchuskies.com` and `https://www.gbchuskies.com` should serve the deployed site directly.
