import { SlideChrome } from "@/components/chrome";
import { Card, Img, Panel } from "@/components/ui";

const FEATURES = [
  { title: "Sign in with a number", body: "WhatsApp OTP. The wallet is created for you, no seed phrase." },
  { title: "Send to contacts", body: "Pick a contact or type a number. Gas is topped up for you." },
  { title: "Packets", body: "Themed money envelopes, split evenly or at random." },
  { title: "Split Bill", body: "Divide a receipt and request each share by number." },
];

// A real sequence, so the numbering carries information.
const FLOW = [
  { n: 1, title: "Choose a contact", sub: "Recipient is a number, never an address", src: "/assets/screen-transfer.webp", alt: "Transfer screen with contact picker" },
  { n: 2, title: "Confirm & send", sub: "Fee shown up front: 0.30%", src: "/assets/screen-confirm.webp", alt: "Confirm screen: send 1 USDC to sena, platform fee 0.30%" },
  { n: 3, title: "Send a Packet", sub: "Gifting, the way people already do it", src: "/assets/screen-packet.webp", alt: "Packet screen" },
  { n: 4, title: "Split a bill", sub: "Each person pays their own share", src: "/assets/screen-split.webp", alt: "Split bill screen" },
];

const PROOF = [
  { big: "4 actions", body: "tap, enter number, submit, type OTP. Wallet creation adds zero steps." },
  { big: "0", body: "seed phrases, gas inputs or network pickers. A short address and BscScan link stay, optional." },
  { big: "No address field", body: "the recipient input accepts digits only; contacts store no address at all" },
];

export default function Solution() {
  return (
    <>
      <SlideChrome page={4} active="Solution" kicker="What if a phone number were enough?" />

      <div className="absolute top-[600px] -left-[60px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(247,190,120,.45),rgba(255,255,255,0)_65%)]" />
      <div className="absolute top-[156px] left-[54px] w-[560px]">
        <h2 className="bg-[linear-gradient(95deg,#F0A353,#F8D272)] bg-clip-text text-[128px] leading-none font-extrabold tracking-[-3px] text-transparent">
          Saku.
        </h2>
        <p className="mt-2.5 text-[44px] leading-[1.18] font-bold tracking-[-0.5px] text-or">
          Send money as easily as a text message.
        </p>
      </div>

      <div className="absolute top-[470px] left-[44px] grid w-[560px] grid-cols-2 gap-3.5">
        {FEATURES.map((f) => (
          <Card key={f.title} className="px-[22px] py-[18px]">
            <h4 className="text-[22px] font-semibold text-or">{f.title}</h4>
            <p className="mt-1 text-[15.5px] leading-snug">{f.body}</p>
          </Card>
        ))}
      </div>
      <div className="absolute top-[800px] left-[44px] h-[252px] w-[560px] overflow-hidden rounded-[26px] bg-[linear-gradient(120deg,#F0A353,#F8D272)] px-7 py-6 text-white">
        <p className="text-[15px] font-semibold tracking-[0.8px] uppercase opacity-90">To send your first transfer</p>
        <div className="mt-3 grid grid-cols-[1fr_1fr] gap-4 text-[16px] leading-snug">
          <div className="rounded-2xl bg-white/20 px-4 py-3">
            <b className="block text-[18px]">Typical wallet</b>
            Seed phrase → network → gas coin → 42-char address
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 text-ink">
            <b className="block text-[18px] text-or-d">Saku</b>
            Number → OTP → pick a contact. Wallet and gas handled for you.
          </div>
        </div>
        <Img src="/assets/hamster-headphone.png" alt="" className="absolute -right-3 -bottom-6 w-[120px]" />
      </div>

      <div className="absolute top-[156px] left-[640px] h-[640px] w-[1255px] rounded-[26px] border-[2.5px] border-or bg-[#FFF8F1] px-[30px] pt-[30px] pb-6">
        <div className="grid h-full grid-cols-4 gap-[26px]">
          {FLOW.map((s) => (
            <div key={s.n} className="flex min-h-0 flex-col gap-3">
              <div className="text-[16.5px] leading-tight font-semibold">
                {s.n} · {s.title}
                <span className="block text-[13.5px] font-normal text-mute">{s.sub}</span>
              </div>
              <div className="min-h-0 flex-1 overflow-hidden rounded-3xl border border-[#F1E3D3] bg-white shadow-[0_10px_26px_rgba(120,80,30,.14)]">
                <Img src={s.src} alt={s.alt} className="block w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[818px] left-[640px] grid w-[1255px] grid-cols-3 gap-[18px]">
        {PROOF.map((p) => (
          <Panel key={p.big} className="px-6 py-[18px]">
            <strong className="block text-[34px] leading-[1.15] font-bold text-or">{p.big}</strong>
            <p className="mt-1 text-[15.5px] leading-snug">{p.body}</p>
          </Panel>
        ))}
      </div>
      <p className="absolute right-[38px] bottom-[18px] left-[640px] text-[12px] font-light text-mute">
        Measured from the Saku v2 codebase (get-started, transfer and provision flows), audit of 12 Sep 2026. Screens: BSC Testnet build, demo USDC.
      </p>
    </>
  );
}
