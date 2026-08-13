export interface Machine {
  id: string;
  name: string;
  make: string;
  tonnage: number; // in Tons
  tieBarDistance: string; // e.g. "530 × 530 mm"
  shotWeight: string; // e.g. "532 g"
  corePull: string; // e.g. "2 core pulls"
  status: "Active Production" | "Additional Machines — Status to be Confirmed";
}

export const verifiedMachines: Machine[] = [
  {
    id: "machine-01",
    name: "MACHINE 01",
    make: "TUP Taiwan",
    tonnage: 250,
    tieBarDistance: "530 × 530 mm",
    shotWeight: "532 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-02",
    name: "MACHINE 02",
    make: "L&T Demag",
    tonnage: 200,
    tieBarDistance: "460 × 460 mm",
    shotWeight: "500 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-03",
    name: "MACHINE 03",
    make: "STM",
    tonnage: 180,
    tieBarDistance: "510 × 510 mm",
    shotWeight: "500 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-04",
    name: "MACHINE 04",
    make: "STM",
    tonnage: 180,
    tieBarDistance: "510 × 510 mm",
    shotWeight: "500 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-05",
    name: "MACHINE 05",
    make: "TUP Taiwan",
    tonnage: 160,
    tieBarDistance: "470 × 470 mm",
    shotWeight: "371 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-06",
    name: "MACHINE 06",
    make: "TUP Taiwan",
    tonnage: 160,
    tieBarDistance: "470 × 470 mm",
    shotWeight: "371 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-07",
    name: "MACHINE 07",
    make: "STM",
    tonnage: 150,
    tieBarDistance: "430 × 430 mm",
    shotWeight: "320 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-08",
    name: "MACHINE 08",
    make: "STM",
    tonnage: 150,
    tieBarDistance: "430 × 430 mm",
    shotWeight: "320 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-09",
    name: "MACHINE 09",
    make: "TUP Taiwan",
    tonnage: 120,
    tieBarDistance: "410 × 410 mm",
    shotWeight: "265 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-10",
    name: "MACHINE 10",
    make: "ESM",
    tonnage: 120,
    tieBarDistance: "420 × 420 mm",
    shotWeight: "225 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-11",
    name: "MACHINE 11",
    make: "CHENDE",
    tonnage: 110,
    tieBarDistance: "380 × 380 mm",
    shotWeight: "140 g",
    corePull: "2 core pulls",
    status: "Active Production",
  },
  {
    id: "machine-12",
    name: "MACHINE 12",
    make: "TUP Taiwan",
    tonnage: 100,
    tieBarDistance: "360 × 360 mm",
    shotWeight: "120 g",
    corePull: "1 core pull",
    status: "Active Production",
  },
];

export const additionalMachines: Machine[] = [
  {
    id: "machine-13",
    name: "ADDITIONAL MACHINE 01",
    make: "TUP Taiwan",
    tonnage: 380,
    tieBarDistance: "830 × 780 mm",
    shotWeight: "660 g",
    corePull: "2 core pulls",
    status: "Additional Machines — Status to be Confirmed",
  },
  {
    id: "machine-14",
    name: "ADDITIONAL MACHINE 02",
    make: "TUP Taiwan",
    tonnage: 450,
    tieBarDistance: "920 × 870 mm",
    shotWeight: "980 g",
    corePull: "2 core pulls",
    status: "Additional Machines — Status to be Confirmed",
  },
];

export const totalActiveMachinesCount = verifiedMachines.length;
export const totalInstalledTonnageRange = `${Math.min(...verifiedMachines.map((m) => m.tonnage))}T – ${Math.max(...verifiedMachines.map((m) => m.tonnage))}T`;
export const largestVerifiedMachine = `${Math.max(...verifiedMachines.map((m) => m.tonnage))} Ton (${verifiedMachines.find((m) => m.tonnage === 250)?.make})`;
