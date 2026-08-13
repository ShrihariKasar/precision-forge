import { createFileRoute } from "@tanstack/react-router";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import { company } from "@/data/company";
import { customerList } from "@/data/customers";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: `Trusted Customers | ${company.name}` },
      {
        name: "description",
        content:
          "Sanchit Polymer Industries is a trusted component supplier to ITW India, Amber Enterprises, Pinnacle Mobility (EKA), APPL Defence, Pittie Polymer, and Ankita Plast.",
      },
    ],
    links: [{ rel: "canonical", href: "/customers" }],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Relationships"
        title="Trusted by Industry Customers"
        description="SPIPL works closely with automotive OEMs, commercial vehicle manufacturers, appliance producers and defence contractors."
        image={shopFloorImg}
      />

      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Customer Portfolio"
          title="Industry Client Partners"
          description="Verified corporate customers represented in the company profile records."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerList.map((customer, i) => (
            <Reveal key={customer.id} delay={i * 80} className="rounded-lg border border-border bg-surface p-8 hover:border-accent/60 transition-colors">
              <span className="label-xs text-accent font-mono">{customer.category}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{customer.name}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTINUOUS MARQUEE */}
      <section className="surface-light border-y border-border py-12 overflow-hidden">
        <div className="container-x mb-4 text-center">
          <span className="label-xs text-muted-foreground uppercase">Key Industry OEM Partners</span>
        </div>
        <div className="relative flex w-full overflow-x-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap">
            {customerList.concat(customerList).map((c, idx) => (
              <div key={`${c.id}-${idx}`} className="flex items-center gap-4">
                <span className="size-2 rounded-full bg-accent" />
                <span className="font-display text-xl font-semibold tracking-wider text-foreground">
                  {c.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
