# Exhale Studios — Holding Page

Single-page Next.js 15 (App Router) + Tailwind v4 holding site. Black bg, fuel-green accent, Outfit type, no scroll.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Brand logo

`public/exhale-logo-white.png` is the white wordmark rendered centered on the page via `next/image`. To swap, replace that file (or update the `src` / `width` / `height` props in `app/page.tsx`).

## Palette

Defined in `app/globals.css` via Tailwind v4 `@theme` tokens:

- `--color-ink` `#000000` — background
- `--color-fuel` `#3DDC4F` — primary brand green (Instagram hover)
- `--color-fuel-deep` `#22B244` — secondary
- `--color-bone` `#ffffff` — primary text

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Outfit (via `next/font/google`)
- `lucide-react` for icons
