import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import applDefenceRealImg from "@/assets/logos/appl-defence-real.png";
import pittiePolymerRealImg from "@/assets/logos/pittie-polymer-real.png";

export function ITWLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="160" height="44" rx="6" fill="#CC0000" />
      {/* ITW Lettering */}
      <text
        x="18"
        y="32"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="26"
        fontWeight="900"
        fill="#FFFFFF"
        letterSpacing="2"
      >
        ITW
      </text>
      <text
        x="100"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#FFCCCC"
        letterSpacing="1.5"
      >
        INDIA
      </text>
    </svg>
  );
}

export function AmberLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 34L25 10H34L47 34H37L34 27H25L22 34H12ZM27 20L32 20L29.5 14.5L27 20Z"
        fill="#EE7023"
      />
      <text
        x="54"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="21"
        fontWeight="900"
        fill="#0F172A"
        letterSpacing="0.5"
      >
        amber
      </text>
      <text
        x="55"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill="#EE7023"
        letterSpacing="1.5"
      >
        ENTERPRISES INDIA LTD
      </text>
    </svg>
  );
}

export function EkaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text
        x="10"
        y="32"
        fontFamily="Arial Black, sans-serif"
        fontSize="27"
        fontWeight="900"
        fill="#00A859"
        letterSpacing="2"
      >
        EKA
      </text>
      <text
        x="92"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        fontWeight="800"
        fill="#0F172A"
        letterSpacing="1.5"
      >
        MOBILITY
      </text>
      <text
        x="92"
        y="36"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="700"
        fill="#00A859"
        letterSpacing="1"
      >
        PINNACLE GROUP
      </text>
    </svg>
  );
}

export function APPLDefenceLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 210 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="6" width="52" height="32" rx="4" fill="#C5281C" />
      <text
        x="11"
        y="28"
        fontFamily="Arial Black, sans-serif"
        fontSize="14"
        fontWeight="900"
        fill="#FFFFFF"
      >
        APPL
      </text>
      <text
        x="64"
        y="23"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="800"
        fill="#0F172A"
        letterSpacing="0.5"
      >
        APPL DEFENCE
      </text>
      <text
        x="64"
        y="34"
        fontFamily="Arial, sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill="#005A9C"
        letterSpacing="0.8"
      >
        &amp; TELECOMMUNICATIONS
      </text>
    </svg>
  );
}

export function PittiePolymerLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="8" y="7" width="30" height="30" rx="6" fill="#0F172A" />
      <text
        x="15"
        y="29"
        fontFamily="Arial Black, sans-serif"
        fontSize="17"
        fontWeight="900"
        fill="#FFFFFF"
      >
        P
      </text>
      <text
        x="46"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="900"
        fill="#0F172A"
        letterSpacing="1"
      >
        PITTIE
      </text>
      <text
        x="47"
        y="36"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="#2563EB"
        letterSpacing="1.5"
      >
        POLYMER PVT LTD
      </text>
    </svg>
  );
}

export function AnkitaPlastLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="22" cy="22" r="13" stroke="#EA580C" strokeWidth="4" fill="none" />
      <circle cx="22" cy="22" r="4.5" fill="#EA580C" />
      <text
        x="44"
        y="25"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="900"
        fill="#0F172A"
        letterSpacing="0.5"
      >
        ANKITA PLAST
      </text>
      <text
        x="45"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill="#EA580C"
        letterSpacing="1"
      >
        INDUSTRIES PVT LTD
      </text>
    </svg>
  );
}

export function ClientLogo({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "itw-india":
      return <ITWLogo className={cn("h-6 w-auto", className)} />;
    case "amber-enterprises":
      return <AmberLogo className={cn("h-6 w-auto", className)} />;
    case "pinnacle-mobility":
      return <EkaLogo className={cn("h-6 w-auto", className)} />;
    case "appl-defence":
      return (
        <img
          src={applDefenceRealImg}
          alt="APPL Defence & Telecommunications Pvt. Ltd."
          className={cn("h-5.5 w-auto object-contain", className)}
        />
      );
    case "pittie-polymer":
      return (
        <img
          src={pittiePolymerRealImg}
          alt="Pittie Polymer Pvt. Ltd."
          className={cn("h-6 w-auto object-contain rounded-sm", className)}
        />
      );
    case "ankita-plast":
      return <AnkitaPlastLogo className={cn("h-6 w-auto", className)} />;
    default:
      return null;
  }
}
