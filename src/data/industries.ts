import automotiveClipsImg from "@/assets/spipl/automotive_clips.jpg";
import applianceComponentsImg from "@/assets/products/ac-fan-components.jpg";
import defenceComponentsImg from "@/assets/products/radome.jpg";
import commercialHandleImg from "@/assets/products/grab-handle-support-black.jpg";
import engineeringPolymersImg from "@/assets/real/polymer_sample_board.jpg";

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
    short: "Clips, holders, plugs, fasteners and interior grab handles for passenger & commercial vehicles.",
    description:
      "Automotive component manufacturing is drawing-driven and volume-sensitive. SPIPL produces bumper clips, body plugs, fir tree fasteners, weather strips and grab handle assemblies with strict IATF 16949 quality compliance.",
    image: automotiveClipsImg,
    components: ["Verus Type Clamps", "Bumper A/B Clips", "Body & Hole Plugs", "Grab Handles & Cable Ties"],
    requirements: ["IATF 16949 Compliance", "Batch Traceability", "OEM Delivery Schedules"],
  },
  {
    slug: "appliance",
    name: "Appliance & HVAC",
    short: "Precision moulded plastic components for AC fan assemblies and household appliances.",
    description:
      "SPIPL supplies precision moulded AC fan blades, air handler housings and structural appliance parts with low noise performance and high dimensional stability.",
    image: applianceComponentsImg,
    components: ["AC Fan Components", "Air Handler Parts", "Appliance Housing Mouldings"],
    requirements: ["Aerodynamic Balance", "Thermal Stability", "Class-A Cosmetic Finish"],
  },
  {
    slug: "defence",
    name: "Defence Critical",
    short: "High-precision radomes, switch housings and timer plugs for defence equipment.",
    description:
      "Specialized engineering plastic components engineered for military specifications, high impact resistance, RF transparency and extreme temperature tolerance.",
    image: defenceComponentsImg,
    components: ["Radome Housing", "Switch Housing", "Timer Plugs"],
    requirements: ["RF Signal Transparency", "UL94 V-0 Flame Retardant", "Tight Tolerance Zero-Flash Moulding"],
  },
  {
    slug: "commercial",
    name: "Commercial Applications",
    short: "Injection moulded assemblies and functional plastic components for commercial transport.",
    description:
      "Heavy-duty engineering plastic parts for bus, truck and commercial logistics applications built for high mechanical durability and vibration resistance.",
    image: commercialHandleImg,
    components: ["Grab Handle Supports", "Trunk Opener Clips", "Parcel Shelf Clips"],
    requirements: ["Vibration Damping", "High Load-Bearing Capacity", "UV Weatherability"],
  },
  {
    slug: "engineering",
    name: "Engineering Plastic Applications",
    short: "Custom molded components across ABS, POM, Nylon 6/66, Polycarbonate and PP polymers.",
    description:
      "Custom injection moulded parts manufactured to client drawings using engineering polymers tailored for specific mechanical, thermal and chemical environments.",
    image: engineeringPolymersImg,
    components: ["Washer Assemblies", "Rib Locks", "Specialty Fasteners"],
    requirements: ["Custom Tooling Support", "Engineering Polymer Expertise", "In-Process Inspection Firewall"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
