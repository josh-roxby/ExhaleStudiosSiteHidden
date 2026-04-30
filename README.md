# Exhale Studios — Holding Page

Single-page Next.js 15 (App Router) + Tailwind v4 holding site. Dark/green palette, no scroll.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Swap in the real logo

`app/page.tsx` renders a typographic wordmark in the `Logo` component. Drop your real
logo into `public/logo.svg` and replace the inline SVG with:

```tsx
<img src="/logo.svg" alt="Exhale Studios" className="h-24 w-auto sm:h-28 md:h-32" />
```

## Palette

Defined in `app/globals.css` via Tailwind v4 `@theme` tokens:

- `--color-ink` `#000000` — background
- `--color-fuel` `#3DDC4F` — primary brand green (flame mark, links)
- `--color-fuel-deep` `#22B244` — hover/secondary
- `--color-bone` `#ffffff` — primary text

Sampled from screenshots of the live site; tune to exact brand hex once confirmed.
