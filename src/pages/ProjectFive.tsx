import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const ProjectFive = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Proyek 05"
          title="Optimasi Alur Kerja Produksi"
          subtitle="Merapikan penjadwalan produksi bakery dan koordinasi tim untuk meningkatkan ketepatan waktu pengiriman serta mengurangi miskomunikasi."
          tags={[
            "Assistant PM",
            "Workflow Optimization",
            "Scheduling",
            "Cross-functional Coordination",
          ]}
          backHref="/?tab=work&role=pm"
        />

        <MetaRow
          items={[
            { label: "Durasi", value: "6–8 minggu" },
            { label: "Tim", value: "PM, 1 asisten PM, ops lead, engineer, stakeholder" },
            { label: "Peran", value: "Assistant Project Manager" },
            { label: "Produk", value: "Alur Kerja Produksi Bakery" },
          ]}
        />

        <SectionBlock label="Ringkasan" index={0}>
          <p>
            Proyek ini berfokus mengoptimalkan alur kerja produksi untuk operasional bakery
            dengan meningkatkan visibilitas penjadwalan, tracking tugas, dan koordinasi lintas
            tim. Tujuannya membuat perencanaan produksi predictable dan lebih mudah dieksekusi
            sehari-hari.
          </p>
        </SectionBlock>

        <SectionBlock label="Peran Saya (Assistant PM)" index={1}>
          <p>Saya mendukung Project Manager dengan memegang lapisan eksekusi koordinasi:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Mengoordinasikan timeline proyek dan tracking tugas agar milestone tetap sesuai jadwal</li>
            <li>Menyimpan notulen rapat dan action item agar status proyek tetap terlihat jelas</li>
            <li>Memfasilitasi komunikasi antara desainer, developer, dan stakeholder</li>
            <li>Membantu mengurangi miskomunikasi dan mempercepat penyelesaian isu selama eksekusi</li>
            <li>Meningkatkan efisiensi alur kerja tim lewat rutinitas dan tooling yang konsisten</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Masalah" index={2}>
          <p>
            Penjadwalan dan koordinasi produksi sangat bergantung pada chat ad-hoc dan
            pencatatan manual. Seiring volume order meningkat, tim kehilangan visibilitas atas
            prioritas dan dependensi.
          </p>
          <p>Masalah yang umum terjadi:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Prioritas produksi harian tidak jelas dan sering berubah mendadak</li>
            <li>Tugas "macet" karena kepemilikan dan langkah berikutnya tidak eksplisit</li>
            <li>Hasil rapat tidak konsisten diterjemahkan jadi work item yang bisa dilacak</li>
            <li>Handoff lintas tim menyebabkan keterlambatan karena konteks atau requirement yang hilang</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Yang Kami Tingkatkan" index={3}>
          <p>
            Kami memperkenalkan ritme kerja dan sistem tracking yang lebih terstruktur agar
            semua orang bisa melihat rencana, status, dan blocker sekilas pandang.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Standardisasi rutinitas perencanaan mingguan dan harian</li>
            <li>Definisi milestone yang jelas dan checkpoint tracking</li>
            <li>Satu sumber kebenaran untuk tugas, pemilik, dan due date</li>
            <li>Jalur eskalasi yang lebih cepat untuk blocker dan perubahan prioritas</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Cara Saya Mengelolanya (Format Jira)" index={4}>
          <p>
            Untuk mengelola perencanaan dan eksekusi, saya membantu menyusun pekerjaan dalam
            hierarki bergaya Jira, dengan tipe issue, penamaan, dan workflow yang konsisten.
          </p>

          <div className="space-y-3">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Hierarki issue</p>
              <p className="text-sm text-muted-foreground mt-1">
                Epic → Story → Task/Sub-task (dengan pemilik, due date, dan acceptance criteria yang jelas).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Epic:</span> Penjadwalan Produksi & Perencanaan Kapasitas
                </li>
                <li>
                  <span className="font-medium text-foreground">Story:</span> Membuat template rencana produksi mingguan
                </li>
                <li>
                  <span className="font-medium text-foreground">Task:</span> Menentukan aturan kapasitas shift per lini produk
                </li>
                <li>
                  <span className="font-medium text-foreground">Sub-task:</span> Validasi aturan bersama ops lead dan perbarui dokumentasi
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Alur board (kolom)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Backlog → Ready → In Progress → Blocked → In Review → Done
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Ready:</span> sudah discope, pemilik ditentukan, due date ditetapkan
                </li>
                <li>
                  <span className="font-medium text-foreground">Blocked:</span> alasan blocker dicatat + langkah berikutnya + ETA
                </li>
                <li>
                  <span className="font-medium text-foreground">In Review:</span> review dan sign-off dari stakeholder/PM
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Sprint / ritme kerja</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-sm text-muted-foreground">
                <li>
                  Perencanaan mingguan: mengonfirmasi prioritas, kapasitas, dan target milestone
                </li>
                <li>
                  Check-in harian: meninjau "In Progress / Blocked" dan menugaskan ulang bila perlu
                </li>
                <li>
                  Review mingguan: demo/ringkasan apa yang selesai, apa yang meleset, dan kenapa
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Format ticket (template)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Memakai struktur yang konsisten agar tugas actionable dan mengurangi bolak-balik.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Summary:</span> kata kerja + hasil (mis. "Tentukan aturan jadwal bake harian")
                </li>
                <li>
                  <span className="font-medium text-foreground">Description:</span> konteks + batasan + tautan ke notulen
                </li>
                <li>
                  <span className="font-medium text-foreground">Acceptance criteria:</span> daftar poin "selesai berarti…"
                </li>
                <li>
                  <span className="font-medium text-foreground">Owner:</span> satu DRI + kolaborator
                </li>
                <li>
                  <span className="font-medium text-foreground">Due date:</span> terikat ke milestone, bukan "kalau sempat"
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Notulen rapat → aksi di Jira</p>
              <p className="text-sm text-muted-foreground mt-1">
                Setelah setiap rapat, saya mencatat keputusan dan mengonversinya jadi ticket
                dengan pemilik dan tanggal. Ini memberi stakeholder visibilitas status yang jelas
                tanpa perlu follow-up tambahan.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock label="Dampak" index={5}>
          <p>Hasil yang kami dorong lewat perencanaan dan koordinasi yang lebih jelas:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Milestone proyek selesai sesuai jadwal lewat tracking dan follow-up yang terstruktur</li>
            <li>Miskomunikasi berkurang lewat satu sumber kebenaran dan kepemilikan yang eksplisit</li>
            <li>Penyelesaian isu lebih cepat lewat blocker yang terlihat dan rutinitas eskalasi</li>
            <li>Efisiensi alur kerja tim meningkat lewat perencanaan dan dokumentasi yang berulang</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Refleksi" index={6}>
          <p>
            Pengungkit terbesarnya bukan menambah rapat — melainkan membuat pekerjaan terlihat
            dan tidak ambigu. Struktur Jira yang konsisten, kepemilikan yang jelas, dan
            follow-up yang disiplin menciptakan eksekusi yang lebih lancar dan alignment yang
            lebih baik lintas tim.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectFive;
