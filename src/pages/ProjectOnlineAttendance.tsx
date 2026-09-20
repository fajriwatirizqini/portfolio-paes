import { Link } from "react-router-dom";
import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import daftarPresensiSemua from "@/assets/Daftar Presensi.png";
import daftarPresensiPerluDiperiksa from "@/assets/Daftar Presensi-1.png";
import detailPresensi from "@/assets/Detail Presensi.png";
import tinjauPerbaikan from "@/assets/Antrean Perbaikan - Tinjau Perbaikan.png";
import pengaturanOutlet from "@/assets/Pengaturan Outlet.png";

// ─── Inline UX Artifact Components ──────────────────────────────────────────

const PersonaGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      { who: "Team Flying", body: "Berpindah outlet setiap minggu — tidak terdaftar tetap di mesin manapun." },
      { who: "Area Manager", body: "Mengunjungi banyak outlet dalam satu hari; presensi berbasis satu mesin tidak masuk akal." },
      { who: "Auditor", body: "Kunjungan mendadak ke outlet manapun — jadwal tidak bisa diprediksi mesin." },
      { who: "Tim Lapangan IT/GS", body: "Bertugas di lokasi yang bahkan bukan outlet (gudang, kantor cadangan)." },
    ].map((p) => (
      <div key={p.who} className="bg-card rounded-xl p-4 border border-border">
        <p className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-1.5">{p.who}</p>
        <p className="text-sm text-muted-foreground">{p.body}</p>
      </div>
    ))}
  </div>
);

const ScaleTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Metrik", "Nilai"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { m: "Outlet aktif", v: "56+" },
            { m: "Karyawan nasional", v: "1.000+" },
            { m: "Event check-in/out per hari", v: "≈ 4.000" },
            { m: "Baris presensi per tahun", v: "≈ 1,5 juta" },
            { m: "Volume selfie per tahun", v: "≈ 85 GB" },
          ].map((row) => (
            <tr key={row.m} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 text-foreground">{row.m}</td>
              <td className="px-4 py-3 font-mono text-accent font-medium whitespace-nowrap">{row.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DataFlowDiagram = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-4">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      Alur data: PA Mobile → database bersama → HRIS
    </p>
    <div className="flex flex-col gap-2">
      {[
        { label: "PA Mobile", note: "Karyawan check-in/out GPS" },
        { label: "POST /api/v2/presensi/confirm", note: "Endpoint konfirmasi presensi" },
        { label: "hrd_presensi_online", note: "Tabel bersama — jantung integrasi PA ↔ HRIS" },
        { label: "GET /api/v3/presensi", note: "HRIS membaca baris yang sama" },
        { label: "HRIS", note: "HR meninjau, koreksi, approve cuti" },
      ].map((item, i, arr) => (
        <div key={item.label} className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold text-xs">{i + 1}</span>
            </div>
            {i < arr.length - 1 && <div className="w-px h-5 bg-border mt-1" />}
          </div>
          <div className="pt-1">
            <p className="font-display font-semibold text-sm text-foreground font-mono">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TableOwnershipTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="bg-secondary px-4 py-2.5">
      <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
        Peta tabel & kepemilikan lintas sistem
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Tabel", "Ditulis oleh", "Dibaca oleh", "Tujuan"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { t: "hrd_presensi_online", w: "PA (insert)", r: "PA, HRIS (koreksi/void)", p: "Rekam presensi final" },
            { t: "hrd_presensi_perbaikan", w: "PA (ajukan)", r: "HRIS (putuskan)", p: "Permintaan koreksi karyawan → keputusan HR" },
            { t: "hrd_cuti", w: "HRIS (approve)", r: "Outlet System (overlay)", p: "Cuti disetujui otomatis mengunci sel jadwal" },
            { t: "hrd_jadwal_shift", w: "Outlet System", r: "HRIS, PA (akan datang)", p: "Rencana shift bulanan per staf" },
            { t: "sy_outlet", w: "HRIS (Pengaturan Outlet)", r: "PA (validasi GPS), semua", p: "HR set geofence; PA pakai real-time" },
            { t: "hrd_presensi_auth", w: "PA (TOFU device) / HRIS", r: "PA, HRIS", p: "Binding perangkat + status staf lapangan" },
          ].map((row) => (
            <tr key={row.t} className="hover:bg-card/60 transition-colors align-top">
              <td className="px-4 py-3 font-mono text-xs text-foreground whitespace-nowrap">{row.t}</td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.w}</td>
              <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.r}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PersonaWalkthroughTable = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Persona", "Yang diuji", "Temuan yang mengubah desain"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { p: "Staf melek teknologi", u: "Kecepatan alur, jumlah tap", f: "Layar segment-aware — satu tombol, bukan menu" },
            { p: "Karyawan baru", u: "Onboarding, istilah", f: "Walkthrough 3–4 layar yang bisa dilewati + tombol \"?\" permanen" },
            { p: "Sopir 50+ tahun", u: "Ukuran target sentuh, kontras, kepanikan saat error", f: "Target ≥48dp, kontras WCAG AA, status strip yang selalu menjelaskan" },
          ].map((row) => (
            <tr key={row.p} className="hover:bg-card/60 transition-colors align-top">
              <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap">{row.p}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.u}</td>
              <td className="px-4 py-3 text-accent">{row.f}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const TwoPhaseFlow = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-3">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      Alur dua fase — memisahkan yang murah dari yang mahal
    </p>
    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
      <span className="px-3 py-1.5 rounded border border-border bg-secondary text-foreground">initiate — validasi GPS/PIN/shift</span>
      <span className="text-muted-foreground">→ &lt;400ms →</span>
      <span className="px-3 py-1.5 rounded border border-accent/30 bg-accent/10 text-accent">buka kamera</span>
      <span className="text-muted-foreground">→</span>
      <span className="px-3 py-1.5 rounded border border-border bg-secondary text-foreground">confirm — unggah selfie</span>
      <span className="text-muted-foreground">→ &lt;1,5 detik</span>
    </div>
    <p className="text-sm text-muted-foreground">
      Kamera hanya terbuka setelah semua validasi murah lolos — karyawan tidak pernah mengambil selfie sia-sia
      karena ternyata PIN salah atau GPS belum masuk radius.
    </p>
  </div>
);

const DesignSolutionCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Layar Single-Action Segment-Aware",
        challenge: "Form check-in satu layar penuh dengan banyak tombol aktif/nonaktif memaksa karyawan membaca ulang seluruh layar setiap kali untuk tahu tombol mana yang berlaku hari ini.",
        decision: "Aplikasi memanggil status hari ini lebih dulu, lalu menampilkan tepat satu tombol aksi yang relevan — Check In saja, Check Out saja, atau \"Selesai hari ini\" tanpa tombol sama sekali (maksimal 2 sesi/hari untuk shift terpisah).",
        rationale: "Disebut eksplisit dalam spesifikasi sebagai satu-satunya keputusan yang paling ramah untuk pengguna awam — dan paling penting untuk dipertahankan di setiap iterasi berikutnya.",
      },
      {
        area: "Status yang Selalu Menjelaskan, Tidak Pernah Diam",
        challenge: "Tombol yang nonaktif tanpa penjelasan membuat karyawan bingung kenapa mereka tidak bisa check-in — terutama saat gagal validasi GPS atau PIN.",
        decision: "Setiap tombol nonaktif disertai alasan hidup dan spesifik: \"Kurang ~14 m lagi — tombol nyala otomatis\", layar berilustrasi + langkah ke Pengaturan saat lokasi ditolak permanen, dan pesan \"Akun kamu sedang terkunci. Hubungi admin atau HR untuk bantuan\" dengan nama kontak asli — bukan pesan generik.",
        rationale: "Status yang menjelaskan mengubah error dari jalan buntu menjadi langkah berikutnya yang jelas.",
      },
      {
        area: "Penandaan Anomali yang Sadar Peran, Bukan Blokir Rata",
        challenge: "Aturan \"tandai semua check-out di luar lokasi\" yang datar akan menghukum staf lapangan karena menjalankan pekerjaan mereka sendiri.",
        decision: "Empat alasan penandaan dengan urutan prioritas — mock_location (tertinggi) → remote_checkout → field_checkout (prioritas rendah) → time_gap. Staf reguler yang check-out di luar lokasi wajib mengisi catatan; staf lapangan (IS_FIELD_STAFF) mendapat catatan opsional dan prioritas rendah.",
        rationale: "Supaya check-out rutin staf lapangan tidak menenggelamkan anomali yang sungguhan perlu ditinjau HR.",
      },
      {
        area: "Perbaikan Presensi — Pola dari Bahan Baku, Dipakai Lintas Sistem",
        challenge: "Waktu check-in yang salah sebelumnya hanya bisa diperbaiki lewat edit database langsung — tidak terlacak, tidak bisa dibalik, dan berisiko untuk data penggajian.",
        decision: "Karyawan mengajukan koreksi (waktu salah, sesi yatim, ganti selfie) dari aplikasi PA; status \"Sedang diperbaiki\" tampil di riwayat mereka; HR memutuskan Approve atau Reject dari HRIS dengan alasan wajib untuk penolakan. Tidak ada batas jumlah pengajuan — jejak audit yang jadi jaminannya, bukan pembatasan akses.",
        rationale: "Mewarisi langsung filosofi Perbaikan Transaksi dari modul Bahan Baku: karyawan yang tahu nilai benar, admin sebagai penjaga gerbang.",
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
            {["Temuan", "Risiko", "Tindakan / iterasi"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              f: "Blokir GPS palsu di sisi klien",
              r: "Memblokir di HP hanya menyembunyikan pelaku dari audit — HR tidak pernah tahu siapa yang mencoba",
              a: "Blokir dihapus; status dikirim apa adanya ke server sebagai FLAG_REASON: mock_location prioritas tertinggi",
            },
            {
              f: "Klasifikasi jenis cuti untuk overlay jadwal",
              r: "Keterlambatan/Catatan Khusus/Alpha yang ikut ter-overlay akan menandai hari kerja sebagai absen — kesalahan yang berdampak ke penggajian",
              a: "Filter eksplisit: hanya cuti disetujui, penuh-hari, dan diketahui di muka yang boleh meng-overlay grid",
            },
            {
              f: "Klaim penghematan biaya lisensi",
              r: "Angka potensi sempat dilaporkan sebelum check-out & konfigurasi produksi selesai — berisiko dianggap komitmen final",
              a: "Disepakati selalu disebut sebagai \"potensi\", bukan proyeksi, sampai seluruh gerbang produksi ditutup",
            },
          ].map((row) => (
            <tr key={row.f} className="hover:bg-card/60 transition-colors align-top">
              <td className="px-4 py-3 font-display font-medium text-foreground max-w-[160px]">{row.f}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.r}</td>
              <td className="px-4 py-3 text-accent">{row.a}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HrisScreensGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { src: daftarPresensiSemua, label: "HRIS-01 · Daftar Presensi — Semua Absensi", desc: "Filter per outlet/tanggal/nama; baris bertemuan sistem ditandai (GPS Dipalsukan, GPS Jauh dari Outlet, Jeda Presensi Lama)" },
      { src: daftarPresensiPerluDiperiksa, label: "HRIS-01 · Tab \"Perlu Diperiksa\"", desc: "Hanya menampilkan rekam yang punya temuan sistem — antrean tinjauan HR" },
      { src: detailPresensi, label: "HRIS-02 · Detail Presensi", desc: "Bukti selfie, jarak & akurasi GPS, rincian per sesi, tindakan Batalkan Absensi / Konfirmasi Data Diperiksa" },
      { src: tinjauPerbaikan, label: "HRIS-03/04 · Tinjau Pengajuan Perbaikan", desc: "Perbandingan data tercatat vs. diminta karyawan, alasan tertulis, Setujui/Tolak" },
      { src: pengaturanOutlet, label: "HRIS-06/07 · Pengaturan Outlet", desc: "Titik koordinat & radius jangkauan absen per outlet — dipakai PA untuk validasi GPS real-time" },
    ].map((screen) => (
      <figure key={screen.label} className="space-y-2">
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <img src={screen.src} alt={`${screen.label} — HRIS Chocoa Online Attendance`} className="w-full h-auto block" loading="lazy" />
        </div>
        <figcaption>
          <p className="font-display font-semibold text-xs text-foreground">{screen.label}</p>
          <p className="text-xs text-muted-foreground">{screen.desc}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);

const ScreensTables = () => (
  <div className="space-y-5">
    {[
      {
        title: "Personal Account — Presensi Online (Proyek 02)",
        rows: [
          { a: "Gerbang sesi + onboarding", b: "Menentukan satu aksi yang tampil; walkthrough 3–4 layar bisa dilewati" },
          { a: "Pilih outlet & proksimitas", b: "Diurutkan jarak terdekat; status strip jarak hidup real-time" },
          { a: "PIN + selfie", b: "Toggle tampilkan/sembunyikan PIN; panduan bingkai wajah + deteksi buram" },
          { a: "Check-out jarak jauh", b: "Khusus check-out di luar radius; catatan wajib/opsional sesuai peran" },
          { a: "Rekap & riwayat", b: "Durasi kerja harian & bulanan, label \"Sedang diperbaiki\"" },
        ],
      },
      {
        title: "HRIS (dashboard web)",
        rows: [
          { a: "HRIS-01", b: "Daftar presensi + tab \"Ditandai\", mock_location diurutkan pertama" },
          { a: "HRIS-02", b: "Detail presensi — selfie, GPS, jarak, riwayat perubahan" },
          { a: "HRIS-03 / 04", b: "Antrean & keputusan Perbaikan Presensi" },
          { a: "HRIS-06 / 07", b: "Pengaturan koordinat outlet & status staf lapangan" },
          { a: "HRIS-08", b: "Jam shift per outlet, dengan hint \"+1 hari\" untuk shift lewat tengah malam" },
        ],
      },
      {
        title: "Outlet System (perencana shift)",
        rows: [
          { a: "Grid jadwal shift", b: "Matriks staf × hari, dropdown kode P/S/C/Skt/I/L per sel" },
          { a: "Overlay cuti", b: "Sel yang tertutup cuti terkunci otomatis + hint \"dari cuti\"" },
          { a: "Papan Pengganti", b: "Shift kosong karena cuti dikelompokkan >7 hari jadi satu baris ringkas" },
        ],
      },
    ].map((table) => (
      <div key={table.title} className="rounded-xl border border-border overflow-hidden text-sm">
        <div className="bg-secondary px-4 py-2.5">
          <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">{table.title}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <tbody className="divide-y divide-border">
              {table.rows.map((row) => (
                <tr key={row.a} className="hover:bg-card/60 transition-colors align-top">
                  <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap w-1/3">{row.a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

const TrackProgress = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-3">
    <div className="flex items-center justify-between">
      <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">Status per Track</p>
      <p className="text-xs font-mono text-muted-foreground">153 SP total</p>
    </div>
    <div className="space-y-2.5">
      {[
        { label: "Part A — PA (Proyek 02)", pct: 100, note: "77 SP · live" },
        { label: "Part B — HRIS", pct: 36, note: "50 SP · sprint 1/3" },
        { label: "Part C — Outlet", pct: 50, note: "26 SP · sprint 1/2" },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="w-32 shrink-0 text-xs font-mono text-muted-foreground">{row.label}</div>
          <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full rounded-full ${row.pct === 100 ? "bg-emerald-500" : "bg-accent"}`}
              style={{ width: `${row.pct}%` }}
            />
          </div>
          <div className="w-28 shrink-0 text-xs font-mono text-foreground text-right">{row.note}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between pt-2 border-t border-border text-xs">
      <span className="text-muted-foreground">Target selesai penuh</span>
      <span className="font-display font-semibold text-accent">22 Sep 2026 (Part B)</span>
    </div>
  </div>
);

// ─── Page Component ──────────────────────────────────────────────────────────

const ProjectOnlineAttendance = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 05"
          title="Menyatukan Presensi GPS Lintas Tiga Sistem agar Bisa Dipercaya sebagai Dasar Penggajian"
          subtitle="Kelanjutan dari fitur Presensi Online yang dirilis di Personal App Staff (Proyek 02) — proyek ini membangun sisi manajemen HR untuk data presensi itu: dashboard peninjauan & koreksi, plus perencana jadwal shift outlet, agar presensi 1.000+ karyawan di 56+ outlet bisa dipercaya sebagai dasar penggajian, bukan cuma tercatat."
          tags={["Product Design", "System Design", "Mobile App", "HR Tech", "Ongoing Project"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "Jul 2026 — berjalan (Part A live 4 Agu)" },
            { label: "Tim", value: "PM, Mobile/Flutter, Backend, Integration" },
            { label: "Peran", value: "Product Designer — 3 sistem" },
            { label: "Produk", value: "Chocoa Online Attendance" },
          ]}
        />

        <SectionBlock label="01 — Konteks Bisnis" index={0}>
          <p>
            Dea Bakery mengoperasikan Chocoa di lebih dari 56 outlet dengan 1.000+ karyawan nasional. Presensi
            selama ini bergantung pada mesin fingerprint (BioFinger) yang terpasang tetap di outlet — sistem yang
            bekerja untuk staf yang setiap hari berada di satu tempat, tapi buntu total untuk kelompok yang justru
            paling sering berpindah:
          </p>
          <PersonaGrid />
          <div className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border mt-2">
            <span className="text-xl mt-0.5 shrink-0">🔗</span>
            <p className="text-sm text-muted-foreground">
              Fitur <strong className="text-foreground">Presensi Online</strong> — check-in/check-out mandiri lewat
              HP — sudah dirilis sebagai bagian dari{" "}
              <Link to="/project/staff-app-dea-bakery" className="text-accent underline underline-offset-2 hover:text-accent/80">
                Personal App Staff (Proyek 02)
              </Link>
              . Yang belum ada saat itu adalah sisi HR-nya: tempat rekam yang mencurigakan ditinjau, waktu yang
              salah dikoreksi secara tertelusur, dan jadwal shift dikelola sebagai satu sumber kebenaran. Proyek
              ini membangun ketiganya.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock label="02 — Masalah" index={1}>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
            <p className="font-display font-semibold text-sm text-foreground mb-1">Masalah yang dituliskan tim sebelum desain dimulai</p>
            <p className="text-sm text-muted-foreground italic">
              "PA v1 menangkap presensi, tapi tak ada yang bisa menindaklanjutinya. Rekam yang ditandai (GPS
              palsu, check-out di luar lokasi) menumpuk tanpa peninjau, dan waktu check-in yang salah hanya bisa
              diperbaiki lewat editan database langsung — tidak terlacak, tidak bisa dibalik, dan berisiko untuk
              data penggajian."
            </p>
          </div>
          <p>Skala yang harus ditangani desainnya:</p>
          <ScaleTable />
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-1">How Might We</p>
            <p className="text-sm text-muted-foreground italic">
              "Bagaimana kami merancang presensi yang bisa dipercaya sebagai dasar penggajian — akurat lokasinya,
              adil untuk staf lapangan yang tidak terikat satu outlet, dan tidak pernah butuh 'perbaiki langsung
              di database' ketika ada yang salah?"
            </p>
          </div>
        </SectionBlock>

        <SectionBlock label="03 — Arsitektur & Integrasi Sistem" index={2}>
          <p>
            Online Attendance bukan aplikasi tunggal — ia adalah satu domain data yang dipakai bersama oleh tiga
            sistem berbeda, semuanya dilayani backend Laravel yang sama dan menulis ke satu database MySQL yang
            sama. Personal Account (PA) — yaitu fitur Presensi Online di Personal App Staff, Proyek 02 — dan HRIS
            tidak saling memanggil API satu sama lain secara langsung; keduanya terhubung lewat tabel yang sama:
            PA menulis kenyataan lapangan, HRIS (dibangun di proyek ini) membaca dan mengoreksinya.
          </p>
          <DataFlowDiagram />
          <TableOwnershipTable />
          <p>
            Karena tiga sistem ini berbagi database yang sama tapi punya model auth berbeda, bagian penting dari
            desain saya adalah memastikan kontrak setiap endpoint mencerminkan siapa boleh menulis apa — PA tidak
            pernah bisa langsung mengubah status approve/void; hanya HRIS yang bisa, dan setiap perubahannya
            lewat HRIS masuk jejak audit yang riwayatnya juga terlihat dari sisi PA (label "Sedang diperbaiki").
          </p>
        </SectionBlock>

        <SectionBlock label="04 — Discovery & Riset" index={3}>
          <p>
            Sebelum saya mulai mendesain, PM menuliskan lebih dulu — Masalah, Kenapa Sekarang, Siapa yang Kena,
            Batas Keras, dan Di Luar Cakupan, dengan aturan eksplisit: "§0 adalah pagar, saya mendesain bebas di
            dalamnya tanpa perlu bertanya." Praktik ini memberi kejelasan batas teknis di depan, sehingga ruang
            eksplorasi desain tidak terbuang untuk opsi yang sudah pasti ditolak.
          </p>
          <p>
            Sama seperti pendekatan saya di modul Bahan Baku, setiap layar diverifikasi dulu terhadap skema
            produksi yang sebenarnya sebelum didesain — menghindarkan desain dari mengasumsikan data yang ternyata
            tidak ada, dan menemukan yang sudah bisa dipakai ulang, termasuk PIN karyawan yang sudah ada untuk
            slip gaji, dipakai ulang untuk presensi alih-alih dibangun baru.
          </p>
          <p>
            Karena tidak ada funnel analytics untuk fitur yang belum ada, validasi riset saya adalah menjalankan
            alur secara manual melalui tiga tipe pengguna nyata:
          </p>
          <PersonaWalkthroughTable />
          <p>
            Alur koreksi POS yang sudah ada — Perbaikan Transaksi — jadi referensi langsung untuk merancang
            Perbaikan Presensi: karyawan yang tahu nilai benar, HR sebagai penjaga gerbang, semua tercatat di
            jejak audit yang tak bisa diedit.
          </p>
        </SectionBlock>

        <SectionBlock label="05 — Ideasi & Eksplorasi Desain" index={4}>
          <div className="space-y-3">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-sm text-foreground mb-1">Dieksplorasi — Form check-in satu layar penuh (ditinggalkan)</p>
              <p className="text-sm text-muted-foreground">
                Menampilkan pilihan outlet, status GPS, tombol check-in, dan check-out sekaligus di satu layar
                dengan tombol yang aktif/nonaktif tergantung kondisi. Secara teknis mungkin, tapi karyawan
                (terutama persona sopir 50+) harus membaca ulang seluruh layar setiap kali untuk tahu tombol mana
                yang berlaku hari ini.
              </p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-sm text-foreground mb-1">Dipilih — Layar single-action segment-aware</p>
              <p className="text-sm text-muted-foreground">
                Aplikasi memanggil status hari ini lebih dulu, lalu menampilkan tepat satu tombol aksi yang
                relevan: Check In saja, Check Out saja, atau "Selesai hari ini" tanpa tombol sama sekali.
              </p>
            </div>
          </div>
          <TwoPhaseFlow />
        </SectionBlock>

        <SectionBlock label="06 — Solusi Desain Kunci" index={5}>
          <p>
            Empat keputusan yang paling menentukan pengalaman presensi — masing-masing menjawab kebutuhan
            spesifik yang muncul dari discovery dan arsitektur sistem, bukan best practice generik.
          </p>
          <DesignSolutionCards />
        </SectionBlock>

        <SectionBlock label="07 — Validasi & Iterasi" index={6}>
          <p>
            Tiga keputusan penting berubah setelah ditinjau ulang — masing-masing menyentuh keadilan,
            keakuratan data, atau kejujuran pelaporan dampak.
          </p>
          <ValidationTable />
          <p>
            Untuk aksesibilitas, definisi selesai berlaku di semua layar: skala font OS dihormati, target sentuh
            ≥48dp, kontras WCAG AA, dan warna tidak pernah jadi satu-satunya sinyal status.
          </p>
        </SectionBlock>

        <SectionBlock label="08 — UI Final & Design System" index={7}>
          <p>
            Tiga sistem, tiga permukaan — didesain hi-fi di Figma dengan penamaan frame yang konsisten dengan ID
            spesifikasi (mis. <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">HRIS-02 Detail Presensi v1.0</code>)
            agar developer bisa langsung memetakan layar ke endpoint API-nya. Berikut lima layar HRIS yang sudah
            live — sisi manajemen yang dibangun di proyek ini untuk mengelola data dari Presensi Online (Proyek 02):
          </p>
          <HrisScreensGallery />
          <p className="mt-2">
            Tabel di bawah melengkapi cakupan layar penuh di ketiga sistem — termasuk Personal Account (Proyek 02)
            dan Outlet System yang masih berjalan di Part C:
          </p>
          <ScreensTables />
        </SectionBlock>

        <SectionBlock label="09 — Dampak & Status Implementasi" index={8}>
          <p>
            Status per 23 Agustus 2026 — bertahap: Part A sudah nyata dipakai karyawan, Part B & C masih dalam
            sprint berjalan.
          </p>
          <TrackProgress />
          <p>
            Karyawan di 56+ outlet kini check-in/out lewat GPS + selfie dari HP masing-masing, termasuk staf yang
            sebelumnya tidak bisa presensi sama sekali. Alur segment-aware, penandaan anomali 4-alasan, dan
            retensi selfie 24 bulan berjalan di produksi. Target keberhasilan Part B yang ditetapkan sebelum
            build: rekam <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">mock_location</code> ditinjau
            dalam 1 hari kerja, dan koreksi presensi membutuhkan nol edit database langsung.
          </p>
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-1">Potensi dampak biaya (dilaporkan sebagai potensi, bukan proyeksi)</p>
            <p className="text-sm text-muted-foreground">
              Bila sistem ini sepenuhnya menggantikan mesin fingerprint BioFinger, estimasi penghematan biaya
              lisensi mencapai <strong className="text-accent">±Rp16.500.000/tahun</strong> untuk seluruh unit —
              angka yang sengaja disebut sebagai potensi hingga seluruh gerbang produksi (Part B & C) selesai,
              bukan komitmen yang sudah dibukukan.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock label="10 — Refleksi" index={9}>
          <p>
            <strong>Pola desain yang sudah terbukti layak dipakai ulang lintas produk.</strong> Perbaikan
            Presensi tidak dirancang dari nol — ia mewarisi langsung filosofi Perbaikan Transaksi dari Bahan
            Baku: pengguna yang tahu nilai benar, admin sebagai penjaga gerbang. Konsistensi mental model ini
            mempercepat desain sekaligus membuatnya lebih mudah dipelajari staf yang memakai kedua sistem.
          </p>
          <p>
            <strong>Keadilan harus dirancang, bukan diasumsikan.</strong> Aturan "tandai semua check-out di luar
            lokasi" yang datar akan menghukum staf lapangan karena menjalankan pekerjaan mereka. Penandaan
            bertingkat berdasarkan peran membuat sistem kepercayaan tetap jujur tanpa jadi punitif ke kelompok
            yang salah.
          </p>
          <p>
            <strong>Menyembunyikan pelaku lebih buruk daripada menandainya.</strong> Memblokir GPS palsu di sisi
            klien terasa seperti fitur keamanan, tapi sebenarnya menyembunyikan pelaku dari audit. Mengirim
            sinyalnya apa adanya ke server dan menandainya adalah pelajaran desain: visibilitas mengalahkan
            pencegahan ketika pencegahan hanya menyembunyikan sinyal.
          </p>
          <p>
            <strong>Sebut "potensi", bukan "proyeksi", sampai gerbangnya benar-benar tertutup.</strong> Klaim
            penghematan Rp16,5 juta/tahun sempat beredar sebelum check-out dan konfigurasi produksi selesai.
            Sejak itu, tim sepakat memisahkan tegas mana yang sudah live dan mana yang masih asumsi — kedisiplinan
            yang saya bawa juga ke pelaporan status di case study ini.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectOnlineAttendance;
