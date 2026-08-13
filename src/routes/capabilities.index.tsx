import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import laser from "@/assets/cap-laser.jpg";
import { capabilities } from "@/data/capabilities";
import { company } from "@/data/company";
import { Breadcrumb, PageHero, SectionHeading } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: `Manufacturing Capabilities | ${company.name}` },
      {
        name: "description",
        content:
          "Laser cutting, CNC bending, stamping, welding, surface finishing and inspection — manufacturing processes held in house for sheet metal production.",
      },
      { property: "og:title", content: `Manufacturing Capabilities | ${company.name}` },
      {
        property: "og:description",
        content: "In-house cutting, forming, welding, finishing and inspection processes.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Capabilities"
        description="Process routes are selected per component during engineering review, then held under one roof from blank to finished part."
        image={laser}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Capabilities" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Processes"
          title="Six processes, one production flow"
          description="Keeping cutting, forming, joining, finishing and inspection in house reduces handling and keeps schedule control with us."
        />

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {capabilities.map((cap, i) => (
            <div key={cap.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
              <Reveal
                variant="clip"
                className={`overflow-hidden rounded-md ${i % 2 ? "md:order-2" : ""}`}
              >
                <img
                  src={cap.image}
                  alt={cap.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={100} className={i % 2 ? "md:order-1" : ""}>
                <p className="label-xs text-muted-foreground">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> /{" "}
                  {String(capabilities.length).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-3xl leading-tight font-medium md:text-4xl">{cap.name}</h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="label-xs text-muted-foreground">Key benefits</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {cap.benefits.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 size-1 shrink-0 bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-xs text-muted-foreground">Applications</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {cap.applications.map((a) => (
                        <li key={a} className="flex gap-3">
                          <span className="mt-2 size-1 shrink-0 bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  to="/capabilities/$slug"
                  params={{ slug: cap.slug }}
                  className="group mt-8 inline-flex items-center gap-2 label-xs text-accent"
                >
                  Process detail
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
