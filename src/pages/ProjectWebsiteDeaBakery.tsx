import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import homeScreenshot from "@/assets/Home.png";
import aboutUsScreenshot from "@/assets/About Us.png";
import ourStoryScreenshot from "@/assets/Our Story.png";
import ourMenuScreenshot from "@/assets/Our Menu - Roti Manis.png";
import ourStoreScreenshot from "@/assets/Our Store.png";
import csrProgramScreenshot from "@/assets/CSR Program.png";

// ─── Goals Grid ──────────────────────────────────────────────────────────────

const GoalsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
    <div className="bg-card rounded-xl p-5 border border-border">
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-accent mb-3">
        Tujuan Bisnis
      </p>
      <ul className="space-y-2">
        {[
          "Menampilkan brand yang lebih profesional & modern",
          "Meningkatkan kepercayaan customer terhadap kualitas produk",
          "Menyediakan website yang mudah di-update oleh tim Marketing",
          "Mengurangi ketergantungan Developer untuk update harian",
          "Mendukung campaign & promo yang sedang berjalan",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-card rounded-xl p-5 border border-border">
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Tujuan UX
      </p>
      <ul className="space-y-2">
        {[
          "Menemukan informasi dalam max 2 klik",
          "Hierarki konten yang jelas dan mudah dibaca",
          "Readability & konsistensi visual di seluruh halaman",
          "Mobile-first — mayoritas user dari mobile",
          "Struktur scalable untuk penambahan konten masa depan",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-muted-foreground/50 font-bold mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ─── Responsibilities ────────────────────────────────────────────────────────

const ResponsibilityTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
    {[
      {
        role: "UI/UX Designer",
        icon: "🎨",
        items: [
          "Audit visual & UX desain existing",
          "Menyusun ulang layout utama setiap halaman",
          "Membuat wireframe low-fi & high-fi",
          "Membangun style guide (color, type, spacing)",
          "Membuat komponen reusable di Figma",
        ],
        accent: true,
      },
      {
        role: "Information Architect",
        icon: "🗂️",
        items: [
          "Memetakan sitemap & navigasi lama",
          "Menyusun ulang struktur navigasi",
          "Menyatukan halaman duplikat",
          "Membuat kategori konten yang jelas",
        ],
        accent: false,
      },
      {
        role: "UX Writer",
        icon: "✍️",
        items: [
          "Menulis ulang heading & tagline",
          "Menyederhanakan microcopy di seluruh halaman",
          "Menyesuaikan tone of voice brand",
          "Membuat CTA yang actionable & spesifik",
        ],
        accent: false,
      },
    ].map((col) => (
      <div key={col.role} className="bg-card rounded-xl p-4 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">{col.icon}</span>
          <p className={`font-display font-semibold text-xs tracking-widest uppercase ${col.accent ? "text-accent" : "text-muted-foreground"}`}>
            {col.role}
          </p>
        </div>
        <ul className="space-y-1.5">
          {col.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
              <span className={`font-bold mt-0.5 shrink-0 ${col.accent ? "text-accent" : "text-muted-foreground/40"}`}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// ─── Problem → Advantage ────────────────────────────────────────────────────

const ProblemAdvantageList = () => (
  <div className="space-y-2.5 mt-2">
    {[
      { icon: "🎨", problem: "Brand tidak konsisten antar halaman", advantage: "Sistem visual terpadu — brand terasa lebih kredibel & terpercaya" },
      { icon: "🧭", problem: "Informasi sulit ditemukan (3+ klik)", advantage: "Navigasi baru memangkas pencarian jadi maks. 2 klik" },
      { icon: "📑", problem: "Konten tersebar tanpa hierarki", advantage: "Struktur jelas — user langsung menemukan yang relevan" },
      { icon: "🔧", problem: "Update kecil selalu butuh Developer", advantage: "Struktur modular — Marketing mandiri kelola konten" },
    ].map((item) => (
      <div key={item.problem} className="flex items-center gap-3 bg-card rounded-xl p-3.5 border border-border">
        <span className="text-base shrink-0">{item.icon}</span>
        <p className="text-sm text-muted-foreground flex-1">{item.problem}</p>
        <span className="text-accent text-xs shrink-0">→</span>
        <p className="text-sm text-foreground font-medium flex-1">{item.advantage}</p>
      </div>
    ))}
  </div>
);

// ─── Design Process Flow ──────────────────────────────────────────────────────

const ProcessFlow = () => (
  <div className="flex flex-col gap-2">
    {[
      {
        step: "01",
        phase: "Riset & Audit",
        desc: "Memeriksa struktur navigasi, kategori konten, performance & loading time, dan UX flow existing",
        output: "Laporan audit + daftar pain point",
      },
      {
        step: "02",
        phase: "Information Architecture",
        desc: "Menyusun ulang sitemap berbasis 3 prinsip: Clarity, Findability, Scalability",
        output: "Sitemap baru + struktur navigasi",
      },
      {
        step: "03",
        phase: "Wireframing",
        desc: "Membuat wireframe layout untuk halaman utama — hero, product page, promo, blog",
        output: "Wireframe low-fidelity per halaman",
      },
      {
        step: "04",
        phase: "UI Design & Style Guide",
        desc: "Membangun sistem visual baru: color, typography, spacing, components reusable",
        output: "UI high-fidelity + Style guide",
      },
      {
        step: "05",
        phase: "Prototype & Handoff",
        desc: "Menyusun prototype interaktif di Figma & menyiapkan handoff notes untuk developer",
        output: "Prototype clickable + dokumen handoff",
      },
      {
        step: "06",
        phase: "Dukungan Implementasi",
        desc: "Mendampingi developer di Elementor, custom CSS ringan, review mobile responsif",
        output: "Website live sesuai jadwal",
      },
    ].map((item, i, arr) => (
      <div key={item.step} className="flex items-start gap-3">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
            <span className="text-accent font-display font-bold text-xs">{item.step}</span>
          </div>
          {i < arr.length - 1 && <div className="w-px h-6 bg-border mt-1" />}
        </div>
        <div className="pt-1 pb-2">
          <p className="font-display font-semibold text-sm text-foreground">{item.phase}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
          <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
            Output: {item.output}
          </span>
        </div>
      </div>
    ))}
  </div>
);

// ─── UI Exploration Cards ─────────────────────────────────────────────────────

// Top-cropped preview of a full-page screenshot — shows navbar + hero band
const ScreenCrop = ({ src, heightClass = "h-40" }: { src: string; heightClass?: string }) => (
  <div className={`mt-3 rounded-xl border border-border overflow-hidden ${heightClass}`}>
    <img src={src} alt="" className="w-full h-full object-cover object-top" />
  </div>
);

const UIExplorationCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Sistem Warna",
        thinking:
          "Warna existing tidak mencerminkan brand bakery — terlalu generik dan tidak membangkitkan appetite. Pertanyaannya: warna apa yang bisa secara visual menyampaikan 'artisanal, warm, trustworthy' tanpa terasa klise?",
        exploration:
          "Diuji beberapa arah warna primary sebelum menetapkan satu yang paling konsisten dengan brand mark Dea Bakery yang sudah ada — bukan warna baru yang lepas dari identitas lama.",
        decision:
          "Dipilih merah maroon sebagai primary (navbar, CTA, badge diskon) dipasangkan dengan latar krem hangat — mempertahankan kesan hangat khas bakery sambil tetap terasa lebih solid dan branded dibanding versi lama.",
        visual: <ScreenCrop src={homeScreenshot} heightClass="h-44" />,
      },
      {
        area: "Struktur Navigasi",
        thinking:
          "Navigasi lama punya banyak item tanpa hierarki. Saya perlu memahami: item mana yang paling sering diakses user? Apa yang bisa dikonsolidasikan tanpa kehilangan konten penting?",
        exploration:
          "Struktur disederhanakan ke item-item inti yang mencerminkan kebutuhan utama pengunjung — mengenal brand, melihat menu, menemukan lokasi, dan membaca update — dengan dropdown ringan untuk sub-kategori yang masih dibutuhkan.",
        decision:
          "Final: About (dropdown) · Our Menu (dropdown) · Our Service · Our Store · Career · Blog. Navbar sticky dengan warna primary solid agar selalu accessible dan langsung dikenali di setiap halaman.",
        visual: <ScreenCrop src={homeScreenshot} heightClass="h-16" />,
      },
      {
        area: "Hero Layout",
        thinking:
          "Hero adalah first impression — di website lama, hero tidak memiliki satu pesan yang jelas. Bagaimana hero bisa langsung menyampaikan value proposition dan karakter brand dalam hitungan detik?",
        exploration:
          "Setiap halaman diberi hero yang disesuaikan dengan tujuannya — hero produk dengan fotografi appetizing di halaman Menu, hero naratif di halaman About & CSR — bukan satu template hero generik dipakai ulang di semua halaman.",
        decision:
          "Halaman Menu memakai hero fotografi produk close-up dengan tagline yang lebih personal ('Kenalan Yuk Sama Rasa Baru!') dan CTA filter kategori langsung di bawahnya.",
        visual: <ScreenCrop src={ourMenuScreenshot} heightClass="h-48" />,
      },
      {
        area: "Komponen Product Card",
        thinking:
          "Card produk perlu menyampaikan 3 hal cepat: gambar yang appetizing, badge diskon yang menonjol, dan nama produk yang jelas — dan harus bisa diduplikasi tim Marketing tanpa developer.",
        exploration:
          "Iterasi mengarah ke card grid dengan foto produk asli berukuran besar sebagai fokus utama, dibanding layout list atau card padat berisi banyak elemen teks.",
        decision:
          "Grid 4-kolom (desktop) dengan foto produk penuh, badge diskon merah di pojok, dan nama produk di bawah — filter kategori sebagai pill di atas grid untuk navigasi cepat antar varian.",
        visual: <ScreenCrop src={ourMenuScreenshot} heightClass="h-52" />,
      },
    ].map((item, i) => (
      <div key={item.area} className="rounded-xl border border-border overflow-hidden">
        <div className="bg-secondary px-5 py-3 flex items-center gap-3">
          <span className="text-xs font-display font-semibold text-accent tracking-widest uppercase">
            Eksplorasi {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-display font-bold text-foreground">{item.area}</span>
        </div>
        <div className="p-5 space-y-3">
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Cara Berpikir</p>
            <p className="text-sm text-secondary-foreground leading-relaxed">{item.thinking}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Eksplorasi</p>
            <p className="text-sm text-secondary-foreground leading-relaxed">{item.exploration}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-accent mb-1">Keputusan Final</p>
            <p className="text-sm text-muted-foreground">{item.decision}</p>
          </div>
          {item.visual}
        </div>
      </div>
    ))}
  </div>
);

// ─── Final Pages ──────────────────────────────────────────────────────────────

const FinalPagesGallery = () => (
  <div className="space-y-6">
    {[
      { src: homeScreenshot, label: "Homepage", desc: "Hero carousel, Awal Mula Kami, Our Latest Blogs, Dea Promo, Our Popular After Meal, Order From App, Dea Friends, Our Social Media" },
      { src: aboutUsScreenshot, label: "About Us", desc: "Discover Who We Are, We Are Dea Family, Certification & Achievement (Halal, BPOM, MURI), Our Commitment" },
      { src: ourStoryScreenshot, label: "Our Story — Company Timeline", desc: "Perjalanan brand dari 2001 hingga ekspansi nasional 2025" },
      { src: ourMenuScreenshot, label: "Our Menu", desc: "Hero produk, filter kategori, dan grid produk dengan badge diskon" },
      { src: ourStoreScreenshot, label: "Our Store", desc: "Pencarian lokasi toko dengan kartu alamat & jam buka" },
      { src: csrProgramScreenshot, label: "CSR Program", desc: "Tiga pilar kontribusi sosial dan pencapaian rekor MURI" },
    ].map((page) => (
      <figure key={page.label} className="space-y-2">
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <img src={page.src} alt={`Halaman ${page.label} — website Dea Bakery`} className="w-full h-auto block" loading="lazy" />
        </div>
        <figcaption>
          <p className="font-display font-semibold text-sm text-foreground">{page.label}</p>
          <p className="text-xs text-muted-foreground">{page.desc}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);

// ─── Final Deliverables ───────────────────────────────────────────────────────

const FinalDeliverables = () => (
  <div className="space-y-6">
    {/* Style Guide */}
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Deliverable 1 — Sistem Visual
      </p>
      <div className="bg-card rounded-xl border border-border p-5 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Merah maroon sebagai warna primary — dipakai konsisten di navbar, CTA, dan badge diskon
          di seluruh halaman — dipasangkan dengan latar krem hangat dan fotografi produk asli
          sebagai elemen visual utama, menggantikan placeholder generik di versi lama.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Navbar & CTA konsisten", "Fotografi produk asli", "Badge diskon standar", "Card component reusable"].map((s) => (
            <span key={s} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* UI Final Pages */}
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Deliverable 2 — Final UI (Page Sections)
      </p>
      <div className="space-y-3">
        {[
          {
            page: "Homepage",
            sections: ["Hero carousel", "Awal Mula Kami", "Our Latest Blogs", "Dea Promo", "Our Popular After Meal", "Order From App", "Dea Friends", "Our Social Media"],
            status: "Dirilis",
          },
          {
            page: "About Us",
            sections: ["Our Mission", "We Are Dea Family", "Certification & Achievement", "Our Commitment"],
            status: "Dirilis",
          },
          {
            page: "Our Story",
            sections: ["Company Timeline 2001–2025"],
            status: "Dirilis",
          },
          {
            page: "Our Menu",
            sections: ["Hero produk", "Filter kategori", "Product grid dengan badge diskon"],
            status: "Dirilis",
          },
          {
            page: "Our Store",
            sections: ["Pencarian lokasi", "Kartu toko (alamat, jam buka)"],
            status: "Dirilis",
          },
          {
            page: "CSR Program",
            sections: ["3 Dasar Kontribusi Sosial", "Pencapaian Rekor MURI"],
            status: "Dirilis",
          },
        ].map((item) => (
          <div key={item.page} className="flex gap-4 bg-card rounded-xl p-4 border border-border">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <p className="font-display font-semibold text-sm text-foreground">{item.page}</p>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {item.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.sections.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Prototype */}
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Deliverable 3 — Prototype
      </p>
      <div className="bg-card rounded-xl border border-border p-5 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Prototype interaktif dibuat di Figma untuk mensimulasikan navigasi antar halaman dan
          validasi user flow sebelum handoff ke developer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              title: "Alur Navigasi",
              desc: "Simulasi navigasi dari Homepage → Our Menu → Our Store → About Us",
              icon: "🔗",
            },
            {
              title: "Responsivitas Mobile",
              desc: "Prototype mobile view untuk validasi layout di layar kecil",
              icon: "📱",
            },
            {
              title: "Catatan Handoff",
              desc: "Anotasi spacing, color tokens, dan component behavior untuk developer",
              icon: "📋",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 bg-secondary rounded-xl p-3.5 border border-border">
              <span className="text-lg shrink-0">{item.icon}</span>
              <div>
                <p className="font-display font-semibold text-xs text-foreground mb-0.5">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Cakupan prototipe:</span> Fokus pada user flow utama — menemukan produk, mengakses promo, dan menghubungi toko. Interaksi micro-animation tidak diprototype karena constraint Elementor.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ─── Challenges ───────────────────────────────────────────────────────────────

const ChallengeCards = () => (
  <div className="space-y-3">
    {[
      {
        num: "01",
        challenge: "Keterbatasan Grid Elementor",
        context: "Elementor tidak mendukung CSS grid presisi seperti Figma. Layout multi-kolom yang kompleks tidak bisa dibuat native.",
        solution: "Desain disederhanakan ke kolom standar (1/2/3 kolom). Custom CSS ringan ditambahkan hanya untuk spacing dan alignment yang tidak bisa dicapai native.",
        learning: "Designing 'buildable' adalah skill tersendiri. Saya belajar mendesain dalam constraint tools, bukan melawan mereka.",
      },
      {
        num: "02",
        challenge: "Responsivitas Mobile Tidak Stabil",
        context: "Elemen berubah presisi di mobile view Elementor — spacing dan font size sering tidak konsisten antar device.",
        solution: "Pendekatan mobile-first diterapkan dari awal. Setiap section di-review di 3 breakpoint (mobile, tablet, desktop). Manual override di beberapa elemen kritis.",
        learning: "Mobile-first bukan hanya filosofi UX — di Elementor, ini juga strategi implementasi untuk menghindari rework.",
      },
      {
        num: "03",
        challenge: "Timeline Cepat vs. Kualitas Desain",
        context: "Project berjalan paralel dengan beberapa project internal lain. Marketing butuh rilis cepat, tapi saya tidak mau mengorbankan konsistensi sistem.",
        solution: "Prioritas dikerjakan berdasarkan dampak: navigasi & homepage terlebih dahulu (high-traffic), halaman dalam (lower priority). Style guide dibuat di awal agar semua page konsisten tanpa review per-elemen.",
        learning: "Style guide adalah force multiplier. Dengan sistem yang solid di awal, kecepatan eksekusi di halaman berikutnya meningkat signifikan.",
      },
      {
        num: "04",
        challenge: "Otonomi Tim Marketing",
        context: "Salah satu goal project adalah Marketing bisa update konten mandiri. Tapi setiap komponen yang 'terlalu custom' sulit diduplikasi tanpa developer.",
        solution: "Setiap section dirancang sebagai 'block' yang bisa diduplikasi di Elementor. Internal guide singkat dibuat untuk Marketing — cara update promo, tambah produk, dan edit blog tanpa sentuh kode.",
        learning: "Designing for the maintainer adalah bagian dari design deliverable — bukan afterthought.",
      },
    ].map((item) => (
      <div key={item.num} className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="bg-secondary px-5 py-3 flex items-center gap-3">
          <span className="font-display font-bold text-2xl text-accent/20 leading-none">{item.num}</span>
          <p className="font-display font-bold text-sm text-foreground">{item.challenge}</p>
        </div>
        <div className="p-5 space-y-3">
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Konteks</p>
            <p className="text-sm text-muted-foreground">{item.context}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Solusi</p>
            <p className="text-sm text-secondary-foreground">{item.solution}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-2.5">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-accent mb-0.5">Pembelajaran Kunci</p>
            <p className="text-sm text-muted-foreground italic">{item.learning}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ─── Impact ───────────────────────────────────────────────────────────────────

const ImpactGrid = () => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Dampak UX</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "≤ 2 klik", label: "Informasi penting ditemukan dalam max 2 klik — dari sebelumnya 3+ klik" },
          { metric: "↑ Konsistensi", label: "Brand terasa lebih modern & terpercaya — navigasi jadi intuitif" },
          { metric: "↑ Mobile", label: "Layout responsif stabil di semua device — mobile-first approach berhasil" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-accent mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Dampak Bisnis</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "On-time", label: "Website rilis sesuai deadline — kejar tayang terpenuhi" },
          { metric: "Self-serve", label: "Marketing dapat update promo & konten tanpa Developer" },
          { metric: "↑ Campaign", label: "Konten campaign dapat dipublikasikan tepat waktu" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-foreground mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Dampak Teknis</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "↓ Load time", label: "Page load lebih ringan dengan optimasi gambar WebP & minimalisasi plugin" },
          { metric: "Modular", label: "Struktur modular memudahkan maintenance tanpa sentuh kode" },
          { metric: "↑ Responsif", label: "Layout responsif lebih stabil di semua breakpoint device" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-accent/70 mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Page Component ──────────────────────────────────────────────────────────

const ProjectWebsiteDeaBakery = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 03"
          title="Menata Ulang Website Resmi Brand Bakery Lokal"
          subtitle="Redesign website Dea Bakery dari yang tidak konsisten dan sulit dinavigasi menjadi sistem visual yang kohesif, mudah di-maintain, dan langsung menyampaikan brand value kepada user."
          tags={["UI Design", "Web Redesign", "Information Architecture", "UX Writing", "Design System"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "4 Minggu" },
            { label: "Tim", value: "1 Designer, 2 Developer" },
            { label: "Peran", value: "UI/UX Designer · UX Writer" },
            { label: "Tools", value: "Figma · Elementor · Jira" },
          ]}
        />

        {/* 01 — Overview */}
        <SectionBlock label="01 — Ringkasan Proyek" index={0}>
          <p>
            Website Dea Bakery tumbuh secara incremental selama beberapa tahun tanpa design oversight.
            Setiap update menambahkan section, menu, dan halaman baru — tanpa struktur yang kohesif.
            Hasilnya: website yang terasa berantakan, sulit dinavigasi, dan tidak mencerminkan kualitas
            produk yang sebenarnya ditawarkan brand.
          </p>
          <p>
            Redesign ini bukan sekadar "bikin lebih bagus" — tapi tentang <strong>memecahkan masalah nyata</strong>:
            navigasi yang membingungkan user, konten yang tersebar tanpa hierarki, dan struktur yang membuat
            tim Marketing selalu bergantung pada Developer untuk update kecil sekalipun.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-1">Project Brief</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "Redesign website agar mencerminkan brand secara profesional, membuat informasi mudah
              ditemukan dalam maks. 2 klik, dan memberi tim Marketing kemandirian mengelola konten
              tanpa bergantung pada developer setiap saat."
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Goals & Objectives */}
        <SectionBlock label="02 — Tujuan" index={1}>
          <p>
            Dua perspektif tujuan yang harus diseimbangkan: apa yang bisnis butuhkan dari website ini,
            dan bagaimana experience yang seharusnya dirasakan oleh user.
          </p>
          <GoalsGrid />
        </SectionBlock>

        {/* 03 — My Responsibilities */}
        <SectionBlock label="03 — Tanggung Jawab Saya" index={2}>
          <p>
            Di project ini saya mengerjakan tiga peran sekaligus — bukan karena pilihan, tapi karena
            ketiganya saling terhubung erat dan tidak bisa dipisahkan. Keputusan di satu area langsung
            mempengaruhi yang lain.
          </p>
          <ResponsibilityTable />
        </SectionBlock>

        {/* 04 — Problem → Advantage */}
        <SectionBlock label="04 — Masalah & Peluang" index={3}>
          <p>
            Audit desain existing mengungkap empat masalah struktural — masing-masing juga membuka
            peluang perbaikan yang konkret:
          </p>
          <ProblemAdvantageList />
          <div className="bg-secondary rounded-xl p-4 border border-border mt-4">
            <p className="text-sm font-display font-semibold text-foreground leading-snug">
              "Bagaimana website bisa mencerminkan brand secara konsisten, mudah ditemukan dalam 2 klik,
              dan mandiri dikelola tim non-teknis — dalam constraints Elementor?"
            </p>
          </div>
        </SectionBlock>

        {/* 05 — Design Process */}
        <SectionBlock label="05 — Proses Desain" index={4}>
          <p>
            Proses desain ini berlangsung dalam 4 minggu dengan timeline ketat — berjalan paralel
            dengan project internal lain. Struktur proses dibuat agar setiap fase menghasilkan
            output yang langsung digunakan di fase berikutnya, bukan dead end.
          </p>
          <ProcessFlow />
        </SectionBlock>

        {/* 06 — UI Exploration */}
        <SectionBlock label="06 — Eksplorasi UI" index={5}>
          <p>
            Tidak ada keputusan desain yang dibuat tanpa alasan. Di setiap area kritis, saya
            menjalankan iterasi kecil sebelum menetapkan arah final — memastikan setiap pilihan
            bisa dipertanggungjawabkan secara UX maupun feasibility implementasi.
          </p>
          <UIExplorationCards />
        </SectionBlock>

        {/* 07 — Final Pages */}
        <SectionBlock label="07 — Halaman Final" index={6}>
          <p>
            Enam halaman inti yang dirilis — dari homepage hingga program CSR — masing-masing
            dengan hero dan struktur konten yang disesuaikan dengan tujuannya sendiri.
          </p>
          <FinalPagesGallery />
        </SectionBlock>

        {/* 08 — Deliverables */}
        <SectionBlock label="08 — Deliverable" index={7}>
          <p>
            Tiga deliverable utama yang dihasilkan dari project ini — masing-masing punya tujuan
            yang berbeda dalam lifecycle project.
          </p>
          <FinalDeliverables />
        </SectionBlock>

        {/* 09 — Challenges */}
        <SectionBlock label="09 — Tantangan" index={8}>
          <p>
            Setiap project punya hambatan — yang membedakan adalah bagaimana hambatan itu direspons.
            Berikut empat challenge terbesar di project ini, dan cara saya mengatasinya.
          </p>
          <ChallengeCards />
        </SectionBlock>

        {/* 10 — Impact */}
        <SectionBlock label="10 — Dampak" index={9}>
          <p>
            Website berhasil rilis sesuai deadline. Dampak yang dirasakan mencakup tiga dimensi:
            user experience, operasional bisnis, dan efisiensi maintenance.
          </p>
          <ImpactGrid />
        </SectionBlock>

        {/* 11 — Reflection */}
        <SectionBlock label="11 — Refleksi" index={10}>
          <p>
            Yang paling berkesan dari project ini bukan hasil akhirnya — tapi cara berpikir
            yang harus digunakan selama prosesnya.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Constraint sebagai alat berpikir",
                value: "Elementor bukan musuh — dia adalah constraint yang memaksa saya berpikir lebih disiplin tentang apa yang benar-benar perlu. Desain yang 'buildable' sama pentingnya dengan desain yang 'beautiful'.",
              },
              {
                label: "IA sebelum UI",
                value: "Perubahan paling berdampak di project ini bukan visual — tapi struktural. Merapikan navigasi dan menyatukan halaman duplikat memberikan UX value yang lebih besar dari warna atau font manapun.",
              },
              {
                label: "Desain untuk maintainer",
                value: "Membangun komponen modular dan panduan internal untuk Marketing adalah bagian dari design deliverable yang sama pentingnya dengan Figma file. Website yang bagus tapi tidak bisa di-maintain adalah aset yang akan cepat jadi liabilitas.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 bg-card rounded-xl p-4 border border-border">
                <span className="font-display font-semibold text-sm text-accent shrink-0">{item.label}:</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl p-5 border border-border mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Redesign yang baik bukan tentang membuat sesuatu terlihat lebih bagus —
              tapi tentang memecahkan masalah yang tepat dengan cara yang bisa dipertahankan.
              Memahami konteks bisnis, bekerja dalam constraint nyata, dan mendesain untuk orang
              yang akan maintain produk jauh setelah project selesai: itulah yang membuat
              redesign ini benar-benar berhasil.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectWebsiteDeaBakery;
