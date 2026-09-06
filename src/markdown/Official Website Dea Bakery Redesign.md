# Official Website Dea Bakery Redesign

Duration: 4 Weeks
Role: UI/UX Designer - UX Writer
Team: 1 Designer, 2 Developers
Tools: Figma, Elementor, Jira

## 1. Overview

Tujuan utama yang dilakukan adalah redesign website dapat memiliki struktur informasi yang lebih jelas, pengalaman navigasi yang lebih intuitif, dan alur pemesanan yang lebih efisien. Dalam konteks bisnis yang bergerak cepat serta banyaknya kanal digital yang saling tumpang tindih, website perlu tampil lebih terarah dan konsisten untuk mendukung user menemukan produk dengan lebih mudah.

***Main Challenge*** muncul dari penggunaan Elementor, yang memiliki keterbatasan teknis dalam fleksibilitas layout, interaksi, dan pengaturan responsif. Keterbatasan ini harus diseimbangkan dengan kondisi kejar tayang, karena pengembangan website berjalan bersamaan dengan beberapa project internal lain dan tuntutan tim Marketing yang memerlukan rilis cepat. Meskipun begitu, redesign tetap mengutamakan pembuatan komponen yang reusable, struktur konten yang terorganisir, dan UX yang lebih lancar tanpa menambah kompleksitas implementasi.

---

## 2. Goals

### **Business Goals**

- Menampilkan brand yang lebih profesional dan modern
- Meningkatkan kepercayaan customer terhadap kualitas produk
- Menyediakan website yang mudah di-update oleh tim Marketing
- Mengurangi ketergantungan pada tim Developer untuk update harian
- Mendukung campaign dan promo yang sedang berjalan

### UX Goals

- Menyederhanakan navigasi agar user dapat menemukan informasi dalam max 2 klik
- Membuat hierarki konten yang jelas dan mudah dibaca
- Memperbaiki readability dan konsistensi visual di seluruh halaman
- Meningkatkan pengalaman mobile-first karena mayoritas user berasal dari mobile
- Membuat struktur yang scalable untuk penambahan konten di masa depan

---

## 3. My Role & Scope

| UI/UX Designer | Information Architecture | UX Writer |
| --- | --- | --- |
| Audit desain existing | Merapikan sitemap dan kategori | Menulis ulang heading, tagline, dan microcopy |
| Menyusun ulang layout utama | Menyusun ulang struktur navigasi | Menyederhanakan informasi agar mudah dibaca |
| Membuat wireframe dan final UI | Menyatukan halaman duplikat |  |

---

## 4. Key Problems (Before Redesign)

### Brand Inconsistency

- Warna tidak selaras dengan identitas brand
- Typography dan spacing berantakan
- Elemen visual tidak seragam antar halaman

### Poor Navigation

- Label menu tidak jelas
- Terlalu banyak pilihan sehingga user bingung
- Informasi penting seperti promo/lokasi terkubur dalam halaman dalam

### Content Scattered

- Konten tidak mengikuti struktur hierarki
- Banyak informasi repatitif

### Hard to Maintenance

- Tim Marketing kesulitan update karena struktur lama tidak modular

---

## 5. Process

### A. Research & Audit

First step yang dilakukan, yaitu:

- Memeriksa struktur navigasi lama
- Kategori konten yang tidak jelas
- Performance & loading time
- UX flow menemukan promo/menu

### B. Information Architecture

Penyusunan ulang sitemap dan navigasi berdasarkan 3 prinsip:

1. Clarity - navigasi harus mudah dipahami dalam 3 detik
2. Findebility - informasi penting max 2 klik
3. Scalability - struktur harus bisa tumbuh

Perubahan utama yang telah dibuat:

- Menyatukan kategori menu yang duplikatif
- Membuat struktur baru untuk Blog dan Promo
- Memisahkan konten edukatif dan promo
- Menambahkan CTA spesifik di beberapa halaman

### C. UI Design

Main Focus:

- Penyesuaian tampilan pada rentang umur dan gender customer
- Memperkuat brand melalui warna dan typography
- Pembuatan layout modular yang mudah dipindah/edit

Deliverables:

- Style guide (color, type scale, spacing)
- Component/section reusable
- Hero layout baru untuk meningkatkan attention

### D. Implementation in Elementor

Bagian yang penuh challenge dikarenakan:

- Grid Elementor tidak sefleksibel Figma/HTML
- Spacing antar device sering berubah
- Layout tertentu tidak dapat dibuat native

Solusi yang bisa dilakukan:

- Membuat section modular untuk memudahkan update
- Menambahkan custom CSS ringan untuk grid & alignment
- Mengoptimasi gambar WebP untuk loading cepat
- Menyusun ulang layout mobile-first

## 6. Technical Challenges & Solutions

| Challenge Teknisi | Penjelasan | Solusi |
| --- | --- | --- |
| Grid terbatas | Elementor tidak mendukung grid presisi | Custom CSS grid + modular spacing |
| Responsiveness unstable | Elemen berubah presisi di Mobile | Mobile-first layout + manual override |
| Loading berat | Gambar dan plugin tidak efisien | Kompres gambar, minimalisir penggunaan plugin tidak perlu |
| Layout tidak sefleksible HTML | Fitur Elementor terbatas | Simplifikasi desain tanpa hilangkan hierarki |
| Admin sulit update | Struktur lama berantakan | Buat komponen modular & guide internal |

## 7. Impact

### UX Impact

- Navigasi menjadi intuitif
- Konten lebih mudah dipahami
- Brand terasa lebih modern & terpecaya
- Halaman prioritas lebih cepat ditemukan

### Business Impact

- Website rilis sesuai deadline (kejar tayang)
- Marketing dapat update promo tanpa Developer
- Konten campaign dapat dipublikasikan tepat waktu

### Technical Impact

- Page load lebih ringan
- Struktur modular memudahkan maintenance
- Layout responsif lebih stabil