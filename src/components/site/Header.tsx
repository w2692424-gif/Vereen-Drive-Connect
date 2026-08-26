import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoCompact, LogoHorizontal } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";


export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/audio-experience", label: "Audio Experience" },
  { to: "/vehicle-audio", label: "Vehicle Audio" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="label-mono fixed left-4 top-4 z-[80] -translate-y-24 bg-brand px-4 py-2 text-brand-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "border-border bg-background/90 py-2 backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-background/80 to-transparent py-5",
        )}
      >
        <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link to="/" aria-label="Veeren Drive Connect — home" className="shrink-0">
            <LogoHorizontal compact={scrolled} className="hidden sm:flex" />
            <LogoCompact className="sm:hidden" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="label-mono group relative px-3 py-2 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="label-mono group relative hidden overflow-hidden border border-border-strong px-5 py-3 transition-colors hover:border-brand md:inline-flex"
            >
              <span className="relative z-10">Call {PHONE_DISPLAY}</span>
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-brand transition-transform duration-400 ease-out group-hover:translate-x-0"
              />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-border-strong text-foreground transition-colors hover:border-brand lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? {} : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-background pt-24 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10">
              <ul className="divide-y divide-border border-y border-border">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="flex items-baseline justify-between py-5 font-display text-2xl font-bold uppercase tracking-tight text-foreground data-[status=active]:text-brand"
                    >
                      {item.label}
                      <span className="label-mono text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className="label-mono mt-8 flex min-h-12 items-center justify-center bg-brand px-6 py-4 text-brand-foreground"
              >
                Call {PHONE_DISPLAY}
              </a>

              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Veeren Drive Connect provides independent information and assistance for in-car
                audio and connected listening. We are not affiliated with, and do not represent,
                any audio service provider.
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
