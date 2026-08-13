export interface Customer {
  id: string;
  name: string;
  shortName: string;
  category: "Automotive / OEM" | "Appliance & Consumer" | "Defence & Telecom" | "Industrial Polymers";
}

export const customerList: Customer[] = [
  {
    id: "itw-india",
    name: "ITW India Pvt. Ltd.",
    shortName: "ITW INDIA",
    category: "Automotive / OEM",
  },
  {
    id: "amber-enterprises",
    name: "Amber Enterprises India Ltd.",
    shortName: "AMBER ENTERPRISES",
    category: "Appliance & Consumer",
  },
  {
    id: "pinnacle-mobility",
    name: "Pinnacle Mobility Solutions Pvt. Ltd. (EKA)",
    shortName: "PINNACLE MOBILITY (EKA)",
    category: "Automotive / OEM",
  },
  {
    id: "appl-defence",
    name: "APPL Defence & Telecommunications Pvt. Ltd.",
    shortName: "APPL DEFENCE",
    category: "Defence & Telecom",
  },
  {
    id: "pittie-polymer",
    name: "Pittie Polymer Pvt. Ltd.",
    shortName: "PITTIE POLYMER",
    category: "Industrial Polymers",
  },
  {
    id: "ankita-plast",
    name: "Ankita Plast Industries Pvt. Ltd.",
    shortName: "ANKITA PLAST",
    category: "Industrial Polymers",
  },
];
