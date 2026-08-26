import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress, StickyCall } from "@/components/site/ui";
import { VeerenMark } from "@/components/brand/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <VeerenMark className="mx-auto h-12 w-12" />
        <h1 className="mt-8 font-display text-6xl font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 text-lg font-semibold text-foreground">This route doesn't exist</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for isn't part of Veeren Drive Connect.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="label-mono inline-flex items-center justify-center border border-border-strong px-6 py-3 text-foreground transition-colors hover:border-brand"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="label-mono inline-flex items-center justify-center bg-foreground px-5 py-3 text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="label-mono inline-flex items-center justify-center border border-border-strong px-5 py-3 text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Veeren Drive Connect" },
      { name: "theme-color", content: "#141416" },
      { property: "og:site_name", content: "Veeren Drive Connect" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },

    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=AW-18396893828",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18396893828');
        `,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Veeren Drive Connect",
          url: "https://veerendriveconnect.com",
          description:
            "Independent information, guidance and customer assistance for in-car audio, infotainment and connected listening.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function BootMotion() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 0 : 620);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="boot"
          aria-hidden="true"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-background"
        >
          <VeerenMark animated className="h-14 w-14" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  return (
    <QueryClientProvider client={queryClient}>
      <BootMotion />
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={pathname}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen"
        >
          {/* Required: nested routes render here. */}
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <StickyCall />
    </QueryClientProvider>
  );
}
