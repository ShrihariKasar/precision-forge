import { createFileRoute, notFound } from "@tanstack/react-router";

import { capabilities, getCapability } from "@/data/capabilities";
import { company } from "@/data/company";
import { ActionLink, Breadcrumb, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const capability = getCapability(params.slug);
    if (!capability) throw notFound();
    return { capability };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Capability unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.capability;
    return {
      meta: [
        { title: `${c.name} — Manufacturing Process | ${company.name}` },
        { name: "description", content: c.short },
        { property: "og:title", content: `${c.name} | ${company.name}` },
        { property: "og:description", content: c.short },
        { property: "og:url", content: `/capabilities/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/capabilities/${params.slug}` }],
    };
  },
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { capability } = Route.useLoaderData();
  const others = capabilities.filter((c) => c.slug !== capability.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Capability" title={capability.name} description={capability.short} image={capability.image}>
        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Capabilities", to: "/capabilities" },
              { label: capability.name },
            ]}
          />
        </div>
      </PageHero>

      <section className="container-x section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="text-2xl font-medium md:text-3xl">Process</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {capability.description}
          </p>
          <img
            src={capability.image}
            alt={capability.name}
            loading="lazy"
            className="mt-10 aspect-[16/9] w-full rounded-md object-cover"
          />
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <h2 className="label-xs text-muted-foreground">Key benefits</h2>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {capability.benefits.map((b) => (
              <li key={b} className="py-4 text-sm text-muted-foreground">
                {b}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 label-xs text-muted-foreground">Typical applications</h2>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {capability.applications.map((a) => (
              <li key={a} className="py-4 text-sm text-muted-foreground">
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ActionLink to="/request-quote">Discuss this process</ActionLink>
          </div>
        </Reveal>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <h2 className="text-2xl font-medium md:text-3xl">Other processes</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((c) => (
              <a
                key={c.slug}
                href={`/capabilities/${c.slug}`}
                className="group overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-border-strong"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
