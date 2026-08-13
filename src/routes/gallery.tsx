import { createFileRoute } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";

import heroPlantImg from "@/assets/spipl/hero_plant.png";
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
        image={heroPlantImg}
      />

      <section className="container-x pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "min-h-11 rounded-md border px-5 label-xs transition-all duration-300 cursor-pointer",
                category === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid auto-rows-[14rem] grid-cols-1 sm:grid-cols-2 md:auto-rows-[16rem] md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(i)}
              className={cn(
                "group relative overflow-hidden rounded-md border border-border bg-surface text-left cursor-pointer",
                item.aspect === "wide" && "sm:col-span-2",
                item.aspect === "portrait" && "row-span-2",
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/60" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div>
                  <span className="label-xs text-accent font-mono">{item.category}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-1">{item.title}</h3>
                </div>
                <Expand className="size-5 text-accent shrink-0" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <CTASection />

      <Lightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </>
  );
}
