import { createFileRoute, Link } from "@tanstack/react-router";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { certifications } from "@/data/certifications";
import { Reveal, useInView } from "@/components/site/Reveal";
import { ActionLink, PageHero, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";
import { Award, CheckCircle2 } from "lucide-react";

const stages = [
  { title: "RAW MATERIAL", text: "Polymer verification, drying, and batch specification checks." },
  { title: "MOULDING", text: "Automated injection moulding with controlled tonnage and shot weight." },
  { title: "IN-PROCESS INSPECTION", text: "Periodic dimensional checks and weight checks during production." },
  { title: "FINAL INSPECTION", text: "Quality firewall dimensional check against customer drawing tolerances." },
  { title: "PACKAGING", text: "Protective packing to prevent surface scratches and transit damage." },
  { title: "DELIVERY", text: "Scheduled dispatch with inspection documentation to customer plant." },
];

const qaEquipment = [
  {
    name: "DIGITAL VERNIER",
    desc: "Dimensional measurement equipment.",
  },
  {
    name: "PIN GAUGE",
    desc: "Hole and bore dimensional measurement equipment.",
  },
  {
    name: "MICRO METER",
    desc: "Precision thickness and wall measurement equipment.",
  },
  {
    name: "DIGITAL LUX MEASURING INSTRUMENT",
    desc: "Make: Mextech. Visual inspection lighting intensity verification.",
  },
];

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: `Quality at Every Stage | ${company.name}` },
      {
        name: "description",
        content:
          "Quality assurance, dimensional inspection, QA lab equipment, IATF 16949:2016 and ISO 9001:2015 certification alignment at Sanchit Polymer Industries.",
      },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Control"
        title="Quality at Every Stage"
        description="Comprehensive quality assurance, dimensional inspection, and process control across all injection moulding operations."
        image={shopFloorImg}
      />

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Quality Commitment"
          title="Zero-Defect Focus & Inspection Protocols"
          description="In-process checks, first-off approval and quality firewall verification before dispatch."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Quality Assurance", desc: "Adherence to documented procedures and quality systems." },
            { title: "Dimensional Inspection", desc: "Calibrated measurement against drawing specifications." },
            { title: "In-Process Checks", desc: "Regular interval checking of molded component parameters." },
            { title: "Final Inspection Firewall", desc: "100% firewall verification before packaging release." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="rounded-lg border border-border bg-surface p-6">
              <span className="label-xs text-accent font-mono">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QA EQUIPMENT */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading
            index="02"
            eyebrow="QA Laboratory Equipment"
            title="Precision Measuring Instruments"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qaEquipment.map((eq) => (
              <Reveal key={eq.name} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-mono text-sm font-semibold text-accent">{eq.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{eq.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAGE PROCESS TIMELINE */}
      <section className="container-x section-y">
        <SectionHeading index="03" eyebrow="Stage Process" title="Quality Timeline from Material to Delivery" />
        <QualityTimeline />
      </section>

      {/* CERTIFICATIONS LINK */}
      <section className="surface-light border-t border-border py-16">
        <div className="container-x text-center max-w-3xl mx-auto space-y-6">
          <Award className="size-12 text-accent mx-auto" />
          <h2 className="text-3xl font-medium">IATF 16949:2016 & ISO 9001:2015 Certifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            View certificate numbers, issue dates, expiry details, and verified scope for SPIPL's automotive and quality management systems.
          </p>
          <div>
            <ActionLink to="/quality/certifications">
              VIEW QUALITY CERTIFICATES →
            </ActionLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function QualityTimeline() {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="mt-14 md:mt-20">
      <div className="relative">
        <div className="absolute top-0 left-[7px] h-full w-px bg-border md:top-[7px] md:left-0 md:h-px md:w-full" />
        <div
          className={cn(
            "absolute top-0 left-[7px] w-px bg-accent transition-[height,width] duration-[1600ms] ease-out md:top-[7px] md:left-0 md:h-px",
            visible ? "h-full md:w-full" : "h-0 md:w-0",
          )}
        />
        <ol className="grid gap-10 md:grid-cols-6 md:gap-6">
          {stages.map((stage, i) => (
            <li
              key={stage.title}
              style={{ transitionDelay: `${i * 180}ms` }}
              data-visible={visible}
              className="reveal relative pl-10 md:pt-10 md:pl-0"
            >
              <span
                className={cn(
                  "absolute top-0.5 left-0 block size-[15px] rounded-full border-2 transition-colors duration-500 md:top-0",
                  visible ? "border-accent bg-accent" : "border-border bg-background",
                )}
                style={{ transitionDelay: `${i * 180}ms` }}
              />
              <span className="label-xs text-muted-foreground font-mono">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{stage.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
