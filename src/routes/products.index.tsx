import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import sheetMetal from "@/assets/prod-sheet-metal.jpg";
import { productCategories, products } from "@/data/products";
import { company } from "@/data/company";
import { PageHero, Breadcrumb } from "@/components/site/ui";
import { ProductCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: `Products — Sheet Metal & Fabricated Components | ${company.name}` },
      {
        name: "description",
        content:
          "Browse precision sheet metal components, stamped parts, CNC machined components, enclosures and welded assemblies manufactured to customer drawings.",
      },
      { property: "og:title", content: `Products | ${company.name}` },
      {
        property: "og:description",
        content: "Precision-manufactured components across sheet metal, stamping, CNC and assembly.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = category === "all" || p.categorySlug === category;
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.applications.some((a) => a.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Products"
        description="Explore our range of precision-manufactured components. Every part shown is produced to customer drawings and specifications."
        image={sheetMetal}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
        </div>
      </PageHero>

      <section className="container-x pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-6 border-b border-border pb-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {productCategories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setCategory(c.slug)}
                aria-pressed={category === c.slug}
                className={cn(
                  "min-h-11 rounded-md border px-4 label-xs transition-all duration-300",
                  category === c.slug
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <label className="relative flex min-w-0 items-center lg:w-72">
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="h-11 w-full rounded-md border border-border bg-surface pr-3 pl-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
            />
          </label>
        </div>

        <p className="mt-6 label-xs text-muted-foreground tabular-nums">
          {String(filtered.length).padStart(2, "0")} products
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              style={{ animationDelay: `${(i % 6) * 45}ms` }}
              className="animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              <ProductCard product={p} className="h-full" />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <Reveal className="border border-border p-14 text-center">
            <p className="text-base text-muted-foreground">
              No products match this filter. Try another category or search term.
            </p>
          </Reveal>
        )}
      </section>

      <CTASection
        title="Need a component that isn't listed?"
        text="Most of our work is build-to-print. Send a drawing or sample and we will review it against our process capability."
      />
    </>
  );
}
