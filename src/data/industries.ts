import automotive from "@/assets/ind-automotive.jpg";
import electrical from "@/assets/ind-electrical.jpg";
import energy from "@/assets/ind-energy.jpg";
import datacenter from "@/assets/ind-datacenter.jpg";
import facility from "@/assets/facility.jpg";
import enclosures from "@/assets/prod-enclosures.jpg";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  components: string[];
  requirements: string[];
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    short: "Formed and stamped parts supplied to tier suppliers and component makers.",
    description:
      "Automotive work is drawing-driven and volume-sensitive. Parts are produced with controlled tooling, batch traceability and dimensional records for each production lot.",
    image: automotive,
    components: ["Mounting brackets", "Heat shields", "Reinforcements", "Retainers and clips"],
    requirements: ["Batch traceability", "Repeatable tooling", "Scheduled deliveries"],
  },
  {
    slug: "electrical",
    name: "Electrical & switchgear",
    short: "Enclosures, mounting plates and busbar supports for electrical equipment.",
    description:
      "Electrical equipment builders need enclosures and panels that match their internal layouts exactly. Cut-outs, insert hardware and finishes are produced to the customer's panel drawings.",
    image: electrical,
    components: ["Panel enclosures", "Gland plates", "Mounting plates", "Cable supports"],
    requirements: ["Accurate cut-out positions", "Consistent finishes", "Hardware insertion"],
  },
  {
    slug: "renewable-energy",
    name: "Renewable energy",
    short: "Structural and mounting components for solar and energy storage installations.",
    description:
      "Components for outdoor installation are specified for corrosion resistance and dimensional interchangeability across large quantities of identical parts.",
    image: energy,
    components: ["Module mounting parts", "Structural brackets", "Inverter housings", "Junction enclosures"],
    requirements: ["Corrosion-resistant finishes", "High-volume repeatability", "Site-ready packing"],
  },
  {
    slug: "data-centres",
    name: "Data centres",
    short: "Rack components, panels and airflow hardware for IT infrastructure.",
    description:
      "Rack and infrastructure hardware requires flatness, hole-position accuracy and clean finishes because parts are assembled and visible in service.",
    image: datacenter,
    components: ["Rack panels", "Blanking plates", "Cable management parts", "Mounting rails"],
    requirements: ["Hole position accuracy", "Cosmetic finish quality", "Clean deburred edges"],
  },
  {
    slug: "industrial-equipment",
    name: "Industrial equipment",
    short: "Guarding, frames and covers for machine builders.",
    description:
      "Machine builders source fabricated guarding, covers and frames that fit existing equipment interfaces without rework at assembly.",
    image: facility,
    components: ["Machine guards", "Covers", "Frames", "Access doors"],
    requirements: ["Fit at assembly", "Weld quality", "Batch consistency"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    short: "Fabricated hardware for installed and field-mounted equipment.",
    description:
      "Infrastructure programmes involve large quantities of standardised parts with protective finishes and consignment-level documentation.",
    image: enclosures,
    components: ["Field enclosures", "Support brackets", "Frames", "Cover plates"],
    requirements: ["Protective coatings", "Volume repeatability", "Documented despatch"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
