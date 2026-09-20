import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import screenHome from "@/assets/Home V3.png";
import screenMenu from "@/assets/Product.png";
import screenPoin from "@/assets/Point - Hadiah.png";
import screenBelanja from "@/assets/Belanja.png";
import screenAkun from "@/assets/Akun.png";

// ─── Inline UX Artifact Components ──────────────────────────────────────────

const ChannelAuditTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
      <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
        Audit Kanal Reputasi — Kondisi Sebelum Aplikasi
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Aspek", "Kondisi Sebelum", "Dampak ke Persepsi", "Peluang"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              aspect: "🧾 Riwayat Transaksi",
              before: "Tidak ada catatan terstruktur — order dicatat manual lewat chat WhatsApp",
              impact: "Pelanggan dan pemilik sama-sama tidak punya bukti transaksi yang bisa dirujuk ulang",
              opp: "Riwayat belanja digital dengan status yang bisa dilacak kapan saja",
            },
            {
              aspect: "🏆 Program Loyalty",
              before: "Loyalitas dihargai secara informal — tidak ada insentif atau progres yang terlihat",
              impact: "Pelanggan setia tidak merasa 'diingat' oleh sistem, hanya oleh orangnya",
              opp: "Poin, rank member, dan reward yang terlihat real-time",
            },
            {
              aspect: "📞 Kanal Kontak",
              before: "Tersebar di walk-in, WhatsApp broadcast, dan beberapa akun sosial berbeda",
              impact: "Pelanggan harus mengingat kanal mana untuk kebutuhan apa — friksi kecil yang berulang",
              opp: "Satu aplikasi resmi sebagai titik masuk tunggal",
            },
            {
              aspect: "📱 Kehadiran Sosial Media",
              before: "Aktif tapi berjalan sendiri, tidak terhubung ke sistem loyalty atau riwayat pelanggan",
              impact: "Reputasi yang dibangun di media sosial tidak tertaut ke pengalaman transaksi nyata",
              opp: "Tautan Media Sosial terintegrasi di dalam akun aplikasi",
            },
          ].map((row) => (
            <tr key={row.aspect} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap">{row.aspect}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
              <td className="px-4 py-3 text-red-400/80">{row.impact}</td>
              <td className="px-4 py-3 text-accent">{row.opp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ResearchInsights = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        num: "01",
        title: "Kepercayaan personal butuh bukti digital yang setara",
        body: "Kepercayaan yang dulu dibangun lewat interaksi walk-in tidak otomatis terbawa ke digital. Pelanggan mencari bukti yang setara — riwayat transaksi, status pesanan, sesuatu yang bisa dirujuk ulang.",
        tag: "Kepercayaan Digital",
      },
      {
        num: "02",
        title: "Loyalty terasa nyata saat terlihat, bukan hanya dijanjikan",
        body: "Poin dan rank yang tampil real-time di layar utama jauh lebih meyakinkan dibanding janji lisan 'nanti dapat diskon kalau sering beli' yang sulit dilacak pelanggan sendiri.",
        tag: "Pola Perilaku",
      },
      {
        num: "03",
        title: "Kanal yang terpisah-pisah menambah beban ingatan pelanggan",
        body: "Pelanggan tidak mau mengingat harus lewat mana untuk apa — order lewat WA, promo lihat Instagram, komplain harus datang langsung. Setiap kanal tambahan adalah friksi tambahan.",
        tag: "Mental Model",
      },
      {
        num: "04",
        title: "Media sosial tetap penting — tapi sebagai pintu masuk, bukan pusat sistem",
        body: "Media sosial efektif untuk menjangkau pelanggan baru, tapi tidak dirancang untuk menyimpan riwayat atau loyalty. Ia perlu terhubung ke satu sistem inti, bukan berdiri sendiri.",
        tag: "Arsitektur Kanal",
      },
    ].map((insight) => (
      <div key={insight.num} className="bg-card rounded-xl p-5 border border-border space-y-2">
        <div className="flex items-start justify-between gap-2">
          <span className="font-display font-bold text-3xl text-accent/20 leading-none">{insight.num}</span>
          <span className="text-xs font-display font-medium tracking-wide px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
            {insight.tag}
          </span>
        </div>
        <p className="font-display font-semibold text-sm text-foreground">{insight.title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{insight.body}</p>
      </div>
    ))}
  </div>
);

const DesignExplorationCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Dashboard Loyalty sebagai Titik Masuk",
        challenge: "Pelanggan setia tidak punya cara melihat 'sudah sejauh mana' hubungan mereka dengan bakery ini — loyalitas terasa satu arah dan tidak diakui secara formal.",
        decision: "Menjadikan Home dashboard dibuka dengan sapaan personal, saldo poin, dan CTA scan-to-earn yang langsung terlihat — bukan katalog produk yang muncul lebih dulu.",
        rationale: "Menempatkan loyalty di titik masuk utama mengirim pesan bahwa hubungan pelanggan diingat sistem, bukan hanya oleh kasir yang kebetulan hafal wajah.",
        tradeoff: "Produk unggulan jadi tidak muncul di layar pertama tanpa scroll. Trade-off yang disadari: mengutamakan pengakuan loyalitas di atas penjualan langsung untuk pelanggan yang sudah kembali.",
      },
      {
        area: "Riwayat Belanja sebagai Bukti Transparansi",
        challenge: "Tanpa catatan transaksi yang bisa dirujuk, perselisihan kecil soal pesanan (jumlah, harga, status) sulit diselesaikan dan menggerus kepercayaan yang sudah dibangun lewat walk-in.",
        decision: "Merancang tab Belanja sebagai riwayat lengkap — status pesanan (Proses, Berhasil, Batal), detail item, dan total — yang selalu bisa diakses ulang oleh pelanggan.",
        rationale: "Transparansi transaksi adalah bentuk digital dari kepercayaan personal yang dulu terjadi lewat tatap muka — pelanggan tahu persis apa yang terjadi dengan pesanannya.",
        tradeoff: "Menampilkan status transaksi secara eksplisit (termasuk yang batal) berarti kegagalan juga terlihat, bukan disembunyikan. Ini disengaja: kejujuran status membangun kepercayaan lebih besar daripada tampilan yang selalu terlihat sempurna.",
      },
      {
        area: "Menyatukan Kanal Sosial di Halaman Akun",
        challenge: "Reputasi yang selama ini dibangun di media sosial berjalan terpisah dari aplikasi — pelanggan yang datang dari Instagram tidak otomatis terhubung ke sistem loyalty, dan sebaliknya.",
        decision: "Menempatkan tautan Media Sosial (Instagram, TikTok, YouTube, Facebook) langsung di halaman Akun, berdampingan dengan layanan inti seperti Alamat Tersimpan dan Pusat Layanan.",
        rationale: "Media sosial tetap jadi kanal yang lambat beradaptasi jika berdiri sendiri. Menyatukannya di satu titik dengan sistem inti membuat reputasi yang dibangun di sana ikut tertaut ke pengalaman transaksi nyata.",
        tradeoff: "Ini bukan solusi yang mendesain ulang strategi kontennya sendiri — hanya menjembatani kanal yang sudah ada. Cukup untuk menutup celah koneksi, tapi kualitas konten di kanal itu sendiri tetap tanggung jawab terpisah.",
      },
    ].map((item, i) => (
      <div key={item.area} className="rounded-xl border border-border overflow-hidden">
        <div className="bg-secondary px-5 py-3 flex items-center gap-3">
          <span className="text-xs font-display font-semibold text-accent tracking-widest uppercase">
            Design Decision {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-display font-bold text-foreground">{item.area}</span>
        </div>
        <div className="p-5 space-y-3">
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Challenge</p>
            <p className="text-sm text-secondary-foreground">{item.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Keputusan</p>
            <p className="text-sm text-secondary-foreground">{item.decision}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Design Rationale</p>
            <p className="text-sm text-secondary-foreground">{item.rationale}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-accent mb-1">Trade-off yang disadari</p>
            <p className="text-sm text-muted-foreground">{item.tradeoff}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const AppScreens = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {[
      { src: screenHome, label: "Home", desc: "Dashboard loyalty, saldo poin, promo, scan-to-earn" },
      { src: screenMenu, label: "Menu & Detail Produk", desc: "Katalog kategori, varian, dan checkout ringkas" },
      { src: screenPoin, label: "Poin", desc: "Rank member, kode member, progres, referral" },
      { src: screenBelanja, label: "Riwayat Belanja", desc: "Status transaksi — Proses, Berhasil, Batal" },
      { src: screenAkun, label: "Akun", desc: "Profil, layanan, dan tautan Media Sosial" },
    ].map((screen) => (
      <figure key={screen.label} className="space-y-2">
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <img
            src={screen.src}
            alt={`Layar ${screen.label} — aplikasi Dea Bakery`}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        <figcaption>
          <p className="font-display font-semibold text-xs text-foreground">{screen.label}</p>
          <p className="text-xs text-muted-foreground">{screen.desc}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);

const ImpactGrid = () => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">User Impact</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "↑ Kepercayaan", label: "Riwayat transaksi yang transparan menggantikan catatan manual lewat chat" },
          { metric: "↑ Loyalitas", label: "Poin dan rank yang terlihat real-time membuat loyalitas terasa diakui" },
          { metric: "↓ Friksi Kanal", label: "Satu aplikasi menggantikan kebutuhan mengingat banyak kanal berbeda" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-accent mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Business Impact</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "Reputasi", label: "Kepercayaan yang dulu dibangun lewat walk-in kini punya rumah digital yang konsisten" },
          { metric: "Kanal Terhubung", label: "Media sosial jadi pintu masuk yang tertaut ke sistem loyalty, bukan berjalan sendiri" },
          { metric: "Siap Skala", label: "Riwayat dan data pelanggan terpusat — siap dipakai untuk keputusan bisnis lanjutan" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-foreground mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Page Component ──────────────────────────────────────────────────────────

const ProjectDeaBakery = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 01"
          title="Transformasi Reputasi Dea Bakery Lewat Digitalisasi Pengalaman Pelanggan"
          subtitle="Merancang aplikasi mobile order & loyalty untuk bakery lokal yang reputasinya selama ini dibangun secara organik — namun caranya beradaptasi ke kanal digital, termasuk media sosial, masih tertinggal dari ekspektasi pelanggan."
          tags={["Product Strategy", "Loyalty System", "Digital Transformation", "Mobile App", "Food & Beverage"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "6 Minggu (Riset & Desain)" },
            { label: "Tim", value: "1 Designer, 1 PM, 2 Engineer, 2 Stakeholder" },
            { label: "Peran", value: "UI/UX Designer" },
            { label: "Platform", value: "iOS & Android" },
          ]}
        />

        {/* 01 — Business Context */}
        <SectionBlock label="01 — Konteks Bisnis" index={0}>
          <p>
            Dea Bakery membangun reputasinya dengan cara klasik — lewat pelanggan walk-in, mulut ke
            mulut, dan broadcast WhatsApp. Cara ini berhasil membangun kedekatan personal dengan
            pelanggan lama. Tapi begitu ekspektasi pelanggan bergeser ke pengalaman yang lebih
            terstruktur, celahnya mulai terasa: reputasi yang dibangun lewat interaksi langsung dan
            media sosial itu tidak punya "rumah" digital — tidak ada riwayat transaksi, tidak ada
            sistem loyalty formal, dan kanal-kanal yang ada (walk-in, WhatsApp, media sosial) berjalan
            sendiri-sendiri tanpa saling terhubung.
          </p>
          <p>
            Brief awalnya luas: <strong>bangun aplikasi mobile yang memungkinkan pelanggan memesan
            produk bakery.</strong> Tapi discovery awal mengungkap masalah yang lebih mendasar —
            bisnis ini tidak kekurangan reputasi atau kualitas produk. Yang kurang adalah sistem yang
            membuat reputasi itu terlihat, tercatat, dan bisa diandalkan di kanal digital.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Pelanggan</strong> — ingin bukti nyata bahwa kesetiaan mereka diingat sistem,
              bukan hanya oleh orang yang kebetulan hafal wajah mereka
            </li>
            <li>
              <strong>Pemilik Bisnis</strong> — ingin satu kanal resmi yang menyatukan loyalty,
              transaksi, dan kehadiran media sosial yang sudah ada
            </li>
          </ul>
          <p>
            Ketegangan ini — antara reputasi yang sudah terbentuk secara organik dan sistem yang belum
            beradaptasi untuk menampungnya — menjadi masalah desain inti yang harus diselesaikan.
          </p>
        </SectionBlock>

        {/* 02 — The Problem */}
        <SectionBlock label="02 — Masalah" index={1}>
          <p>
            Audit terhadap kanal yang berjalan mengungkap empat titik friksi yang membuat proses
            digitalisasi terasa lambat, meski produk dan reputasinya sendiri sudah kuat:
          </p>
          <div className="space-y-3 mt-2">
            {[
              {
                title: "Reputasi yang Sulit Dilacak",
                body: "Kepercayaan yang dibangun lewat walk-in dan mulut ke mulut tidak meninggalkan jejak digital — tidak ada riwayat yang bisa dirujuk ulang pelanggan maupun pemilik bisnis.",
              },
              {
                title: "Loyalitas Tanpa Sistem",
                body: "Pelanggan setia dihargai secara informal, tapi tidak ada insentif atau progres yang benar-benar terlihat — loyalitas terasa satu arah.",
              },
              {
                title: "Kanal yang Terpisah-pisah",
                body: "Order lewat WhatsApp, promo di media sosial, komplain harus datang langsung — pelanggan harus mengingat kanal mana untuk kebutuhan apa.",
              },
              {
                title: "Ekspektasi Sudah Bergeser",
                body: "Pelanggan membandingkan dengan GrabFood, Shopee Food, dan Tokopedia. Toleransi mereka terhadap pengalaman yang tidak terstruktur sudah terkalibrasi tinggi.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-4 border border-border">
                <p className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-1">Tantangan Desain</p>
            <p className="text-sm text-muted-foreground italic">
              "Bagaimana kami bisa membawa reputasi yang sudah dipercaya secara organik ke dalam
              sistem digital yang terstruktur — tanpa kehilangan kepercayaan personal yang jadi
              fondasinya?"
            </p>
          </div>
        </SectionBlock>

        {/* 03 — Research & Discovery */}
        <SectionBlock label="03 — Riset & Discovery" index={2}>
          <p>
            Fase riset menggabungkan benchmarking kompetitif lintas aplikasi F&B (GrabFood, Tokopedia,
            Kopi Kenangan), audit kanal reputasi yang sudah berjalan (walk-in, WhatsApp, media sosial),
            dan wawancara stakeholder bersama pemilik bakery.
          </p>
          <p>
            Tujuannya bukan mengumpulkan segunung data — tapi mengidentifikasi kumpulan insight
            terkecil yang paling langsung membentuk keputusan desain.
          </p>
          <ResearchInsights />
        </SectionBlock>

        {/* 04 — Channel Audit */}
        <SectionBlock label="04 — Audit Kanal Reputasi" index={3}>
          <p>
            Sebelum merancang solusi, kondisi setiap kanal yang berjalan dipetakan per aspek — untuk
            menyamakan pemahaman dengan pemilik bisnis tentang apa yang sebenarnya membuat proses
            digitalisasi terasa "lambat beradaptasi", bukan sekadar kesan samar.
          </p>
          <ChannelAuditTable />
        </SectionBlock>

        {/* 05 — Design Exploration */}
        <SectionBlock label="05 — Eksplorasi Desain" index={4}>
          <p>
            Fase eksplorasi ini bukan soal menghasilkan opsi demi opsi. Setiap keputusan desain
            dikaitkan dengan perilaku pelanggan atau batasan bisnis yang spesifik — dan masing-masing
            datang dengan trade-off yang disadari.
          </p>
          <DesignExplorationCards />
        </SectionBlock>

        {/* 06 — Before / After */}
        <SectionBlock label="06 — Sebelum & Sesudah" index={5}>
          <p>
            Sebelum aplikasi ini ada, reputasi Dea Bakery hidup di tempat yang tersebar — ingatan
            pelanggan setia, riwayat chat WhatsApp yang mudah hilang, dan akun media sosial yang
            berjalan sendiri. Sesudahnya, semua itu punya satu rumah digital: dashboard loyalty,
            riwayat transaksi, dan tautan media sosial yang saling terhubung dalam lima layar inti.
          </p>
          <AppScreens />
        </SectionBlock>

        {/* 07 — Design Principles */}
        <SectionBlock label="07 — Prinsip Desain" index={6}>
          <p>
            Tiga prinsip ditetapkan di awal dan dipakai sebagai filter untuk setiap keputusan desain
            sepanjang proyek. Ketika ide baru muncul, ia harus lolos ketiganya.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Kepercayaan yang Bisa Dilacak",
                body: "Setiap interaksi — transaksi, poin, status pesanan — harus meninggalkan jejak yang bisa dirujuk ulang. Kepercayaan digital dibangun dari bukti, bukan janji lisan.",
              },
              {
                num: "2",
                title: "Satu Pintu untuk Semua Kanal",
                body: "Pelanggan tidak boleh perlu mengingat harus lewat mana untuk apa. Loyalty, transaksi, dan media sosial disatukan di satu aplikasi, bukan dipisah per fungsi.",
              },
              {
                num: "3",
                title: "Konsisten dari Walk-in ke Digital",
                body: "Kehangatan personal yang jadi ciri khas Dea Bakery secara offline harus tetap terasa di pengalaman digital — lewat sapaan personal, transparansi, dan respons yang cepat.",
              },
            ].map((p) => (
              <div key={p.num} className="flex gap-4 bg-card rounded-xl p-5 border border-border">
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-display font-bold text-xs text-accent">{p.num}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground mb-1">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* 08 — Final Solution */}
        <SectionBlock label="08 — Solusi Final" index={7}>
          <p>
            Desain final menghadirkan pengalaman mobile 5-tab — Home, Menu, Poin, Belanja, dan Akun —
            yang menyatukan loyalty, transaksi, dan kehadiran media sosial yang sebelumnya berjalan
            terpisah:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Home Dashboard Loyalty-First",
                desc: "Home dibuka dengan sapaan personal dan saldo poin real-time — membuat loyalty terlihat sejak aplikasi dibuka. Banner promo dan scan-to-earn memberi alasan untuk terlibat bahkan tanpa niat beli langsung.",
              },
              {
                title: "Katalog & Detail Produk",
                desc: "Tab Menu mengorganisir produk berdasarkan kategori dengan pencarian dan filter lokasi, lengkap dengan detail varian dan checkout ringkas langsung di layar yang sama.",
              },
              {
                title: "Poin & Rewards yang Terlihat",
                desc: "Tab Poin menampilkan rank member, kode member, progres menuju tier berikutnya, dan kode referral untuk berbagi — menjadikan loyalitas sesuatu yang terlihat, bukan hanya dijanjikan.",
              },
              {
                title: "Riwayat & Akun Terhubung",
                desc: "Tab Belanja mencatat setiap transaksi dengan status yang transparan. Tab Akun menyatukan layanan pelanggan, alamat tersimpan, dan tautan Media Sosial dalam satu tempat.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-4 border border-border">
                <p className="font-display font-semibold text-sm text-foreground mb-1.5">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* 09 — Impact */}
        <SectionBlock label="09 — Perkiraan Dampak" index={8}>
          <p>
            Aplikasi ini sudah berjalan di fase awal penerapan. Rationale desainnya memetakan langsung
            ke hasil yang bisa diukur seiring adopsi pelanggan bertambah:
          </p>
          <ImpactGrid />
        </SectionBlock>

        {/* 10 — Reflection */}
        <SectionBlock label="10 — Refleksi" index={9}>
          <p>
            Tantangan terbesar di proyek ini bukan soal fitur — melainkan soal menerjemahkan sesuatu
            yang tidak berwujud: reputasi yang sudah dipercaya secara organik, ke dalam sistem digital
            yang terstruktur. Godaan awalnya adalah membangun aplikasi katalog-dan-order standar tanpa
            benar-benar memikirkan bagaimana kepercayaan lama itu ikut terbawa.
          </p>
          <p>
            Tapi aplikasi yang hanya bisa jual produk, tanpa menghadirkan bukti loyalty dan riwayat
            yang bisa dipercaya, hanya memindahkan masalah lama ke platform baru. Saya pushback ke
            arah itu — bukan untuk menambah kompleksitas, tapi untuk memastikan sistem ini benar-benar
            menjawab akar masalahnya: kanal yang lambat beradaptasi, bukan sekadar absennya aplikasi.
          </p>
          <p>
            Keputusan desain sebenarnya adalah soal <em>bagaimana</em> reputasi yang sudah ada bisa
            bertahan lewat transisi ke digital, bukan <em>apakah</em> perlu aplikasi:
          </p>
          <div className="space-y-3">
            {[
              { label: "Transparansi", value: "Riwayat Belanja menampilkan status apa adanya — termasuk yang batal — karena kejujuran status membangun kepercayaan lebih besar daripada tampilan yang selalu terlihat sempurna." },
              { label: "Pengakuan", value: "Dashboard loyalty menempatkan poin dan rank di titik masuk utama, bukan disembunyikan di menu — mengubah loyalitas informal jadi sesuatu yang diakui sistem." },
              { label: "Koneksi Kanal", value: "Tautan Media Sosial di halaman Akun menutup celah antara reputasi yang dibangun di luar aplikasi dan pengalaman transaksi di dalamnya." },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 bg-card rounded-xl p-4 border border-border">
                <span className="font-display font-semibold text-sm text-accent whitespace-nowrap">{item.label}:</span>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Lambat beradaptasi" di sini bukan soal kekurangan usaha atau konten — produk dan
              fotonya sudah cukup baik. Masalahnya ada di sistem: tidak ada tempat bagi reputasi yang
              sudah dipercaya itu untuk hidup secara digital. Merancang rumah digital untuk reputasi
              yang sudah ada, bukan membangun reputasi dari nol, itulah inti dari proyek ini.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectDeaBakery;
