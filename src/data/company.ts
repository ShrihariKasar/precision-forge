/**
 * Central company profile.
 * NOTE: the values below are structural placeholders for the site build.
 * Replace them with the company's verified information before launch.
 */
export const company = {
  name: "Axiom Metalform",
  shortName: "Axiom",
  legalName: "Axiom Metalform Industries",
  tagline: "Precision sheet metal manufacturing",
  description:
    "Axiom Metalform manufactures precision sheet metal components, fabricated assemblies and enclosures for industrial OEMs. Work is produced to customer drawings, with in-process inspection at every stage.",
  address: {
    line1: "Plot 12, Industrial Estate Phase II",
    line2: "Manufacturing Zone",
    city: "City",
    state: "State",
    postal: "000000",
    country: "India",
  },
  phone: "+00 0000 000000",
  email: "sales@example.com",
  hours: "Monday – Saturday, 09:00 – 18:00",
  stats: [
    { value: 25, suffix: "+", label: "Years in manufacturing" },
    { value: 500, suffix: "+", label: "Component programmes delivered" },
    { value: 50, suffix: "+", label: "Product categories" },
    { value: 10, suffix: "", label: "Industries served" },
  ],
  process: [
    {
      step: "01",
      title: "Requirement",
      text: "Drawings, samples or specifications are reviewed against material and process availability.",
    },
    {
      step: "02",
      title: "Engineering review",
      text: "DFM feedback on bend allowances, tooling, nesting and finishing before costing.",
    },
    {
      step: "03",
      title: "Prototype",
      text: "First-off samples produced and dimensionally verified against the drawing.",
    },
    {
      step: "04",
      title: "Production",
      text: "Batch release with routed job cards, tool control and traceable material lots.",
    },
    {
      step: "05",
      title: "Inspection",
      text: "In-process and final inspection with documented measurement records.",
    },
    {
      step: "06",
      title: "Delivery",
      text: "Protective packing, part marking and scheduled dispatch to the customer plant.",
    },
  ],
  why: [
    {
      title: "Dimensional precision",
      text: "Tooling, fixturing and inspection planned per part, not per batch.",
    },
    {
      title: "Documented quality",
      text: "Measurement records and material traceability retained for every job.",
    },
    {
      title: "Build-to-print",
      text: "Components manufactured strictly to customer drawings and revisions.",
    },
    {
      title: "Repeatable delivery",
      text: "Scheduled batch releases planned against customer production calendars.",
    },
    {
      title: "In-house processes",
      text: "Cutting, forming, welding and finishing under one roof reduces handling.",
    },
    {
      title: "Engineering support",
      text: "DFM review before tooling commitment to control cost and lead time.",
    },
  ],
} as const;

export const navLinks = [
  { label: "Products", to: "/products" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Industries", to: "/industries" },
  { label: "Quality", to: "/quality" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
