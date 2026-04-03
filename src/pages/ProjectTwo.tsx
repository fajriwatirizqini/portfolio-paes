import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import dashboardImg from "@/assets/project2-dashboard.jpg";

const ProjectTwo = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 02"
          title="Sales Reporting Dashboard"
          subtitle="Redesigning a data-heavy dashboard for faster daily decision-making."
          tags={["Design Execution", "Data Visualization", "Internal Tool"]}
        />

        <MetaRow
          items={[
            { label: "Timeline", value: "4 weeks" },
            { label: "Team", value: "1 designer, 1 engineer" },
            { label: "Role", value: "UI/UX Designer" },
            { label: "Product", value: "Reporting Dashboard" },
          ]}
        />

        <SectionBlock label="Overview" index={0}>
          <p>
            This project involved improving an internal reporting dashboard used by management
            teams to monitor daily sales performance. The dashboard was the primary tool for
            morning stand-ups and weekly business reviews.
          </p>
        </SectionBlock>

        <SectionBlock label="Problem" index={1}>
          <p>
            The previous dashboard contained large amounts of raw data displayed in dense
            tables but lacked visual hierarchy. Managers struggled to quickly interpret key
            metrics during time-constrained review sessions.
          </p>
          <p>
            Critical numbers like daily revenue and order volume were buried among secondary
            data points, requiring manual scanning to find relevant information.
          </p>
        </SectionBlock>

        <SectionBlock label="Design Execution" index={2}>
          <p>
            The dashboard layout was redesigned to prioritize key metrics at the top of the
            view. Daily revenue, order volume, and conversion rates were elevated into
            prominent summary cards.
          </p>
          <p>
            Secondary data was moved into expandable sections to reduce cognitive load.
            The layout was restructured from a single scrolling table to a modular card-based
            system that grouped related metrics together.
          </p>
        </SectionBlock>

        <ProjectImage src={dashboardImg} alt="Redesigned sales reporting dashboard" caption="Redesigned dashboard with summary cards, sparkline charts, and bar visualization" />

        <SectionBlock label="UI Improvements" index={3}>
          <p>Key improvements included:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Clearer typographic hierarchy separating primary and secondary metrics</li>
            <li>Improved spacing and grouping with consistent 8px grid</li>
            <li>Color indicators for performance trends (green for up, amber for attention)</li>
            <li>Simplified filtering controls reducing clicks from 4 to 1</li>
            <li>Sparkline charts for at-a-glance trend visualization</li>
          </ul>
        </SectionBlock>

        <SectionBlock label="Impact" index={4}>
          <p>After the redesign:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { metric: "Easier to scan", label: "During daily reviews" },
              { metric: "Fewer clicks", label: "To reach key metrics" },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-4 text-center">
                <p className="text-xl font-display font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <p>
            Managers reported that the dashboard became significantly easier to scan during
            daily reporting reviews. Important metrics could be identified in seconds without
            manually scanning large tables.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectTwo;
