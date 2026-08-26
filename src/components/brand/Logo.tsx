import { cn } from "@/lib/utils";

/**
 * Veeren Drive Connect brand mark.
 *
 * Abstract geometry: three nested arcs read simultaneously as a road curve,
 * a motion sweep and a broadcast/sound wave, resolving into a single
 * connection node. The negative space between the arcs forms an implied "V".
 */
export function VeerenMark({
  className,
  animated = false,
  title,
}: {
  className?: string;
  animated?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("h-8 w-8", className)}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M4.5 43.5C4.5 22.2385 22.2385 4.5 43.5 4.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
        opacity="0.95"
        style={
          animated
            ? {
                strokeDasharray: 120,
                animation: "veeren-draw 700ms cubic-bezier(0.16,1,0.3,1) forwards",
              }
            : undefined
        }
      />
      <path
        d="M18.5 43.5C18.5 29.9691 29.9691 18.5 43.5 18.5"
        stroke="var(--color-brand)"
        strokeWidth="4"
        strokeLinecap="square"
        style={
          animated
            ? {
                strokeDasharray: 120,
                animation: "veeren-draw 700ms 120ms cubic-bezier(0.16,1,0.3,1) both",
              }
            : undefined
        }
      />
      <path
        d="M31.5 43.5C31.5 36.596 36.596 31.5 43.5 31.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
        opacity="0.45"
        style={
          animated
            ? {
                strokeDasharray: 120,
                animation: "veeren-draw 700ms 240ms cubic-bezier(0.16,1,0.3,1) both",
              }
            : undefined
        }
      />
      <rect x="41" y="41" width="5" height="5" fill="var(--color-brand)" />
    </svg>
  );
}

/** Primary horizontal lockup: symbol + VEEREN DRIVE CONNECT. */
export function LogoHorizontal({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3 text-foreground", className)}>
      <VeerenMark className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold uppercase tracking-[0.14em]",
            compact ? "text-[0.95rem]" : "text-lg",
          )}
        >
          Veeren
        </span>
        <span
          className={cn(
            "label-mono mt-1 text-muted-foreground",
            compact ? "text-[0.55rem] tracking-[0.28em]" : "tracking-[0.3em]",
          )}
        >
          Drive Connect
        </span>
      </span>
    </span>
  );
}

/** Compact lockup: symbol + VEEREN only (mobile header, dense contexts). */
export function LogoCompact({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-foreground", className)}>
      <VeerenMark className="h-7 w-7" />
      <span className="font-display text-base font-extrabold uppercase tracking-[0.16em]">
        Veeren
      </span>
    </span>
  );
}

/** Stacked lockup used on legal and contact pages. */
export function LogoStacked({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col items-start gap-4 text-foreground", className)}>
      <VeerenMark className="h-12 w-12" />
      <span className="font-display text-2xl font-extrabold uppercase tracking-[0.16em]">
        Veeren <span className="text-muted-foreground">Drive Connect</span>
      </span>
    </span>
  );
}
