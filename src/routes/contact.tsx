import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { ActionButton, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Field, FormSuccess, inputClass } from "@/components/site/form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name}` },
      {
        name: "description",
        content:
          "Connect with Sanchit Polymer Industries Pvt. Ltd. to discuss your plastic injection moulding component requirements. Plant address, phone numbers and email.",
      },
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
        eyebrow="Connect with SPIPL"
        title="Let's Build Your Next Component"
        description="Looking for a reliable plastic injection moulding manufacturing partner? Connect with Sanchit Polymer Industries Pvt. Ltd. to discuss your component requirements, manufacturing requirements and production enquiries."
        image={shopFloorImg}
      />

      <section className="container-x section-y grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4 space-y-8">
          <div>
            <h2 className="label-xs text-muted-foreground uppercase">Plant Address</h2>
            <address className="mt-4 text-base leading-relaxed not-italic text-muted-foreground">
              {company.address.formatted}
            </address>
          </div>

          <div>
            <h2 className="label-xs text-muted-foreground uppercase">Phone Contact</h2>
            <p className="mt-4 text-base text-muted-foreground space-y-1 font-mono">
              {company.phones.map((p) => (
                <span key={p} className="block">
                  <a href={`tel:${p}`} className="hover:text-accent">
                    +91 {p}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <div>
            <h2 className="label-xs text-muted-foreground uppercase">Email Enquiries</h2>
            <p className="mt-4 text-base text-muted-foreground">
              <a href={`mailto:${company.email}`} className="hover:text-accent font-medium">
                {company.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="label-xs text-muted-foreground uppercase">Plant Operating Hours</h2>
            <p className="mt-4 text-base text-muted-foreground">{company.hours}</p>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          {status === "sent" ? (
            <FormSuccess
              title="Enquiry Received"
              text="Thank you. Sanchit Polymer Industries team will review your requirement and get back to you shortly."
              onReset={() => setStatus("idle")}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Company Name" name="company" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Product / Part Name" name="requirement" className="sm:col-span-2" />
              <Field label="Target Material (e.g., Nylon 66, POM, ABS)" name="material" />
              <Field label="Production Quantity" name="quantity" />
              <Field label="Message / Technical Notes" name="message" as="textarea" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="label-xs text-muted-foreground" htmlFor="attachment">
                  Attach Drawing or Spec Sheet (Optional)
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
                  {status === "sending" ? "Submitting..." : "Submit Enquiry"}
                </ActionButton>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
