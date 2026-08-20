import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name || "Product"} | ${company.name}` },
        {
          name: "description",
          content: `${p?.name} — ${p?.description} Manufactured by Sanchit Polymer Industries Pvt. Ltd.`,
        },
      ],
      links: [{ rel: "canonical", href: `/products/${p?.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* HEADER BAR */}
      <div className="border-b border-border bg-surface pt-32 pb-8">
        <div className="container-x">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 label-xs text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Products
          </Link>
        </div>
      </div>

      {/* MAIN DETAIL */}
      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* IMAGE */}
          <Reveal variant="clip" className="overflow-hidden rounded-lg border border-border lg:col-span-6">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>

          {/* DETAILS */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="label-xs text-accent uppercase">{product.category}</span>
              <h1 className="mt-2 text-3xl font-medium md:text-4xl text-foreground">{product.name}</h1>
            </div>

            <div className="rounded-lg border border-border bg-surface p-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Application:</span>
                <span className="font-medium text-foreground">{product.application}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Component Type:</span>
                <span className="font-medium text-foreground">{product.componentType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Manufacturer:</span>
                <span className="font-medium text-foreground">{company.name}</span>
              </div>
            </div>

            <div>
              <h3 className="label-xs text-muted-foreground uppercase mb-2">Description</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{product.description}</p>
            </div>

            {product.materials && product.materials.length > 0 && (
              <div>
                <h3 className="label-xs text-muted-foreground uppercase mb-3">Compatible Polymers</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat) => (
                    <span key={mat} className="rounded bg-surface px-3 py-1.5 text-xs font-mono border border-border">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="label-xs text-muted-foreground uppercase mb-3">Key Attributes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="size-4 text-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 flex flex-wrap gap-4">
              <ActionLink to="/contact">
                CONTACT US
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="surface-light border-t border-border py-16">
          <div className="container-x">
            <h2 className="text-2xl font-medium mb-8">Related Components</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
