// Automotive Product Images
import verusTypeClampsImg from "@/assets/products/verus-type-clamps.jpg";
import grabHandleFlexibleImg from "@/assets/products/grab-handle-flexible.jpg";
import grabHandleSupportBlackImg from "@/assets/products/grab-handle-support-black.jpg";
import handleBeigeColorImg from "@/assets/products/handle-beige-color.jpg";
import screwCapImg from "@/assets/products/screw-cap.jpg";
import carryBagHookImg from "@/assets/products/carry-bag-hook.jpg";
import washerAssemblyImg from "@/assets/products/washer-assembly.jpg";
import bumperAClipImg from "@/assets/products/bumper-a-clip.jpg";
import bumperBClipImg from "@/assets/products/bumper-b-clip.jpg";
import bodyPlugImg from "@/assets/products/body-plug.jpg";
import holePlugImg from "@/assets/products/hole-plug.jpg";
import ribLockImg from "@/assets/products/rib-lock.jpg";
import tailLampCatcherImg from "@/assets/products/tail-lamp-catcher.jpg";
import firTreeClipImg from "@/assets/products/fir-tree-clip.jpg";
import weatherStripsImg from "@/assets/products/weather-strips.jpg";
import rubberClipsImg from "@/assets/products/rubber-clips.jpg";
import clipsImg from "@/assets/products/clips.jpg";
import cableTieImg from "@/assets/products/cable-tie.jpg";

// Appliance & Defence Product Images
import acFanComponentsImg from "@/assets/products/ac-fan-components.jpg";
import radomeImg from "@/assets/products/radome.jpg";
import switchHousingImg from "@/assets/products/switch-housing.jpg";
import timerPlugImg from "@/assets/products/timer-plug.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: "automotive" | "appliance" | "defence";
  category: "Automotive Critical Parts" | "Appliance Critical Products" | "Defence Critical Parts";
  description: string;
  application: string;
  componentType: string;
  image: string;
  materials?: string[];
  features?: string[];
}

export const productCategories = [
  { slug: "all", label: "All Products" },
  { slug: "automotive", label: "Automotive Critical Parts" },
  { slug: "appliance", label: "Appliance Critical Products" },
  { slug: "defence", label: "Defence Critical Parts" },
] as const;

export const products: Product[] = [
  // AUTOMOTIVE CRITICAL PARTS
  {
    id: "verus-type-clamps",
    name: "Verus Type Clamps",
    slug: "verus-type-clamps",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Precision injection moulded clamping component engineered for automotive hose and harness securing applications.",
    application: "Automotive",
    componentType: "Injection moulded component",
    image: verusTypeClampsImg,
    materials: ["Nylon 6", "Nylon 66", "Polyacetal (POM)"],
    features: ["High vibration resistance", "Precision locking mechanism", "Durable polymer construction"],
  },
  {
    id: "grab-handle-flexible",
    name: "Grab Handle Flexible",
    slug: "grab-handle-flexible",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Flexible automotive interior grab handle moulded with ergonomic contouring for passenger comfort and structural durability.",
    application: "Automotive Interior",
    componentType: "Injection moulded component",
    image: grabHandleFlexibleImg,
    materials: ["ABS", "PP Filled", "Nylon 6"],
    features: ["Ergonomic flex properties", "High load-bearing capacity", "UV stable finish"],
  },
  {
    id: "grab-handle-support-black",
    name: "Grab Handle Support Black",
    slug: "grab-handle-support-black",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Black interior support component for roof-mounted and side grab handles in commercial and passenger vehicles.",
    application: "Automotive Interior",
    componentType: "Injection moulded component",
    image: grabHandleSupportBlackImg,
    materials: ["ABS", "Polycarbonate", "PP"],
    features: ["Impact resistant grade", "Consistent color match", "Dimensional accuracy"],
  },
  {
    id: "handle-beige-color",
    name: "Handle Beige Color",
    slug: "handle-beige-color",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Beige finished interior door and grab handle moulding designed for color-matched vehicle cabin trim standards.",
    application: "Automotive Interior",
    componentType: "Injection moulded component",
    image: handleBeigeColorImg,
    materials: ["ABS", "PP Filled"],
    features: ["Class-A interior surface finish", "Color consistency", "Scratch resistance"],
  },
  {
    id: "screw-cap",
    name: "Screw Cap",
    slug: "screw-cap",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Protective and aesthetic plastic screw cap for covering exposed trim fasteners in automotive assemblies.",
    application: "Automotive Interior & Body",
    componentType: "Injection moulded component",
    image: screwCapImg,
    materials: ["Polypropylene (PP)", "LDPE"],
    features: ["Snap-fit design", "Corrosion protection", "Aesthetic concealment"],
  },
  {
    id: "carry-bag-hook",
    name: "Carry Bag Hook",
    slug: "carry-bag-hook",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Utility hook component mounted in vehicle trunk or cabin for securing utility bags and light cargo.",
    application: "Automotive Interior / Trunk",
    componentType: "Injection moulded component",
    image: carryBagHookImg,
    materials: ["Nylon 66", "POM", "ABS"],
    features: ["High tensile strength", "Integrated hinge mechanism", "Flush mounting profile"],
  },
  {
    id: "washer-assembly",
    name: "Washer Assembly",
    slug: "washer-assembly",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Multi-part plastic washer assembly designed for fluid seal and anti-rattling automotive applications.",
    application: "Automotive Assembly",
    componentType: "Plastic assembly",
    image: washerAssemblyImg,
    materials: ["POM", "Nylon 6", "LDPE"],
    features: ["Leak-proof design", "Self-lubricating polymer", "High wear resistance"],
  },
  {
    id: "bumper-a-clip",
    name: "Bumper A Clip",
    slug: "bumper-a-clip",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Primary front/rear bumper fascia retention clip ensuring tight alignment against chassis mounting points.",
    application: "Automotive Body Exterior",
    componentType: "Injection moulded component",
    image: bumperAClipImg,
    materials: ["Nylon 6", "Nylon 66"],
    features: ["High pull-out force retention", "Weather resistant grade", "Quick snap insertion"],
  },
  {
    id: "bumper-b-clip",
    name: "Bumper B Clip",
    slug: "bumper-b-clip",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Secondary bumper reinforcement clip engineered to absorb body flexing and maintain body-panel gaps.",
    application: "Automotive Body Exterior",
    componentType: "Injection moulded component",
    image: bumperBClipImg,
    materials: ["Nylon 6", "Polyacetal"],
    features: ["Vibration dampening", "Impact resilience", "Exact OEM tolerance"],
  },
  {
    id: "body-plug",
    name: "Body Plug",
    slug: "body-plug",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Sealing plug for floor pan and chassis drainage holes to prevent dust, water and noise ingress into vehicle cabin.",
    application: "Automotive Chassis / Underbody",
    componentType: "Injection moulded component",
    image: bodyPlugImg,
    materials: ["LDPE", "Thermoplastic Elastomer", "PP"],
    features: ["Watertight seal", "Chemical & oil resistance", "Easy snap installation"],
  },
  {
    id: "hole-plug",
    name: "Hole Plug",
    slug: "hole-plug",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Acoustic and sealing plug for sheet metal panels, door frames and firewall pass-through locations.",
    application: "Automotive Body & Frame",
    componentType: "Injection moulded component",
    image: holePlugImg,
    materials: ["LDPE", "HDPE", "PP"],
    features: ["Flush fit profile", "Acoustic hole sealing", "Temperature stability"],
  },
  {
    id: "rib-lock",
    name: "Rib Lock",
    slug: "rib-lock",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Structural ribbed locking fastener for routing wire harnesses, brake lines and fuel tubes safely along chassis.",
    application: "Automotive Wiring & Piping",
    componentType: "Injection moulded component",
    image: ribLockImg,
    materials: ["Nylon 66 Heat Stabilized"],
    features: ["Ribbed locking teeth", "Thermal stability up to 120°C", "High holding strength"],
  },
  {
    id: "tail-lamp-catcher",
    name: "Tail Lamp Catcher",
    slug: "tail-lamp-catcher",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Precision mounting catcher component for tail lamp housing alignment and secure body anchoring.",
    application: "Automotive Lighting",
    componentType: "Injection moulded component",
    image: tailLampCatcherImg,
    materials: ["ABS", "Polycarbonate", "POM"],
    features: ["Exact opto-electronic alignment", "Thermal distortion resistant", "High impact strength"],
  },
  {
    id: "fir-tree-clip",
    name: "Fir Tree Clip",
    slug: "fir-tree-clip",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Barbed fir-tree design fastener for blind-hole mounting into metal panels, heat shields and insulation pads.",
    application: "Automotive Trim & Insulation",
    componentType: "Injection moulded component",
    image: firTreeClipImg,
    materials: ["Nylon 6", "Nylon 66"],
    features: ["Multidirectional barbed ribs", "Fits multiple panel thicknesses", "Low insertion / high extraction force"],
  },
  {
    id: "weather-strips",
    name: "Weather Strips",
    slug: "weather-strips",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Moulded plastic retention corner and joiner pieces for door and window weather-strip sealing profiles.",
    application: "Automotive Sealing Systems",
    componentType: "Injection moulded component",
    image: weatherStripsImg,
    materials: ["PP", "EPDM-TPE", "POM"],
    features: ["Weather & ozone resistant", "Flexible sealing lip", "Tight tolerance profile"],
  },
  {
    id: "rubber-clips",
    name: "Rubber Clips",
    slug: "rubber-clips",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Hybrid rubber-overmoulded plastic clip for vibration damping in exhaust, radiator and engine bay mounting.",
    application: "Automotive Engine & Underbody",
    componentType: "Injection moulded component",
    image: rubberClipsImg,
    materials: ["Nylon 6", "TPE / Rubber"],
    features: ["Noise & vibration harshness (NVH) isolation", "Heat resistance", "Long fatigue life"],
  },
  {
    id: "clips",
    name: "Clips",
    slug: "clips",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Diverse range of specialty retention clips including fender clips, carpet clips, link rod holders and parcel shelf clips.",
    application: "Automotive Trim & Body",
    componentType: "Injection moulded component",
    image: clipsImg,
    materials: ["POM", "Nylon 6", "PP"],
    features: ["High spring recovery", "Corrosion free", "Custom customer designs"],
  },
  {
    id: "cable-tie",
    name: "Cable Tie",
    slug: "cable-tie",
    categorySlug: "automotive",
    category: "Automotive Critical Parts",
    description: "Engineering nylon cable ties for electrical harness bundling, engine management wiring and industrial tubing.",
    application: "Automotive & Electrical",
    componentType: "Injection moulded component",
    image: cableTieImg,
    materials: ["Nylon 66 Weather Resistant"],
    features: ["High tensile loop strength", "UV & chemical resistance", "Self-locking pawl mechanism"],
  },

  // APPLIANCE CRITICAL PRODUCTS
  {
    id: "ac-fan-components",
    name: "AC Fan Components",
    slug: "ac-fan-components",
    categorySlug: "appliance",
    category: "Appliance Critical Products",
    description: "Precision moulded plastic components represented in SPIPL's product portfolio for AC fan and air handler applications.",
    application: "Appliance & HVAC",
    componentType: "Injection moulded component",
    image: acFanComponentsImg,
    materials: ["Filled Polypropylene", "ABS", "SAN"],
    features: ["Low aerodynamic noise", "Dynamic balance stability", "High rigidity and thermal stability"],
  },

  // DEFENCE CRITICAL PARTS
  {
    id: "radome",
    name: "Radome",
    slug: "radome",
    categorySlug: "defence",
    category: "Defence Critical Parts",
    description: "Precision radar and antenna protective enclosure dome moulded with RF-transparent engineering polymer for defence systems.",
    application: "Defence Critical Applications",
    componentType: "Engineering plastic component",
    image: radomeImg,
    materials: ["Polycarbonate", "Specialty Engineering Polymer"],
    features: ["RF signal transparency", "High impact & ballistic toughness", "Extreme temperature tolerance"],
  },
  {
    id: "switch-housing",
    name: "Switch Housing",
    slug: "switch-housing",
    categorySlug: "defence",
    category: "Defence Critical Parts",
    description: "Ruggedized electrical switch enclosure component built to military specifications for environmental ingress and mechanical shock.",
    application: "Defence Electronics",
    componentType: "Injection moulded component",
    image: switchHousingImg,
    materials: ["Nylon 66 Flame Retardant", "Polycarbonate"],
    features: ["IP-rated sealing capability", "Flame retardant (UL94 V-0)", "High mechanical impact strength"],
  },
  {
    id: "timer-plug",
    name: "Timer Plug",
    slug: "timer-plug",
    categorySlug: "defence",
    category: "Defence Critical Parts",
    description: "High-precision timer plug component for defence electronic fuzing, timing modules and tactical equipment assemblies.",
    application: "Defence Equipment",
    componentType: "Injection moulded component",
    image: timerPlugImg,
    materials: ["POM (Polyacetal)", "Nylon 66"],
    features: ["Ultra-tight dimensional tolerance", "Zero flash moulding precision", "High dielectric strength"],
  },
];
