import sheetMetal from "@/assets/prod-sheet-metal.jpg";
import stamping from "@/assets/prod-stamping.jpg";
import cnc from "@/assets/prod-cnc.jpg";
import enclosures from "@/assets/prod-enclosures.jpg";
import welded from "@/assets/prod-welded.jpg";
import brackets from "@/assets/prod-brackets.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  applications: string[];
  /** Specification fields are intentionally left empty where not supplied. */
  material?: string;
  process?: string;
  finish?: string;
  dimensions?: string;
  tolerance?: string;
  customization?: string;
  featured?: boolean;
};

export const productCategories = [
  { label: "All", slug: "all" },
  { label: "Sheet Metal", slug: "sheet-metal" },
  { label: "Stamping", slug: "stamping" },
  { label: "Fabrication", slug: "fabrication" },
  { label: "CNC", slug: "cnc" },
  { label: "Assemblies", slug: "assemblies" },
  { label: "Enclosures", slug: "enclosures" },
  { label: "Custom Components", slug: "custom" },
];

export const products: Product[] = [
  {
    id: "p-01",
    slug: "precision-sheet-metal-components",
    name: "Precision sheet metal components",
    category: "Sheet Metal",
    categorySlug: "sheet-metal",
    shortDescription:
      "Laser-cut and press-brake formed components produced to customer drawings.",
    description:
      "Flat-pattern components cut on fiber laser, deburred and formed on CNC press brakes. Produced from customer drawings with nesting optimised for material yield. Suitable for prototype quantities through to repeat production batches.",
    images: [sheetMetal, brackets, cnc],
    applications: ["Machine covers", "Mounting plates", "Chassis panels", "Trim and closure parts"],
    material: "Mild steel, stainless steel, aluminium (as specified)",
    process: "Laser cutting, deburring, CNC bending",
    finish: "As specified on drawing",
    featured: true,
  },
  {
    id: "p-02",
    slug: "stamped-metal-components",
    name: "Stamped metal components",
    category: "Stamping",
    categorySlug: "stamping",
    shortDescription: "Press-worked components for medium and high volume requirements.",
    description:
      "Blanked, pierced and formed components produced on mechanical presses with customer- or in-house-developed tooling. Suited to repeat volumes where cycle time and part-to-part consistency matter.",
    images: [stamping, sheetMetal],
    applications: ["Clips and retainers", "Washers and spacers", "Formed contacts", "Small housings"],
    process: "Blanking, piercing, forming",
    featured: true,
  },
  {
    id: "p-03",
    slug: "cnc-machined-components",
    name: "CNC machined components",
    category: "CNC",
    categorySlug: "cnc",
    shortDescription: "Milled and turned parts where tighter tolerances are required.",
    description:
      "Machined components produced where features cannot be achieved by forming alone — bores, threads, seating faces and close-tolerance interfaces. Inspection reports supplied on request.",
    images: [cnc, stamping],
    applications: ["Bushes and spacers", "Machined brackets", "Interface plates", "Fixture components"],
    process: "CNC milling, CNC turning",
    featured: true,
  },
  {
    id: "p-04",
    slug: "industrial-enclosures",
    name: "Industrial enclosures",
    category: "Enclosures",
    categorySlug: "enclosures",
    shortDescription: "Sheet metal enclosures and cabinets for electrical and control equipment.",
    description:
      "Fabricated enclosures with welded or riveted construction, gasket channels, mounting plates, cut-outs and hardware inserts to suit the customer's equipment layout. Finished in powder coat to the specified shade.",
    images: [enclosures, welded],
    applications: ["Control panels", "Distribution cabinets", "Junction boxes", "Equipment housings"],
    process: "Cutting, forming, welding, powder coating",
    featured: true,
  },
  {
    id: "p-05",
    slug: "welded-assemblies",
    name: "Welded assemblies",
    category: "Assemblies",
    categorySlug: "assemblies",
    shortDescription: "Jig-welded frames and sub-assemblies built to drawing.",
    description:
      "Multi-part assemblies welded on dedicated fixtures to hold datum relationships. Includes MIG and spot welded construction, with dressing and inspection prior to finishing.",
    images: [welded, enclosures],
    applications: ["Equipment frames", "Skid bases", "Support structures", "Machine sub-assemblies"],
    process: "MIG welding, spot welding, fixture assembly",
    featured: true,
  },
  {
    id: "p-06",
    slug: "metal-brackets-and-supports",
    name: "Metal brackets and supports",
    category: "Fabrication",
    categorySlug: "fabrication",
    shortDescription: "Formed brackets, angles and mounting hardware in batch quantities.",
    description:
      "Formed and punched brackets used for mounting, bracing and cable support. Produced in plated or coated finishes depending on the operating environment.",
    images: [brackets, sheetMetal],
    applications: ["Panel mounting", "Cable tray supports", "Equipment fixing", "Structural bracing"],
    process: "Punching, forming, plating",
    featured: true,
  },
  {
    id: "p-07",
    slug: "panels-and-frames",
    name: "Panels and frames",
    category: "Fabrication",
    categorySlug: "fabrication",
    shortDescription: "Formed panels, doors and structural frames for equipment builds.",
    description:
      "Large-format panels and frame members with hemmed edges, stiffeners and insert hardware. Manufactured to fit the customer's assembly interfaces.",
    images: [welded, enclosures],
    applications: ["Machine guarding", "Access doors", "Cabinet frames", "Cladding panels"],
    process: "Laser cutting, forming, welding",
  },
  {
    id: "p-08",
    slug: "custom-metal-components",
    name: "Custom metal components",
    category: "Custom Components",
    categorySlug: "custom",
    shortDescription: "Build-to-print components developed against customer specifications.",
    description:
      "Components engineered and produced from customer drawings, samples or reverse-engineered references. Process route is selected after a manufacturability review.",
    images: [sheetMetal, cnc, brackets],
    applications: ["Replacement parts", "Low-volume production", "Prototype builds", "Legacy components"],
    customization: "Drawing, sample or CAD-based development",
  },
  {
    id: "p-09",
    slug: "automotive-sheet-metal-parts",
    name: "Automotive sheet metal parts",
    category: "Stamping",
    categorySlug: "stamping",
    shortDescription: "Formed and stamped parts supplied to automotive tier suppliers.",
    description:
      "Sheet metal parts produced to automotive drawings with controlled tooling, batch traceability and dimensional records for each production lot.",
    images: [stamping, brackets],
    applications: ["Mounting brackets", "Heat shields", "Reinforcements", "Retainers"],
    process: "Stamping, forming, welding",
  },
  {
    id: "p-10",
    slug: "precision-fabricated-parts",
    name: "Precision fabricated parts",
    category: "Sheet Metal",
    categorySlug: "sheet-metal",
    shortDescription: "Close-tolerance fabricated parts for equipment manufacturers.",
    description:
      "Fabricated parts where flatness, hole position and bend angle are controlled and verified. Supplied deburred, cleaned and packed to prevent handling damage.",
    images: [sheetMetal, cnc],
    applications: ["Instrument housings", "Mounting rails", "Sub-panels", "Cover plates"],
    process: "Laser cutting, precision forming",
  },
  {
    id: "p-11",
    slug: "cnc-bent-profiles",
    name: "CNC bent profiles",
    category: "CNC",
    categorySlug: "cnc",
    shortDescription: "Multi-bend profiles formed on CNC press brakes.",
    description:
      "Long and multi-bend profile components formed with programmed back-gauge positioning for repeatable flange dimensions across a batch.",
    images: [brackets, welded],
    applications: ["Channels", "Rails", "Stiffeners", "Edge profiles"],
    process: "CNC bending",
  },
  {
    id: "p-12",
    slug: "mechanical-sub-assemblies",
    name: "Mechanical sub-assemblies",
    category: "Assemblies",
    categorySlug: "assemblies",
    shortDescription: "Fabricated parts assembled with hardware and fasteners before dispatch.",
    description:
      "Sub-assemblies combining fabricated components with inserts, fasteners and bought-out hardware, supplied ready for integration into the customer's line.",
    images: [welded, enclosures, brackets],
    applications: ["Panel assemblies", "Hinged doors", "Bracket kits", "Mounting systems"],
    process: "Fabrication, hardware insertion, assembly",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
