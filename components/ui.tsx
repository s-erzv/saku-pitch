import type { ReactNode } from "react";

type Box = { className?: string; children?: ReactNode; style?: React.CSSProperties };

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** Peach filled card (the main Saku surface). */
export function Card({ className, children, style }: Box) {
  return (
    <div className={cx("rounded-[26px] bg-peach", className)} style={style}>
      {children}
    </div>
  );
}

/** White card with the orange outline. */
export function Panel({ className, children, style }: Box) {
  return (
    <div className={cx("rounded-[26px] border-[2.5px] border-or bg-white", className)} style={style}>
      {children}
    </div>
  );
}

/** Dashed orange callout. */
export function Callout({ className, children, style }: Box) {
  return (
    <div
      className={cx("rounded-2xl border-2 border-dashed border-or font-medium text-or", className)}
      style={style}
    >
      {children}
    </div>
  );
}

/** Source line. Put the author/org in `by`, the rest in children. */
export function Src({ by, children, className }: { by?: string; children?: ReactNode; className?: string }) {
  return (
    <span className={cx("block text-[12.5px] leading-snug font-light text-mute", className)}>
      {by && <b className="font-medium">{by}</b>}
      {by && children ? ", " : null}
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-xl bg-peach px-4 py-1.5 text-[19px] font-semibold text-or-d">
      {children}
    </span>
  );
}

export function Phone({
  src,
  alt,
  className,
  style,
  notch = true,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  notch?: boolean;
}) {
  return (
    <div className={cx("phone", notch && "notch", className)} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}

/** Plain <img> for illustrations (they're pre-sized webp in /public/assets). */
export function Img({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} style={style} />;
}
