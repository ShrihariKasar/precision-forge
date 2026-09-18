import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import qualityFirewallImg from "@/assets/real/quality_firewall_lab.jpg";
import { company } from "@/data/company";
import { certifications, Certification } from "@/data/certifications";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/ui";
import { CTASection } from "@/components/site/CTASection";
import { Award, ShieldCheck, X, Maximize2 } from "lucide-react";

export const Route = createFileRoute("/quality/certifications")({
  head: () => ({
    meta: [
      { title: `Certifications | ${company.name}` },
      {
        name: "description",
        content:
          "IATF 16949:2016 and ISO 9001:2015 quality management system certifications for Sanchit Polymer Industries Pvt. Ltd.",
      },
    ],
    links: [{ rel: "canonical", href: "/quality/certifications" }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Verified Quality Standards"
        title="Quality Certifications"
        description="IATF 16949:2016 automotive quality certification and ISO 9001:2015 quality management system credentials."
        image={qualityFirewallImg}
      />

      <section className="container-x section-y">
        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal key={cert.id} className="rounded-lg border border-border bg-surface p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {cert.logo ? (
                    <img src={cert.logo} alt={`${cert.name} Logo`} className="size-14 shrink-0 object-contain drop-shadow" />
                  ) : (
                    <Award className="size-8 text-accent shrink-0" />
                  )}
                  <div>
                    <span className="label-xs text-accent uppercase font-mono">{cert.standard}</span>
                    <h2 className="mt-0.5 text-2xl font-bold text-foreground">{cert.name}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Issuing Body: {cert.issuingBody}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-border bg-background p-4 space-y-2 text-xs font-mono text-muted-foreground">
                <div className="flex justify-between">
                  <span>Certificate No:</span>
                  <span className="text-foreground font-semibold">{cert.certificateNumber}</span>
                </div>
                {cert.iatfNumber && (
                  <div className="flex justify-between">
                    <span>IATF No:</span>
                    <span className="text-foreground font-semibold">{cert.iatfNumber}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Issue Date:</span>
                  <span className="text-foreground">{cert.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Expiry Date:</span>
                  <span className="text-foreground font-semibold text-emerald-400">{cert.expiryDate}</span>
                </div>
                {cert.surveillance1st && (
                  <div className="flex justify-between">
                    <span>1st Surveillance:</span>
                    <span className="text-foreground">{cert.surveillance1st}</span>
                  </div>
                )}
                {cert.surveillance2nd && (
                  <div className="flex justify-between">
                    <span>2nd Surveillance:</span>
                    <span className="text-foreground">{cert.surveillance2nd}</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="label-xs text-muted-foreground uppercase mb-2">Scope of Registration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.scope}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 text-xs font-mono text-accent hover:border-accent transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" /> View Certificate Document
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative max-w-3xl w-full rounded-lg border border-border bg-background p-6 space-y-4">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground focus:outline-none"
            >
              <X className="size-6" />
            </button>

            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Award className="size-6 text-accent" />
              <div>
                <h3 className="text-xl font-bold text-foreground">{selectedCert.name}</h3>
                <p className="text-xs text-muted-foreground">{selectedCert.standard} — {selectedCert.issuingBody}</p>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded border border-border bg-surface flex items-center justify-center">
              <img src={selectedCert.image} alt={selectedCert.name} className="w-full h-full object-cover" />
            </div>

            <div className="text-xs text-muted-foreground font-mono space-y-1">
              <p>Certificate Number: {selectedCert.certificateNumber}</p>
              {selectedCert.iatfNumber && <p>IATF Number: {selectedCert.iatfNumber}</p>}
              <p>Valid Expiry Date: {selectedCert.expiryDate}</p>
              <p>Scope: {selectedCert.scope}</p>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}
