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

- `--color-ink` `#0b0f0d` — background
- `--color-moss` `#6f8a6a` — secondary green
- `--color-moss-bright` `#9bb88a` — primary text/accent

Tune to match `exhale.studio` once the brand colors are confirmed.
