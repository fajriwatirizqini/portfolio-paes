import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import { motion } from "framer-motion";
import step1Img from "@/assets/project4-step1-before.jpg";
import step2Img from "@/assets/project4-step2-wireframe.jpg";
import step3Img from "@/assets/project4-step3-solution.jpg";
import step4Img from "@/assets/project4-step4-final.jpg";

const steps = [
  {
    step: "Step 1",
    title: "Identify the Problem",
    problem:
      "The existing employee onboarding portal was a single long-scrolling page with over 30 form fields, no clear grouping, and inconsistent styling. New hires frequently abandoned the process or submitted incomplete information.",
    painPoints: [
      "No visual grouping — personal info, documents, and preferences were mixed together",
      "No progress indication — users had no idea how far along they were",
      "Inconsistent form controls — dropdowns, text inputs, and checkboxes had no unified style",
      "No save-and-continue — leaving the page meant starting over",
    ],
    image: step1Img,
    imageAlt: "Original cluttered onboarding portal interface",
    imageCaption:
      "The original interface — a single overwhelming form with no structure or progress tracking",
  },
  {
    step: "Step 2",
    title: "Research & Information Architecture",
    problem:
      "Before designing solutions, the form fields were audited and grouped into logical categories through card sorting sessions with HR staff. A user flow was mapped to understand the ideal completion path.",
    painPoints: [
      "Card sorting revealed 6 natural groupings: Personal Info, Contact Details, Documents, Role Setup, Equipment, and Preferences",
      "HR staff confirmed that 40% of fields were rarely used and could be made optional or deferred",
      "The linear flow didn't match reality — some sections depended on role type",
      "Wireframes were created to test the multi-step wizard approach before committing to high-fidelity",
    ],
    image: step2Img,
    imageAlt: "Information architecture wireframes and user flow diagrams",
    imageCaption:
      "Wireframe explorations — card sorting results and restructured user flow diagram",
  },
  {
    step: "Step 3",
    title: "Design the Solution",
    problem:
      "The redesign introduced a multi-step wizard with a clear progress bar, organized form sections into cards, and established a consistent component library. Each step was scoped to take under 3 minutes to complete.",
    painPoints: [
      "Step-by-step wizard with numbered progress indicator and estimated time per section",
      "Card-based form sections with clear labels and contextual help text",
      "Auto-save functionality — users could leave and return without losing progress",
      "Conditional logic — role-specific fields only appeared when relevant",
    ],
    image: step3Img,
    imageAlt: "Redesigned step-by-step onboarding wizard interface",
    imageCaption:
      "The redesigned wizard — clear progress tracking, organized sections, and consistent form controls",
  },
  {
    step: "Step 4",
    title: "Final Design & Dashboard",
    problem:
      "The final design included an onboarding dashboard that gave new hires and HR managers a clear overview of completion status, pending tasks, and upcoming milestones. This replaced scattered email reminders.",
    painPoints: [
      "Dashboard with completion percentage and checklist view for both employee and HR",
      "Automated reminders replaced manual email follow-ups from HR",
      "Welcome section with company culture content reduced first-day anxiety",
      "Role-specific task lists ensured nothing was missed during setup",
    ],
    image: step4Img,
    imageAlt: "Final onboarding dashboard with completion tracking",
    imageCaption:
      "The final dashboard — completion stats, task checklists, and a welcoming first-day experience",
  },
];

const ProjectFour = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 04"
          title="Employee Onboarding Portal Redesign"
          subtitle="A step-by-step UI transformation — from a chaotic form to a guided onboarding experience."
          tags={[
            "UI Design Process",
            "Step-by-Step",
            "Problem Solving",
            "Internal Tool",
          ]}
        />

        <MetaRow
          items={[
            { label: "Timeline", value: "8 weeks" },
            { label: "Team", value: "1 designer, 2 engineers, HR lead" },
            { label: "Role", value: "Lead UI/UX Designer" },
            { label: "Product", value: "Onboarding Portal" },
          ]}
        />

        <SectionBlock label="Overview" index={0}>
          <p>
            This case study walks through the complete UI design process of
            redesigning an internal employee onboarding portal. Each step shows
            the specific problem identified, the approach taken, and the
            solution implemented — from initial audit to final polished
            interface.
          </p>
        </SectionBlock>

        <SectionBlock label="The Core Problem" index={1}>
          <p>
            The onboarding portal had been built incrementally over 3 years with
            no design oversight. Every time HR needed a new field, it was
            appended to the bottom of a growing form. The result was a
            disorganized, overwhelming interface that frustrated new hires on
            their first day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {[
              { metric: "35%", label: "Form abandonment rate" },
              { metric: "30+ fields", label: "On a single page" },
              { metric: "12 min avg", label: "Completion time" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-lg p-4 text-center border border-border"
              >
                <p className="text-xl font-display font-bold text-accent">
                  {item.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Step-by-step process */}
        {steps.map((step, i) => (
          <div key={step.step}>
            <motion.div
              className="mt-12 mb-2 flex items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-display font-bold shrink-0">
                {i + 1}
              </span>
              <h3 className="text-lg font-display font-semibold text-foreground">
                {step.title}
              </h3>
            </motion.div>

            <SectionBlock
              label={i < 2 ? "Problem Identified" : "Solution Applied"}
              index={i + 2}
            >
              <p>{step.problem}</p>
              <ul className="list-disc pl-5 space-y-1.5">
                {step.painPoints.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </SectionBlock>

            <ProjectImage
              src={step.image}
              alt={step.imageAlt}
              caption={step.imageCaption}
            />
          </div>
        ))}

        <SectionBlock label="Impact" index={6}>
          <p>After the redesign was implemented:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { metric: "35% → 8%", label: "Form abandonment rate" },
              { metric: "12 → 5 min", label: "Average completion time" },
              { metric: "92%", label: "HR satisfaction score" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-lg p-4 text-center border border-border"
              >
                <p className="text-xl font-display font-bold text-accent">
                  {item.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p>
            HR managers no longer needed to manually follow up on incomplete
            submissions. The auto-save and progress tracking features
            eliminated the most common friction points in the onboarding
            process.
          </p>
        </SectionBlock>

        <SectionBlock label="Reflection" index={7}>
          <p>
            This project reinforced that the best UI improvements come from
            understanding the underlying workflow, not just restyling existing
            screens. Breaking a complex form into digestible steps with clear
            progress indicators transformed a frustrating experience into a
            guided journey.
          </p>
          <p>
            The step-by-step approach also made it easier to iterate — each
            section could be tested and improved independently without
            disrupting the entire flow.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectFour;
