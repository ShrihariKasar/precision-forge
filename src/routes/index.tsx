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
import { ProductShowcaseCarousel } from "@/components/site/ProductShowcaseCarousel";
import { CTASection } from "@/components/site/CTASection";
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
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <Reveal className="label-xs text-accent font-semibold tracking-wider">PRECISION PLASTIC INJECTION MOULDING &amp; TOOLING</Reveal>
            <Reveal delay={90}>
              <h1 className="mt-4 text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.02] font-bold text-foreground">
                Precision Injection Moulding &amp; Tooling Solutions
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg mx-auto">
                Operating 12 verified moulding presses (100T–250T) backed by dedicated tooling and QA laboratory infrastructure.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-8 flex justify-center">
              <ActionLink to="/contact">REQUEST QUOTE</ActionLink>
            </Reveal>
          </div>
        </div>

        {/* INLINE HORIZONTAL METRIC TICKER BAR AT BOTTOM OF HERO */}
        <div className="container-x w-full">
          <Reveal delay={340} className="rounded-xl border border-border/80 bg-background/80 px-6 py-4 backdrop-blur-xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center">
              <div className="flex flex-col items-center justify-center py-2 sm:py-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Moulding Capacity</span>
                <span className="mt-1 text-base font-bold text-foreground">12 Presses (100T – 250T)</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:px-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Manufacturing Space</span>
                <span className="mt-1 text-base font-bold text-foreground">9,000 Sq. Ft. Shop Floor</span>
              </div>
              <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:px-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Quality Certifications</span>
                <span className="mt-1 text-base font-bold text-foreground">IATF 16949 / ISO 9001</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. ONE-STOP PRECISION INJECTION MOLD & MOLDING SERVICES */}
      <OneStopServicesSection />

      {/* 3. INDUSTRY CUSTOMERS */}
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

      {/* 4. FEATURED PRODUCTS SHOWCASE & CAROUSEL */}
      <ProductShowcaseCarousel />

      {/* 5. QUALITY & CERTIFICATIONS */}
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
                <div key={cert.id} className="rounded-lg border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-4">
                    {cert.logo ? (
                      <img src={cert.logo} alt={`${cert.name} Logo`} className="size-12 shrink-0 object-contain drop-shadow" />
                    ) : (
                      <Award className="size-5 text-accent shrink-0" />
                    )}
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{cert.name}</h4>
                      <p className="text-xs font-mono text-accent mt-0.5">{cert.standard}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{cert.scope}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground border-t border-border/50 pt-2.5">
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
