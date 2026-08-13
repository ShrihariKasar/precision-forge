import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${company.name}` },
      {
        name: "description",
        content: `Terms governing use of the ${company.name} website, enquiry submissions and published product information.`,
      },
      { property: "og:title", content: `Terms of Use | ${company.name}` },
      { property: "og:description", content: "Terms governing use of this website and enquiry submissions." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="container-x pt-32 pb-24 md:pt-44 md:pb-32">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <h1 className="mt-8 text-[clamp(2.25rem,5vw,4rem)] leading-tight font-medium">Terms of use</h1>

      <div className="mt-12 max-w-3xl space-y-10">
        {[
          [
            "Product information",
            "Product descriptions on this website describe categories of work we undertake. Materials, tolerances, finishes and dimensions are set per component against the customer's released drawing.",
          ],
          [
            "Quotations",
            "Quotations are issued against a specific drawing revision, quantity and delivery schedule. Changes to any of these may change price and lead time.",
          ],
          [
            "Intellectual property",
            "Customer drawings and designs remain the property of the customer. Website content, imagery and layout remain the property of the company.",
          ],
          [
            "Website use",
            "This website is provided for information and enquiry purposes. We may update content, product listings and capability information without notice.",
          ],
          ["Contact", `Questions about these terms can be sent to ${company.email}.`],
        ].map(([title, text]) => (
          <div key={title}>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
