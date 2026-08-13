import hero from "@/assets/hero-factory.jpg";
import facility from "@/assets/facility.jpg";
import laser from "@/assets/cap-laser.jpg";
import bending from "@/assets/cap-bending.jpg";
import coating from "@/assets/cap-coating.jpg";
import quality from "@/assets/cap-quality.jpg";
import sheetMetal from "@/assets/prod-sheet-metal.jpg";
import stamping from "@/assets/prod-stamping.jpg";
import cnc from "@/assets/prod-cnc.jpg";
import enclosures from "@/assets/prod-enclosures.jpg";
import welded from "@/assets/prod-welded.jpg";
import brackets from "@/assets/prod-brackets.jpg";

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide";
};

export const galleryCategories = [
  "All",
  "Factory",
  "Machinery",
  "Products",
  "Production",
  "Quality",
];

export const galleryItems: GalleryItem[] = [
  { src: hero, alt: "Press brake and laser cutting bays on the production floor", category: "Factory", span: "wide" },
  { src: sheetMetal, alt: "Laser-cut sheet metal components on a workbench", category: "Products" },
  { src: laser, alt: "Fiber laser cutting steel sheet", category: "Machinery", span: "tall" },
  { src: brackets, alt: "Formed steel mounting brackets", category: "Products" },
  { src: bending, alt: "Sheet being formed on a press brake", category: "Production" },
  { src: facility, alt: "Manufacturing bay with overhead crane", category: "Factory", span: "wide" },
  { src: cnc, alt: "CNC machined components with digital caliper", category: "Products" },
  { src: coating, alt: "Powder coating conveyor line", category: "Production", span: "tall" },
  { src: quality, alt: "Inspector measuring a component on a measuring machine", category: "Quality" },
  { src: enclosures, alt: "Powder coated industrial enclosures", category: "Products" },
  { src: welded, alt: "Welded steel frame assembly on a jig table", category: "Production" },
  { src: stamping, alt: "Tray of stamped and machined metal parts", category: "Products" },
];
