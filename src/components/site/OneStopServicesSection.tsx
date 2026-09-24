import { Reveal } from "./Reveal";
import { SectionHeading, TextLink } from "./ui";
import { ClientLogo } from "./ClientLogos";

export interface SectorClient {
  id: string;
  category: string;
  shortCategory: string;
  clientName: string;
}

const sectorClients: SectorClient[] = [
  {
    id: "itw-india",
    category: "Automotive / OEM",
    shortCategory: "Automotive",
    clientName: "ITW India Pvt. Ltd.",
  },
  {
    id: "amber-enterprises",
    category: "Appliance & Consumer",
    shortCategory: "Appliance",
    clientName: "Amber Enterprises India Ltd.",
  },
  {
    id: "pinnacle-mobility",
    category: "Automotive / OEM",
    shortCategory: "Automotive",
    clientName: "Pinnacle Mobility Solutions Pvt. Ltd. (EKA)",
  },
  {
    id: "appl-defence",
    category: "Defence & Telecom",
    shortCategory: "Defence",
    clientName: "APPL Defence & Telecommunications Pvt. Ltd.",
  },
  {
    id: "pittie-polymer",
    category: "Industrial Polymers",
    shortCategory: "Polymers",
    clientName: "Pittie Polymer Pvt. Ltd.",
  },
  {
    id: "ankita-plast",
    category: "Industrial Polymers",
    shortCategory: "Polymers",
    clientName: "Ankita Plast Industries Pvt. Ltd.",
  },
];

export function OneStopServicesSection() {
  return (
    <section className="surface-light border-b border-border py-10 md:py-14">
      <div className="container-x">
        {/* Centered Section Header */}
        <SectionHeading
          align="center"
          className="max-w-6xl mx-auto"
          eyebrow="ONE-STOP SERVICES & CLIENT SECTORS"
          title={
            <div className="flex flex-col items-center gap-2">
              <span className="text-[clamp(1.3rem,2.7vw,2.6rem)] font-medium tracking-tight leading-tight block whitespace-normal lg:whitespace-nowrap">
                One-Stop Precision Injection Mold & Molding Services
              </span>
              <span className="text-base sm:text-lg md:text-xl font-semibold text-foreground/90 tracking-normal block mt-1">
                Trusted by Leading Industrial Clients
              </span>
            </div>
          }
          description={
            <span className="block whitespace-normal lg:whitespace-nowrap text-xs sm:text-sm md:text-base">
              SPIPL provides one-stop precision injection mold and molding services from mold design, fabrication, tooling trial, validation to mass production. We serve:
            </span>
          }
        />

        {/* 6 Client Cards: 3 on top row, 3 below (compact size) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
          {sectorClients.map((client, idx) => (
            <Reveal
              key={client.id}
              delay={idx * 50}
              className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-surface/60 p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:border-accent/60 hover:bg-background hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70 group-hover:text-accent transition-colors">
                  {client.shortCategory}
                </span>
                <div className="flex h-6.5 max-w-[85px] shrink-0 items-center justify-center rounded bg-white px-2 py-0.5 border border-slate-200/90 shadow-2xs">
                  <ClientLogo id={client.id} className="h-4 max-h-4.5 w-auto object-contain" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-1 group-hover:text-accent transition-colors">
                  {client.clientName}
                </h3>
                <span className="text-xs text-muted-foreground/70 truncate mt-0.5">
                  {client.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Clientele Link */}
        <Reveal delay={180} className="mt-8 text-center">
          <TextLink to="/customers">View full industrial clientele portfolio →</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
