import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import deaBakeryMockup from "@/assets/project-dea-bakery-mockup.webp";
import deaBakeryScope from "@/assets/project-dea-bakery-scope.webp";

// ─── Inline UX Artifact Components ──────────────────────────────────────────

const UserJourneyMap = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
      <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
        User Journey Map — Persona Customer
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Fase", "Aksi", "Pikiran", "Pain Point", "Peluang"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              phase: "🔍 Discover",
              action: "Mendengar tentang bakery baru lewat mulut ke mulut atau Instagram",
              thought: '"Apakah tempat ini punya yang aku suka?"',
              pain: "Tidak ada kehadiran digital untuk memvalidasi sebelum berkunjung",
              opp: "Menciptakan kesan pertama digital yang meyakinkan",
            },
            {
              phase: "🗂️ Browse",
              action: "Membuka aplikasi, menjelajahi kategori produk",
              thought: '"Ada banyak sekali item — harus mulai dari mana?"',
              pain: "Katalog terasa berlebihan tanpa struktur",
              opp: "Navigasi berbasis kategori + hierarki visual-first",
            },
            {
              phase: "🧐 Evaluate",
              action: "Menekan produk untuk membaca detail",
              thought: '"Apakah ini sepadan dengan harganya? Bagaimana rasanya?"',
              pain: "Tidak bisa memeriksa produk secara fisik",
              opp: "Foto berkualitas tinggi + deskripsi detail membangun kepercayaan",
            },
            {
              phase: "🛒 Order",
              action: "Menambah item ke keranjang, lanjut ke checkout",
              thought: '"Semoga ini tidak lama."',
              pain: "Alur multi-langkah menyebabkan abandonment",
              opp: "Checkout yang ringkas dengan indikator progres yang jelas",
            },
            {
              phase: "✅ Complete",
              action: "Pesanan terkonfirmasi, menerima struk digital",
              thought: '"Bagus — aku tahu persis apa yang kupesan."',
              pain: "Tidak ada insentif loyalty pasca-pembelian",
              opp: "Konfirmasi poin loyalty menutup loop engagement",
            },
          ].map((row) => (
            <tr key={row.phase} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap">{row.phase}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.action}</td>
              <td className="px-4 py-3 text-muted-foreground italic">{row.thought}</td>
              <td className="px-4 py-3 text-red-400/80">{row.pain}</td>
              <td className="px-4 py-3 text-accent">{row.opp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const UserFlowDiagram = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-4">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      User Flow — Perjalanan Order Inti
    </p>
    <div className="flex flex-col gap-2">
      {[
        { step: "App Open", label: "Splash / Onboarding", note: "Percabangan pengguna baru vs. pengguna lama" },
        { step: "Home", label: "Home Dashboard", note: "Sapaan loyalty personal, saldo poin, banner promo, scan-to-earn" },
        { step: "Browse", label: "Menu / Katalog", note: "Tab kategori (Semua, Roti, Kue, Pastri) + grid produk visual-first" },
        { step: "Select", label: "Product Detail", note: "Hero image, harga, rating, Add to Cart yang sticky" },
        { step: "Review", label: "Belanja (Cart)", note: "Ringkasan item, kuantitas, total berjalan" },
        { step: "Checkout", label: "Order Form", note: "Detail pickup, info kontak, pembayaran BCA Transfer" },
        { step: "Confirm", label: "Struk Digital", note: "Struk digital + poin loyalty yang didapat langsung tampil" },
      ].map((item, i, arr) => (
        <div key={item.step} className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold text-xs">{i + 1}</span>
            </div>
            {i < arr.length - 1 && (
              <div className="w-px h-5 bg-border mt-1" />
            )}
          </div>
          <div className="pt-1">
            <p className="font-display font-semibold text-sm text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResearchInsights = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        num: "01",
        title: "Visual membangun keyakinan untuk membeli",
        body: "Pengguna sangat bergantung pada foto produk saat menilai item bakery yang tidak bisa mereka periksa langsung. Foto berkualitas rendah berkorelasi langsung dengan abandonment di layar detail produk.",
        tag: "Pola Perilaku",
      },
      {
        num: "02",
        title: "Eksplorasi adalah bagian dari intent",
        body: "Sebagian besar pelanggan membuka aplikasi tanpa produk spesifik di kepala — mereka menjelajah, terinspirasi, lalu memutuskan. Fase discovery bukan gangguan; ia adalah bagian dari pengalaman itu sendiri.",
        tag: "Mental Model",
      },
      {
        num: "03",
        title: "Friksi menumpuk dengan cepat",
        body: "Setiap langkah tambahan dalam alur order meningkatkan risiko abandonment. Pengguna membandingkan dengan aplikasi seperti GrabFood dan Tokopedia — toleransi mereka terhadap friksi sudah terkalibrasi tinggi.",
        tag: "Benchmark Kompetitor",
      },
      {
        num: "04",
        title: "Pembelian multi-item adalah kebiasaan umum",
        body: "Rata-rata keranjang berisi 3–5 item dari kategori berbeda. Ini memvalidasi kebutuhan akan cart yang persisten dan katalog yang bisa dijelajah — bukan alur order satu produk.",
        tag: "Perilaku Belanja",
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
        area: "Product Browsing",
        challenge: "Pengguna perlu menjelajahi katalog besar tanpa tahu persis apa yang mereka cari.",
        decision: "Memperkenalkan navigasi atas berbasis kategori dipasangkan dengan section unggulan di home screen. Ini mengurangi beban kognitif saat browsing awal dan memunculkan item bermarjin tinggi tanpa terasa promosional.",
        rationale: "Mencerminkan cara pelanggan menjelajahi display bakery fisik — berdasarkan kategori (roti, kue, pastri) bukan search intent.",
        tradeoff: "Kami sengaja menunda search bar di v1. Search membutuhkan ukuran katalog minimum dan kebiasaan pengguna yang sudah terlatih. Browsing kategori mencakup 90% kasus untuk katalog <50 item.",
      },
      {
        area: "Product Detail Screen",
        challenge: "Pelanggan tidak bisa memeriksa produk secara fisik sebelum membeli — kelemahan mendasar dari commerce digital. Setiap keraguan di layar detail adalah order yang hilang.",
        decision: "Merancang layout hero image full-bleed dengan nama produk, deskripsi 'Tentang Varian', dan tampilan harga diskon yang menonjol (harga diskon + coret harga asli). Selector kuantitas ditempatkan langsung di layar detail bersama CTA 'BELI SEKARANG'. Tombol wishlist dan share disertakan untuk mendukung discovery sosial.",
        rationale: "Kompensasi atas ketiadaan fisik lewat imersi visual dan transparansi harga. Menempatkan selector kuantitas dan CTA di layar yang sama menghilangkan satu langkah — mengurangi jarak antara keputusan dan aksi.",
        tradeoff: "Hero image full-bleed mendorong info produk ke bawah fold di layar kecil. Ini trade-off yang disengaja: kesan pertama lebih penting daripada kepadatan informasi di food commerce. Pengguna akan scroll ketika mereka tertarik.",
      },
      {
        area: "Checkout & Payment",
        challenge: "Bagaimana merancang checkout yang terasa lengkap dan bisa dipercaya saat infrastruktur pembayaran masih berkembang dan pengguna punya kebutuhan pengantaran yang beragam?",
        decision: "Membangun satu layar Pembayaran terpadu dengan: (1) toggle antara mode Diambil (pickup) dan Diantar (delivery) dengan alur alamat yang berbeda, (2) ringkasan order yang bisa diedit dengan 'Tambah Pesanan' untuk menambah item di tengah checkout, (3) input voucher untuk penerapan diskon, dan (4) section Metode Pembayaran untuk memilih cara bayar. 'PESAN SEKARANG' sebagai CTA terminal.",
        rationale: "Menggabungkan review order dan pemilihan pembayaran ke satu layar menghilangkan transisi yang tidak perlu. Toggle Diambil/Diantar memberi pengguna kendali atas fulfillment tanpa perlu memelihara dua alur checkout terpisah.",
        tradeoff: "Satu layar membawa lebih banyak informasi dibanding alur bertahap. Risikonya adalah overload kognitif di momen komitmen tertinggi. Ini dimitigasi lewat hierarki section yang jelas, CTA sticky, dan default ke Diambil (pickup) sebagai alur yang lebih sederhana.",
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

const ImpactGrid = () => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">User Impact</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "↓ Friksi", label: "Checkout 3-layar yang ringkas vs. rata-rata industri 5–7 langkah" },
          { metric: "↑ Keyakinan", label: "Product detail visual-first mengurangi keraguan sebelum membeli" },
          { metric: "↑ Discovery", label: "Browsing kategori memunculkan produk relevan dalam 2 tap" },
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
          { metric: "Digital", label: "Kanal penjualan baru terbuka — mengurangi ketergantungan pada walk-in" },
          { metric: "Retention", label: "Sistem loyalty menciptakan alasan untuk kembali — meningkatkan LTV" },
          { metric: "Siap Skala", label: "Arsitektur dirancang untuk menyambung payment & delivery di Fase 2" },
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
          title="Membangun Pengalaman Order Digital untuk Brand Bakery Lokal"
          subtitle="Merancang pengalaman order mobile lengkap untuk sebuah bakery lokal — di mana tantangan sesungguhnya bukan UI-nya, melainkan memutuskan apa yang dibangun lebih dulu dan apa yang ditunda, sesuai keterbatasan infrastruktur yang belum sanggup ditopang bisnis."
          tags={["Product Thinking", "UX Strategy", "Mobile App", "Scope Decision", "Food & Beverage"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "4 Minggu (Desain)" },
            { label: "Tim", value: "1 Designer, 1 PM, 2 Engineer, 2 Stakeholder" },
            { label: "Peran", value: "UI/UX Designer" },
            { label: "Platform", value: "iOS & Android" },
          ]}
        />

        {/* 01 — Business Context */}
        <SectionBlock label="01 — Konteks Bisnis" index={0}>
          <p>
            Dea Bakery membangun reputasinya dengan cara klasik — lewat pelanggan walk-in, mulut ke mulut,
            dan broadcast WhatsApp. Cara ini berhasil. Tapi seiring digital ordering menjadi standar di industri
            F&B, bisnis ini menghadapi celah nyata: pelanggan makin mengharapkan bisa menemukan dan memesan
            produk secara online, sementara Dea Bakery belum punya kanal digital untuk menjawab itu.
          </p>
          <p>
            Brief awalnya luas: <strong>bangun aplikasi mobile yang memungkinkan pelanggan memesan produk
            bakery.</strong> Cukup sederhana di atas kertas. Tapi discovery awal mengungkap gambaran yang lebih
            nuansa — bisnis ini punya dua kelompok pengguna berbeda dengan tujuan berbeda:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Pelanggan</strong> — ingin akses mudah ke informasi produk, harga, dan promo
              sebelum memutuskan untuk berkunjung atau memesan
            </li>
            <li>
              <strong>Pemilik Bisnis</strong> — ingin alat untuk membangun loyalitas pelanggan, keluar dari
              broadcast WhatsApp, dan menciptakan kanal penjualan digital yang bisa dilacak
            </li>
          </ul>
          <p>
            Ketegangan ini — antara apa yang diinginkan pengguna sekarang dan apa yang secara operasional
            siap ditopang bisnis — menjadi masalah desain inti yang harus diselesaikan.
          </p>
        </SectionBlock>

        {/* 02 — The Problem */}
        <SectionBlock label="02 — Masalah" index={1}>
          <p>
            Lewat analisis kebiasaan umum food-ordering dan pola belanja bakery, muncul empat titik friksi
            berbeda yang harus dijawab oleh solusi apa pun yang efektif:
          </p>
          <div className="space-y-3 mt-2">
            {[
              {
                title: "Friksi Product Discovery",
                body: "Pelanggan sering browsing tanpa item spesifik di kepala. Katalog besar tanpa struktur cepat terasa berlebihan — mengubah eksplorasi menjadi frustrasi.",
              },
              {
                title: "Kompleksitas Ordering",
                body: "Alur checkout yang panjang atau ambigu menciptakan beban kognitif yang tidak perlu dan meningkatkan kemungkinan abandonment di momen paling bernilai dalam journey.",
              },
              {
                title: "Keyakinan Produk yang Terbatas",
                body: "Berbeda dari toko fisik, pelanggan tidak bisa melihat, mencium, atau menyentuh produk. Aplikasi harus mengompensasinya lewat kualitas visual dan kejelasan informasi.",
              },
              {
                title: "Ekspektasi Mobile-First",
                body: "Pengguna membandingkan dengan GrabFood, Shopee Food, dan Tokopedia. Toleransi mereka terhadap friksi sudah terkalibrasi oleh aplikasi kelas dunia — dan tidak ada masa tenggang untuk 'kami baru mulai'.",
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
              "Bagaimana kami bisa menciptakan pengalaman mobile bakery yang mendorong product discovery
              sekaligus memungkinkan pelanggan menyelesaikan pembelian dengan cepat dan yakin — dalam
              batasan bisnis yang nyata?"
            </p>
          </div>
        </SectionBlock>

        {/* 03 — Research & Discovery */}
        <SectionBlock label="03 — Riset & Discovery" index={2}>
          <p>
            Fase riset menggabungkan benchmarking kompetitif lintas aplikasi F&B (GrabFood, Tokopedia,
            Kopi Kenangan), analisis pola perilaku dari studi food-ordering yang sudah ada, dan
            wawancara stakeholder bersama pemilik bakery.
          </p>
          <p>
            Tujuannya bukan mengumpulkan segunung data — tapi mengidentifikasi kumpulan insight terkecil
            yang paling langsung membentuk keputusan desain.
          </p>
          <ResearchInsights />
        </SectionBlock>

        {/* 04 — User Journey Map */}
        <SectionBlock label="04 — User Journey Map" index={3}>
          <p>
            Memetakan journey pelanggan end-to-end mengungkap di mana pengalaman lama (sebelum ada aplikasi)
            gagal, dan di mana aplikasi punya peluang intervensi terbesar. Journey map ini juga dipakai untuk
            menyamakan pemahaman stakeholder tentang apa sebenarnya "masalah user experience" itu —
            menggeser percakapan dari fitur ke perasaan.
          </p>
          <UserJourneyMap />
        </SectionBlock>

        {/* 05 — User Flow */}
        <SectionBlock label="05 — User Flow Inti" index={4}>
          <p>
            Sebelum masuk ke wireframe, user flow utama dipetakan untuk memvalidasi bahwa journey order
            bisa diselesaikan dengan langkah seminimal mungkin. Target-nya adalah di bawah 7 tap dari
            membuka aplikasi hingga konfirmasi order.
          </p>
          <UserFlowDiagram />
          <p>
            Flow ini membentuk information architecture: lima tab navigasi utama (Home, Menu, Poin,
            Belanja, Akun) tanpa nesting lebih dari dua level. Setiap tab punya satu job-to-be-done yang
            jelas, membuat navigasi terasa fungsional, bukan sekadar dekoratif.
          </p>
        </SectionBlock>

        {/* 06 — Design Exploration */}
        <SectionBlock label="06 — Eksplorasi Desain" index={5}>
          <p>
            Fase eksplorasi ini bukan soal menghasilkan opsi demi opsi. Setiap keputusan desain dikaitkan
            dengan perilaku pengguna atau batasan bisnis yang spesifik — dan masing-masing datang dengan
            trade-off yang disadari.
          </p>
          <DesignExplorationCards />
        </SectionBlock>

        {/* Scope Image */}
        <ProjectImage
          src={deaBakeryScope}
          alt="Keputusan scope navigasi — dari pertimbangan loyalty-only menjadi pengalaman order lengkap 5-tab"
          caption="Keputusan scope: menolak pendekatan loyalty-only. Fase 1 merilis pengalaman order lengkap 5-tab (Home, Menu, Poin, Belanja, Akun) dengan BCA Transfer manual + fulfillment pickup-only. Payment gateway otomatis, delivery tracking, dan dashboard operator disimpan untuk Fase 2."
        />

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
                title: "Product Discovery Visual-First",
                body: "Foto produk adalah pendorong konversi utama di food commerce. Layout dirancang untuk menempatkan visual di depan dan pusat — bukan terkubur di bawah header dan filter.",
              },
              {
                num: "2",
                title: "Perjalanan Pembelian yang Disederhanakan",
                body: "Setiap langkah tambahan punya biaya. Alur order dirancang untuk meminimalkan keputusan, bukan memaksimalkan opsi. Lebih sedikit tap = lebih banyak order yang selesai.",
              },
              {
                num: "3",
                title: "Keyakinan lewat Kejelasan",
                body: "Pengguna tidak boleh pernah merasa ragu tentang apa yang mereka beli, berapa harganya, atau apa yang terjadi selanjutnya. Transparansi bukan nice-to-have — ia syarat konversi.",
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

        {/* Final Mockup */}
        <ProjectImage
          src={deaBakeryMockup}
          alt="Desain final aplikasi mobile Dea Bakery — layar Dashboard, Katalog, dan Struk Digital"
          caption="Desain final — dashboard loyalty personal (850 Poin), katalog produk visual-first dengan harga Rupiah, dan struk digital bersih dengan konfirmasi BCA transfer dan poin loyalty."
        />

        {/* 08 — Final Solution */}
        <SectionBlock label="08 — Solusi Final" index={7}>
          <p>
            Desain final menghadirkan pengalaman order mobile lengkap 5-tab — loyalty, katalog,
            pelacakan poin, belanja, dan manajemen akun — dibangun berdasarkan batasan nyata dari
            apa yang bisa ditopang bisnis saat peluncuran:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Home Dashboard Loyalty-First",
                desc: "Home dibuka dengan sapaan personal dan saldo poin real-time — membuat loyalty terlihat sejak aplikasi dibuka. Banner promo, Produk Unggulan, dan scan-to-earn memberi pengguna alasan untuk terlibat bahkan tanpa niat beli langsung.",
              },
              {
                title: "Katalog Produk Visual-First",
                desc: "Tab Menu/Katalog mengorganisir produk berdasarkan kategori (Roti, Kue, Pastri) dengan fotografi berkualitas tinggi, rating bintang, dan harga Rupiah yang jelas. Search mendukung browsing berbasis intent bersama eksplorasi kategori.",
              },
              {
                title: "Alur Cart & Order Lengkap",
                desc: "Tab Belanja mencakup journey order penuh — review cart, penjadwalan pickup, dan pembayaran BCA Transfer — dalam alur 3 langkah. Tidak ada pembuatan akun wajib. Konfirmasi order langsung menghasilkan Struk Digital dengan poin loyalty yang didapat.",
              },
              {
                title: "Poin & Rewards Khusus",
                desc: "Tab Poin mandiri melacak akumulasi poin loyalty, progres menuju tier reward berikutnya, dan voucher yang tersedia. Poin muncul di setiap Struk Digital — menutup loop engagement dan memberi pengguna alasan nyata untuk kembali.",
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
            Ini adalah inisiatif desain konseptual — aplikasi masih dalam tahap finalisasi pra-peluncuran.
            Namun, rationale desainnya memetakan langsung ke hasil yang bisa diukur:
          </p>
          <ImpactGrid />
        </SectionBlock>

        {/* 10 — Reflection */}
        <SectionBlock label="10 — Refleksi" index={9}>
          <p>
            Tantangan terbesar di proyek ini bukan UI — melainkan scope. Di awal proyek, ada tekanan nyata
            untuk membatasi Fase 1 menjadi aplikasi loyalty-and-catalog-only saja: tanpa cart, tanpa
            checkout. Alasannya masuk akal — belum ada payment gateway, belum ada infrastruktur delivery,
            belum ada tooling operator.
          </p>
          <p>
            Tapi aplikasi loyalty tanpa kemampuan order hanya setengah pengalaman. Pengguna akan browsing,
            jadi lapar, dan mentok di jalan buntu. Saya pushback — bukan untuk mengabaikan batasan
            infrastruktur, tapi untuk mencari scope yang bekerja <em>di sekitar</em> batasan itu.
          </p>
          <p>
            Keputusan scope sebenarnya adalah soal <em>bagaimana</em> memungkinkan ordering, bukan
            <em> apakah</em> harus:
          </p>
          <div className="space-y-3">
            {[
              { label: "Fulfillment", value: "Opsi Diambil (pickup) dan Diantar (delivery) sama-sama dibangun dalam satu layar Pembayaran — alur alamat menyesuaikan secara kontekstual. Tidak ada jalur checkout terpisah yang perlu dipelihara." },
              { label: "Payment", value: "Section Metode Pembayaran memungkinkan pengguna memilih cara bayar — menjaga fleksibilitas bagi bisnis untuk mengonfigurasi opsi yang tersedia seiring infrastruktur berkembang." },
              { label: "Checkout UX", value: "Checkout satu layar (Pembayaran) dengan ringkasan order yang bisa diedit, input voucher, dan 'Tambah Pesanan' — mengurangi navigasi mundur dan menjaga pengguna tetap di momen pembelian." },
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
              Keputusan scope ini bukan soal melakukan lebih sedikit — tapi soal strategis dengan dependensi.
              Mengetahui fitur mana yang butuh infrastruktur yang belum ada, merancang di sekitar batasan
              itu, dan merilis sesuatu yang lengkap di dalamnya — itulah beda antara product thinking dan
              wishful engineering.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectDeaBakery;
