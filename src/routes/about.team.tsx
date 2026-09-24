import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/company";
import { OrgChart } from "@/components/site/OrgChart";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: `Our Team | ${company.name}` },
      {
        name: "description",
        content:
          "Sanchit Polymer Industries organization structure, managing director Sharad Nikam, plant head Vitthal Khandagale, department heads and engineering team.",
      },
    ],
    links: [{ rel: "canonical", href: "/about/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-10 border-b border-border bg-surface">
        <div className="container-x">
          <Reveal className="label-xs text-accent">ORGANIZATION HIERARCHY</Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-foreground">
              Our Team & Leadership
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Organization structure and functional engineering team behind SPIPL's quality plastic moulding operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pt-8 pb-16 md:pt-10 md:pb-24">
        <OrgChart />
      </section>

      <CTASection />
    </>
  );
}
