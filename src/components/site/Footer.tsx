import { Link } from "@tanstack/react-router";
import logoHeaderImg from "@/assets/logo_header.png";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoHeaderImg}
              alt="Sanchit Polymer Industries Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-display text-base font-bold tracking-[0.16em] uppercase text-foreground">
                SANCHIT
              </span>
              <span className="font-display text-[10px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mt-1">
                POLYMER
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {company.description}
          </p>
        </div>

        <div>
          <h2 className="label-xs text-muted-foreground uppercase">Navigation</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { label: "About SPIPL", to: "/about" },
              { label: "Our Team", to: "/about/team" },
              { label: "Capabilities", to: "/capabilities" },
              { label: "Tool Room", to: "/capabilities/tool-room" },
              { label: "Infrastructure", to: "/infrastructure" },
              { label: "Machinery", to: "/infrastructure/machinery" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-xs text-muted-foreground uppercase">Products & Quality</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {productCategories.slice(1).map((c) => (
              <li key={c.slug}>
                <Link to="/products" className="text-muted-foreground transition-colors hover:text-accent">
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quality/certifications" className="text-muted-foreground transition-colors hover:text-accent">
                IATF 16949 & ISO 9001
              </Link>
            </li>
            <li>
              <Link to="/customers" className="text-muted-foreground transition-colors hover:text-accent">
                Industry Customers
              </Link>
            </li>
            <li>
              <Link to="/performance" className="text-muted-foreground transition-colors hover:text-accent">
                Performance Data
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label-xs text-muted-foreground uppercase">Contact Plant</h2>
          <address className="mt-6 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="leading-relaxed">
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city}, {company.address.state} {company.address.postal}
            </p>
            <p>
              {company.phones.map((p) => (
                <span key={p} className="block">
                  Phone:{" "}
                  <a href={`tel:${p}`} className="hover:text-accent font-mono">
                    +91 {p}
                  </a>
                </span>
              ))}
              <span className="block mt-1">
                Email:{" "}
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-4 py-6 label-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms
            </Link>
            <Link to="/request-quote" className="hover:text-accent">
              Request Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
