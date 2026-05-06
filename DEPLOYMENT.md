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

DNS is not yet configured at the registrar. Current nameservers are Porkbun:

- `curitiba.ns.porkbun.com`
- `fortaleza.ns.porkbun.com`
- `maceio.ns.porkbun.com`
- `salvador.ns.porkbun.com`

Current public traffic still redirects through Porkbun link hosting at `https://gbchuskies-com.l.ink/`.

## Required DNS Change

In Porkbun DNS, replace the current root and `www` forwarding/link records with Vercel records:

```text
A     @      76.76.21.21
A     www    76.76.21.21
```

After DNS propagates, Vercel will issue certificates and `https://gbchuskies.com` / `https://www.gbchuskies.com` will serve the deployed site.
