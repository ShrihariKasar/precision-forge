import facility from "@/assets/facility.jpg";
import { ActionLink } from "./ui";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Have a component to manufacture?",
  text = "Send drawings, samples or a specification. Our engineering team will review manufacturability and respond with a quotation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-y border-border">
      <img
        src={facility}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/85" />
      <div className="container-x section-y">
        <Reveal className="label-xs text-accent">Request a quotation</Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.8vw,4rem)] leading-[1.02] font-medium">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {text}
          </p>
        </Reveal>
        <Reveal delay={220} className="mt-10 flex flex-wrap gap-4">
          <ActionLink to="/request-quote">Request a quote</ActionLink>
          <ActionLink to="/contact" variant="outline">
            Contact our team
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
