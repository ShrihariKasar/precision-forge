import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { capabilities } from "@/data/capabilities";
import { company } from "@/data/company";
import { PageHero, SectionHeading, ActionLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: `Manufacturing Capabilities | ${company.name}` },
      {
        name: "description",
        content:
          "Plastic injection moulding, automotive parts production, tooling support through SPRAJTECH, and quality inspection.",
      },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Capabilities"
        title="Manufacturing Capabilities"
        description="SPIPL's primary manufacturing capability is plastic injection moulding for automotive, commercial and other critical applications across multiple machine tonnage ranges."
        image={shopFloorImg}
      />

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Primary Capability"
          title="Plastic Injection Moulding"
          description="Sanchit Polymer Industries operates a 9,000 sq. ft. shop floor running 12 verified moulding presses ranging from 100 to 250 tons."
        />

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {capabilities.map((cap, i) => (
            <div key={cap.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
              <Reveal
                variant="up"
                className={`group relative overflow-hidden rounded-xl border border-border/80 bg-surface shadow-lg ${
                  i % 2 ? "md:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                  <img
                    src={cap.image}
                    alt={cap.name}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 rounded bg-background/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-accent uppercase backdrop-blur-sm">
                    {cap.category}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100} className={i % 2 ? "md:order-1" : ""}>
                <p className="label-xs text-muted-foreground">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> /{" "}
                  {String(capabilities.length).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-3xl leading-tight font-medium md:text-4xl">{cap.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{cap.summary}</p>
                
                <div className="mt-6">
                  <h3 className="label-xs text-muted-foreground uppercase mb-3">Highlights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {cap.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to="/capabilities/$slug"
                    params={{ slug: cap.slug }}
                    className="group inline-flex items-center gap-2 label-xs text-accent"
                  >
                    Capability details
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* TOOL ROOM LINK CARD */}
      <section className="surface-light border-y border-border py-16">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="label-xs text-accent">TOOLING INFRASTRUCTURE</span>
          <h2 className="mt-3 text-3xl font-medium">Associated Tool Room Facility (SPRAJTECH)</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Plastic mould making, press tools, jigs, fixtures, EDM jobs, wire-cut jobs, surface grinding and lathe turning performed under sister company SPRAJTECH.
          </p>
          <div className="mt-8">
            <ActionLink to="/capabilities/tool-room">
              EXPLORE TOOL ROOM CAPABILITIES →
            </ActionLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
