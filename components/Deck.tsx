"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import Intro from "@/components/slides/Intro";
import Problem from "@/components/slides/Problem";
import Analysis from "@/components/slides/Analysis";
import Solution from "@/components/slides/Solution";
import Architecture from "@/components/slides/Architecture";
import Market from "@/components/slides/Market";
import BusinessModel from "@/components/slides/BusinessModel";

const SLIDES: { name: string; node: ReactNode }[] = [
  { name: "Introduction", node: <Intro /> },
  { name: "Problem", node: <Problem /> },
  { name: "Analysis", node: <Analysis /> },
  { name: "Solution", node: <Solution /> },
  { name: "Architecture", node: <Architecture /> },
  { name: "Market", node: <Market /> },
  { name: "Business Model", node: <BusinessModel /> },
];

/** Renders a 1920×1080 slide scaled to fit its container. */
function Stage({ children, className = "", fit = "width" }: { children: ReactNode; className?: string; fit?: "width" | "contain" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth / 1920;
      const s = fit === "contain" ? Math.min(w, el.clientHeight / 1080) : w;
      setScale(s);
      setOffset(fit === "contain" ? { x: (el.clientWidth - 1920 * s) / 2, y: (el.clientHeight - 1080 * s) / 2 } : { x: 0, y: 0 });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fit]);

  return (
    <div ref={ref} className={`frame relative overflow-hidden ${className}`}>
      <div className="slide" style={{ ["--s" as string]: scale, left: offset.x, top: offset.y }}>
        {children}
      </div>
    </div>
  );
}

export default function Deck() {
  const [present, setPresent] = useState<number | null>(null);

  const go = useCallback((d: number) => setPresent((p) => (p === null ? p : Math.min(SLIDES.length - 1, Math.max(0, p + d)))), []);

  useEffect(() => {
    if (present === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Escape") {
        setPresent(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, go]);

  const start = (i: number) => {
    setPresent(i);
    document.documentElement.requestFullscreen?.().catch(() => {});
  };
  const stop = () => {
    setPresent(null);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };

  return (
    <>
      <header className="no-print mx-auto flex max-w-[1200px] flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 pt-6 pb-4">
        <h1 className="text-[18px] font-semibold">
          <span className="text-or-d">Saku</span> · Number over Address
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-mute">
          <span>Cmd/Ctrl + P → Save as PDF · one slide per page</span>
          <button
            type="button"
            onClick={() => start(0)}
            className="rounded-full bg-or px-4 py-1.5 text-[14px] font-semibold text-white transition hover:bg-or-d focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or-d"
          >
            Present ▸
          </button>
        </div>
      </header>

      <main className="deck mx-auto flex max-w-[1200px] flex-col gap-6 px-4 pb-12">
        {SLIDES.map((s, i) => (
          <section key={s.name} aria-label={`Slide ${i + 1}: ${s.name}`} className="group relative">
            <Stage className="aspect-video w-full rounded-[10px] bg-white shadow-[0_10px_30px_rgba(120,80,30,.14)]">{s.node}</Stage>
            <button
              type="button"
              onClick={() => start(i)}
              className="no-print absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-ink opacity-0 shadow transition group-hover:opacity-100 focus-visible:opacity-100"
            >
              Present from here
            </button>
          </section>
        ))}
      </main>

      {present !== null && (
        <div className="present no-print" role="dialog" aria-label={`Presenting slide ${present + 1}`} onClick={() => go(1)}>
          <Stage fit="contain" className="h-full w-full">
            {SLIDES[present].node}
          </Stage>
          <div className="absolute right-4 bottom-4 flex items-center gap-2 text-[13px] text-white/70" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => go(-1)} className="rounded px-2 py-1 hover:bg-white/10" aria-label="Previous slide">
              ‹
            </button>
            <span className="tabular-nums">
              {present + 1} / {SLIDES.length}
            </span>
            <button type="button" onClick={() => go(1)} className="rounded px-2 py-1 hover:bg-white/10" aria-label="Next slide">
              ›
            </button>
            <button type="button" onClick={stop} className="ml-2 rounded px-2 py-1 hover:bg-white/10">
              Esc
            </button>
          </div>
        </div>
      )}
    </>
  );
}
