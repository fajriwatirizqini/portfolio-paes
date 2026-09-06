import { useState, useRef, useCallback } from "react";
import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

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

// ─── Problem Statement ────────────────────────────────────────────────────────

const ProblemCards = () => (
  <div className="space-y-3 mt-2">
    {[
      {
        icon: "🎨",
        title: "Inkonsistensi Brand",
        body: "Warna tidak selaras dengan identitas brand. Typography dan spacing berantakan. Elemen visual tidak seragam antar halaman — menciptakan kesan tidak profesional dan menurunkan kepercayaan user.",
        severity: "Tinggi",
      },
      {
        icon: "🧭",
        title: "Navigasi & Findability yang Buruk",
        body: "Label menu tidak jelas. Terlalu banyak pilihan membuat user bingung. Informasi kritis seperti promo, harga, dan lokasi terkubur di halaman dalam — butuh lebih dari 3 klik untuk ditemukan.",
        severity: "Tinggi",
      },
      {
        icon: "📑",
        title: "Struktur Konten yang Berantakan",
        body: "Konten tidak mengikuti hierarki visual. Banyak informasi repetitif tanpa konteks yang jelas. User harus 'membaca semuanya' untuk menemukan yang relevan.",
        severity: "Sedang",
      },
      {
        icon: "🔧",
        title: "Sulit Di-maintain",
        body: "Struktur lama tidak modular — setiap update konten kecil memerlukan Developer. Tim Marketing tidak bisa mandiri, memperlambat campaign & promo.",
        severity: "Sedang",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 bg-card rounded-xl p-4 border border-border">
        <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-display font-semibold text-sm text-foreground">{item.title}</p>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.severity === "Tinggi" ? "bg-red-500/10 text-red-400" : "bg-amber-500/10 text-amber-400"}`}>
              {item.severity}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
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

const UIExplorationCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Sistem Warna",
        thinking:
          "Warna existing tidak mencerminkan brand bakery — terlalu generik dan tidak membangkitkan appetite. Pertanyaannya: warna apa yang bisa secara visual menyampaikan 'artisanal, warm, trustworthy' tanpa terasa klise?",
        exploration:
          "Diuji 3 arah: (A) Hijau fresh/organic — terlalu health-food, tidak sesuai bakery. (B) Merah/kuning — terlalu fast food. (C) Warm brown palette (caramel, mocha, cream) — menangkap nuansa artisanal dan premium bakery tanpa over-claiming.",
        decision:
          "Dipilih warm caramel (#C4873E) sebagai primary, cream (#FDF6EC) sebagai background, dark espresso (#3B2010) sebagai text. Konsisten di semua halaman melalui CSS variables.",
        visual: (
          <div className="flex gap-2 mt-3">
            {[
              { hex: "#FDF6EC", label: "Cream" },
              { hex: "#F5DFC5", label: "Blush" },
              { hex: "#C4873E", label: "Caramel" },
              { hex: "#7B4F2E", label: "Mocha" },
              { hex: "#3B2010", label: "Espresso" },
            ].map((c) => (
              <div key={c.hex} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: c.hex }} />
                <span className="text-[9px] text-muted-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        area: "Struktur Navigasi",
        thinking:
          "Navigasi lama punya 8+ item tanpa hierarki. Saya perlu memahami: item mana yang paling sering diakses user? Apa yang bisa dikonsolidasikan tanpa kehilangan konten penting?",
        exploration:
          "Dibuat 3 iterasi struktur navigasi: (A) Flat 5-item — terlalu simpel, kehilangan konten blog. (B) 2-level mega menu — terlalu kompleks untuk Elementor. (C) 5-item clean + dropdown ringan untuk sub-kategori produk — balance antara simplicity dan coverage.",
        decision:
          "Final: Beranda · Produk (dropdown: Roti, Kue, Pastri) · Promo · Blog · Tentang Kami. Sticky navbar agar selalu accessible. Informasi lokasi & WhatsApp dipindah ke header strip.",
        visual: (
          <div className="mt-3 rounded-xl border border-border overflow-hidden">
            <div className="px-4 py-2.5 flex items-center justify-between" style={{ backgroundColor: "#3B2010" }}>
              <span className="font-display font-bold text-sm" style={{ color: "#F5DFC5" }}>Dea Bakery</span>
              <div className="hidden md:flex items-center gap-5">
                {["Beranda", "Produk ▾", "Promo", "Blog", "Tentang Kami"].map((item, i) => (
                  <span key={item} className="text-xs font-medium" style={{ color: i === 0 ? "#F5DFC5" : "rgba(255,255,255,0.55)" }}>
                    {item}
                  </span>
                ))}
              </div>
              <button className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ backgroundColor: "#C4873E", color: "white" }}>
                Pesan Sekarang
              </button>
            </div>
            <div className="px-4 pb-1 hidden md:block" style={{ backgroundColor: "#3B2010" }}>
              <div className="w-12 h-0.5 rounded-full" style={{ backgroundColor: "#C4873E" }} />
            </div>
          </div>
        ),
      },
      {
        area: "Hero Layout",
        thinking:
          "Hero adalah first impression — di website lama, hero tidak memiliki satu pesan yang jelas. CTA tidak visible, dan gambar produk tidak memperkuat appetite. Bagaimana hero bisa langsung menyampaikan value proposition dalam 3 detik?",
        exploration:
          "Diuji 2 pendekatan: (A) Full-width product photography dengan overlay text — visual kuat tapi text readability rendah. (B) Split layout (text kiri, image kanan) — lebih readable dan mobile-friendly. Pilihan (B) lebih feasible di Elementor.",
        decision:
          "Split layout dengan: tagline rewritten ('Roti Segar, Setiap Hari'), sub-copy singkat, 2 CTA (Lihat Menu + Hubungi Kami), product image di kanan. Background warm cream untuk konsistensi brand.",
        visual: (
          <div className="mt-3 rounded-xl overflow-hidden border border-border" style={{ backgroundColor: "#FDF6EC" }}>
            <div className="p-5 flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: "#C4873E" }}>
                  Freshly Baked Daily
                </p>
                <p className="font-display font-bold leading-tight text-lg" style={{ color: "#3B2010" }}>
                  Roti Segar,<br />Setiap Hari
                </p>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "#7B4F2E" }}>
                  Dibuat dari bahan pilihan terbaik,<br />tanpa pengawet.
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="text-xs px-3 py-1.5 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>
                    Lihat Menu
                  </button>
                  <button className="text-xs px-3 py-1.5 rounded-full font-semibold border" style={{ borderColor: "#C4873E", color: "#C4873E" }}>
                    Hubungi Kami
                  </button>
                </div>
              </div>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0" style={{ backgroundColor: "#F5DFC5" }}>
                🍞
              </div>
            </div>
          </div>
        ),
      },
      {
        area: "Komponen Product Card",
        thinking:
          "Card produk perlu menyampaikan 3 hal cepat: gambar yang appetizing, harga yang jelas, dan aksi yang mudah. Di Elementor, card harus bisa diduplikasi tim Marketing tanpa developer.",
        exploration:
          "Iterasi (A) List view — tidak visual enough untuk makanan. (B) Grid card dengan image besar — terlalu berat untuk mobile. (C) Compact card dengan image square + badge + price + CTA single button — optimal untuk grid 3-kolom dan mobile 1-kolom.",
        decision:
          "Compact card: 1:1 image ratio, badge overlay (Best Seller/New/Promo), product name, deskripsi singkat 1 baris, harga bold, tombol '+ Pesan' di kanan. Modular di Elementor.",
        visual: (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              { emoji: "🍞", name: "Roti Gandum", price: "Rp 35.000", badge: "BEST SELLER", badgeColor: "#C4873E" },
              { emoji: "🥐", name: "Croissant", price: "Rp 28.000", badge: "NEW", badgeColor: "#4CAF7D" },
              { emoji: "🎂", name: "Lava Cake", price: "Rp 42.000", badge: "PROMO", badgeColor: "#F5A623" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="h-16 flex items-center justify-center relative text-3xl" style={{ backgroundColor: "#FDF6EC" }}>
                  {item.emoji}
                  <span className="absolute top-1.5 left-1.5 text-[8px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: item.badgeColor }}>
                    {item.badge}
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="font-display font-semibold text-xs text-foreground">{item.name}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <p className="text-xs font-bold" style={{ color: "#C4873E" }}>{item.price}</p>
                    <button className="text-[9px] px-1.5 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>
                      + Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ),
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

// ─── Before & After ──────────────────────────────────────────────────────────

const BeforeAfterSlider = ({
  beforeContent,
  afterContent,
}: {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updateSlider(e.clientX);
    },
    [updateSlider]
  );
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging.current) updateSlider(e.touches[0].clientX);
    },
    [updateSlider]
  );
  const stop = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden border border-border cursor-col-resize select-none"
      style={{ userSelect: "none" }}
      onMouseMove={onMouseMove}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchMove={onTouchMove}
      onTouchEnd={stop}
    >
      {/* AFTER layer — full width */}
      <div className="w-full">{afterContent}</div>

      {/* BEFORE layer — clipped from left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        {beforeContent}
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute inset-y-0 z-20 flex items-center justify-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-white/80 shadow-lg" />
        <div
          className="absolute w-9 h-9 rounded-full bg-white border-2 border-border shadow-xl flex items-center justify-center gap-0.5 cursor-col-resize"
          onMouseDown={(e) => { e.preventDefault(); isDragging.current = true; }}
          onTouchStart={(e) => { e.preventDefault(); isDragging.current = true; }}
        >
          <span className="text-foreground/70 text-[10px] font-bold select-none">◀▶</span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-black/60 text-white tracking-wide uppercase">
          Sebelum
        </span>
      </div>
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="text-[10px] font-bold px-2 py-1 rounded-full text-white tracking-wide uppercase" style={{ backgroundColor: "#C4873E" }}>
          Sesudah
        </span>
      </div>
    </div>
  );
};

// Individual comparison cards (static, side-by-side)
const ComparisonCards = () => (
  <div className="space-y-5 mt-4">
    {[
      {
        area: "Navigation",
        icon: "🧭",
        before: {
          label: "8+ item menu, tanpa hierarki",
          preview: (
            <div className="px-3 py-2 rounded-lg" style={{ backgroundColor: "#f2f2f2" }}>
              <div className="flex flex-wrap gap-1.5">
                {["Beranda", "Produk", "Roti", "Kue", "Pastri", "Snack", "Paket", "Promo", "Blog", "Kontak", "Tentang"].map((i) => (
                  <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-600">{i}</span>
                ))}
              </div>
              <p className="text-[9px] text-red-400 mt-1.5 font-medium">↑ 11 items, user bingung harus mulai dari mana</p>
            </div>
          ),
        },
        after: {
          label: "5 item rapi + dropdown pintar",
          preview: (
            <div className="px-3 py-2 rounded-lg" style={{ backgroundColor: "#3B2010" }}>
              <div className="flex items-center gap-3">
                {["Beranda", "Produk ▾", "Promo", "Blog", "Tentang"].map((i, idx) => (
                  <span key={i} className="text-[9px] font-medium" style={{ color: idx === 0 ? "#F5DFC5" : "rgba(255,255,255,0.6)" }}>{i}</span>
                ))}
              </div>
              <p className="text-[9px] mt-1.5 font-medium" style={{ color: "#C4873E" }}>↓ 5 items, sticky, sub-kategori tersembunyi rapi</p>
            </div>
          ),
        },
      },
      {
        area: "Hero Section",
        icon: "🏠",
        before: {
          label: "Value prop tidak jelas, CTA tersembunyi",
          preview: (
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-200 h-16 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">[gambar produk tidak fokus, teks tertumpuk]</span>
              </div>
              <div className="px-3 py-2 bg-gray-50">
                <div className="text-xs font-bold text-gray-700 mb-1">Selamat Datang di Dea Bakery</div>
                <div className="text-[10px] text-gray-500 leading-relaxed">Kami menyediakan berbagai macam roti dan kue untuk kebutuhan Anda sehari-hari...</div>
                <div className="flex gap-1 mt-2">
                  <span className="text-[9px] px-2 py-0.5 bg-gray-300 text-gray-600 rounded">Klik di sini</span>
                </div>
                <p className="text-[9px] text-red-400 mt-1.5 font-medium">↑ Tidak ada hierarchy, CTA tenggelam</p>
              </div>
            </div>
          ),
        },
        after: {
          label: "Split layout, tagline jelas, dua CTA",
          preview: (
            <div className="rounded-lg overflow-hidden border border-border" style={{ backgroundColor: "#FDF6EC" }}>
              <div className="p-3 flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-[8px] font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#C4873E" }}>Freshly Baked Daily</p>
                  <p className="font-bold leading-tight text-sm" style={{ color: "#3B2010" }}>Roti Segar,<br />Setiap Hari</p>
                  <div className="flex gap-1.5 mt-2">
                    <button className="text-[9px] px-2 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>Lihat Menu</button>
                    <button className="text-[9px] px-2 py-1 rounded-full font-semibold border" style={{ borderColor: "#C4873E", color: "#C4873E" }}>Hubungi</button>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: "#F5DFC5" }}>🍞</div>
              </div>
              <p className="text-[9px] font-medium px-3 pb-2" style={{ color: "#4CAF7D" }}>↑ Value prop jelas dalam 3 detik, 2 CTA terlihat</p>
            </div>
          ),
        },
      },
      {
        area: "Product Cards",
        icon: "🛒",
        before: {
          label: "List view, tanpa gambar, harga tersembunyi",
          preview: (
            <div className="space-y-1.5">
              {["Roti Gandum", "Croissant", "Lava Cake"].map((name) => (
                <div key={name} className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 rounded text-[10px]">
                  <span className="text-gray-700">{name}</span>
                  <span className="text-gray-400 text-[9px]">lihat detail →</span>
                </div>
              ))}
              <p className="text-[9px] text-red-400 font-medium">↑ Tidak ada gambar, harga tidak terlihat, tidak appetizing</p>
            </div>
          ),
        },
        after: {
          label: "Grid card dengan badge, harga & order cepat",
          preview: (
            <div className="space-y-1.5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { emoji: "🍞", name: "Roti Gandum", price: "Rp 35k", badge: "BEST", bc: "#C4873E" },
                  { emoji: "🥐", name: "Croissant", price: "Rp 28k", badge: "NEW", bc: "#4CAF7D" },
                  { emoji: "🎂", name: "Lava Cake", price: "Rp 42k", badge: "PROMO", bc: "#F5A623" },
                ].map((item) => (
                  <div key={item.name} className="rounded-lg border border-border overflow-hidden bg-card">
                    <div className="h-10 flex items-center justify-center relative text-2xl" style={{ backgroundColor: "#FDF6EC" }}>
                      {item.emoji}
                      <span className="absolute top-0.5 left-0.5 text-[7px] font-bold px-1 py-0.5 rounded-full text-white" style={{ backgroundColor: item.bc }}>{item.badge}</span>
                    </div>
                    <div className="p-1.5">
                      <p className="font-semibold text-[9px] text-foreground">{item.name}</p>
                      <div className="flex items-center justify-between mt-0.5">
                        <p className="text-[8px] font-bold" style={{ color: "#C4873E" }}>{item.price}</p>
                        <button className="text-[7px] px-1 py-0.5 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[9px] font-medium" style={{ color: "#4CAF7D" }}>↑ Visual, price jelas, aksi mudah — optimal untuk grid</p>
            </div>
          ),
        },
      },
      {
        area: "Typography & Color",
        icon: "🎨",
        before: {
          label: "Font tidak konsisten, warna generik",
          preview: (
            <div className="p-3 rounded-lg bg-white border border-gray-200 space-y-1">
              <div className="font-bold text-sm" style={{ fontFamily: "Arial", color: "#333" }}>JUDUL HALAMAN</div>
              <div className="text-[10px]" style={{ color: "#666" }}>Teks body menggunakan default font browser tanpa line-height yang diatur</div>
              <div className="flex gap-1.5 mt-1">
                {["#FF0000", "#0000FF", "#00AA00", "#FFA500"].map((c) => (
                  <div key={c} className="w-5 h-5 rounded border border-gray-200" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-[9px] text-red-400 font-medium">↑ 4 warna tidak selaras, typography tidak konsisten</p>
            </div>
          ),
        },
        after: {
          label: "Palette bakery warm + type scale konsisten",
          preview: (
            <div className="p-3 rounded-lg border border-border space-y-1" style={{ backgroundColor: "#FDF6EC" }}>
              <div className="font-bold text-sm" style={{ color: "#3B2010" }}>Roti Segar, Setiap Hari</div>
              <div className="text-[10px] leading-relaxed" style={{ color: "#7B4F2E" }}>Dibuat dari bahan pilihan terbaik, tanpa pengawet, setiap hari.</div>
              <div className="flex gap-1.5 mt-1">
                {["#FDF6EC", "#F5DFC5", "#C4873E", "#7B4F2E", "#3B2010"].map((c) => (
                  <div key={c} className="w-5 h-5 rounded border border-border" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-[9px] font-medium" style={{ color: "#4CAF7D" }}>↑ Warm palette selaras, hierarchy jelas, brand cohesive</p>
            </div>
          ),
        },
      },
    ].map((item) => (
      <div key={item.area} className="rounded-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-secondary px-5 py-3 flex items-center gap-2">
          <span className="text-base">{item.icon}</span>
          <p className="text-sm font-display font-bold text-foreground">{item.area}</p>
        </div>
        {/* Side-by-side */}
        <div className="grid grid-cols-2 divide-x divide-border">
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400/80 shrink-0" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sebelum</p>
            </div>
            <p className="text-[10px] text-muted-foreground italic mb-2">{item.before.label}</p>
            {item.before.preview}
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#C4873E" }} />
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#C4873E" }}>Sesudah</p>
            </div>
            <p className="text-[10px] text-muted-foreground italic mb-2">{item.after.label}</p>
            {item.after.preview}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Main Before & After Section
const BeforeAfterSection = () => {
  // Hero-level slider mockups
  const beforeHero = (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "220px" }} className="flex flex-col">
      {/* Old navbar */}
      <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #ddd" }}>
        <span className="font-bold text-sm text-gray-700">Dea Bakery</span>
        <div className="flex gap-2 flex-wrap">
          {["Beranda", "Produk", "Roti", "Kue", "Pastri", "Blog", "Kontak"].map((i) => (
            <span key={i} className="text-[9px] text-gray-500">{i}</span>
          ))}
        </div>
      </div>
      {/* Old hero */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-2">
        <div className="text-gray-400 text-xs text-center">[Banner gambar generik]</div>
        <div className="text-base font-bold text-gray-700 text-center">Selamat Datang di Dea Bakery</div>
        <div className="text-[10px] text-gray-500 text-center max-w-xs">Kami menyediakan berbagai macam roti dan kue untuk kebutuhan Anda sehari-hari dengan kualitas terbaik...</div>
        <button className="text-[10px] mt-2 px-3 py-1 bg-gray-300 text-gray-600 rounded">Klik di sini</button>
      </div>
      {/* Old product list */}
      <div className="px-4 py-3 space-y-1.5">
        <div className="text-[10px] font-bold text-gray-600 mb-1">Produk Kami</div>
        {["Roti Gandum — lihat detail", "Croissant — lihat detail", "Lava Cake — lihat detail"].map((p) => (
          <div key={p} className="text-[9px] text-gray-500 flex justify-between px-2 py-1.5 bg-white border border-gray-200 rounded">
            <span>{p.split(" — ")[0]}</span>
            <span className="text-gray-400">lihat detail →</span>
          </div>
        ))}
      </div>
    </div>
  );

  const afterHero = (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "220px" }} className="flex flex-col">
      {/* New navbar */}
      <div className="px-4 py-2.5 flex items-center justify-between" style={{ backgroundColor: "#3B2010" }}>
        <span className="font-bold text-sm" style={{ color: "#F5DFC5" }}>Dea Bakery</span>
        <div className="flex items-center gap-3">
          {["Beranda", "Produk ▾", "Promo", "Blog", "Tentang"].map((i, idx) => (
            <span key={i} className="text-[9px]" style={{ color: idx === 0 ? "#F5DFC5" : "rgba(255,255,255,0.6)" }}>{i}</span>
          ))}
        </div>
        <button className="text-[9px] px-2.5 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>Pesan</button>
      </div>
      {/* New hero */}
      <div className="flex items-center gap-4 px-6 py-5">
        <div className="flex-1">
          <p className="text-[9px] font-semibold tracking-widest uppercase mb-1" style={{ color: "#C4873E" }}>Freshly Baked Daily</p>
          <p className="font-bold text-lg leading-tight" style={{ color: "#3B2010" }}>Roti Segar,<br />Setiap Hari</p>
          <p className="text-[10px] mt-1 leading-relaxed" style={{ color: "#7B4F2E" }}>Dibuat dari bahan pilihan terbaik, tanpa pengawet.</p>
          <div className="flex gap-2 mt-3">
            <button className="text-[9px] px-3 py-1.5 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>Lihat Menu</button>
            <button className="text-[9px] px-3 py-1.5 rounded-full font-semibold border" style={{ borderColor: "#C4873E", color: "#C4873E" }}>Hubungi</button>
          </div>
        </div>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0" style={{ backgroundColor: "#F5DFC5" }}>🍞</div>
      </div>
      {/* New product grid */}
      <div className="px-4 pb-4">
        <p className="text-[9px] font-semibold tracking-widest uppercase mb-2" style={{ color: "#7B4F2E" }}>Produk Unggulan</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { emoji: "🍞", name: "Roti Gandum", price: "35k", badge: "BEST", bc: "#C4873E" },
            { emoji: "🥐", name: "Croissant", price: "28k", badge: "NEW", bc: "#4CAF7D" },
            { emoji: "🎂", name: "Lava Cake", price: "42k", badge: "PROMO", bc: "#F5A623" },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-border overflow-hidden bg-white">
              <div className="h-12 flex items-center justify-center relative text-2xl" style={{ backgroundColor: "#FDF6EC" }}>
                {item.emoji}
                <span className="absolute top-1 left-1 text-[7px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: item.bc }}>{item.badge}</span>
              </div>
              <div className="p-2">
                <p className="font-semibold text-[9px]" style={{ color: "#3B2010" }}>{item.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[9px] font-bold" style={{ color: "#C4873E" }}>Rp {item.price}</p>
                  <button className="text-[8px] px-1.5 py-0.5 rounded-full font-semibold text-white" style={{ backgroundColor: "#C4873E" }}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Intro text */}
      <div className="bg-secondary rounded-xl p-5 border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Drag slider di bawah untuk melihat perbandingan langsung antara tampilan website lama dan hasil redesign.
          Perubahan paling signifikan terjadi pada <strong className="text-foreground">navigasi, hero section, product cards</strong>, dan <strong className="text-foreground">sistem warna</strong>.
        </p>
      </div>

      {/* Interactive slider */}
      <div>
        <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Perbandingan Visual — Geser untuk Membandingkan</p>
        <BeforeAfterSlider beforeContent={beforeHero} afterContent={afterHero} />
      </div>

      {/* Per-area comparison cards */}
      <div>
        <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Rincian per Area</p>
        <ComparisonCards />
      </div>
    </div>
  );
};

// ─── Final Deliverables ───────────────────────────────────────────────────────

const FinalDeliverables = () => (
  <div className="space-y-6">
    {/* Style Guide */}
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Deliverable 1 — Style Guide
      </p>
      <div className="bg-card rounded-xl border border-border p-5 space-y-5">
        {/* Color tokens */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Color Tokens</p>
          <div className="flex flex-wrap gap-2">
            {[
              { hex: "#FDF6EC", label: "bg-cream" },
              { hex: "#F5DFC5", label: "bg-blush" },
              { hex: "#C4873E", label: "primary" },
              { hex: "#7B4F2E", label: "accent" },
              { hex: "#3B2010", label: "text-primary" },
              { hex: "#9E9E9E", label: "text-secondary" },
              { hex: "#4CAF7D", label: "success" },
              { hex: "#F5A623", label: "warning" },
              { hex: "#E25C5C", label: "error" },
            ].map((c) => (
              <div key={c.hex} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border bg-background">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: c.hex }} />
                <span className="font-mono text-[10px] text-muted-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Type scale */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Type Scale</p>
          <div className="space-y-1">
            {[
              { label: "H1 — 48px Bold", sample: "Roti Segar, Setiap Hari", size: "text-3xl" },
              { label: "H2 — 32px SemiBold", sample: "Produk Unggulan", size: "text-2xl" },
              { label: "H3 — 20px SemiBold", sample: "Roti Gandum Premium", size: "text-lg" },
              { label: "Body — 16px Regular", sample: "Dibuat dari bahan pilihan terbaik.", size: "text-base" },
              { label: "Label — 12px Medium", sample: "BEST SELLER · PROMO", size: "text-xs" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-4">
                <span className="text-[10px] text-muted-foreground/60 font-mono w-36 shrink-0">{row.label}</span>
                <span className={`${row.size} font-semibold text-foreground leading-tight`}>{row.sample}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Spacing */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Spacing (8px base)</p>
          <div className="flex items-end gap-2">
            {[4, 8, 12, 16, 24, 32, 48].map((px) => (
              <div key={px} className="flex flex-col items-center gap-1">
                <div className="bg-accent/30 border border-accent/20 rounded-sm" style={{ width: `${Math.max(px / 2, 4)}px`, height: `${Math.max(px / 2, 4)}px` }} />
                <span className="text-[9px] font-mono text-muted-foreground">{px}</span>
              </div>
            ))}
          </div>
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
            sections: ["Hero (tagline + CTA)", "Promo Banner", "Produk Unggulan", "Tentang Kami snippet", "Footer CTA"],
            status: "Dirilis",
          },
          {
            page: "Halaman Produk",
            sections: ["Filter kategori (Roti, Kue, Pastri)", "Product grid 3-kolom", "Product detail with description"],
            status: "Dirilis",
          },
          {
            page: "Halaman Promo",
            sections: ["Active promo banner", "Syarat & ketentuan inline", "Countdown timer (Elementor widget)"],
            status: "Dirilis",
          },
          {
            page: "Blog",
            sections: ["Article card grid", "Category filter", "Featured post hero"],
            status: "Dirilis",
          },
          {
            page: "Tentang Kami",
            sections: ["Brand story section", "Tim & values", "Gallery produk"],
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
              desc: "Simulasi navigasi dari Homepage → Produk → Promo → Blog",
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

        {/* 04 — Problem Statement */}
        <SectionBlock label="04 — Pernyataan Masalah" index={3}>
          <p>
            Audit desain existing mengungkap empat masalah utama yang saling memperburuk satu sama lain.
            Bukan sekadar "website lama kurang bagus" — tapi masalah struktural yang punya dampak nyata
            ke user experience dan operasional bisnis.
          </p>
          <ProblemCards />
          <div className="bg-secondary rounded-xl p-5 border border-border mt-4">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              How Might We...
            </p>
            <p className="text-base font-display font-semibold text-foreground leading-snug">
              "Bagaimana kita bisa membuat website yang secara visual mencerminkan brand Dea Bakery
              secara konsisten, memungkinkan user menemukan informasi dalam 2 klik, dan bisa
              di-maintain secara mandiri oleh tim non-teknis — semua dalam constraints Elementor?"
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

        {/* 07 — Before & After */}
        <SectionBlock label="07 — Sebelum & Sesudah" index={6}>
          <p>
            Perbandingan nyata antara kondisi website sebelum dan sesudah redesign —
            dari visual, navigasi, hingga cara produk ditampilkan kepada user.
          </p>
          <BeforeAfterSection />
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
