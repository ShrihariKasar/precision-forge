import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { capabilities } from "@/data/capabilities";
import { ActionButton, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Field, FormSuccess, inputClass } from "@/components/site/form";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: `Request an Enquiry | ${company.name}` },
      {
        name: "description",
        content:
          "Submit your component drawings, CAD files, material preferences and production volume for a prompt quotation from Sanchit Polymer Industries Pvt. Ltd.",
      },
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
        eyebrow="Production Enquiry & RFQ"
        title="Request an Enquiry"
        description="Share component specifications, CAD drawings and target volumes below for engineering DFM review and quotation."
        image={shopFloorImg}
      />

      <section className="container-x section-y grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <h2 className="label-xs text-muted-foreground uppercase">Our Evaluation Process</h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {[
              "Engineering DFM review of 2D/3D part geometry against tool design parameters.",
              "Polymer material selection and machine tonnage allocation (100T to 250T).",
              "Formal commercial quotation with proposed cycle times and delivery schedules.",
            ].map((t, i) => (
              <li key={t} className="flex gap-4 py-5 text-sm text-muted-foreground">
                <span className="label-xs text-accent font-mono">0{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Direct email enquiry:{" "}
            <a href={`mailto:${company.email}`} className="text-accent hover:underline font-medium">
              {company.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          {status === "sent" ? (
            <FormSuccess
              title="Enquiry Submitted Successfully"
              text="Thank you. Sanchit Polymer Industries engineering team will review your requirement and reach out shortly."
              onReset={() => setStatus("idle")}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Company Name" name="company" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Product Name" name="product" className="sm:col-span-2" required />

              <div>
                <label htmlFor="category" className="label-xs text-muted-foreground">
                  Product Category
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
                <label htmlFor="material" className="label-xs text-muted-foreground">
                  Target Material
                </label>
                <input
                  id="material"
                  name="material"
                  placeholder="e.g. ABS, POM, Nylon 66, PP"
                  className={`${inputClass} mt-3 min-h-11`}
                />
              </div>

              <Field label="Quantity" name="quantity" placeholder="e.g. 5,000 pcs / month" />
              <Field label="Required Delivery Date" name="delivery" type="date" />

              <Field
                label="Manufacturing Requirement / Specifications"
                name="manufacturingRequirement"
                as="textarea"
                className="sm:col-span-2"
                placeholder="Mention any tolerance, color matching, or insert moulding details..."
              />

              <Field
                label="Additional Requirements"
                name="additionalRequirements"
                as="textarea"
                className="sm:col-span-2"
              />

              <div>
                <label htmlFor="drawing" className="label-xs text-muted-foreground">
                  Upload Drawing (PDF/DWG)
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
                  Upload CAD File (STEP/IGES)
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
                  {status === "sending" ? "Submitting Enquiry..." : "Submit Enquiry"}
                </ActionButton>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
