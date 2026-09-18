import { createFileRoute } from "@tanstack/react-router";
import shopFloorMainImg from "@/assets/real/shop_floor_main.jpg";
import { company } from "@/data/company";
import { customerList } from "@/data/customers";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";
import { ClientLogo } from "@/components/site/ClientLogos";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: `Clientele & OEM Partners | ${company.name}` },
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
        title="Trusted Clientele & OEM Partners"
        description="SPIPL works closely with automotive OEMs, commercial vehicle manufacturers, appliance producers and defence contractors."
        image={shopFloorMainImg}
      />

      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Clientele Portfolio"
          title="Industry Clientele & OEM Partners"
          description="Verified corporate clientele represented in company profile records."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerList.map((customer, i) => (
            <Reveal
              key={customer.id}
              delay={i * 80}
              className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-surface/90 p-6 shadow-sm transition-all duration-300 hover:border-accent/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="label-xs text-accent">{customer.category}</span>
                  <div className="flex h-9 max-w-[125px] shrink-0 items-center justify-center rounded-md bg-white/95 px-2.5 py-1 shadow-sm border border-slate-200/90 group-hover:border-accent/50 transition-colors">
                    <ClientLogo id={customer.id} className="h-6 max-h-7 w-auto object-contain" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {customer.name}
                </h3>
              </div>
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
