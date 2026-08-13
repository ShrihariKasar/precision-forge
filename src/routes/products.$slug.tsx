import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

import { getProduct, products } from "@/data/products";
import { company } from "@/data/company";
import { ActionLink, Breadcrumb, TextLink } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/cards";
import { Lightbox } from "@/components/site/Lightbox";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — ${p.category} | ${company.name}` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: `${p.name} | ${company.name}` },
        { property: "og:description", content: p.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            category: p.category,
            description: p.shortDescription,
            brand: { "@type": "Brand", name: company.name },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gallery = product.images.map((src, i) => ({
    src,
    alt: `${product.name} — view ${i + 1}`,
  }));

  const specs = [
    ["Category", product.category],
    ["Material", product.material],
    ["Manufacturing process", product.process],
    ["Finish", product.finish],
    ["Dimensions", product.dimensions],
    ["Tolerance", product.tolerance],
    ["Customization", product.customization],
  ].filter(([, v]) => Boolean(v)) as [string, string][];

  const related = products
    .filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  return (
    <>
      <div className="container-x pt-32 md:pt-40">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.category },
            { label: product.name },
          ]}
        />
      </div>

      <section className="container-x grid gap-12 pt-10 pb-20 md:pb-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal className="group relative overflow-hidden rounded-md border border-border">
            <img
              src={gallery[active]?.src}
              alt={gallery[active]?.alt ?? product.name}
              className="aspect-4/3 w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setLightbox(active)}
              aria-label="Open image full screen"
              className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-md border border-border-strong bg-background/80 backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <Maximize2 className="size-4" />
            </button>
          </Reveal>

          {gallery.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {gallery.map((img, i) => (
                <button
                  key={img.alt}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={active === i}
                  className={cn(
                    "size-20 shrink-0 overflow-hidden rounded-md border transition-colors md:size-24",
                    active === i ? "border-accent" : "border-border hover:border-border-strong",
                  )}
                >
                  <img src={img.src} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <Reveal className="label-xs text-accent">{product.category}</Reveal>
          <Reveal delay={70}>
            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.04] font-medium">
              {product.name}
            </h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {product.description}
            </p>
          </Reveal>

          <Reveal delay={190} className="mt-10">
            <h2 className="label-xs text-muted-foreground">Applications</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240} className="mt-10">
            <h2 className="label-xs text-muted-foreground">Specification</h2>
            <dl className="mt-5 divide-y divide-border border-y border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)]">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Dimensions, tolerances and finishes are set per drawing. Share your specification for
              exact values.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/request-quote">Request a quote</ActionLink>
            <ActionLink to="/contact" variant="outline">
              Talk to engineering
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="surface-light border-y border-border">
          <div className="container-x section-y">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-2xl font-medium md:text-3xl">Related components</h2>
              <TextLink to="/products">All products</TextLink>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} className="h-full" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />

      <Lightbox images={gallery} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </>
  );
}
