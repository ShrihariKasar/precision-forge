import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/data/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid size-8 place-items-center border border-accent">
            <span className="block size-2.5 bg-accent" />
          </span>
          <span className="font-display text-sm leading-none font-semibold tracking-[0.18em] uppercase">
            SANCHIT
            <span className="text-muted-foreground"> POLYMER</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative label-xs text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "!text-foreground" }}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/request-quote"
            className="hidden min-h-11 items-center rounded-md bg-accent px-5 label-xs text-accent-foreground transition-all duration-300 hover:brightness-110 sm:inline-flex"
          >
            Request Enquiry
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center border border-border-strong lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-border py-3 label-xs text-muted-foreground"
                activeProps={{ className: "!text-accent" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 label-xs text-accent-foreground"
            >
              Request Enquiry
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
