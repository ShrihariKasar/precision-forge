import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  Cpu,
  Factory,
  Image,
  Info,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoHeaderImg from "@/assets/logo_header.png";
import { company, navLinks } from "@/data/company";
import { cn } from "@/lib/utils";

const subItemIcons: Record<string, React.ElementType> = {
  "/about": Info,
  "/capabilities": Cpu,
  "/infrastructure": Factory,
  "/quality": ShieldCheck,
  "/gallery": Image,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnterAbout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  // Check if current route is under About dropdown
  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname.startsWith("/capabilities") ||
    pathname.startsWith("/infrastructure") ||
    pathname.startsWith("/quality") ||
    pathname.startsWith("/gallery");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-lg"
          : "border-b border-border/40 bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 md:h-20">
        {/* Logo & Brand */}
        <Link to="/" className="flex shrink-0 items-center gap-3 group" aria-label={`${company.name} home`}>
          <img
            src={logoHeaderImg}
            alt="Sanchit Polymer Industries Logo"
            className="h-10 w-auto max-h-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-sans text-sm font-bold tracking-[0.08em] uppercase text-foreground sm:text-base">
              SANCHIT POLYMER
            </span>
            <span className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-accent sm:text-[10px]">
              INDUSTRIES PVT. LTD.
            </span>
          </div>
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <Link
                    to={link.to}
                    className={cn(
                      "group relative flex items-center gap-1.5 py-2 label-xs font-semibold tracking-wider text-muted-foreground transition-colors hover:text-foreground",
                      isAboutActive && "text-foreground",
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "size-3.5 text-muted-foreground transition-transform duration-200 group-hover:text-accent",
                        aboutDropdownOpen && "rotate-180 text-accent",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                        isAboutActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className="group relative py-2 label-xs font-semibold tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "!text-foreground" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden min-h-11 items-center rounded-md bg-accent px-5 label-xs font-bold uppercase tracking-wider text-accent-foreground transition-all duration-300 hover:brightness-110 shadow-md shadow-accent/20 hover:shadow-accent/40 sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-md border border-border-strong bg-surface text-foreground transition-colors hover:bg-accent/10 hover:border-accent/50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Horizontal Secondary Sub-Navbar Bar */}
      {aboutDropdownOpen && (
        <div
          className="hidden lg:block border-t border-border/60 bg-background/95 backdrop-blur-2xl shadow-xl animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={handleMouseEnterAbout}
          onMouseLeave={handleMouseLeaveAbout}
        >
          <div className="container-x flex items-center justify-center gap-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent shrink-0 border-r border-border/60 pr-4">
              ABOUT SPIPL
            </span>
            <div className="flex items-center gap-2">
              {navLinks.find((l) => l.children)?.children?.map((subItem) => {
                const IconComp = subItemIcons[subItem.to] || Info;
                const isSubActive =
                  pathname === subItem.to ||
                  (subItem.to !== "/about" && pathname.startsWith(subItem.to));

                return (
                  <Link
                    key={subItem.to}
                    to={subItem.to}
                    className={cn(
                      "group flex items-center gap-2.5 rounded-lg px-3.5 py-2 transition-all duration-200",
                      isSubActive
                        ? "bg-accent/20 text-accent font-bold border border-accent/40 shadow-sm"
                        : "text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-transparent",
                    )}
                  >
                    <div
                      className={cn(
                        "grid size-7 shrink-0 place-items-center rounded-md border transition-colors",
                        isSubActive
                          ? "border-accent/40 bg-accent/30 text-accent"
                          : "border-border/60 bg-surface text-muted-foreground group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent",
                      )}
                    >
                      <IconComp className="size-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold leading-none tracking-wide text-foreground group-hover:text-accent transition-colors">
                        {subItem.label}
                      </span>
                      {subItem.description && (
                        <span className="text-[10px] text-muted-foreground font-normal mt-1 max-w-[130px] truncate leading-none">
                          {subItem.description}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-border bg-background/98 backdrop-blur-2xl lg:hidden shadow-2xl" aria-label="Mobile">
          <div className="container-x flex flex-col py-5 space-y-2">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.to} className="border-b border-border/60 pb-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setMobileAboutExpanded((v) => !v)}
                      className="flex w-full items-center justify-between py-2 text-left label-xs font-bold tracking-wider text-foreground"
                    >
                      <span className="text-sm font-semibold">{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-muted-foreground transition-transform duration-200",
                          mobileAboutExpanded && "rotate-180 text-accent",
                        )}
                      />
                    </button>

                    {mobileAboutExpanded && (
                      <div className="mt-2 ml-2 flex flex-col space-y-1 border-l-2 border-accent/40 pl-3">
                        {link.children.map((subItem) => {
                          const IconComp = subItemIcons[subItem.to] || Info;
                          return (
                            <Link
                              key={subItem.to}
                              to={subItem.to}
                              className="flex items-center gap-3 rounded-md py-2 px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                              activeProps={{ className: "!text-accent !font-bold !bg-accent/10" }}
                            >
                              <IconComp className="size-4 shrink-0 text-accent" />
                              <span>{subItem.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="border-b border-border/60 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
                  activeProps={{ className: "!text-accent !font-bold" }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 label-xs font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-accent/20"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

