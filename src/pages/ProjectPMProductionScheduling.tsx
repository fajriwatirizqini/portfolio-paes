import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const ProjectPMProductionScheduling = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="APM — 02"
          title="Rebuilding Production Scheduling from WhatsApp to a Structured Workflow"
          subtitle="Transitioning Dea Bakery's daily production coordination from informal WhatsApp messages to a structured Lark-based system — with clear task ownership, shift visibility, and documented SOPs."
          tags={["Ops Design", "Workflow Restructure", "Lark", "SOP Documentation", "Shift Management"]}
          backHref="/?tab=work&role=pm"
        />

        <MetaRow
          items={[
            { label: "Period", value: "Apr 2024 – Jun 2024" },
            { label: "Team", value: "1 PM, 1 Asst. PM, Ops Lead, 3 Shift Teams" },
            { label: "Role", value: "Assistant Project Manager" },
            { label: "Tool", value: "Lark (Feishu)" },
          ]}
        />

        {/* 01 — Context */}
        <SectionBlock label="01 — Context" index={0}>
          <p>
            As Dea Bakery's order volume grew, the daily production schedule became increasingly
            difficult to manage through WhatsApp group messages.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              My role was to design and implement a structured coordination system —
              migrating production scheduling to Lark with defined task ownership,
              shift-level visibility, and documented operating procedures.
            </p>
          </div>
        </SectionBlock>

        {/* 02 — Problem */}
        <SectionBlock label="02 — Problem" index={1}>
          <p className="text-sm text-muted-foreground mb-4">
            Production coordination relied entirely on informal channels. Three recurring breakdowns:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "📱",
                label: "No Single Source of Truth",
                desc: "Daily schedules were sent via WhatsApp — easily missed, hard to reference, and not visible across all shifts",
              },
              {
                icon: "👤",
                label: "Unclear Task Ownership",
                desc: "Tasks were announced in group chats without explicit assignment — leading to duplicated effort or unclaimed work",
              },
              {
                icon: "🔄",
                label: "No Shift Handoff Structure",
                desc: "When shifts changed, incoming teams had no standardized handoff — context was lost verbally or not at all",
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
            Designed a Lark-based production coordination system with three core components:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Daily Production Schedule in Lark",
                desc: "Structured task board with shift-level views — each task has an owner, status, and time slot. No more searching through chat history.",
              },
              {
                num: "02",
                title: "Shift Handoff Template",
                desc: "Standardized handoff format: what was completed, what's in progress, blockers, and priority for the next shift. Posted to a dedicated Lark channel at each shift end.",
              },
              {
                num: "03",
                title: "SOP Documentation",
                desc: "Wrote and formatted the operating procedures for production scheduling — so the system could run consistently without verbal reminders.",
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

        {/* 04 — Scope */}
        <SectionBlock label="04 — Scope" index={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="font-display font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                In Scope
              </p>
              <ul className="space-y-2">
                {[
                  "Daily task board (Lark)",
                  "Shift ownership assignment",
                  "Shift handoff template",
                  "Weekly planning cadence",
                  "SOP documentation",
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
                Out of Scope
              </p>
              <ul className="space-y-2">
                {[
                  { item: "Inventory management system", note: "Separate initiative" },
                  { item: "Automated scheduling", note: "Manual process for now" },
                  { item: "Performance tracking per shift", note: "Phase 2" },
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

        {/* Outcome */}
        <SectionBlock label="Outcome" index={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { metric: "~60%", label: "Reduction in task confusion across shifts" },
              { metric: "3", label: "Shifts with structured daily visibility" },
              { metric: "0", label: "WhatsApp-only coordination — fully migrated" },
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
            The hardest part wasn't designing the system — it was getting people to use it consistently.
            Adoption required pairing the tool with a new ritual: daily check-ins that referenced
            the board, not the chat.
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Process design is only half the work. The other half is change management —
              making the new system the path of least resistance, not an extra step.
              SOPs matter less than habit formation.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectPMProductionScheduling;
