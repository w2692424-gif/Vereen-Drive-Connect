import { Container, Notice, Reveal } from "@/components/site/ui";
import { LogoStacked } from "@/components/brand/Logo";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  kicker,
  title,
  lead,
  sections,
}: {
  kicker: string;
  title: string;
  lead: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="border-b border-border pt-32 sm:pt-40">
        <Container className="pb-14">
          <Reveal>
            <LogoStacked />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label-mono mt-10 text-brand">{kicker}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p>
            <p className="label-mono mt-8 text-muted-foreground">
              Last updated: [PLACEHOLDER — effective date not yet supplied]
            </p>
          </Reveal>
        </Container>
      </header>

      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <p className="label-mono text-muted-foreground">Contents</p>
            <ol className="mt-5 space-y-3">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s-${i + 1}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {String(i + 1).padStart(2, "0")} — {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="lg:col-span-8 lg:col-start-5">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.heading} as="section">
                <section id={`s-${i + 1}`} className="scroll-mt-32">
                  <p className="label-mono text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold">{s.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {s.body.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <Notice title="Placeholders">
              Items marked [PLACEHOLDER] require business-specific details that have not been
              supplied. Nothing has been invented in their place. This document is provided for
              information and is not legal advice.
            </Notice>
          </div>
        </div>
      </Container>
    </>
  );
}
