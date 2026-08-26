import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { company } from "@/data/company";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: `Products Catalogue | ${company.name}` },
      {
        name: "description",
        content:
          "Browse SPIPL's complete plastic injection moulding product range across automotive critical parts, appliance components and defence applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeFilter);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 border-b border-border bg-surface">
        <div className="container-x">
          <Reveal className="label-xs text-accent">PRODUCT CATALOGUE</Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-medium">
              Precision Moulded Components
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Automotive clips, body plugs, holders, appliance fan components, and defence critical parts manufactured to drawing specifications.
            </p>
          </Reveal>

          {/* FILTERING TABS */}
          <Reveal delay={200} className="mt-10 flex flex-wrap gap-2.5">
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
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 60}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No products found in this category.
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
