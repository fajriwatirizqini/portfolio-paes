import ProjectHeader from "@/components/ProjectHeader";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import expenseImg from "@/assets/project3-expense.jpg";

const ProjectThree = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 03 — Concept"
          title="Expense Tracker App"
          subtitle="A concept project exploring financial clarity through clean, modern interface design."
          tags={["UI Craft", "Visual Design", "Mobile Concept"]}
        />

        <SectionBlock label="Concept Overview" index={0}>
          <p>
            This concept project explores a redesign of a mobile expense tracking app with a
            focus on improving financial clarity and user engagement. It was created as a
            personal design exercise to push UI craft and visual consistency.
          </p>
        </SectionBlock>

        <SectionBlock label="Design Goal" index={1}>
          <p>
            The goal was to create a clean and modern interface that makes it easier for
            users to understand spending habits at a glance. The design prioritizes clarity
            over feature density — showing users what matters most without overwhelming them.
          </p>
        </SectionBlock>

        <SectionBlock label="UI Exploration" index={2}>
          <p>The visual direction focused on:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium text-foreground">Typography system:</span> A
              clear type scale using a geometric sans-serif for headings and a readable
              humanist font for body content
            </li>
            <li>
              <span className="font-medium text-foreground">Color palette:</span> A
              restrained palette with a teal accent for positive actions and warm neutrals
              for the base layer
            </li>
            <li>
              <span className="font-medium text-foreground">Component design:</span>{" "}
              Rounded cards with subtle depth through shadow layering rather than borders
            </li>
            <li>
              <span className="font-medium text-foreground">Layout hierarchy:</span>{" "}
              Summary-first approach with progressive disclosure for transaction details
            </li>
          </ul>
        </SectionBlock>

        <ProjectImage src={expenseImg} alt="Expense tracker mobile app screens" caption="Key screens — spending breakdown, transactions, and budget overview" />

        <SectionBlock label="Key Screens" index={3}>
          <p>The redesign introduced:</p>
          <div className="space-y-3">
            {[
              {
                screen: "Spending Breakdown",
                desc: "A visual donut chart with category-based spending distribution and month-over-month comparison.",
              },
              {
                screen: "Transaction Entry",
                desc: "A simplified input flow that reduces a 5-step process to 2 taps with smart categorization.",
              },
              {
                screen: "Monthly Budget Overview",
                desc: "A progress-bar based view showing budget utilization across categories with remaining amounts.",
              },
            ].map((item) => (
              <div key={item.screen} className="bg-card rounded-lg p-4">
                <p className="font-medium font-display text-foreground text-sm">
                  {item.screen}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock label="UI Craft Highlights" index={4}>
          <p>Design craft details that elevate the experience:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium text-foreground">Component consistency:</span>{" "}
              Every card, button, and input follows the same border-radius and padding tokens
            </li>
            <li>
              <span className="font-medium text-foreground">Spacing system:</span> 4px base
              grid with consistent vertical rhythm throughout all screens
            </li>
            <li>
              <span className="font-medium text-foreground">Micro-interactions:</span>{" "}
              Subtle scale animations on transaction cards and smooth progress bar fills
            </li>
            <li>
              <span className="font-medium text-foreground">Accessibility:</span> All color
              combinations meet WCAG AA contrast requirements. Touch targets are minimum 44px
            </li>
          </ul>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectThree;
