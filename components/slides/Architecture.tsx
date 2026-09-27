import { SlideChrome } from "@/components/chrome";
import { Callout, Card, Panel, Src } from "@/components/ui";

// The signing path, in order (ARCHITECTURE.md §3).
const GATES = [
  { title: "Browser", body: <>Builds the transaction and sends it <b>unsigned</b>. Holds no key, no bearer token.</> },
  { title: "Session gate", body: "httpOnly cookie script can't read, plus a same-origin check." },
  { title: "Tx policy", body: "Only USDC transfer/approve, escrow & staking. One chain, no native value, gas ceiling." },
  { title: "Spend cap", body: "Rolling 24-hour USDC limit per user (2,000 if unset, never off). Refuses past it." },
  { title: "Enclave signer", body: "Provider signs, authorized by a separate P-256 key held server-side." },
  { title: "ecrecover", body: "Signature must recover to the session's own wallet, or it's a failure." },
];

/** 24px line icons for the signing gates, same order as GATES. */
const ICONS: React.ReactNode[] = [
  // browser window
  <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" /></>,
  // cookie
  <><path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1-3-3Z" /><path d="M8.5 11.5h.01M12 15.5h.01M15.5 13h.01M9 16h.01" /></>,
  // checklist
  <><path d="M9 6h11M9 12h11M9 18h11" /><path d="m3.5 6 1.5 1.5L7.5 5M3.5 12l1.5 1.5 2.5-2.5M3.5 18l1.5 1.5 2.5-2.5" /></>,
  // gauge
  <><path d="M4 17a8 8 0 1 1 16 0" /><path d="m12 17 4-5" /><circle cx="12" cy="17" r="1.2" /></>,
  // chip with lock
  <><rect x="5" y="5" width="14" height="14" rx="2.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><rect x="9.5" y="11" width="5" height="4" rx="1" /><path d="M10.5 11V9.8a1.5 1.5 0 0 1 3 0V11" /></>,
  // signature check
  <><path d="M3 17c2-4 4-9 6-9s-1 9 1 9 2-5 4-5 1 5 3 5" /><path d="m15 5 2 2 4-4" /></>,
];

// ARCHITECTURE.md §4
const BLAST = [
  { who: "Stolen session cookie", can: "Act as that user while valid", stop: "Script can't read it; daily cap; every action logged" },
  { who: "XSS on the page", can: "Drive the open tab", stop: "Can't export the session, sign foreign contracts, other chains or native value" },
  { who: "App secret only", can: "Nothing that moves money", stop: "Authorization key is a separate secret" },
  { who: "Settler key", can: "Mint demo tokens, drain the gas faucet", stop: "Per-wallet drip caps; user balances untouched" },
  { who: "Database write", can: "A great deal, incl. the guardian graph", stop: "Nothing in the codebase; no audit trail on direct writes", critical: true },
  { who: "Authorization key", can: "Sign for every wallet", stop: "Nothing in the codebase. This is the crown jewel.", critical: true },
];

export default function Architecture() {
  return (
    <>
      <SlideChrome
        page={5}
        active="Architecture"
        kicker={
          <>
            Bounded <em className="text-or not-italic">Custody</em>
          </>
        }
      />

      <h2 className="h-q absolute top-[160px] left-[38px] w-[480px] text-[46px]">
        If the server can sign, what stops it from becoming the weak point?
      </h2>
      <p className="absolute top-[420px] left-[38px] w-[470px] text-[20px] leading-normal">
        Saku is <b className="font-semibold text-or-d">custodial by design</b>, and says so. After the browser, every signature has to pass five gates, and
        every decision, allowed or refused, is logged.
      </p>
      <CustodyFlow />
      <div className="absolute top-[802px] left-[38px] grid w-[470px] grid-cols-2 gap-2.5">
        {[
          ["Not MPC.", "One enclave-held key per user; no secret sharing."],
          ["Not non-custodial.", "The server can authorize a signature. We bound it."],
          ["Testnet demo.", "BSC Testnet, demo USDC, fiat legs simulated."],
          ["One known gap.", "The signing rate limiter fails open if the DB is down."],
        ].map(([b, t]) => (
          <div key={b} className="rounded-2xl border-2 border-dashed border-or px-4 py-3 text-[15px] leading-snug">
            <b className="font-semibold text-or-d">{b}</b> {t}
          </div>
        ))}
      </div>

      <ol className="absolute top-[162px] left-[550px] grid w-[1345px] grid-cols-6 gap-7">
        {GATES.map((g, i) => (
          <li key={g.title} className="step-arrow relative min-h-[218px] rounded-[22px] bg-peach px-[18px] pt-[18px] pb-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-or text-[17px] font-semibold text-white">
                {i === 0 ? "▸" : i}
              </span>
              <svg viewBox="0 0 24 24" aria-hidden className="h-[34px] w-[34px] fill-none stroke-or-d stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]">
                {ICONS[i]}
              </svg>
            </div>
            <h4 className="mt-2.5 mb-1.5 text-[20px] leading-tight font-semibold text-or-d">{g.title}</h4>
            <p className="text-[14.5px] leading-snug">{g.body}</p>
          </li>
        ))}
      </ol>
      <Callout className="absolute top-[398px] left-[550px] w-[1345px] px-[22px] py-2.5 text-center text-[18px]">
        The browser broadcasts, Saku never does · every allow/deny is written to <span className="font-mono">signing_events</span>
      </Callout>

      <Panel className="absolute top-[470px] left-[550px] h-[590px] w-[780px] px-[30px] py-[26px]">
        <h3 className="mb-3.5 text-[24px] font-semibold">Blast radius, stated plainly</h3>
        <table className="w-full border-collapse text-[16px]">
          <thead>
            <tr className="text-left text-[13px] tracking-[0.8px] text-mute uppercase">
              {["Attacker has", "They can", "What contains it"].map((h) => (
                <th key={h} className="border-b-2 border-peach pr-2.5 pb-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BLAST.map((r) => (
              <tr key={r.who} className={r.critical ? "text-bad" : ""}>
                <td className="w-[30%] border-b-[1.5px] border-peach py-2.5 pr-3 align-top leading-snug font-semibold">
                  {r.critical && <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-bad align-[1px]" />}
                  {r.who}
                </td>
                <td className="border-b-[1.5px] border-peach py-2.5 pr-3 align-top leading-snug">{r.can}</td>
                <td className="border-b-[1.5px] border-peach py-2.5 pr-3 align-top leading-snug">{r.stop}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Src className="absolute right-[30px] bottom-5 left-[30px]">
          From Saku&apos;s trust model (ARCHITECTURE.md §2–4) and codebase audit, 12 Sep 2026: 180 automated assertions (23 contract, 139
          web, 18 policy). Not yet unit-tested: tx-policy, spend-limits, session.
        </Src>
      </Panel>

      <Panel className="absolute top-[470px] left-[1350px] flex h-[590px] w-[545px] flex-col gap-3.5 px-7 py-[26px]">
        <h3 className="text-[24px] font-semibold">Where rules replace trust</h3>
        <Card className="rounded-[20px] px-5 py-4">
          <h4 className="mb-1 text-[19px] font-semibold text-or-d">Off-ramp escrow</h4>
          <p className="text-[15.5px] leading-snug">
            Tokens lock in <code className="font-mono text-[14px]">SakuOfframpEscrow</code> and swap via PancakeSwap with a 1% slippage bound
            and a 30–120 s rate lock, enforced on-chain. After the deadline <b>anyone</b>, including the user, can call{" "}
            <code className="font-mono text-[14px]">refund()</code>.
          </p>
        </Card>
        <Card className="rounded-[20px] px-5 py-4">
          <h4 className="mb-1 text-[19px] font-semibold text-or-d">Social recovery</h4>
          <p className="text-[15.5px] leading-snug">
            Backup email link, then a majority of guardians (never fewer than 2), then OTP on the new number. 24-hour cooling period on
            changes.
          </p>
        </Card>
        <Card className="rounded-[20px] px-5 py-4">
          <h4 className="mb-1 text-[19px] font-semibold text-or-d">Sponsored gas</h4>
          <p className="text-[15.5px] leading-snug">
            ~0.005 tBNB per wallet, about thirty transfers, only when short, with count and frequency caps.
          </p>
        </Card>
      </Panel>
    </>
  );
}

/** Who signs and who broadcasts: browser ⇄ Saku (five gates) and browser → chain. */
function CustodyFlow() {
  return (
    <svg
      viewBox="0 0 470 232"
      role="img"
      aria-label="The browser sends an unsigned transaction to Saku, gets a signature back after five gates, and broadcasts it to BNB Chain itself"
      className="absolute top-[556px] left-[38px] h-[232px] w-[470px]"
    >
      <defs>
        <linearGradient id="cf-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0A353" />
          <stop offset="1" stopColor="#F8D272" />
        </linearGradient>
        <marker id="cf-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 10 5 0 10z" fill="#D9812E" />
        </marker>
      </defs>
      <rect x="0" y="0" width="470" height="232" rx="22" fill="#FEF3E7" />

      <g fontSize="13" fontWeight="600" fill="#393939" textAnchor="middle">
        <text x="65" y="26">Browser</text>
        <text x="235" y="26">Saku · 5 gates</text>
        <text x="400" y="26">BNB Chain</text>
      </g>

      {/* phone */}
      <rect x="28" y="40" width="74" height="126" rx="14" fill="#fff" stroke="#393939" strokeWidth="3" />
      <rect x="52" y="48" width="26" height="5" rx="2.5" fill="#393939" />
      <rect x="40" y="66" width="50" height="30" rx="6" fill="#FBE6D1" />
      <text x="65" y="86" textAnchor="middle" fontSize="12" fontWeight="600" fill="#D9812E">USDC</text>
      <rect x="40" y="104" width="50" height="7" rx="3.5" fill="#EFE6DC" />
      <rect x="40" y="117" width="34" height="7" rx="3.5" fill="#EFE6DC" />

      {/* shield */}
      <path d="M235 40 282 56v42c0 32-20 54-47 66-27-12-47-34-47-66V56z" fill="url(#cf-shield)" />
      <circle cx="235" cy="98" r="27" fill="#fff" />
      <image href="/assets/saku-mark.png" x="214" y="77" width="42" height="42" />

      {/* chain */}
      <g stroke="#D9812E" strokeWidth="3" fill="#fff">
        <rect x="372" y="62" width="36" height="36" rx="7" />
        <rect x="402" y="100" width="36" height="36" rx="7" />
        <rect x="360" y="112" width="36" height="36" rx="7" />
      </g>

      {/* browser ⇄ Saku */}
      <path d="M110 80 C150 62 168 62 184 70" fill="none" stroke="#D9812E" strokeWidth="2.5" markerEnd="url(#cf-arrow)" />
      <text x="146" y="56" textAnchor="middle" fontSize="11.5" fill="#766A5E">unsigned tx</text>
      <path d="M184 128 C168 138 150 138 110 124" fill="none" stroke="#D9812E" strokeWidth="2.5" markerEnd="url(#cf-arrow)" />
      <text x="146" y="154" textAnchor="middle" fontSize="11.5" fill="#766A5E">signature</text>

      {/* Saku never broadcasts */}
      <line x1="290" y1="100" x2="350" y2="100" stroke="#CDBFB1" strokeWidth="2.5" strokeDasharray="5 5" />
      <circle cx="320" cy="100" r="10" fill="#fff" stroke="#D25543" strokeWidth="2.5" />
      <path d="m315 95 10 10m0-10-10 10" stroke="#D25543" strokeWidth="2.5" strokeLinecap="round" />

      {/* browser broadcasts */}
      <path d="M65 170 C130 222 320 222 376 156" fill="none" stroke="#5FAE73" strokeWidth="2.5" markerEnd="url(#cf-arrow)" />
      <text x="235" y="226" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#3E8A55">the browser broadcasts, Saku never does</text>
    </svg>
  );
}
