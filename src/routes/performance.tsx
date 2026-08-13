import { createFileRoute } from "@tanstack/react-router";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { DeliveryChart } from "@/components/site/DeliveryChart";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: `Delivery Performance | ${company.name}` },
      {
        name: "description",
        content:
          "Sanchit Polymer Industries customer delivery performance metrics and on-time fulfillment records.",
      },
    ],
    links: [{ rel: "canonical", href: "/performance" }],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <>
      <PageHero
        eyebrow="Fulfillment Metrics"
        title="Customer Delivery Performance"
        description="On-time delivery fulfillment records across monthly production runs."
        image={shopFloorImg}
      />

      <section className="container-x section-y max-w-5xl mx-auto space-y-12">
        <SectionHeading
          index="01"
          eyebrow="Fulfillment Metric"
          title="Customer Delivery Performance (2024 – 2025)"
          description="Monthly delivery fulfillment performance metrics recorded across 2024 and 2025."
        />

        <Reveal>
          <DeliveryChart />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
