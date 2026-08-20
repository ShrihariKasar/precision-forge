import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Factory, Award, Building2, TrendingUp, MapPin, Phone, Mail, Clock } from "lucide-react";

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
import { OneStopServicesSection } from "@/components/site/OneStopServicesSection";
import { ClientLogo } from "@/components/site/ClientLogos";

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
      <section className="relative isolate flex min-h-[82vh] flex-col justify-between overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12">
        <img
          src={shopFloorImg}
          alt="Sanchit Polymer Industries 12-press injection moulding shop floor"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="ken-burns absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/40" />

        <div className="container-x my-auto w-full pt-8 pb-12">
          <div className="max-w-3xl">
            <Reveal className="label-xs text-accent font-semibold tracking-wider">PRECISION PLASTIC INJECTION MOULDING &amp; TOOLING</Reveal>
            <Reveal delay={90}>
              <h1 className="mt-4 text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.02] font-bold text-foreground">
                Precision Injection Moulding &amp; Tooling Solutions for Industrial Leaders
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Operating 12 verified moulding presses (100T–250T) backed by dedicated tooling and QA laboratory infrastructure.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-8 flex flex-wrap gap-4">
              <ActionLink to="/contact">REQUEST QUOTE</ActionLink>
              <ActionLink to="/infrastructure/machinery" variant="outline">
                VIEW MACHINERY SPECS
              </ActionLink>
            </Reveal>
          </div>
        </div>

        {/* INLINE HORIZONTAL METRIC TICKER BAR AT BOTTOM OF HERO */}
        <div className="container-x w-full">
          <Reveal delay={340} className="rounded-xl border border-border/80 bg-background/80 px-6 py-4 backdrop-blur-xl shadow-lg">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Moulding Capacity</span>
                <span className="mt-1 text-base font-bold text-foreground">12 Presses (100T – 250T)</span>
              </div>
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:pl-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Manufacturing Space</span>
                <span className="mt-1 text-base font-bold text-foreground">9,000 Sq. Ft. Shop Floor</span>
              </div>
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:pl-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Quality Certifications</span>
                <span className="mt-1 text-base font-bold text-foreground">IATF 16949 / ISO 9001</span>
              </div>
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:pl-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Sister Tooling Unit</span>
                <span className="mt-1 text-base font-bold text-foreground">SPRAJTECH Tool Room</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. MATERIAL TICKER */}
      <MaterialTicker />

      {/* 3. ONE-STOP PRECISION INJECTION MOLD & MOLDING SERVICES */}
      <OneStopServicesSection />

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
      <section className="surface-light border-y border-border py-10 md:py-12">
        <div className="container-x">
          {/* Grid: Header & CTA on Left | Infrastructure Cards on Right */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Eyebrow, Title, Description, and CTA Button */}
            <div className="lg:col-span-6 space-y-4">
              <Reveal className="label-xs text-accent uppercase font-mono tracking-wider">
                Capabilities & Machinery
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-tight text-foreground">
                  Plastic Injection Moulding Infrastructure
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  12 verified moulding presses ranging from 100 to 250 tons, backed by dedicated tooling and QA laboratory infrastructure.
                </p>
              </Reveal>
              <Reveal delay={180} className="pt-2">
                <ActionLink to="/infrastructure/machinery">
                  VIEW COMPLETE MACHINERY LIST
                </ActionLink>
              </Reveal>
            </div>

            {/* Right Column: Injection Moulding Shop & Tooling Support Cards */}
            <div className="lg:col-span-6 space-y-4">
              <Reveal delay={120}>
                <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Factory className="size-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Injection Moulding Shop</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Operating 12 verified moulding presses from TUP Taiwan, L&T Demag, STM, ESM, and CHENDE across 100T to 250T tonnage capacity.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["250T TUP Taiwan", "200T L&T Demag", "180T STM", "160T TUP", "150T STM", "120T ESM", "100T TUP"].map((m) => (
                      <span key={m} className="rounded bg-surface px-2 py-0.5 text-[11px] font-sans font-medium text-foreground border border-border">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Cpu className="size-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Tooling Support (SPRAJTECH)</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Integrated tooling room support through sister company SPRAJTECH for plastic moulds, press tools, jigs, fixtures, EDM and wire cutting.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUALITY & CERTIFICATIONS */}
      <section className="container-x py-10 md:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
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
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                    </div>
                    <span className="rounded bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      Verified
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{cert.scope}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
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
                  <span className="label-xs w-8 text-accent font-semibold">0{i + 1}</span>
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

      {/* 7. CUSTOMERS SECTION */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Industry Customers"
          title="Trusted by Leading Industrial Clients"
          description="Sanchit Polymer Industries is a trusted component supplier to automotive OEMs, appliance manufacturers and defence contractors."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {customerList.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 70}
              className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-surface/90 p-6 shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="label-xs text-accent">{c.category}</span>
                  <div className="flex h-9 max-w-[125px] shrink-0 items-center justify-center rounded-md bg-white/95 px-2.5 py-1 shadow-sm border border-slate-200/90 group-hover:border-accent/50 transition-colors">
                    <ClientLogo id={c.id} className="h-6 max-h-7 w-auto object-contain" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {c.name}
                </h3>
              </div>
            </Reveal>
          ))}
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
    </>
  );
}
