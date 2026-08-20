import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal, useInView } from "./Reveal";

/* ---------------------------------------------------------------- Buttons */

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-md px-6 min-h-11 py-3 label-xs transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-accent text-accent-foreground hover:brightness-110",
  solid: "bg-foreground text-background hover:opacity-90",
  outline: "border border-border-strong text-foreground hover:border-accent hover:text-accent",
} as const;

type ButtonVariant = keyof typeof variants;

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
  arrow = true,
}: {
  to: NonNullable<LinkProps["to"]>;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  arrow = false,
  ...rest
}: ComponentProps<"button"> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </button>
  );
}

export function TextLink({ to, children }: { to: NonNullable<LinkProps["to"]>; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 label-xs text-accent transition-colors hover:text-foreground"
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
}

/* -------------------------------------------------------- Section heading */

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal className="flex items-center gap-3 text-muted-foreground">
        <span className="label-xs text-accent uppercase tracking-wider font-mono">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.03] font-medium">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={150}>
          <p className={cn("mt-4 text-base leading-relaxed text-muted-foreground md:text-lg", align === "center" ? "mx-auto max-w-none" : "max-w-2xl")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------- Stat count */

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number | string;
  suffix?: string;
  label: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.4);
  const numericVal = typeof value === "number" ? value : parseInt(String(value).replace(/[^0-9]/g, ""), 10);
  const isNumeric = !isNaN(numericVal) && typeof value === "number";
  const display = isNumeric ? useCountUp(numericVal, visible) : value;

  return (
    <div ref={ref} className="border-t border-border pt-6">
      <div className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-none font-medium text-foreground">
        {display}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <p className="mt-4 max-w-[16rem] text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

import { useEffect, useState } from "react";

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let frame = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);
  return n;
}

/* ------------------------------------------------------------- Breadcrumb */

export function Breadcrumb({ items }: { items: { label: string; to?: NonNullable<LinkProps["to"]> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="opacity-40">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative isolate flex min-h-[58vh] items-end overflow-hidden pt-32 pb-14 md:min-h-[64vh] md:pt-40 md:pb-20">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="container-x">
        <Reveal className="label-xs text-accent">{eyebrow}</Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.98] font-medium">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
