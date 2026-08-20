import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { capabilities } from "@/data/capabilities";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const cap = capabilities.find((c) => c.slug === params.slug);
    if (!cap) throw notFound();
    return { cap };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cap;
    return {
      meta: [
        { title: `${c?.name || "Capability"} | ${company.name}` },
        { name: "description", content: c?.summary },
      ],
      links: [{ rel: "canonical", href: `/capabilities/${c?.slug}` }],
    };
  },
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { cap } = Route.useLoaderData();

  return (
    <>
      <div className="border-b border-border bg-surface pt-32 pb-8">
        <div className="container-x">
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 label-xs text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Capabilities
          </Link>
        </div>
      </div>

      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal variant="up" className="overflow-hidden rounded-xl border border-border/80 bg-surface shadow-lg lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
              <img
                src={cap.image}
                alt={cap.name}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
            </div>
          </Reveal>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="label-xs text-accent uppercase">{cap.category}</span>
              <h1 className="mt-2 text-3xl font-medium md:text-4xl text-foreground">{cap.name}</h1>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">{cap.summary}</p>

            <div className="space-y-4 text-sm text-muted-foreground">
              {cap.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {cap.equipment && cap.equipment.length > 0 && (
              <div>
                <h3 className="label-xs text-muted-foreground uppercase mb-3">Key Equipment & Machinery</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {cap.equipment.map((eq) => (
                    <div key={eq} className="flex items-center gap-2 rounded border border-border bg-surface p-3 text-xs font-mono">
                      <CheckCircle2 className="size-4 text-accent shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <ActionLink to="/contact">
                CONTACT US
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
