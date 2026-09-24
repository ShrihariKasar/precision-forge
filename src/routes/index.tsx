import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Factory, Award, Building2, TrendingUp, MapPin, Phone, Mail, Clock } from "lucide-react";

import heroPlantImg from "@/assets/real/hero_plant_exterior.jpg";
import shopFloorImg from "@/assets/real/shop_floor_main.jpg";
import machinePressImg from "@/assets/real/machine_chen_hsong_250t.jpg";
import heroSectionHopperImg from "@/assets/images/hero section - Copy.jpeg";
import factoryBay6528Img from "@/assets/images/factory_shop_floor_main_bay_6528.jpg";

import { company } from "@/data/company";
import { products } from "@/data/products";
import { capabilities } from "@/data/capabilities";
import { galleryItems } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, SectionHeading, StatCounter, TextLink } from "@/components/site/ui";
import { ProductCard } from "@/components/site/cards";
import { ProductShowcaseCarousel } from "@/components/site/ProductShowcaseCarousel";
import { CTASection } from "@/components/site/CTASection";
import { DeliveryChart } from "@/components/site/DeliveryChart";
import { OneStopServicesSection } from "@/components/site/OneStopServicesSection";

const heroSlides = [
  {
    src: shopFloorImg,
    alt: "Sanchit Polymer Industries 12-press injection moulding shop floor",
  },
  {
    src: heroSectionHopperImg,
    alt: "Sanchit Polymer Industries automated material hopper dryers and overhead crane bay",
  },
  {
    src: factoryBay6528Img,
    alt: "Sanchit Polymer Industries factory shop floor main production bay with injection moulding machines",
  },
  {
    src: heroPlantImg,
    alt: "Sanchit Polymer Industries manufacturing plant facility entrance",
  },
  {
    src: machinePressImg,
    alt: "Chen Hsong 250T precision injection moulding press machinery",
  },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. CINEMATIC SPIPL HERO */}
      <section className="relative isolate flex min-h-[82vh] flex-col justify-between overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12">
        {/* HERO BACKGROUND SLIDESHOW */}
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1088}
            fetchPriority={index === 0 ? "high" : "low"}
            className={`ken-burns absolute inset-0 -z-20 size-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
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
          {/* Subtle slide indicator dots */}
          <div className="flex justify-center items-center gap-2 mb-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-accent"
                    : "w-2 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>

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



      {/* 4. FEATURED PRODUCTS SHOWCASE & CAROUSEL */}
      <ProductShowcaseCarousel />

      {/* 5. QUALITY & CERTIFICATION MATRIX */}
      <section className="container-x section-y">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="Verified Compliance & Standards"
            title="Quality & Certification Matrix"
            description="Accredited registrar certifications, verified scopes of registration, and quality management systems governing all manufacturing operations."
          />
          <div className="shrink-0">
            <ActionLink to="/quality/certifications" variant="outline">
              VIEW QUALITY MATRIX →
            </ActionLink>
          </div>
        </div>



        {/* QUALITY FIREWALL PROCESS & METRICS MATRIX */}
        <Reveal delay={200} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border/80 bg-surface p-5">
            <span className="label-xs text-accent font-mono">MATRIX METRIC 01</span>
            <h4 className="mt-2 text-base font-bold text-foreground">0-PPM Goal Focus</h4>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              100% firewall dimensional check against customer drawings before packaging release.
            </p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface p-5">
            <span className="label-xs text-accent font-mono">MATRIX METRIC 02</span>
            <h4 className="mt-2 text-base font-bold text-foreground">Calibrated QA Lab</h4>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Digital verniers, micrometers, pin gauges and digital lux measuring instruments.
            </p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface p-5">
            <span className="label-xs text-accent font-mono">MATRIX METRIC 03</span>
            <h4 className="mt-2 text-base font-bold text-foreground">12 Verified Presses</h4>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Operating 100T to 250T presses with controlled injection shot weight and cycle stability.
            </p>
          </div>
          <div className="rounded-xl border border-border/80 bg-surface p-5">
            <span className="label-xs text-accent font-mono">MATRIX METRIC 04</span>
            <h4 className="mt-2 text-base font-bold text-foreground">Full Batch Traceability</h4>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Raw polymer masterbatch verification, drying control and scheduled OEM dock dispatches.
            </p>
          </div>
        </Reveal>
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
