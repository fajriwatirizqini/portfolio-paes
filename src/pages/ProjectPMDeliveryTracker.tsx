import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const ProjectPMDeliveryTracker = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="APM — 03"
          title="Building a Cross-Team Delivery Tracker for Leadership Visibility"
          subtitle="Owned weekly delivery reporting across design, dev, and ops — consolidating fragmented progress updates into a single dashboard reviewed by leadership, reducing escalations and improving team accountability."
          tags={["Reporting", "Google Sheets", "Cross-functional", "Delivery Tracking", "Leadership Dashboard"]}
          backHref="/?tab=work&role=pm"
        />

        <MetaRow
          items={[
            { label: "Period", value: "Jul 2024 – Dec 2024" },
            { label: "Team", value: "Design, Dev, Ops + Leadership" },
            { label: "Role", value: "Assistant Project Manager" },
            { label: "Tool", value: "Google Sheets, Lark" },
          ]}
        />

        {/* 01 — Context */}
        <SectionBlock label="01 — Context" index={0}>
          <p>
            As the team grew across functions, leadership had no reliable view of what
            was in progress, what was blocked, and what had shipped each week.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I owned the weekly delivery reporting function — aggregating status from design,
              dev, and ops into a single tracker reviewed by leadership every week.
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Problem */}
        <SectionBlock label="02 — Problem" index={1}>
          <p className="text-sm text-muted-foreground mb-4">
            Delivery status was scattered. Three core visibility gaps:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📊",
                label: "No Consolidated View",
                desc: "Progress updates lived in separate channels — design in Figma comments, dev in Jira, ops in WhatsApp. Leadership had no single place to check status",
              },
              {
                icon: "⏰",
                label: "Reactive Escalations",
                desc: "Issues only surfaced in leadership reviews after they had already caused delays — no early warning system existed",
              },
              {
                icon: "❓",
                label: "No Delivery Accountability",
                desc: "Without a shared tracker, it was unclear who owned what, and slippages had no documented reason or resolution path",
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

        {/* 03 — What I Built */}
        <SectionBlock label="03 — What I Built" index={2}>
          <p className="text-sm text-muted-foreground mb-4">
            Built a weekly reporting system with three components:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Cross-Team Delivery Tracker (Google Sheets)",
                desc: "A shared dashboard tracking all active work items across design, dev, and ops — with owner, status, target date, and weekly delta. Updated every Friday before the leadership review.",
              },
              {
                num: "02",
                title: "Weekly Status Report Template",
                desc: "Standardized format: what shipped, what's in progress, what's blocked and why, and what needs leadership decision. Kept to one page — scannable in under 2 minutes.",
              },
              {
                num: "03",
                title: "Blocker Escalation Log",
                desc: "A separate tab tracking all reported blockers: raised date, owner, resolution path, and resolved date. Gave leadership visibility into recurring friction patterns.",
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

        {/* 04 — Reporting Cadence */}
        <SectionBlock label="04 — Reporting Cadence" index={3}>
          <div className="space-y-3">
            {[
              { day: "Monday", action: "Collect status updates from each function lead" },
              { day: "Wednesday", action: "Mid-week blocker check — flag anything at risk before it slips" },
              { day: "Friday", action: "Finalize weekly tracker + write status report for leadership review" },
              { day: "Monthly", action: "Retrospective on slippages: what slipped, why, and systemic patterns" },
            ].map((item) => (
              <div key={item.day} className="flex items-start gap-4 bg-card rounded-xl px-4 py-3 border border-border">
                <span className="font-display font-semibold text-xs text-accent whitespace-nowrap w-20 mt-0.5">{item.day}</span>
                <p className="text-sm text-muted-foreground">{item.action}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Outcome */}
        <SectionBlock label="Outcome" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { metric: "↓", label: "Escalations in monthly leadership reviews" },
              { metric: "6mo", label: "Consistent weekly reporting maintained" },
              { metric: "3", label: "Functions consolidated into one tracker" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 text-center border border-border">
                <p className="text-3xl font-display font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Reflection */}
        <SectionBlock label="Reflection" index={5}>
          <p className="text-sm text-muted-foreground mb-4">
            Reporting feels like overhead until it catches something early. The value
            of this tracker wasn't the spreadsheet — it was the weekly ritual of
            asking "what's at risk before it's a problem."
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Good visibility systems don't just report what happened — they create
              accountability structures that change how people plan. When everyone
              knows their work will be reviewed on Friday, they think about Friday
              on Monday.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectPMDeliveryTracker;
