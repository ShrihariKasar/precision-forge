import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Factory, Award } from "lucide-react";

import heroPlantImg from "@/assets/spipl/hero_plant.png";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import automotiveClipsImg from "@/assets/spipl/automotive_clips.png";

import { company } from "@/data/company";
import { products } from "@/data/products";
import { capabilities } from "@/data/capabilities";
import { certifications } from "@/data/certifications";
import { customerList } from "@/data/customers";
import { galleryItems } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, SectionHeading, StatCounter, TextLink } from "@/components/site/ui";
import { ProductCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { MaterialTicker } from "@/components/site/MaterialTicker";
import { DeliveryChart } from "@/components/site/DeliveryChart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} | Plastic Injection Moulding & Automotive Components` },
      {
        name: "description",
        content: company.description,
      },
      { property: "og:title", content: `${company.name} | Plastic Injection Moulding & Automotive Components` },
      {
        property: "og:description",
        content: company.description,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featuredAutomotive = products.filter((p) => p.categorySlug === "automotive").slice(0, 6);

  return (
    <>
      {/* 1. CINEMATIC SPIPL HERO */}
      <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden pt-32 pb-14 md:min-h-screen md:pb-20">
        <img
          src={heroPlantImg}
          alt="Sanchit Polymer Industries plastic injection moulding manufacturing plant"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="ken-burns absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-background/85 to-background/30" />

        <div className="container-x w-full">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Reveal className="label-xs text-accent">PRECISION PLASTIC INJECTION MOULDING</Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.96] font-medium">
                  Precision Plastic Injection Moulding for Automotive & Critical Applications
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {company.description}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground/90">
                  {company.secondaryDescription}
                </p>
              </Reveal>
              <Reveal delay={260} className="mt-10 flex flex-wrap gap-4">
                <ActionLink to="/products">EXPLORE PRODUCTS</ActionLink>
                <ActionLink to="/request-quote" variant="outline">
                  REQUEST AN ENQUIRY
                </ActionLink>
                <ActionLink to="/infrastructure" variant="outline" className="hidden sm:inline-flex">
                  OUR MANUFACTURING FACILITY
                </ActionLink>
              </Reveal>
            </div>

            <Reveal
              delay={360}
              className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3 lg:w-[26rem] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            >
              {company.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl leading-none font-medium md:text-4xl text-foreground">
                    {s.value}
                  </div>
                  <p className="mt-3 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. MATERIAL TICKER */}
      <MaterialTicker />

      {/* 3. HOMEPAGE COMPANY INTRODUCTION */}
      <section className="surface-light border-b border-border">
        <div className="container-x section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal className="label-xs text-muted-foreground">
                <span className="text-accent">01</span> / Who we are
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.06] font-medium">
                  Engineering Plastic Components Built for Industry
                </h2>
              </Reveal>
              <Reveal delay={160} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Established in October 2014, Sanchit Polymer Industries Pvt. Ltd. operates in the field of plastic injection moulding for automotive and commercial applications.
                </p>
                <p>
                  The company manufactures a wide range of plastic products and engineering components, including clips, holders, plugs, assemblies and other moulded components.
                </p>
                <p>
                  SPIPL works with different grades of engineering and commodity polymers, enabling production across a broad range of component requirements.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-8">
                <TextLink to="/about">Learn more about SPIPL</TextLink>
              </Reveal>
            </div>

            <Reveal delay={180} variant="clip" className="overflow-hidden rounded-lg border border-border lg:col-span-6">
              <img
                src={shopFloorImg}
                alt="SPIPL injection moulding shop floor with automated machinery"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>

        {/* STATISTICS COUNT-UP */}
        <div className="container-x pb-20 md:pb-28">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {company.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="container-x section-y">
        <SectionHeading
          index="02"
          eyebrow="Our Products"
          title="Automotive & Critical Injection Moulded Parts"
          description="High-reliability automotive clips, body plugs, holders, fasteners and appliance components engineered to customer drawings."
        />

        <div className="mt-14 grid gap-6 md:mt-18 md:grid-cols-2 lg:grid-cols-3">
          {featuredAutomotive.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 70}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <ActionLink to="/products" variant="outline">
            VIEW ALL PRODUCTS & CATALOGUE
          </ActionLink>
        </Reveal>
      </section>

      {/* 5. MANUFACTURING CAPABILITIES & MACHINERY PREVIEW */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading
            index="03"
            eyebrow="Capabilities & Machinery"
            title="Plastic Injection Moulding Infrastructure"
            description="12 verified moulding presses ranging from 100 to 250 tons, backed by dedicated tooling and QA laboratory infrastructure."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <Factory className="size-6 text-accent" />
                  <h3 className="text-xl font-medium">Injection Moulding Shop</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Operating 12 verified moulding presses from TUP Taiwan, L&T Demag, STM, ESM, and CHENDE across 100T to 250T tonnage capacity.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["250T TUP Taiwan", "200T L&T Demag", "180T STM", "160T TUP", "150T STM", "120T ESM", "100T TUP"].map((m) => (
                    <span key={m} className="rounded bg-surface px-2.5 py-1 text-xs font-mono text-foreground border border-border">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <Cpu className="size-6 text-accent" />
                  <h3 className="text-xl font-medium">Tooling Support (SPRAJTECH)</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Integrated tooling room support through sister company SPRAJTECH for plastic moulds, press tools, jigs, fixtures, EDM and wire cutting.
                </p>
              </div>

              <Reveal delay={120}>
                <ActionLink to="/infrastructure/machinery">
                  VIEW COMPLETE MACHINERY LIST
                </ActionLink>
              </Reveal>
            </div>

            <Reveal delay={140} variant="clip" className="overflow-hidden rounded-lg border border-border lg:col-span-6">
              <img
                src={shopFloorImg}
                alt="SPIPL Moulding Machinery and Shop Floor"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. QUALITY & CERTIFICATIONS */}
      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="04"
              eyebrow="Quality Assurance"
              title="IATF 16949 & ISO 9001 Standards"
              description="Stringent quality management systems, dimensional measurement lab with digital verniers, micrometers, pin gauges and lux meters."
            />

            <div className="mt-8 space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="rounded-lg border border-border bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="size-5 text-accent" />
                      <h4 className="font-display text-lg font-semibold">{cert.name}</h4>
                    </div>
                    <span className="rounded bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      Verified
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{cert.scope}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
                    <span>Cert: {cert.certificateNumber}</span>
                    {cert.iatfNumber && <span>IATF: {cert.iatfNumber}</span>}
                    <span>Exp: {cert.expiryDate}</span>
                  </div>
                </div>
              ))}
            </div>

            <Reveal delay={200} className="mt-8">
              <ActionLink to="/quality/certifications" variant="outline">
                VIEW QUALITY CERTIFICATES
              </ActionLink>
            </Reveal>
          </div>

          <div className="space-y-6">
            <h3 className="label-xs text-muted-foreground uppercase">Production Quality Firewall Process</h3>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {company.process.map((stage, i) => (
                <div key={stage.title} className="flex items-center gap-5 bg-background px-6 py-4">
                  <span className="label-xs w-8 text-accent font-mono">0{i + 1}</span>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{stage.title}</h4>
                    <p className="text-xs text-muted-foreground">{stage.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DELIVERY PERFORMANCE CHART (REVENUE REMOVED) */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y space-y-12">
          <SectionHeading
            index="05"
            eyebrow="Performance Track Record"
            title="Customer Delivery Performance"
            description="Verified customer delivery fulfillment metrics recorded across 2024 and 2025."
          />

          <div className="max-w-4xl mx-auto">
            <Reveal>
              <DeliveryChart />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMERS SECTION */}
      <section className="container-x section-y">
        <SectionHeading
          index="06"
          eyebrow="Industry Customers"
          title="Trusted by Leading Industrial Clients"
          description="Sanchit Polymer Industries is a trusted component supplier to automotive OEMs, appliance manufacturers and defence contractors."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {customerList.map((c) => (
            <Reveal key={c.id} className="rounded-lg border border-border bg-surface p-6 hover:border-accent/50 transition-colors">
              <span className="label-xs text-accent">{c.category}</span>
              <h3 className="mt-3 text-lg font-medium text-foreground">{c.name}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9. MISSION & VISION STRATEGIC PILLARS */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading
            index="07"
            eyebrow="Vision & Strategic Direction"
            title="Strategic Pillars for World-Class Manufacturing"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.strategicPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="rounded-lg border border-border bg-background p-6">
                <span className="label-xs text-accent font-mono">PILLAR 0{i + 1}</span>
                <h3 className="mt-4 text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRODUCT GALLERY PREVIEW */}
      <section className="container-x section-y">
        <SectionHeading index="08" eyebrow="Gallery Preview" title="Inside SPIPL Facilities & Products" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryItems.slice(0, 4).map((item, i) => (
            <Reveal key={item.id} delay={i * 70} className="overflow-hidden rounded-md border border-border">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10 text-center">
          <TextLink to="/gallery">View full product & plant gallery →</TextLink>
        </Reveal>
      </section>

      {/* 11. CTA SECTION */}
      <CTASection />

      {/* 12. CONTACT PREVIEW */}
      <section className="container-x section-y grid gap-10 md:grid-cols-3">
        <Reveal>
          <h2 className="label-xs text-muted-foreground">Plant Address</h2>
          <address className="mt-6 text-base leading-relaxed not-italic text-muted-foreground">
            {company.address.formatted}
          </address>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="label-xs text-muted-foreground">Sales & Component Enquiries</h2>
          <p className="mt-6 text-base text-muted-foreground">
            {company.phones.map((p) => (
              <span key={p} className="block">
                <a href={`tel:${p}`} className="hover:text-accent font-mono">
                  +91 {p}
                </a>
              </span>
            ))}
            <a href={`mailto:${company.email}`} className="mt-2 block hover:text-accent">
              {company.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="label-xs text-muted-foreground">Operating Hours</h2>
          <p className="mt-6 text-base text-muted-foreground">{company.hours}</p>
        </Reveal>
      </section>
    </>
  );
}
