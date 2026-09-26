# Project 01 — Transformasi Reputasi Dea Bakery Lewat Digitalisasi Pengalaman Pelanggan

**Proyek 01 · Aplikasi Mobile Order & Loyalty — Dea Bakery**

Merancang aplikasi mobile order & loyalty untuk bakery lokal yang reputasinya selama ini dibangun secara organik — namun caranya beradaptasi ke kanal digital, termasuk media sosial, masih tertinggal dari ekspektasi pelanggan.

| | |
|---|---|
| **Peran** | Product Designer |
| **Durasi** | 6 Minggu (Riset & Desain) |
| **Tim** | 1 Designer, 1 PM, 2 Engineer, 2 Stakeholder |
| **Platform** | iOS & Android |
| **Tags** | Product Strategy · Loyalty System · Digital Transformation · Mobile App · Food & Beverage |

---

## TL;DR

- **Masalah:** Reputasi Dea Bakery dibangun lewat walk-in, mulut ke mulut, dan broadcast WhatsApp, tapi tidak punya "rumah" digital — tidak ada riwayat transaksi, tidak ada sistem loyalty formal, dan kanal-kanalnya berjalan sendiri-sendiri.
- **Solusi:** Aplikasi mobile 5-tab — Home, Menu, Poin, Belanja, dan Akun — yang menyatukan loyalty, transaksi, dan kehadiran media sosial yang sebelumnya berjalan terpisah.
- **Dampak (perkiraan):** ↑ Kepercayaan, ↑ Loyalitas, ↓ Friksi Kanal. Aplikasi sudah berjalan di fase awal penerapan; hasilnya baru bisa diukur seiring adopsi pelanggan bertambah.
- **Pelajaran utama:** "Lambat beradaptasi" bukan soal kekurangan usaha atau konten, melainkan tidak adanya tempat bagi reputasi yang sudah dipercaya untuk hidup secara digital — inti proyek ini adalah merancang rumah digital untuk reputasi yang sudah ada, bukan membangun reputasi dari nol.

---

## 1. Konteks Bisnis

Dea Bakery membangun reputasinya dengan cara klasik — lewat pelanggan walk-in, mulut ke mulut, dan broadcast WhatsApp. Cara ini berhasil membangun kedekatan personal dengan pelanggan lama. Tapi begitu ekspektasi pelanggan bergeser ke pengalaman yang lebih terstruktur, celahnya mulai terasa: reputasi yang dibangun lewat interaksi langsung dan media sosial itu tidak punya "rumah" digital — tidak ada riwayat transaksi, tidak ada sistem loyalty formal, dan kanal-kanal yang ada (walk-in, WhatsApp, media sosial) berjalan sendiri-sendiri tanpa saling terhubung.

Brief awalnya luas: **bangun aplikasi mobile yang memungkinkan pelanggan memesan produk bakery.** Tapi discovery awal mengungkap masalah yang lebih mendasar — bisnis ini tidak kekurangan reputasi atau kualitas produk. Yang kurang adalah sistem yang membuat reputasi itu terlihat, tercatat, dan bisa diandalkan di kanal digital.

- **Pelanggan** — ingin bukti nyata bahwa kesetiaan mereka diingat sistem, bukan hanya oleh orang yang kebetulan hafal wajah mereka
- **Pemilik Bisnis** — ingin satu kanal resmi yang menyatukan loyalty, transaksi, dan kehadiran media sosial yang sudah ada

Ketegangan ini — antara reputasi yang sudah terbentuk secara organik dan sistem yang belum beradaptasi untuk menampungnya — menjadi masalah desain inti yang harus diselesaikan.

---

## 2. Masalah

Audit terhadap kanal yang berjalan mengungkap empat titik friksi yang membuat proses digitalisasi terasa lambat, meski produk dan reputasinya sendiri sudah kuat:

| Titik friksi | Kondisi |
|---|---|
| **Reputasi yang Sulit Dilacak** | Kepercayaan yang dibangun lewat walk-in dan mulut ke mulut tidak meninggalkan jejak digital — tidak ada riwayat yang bisa dirujuk ulang pelanggan maupun pemilik bisnis. |
| **Loyalitas Tanpa Sistem** | Pelanggan setia dihargai secara informal, tapi tidak ada insentif atau progres yang benar-benar terlihat — loyalitas terasa satu arah. |
| **Kanal yang Terpisah-pisah** | Order lewat WhatsApp, promo di media sosial, komplain harus datang langsung — pelanggan harus mengingat kanal mana untuk kebutuhan apa. |
| **Ekspektasi Sudah Bergeser** | Pelanggan membandingkan dengan GrabFood, Shopee Food, dan Tokopedia. Toleransi mereka terhadap pengalaman yang tidak terstruktur sudah terkalibrasi tinggi. |

### Tantangan Desain

> "Bagaimana kami bisa membawa reputasi yang sudah dipercaya secara organik ke dalam sistem digital yang terstruktur — tanpa kehilangan kepercayaan personal yang jadi fondasinya?"

---

## 3. Riset & Discovery

Fase riset menggabungkan benchmarking kompetitif lintas aplikasi F&B (GrabFood, Tokopedia, Kopi Kenangan), audit kanal reputasi yang sudah berjalan (walk-in, WhatsApp, media sosial), dan wawancara stakeholder bersama pemilik bakery.

Tujuannya bukan mengumpulkan segunung data — tapi mengidentifikasi kumpulan insight terkecil yang paling langsung membentuk keputusan desain.

### Insight Utama

**01 — Kepercayaan personal butuh bukti digital yang setara** · *Kepercayaan Digital*
Kepercayaan yang dulu dibangun lewat interaksi walk-in tidak otomatis terbawa ke digital. Pelanggan mencari bukti yang setara — riwayat transaksi, status pesanan, sesuatu yang bisa dirujuk ulang.

**02 — Loyalty terasa nyata saat terlihat, bukan hanya dijanjikan** · *Pola Perilaku*
Poin dan rank yang tampil real-time di layar utama jauh lebih meyakinkan dibanding janji lisan "nanti dapat diskon kalau sering beli" yang sulit dilacak pelanggan sendiri.

**03 — Kanal yang terpisah-pisah menambah beban ingatan pelanggan** · *Mental Model*
Pelanggan tidak mau mengingat harus lewat mana untuk apa — order lewat WA, promo lihat Instagram, komplain harus datang langsung. Setiap kanal tambahan adalah friksi tambahan.

**04 — Media sosial tetap penting — tapi sebagai pintu masuk, bukan pusat sistem** · *Arsitektur Kanal*
Media sosial efektif untuk menjangkau pelanggan baru, tapi tidak dirancang untuk menyimpan riwayat atau loyalty. Ia perlu terhubung ke satu sistem inti, bukan berdiri sendiri.

---

## 4. Audit Kanal Reputasi

Sebelum merancang solusi, kondisi setiap kanal yang berjalan dipetakan per aspek — untuk menyamakan pemahaman dengan pemilik bisnis tentang apa yang sebenarnya membuat proses digitalisasi terasa "lambat beradaptasi", bukan sekadar kesan samar.

### Audit Kanal Reputasi — Kondisi Sebelum Aplikasi

| Aspek | Kondisi Sebelum | Dampak ke Persepsi | Peluang |
|---|---|---|---|
| 🧾 **Riwayat Transaksi** | Tidak ada catatan terstruktur — order dicatat manual lewat chat WhatsApp | Pelanggan dan pemilik sama-sama tidak punya bukti transaksi yang bisa dirujuk ulang | Riwayat belanja digital dengan status yang bisa dilacak kapan saja |
| 🏆 **Program Loyalty** | Loyalitas dihargai secara informal — tidak ada insentif atau progres yang terlihat | Pelanggan setia tidak merasa "diingat" oleh sistem, hanya oleh orangnya | Poin, rank member, dan reward yang terlihat real-time |
| 📞 **Kanal Kontak** | Tersebar di walk-in, WhatsApp broadcast, dan beberapa akun sosial berbeda | Pelanggan harus mengingat kanal mana untuk kebutuhan apa — friksi kecil yang berulang | Satu aplikasi resmi sebagai titik masuk tunggal |
| 📱 **Kehadiran Sosial Media** | Aktif tapi berjalan sendiri, tidak terhubung ke sistem loyalty atau riwayat pelanggan | Reputasi yang dibangun di media sosial tidak tertaut ke pengalaman transaksi nyata | Tautan Media Sosial terintegrasi di dalam akun aplikasi |

---

## 5. Eksplorasi Desain

Fase eksplorasi ini bukan soal menghasilkan opsi demi opsi. Setiap keputusan desain dikaitkan dengan perilaku pelanggan atau batasan bisnis yang spesifik — dan masing-masing datang dengan trade-off yang disadari.

### Design Decision 01 — Dashboard Loyalty sebagai Titik Masuk

- **Challenge:** Pelanggan setia tidak punya cara melihat "sudah sejauh mana" hubungan mereka dengan bakery ini — loyalitas terasa satu arah dan tidak diakui secara formal.
- **Keputusan:** Menjadikan Home dashboard dibuka dengan sapaan personal, saldo poin, dan CTA scan-to-earn yang langsung terlihat — bukan katalog produk yang muncul lebih dulu.
- **Design Rationale:** Menempatkan loyalty di titik masuk utama mengirim pesan bahwa hubungan pelanggan diingat sistem, bukan hanya oleh kasir yang kebetulan hafal wajah.
- **Trade-off yang disadari:** Produk unggulan jadi tidak muncul di layar pertama tanpa scroll. Trade-off yang disadari: mengutamakan pengakuan loyalitas di atas penjualan langsung untuk pelanggan yang sudah kembali.

### Design Decision 02 — Riwayat Belanja sebagai Bukti Transparansi

- **Challenge:** Tanpa catatan transaksi yang bisa dirujuk, perselisihan kecil soal pesanan (jumlah, harga, status) sulit diselesaikan dan menggerus kepercayaan yang sudah dibangun lewat walk-in.
- **Keputusan:** Merancang tab Belanja sebagai riwayat lengkap — status pesanan (Proses, Berhasil, Batal), detail item, dan total — yang selalu bisa diakses ulang oleh pelanggan.
- **Design Rationale:** Transparansi transaksi adalah bentuk digital dari kepercayaan personal yang dulu terjadi lewat tatap muka — pelanggan tahu persis apa yang terjadi dengan pesanannya.
- **Trade-off yang disadari:** Menampilkan status transaksi secara eksplisit (termasuk yang batal) berarti kegagalan juga terlihat, bukan disembunyikan. Ini disengaja: kejujuran status membangun kepercayaan lebih besar daripada tampilan yang selalu terlihat sempurna.

### Design Decision 03 — Menyatukan Kanal Sosial di Halaman Akun

- **Challenge:** Reputasi yang selama ini dibangun di media sosial berjalan terpisah dari aplikasi — pelanggan yang datang dari Instagram tidak otomatis terhubung ke sistem loyalty, dan sebaliknya.
- **Keputusan:** Menempatkan tautan Media Sosial (Instagram, TikTok, YouTube, Facebook) langsung di halaman Akun, berdampingan dengan layanan inti seperti Alamat Tersimpan dan Pusat Layanan.
- **Design Rationale:** Media sosial tetap jadi kanal yang lambat beradaptasi jika berdiri sendiri. Menyatukannya di satu titik dengan sistem inti membuat reputasi yang dibangun di sana ikut tertaut ke pengalaman transaksi nyata.
- **Trade-off yang disadari:** Ini bukan solusi yang mendesain ulang strategi kontennya sendiri — hanya menjembatani kanal yang sudah ada. Cukup untuk menutup celah koneksi, tapi kualitas konten di kanal itu sendiri tetap tanggung jawab terpisah.

---

## 6. Sebelum & Sesudah

Sebelum aplikasi ini ada, reputasi Dea Bakery hidup di tempat yang tersebar — ingatan pelanggan setia, riwayat chat WhatsApp yang mudah hilang, dan akun media sosial yang berjalan sendiri. Sesudahnya, semua itu punya satu rumah digital: dashboard loyalty, riwayat transaksi, dan tautan media sosial yang saling terhubung dalam lima layar inti.

**Home**
![Layar Home — aplikasi Dea Bakery](<../assets/Home V3.png>)
Dashboard loyalty, saldo poin, promo, scan-to-earn.

**Menu & Detail Produk**
![Layar Menu & Detail Produk — aplikasi Dea Bakery](<../assets/Product.png>)
Katalog kategori, varian, dan checkout ringkas.

**Poin**
![Layar Poin — aplikasi Dea Bakery](<../assets/Point - Hadiah.png>)
Rank member, kode member, progres, referral.

**Riwayat Belanja**
![Layar Riwayat Belanja — aplikasi Dea Bakery](<../assets/Belanja.png>)
Status transaksi — Proses, Berhasil, Batal.

**Akun**
![Layar Akun — aplikasi Dea Bakery](<../assets/Akun.png>)
Profil, layanan, dan tautan Media Sosial.

---

## 7. Prinsip Desain

Tiga prinsip ditetapkan di awal dan dipakai sebagai filter untuk setiap keputusan desain sepanjang proyek. Ketika ide baru muncul, ia harus lolos ketiganya.

**1 — Kepercayaan yang Bisa Dilacak**
Setiap interaksi — transaksi, poin, status pesanan — harus meninggalkan jejak yang bisa dirujuk ulang. Kepercayaan digital dibangun dari bukti, bukan janji lisan.

**2 — Satu Pintu untuk Semua Kanal**
Pelanggan tidak boleh perlu mengingat harus lewat mana untuk apa. Loyalty, transaksi, dan media sosial disatukan di satu aplikasi, bukan dipisah per fungsi.

**3 — Konsisten dari Walk-in ke Digital**
Kehangatan personal yang jadi ciri khas Dea Bakery secara offline harus tetap terasa di pengalaman digital — lewat sapaan personal, transparansi, dan respons yang cepat.

---

## 8. Solusi Final

Desain final menghadirkan pengalaman mobile 5-tab — Home, Menu, Poin, Belanja, dan Akun — yang menyatukan loyalty, transaksi, dan kehadiran media sosial yang sebelumnya berjalan terpisah:

| Fitur | Deskripsi |
|---|---|
| **Home Dashboard Loyalty-First** | Home dibuka dengan sapaan personal dan saldo poin real-time — membuat loyalty terlihat sejak aplikasi dibuka. Banner promo dan scan-to-earn memberi alasan untuk terlibat bahkan tanpa niat beli langsung. |
| **Katalog & Detail Produk** | Tab Menu mengorganisir produk berdasarkan kategori dengan pencarian dan filter lokasi, lengkap dengan detail varian dan checkout ringkas langsung di layar yang sama. |
| **Poin & Rewards yang Terlihat** | Tab Poin menampilkan rank member, kode member, progres menuju tier berikutnya, dan kode referral untuk berbagi — menjadikan loyalitas sesuatu yang terlihat, bukan hanya dijanjikan. |
| **Riwayat & Akun Terhubung** | Tab Belanja mencatat setiap transaksi dengan status yang transparan. Tab Akun menyatukan layanan pelanggan, alamat tersimpan, dan tautan Media Sosial dalam satu tempat. |

---

## 9. Perkiraan Dampak

Aplikasi ini sudah berjalan di fase awal penerapan. Rationale desainnya memetakan langsung ke hasil yang bisa diukur seiring adopsi pelanggan bertambah:

### User Impact

| Metrik | Arti |
|---|---|
| **↑ Kepercayaan** | Riwayat transaksi yang transparan menggantikan catatan manual lewat chat |
| **↑ Loyalitas** | Poin dan rank yang terlihat real-time membuat loyalitas terasa diakui |
| **↓ Friksi Kanal** | Satu aplikasi menggantikan kebutuhan mengingat banyak kanal berbeda |

### Business Impact

| Metrik | Arti |
|---|---|
| **Reputasi** | Kepercayaan yang dulu dibangun lewat walk-in kini punya rumah digital yang konsisten |
| **Kanal Terhubung** | Media sosial jadi pintu masuk yang tertaut ke sistem loyalty, bukan berjalan sendiri |
| **Siap Skala** | Riwayat dan data pelanggan terpusat — siap dipakai untuk keputusan bisnis lanjutan |

---

## 10. Refleksi

Tantangan terbesar di proyek ini bukan soal fitur — melainkan soal menerjemahkan sesuatu yang tidak berwujud: reputasi yang sudah dipercaya secara organik, ke dalam sistem digital yang terstruktur. Godaan awalnya adalah membangun aplikasi katalog-dan-order standar tanpa benar-benar memikirkan bagaimana kepercayaan lama itu ikut terbawa.

Tapi aplikasi yang hanya bisa jual produk, tanpa menghadirkan bukti loyalty dan riwayat yang bisa dipercaya, hanya memindahkan masalah lama ke platform baru. Saya pushback ke arah itu — bukan untuk menambah kompleksitas, tapi untuk memastikan sistem ini benar-benar menjawab akar masalahnya: kanal yang lambat beradaptasi, bukan sekadar absennya aplikasi.

Keputusan desain sebenarnya adalah soal *bagaimana* reputasi yang sudah ada bisa bertahan lewat transisi ke digital, bukan *apakah* perlu aplikasi:

- **Transparansi:** Riwayat Belanja menampilkan status apa adanya — termasuk yang batal — karena kejujuran status membangun kepercayaan lebih besar daripada tampilan yang selalu terlihat sempurna.
- **Pengakuan:** Dashboard loyalty menempatkan poin dan rank di titik masuk utama, bukan disembunyikan di menu — mengubah loyalitas informal jadi sesuatu yang diakui sistem.
- **Koneksi Kanal:** Tautan Media Sosial di halaman Akun menutup celah antara reputasi yang dibangun di luar aplikasi dan pengalaman transaksi di dalamnya.

### Key Takeaway

"Lambat beradaptasi" di sini bukan soal kekurangan usaha atau konten — produk dan fotonya sudah cukup baik. Masalahnya ada di sistem: tidak ada tempat bagi reputasi yang sudah dipercaya itu untuk hidup secara digital. Merancang rumah digital untuk reputasi yang sudah ada, bukan membangun reputasi dari nol, itulah inti dari proyek ini.
