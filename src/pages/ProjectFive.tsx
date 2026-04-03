import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";

const ProjectFive = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 05"
          title="Production Workflow Optimization"
          subtitle="Streamlined bakery production scheduling and team coordination to improve on-time delivery and reduce miscommunication."
          tags={[
            "Assistant PM",
            "Workflow Optimization",
            "Scheduling",
            "Cross-functional Coordination",
          ]}
        />

        <MetaRow
          items={[
            { label: "Timeline", value: "6–8 weeks" },
            { label: "Team", value: "PM, 1 assistant PM, ops lead, engineers, stakeholders" },
            { label: "Role", value: "Assistant Project Manager" },
            { label: "Product", value: "Bakery Production Workflow" },
          ]}
        />

        <SectionBlock label="Overview" index={0}>
          <p>
            This project focused on optimizing production workflow for a bakery operation by
            improving scheduling visibility, task tracking, and cross-team coordination.
            The goal was to make production planning predictable and easier to execute day-to-day.
          </p>
        </SectionBlock>

        <SectionBlock label="My Role (Assistant PM)" index={1}>
          <p>I supported the Project Manager by owning the execution layer of coordination:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Coordinated project timelines and task tracking to keep milestones on schedule</li>
            <li>Maintained meeting notes and action items for clear project status visibility</li>
            <li>Facilitated communication between designers, developers, and stakeholders</li>
            <li>Helped reduce miscommunication and accelerated issue resolution during execution</li>
            <li>Improved overall team workflow efficiency through consistent routines and tooling</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Problem" index={2}>
          <p>
            Production scheduling and coordination relied heavily on ad-hoc chats and manual tracking.
            As order volume increased, teams lost visibility into priorities and dependencies.
          </p>
          <p>Common issues included:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Unclear daily production priorities and frequent last-minute changes</li>
            <li>Tasks “stuck” because ownership and next steps were not explicit</li>
            <li>Meeting outcomes not consistently translated into trackable work items</li>
            <li>Cross-team handoffs caused delays due to missing context or requirements</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="What We Improved" index={3}>
          <p>
            We introduced a more structured operating rhythm and tracking system so everyone could
            see the plan, status, and blockers at a glance.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Standardized weekly and daily planning routines</li>
            <li>Clear milestone definition and checkpoint tracking</li>
            <li>Single source of truth for tasks, owners, and due dates</li>
            <li>Faster escalation paths for blockers and priority changes</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="How I Managed It (Jira Format)" index={4}>
          <p>
            To manage planning and execution, I helped structure the work in a Jira-style hierarchy,
            with consistent issue types, naming, and workflows.
          </p>

          <div className="space-y-3">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Issue hierarchy</p>
              <p className="text-sm text-muted-foreground mt-1">
                Epics → Stories → Tasks/Sub-tasks (with clear owners, due dates, and acceptance criteria).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Epic:</span> Production Scheduling & Capacity Planning
                </li>
                <li>
                  <span className="font-medium text-foreground">Story:</span> Create weekly production plan template
                </li>
                <li>
                  <span className="font-medium text-foreground">Task:</span> Define shift capacity rules per product line
                </li>
                <li>
                  <span className="font-medium text-foreground">Sub-task:</span> Validate rules with ops lead and update documentation
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Board workflow (columns)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Backlog → Ready → In Progress → Blocked → In Review → Done
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Ready:</span> scoped, owner assigned, due date set
                </li>
                <li>
                  <span className="font-medium text-foreground">Blocked:</span> blocker reason logged + next action + ETA
                </li>
                <li>
                  <span className="font-medium text-foreground">In Review:</span> stakeholder/PM review and sign-off
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Sprint / cadence</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2 text-sm text-muted-foreground">
                <li>
                  Weekly planning: confirmed priorities, capacity, and target milestones
                </li>
                <li>
                  Daily check-in: reviewed “In Progress / Blocked” and reassigned if needed
                </li>
                <li>
                  Weekly review: demo/summary of what shipped, what slipped, and why
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Ticket format (template)</p>
              <p className="text-sm text-muted-foreground mt-1">
                Used a consistent structure so tasks were actionable and reduced back-and-forth.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-3 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Summary:</span> verb + outcome (e.g., “Define daily bake schedule rules”)
                </li>
                <li>
                  <span className="font-medium text-foreground">Description:</span> context + constraints + links to notes
                </li>
                <li>
                  <span className="font-medium text-foreground">Acceptance criteria:</span> bullet list of “done means…”
                </li>
                <li>
                  <span className="font-medium text-foreground">Owners:</span> single DRI + collaborators
                </li>
                <li>
                  <span className="font-medium text-foreground">Due date:</span> tied to milestone, not “nice to have”
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium font-display text-foreground text-sm">Meeting notes → Jira actions</p>
              <p className="text-sm text-muted-foreground mt-1">
                After each meeting, I captured decisions and converted them into tickets with owners and dates.
                This gave stakeholders clear status visibility without needing extra follow-ups.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock label="Impact" index={5}>
          <p>Results we drove through clearer planning and coordination:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Project milestones completed on schedule through structured tracking and follow-up</li>
            <li>Less miscommunication via single source of truth and explicit ownership</li>
            <li>Faster issue resolution through visible blockers and escalation routines</li>
            <li>Improved team workflow efficiency via repeatable planning and documentation</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Reflection" index={6}>
          <p>
            The biggest lever wasn’t adding more meetings — it was making work visible and
            unambiguous. A consistent Jira structure, clear ownership, and disciplined follow-ups
            created smoother execution and better alignment across teams.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectFive;

