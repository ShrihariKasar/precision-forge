import { createFileRoute } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";

import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { company } from "@/data/company";
import { PageHero } from "@/components/site/ui";
import { Lightbox } from "@/components/site/Lightbox";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Product & Plant Gallery | ${company.name}` },
      {
        name: "description",
        content:
          "Photographs of SPIPL's plastic injection moulding shop floor, automotive components, AC fan parts, defence radomes, and quality laboratory.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<string>("ALL");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "ALL" ? galleryItems : galleryItems.filter((i) => i.category === category)),
    [category],
  );

  const lightboxImages = useMemo(
    () => items.map((i) => ({ src: i.image, alt: `${i.title} - ${i.caption}` })),
    [items]
  );

  return (
    <>
      <PageHero
        eyebrow="SPIPL Gallery"
        title="Product & Facility Gallery"
        description="Automotive clips, appliance fan components, defence radomes, and injection moulding shop floor photographs."
        image={heroPlantExteriorImg}
      />

      <section className="container-x pt-14 pb-20 md:pt-20 md:pb-28">
        {/* CATEGORY FILTER BUTTONS WITH COUNTS */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => {
              const count = c === "ALL" ? galleryItems.length : galleryItems.filter((i) => i.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    "min-h-11 rounded-lg border px-4 sm:px-5 label-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2",
                    category === c
                      ? "border-accent bg-accent text-accent-foreground shadow-md shadow-accent/20"
                      : "border-border/80 bg-surface/80 text-muted-foreground hover:border-accent/50 hover:text-foreground",
                  )}
                >
                  <span>{c}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                      category === c ? "bg-accent-foreground/20 text-accent-foreground" : "bg-background/80 text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-muted-foreground">
            {items.length} {items.length === 1 ? "Photograph" : "Photographs"} • Click to Expand
          </span>
        </div>

        {/* PROPERLY ALIGNED UNIFORM GRID (ZERO HOLES, BALANCED ROWS) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-surface text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl cursor-pointer"
            >
              {/* Photo Area with Uniform Aspect Ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-2">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-60" />

                {/* Top Expand Indicator */}
                <div className="absolute right-3 top-3 pointer-events-none">
                  <span className="grid size-7 place-items-center rounded-md bg-background/90 text-foreground border border-border/60 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                    <Expand className="size-3.5 text-accent" />
                  </span>
                </div>
              </div>

              {/* Card Caption Footer */}
              <div className="flex flex-1 flex-col justify-between p-4 bg-surface border-t border-border/60">
                <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <CTASection />

      <Lightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </>
  );
}
