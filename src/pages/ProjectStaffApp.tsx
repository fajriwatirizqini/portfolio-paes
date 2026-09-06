import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import staffAppMockup from "@/assets/project-staff-app-mockup.webp";

const ProjectStaffApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 02"
          title="Menghadirkan Personal App HR untuk Karyawan Dea Bakery"
          subtitle="Aplikasi mobile dari perusahaan yang menaruh slip gaji, presensi, dan benefit setiap karyawan langsung di tangan mereka — mengurangi beban kerja repetitif HR sekaligus memberi staf akses langsung dan on-demand ke data kerja pribadi mereka."
          tags={["Employee Self-Service", "Mobile App", "HR & People Ops", "Internal Tool", "Access Design"]}
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "Berjalan" },
            { label: "Tim", value: "1 Designer, 1 PM, 2 Developer, 2 Stakeholder" },
            { label: "Peran", value: "UI/UX Designer" },
            { label: "Platform", value: "iOS & Android" },
          ]}
        />

        {/* 01 — Context */}
        <SectionBlock label="01 — Konteks" index={0}>
          <p>
            Seiring Dea Bakery berkembang dari bakery walk-in menjadi operasi berbasis tim, mengelola
            data karyawan lewat spreadsheet dan WhatsApp menjadi tidak berkelanjutan.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proyek ini adalah aplikasi mobile dari perusahaan yang dibangun khusus untuk karyawan —
              alat personal untuk mengakses data kerja mereka sendiri, di HP mereka sendiri, tanpa
              perlu menghubungi HR.
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Problem */}
        <SectionBlock label="02 — Masalah" index={1}>
          <p className="text-sm text-muted-foreground mb-4">
            Staf tidak punya tempat terpusat untuk informasi kerja pribadi. Tiga titik friksi yang berulang:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📄",
                label: "Akses Slip Gaji",
                desc: "Dikirim lewat email per periode — tidak ada akses on-demand; bulan-bulan sebelumnya butuh pencarian inbox atau kirim ulang dari HR",
              },
              {
                icon: "📋",
                label: "Presensi & Cuti",
                desc: "Dicatat lewat logbook fisik — sulit diverifikasi atau disanggah secara mandiri",
              },
              {
                icon: "💬",
                label: "Pengajuan Benefit",
                desc: "Diajukan lewat WhatsApp atau lisan — menyebabkan permintaan hilang dan tidak ada visibilitas status",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-card rounded-xl p-4 border border-border">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* 03 — Scope */}
        <SectionBlock label="03 — Scope & Batasan" index={2}>
          <p className="text-sm text-muted-foreground mb-4">
            Tersedia di app store publik, tapi secara fungsional khusus karyawan —
            login OTP lewat nomor HP terdaftar bertindak sebagai gerbang akses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phase 1 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                Fase 1 — Dirilis
              </p>
              <ul className="space-y-2">
                {[
                  "Slip Gaji Digital",
                  "Riwayat presensi & check-in",
                  "Pengajuan benefit & cuti",
                  "Info THR",
                  "Login OTP — tanpa password",
                  "Alur verifikasi ulang perangkat",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Phase 2 */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Fase 2 — Ditunda
              </p>
              <ul className="space-y-2">
                {[
                  { item: "Perhitungan payroll otomatis", note: "Data slip gaji diinput manual oleh HR" },
                  { item: "Chat langsung dengan HR", note: "" },
                  { item: "Performance review", note: "" },
                ].map(({ item, note }) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-muted-foreground font-bold mt-0.5">→</span>
                    <span>
                      {item}
                      {note && <span className="block text-xs text-muted-foreground/60 mt-0.5">{note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionBlock>

        {/* 04 — Design Approach */}
        <SectionBlock label="04 — Pendekatan Desain" index={3}>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Autentikasi Berfriksi Rendah",
                desc: "OTP lewat nomor HP terdaftar — tanpa password, tanpa kredensial yang dikelola HR.",
              },
              {
                num: "02",
                title: "Kejelasan Informasi di Atas Kelengkapan Fitur",
                desc: "Dashboard memunculkan slip gaji, presensi, dan benefit lebih dulu — karyawan menemukan yang mereka butuhkan dalam satu tap.",
              },
              {
                num: "03",
                title: "Keamanan lewat Verifikasi Perangkat",
                desc: "Akses dari HP baru membutuhkan verifikasi ulang OTP — melindungi data payroll sensitif tanpa kompleksitas berlebih.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 bg-card rounded-xl p-4 border border-border">
                <span className="font-display font-bold text-2xl text-accent/30 leading-none mt-0.5 w-8 shrink-0">
                  {item.num}
                </span>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        <ProjectImage
          src={staffAppMockup}
          alt="Personal App Karyawan Dea Bakery — layar login, dashboard, dan verifikasi perangkat"
          caption="Login OTP lewat nomor HP terdaftar · Home dashboard (slip gaji, presensi, benefit) · Verifikasi ulang perangkat untuk akses HP baru"
        />

        {/* 05 — Key Features */}
        <SectionBlock label="05 — Fitur Utama" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Slip Gaji Digital", desc: "Rincian gaji bulanan, on-demand, di HP" },
              { title: "Cek Kehadiran", desc: "Riwayat presensi pribadi — verifikasi & tandai ketidaksesuaian" },
              { title: "Pengajuan Benefit", desc: "Klaim & cuti dalam aplikasi dengan status persetujuan yang bisa dilacak" },
              { title: "Info THR", desc: "Detail tunjangan hari raya, self-serve sebelum Lebaran" },
              { title: "OTP Login", desc: "Autentikasi berbasis nomor HP — nol password yang perlu dikelola" },
              { title: "Verifikasi Perangkat", desc: "HP baru memicu pengecekan ulang identitas untuk proteksi data" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl px-4 py-3 border border-border flex items-start gap-3">
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Outcome */}
        <SectionBlock label="Hasil" index={5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { metric: "6", label: "Fitur self-service yang dirilis" },
              { metric: "0", label: "Password yang perlu dikelola" },
              { metric: "↓", label: "Beban kerja manual HR" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 text-center border border-border">
                <p className="text-3xl font-display font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Reflection */}
        <SectionBlock label="Refleksi" index={6}>
          <p className="text-sm text-muted-foreground mb-4">
            Internal tool mudah dianggap kurang prioritas — biaya friksinya tidak terlihat sampai
            menumpuk: waktu HR yang terbuang, karyawan yang frustrasi, dan sinyal diam-diam bahwa
            perusahaan tidak berinvestasi pada orang-orangnya sendiri.
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Merancang untuk pengguna internal adalah disiplin yang berbeda — tidak ada metrik konversi,
              tidak ada kompetitor untuk dibandingkan. Satu-satunya ukuran keberhasilan adalah apakah
              aplikasi ini membuat hari kerja seseorang sedikit lebih ringan. Untuk bakery yang sedang
              tumbuh dan menjalankan HR lewat WhatsApp, standar itu sederhana sekaligus bermakna.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectStaffApp;
