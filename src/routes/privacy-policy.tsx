import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${company.name}` },
      {
        name: "description",
        content: `How ${company.name} handles enquiry information, drawings and technical files submitted through this website.`,
      },
      { property: "og:title", content: `Privacy Policy | ${company.name}` },
      { property: "og:description", content: "How we handle enquiry and technical information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="container-x pt-32 pb-24 md:pt-44 md:pb-32">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Privacy policy" }]} />
      <h1 className="mt-8 text-[clamp(2.25rem,5vw,4rem)] leading-tight font-medium">Privacy policy</h1>

      <div className="mt-12 max-w-3xl space-y-10">
        {[
          [
            "Information we collect",
            "We collect the information you submit through our enquiry and quotation forms: name, company, contact details, and any drawings, CAD files or specifications you attach.",
          ],
          [
            "How we use it",
            "Submitted information is used to review manufacturability, prepare quotations and communicate about your enquiry. It is not sold or shared for marketing purposes.",
          ],
          [
            "Technical files",
            "Drawings and CAD files are treated as confidential and are shared internally only with the engineering and production staff involved in reviewing your requirement.",
          ],
          [
            "Retention",
            "Enquiry records and technical files are retained for as long as needed to support the commercial relationship, and thereafter in line with our internal record-keeping practice.",
          ],
          [
            "Your requests",
            `To request a copy or deletion of information you have submitted, contact us at ${company.email}.`,
          ],
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
