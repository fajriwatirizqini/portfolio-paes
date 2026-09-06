import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const TrackProgress = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-3">
    <div className="flex items-center justify-between">
      <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
        Status per Track
      </p>
      <p className="text-xs font-mono text-muted-foreground">153 SP total</p>
    </div>
    <div className="space-y-2.5">
      {[
        { label: "Part A — Aplikasi Mobile", pct: 100, note: "77 SP · live" },
        { label: "Part B — Dashboard HR", pct: 36, note: "50 SP · sprint 1/3" },
        { label: "Part C — Perencana Outlet", pct: 50, note: "26 SP · sprint 1/2" },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="w-36 shrink-0 text-xs font-mono text-muted-foreground">{row.label}</div>
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
  </div>
);

const ProjectPMOnlineAttendance = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="APM — 04"
          title="Mengoordinasikan Rollout Presensi GPS 3 Track Lintas Sistem Mobile, HR, dan Outlet"
          subtitle="Assistant PM untuk rollout Online Attendance Dea Bakery — menyusun urutan 153 story point lintas tiga sistem yang saling bergantung, menulis batasan cakupan yang membuat tim desain dan engineering bisa bergerak tanpa berdebat ulang soal batasan, serta menegakkan garis tegas antara status live dan berjalan di setiap laporan."
          tags={["Assistant PM", "Cross-team Coordination", "Scope Management", "Sprint Sequencing", "Ongoing Project"]}
          backHref="/?tab=work&role=pm"
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "Jul 2026 – Berjalan (Part A live 4 Agu)" },
            { label: "Tim", value: "PM, Mobile/Flutter, Backend, Integration" },
            { label: "Peran", value: "Assistant Project Manager" },
            { label: "Produk", value: "Chocoa Online Attendance" },
          ]}
        />

        {/* 01 — Konteks */}
        <SectionBlock label="01 — Konteks" index={0}>
          <p>
            1.000+ karyawan Dea Bakery di 56+ outlet bergantung pada mesin fingerprint yang
            terikat lokasi untuk presensi — sistem yang buntu untuk siapa pun yang tidak duduk
            di satu tempat sepanjang hari: tim flying, area manager, auditor, tim lapangan IT/GS.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Peran saya adalah mengoordinasikan rollout lintas tiga sistem yang dibangun oleh
              empat tim — menyusun urutan pekerjaan, menjaga cakupan agar tidak melebar
              di tengah build, dan memastikan setiap status report membedakan dengan jelas mana
              yang sudah live dan mana yang masih dalam sprint.
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Masalah */}
        <SectionBlock label="02 — Masalah" index={1}>
          <p className="text-sm text-muted-foreground mb-4">
            Tiga risiko koordinasi berdiri di antara desain yang baik dan sistem yang bisa dipercaya leadership:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📋",
                label: "Tidak Ada Batasan Cakupan Tertulis",
                desc: "Setiap pertanyaan baru soal radius GPS, aturan cuti, atau pengecualian staf lapangan membuka ulang debat desain yang sama — tidak ada garis yang sudah disepakati soal mana yang sudah diputuskan dan mana yang masih terbuka",
              },
              {
                icon: "🔗",
                label: "Tiga Track, Satu Database Bersama",
                desc: "Aplikasi mobile, dashboard HR, dan perencana outlet semuanya menulis ke tabel yang sama — perubahan skema atau keterlambatan di satu track bisa diam-diam memblokir pekerjaan sprint di track lain",
              },
              {
                icon: "💰",
                label: "Presensi Jadi Dasar Penggajian",
                desc: "Kesalahan langkah di rollout ini bukan cuma merusak satu layar — ia berisiko ke akurasi penggajian, sehingga update status harus akurat, tidak boleh optimis berlebihan",
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

        {/* 03 — Yang Saya Koordinasikan */}
        <SectionBlock label="03 — Yang Saya Koordinasikan" index={2}>
          <p className="text-sm text-muted-foreground mb-4">
            Tiga mekanisme koordinasi yang menjaga rollout multi-tim dan multi-sistem ini tetap berjalan tanpa kehilangan kendali atas cakupan maupun akurasi:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Dokumen Batasan Cakupan (§0)",
                desc: "Sebelum desain dimulai, menuliskan lebih dulu Masalah, Kenapa Sekarang, Siapa yang Kena, Batas Keras, dan Di Luar Cakupan — dengan aturan eksplisit bahwa begitu §0 disepakati, tim bisa mendesain bebas di dalamnya tanpa perlu mengecek ulang batasan di setiap keputusan.",
              },
              {
                num: "02",
                title: "Menyusun Urutan 153 Story Point Lintas 3 Track",
                desc: "Membagi rollout jadi track yang diurutkan berdasarkan dependensi: Part A — penangkapan presensi mobile (77 SP), Part B — dashboard HR (50 SP), Part C — perencana shift outlet (26 SP). Mobile dirilis lebih dulu karena review HR dan perencanaan shift sama-sama bergantung pada baris presensi yang dihasilkannya.",
              },
              {
                num: "03",
                title: "Disiplin Pelaporan Live vs. Berjalan",
                desc: "Setiap update ke stakeholder menarik garis tegas antara yang sudah ada di produksi dan yang masih dalam sprint — termasuk menahan estimasi penghematan biaya ±Rp16,5 juta/tahun sebagai \"potensi\", bukan \"proyeksi\", sampai seluruh gerbang produksi di ketiga track tertutup.",
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

        {/* 04 — Ritme Koordinasi */}
        <SectionBlock label="04 — Ritme Koordinasi" index={3}>
          <div className="space-y-3">
            {[
              { day: "Senin", action: "Sync lintas track — Mobile, Backend, dan Integration melaporkan status sprint terhadap rencana 153 SP" },
              { day: "Rabu", action: "Cek dependensi — flag apa pun di satu track yang berpotensi memblokir track lain sebelum benar-benar terjadi" },
              { day: "Jumat", action: "Update status ke stakeholder — pemisahan tegas \"live\" vs. \"berjalan\" per track, tanpa membulatkan ke atas" },
              { day: "Per gerbang", action: "Review checklist go-live sebelum track mana pun berpindah dari sprint ke produksi" },
            ].map((item) => (
              <div key={item.day} className="flex items-start gap-4 bg-card rounded-xl px-4 py-3 border border-border">
                <span className="font-display font-semibold text-xs text-accent whitespace-nowrap w-20 mt-0.5">{item.day}</span>
                <p className="text-sm text-muted-foreground">{item.action}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* 05 — Cakupan */}
        <SectionBlock label="05 — Cakupan" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                Masuk Cakupan
              </p>
              <ul className="space-y-2">
                {[
                  "Dokumen batasan cakupan (§0)",
                  "Peta dependensi lintas 3 sistem",
                  "Penyusunan urutan sprint (153 SP total)",
                  "Checklist gerbang go-live untuk Part A",
                  "Pelaporan status ke stakeholder",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Di Luar Cakupan
              </p>
              <ul className="space-y-2">
                {[
                  { item: "Desain UI/UX di ketiga sistem", note: "Dipegang terpisah sebagai design track" },
                  { item: "Penonaktifan mesin fingerprint", note: "Terhambat sampai Part B & C go-live" },
                  { item: "Implementasi backend/API", note: "Dipegang tim engineering" },
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

        {/* 06 — Status */}
        <SectionBlock label="06 — Status" index={5}>
          <p className="text-sm text-muted-foreground mb-4">
            Status per siklus pelaporan terakhir — dirilis bertahap, bukan sekaligus:
          </p>
          <TrackProgress />
        </SectionBlock>

        {/* Dampak */}
        <SectionBlock label="Dampak" index={6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { metric: "56+", label: "Outlet live dengan presensi mobile Part A" },
              { metric: "153", label: "Story point tersusun lintas 3 track" },
              { metric: "0", label: "Edit database tanpa audit sejak go-live" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 text-center border border-border">
                <p className="text-3xl font-display font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Refleksi */}
        <SectionBlock label="Refleksi" index={7}>
          <p className="text-sm text-muted-foreground mb-4">
            Bagian tersulit dari rollout ini bukan salah satu track-nya — melainkan sambungan
            di antara ketiganya. Database yang dipakai bersama berarti satu keputusan di aturan
            cuti HR bisa diam-diam merusak logika overlay perencana outlet beberapa minggu
            kemudian kalau tidak dicek di titik sambungannya.
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Batasan cakupan yang tertulis justru makin bernilai ketika proyek melibatkan
              banyak tim, bukan makin tidak penting — itulah satu-satunya hal yang membuat empat
              tim bisa bergerak paralel tanpa negosiasi ulang setiap hari soal apa yang sudah
              diputuskan. Dan disiplin pelaporan itu terus bertambah nilainya: aturan "potensi,
              bukan proyeksi" yang sama yang saya bawa dari proyek sebelumnya menjaga rollout
              yang separuh sudah produksi dan separuh masih sprint tetap jujur ke leadership
              sepanjang jalan.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectPMOnlineAttendance;
