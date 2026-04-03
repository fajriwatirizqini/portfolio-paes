import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import ordersImg from "@/assets/project1-orders.jpg";
import beforeAfterImg from "@/assets/project1-before-after.jpg";

const ProjectOne = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 01"
          title="Order Management System Redesign"
          subtitle="Improving workflow visibility and reducing manual coordination for operations teams."
          tags={["Internal Tool", "Product Thinking", "Workflow Design", "UI/UX"]}
        />

        <MetaRow
          items={[
            { label: "Timeline", value: "6 weeks" },
            { label: "Team", value: "1 designer, 2 engineers" },
            { label: "Role", value: "UI/UX Designer & Asst. PM" },
            { label: "Product", value: "Order Management" },
          ]}
        />

        <SectionBlock label="Overview" index={0}>
          <p>
            This project focused on redesigning an internal order management system used by
            operations teams to process customer orders.
          </p>
          <p>
            The system was used daily by sales administrators and warehouse staff to manage
            incoming orders and track fulfillment. It served as the central hub for order
            processing but had grown unwieldy as the company scaled.
          </p>
        </SectionBlock>

        <SectionBlock label="Problem" index={1}>
          <p>
            The existing system required staff to manually track order progress across multiple
            tools including spreadsheets, email threads, and chat messages.
          </p>
          <p>This created several operational issues:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Duplicate data entry across systems</li>
            <li>Delayed order confirmation due to manual handoffs</li>
            <li>Confusion about order status between departments</li>
            <li>Heavy reliance on verbal communication between teams</li>
          </ul>
          <p>
            As order volume increased, these inefficiencies compounded and slowed
            the entire fulfillment process.
          </p>
        </SectionBlock>

        <SectionBlock label="Constraints" index={2}>
          <p>
            The backend system could not support real-time inventory updates, which limited
            the ability to build dynamic stock indicators.
          </p>
          <p>
            The solution needed to improve workflow visibility without requiring major backend
            changes. Additionally, the operations team could not afford downtime during the
            transition — the new interface had to coexist with the old system temporarily.
          </p>
        </SectionBlock>

        <ProjectImage src={beforeAfterImg} alt="Before and after comparison of the order management system" caption="Before: spreadsheet-based tracking → After: structured order processor" />

        <SectionBlock label="Product Thinking" index={3}>
          <p>
            After mapping the complete order workflow, it became clear that the biggest issue
            was not the interface itself but the lack of visibility between teams.
          </p>
          <p>
            Each department handled a different stage of the process, but no single view
            showed the entire order lifecycle. Sales would confirm orders without knowing
            warehouse capacity. Warehouse would process items without knowing shipping
            deadlines.
          </p>
          <p>
            The design goal shifted from improving visuals to improving workflow transparency.
            The interface needed to become the single source of truth for every order.
          </p>
        </SectionBlock>

        <SectionBlock label="Key Decisions" index={4}>
          <p>Two approaches were considered:</p>
          <div className="bg-card rounded-lg p-5 space-y-3">
            <div>
              <p className="font-medium font-display text-foreground text-sm">
                Option A — Full workflow redesign
              </p>
              <p className="text-sm text-muted-foreground">
                Best long-term solution but required extensive engineering work and
                stakeholder alignment across three departments.
              </p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-medium font-display text-foreground text-sm">
                Option B — Improve existing workflow ✓
              </p>
              <p className="text-sm text-muted-foreground">
                Could be delivered within the 6-week timeline. Focused on visibility
                improvements within the current system architecture.
              </p>
            </div>
          </div>
          <p>
            Given the timeline and backend constraints, Option B was selected. This allowed
            the team to ship meaningful improvements quickly while building a case for the
            larger redesign in a future phase.
          </p>
        </SectionBlock>

        <SectionBlock label="Solution" index={5}>
          <p>The redesigned interface introduced:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>A centralized order status tracker visible to all departments</li>
            <li>Clearer order detail hierarchy with priority indicators</li>
            <li>Simplified action buttons for status updates (one-click transitions)</li>
            <li>An activity log showing who changed what and when</li>
          </ul>
          <p>
            These improvements reduced the need for external communication tools and made
            order progress visible across teams without switching contexts.
          </p>
        </SectionBlock>

        <ProjectImage src={ordersImg} alt="Redesigned order status tracker interface" caption="Final design — centralized order status tracker with kanban-style workflow" />

        <SectionBlock label="Impact" index={6}>
          <p>After implementation:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { metric: "~40%", label: "Faster order tracking" },
              { metric: "Reduced", label: "Manual coordination" },
              { metric: "Improved", label: "Cross-team visibility" },
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
          <p>
            Operations teams reported that order tracking became significantly faster.
            Manual coordination between departments decreased as the status tracker
            replaced most back-and-forth communication.
          </p>
        </SectionBlock>

        <SectionBlock label="Reflection" index={7}>
          <p>
            This project highlighted the importance of understanding operational workflows
            before designing interface solutions. The initial instinct was to improve the
            visual layer, but the real bottleneck was information flow.
          </p>
          <p>
            Improving system visibility had a larger impact than simply redesigning
            visual elements. The project also reinforced the value of shipping iteratively —
            Option B created enough momentum to get approval for the full redesign later.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectOne;
