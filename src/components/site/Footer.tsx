import { Link } from "@tanstack/react-router";
import { LogoHorizontal } from "@/components/brand/Logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";


const PAGES = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/audio-experience", label: "Audio Experience" },
  { to: "/vehicle-audio", label: "Vehicle Audio" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact & Assistance" },
];

const LEGAL = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoHorizontal />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent information, guidance and customer assistance for in-car audio,
              infotainment and connected listening. We help drivers understand their options —
              clearly, and without pressure.
            </p>
            <a
              href={PHONE_HREF}
              className="label-mono mt-8 inline-flex min-h-11 items-center gap-2 border border-border-strong px-5 py-3 text-foreground transition-colors hover:border-brand"
            >
              Call {PHONE_DISPLAY}
            </a>
            <p className="label-mono mt-6 text-muted-foreground">veerendriveconnect.com</p>

          </div>

          <nav aria-label="Site pages">
            <h2 className="label-mono text-brand">Explore</h2>
            <ul className="mt-5 space-y-3">
              {PAGES.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="label-mono text-brand">Legal</h2>
            <ul className="mt-5 space-y-3">
              {LEGAL.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Veeren Drive Connect is an independent information and assistance resource. We are not
            SiriusXM, and we are not an official, authorised or appointed representative, dealer or
            agent of SiriusXM or any vehicle manufacturer, audio brand or service provider. All
            product, brand and service names referenced are the property of their respective
            owners and are used for identification and informational purposes only.
          </p>
          <p className="label-mono mt-6 text-muted-foreground">
            © {new Date().getFullYear()} Veeren Drive Connect — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
