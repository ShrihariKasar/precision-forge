import { createFileRoute, Link } from "@tanstack/react-router";
import shopFloorImg from "@/assets/real/shop_floor_main.jpg";
import { company } from "@/data/company";
import { materialsList } from "@/data/materials";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${company.name}` },
      {
        name: "description",
        content:
          "Sanchit Polymer Industries Pvt. Ltd. was established in 2014, manufacturing engineering plastic components for automotive, commercial and critical applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-10 border-b border-border bg-surface">
        <div className="container-x">
          <Reveal className="label-xs text-accent">ABOUT SANCHIT POLYMER INDUSTRIES</Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight text-foreground">
              About Sanchit Polymer Industries
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Engineering plastic components for automotive, commercial and critical applications.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPANY HISTORY & PORTFOLIO */}
      <section className="container-x pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground">
            <Reveal>
              <h2 className="text-3xl font-medium text-foreground">
                Building Modern Manufacturing Infrastructure Since 2014
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Sanchit Polymer Industries Pvt. Ltd. was established in 2014 with a vision of creating a globally oriented organization capable of contributing to the modernization of the Indian plastic components industry.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                The company operates in injection moulding of plastic products for automobile and commercial sectors. Its product portfolio includes engineering and automotive components such as cable ties, fender application clips, carpet clips, link rod holder clips, sunroof drain tubes, acoustic hole plugs, holder trunk opener SPR and parcel shelf clips.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                SPIPL also specializes in different types of plastic moulded components according to application requirements, running a 9,000 sq. ft. built-up manufacturing facility situated on 10,000 sq. ft. of land in Koregaon Bhima, Pune.
              </p>
            </Reveal>
          </div>

          {/* Compact Stats Grid on the Right */}
          <div className="lg:col-span-5">
            <Reveal delay={140} className="grid grid-cols-2 gap-3.5 sm:gap-4 rounded-xl border border-border/80 bg-surface/90 p-4 sm:p-5 shadow-sm">
              <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-background/80 p-4 transition-all hover:border-accent/40">
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-none">
                  12<span className="text-accent font-semibold">+</span>
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground font-medium leading-snug">
                  Years of Growth
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-background/80 p-4 transition-all hover:border-accent/40">
                <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-none">
                  10,000 <span className="text-accent text-xs sm:text-sm font-semibold">Sq. Ft.</span>
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground font-medium leading-snug">
                  High Tech Facility
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-background/80 p-4 transition-all hover:border-accent/40">
                <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground leading-none">
                  IATF 16949
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground font-medium leading-snug">
                  Automotive Quality Standard
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-lg border border-border/60 bg-background/80 p-4 transition-all hover:border-accent/40">
                <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground leading-none">
                  ISO 9001
                </div>
                <p className="mt-2.5 text-xs text-muted-foreground font-medium leading-snug">
                  Quality Management System
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MATERIALS WE WORK WITH */}
      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Polymer Processing"
          title="Materials We Work With"
          description="SPIPL processes a wide spectrum of engineering thermoplastics and commodity polymers tailored for specific application demands."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {materialsList.map((m, i) => (
            <Reveal key={m.name} delay={(i % 5) * 50} className="rounded-lg border border-border bg-surface p-5 hover:border-accent/50 transition-colors">
              <span className="label-xs text-accent font-mono">{m.abbreviation}</span>
              <h3 className="mt-2 text-base font-medium text-foreground">{m.name}</h3>
              <span className="mt-2 inline-block text-xs text-muted-foreground">{m.category}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VISION & MISSION & STRATEGIC PILLARS */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading index="02" eyebrow="Strategic Direction" title="Vision & Strategic Direction" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal className="rounded-lg border border-border bg-background p-8">
              <span className="label-xs text-accent">OUR VISION</span>
              <h3 className="mt-4 text-2xl font-medium text-foreground">World-Class Solution Provider</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                "{company.vision}"
              </p>
            </Reveal>

            <Reveal delay={100} className="rounded-lg border border-border bg-background p-8">
              <span className="label-xs text-accent">OUR MISSION</span>
              <h3 className="mt-4 text-2xl font-medium text-foreground">Customer-Centric Growth</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                "{company.mission}"
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <h3 className="label-xs text-muted-foreground uppercase mb-6">Four Strategic Pillars</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {company.strategicPillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} className="rounded-lg border border-border bg-background p-6">
                  <span className="label-xs text-accent font-mono">PILLAR 0{i + 1}</span>
                  <h4 className="mt-3 text-lg font-medium text-foreground">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINK TO TEAM PAGE */}
      <section className="container-x section-y text-center">
        <Reveal>
          <span className="label-xs text-accent">ORGANIZATION & TEAM</span>
          <h2 className="mt-3 text-3xl font-medium">Meet the SPIPL Leadership & Operations Team</h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground">
            Led by Managing Director Mr. Sharad Nikam and Plant Head Mr. Vitthal Khandagale, supported by experienced functional engineers.
          </p>
          <div className="mt-8">
            <ActionLink to="/about/team">VIEW ORGANIZATION CHART →</ActionLink>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
