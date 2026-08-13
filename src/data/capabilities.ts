import laser from "@/assets/cap-laser.jpg";
import bending from "@/assets/cap-bending.jpg";
import coating from "@/assets/cap-coating.jpg";
import quality from "@/assets/cap-quality.jpg";
import welded from "@/assets/prod-welded.jpg";
import cnc from "@/assets/prod-cnc.jpg";

export type Capability = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  benefits: string[];
  applications: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "laser-cutting",
    name: "Laser cutting",
    short: "Flat-pattern cutting of sheet and plate from nested programmes.",
    description:
      "Sheet and plate are cut from nested CAM programmes generated from the customer's flat pattern. Nesting is optimised for material yield, and cut edges are deburred before forming.",
    image: laser,
    benefits: ["Tight profile accuracy", "No hard tooling required", "Efficient material nesting"],
    applications: ["Blanks for forming", "Panels", "Gussets and plates"],
  },
  {
    slug: "cnc-bending",
    name: "CNC bending",
    short: "Press-brake forming with programmed back-gauge positioning.",
    description:
      "Components are formed on CNC press brakes using programmed bend sequences. Tooling selection and bend allowances are set during engineering review so flange dimensions repeat across the batch.",
    image: bending,
    benefits: ["Repeatable flange dimensions", "Controlled bend radii", "Reduced setup variation"],
    applications: ["Enclosure bodies", "Brackets", "Channels and profiles"],
  },
  {
    slug: "stamping",
    name: "Stamping",
    short: "Press operations for repeat-volume formed components.",
    description:
      "Blanking, piercing and forming operations run on mechanical presses with dedicated tooling. Suited to components where volume justifies tool investment and cycle time matters.",
    image: cnc,
    benefits: ["Short cycle times at volume", "Consistent part geometry", "Lower unit cost at scale"],
    applications: ["Clips and retainers", "Small housings", "Formed contacts"],
  },
  {
    slug: "welding-and-assembly",
    name: "Welding & assembly",
    short: "Fixture-based MIG and spot welding of multi-part assemblies.",
    description:
      "Assemblies are welded on fixtures that hold datum relationships between components. Welds are dressed where the drawing requires it, and assemblies are checked before finishing.",
    image: welded,
    benefits: ["Controlled assembly geometry", "Reduced distortion", "Single-source sub-assemblies"],
    applications: ["Frames", "Cabinets", "Skid bases"],
  },
  {
    slug: "surface-finishing",
    name: "Surface finishing",
    short: "Powder coating, plating and pre-treatment to the specified finish.",
    description:
      "Parts are cleaned and pre-treated before coating. Finish type, shade and film thickness follow the drawing or the customer's finish specification.",
    image: coating,
    benefits: ["Corrosion protection", "Consistent appearance", "Specification-driven finishes"],
    applications: ["Enclosures", "Visible panels", "Outdoor-mounted parts"],
  },
  {
    slug: "quality-inspection",
    name: "Quality inspection",
    short: "In-process and final inspection with recorded measurements.",
    description:
      "First-off approval, in-process checks and final inspection are carried out against the released drawing revision. Measurement records are retained and can be supplied with the consignment.",
    image: quality,
    benefits: ["Documented measurements", "Early defect detection", "Traceable material lots"],
    applications: ["All production batches", "First article inspection", "Customer audits"],
  },
];

export const getCapability = (slug: string) => capabilities.find((c) => c.slug === slug);
