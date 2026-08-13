export interface TeamMember {
  name: string;
  role: string;
  department: "Executive Leadership" | "Plant Leadership" | "Department Heads" | "Engineering & Support";
}

export const leadershipTeam: TeamMember[] = [
  {
    name: "Mr. Sharad Nikam",
    role: "Managing Director",
    department: "Executive Leadership",
  },
  {
    name: "Mr. Vitthal Khandagale",
    role: "Plant Head",
    department: "Plant Leadership",
  },
];

export const functionalHeads: TeamMember[] = [
  {
    name: "Mr. Pratap B",
    role: "Toolroom Manager",
    department: "Department Heads",
  },
  {
    name: "Mr. Santosh N",
    role: "Production Manager",
    department: "Department Heads",
  },
  {
    name: "Mr. Shoaib Shaikh",
    role: "Quality Manager",
    department: "Department Heads",
  },
  {
    name: "Mrs. Dipali Nehe",
    role: "PPC / Customer Support",
    department: "Department Heads",
  },
  {
    name: "Mr. Yogesh Dhangar",
    role: "Store & Purchase",
    department: "Department Heads",
  },
];

export const engineeringSupportTeam: TeamMember[] = [
  { name: "Mr. Bapu", role: "Toolroom Engineer", department: "Engineering & Support" },
  { name: "Mr. Manish Gaikwad", role: "Quality Engineer / Inprocess", department: "Engineering & Support" },
  { name: "Mr. Laxman Sutar", role: "Quality Sr. Engineer", department: "Engineering & Support" },
  { name: "Mrs. Poonam", role: "Accounts / HR Executive", department: "Engineering & Support" },
  { name: "Mr. Dhirendar", role: "Quality Inspector", department: "Engineering & Support" },
  { name: "Mr. Vinod Yadav", role: "Production Engineer", department: "Engineering & Support" },
  { name: "Mr. Gangaram", role: "Production Engineer", department: "Engineering & Support" },
  { name: "Mr. Akashkumar", role: "Quality Firewall", department: "Engineering & Support" },
  { name: "Mrs. Nita Gudekar", role: "Quality Inprocess", department: "Engineering & Support" },
  { name: "Mr. Baliram", role: "Machine Maintenance", department: "Engineering & Support" },
  { name: "Mr. Akhilesh Yadav", role: "Shift Supervisor", department: "Engineering & Support" },
  { name: "Mr. Akshay K", role: "Shift Supervisor", department: "Engineering & Support" },
];
