import { createFileRoute } from "@tanstack/react-router";
import shopFloorMainImg from "@/assets/real/shop_floor_main.jpg";
import { industries } from "@/data/industries";
import { company } from "@/data/company";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { IndustryCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: `Industries Served | ${company.name}` },
      {
        name: "description",
        content:
          "Sanchit Polymer Industries supplies precision plastic components to automotive, appliance, defence critical, commercial and engineering sectors.",
      },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Target Sectors"
        title="Industries Served"
        description="Engineering plastic components designed and manufactured for demanding automotive, appliance, defence and commercial applications."
        image={shopFloorMainImg}
      />

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Market Sectors"
          title="Components Built for Industrial Demands"
        />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 80}>
              <IndustryCard industry={ind} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y space-y-16 md:space-y-24">
          {industries.slice(0, 3).map((ind, i) => (
            <div key={ind.slug} className="grid gap-8 md:grid-cols-12 md:gap-14">
              <Reveal className="md:col-span-4">
                <p className="label-xs text-muted-foreground font-mono">
                  <span className="text-accent">0{i + 1}</span> / {ind.name}
                </p>
                <h2 className="mt-5 text-2xl leading-tight font-medium md:text-3xl">{ind.name}</h2>
              </Reveal>
              <Reveal delay={90} className="md:col-span-8">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {ind.description}
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-xs text-muted-foreground uppercase">Key Components</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {ind.components.map((c) => (
                        <li key={c} className="flex gap-3">
                          <span className="mt-2 size-1 shrink-0 bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-xs text-muted-foreground uppercase">Standards & Requirements</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {ind.requirements.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span className="mt-2 size-1 shrink-0 bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
