import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";
import type { Industry } from "@/data/industries";

export function ProductCard({
  product,
  className,
  ratio = "aspect-[16/11]",
  compact = false,
}: {
  product: Product;
  className?: string;
  ratio?: string;
  compact?: boolean;
}) {
  const imgSrc = product.image || (product as any).images?.[0];

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg shadow-xs",
        className,
      )}
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className={cn("relative overflow-hidden block bg-surface-2", ratio)}>
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
      </Link>

      <div className={cn("flex flex-1 flex-col", compact ? "p-3 sm:p-3.5" : "p-4 sm:p-5")}>
        <span className="text-[9px] sm:text-[10px] text-accent font-mono uppercase tracking-wider font-semibold truncate">
          {product.category}
        </span>
        <h3 className={cn("mt-1 font-bold text-foreground leading-snug line-clamp-1 group-hover:text-accent transition-colors", compact ? "text-sm" : "text-base sm:text-lg")}>
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className={cn("mt-auto flex items-center justify-between border-t border-border/50 text-[10px] sm:text-[11px] font-mono", compact ? "pt-2.5 mt-3" : "pt-3 mt-4")}>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1 text-accent hover:underline font-semibold"
          >
            {compact ? "Details" : "View Product"} <ArrowUpRight className="size-3" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium truncate"
          >
            {compact ? "Inquire →" : "Contact Us →"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function IndustryCard({ industry, className }: { industry: Industry; className?: string }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl",
        className,
      )}
    >
      {/* Dedicated Image Area (No longer a background covering the text) */}
      <Link
        to="/industries/$slug"
        params={{ slug: industry.slug }}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-surface-2"
      >
        <img
          src={industry.image}
          alt={industry.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-60" />
        <span className="absolute top-3 left-3 rounded-md bg-background/90 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-accent border border-border/60 shadow-sm backdrop-blur-md">
          {industry.name}
        </span>
      </Link>

      {/* Clean Structured Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground leading-snug">
            <Link
              to="/industries/$slug"
              params={{ slug: industry.slug }}
              className="hover:text-accent transition-colors"
            >
              {industry.name}
            </Link>
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {industry.short}
          </p>

          {/* Key Components Pills matching the text */}
          {industry.components && industry.components.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {industry.components.slice(0, 3).map((comp) => (
                <span
                  key={comp}
                  className="rounded bg-background/80 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/60"
                >
                  {comp}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
          <Link
            to="/industries/$slug"
            params={{ slug: industry.slug }}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent group-hover:underline"
          >
            Explore Sector
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[11px] font-mono text-muted-foreground/80">
            {industry.requirements?.[0] ?? "IATF Compliant"}
          </span>
        </div>
      </div>
    </div>
  );
}
