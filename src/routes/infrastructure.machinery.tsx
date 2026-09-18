import { createFileRoute } from "@tanstack/react-router";
import machineChenHsongImg from "@/assets/real/machine_chen_hsong_250t.jpg";
import { company } from "@/data/company";
import { MachineryTable } from "@/components/site/MachineryTable";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/infrastructure/machinery")({
  head: () => ({
    meta: [
      { title: `Injection Moulding Machinery | ${company.name}` },
      {
        name: "description",
        content:
          "Complete list of SPIPL's 12 verified injection moulding machines ranging from 100 to 250 tons, including TUP Taiwan, L&T Demag, STM, ESM and CHENDE presses.",
      },
    ],
    links: [{ rel: "canonical", href: "/infrastructure/machinery" }],
  }),
  component: MachineryPage,
});

function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Fleet Specifications"
        title="Injection Moulding Machinery"
        description="Detailed technical specifications of SPIPL's 12 verified injection moulding presses, tie bar distances, shot weights and core pull configurations."
        image={machineChenHsongImg}
      />

      <section className="container-x section-y">
        <Reveal>
          <MachineryTable />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
