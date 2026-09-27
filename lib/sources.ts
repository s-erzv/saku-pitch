/**
 * Every figure in the deck, with where it came from.
 * Update the number here and on the slide together. `checked` = date the figure was last verified.
 */
export const SOURCES = {
  ojkInvestors: {
    figure: "22.69M crypto asset investors in Indonesia (June 2026); Rp28.58T traded in June",
    by: "KSSK (Kemenkeu, BI, OJK, LPS), Siaran Pers No. 03/KSSK/Pers/2026, 3 Aug 2026, item 23",
    url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Documents/SP-Rapat-Berkala-KSSK-III-2026.pdf",
    note: "Primary. Saved in resources/reports/2026-08-03_KSSK_…pdf.",
    checked: "2026-09-27",
  },
  chainalysis2026: {
    figure:
      "Indonesia #14/117 grassroots index; #10 cross-border flows; #13 P2P economy. P2P $56.8B→$228.7B (+302.9%); cross-border stablecoins $124.2B→$220.3B (+77.5%, avg ≈$3,000); services $9.30T→$8.90T (−4.3%); P2P is 96% stablecoins; market cap −~50%. Flow figures are GLOBAL, not Indonesia. Indonesia fell from #7 (2025) to #14. Period Jul 2025–Jun 2026.",
    by: "Chainalysis, 2026 Global Crypto Adoption Index",
    url: "https://www.chainalysis.com/blog/2026-global-crypto-adoption-index/",
    checked: "2026-09-27",
  },
  addressPoisoning: {
    figure: "US$83.8M lost across 6,633 incidents; 270M attack attempts on 17M victims (Ethereum & BSC, 2-year measurement)",
    by: "Tsuchiya, Dong, Soska & Christin, USENIX Security 2025",
    url: "https://arxiv.org/abs/2501.16681",
    checked: "2026-09-27",
  },
  chi2021: {
    figure: "6,859 UX reviews (of 45,821) of the top 5 mobile wallets; misconceptions traced to conventional payment systems",
    by: "Voskobojnikov et al., ACM CHI 2021",
    url: "https://doi.org/10.1145/3411764.3445407",
    checked: "2026-09-27",
  },
  dis2021: {
    figure: "Challenges of first-time cryptocurrency users (\"Don't Stop Me Now!\")",
    by: "Fröhlich et al., ACM DIS 2021",
    url: "https://doi.org/10.1145/3461778.3462071",
    note: "Sample size not verified; the deck no longer quotes it.",
    checked: "2026-09-27",
  },
  utaut2Indonesia: {
    figure: "Habit is the strongest predictor of e-wallet use intention in Indonesia",
    by: "Megadewandanu et al., ICST 2016 (n=372); Widodo et al., ICOIACT 2019",
    url: "https://doi.org/10.1109/ICOIACT46704.2019.8938415",
    note: "Widodo sample size not verified; not quoted.",
    checked: "2026-09-27",
  },
  mentalModels: {
    figure: "Users' mental models of keys/anonymity are wrong; keys mismanaged",
    by: "Mai et al., USENIX SOUPS 2020 (N=29)",
    url: "https://www.usenix.org/conference/soups2020/presentation/mai",
    checked: "2026-09-27",
  },
  qris: {
    figure: "QRIS acceptance reached 69.32M users and 47.11M merchants (as of Aug 2026)",
    by: "Bank Indonesia, Siaran Pers No. 28/196/DKom, FEKDI x IFSE 2026, 24 Sep 2026",
    url: "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2819626.aspx",
    note: "Primary. Media quoted the Governor saying 67M with 69.32M as the end-2026 target; the official release states 69.32M as achieved, so the deck uses the release.",
    checked: "2026-09-27",
  },
  datareportal: {
    figure: "230M internet users (80.5%), end of 2025",
    by: "DataReportal, Digital 2026: Indonesia",
    url: "https://datareportal.com/reports/digital-2026-indonesia",
    checked: "2026-09-27",
  },
  whatsapp: {
    figure: "WhatsApp is the most used platform; nine in ten active on it each month",
    by: "We Are Social & Meltwater, Digital 2026: Indonesia (Nov 2025)",
    url: "https://wearesocial.com/id/blog/2025/11/digital-2026-top-digital-and-social-media-trends-in-indonesia/",
    note: "Primary (publisher's own post). Not in the DataReportal page text.",
    checked: "2026-09-27",
  },
  gsma: {
    figure: "2.3B registered mobile money accounts (2025)",
    by: "GSMA, State of the Industry Report on Mobile Money 2026",
    url: "https://www.gsma.com/sotir/",
    checked: "2026-09-27",
  },
  mpesa: {
    figure: "M-PESA lifted 194,000 households (2%) out of poverty",
    by: "Suri & Jack, Science 2016",
    url: "https://doi.org/10.1126/science.aah5309",
    checked: "2026-09-27",
  },
  mpesaPrices: {
    figure: "M-Pesa lowered prices of rival transfer services; commission fell ~7% (2003) to ~3% (2010)",
    by: "Mbiti & Weil, NBER Working Paper 17129, 2011",
    url: "https://www.nber.org/papers/w17129",
    checked: "2026-09-27",
  },
  pmiRemittance: {
    figure: "US$17.2B PMI remittances in 2025; US$9.16B in H1 2026",
    by: "Bank Indonesia, SEKI Tabel V.31 (Remitansi TKI menurut negara penempatan)",
    url: "https://www.bi.go.id/seki/tabel/TABEL5_31.pdf",
    checked: "2026-09-27",
  },
  malaysiaShare: {
    figure: "2025 PMI remittances by origin: Malaysia US$4.77B (≈28% of 17.2B), Saudi Arabia 3.99B, Taiwan 2.97B, Hong Kong 2.63B",
    by: "Bank Indonesia, SEKI Tabel V.31 (primary; resources/reports/BI_SEKI_Tabel-V31_Remitansi-TKI.pdf)",
    url: "https://www.antaranews.com/berita/5747248/pengamat-remitansi-berpotensi-naik-signifikan-jika-pmi-ikut-prosedur",
    checked: "2026-09-27",
  },
  rpw: {
    figure: "Cost of sending $200, Q3 2025: global 6.36%, digital 4.59%, non-digital 7.30%; SDG target 3%",
    by: "World Bank, Remittance Prices Worldwide Q3 2025",
    url: "https://remittanceprices.worldbank.org/",
    checked: "2026-09-27",
  },
  cryptoNotPayment: {
    figure: "Crypto is not a legal payment instrument in Indonesia",
    by: "UU 7/2011 tentang Mata Uang; Bank Indonesia; OJK (Oct 2025)",
    checked: "2026-09-27",
  },
  sakuFees: {
    figure: "Default fees: transfer 0.30%, top-up 0.70%, off-ramp 1.50% (cap 25 USDC, min 0.1); staking free. End to end ≈2.50%",
    by: "saku/web/lib/fees.ts (getFeeConfig)",
    checked: "2026-09-27",
  },
  sakuCodebase: {
    figure: "4 user actions to a wallet; no address field; 180 assertions (23/139/18); five-gate signing; 1% slippage, 30–120 s rate lock; daily cap default 2,000 USDC; rate limiter fails open",
    by: "Saku v2 codebase audit (12 Sep 2026) and ARCHITECTURE.md",
    checked: "2026-09-27",
  },
} as const;
