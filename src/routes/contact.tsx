import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
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
        image={heroPlantExteriorImg}
      />

      <section className="container-x section-y">
        <Reveal>
          {status === "sent" ? (
            <FormSuccess
              title="Enquiry Received"
              text="Thank you. Sanchit Polymer Industries team will review your requirement and get back to you shortly."
              onReset={() => setStatus("idle")}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Row 1 */}
              <Field label="Full Name" name="name" required />
              <Field label="Company Name" name="company" required />
              <Field label="Email Address" name="email" type="email" required />

              {/* Row 2 */}
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Product / Part Name" name="requirement" />
              <Field label="Target Material (e.g., Nylon 66, POM, ABS)" name="material" />

              {/* Row 3 */}
              <Field label="Production Quantity" name="quantity" />
              <div className="sm:col-span-2 lg:col-span-2">
                <label className="label-xs text-muted-foreground" htmlFor="attachment">
                  Attach Drawing or Spec Sheet (Optional)
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className={`${inputClass} mt-3 min-h-11 flex items-center file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-accent`}
                />
              </div>

              {/* Row 4: Message */}
              <Field
                label="Message / Technical Notes"
                name="message"
                as="textarea"
                className="sm:col-span-2 lg:col-span-3"
              />

              {/* Submit */}
              <div className="sm:col-span-2 lg:col-span-3">
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
