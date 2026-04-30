# Exhale Studios — Holding Page

Single-page Next.js 15 (App Router) + Tailwind v4 holding site. Black bg, fuel-green accent, Outfit type, no scroll.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Drop in the real logo

Replace `public/logo.svg` with the brand logo (SVG preferred for crisp scaling; PNG also works — just update the `src` and `width`/`height` props in `app/page.tsx`). The page renders the file via `next/image` at `~h-28 → h-40` responsive sizes.

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
