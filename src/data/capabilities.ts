import injectionShopImg from "@/assets/spipl/shop_floor.png";
import automotiveClipsImg from "@/assets/spipl/automotive_clips.png";
import toolRoomImg from "@/assets/spipl/shop_floor.png";

export interface Capability {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  equipment: string[];
  image: string;
  highlights: string[];
}

export const capabilities: Capability[] = [
  {
    slug: "plastic-injection-moulding",
    name: "Plastic Injection Moulding",
    category: "Primary Manufacturing",
    summary:
      "SPIPL's primary capability is plastic injection moulding for automotive, commercial and other critical applications across machine tonnage ranges from 100T to 250T.",
    description: [
      "Sanchit Polymer Industries operates a fully equipped plastic injection moulding facility built on a 9,000 sq. ft. shop floor.",
      "The plant runs 12 verified injection moulding machines from leading manufacturers including TUP Taiwan, L&T Demag, STM, ESM and CHENDE with clamp forces ranging from 100 to 250 tons.",
      "SPIPL processes both commodity polymers (PP, LDPE, HDPE) and high-performance engineering thermoplastics (ABS, POM, Nylon 6, Nylon 66, Polycarbonate, PVC) to manufacture precision components.",
    ],
    equipment: [
      "TUP Taiwan 250T (532g shot)",
      "L&T Demag 200T (500g shot)",
      "STM 180T & 150T Machines",
      "ESM & CHENDE Moulding Presses",
    ],
    image: injectionShopImg,
    highlights: [
      "100T to 250T Tonnage Range",
      "Multi-core Pull Capability",
      "Automated Cycle Control",
      "Engineering Polymer Processing",
    ],
  },
  {
    slug: "automotive-critical-parts",
    name: "Automotive Critical Parts",
    category: "Specialized Production",
    summary:
      "Production of high-reliability automotive components including clips, holders, plugs, fasteners and trim assemblies for Tier-1 and OEM applications.",
    description: [
      "SPIPL produces a vast array of automotive parts engineered to withstand vibration, environmental exposure and mechanical stress.",
      "Key automotive products include Verus type clamps, grab handle flexible & supports, screw caps, bumper clips, body plugs, hole plugs, rib locks, fir tree clips, weather strips and cable ties.",
      "Components undergo stringent in-process dimensional checking and quality firewall inspection before release.",
    ],
    equipment: [
      "Precision Moulding Presses",
      "Single & Multi-cavity Tooling",
      "In-line Fixtures & Gauges",
    ],
    image: automotiveClipsImg,
    highlights: [
      "IATF 16949 Compliant Quality",
      "Tier-1 OEM Approved Parts",
      "Class-A Surface Finish Capability",
    ],
  },
  {
    slug: "tooling-mould-support",
    name: "Tooling & Mould Support",
    category: "Tooling Infrastructure",
    summary:
      "Integrated tooling and mould maintenance support through sister company SPRAJTECH for plastic moulds, press tools, jigs and fixtures.",
    description: [
      "Tooling reliability is critical for zero-defect injection moulding. SPIPL works in close association with sister company SPRAJTECH to provide tooling support.",
      "The tool room facility handles plastic mould making, press tool fabrication, jigs, fixtures, EDM jobs, wire-cut machining, surface grinding, lathe turning, milling and wire cutting.",
      "In-house tooling capability enables rapid die preventive maintenance, mould repair, core pin re-conditioning and quick turnaround on sample runs.",
    ],
    equipment: [
      "CNC Wire EDM",
      "Surface Grinder & Lathe",
      "Vertical Milling Machines",
      "Surface Plate & Inspection Jigs",
    ],
    image: toolRoomImg,
    highlights: [
      "Sister Company Tooling Unit (SPRAJTECH)",
      "Mould Maintenance & Repair",
      "Custom Jigs & Fixtures",
      "Wire-Cut & EDM Machining",
    ],
  },
  {
    slug: "quality-inspection-measurement",
    name: "Quality Inspection & Measurement",
    category: "Quality Assurance",
    summary:
      "Structured quality control laboratory equipped with calibrated digital verniers, micrometers, pin gauges and digital lux meters.",
    description: [
      "SPIPL enforces quality control at raw material receiving, during moulding runs, and prior to final dispatch.",
      "The QA lab utilizes calibrated measuring instruments to verify critical dimensions, wall thickness, hole diameters and surface appearance.",
      "Quality firewall inspectors ensure zero mixed-part lots and zero dimensional non-conformances leave the factory floor.",
    ],
    equipment: [
      "Digital Vernier Calipers",
      "Precision Micrometers",
      "Calibrated Pin Gauge Sets",
      "Mextech Digital Lux Measuring Instrument",
    ],
    image: injectionShopImg,
    highlights: [
      "IATF 16949:2016 Certified",
      "ISO 9001:2015 Certified",
      "100% In-Process Firewall Checks",
      "Documented Measurement Records",
    ],
  },
];
