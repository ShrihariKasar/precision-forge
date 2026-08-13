import heroPlantImg from "@/assets/spipl/hero_plant.png";
import shopFloorImg from "@/assets/spipl/shop_floor.png";
import automotiveClipsImg from "@/assets/spipl/automotive_clips.png";
import applianceComponentsImg from "@/assets/spipl/appliance_components.png";
import defenceComponentsImg from "@/assets/spipl/defence_components.png";

export interface GalleryItem {
  id: string;
  title: string;
  category: "AUTOMOTIVE" | "APPLIANCES" | "DEFENCE" | "FACILITY";
  aspect: "landscape" | "portrait" | "square" | "wide";
  image: string;
  caption: string;
}

export const galleryCategories = ["ALL", "AUTOMOTIVE", "APPLIANCES", "DEFENCE", "FACILITY"] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g-auto-1",
    title: "Automotive Bumper Clips & Body Plugs",
    category: "AUTOMOTIVE",
    aspect: "landscape",
    image: automotiveClipsImg,
    caption: "Injection moulded automotive clips, body plugs and fir tree fasteners for vehicle assembly.",
  },
  {
    id: "g-auto-2",
    title: "Verus Type Clamps & Cable Ties",
    category: "AUTOMOTIVE",
    aspect: "square",
    image: automotiveClipsImg,
    caption: "High-tensile nylon cable ties and hose clamping components produced for automotive OEMs.",
  },
  {
    id: "g-auto-3",
    title: "Grab Handle Flexible & Beige Trim",
    category: "AUTOMOTIVE",
    aspect: "portrait",
    image: automotiveClipsImg,
    caption: "Class-A surface finish interior grab handles and screw caps.",
  },
  {
    id: "g-app-1",
    title: "AC Fan Components",
    category: "APPLIANCES",
    aspect: "wide",
    image: applianceComponentsImg,
    caption: "Precision moulded plastic AC fan components for home appliance and air handler applications.",
  },
  {
    id: "g-def-1",
    title: "Defence Radome Enclosure",
    category: "DEFENCE",
    aspect: "landscape",
    image: defenceComponentsImg,
    caption: "RF-transparent defence radome housing component moulded from engineering polycarbonate.",
  },
  {
    id: "g-def-2",
    title: "Switch Housing & Timer Plug",
    category: "DEFENCE",
    aspect: "square",
    image: defenceComponentsImg,
    caption: "Ruggedized defence electronic switch housing and high-precision timer plug components.",
  },
  {
    id: "g-fac-1",
    title: "SPIPL Manufacturing Plant Exterior",
    category: "FACILITY",
    aspect: "wide",
    image: heroPlantImg,
    caption: "9,000 sq. ft. built-up plastic injection moulding manufacturing facility in Koregaon Bhima, Pune.",
  },
  {
    id: "g-fac-2",
    title: "Injection Moulding Shop Floor",
    category: "FACILITY",
    aspect: "landscape",
    image: shopFloorImg,
    caption: "Automated injection moulding machine shop floor operating 100T to 250T presses.",
  },
  {
    id: "g-fac-3",
    title: "Quality Assurance Laboratory",
    category: "FACILITY",
    aspect: "portrait",
    image: shopFloorImg,
    caption: "QA lab equipped with digital verniers, micrometers, pin gauges and digital lux meters.",
  },
];
