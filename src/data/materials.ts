/**
 * Polymers and engineering materials processed by SPIPL.
 */
export interface Material {
  name: string;
  category: "Engineering Polymers" | "Commodity Polymers";
  abbreviation: string;
}

export const materialsList: Material[] = [
  { name: "Acrylonitrile Butadiene Styrene", category: "Engineering Polymers", abbreviation: "ABS" },
  { name: "Filled Polypropylene", category: "Commodity Polymers", abbreviation: "Filled PP" },
  { name: "Unfilled Polypropylene", category: "Commodity Polymers", abbreviation: "Unfilled PP" },
  { name: "Polyacetal / POM", category: "Engineering Polymers", abbreviation: "POM" },
  { name: "Polyamide 6 (Nylon 6)", category: "Engineering Polymers", abbreviation: "Nylon 6" },
  { name: "Polyamide 66 (Nylon 66)", category: "Engineering Polymers", abbreviation: "Nylon 66" },
  { name: "Low-Density Polyethylene", category: "Commodity Polymers", abbreviation: "LDPE" },
  { name: "Polypropylene", category: "Commodity Polymers", abbreviation: "PP" },
  { name: "High-Density Polyethylene", category: "Commodity Polymers", abbreviation: "HDPE" },
  { name: "Polycarbonate", category: "Engineering Polymers", abbreviation: "PC" },
  { name: "Polyvinyl Chloride", category: "Engineering Polymers", abbreviation: "PVC" },
  { name: "General Purpose Polystyrene", category: "Commodity Polymers", abbreviation: "GPPS" },
  { name: "High Impact Polystyrene", category: "Commodity Polymers", abbreviation: "HIPS" },
  { name: "Acrylic (PMMA)", category: "Engineering Polymers", abbreviation: "Acrylic" },
];

export const materialTickerItems = [
  "ABS",
  "PP Filled",
  "Unfilled PP",
  "POM",
  "Nylon 6",
  "Nylon 66",
  "LDPE",
  "PP",
  "HDPE",
  "Polycarbonate (PC)",
  "PVC",
  "GPPS",
  "HIPS",
  "Acrylic",
];
