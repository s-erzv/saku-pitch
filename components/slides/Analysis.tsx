import { SlideChrome } from "@/components/chrome";
import { Callout, Card, Img, Panel, Src } from "@/components/ui";

const FINDINGS = [
  {
    title: "Habit Beats Ease",
    body: "Two Indonesian UTAUT2 studies agree: habit is the strongest predictor of intention to use an e-wallet. People stick to the flow they already know.",
    by: "Megadewandanu et al.",
    src: "ICST 2016 (n=372) · Widodo et al., ICOIACT 2019",
  },
  {
    title: "People Think in Names, Not Hashes",
    body: "Users hold wrong mental models of keys and anonymity, then mismanage them: 22.5% of 990 Bitcoin users surveyed had lost coins or keys at least once.",
    by: "Mai et al.",
    src: "USENIX SOUPS 2020 (N=29) · Krombholz et al., Financial Cryptography 2016 (n=990)",
  },
  {
    title: "Stuck Before You Start",
    body: "A fresh wallet can receive USDC but can't send it until it also holds the chain's native coin for gas.",
    by: undefined,
    src: "EVM fee model: every transaction pays gas in the native coin (BNB, ETH)",
  },
];

const STATS = [
  { big: "69.3M", body: "QRIS users by Aug 2026, about a quarter of Indonesians", by: "Bank Indonesia", src: "Press release 28/196/DKom, 24 Sep 2026" },
  { big: "9 in 10", body: "Indonesian internet users are on WhatsApp every month", by: "We Are Social & Meltwater", src: "Digital 2026: Indonesia" },
  { big: "2.3B", body: "mobile money accounts worldwide, keyed to a phone number", by: "GSMA", src: "State of the Industry 2026" },
];

export default function Analysis() {
  return (
    <>
      <SlideChrome page={3} active="Analysis" kicker="The Hidden Cost of Machine-First Payments" />

      <h2 className="h-q absolute top-[180px] left-[38px] w-[470px] text-[50px]">
        Money moves by phone number everywhere. Why not on-chain?
      </h2>
      <div className="absolute top-[452px] left-[38px] h-[400px] w-[458px] overflow-hidden rounded-[26px] bg-peach-2">
        <Img
          src="/assets/no-bridge.webp"
          alt="Contact names on one side, a hex address on the other, no bridge between them"
          className="h-full w-full scale-[1.25] object-contain"
        />
      </div>
      <Callout className="absolute top-[872px] left-[38px] w-[458px] rounded-[18px] bg-white px-[22px] py-4 text-[19px] leading-snug">
        There is no native link between the identity people use and the identity a chain uses.
      </Callout>

      <div className="absolute top-[162px] left-[550px] flex w-[640px] flex-col gap-[18px]">
        {FINDINGS.map((f) => (
          <Card key={f.title} className="px-8 pt-6 pb-5">
            <h3 className="mb-1.5 text-[31px] font-semibold tracking-[-0.3px] text-or">{f.title}</h3>
            <p className="text-[18.5px] leading-relaxed">{f.body}</p>
            <Src by={f.by} className="mt-2">
              {f.src}
            </Src>
          </Card>
        ))}
      </div>

      <div className="absolute top-[862px] left-[550px] grid w-[640px] grid-cols-3 gap-3">
        {STATS.map((s) => (
          <Panel key={s.big} className="flex h-[196px] flex-col px-[18px] py-4">
            <strong className="text-[40px] leading-[1.1] font-semibold text-or tabular-nums">{s.big}</strong>
            <p className="mt-1 text-[14.5px] leading-snug">{s.body}</p>
            <Src by={s.by} className="mt-auto text-[11px]!">
              {s.src}
            </Src>
          </Panel>
        ))}
      </div>

      <div className="absolute top-[162px] left-[1222px] h-[520px] w-[673px] overflow-hidden rounded-[26px] border-[2.5px] border-or bg-white">
        {/* the webp is square with ~80px of white margin; crop to its content so it fills the card */}
        <Img
          src="/assets/web2-vs-web3.webp"
          alt="A QR payment finishes in one step; a crypto transfer passes network selection, gas and confirmation"
          className="absolute top-[-64px] left-[11px] w-[650px] max-w-none"
        />
      </div>
      <Callout className="absolute top-[696px] left-[1222px] w-[673px] bg-white px-4 py-2 text-center text-[17px] whitespace-nowrap">
        More steps → more irreversible choices → more cognitive load{" "}
        <span className="text-[12.5px] font-light text-mute">(Sweller, 1988)</span>
      </Callout>

      <div className="absolute top-[758px] left-[1222px] h-[302px] w-[300px] overflow-hidden rounded-[26px] border-[2.5px] border-or bg-white">
        <Img
          src="/assets/eth-stuck.webp"
          alt="A wallet holding 0.85 ETH blocked by an empty gas meter"
          className="absolute top-[-10px] left-1/2 w-[270px] max-w-none -translate-x-1/2"
        />
        <p className="absolute right-0 bottom-0 left-0 bg-peach px-5 py-2.5 text-[15px] leading-snug font-medium text-or-d">
          Holding value, unable to move it: the gas trap.
        </p>
      </div>
      <div className="absolute top-[758px] left-[1540px] flex h-[302px] w-[355px] flex-col rounded-[26px] border-2 border-dashed border-or bg-white px-6 py-4">
        <span className="text-[13px] font-semibold tracking-[0.8px] text-mute uppercase">Phone-number money works</span>
        <strong className="mt-0.5 block text-[40px] leading-none font-semibold text-or tabular-nums">194,000</strong>
        <p className="mt-1 text-[14.5px] leading-snug">Kenyan households (2%) lifted out of poverty by M-PESA access.</p>
        <Src by="Suri & Jack">Science 2016</Src>
        <strong className="mt-3 block text-[30px] leading-none font-semibold text-or tabular-nums">7% → 3%</strong>
        <p className="mt-1 text-[14.5px] leading-snug">Kenyan transfer commissions, 2003–2010, as M-Pesa forced rivals to cut prices.</p>
        <Src by="Mbiti & Weil">NBER WP 17129, 2011</Src>
        <Img src="/assets/hamster.webp" alt="" className="absolute right-3 -bottom-3 w-[62px]" />
      </div>
    </>
  );
}
