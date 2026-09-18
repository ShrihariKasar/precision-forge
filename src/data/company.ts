/**
 * Central company profile for Sanchit Polymer Industries Pvt. Ltd. (SPIPL).
 * Single source of truth for verified company information.
 */

const currentYear = new Date().getFullYear();
const yearsOfGrowth = currentYear - 2014;

export const company = {
  name: "Sanchit Polymer Industries Pvt. Ltd.",
  shortName: "SPIPL",
  legalName: "Sanchit Polymer Industries Pvt. Ltd.",
  tagline: "Precision Injection Moulding for Automotive & Industry",
  description:
    "Sanchit Polymer Industries Pvt. Ltd. is a plastic injection moulding manufacturer established in 2014, specializing in injection moulded components, assemblies and engineering plastic products for automotive and commercial applications.",
  secondaryDescription:
    "With dedicated manufacturing, tooling support and quality assurance infrastructure, SPIPL focuses on delivering consistent components aligned with customer requirements.",
  establishedYear: 2014,
  establishedMonth: "October 2014",
  builtUpArea: "9,000 sq. ft.",
  landArea: "10,000 sq. ft.",
  primaryBusiness:
    "Plastic injection moulding, injection moulded components, plastic assemblies and engineering plastic products.",
  applications: [
    "Automotive",
    "Commercial",
    "Appliance",
    "Defence critical applications",
    "Engineering applications",
  ],
  address: {
    line1: "Gat. No. 611, Near Kalyani Forge",
    line2: "Pune-Nagar Road, A/P Koregaon Bhima, Tal. Shirur",
    city: "Dist. Pune",
    state: "Maharashtra",
    postal: "412208",
    country: "India",
    formatted:
      "Gat. No. 611, Near Kalyani Forge, Pune-Nagar Road, A/P Koregaon Bhima, Tal. Shirur, Dist. Pune – 412208, Maharashtra, India.",
  },
  phones: ["8459924758", "8668239808"],
  phone: "8459924758",
  email: "sanchitoperation@gmail.com",
  hours: "Monday – Saturday, 08:30 – 18:00",
  stats: [
    { value: "12++", numericValue: 12, suffix: "++", label: "Years of Growth" },
    { value: "10,000 Sq. Ft.", numericValue: 10000, suffix: " Sq. Ft.", label: "High Tech Facility" },
    { value: "IATF 16949", numericValue: null, suffix: "", label: "Automotive Quality Standard" },
    { value: "ISO 9001", numericValue: null, suffix: "", label: "Quality Management System" },
  ],
  vision:
    "To be a world-class plastic injection moulding solution provider with state-of-the-art infrastructure and eco-friendly manufacturing.",
  mission:
    "SPIPL focuses on strengthening its position as an automotive plastic component manufacturer and supplier while increasing its customer base and working closely with existing customers to understand and meet their requirements.",
  strategicPillars: [
    {
      title: "CUSTOMER FOCUS",
      text: "Work closely with customers and understand their requirements.",
    },
    {
      title: "OPERATIONAL EFFICIENCY",
      text: "Improve operational efficiency through new working techniques and modernization of facilities.",
    },
    {
      title: "CONSISTENT QUALITY",
      text: "Exceed customer expectations through adherence to required procedures and systems.",
    },
    {
      title: "MARKET EXPANSION",
      text: "Explore new market opportunities and expand the customer base.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Raw Material Preparation",
      text: "Polymer selection, drying and pre-treatment across engineering and commodity polymers.",
    },
    {
      step: "02",
      title: "Precision Moulding",
      text: "Automated injection moulding with controlled tonnage, cycle time and core pull parameters.",
    },
    {
      step: "03",
      title: "In-Process Inspection",
      text: "Dimensional, visual and weight checks during production runs to catch deviations early.",
    },
    {
      step: "04",
      title: "Final Inspection",
      text: "Quality firewall check using calibrated verniers, micrometers, pin gauges and lux meters.",
    },
    {
      step: "05",
      title: "Assembly & Packaging",
      text: "Component assembly, clip fitting and protective packaging to safeguard critical surfaces.",
    },
    {
      step: "06",
      title: "Scheduled Delivery",
      text: "On-time delivery aligned with customer OEM production schedules and requirements.",
    },
  ],
  why: [
    {
      title: "Customer Focus",
      text: "Understanding customer requirements and working closely with engineering and purchasing teams.",
    },
    {
      title: "Manufacturing Capability",
      text: "Injection moulding infrastructure across multiple machine tonnage ranges from 100T to 250T+.",
    },
    {
      title: "Engineering Materials",
      text: "Capability involving multiple engineering and commodity polymers including ABS, POM, Nylon 6/66, PP, PC.",
    },
    {
      title: "Quality Systems",
      text: "IATF 16949:2016 and ISO 9001:2015 certification compliance and robust quality inspection.",
    },
    {
      title: "Tooling Support",
      text: "Associated tool-room capabilities through SPRAJTECH for plastic moulds, press tools, jigs and fixtures.",
    },
    {
      title: "Application Experience",
      text: "Automotive, commercial, appliance and defence critical products represented in the portfolio.",
    },
  ],
} as const;

export interface NavSubItem {
  label: string;
  to: string;
  description?: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: readonly NavSubItem[];
}

export const navLinks: readonly NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      {
        label: "About SPIPL",
        to: "/about",
        description: "Company overview, mission & journey since 2014",
      },
      {
        label: "Capabilities",
        to: "/capabilities",
        description: "Plastic injection moulding tonnage & technical specs",
      },
      {
        label: "Infrastructure",
        to: "/infrastructure",
        description: "9,000 sq.ft plant facility & modern machinery",
      },
      {
        label: "Quality",
        to: "/quality",
        description: "IATF 16949 & ISO 9001 quality assurance",
      },
      {
        label: "Gallery",
        to: "/gallery",
        description: "Factory floor, tool room & product showcase",
      },
    ],
  },
  { label: "Products", to: "/products" },
  { label: "Clientele", to: "/customers" },
  { label: "Contact", to: "/contact" },
] as const;

