# Project 02 — Menghadirkan Personal App HR untuk Karyawan Dea Bakery

**Proyek 02 · Personal App HR — Dea Bakery**

Aplikasi mobile dari perusahaan yang menaruh slip gaji, presensi, dan benefit setiap karyawan langsung di tangan mereka — mengurangi beban kerja repetitif HR sekaligus memberi staf akses langsung dan on-demand ke data kerja pribadi mereka.

| | |
|---|---|
| **Peran** | Product Designer |
| **Durasi** | Berjalan |
| **Tim** | 1 Designer, 1 PM, 2 Developer, 2 Stakeholder |
| **Platform** | iOS & Android |
| **Tags** | Employee Self-Service · Mobile App · HR & People Ops · Internal Tool · Access Design |

---

## TL;DR

- **Masalah:** Staf tidak punya tempat terpusat untuk informasi kerja pribadi — slip gaji lewat email, presensi lewat logbook fisik, dan pengajuan benefit lewat WhatsApp atau lisan.
- **Solusi:** Satu aplikasi mobile khusus karyawan dengan lima fitur self-service: Slip Gaji Digital, Presensi Online, Chat dengan HR, Pengajuan Benefit & cuti, dan Info THR.
- **Hasil:** 5 fitur self-service dirilis pada Fase 1, 1 aplikasi terpusat menggantikan spreadsheet & WhatsApp, dan beban kerja manual HR menurun (↓).
- **Pelajaran utama:** Merancang untuk pengguna internal adalah disiplin yang berbeda — satu-satunya ukuran keberhasilan adalah apakah aplikasi ini membuat hari kerja seseorang sedikit lebih ringan.

---

## 1. Konteks

Seiring Dea Bakery berkembang dari bakery walk-in menjadi operasi berbasis tim, mengelola data karyawan lewat spreadsheet dan WhatsApp menjadi tidak berkelanjutan.

> Proyek ini adalah aplikasi mobile dari perusahaan yang dibangun khusus untuk karyawan — alat personal untuk mengakses data kerja mereka sendiri, di HP mereka sendiri, tanpa perlu menghubungi HR.

---

## 2. Masalah

Staf tidak punya tempat terpusat untuk informasi kerja pribadi. Tiga titik friksi yang berulang:

| | Titik friksi | Kondisi sebelumnya |
|---|---|---|
| 📄 | **Akses Slip Gaji** | Dikirim lewat email per periode — tidak ada akses on-demand; bulan-bulan sebelumnya butuh pencarian inbox atau kirim ulang dari HR |
| 📋 | **Presensi & Cuti** | Dicatat lewat logbook fisik — sulit diverifikasi atau disanggah secara mandiri |
| 💬 | **Pengajuan Benefit** | Diajukan lewat WhatsApp atau lisan — menyebabkan permintaan hilang dan tidak ada visibilitas status |

---

## 3. Scope & Batasan

Tersedia di app store publik, tapi secara fungsional khusus karyawan — akses dibatasi lewat login akun karyawan yang sudah terdaftar di sistem HR.

### Fase 1 — Dirilis

- ✓ Slip Gaji Digital
- ✓ Presensi online — check-in/check-out mandiri
- ✓ Chat langsung dengan HR untuk pertanyaan
- ✓ Pengajuan benefit & cuti
- ✓ Info THR

### Fase 2 — Ditunda

- → Perhitungan payroll otomatis — *Data slip gaji diinput manual oleh HR*
- → Performance review

---

## 4. Pendekatan Desain

**01 — Kejelasan Informasi di Atas Kelengkapan Fitur**
Dashboard memunculkan slip gaji, presensi, dan benefit lebih dulu — karyawan menemukan yang mereka butuhkan dalam satu tap.

**02 — Konsolidasi Data Kerja ke Satu Tempat**
Slip gaji yang dulu lewat email, presensi lewat logbook fisik, dan pengajuan benefit lewat WhatsApp disatukan ke satu aplikasi — karyawan tidak perlu mengingat harus mencari ke mana.

**03 — Saluran Tanya Jawab Tanpa Ganti Kanal**
Chat dengan HR ditempatkan langsung di dalam aplikasi — karyawan bisa bertanya soal gaji, cuti, atau benefit tanpa perlu berpindah ke WhatsApp atau datang langsung ke kantor.

---

## 5. Tampilan Aplikasi

Dari walkthrough pengenalan hingga layar inti sehari-hari — presensi, riwayat kehadiran, dan dashboard utama karyawan.

**Walkthrough — Deteksi Lokasi**
![Layar Walkthrough — Deteksi Lokasi — Personal App HR Dea Bakery](<../assets/Walkthrought - 1.svg>)
Absen otomatis terdeteksi begitu karyawan sampai di lokasi outlet.

**Walkthrough — Riwayat Akurat**
![Layar Walkthrough — Riwayat Akurat — Personal App HR Dea Bakery](<../assets/Walkthrought - 2.svg>)
Jam masuk, pulang, lokasi, dan durasi kerja terekam otomatis.

**Home**
![Layar Home — Personal App HR Dea Bakery](<../assets/[V5] Presensi Online - Home Page.png>)
Dashboard karyawan — voucher, menu cepat, CTA presensi.

**Presensi**
![Layar Presensi — Personal App HR Dea Bakery](<../assets/Dashboard Absen - Checkout.png>)
Check-in/check-out dengan agenda sesi kerja.

**Riwayat Presensi**
![Layar Riwayat Presensi — Personal App HR Dea Bakery](<../assets/Dashboard Absen - History.png>)
Histori kehadiran dengan durasi & status.

---

## 6. Fitur Utama

| Fitur | Deskripsi |
|---|---|
| **Slip Gaji Digital** | Rincian gaji bulanan, on-demand, di HP |
| **Presensi Online** | Check-in/check-out mandiri lewat aplikasi — menggantikan logbook fisik |
| **Chat dengan HR** | Tanya langsung ke HR untuk pertanyaan seputar gaji, cuti, atau benefit — tanpa perlu WhatsApp atau datang langsung |
| **Pengajuan Benefit** | Klaim & cuti dalam aplikasi dengan status persetujuan yang bisa dilacak |
| **Info THR** | Detail tunjangan hari raya, self-serve sebelum Lebaran |

---

## 7. Hasil

| Metrik | Arti |
|---|---|
| **5** | Fitur self-service yang dirilis |
| **1** | Aplikasi terpusat menggantikan spreadsheet & WhatsApp |
| **↓** | Beban kerja manual HR |

---

## 8. Refleksi

Internal tool mudah dianggap kurang prioritas — biaya friksinya tidak terlihat sampai menumpuk: waktu HR yang terbuang, karyawan yang frustrasi, dan sinyal diam-diam bahwa perusahaan tidak berinvestasi pada orang-orangnya sendiri.

### Key Takeaway

Merancang untuk pengguna internal adalah disiplin yang berbeda — tidak ada metrik konversi, tidak ada kompetitor untuk dibandingkan. Satu-satunya ukuran keberhasilan adalah apakah aplikasi ini membuat hari kerja seseorang sedikit lebih ringan. Untuk bakery yang sedang tumbuh dan menjalankan HR lewat WhatsApp, standar itu sederhana sekaligus bermakna.
