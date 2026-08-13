import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import cnc from "@/assets/prod-cnc.jpg";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { capabilities } from "@/data/capabilities";
import { ActionButton, Breadcrumb, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Field, FormSuccess, inputClass } from "@/components/site/form";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: `Request a Quote — RFQ | ${company.name}` },
      {
        name: "description",
        content:
          "Submit a request for quotation with drawings, material, quantity and delivery requirements for sheet metal and fabricated components.",
      },
      { property: "og:title", content: `Request a Quote | ${company.name}` },
      { property: "og:description", content: "Send your drawings and requirements for a quotation." },
      { property: "og:url", content: "/request-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  };

  return (
    <>
      <PageHero
        eyebrow="RFQ"
        title="Request a quote"
        description="Share the component details below. Drawings and CAD files help us respond faster and with a firmer price."
        image={cnc}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Request a quote" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <h2 className="label-xs text-muted-foreground">What happens next</h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {[
              "We review the drawing against our process capability.",
              "Engineering flags anything that affects cost or lead time.",
              "You receive a quotation with the proposed process route.",
            ].map((t, i) => (
              <li key={t} className="flex gap-4 py-5 text-sm text-muted-foreground">
                <span className="label-xs text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email? Write to{" "}
            <a href={`mailto:${company.email}`} className="text-accent hover:underline">
              {company.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          {status === "sent" ? (
            <FormSuccess
              title="Request received"
              text="Thank you. Our team will review your requirement and get back to you with a quotation."
              onReset={() => setStatus("idle")}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company name" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Product name" name="product" className="sm:col-span-2" />

              <div>
                <label htmlFor="category" className="label-xs text-muted-foreground">
                  Product category
                </label>
                <select id="category" name="category" className={`${inputClass} mt-3 min-h-11`}>
                  {productCategories.slice(1).map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="process" className="label-xs text-muted-foreground">
                  Manufacturing process
                </label>
                <select id="process" name="process" className={`${inputClass} mt-3 min-h-11`}>
                  <option value="">Not sure — advise</option>
                  {capabilities.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <Field label="Material" name="material" placeholder="e.g. CRCA 1.6 mm" />
              <Field label="Quantity" name="quantity" placeholder="e.g. 500 per month" />
              <Field label="Required delivery date" name="delivery" type="date" />
              <Field label="Finish required" name="finish" placeholder="e.g. powder coat" />

              <Field
                label="Additional requirements"
                name="requirements"
                as="textarea"
                className="sm:col-span-2"
              />

              <div>
                <label htmlFor="drawing" className="label-xs text-muted-foreground">
                  Upload drawing (PDF/DWG)
                </label>
                <input
                  id="drawing"
                  name="drawing"
                  type="file"
                  className={`${inputClass} mt-3 file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-accent`}
                />
              </div>
              <div>
                <label htmlFor="cad" className="label-xs text-muted-foreground">
                  Upload CAD file (STEP/IGES)
                </label>
                <input
                  id="cad"
                  name="cad"
                  type="file"
                  className={`${inputClass} mt-3 file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-accent`}
                />
              </div>

              <div className="sm:col-span-2">
                <ActionButton type="submit" disabled={status === "sending"} arrow>
                  {status === "sending" ? "Submitting…" : "Submit request"}
                </ActionButton>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
