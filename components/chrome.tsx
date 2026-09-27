import type { ReactNode } from "react";

export const SECTIONS = ["Introduction", "Problem", "Analysis", "Solution", "Architecture", "Market"] as const;
export type Section = (typeof SECTIONS)[number];

/** Kicker (top-left), brush nav bar and page badge shared by slides 2–7. */
export function SlideChrome({ kicker, active, page }: { kicker: ReactNode; active: Section; page: number }) {
  return (
    <>
      <div className="absolute top-[66px] left-[38px] max-w-[480px] text-[24px] leading-tight font-medium text-ink">
        {kicker}
      </div>

      <nav
        aria-label="Deck sections"
        className="nav-bar absolute top-[42px] left-[550px] flex h-[88px] w-[1176px] items-center justify-between px-[58px]"
      >
        {SECTIONS.map((s) => (
          <span
            key={s}
            className={
              s === active
                ? "border-b-2 border-white pb-1 text-[19px] font-semibold text-white"
                : "border-b-2 border-transparent pb-1 text-[19px] font-semibold text-white/70"
            }
          >
            {s}
          </span>
        ))}
      </nav>

      <div className="badge-ring absolute top-[42px] left-[1745px] flex h-[88px] w-[150px] items-center justify-center gap-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/hamster.webp" alt="" className="h-[54px] w-[54px] object-contain" />
        <b className="text-[34px] font-semibold text-black">{page}</b>
      </div>
    </>
  );
}
