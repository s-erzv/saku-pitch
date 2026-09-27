# Saku pitch deck (v2)

Seven-slide pitch deck for Saku, built as a Next.js + Tailwind site. Each slide is a React component authored at 1920×1080 and scaled to the window.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

## Use

- **Present:** click **Present ▸** (or hover a slide → *Present from here*). Arrow keys / space / click to move, **Esc** to exit.
- **PDF:** open the page in Chrome → **Cmd/Ctrl + P** → *Save as PDF*. Print CSS sets the page to 1920×1080, one slide per page. Turn on *Background graphics* if the preview looks flat.

## Where things live

| Path | What |
|---|---|
| `components/slides/*.tsx` | One file per slide. Positions are absolute, in 1920×1080 px. |
| `components/chrome.tsx` | Kicker, brush nav bar, page badge. Section names are in `SECTIONS`. |
| `components/ui.tsx` | `Card`, `Panel`, `Callout`, `Src`, `Tag`, `Phone`, `Img`. |
| `app/globals.css` | Tailwind theme tokens (`or`, `peach`, `ink`, `mute`…), slide primitives, print rules. |
| `lib/sources.ts` | Every figure in the deck with its source and the date it was checked. |
| `public/assets/` | Mascot, brush shapes, illustrations and v2 app screens (webp). |
| `resources/` | PDF jurnal & laporan yang jadi sumber angka di deck, plus daftar sitasinya (`resources/README.md`). |
