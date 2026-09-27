import { SlideChrome } from "@/components/chrome";
import { Card, Img, Panel, Src } from "@/components/ui";

/** % change, 12 months to June 2026 vs prior year (Chainalysis 2026). One scale for all bars. */
const FLOWS = [
  { label: "Wallet-to-wallet (P2P) within a country", detail: "$56.8B → $228.7B · P2P is now 96% stablecoins", pct: 302.9 },
  { label: "Stablecoins crossing borders", detail: "$124.2B → $220.3B · avg ≈ $3,000 per payment", pct: 77.5 },
  { label: "Into exchanges, DeFi & services", detail: "$9.30T → $8.90T", pct: -4.3 },
];
const MAX = 302.9;
const ZERO = 10; // % of track reserved left of zero
const SPAN = 67; // % of track that equals MAX

const STATS = [
  {
    big: "22.69M",
    body: "crypto asset investors in Indonesia, June 2026",
    by: "OJK",
    src: "KSSK press release 03/KSSK/Pers/2026, 3 Aug 2026",
  },
  {
    big: (
      <>
        #14 <small className="text-[24px] font-medium">of 117</small>
      </>
    ),
    body: (
      <>
        Indonesia&apos;s grassroots adoption rank; <b>#10</b> in cross-border flows, <b>#13</b> in P2P
      </>
    ),
    by: "Chainalysis",
    src: "2026 Global Crypto Adoption Index (Jul 2025–Jun 2026)",
  },
  {
    big: "0x + 40 hex",
    body: "is how you address a person on-chain, so users copy recipients from history",
    by: "Tsuchiya et al.",
    src: "USENIX Security 2025",
  },
  {
    big: "US$83.8M",
    body: "lost in 6,633 address-poisoning incidents; 270M attempts on 17M victims",
    by: "Tsuchiya et al.",
    src: "USENIX Security 2025",
  },
];

export default function Problem() {
  return (
    <>
      <SlideChrome
        page={2}
        active="Problem"
        kicker={
          <>
            The <em className="text-or not-italic">Last Mile</em> of Usability
          </>
        }
      />

      <h2 className="h-q absolute top-[156px] left-[38px] w-[480px] text-[46px]">
        22.7 million crypto investors in Indonesia. Why is sending it still this hard?
      </h2>
      <p className="absolute top-[462px] left-[38px] w-[470px] text-[19px] leading-relaxed font-medium">
        Adoption is real. To reach a person on-chain you still need a 42-character string, and one wrong pick is permanent.
      </p>

      <div className="absolute top-[162px] left-[550px] grid w-[900px] grid-cols-2 gap-4">
        {STATS.map((s, i) => (
          <Card key={i} className="flex h-[196px] flex-col gap-1 overflow-hidden px-[28px] pt-5 pb-4">
            <strong className="text-[40px] leading-[1.1] font-semibold tracking-[-0.5px] text-or tabular-nums">{s.big}</strong>
            <p className="text-[18px] leading-snug">{s.body}</p>
            <Src by={s.by} className="mt-auto pt-2">
              {s.src}
            </Src>
          </Card>
        ))}
      </div>

      <div className="absolute top-[162px] left-[1470px] h-[408px] w-[425px] overflow-hidden rounded-[26px] border-[2.5px] border-or bg-white">
        <Img src="/assets/wallet-qr.webp" alt="Illustration of a digital wallet sending money by name" className="h-full w-full object-cover" />
      </div>

      {/* chart */}
      <Panel className="absolute top-[602px] left-[24px] h-[458px] w-[1016px] px-[34px] py-7">
        <h3 className="text-[23px] font-semibold tracking-[-0.2px]">Worldwide, P2P crypto grew 4× in a year, even through a 50% crash</h3>
        <p className="mt-1 mb-[22px] text-[15px] text-mute">Global on-chain value, 12 months to June 2026 vs. the year before</p>
        <div className="grid grid-cols-[300px_1fr] items-center gap-x-[18px] gap-y-[20px]">
          {FLOWS.map((f) => {
            const w = (Math.abs(f.pct) / MAX) * SPAN;
            const pos = f.pct >= 0;
            return (
              <div key={f.label} className="contents">
                <div className="text-[16px] leading-snug font-medium">
                  {f.label}
                  <small className="block text-[13.5px] font-light text-mute">{f.detail}</small>
                </div>
                <div className="relative h-[46px]">
                  <div className="absolute -top-2 -bottom-2 border-l-2 border-dashed border-[#CDBFB1]" style={{ left: `${ZERO}%` }} />
                  <div
                    className={
                      pos
                        ? "absolute top-1.5 h-[34px] rounded-r-[10px] bg-[linear-gradient(90deg,#F0A353,#F7D06C)]"
                        : "absolute top-1.5 h-[34px] rounded-l-[10px] bg-[#C9BBAE]"
                    }
                    style={pos ? { left: `${ZERO}%`, width: `${w}%` } : { right: `${100 - ZERO}%`, width: `${w}%` }}
                  />
                  <span
                    className={`absolute top-2.5 text-[20px] font-bold whitespace-nowrap tabular-nums ${pos ? "" : "text-mute"}`}
                    style={{ left: `${pos ? ZERO + w + 1.5 : ZERO + 2}%` }}
                  >
                    {pos ? "+" : "−"}
                    {Math.abs(f.pct)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Src by="Chainalysis" className="absolute right-[34px] bottom-[22px] left-[34px]">
          2026 Global Crypto Adoption Index (global figures, Jul 2025–Jun 2026). Bars share one scale. Total crypto market cap fell ~50% (−$2.1T) over the same period.
        </Src>
      </Panel>

      {/* address poisoning */}
      <Panel className="absolute top-[602px] left-[1058px] flex h-[458px] w-[410px] flex-col gap-2.5 px-6 py-[22px]">
        <h3 className="text-[20px] font-semibold text-or">What the wallet shows vs. what&apos;s there</h3>
        <Addr label="Your friend">
          <b className="text-or-d">0x71C7</b>656EC7ab88b098defB751B7401B5f6d<b className="text-or-d">8976F</b>
        </Addr>
        <Addr label="Attacker's lookalike">
          <b className="text-or-d">0x71C7</b>
          <i className="font-bold text-bad not-italic">9d02A41f5c0E83b7719aC06e2b4c</i>
          <b className="text-or-d">8976F</b>
        </Addr>
        <Addr label="Both render in history as" center>
          <b className="text-or-d">0x71C7…8976F</b>
        </Addr>
        <p className="text-[14.5px] leading-snug">
          Even experienced users make irreversible errors; many assume a transfer can be reversed or cancelled.
        </p>
        <Src by="Voskobojnikov et al.">ACM CHI 2021 (6,859 UX reviews of the top 5 mobile wallets) · Fröhlich et al., ACM DIS 2021</Src>
      </Panel>

      {/* quote */}
      <Panel className="absolute top-[602px] left-[1486px] h-[458px] w-[410px] px-[30px] pt-[34px] pb-7">
        <Img src="/assets/quote.webp" alt="" className="w-[66px] -scale-100" />
        <p className="mt-3.5 text-[23px] leading-normal">
          Adoption fails when interfaces demand users adapt, instead of adapting to users.
        </p>
        <p className="mt-3.5 text-[23px] leading-normal">
          The last mile isn&apos;t infrastructure. It&apos;s <em className="font-medium text-or not-italic">interaction</em>.
        </p>
        <Img src="/assets/hamster.webp" alt="" className="absolute right-5 bottom-[54px] w-[92px]" />
        <Src className="absolute right-[30px] bottom-6 left-[30px]">Concept by Saku&apos;s team</Src>
      </Panel>
    </>
  );
}

function Addr({ label, center, children }: { label: string; center?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded-[14px] bg-peach-2 px-3.5 py-2 font-mono text-[13.5px] leading-snug break-all ${center ? "text-center" : ""}`}>
      <span className="block font-sans text-[12.5px] text-mute">{label}</span>
      {children}
    </div>
  );
}
