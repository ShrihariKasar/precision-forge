import { createFileRoute } from "@tanstack/react-router";

import automotive from "@/assets/ind-automotive.jpg";
import { industries } from "@/data/industries";
import { company } from "@/data/company";
import { Breadcrumb, PageHero, SectionHeading } from "@/components/site/ui";
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
          "Sheet metal components supplied to automotive, electrical, renewable energy, data centre, industrial equipment and infrastructure customers.",
      },
      { property: "og:title", content: `Industries Served | ${company.name}` },
      {
        property: "og:description",
        content: "Components and assemblies supplied across six industrial sectors.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industries"
        description="Each sector brings its own drawing conventions, finishes and documentation requirements. We plan the process route around them."
        image={automotive}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Where we supply"
          title="Components built for the environment they operate in"
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
                <p className="label-xs text-muted-foreground">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> / {ind.name}
                </p>
                <h2 className="mt-5 text-2xl leading-tight font-medium md:text-3xl">{ind.name}</h2>
              </Reveal>
              <Reveal delay={90} className="md:col-span-8">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {ind.description}
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-xs text-muted-foreground">Typical components</h3>
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
                    <h3 className="label-xs text-muted-foreground">Requirements we plan for</h3>
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
