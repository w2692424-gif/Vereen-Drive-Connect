import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { seo } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";

import { Container, Notice, Reveal, Section, SectionHeading } from "@/components/site/ui";
import { LogoStacked } from "@/components/brand/Logo";
import garageNight from "@/assets/garage-night.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact & Assistance — Veeren Drive Connect",
      description:
        "Send your vehicle details and question. We provide independent in-car audio information and assistance, with clear limits on what we can confirm.",
      path: "/contact",
    }),
  component: ContactPage,
});

type Fields = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  reason: string;
  message: string;
};

const REASONS = [
  "In-car audio guidance",
  "SiriusXM-related information",
  "Vehicle audio support",
  "Connected entertainment guidance",
  "Service information",
  "General assistance",
];

const EMPTY: Fields = { name: "", email: "", phone: "", vehicle: "", reason: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.phone.trim() && !/^[+()\-\s\d]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  if (values.vehicle.trim().length < 2)
    errors.vehicle = "Please include your vehicle type, make or model year.";
  if (!values.reason) errors.reason = "Please choose a reason for contact.";
  if (values.message.trim().length < 20)
    errors.message = "Please describe your question in at least 20 characters.";
  return errors;
}

function ContactPage() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof Fields) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <>
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative isolate hidden lg:block">
          <img
            src={garageNight}
            alt="A dark modern car parked under a single overhead light in a concrete garage"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background"
          />
          <div className="relative flex h-full flex-col justify-between p-12">
            <LogoStacked />
            <div className="max-w-md">
              <h2 className="font-display text-3xl font-extrabold leading-tight">
                Tell us the vehicle and the question.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The more we know about your car and what you're trying to listen to, the more
                useful the answer will be.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 pb-20 pt-32 sm:px-10 lg:px-14 lg:pt-40">
          <Reveal>
            <SectionHeading
              kicker="Contact & Assistance"
              index="[ 01 ]"
              title="Get Assistance"
              intro="Independent guidance on in-car audio, infotainment and connected listening. We cannot access accounts, process payments or act on behalf of any provider."
            />
          </Reveal>

          <a
            href={PHONE_HREF}
            className="label-mono mt-8 inline-flex min-h-12 items-center gap-3 bg-brand px-6 py-4 text-brand-foreground transition-opacity hover:opacity-90"
          >
            Call {PHONE_DISPLAY}
          </a>


          <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
            <Input id="name" label="Name" required value={values.name} onChange={set("name")} error={errors.name} autoComplete="name" />
            <Input id="email" label="Email" type="email" required value={values.email} onChange={set("email")} error={errors.email} autoComplete="email" />
            <Input id="phone" label="Phone (optional)" type="tel" value={values.phone} onChange={set("phone")} error={errors.phone} autoComplete="tel" />
            <Input id="vehicle" label="Vehicle information" required value={values.vehicle} onChange={set("vehicle")} error={errors.vehicle} placeholder="e.g. SUV, 2019, factory head unit" />

            <div>
              <label htmlFor="reason" className="label-mono block text-muted-foreground">
                Reason for contact <span className="text-brand">*</span>
              </label>
              <select
                id="reason"
                required
                value={values.reason}
                onChange={(e) => set("reason")(e.target.value)}
                aria-invalid={Boolean(errors.reason)}
                aria-describedby={errors.reason ? "reason-error" : undefined}
                className={`mt-3 h-12 w-full border bg-background px-3 text-sm transition-colors focus:border-brand ${
                  errors.reason ? "border-destructive" : "border-input hover:border-border-strong"
                }`}
              >
                <option value="">Select…</option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.reason ? (
                <p id="reason-error" className="mt-2 text-xs text-destructive">
                  {errors.reason}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="label-mono block text-muted-foreground">
                Message <span className="text-brand">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Describe what you're trying to listen to, and what isn't clear."
                className={`mt-3 w-full resize-y border bg-background px-3 py-3 text-sm transition-colors focus:border-brand ${
                  errors.message ? "border-destructive" : "border-input hover:border-border-strong"
                }`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="label-mono group relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden border border-foreground bg-foreground px-6 py-4 text-background transition-colors hover:border-brand hover:text-brand-foreground disabled:opacity-70 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {status === "loading" ? "Checking your details" : "Submit request"}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-brand transition-transform duration-500 ease-out group-hover:translate-x-0"
              />
            </button>

            <div aria-live="polite" className="min-h-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-2 border-[color:var(--color-success)] bg-surface/70 px-5 py-4"
                >
                  <p className="label-mono text-[color:var(--color-success)]">Form validated</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Your details passed validation. This form is a front-end demonstration and is
                    not yet connected to a delivery service, so no message has been sent or stored.
                    Message delivery will be enabled once a contact destination is configured.
                  </p>
                </motion.div>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-destructive">
                  Some fields need attention. Please review the highlighted items above.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal>
            <h2 className="label-mono text-brand">Response expectations</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Response times will be published here once contact handling is finalised. We do not
              advertise a response window we cannot commit to.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="label-mono text-brand">Contact details</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Email: [PLACEHOLDER — email address not yet supplied]</li>
              <li>Phone: [PLACEHOLDER — phone number not yet supplied]</li>
              <li>Address: [PLACEHOLDER — business address not yet supplied]</li>
              <li>Hours: [PLACEHOLDER — business hours not yet supplied]</li>
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="label-mono text-brand">Privacy</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Only share what's needed to answer your question. Do not send account numbers,
              passwords or payment details. See our Privacy Policy for how information is handled.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="mt-10">
          <Notice>
            Veeren Drive Connect is not SiriusXM and is not an official or authorised
            representative of any service provider. We cannot access, modify or cancel any
            subscription or account on your behalf.
          </Notice>
        </Reveal>
      </Section>

      <Container className="pb-20">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Placeholders marked above will be replaced once the corresponding business details are
          provided. Nothing on this page should be read as a commitment to a specific response
          time, availability or outcome.
        </p>
      </Container>
    </>
  );
}

function Input({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string;
  required?: boolean;
  placeholder?: string | undefined;
  autoComplete?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-mono block text-muted-foreground">
        {label} {required ? <span className="text-brand">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-3 h-12 w-full border bg-background px-3 text-sm transition-colors focus:border-brand ${
          error ? "border-destructive" : "border-input hover:border-border-strong"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
