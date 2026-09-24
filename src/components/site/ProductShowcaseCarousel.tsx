import { useState } from "react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/site/cards";
import { ActionLink, SectionHeading } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function ProductShowcaseCarousel() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeFilter);

  // Duplicate items for continuous circular linked list train scrolling
  const displayItems = [...filteredProducts, ...filteredProducts];

  // Calculate dynamic animation duration so every category tab scrolls at the EXACT same speed
  const baseSecondsPerCard = 3.5;
  const animationDuration = `${filteredProducts.length * baseSecondsPerCard}s`;

  return (
    <section className="container-x section-y overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="02"
          eyebrow="Our Products"
          title="Automotive & Critical Injection Moulded Parts"
          description="High-reliability automotive clips, body plugs, holders, fasteners and appliance components engineered to customer drawings."
        />
      </div>

      {/* CATEGORY FILTER TABS */}
      <Reveal delay={120} className="mt-8 flex flex-wrap gap-2.5">
        {productCategories.map((cat) => (
          <button
            type="button"
            key={cat.slug}
            onClick={() => setActiveFilter(cat.slug)}
            className={cn(
              "rounded-lg border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
              activeFilter === cat.slug
                ? "border-accent bg-accent text-accent-foreground shadow-md shadow-accent/20"
                : "border-border/80 bg-background/90 text-muted-foreground hover:border-accent/50 hover:text-foreground"
            )}
          >
            {cat.label}
          </button>
        ))}
      </Reveal>

      {/* CONTINUOUS TRAIN SLIDESHOW (INFINITE CIRCULAR LINKED LIST) */}
      <div className="mt-10 relative flex w-full overflow-x-hidden">
        <div
          key={activeFilter}
          className="animate-train-marquee flex gap-6 shrink-0 py-2"
          style={{ animationDuration }}
        >
          {displayItems.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0"
            >
              <ProductCard product={product} className="h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="mt-10 flex justify-center border-t border-border/40 pt-6">
        <ActionLink to="/products" variant="outline">
          VIEW ALL PRODUCTS & CATALOGUE
        </ActionLink>
      </div>
    </section>
  );
}
