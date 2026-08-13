import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import enclosures from "@/assets/prod-enclosures.jpg";
import { company } from "@/data/company";
import { ActionButton, Breadcrumb, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Field, FormSuccess, inputClass } from "@/components/site/form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — Sales & Enquiries | ${company.name}` },
      {
        name: "description",
        content:
          "Contact our sales and engineering team with drawings, samples or production requirements. Plant address, phone, email and working hours.",
      },
      { property: "og:title", content: `Contact | ${company.name}` },
      { property: "og:description", content: "Talk to our sales and engineering team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our team"
        description="Send a drawing, a sample or a description of the component. We will come back with manufacturability feedback and a quotation."
        image={enclosures}
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
        </div>
      </PageHero>

      <section className="container-x section-y grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <h2 className="label-xs text-muted-foreground">Plant & office</h2>
          <address className="mt-5 text-base leading-relaxed not-italic text-muted-foreground">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.city}, {company.address.state} {company.address.postal}
            <br />
            {company.address.country}
          </address>

          <h2 className="mt-10 label-xs text-muted-foreground">Sales enquiries</h2>
          <p className="mt-5 text-base text-muted-foreground">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-accent">
              {company.email}
            </a>
          </p>

          <h2 className="mt-10 label-xs text-muted-foreground">Working hours</h2>
          <p className="mt-5 text-base text-muted-foreground">{company.hours}</p>

          <div className="mt-10 overflow-hidden rounded-md border border-border">
            <iframe
              title="Plant location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C18.8%2C73.2%2C19.3&layer=mapnik"
              className="h-64 w-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          {status === "sent" ? (
            <FormSuccess
              title="Enquiry received"
              text="Thank you. Our team will review your requirement and get back to you."
              onReset={() => setStatus("idle")}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Product / requirement" name="requirement" className="sm:col-span-2" />
              <Field label="Material" name="material" />
              <Field label="Quantity" name="quantity" />
              <Field label="Message" name="message" as="textarea" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="label-xs text-muted-foreground" htmlFor="attachment">
                  Attach drawing (optional)
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className={`${inputClass} mt-3 file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-accent`}
                />
              </div>
              <div className="sm:col-span-2">
                <ActionButton type="submit" disabled={status === "sending"} arrow>
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </ActionButton>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
