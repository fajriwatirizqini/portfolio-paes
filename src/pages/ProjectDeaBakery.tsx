import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import deaBakeryMockup from "@/assets/project-dea-bakery-mockup.png";
import deaBakeryScope from "@/assets/project-dea-bakery-scope.png";

// ─── Inline UX Artifact Components ──────────────────────────────────────────

const UserJourneyMap = () => (
  <div className="rounded-xl border border-border overflow-hidden text-sm">
    <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
      <span className="font-display font-semibold text-foreground text-xs tracking-widest uppercase">
        User Journey Map — Customer Persona
      </span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border bg-card">
            {["Phase", "Action", "Thought", "Pain Point", "Opportunity"].map((h) => (
              <th key={h} className="px-4 py-2.5 font-display font-semibold text-xs text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            {
              phase: "🔍 Discover",
              action: "Hears about a new bakery via word-of-mouth or Instagram",
              thought: '"Does this place have what I like?"',
              pain: "No digital presence to validate before visiting",
              opp: "Create a compelling digital first impression",
            },
            {
              phase: "🗂️ Browse",
              action: "Opens the app, explores product categories",
              thought: '"There are so many items — where do I start?"',
              pain: "Catalog feels overwhelming without structure",
              opp: "Category-based navigation + visual-first hierarchy",
            },
            {
              phase: "🧐 Evaluate",
              action: "Taps on a product to read details",
              thought: '"Is this worth the price? What does it taste like?"',
              pain: "Cannot physically inspect the product",
              opp: "High-quality imagery + detailed descriptions build trust",
            },
            {
              phase: "🛒 Order",
              action: "Adds items to cart, proceeds to checkout",
              thought: '"I hope this doesn\'t take forever."',
              pain: "Multi-step flows cause abandonment",
              opp: "Streamlined checkout with clear progress indicators",
            },
            {
              phase: "✅ Complete",
              action: "Order confirmed, receives digital receipt",
              thought: '"Great — I know exactly what I ordered."',
              pain: "No post-purchase loyalty incentive",
              opp: "Loyalty point confirmation closes the engagement loop",
            },
          ].map((row) => (
            <tr key={row.phase} className="hover:bg-card/60 transition-colors">
              <td className="px-4 py-3 font-display font-medium text-foreground whitespace-nowrap">{row.phase}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.action}</td>
              <td className="px-4 py-3 text-muted-foreground italic">{row.thought}</td>
              <td className="px-4 py-3 text-red-400/80">{row.pain}</td>
              <td className="px-4 py-3 text-accent">{row.opp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const UserFlowDiagram = () => (
  <div className="rounded-xl border border-border bg-card p-5 space-y-4">
    <p className="font-display font-semibold text-xs tracking-widest uppercase text-muted-foreground">
      User Flow — Core Ordering Journey
    </p>
    <div className="flex flex-col gap-2">
      {[
        { step: "App Open", label: "Splash / Onboarding", note: "First-time vs. returning user branching" },
        { step: "Home", label: "Dashboard", note: "Featured products + category tabs" },
        { step: "Browse", label: "Category Listing", note: "Filtered, visual-first grid layout" },
        { step: "Select", label: "Product Detail", note: "Image, description, price, Add to Cart" },
        { step: "Review", label: "Cart Summary", note: "Item quantity edit, running total" },
        { step: "Checkout", label: "Order Form", note: "Name, pickup/delivery, payment method" },
        { step: "Confirm", label: "Order Confirmation", note: "Digital receipt + loyalty points earned" },
      ].map((item, i, arr) => (
        <div key={item.step} className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold text-xs">{i + 1}</span>
            </div>
            {i < arr.length - 1 && (
              <div className="w-px h-5 bg-border mt-1" />
            )}
          </div>
          <div className="pt-1">
            <p className="font-display font-semibold text-sm text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResearchInsights = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        num: "01",
        title: "Visuals drive purchase confidence",
        body: "Users rely heavily on product imagery when evaluating bakery items they cannot physically inspect. Low-quality photos directly correlated with abandonment at the product detail screen.",
        tag: "Behavioral Pattern",
      },
      {
        num: "02",
        title: "Exploration is part of the intent",
        body: "Most customers open the app without a specific product in mind — they browse, get inspired, then decide. The discovery phase is not a detour; it is the experience.",
        tag: "Mental Model",
      },
      {
        num: "03",
        title: "Friction accumulates fast",
        body: "Every additional step in the ordering flow increased abandonment risk. Users benchmarked against apps like GrabFood and Tokopedia — their tolerance for friction is already calibrated.",
        tag: "Competitive Benchmark",
      },
      {
        num: "04",
        title: "Multi-item purchase is the norm",
        body: "The average basket contained 3–5 items across different categories. This validated the need for a persistent cart and a browsable catalog — not a single-product order flow.",
        tag: "Purchasing Behavior",
      },
    ].map((insight) => (
      <div key={insight.num} className="bg-card rounded-xl p-5 border border-border space-y-2">
        <div className="flex items-start justify-between gap-2">
          <span className="font-display font-bold text-3xl text-accent/20 leading-none">{insight.num}</span>
          <span className="text-xs font-display font-medium tracking-wide px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
            {insight.tag}
          </span>
        </div>
        <p className="font-display font-semibold text-sm text-foreground">{insight.title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{insight.body}</p>
      </div>
    ))}
  </div>
);

const DesignExplorationCards = () => (
  <div className="space-y-5">
    {[
      {
        area: "Product Browsing",
        challenge: "Users needed to navigate a large catalog without knowing exactly what they wanted.",
        decision: "Introduced a category-based top navigation paired with a featured section on the home screen. This reduced cognitive load during initial browsing and surfaced high-margin items without feeling promotional.",
        rationale: "Mirrors how customers browse physical bakery displays — by category (bread, cakes, pastries) not by search intent.",
        tradeoff: "We deprioritized a search bar in v1 — deliberately. Search requires a minimum catalog size and trained user behavior. Category browsing covers 90% of cases for a <50 item catalog.",
      },
      {
        area: "Product Detail Screen",
        challenge: "Customers cannot physically inspect products before purchase — a fundamental disadvantage of digital commerce.",
        decision: "Designed a hero-image-first layout with an expandable ingredients/allergen section, a sticky Add to Cart button, and a 'Customers also ordered' row to increase basket size.",
        rationale: "Compensating for physical absence through visual richness and information transparency — not just aesthetics.",
        tradeoff: "Showing calorie and allergen info added screen length but was non-negotiable: it builds the trust needed to convert first-time buyers.",
      },
      {
        area: "Checkout Flow",
        challenge: "Complex checkout processes consistently lead to cart abandonment — the highest-risk moment in any ordering journey.",
        decision: "Reduced checkout to 3 screens: Cart Review → Order Details (pickup/delivery + contact) → Confirmation. Removed account creation as a hard gate.",
        rationale: "Guest-first checkout reduces the 'commitment anxiety' of a first purchase. Account creation is offered post-confirmation as an opt-in.",
        tradeoff: "This sacrifices some data capture in the short term. Long-term, a frictionless first purchase is more valuable than a reluctant sign-up.",
      },
    ].map((item, i) => (
      <div key={item.area} className="rounded-xl border border-border overflow-hidden">
        <div className="bg-secondary px-5 py-3 flex items-center gap-3">
          <span className="text-xs font-display font-semibold text-accent tracking-widest uppercase">
            Design Decision {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-display font-bold text-foreground">{item.area}</span>
        </div>
        <div className="p-5 space-y-3">
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Challenge</p>
            <p className="text-sm text-secondary-foreground">{item.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Decision</p>
            <p className="text-sm text-secondary-foreground">{item.decision}</p>
          </div>
          <div>
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-1">Design Rationale</p>
            <p className="text-sm text-secondary-foreground">{item.rationale}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
            <p className="text-xs font-display font-semibold tracking-widest uppercase text-accent mb-1">Trade-off acknowledged</p>
            <p className="text-sm text-muted-foreground">{item.tradeoff}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ImpactGrid = () => (
  <div className="space-y-6">
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">User Impact</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "↓ Friction", label: "Streamlined 3-screen checkout vs. industry avg. of 5–7 steps" },
          { metric: "↑ Confidence", label: "Visual-first product detail reduces purchase uncertainty" },
          { metric: "↑ Discovery", label: "Category browsing surfaces relevant products within 2 taps" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-accent mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="text-xs font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">Business Impact</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { metric: "Digital", label: "New sales channel unlocked — reduces walk-in dependency" },
          { metric: "Retention", label: "Loyalty system creates a reason to return — increasing LTV" },
          { metric: "Scale-ready", label: "Architecture designed to plug in payments & delivery in Phase 2" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-xl font-display font-bold text-foreground mb-1">{item.metric}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Page Component ──────────────────────────────────────────────────────────

const ProjectDeaBakery = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 01"
          title="Designing a Digital Ordering Experience for a Local Bakery Brand"
          subtitle="Designing a mobile ordering experience for a local bakery — where the real design challenge wasn't making it look good, it was making it work for a business not yet ready for full e-commerce."
          tags={["Product Thinking", "UX Strategy", "Mobile App", "Scope Decision", "Food & Beverage"]}
        />

        <MetaRow
          items={[
            { label: "Timeline", value: "4 Weeks (Design)" },
            { label: "Team", value: "1 Designer, 1 PM, 2 Engineers, 2 Stakeholders" },
            { label: "Role", value: "UI/UX Designer" },
            { label: "Platform", value: "iOS & Android" },
          ]}
        />

        {/* 01 — Business Context */}
        <SectionBlock label="01 — Business Context" index={0}>
          <p>
            Dea Bakery built its reputation the old-fashioned way — through walk-in customers, word of mouth,
            and WhatsApp broadcasts. It worked. But as digital ordering became table stakes in the F&B space,
            the business faced a genuine gap: customers increasingly expected to discover and order products
            online, and Dea Bakery had no digital channel to meet them.
          </p>
          <p>
            The original brief was broad: <strong>build a mobile app that lets customers order bakery products.</strong>{" "}
            Simple enough on paper. But early discovery revealed a more nuanced picture — the business had two
            distinct user groups with different goals:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Customers</strong> — wanted easy access to product information, prices, and promotions
              before deciding to visit or order
            </li>
            <li>
              <strong>Business Owners</strong> — wanted a tool to build customer loyalty, move beyond
              WhatsApp broadcasts, and create a traceable digital sales channel
            </li>
          </ul>
          <p>
            This tension — between what users want now and what the business is operationally ready for —
            became the central design problem to solve.
          </p>
        </SectionBlock>

        {/* 02 — The Problem */}
        <SectionBlock label="02 — The Problem" index={1}>
          <p>
            Through analysis of common food-ordering behaviors and bakery purchasing patterns, four distinct
            friction points emerged that any effective solution needed to address:
          </p>
          <div className="space-y-3 mt-2">
            {[
              {
                title: "Product Discovery Friction",
                body: "Customers often browse without a specific item in mind. A large, unstructured catalog quickly becomes overwhelming — turning exploration into frustration.",
              },
              {
                title: "Ordering Complexity",
                body: "Long or ambiguous checkout flows create unnecessary cognitive load and raise the likelihood of abandonment at the highest-value moment in the journey.",
              },
              {
                title: "Limited Product Confidence",
                body: "Unlike a physical store, customers can't see, smell, or touch the product. The app must compensate through visual quality and information clarity.",
              },
              {
                title: "Mobile-First Expectations",
                body: "Users benchmark against GrabFood, Shopee Food, and Tokopedia. Their tolerance for friction is already calibrated by world-class apps — and there's no grace period for 'we're new'.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-4 border border-border">
                <p className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mt-2">
            <p className="font-display font-semibold text-sm text-foreground mb-1">The Design Challenge</p>
            <p className="text-sm text-muted-foreground italic">
              "How might we create a mobile bakery experience that encourages product discovery while
              allowing customers to complete purchases quickly and confidently — within real business constraints?"
            </p>
          </div>
        </SectionBlock>

        {/* 03 — Research & Discovery */}
        <SectionBlock label="03 — Research & Discovery" index={2}>
          <p>
            The research phase combined competitive benchmarking across F&B apps (GrabFood, Tokopedia,
            Kopi Kenangan), behavioral pattern analysis from published food-ordering studies, and
            stakeholder interviews with the bakery owners.
          </p>
          <p>
            The goal wasn't to generate a mountain of data — it was to identify the smallest set of insights
            that would most directly shape design decisions.
          </p>
          <ResearchInsights />
        </SectionBlock>

        {/* 04 — User Journey Map */}
        <SectionBlock label="04 — User Journey Map" index={3}>
          <p>
            Mapping the end-to-end customer journey surfaced where the current (pre-app) experience
            broke down and where the app had the highest opportunity to intervene. The journey map
            was also used to align stakeholders on what "the user experience problem" actually was —
            shifting the conversation from features to feelings.
          </p>
          <UserJourneyMap />
        </SectionBlock>

        {/* 05 — User Flow */}
        <SectionBlock label="05 — Core User Flow" index={4}>
          <p>
            Before moving to wireframes, the primary user flow was mapped to validate that the ordering
            journey could be completed in a minimal number of steps. The target was under 7 taps from
            app open to order confirmation.
          </p>
          <UserFlowDiagram />
          <p>
            This flow informed the information architecture: four primary navigation tabs (Home, Catalog,
            Cart, Account) with no deep nesting beyond two levels.
          </p>
        </SectionBlock>

        {/* 06 — Design Exploration */}
        <SectionBlock label="06 — Design Exploration" index={5}>
          <p>
            The exploration phase wasn't about generating options for options' sake. Each design decision
            was tied to a specific user behavior or business constraint — and each came with an acknowledged
            trade-off.
          </p>
          <DesignExplorationCards />
        </SectionBlock>

        {/* Scope Image */}
        <ProjectImage
          src={deaBakeryScope}
          alt="Navigation scope comparison — before and after"
          caption="Navigation shift: from 5 complex e-commerce tabs → 4 focused, loyalty-first screens aligned with operational reality"
        />

        {/* 07 — Design Principles */}
        <SectionBlock label="07 — Design Principles" index={6}>
          <p>
            Three principles were established early and used as a filter for every design decision throughout
            the project. When a new idea came up, it had to pass through all three.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Visual-First Product Discovery",
                body: "Product imagery is the primary conversion driver in food commerce. Layouts were designed to put visuals front and center — not buried below headers and filters.",
              },
              {
                num: "2",
                title: "Simplified Purchase Journey",
                body: "Every additional step has a cost. The ordering flow was designed to minimize decisions, not maximize options. Fewer taps = more completions.",
              },
              {
                num: "3",
                title: "Confidence Through Clarity",
                body: "Users should never feel uncertain about what they're buying, what it costs, or what happens next. Transparency isn't a nice-to-have — it's a conversion requirement.",
              },
            ].map((p) => (
              <div key={p.num} className="flex gap-4 bg-card rounded-xl p-5 border border-border">
                <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-display font-bold text-xs text-accent">{p.num}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground mb-1">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* Final Mockup */}
        <ProjectImage
          src={deaBakeryMockup}
          alt="Dea Bakery mobile app final design — dashboard, catalog, and order screens"
          caption="Final design — visual-first home dashboard, category-based catalog, and streamlined checkout flow"
        />

        {/* 08 — Final Solution */}
        <SectionBlock label="08 — Final Solution" index={7}>
          <p>
            The final design delivers a complete mobile ordering experience organized around four core moments
            in the customer journey:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Intuitive Product Discovery",
                desc: "Category-based browsing with a visual-first grid layout. Featured products and promotions surface on the home dashboard without requiring search.",
              },
              {
                title: "Informed Decision-Making",
                desc: "Product detail screens lead with high-quality photography, followed by descriptions, pricing, allergen info, and a sticky Add to Cart action.",
              },
              {
                title: "Streamlined Checkout",
                desc: "A 3-step checkout (Cart → Order Details → Confirmation) eliminates unnecessary friction. Guest checkout removes the account creation barrier for first-time buyers.",
              },
              {
                title: "Post-Purchase Retention Loop",
                desc: "Digital receipts confirm the order and display loyalty points earned — creating a reason to re-engage with the app after the transaction is complete.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-4 border border-border">
                <p className="font-display font-semibold text-sm text-foreground mb-1.5">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* 09 — Impact */}
        <SectionBlock label="09 — Expected Impact" index={8}>
          <p>
            This was a conceptual design initiative — the app is in pre-launch finalization. However,
            the design rationale maps directly to measurable outcomes:
          </p>
          <ImpactGrid />
        </SectionBlock>

        {/* 10 — Reflection */}
        <SectionBlock label="10 — Reflection" index={9}>
          <p>
            The biggest challenge on this project wasn't the UI — it was scope. The initial brief pushed
            toward a full e-commerce experience, but early discovery made clear the business wasn't
            operationally ready: no delivery infrastructure, no payment gateway, no capacity to manage
            digital order volumes.
          </p>
          <p>
            The temptation was to design what was asked for anyway. Instead, I worked with the PM and
            stakeholders to reframe the scope around what could deliver immediate value: a loyalty,
            information, and engagement platform — with the architecture to scale toward full e-commerce
            when the infrastructure is ready.
          </p>
          <p>
            This decision required pushing back on a brief. That's not comfortable — but it is the
            difference between shipping something useful and shipping something broken.
          </p>
          <div className="bg-card rounded-xl p-5 border border-border">
            <p className="font-display font-semibold text-sm text-foreground mb-2">Key Takeaway</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Constraint isn't the enemy of good design — it often clarifies it. Knowing when to push
              back on a brief and reframe it around what's actually buildable is a skill that sits at
              the intersection of design and product thinking. The best design I delivered on this
              project wasn't a screen — it was the scope decision.
            </p>
          </div>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectDeaBakery;
