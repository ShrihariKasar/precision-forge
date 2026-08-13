import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero-factory.jpg";
import facility from "@/assets/facility.jpg";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { capabilities } from "@/data/capabilities";
import { industries } from "@/data/industries";
import { galleryItems } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, SectionHeading, StatCounter, TextLink } from "@/components/site/ui";
import { IndustryCard, ProductCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} — Precision Sheet Metal Manufacturing` },
      {
        name: "description",
        content:
          "Precision sheet metal components, fabricated assemblies and industrial enclosures manufactured to customer drawings for automotive, electrical and industrial OEMs.",
      },
      { property: "og:title", content: `${company.name} — Precision Sheet Metal Manufacturing` },
      {
        property: "og:description",
        content:
          "Build-to-print sheet metal components, welded assemblies and enclosures for industrial OEMs.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 5);

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden pt-32 pb-14 md:min-h-screen md:pb-20">
        <img
          src={heroImage}
          alt="Sheet metal production floor with press brake and laser cutting machines"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="ken-burns absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-background/80 to-background/25" />

        <div className="container-x w-full">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Reveal className="label-xs text-accent">Precision engineering</Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,7.4vw,6.5rem)] leading-[0.95] font-medium">
                  Engineered for precision.
                  <br />
                  <span className="text-muted-foreground">Built for performance.</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Sheet metal components, welded assemblies and enclosures manufactured to customer
                  drawings — cut, formed, finished and inspected in house.
                </p>
              </Reveal>
              <Reveal delay={260} className="mt-10 flex flex-wrap gap-4">
                <ActionLink to="/products">Explore products</ActionLink>
                <ActionLink to="/request-quote" variant="outline">
                  Request a quote
                </ActionLink>
              </Reveal>
            </div>

            <Reveal
              delay={360}
              className="grid grid-cols-3 gap-6 border-t border-border pt-6 lg:w-[26rem] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            >
              {company.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl leading-none font-medium md:text-4xl">
                    {s.value}
                    <span className="text-accent">{s.suffix}</span>
                  </div>
                  <p className="mt-3 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- Introduction */}
      <section className="surface-light">
        <div className="container-x section-y">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="label-xs text-muted-foreground lg:col-span-3">
              <span className="text-accent">01</span> / Who we are
            </Reveal>
            <div className="lg:col-span-9">
              <Reveal>
                <h2 className="text-[clamp(1.9rem,4.4vw,3.5rem)] leading-[1.06] font-medium">
                  Precision manufacturing for industries that cannot compromise on fit, finish or
                  repeatability.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  We work build-to-print. Drawings are reviewed for manufacturability before tooling
                  is committed, process routes are fixed per component, and every batch is inspected
                  against the released revision.
                </p>
              </Reveal>
              <Reveal delay={200} className="mt-10">
                <TextLink to="/capabilities">Explore our capabilities</TextLink>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="container-x pb-20 md:pb-28">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- Featured products */}
      <section className="container-x section-y">
        <SectionHeading
          index="02"
          eyebrow="Our products"
          title="Components engineered for demanding applications"
          description="Precision-manufactured parts produced to customer specifications across sheet metal, stamping, machining and assembly."
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-6">
          {featured.map((product, i) => (
            <Reveal
              key={product.id}
              delay={(i % 3) * 80}
              className={i < 2 ? "md:col-span-3" : i === 4 ? "md:col-span-6" : "md:col-span-3 lg:col-span-2"}
            >
              <ProductCard
                product={product}
                className="h-full"
                ratio={i === 4 ? "aspect-[16/7]" : i < 2 ? "aspect-[4/3]" : "aspect-[5/4]"}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <ActionLink to="/products" variant="outline">
            View all products
          </ActionLink>
        </Reveal>
      </section>

      {/* --------------------------------------------------- Capabilities */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading
            index="03"
            eyebrow="Manufacturing capabilities"
            title="Processes held in house, from blank to finished part"
          />

          <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
            {capabilities.slice(0, 4).map((cap, i) => (
              <div
                key={cap.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
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
                    <span className="text-accent">0{i + 1}</span> / {String(capabilities.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-3xl leading-tight font-medium md:text-4xl">{cap.name}</h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {cap.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/capabilities/$slug"
                      params={{ slug: cap.slug }}
                      className="group inline-flex items-center gap-2 label-xs text-accent"
                    >
                      Process detail
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Industries */}
      <section className="container-x section-y">
        <SectionHeading
          index="04"
          eyebrow="Industries served"
          title="Where our components are used"
        />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 80}>
              <IndustryCard industry={ind} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- Facility */}
      <section className="relative isolate overflow-hidden border-y border-border">
        <img
          src={facility}
          alt="Manufacturing facility bay with overhead crane"
          loading="lazy"
          className="absolute inset-0 -z-20 size-full scale-105 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/78" />
        <div className="container-x section-y">
          <Reveal className="label-xs text-accent">Our facility</Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[1.02] font-medium">
              Built for precision. Designed for scale.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cutting, forming, welding, finishing and inspection operate under one roof, which keeps
              handling low and control over the process route with us.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Cutting & forming", "Fiber laser and CNC press brake bays"],
              ["Welding", "Fixture-based MIG and spot welding"],
              ["Finishing", "Pre-treatment and powder coating line"],
              ["Inspection", "Dedicated measurement and records area"],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 70} className="border-t border-border pt-5">
                <h3 className="text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Process */}
      <section className="container-x section-y">
        <SectionHeading index="05" eyebrow="How we work" title="From requirement to delivery" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:mt-20 md:grid-cols-3 lg:grid-cols-6">
          {company.process.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 60}
              className="bg-background p-6 transition-colors duration-500 hover:bg-surface"
            >
              <span className="label-xs text-accent">{step.step}</span>
              <h3 className="mt-5 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- Quality */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="06"
              eyebrow="Quality commitment"
              title="Measured, recorded, released"
              description="Inspection is planned with the process route, not added at the end. First-off approval, in-process checks and final inspection are carried out against the released drawing revision."
            />
            <Reveal delay={200} className="mt-10">
              <ActionLink to="/quality" variant="outline">
                Quality process
              </ActionLink>
            </Reveal>
          </div>
          <Reveal delay={100} className="grid gap-px self-start bg-border">
            {[
              "Raw material",
              "Manufacturing",
              "In-process inspection",
              "Final inspection",
              "Packaging",
              "Delivery",
            ].map((stage, i) => (
              <div key={stage} className="flex items-center gap-5 bg-background px-6 py-5">
                <span className="label-xs w-8 text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium">{stage}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------- Gallery strip */}
      <section className="container-x section-y">
        <SectionHeading index="07" eyebrow="Gallery" title="Inside the plant" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
          {galleryItems.slice(0, 4).map((item, i) => (
            <Reveal key={item.alt} delay={i * 70} className="overflow-hidden rounded-md">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <TextLink to="/gallery">View full gallery</TextLink>
        </Reveal>
      </section>

      {/* ----------------------------------------------------- Why choose us */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading index="08" eyebrow="Why clients work with us" title="Engineered, not decorated" />
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

      {/* ------------------------------------------------- Contact preview */}
      <section className="container-x section-y grid gap-10 md:grid-cols-3">
        <Reveal>
          <h2 className="label-xs text-muted-foreground">Plant & office</h2>
          <address className="mt-6 text-base leading-relaxed not-italic text-muted-foreground">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.city}, {company.address.state}
          </address>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="label-xs text-muted-foreground">Sales enquiries</h2>
          <p className="mt-6 text-base text-muted-foreground">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-accent">
              {company.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="label-xs text-muted-foreground">Working hours</h2>
          <p className="mt-6 text-base text-muted-foreground">{company.hours}</p>
        </Reveal>
      </section>
    </>
  );
}
