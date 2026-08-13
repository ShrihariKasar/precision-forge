import { createFileRoute } from "@tanstack/react-router";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, PageHero } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";
import { Wrench, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/capabilities/tool-room")({
  head: () => ({
    meta: [
      { title: `Tool Room & SPRAJTECH | ${company.name}` },
      {
        name: "description",
        content:
          "Tooling support for consistent production. SPRAJTECH sister company tool room for plastic mould making, press tools, jigs, fixtures, EDM and wire-cut machining.",
      },
    ],
    links: [{ rel: "canonical", href: "/capabilities/tool-room" }],
  }),
  component: ToolRoomPage,
});

const toolRoomServices = [
  "Plastic mould making",
  "Press tools",
  "Jigs and fixtures",
  "EDM jobs",
  "Wire-cut jobs",
  "Surface grinding",
  "Lathe machining",
  "Milling",
  "Surface plate work",
  "Wire cutting",
];

function ToolRoomPage() {
  return (
    <>
      <PageHero
        eyebrow="Associated Tooling Facility"
        title="Tooling Support for Consistent Production"
        description="SPRAJTECH sister company tool room facility supporting plastic mould making, press tools, jigs, fixtures and associated machining activities."
        image={shopFloorImg}
      />

      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="label-xs text-accent">SISTER COMPANY FACILITY</span>
              <h2 className="mt-2 text-3xl font-medium text-foreground">
                In-House Tooling & Die Maintenance (SPRAJTECH)
              </h2>
            </Reveal>
            <Reveal delay={80} className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The company profile identifies <strong>SPRAJTECH</strong> as a sister company associated with the tool room facility.
              </p>
              <p>
                The facility supports plastic mould making, press tools, jigs, fixtures and associated machining activities, ensuring rapid tool repairs, mould modification, core maintenance and zero-downtime production runs.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="label-xs text-muted-foreground uppercase mb-4">Tool Room Machining Capabilities</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {toolRoomServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm">
                    <CheckCircle2 className="size-4 text-accent shrink-0" />
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} variant="clip" className="overflow-hidden rounded-lg border border-border lg:col-span-5">
            <img
              src={shopFloorImg}
              alt="Tool Room Machinery"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
