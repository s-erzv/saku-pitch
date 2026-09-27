# Sumber data pitch deck Saku

Dicek ulang 27 Sep 2026. Semua angka di deck ada di `lib/sources.ts`; file ini daftar sitasi + PDF-nya.

## Jurnal & paper peer-reviewed (`journals/`)

| # | Sitasi | Dipakai untuk | PDF |
|---|---|---|---|
| 1 | Tsuchiya, T., Dong, J.-D., Soska, K., & Christin, N. (2025). *Blockchain Address Poisoning*. 34th USENIX Security Symposium. arXiv:2501.16681 | US$83.8M, 6,633 insiden, 270M serangan, 17M korban | ✅ `2025_Tsuchiya_…pdf` |
| 2 | Mai, A., Pfeffer, K., Gusenbauer, M., Weippl, E., & Krombholz, K. (2020). *User Mental Models of Cryptocurrency Systems: A Grounded Theory Approach*. USENIX SOUPS 2020. | Mental model salah, N=29 | ✅ `2020_Mai_…pdf` |
| 3 | Suri, T., & Jack, W. (2016). *The long-run poverty and gender impacts of mobile money*. **Science**, 354(6317), 1288–1292. doi:10.1126/science.aah5309 | 194,000 rumah tangga (2%) keluar dari kemiskinan | ✅ `2016_Suri-Jack_…pdf` |
| 4 | Mbiti, I., & Weil, D. N. (2011). *Mobile Banking: The Impact of M-Pesa in Kenya*. NBER Working Paper 17129. | Komisi transfer ±7% → 3% (2003–2010) | ✅ `2011_Mbiti-Weil_…pdf` |
| 5 | Voskobojnikov, A., Wiese, O., Mehrabi Koushki, M., Roth, V., & Beznosov, K. (2021). *The U in Crypto Stands for Usable: An Empirical Study of User Experience with Mobile Cryptocurrency Wallets*. ACM CHI 2021. doi:10.1145/3411764.3445407 | 6,859 review UX (dari 45,821), 5 wallet teratas | ⬇️ manual: open access di https://dl.acm.org/doi/pdf/10.1145/3411764.3445407 (diblok bot, buka di browser) |
| 6 | Fröhlich, M., Wagenhaus, M. R., Schmidt, A., & Alt, F. (2021). *Don't Stop Me Now! Exploring Challenges of First-Time Cryptocurrency Users*. ACM DIS 2021, 138–148. doi:10.1145/3461778.3462071 | Hambatan user pertama kali | ⬇️ manual (paywall ACM; login kampus) |
| 7 | Megadewandanu, S., Suyoto, & Pranowo (2016). *Exploring mobile wallet adoption in Indonesia using UTAUT2: An approach from consumer perspective*. 2nd ICST, IEEE. doi:10.1109/ICSTC.2016.7877340 | Habit prediktor terkuat, n=372 | ⬇️ manual (IEEE Xplore; login kampus) |
| 8 | Widodo, M., Irawan, M. I., & Sukmono, R. A. (2019). *Extending UTAUT2 to Explore Digital Wallet Adoption in Indonesia*. ICOIACT 2019, IEEE. doi:10.1109/ICOIACT46704.2019.8938415 | Habit prediktor terkuat | ⬇️ manual (IEEE Xplore; login kampus) |

### Tambahan dari daftar referensi JISTech (dicek 27 Sep 2026)

| # | Sitasi | Dipakai untuk | PDF |
|---|---|---|---|
| 9 | Krombholz, K., Judmayer, A., Gusenbauer, M., & Weippl, E. (2016). *The Other Side of the Coin: User Experiences with Bitcoin Security and Privacy*. Financial Cryptography and Data Security, LNCS 9603. doi:10.1007/978-3-662-54970-4_33 | 22,5% dari 990 user pernah kehilangan bitcoin/kunci (slide Analysis) | ✅ `2016_Krombholz_…pdf` |
| 10 | Eskandari, S., Barrera, D., Stobert, E., & Clark, J. (2018). *A First Look at the Usability of Bitcoin Key Management*. NDSS USEC 2018. arXiv:1802.04351 | Latar: manajemen kunci = masalah usability (tidak dikutip angka) | ✅ `2018_Eskandari_…pdf` |
| 11 | Sweller, J. (1988). *Cognitive Load During Problem Solving: Effects on Learning*. Cognitive Science, 12(2), 257–285. doi:10.1207/s15516709cog1202_4 | Dasar teori callout "more steps → more cognitive load" | ⬇️ manual (Wiley, berbayar) |
| 12 | Moniruzzaman, M., Chowdhury, F., & Ferdous, M. S. (2020). *Examining Usability Issues in Blockchain-Based Cryptocurrency Wallets*. Cyber Security and Computer Science (ICONCS), LNICST 325. doi:10.1007/978-3-030-52856-0_50 | Cadangan, tidak dikutip | ⬇️ manual (Springer, berbayar) |

**Tidak dipakai dari daftar itu:**
- [10] Karimi (2016): **fiktif**. DOI-nya milik paper lain (Kujala dkk., soal distraksi pengemudi).
- [1] ASERS (2024): tidak ketemu di Crossref.
- [3] BC Vault, [7] Cyfrin, [21] Wepin: blog vendor, bukan sumber kredibel.
- [17] Paramitha (ResearchGate): tidak jelas venue-nya.
- [2] BI 2024, [5] Chainalysis 2024, [20] We Are Social 2024, [22] Findex 2021, [4] Chainalysis 2023: sudah ada versi lebih baru (BI 2026, Chainalysis 2026, Digital 2026, Findex 2025, Tsuchiya 2025).
- [9] Hevner, [12] Mayer, [14]–[15] Nielsen, [16] Paas, [19] Sweller 2019: asli, tapi metodologi/teori umum, nggak nambah apa-apa buat pitch.

## Laporan & data resmi (`reports/`) — semua primer

| Sumber | Angka | File |
|---|---|---|
| **KSSK, Siaran Pers No. 03/KSSK/Pers/2026** (3 Agu 2026), butir 23 | 22,69 juta investor kripto per Juni 2026; transaksi Rp28,58T | `2026-08-03_KSSK_Siaran-Pers-Rapat-Berkala-III-2026.pdf` |
| **Bank Indonesia, Siaran Pers No. 28/196/DKom** (FEKDI x IFSE, 24 Sep 2026) | QRIS 69,32 juta pengguna, 47,11 juta merchant | `2026-09-24_BI_Siaran-Pers-28-196-DKom_…pdf` |
| **Bank Indonesia, SEKI Tabel V.31** — Remitansi TKI menurut negara | US$17,2B (2025), Malaysia 4,77B, Saudi 3,99B, H1 2026 9,16B | `BI_SEKI_Tabel-V31_Remitansi-TKI.pdf` |
| **Chainalysis**, *2026 Global Crypto Adoption Index* | Indonesia #14/117, #10 cross-border, #13 P2P; P2P +302,9%, stablecoin +77,5% (**global**) | `2026_Chainalysis_…pdf` |
| **DataReportal**, *Digital 2026: Indonesia* | 230 juta pengguna internet (80,5%) | `2026_DataReportal_…pdf` |
| **We Are Social**, *Digital 2026: Indonesia* (blog resmi) | 9 dari 10 aktif di WhatsApp tiap bulan | `2025-11_WeAreSocial_…pdf` |
| **GSMA**, press release *State of the Industry Report on Mobile Money 2026* | 2,3 miliar akun terdaftar | `2026_GSMA_…pdf` |
| **World Bank**, *Remittance Prices Worldwide* Issue 54 (Q3 2025) | Global 6,36%, digital 4,59%, non-digital 7,30% | ⬇️ manual: https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf (blok bot) |

| **World Bank, Global Findex 2025** (press release 16 Jul 2025) | 1,3 miliar tanpa akun; ±900 juta di antaranya punya HP, 530 juta smartphone | `2025-07-16_WorldBank_Global-Findex-2025_press-release.pdf` |
| **World Bank RPW, koridor Malaysia → Indonesia** (Q3 2025, MYR 610) | Rata-rata 4,80%; CBL 1,29%, Wise 1,75%, WU agen 2,03% | `2025-Q3_WorldBank_RPW_Corridor-Malaysia-Indonesia.pdf` |
| **BscScan Gas Tracker** (Sep 2026) | Transfer BEP-20 ±$0,003 | `2026-09_BscScan_Gas-Tracker.pdf` |
| **Privy pricing** | $0,05/MAU + $0,01/signature di atas batas | `2026_Privy_Pricing.pdf` |

Jawaban latihan buat pertanyaan juri: bagian **FAQ** di `README.md` root.

`reports/secondary/` isinya berita media (CNBC, ANTARA, Liputan6, Kontan, Campaign Brief) yang dulu dipakai. Cuma buat arsip, udah nggak dikutip di deck.

## Catatan kredibilitas

- Angka yang **primer**: BI SEKI, World Bank RPW, dan paper (USENIX, SOUPS, Science, NBER, CHI, DIS, IEEE).
- QRIS: media nulis 67 juta (ucapan Gubernur, target akhir 2026 69,32 juta), tapi rilis resmi BI nyebut 69,32 juta sebagai capaian per Agustus 2026. Deck pakai rilis resmi.
- Sample size Fröhlich (DIS 2021) dan Widodo (ICOIACT 2019) tidak bisa dicek, jadi tidak dikutip di deck.
- Angka Chainalysis di slide Problem adalah angka **global**, dan dilabel begitu.
