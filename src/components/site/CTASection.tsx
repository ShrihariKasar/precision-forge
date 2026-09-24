import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import heroPlantExteriorImg from "@/assets/real/hero_plant_exterior.jpg";
import { company } from "@/data/company";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Looking for a plastic injection moulding partner?",
  text = "Connect with Sanchit Polymer Industries Pvt. Ltd. to discuss your component requirements, manufacturing specifications and production enquiries.",
}: {
  title?: string;
  text?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", requirement: "" });
    setStatus("idle");
  };

  return (
    <section className="relative isolate overflow-hidden border-y border-border">
      <img
        src={heroPlantExteriorImg}
        alt="Sanchit Polymer Industries Manufacturing Facility"
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/90 backdrop-blur-[2px]" />
      
      <div className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Company Contact Details */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal className="label-xs text-accent uppercase tracking-wider font-mono">
              GET IN TOUCH WITH SPIPL
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-3xl font-medium leading-[1.08] sm:text-4xl lg:text-5xl text-foreground">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {text}
              </p>
            </Reveal>

            {/* Quick Contact Badges */}
            <Reveal delay={200} className="mt-8 space-y-3 pt-2">
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
                  <Phone className="size-4" />
                </div>
                <span>+91 {company.phones.join(" / +91 ")}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
                  <Mail className="size-4" />
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
                  <MapPin className="size-4" />
                </div>
                <span>Koregaon Bhima, Tal. Shirur, Pune – 412208</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Small Compact Contact Form */}
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal delay={160} variant="up">
              <div className="relative rounded-2xl border border-border/90 bg-surface/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                {status === "sent" ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 border border-accent text-accent">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium text-foreground">
                      Enquiry Received!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Thank you. Our engineering and dispatch team will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center justify-center rounded-md border border-border px-5 py-2 text-xs font-mono tracking-wider text-muted-foreground uppercase hover:border-accent hover:text-accent transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-foreground">
                        Quick Contact / RFQ
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Share your requirement and get a quick turnaround from our team.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="cta-name"
                          className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                        >
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="Your Name"
                          className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="cta-phone"
                            className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                          >
                            Phone Number <span className="text-accent">*</span>
                          </label>
                          <input
                            id="cta-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            placeholder="+91 Phone"
                            className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="cta-email"
                            className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                          >
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                            placeholder="name@company.com"
                            className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="cta-req"
                          className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                        >
                          Requirement / Notes
                        </label>
                        <textarea
                          id="cta-req"
                          rows={3}
                          value={formData.requirement}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, requirement: e.target.value }))
                          }
                          placeholder="e.g., Nylon 66 automotive clips, 50,000 pcs/month..."
                          className="w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors resize-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-accent-foreground uppercase transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-60 cursor-pointer"
                      >
                        {status === "sending" ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <Send className="size-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

