import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import { ActionLink } from "./ui";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Looking for a plastic injection moulding partner?",
  text = "Connect with Sanchit Polymer Industries Pvt. Ltd. to discuss your component requirements, manufacturing specifications and production enquiries.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-y border-border">
      <img
        src={heroPlantExteriorImg}
        alt="Sanchit Polymer Industries Manufacturing Facility"
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/88" />
      <div className="container-x section-y">
        <Reveal className="label-xs text-accent">GET IN TOUCH WITH SPIPL</Reveal>
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
          <ActionLink to="/contact">CONTACT US</ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
