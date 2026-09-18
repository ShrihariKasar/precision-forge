import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import shopFloorMainImg from "@/assets/real/shop_floor_main.jpg";
import shopFloorSecondaryImg from "@/assets/real/shop_floor_secondary.jpg";
import machineChenHsongImg from "@/assets/real/machine_chen_hsong_250t.jpg";
import machineStm150tImg from "@/assets/real/machine_stm_150t.jpg";
import machineUnionPlasticImg from "@/assets/real/machine_union_plastic.jpg";
import machineOverheadCraneImg from "@/assets/real/machine_overhead_crane.jpg";
import qualityFirewallImg from "@/assets/real/quality_firewall_lab.jpg";
import qualitySortingImg from "@/assets/real/quality_inspection_sorting.jpg";
import toolMouldMaintenanceImg from "@/assets/real/tool_mould_maintenance.jpg";
import toolStorageRacksImg from "@/assets/real/tool_storage_racks.jpg";
import rawMaterialInventoryImg from "@/assets/real/raw_material_inventory.jpg";
import finishedGoodsRacksImg from "@/assets/real/finished_goods_racks.jpg";
import polymerSampleBoardImg from "@/assets/real/polymer_sample_board.jpg";
import plantOfficeImg from "@/assets/real/plant_office_management.jpg";
import automotiveClipsInspectionImg from "@/assets/real/automotive_clips_inspection.jpg";
import plantSubstationImg from "@/assets/real/plant_electrical_substation.jpg";

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
        src: automotiveClipsInspectionImg,
        caption: "Automotive Precision Moulded Clips & Fasteners — ITW India Production",
      },
      {
        src: machineChenHsongImg,
        caption: "Chen Hsong 250T Injection Moulding Machine Line",
      },
      {
        src: shopFloorMainImg,
        caption: "Sanchit Polymer Industries 9,000 Sq. Ft. Manufacturing Shop Floor",
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
        src: polymerSampleBoardImg,
        caption: "Engineering Polymers & Appliance Plastic Mouldings — Amber Enterprises",
      },
      {
        src: machineStm150tImg,
        caption: "STM 150T Precision Moulding Press for Appliance Components",
      },
      {
        src: qualityFirewallImg,
        caption: "In-Process QA Firewall & Dimensional Inspection Lab",
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
        src: qualitySortingImg,
        caption: "EV Interior Component Dimensional Inspection — Pinnacle Mobility (EKA)",
      },
      {
        src: toolStorageRacksImg,
        caption: "High-Capacity Mould Tooling Storage & Quick-Changeover Racks",
      },
      {
        src: heroPlantExteriorImg,
        caption: "10,000 Sq. Ft. Manufacturing Plant Exterior at Koregaon Bhima, Pune",
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
        src: qualityFirewallImg,
        caption: "Calibrated QA Inspection with Verniers & Pin Gauges — APPL Defence",
      },
      {
        src: machineUnionPlasticImg,
        caption: "Controlled Injection Moulding Press for Engineering Thermoplastics",
      },
      {
        src: plantSubstationImg,
        caption: "Dedicated High-Voltage Substation Ensuring Continuous Uninterrupted Runs",
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
        src: shopFloorSecondaryImg,
        caption: "Industrial Polymer Precision Moulding Shop Floor — Pittie Polymer",
      },
      {
        src: rawMaterialInventoryImg,
        caption: "Raw Material Polymer Granules Storage & Racking",
      },
      {
        src: toolMouldMaintenanceImg,
        caption: "Associated SPRAJTECH Tool Room Mould Maintenance Workstation",
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
        src: finishedGoodsRacksImg,
        caption: "Multi-tier Finished Goods Storage & Staging — Ankita Plast",
      },
      {
        src: machineOverheadCraneImg,
        caption: "Heavy-Duty Overhead Traveling Bridge Crane for Safe Mould Handling",
      },
      {
        src: plantOfficeImg,
        caption: "PPC & Plant Administration Office for Order Dispatch Coordination",
      },
    ],
  },
];

export function OneStopServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeSector = (sectorClients[selectedIndex] ?? sectorClients[0])!;

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
