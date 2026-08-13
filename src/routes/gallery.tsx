import { createFileRoute } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";

import facility from "@/assets/facility.jpg";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { company } from "@/data/company";
import { Breadcrumb, PageHero } from "@/components/site/ui";
import { Lightbox } from "@/components/site/Lightbox";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Factory & Product Gallery | ${company.name}` },
      {
        name: "description",
        content:
          "Photographs of our production floor, machinery, manufactured components and inspection area.",
      },
      { property: "og:title", content: `Gallery | ${company.name}` },
      { property: "og:description", content: "Inside the plant: machinery, production and finished components." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((i) => i.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the plant"
        description="Production floor, machinery, components and inspection — photographed on site."
        image={facility}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Gallery" }]} />
        </div>
      </PageHero>

      <section className="container-x pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "min-h-11 rounded-md border px-4 label-xs transition-all duration-300",
                category === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid auto-rows-[13rem] grid-cols-2 gap-4 md:auto-rows-[15rem] md:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setLightbox(i)}
              style={{ animationDelay: `${(i % 8) * 45}ms` }}
              className={cn(
                "group relative animate-in overflow-hidden rounded-md border border-border fade-in duration-500",
                item.span === "wide" && "md:col-span-2",
                item.span === "tall" && "row-span-2",
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/55" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="label-xs text-foreground">{item.category}</span>
                <Expand className="size-4 text-accent" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <CTASection />

      <Lightbox images={items} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </>
  );
}
