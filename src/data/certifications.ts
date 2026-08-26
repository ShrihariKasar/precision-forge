import shopFloorImg from "@/assets/spipl/shop_floor.png";
import iatfLogo from "@/assets/logos/iatf-16949.svg";
import isoLogo from "@/assets/logos/iso-9001.svg";

export interface Certification {
  id: string;
  name: string;
  standard: string;
  certificateNumber: string;
  iatfNumber?: string;
  certificationDate: string;
  issueDate: string;
  expiryDate: string;
  surveillance1st?: string;
  surveillance2nd?: string;
  issuingBody: string;
  scope: string;
  certificateVerified: boolean;
  image: string;
  logo?: string;
}

export const certifications: Certification[] = [
  {
    id: "iatf-16949",
    name: "IATF 16949:2016",
    standard: "Automotive Quality Management System",
    certificateNumber: "706623",
    iatfNumber: "0580234",
    certificationDate: "2025-08-11",
    issueDate: "2025-08-11",
    expiryDate: "2028-08-10",
    issuingBody: "BSI (British Standards Institution)",
    scope:
      "Manufacturing plastic injection moulding components and their assemblies, with product design excluded from the stated scope.",
    certificateVerified: true,
    image: shopFloorImg,
    logo: iatfLogo,
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    standard: "Quality Management System",
    certificateNumber: "99DQT109",
    certificationDate: "18/08/2025",
    issueDate: "18/08/2025",
    expiryDate: "18/08/2028",
    surveillance1st: "18/08/2026",
    surveillance2nd: "18/08/2027",
    issuingBody: "DQT Certification",
    scope:
      "Manufacture and supply of precision plastic injection moulded components, assemblies and engineering plastic products.",
    certificateVerified: true,
    image: shopFloorImg,
    logo: isoLogo,
  },
];
