# Jawaban panel juri — BMC Saku

Tanda: **[FAKTA]** = ada di kode Saku atau sumber primer (lihat `reports/`).
**[USULAN]** = rencana yang belum ada. Tim harus setuju dulu sebelum diucapkan di depan juri.
**[CEK]** = belum diverifikasi, jangan diklaim sebagai fakta.

---

## Angka dasar (dipakai di banyak jawaban)

| Item | Angka | Sumber |
|---|---|---|
| Gas transfer BEP-20 di BSC mainnet | ±$0,003 | [FAKTA] BscScan Gas Tracker, Sep 2026 (`2026-09_BscScan_Gas-Tracker.pdf`) |
| Transaksi per transfer Saku | 2 (transfer + fee ke treasury) | [FAKTA] `web/lib/platform-fee.ts` |
| Privy di atas 10.000 MAU | $0,05/MAU + $0,01/signature (di atas 50.000 signature) | [FAKTA] privy.io/pricing (`2026_Privy_Pricing.pdf`) |
| Fee Saku | transfer 0,30% · top-up 0,70% · off-ramp 1,50% (maks 25 USDC) | [FAKTA] `web/lib/fees.ts` |
| Biaya koridor Malaysia → Indonesia (kirim MYR 610) | rata-rata **4,80%**; termurah CBL 1,29%, GPL 1,51%, Wise 1,75%, Western Union agen 2,03% | [FAKTA] World Bank RPW Q3 2025 (`2025-Q3_WorldBank_RPW_Corridor-Malaysia-Indonesia.pdf`) |
| Pedagang aset kripto berlisensi OJK | 26 PAKD (+2 bursa, 2 kliring, 2 kustodian) per Juni 2026 | [FAKTA] Siaran Pers KSSK 03/KSSK/Pers/2026 butir 23 |

**Unit economics per transfer (hitungan dari angka di atas):**
- Biaya variabel: 2 signature × $0,01 + 2 gas × $0,003 = **±$0,026**
- Pendapatan: 0,3% × nominal
- Break-even: 0,003 × A = 0,026 → **A ≈ $8,7 per transfer** (belum termasuk $0,05/MAU)
- Untuk remitansi seukuran koridor (MYR 610 ≈ $140): fee transfer ±$0,42 + off-ramp 1,5% ±$2,10 ≈ **$2,5 pendapatan vs $0,03 biaya on-chain**. Biaya mitra fiat belum masuk karena kaki fiat masih simulasi.

---

## 🔧 Protocol Architect

**1. Gas dari satu settler. Siapa yang ngisi ulang di mainnet, dan berapa biayanya?**
> [FAKTA] Di mainnet, transfer BEP-20 sekitar $0,003. Satu transfer Saku = 2 transaksi, jadi ±$0,006. 100 ribu user × 10 transfer per bulan ≈ **$6.000/bulan** buat gas. Itu kecil dibanding pendapatan 0,3% dari transfer yang sama.
> [FAKTA] Drip-nya dibatasi: 0,005 BNB per drip, maksimal 10 drip per wallet, cuma dikirim kalau saldo di bawah 0,002.
> [USULAN] Settler di-top-up dari treasury fee secara terjadwal. Jangka menengah pindah ke paymaster (ERC-4337) supaya user nggak butuh BNB sama sekali. [CEK] opsi paymaster yang ada di BNB Chain.

**2. Kenapa BSC, dan klaim "chain-portable" itu maksudnya apa?**
> [FAKTA] Gas ±$0,003 per transfer, dan ada likuiditas stablecoin di PancakeSwap buat swap di escrow.
> Jujurnya: "portable" = bisa jalan di EVM mana aja. Buat pindah chain, yang diganti cuma alamat token, escrow, staking, dan router DEX lewat env var. Policy signing-nya nggak peduli chain; dia cuma ngunci ke satu chain id.

**3. Apa yang beneran on-chain waktu demo?**
> [FAKTA] Wallet, transfer USDC (token mock), dan escrow lock → settle → refund beneran jalan di BSC Testnet.
> [FAKTA] Fiat masih simulasi; kolom database-nya aja namanya `mock_disbursement_reference`.
> ⚠️ Hash smoke test yang ada itu milik escrow **lama**. [USULAN] Jalanin ulang smoke test ke escrow yang sekarang (`0xb691…3a6c`) sebelum demo.

## 🛡️ Security Auditor

**1. `PRIVY_AUTHORIZATION_KEY` itu titik gagal tunggal. Siapa yang pegang, dan gimana rotasinya?**
> [FAKTA] Kita sebut sendiri itu "crown jewel" di ARCHITECTURE.md. Privy cuma pegang public key-nya, private key-nya ada di env server. App secret doang nggak bisa mindahin uang.
> [FAKTA] Prosedur rotasi belum ada di kode.
> [USULAN] Pindahin ke KMS/HSM dan tulis prosedur rotasi. [CEK] apakah Privy dukung *key quorum*, jadi butuh 2 kunci buat otorisasi.

**2. Modul penjaga belum ada unit test. Kenapa "180 assertions" dijual?**
> [FAKTA] Angkanya 23 kontrak + 139 web + 18 policy. 18 assertion policy itu justru ngetes `tx-policy` dari luar lewat `verify:tx-policy`.
> [FAKTA] Tapi betul, unit test buat `tx-policy`, `spend-limits`, dan `session` belum ada. Kita tulis itu sendiri di slide.
> [USULAN] Tulis unit test buat tiga modul itu sebelum demo. Kerjaannya kecil, dampaknya besar.

**3. Siapa pegang service-role key database?**
> [FAKTA] Cuma server (env). Yang punya akses tulis ke DB bisa memalsukan kuorum guardian tanpa jejak. Ini ada di tabel blast radius.
> [USULAN] Pasang trigger audit di tabel recovery dan guardian, terus verifikasi RLS di Supabase.

## 💼 Business/VC Judge

**1. Pekerja di Malaysia top-up pakai ringgit gimana?**
> [FAKTA] Hari ini belum bisa. Harga ditampilin dalam MYR, tapi akun Xendit berbadan hukum Indonesia jadi cuma bisa nagih IDR. Kode sendiri nyebut ini "urusan akun sama Xendit, bukan kode".
> [USULAN] Dua jalur:
> (a) Buka akun gateway di Malaysia. Kodenya udah siap: cukup nambah `MYR` ke `XENDIT_PRESENTMENT_CURRENCIES`, tanpa ubah kode. [CEK] ketersediaan Xendit atau gateway lain di Malaysia.
> (b) Sementara itu, pengirim beli USDC di exchange berlisensi di Malaysia, lalu kirim ke alamat wallet Saku-nya sendiri.

**2. Mitra berlisensinya siapa?**
> [FAKTA] Saku tidak memegang lisensi pembayaran; itu tertulis di kode. Xendit yang memindahkan rupiah. Di Indonesia ada 26 pedagang aset kripto berlisensi OJK (KSSK, Juni 2026).
> [FAKTA] Kaki fiat masih simulasi, dan belum ada mitra yang tanda tangan.
> [USULAN] Target: kerja sama dengan salah satu dari 26 PAKD itu buat konversi USDC → IDR, lalu payout lewat Xendit. **Jangan sebut nama mitra sebelum ada pembicaraan beneran.**
> Juga [FAKTA]: kripto bukan alat pembayaran sah di Indonesia. Karena itu Saku diposisikan sebagai transfer aset P2P plus off-ramp rupiah, bukan pembayaran merchant.

**3. Unit economics?**
> [FAKTA, hitungan] Biaya variabel ±$0,026 per transfer, break-even di ±$9 per transfer. Remitansi rata-rata di koridor ini ±$140 → pendapatan ±$2,5 per kiriman, biaya on-chain ±$0,03.
> Yang belum dihitung: biaya mitra fiat, biaya KYC, dan biaya OTP resmi.

**4. Moat kalau Wise, DANA, atau GoPay ikut kirim pakai nomor?**
> Jujurnya: Saku **bukan yang termurah**. Wise 1,75% dan CBL 1,29% lebih murah di koridor ini. Saku (±2,5%) cuma lebih murah dari rata-rata koridor (4,80%).
> Posisi yang bisa dipertahankan:
> (1) **Satu rail buat banyak koridor.** Nambah negara cukup nambah mitra off-ramp lokal, nggak perlu kerja sama bank per pasangan negara.
> (2) **Identitas nomor lintas negara plus fitur sosial** (packet, split bill) yang menyebar di grup WhatsApp.
> (3) Transfer sesama user Saku cuma 0,3%, karena uangnya nggak keluar dari chain.
> [USULAN] Target fee off-ramp di bawah 1,5% begitu volume ada.

## 📱 Product Judge

**1. Penerima di Indonesia dapet rupiah gimana?**
> [FAKTA] Buka Withdraw, pilih e-wallet atau bank, konfirmasi. USDC dikunci di escrow dan di-swap on-chain (slippage 1%, rate lock 30–120 detik). Kalau telat, siapa pun bisa `refund`.
> [FAKTA] Transfer rupiahnya sendiri masih simulasi.

**2. User di Filipina atau Thailand bisa ngapain hari ini?**
> [FAKTA] Bisa daftar pakai nomornya, harga ditampilin dalam mata uang lokal, bisa kirim/terima USDC, packet, dan split bill.
> [FAKTA] Top-up masih ditagih IDR, dan off-ramp cuma aktif di Indonesia (compliance deny-by-default).
> Jadi segmen "siapa aja yang punya nomor" itu **visi**. Pasar yang jalan hari ini: Indonesia, dengan Malaysia sebagai pengirim berikutnya.

---

## Temuan lain yang juri bisa angkat

- **Fonnte itu WhatsApp API *unofficial*** (situsnya sendiri bilang begitu). Risikonya nomor OTP diblokir Meta. [USULAN] Rencanain pindah ke WhatsApp Business Platform resmi sebelum skala besar.
- **Chart biaya di slide Market** masih bandingin Saku dengan rata-rata *global*. Data koridor MY→ID (4,80% rata-rata, Wise 1,75%) lebih relevan, tapi juga nunjukin Saku bukan yang termurah.
