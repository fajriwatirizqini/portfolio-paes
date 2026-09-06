import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

// ─── Inline UX Artifact Components ──────────────────────────────────────────

const CaseVolumeChart = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-3">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      Log Kasus Operasional — Juni 2026 (21 kasus, data lapangan riil)
    </p>
    <div className="space-y-2">
      {[
        { label: "Perbaikan stok", value: 6, pct: 29, flagged: true },
        { label: "Perbaikan poin / member", value: 4, pct: 19, flagged: false },
        { label: "Perbaikan buku besar", value: 3, pct: 14, flagged: false },
        { label: "Perbaikan piutang / buku besar", value: 2, pct: 10, flagged: false },
        { label: "Akses / printer / setting", value: 2, pct: 10, flagged: false },
        { label: "Konversi item", value: 1, pct: 5, flagged: true },
        { label: "OVE vs kebijakan", value: 1, pct: 5, flagged: false },
        { label: "Input item baru", value: 1, pct: 5, flagged: false },
        { label: "Penambahan voucher", value: 1, pct: 5, flagged: false },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="w-40 shrink-0 text-xs text-muted-foreground">{row.label}</div>
          <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full rounded-full ${row.flagged ? "bg-accent" : "bg-muted-foreground/30"}`}
              style={{ width: `${(row.value / 6) * 100}%` }}
            />
          </div>
          <div className="w-16 shrink-0 text-xs font-display font-semibold text-foreground text-right">
            {row.value} ({row.pct}%)
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 pt-2 border-t border-border">
      <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
      <p className="text-xs text-muted-foreground">
        Kasus terkait bahan baku/stok (ditandai) — <span className="text-accent font-medium">7 dari 21 (33%)</span> dari total beban kasus bulanan, target yang ingin ditutup oleh modul ini.
      </p>
    </div>
  </div>
);

const SpecIterationTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="bg-secondary px-4 py-2.5">
      <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
        Riwayat Review Spec — 3 kali rombak total sebelum implementasi
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Versi", "Tanggal", "Apa yang berubah", "Kenapa"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              v: "v1.0",
              date: "21 Mei",
              change: "Draf awal — 9 tabel standalone, model dual-unit per bahan",
              why: "Baseline proposal",
            },
            {
              v: "v2.0",
              date: "22 Mei",
              change: "Refactor total — menumpang infrastruktur produksi yang sudah ada, bukan ledger custom",
              why: "Menghindari duplikasi audit trail yang sudah berfungsi di produksi",
            },
            {
              v: "v3.0",
              date: "29 Mei",
              change: "Sistem satuan per-bahan menggantikan aturan konversi eksplisit",
              why: "Langkah \"konversi\" eksplisit terasa seperti tugas admin tambahan yang tidak natural bagi outlet",
            },
          ].map((row) => (
            <tr key={row.v} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 font-display font-semibold text-accent whitespace-nowrap">{row.v}</td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.date}</td>
              <td className="px-4 py-3 text-foreground">{row.change}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const UnitModelExample = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-4">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      Model satuan per-bahan — contoh: Tepung Terigu
    </p>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            {["Satuan", "Rasio ke satuan dasar", "Is base?", "Default?"].map((h) => (
              <th key={h} className="py-2 pr-4 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { unit: "Gram", ratio: "1", base: "Ya", def: "" },
            { unit: "Kg", ratio: "1.000", base: "", def: "Ya" },
            { unit: "Karung", ratio: "25.000", base: "", def: "" },
          ].map((row) => (
            <tr key={row.unit}>
              <td className="py-2 pr-4 font-display font-medium text-foreground whitespace-nowrap">{row.unit}</td>
              <td className="py-2 pr-4 text-muted-foreground font-mono">{row.ratio}</td>
              <td className="py-2 pr-4 text-accent">{row.base}</td>
              <td className="py-2 pr-4 text-accent">{row.def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
      <p className="text-sm text-muted-foreground">
        Input outlet: <span className="font-mono text-foreground">"2 Karung"</span> → otomatis tersimpan sebagai{" "}
        <span className="font-mono text-accent">50.000 Gram</span>. Outlet tidak pernah menyentuh layar konversi —
        mereka cukup pilih satuan yang mereka pegang secara fisik.
      </p>
    </div>
  </div>
);

const DesignSolutionCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Manajemen Satuan dengan Live Preview Rasio",
        challenge: "Kesalahan rumus konversi (misalnya rasio yang salah hitung) sudah muncul di log kasus Juni — satu typo pada rasio bisa merusak diam-diam setiap transaksi yang dibangun di atasnya.",
        decision: "Layar dua panel: daftar bahan di kiri, tabel satuan bahan terpilih di kanan. Saat menambah satuan baru, sistem menampilkan live preview — \"1 Karung = 50.000 Gram\" — sebelum disimpan.",
        rationale: "Menangkap kesalahan rasio di titik input jelas jauh lebih murah daripada menangkapnya setelah stok sudah bergerak lewat puluhan transaksi.",
      },
      {
        area: "Guardrail Stok Negatif di Titik Kritis",
        challenge: "Desain v2.0 mengizinkan stok negatif di semua alur, yang berarti sistem bisa mencatat sesuatu yang secara fisik tidak mungkin terjadi.",
        decision: "v3.0 memblokir aksi simpan di dua titik yang secara fisik tidak mungkin stoknya negatif — Item Keluar dan Produksi. Jika pengurangan akan membuat bahan manapun negatif, tombol konfirmasi terkunci dan baris bermasalah disorot lengkap dengan detail defisitnya.",
        rationale: "Guardrail yang dipasang sebelum transaksi tersimpan mencegah data buruk; peringatan setelah kejadian hanya mendokumentasikannya.",
      },
      {
        area: "Produksi Multi-Resep dengan Panel Konfirmasi Gabungan",
        challenge: "Outlet menjalankan beberapa resep per shift. Menjalankannya satu per satu berarti tidak ada visibilitas apakah stok bahan cukup untuk rencana produksi sehari penuh.",
        decision: "Outlet bisa mengantrikan beberapa resep sekaligus. Sistem menggabungkan seluruh pengurangan bahan lintas resep ke satu tabel pratinjau — bahan yang sama otomatis dijumlahkan — dengan SISA STOK ditampilkan hijau (aman) atau kuning (menipis) sebelum dikonfirmasi.",
        rationale: "Ini menjawab pertanyaan paling umum yang diajukan outlet di awal shift: \"apakah bahan kita cukup untuk hari ini?\" — langsung dalam satu layar, bukan tersirat di beberapa layar terpisah.",
      },
      {
        area: "Perbaikan Transaksi — Jalur Koreksi Formal dan Bisa Diaudit",
        challenge: "Ini jawaban langsung untuk masalah inti: tidak ada mekanisme koreksi, sehingga entri stok yang salah akan tetap salah selamanya.",
        decision: "Outlet — pihak yang sebenarnya tahu nilai yang benar — melaporkan apa yang tercatat dan apa yang seharusnya. Admin lalu berperan sebagai gatekeeper: Approve (balik + terapkan koreksi), Delete/Void (balik saja), atau Reject (tidak ada perubahan). Setiap keputusan meninggalkan jejak log yang bisa ditelusuri.",
        rationale: "Ini menggantikan pola berulang di log kasus berupa \"diperbaiki manual lalu didiamkan\" dengan jalur formal yang punya pemilik dan jejak audit.",
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
        </div>
      </div>
    ))}
  </div>
);

const ValidationTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Temuan", "Masalah", "Tindakan"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              finding: "Model dual-SKU (v1.0/v2.0)",
              issue: "Menciptakan item duplikat untuk setiap bahan yang dipakai dalam beberapa satuan; outlet harus \"mengonversi\" secara eksplisit sebelum mencatat pemakaian",
              action: "Diganti sistem satuan per-item (v3.0) — satu kode, banyak satuan, konversi otomatis",
            },
            {
              finding: "Langkah konversi eksplisit terasa seperti tugas admin tambahan",
              issue: "Outlet harus memahami \"membuka karung\" sebagai transaksi terpisah dari \"memakai bahan\" — dua langkah untuk satu maksud",
              action: "Layar Konversi dihapus total; setiap layar transaksi kini langsung menerima input dalam satuan apa pun yang didefinisikan",
            },
            {
              finding: "⚠️ Frontend berjalan mendahului desain (ditemukan Juli 2026, dicatat sebagai risiko oleh PM)",
              issue: "20+ route sudah dibangun dan dirilis, sementara desain baru menyelesaikan 3 dari 8 story — 5 layar tersisa berisiko dibangun tanpa acuan final, berujung rework di frontend maupun backend",
              action: "Dikunci sebagai keputusan sadar di rapat bulanan: menyelesaikan 5 story tersisa di Agustus sebelum layar-layar itu di-hardening lebih jauh",
            },
          ].map((row) => (
            <tr key={row.finding} className="hover:bg-card/60 transition-colors align-top">
              <td className="px-4 py-3 font-display font-medium text-foreground max-w-[180px]">{row.finding}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.issue}</td>
              <td className="px-4 py-3 text-accent">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ScreensTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Layar", "Untuk", "UI Pattern"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { screen: "Manajemen Satuan", who: "Admin", pattern: "Panel ganda + live preview rasio (\"1 Karung = 50.000 Gram\")" },
            { screen: "Item Masuk", who: "Outlet", pattern: "Form batch multi-baris, unit chips per bahan" },
            { screen: "Item Keluar", who: "Outlet", pattern: "Form batch + guardrail stok negatif, baris bermasalah disorot merah" },
            { screen: "Manajemen Resep", who: "Admin", pattern: "Deskriptor output (\"1 Loyang\") + baris bahan yang unit-aware" },
            { screen: "Produksi", who: "Outlet", pattern: "Antrean multi-resep + panel konfirmasi gabungan, sisa stok berwarna" },
          ].map((row) => (
            <tr key={row.screen} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap">{row.screen}</td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.who}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.pattern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ImpactGrid = () => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Progres Desain & Build (per Agustus 2026)</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "3 / 8", label: "Story desain selesai (34 dari 65 SP) — 5 tersisa, ditargetkan Agustus" },
          { metric: "20+", label: "Route frontend sudah dibangun & tersambung API v6, dirilis di v3.4.35" },
          { metric: "9 / 40+", label: "Controller / endpoint backend baru (~4.600 baris kode) dari spec desain" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-accent mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Target Dampak Operasional</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "~33%", label: "Dari beban kasus operasional bulanan (7 dari 21) yang disasar modul ini" },
          { metric: "103 SP", label: "Rencana rollout penuh — 13 fase / 57 task, 8–12 minggu pasca-fondasi" },
          { metric: "1 gerbang", label: "End-to-end smoke test wajib + patch dua-baris pada view sebelum go-live" },
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

const ProjectBahanBaku = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 04"
          title="Membenahi Sistem Pencatatan Bahan Baku untuk Menghilangkan Stok yang Salah Selamanya"
          subtitle="Merancang modul Bahan Baku (Ingredient Management) untuk Chocoa POS — sistem back-office Dea Bakery — dari halaman placeholder kosong menjadi sistem pencatatan stok factory-to-outlet yang terauditasi penuh. Desain dirombak dua kali dalam kurang dari dua minggu sebelum satu baris kode pun ditulis."
          tags={["Product Design", "Asst. Project Manager", "Data Model UX", "Internal Tool", "Ongoing Project"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "Mei 2026 — berjalan (target Sep 2026)" },
            { label: "Tim", value: "PM/FE, Backend, Integration, Mobile, Ops Reviewer" },
            { label: "Peran", value: "Product Designer & Asst. PM" },
            { label: "Produk", value: "Chocoa POS — Modul Bahan Baku" },
          ]}
        />

        <SectionBlock label="01 — Konteks Bisnis" index={0}>
          <p>
            Chocoa mengoperasikan pabrik pusat dan jaringan outlet yang mengonsumsi puluhan bahan baku — tepung,
            gula, coklat bubuk, dan lainnya — setiap hari. Chocoa POS sudah matang di sisi penjualan: kartu stok
            produk, buku besar, dan laporan semuanya berfungsi baik. Tapi <strong>tidak ada modul setara untuk
            bahan baku</strong>. Menu navigasinya sudah ada — hanya saja membuka halaman placeholder kosong.
          </p>
          <p>
            Saya memegang modul ini end-to-end sebagai Product Designer sekaligus Assistant Project Manager:
            information architecture, data-model UX, alur transaksi, spesifikasi layar, dan validasi lintas-tim
            dengan backend maupun frontend engineering.
          </p>
        </SectionBlock>

        <SectionBlock label="02 — Masalah" index={1}>
          <p>
            Belum ada sistem pencatatan bahan baku sama sekali — level stok diperkirakan manual, restok
            dikoordinasikan lewat WhatsApp, dan kesalahan pencatatan pemakaian tidak punya jalur koreksi formal.
            Data kasus operasional riil dari Juni 2026 membuat biaya dari celah ini jadi konkret:
          </p>
          <CaseVolumeChart />
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-1">How Might We</p>
            <p className="text-sm text-muted-foreground italic">
              "Bagaimana kami bisa memberi outlet cara resmi untuk mencatat, mengoreksi, dan mempertanggungjawabkan
              bahan baku — tanpa membebani mereka dengan langkah kerja tambahan yang tidak natural bagi cara
              mereka bekerja sehari-hari?"
            </p>
          </div>
        </SectionBlock>

        <SectionBlock label="03 — Discovery" index={2}>
          <p>
            Ini adalah internal tooling, bukan produk konsumen, sehingga discovery bertumpu pada tiga sumber,
            bukan wawancara pengguna formal: tinjauan teknis atas skema produksi, log kasus operasional di atas,
            dan — karena tidak ada prototipe interaktif untuk diuji ke outlet sebelum build — tiga putaran review
            spec lintas-fungsi yang masing-masing menghasilkan spec yang dirombak total.
          </p>
          <p>
            Tinjauan skema jadi titik baliknya. Draf pertama (v1.0) mengusulkan sembilan tabel standalone,
            termasuk <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">stock_ledger</code> custom.
            Meninjau skema produksi yang sudah berjalan bersama PM/Frontend owner menunjukkan Chocoa sudah punya
            logging kelas produksi — <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">sy_logs</code>,{" "}
            <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">sy_logs_konversi</code>, dan{" "}
            <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">pos_stok_outlet</code> — dengan reporting
            view yang sudah teruji di produksi. Membangun ledger paralel akan menduplikasi infrastruktur yang
            sudah berfungsi baik dan membuat setiap laporan yang mengandalkan view itu buta terhadap data bahan baku.
          </p>
          <SpecIterationTable />
        </SectionBlock>

        <SectionBlock label="04 — Ideation & Model Satuan" index={3}>
          <p>
            Pertanyaan terbuka terbesar bukan soal ledger — tapi bagaimana outlet mencatat bahan yang datang
            dalam satu satuan (karung) tapi dipakai dalam satuan lain (gram). Dua pendekatan dieksplorasi:
          </p>
          <div className="space-y-3 mt-2">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-sm text-foreground mb-1">Dieksplorasi — Model Dual-SKU (v1.0/v2.0, ditinggalkan)</p>
              <p className="text-sm text-muted-foreground">
                Setiap varian satuan dari satu bahan jadi item terpisah — "Teh (Box)" dan "Teh (Pouch)" sebagai
                dua kode berbeda, dihubungkan lewat aturan konversi. Valid secara teknis, tapi menggandakan item
                untuk setiap bahan yang dipakai dalam lebih dari satu satuan, dan memaksa outlet melewati langkah
                "konversi" eksplisit sebelum bisa mencatat pemakaian.
              </p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-sm text-foreground mb-1">Dipilih — Sistem satuan per-item dengan rasio implisit (v3.0)</p>
              <p className="text-sm text-muted-foreground">
                Satu bahan = satu kode. Bahan itu sendiri mendefinisikan daftar satuan yang berlaku untuknya,
                masing-masing dengan rasio ke satuan dasarnya. Ini menghilangkan satu langkah manual penuh dari
                setiap alur — Item Masuk, Item Keluar, dan Produksi mengikuti pola yang sama:{" "}
                <em>Pilih Bahan → Pilih Satuan → Masukkan Jumlah.</em>
              </p>
            </div>
          </div>
          <UnitModelExample />
        </SectionBlock>

        <SectionBlock label="05 — Key Design Solutions" index={4}>
          <p>
            Empat keputusan yang paling menentukan — masing-masing bisa ditelusuri langsung ke celah spesifik
            yang muncul saat discovery, bukan sekadar best practice generik yang diterapkan begitu saja.
          </p>
          <DesignSolutionCards />
        </SectionBlock>

        <SectionBlock label="06 — Validasi Lintas-Fungsi" index={5}>
          <p>
            Tanpa prototipe yang bisa diuji ke pengguna, validasi terjadi lewat siklus review spec bersama
            PM/Frontend owner dan tim backend — dan, yang lebih jujur untuk dilaporkan, lewat satu risiko nyata
            yang muncul selama eksekusi paralel.
          </p>
          <ValidationTable />
        </SectionBlock>

        <SectionBlock label="07 — Final UI & Design System" index={6}>
          <p>
            Lima layar inti berbagi satu pola interaksi yang sama —{" "}
            <em>Pilih Bahan → Pilih Satuan → Masukkan Jumlah</em> — sehingga staf hanya perlu belajar satu pola
            untuk semua alur.
          </p>
          <ScreensTable />
          <p>
            Dibangun di atas DaisyUI dengan brand theme kustom{" "}
            <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">dea</code> (26 token warna dipetakan),
            Inter untuk teks UI dan JetBrains Mono untuk angka stok serta kode transaksi agar mudah dipindai.
            Seluruh copy dalam Bahasa Indonesia dengan format tanggal{" "}
            <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">DD MMM YYYY</code>, dan setiap peringatan
            stok menipis/negatif selalu memasangkan ikon dan teks dengan warna — tidak pernah hanya mengandalkan warna.
          </p>
        </SectionBlock>

        <SectionBlock label="08 — Dampak & Status Implementasi" index={7}>
          <p>
            Modul ini <strong>belum live di outlet</strong> — bagian ini melaporkan progres nyata yang sedang
            berjalan, bukan hasil pasca-rilis.
          </p>
          <ImpactGrid />
        </SectionBlock>

        <SectionBlock label="09 — Refleksi" index={8}>
          <p>
            <strong>Jangan bangun infrastruktur paralel kalau yang sudah ada bisa dipakai ulang.</strong> Draf
            pertama menghabiskan effort nyata untuk merancang sembilan tabel custom sebelum satu putaran tinjauan
            skema menunjukkan apa yang sistem sudah punya — satu putaran review menghemat kompleksitas besar dan
            membuat modul baru ini otomatis mewarisi audit trail serta reporting yang sudah dipercaya tim.
          </p>
          <p>
            <strong>"Benar secara teknis" belum tentu "natural dipakai."</strong> Model dual-SKU dengan konversi
            eksplisit (v2.0) valid sebagai data model, tapi memaksa outlet melewati langkah yang tidak
            mencerminkan cara mereka berpikir tentang stok fisik. Pindah ke sistem satuan per-item bukan soal
            menambah fitur — tapi soal menghapus satu langkah penuh dari alur kerja harian mereka.
          </p>
          <p>
            <strong>Desain dan implementasi yang berjalan paralel punya risiko nyata, bukan cuma teoretis.</strong>{" "}
            Frontend yang membangun lebih cepat dari desain menciptakan risiko rework yang harus dikunci lewat
            keputusan tim yang eksplisit, bukan dibiarkan menyelesaikan diri sendiri — pelajaran yang saya bawa
            ke cara menyepakati scope sebelum development paralel dimulai di proyek berikutnya.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectBahanBaku;
