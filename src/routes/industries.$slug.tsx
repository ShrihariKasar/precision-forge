import { createFileRoute, notFound } from "@tanstack/react-router";

import { getIndustry, industries } from "@/data/industries";
import { products } from "@/data/products";
import { company } from "@/data/company";
import { ActionLink, Breadcrumb, PageHero } from "@/components/site/ui";
import { IndustryCard, ProductCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const ind = loaderData.industry;
    return {
      meta: [
        { title: `${ind.name} Applications | ${company.name}` },
        { name: "description", content: ind.short },
        { property: "og:title", content: `${ind.name} | ${company.name}` },
        { property: "og:description", content: ind.short },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  const related = products.filter((p) => p.categorySlug === industry.slug || industry.slug === "automotive").slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Industry Sector" title={industry.name} description={industry.short} image={industry.image}>
        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Industries", to: "/industries" },
              { label: industry.name },
            ]}
          />
        </div>
      </PageHero>

      <section className="container-x section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="text-2xl font-medium md:text-3xl">Sector Overview</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {industry.description}
          </p>
          <img
            src={industry.image}
            alt={industry.name}
            loading="lazy"
            className="mt-10 aspect-[16/9] w-full rounded-md object-cover border border-border"
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <h2 className="label-xs text-muted-foreground uppercase">Typical Plastic Components</h2>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {industry.components.map((c) => (
              <li key={c} className="py-4 text-sm text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 label-xs text-muted-foreground uppercase">Manufacturing Standards We Plan For</h2>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {industry.requirements.map((r) => (
              <li key={r} className="py-4 text-sm text-muted-foreground">
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ActionLink to="/contact">Contact Us</ActionLink>
          </div>
        </Reveal>
      </section>

      <section className="surface-light border-y border-border">
        <div className="container-x section-y">
          <h2 className="text-2xl font-medium md:text-3xl">Components We Supply</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <h2 className="text-2xl font-medium md:text-3xl">Other Application Sectors</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((i) => (
            <IndustryCard key={i.slug} industry={i} className="h-full" />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
