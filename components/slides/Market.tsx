import { SlideChrome } from "@/components/chrome";
import { Callout, Card, Img, Panel, Src } from "@/components/ui";

// World Bank RPW Q3 2025 + Saku in-app fee. Bars scaled to the largest value.
const COST = [
  { label: "Non-digital services", pct: 7.3, good: false },
  { label: "Global average", pct: 6.36, good: false },
  { label: "Digital services", pct: 4.59, good: false },
  { label: "SDG 2030 target", pct: 3.0, good: true },
  { label: "Saku, end to end*", pct: 2.5, good: true, saku: true },
];
const COST_MAX = 7.3;

// Separate reach signals, circles sized by area (diameter ∝ √value).
const REACH = [
  { v: 230, label: "internet users", src: "DataReportal 2026", x: 34, y: 100, bg: "linear-gradient(150deg,#F0A353,#F6C662)", fs: 30 },
  { v: 69.32, label: "QRIS users", src: "BI, Aug 2026", x: 314, y: 104, bg: "#F2B25D", fs: 24 },
  { v: 22.69, label: "crypto", src: "OJK", x: 340, y: 262, bg: "#F7D06C", fs: 18, dark: true },
];
const R_MAX = 270;

const SIGNALS = [
  { big: "+77.5%", title: "Stablecoins already cross borders", body: "to $220.3B globally in a year; average payment ≈ $3,000, sized like remittances, not trades.", by: "Chainalysis", src: "2026, global" },
  { big: "900M", title: "Unbanked, but already on a phone", body: "of the 1.3B adults with no account own a mobile phone; 530M have a smartphone.", by: "World Bank", src: "Global Findex 2025" },
  { big: "7% → 3%", title: "Phone money forces prices down", body: "Kenyan transfer commissions, 2003–2010, as M-Pesa pushed rivals like Western Union to cut prices.", by: "Mbiti & Weil", src: "NBER WP 17129, 2011" },
];

export default function Market() {
  return (
    <>
      <SlideChrome page={6} active="Market" kicker="Market Validation & Entry" />

      <h2 className="h-q absolute top-[160px] left-[38px] w-[470px] text-[46px]">
        US$17.2B flows home every year. Why does sending it still cost 4.6–7.3%?
      </h2>
      <p className="absolute top-[418px] left-[38px] w-[460px] text-[18px] leading-normal text-mute">
        Indonesian migrant workers already send money by habit. The rail is expensive; the identity they use is a phone number.
      </p>
      <div className="absolute top-[560px] left-[38px] h-[500px] w-[470px] overflow-hidden rounded-[26px] bg-peach-2">
        <Img
          src="/assets/layer-stack.webp"
          alt="Layered illustration: high-cost rails at top, phone identity in the middle, social and telecom at the base"
          className="h-full w-full scale-[1.3] object-contain"
        />
      </div>

      <div className="absolute top-[162px] left-[550px] flex w-[760px] flex-col gap-4">
        <Card className="px-7 py-5">
          <h3 className="mb-1.5 text-[28px] font-semibold text-or">The Prize</h3>
          <ul className="list-disc pl-5 text-[17.5px] leading-normal">
            <li>
              <b className="font-semibold">US$17.2B</b> in remittances from Indonesian migrant workers in 2025;{" "}
              <b className="font-semibold">US$9.16B</b> in H1 2026 alone.
            </li>
            <li>
              <b className="font-semibold">Malaysia is #1:</b> US$4.77B (≈28%) in 2025, then Saudi Arabia 3.99B, Taiwan 2.97B, Hong Kong 2.63B.
            </li>
          </ul>
          <Src by="Bank Indonesia" className="mt-1.5">
            SEKI Table V.31, remittances by placement country (2025, H1 2026)
          </Src>
        </Card>
        <Card className="px-7 py-5">
          <h3 className="mb-1.5 text-[28px] font-semibold text-or">Focused Entry</h3>
          <ul className="list-disc pl-5 text-[17.5px] leading-normal">
            <li>
              <b className="font-semibold">Corridor first:</b> Malaysia → Indonesia, then other PMI corridors.
            </li>
            <li>
              <b className="font-semibold">Distribution where people already talk:</b> share links and OTP over WhatsApp.
            </li>
            <li>
              <b className="font-semibold">Out of scope for now:</b> US–Mexico and India–UAE corridors from v1.
            </li>
          </ul>
        </Card>
      </div>

      <div className="absolute top-[592px] left-[550px] grid w-[760px] grid-cols-3 gap-3.5">
        {SIGNALS.map((s) => (
          <Panel key={s.title} className="flex h-[270px] flex-col px-[18px] py-4">
            <strong className="text-[34px] leading-[1.1] font-semibold text-or tabular-nums">{s.big}</strong>
            <h4 className="mt-0.5 mb-1 text-[16px] font-semibold">{s.title}</h4>
            <p className="text-[14px] leading-snug">{s.body}</p>
            <Src by={s.by} className="mt-auto text-[11px]!">
              {s.src}
            </Src>
          </Panel>
        ))}
      </div>
      <Callout className="absolute top-[880px] left-[550px] w-[760px] px-[18px] py-3 text-[16px] leading-snug font-normal! text-ink!">
        <b className="font-semibold text-or-d">Positioning:</b> P2P asset transfer with a rupiah off-ramp. Crypto is not a legal payment
        instrument in Indonesia (UU 7/2011; BI; OJK, Oct 2025), so Saku does not pitch merchant payments in crypto.
      </Callout>

      <Panel className="absolute top-[162px] left-[1336px] w-[559px] px-7 pt-6 pb-5">
        <h3 className="mb-1 text-[22px] font-semibold">Cost of sending $200</h3>
        <p className="mb-4 text-[14.5px] text-mute">Global averages, Q3 2025, vs. Saku&apos;s configured fees</p>
        {COST.map((c) => (
          <div key={c.label} className="mb-2.5 grid grid-cols-[160px_1fr_70px] items-center gap-3 text-[15.5px]">
            <span>{c.label}</span>
            <span className="relative h-7 overflow-hidden rounded-lg bg-peach-2">
              <span
                className={`absolute inset-y-0 left-0 rounded-lg ${"saku" in c ? "bg-[#5FAE73]" : c.good ? "bg-good" : "bg-[linear-gradient(90deg,#F0A353,#F7D06C)]"}`}
                style={{ width: `${(c.pct / COST_MAX) * 100}%` }}
              />
            </span>
            <b className="text-right font-bold tabular-nums">{c.pct.toFixed(2)}%</b>
          </div>
        ))}
        <Src by="World Bank" className="mt-2">
          Remittance Prices Worldwide, Q3 2025. *Saku = top-up 0.70% + transfer 0.30% + off-ramp 1.50% (capped at 25 USDC), the
          defaults in the codebase. The rupiah leg is simulated today, so partner costs are not yet included.
        </Src>
      </Panel>

      <Panel className="absolute top-[612px] left-[1336px] h-[448px] w-[559px] px-7 py-[22px]">
        <h3 className="text-[22px] font-semibold">Reach signals in Indonesia</h3>
        <p className="mt-0.5 text-[14px] text-mute">Three separate sources, sized by area. Not a nested TAM.</p>
        {REACH.map((r) => {
          const d = R_MAX * Math.sqrt(r.v / REACH[0].v);
          return (
            <div
              key={r.label}
              className="absolute flex flex-col items-center justify-center rounded-full text-center leading-tight"
              style={{ left: r.x, top: r.y, width: d, height: d, background: r.bg, color: r.dark ? "#5a3d14" : "#fff" }}
            >
              <b className="font-bold tabular-nums" style={{ fontSize: r.fs }}>
                {r.v >= 100 ? `${r.v}M` : r.v % 1 ? `${r.v.toFixed(1)}M` : `${r.v}M`}
              </b>
              <span className="px-2.5 font-medium" style={{ fontSize: r.fs <= 18 ? 10 : 13 }}>
                {r.label}
                <br />
                {r.src}
              </span>
            </div>
          );
        })}
        <Img src="/assets/hamster.webp" alt="" className="absolute top-[70px] right-[18px] w-[84px]" />
        <Src className="absolute right-7 bottom-[18px] left-7">
          DataReportal Digital 2026 · BI press release 28/196/DKom · KSSK press release 03/KSSK/Pers/2026
        </Src>
      </Panel>
    </>
  );
}
