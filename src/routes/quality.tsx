import { createFileRoute } from "@tanstack/react-router";

import qualityImage from "@/assets/cap-quality.jpg";
import { company } from "@/data/company";
import { Breadcrumb, PageHero, SectionHeading } from "@/components/site/ui";
import { Reveal, useInView } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

const stages = [
  { title: "Raw material", text: "Material verified against the specification and recorded by lot." },
  { title: "Manufacturing", text: "Job cards route the part through the planned process sequence." },
  { title: "In-process inspection", text: "Checks at defined operations before the part moves forward." },
  { title: "Final inspection", text: "Dimensional verification against the released drawing revision." },
  { title: "Packaging", text: "Parts protected against handling and transit damage." },
  { title: "Delivery", text: "Documented despatch with measurement records where required." },
];

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: `Quality Process & Inspection | ${company.name}` },
      {
        name: "description",
        content:
          "Our quality process: material verification, in-process inspection, final dimensional inspection, traceability and documented despatch records.",
      },
      { property: "og:title", content: `Quality | ${company.name}` },
      {
        property: "og:description",
        content: "Inspection planned with the process route — measured, recorded, released.",
      },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Measured, recorded, released"
        description="Quality is planned with the process route. Inspection points are defined before the first part is cut, not added after a problem appears."
        image={qualityImage}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Quality" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Quality commitment"
          title="Consistency across the batch, not just the first part"
          description="Tooling, fixturing and inspection are set per component so the last part of a batch measures like the first."
        />

        <div className="mt-14 grid gap-px bg-border md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Inspection", "First-off approval, in-process checks and final inspection."],
            ["Testing", "Functional and fit checks where the drawing calls for them."],
            ["Traceability", "Material lots and job cards retained against each batch."],
            ["Improvement", "Non-conformances reviewed and process controls updated."],
          ].map(([title, text], i) => (
            <Reveal key={title} delay={i * 70} className="bg-background p-8">
              <span className="label-xs text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading index="02" eyebrow="Control process" title="Stage by stage" />
          <QualityTimeline />
        </div>
      </section>

      <section className="container-x section-y grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-2xl font-medium md:text-3xl">Standards and certification</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Quality management follows documented internal procedures for inspection, traceability
            and non-conformance handling. Certification details are shared on request and are not
            published here until verified.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-2xl font-medium md:text-3xl">Measurement records</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Dimensional records are retained per batch and can be supplied with the consignment,
            including first article inspection reports where a customer programme requires them.
          </p>
        </Reveal>
      </section>

      <CTASection
        title="Need inspection documentation with your parts?"
        text="Tell us what records your incoming quality team requires and we will include them with the consignment."
      />
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
              <span className="label-xs text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
