import { createFileRoute } from "@tanstack/react-router";
import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import plantFacadeImg from "@/assets/real/plant_facade_dng.jpg";
import shopFloorMainImg from "@/assets/real/shop_floor_main.jpg";
import machineChenHsongImg from "@/assets/real/machine_chen_hsong_250t.jpg";
import toolMouldMaintenanceImg from "@/assets/real/tool_mould_maintenance.jpg";
import qualityFirewallImg from "@/assets/real/quality_firewall_lab.jpg";
import plantOfficeImg from "@/assets/real/plant_office_management.jpg";

import { company } from "@/data/company";
import { MachineryTable } from "@/components/site/MachineryTable";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, PageHero, SectionHeading } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/infrastructure/")({
  head: () => ({
    meta: [
      { title: `Manufacturing Infrastructure | ${company.name}` },
      {
        name: "description",
        content:
          "SPIPL operates a manufacturing facility with a built-up area of 9,000 sq. ft. on a 10,000 sq. ft. land area in Koregaon Bhima, Pune.",
      },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: InfrastructurePage,
});

export function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Plant & Facilities"
        title="Manufacturing Infrastructure"
        description="SPIPL operates a manufacturing facility with a built-up area of 9,000 sq. ft. on a 10,000 sq. ft. land area."
        image={heroPlantExteriorImg}
      />

      {/* PLANT SECTIONS */}
      <section className="container-x section-y">
        <SectionHeading
          index="01"
          eyebrow="Facility Breakdown"
          title="Designed for Controlled Manufacturing Flow"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "1. Plant Exterior & Premises",
              desc: "10,000 sq. ft. land area located near Kalyani Forge on Pune-Nagar Road, Koregaon Bhima, Pune.",
              img: plantFacadeImg,
            },
            {
              title: "2. Injection Moulding Shop",
              desc: "9,000 sq. ft. built-up shop floor equipped with automated overhead cranes and 12 moulding presses.",
              img: shopFloorMainImg,
            },
            {
              title: "3. Injection Moulding Machinery",
              desc: "12 verified moulding machines ranging from 100T to 250T (TUP Taiwan, L&T Demag, STM, ESM, CHENDE).",
              img: machineChenHsongImg,
            },
            {
              title: "4. Tool Room (SPRAJTECH)",
              desc: "Associated tool room facility for mould making, press tools, jigs, fixtures, EDM and wire cutting.",
              img: toolMouldMaintenanceImg,
            },
            {
              title: "5. QA Laboratory",
              desc: "Quality control lab equipped with digital verniers, micrometers, pin gauges and digital lux meters.",
              img: qualityFirewallImg,
            },
            {
              title: "6. Office & Administration",
              desc: "PPC, accounts, customer support and purchasing office for seamless project execution.",
              img: plantOfficeImg,
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={(idx % 3) * 70} className="rounded-lg border border-border bg-surface overflow-hidden">
              <img src={item.img} alt={item.title} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MACHINERY PREVIEW */}
      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <SectionHeading
            index="02"
            eyebrow="Machinery Specifications"
            title="12 Verified Moulding Machines"
          />
          <div className="mt-10">
            <MachineryTable />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
