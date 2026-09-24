import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import shopFloorMainImg from "@/assets/real/shop_floor_main.jpg";
import shopFloorSecondaryImg from "@/assets/real/shop_floor_secondary.jpg";
import machineChenHsongImg from "@/assets/real/machine_chen_hsong_250t.jpg";
import machineStm150tImg from "@/assets/real/machine_stm_150t.jpg";
import machineOverheadCraneImg from "@/assets/real/machine_overhead_crane.jpg";
import qualityFirewallImg from "@/assets/real/quality_firewall_lab.jpg";
import qualitySortingImg from "@/assets/real/quality_inspection_sorting.jpg";
import toolMouldMaintenanceImg from "@/assets/real/tool_mould_maintenance.jpg";
import toolStorageRacksImg from "@/assets/real/tool_storage_racks.jpg";
import rawMaterialInventoryImg from "@/assets/real/raw_material_inventory.jpg";
import finishedGoodsRacksImg from "@/assets/real/finished_goods_racks.jpg";
import polymerSampleBoardImg from "@/assets/real/polymer_sample_board.jpg";
import plantOfficeImg from "@/assets/real/plant_office_management.jpg";
import factoryEntranceImg from "@/assets/real/factory_entrance.jpg";
import plantSubstationImg from "@/assets/real/plant_electrical_substation.jpg";

// New high-res plant & quality assets
import qualityLabInspectionImg from "@/assets/images/qaulity.jpeg";
import heroMouldingMachinesImg from "@/assets/images/hero.jpg";
import heroHopperDryersImg from "@/assets/images/hero section - Copy.jpeg";

// Newly added plant & shop floor gallery assets
import manualInspectionBay2105Img from "@/assets/real/shop_floor_manual_inspection_bay_2105.jpg";
import factoryFinishedGoods6562Img from "@/assets/real/factory_finished_goods_storage_area_6562.jpg";
import toolStorageRacks6535Img from "@/assets/real/tool_storage_racks_6535.jpg";
import toolMaintenanceBay6533Img from "@/assets/real/tool_maintenance_bay_6533.jpg";
import shopFloorMainBay6528Img from "@/assets/real/shop_floor_main_bay_6528.jpg";
import qualityInspectionShopFloor6484Img from "@/assets/real/factory_quality_inspection_shop_floor_6484.jpg";
import employeeTeamGroup5656Img from "@/assets/real/employee_team_group_5656.jpg";

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
    id: "g-fac-md",
    title: "MD - Sanchit Polymers",
    category: "FACILITY",
    aspect: "landscape",
    image: plantOfficeImg,
    caption: "Executive management and PPC office overseeing plant operations, customer support, and production scheduling.",
  },
  {
    id: "g-fac-1",
    title: "SPIPL Manufacturing Plant Exterior",
    category: "FACILITY",
    aspect: "wide",
    image: heroPlantExteriorImg,
    caption: "10,000 sq. ft. land area and manufacturing facility in Koregaon Bhima, Tal. Shirur, Pune.",
  },
  {
    id: "g-fac-team",
    title: "SPIPL Production & Engineering Team",
    category: "FACILITY",
    aspect: "landscape",
    image: employeeTeamGroup5656Img,
    caption: "Dedicated machine operators, quality assurance technicians, and tooling engineers at Sanchit Polymer.",
  },
  {
    id: "g-fac-qa-bay",
    title: "Quality Inspection & Verification Bay",
    category: "FACILITY",
    aspect: "portrait",
    image: qualityLabInspectionImg,
    caption: "Dedicated in-plant inspection tables with calibrated lighting for 100% component verification.",
  },
  {
    id: "g-fac-moulding-bay",
    title: "STM Precision Injection Moulding Presses",
    category: "FACILITY",
    aspect: "portrait",
    image: heroMouldingMachinesImg,
    caption: "STM 180T and STM 150T automated injection moulding machines operating in production bay.",
  },
  {
    id: "g-fac-hoppers-bay",
    title: "Material Hopper Dryers & Overhead Crane",
    category: "FACILITY",
    aspect: "portrait",
    image: heroHopperDryersImg,
    caption: "Dehumidifying material hopper dryers with overhead crane support for automated raw granule feeding.",
  },
  {
    id: "g-fac-2",
    title: "Injection Moulding Shop Floor Main Bay",
    category: "FACILITY",
    aspect: "landscape",
    image: shopFloorMainImg,
    caption: "9,000 sq. ft. built-up shop floor operating 12 verified moulding presses (100T – 250T).",
  },
  {
    id: "g-fac-3",
    title: "Chen Hsong 250T Moulding Machine",
    category: "FACILITY",
    aspect: "landscape",
    image: machineChenHsongImg,
    caption: "Heavy-duty automated injection moulding press for large automotive & industrial components.",
  },
  {
    id: "g-fac-4",
    title: "STM 150T Precision Moulding Press",
    category: "FACILITY",
    aspect: "landscape",
    image: machineStm150tImg,
    caption: "High-precision 150T injection moulding press configured for engineering polymer production.",
  },
  {
    id: "g-auto-1",
    title: "Quality Firewall Inspection & Sorting",
    category: "AUTOMOTIVE",
    aspect: "landscape",
    image: qualitySortingImg,
    caption: "In-process and final firewall inspection ensuring zero dimensional deviations on moulded parts.",
  },
  {
    id: "g-fac-5",
    title: "Dedicated Quality Control Lab",
    category: "FACILITY",
    aspect: "landscape",
    image: qualityFirewallImg,
    caption: "QA workstation with digital vernier calipers, micrometers, pin gauges and Mextech lux meters.",
  },
  {
    id: "g-fac-6",
    title: "Tool Mould Maintenance & Repair Bay",
    category: "FACILITY",
    aspect: "landscape",
    image: toolMouldMaintenanceImg,
    caption: "Associated SPRAJTECH tool room support table for die maintenance, polishing, and mould repairs.",
  },
  {
    id: "g-fac-7",
    title: "Mould & Die Storage Racks",
    category: "FACILITY",
    aspect: "landscape",
    image: toolStorageRacksImg,
    caption: "Organized high-capacity tooling racks housing customer single and multi-cavity injection moulds.",
  },
  {
    id: "g-fac-8",
    title: "Overhead Bridge Crane & Hoist",
    category: "FACILITY",
    aspect: "square",
    image: machineOverheadCraneImg,
    caption: "Shop floor electric overhead traveling crane for rapid, safe mould loading and changeovers.",
  },
  {
    id: "g-app-1",
    title: "Polymer Material & Component Board",
    category: "APPLIANCES",
    aspect: "landscape",
    image: polymerSampleBoardImg,
    caption: "Standardized sample board representing engineering polymers (Nylon, POM, ABS, PP, PC).",
  },
  {
    id: "g-fac-9",
    title: "Raw Material Polymer Granules Racking",
    category: "FACILITY",
    aspect: "landscape",
    image: rawMaterialInventoryImg,
    caption: "Dedicated warehouse racking for engineering thermoplastic granules and masterbatches.",
  },
  {
    id: "g-fac-10",
    title: "Finished Goods Inventory Racking",
    category: "FACILITY",
    aspect: "landscape",
    image: finishedGoodsRacksImg,
    caption: "Multi-tier inventory storage of precision automotive clips, body plugs, and fasteners ready for dispatch.",
  },
  {
    id: "g-fac-11",
    title: "Dedicated Electrical Substation",
    category: "FACILITY",
    aspect: "portrait",
    image: plantSubstationImg,
    caption: "Captive high-voltage electrical transformer and distribution switchgear powering 24x7 plant operations.",
  },
  {
    id: "g-fac-12",
    title: "Factory Main Entrance",
    category: "FACILITY",
    aspect: "landscape",
    image: factoryEntranceImg,
    caption: "Main security entrance and transport dock at Koregaon Bhima, Pune.",
  },
  {
    id: "g-fac-13",
    title: "Shop Floor Manual Inspection & Assembly Bay",
    category: "AUTOMOTIVE",
    aspect: "landscape",
    image: manualInspectionBay2105Img,
    caption: "Dedicated assembly and final inspection area ensuring zero-defect output for automotive components.",
  },
  {
    id: "g-fac-14",
    title: "Factory Finished Goods Storage Area",
    category: "FACILITY",
    aspect: "landscape",
    image: factoryFinishedGoods6562Img,
    caption: "Organized staging area with barcode-ready crates for OEM delivery runs and scheduled dispatches.",
  },
  {
    id: "g-fac-15",
    title: "Injection Mould Tool Storage Racks",
    category: "FACILITY",
    aspect: "landscape",
    image: toolStorageRacks6535Img,
    caption: "High-capacity heavy tooling racks housing client single and multi-cavity injection moulds.",
  },
  {
    id: "g-fac-16",
    title: "Tool Maintenance & Mould Repair Bay",
    category: "FACILITY",
    aspect: "landscape",
    image: toolMaintenanceBay6533Img,
    caption: "Associated SPRAJTECH tool room support table for die maintenance, polishing, and mould repairs.",
  },
  {
    id: "g-fac-17",
    title: "Moulding Shop Floor Main Bay Overview",
    category: "FACILITY",
    aspect: "landscape",
    image: shopFloorMainBay6528Img,
    caption: "9,000 sq. ft. built-up shop floor operating 12 verified moulding presses (100T – 250T).",
  },
  {
    id: "g-fac-20",
    title: "Quality Inspection Shop Floor Station",
    category: "AUTOMOTIVE",
    aspect: "landscape",
    image: qualityInspectionShopFloor6484Img,
    caption: "In-process quality inspection station ensuring dimensional accuracy against customer drawings.",
  },
  {
    id: "g-fac-21",
    title: "SPIPL Production & Engineering Team",
    category: "FACILITY",
    aspect: "landscape",
    image: employeeTeamGroup5656Img,
    caption: "Dedicated machine operators, quality assurance technicians, and tooling engineers at Sanchit Polymer.",
  },
];
