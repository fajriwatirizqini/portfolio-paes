import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import staffAppMockup from "@/assets/project-staff-app-mockup.png";

const ProjectStaffApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 02"
          title="Personal App Staff — Dea Bakery"
          subtitle="An internal mobile app for Dea Bakery staff — giving employees self-service access to payslips, benefits, attendance, and HR information."
          tags={["Internal Tool", "Mobile App", "HR & People Ops", "UI/UX Design"]}
        />

        <MetaRow
          items={[
            { label: "Team", value: "1 Designer, 1 PM, 2 Devs, 2 Stakeholders" },
            { label: "Role", value: "UI/UX Designer" },
            { label: "Tools", value: "Figma, Jira" },
            { label: "Type", value: "Internal Tool" },
          ]}
        />

        <SectionBlock label="01 — Context" index={0}>
          <p>
            As Dea Bakery grew, managing employee information through spreadsheets,
            WhatsApp messages, and manual paperwork became increasingly unsustainable.
            Staff had no reliable way to check their own payslip, track attendance history,
            or submit benefit claims without going through HR directly.
          </p>
          <p>
            This project was the internal counterpart to the customer-facing Dea Bakery app
            — built specifically for employees. The goal was to give staff a single,
            self-service tool that reduced the operational load on HR while improving
            the employee experience.
          </p>
        </SectionBlock>

        <SectionBlock label="02 — Problem" index={1}>
          <p>
            Staff had no centralized place to access personal work information. This created
            recurring friction across three areas:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Payslip access</strong> — employees had to ask HR manually every
              pay period; no digital record existed
            </li>
            <li>
              <strong>Attendance & leave</strong> — tracking was done through physical
              logbooks, making it hard to verify or dispute records
            </li>
            <li>
              <strong>Benefit claims</strong> — submission was informal (WhatsApp or
              verbal), leading to lost requests and unclear status
            </li>
          </ul>
          <p>
            HR was spending significant time on repeated, manual requests that could be
            handled directly by staff — if they had the right tool.
          </p>
        </SectionBlock>

        <SectionBlock label="03 — Scope & Constraints" index={2}>
          <p>
            The app needed to work within Dea Bakery's existing operational infrastructure.
            Several constraints shaped the design early on:
          </p>
          <div className="bg-card rounded-lg p-5 space-y-4">
            <div>
              <p className="font-medium font-display text-foreground text-sm mb-2">
                What was in scope
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>→ Digital payslip (Slip Gaji Digital)</li>
                <li>→ Attendance history & check-in visibility</li>
                <li>→ Benefit & leave submission</li>
                <li>→ THR (holiday allowance) information</li>
                <li>→ OTP-based login — no passwords to manage</li>
                <li>→ Device re-verification flow for security</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-medium font-display text-foreground text-sm mb-2">
                Deliberately excluded
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>→ Real-time payroll calculation (backend not ready)</li>
                <li>→ Direct HR chat (kept to existing WhatsApp channel)</li>
                <li>→ Performance review features (phase 2)</li>
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock label="04 — Design Approach" index={3}>
          <p>
            Three principles drove every decision on this project:
          </p>
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Low friction authentication
              </p>
              <p className="text-sm text-muted-foreground">
                Staff should be able to log in without remembering a password. OTP via
                registered phone number was chosen — familiar, fast, and requires no
                account management from HR.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Information clarity over feature richness
              </p>
              <p className="text-sm text-muted-foreground">
                The home dashboard surfaces the most time-sensitive information first:
                payslip amount, today's attendance, and active benefit submissions.
                Staff shouldn't need to dig to find what they came for.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Security via device verification
              </p>
              <p className="text-sm text-muted-foreground">
                Because the app contains sensitive personal data, a device re-verification
                flow was designed for when staff access from a new device — using OTP
                + employee identity confirmation to prevent unauthorized access.
              </p>
            </div>
          </div>
        </SectionBlock>

        <ProjectImage
          src={staffAppMockup}
          alt="Personal App Staff Dea Bakery — login, dashboard, and device verification screens"
          caption="Login with OTP · Home dashboard (payslip, attendance, benefits) · Device re-verification flow"
        />

        <SectionBlock label="05 — Key Features" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Slip Gaji Digital",
                desc: "Employees can view their monthly payslip breakdown at any time — no more asking HR for a printed copy.",
              },
              {
                title: "Cek Kehadiran",
                desc: "Real-time attendance visibility with check-in/out history — employees can verify their own records.",
              },
              {
                title: "Pengajuan Benefit",
                desc: "Health claims, leave requests, and reimbursements submitted directly in-app with trackable status.",
              },
              {
                title: "Info THR",
                desc: "Holiday allowance details accessible by staff ahead of Lebaran — transparent and self-serve.",
              },
              {
                title: "OTP Login",
                desc: "No password needed. Staff log in via their registered phone number, keeping authentication simple and secure.",
              },
              {
                title: "Verifikasi Perangkat",
                desc: "When accessing from a new device, a secondary identity check protects sensitive employee data.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-4">
                <p className="font-medium font-display text-foreground text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock label="Outcome" index={5}>
          <p>
            The Staff App reduced HR's manual workload by giving employees direct access
            to their own information. Payslip inquiries, leave status checks, and benefit
            submission follow-ups — all previously handled through HR — could now be
            resolved independently by staff.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { metric: "6", label: "Self-service features" },
              { metric: "0", label: "Passwords to manage" },
              { metric: "Reduced", label: "HR manual workload" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-display font-bold text-accent">
                  {item.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock label="Reflection" index={6}>
          <p>
            Internal tools are easy to deprioritize — staff will "just figure it out."
            But the friction cost is real: it shows up as HR time spent on repetitive
            requests, staff frustration from not knowing their own pay or leave balance,
            and a general feeling that the company doesn't invest in its people.
          </p>
          <p>
            This project reinforced that good internal UX is as important as good
            customer UX — sometimes more so. When employees have tools that respect
            their time, it reflects directly on how they engage with their work.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectStaffApp;
