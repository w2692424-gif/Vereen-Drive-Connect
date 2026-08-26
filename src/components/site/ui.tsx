import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";


/* ---------------------------------------------------------------- reveal */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}

export function Stagger({
  children,
  className,
  step = 0.08,
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- typography */

export function Kicker({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <p className={cn("label-mono flex items-center gap-3 text-brand", className)}>
      {index ? <span className="text-muted-foreground">{index}</span> : null}
      <span className="h-px w-8 bg-brand" aria-hidden="true" />
      <span className="text-muted-foreground">{children}</span>
    </p>
  );
}

export function SectionHeading({
  kicker,
  index,
  title,
  intro,
  align = "left",
  className,
}: {
  kicker?: string | undefined;
  index?: string | undefined;
  title: ReactNode;
  intro?: ReactNode | undefined;
  align?: "left" | "center";
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center [&_p:first-child]:justify-center",
        className,
      )}
    >
      {kicker ? <Kicker index={index}>{kicker}</Kicker> : null}
      <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- buttons */

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-6 py-3.5 label-mono transition-all duration-300 min-h-11";

export function ActionLink({
  to,
  href,
  children,
  variant = "solid",
  className,
}: {
  to?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string | undefined;
}) {
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="relative z-10 h-px w-5 bg-current transition-all duration-300 group-hover:w-8"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-brand transition-transform duration-400 ease-out group-hover:translate-x-0"
      />
    </>
  );
  const cls = cn(base, variantClass(variant), className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

export function StickyCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call Veeren Drive Connect at ${PHONE_DISPLAY}`}
      className="label-mono fixed bottom-5 right-5 z-[60] inline-flex min-h-12 items-center gap-2.5 border border-brand bg-brand px-5 py-3.5 text-brand-foreground shadow-lg transition-transform duration-300 hover:scale-[1.03] sm:bottom-8 sm:right-8"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
      <span className="sm:hidden">Call now</span>
    </a>
  );
}


export function ActionButton({
  children,
  variant = "solid",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
}) {
  return (
    <button className={cn(base, variantClass(variant), className)} {...props}>
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-brand transition-transform duration-400 ease-out group-hover:translate-x-0 group-disabled:hidden"
      />
    </button>
  );
}

function variantClass(variant: "solid" | "outline" | "ghost") {
  if (variant === "solid")
    return "bg-foreground text-background hover:text-brand-foreground border border-foreground hover:border-brand";
  if (variant === "outline")
    return "border border-border-strong text-foreground hover:border-brand hover:text-brand-foreground";
  return "text-muted-foreground hover:text-foreground";
}

/* ----------------------------------------------------------------- frames */

export function TechPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("relative border border-border bg-surface/60 backdrop-blur-sm", className)}>
      <Corner className="left-0 top-0 border-l border-t" />
      <Corner className="right-0 top-0 border-r border-t" />
      <Corner className="bottom-0 left-0 border-b border-l" />
      <Corner className="bottom-0 right-0 border-b border-r" />
      {children}
    </div>
  );
}

function Corner({ className }: { className?: string | undefined }) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute h-3 w-3 border-brand", className)}
    />
  );
}

export function MetaRow({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={k} className="bg-background px-4 py-4">
          <dt className="label-mono text-muted-foreground">{k}</dt>
          <dd className="mt-2 font-display text-sm font-semibold">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------- scroll progress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.2 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand"
    />
  );
}

/* --------------------------------------------------------------- sections */

export function Section({
  children,
  className,
  id,
  container = true,
}: {
  children: ReactNode;
  className?: string | undefined;
  id?: string | undefined;
  container?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {container ? (
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------- page hero */

export function PageHero({
  kicker,
  index,
  title,
  lead,
  image,
  imageAlt,
  meta,
  children,
}: {
  kicker: string;
  index?: string | undefined;
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  meta?: [string, string][] | undefined;
  children?: ReactNode | undefined;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="relative isolate overflow-hidden border-b border-border pt-32 sm:pt-40">
      <motion.img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={reduce ? {} : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background"
      />
      <Container className="pb-16 sm:pb-24">
        <Reveal>
          <Kicker index={index}>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-[2.5rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </Reveal>
        {children ? <Reveal delay={0.24}>{children}</Reveal> : null}
        {meta ? (
          <Reveal delay={0.3} className="mt-12">
            <MetaRow items={meta} />
          </Reveal>
        ) : null}
      </Container>
    </header>
  );
}

/* -------------------------------------------------------------- notices */

export function Notice({
  children,
  title = "Transparency note",
}: {
  children: ReactNode;
  title?: string | undefined;
}) {
  return (
    <div className="border-l-2 border-brand bg-surface/70 px-5 py-4">
      <p className="label-mono text-brand">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
