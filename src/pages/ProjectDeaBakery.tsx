import ProjectHeader from "@/components/ProjectHeader";
import MetaRow from "@/components/MetaRow";
import SectionBlock from "@/components/SectionBlock";
import ProjectImage from "@/components/ProjectImage";
import deaBakeryMockup from "@/assets/project-dea-bakery-mockup.png";
import deaBakeryScope from "@/assets/project-dea-bakery-scope.png";

const ProjectDeaBakery = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <ProjectHeader
          projectNumber="Project 01"
          title="Dea Bakery Mobile App"
          subtitle="Designing a loyalty and engagement platform for a local bakery — navigating real business constraints to deliver something genuinely usable."
          tags={["Mobile App", "UI/UX Design", "Product Thinking", "Loyalty System"]}
        />

        <MetaRow
          items={[
            { label: "Team", value: "1 Designer, 1 PM, 2 Devs, 2 Stakeholders" },
            { label: "Role", value: "UI/UX Designer" },
            { label: "Tools", value: "Figma, Jira" },
            { label: "Status", value: "In Go-Market Finalization" },
          ]}
        />

        <SectionBlock label="01 — Context" index={0}>
          <p>
            Dea Bakery is a growing local bakery aiming to expand its reach and build stronger
            connections with its customers. The initial brief was ambitious — build a full
            e-commerce mobile application where customers could browse, order, pay, and receive
            products directly through the app.
          </p>
          <p>
            The project started with a business focus rather than a user problem. Two distinct
            user groups emerged during discovery:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Customers</strong> — wanted easy access to product information and
              promotions
            </li>
            <li>
              <strong>Owners</strong> — needed a tool to strengthen customer loyalty and
              streamline communication beyond WhatsApp broadcasts
            </li>
          </ul>
        </SectionBlock>

        <SectionBlock label="02 — Friction" index={1}>
          <p>
            As the project progressed, it became clear that the original e-commerce scope was
            not feasible — at least not yet. Three critical constraints surfaced:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Delivery infrastructure was not ready</li>
            <li>Payment gateway integration required significant time and budget</li>
            <li>
              The operations team lacked the capacity to manage digital order volumes
            </li>
          </ul>
          <p>
            Proceeding with a full e-commerce flow would have risked shipping a "half-baked"
            product — broken checkout flows, no real delivery, and frustrated first-time users.
            That kind of first impression is hard to recover from.
          </p>
        </SectionBlock>

        <SectionBlock label="03 — Scope Decision" index={2}>
          <p>
            Rather than force a full e-commerce model that the business wasn't operationally
            ready for, the scope was reframed around what could actually deliver value
            immediately: a <strong>loyalty, information, and engagement platform</strong>.
          </p>
          <div className="bg-card rounded-lg p-5 space-y-4">
            <div>
              <p className="font-medium font-display text-foreground text-sm mb-2">
                ✓ Included in v1
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>→ Loyalty Points System</li>
                <li>→ Product Catalog (informative, not transactional)</li>
                <li>→ Promo & Notifications</li>
                <li>→ Digital Receipts (Struk Digital)</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <p className="font-medium font-display text-foreground text-sm mb-2">
                Postponed for later phase
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>→ Cart & Checkout</li>
                <li>→ Payment Gateway</li>
                <li>→ Order Tracking & Delivery</li>
              </ul>
            </div>
          </div>
          <p>
            This decision ensured every feature shipped was fully functional and connected
            to real operations — not a UX facade.
          </p>
        </SectionBlock>

        <ProjectImage
          src={deaBakeryScope}
          alt="Before and after navigation scope comparison for Dea Bakery"
          caption="Navigation shift: from 5 complex e-commerce tabs → 4 focused loyalty-first screens"
        />

        <SectionBlock label="04 — Design Approach" index={3}>
          <p>
            Three principles guided every design decision throughout the project:
          </p>
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Loyalty as the core loop
              </p>
              <p className="text-sm text-muted-foreground">
                Points and rewards aren't just a feature — they're the main reason to
                open the app repeatedly. The home dashboard was designed around the
                loyalty state, not product browsing.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Catalog built to inform, not to sell
              </p>
              <p className="text-sm text-muted-foreground">
                Without checkout, the catalog hierarchy was restructured to help customers
                decide what to buy before visiting the physical store — closer to a menu
                than a shop.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4">
              <p className="font-medium font-display text-foreground text-sm mb-1">
                Data integrity over feature count
              </p>
              <p className="text-sm text-muted-foreground">
                A "Order via WhatsApp" CTA was considered and rejected — it would break
                the loyalty loop (no points, no history, no digital receipt) and create
                operational burden with no traceability.
              </p>
            </div>
          </div>
        </SectionBlock>

        <ProjectImage
          src={deaBakeryMockup}
          alt="Dea Bakery mobile app screens — dashboard, catalog, and digital receipt"
          caption="Final design — Dashboard with loyalty points, product catalog, and digital receipt flow"
        />

        <SectionBlock label="05 — Key Features" index={4}>
          <p>The delivered app focused on four interconnected features:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Loyalty Points",
                desc: "The engagement engine. Customers earn points through in-store purchases, looping them back into the app ecosystem.",
              },
              {
                title: "Product Catalog",
                desc: "Browsable listings with photos, prices, and descriptions — designed to help customers plan visits, not place orders.",
              },
              {
                title: "Promo & Notifications",
                desc: "Replaces unstructured WhatsApp broadcast messages with a proper, trackable notification system.",
              },
              {
                title: "Digital Receipts",
                desc: "A paperless touchpoint that also records loyalty points earned — completing the loop from in-store purchase back to the app.",
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
            The design is complete and the product is in its final go-market finalization
            stage with the Marketing team. The delivered experience aligns with Dea Bakery's
            current operational capacity while laying a solid foundation to scale toward
            full e-commerce when the infrastructure is ready.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { metric: "4", label: "Core features shipped" },
              { metric: "0", label: "Half-built flows" },
              { metric: "Ready", label: "For e-commerce phase 2" },
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
            The biggest design challenge on this project wasn't visual — it was scope. Knowing
            when to push back on a brief and reframe it around what's actually buildable is
            a skill that sits at the intersection of design and product thinking.
          </p>
          <p>
            Shipping four solid, connected features that work exactly as described is worth
            more than shipping ten that are broken or misleading. This project reinforced
            that constraint isn't the enemy of good design — it often clarifies it.
          </p>
        </SectionBlock>
      </div>
    </div>
  );
};

export default ProjectDeaBakery;
