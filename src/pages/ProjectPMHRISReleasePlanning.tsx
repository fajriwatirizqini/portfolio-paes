import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const MonthlyPIC = () => (
  <div className="space-y-3">
    {[
      {
        month: "Oktober 2024",
        rows: [
          { name: "Fajriwati Qoyyum Rizqini", task: "Figma Prototyping" },
          { name: "Ilham Muhammad Waspada", task: "Personal Account Verification" },
        ],
      },
      {
        month: "November 2024",
        rows: [
          { name: "Nurrahmah Juniar Djazuli", task: "Frontend Template (40% – 100%)" },
          { name: "Gilby Dhilega Yodiaz", task: "Frontend (1% – 30%)" },
          { name: "Muhammad Dio Reyhans", task: "Backend (1% – 30%)" },
        ],
      },
      {
        month: "Desember 2024",
        rows: [
          { name: "Nurrahmah Juniar Djazuli", task: "Testing" },
          { name: "Gilby Dhilega Yodiaz", task: "Finishing" },
          { name: "Ilham Muhammad Waspada", task: "Testing" },
          { name: "Muhammad Dio Reyhans", task: "Finishing" },
        ],
      },
    ].map((block) => (
      <div key={block.month} className="rounded-xl border border-border overflow-hidden text-sm">
        <div className="bg-secondary px-4 py-2.5">
          <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
            {block.month}
          </span>
        </div>
        <div className="divide-y divide-border">
          {block.rows.map((row) => (
            <div key={row.name} className="flex items-center justify-between gap-3 px-4 py-2.5">
              <span className="text-foreground font-medium">{row.name}</span>
              <span className="text-accent text-xs font-mono text-right">{row.task}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ProjectPMHRISReleasePlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="APM — 01"
          title="Menyusun Proposal Kedua: Rilis Bertahap Fitur HRIS Personal Account"
          subtitle="Proyek pertama saya sebagai Assistant Project Manager di Dea Bakery — mengubah proposal full release yang tidak realistis jadi rencana partial release yang bisa dieksekusi tim kecil lintas Figma, frontend, backend, dan QA dari September hingga Desember 2024."
          tags={["Assistant PM", "Release Planning", "Figma", "Cross-functional Coordination", "HR Tech"]}
          backHref="/?tab=work&role=pm"
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "Sep – Des 2024 (proyek Assistant PM pertama)" },
            { label: "Tim", value: "5 orang — Figma, Frontend, Backend, QA" },
            { label: "Peran", value: "Assistant Project Manager" },
            { label: "Produk", value: "Dea Bakery HRIS — Personal Account" },
          ]}
        />

        {/* 01 — Konteks */}
        <SectionBlock label="01 — Konteks" index={0}>
          <p>
            September 2024 adalah pertama kalinya saya memegang peran Assistant Project Manager
            di Dea Bakery. Proposal pertama untuk sistem HRIS (Personal Account) — payslip, cuti,
            SPKL, voucher, hingga data karyawan — mengusulkan merilis seluruh fitur sekaligus.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Peran saya adalah menulis ulang rencana itu jadi proposal kedua: rilis bertahap
              yang benar-benar bisa dieksekusi lima orang, lalu mengoordinasikan siapa
              mengerjakan apa dari bulan ke bulan sampai rilis pertama tercapai.
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Masalah */}
        <SectionBlock label="02 — Masalah" index={1}>
          <p className="text-sm text-muted-foreground mb-4">
            Tiga celah yang membuat proposal pertama sulit dieksekusi:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📦",
                label: "Full Release Tidak Sesuai Kapasitas Tim",
                desc: "Proposal pertama mencakup sepuluh fitur sekaligus — payslip & BPJS, cuti, SPKL, voucher, Quran, data karyawan, chat, penilaian karyawan, Dea Woman — padahal tim frontend dan backend hanya diisi 2–3 orang dengan porsi kerja yang harus dibagi",
              },
              {
                icon: "🎯",
                label: "Tidak Ada Prioritas Rilis",
                desc: "Tanpa garis pemisah, tim berisiko mengerjakan sepuluh fitur paralel tanpa arah — memperlambat semuanya alih-alih menuntaskan yang paling dibutuhkan karyawan lebih dulu",
              },
              {
                icon: "🗓️",
                label: "Rencana Eksekusi Bulanan Belum Ada",
                desc: "Proposal pertama cuma daftar fitur — belum memetakan siapa mengerjakan prototyping, siapa verifikasi, siapa build, siapa testing, atau kapan masing-masing harus selesai",
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

        {/* 03 — Yang Saya Susun */}
        <SectionBlock label="03 — Yang Saya Susun" index={2}>
          <p className="text-sm text-muted-foreground mb-4">
            Tiga hal yang saya susun untuk mengubah proposal jadi rencana yang bisa dieksekusi:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Proposal Kedua: Partial Release",
                desc: "Memecah sepuluh fitur jadi dua kelompok: Released Features (Slip Gaji & BPJS, Izin Cuti, SPKL, Voucher/Beras/Saudara Asuh, Quran tanpa dashboard, Data Karyawan) sebagai prioritas rilis pertama, dan Immediate Release Features (Chats, Al-Quran Full Feature, Penilaian Karyawan, Dea Woman) yang disusun untuk rilis berikutnya.",
              },
              {
                num: "02",
                title: "Person-in-Charge per Bulan",
                desc: "Memetakan satu pemilik yang jelas untuk setiap tahap kerja per bulan — dari Figma prototyping di Oktober, build frontend/backend di November, sampai testing dan finishing di Desember — sehingga tidak ada fitur yang berjalan tanpa penanggung jawab.",
              },
              {
                num: "03",
                title: "Progress Percentage per Orang",
                desc: "Setiap PIC diberi rentang persentase kerjanya sendiri (mis. 1%–30%, 40%–100%) sehingga saya bisa melihat siapa yang mepet target dan siapa yang masih di tahap awal, tanpa menunggu laporan status manual.",
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

        {/* 04 — Rencana Eksekusi per Bulan */}
        <SectionBlock label="04 — Rencana Eksekusi per Bulan" index={3}>
          <p className="text-sm text-muted-foreground mb-4">
            Dari proposal ke eksekusi — setiap bulan punya PIC dan tahap kerja yang jelas:
          </p>
          <MonthlyPIC />
        </SectionBlock>

        {/* 05 — Cakupan Rilis */}
        <SectionBlock label="05 — Cakupan Rilis" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                Rilis Pertama (Released Features)
              </p>
              <ul className="space-y-2">
                {[
                  "Slip Gaji & BPJS",
                  "Izin Cuti",
                  "SPKL",
                  "Voucher, Beras, dan Saudara Asuh",
                  "Quran (No Dashboard)",
                  "Data Karyawan",
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
                Rilis Berikutnya (Immediate Release Features)
              </p>
              <ul className="space-y-2">
                {[
                  { item: "Chats", note: "Menyusul di rilis kedua" },
                  { item: "Al-Quran Full Feature", note: "Menyusul di rilis kedua" },
                  { item: "Penilaian Karyawan", note: "Menyusul di rilis kedua" },
                  { item: "Dea Woman", note: "Menyusul di rilis kedua" },
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

        {/* Dampak */}
        <SectionBlock label="Dampak" index={5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { metric: "6", label: "Fitur live di rilis pertama, bukan sepuluh sekaligus" },
              { metric: "4", label: "Fitur dipetakan rapi untuk rilis berikutnya" },
              { metric: "Sep 2024", label: "Titik awal karier saya sebagai Assistant PM" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 text-center border border-border">
                <p className="text-3xl font-display font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Refleksi */}
        <SectionBlock label="Refleksi" index={6}>
          <p className="text-sm text-muted-foreground mb-4">
            Pelajaran pertama saya sebagai Assistant PM bukan soal tool atau template — melainkan
            keberanian menulis ulang proposal yang sudah disetujui begitu jelas tidak sesuai
            kapasitas tim. Partial release terasa seperti mundur, tapi itu yang membuat rilis
            pertama benar-benar terjadi.
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Memisahkan "harus rilis sekarang" dari "boleh menyusul" adalah bentuk paling
              sederhana dari batasan cakupan — pola yang sama yang kemudian saya tulis lebih
              formal sebagai dokumen §0 di proyek Online Attendance. Prinsipnya sudah ada sejak
              proyek pertama ini, hanya belum punya nama.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectPMHRISReleasePlanning;
