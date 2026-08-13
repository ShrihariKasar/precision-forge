import { createFileRoute } from "@tanstack/react-router";

import facility from "@/assets/facility.jpg";
import bending from "@/assets/cap-bending.jpg";
import { company } from "@/data/company";
import { Breadcrumb, PageHero, SectionHeading, StatCounter } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — Sheet Metal Manufacturer | ${company.name}` },
      {
        name: "description",
        content:
          "Who we are: a build-to-print sheet metal manufacturer producing components, assemblies and enclosures for industrial OEMs.",
      },
      { property: "og:title", content: `About | ${company.name}` },
      { property: "og:description", content: "A build-to-print manufacturer of precision sheet metal components." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A manufacturer, first"
        description={company.description}
        image={facility}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-medium">
            Our work begins at the drawing, not the brochure.
          </h2>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We manufacture sheet metal components and fabricated assemblies for equipment builders
              and industrial suppliers. Almost all of our work is build-to-print: the customer owns
              the design, and we own the process route, the tooling and the inspection plan that make
              it repeatable.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cutting, forming, welding, finishing and inspection all sit inside the same plant, which
              keeps handling low, shortens the feedback loop between operations, and keeps schedule
              control with us rather than a chain of subcontractors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
            {[
              [
                "Mission",
                "Manufacture components that fit and function at assembly, batch after batch, without rework at the customer's line.",
              ],
              [
                "Approach",
                "Review manufacturability before tooling is committed, so cost and lead time are settled at the start of a programme.",
              ],
              [
                "Values",
                "Straight answers on capability and schedule. If a part is outside our process window, we say so.",
              ],
            ].map(([title, text]) => (
              <Reveal key={title} className="bg-background p-8">
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal variant="clip" className="overflow-hidden rounded-md">
          <img
            src={bending}
            alt="Operator forming a sheet metal part on a press brake"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            index="03"
            eyebrow="Manufacturing philosophy"
            title="Control the process, and the part follows"
            description="Variation comes from unplanned setups and undocumented decisions. We fix the process route per component, hold tooling and fixtures, and record what was measured."
          />
        </Reveal>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading index="04" eyebrow="Why clients work with us" title="What we are held to" />
          <div className="mt-14 grid gap-px bg-border md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {company.why.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70} className="bg-background p-8">
                <span className="label-xs text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
