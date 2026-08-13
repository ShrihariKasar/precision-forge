import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { capabilities } from "@/data/capabilities";
import { productCategories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center border border-accent">
              <span className="block size-2.5 bg-accent" />
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
              {company.shortName} Metalform
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {company.description}
          </p>
        </div>

        <div>
          <h2 className="label-xs text-muted-foreground">Company</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { label: "About", to: "/about" },
              { label: "Capabilities", to: "/capabilities" },
              { label: "Quality", to: "/quality" },
              { label: "Industries", to: "/industries" },
              { label: "Gallery", to: "/gallery" },
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
          <h2 className="label-xs text-muted-foreground">Products</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {productCategories.slice(1, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/products" className="text-muted-foreground transition-colors hover:text-accent">
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/capabilities" className="text-muted-foreground transition-colors hover:text-accent">
                {capabilities.length} manufacturing processes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label-xs text-muted-foreground">Contact</h2>
          <address className="mt-6 space-y-3 text-sm not-italic text-muted-foreground">
            <p>
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city}, {company.address.state} {company.address.postal}
            </p>
            <p>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {company.phone}
              </a>
              <br />
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
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
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms
            </Link>
            <Link to="/request-quote" className="hover:text-accent">
              RFQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
