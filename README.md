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

## Before you pitch

Every external figure was re-checked on 27 Sep 2026 (links in `lib/sources.ts`). Still worth doing:

- Every external figure now points at a primary source (KSSK/BI press releases, BI SEKI, World Bank, papers); PDFs are in `resources/`. Paywalled or bot-blocked papers (marked ⬇️ manual in `resources/README.md`) still need a download through a browser or campus login.
- Chainalysis flow figures on the Problem slide are global, and labelled so. Don't present them as Indonesia's.
- Saku's ≈2.5% end-to-end cost uses the default fees in `saku/web/lib/fees.ts`; the rupiah leg is simulated, so partner costs are not in it yet.
