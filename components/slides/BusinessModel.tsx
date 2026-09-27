import { SlideChrome } from "@/components/chrome";
import { Img, Tag } from "@/components/ui";
import type { ReactNode } from "react";

function Cell({ title, items, className = "" }: { title: string; items: ReactNode[]; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[22px] border-[2.5px] border-or px-5 py-[18px] ${className}`}>
      <Tag>{title}</Tag>
      <ul className="mt-3.5 list-disc pl-[22px] text-[19px] leading-normal [&>li]:mb-2.5 [&_b]:font-semibold">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default function BusinessModel() {
  return (
    <>
      <SlideChrome
        page={7}
        active="Market"
        kicker={
          <>
            Business Model Canvas <em className="text-or not-italic">Saku</em>
          </>
        }
      />

      <div className="absolute top-[162px] left-[22px] grid h-[670px] w-[1873px] grid-cols-5 grid-rows-2 gap-4">
        <Cell
          className="row-span-2"
          title="Key Partners"
          items={[
            <><b>EVM chain</b> (BNB Smart Chain Testnet today; design is chain-portable)</>,
            <><b>Privy</b>: enclave wallet signing</>,
            <><b>Fonnte</b>: WhatsApp OTP delivery</>,
            <><b>Supabase</b>: database &amp; auth storage</>,
            <><b>PancakeSwap</b> liquidity for escrow swaps</>,
            <><b>Xendit</b> + an OJK-licensed crypto trader for the rupiah leg (simulated today)</>,
          ]}
        />
        <Cell
          title="Key Activities"
          items={["Number → wallet resolution and contact graph", "Enforcing tx policy and daily spend caps", "Off-ramp settlement via escrow"]}
        />
        <Cell
          className="row-span-2"
          title="Value Propositions"
          items={[
            <><b>Numbers over addresses:</b> there is no address field to get wrong</>,
            <><b>No seed, gas or network</b> choices in the normal flow</>,
            <><b>Social money:</b> Packets and Split Bill built in</>,
            <><b>Honest custody:</b> bounded, logged, recoverable with people you trust</>,
          ]}
        />
        <Cell title="Customer Relationship" items={["Bounded custody with social recovery", "Sponsored gas for first transfers"]} />
        <Cell
          className="row-span-2"
          title="Customer Segments"
          items={[
            <><b>Anyone with a phone number:</b> sign-up takes 241 dial codes, and the number sets the local currency</>,
            <><b>Southeast Asia first:</b> priced in IDR, MYR, SGD, PHP, THB, VND</>,
            <><b>Migrant workers</b> sending home, starting Malaysia → Indonesia</>,
            <><b>Communities:</b> arisan, patungan, group gifting</>,
          ]}
        />
        <Cell
          title="Key Resources"
          items={["Five-gate signing stack", <><code className="font-mono text-[17px]">SakuOfframpEscrow</code> contract</>, "180 automated assertions (23 contract · 139 web · 18 policy)"]}
        />
        <Cell title="Channels" items={["Sharing over WhatsApp: OTP, pay links, packets", "Mobile web app (installable PWA)", "Pay links & QR codes anyone can open"]} />
      </div>

      <div className="absolute top-[848px] left-[22px] grid h-[212px] w-[1873px] grid-cols-2 gap-4">
        <Cell
          title="Cost Structure"
          items={[
            <><b>Signing &amp; OTP infrastructure</b> per active user</>,
            <><b>Gas sponsorship</b>: ~0.005 tBNB per drip, capped per wallet</>,
            <><b>Security audits</b> and off-ramp liquidity</>,
          ]}
        />
        <Cell
          title="Revenue Streams"
          items={[
            <><b>Transfer 0.30%</b> on every signed movement (live, shown before confirm)</>,
            <><b>Top-up 0.70%</b> · <b>Off-ramp 1.50%</b>, capped at 25 USDC (fiat leg simulated)</>,
            <><b>No fee on staking</b>; Business API for number-based payouts (roadmap)</>,
          ]}
        />
      </div>
      <Img src="/assets/hamster-headphone.png" alt="" className="absolute top-[930px] left-[820px] w-[120px]" />
    </>
  );
}
