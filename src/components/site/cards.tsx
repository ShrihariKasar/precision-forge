import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";
import type { Industry } from "@/data/industries";

export function ProductCard({
  product,
  className,
  ratio = "aspect-[4/3]",
}: {
  product: Product;
  className?: string;
  ratio?: string;
}) {
  const imgSrc = product.image || (product as any).images?.[0];

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 shadow-md",
        className,
      )}
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className={cn("relative overflow-hidden block", ratio)}>
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="label-xs text-accent font-mono uppercase">{product.category}</span>
        <h3 className="mt-2 text-xl leading-snug font-medium md:text-2xl text-foreground">
          <Link to="/products/$slug" params={{ slug: product.slug }} className="hover:text-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-mono">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
          >
            View Product <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function IndustryCard({ industry, className }: { industry: Industry; className?: string }) {
  return (
    <Link
      to="/industries/$slug"
      params={{ slug: industry.slug }}
      className={cn(
        "group relative isolate flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-md border border-border p-7 md:min-h-[24rem]",
        className,
      )}
    >
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/20 transition-opacity duration-500 group-hover:from-background group-hover:via-background/80" />
      <h3 className="text-2xl font-medium transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl text-foreground">
        {industry.name}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1">
        {industry.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 label-xs text-accent">
        Explore
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
}
