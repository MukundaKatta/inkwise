# Inkwise

> Design your tattoo. Before the needle.

AI tattoo designer with flash from actual shops. See it on your skin before you commit.

**Status:** v0 skeleton — landing page + tattoo-design preview route. Full AI not yet wired.

**Landing:** https://inkwise.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy + design preserved) |
| `/try` | v0 design preview — describe a tattoo, get a mocked SVG placeholder |
| `/api/waitlist` | `POST { email, product: "inkwise" }` → forwards to waitlist-api-sigma |

## What's next

- Wire real AI (image generation) behind `/try`
- AR preview on arm/shoulder/back
- Connect with nearby tattoo artists
