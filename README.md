# Club Adhokshaja website

React + Vite + Tailwind CSS v4 + React Router + Lucide. JavaScript.

```
npm install
npm run dev
npm run build
```

## Where things live
- `src/styles/tokens.css`  colours, type scale, radii, easing (single source of truth)
- `src/content/`           copy and the chapter index. Missing facts use `PLACEHOLDER('label')`.
- `src/components/layout/` spine (`ChapterRail`), top bar, footer. The home page is a procession of rooms, not a stack of cards.
- `src/features/home/`     one file per room: Portal, Manuscript, Practice, Hour, House, OjasBand, Atlas, Invitation, Threshold
- `src/components/ui/`     primitives: Button, Section, Container, Heading, Eyebrow, Divider, Reveal

## Replace the hero photograph
Drop `hero.avif`, `hero.webp` or `hero.jpg` into `src/assets/images/hero/`
(about 2400px wide, under about 250KB, calm space on the left for the text).
It is picked up automatically. The temporary-placeholder badge disappears with it.

## Club photographs
Four originals are in `src/assets/images/club/` (webp + jpg). They are about 430px square, so use them at
card/thumbnail size (up to about 430 CSS px). Higher-resolution originals are needed for large layouts.

## Utility-class rule
Do not override one Tailwind utility with another on the same element (for example `w-full` then `w-14`).
Which wins is decided by stylesheet order, not class order. Use a prop (like Button `size`) instead.
