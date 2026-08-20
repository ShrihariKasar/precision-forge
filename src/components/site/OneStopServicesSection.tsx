import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

import heroPlantImg from "@/assets/spipl/hero_plant.png";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import automotiveClipsImg from "@/assets/spipl/automotive_clips.png";
import applianceComponentsImg from "@/assets/spipl/appliance_components.png";
import defenceComponentsImg from "@/assets/spipl/defence_components.png";
import { cn } from "@/lib/utils";
import { ClientLogo } from "./ClientLogos";

export interface SectorClient {
  id: string;
  category: string;
  clientName: string;
  shortCategory: string;
  description: string;
  highlights: string[];
  images: {
    src: string;
    caption: string;
  }[];
}

const sectorClients: SectorClient[] = [
  {
    id: "itw-india",
    category: "Automotive / OEM",
    shortCategory: "Automotive",
    clientName: "ITW India Pvt. Ltd.",
    description:
      "Precision automotive clips, body plugs, fir tree fasteners, and engine bay components manufactured to OEM specifications.",
    highlights: [
      "Custom Mold Design & DFM",
      "High-Tensile Nylon & ABS",
      "IATF 16949 Production Run",
    ],
    images: [
      {
        src: automotiveClipsImg,
        caption: "Automotive Bumper Clips & Fasteners — ITW India Production",
      },
      {
        src: shopFloorImg,
        caption: "Automated Injection Moulding Machine Line (100T – 250T)",
      },
      {
        src: heroPlantImg,
        caption: "Sanchit Polymer Industries Manufacturing Facility",
      },
    ],
  },
  {
    id: "amber-enterprises",
    category: "Appliance & Consumer",
    shortCategory: "Appliance",
    clientName: "Amber Enterprises India Ltd.",
    description:
      "Precision AC fan components, appliance housings, and electrical insulation components built for high reliability.",
    highlights: [
      "Mold Fabrication & Trial",
      "Flame Retardant Polymers",
      "Strict Tolerance Inspection",
    ],
    images: [
      {
        src: applianceComponentsImg,
        caption: "AC Fan Components & Appliance Plastic Mouldings — Amber Enterprises",
      },
      {
        src: shopFloorImg,
        caption: "In-Process QA Firewall & Dimensional Inspection",
      },
      {
        src: heroPlantImg,
        caption: "SPIPL Tool Room & Assembly Facility",
      },
    ],
  },
  {
    id: "pinnacle-mobility",
    category: "Automotive / OEM",
    shortCategory: "Automotive",
    clientName: "Pinnacle Mobility Solutions Pvt. Ltd. (EKA)",
    description:
      "Electric vehicle & commercial bus moulded components, interior trims, beige grab handles, and protective plugs.",
    highlights: [
      "Class-A Surface Finish",
      "Vibration Resistant Polymers",
      "Scheduled OEM Deliveries",
    ],
    images: [
      {
        src: automotiveClipsImg,
        caption: "EV Interior Grab Handles & Trim Plugs — Pinnacle Mobility (EKA)",
      },
      {
        src: shopFloorImg,
        caption: "Automated Injection Moulding Tonnage Allocation",
      },
      {
        src: heroPlantImg,
        caption: "9,000 Sq. Ft. Manufacturing Plant Exterior",
      },
    ],
  },
  {
    id: "appl-defence",
    category: "Defence & Telecom",
    shortCategory: "Defence",
    clientName: "APPL Defence & Telecommunications Pvt. Ltd.",
    description:
      "Ruggedized defence electronic switch housings, RF-transparent radome enclosures, and timer plugs.",
    highlights: [
      "RF-Transparent Polycarbonate",
      "Mil-Spec Resistance",
      "Precision Mold Validation",
    ],
    images: [
      {
        src: defenceComponentsImg,
        caption: "Defence Radome Housing & Switch Enclosures — APPL Defence",
      },
      {
        src: shopFloorImg,
        caption: "Calibrated QA Inspection with Verniers & Pin Gauges",
      },
      {
        src: heroPlantImg,
        caption: "SPIPL Industrial Manufacturing Facility",
      },
    ],
  },
  {
    id: "pittie-polymer",
    category: "Industrial Polymers",
    shortCategory: "Polymers",
    clientName: "Pittie Polymer Pvt. Ltd.",
    description:
      "High-performance industrial engineering polymer components, custom mouldings, and technical assemblies.",
    highlights: [
      "POM & Nylon 6/66 Moulding",
      "Tooling Cycle Optimization",
      "ISO 9001:2015 Compliance",
    ],
    images: [
      {
        src: shopFloorImg,
        caption: "Industrial Polymer Precision Moulding — Pittie Polymer",
      },
      {
        src: automotiveClipsImg,
        caption: "Engineered Plastic Assemblies & Fasteners",
      },
      {
        src: heroPlantImg,
        caption: "SPIPL Koregaon Bhima Manufacturing Facility",
      },
    ],
  },
  {
    id: "ankita-plast",
    category: "Industrial Polymers",
    shortCategory: "Polymers",
    clientName: "Ankita Plast Industries Pvt. Ltd.",
    description:
      "Custom polymer mouldings, insert moulded parts, and commercial engineering plastic products.",
    highlights: [
      "Multi-Cavity Mold Fabrication",
      "Polymer Pre-Drying & Prep",
      "Batch Quality Assurance",
    ],
    images: [
      {
        src: shopFloorImg,
        caption: "Commercial & Industrial Polymer Production — Ankita Plast",
      },
      {
        src: applianceComponentsImg,
        caption: "Custom Moulded Polymer Components & Parts",
      },
      {
        src: heroPlantImg,
        caption: "SPIPL Manufacturing & Tooling Operations",
      },
    ],
  },
];

export function OneStopServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSector = sectorClients[selectedIndex];

  // Auto slideshow advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSector.images.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [selectedIndex, isAutoPlaying, activeSector.images.length]);

  const handleSelectSector = (idx: number) => {
    setSelectedIndex(idx);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSector.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSector.images.length) % activeSector.images.length);
  };

  return (
    <section className="surface-light border-b border-border py-10 md:py-14">
      <div className="container-x">
        {/* Centered Section Header kept in one line on desktop */}
        <SectionHeading
          align="center"
          className="max-w-6xl mx-auto"
          eyebrow="ONE-STOP SERVICES & CLIENT SECTORS"
          title={
            <span className="text-[clamp(1.3rem,2.7vw,2.6rem)] font-medium tracking-tight leading-tight block whitespace-normal lg:whitespace-nowrap">
              One-Stop Precision Injection Mold & Molding Services
            </span>
          }
          description={
            <span className="block whitespace-normal lg:whitespace-nowrap text-xs sm:text-sm md:text-base">
              SPIPL provides one-stop precision injection mold and molding services from mold design, fabrication, tooling trial, validation to mass production. We serve:
            </span>
          }
        />

        {/* TOP HORIZONTAL ROW: 6 Selectable Items in one line across 6 columns */}
        <Reveal delay={180} className="mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3">
            {sectorClients.map((client, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => handleSelectSector(idx)}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-xl border p-3 text-left transition-all duration-200",
                    isSelected
                      ? "border-accent/80 bg-background shadow-lg ring-1 ring-accent/40 -translate-y-0.5"
                      : "border-border/70 bg-surface/60 hover:border-accent/40 hover:bg-background/80",
                  )}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={cn(
                        "text-[9px] font-semibold uppercase tracking-wider truncate transition-colors",
                        isSelected ? "text-accent" : "text-muted-foreground/60 group-hover:text-accent/80",
                      )}
                    >
                      {client.shortCategory}
                    </span>
                    <div className="flex h-5.5 max-w-[65px] shrink-0 items-center justify-center rounded bg-white/95 px-1.5 py-0.5 border border-slate-200/90 shadow-2xs">
                      <ClientLogo id={client.id} className="h-3.5 max-h-4 w-auto object-contain" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-xs font-bold leading-snug line-clamp-2 transition-colors",
                        isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {client.clientName}
                    </span>
                    <span className="text-[10px] text-muted-foreground/70 truncate mt-0.5">
                      {client.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* BOTTOM CONTAINER: Slideshow & All Details Overlay INSIDE the image */}
        <Reveal delay={240} className="mt-5">
          <div
            className="relative overflow-hidden rounded-2xl border border-border/80 bg-background shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Unified Slideshow Display & Overlay Container */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] min-h-[340px] md:min-h-[380px] w-full overflow-hidden bg-black/40">
              {activeSector.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.caption}
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out",
                    i === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none",
                  )}
                />
              ))}

              {/* Rich Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-95" />

              {/* Navigation Arrows */}
              <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between z-10">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="grid size-9 place-items-center rounded-full border border-white/20 bg-background/70 text-foreground backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="grid size-9 place-items-center rounded-full border border-white/20 bg-background/70 text-foreground backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* ALL Content Overlay Moved UP Inside Image Frame */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
                {/* Category Badge & Slide Dots */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="label-xs text-accent font-bold uppercase tracking-wider">
                    {activeSector.category} • {activeSector.clientName}
                  </span>

                  {/* Slide Dots */}
                  <div className="flex gap-1.5">
                    {activeSector.images.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          dotIdx === currentSlide ? "w-6 bg-accent" : "w-1.5 bg-muted-foreground/50 hover:bg-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Caption Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-snug">
                  {activeSector.images[currentSlide]?.caption}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl line-clamp-2">
                  {activeSector.description}
                </p>

                {/* Highlights & Contact CTA in 1 Row inside overlay */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/40 pt-3">
                  <div className="flex flex-wrap gap-2">
                    {activeSector.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 rounded-md border border-border/80 bg-background/80 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-accent" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-md bg-accent px-4 label-xs font-bold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:brightness-110"
                  >
                    Contact Us <ArrowRight className="size-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
